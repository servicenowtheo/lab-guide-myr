/**
 * 03_seed_cases.js — MYRIAD-OMS lab build
 * Seeds the CS0001168 case required for Exercise 4.
 * Run as: Background Script (global scope) on the target instance.
 * IDEMPOTENT: checks by number before inserting.
 */

(function seedCases() {
  var CASE_TABLE = "sn_customerservice_case";
  var ORDER_TABLE = "sn_ind_tmt_orm_order";

  // Resolve ORD0002072 (the order this case relates to)
  var orderGr = new GlideRecord(ORDER_TABLE);
  orderGr.addQuery("number", "ORD0002072");
  orderGr.query();
  var orderSid = orderGr.next() ? orderGr.getUniqueValue() : "";

  // Resolve Julie Castillo (assigned agent)
  var agentGr = new GlideRecord("sys_user");
  agentGr.addQuery("user_name", "julie.castillo");
  agentGr.query();
  var agentSid = agentGr.next() ? agentGr.getUniqueValue() : "";

  var CASES = [
    {
      number: "CS0001168",
      short_description: "Report delivery failure — secure portal issue (ORD0002072)",
      description: "Patient portal failed to deliver genomic report for order ORD0002072. " +
        "Patient (Linda Patel) confirmed she cannot access the MyRisk results via the " +
        "patient-facing portal. IT logged a portal authentication error. " +
        "Physician (Dr. Sarah Chen) is awaiting the report to counsel the patient on " +
        "BRCA2 risk and surgical options. SLA breach risk: physician appointment in 48h.",
      priority: "2",
      state: "2",        // In Progress
      contact_type: "email",
      assigned_to: agentSid
    }
  ];

  var created = 0, updated = 0, failed = 0;

  CASES.forEach(function(c) {
    var gr = new GlideRecord(CASE_TABLE);
    gr.addQuery("number", c.number);
    gr.query();

    var isNew = !gr.next();
    if (isNew) gr.newRecord();

    gr.setValue("number", c.number);
    gr.setValue("short_description", c.short_description);
    gr.setValue("description", c.description);
    gr.setValue("priority", c.priority);
    gr.setValue("state", c.state);
    gr.setValue("contact_type", c.contact_type);
    if (c.assigned_to) gr.setValue("assigned_to", c.assigned_to);
    if (orderSid) gr.setValue("u_related_order", orderSid); // custom field if present
    gr.setWorkflow(false);

    try {
      if (isNew) { gr.insert(); created++; gs.print("CREATED: " + c.number); }
      else { gr.update(); updated++; gs.print("UPDATED: " + c.number); }
    } catch (e) {
      failed++;
      gs.print("FAILED: " + c.number + " — " + e.message);
    }
  });

  gs.print("Cases: created=" + created + " updated=" + updated + " failed=" + failed);
  gs.print("VERDICT: " + (failed === 0 ? "PASS" : "FAIL"));
})();
