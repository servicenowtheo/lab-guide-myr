# Scenario 6: Tech Bonus Scenario

## **Exercise 1: Learning and Building in Flow Designer**

**Persona:** Myriad Platform Developer

**Objective:** Learn how ServiceNow's Flow Designer is used to build configurable fulfillment workflows that automatically orchestrate laboratory operations based on the Product Offering ordered.

***

### Scenario

Throughout this lab, you've seen ServiceNow automatically generate Order Tasks, create Specimen records, initiate specimen recollections, generate reports, and notify users as orders progressed through the fulfillment lifecycle.

Rather than being hard-coded into the application, these business processes can be driven by configurable flows in **Flow Designer**.

In this exercise, you'll build the foundation of a fulfillment workflow that automatically begins whenever a provider orders a specific Product Offering. Along the way, you'll learn the core building blocks of Flow Designer and how they can be combined to automate virtually any laboratory business process.

***

1. Navigate to All > **Flow Designer**.
2. Select **New**.
3. Complete the following information:

* **Flow Name:** `EndoPredict Dx Fulfillment`
* **Application:** Global
* **Description:** Fulfillment workflow for the EndoPredict Dx Product Offering.

4. Select **Build Flow**.

{% hint style="info" %}
#### 💡 Information: What is a Flow?

A **Flow** is an automated business process that performs work when a defined event occurs.

Rather than requiring users to manually perform repetitive operational tasks, flows execute those activities automatically according to the business rules you define.

A flow is made up of three primary components:

* **Triggers** determine **when** the flow should start.
* **Logic** determines **how** the flow should make decisions as it executes.
* **Actions** determine **what** work the flow performs.

Throughout this lab, every automated process you've interacted with, from generating Order Tasks and Specimens to creating reports and initiating recollection workflows—has been driven by flows similar to the one you're about to build.
{% endhint %}

5. Configure the Trigger
6. Every flow begins with a **Trigger**.
7. Select **Add Trigger**.
8. Notice that several trigger types are available.
9. Take a moment to review the available options before selecting one.

| Trigger Type    | Purpose                                                   | Example                                                                                               |
| --------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Record**      | Starts when a record is created or updated.               | A provider submits a new order or a specimen status changes.                                          |
| **Scheduled**   | Starts at a defined date or recurring interval.           | Send daily aging reports or check for overdue specimens every morning.                                |
| **Application** | Starts when another application or platform event occurs. | An inbound email is received, an API call is made, or another ServiceNow application raises an event. |

{% hint style="info" %}
#### 💡 Information: Understanding Triggers

A trigger defines the event that starts a workflow.

Flow Designer supports multiple trigger types depending on the business process you want to automate.

For fulfillment workflows, a common trigger is a **Record Trigger**, since laboratory work is typically initiated by changes to records within the platform.
{% endhint %}

10. Select: **Record Created**
11. For the **Table**, search for and select: **Order Line Item (sn\_ind\_tmt\_orm\_order\_line)**

{% hint style="info" %}
#### 💡 Information: Why Trigger from the Order Line Item?

In this exercise, the workflow is triggered from the **Order Line Item.**

This distinction is important because each Order Line Item represents an individual **Product Offering** selected by the provider.

A single Customer Order may contain one Product Offering or many.

For example, throughout this lab you've seen providers submit orders containing:

* MRD Monitoring
* MyRisk
* Precise Tumor

Each of these tests has different operational requirements.

By triggering the workflow from the Order Line Item, ServiceNow can treat each Product Offering independently, allowing each test to generate its own:

* Order Tasks
* Specimens
* Approvals
* Notifications
* Business logic

while still remaining associated with the same Customer Order.

This modular design allows laboratories to add new Product Offerings without redesigning their existing fulfillment processes.
{% endhint %}

12\. Add Trigger Conditions

13. Configure the following condition: **Product Offering** **is** **EndoPredict Dx**
14. Select **Done**.

{% hint style="info" %}
#### 💡 Information: Why Use Trigger Conditions?

Not every Order Line Item should follow the same workflow.

Conditions allow you to determine **which records should start this flow**.

