/**
 * 05_verify.js — MYRIAD-OMS lab build verification
 * Checks all required lab data is present and correct.
 * Run as: Background Script (global scope) on the target instance.
 *
 * Returns PASS with counts, or FAIL with specific gaps.
 */

(function verifyLab() {
  var ORDER_TABLE = "sn_ind_tmt_orm_order";
  var TASK_TABLE  = "sn_ind_tmt_orm_order_task";
  var CASE_TABLE  = "sn_customerservice_case";
  var USER_TABLE  = "sys_user";

  var passed = [], failed = [], warned = [];

  function check(label, condition, detail) {
    if (condition) {
      passed.push(label);
      gs.print("  PASS [" + label + "] " + (detail || ""));
    } else {
      failed.push(label);
      gs.print("  FAIL [" + label + "] " + (detail || ""));
    }
  }

  function warn(label, detail) {
    warned.push(label);
    gs.print("  WARN [" + label + "] " + (detail || ""));
  }

  gs.print("=== MYRIAD-OMS Lab Verification ===");
  gs.print("");

  // --- Order counts ---
  gs.print("--- Orders ---");
  var orderCount = new GlideAggregate(ORDER_TABLE);
  orderCount.addAggregate("COUNT");
  orderCount.query();
  orderCount.next();
  var totalOrders = parseInt(orderCount.getAggregate("COUNT"));
  check("order-count", totalOrders >= 41,
    "Total orders: " + totalOrders + " (expect >=41)");

  // --- Blank descriptions ---
  var blankGr = new GlideRecord(ORDER_TABLE);
  blankGr.addNullQuery("short_description");
  blankGr.query();
  var blankCount = 0;
  while (blankGr.next()) blankCount++;
  check("no-blank-descriptions", blankCount === 0,
    blankCount + " orders with blank description (expect 0)");

  // --- Priority distribution ---
  var critGr = new GlideRecord(ORDER_TABLE);
  critGr.addQuery("priority", "1");
  critGr.query();
  var critCount = 0, critNums = [];
  while (critGr.next()) { critCount++; critNums.push(critGr.getValue("number")); }
  check("critical-count", critCount === 3,
    "Critical orders: " + critCount + " " + JSON.stringify(critNums) + " (expect 3)");

  // --- Story orders ---
  gs.print("");
  gs.print("--- Story Orders ---");
  var STORY = [
    { number: "ORD0002157", priority: "2", desc_contains: "MyRisk" },
    { number: "ORD0002156", priority: "1", desc_contains: "EndoPredict" },
    { number: "ORD0002154", priority: "1", desc_contains: "MRD Baseline" },
    { number: "ORD0002116", priority: "1", desc_contains: "MRD Baseline" }
  ];

  STORY.forEach(function(s) {
    var gr = new GlideRecord(ORDER_TABLE);
    gr.addQuery("number", s.number);
    gr.query();
    if (gr.next()) {
      var pri = gr.getValue("priority");
      var desc = gr.getValue("short_description") || "";
      var priOk = pri === s.priority;
      var descOk = desc.indexOf(s.desc_contains) >= 0;
      check("order-" + s.number,
        priOk && descOk,
        s.number + " priority=" + pri + " (expect " + s.priority + "), desc contains '" + s.desc_contains + "': " + descOk);
    } else {
      check("order-" + s.number, false, s.number + " NOT FOUND");
    }
  });

  // --- Key task ---
  gs.print("");
  gs.print("--- Key Tasks ---");
  var taskGr = new GlideRecord(TASK_TABLE);
  taskGr.addQuery("number", "OMTASK000001092");
  taskGr.query();
  if (taskGr.next()) {
    check("task-OMTASK000001092", true,
      "Found — assigned_to: " + taskGr.getDisplayValue("assigned_to") +
      " priority: " + taskGr.getValue("priority"));
  } else {
    check("task-OMTASK000001092", false, "OMTASK000001092 NOT FOUND — Exercise 3 will fail without this task");
  }

  // Task count
  var taskCount = new GlideAggregate(TASK_TABLE);
  taskCount.addAggregate("COUNT");
  taskCount.query();
  taskCount.next();
  var totalTasks = parseInt(taskCount.getAggregate("COUNT"));
  check("task-count", totalTasks >= 100,
    "Total tasks: " + totalTasks + " (expect >=100)");

  // --- Case CS0001168 ---
  gs.print("");
  gs.print("--- Cases ---");
  var caseGr = new GlideRecord(CASE_TABLE);
  caseGr.addQuery("number", "CS0001168");
  caseGr.query();
  if (caseGr.next()) {
    check("case-CS0001168", true,
      "Found — " + (caseGr.getValue("short_description") || "(no desc)"));
  } else {
    check("case-CS0001168", false, "CS0001168 NOT FOUND — Exercise 4 will fail without this case");
  }

  // --- Personas ---
  gs.print("");
  gs.print("--- Personas ---");
  var PERSONAS = [
    "lydia.chen", "lisa.morgan", "sarah.rice", "julie.castillo", "john.kim.oms"
  ];
  PERSONAS.forEach(function(uname) {
    var uGr = new GlideRecord(USER_TABLE);
    uGr.addQuery("user_name", uname);
    uGr.addQuery("active", true);
    uGr.query();
    check("user-" + uname, uGr.next(), uname);
  });

  // --- Final verdict ---
  gs.print("");
  gs.print("=== VERDICT ===");
  gs.print("PASS: " + passed.length);
  gs.print("WARN: " + warned.length + " " + JSON.stringify(warned));
  gs.print("FAIL: " + failed.length + " " + JSON.stringify(failed));
  gs.print("");
  if (failed.length === 0) {
    gs.print("VERDICT: PASS" + (warned.length > 0 ? "_WITH_WARNS" : ""));
  } else {
    gs.print("VERDICT: FAIL — fix the items above and re-run");
  }
})();
