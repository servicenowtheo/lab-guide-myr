## Exercise 5: Analytics & AI Insights

**Persona:** John Kim — Supervisor / Analytics Lead
**Duration:** ~15 minutes

**Objective:** Impersonate John Kim, explore the full Customer Orders queue, navigate to Order Tasks and use the **Group by** feature to analyze team workload distribution and task states, then use Now Assist's global search to ask a natural language question about your data.

---

**Scene:** It's Monday morning. John Kim runs the weekly operations review for the OMS team. Leadership wants answers to three questions: *How many orders are in the pipeline? How is work distributed across the team? Are there any critical tasks that need immediate attention?* Instead of pulling data from three different spreadsheets, John opens the ServiceNow Configurable Workspace — a single-pane view across orders, tasks, and AI-assisted insights.

---

### Steps

---

### Step 1: Impersonate John Kim

Before we begin, you need to act as John Kim so the workspace reflects his supervisor role and permissions.

1. In the **top-right corner** of your ServiceNow screen, click your **profile avatar** (it may show your initials or a generic person icon).
2. From the dropdown menu, select **Impersonate User**.
3. A dialog box will appear. In the search field, type **John Kim**.
4. Select **John Kim** from the results and click **Impersonate User**.

> **Note:** Impersonation lets you experience the platform exactly as John Kim would — seeing his dashboards, his permissions, and his workspace layout. You are not changing any account settings; you are simply "wearing his badge" for this exercise.

5. The page will reload. Confirm that the name near the profile avatar now shows **John Kim**.

---

### Step 2: Navigate to the OMS Workspace

1. Look at the **dark left sidebar**. At the very top of the sidebar, you will see a row of navigation tabs: **All | Favorites | History | Workspaces | Admin**.

> **Note:** These tabs control what appears in the sidebar below them. Think of them like folder tabs in a filing cabinet — each one reveals a different set of modules.

2. Click the **Workspaces** tab.
3. From the list of available workspaces, locate and click **OMS** (Order Management System). The workspace will open and the sidebar will now display the OMS modules: **Customer Orders**, **Order Tasks**, and **Cases**.

---

### Step 3: Review the Customer Orders Queue

Let's start John's weekly review by looking at the overall order pipeline.

1. In the left sidebar, click **Customer Orders**.
2. The main content area will load a **list view** — a table showing all customer orders. This is similar to a spreadsheet, with rows (one per order) and columns (details about each order).

📸 *Refer to screenshot:* **s-orders-list-page1.png** — *This shows the Customer Orders All list.*

3. Look at the **record count** displayed just above the list (or in the list header area). You should see **41 records** total, with order numbers ranging from approximately **ORD0001001** to **ORD0002157**.

> **Note:** This count tells John at a glance how large the current pipeline is. Forty-one active orders is the number he'll report to leadership.

4. Take a moment to **scan the list columns**. You'll see information like order number, priority, state, and other details. Notice whether any orders show **Critical** or **High** priority — John will want to flag those.

---

### Step 4: Navigate to Order Tasks — See the Full Team Workload

Customer Orders are the "big picture." Now John needs to zoom in to the task level — the individual pieces of work his team is executing.

1. In the left sidebar, click **Order Tasks**.
2. A new list view loads showing all order tasks. Look at the record count — you should see **358 records** total.

📸 *Refer to screenshot:* **s-order-tasks-all.png** — *This shows the Order Tasks All list with OMTASK numbers, descriptions, priorities, and assignees.*

3. Review the **column headers** across the top of the list. You should see:
   - **Number** — the task ID (e.g., OMTASK0010045)
   - **Short description** — what the task is about
   - **Priority** — how urgent it is
   - **State** — where it stands (Draft, Awaiting information, In progress)
   - **Assigned to** — which team member owns it
   - **Task type** — the category of work
   - **Jeopardy** — whether the task is at risk of missing its deadline

> **Note:** This is John's "command center." Three hundred fifty-eight tasks across the team — but who has the most work? And how many tasks are stuck? The next two steps will answer those questions without any manual counting.

---

### Step 5: Group Tasks by Assigned To — See Workload Distribution

Now we'll use one of the most powerful list features in ServiceNow: **Group by**. This instantly reorganizes your list into sections based on any field you choose — no formulas, no pivot tables.

