/**
 * 02_seed_tasks.js — MYRIAD-OMS lab build
 * Seeds the key Order Task required for Exercise 3.
 * Run as: Background Script (global scope) on the target instance.
 * IDEMPOTENT: checks by number before inserting.
 *
 * NOTE: On CloudLabs instances with the sn_ind_tmt_orm plugin pre-installed,
 * OMTASK000001092 is typically already seeded by the plugin. This script
 * will update it if found (ensuring correct values) or create it if missing.
 *
 * Key task for Exercise 3:
 *   OMTASK000001092 — Insurance Eligibility Verification — BCBS Federal
 *   Assigned to: Sarah Rice | Priority: 1-Critical | Linked to: ORD0002156
 */

(function seedTasks() {
  var TASK_TABLE  = "sn_ind_tmt_orm_order_task";
  var ORDER_TABLE = "sn_ind_tmt_orm_order";
  var USER_TABLE  = "sys_user";

  // Resolve story order ORD0002156 (Patricia Williams, EndoPredict)
  var orderGr = new GlideRecord(ORDER_TABLE);
  orderGr.addQuery("number", "ORD0002156");
  orderGr.query();
  var orderSid = orderGr.next() ? orderGr.getUniqueValue() : "";
  if (!orderSid) gs.print("WARNING: ORD0002156 not found — tasks will not be linked to the order");

  // Resolve Sarah Rice
  var userGr = new GlideRecord(USER_TABLE);
  userGr.addQuery("user_name", "sarah.rice");
  userGr.query();
  var sarahSid = userGr.next() ? userGr.getUniqueValue() : "";
  if (!sarahSid) gs.print("WARNING: sarah.rice not found — run 04_seed_users.js first");

  var TASKS = [
    {
      number: "OMTASK000001092",
      short_description: "Insurance Eligibility Verification — BCBS Federal",
      description: "BCBS Federal requires a medical necessity letter from the referring " +
        "physician before confirming coverage for MRD (Minimal Residual Disease) testing. " +
        "Letter has not yet been received. Patient: Patricia Williams. Order: ORD0002156. " +
        "Blocking downstream lab work — insurance must confirm prior to sample processing. " +
        "Follow up with Dr. Lydia Chen's office at Huntsman Cancer Institute.",
      priority: "1",
      state: "0",          // Draft
      task_type: "insurance_verification",
      order: orderSid
    },
    {
      number: "OMTASK000001093",
      short_description: "Informed Consent Verification — EndoPredict Dx",
      description: "Verify signed informed consent form for EndoPredict Dx genomic testing. " +
        "Patient: Patricia Williams. Consent form submitted via patient portal but signature " +
        "page is missing. Requires follow-up with patient or referring office.",
      priority: "2",
      state: "0",
      task_type: "consent_verification",
      order: orderSid
    },
    {
      number: "OMTASK000001094",
      short_description: "Sample Accessioning — EndoPredict FFPE block receipt",
      description: "Awaiting FFPE tissue block from surgical pathology at Huntsman Cancer " +
        "Institute. Block requested 2026-06-20. Chain of custody form required on arrival. " +
        "Patient: Patricia Williams. Order: ORD0002156.",
      priority: "2",
      state: "0",
      task_type: "sample_logistics",
      order: orderSid
    }
  ];

  var created = 0, updated = 0, failed = 0;

  TASKS.forEach(function(t) {
    var gr = new GlideRecord(TASK_TABLE);
    gr.addQuery("number", t.number);
    gr.query();

    var isNew = !gr.next();
    if (isNew) gr.newRecord();

    gr.setValue("number", t.number);
    gr.setValue("short_description", t.short_description);
    gr.setValue("description", t.description);
    gr.setValue("priority", t.priority);
    gr.setValue("state", t.state);
    if (sarahSid) gr.setValue("assigned_to", sarahSid);
    if (t.order) gr.setValue("order", t.order);
    if (t.task_type) gr.setValue("task_type", t.task_type);
    gr.setWorkflow(false);

    try {
      if (isNew) { gr.insert(); created++; gs.print("CREATED: " + t.number + " — " + t.short_description); }
      else        { gr.update(); updated++; gs.print("UPDATED: " + t.number + " — " + t.short_description); }
    } catch(e) {
      failed++;
      gs.print("FAILED:  " + t.number + " — " + e.message);
    }
  });

  gs.print("");
  gs.print("Tasks: created=" + created + " updated=" + updated + " failed=" + failed);
  gs.print("VERDICT: " + (failed === 0 ? "PASS" : "FAIL"));
})();
