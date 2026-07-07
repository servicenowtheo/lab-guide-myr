# Scenario 1: Submit a New MRD Process Order

### **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist&#x20;

**Duration:** \~10 minutes&#x20;

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order MRD testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

## Step 1: Open the Myriad Provider Portal

Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

* A **top navigation bar** with options for **Dashboard**, **Submit Order**, **My Orders**, and **Specimen Tracking**
* A **welcome banner** with a **New Test Order** button
* Dashboard tiles displaying metrics such as **Total Orders**, **Specimens**, **Patients**, and **MRD Monitoring**
* A **Browse Tests** section featuring available Myriad products that can be ordered
* A **Recent Orders** section at the bottom of the page

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png>)

> **Note:** This is your Myriad Provider Portal, the streamlined experience that you designed for healthcare providers to order tests, track specimens, and manage patients. Behind the scenes, very order submitted through the portal automatically creates a corresponding order in ServiceNow for your operations team to review and fulfill.&#x20;

***

## Step 2: Place the Order

1. Select **+Submit Order in** the top navigation.
2. Select your patient, **Dorothy Martinez** from the patient dropdown.&#x20;
3. Select **Jennifer Park** from the ordering provider dropdown.
4. Select a **30-day** cadence for the **MRD Monitoring** test.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.12.47 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** The tests displayed in the Provider Portal represent your organization's product offerings. These offerings are managed through the ServiceNow Product Catalog, allowing you to control which tests providers can order. When a provider submits an order, a fulfillment workflow is automatically initiated in ServiceNow.
{% endhint %}

5. Click **Submit Order** and wait for the confirmation screen to load. In the confirmation message, select the **order hyperlink (ORDXXXXXXX).**&#x20;

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.16.53 PM.png" alt=""><figcaption></figcaption></figure>

#### Congratulations, you've just placed your first order! We're now going to take a look at it from the perspective of the Myriad operations team.&#x20;

{% hint style="success" %}
#### **Congratulations, you've just placed your first order! We're now going to take a look at it from the perspective of the Myriad operations team.**&#x20;
{% endhint %}

***

## **Exercise 2: Orientation to the Order**

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;"></mark><mark style="color:red;">Update</mark>&#x20;

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

**Scene:** You are **Sam Anderson**, a member of the Myriad Order Operations team. Your role is to review incoming test orders, verify the information provided, and ensure each order is ready to move through the fulfillment process. An order has just been submitted through the Myriad Provider Portal by Dr. Jennifer Park for patient Dorothy Martinez. Your task is to locate the order in ServiceNow, review its details, and understand the information your team uses to process and fulfill provider requests.

***

Upon clicking the ORD hyperlink, the order will **open in the ServiceNow workspace**. You will see:

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.31.58 PM (1).png" alt=""><figcaption></figcaption></figure>

* An **order header** displaying key details such as the order number, patient, order type, state, priority, and current status.
* A set of **related tabs** that organize the work required to fulfill the order:
  * **Line Items** represent the products or services that were ordered.
  * **Order Tasks** contain the individual fulfillment activities required to complete the order. These tasks are automatically generated based on the fulfillment workflow configured for the selected product offering.
  * **Specimens** track the samples required for the test, including their collection and processing status. These records are also created automatically based on the selected product offering.
  * **MRD Monitoring Series** groups the patient's scheduled monitoring events into a single series, allowing your team to track recurring MRD testing over time. The cadence and monitoring schedule are generated from the product configuration.
* An **Order Overview** panel on the left with fulfillment details, important dates, and links to the order timeline and orchestration, helping you understand where the order is in its lifecycle.
* A **collaboration panel** on the right where your team can communicate and document progress:
  * **Work Notes** are visible only to internal users and are used to document progress, hand off work, troubleshoot issues, and communicate with other fulfillment team members.
  * **Comments** can be shared with external users, such as healthcare providers, when updates or additional information need to be communicated.
  * The **Activity** stream provides a chronological history of changes, updates, and communications related to the order.
* A **Customer Order Summary** panel that uses AI to generate a concise overview of the order. The summary highlights key information—such as the patient, ordering provider, product offering, monitoring cadence, fulfillment status, and upcoming specimen collection dates—so you can quickly understand the order before diving into the individual records.

1. Click the **Customer order summary button** to see a concise summary of this order.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.44.23 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
#### Congratulations, you have reviewed the submitted order!
{% endhint %}

***

## Exercise 3: Orientation to the Order Tasks

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;"></mark><mark style="color:red;">Update</mark>&#x20;

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

### Overview

**Order Tasks** represent the operational work required to fulfill an order. Each task corresponds to a specific step in your workflow and is **automatically generated** based on the Product Offering selected during order entry.

Tasks are **assigned to the appropriate operational teams**, include **planned execution dates**, and **provide visibility** into the progress of the order from intake through result delivery.

**Click the "Order Tasks" tab** next "Line items" on the order.

A list of order tasks appears on the screen:

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.50.24 PM.png>)

### **What to notice:**

#### **Assignment Groups**

* Notice that each task is assigned to the appropriate operational team, such as:
* Order Intake & Authorization
* Lab Operations
* Order Support Services
* Order Oversight

This ensures work is automatically routed to the correct team throughout the order lifecycle.

#### **Workflow Progression**

* Observe how the order moves through each stage of fulfillment.
* Activities include:
  * Order Validation
  * Insurance Verification
  * Baseline Collection Scheduling
  * Specimen Collection
  * Specimen Receipt & QC Validation
  * Laboratory Testing & Analysis
  * Result Review & Release

For longitudinal monitoring products, additional specimen collections and testing cycles are automatically generated as part of the same order.

#### **Operational Visibility**