In this example, the workflow will only execute when an Order Line Item is created for the **EndoPredict Dx** Product Offering.

If another Product Offering is ordered, such as MyRisk or MRD Monitoring, a different workflow could be triggered instead.

This approach keeps fulfillment processes modular and easy to maintain.
{% endhint %}

15. With the trigger configured, the flow now knows **when** it should run. The next step is defining **what should happen** once the flow begins.
16. Select **Action**.
17. Before selecting an action, take a few moments to browse the available actions provided by the platform.

{% hint style="info" %}
#### 💡 Information: Actions, Flow Logic, and Subflows

Flow Designer provides three primary building blocks that are used to create workflows:

**Actions** perform work.

Examples include:

* Creating or updating records.
* Sending emails or notifications.
* Requesting approvals.

**Flow Logic** controls the path the workflow follows.

Examples include:

* If / Else decisions.
* Wait conditions.
* Loops.
* Parallel branches.
* Error handling.

**Subflows** are reusable workflows.

Rather than rebuilding common automation multiple times, organizations can package frequently used business processes into reusable components that can be called from any flow.

For example, a "Generate Specimen Records" subflow could be reused across multiple Product Offerings.
{% endhint %}



18. Search for **the Slack spoke.**

{% hint style="info" %}
#### 💡 Information: What is a Spoke?

The actions available in Flow Designer aren't limited to ServiceNow.

Many are provided through **Integration Spokes** delivered out of the box with ServiceNow, which extend Flow Designer with prebuilt capabilities for external systems.

A Spoke is a packaged integration that exposes common operations as reusable Flow Designer actions.

Rather than writing custom API integrations, developers can simply drag these actions into a workflow.

For example, the Slack Spoke allows you to:

* Create conversations.
* Send messages.
* Upload files.
* Retrieve users and channels.

The same concept applies to hundreds of other enterprise applications, allowing workflows to orchestrate work across systems.
{% endhint %}

19. Now that you've defined **when** the flow should run, it's time to define **what** should happen.
20. In this example, you'll automatically create an **Order Task** whenever a new **EndoPredict Dx Order Line Item** is created.
21. Select **Action**.
22. Search for and select **Create Record**.

{% hint style="info" %}
#### 💡 Information: Create Record

The **Create Record** action allows a flow to automatically create records in any table within the ServiceNow platform.

This is one of the most commonly used actions in Flow Designer and is frequently used to automate fulfillment processes such as:

* Creating Order Tasks.
* Creating Specimen records.
* Creating Cases.
* Creating Approvals.
* Creating Work Orders.
* Creating custom records.

Rather than requiring users to manually create these records, the flow can generate them automatically whenever the defined trigger conditions are met.
{% endhint %}

23. For the **Table** field, select: **Order Task** (`sn_ind_tmt_orm_order_task`)
24. The action is now configured to create a new Order Task each time the flow executes.
25. Next, you'll associate the newly created Order Task with the Customer Order that initiated the workflow.
26. Select **Add Field Values**.
27. Add the **Customer Order** field.
28. Rather than entering a static value, you'll populate this field dynamically using data from the trigger.
29. Select the **wand** icon.

{% hint style="info" %}
#### 💡 Information: Using Data Pills

The **wand** icon allows you to insert dynamic values into your flow.

Rather than hardcoding information, Flow Designer allows you to reference data that already exists within the flow. These dynamic references are commonly called **data pills**.

Data pills can reference:

* The record that triggered the flow.
* Records created earlier in the flow.
* Variables.
* Outputs from previous actions.
* Information returned from integrations.

One of Flow Designer's most powerful capabilities is the ability to **walk across related records**, allowing you to retrieve information from referenced records without writing code.
{% endhint %}

30. Expand by clicking: **Trigger → Record Created**
31. Expand by clicking the arrow next to: **Order Line Item Record**
32. Select: **Order**
33. The Customer Order field will now be populated with the order associated with the triggering Order Line Item.

{% hint style="info" %}
#### 💡 Information: Walking Across Relationships

Notice that you didn't need to query the database or write a script to locate the Customer Order.

