/**
 * 04_seed_users.js — MYRIAD-OMS lab build
 * Creates the five lab personas as sys_user records if they don't already exist.
 * Run as: Background Script (global scope) on the target instance.
 *
 * Personas: Lydia Chen, Lisa Morgan, Sarah Rice, Julie Castillo, John Kim
 */

(function seedUsers() {
  var PERSONAS = [
    {
      first_name: "Lydia", last_name: "Chen",
      user_name: "lydia.chen", email: "lydia.chen@huntsman.org",
      title: "Ordering Oncologist", department: "Oncology",
      exercise: "Exercise 1"
    },
    {
      first_name: "Lisa", last_name: "Morgan",
      user_name: "lisa.morgan", email: "lisa.morgan@myriad.com",
      title: "Order Oversight Manager", department: "OMS Operations",
      exercise: "Exercise 2"
    },
    {
      first_name: "Sarah", last_name: "Rice",
      user_name: "sarah.rice", email: "sarah.rice@myriad.com",
      title: "Order Intake Specialist", department: "Order Intake",
      exercise: "Exercise 3"
    },
    {
      first_name: "Julie", last_name: "Castillo",
      user_name: "julie.castillo", email: "julie.castillo@myriad.com",
      title: "Order Support Services", department: "Customer Support",
      exercise: "Exercise 4"
    },
    {
      first_name: "John", last_name: "Kim",
      user_name: "john.kim.oms", email: "john.kim@myriad.com",
      title: "Supervisor, Analytics Lead", department: "OMS Operations",
      exercise: "Exercise 5"
    }
  ];

  var created = [], existing = [], failed = [];

  PERSONAS.forEach(function(p) {
    var check = new GlideRecord("sys_user");
    check.addQuery("user_name", p.user_name);
    check.query();
    if (check.next()) {
      existing.push(p.user_name);
      gs.print("EXISTS: " + p.first_name + " " + p.last_name + " (" + p.user_name + ")");
      return;
    }

    var gr = new GlideRecord("sys_user");
    gr.newRecord();
    gr.setValue("first_name", p.first_name);
    gr.setValue("last_name", p.last_name);
    gr.setValue("user_name", p.user_name);
    gr.setValue("email", p.email);
    gr.setValue("title", p.title);
    gr.setValue("department", p.department);
    gr.setValue("active", true);
    gr.setValue("password_needs_reset", false);
    gr.setWorkflow(false);

    try {
      var sid = gr.insert();
      if (sid) {
        created.push(p.user_name);
        gs.print("CREATED: " + p.first_name + " " + p.last_name + " (" + p.user_name + ") sys_id=" + sid);
      } else {
        failed.push(p.user_name);
        gs.print("FAILED:  " + p.user_name);
      }
    } catch (e) {
      failed.push(p.user_name);
      gs.print("ERROR:   " + p.user_name + " — " + e.message);
    }
  });

  gs.print("");
  gs.print("=== Summary ===");
  gs.print("Created:  " + created.length + " " + JSON.stringify(created));
  gs.print("Existing: " + existing.length + " " + JSON.stringify(existing));
  gs.print("Failed:   " + failed.length + " " + JSON.stringify(failed));
  gs.print("VERDICT: " + (failed.length === 0 ? "PASS" : "FAIL"));
})();
