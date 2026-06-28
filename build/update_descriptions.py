#!/usr/bin/env python3
"""
update_descriptions.py — MYRIAD-OMS lab build script
Populates blank short_description fields on sn_ind_tmt_orm_order records
using OneLLM (ServiceNow's Claude proxy) to generate realistic Myriad
Genetics test descriptions.

Usage:
  python3 update_descriptions.py <instance_hostname> <username> <password>

Requires: OneLLM API key in env var ONELLM_API_KEY, or edit the constant below.
"""
import sys
import json
import urllib.request
import base64
import os

ONELLM_URL = "https://apicid-dev.servicenow.com/v4/onellm/models/anthropic?model=claude-opus-4-6"
ONELLM_KEY = os.environ.get("ONELLM_API_KEY", "rHnVExpEAxfXVcen")

DESCRIPTION_PROMPT = """You are generating realistic short_description values for a Myriad Genetics order management system (OMS).
Each description is a lab test order short description — concise (under 80 chars), clinically specific, uses real Myriad Genetics product names.

Myriad Genetics products: MyRisk 25-Gene Hereditary Cancer Panel, MyRisk Limited — BRCA1/2,
EndoPredict, Precise Tumor 500, MRD Baseline, MRD Monitoring T1/T2/T3, Prolaris, BRCAplus,
GeneSight Psychotropic, MyRisk Limited — Lynch Syndrome, HRD/BRCAness, Hereditary Prostate Risk Panel.

Generate exactly {count} unique, realistic short descriptions. Return ONLY a JSON array of {count} strings, nothing else."""

def call_onellm(prompt):
    data = json.dumps({
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 2000
    }).encode()
    req = urllib.request.Request(
        ONELLM_URL,
        data=data,
        headers={"X-API-Key": ONELLM_KEY, "Content-Type": "application/json"},
        method="POST"
    )
    with urllib.request.urlopen(req) as r:
        result = json.load(r)
    return json.loads(result["content"][0]["text"])

def main():
    if len(sys.argv) != 4:
        print("Usage: python3 update_descriptions.py <host> <user> <password>")
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

    # Find blank orders
    url = f"{base}/api/now/table/{table}?sysparm_limit=100&sysparm_fields=sys_id,number,short_description"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as r:
        rows = json.load(r).get("result", [])

    blank = [r for r in rows if not r.get("short_description", "").strip()]
    print(f"Found {len(blank)} orders with blank descriptions")

    if not blank:
        print("VERDICT: PASS — no blank descriptions")
        return

    # Generate descriptions
    print(f"Calling OneLLM to generate {len(blank)} descriptions...")
    prompt = DESCRIPTION_PROMPT.format(count=len(blank))
    descriptions = call_onellm(prompt)

    if len(descriptions) != len(blank):
        print(f"ERROR: expected {len(blank)} descriptions, got {len(descriptions)}")
        sys.exit(1)

    # Apply updates
    ok, fail = 0, 0
    for row, desc in zip(blank, descriptions):
        sys_id = row["sys_id"]
        num = row["number"]
        url2 = f"{base}/api/now/table/{table}/{sys_id}"
        data = json.dumps({"short_description": desc}).encode()
        req2 = urllib.request.Request(url2, data=data, headers=headers, method="PATCH")
        try:
            with urllib.request.urlopen(req2) as r:
                r.read()
            print(f"  OK: {num} | {desc[:60]}")
            ok += 1
        except Exception as e:
            print(f"  FAIL: {num} | {e}")
            fail += 1

    print(f"\nSummary: {ok} OK, {fail} failed")
    verdict = "PASS" if fail == 0 else "FAIL"
    print(f"VERDICT: {verdict}")
    sys.exit(0 if verdict == "PASS" else 1)

if __name__ == "__main__":
    main()