Because the Order Line Item already contains a reference to its parent Customer Order, Flow Designer allows you to "walk" that relationship and retrieve the referenced record.

This capability can be used throughout Flow Designer to access related records, making it easy to build sophisticated workflows without writing custom code.
{% endhint %}

34. Next, add another field value.
35. Select: **Order Line Item**
36. Again, select the **wand** icon.
37. Navigate to: **Trigger → Record Created → Order Line Item Record**
38. Select **Order Line Item Record**.
39. The Order Task will now be directly associated with the Order Line Item that triggered the flow.
40. This relationship allows each Product Offering to maintain its own fulfillment tasks while remaining connected to the broader Customer Order.
41. Continue configuring the Order Task by populating any additional fields required by your organization's fulfillment process.
42. For example, you may wish to configure:

* **Assignment Group** — Determines which team is responsible for completing the task.
* **Priority** — Defines the urgency of the work.
* **State** — Sets the initial task status.
* **Short Description** — Provides a meaningful description for users completing the task.

{% hint style="info" %}
#### 💡 Information: Configuring Record Creation

Every field configured within the **Create Record** action becomes part of the record when it is created.

Field values can be:

* Static values (for example, assigning every EndoPredict validation task to the Molecular Diagnostics team).
* Dynamic values using data pills.
* Outputs from previous actions.
* Results returned from integrations or API calls.
* Calculated values generated during the flow.

Because these values are configurable, organizations can tailor each Product Offering's fulfillment process without writing custom application logic.
{% endhint %}

43. Next, you'll extend the fulfillment workflow by automatically creating a **Specimen** record whenever an EndoPredict Dx Order Line Item is created.
44. Select the **+** icon beneath your first action.
45. Select **Action**.
46. Search for and select **Create Record**.
47. For the **Table** field, select: **Specimen** (`u_myriad_specimen`)
48. Just as you did when creating the Order Task, you'll now populate the fields that should be set when the specimen is created.
49. Add the **Order Line Item** field.
50. Select the **wand** icon.
51. Navigate to: **Trigger → Record Created → Order Line Item Record**
52. Select **Order Line Item Record**.
53. This associates the specimen with the specific Product Offering that initiated the workflow
54. Next, add the **Patient** field.
55. Select the **wand** icon.
56. Navigate to: **Trigger → Record Created → Order Line Item Record → Consumer**
57. Because the patient (consumer) is referenced on the Order Line Item, Flow Designer allows you to **dot-walk** across that relationship and automatically populate the Patient field on the new specimen.
58. Continue configuring the specimen by populating any additional fields that should be set when it is created.
59. These values may be populated using:

* Static values.
* Data pills from the triggering Order Line Item.
* Values returned from previous flow actions.
* Calculated values or business logic.

{% hint style="info" %}
#### 💡 Information: Building Product-Specific Workflows

The workflow you've created demonstrates a common design pattern used throughout laboratory operations. A single Product Offering can automatically initiate multiple downstream activities—including creating Order Tasks, Specimen records, approvals, notifications, or other operational records—as soon as it is ordered.

Because each action is independently configurable, organizations can tailor the fulfillment process for every Product Offering without modifying the underlying application. As new tests are introduced or operational processes evolve, workflows can be updated by adding, removing, or modifying actions to reflect the desired business process.
{% endhint %}

## Exercise 2: Challenge! Build Your Own Flow

### **Scenario**

Your lab operations team has identified an opportunity to automate one of their most common manual processes.

When a specimen fails quality control (QC), laboratory staff currently spend valuable time coordinating the recollection process. This includes creating a replacement specimen record, notifying both the patient and ordering provider that another sample is required, and initiating fulfillment of a new collection kit.

Rather than relying on these manual steps, your team has asked you to automate the entire process using Flow Designer.

Your goal is to build a workflow that automatically responds when a specimen enters a QC Failed status by:

* Creating a new specimen record associated with the original patient, order, and order line item.
* Creating a new Order Task to initiate shipment of a replacement collection kit.
* Sending notifications to both the patient and the ordering provider informing them that a new specimen collection is required.