Each task contains operational information, including:

* Assignment Group
* Status
* Planned Start Date
* Planned End Date
* Actual Start Date
* Actual End Date

This information provides visibility into workload, task ownership, and overall order progress.

{% hint style="info" %}
The Order Tasks displayed are dynamically generated based on the Product Offering associated with the order. Different tests can produce different workflows. For example, a hereditary cancer test may require a single collection and testing cycle, while an MRD monitoring program may generate multiple scheduled collections and recurring laboratory activities over time.

Overall, Order Tasks provide a configurable, end-to-end operational workflow that coordinates every activity required to fulfill a laboratory order while routing work to the appropriate teams and providing complete visibility throughout the testing lifecycle.
{% endhint %}

{% hint style="success" %}
**Congratulations, you have reviewed the order tasks successfully!**
{% endhint %}

***

## Exercise 4: Orientation to Specimens

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;"></mark><mark style="color:red;">Update</mark>&#x20;

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

### Overview

**Specimens represent the individual biological samples** collected for laboratory testing. As part of the configurable workflow driven by the selected **Product Offering**, the platform automatically generates the appropriate specimen records needed to fulfill the order. Each specimen is created as its own record and **tracks the complete lifecycle of a sample**—from scheduled collection through receipt, processing, testing, and result generation.

For longitudinal monitoring programs like MRD, **multiple specimen records can be generated as part of a single order**, providing complete traceability for every collection event throughout the patient's testing journey.

**Click the "Specimens" tab** next to "Order Tasks" on the order.

![](<.gitbook/assets/Screenshot 2026-07-07 at 2.07.33 PM.png>)

### What to Notice

#### Specimen Records

Each specimen is managed as its own record, allowing the laboratory to independently track every sample collected throughout the patient's testing journey.

In this example, a specimen has been created for:

* Baseline Collection
* Monitoring Draw 1
* Monitoring Draw 2
* Monitoring Draw 3

#### Longitudinal Monitoring

Notice that each specimen is associated with the same **MRD Monitoring Series**, linking all collections together while maintaining a separate record for each individual sample.

This provides complete visibility into a patient's longitudinal testing history.

#### Specimen Lifecycle

Each specimen record captures key milestones throughout its lifecycle, including:

* Scheduled Collection Date
* Collection Date
* Received Date
* Result Status _(or other lifecycle milestones as configured)_

These milestones allow laboratory staff to monitor where each specimen is within the testing process and quickly identify delayed or outstanding samples.

#### Traceability

Because every specimen is its own record, laboratories can maintain complete chain-of-custody and processing visibility for every collected sample.

This supports operational tracking, quality assurance, and historical reporting across both one-time and longitudinal testing programs.

{% hint style="success" %}
**Congratulations, you have successfully reviewed the specimens associated with this order!**
{% endhint %}

***

## Exercise 4: Orientation to MRD Monitoring Series

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;"></mark><mark style="color:red;">Update</mark>&#x20;

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

#### Overview

**MRD Monitoring Series** records are created for Product Offerings that support longitudinal monitoring. Unlike one-time tests, longitudinal monitoring programs require multiple specimen collections over an extended period to monitor disease progression or treatment response.

As part of the configurable workflow defined by the selected Product Offering, the platform automatically creates an MRD Monitoring Series to track and manage planned specimen collections.

**Click the "MRD Monitoring Series" tab** next to "Specimens" on the order.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.21.11 PM.png" alt=""><figcaption></figcaption></figure>

***

### What to Notice

#### Longitudinal Monitoring

Unlike one-time tests, MRD monitoring programs consist of multiple planned specimen collections over time.

The MRD Monitoring Series provides a single record that organizes and tracks the patient's entire monitoring journey.

***

#### Collection Schedule

Notice that the monitoring series captures the planned collection dates for each scheduled draw, including:

* Baseline Collection
* Draw 1
* Draw 2
* Draw 3

This provides laboratory staff with a centralized view of upcoming and completed collection events.



***

## Exercise 5: Managing Order Fulfillment

In the left form pane, locate these fields:

| Field                 | Value                                       | What It Means                                       |
| --------------------- | ------------------------------------------- | --------------------------------------------------- |
| **Number**            | ORD0002157                                  | Unique order ID — use this to find the record later |
| **Short description** | MyRisk 25-Gene Panel — BRCA1 family history | The test ordered — 25-gene hereditary cancer panel  |
| **Account**           | Myriad Genetics                             | The laboratory processing this order                |
| **Order type**        | Product                                     | Classification in the order system                  |
| **State**             | Draft                                       | Not yet active — pending review and intake          |
| **Priority**          | 2 - High                                    | How urgently this order needs attention             |

***

## Step 10: View the Activity Stream

On the **right pane**, click the **Activity** section header to expand it (if not already open).

The Activity stream shows a timestamp log of every change and note added to this order. Even at this early stage, you can see the creation event — who created it, when, and what fields were set.

> **Note:** As the order progresses through intake → eligibility → processing → results, each step is logged here. This is how Myriad operations teams stay informed without sending emails.

***

## Step 11: End Impersonation

You have reviewed ORD0002157 from Dr. Lydia Chen's perspective.

**Click the avatar icon → "End impersonation"** to return to the admin session.

***

## ✅ Exercise 1 Checkpoint

You have successfully:

* Navigated the CSM/FSM Configurable Workspace
* Used the impersonation feature to take a provider's perspective
* Located a new order (ORD0002157) in the Customer Orders list
* Examined the split-pane record view with form fields and Activity stream

**What happens next:** ORD0002157 is now in the intake queue. Lisa Morgan's oversight role is to monitor all open orders and escalate the most critical ones — that's Exercise 2.
