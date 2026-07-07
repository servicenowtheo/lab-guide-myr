# Scenario 2: Submit, Process, and Manage a Precise Tumor + MyRisk Order

### **Exercise 1: Placing the order**

**Persona:** Dr. Jennifer Park — Ordering Oncologist&#x20;

**Duration:** \~10 minutes&#x20;

**Objective:** Navigate the Myriad Provider Portal, and submit an order from Myriad's product offerings.

***

**Scene:** You are Dr. Jennifer Park, an ordering oncologist preparing care for your patient, Dorothy Martinez. The patient visit has just concluded, and you're ready to order Precise Tumor and MyRisk testing for Dorothy Martinez. Log in to the Myriad Provider Portal, locate the appropriate product, and complete the order submission accurately and efficiently.

***

## Step 1: Open the Myriad Provider Portal

Navigate to the provider portal by appending /**myriad-provider** to the end of your instance URL. You will see:

![](<.gitbook/assets/Screenshot 2026-07-07 at 1.04.36 PM.png>)

***

## Step 2: Place the Order

1. Select **+Submit Order in** the top navigation.
2. Select your patient, **Dorothy Martinez** from the patient dropdown.&#x20;
3. Select **Jennifer Park** from the ordering provider dropdown.
4. Select the **MyRisk** and **Precise Tumor** tests.

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 3.30.13 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** The tests displayed in the Provider Portal represent your organization's product offerings. These offerings are managed through the ServiceNow Product Catalog, allowing you to control which tests providers can order. When a provider submits an order, a fulfillment workflow is automatically initiated in ServiceNow.
{% endhint %}

5. Click **Submit Order** and wait for the confirmation screen to load. In the confirmation message, select the **order hyperlink (ORDXXXXXXX).**&#x20;

<figure><img src=".gitbook/assets/Screenshot 2026-07-07 at 3.32.00 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
#### **Congratulations, you've just placed your an order! We're now going to take a look at it from the perspective of the Myriad operations team.**&#x20;
{% endhint %}

***

## **Exercise 2: Managing a Multi-Test Order**

**Persona:** Sam Anderson

<mark style="color:red;">**Duration:**</mark> <mark style="color:red;"></mark><mark style="color:red;">Update</mark>&#x20;

**Objective:** **Objective:** Explore how ServiceNow manages multiple Product Offerings within a single customer order and automatically generates independent fulfillment workflows for each.

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

***

#### Step 2: Compare the Fulfillment Workflows

* Select the **Order Tasks** related list.
* Group the list by **Order Line Item**.
* Expand each group to review the tasks generated for each Product Offering.

**What to Notice**

* Each Product Offering has its own set of Order Tasks.
* The tasks differ because they are generated from the configurable workflow associated with each Product Offering.
* This allows laboratories to configure different operational processes for different tests without requiring separate customer orders.

***

#### Step 3: Compare the Specimens

* Select the **Specimens** related list.
* Review the specimens generated for each Product Offering.

**What to Notice**

* Each Product Offering generates the specimen records required to complete its workflow.
* The number and type of specimens are determined by the Product Offering configuration.

***

#### Step 4: Review the MRD Monitoring Series

* Select the **MRD Monitoring Series** related list.

**What to Notice**

* No **MRD Monitoring Series** records have been generated for this order.
* MRD Monitoring Series records are created only for Product Offerings configured for longitudinal monitoring.
* Since neither Product Offering in this order requires recurring specimen collections, no monitoring series is created.

***

## ✅ Exercise 2 Checkpoint

{% hint style="success" %}
**Congratulations, you have successfully completed scenario 1!**
{% endhint %}

