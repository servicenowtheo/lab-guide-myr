# MYRIAD-OMS

**From Test Order to Clinical Insight — ServiceNow as Your Oncology Order Management System**

---

## Where Do These Orders Come From?

> **Before you start:** The orders you will work in this lab did not appear from nowhere. They were submitted by oncologists at **Huntsman Cancer Institute** in Salt Lake City using **Epic** — the electronic health record system used by the physicians. When a doctor places a genomic test order in Epic, it is automatically transmitted to Myriad Genetics' ServiceNow OMS via a **FHIR R4 integration**. ServiceNow receives the message, creates a Customer Order record, and routes it into the team's task queues — all without manual entry.
>
> The four key orders in this lab (ORD0002157, ORD0002156, ORD0002154, ORD0002116) represent orders that arrived this morning from that Epic integration. **Your job is to work them.**
>
> For a deeper look at how the Epic → ServiceNow integration works, see [Epic Integration Background](epic-integration.md).

---

## Introduction and Objectives

Genomic diagnostics labs operate at the intersection of clinical urgency, insurance complexity, and precision logistics. A single order for a hereditary cancer panel or minimal residual disease test touches a dozen teams — providers, intake specialists, insurance verifiers, lab technicians, and support agents — before a result ever reaches the oncologist. Today, most of that handoff happens through fax queues, email threads, and disconnected systems.

In this lab, you will experience ServiceNow as the operational backbone for Myriad Genetics' order management workflows. You will walk through the full order lifecycle — from a physician submitting a genetic test order through Epic, to intake processing, insurance verification, sample logistics, exception handling, and executive analytics — all within a single connected platform.

**By the end of this lab, you will be able to:**

1. Navigate the Order Management workspace and understand how new orders flow into the intake pipeline.
2. Use the order oversight dashboard to identify stalled orders, attention flags, and pipeline bottlenecks.
3. Work through an order's task queue to resolve intake exceptions and move an order forward.
4. Manage provider and patient inquiries as order support cases within the CSM workspace.
5. Explore AI-powered analytics dashboards to understand order volume, turnaround, and team performance.
6. Trace a complete order lifecycle — from submission to results — in a single end-to-end challenge scenario.

---

## Lab Personas

This lab uses five personas — one per exercise. You will impersonate each user as instructed.

> **Impersonation:** Select your user avatar (top-right corner) → **Impersonate another user** → search by name → **Impersonate user**. To end, return to the same menu → **End impersonation**.
>
> **Credentials:** Log in as `admin` with the password provided by your facilitator. All impersonation is done from the admin session — you do not need separate logins for each persona.

| Persona | Role | What You'll Do |
|---------|------|----------------|
| **Dr. Lydia Chen** | Ordering Oncologist — Huntsman Cancer Institute | Submit a new hereditary cancer order for patient Rachel Kim |
| **Lisa Morgan** | Order Oversight Manager | Review the order pipeline, identify attention flags, investigate Dorothy Martinez's order history |
| **Sarah Rice** | Order Intake Specialist | Work through the task queue for Patricia Williams' stalled EndoPredict order |
| **Julie Castillo** | Order Support Services | Manage open CSM cases tied to ORD0002156 — consent, insurance appeals, sample logistics |
| **John Kim** | Supervisor / Analytics Lead | Review operational dashboards, order volume trends, and team performance metrics |

---

## Getting Started

Your lab instance is pre-loaded with Myriad Genetics patient data, orders, tasks, and cases. No setup is required.

1. Open your browser and navigate to your assigned lab instance URL (provided by your facilitator).
2. Log in as **admin** with the credentials provided.
3. After login, navigate to the **CSM/FSM Configurable Workspace** by appending `/now/cwf/agent/home` to your instance URL — for example: `https://your-instance.service-now.com/now/cwf/agent/home`
4. Confirm you see the Workspace home page — a dark sidebar on the left, "Hello, System Administrator" greeting, and the Myriad Genetics branding.
5. You're ready to go — jump to Exercise 1!

---

## Lab Agenda — 90 Minutes

| Time | Section | Description |
|------|---------|-------------|
| 0:00 – 0:10 | **Welcome & Context** | Facilitator walks through the Myriad Genetics scenario and the OMS challenge. |
| 0:10 – 0:20 | **Exercise 1** | Submit a new genetic test order as Dr. Lydia Chen. |
| 0:20 – 0:35 | **Exercise 2** | Order pipeline oversight — Lisa Morgan's view of the queue. |
| 0:35 – 0:50 | **Exercise 3** | Order intake task resolution — Sarah Rice works the stalled order. |
| 0:50 – 1:05 | **Exercise 4** | Order support services — Julie Castillo handles CSM cases. |
| 1:05 – 1:20 | **Exercise 5** | Analytics & AI insights — John Kim reviews dashboards. |
| 1:20 – 1:30 | **Challenge** | End-to-end: trace a complete order lifecycle from submission to results. |

> **Need help?** Raise your hand — a proctor will come to you. Don't spend more than 2 minutes stuck on any single step.

---

## Story Context

All exercises center on real patients from Huntsman Cancer Institute in Salt Lake City, Utah. The core story follows **Dorothy Martinez** — a 47-year-old AML patient whose genomic journey spans three active orders and two upcoming appointments. Supporting characters include **Rachel Kim** (hereditary cancer risk panel), **Patricia Williams** (breast cancer recurrence risk — the order your team will troubleshoot in Exercise 3), and seven additional patients who populate the analytics dashboards in Exercise 5.

| Order | Patient | Test | Status |
|-------|---------|------|--------|
| ORD0002157 | Rachel Kim | MyRisk 25-Gene Hereditary Cancer Panel | New — just submitted |
| ORD0002154 | Dorothy Martinez | MRD Baseline — AML | In lab processing |
| ORD0002155 | Dorothy Martinez | Precise Tumor 500 | Sample received |
| ORD0002156 | Patricia Williams | EndoPredict Dx | Stalled — 6 open exceptions |
| ORD0002150 | Linda Patel | MyRisk 25-Gene | Awaiting information |
| ORD0002113 | Margaret Torres | MRD Monitoring T1 | Clinical review |
| ORD0002116 | Noah Gillen | MRD Baseline — NHL | Lab processing |

---
