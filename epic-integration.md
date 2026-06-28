## How Orders Enter the System — Epic Integration Background

> **For participants:** This page explains where the orders you'll work in this lab came from. You don't need to configure anything — this is background context to make the scenario realistic.

---

### The Real-World Flow

Myriad Genetics is a laboratory. Their customers are oncologists and genetic counselors at hospitals and cancer centers — people who use **Epic** (the dominant electronic health record system in US oncology) to manage their patients.

When Dr. Lydia Chen at Huntsman Cancer Institute orders a MyRisk 25-Gene Hereditary Cancer Panel for a patient, she doesn't log into ServiceNow. She places the order in **Epic** — just as she would any other lab order.

Here's how that order gets into Myriad's ServiceNow OMS automatically:

```
Dr. Lydia Chen places order in Epic (Huntsman Cancer Institute EMR)
        ↓
Epic emits a FHIR R4 ServiceRequest resource
        ↓
Myriad's ServiceNow IntegrationHub receives the FHIR message
        ↓
A Flow Designer flow maps the payload to sn_ind_tmt_orm_order fields
        ↓
A new Customer Order record is created (e.g., ORD0002157)
        ↓
Order Tasks are auto-generated for intake, eligibility, and logistics
        ↓
As the order progresses, status updates flow back to Epic
```

This happens in seconds, with no manual intervention from either side.

---

### What Is FHIR?

**FHIR** (Fast Healthcare Interoperability Resources, pronounced "fire") is the modern standard for exchanging clinical data between health systems. Epic, Cerner, and most major EMR vendors natively emit FHIR R4 messages for lab orders.

A simplified example of what the Epic-generated FHIR message for ORD0002157 looked like:

```json
{
  "resourceType": "ServiceRequest",
  "id": "SR-EPIC-HCI-88041",
  "status": "active",
  "intent": "order",
  "priority": "urgent",
  "code": {
    "text": "MyRisk 25-Gene Hereditary Cancer Panel"
  },
  "subject": {
    "display": "Rachel Kim"
  },
  "requester": {
    "display": "Dr. Lydia Chen, MD — Oncology"
  },
  "reasonCode": [
    { "text": "BRCA1 family history — maternal lineage, two first-degree relatives" }
  ],
  "performer": [
    { "display": "Myriad Genetics Laboratory" }
  ]
}
```

ServiceNow receives this, maps `code.text` → `short_description`, `priority: urgent` → `2-High`, and creates the order record you'll open in Exercise 1.

---

### The Four Story Orders in This Lab

These four orders arrived via Epic integration from Huntsman Cancer Institute this morning. They are pre-loaded in the system — your job in Exercises 1–5 is to work them:

| Order | Patient | Test | Epic Priority | Who works it |
|---|---|---|---|---|
| **ORD0002157** | Rachel Kim | MyRisk 25-Gene — BRCA1 family history | Urgent | Exercise 1 — Dr. Lydia Chen's perspective |
| **ORD0002156** | Patricia Williams | EndoPredict Dx — Breast cancer recurrence risk stratification | Urgent | Exercises 2, 3, 4, Challenge |
| **ORD0002154** | Dorothy Martinez | MRD Baseline — AML FLT3-ITD+ post-induction | STAT | Background — visible in Analytics (Ex 5) |
| **ORD0002116** | Noah Gillen | MRD Baseline — DLBCL NHL pre-treatment ctDNA | STAT | Background — visible in Analytics (Ex 5) |

The remaining 37 orders in the queue are from other referring facilities and represent the realistic background workload of a busy genomics lab.

---

### In Production vs. In This Lab

| In production | In this lab |
|---|---|
| Orders arrive continuously from Epic 24/7 | Orders are pre-loaded before the lab session |
| ServiceNow auto-creates tasks via Flow Designer | Tasks are pre-generated |
| Status updates push back to Epic in real time | No Epic connection — this is a sandboxed lab instance |
| Myriad staff see a live, changing queue | You see a fixed snapshot of the queue |

The workflows, screens, and tools you use in this lab are identical to what Myriad's operations team uses in their production instance.

---

### Why ServiceNow?

Epic is excellent at managing the **clinical record** — diagnosis, treatment, prescriptions, imaging. It is not designed to manage the **operational back-office** of a lab — task routing, SLA tracking, case management, and cross-functional coordination.

ServiceNow fills that gap. It receives the order from Epic, routes it through intake specialists, insurance verifiers, lab logistics coordinators, and support agents — then feeds status back to Epic so the ordering physician always knows where their patient's test stands.

That's the system you're about to operate.
