## Challenge: End-to-End Order Lifecycle

**Duration: ~10 minutes**
**All personas used — work as admin, impersonating as needed**

> **Objective:** Trace ORD0002154 — Dorothy Martinez's MRD Baseline AML order — from its original submission through every operational touchpoint to its current state in lab processing. This challenge ties together everything from Exercises 1–5 into a single connected lifecycle view.

---

### The Challenge

ORD0002154 is Dorothy Martinez's anchor order — the MRD Baseline that starts her 12-month monitoring series. Unlike the stalled orders you reviewed in Exercises 2–4, this one is *working*. The specimen is in the lab, sequencing is in progress, and Dr. Chen has a results review appointment booked for July 10. Your challenge: reconstruct the full lifecycle of this order using what you've learned.

---

### Step 1 — Navigate to ORD0002154

1. Log in as **admin** (no impersonation needed — you're taking the supervisor's view).
2. Navigate to **Order Management > Orders**.
3. Search for **ORD0002154**.
4. Open the order record.

![ORD0002154 Dorothy Martinez — MRD Baseline AML order showing lab processing status](.gitbook/assets/MYRIAD-OMS/challenge-step1-ord0002154.png)

---

### Step 2 — Reconstruct the Timeline

Using the order record, answer the following questions:

| Question | Where to find it |
|----------|-----------------|
| When was the order submitted? | **Opened** field on the order header |
| Who submitted it and from which facility? | **Ordering Provider** and **Facility** fields |
| How did the specimen get to the lab? | **Collection Method** field + Appointments tab on the Patient 360 record |
| What is the insurance status? | **Eligibility Status** and **Insurance Member ID** fields |
| What tasks exist on this order? | **Order Tasks** related list |
| When are results expected? | Appointments tab on Patient 360 — July 10, 2026 results review |

---

### Step 3 — Navigate Dorothy's Patient 360

1. On ORD0002154, select the **Patient** field link — **Dorothy Martinez**.
2. On her Patient 360 record, locate:
   - **All three active orders** (ORD0002149, ORD0002154, ORD0002155) — visible in the related list or appointments tab
   - **The blood draw appointment** on March 22, 2026 — this is when the sample for ORD0002154 was collected
   - **The upcoming results review** on July 10, 2026 with Dr. Chen

3. Note the **MRD Monitoring series** link on ORD0002154 — if the custom schema is loaded, the MRD-AML-DMZ-2024-001 series record connects this baseline to her future T1, T2, and T3 timepoints.

---

### Step 4 — Compare: Healthy Order vs. Stalled Order

Return to the Orders list. Open ORD0002156 (Patricia Williams) alongside ORD0002154 (Dorothy Martinez) and compare:

| Dimension | ORD0002154 (Dorothy) | ORD0002156 (Patricia) |
|-----------|---------------------|-----------------------|
| Submission method | Portal | Portal |
| Days open | ~24 days | ~40 days |
| Current status | Lab Processing | New |
| Eligibility | Verified | Pending |
| Open tasks | Progressing | 23 open tasks |
| CSM cases | 0 | 6 open cases |
| Needs attention | No | Yes |
| Collection type | Blood draw | Tissue biopsy |

> **The observation:** Both orders were submitted via portal. The primary difference is specimen type. Blood draw orders are operationally simpler — collection is standardized, eligibility verification is faster, and there are fewer documentation dependencies. Tissue biopsy orders require pathology coordination, fixation time tracking, and higher prior authorization scrutiny. ORD0002156's 6 exceptions are structurally typical for a first-time biopsy order from a new provider.

---

### Step 5 — ✅ Challenge Complete

You have successfully:

- Traced ORD0002154 from submission through lab processing using only the order record and Patient 360.
- Reconstructed the key operational events: portal submission → blood draw → specimen receipt → lab processing → results review scheduled.
- Contrasted a healthy order lifecycle against a stalled one — and identified the structural drivers of the difference (specimen type, documentation completeness, eligibility turnaround).

---

### Bonus: MRD Series Forward View

If time permits, navigate to the MRD Series record for Dorothy Martinez and answer:

1. When is her **T1** monitoring timepoint due? *(October 1, 2026)*
2. What event triggers the T1 order? *(The T0 results review on July 10 — if MRD is negative, Dr. Chen confirms the monitoring schedule and the T1 order is placed)*
3. How many total orders will Dorothy's AML monitoring series generate over 12 months? *(4 — Baseline + T1 + T2 + T3)*

> **The platform value:** ServiceNow doesn't just manage the current order — it holds the longitudinal relationship. The MRD series record is the operational contract between Myriad and the Huntsman oncology team for the next 12 months of Dorothy's care.

---

### 🏆 Congratulations

You've completed the Myriad Genetics OMS Lab. You've experienced ServiceNow as:

- A **provider portal** for order submission and status visibility
- A **pipeline oversight workspace** for queue management and attention flagging
- An **intake operations platform** for task-level exception resolution
- A **customer service layer** for provider communication and insurance escalation management
- An **analytics engine** for operational visibility and supervisory review
- A **longitudinal patient management platform** through MRD series tracking

The operational patterns you've seen — order intake exceptions, biopsy vs. blood draw complexity, insurance prior auth, specimen logistics — are not unique to Myriad. They are the universal challenges of any diagnostic lab, specialty pharmacy, or healthcare services organization processing high-complexity, high-value orders at scale.

---
