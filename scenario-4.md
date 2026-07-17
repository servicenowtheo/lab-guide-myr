# Scenario 4: Managing the Patient Experience

## Exercise 1: Reviewing the Patient's History

**Persona:** Sam Anderson — Myriad Operations Team

**Objective:** Review the patient record to understand how ServiceNow brings together patient demographics, insurance details, clinical context, orders, specimens, tasks, interactions, and related care activity into a single operational view.

***

#### Scenario

After placing and managing several orders for Dorothy Martinez, you now want to step back and review Dorothy’s full patient profile.

Rather than looking at one order, one specimen, or one task at a time, the patient record gives your team a broader view of the patient’s relationship with Myriad. This helps operations teams understand what has been ordered, what work is still in progress, what clinical or insurance context may be relevant, and what recent interactions have occurred.

***

1. Open the patient record for **Dorothy Martinez**.
2. At the top of the screen, notice the patient name and the related tabs available across the record.
3. The **patient header** gives you quick confirmation that you are working on the correct patient before reviewing orders, specimens, or support activity.
4. On the left side of the page, review the **patient profile card**. This section includes key demographic and contact information, such as:

* Patient name
* Date of birth and age
* Work phone
* Home phone
* Email address
* Home address
* Language preference
* Race / ethnicity, if captured

This information helps teams confirm patient identity, contact the patient when needed, and support outreach or follow-up workflows.

5. Below the patient profile, review the **Insurance Details** section.This section includes information such as:

* Member number
* Group number
* Effective from / effective to dates
* Subscriber
* RxBIN, RxPCN, and RxGroup, if applicable

This gives teams quick access to coverage information that may be needed for authorization, billing, benefit investigation, or follow-up with the provider.

6. Review the **Household Members** section. This area can be used to track related individuals or responsible parties when relevant, such as caregivers, parents, guardians, spouses, or other household relationships. This is especially useful when communication, consent, or responsibility may involve someone other than the patient.
7. In the center of the page, review the dashboard-style information available on the patient overview. Notice the summary cards for:

* **Conditions**
* **Medications**
* **Allergies**
* **Immunizations**

These cards provide quick clinical context that may be relevant when reviewing orders, patient history, or operational follow-up, and can be configured to display what matters most to your teams.

8. Review the dashboard widgets for:

* **Cases Overview**
* **Claims Overview**
* **Recent Interactions**

These areas help teams understand recent support activity and operational history related to the patient. For example, the **Recent Interactions** list may show prior calls, web chats, or provider/patient inquiries, such as questions about turnaround time or upcoming visits.

9. Continue reviewing the remaining dashboard sections, including:

* **Appointments**
* **Enrolled Programs**
* **Prescriptions**

These sections provide additional patient context and can be configured based on the information most relevant to your organization’s workflows.

10. Across the top of the patient record, review the available related tabs.

These tabs organize the patient’s related records, including:

* **Customer Orders** — all orders associated with the patient.
* **Order Line Items** — the specific tests ordered for the patient.
* **Order Tasks** — fulfillment tasks related to the patient’s orders.
* **Specimens** — specimens collected or scheduled for the patient.
* **MRD Monitoring Series** — longitudinal monitoring series associated with the patient.
* **Member Plans** — insurance or coverage-related records.
* **Appointments** — scheduled patient appointments.
* **Pre-authorization Requests** — authorization activity tied to the patient.
* **Conditions** — relevant clinical conditions.
* **Procedures** — procedures associated with the patient.
* **Addresses** — patient address information.
* **Household Members** — related individuals or responsible parties.
* **More** — additional related lists configured for the patient view.

### What to Notice

The patient record provides a single, consolidated view across clinical, operational, financial, and fulfillment information.

Rather than navigating separately across orders, tasks, specimens, interactions, and authorization records, teams can begin from the patient and access the full context needed to manage the patient’s testing journey.

{% hint style="info" %}
### Information: Configurable Patient 360 View

The patient view is configurable and can be tailored to the needs of different teams.

You can decide which fields, related lists, dashboards, metrics, and actions appear on the patient record. This allows different users to access the information most relevant to their role while maintaining a shared, connected view of the patient across the platform.
{% endhint %}

11. At the top right of the patient record, click **Myriad Patient Brief**.
12. This launches a summarization skill that generates a concise overview of the patient using information from the patient record and related activity.

#### What to Notice

The patient brief can help users quickly understand key patient context without manually reviewing every related tab or record. This is especially useful when preparing for follow-up, reviewing open work, or getting up to speed on a patient’s history. The **Myriad Patient Brief** uses a **Now Assist Skill** to generate a concise, AI-powered summary of the patient's current state.

Notice that the summary automatically consolidates information from across the patient's record, including:

