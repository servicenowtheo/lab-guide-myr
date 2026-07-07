# Scenario 3: Submit, Process, and Manage a Precise Tumor + MyRisk + MRD Combo Order

## **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist

**Duration:** \~10 minutes

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order Precise Tumor, MyRisk, and MRD testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

### Step 1: Open the Myriad Provider Portal

Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png" alt=""><figcaption></figcaption></figure>

***

### Step 2: Place the Order

1. Select **+Submit Order in** the top navigation.
2. Select your patient, **Dorothy Martinez** from the patient dropdown.
3. Select **Jennifer Park** from the ordering provider dropdown.
4. Select the **MyRisk** and **Precise Tumor** tests.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 6.47.18 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** The tests displayed in the Provider Portal represent your organization's product offerings. These offerings are managed through the ServiceNow Product Catalog, allowing you to control which tests providers can order. When a provider submits an order, a fulfillment workflow is automatically initiated in ServiceNow.
{% endhint %}

5. Click **Submit Order** and wait for the confirmation screen to load. In the confirmation message, select the **order hyperlink (ORDXXXXXXX).**

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 6.47.45 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
#### **Congratulations, you've just placed your complex combo order! We're now going to take a look at it from the perspective of the Myriad operations team.**
{% endhint %}

***

## **Exercise 2: Managing a Multi-Test Order**

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;">Update</mark>

**Objective:** Explore how ServiceNow manages combo testing within a single customer order and automatically generates independent fulfillment workflows for each.

***

#### Step 1: Review the Line Items

Upon clicking the ORD hyperlink, the order will **open in the ServiceNow workspace**.

* Open the **Line Items** **tab**
* Notice that this order contains **three line items**:
  * Precise Tumor
  * MyRisk Hereditary Cancer Test
  * MRD: Baseline & Monitoring Cadence Management
* Observe that each Line Item represents an independently fulfilled Product Offering within the same customer order.

**What to Notice**

Although the provider submitted a single order, each Product Offering follows its own configurable fulfillment workflow, allowing different tests to have unique operational requirements while remaining part of the same patient order.



***

#### Step 2: Compare the Fulfillment Workflows

1. Select the **'Order Tasks'** tab next to Line items.
2. Hover over the **'Order line item'** column and select the three dots at the right of the column.
3. Click the blue hyperlink that says **'Group by Order line item'**

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.15.28 PM.png" alt=""><figcaption></figcaption></figure>

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

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 6.51.54 PM.png" alt=""><figcaption></figcaption></figure>

3. Open the specimen record by clicking the **blue hyperlink** in the **'Display Name'** column.
4. You just received an update that the baseline specimen has gone through testing and has relieved a result status of Negative.&#x20;
5. Update the **Status** field to **QC Passed.**
6. Update the **Result Status** to **Negative**.
7. Set the **Result Date** to **today's date.**&#x20;
8. Save the record.

**What to Notice**

* On **Save** of the record, ServiceNow automatically generated a **Specimen Report,** using your document template and pulling in relevant information from the specimen record. Notice that a comment was added to the activity stream sharing this update, and that a document has been made available in **Attachments** on the right side pane of the screen.

#### Step 3: Review the Result Report

1. Select the document that was generated **under Attachments.**&#x20;
2. Open and review the document that was generated.&#x20;

**What to Notice**

*   The document pulls in information directly from the speciment record. Notice that the fields on the document that correspond with fields on the record:

    * Specimen
    * Specimen Type
    * Test Type
    * Patient
    * Order
    * Ordering Provider
    * Result

    ![](<.gitbook/assets/Screenshot 2026-07-07 at 7.01.26 PM.png>)

{% hint style="info" %}
Document generation is a configurable platform capability that enables you to automatically create reports and other business documents throughout the order lifecycle. Rather than manually generating documentation, you can define when documents should be created, such as when a specimen reaches a particular status, a result is finalized, or an approval is completed.

Once generated, documents can automatically follow the workflow you define, for example:

* Attaching the document to the appropriate record.
* Delivering the document to ordering providers or patients.
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

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.40.31 PM.png" alt=""><figcaption></figcaption></figure>

#### What to Notice

Saving the record automatically triggers the configured recollection workflow.

Notice that:

* The **Activity** stream records that the patient and ordering provider have been notified of the redraw request.
* A new specimen record has been automatically created for the recollection.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.40.59 PM.png" alt=""><figcaption></figcaption></figure>

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

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.41.40 PM.png" alt=""><figcaption></figcaption></figure>

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

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.42.46 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
The specimen recollection process shown in this exercise is fully configurable and can be tailored to your organization's operations.

Rather than requiring teams to manually coordinate a failed specimen, you can define the workflow that should occur when a specimen enters a specific status, such as QC Failed – Redraw Request Submitted, or generally when it needs to follow a specific flow.
{% endhint %}

***

## ✅ Scenario 2 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 2!**
{% endhint %}
