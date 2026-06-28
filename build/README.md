# MYRIAD-OMS Lab Build Scripts

These scripts provision a fresh ServiceNow instance with all data required for the Myriad Genetics OMS lab.

## Prerequisites

- A ServiceNow instance with the CSM/FSM OMS plugin active (`sn_ind_tmt_orm`)
- Admin credentials
- `curl` and `python3` available on your machine

## Important: Auto-numbering caveat

`sn_ind_tmt_orm_order` uses a before-insert business rule to auto-generate order numbers. On instances where the ORM plugin has already seeded base data (standard for CloudLabs), `01_seed_orders.js` operates in **update mode** — it finds records by their existing number and updates field values. On a completely blank instance with no prior ORM seed, the script inserts new records and the auto-generated numbers may not match the hardcoded ORD values. In that scenario, run `01_seed_orders.js` first, then query the actual assigned numbers and update `manifest.json` and the exercise files accordingly.

**For all CloudLabs-provisioned instances, use the quick provision path below — the plugin pre-seeds ORD numbers.**

## Build Order

Run in this sequence on a fresh instance:

| Script | What it does | Run as |
|---|---|---|
| `01_seed_orders.js` | Creates/updates 41 Customer Orders with correct descriptions and priority distribution | Background Script |
| `02_seed_tasks.js` | Creates/updates key Order Tasks (OMTASK000001092 and supporting tasks for Exercise 3) | Background Script |
| `04_seed_users.js` | Creates lab personas (Lydia Chen, Lisa Morgan, Sarah Rice, Julie Castillo, John Kim) | Background Script |
| `03_seed_cases.js` | Creates CS0001168 support case linked to ORD0002072 — **run after 04** (needs Julie Castillo) | Background Script |
| `05_verify.js` | Verifies all required data is present and returns PASS/FAIL | Background Script |
| `update_descriptions.py` | Populates blank order descriptions via OneLLM (run if 01 left blanks) | Local Python |
| `fix_priorities.py` | Ensures correct priority distribution (3 Critical, rest High/Moderate) | Local Python |

## Quick provision (existing CloudLabs instance with ORM plugin data)

If the instance already has the base order data from the ORM plugin seed, run only:

```bash
# Set your OneLLM API key first
export ONELLM_API_KEY=<your-key>

python3 fix_priorities.py <instance_hostname> <user> <password>
python3 update_descriptions.py <instance_hostname> <user> <password>
```

Then run `04_seed_users.js`, `02_seed_tasks.js`, `03_seed_cases.js`, and `05_verify.js` as Background Scripts on the instance.

## Manifest

See `manifest.json` for the full list of records this build creates and their expected field values. The verify script checks against this manifest.
