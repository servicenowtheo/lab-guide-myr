# Scenario 1: Submit, Process, and Manage a MRD Order

## **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist&#x20;

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order MRD testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

1. Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

* A **top navigation bar** with options for **Dashboard**, **Submit Order**, **My Orders**, and **Specimen Tracking**
* A **welcome banner** with a **New Test Order** button
* Dashboard tiles displaying metrics such as **Total Orders**, **Specimens**, **Patients**, and **MRD Monitoring**
* A **Browse Tests** section featuring available Myriad products that can be ordered
* A **Recent Orders** section at the bottom of the page

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png>)

> **Note:** This is your Myriad Provider Portal, the streamlined experience that you designed for healthcare providers to order tests, track specimens, and manage patients. Behind the scenes, every order submitted through the portal automatically creates a corresponding order in ServiceNow for your operations team to review and fulfill.&#x20;

***

2. Select **+Submit Order in** the top navigation.
3. Select your patient, **Dorothy Martinez** from the patient dropdown.&#x20;
4. Select **Jennifer Park** from the ordering provider dropdown.
5. Select a **30-day** cadence for the **MRD Monitoring** test.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.12.47 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** The tests displayed in the Provider Portal represent your organization's product offerings. These offerings are managed through the ServiceNow Product Catalog, allowing you to control which tests providers can order. When a provider submits an order, a fulfillment workflow is automatically initiated in ServiceNow.
{% endhint %}

6. Click **Submit Order** and wait for the confirmation screen to load. In the confirmation message, select the **order hyperlink (ORDXXXXXXX).**&#x20;

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.16.53 PM.png" alt=""><figcaption></figcaption></figure>



{% hint style="success" %}
#### **Congratulations, you've just placed your first order!**&#x20;

This exercise demonstrates just one of many ways providers can submit orders. Orders may also be submitted through other intake channels such as integrations, EHRs, APIs, or manual entry. For the provider though, with just a few clicks, the platform automatically initiates the configurable fulfillment workflow behind the scenes.

**We're now going to take a look at it from the perspective of the Myriad operations team.**&#x20;
{% endhint %}

***

## **Exercise 2: Orientation to the Order**

**Persona:** Sam Anderson

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

**Scene:** You are **Sam Anderson**, a member of the Myriad Order Operations team. Your role is to review incoming test orders, verify the information provided, and ensure each order is ready to move through the fulfillment process. An order has just been submitted through the Myriad Provider Portal by Dr. Jennifer Park for patient Dorothy Martinez. Your task is to locate the order in ServiceNow, review its details, and understand the information your team uses to process and fulfill provider requests.

***

Upon clicking the ORD hyperlink, the order will **open in the ServiceNow workspace**. You will see:

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.31.58 PM (1).png" alt=""><figcaption></figcaption></figure>

An **order header** displaying key details such as the order number, patient, order type, state, priority, and current status.

A set of **related tabs** that organize the work required to fulfill the order:

* **Line Items** represent the products or services that were ordered.
* **Order Tasks** contain the individual fulfillment activities required to complete the order. These tasks are automatically generated based on the fulfillment workflow configured for the selected product offering.
* **Specimens** track the samples required for the test, including their collection and processing status. These records are also created automatically based on the selected product offering.
* **MRD Monitoring Series** groups the patient's scheduled monitoring events into a single series, allowing your team to track recurring MRD testing over time. The cadence and monitoring schedule are generated from the product configuration.

An **Order Overview** panel on the left with fulfillment details, important dates, and links to the order timeline and orchestration, helping you understand where the order is in its lifecycle.

A **collaboration panel** on the right where your team can communicate and document progress:

* **Work Notes** are visible only to internal users and are used to document progress, hand off work, troubleshoot issues, and communicate with other fulfillment team members.
* **Comments** can be shared with external users, such as healthcare providers, when updates or additional information need to be communicated.
* The **Activity** stream provides a chronological history of changes, updates, and communications related to the order.

A **Customer Order Summary** panel that uses AI to generate a concise overview of the order. The summary highlights key information—such as the patient, ordering provider, product offering, monitoring cadence, fulfillment status, and upcoming specimen collection dates—so you can quickly understand the order before diving into the individual records.

1. Click the **Customer order summary button** to see a concise summary of this order.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.44.23 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
#### Congratulations, you have reviewed the submitted order!
{% endhint %}

***

## Exercise 3: Orientation to the Order Tasks

**Persona:** Sam Anderson

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

