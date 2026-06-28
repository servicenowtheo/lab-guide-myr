/**
 * 01_seed_orders.js — MYRIAD-OMS lab build
 * Seeds all 41 Customer Orders required for the lab.
 * Run as: Background Script (global scope) on the target instance.
 *
 * IDEMPOTENT: checks by number before inserting; updates if already exists.
 *
 * Story orders (must have exact values for exercises to work):
 *   ORD0002157 — Rachel Kim, MyRisk BRCA1, Priority 2-High   (Exercise 1)
 *   ORD0002156 — Patricia Williams, EndoPredict, Priority 1-Critical (Ex 2/3/4/Challenge)
 *   ORD0002154 — Dorothy Martinez, MRD Baseline AML, Priority 1-Critical (analytics)
 *   ORD0002116 — Noah Gillen, MRD Baseline DLBCL, Priority 1-Critical (analytics)
 */

(function seedOrders() {
  var TABLE = "sn_ind_tmt_orm_order";
  var ACCOUNT_NAME = "Myriad Genetics";

  // Resolve account sys_id
  var acctGr = new GlideRecord("customer_account");
  acctGr.addQuery("name", ACCOUNT_NAME);
  acctGr.query();
  var accountSid = acctGr.next() ? acctGr.getUniqueValue() : "";
  if (!accountSid) {
    gs.print("WARNING: Account '" + ACCOUNT_NAME + "' not found — orders will have blank account");
  }

  var ORDERS = [
    // ===== STORY ORDERS (exact values required) =====
    { number: "ORD0002157", short_description: "MyRisk 25-Gene Panel — BRCA1 family history", priority: "2", state: "draft" },
    { number: "ORD0002156", short_description: "EndoPredict Dx — Breast cancer recurrence risk stratification", priority: "1", state: "draft" },
    { number: "ORD0002154", short_description: "MRD Baseline — AML FLT3-ITD+ post-induction", priority: "1", state: "draft" },
    { number: "ORD0002155", short_description: "Precise Tumor 500 — AML comprehensive genomic profiling", priority: "2", state: "draft" },
    { number: "ORD0002116", short_description: "MRD Baseline — DLBCL NHL pre-treatment ctDNA", priority: "1", state: "draft" },
    { number: "ORD0002150", short_description: "MyRisk 25-Gene Panel — BRCA2 family history, ovarian cancer", priority: "2", state: "draft" },
    { number: "ORD0002149", short_description: "MyRisk 25-Gene Panel — AML genetic risk profiling", priority: "2", state: "draft" },
    { number: "ORD0002113", short_description: "MRD Monitoring T1 — CML BCR-ABL+ Cycle 3 assessment", priority: "2", state: "draft" },
    // ===== BACKGROUND ORDERS (realistic queue filler) =====
    { number: "ORD0002052", short_description: "MyRisk 25-Gene Panel — maternal breast/ovarian cancer family history", priority: "2", state: "draft" },
    { number: "ORD0002051", short_description: "MyRisk 25-Gene Panel — paternal colon and endometrial cancer hx", priority: "2", state: "draft" },
    { number: "ORD0002070", short_description: "MyRisk 25-Gene Panel — newly dx breast cancer, Ashkenazi Jewish ancestry", priority: "2", state: "draft" },
    { number: "ORD0002081", short_description: "MyRisk 25-Gene Panel — ovarian cancer risk assessment, sister dx age 42", priority: "2", state: "draft" },
    { number: "ORD0002069", short_description: "MyRisk 25-Gene Panel — pancreatic cancer family cluster evaluation", priority: "2", state: "draft" },
    { number: "ORD0002068", short_description: "MyRisk 25-Gene Panel — prostate cancer hx with BRCA2 family variant", priority: "2", state: "draft" },
    { number: "ORD0002071", short_description: "MyRisk Limited — BRCA1/2 targeted testing, triple-negative breast ca", priority: "2", state: "draft" },
    { number: "ORD0002072", short_description: "MyRisk Limited — Lynch Syndrome panel, early-onset colorectal cancer", priority: "2", state: "draft" },
    { number: "ORD0002064", short_description: "MyRisk 25-Gene Panel — gastric cancer family history, hereditary risk", priority: "2", state: "draft" },
    { number: "ORD0002060", short_description: "MRD Baseline — AML pre-induction chemotherapy sample collection", priority: "2", state: "draft" },
    { number: "ORD0002062", short_description: "MRD Monitoring T1 — NHL post-R-CHOP cycle 3 surveillance", priority: "2", state: "draft" },
    { number: "ORD0002061", short_description: "MRD Monitoring T2 — ALL post-consolidation therapy follow-up", priority: "2", state: "draft" },
    { number: "ORD0001001", short_description: "MRD Baseline — multiple myeloma pre-autologous stem cell transplant", priority: "2", state: "draft" },
    { number: "ORD0002063", short_description: "MRD Monitoring T3 — CML post-TKI therapy 12-month assessment", priority: "2", state: "draft" },
    { number: "ORD0002078", short_description: "Precise Tumor 500 — metastatic NSCLC, comprehensive genomic profiling", priority: "2", state: "draft" },
    { number: "ORD0002066", short_description: "Precise Tumor 500 — advanced cholangiocarcinoma, therapy selection", priority: "2", state: "draft" },
    { number: "ORD0002080", short_description: "Precise Tumor 500 — recurrent endometrial carcinoma, molecular profiling", priority: "2", state: "draft" },
    { number: "ORD0002065", short_description: "Precise Tumor 500 — metastatic colorectal adenocarcinoma, biomarker ID", priority: "2", state: "draft" },
    { number: "ORD0002079", short_description: "Prolaris — newly diagnosed Gleason 3+4 prostate cancer, active surveillance", priority: "2", state: "draft" },
    { number: "ORD0002067", short_description: "Prolaris — post-prostatectomy recurrence risk stratification", priority: "2", state: "draft" },
    { number: "ORD0002057", short_description: "Prolaris — low-grade prostate cancer, treatment decision support", priority: "2", state: "draft" },
    { number: "ORD0002056", short_description: "EndoPredict — ER+/HER2- early breast cancer, chemotherapy decision", priority: "2", state: "draft" },
    { number: "ORD0002074", short_description: "EndoPredict — post-lumpectomy node-negative breast ca, recurrence risk", priority: "2", state: "draft" },
    { number: "ORD0002058", short_description: "BRCAplus — expanded panel, bilateral breast cancer dx at age 38", priority: "2", state: "draft" },
    { number: "ORD0002073", short_description: "BRCAplus — ATM/PALB2/CHEK2 reflex, prior negative BRCA1/2 result", priority: "2", state: "draft" },
    { number: "ORD0002077", short_description: "GeneSight Psychotropic — treatment-resistant MDD, SSRI optimization", priority: "2", state: "draft" },
    { number: "ORD0002050", short_description: "GeneSight Psychotropic — bipolar disorder, mood stabilizer selection", priority: "2", state: "draft" },
    { number: "ORD0002076", short_description: "HRD/BRCAness — high-grade serous ovarian cancer, PARP inhibitor eval", priority: "2", state: "draft" },
    { number: "ORD0002075", short_description: "HRD/BRCAness — TNBC neoadjuvant planning, HR deficiency assessment", priority: "2", state: "draft" },
    { number: "ORD0002053", short_description: "Hereditary Prostate Risk Panel — early-onset prostate ca, age 48", priority: "2", state: "draft" },
    { number: "ORD0002055", short_description: "MyRisk Limited — Lynch Syndrome, MSI-high endometrial cancer workup", priority: "2", state: "draft" },
    { number: "ORD0002054", short_description: "MRD Monitoring T1 — AML post-remission induction day 28 assessment", priority: "2", state: "draft" },
    { number: "ORD0002059", short_description: "Precise Tumor 500 — metastatic urothelial carcinoma, immunotherapy eval", priority: "2", state: "draft" }
  ];

  var created = 0, updated = 0, failed = 0;

  ORDERS.forEach(function(o) {
    var gr = new GlideRecord(TABLE);
    gr.addQuery("number", o.number);
    gr.query();

    var isNew = !gr.next();
    if (isNew) gr.newRecord();

    gr.setValue("number", o.number);
    gr.setValue("short_description", o.short_description);
    gr.setValue("priority", o.priority);
    gr.setValue("state", o.state);
    gr.setValue("order_type", "product");
    if (accountSid) gr.setValue("account", accountSid);
    gr.setWorkflow(false);

    try {
      if (isNew) {
        gr.insert();
        created++;
        gs.print("CREATED: " + o.number + " | " + o.short_description.substring(0, 60));
      } else {
        gr.update();
        updated++;
        gs.print("UPDATED: " + o.number + " | " + o.short_description.substring(0, 60));
      }
    } catch (e) {
      failed++;
      gs.print("FAILED:  " + o.number + " — " + e.message);
    }
  });

  gs.print("");
  gs.print("=== Summary ===");
  gs.print("Created: " + created + " | Updated: " + updated + " | Failed: " + failed);
  gs.print("VERDICT: " + (failed === 0 ? "PASS" : "FAIL"));
})();
