# Scenario 3: Submit, Process, and Manage a Precise Tumor + MyRisk + MRD Order

## **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist

**Duration:** \~10 minutes

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order Precise Tumor and MyRisk testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

### Step 1: Open the Myriad Provider Portal

Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png>)

***

### Step 2: Place the Order

1. Select **+Submit Order in** the top navigation.
2. Select your patient, **Dorothy Martinez** from the patient dropdown.
3. Select **Jennifer Park** from the ordering provider dropdown.
4. Select the **MyRisk** and **Precise Tumor** tests.

![](<.gitbook/assets/Screenshot 2026-07-07 at 3.30.13 PM.png>)

{% hint style="info" %}
**Note:** The tests displayed in the Provider Portal represent your organization's product offerings. These offerings are managed through the ServiceNow Product Catalog, allowing you to control which tests providers can order. When a provider submits an order, a fulfillment workflow is automatically initiated in ServiceNow.
{% endhint %}

5. Click **Submit Order** and wait for the confirmation screen to load. In the confirmation message, select the **order hyperlink (ORDXXXXXXX).**

![](<.gitbook/assets/Screenshot 2026-07-07 at 3.32.00 PM.png>)

{% hint style="success" %}
#### **Congratulations, you've just placed your an order! We're now going to take a look at it from the perspective of the Myriad operations team.**
{% endhint %}

***

## **Exercise 2: Managing a Multi-Test Order**

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;">Update</mark>

**Objective:** Explore how ServiceNow manages multiple Product Offerings within a single customer order and automatically generates independent fulfillment workflows for each.

***

#### Step 1: Review the Line Items

Upon clicking the ORD hyperlink, the order will **open in the ServiceNow workspace**.

* Open the **Line Items** **tab**
* Notice that this order contains **two line items**:
  * Precise Tumor
  * MyRisk Hereditary Cancer Test
* Observe that each Line Item represents an independently fulfilled Product Offering within the same customer order.

**What to Notice**

Although the provider submitted a single order, each Product Offering follows its own configurable fulfillment workflow, allowing different tests to have unique operational requirements while remaining part of the same patient order.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.12.51 PM.png>)

***

#### Step 2: Compare the Fulfillment Workflows

1. Select the **'Order Tasks'** tab next to Line items.
2. Hover over the **'Order line item'** column and select the three dots at the right of the column.
3. Click the blue hyperlink that says **'Group by Order line item'**

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.15.28 PM.png>)

**What to Notice**

* Each order line item (which represents the tests ordered) has its own set of Order Tasks.
* The tasks differ because they are generated from the configurable workflow associated with each Product Offering.
* This allows you to configure different operational processes for different tests without requiring separate customer orders.

***

#### Step 3: Compare the Specimens

1. Select the **'Specimens'** **tab.**
2. Review the specimens generated for each Product Offering.

**What to Notice**

* Each Product Offering generates the specimen records required to complete its workflow.
* The number and type of specimens are determined by the Product Offering configuration.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.18.21 PM.png>)

3. Open the specimen record by clicking the **blue hyperlink** in the **'Display Name'** column.
4. Review all of the available information about this specimen record. Definitions and purposes for each of the fields you see are described below.

