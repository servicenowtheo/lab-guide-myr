## Challenge: End-to-End Order Lifecycle

**Duration:** ~10 minutes | **Difficulty:** Putting it all together

You've now worked through five guided exercises — navigating workspaces, triaging priority orders, managing tasks, investigating cases, and analyzing team workload. In this challenge, you'll tie it all together by tracing a single order through its full lifecycle, end to end, using everything you've learned.

No step-by-step hand-holding this time. You know where the tools are. Go find them.

---

### Your Mission

You are an operations lead at Myriad Genetics reviewing the highest-priority order in the system. Your goal is to build a complete picture of that order — its summary, its linked tasks, any related cases — and then document what you found in a brief ops report.

---

### Step 1 — Find the Critical Order

Navigate to the **Customer Orders** list and locate **ORD0002156** — the EndoPredict Dx order for breast cancer recurrence risk stratification. Use whatever method feels fastest to you — scrolling, sorting, filtering by number, or using the search bar.

> **Note:** There are 41 orders in the system and three are Priority 1-Critical (two MRD baselines and ORD0002156). ORD0002156 is the one you want — it's the EndoPredict Dx order with a pending surgical decision. If you're having trouble finding it, type `ORD0002156` directly into the Number column search field the way you did in Exercise 3.

---

### Step 2 — Open and Review the Order Record

Open the order record and orient yourself. Before you use any AI tools, take 30 seconds to read the details on your own. Note the priority, the state, the assigned group, and any other fields that stand out.

---

### Step 3 — Summarize with Now Assist

Use **Now Assist Summarize** to generate an AI-powered summary of the order. Read what it produces and compare it to what you observed manually.

Ask yourself: *Did the summary surface anything I missed? Did it confirm what I already saw?*

---

### Step 4 — Investigate Linked Order Tasks

Navigate to the **Order Tasks** list. Your goal is to find any tasks that are associated with ORD0002156. The full queue has hundreds of tasks — you'll need to filter or search to narrow down to the ones linked to this specific order.

> **Note:** Think back to Exercise 3. How did you navigate from an order to its related tasks — or how might you filter the task list to show only tasks for a specific order?

---

### Step 5 — Assess the Task Landscape

For the tasks you found, review their **states** and **assignees**. Ask yourself:

- How many tasks are linked to this order?
- Are any stuck in a particular state?
- Are they spread across multiple people, or concentrated on one?

You don't need to document exact numbers yet — just build a mental picture.

---

### Step 6 — Find Related Cases

Navigate to the **Cases** list. Look for any cases that might be related to this order or its workflow. Case **CS0001168** (*Report delivery failure*) is one known case in the system.

Open the case record and review its details. Check the **Recommendations panel** to see if Now Assist suggests any actions.

> **Note:** Think back to Exercise 4. Where did you find suggested actions on a case record?

---

### Step 7 — Write Your Ops Report

Return to the order record for **ORD0002156**. Open the **Activity** stream and write a brief ops report in the **Work Notes** field. Summarize what you found across your investigation — the order status, task status, any related cases, and your overall assessment.

This doesn't need to be formal. Write 2–4 sentences as if you're briefing a colleague who's picking up the next shift. For example:

*"Reviewed ORD0002156 (P1-Critical, EndoPredict Dx). [X] tasks linked — [your observation about their states]. Found related case CS0001168 for report delivery failure. [Your recommendation or flag for follow-up.]"*

> **Note:** Remember — **Work Notes** are internal. Customers won't see them. This is your team communication channel.

---

### Step 8 — Bonus: Analyze Order Tasks by State

Head back to the **Order Tasks** list (the full list of 358 tasks, not filtered). Use the **Group by** feature to group all tasks by **State**.

- How many distinct states do you see?
- Which state has the most tasks?
- Does the distribution suggest any bottlenecks?

> **Note:** This is the same analytical technique you used in Exercise 5 for team workload — just applied to a different dimension of the data.

---

## 🎉 Congratulations!

You just completed an end-to-end order lifecycle investigation on the ServiceNow Configurable Workspace — with no step-by-step instructions. That means you actually *learned* this, not just followed along.

Here's what you demonstrated in the last 10 minutes:

| Capability | Where You Used It |
|---|---|
| **Workspace Navigation** | Moving fluidly between Orders, Tasks, Cases, and Analytics |
| **List Management** | Filtering, sorting, and searching across 41 orders and 358 tasks |
| **Record Investigation** | Reading order and case detail records to extract key information |
| **Now Assist — Summarize** | Generating an AI summary of a complex order |
| **Now Assist — Recommendations** | Reviewing AI-suggested actions on a case |
| **Activity Stream & Work Notes** | Documenting your findings for team visibility |
| **Analytics & Group By** | Analyzing task distribution to spot operational patterns |

These are the same tools and workflows that Myriad Genetics operations teams will use daily to manage diagnostic test orders, coordinate lab tasks, and resolve customer issues — all from a single pane of glass.

**You're no longer a beginner. You're dangerous.** 🚀