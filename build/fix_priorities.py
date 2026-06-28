#!/usr/bin/env python3
"""
fix_priorities.py — MYRIAD-OMS lab build script
Ensures exactly 3 Priority 1-Critical orders (ORD0002156, ORD0002154, ORD0002116).
All other Critical orders are downgraded to 2-High.

Usage:
  python3 fix_priorities.py <instance_hostname> <username> <password>

Example:
  python3 fix_priorities.py ths-jun-1446-instructor-0001.lab.service-now.com admin mypassword
"""
import sys
import json
import urllib.request
import base64

def main():
    if len(sys.argv) != 4:
        print("Usage: python3 fix_priorities.py <host> <user> <password>")
        sys.exit(1)

    host, user, password = sys.argv[1], sys.argv[2], sys.argv[3]
    base = f"https://{host}"
    creds = base64.b64encode(f"{user}:{password}".encode()).decode()
    headers = {
        "Authorization": f"Basic {creds}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    table = "sn_ind_tmt_orm_order"

    # These three orders MUST remain Priority 1-Critical
    KEEP_CRITICAL = {"ORD0002156", "ORD0002154", "ORD0002116"}

    def get(url):
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as r:
            return json.load(r)

    def patch(sys_id, body):
        url = f"{base}/api/now/table/{table}/{sys_id}"
        data = json.dumps(body).encode()
        req = urllib.request.Request(url, data=data, headers=headers, method="PATCH")
        with urllib.request.urlopen(req) as r:
            r.read()

    # Fetch all orders
    url = f"{base}/api/now/table/{table}?sysparm_limit=100&sysparm_fields=sys_id,number,priority"
    rows = get(url).get("result", [])
    print(f"Found {len(rows)} orders")

    downgraded, skipped, already_ok = [], [], []

    for row in rows:
        num = row["number"]
        pri = row.get("priority", "")
        sys_id = row["sys_id"]

        if pri != "1":
            already_ok.append(num)
            continue

        if num in KEEP_CRITICAL:
            skipped.append(num)
            print(f"  KEEP Critical: {num}")
        else:
            patch(sys_id, {"priority": "2"})
            downgraded.append(num)
            print(f"  DOWNGRADED:    {num}  (1-Critical → 2-High)")

    # Verify the 3 story orders are Critical
    for num in KEEP_CRITICAL:
        url = f"{base}/api/now/table/{table}?sysparm_query=number={num}&sysparm_fields=number,priority"
        result = get(url).get("result", [])
        if result:
            p = result[0].get("priority", "?")
            status = "✓" if p == "1" else "✗ WRONG"
            print(f"  VERIFY {num}: priority={p} {status}")
        else:
            print(f"  VERIFY {num}: NOT FOUND")

    # Final count
    url = f"{base}/api/now/table/{table}?sysparm_limit=100&sysparm_fields=number,priority"
    rows2 = get(url).get("result", [])
    crit = [r["number"] for r in rows2 if r.get("priority") == "1"]
    print(f"\nSummary:")
    print(f"  Downgraded: {len(downgraded)} orders")
    print(f"  Kept Critical: {skipped}")
    print(f"  Final Critical count: {len(crit)} ({crit})")
    verdict = "PASS" if set(crit) == KEEP_CRITICAL else "FAIL"
    print(f"\nVERDICT: {verdict}")
    sys.exit(0 if verdict == "PASS" else 1)

if __name__ == "__main__":
    main()