**Scene:** Now that the order has been submitted, it has entered the laboratory's fulfillment queue. Before work begins, you want to understand the activities that have been generated, who owns them, and how the platform coordinates the testing process from intake through result release.

***

### Overview

**Order Tasks** represent the operational work required to fulfill an order. Each task corresponds to a specific step in your workflow and is **automatically generated** based on the Product Offering selected during order entry.

Tasks are **assigned to the appropriate operational teams**, include **planned execution dates**, and **provide visibility** into the progress of the order from intake through result delivery.

1. **Click the "Order Tasks" tab** next to "Line items" on the order.
2. A list of order tasks appears on the screen:

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.50.24 PM.png>)

### **What to notice**

1. **Assignment Groups**

* Notice that each task is assigned to the appropriate operational team, such as:
* Order Intake & Authorization
* Lab Operations
* Order Support Services
* Order Oversight

This ensures work is automatically routed to the correct team throughout the order lifecycle.

2. **Workflow Progression**

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

3. **Operational Visibility**

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

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

**Scene:** Dorothy's baseline specimen has been scheduled, and future monitoring collections have already been planned. To ensure every sample is processed and tested correctly, the platform creates a separate specimen record for each collection event. In this exercise, you'll explore how specimen records provide end-to-end visibility throughout the testing lifecycle.

***

### Overview

**Specimens represent the individual biological samples** collected for laboratory testing. As part of the configurable workflow driven by the selected **Product Offering**, the platform automatically generates the appropriate specimen records needed to fulfill the order. Each specimen is created as its own record and **tracks the complete lifecycle of a sample**—from scheduled collection through receipt, processing, testing, and result generation.

For longitudinal monitoring programs like MRD, **multiple specimen records can be generated as part of a single order**, providing complete traceability for every collection event throughout the patient's testing journey.

1. **Click the "Specimens" tab** next to "Order Tasks" on the order.

![](<.gitbook/assets/Screenshot 2026-07-07 at 2.07.33 PM.png>)

### What to Notice

1. **Specimen Records**

Each specimen is managed as its own record, allowing the laboratory to independently track every sample collected throughout the patient's testing journey.

In this example, a specimen has been created for:

* Baseline Collection
* Monitoring Draw 1
* Monitoring Draw 2
* Monitoring Draw 3

2. **Longitudinal Monitoring**

Notice that each specimen is associated with the same **MRD Monitoring Series**, linking all collections together while maintaining a separate record for each individual sample.

This provides complete visibility into a patient's longitudinal testing history.

3. **Specimen Lifecycle**

Each specimen record captures key milestones throughout its lifecycle, including:

* Scheduled Collection Date
* Collection Date
* Received Date
* Result Status _(or other lifecycle milestones as configured)_

These milestones allow laboratory staff to monitor where each specimen is within the testing process and quickly identify delayed or outstanding samples.

3. **Traceability**

Because every specimen is its own record, laboratories can maintain complete chain-of-custody and processing visibility for every collected sample.

This supports operational tracking, quality assurance, and historical reporting across both one-time and longitudinal testing programs.

{% hint style="success" %}
**Congratulations, you have successfully reviewed the specimens associated with this order!**
{% endhint %}

***

## Exercise 4: Orientation to MRD Monitoring Series

**Persona:** Sam Anderson

**Objective:** Navigate the order recently placed and get up to speed about what it requires.

***

**Scene:** Unlike one-time tests, MRD monitoring requires multiple specimen collections over time. To coordinate these recurring events, the platform automatically creates an MRD Monitoring Series, providing a centralized view of the patient's monitoring schedule and testing timeline. As a coordinator, you're interested to take a look at how things are tracking.

***

### Overview

**MRD Monitoring Series** records are created for Product Offerings that support longitudinal monitoring. Unlike one-time tests, longitudinal monitoring programs require multiple specimen collections over an extended period to monitor disease progression or treatment response.

As part of the configurable workflow defined by the selected Product Offering, the platform automatically creates an MRD Monitoring Series to track and manage planned specimen collections.

1. **Click the "MRD Monitoring Series" tab** next to "Specimens" on the order.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.21.11 PM.png" alt=""><figcaption></figcaption></figure>

***

### What to Notice

**1. Longitudinal Monitoring**

Unlike one-time tests, MRD monitoring programs consist of multiple planned specimen collections over time.

The MRD Monitoring Series provides a single record that organizes and tracks the patient's entire monitoring journey.

**2. Collection Schedule**

