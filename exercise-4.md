## Exercise 4: Order Support Services

**Persona:** Julie Castillo — Order Support Services
**Duration:** ~15 minutes
**Objective:** Impersonate Julie Castillo, navigate to the Cases list, open case CS0001168 (a report delivery failure tied to a secure portal issue), review the case details and Activity feed, and use Now Assist AI to generate suggested actions from the Recommendations panel.

---

**Scene:** Julie Castillo handles everything that goes wrong *after* an order has been placed — delivery failures, missing results, portal access issues, and other post-order problems. Case **CS0001168** is a high-priority ticket: a provider couldn't access their test results through Myriad's secure portal. The case is linked to order **ORD0002072**. This is the kind of escalation Julie sees regularly. She typically resolves it by coordinating with the portal team, but first she needs to review the case details and see what the system recommends.

---

### Step 1: Impersonate Julie Castillo

You need to tell ServiceNow that you want to work as Julie Castillo. This is called **impersonating** a user.

1. Look at the **very top-right corner** of the ServiceNow screen. You will see a small **avatar icon** (it may look like a person's silhouette or initials).
2. **Click** that avatar icon. A dropdown menu will appear.
3. In the dropdown, look for the option labeled **"Impersonate user"** and **click** it.
4. A dialog box (a small pop-up window) will appear with a search field. **Click** into the search field and type: **Julie Castillo**
5. As you type, a list of matching names will appear below the search field. When you see **Julie Castillo**, **click** her name to select it.
6. **Click** the **"Impersonate user"** button in the dialog box to confirm.

The page will briefly reload. You are now working as Julie Castillo. You may notice the avatar or name in the top-right corner has changed to reflect Julie's identity.

> **Note:** Impersonation is a lab/training feature. It lets you experience the system exactly as that person would see it — including their permissions, assigned cases, and workspace layout. You are not changing any real account settings.

---

### Step 2: Open the Configurable Workspace

Now you need to navigate to the CSM/FSM Configurable Workspace — this is the main screen where Julie does her work.

Look at the **very top of the screen**, spanning the full width of the page. This is the **top navigation bar**. It contains tabs from left to right:

**All** | **Favorites** | **History** | **Workspaces** | **Admin**

> **Note:** Do not confuse this with the dark left sidebar (which has icons and module lists). The **All**, **Favorites**, **History**, **Workspaces**, and **Admin** tabs are in the **top navigation bar** — a separate horizontal strip at the very top of the page.

1. **Click** the tab labeled **Workspaces** in the top navigation bar.
2. A list of available workspaces will appear. Look for **"CSM/FSM Configurable Workspace"** (or a similarly named workspace your instructor has specified).
3. **Click** it to open the workspace.

The screen will change to the workspace view. This is Julie's home base — a purpose-built interface for managing customer service cases.

> **Note:** A **workspace** in ServiceNow is different from the standard platform interface. It is a streamlined, modern-looking environment designed for agents who work on cases all day. Everything Julie needs — case lists, case details, and AI tools — lives inside this workspace.

---

### Step 3: Navigate to the Cases List

You need to find the list of all cases so you can locate CS0001168.

1. In the **dark left sidebar**, look for a section called **"Default lists"** or simply **"Lists"**. Below it, you should see a grouping or menu item labeled **"Cases"**.
2. **Click** on **"Cases"** to expand it (if it is collapsed). You will see sub-options appear beneath it.
3. **Click** on **"All"**. This tells the system to show you *every* case, with no filters applied.

The main area of the screen (the large center/right portion) will now display a **list view** — a table of all cases. Each row is one case. The columns across the top of the table include:

| Column | What it shows |
|---|---|
| **Number** | The unique case ID (e.g., CS0001168) |
| **Short description** | A brief summary of the issue |
| **Priority** | How urgent the case is (e.g., 2-High) |
| **State** | Where the case is in its lifecycle (e.g., New, In Progress) |

You may also see additional columns such as Channel, Account, Contact, and others.

> **Note:** This list view is like a spreadsheet of all cases in the system. You can scroll down to see more cases, or use the search/filter tools at the top to narrow the list. For now, you will visually scan for the case you need.

---

### Step 4: Locate Case CS0001168

Now scan the list to find Julie's case.

1. Look through the **Number** column for the value **CS0001168**. You can scroll down through the list if needed.
2. As you scan, confirm the matching details in the other columns:
   - **Short description:** `Report delivery failure — secure portal issue (ORD0002072)`
   - **Priority:** `2-High`
   - **State:** `New`
   - **Channel:** `Web`

> **Note:** If the list is long and you are having difficulty finding the case, you can use the **search bar** at the top of the list. Click into it and type **CS0001168**, then press **Enter** on your keyboard. The list will filter to show only matching results.

---

### Step 5: Open the Case Record

1. Once you have located **CS0001168** in the list, **click** directly on the case number **"CS0001168"** (it will appear as a blue, clickable hyperlink).

The workspace will change from the list view to a **case record detail view**. This view is divided into multiple sections, arranged in a **split-pane layout** (meaning the screen is divided into panels sitting side by side):

| Panel position | What it contains |
|---|---|
| **Left panel** | The case form — fields like Contact, Consumer, Account, and other lookup fields |
| **Center panel** | Communication tabs (**Comments**, **Work notes**, **Email**) and the **Activity stream** below them |
| **Right panel** | The **Recommendations** panel — including Now Assist AI suggestions |

At the **top of the case record**, you will also see a row of action buttons: **Create** (with a dropdown arrow), **Manage case** (with a dropdown arrow), and **Save**.

![](.gitbook/assets/MYRIAD-OMS/s-cs0001168-detail.png)

---

### Step 6: Review the Case Form Fields (Left Panel)

Take a moment to review the key information on the left panel of the case record. This is the **case form** — a structured collection of fields that capture all the important details about this issue.

1. Look at the **left panel** of the screen. You will see labeled fields such as:
   - **Contact** — The person who reported the problem (a lookup field — it references a specific person in the system).
   - **Consumer** — The end consumer or patient associated with this case (another lookup field).
   - **Account** — The organization or provider group involved.
   - **Priority** — Confirm it shows **2-High**.
   - **State** — Confirm it shows **New**.

2. You do not need to change anything. Simply **read through the fields** to understand the case context.

> **Note:** **Lookup fields** are special fields that link to other records in ServiceNow. Instead of typing free text, they reference a specific person, account, or item in the system's database. You may notice a small magnifying glass icon 🔍 next to these fields — that icon lets you search for and select a record. For now, just observe the values already filled in.

---

### Step 7: Review the Short Description

At the top of the case form (or prominently displayed near the case number), find the **Short description** field. It reads:

**`Report delivery failure — secure portal issue (ORD0002072)`**

This tells Julie (and anyone else looking at this case) exactly what happened: a report could not be delivered because of a problem with the secure portal, and the issue is connected to order number ORD0002072.

---

### Step 8: Review the Activity Feed (Center Panel)

Now look at the **center panel** of the screen. This is where all communication and case history lives.

1. At the top of the center panel, you will see **tabs** labeled:
   - **Comments** — For customer-visible notes
   - **Work notes** — For internal-only notes (visible to agents, not to the customer)
   - **Email** — For email correspondence tied to this case

2. Below these tabs is the **Activity stream**. This is a chronological feed (like a timeline) showing every action that has been taken on this case. Each entry has a timestamp and a description of what happened.

3. Look for the following activity entry:
   > **"System Administrator changed state and added 3 updates"** — *5 hours ago*

   This tells you that approximately 5 hours ago, a System Administrator made changes to this case — they changed the case's state and added 3 updates (these could be comments, work notes, or field changes).

4. **Scroll** through the Activity stream to see if there are any additional entries. Read them to build a complete picture of the case's history.

> **Note:** The Activity stream is one of the most important sections of any case. It is the single source of truth for *everything* that has happened — who did what, when, and what they said. Julie would check this first whenever she picks up a case to understand the full history before taking action.

---

### Step 9: Locate the Recommendations Panel (Right Panel)

Now turn your attention to the **right panel** of the screen. This is the **Recommendations panel**.

1. Look at the far-right side of the screen. You will see a panel with a tab labeled:
   - **Suggested actions (1)**

   The number in parentheses — **(1)** — tells you that the system has **one** recommendation ready for you to explore.

2. Below the tab label, you will see text that reads something like:

   > **"Portal authentication error — secure delivery channel unavailable. Suggested action: Escalate to IT Operations to investigate authentication failure and restore delivery channel."**

   This is Now Assist's AI-generated recommendation. It read the case description, the linked order, and the case history — and surfaced the most likely next action.

3. Read the recommendation carefully. You don't have to act on it right now, but take note of what it says and which team it points to.

> **Note:** This is **Now Assist** in action — ServiceNow's AI capability applied to case management. Instead of Julie having to decide "who should handle this?" from scratch, Now Assist reviews similar past cases and the current case context to suggest the most effective next step. In a high-volume environment with dozens of cases, this saves significant decision time.

---

### Step 10: Review What Julie Knows

Julie has now completed her initial review of CS0001168. Before taking action, she mentally assembles the picture:

| What she knows | Detail |
|---|---|
| **The issue** | Patient portal failed to deliver genomic report for ORD0002072 |
| **Who is waiting** | Patient: Linda Patel. Physician: Dr. Lydia Chen |
| **Time pressure** | Dr. Lydia Chen has a patient appointment in 48 hours — she needs the results to counsel the patient on BRCA2 risk |
| **Root cause hint** | IT logged a portal authentication error |
| **Recommended action** | Escalate to IT Operations |

> **Note:** Julie does not need to diagnose the technical failure herself — that's IT's job. Her role is to coordinate: get IT moving, set expectations with the physician, and make sure the case moves forward. ServiceNow gives her all the context she needs to do that without picking up the phone for a status call.

1. **Do not** close the case or change its State in this exercise. Leave CS0001168 as-is.
2. Simply take stock of the information you found across all three panels and the Activity stream.

---

### Step 11: End Impersonation

You have completed Julie Castillo's scenario.

1. Click the **avatar/name** in the **top-right corner** of the screen (it should still show **Julie Castillo**).
2. In the dropdown menu, click **End Impersonation** (or **Stop Impersonating**).
3. The page will reload and your admin account will be restored.

---

### Checkpoint ✓

You have completed Exercise 4. Before moving on, confirm you can answer these questions:

- **What is the table that holds CS0001168?** *(sn_customerservice_case — the Cases list)*
- **What was the issue in this case?** *(Secure portal delivery failure — patient couldn't access genomic report for ORD0002072)*
- **Who is waiting for the results, and why is timing critical?** *(Patient Linda Patel and physician Dr. Lydia Chen — physician appointment in 48 hours to discuss BRCA2 risk and surgical options)*
- **Where is the Recommendations panel on the case record?** *(Right panel — look for the "Suggested actions" tab with a number in parentheses)*
- **What did Now Assist recommend?** *(Escalate to IT Operations to investigate portal authentication failure)*

---

> **Bridge to Exercise 5 →** You've seen reactive work — Sarah resolving a blocked task, Julie reviewing a support case. Now let's take the supervisor view. **John Kim** runs the weekly operations review and needs answers across the entire OMS pipeline. He uses analytics and AI-assisted search to answer leadership's questions in minutes, not hours.
   > *