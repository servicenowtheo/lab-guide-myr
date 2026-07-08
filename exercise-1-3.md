# Scenario 4: Managing the Patient Experience

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

## Exercise 3: Completing and Releasing an Order

### Step 1: Record the updated status

1. Close out the current **Specimen** page you have open by clicking **x** at it's tab at the top of the record.
2. Time has passed, and now all of the specimens have been processed by the lab.&#x20;
3. To bulk update the result status, in the **Specimens tab** on the order, scroll all the way right on the list to the **Result Status** column.
4. On your keyboard, hold **command** and at the same time click all of the empty **Result Status** fields for each specimen.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 7.15.35 PM.png" alt=""><figcaption></figcaption></figure>

5. Once all are highlighted, double click into any of the fields, set the **Result Status** to **Negative** and click OK.
6. Notice that all of the **Result Status** fields have been updated.

***

### Step 2: Approve the record for release

1. On the top right of the order, click the **ellipses button** and then click **order details.**

***

#### Step 3: Generate the Order Result Report

1. In the upper-right corner of the Customer Order, click the **ellipsis (...)** button.
2. Select **Order Details**.
3. Review the information on the Customer Order record.

#### What to Notice

Locate the **State** field.

The **State** tracks the overall lifecycle of the customer orde from initial submission through laboratory processing, clinical review, results generation, and final delivery.&#x20;

***

#### Step 2: Generate the Order Results

1. Change the **State** field to **Results Generated**.
2. Click **Update** in the lower-right corner of the record.

#### What to Notice

Updating the order status automatically triggers the configured results generation workflow.

Notice that:

* A work note is added to the **Activity** stream indicating that the order report has been generated.
* A consolidated results document is created and attached to the Customer Order in **Attachments**.
* Depending on your organization's workflow, additional downstream actions can also be triggered.

{% hint style="warning" %}
If you do not immediately see the generated document, refresh the page.
{% endhint %}

***

#### Step 3: Review the Generated Report

1. Open the generated report from the **Attachments** section by clicking the report.
2. Review the contents of the document.

#### What to Notice

The report is automatically populated using information stored throughout the platform.

Notice that it includes information from across the order, including:

* Customer Order information
* Patient
* Ordering Provider
* Product Offerings included in the order
* Specimen collection information
* Individual specimen results
* Overall order status

Rather than manually compiling information from multiple records, the document is generated dynamically using data from the Customer Order and its related records.

***

### Step 4: Setting You Up for Scenario 4

1. On the left side of your screen, notice the **dark left sidebar.** It has three icons from top to bottom:

| Icon  | Looks Like                 | What It Does                                    |
| ----- | -------------------------- | ----------------------------------------------- |
| Home  | A small house              | Returns you to the Workspace landing page       |
| Lists | Three horizontal lines (☰) | Opens the full list of record categories        |
| Inbox | An inbox/folder            | An inbox where tasks are routed to you for work |

2. Click the lists icon.
3. In the default lists section, find **Patients** under **Healthcare data.** If it is easier for you, you can also command +F 'patient'.
4. Click **patients**. Notice the list of all patient records. Select the patient record for Dorothy Martinez by clicking her **blue hyperlink PATXXXXXXXX number**.<br>

## ✅ Scenario 3 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 3!**
{% endhint %}