Notice that the monitoring series captures the planned collection dates for each scheduled draw, including:

* Baseline Collection
* Draw 1
* Draw 2
* Draw 3

This provides laboratory staff with a centralized view of upcoming and completed collection events.

{% hint style="success" %}
**Congratulations, you have successfully reviewed the monitoring series associated with this order!**
{% endhint %}

***

## Exercise 5: Managing Order Fulfillment

**Persona:** Sam Anderson

**Objective:** Monitor the progress of an active laboratory order, identify workflow bottlenecks, and use the available tools to investigate delays and keep the order moving.

***

**Scene:** It has been several weeks since Dorothy Martinez's MRD monitoring program began. During your morning operational review, you notice that Dorothy's order has stopped progressing through the laboratory workflow. A delay in processing could impact the patient's scheduled monitoring timeline. Your job is to investigate the order, determine where the bottleneck exists, and use the platform to coordinate the next steps needed to move the order forward.

***

1. Select the "**Order Tasks"** tab
2. **Click the blue hyperlink** **(OMTASKXXXXXXXXX)** of the first order task .
3. Review the information available on the task record.

| Field                                     | Value            | What It Means                                                               |
| ----------------------------------------- | ---------------- | --------------------------------------------------------------------------- |
| **Consumer**                              | Dorothy Martinez | This identifies the patient associated with the task.                       |
| **Order line item**                       | ORDLXXXXXXX      | This identifies the order and Product Offering that generated this task.    |
| **State**                                 | Draft            | State helps your teams determine the progression of the task to completion. |
| **Priority**                              | Product          | This helps your team determine the urgency of the task.                     |
| **Planned Start Date / Planned End Date** | Date             | The scheduled timeline for task completion.                                 |
| **Actual Start Date / Actual End Date**   | Date             | The actual timeline for task completion.                                    |

***

4. Noticing the lack of progress, you would like to request a status update. Locate the **Work notes** tab in the Activity Stream.
5.  Enter the following message. You will need to type @john.jason in order to search and tag the user.

    ```
    @john.jason Can you please provide a status update?
    ```
6. Save or post the work note.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.46.22 PM.png" alt=""><figcaption></figcaption></figure>

**What to Notice**

* Mentioning a user with **@username** notifies that team member directly within the platform.
* Work Notes provide an internal collaboration space that keeps all communication tied to the task, creating a complete audit trail.

***

7. For more immediate collaboration, you decide to start a conversation with John. In the right-side panel on your record, click the **People** icon.
8. Select **+** to create a new Sidebar Discussion.
9. In the **Participants** field, search for and select **John Jason**.
10. In the message box, enter:

    ```
    Please review and complete this task.
    ```
11. Click **Start Discussion**.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.47.42 PM.png" alt=""><figcaption></figcaption></figure>

**What to Notice**

* Sidebar Discussions create real-time, in-platform conversations without leaving the task.
* These discussions allow teams to quickly collaborate while maintaining context around the work being performed.

***

12. Despite reaching out to John, the task is still not progressing. You decide to formally escalate it. Locate the **Escalation Level** field.
13. Change the value to **Medium**.
14. Click **Save** in the upper-right corner of the record.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.48.37 PM.png" alt=""><figcaption></figcaption></figure>

**What to Notice**

* After saving, the task is automatically reassigned based on the configured escalation workflow.
* Additional work notes and system updates are recorded in the Activity Stream to document the escalation.

***

15. The task continues to remain unresolved, requiring additional attention. Change the **Escalation Level** to **High**.
16. Save the record again.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 2.49.24 PM.png" alt=""><figcaption></figcaption></figure>

**What to Notice**

* The task priority is automatically increased to reflect the higher level of urgency.
* Additional notifications are generated for managers and other stakeholders.
* The Activity Stream records each automated action taken by the workflow.

{% hint style="info" %}
The escalation process shown in this exercise is fully configurable and can be tailored to your operational procedures.

Depending on the workflow configured, escalating a task can automatically trigger actions such as:

* Reassigning the task to another assignment group or individual.
* Increasing the task priority.
* Sending email notifications.
* Posting messages to collaboration platforms such as Microsoft Teams or Slack through integrations.
* Creating follow-up tasks or approvals.
* Triggering additional workflows or automations.

This flexibility enables you to design escalation paths that align with your own operational policies and service level agreements, ensuring delayed work is surfaced and addressed appropriately.
{% endhint %}

***

## ✅ Scenario 1 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 1!**
{% endhint %}