1. Look at the **list toolbar** — the horizontal bar directly above the first row of data in your Order Tasks list. It contains several small buttons and controls for manipulating the list.

2. Locate the **Group by** button in the toolbar.

> **Note:** The **Group by** button groups your list into collapsible sections organized by the field you select. Think of it like sorting a deck of cards into piles by suit — except here, you're sorting tasks into piles by team member, by state, or by any other column.

3. Click the **Group by** button. A dropdown menu will appear showing the available fields you can group by.

4. Select **Assigned to**.

5. Watch the list transform. Instead of one long table, you now see **sections** — each section is headed by a team member's name with a count of their tasks. You should see names like:
   - **Sarah Rice**
   - **Sarah Chen**
   - **Marcus Webb**
   - **Priya Nair**
   - *(and others)*

6. **Scan the counts.** Each section header shows how many tasks belong to that person. This is John's instant workload distribution view:
   - Is one person carrying significantly more tasks than others?
   - Is anyone's section suspiciously empty (maybe they need tasks assigned)?
   - Are there tasks with **no assignee** (an "(empty)" group)?

> **Note:** In a traditional review, John would export data to Excel, build a pivot table, and create a chart. Here, he got the same answer in two clicks — directly from live data.

---

### Step 6: Regroup Tasks by State — See Pipeline Health

Now let's answer the second leadership question: *How many tasks are in each state?*

1. The **Group by** button should still be active (your list is still grouped by Assigned to). Click the **Group by** button again.

2. This time, select **State**.

3. The list reorganizes into new sections, one for each task state. You should see groups like:
   - **Draft** — tasks that have been created but not yet started
   - **Awaiting information** — tasks that are blocked, waiting for input
   - **In progress** — tasks that team members are actively working on

4. **Read the counts** in each section header. Ask yourself the questions John would ask:
   - How many tasks are stuck in **Awaiting information**? (This could signal bottlenecks — someone is waiting for a customer response, a lab result, or an approval.)
   - How many are still in **Draft**? (Are these new tasks that haven't been picked up yet?)
   - Is the **In progress** count healthy relative to the total 358?

> **Note:** This two-step grouping exercise — first by **Assigned to**, then by **State** — gives John a complete picture of *who* is doing *what* and *where things stand*. It's the foundation of his weekly operations report.

5. To **clear the grouping** and return to the standard flat list, click the **Group by** button once more and select **None** (or the option to remove grouping). Your list will return to its original 358-record flat view.

---

### Step 7: Try the Sort Feature

While you're in the Order Tasks list, let's also try sorting.

1. Look at the list toolbar again and locate the **Sort by** button (it's near the Group by button).

2. Click **Sort by** and select **Priority**.

3. The list reorders so that the highest-priority tasks appear at the top. This is another way John can quickly identify what needs attention first — without scrolling through all 358 records.

> **Note:** **Group by** creates visual sections; **Sort by** reorders the rows. You can use both together — for example, group by State and sort by Priority within each group — to build exactly the view you need.

---

### Step 8: Use Now Assist — Ask a Natural Language Question

John has reviewed workload distribution and pipeline health using built-in list tools. Now he wants to use **Now Assist** — ServiceNow's AI-powered assistant — to quickly surface critical items.

1. Look at the **very top of the screen**, in the top navigation bar. You will see a search bar that reads: **"Search or ask Now Assist"**.

> **Note:** This search bar is more than a keyword search. It understands **natural language questions** — meaning you can type a question the way you'd ask a colleague, and the AI will try to find the answer from your platform data.

2. Click into the **Search or ask Now Assist** bar.

3. Type the following question exactly as written:

   **`show me critical order tasks`**

4. Press **Enter** (or click the search/submit icon).

5. Review the results. Now Assist will return a set of results — these may include order tasks flagged as **Critical** priority, or tasks with jeopardy indicators. The results appear directly in the workspace, allowing John to scan them without building a filter manually.

> **Note:** You can ask Now Assist many types of questions: *"How many order tasks are assigned to Sarah Rice?"*, *"What orders are in draft state?"*, or *"Show me overdue tasks."* Experiment with your own questions if time permits — this is a safe environment and you won't break anything.

---

### Step 9: Open a Specific Order and Review Now Assist Summary

Finally, let's see how Now Assist can summarize a specific record — saving John from reading through every field and every comment in the activity log.

1. Navigate back to **Customer Orders** by clicking **Customer Orders**