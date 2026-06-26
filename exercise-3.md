## Exercise 3: Order Intake & Task Resolution

**Persona:** Sarah Rice — Order Intake Specialist
**Duration:** ~15 minutes
**Objective:** Impersonate Sarah Rice, navigate to the Order Tasks list, locate a critical insurance verification task, open the record, review its form fields and activity stream, and explore the task tabs.

---

**The Scene:** It's the start of Sarah Rice's shift. Before anything else, she triages her task queue — scanning for the highest-priority items that need immediate attention. Today, one task rises to the top: **OMTASK000001092 — Insurance Eligibility Verification — BCBS Federal**. This task is Priority 1-Critical and is currently blocked: the referring physician hasn't yet sent the medical necessity letter that BCBS Federal requires before they'll confirm coverage for MRD (Minimal Residual Disease) testing. Sarah needs to open the task, review the latest updates, and understand exactly where things stand so she can follow up.

---

### Step 1: Impersonate Sarah Rice

Before you can see Sarah's task queue, you need to tell ServiceNow that you want to work as Sarah Rice. This is called **impersonating** a user.

1. Look at the **very top-right corner** of your ServiceNow screen. You will see a small **avatar icon** (it may look like a person's silhouette or your admin initials).
2. **Click** that avatar icon. A dropdown menu will appear.
3. In the dropdown, **click** the option labeled **Impersonate User** (or **Impersonate Another User**).
4. A search dialog will appear. In the search field, **type** `Sarah Rice`.
5. When her name appears in the results list below the search field, **click** on **Sarah Rice** to select her.
6. **Click** the **Impersonate User** button (or simply click her name if it immediately switches).

The page will briefly reload. You are now working as Sarah Rice — everything you see will reflect her role, her permissions, and her assignments.

> **Note:** Impersonation is a training/admin feature. In a real production environment, each user logs in with their own credentials and sees only their own workspace. No one needs to "impersonate" themselves.

---

### Step 2: Open the Configurable Workspace

You should now be inside the **ServiceNow Configurable Workspace** — the main interface Sarah uses every day. Take a moment to orient yourself:

- On the **left side** of the screen, you'll see a **dark-colored sidebar**. This is your primary navigation panel.
- Along the **top of that sidebar**, you'll notice several tabs or links: **All**, **Favorites**, **History**, **Workspaces**, and **Admin**.

If you are not already in the workspace (for example, if you see the older "classic" ServiceNow interface with a white background and a banner across the top), do the following:

1. In the left sidebar, **click** the tab labeled **Workspaces**.
2. From the list that appears, **click** on the workspace your lab uses (it may be labeled **CSM/FSM Configurable Workspace**, **OMS Workspace**, or similar — your instructor will confirm the exact name).

You should now see the workspace with its dark left sidebar.

> **Note:** The "workspace" is ServiceNow's modern, streamlined interface designed for daily task work. Think of it like the "home base" where all of Sarah's work happens — lists, records, and activity streams are all accessible from here without leaving this view.

---

### Step 3: Navigate to Order Tasks — All

Now you need to find the list of **all Order Tasks** — the master queue of work items across the OMS lab.

1. In the **dark left sidebar**, look for a section called **Default lists** (you may need to scroll down slightly in the sidebar to find it).
2. Under Default lists, you'll see a category called **Order Tasks**. **Click** on **Order Tasks** to expand it.
3. When it expands, you'll see a sub-option labeled **All**. **Click** on **All**.

The main area of your screen (the large panel to the right of the sidebar) will now display a **table** — a list of all Order Tasks in the system.

> **Note:** "All" means every Order Task regardless of status, priority, or who it's assigned to. In a real shift, Sarah might use filtered views, but for this exercise, we're starting with the full list so you can learn how the workspace displays data.

![Order Tasks — All list showing 358 records in the workspace table](s-order-tasks-all.png)
*You should see a view similar to this screenshot — a table of Order Tasks with 358 total records.*

---

### Step 4: Understand the List Columns

Before searching for Sarah's task, take a moment to read the **column headers** across the top of the table. Each column tells you something different about every task:

| Column | What It Tells You |
|---|---|
| **Number** | The unique ID for the task (e.g., OMTASK000001092). Every task gets its own number — no two are alike. |
| **Short description** | A brief summary of what the task involves (e.g., "Insurance Eligibility Verification — BCBS Federal"). |
| **Priority** | How urgent the task is. **1-Critical** is the highest; it means this task demands immediate attention. |
| **State** | Where the task is in its lifecycle — Draft, Awaiting information, In progress, etc. |
| **Assigned to** | The person responsible for working this task right now. |
| **Task type** | The category of work (e.g., verification, accessioning, lab prep). |
| **Jeopardy** | A flag indicating whether the task is at risk of missing its SLA (Service Level Agreement) deadline. |

> **Note:** You can think of this list like a shared spreadsheet that the entire OMS team can see. Each row is one task; each column is one piece of information about that task.

---

### Step 5: Locate OMTASK000001092

The list contains **358 tasks** — far too many to scan manually. You need to find Sarah's specific task. Here's how:

1. Look at the **very first column header** in the table — it says **Number**.
2. **Click directly on the column header text** that says **Number**. A small **search/filter field** will appear just below the header (it looks like a narrow text box embedded in the column).
   - *If clicking the header sorts the column instead of showing a search box, look for a small **funnel icon** (🔍) next to the column name and click that instead.*
3. In that search field, **type**: `OMTASK000001092`
4. **Press the Enter key** on your keyboard.

The list will filter down. You should now see **one row**:

| Number | Short description | Priority | State | Assigned to |
|---|---|---|---|---|
| OMTASK000001092 | Insurance Eligibility Verification — BCBS Federal | 1-Critical | Draft | Sarah Rice |

> **Note:** Filtering by the Number column is the fastest way to find a specific task when you already know its ID. You could also filter by "Assigned to" to see all of Sarah's tasks — but for now, we're targeting one specific record.

---

### Step 6: Open the Task Record

Now that you can see OMTASK000001092 in the filtered list, you need to **open** it to see its full details.

1. In the filtered list, find the row for **OMTASK000001092**.
2. **Click** on the **blue, underlined text** that reads `OMTASK000001092` in the Number column. (It's a hyperlink — just like clicking a link on a webpage.)

The screen will change to a **split-pane view** — the task record's detail view:

- **Left pane:** The **form** — a structured set of fields containing all the task's data (Number, State, Priority, Account, Assignment group, Assigned to, and more).
- **Right pane:** The **Activity stream** — a chronological feed of comments, work notes, and updates related to this task. You'll also see tabs for **Comments** and **Work Notes** above the stream.

![OMTASK000001092 detail view — split-pane with form fields on the left and activity stream on the right](s-omtask-detail.png)
*Your screen should look similar to this screenshot — the form on the left, the activity feed on the right.*

> **Note:** The split-pane layout is one of the most important views in the workspace. You'll spend a large portion of every shift in this view — reading task details on the left while reviewing the conversation history on the right.

---

### Step 7: Review the Form Fields (Left Pane)

Look at the **left pane** of the split view. This is the **task form** — it contains structured data about OMTASK000001092. Locate and read each of the following fields:

| Field | Value You Should See | What It Means |
|---|---|---|
| **Number** | OMTASK000001092 | The unique task identifier. |
| **State** | Draft | This task has been created but not yet moved into active work. Sarah will update this once she begins working it. |
| **Priority** | 1-Critical | Highest urgency. This insurance verification is blocking downstream lab work. |
| **Account** | *(The patient's insurance account or ordering facility — read whatever value is displayed.)* | Identifies which account or organization this task relates to. |
| **Assignment group** | *(Read the value displayed.)* | The team responsible for this category of work. |
| **Assigned to** | Sarah Rice | Sarah owns this task — it's in her personal queue. |
| **Customer order** | *(Read the value displayed.)* | Links this task back to the original customer/patient order. |
| **Order line item** | *(Read the value displayed.)* | The specific test or service within the order that this task supports. |
| **Parent** | *(Read the value displayed, if any.)* | If this task is a subtask of a larger task, the parent task is shown here. |

> **Note:** You don't need to memorize every field right now. The key takeaway is that the form gives you the **structured "who, what, and where"** of the task — who it's assigned to, what state it's in, and where it fits within the larger order.

---

### Step 8: Read the Activity Stream (Right Pane)

Now shift your attention to the **right pane**. This