* Critical alerts and escalations requiring attention.
* Active insurance plans and upcoming expirations.
* Pre-authorization requests and approval status.
* A high-level patient snapshot.
* Active customer orders.
* Current specimen status and laboratory results.
* MRD monitoring information and longitudinal testing activity.

This allows users to quickly understand the patient's current situation and identify priority work without manually navigating through multiple records.

{% hint style="info" %}
#### &#x20;Information: Now Assist Skills

**Now Assist Skills** are configurable AI capabilities that help users work more efficiently by automatically analyzing platform data and generating intelligent outputs directly within the flow of work.

Skills can be embedded throughout the platform to summarize information, answer questions, draft content, recommend next steps, or automate repetitive tasks.

Out of the box examples include:

* **Record Summarization** – Generate concise summaries of patients, orders, cases, or other records.
* **Activity Summarization** – Summarize lengthy activity streams, work notes, comments, or conversations.
* **Knowledge Generation** – Draft knowledge articles from resolved work or existing documentation.
* **Resolution Notes** – Automatically generate closure notes from completed work.
* **Email Generation** – Draft contextual emails to providers, patients, or internal teams.
* **Suggested Actions** – Recommend the next best action based on the current record and organizational processes.

Because Now Assist Skills are configurable, organizations can determine **where** they appear, **which data sources** they use, and **what type of information** they generate. This enables AI experiences that align with each organization's workflows while keeping users within a single platform. You can even create custom skills like this one.
{% endhint %}

## Exercise 2: Manage an Expiring Pre-Authorization

**Persona:** Sam Anderson

**Objective:** Review existing pre-authorization requests, create a renewal request, and explore how configurable workflows help proactively manage authorization renewals to prevent delays in laboratory testing and patient care.

***

#### Scenario

While reviewing **Dorothy Martinez's Myriad Patient Brief**, you notice that one of her pre-authorizations is approaching its expiration date. If the authorization expires before future testing is performed, it could delay specimen processing, result reporting, or ongoing patient monitoring.

Rather than waiting for the authorization to expire and disrupt the testing workflow, your team proactively begins the renewal process. In this exercise, you'll review Dorothy's existing pre-authorizations, create a renewal request, and see how ServiceNow can automatically orchestrate follow-up activities to help ensure authorizations remain current and testing continues without interruption.

***

1. From the patient record, select the **Pre-authorization Requests** tab.
2. Review the existing authorization records associated with Dorothy Martinez.
3. Open one of the existing pre-authorization records.

#### What to Notice

Review the information captured on the record.

This information provides your team with the context needed to manage the authorization lifecycle and communicate with providers and payers.

1. Close the record and navigate **Pre-authorization Requests** tab.
2. Select **New**.
3. Fill in the following fields and hit **Save.**

| Field                       | Example Value                                                          | Purpose                                                                                                     |
| --------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Primary Pre-auth Number** | PA-2026-90001                                                          | The primary authorization number assigned by the payer. This uniquely identifies the authorization request. |
| **Status**                  | **Draft**                                                              | Indicates the authorization has been created and is ready to begin your organization's approval workflow.   |
| **Notes**                   | _Renewal request submitted prior to current authorization expiration._ | Documents any additional context for internal teams reviewing the request.                                  |
| **Valid From**              | Today's Date                                                           | Indicates when the authorization becomes effective once approved.                                           |
| **Valid Until**             | 90 days from today (or appropriate date)                               | Defines when the authorization expires so renewal workflows can be triggered proactively.                   |

#### What to Notice

The new pre-authorization request has been created and is now ready to begin your organization's authorization workflow.

Depending on your configured business process, saving the request may automatically:

* Notify the ordering provider that updated authorization information is needed.
* Create follow-up tasks for payer or authorization specialists.
* Route the request for internal review.
* Generate reminder notifications before the authorization expires.
* Track authorization status throughout its lifecycle.
* Associate the authorization with related orders and patient records.

{% hint style="info" %}
#### Information: Configurable Pre-Authorization Workflows

Pre-authorization management is fully configurable and can be tailored to your  operational requirements.

You can define workflows that automatically initiate when a pre-authorization is created, updated, approved, denied, or approaching expiration.

These workflows can include:

* Provider, payer, or patient notifications.
* Task creation and assignment.
* Approval or review processes.
* Escalations for expiring authorizations.
* Integration with payer systems or third-party authorization platforms.
* Status updates to related orders or laboratory workflows.

By managing pre-authorizations alongside patient records and laboratory orders, ServiceNow provides a centralized view of both clinical and operational information, helping reduce delays while keeping fulfillment teams informed throughout the testing lifecycle.
{% endhint %}

####

## ✅ Scenario 3 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 3!**
{% endhint %}
