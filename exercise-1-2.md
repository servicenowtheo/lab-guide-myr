# Scenario 3: Submit, Process, and Manage a Precise Tumor + MyRisk + MRD Combo Order

## **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order Precise Tumor, MyRisk, and MRD testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

1. Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png" alt=""><figcaption></figcaption></figure>

2. Select **+Submit Order in** the top navigation.
3. Select your patient, **Dorothy Martinez** from the patient dropdown.
4. Select **Jennifer Park** from the ordering provider dropdown.
5. Select the **MyRisk** and **Precise Tumor** tests.

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

**Objective:** Explore how ServiceNow manages multiple Product Offerings within a single customer order, automatically generates independent fulfillment workflows for each test, and automates result documentation as specimens progress through the testing lifecycle.

***

**Scene:** Dorothy Martinez's order contains three Product Offerings that are progressing independently through the laboratory workflow:

* Precise Tumor
* MyRisk Hereditary Cancer Test
* MRD: Baseline & Monitoring Cadence Management

The baseline specimen for the MRD monitoring program has now completed laboratory testing and is ready for review. As the Laboratory Operations Coordinator, you'll update the specimen with its testing outcome and observe how the platform automatically generates the appropriate result documentation while maintaining complete traceability to the patient, specimen, and order.

***

1. Upon clicking the ORD hyperlink, the order will **open in the ServiceNow workspace**.
2. Open the **Line Items** **tab**
3. Notice that this order contains **three line items**:

* Precise Tumor
* MyRisk Hereditary Cancer Test
* MRD: Baseline & Monitoring Cadence Management
* Observe that each Line Item represents an independently fulfilled test within the same customer order.

**What to Notice**

Although the provider submitted a single order, each Product Offering follows its own configurable fulfillment workflow, allowing different tests to have unique operational requirements while remaining part of the same patient order.

4. Select the **'Order Tasks'** tab next to Line items.
5. Hover over the **'Order line item'** column and select the three dots at the right of the column.
6. Click the blue hyperlink that says **'Group by Order line item'**

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 5.15.28 PM.png" alt=""><figcaption></figcaption></figure>

**What to Notice**

* Each order line item (which represents the tests ordered) has its own set of Order Tasks.
* The tasks differ because they are generated from the configurable workflow associated with each Product Offering.
* This allows you to configure different operational processes for different tests without requiring separate customer orders.

7. Select the **'Specimens'** **tab.**
8. Review the specimens generated for each Product Offering.

**What to Notice**

* Each Product Offering generates the specimen records required to complete its workflow.
* The number and type of specimens are determined by the Product Offering configuration.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 6.51.54 PM.png" alt=""><figcaption></figcaption></figure>

9. Open the specimen record by clicking the **blue hyperlink** in the **'Display Name'** column.
10. You have received notification that Dorothy Martinez's baseline specimen has completed laboratory testing and the result has been determined to be **Negative.**
11. Update the **Status** field to **QC Passed.**
12. Update the **Result Status** to **Negative**.
13. Set the **Result Date** to **today's date.**&#x20;
14. Save the record.

**What to Notice**

* On **Save** of the record, ServiceNow automatically generated a **Specimen Report,** using your document template and pulling in relevant information from the specimen record. Notice that a comment was added to the activity stream sharing this update, and that a document has been made available in **Attachments** on the right side pane of the screen.



15. Select the document that was generated **under Attachments** in the right side panel, represented by a small paperclip ico&#x6E;**.**&#x20;
16. Open and review the document that was generated.&#x20;

**What to Notice**

*   The document pulls in information directly from the specimen record. Notice that the fields on the document that correspond with fields on the record:

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

**Persona:** Sam Anderson

**Objective:** Finalize specimen results, trigger automated order result generation, and explore how ServiceNow consolidates information from across the order into a comprehensive laboratory report.

***

**Scene:** Time has passed, and all specimens associated with Dorothy Martinez's order have completed laboratory testing. The individual specimen results have been reviewed and finalized, and the laboratory is now ready to generate the patient's consolidated order results. As the Laboratory Operations Coordinator, you'll finalize the remaining specimen results, trigger the order results generation process, and review the automatically generated report that brings together information from across the patient, order, and specimen records.

***

1. Close out the current **Specimen** page you have open by clicking **x** at it's tab at the top of the record.
2. Time has passed, and now all of the specimens have been processed by the lab.&#x20;
3. To bulk update the result status, in the **Specimens tab** on the order, scroll all the way right on the list to the **Result Status** column.
4. On your keyboard, hold **command** and at the same time click all of the empty **Result Status** fields for each specimen.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 7.15.35 PM.png" alt=""><figcaption></figcaption></figure>

5. Once all are highlighted, double click into any of the fields, set the **Result Status** to **Negative** and click OK.
6. Notice that all of the **Result Status** fields have been updated.
7. In the upper-right corner of the Customer Order, click the **ellipsis (...)** button.
8. Select **Order Details**.
9. Review the information on the Customer Order record.

#### What to Notice

* Locate the **State** field.
* The **State** tracks the overall lifecycle of the customer order from initial submission through laboratory processing, clinical review, results generation, and final delivery.&#x20;



10. Change the **State** field to **Results Generated**.
11. Click **Update** in the lower-right corner of the record.

#### What to Notice

Updating the order status automatically triggers the configured results generation workflow.

Notice that:

* A work note is added to the **Activity** stream indicating that the order report has been generated.
* A consolidated results document is created and attached to the Customer Order in **Attachments**.
* Depending on your desired workflow, additional downstream actions can also be triggered.

{% hint style="warning" %}
If you do not immediately see the generated document, refresh the page.
{% endhint %}

12. Open the generated report from the **Attachments** section in the right side panel by clicking the report.
13. Review the contents of the document.

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

## Exercise 4: Setting You Up for Scenario 4

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
