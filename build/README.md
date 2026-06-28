# MYRIAD-OMS Lab Build Scripts

These scripts provision a fresh ServiceNow instance with all data required for the Myriad Genetics OMS lab.

## Prerequisites

- A ServiceNow instance with the CSM/FSM OMS plugin active (`sn_ind_tmt_orm`)
- Admin credentials
- `curl` and `python3` available on your machine

## Build Order

Run in this sequence on a fresh instance:

| Script | What it does | Run as |
|---|---|---|
| `01_seed_orders.js` | Creates 41 Customer Orders with realistic descriptions and priority distribution | Background Script |
| `02_seed_tasks.js` | Creates Order Tasks linked to the story orders | Background Script |
| `03_seed_cases.js` | Creates the CS0001168 support case linked to ORD0002072 | Background Script |
| `04_seed_users.js` | Creates lab personas (Lydia Chen, Lisa Morgan, Sarah Rice, Julie Castillo, John Kim) | Background Script |
| `05_verify.js` | Verifies all required data is present and returns PASS/FAIL | Background Script |
| `update_descriptions.py` | Populates blank order descriptions via OneLLM (run if 01 left blanks) | Local Python |
| `fix_priorities.py` | Ensures correct priority distribution (3 Critical, rest High/Moderate) | Local Python |

## Quick provision (existing instance with base data)

If the instance already has the base order data (from the ORM plugin seed), run only:

```bash
python3 fix_priorities.py <instance> <user> <password>
python3 update_descriptions.py <instance> <user> <password>
```

## Manifest

See `manifest.json` for the full list of records this build creates and their expected field values. The verify script checks against this manifest.