| **Field**                 | **Example Value**                    | **What It Means**                                                                                                                                                                 |
| ------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Status**                | Pending Collection                   | Indicates where the specimen is within its lifecycle, from collection through laboratory processing and result reporting. This provides an at-a-glance view of specimen progress. |
| **Specimen Type**         | MyRisk Sample                        | Identifies the type of biological sample required for the selected Product Offering, helping ensure the correct specimen is collected and processed.                              |
| **Test Type**             | MyRisk                               | Identifies the laboratory test associated with this specimen, allowing laboratories to support multiple testing workflows within the same platform.                               |
| **Result Status**         | None                                 | Indicates whether testing results have been generated, reviewed, or finalized for this specimen.                                                                                  |
| **Result Date**           | Date                                 | Records when results became available, supporting turnaround time reporting and downstream clinical workflows.                                                                    |
| **Sequence**              | Baseline                             | Identifies where this specimen falls within the testing program. For longitudinal monitoring products, this may represent Baseline, Draw 1, Draw 2, and so on.                    |
| **Scheduled Date**        | 2026-07-07                           | The planned specimen collection date generated by the configurable workflow for the Product Offering.                                                                             |
| **Collection Date**       | Date                                 | Records when the specimen was actually collected from the patient, enabling comparison between planned and actual collection timelines.                                           |
| **Received Date**         | Date                                 | Indicates when the laboratory received the specimen, providing visibility into specimen logistics and laboratory intake.                                                          |
| **Patient**               | Dorothy Martinez                     | Identifies the patient associated with the specimen, ensuring traceability throughout the testing process.                                                                        |
| **Accession Number**      | Laboratory Identifier                | The unique laboratory identifier assigned to the specimen after receipt, supporting chain of custody and specimen traceability throughout laboratory operations.                  |
| **Display Name**          | MYRISK - Dorothy Martinez - Baseline | A human-readable identifier that makes it easy for laboratory staff to quickly recognize the specimen.                                                                            |
| **Order Line Item**       | ORDL0001066                          | Identifies the specific Product Offering that generated this specimen, linking the specimen back to the appropriate laboratory workflow.                                          |
| **Order**                 | ORD0001183                           | Identifies the customer order that the specimen belongs to, allowing multiple specimens to be tracked under a single order when appropriate.                                      |
| **MRD Monitoring Series** | _(Blank)_                            | Links the specimen to a longitudinal monitoring program when applicable. This field remains blank for one-time tests that do not require recurring specimen collections.          |

{% hint style="info" %}
Specimen records are fully configurable to match your operational processes. You can define the statuses, metadata, lifecycle stages, and business rules that best support your workflow. Because specimens remain linked to the patient and order, every collection event maintains complete traceability throughout the testing lifecycle.
{% endhint %}

{% hint style="success" %}
**Congratulations, you have successfully managed a multi-test order!**
{% endhint %}

***

## Exercise 3: Kick Off a Sample Recollection

Dorothy Martinez's specimen has been collected and received by the laboratory.

During quality control (QC), however, the laboratory determines that the specimen does not meet the required standards for testing.

Rather than allowing the order to remain blocked while laboratory staff manually coordinate the next steps, the platform can automatically initiate the specimen recollection process.

### Step 1: Record the QC Failure

1. On the same specimen record, locate the **Status** field.
2. Change the status to **QC Failed – Redraw Request Submitted**.
3. Click **Save** in the top right corner.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.40.31 PM.png>)

#### What to Notice

Saving the record automatically triggers the configured recollection workflow.

Notice that:

* The **Activity** stream records that the patient and ordering provider have been notified of the redraw request.
* A new specimen record has been automatically created for the recollection.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.40.59 PM.png>)

***

### Step 2: Review the Replacement Specimen

1. In the **Activity** stream, locate the work note indicating that a new specimen has been created.
2. **Click the blue hyperlink** that was automatically posted when you hit save to open the newly created specimen record.

#### What to Notice

The replacement specimen has already been associated with:

* Dorothy Martinez
* The original customer order
* The appropriate Order Line Item

The new specimen now becomes the active sample that will continue through the collection and testing process, while the failed specimen remains part of the patient's laboratory history.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.41.40 PM.png>)

***

### Step 3: Verify the Customer Order is Updated

1. On the replacement specimen record, locate the **Order** field.
2. Select the **Information (i)** icon on the order field.
3. Click **Open Record** in the popout.
4. You are now looking at the order that was placed.
5. Select the **Specimens** related list.

#### What to Notice

Notice that the specimen count has increased from **2** to **3**.

The **original failed specimen has been retained for traceability**, while the **replacement specimen has been automatically associated** with the existing order. This allows the laboratory to continue fulfillment without creating a new customer order or losing the historical record of the failed specimen.

![](<.gitbook/assets/Screenshot 2026-07-07 at 5.42.46 PM.png>)

{% hint style="info" %}
The specimen recollection process shown in this exercise is fully configurable and can be tailored to your organization's operations.

Rather than requiring teams to manually coordinate a failed specimen, you can define the workflow that should occur when a specimen enters a specific status, such as QC Failed – Redraw Request Submitted, or generally when it needs to follow a specific flow.
{% endhint %}

***

## ✅ Scenario 2 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 2!**
{% endhint %}
