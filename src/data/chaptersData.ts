import { Chapter } from '../types';

export const chaptersData: Chapter[] = [
  {
    id: 1,
    number: "01",
    titleAr: "نزيف المراحل الأولى من الحمل",
    titleEn: "Bleeding in Early Pregnancy",
    pages: "1 - 10",
    description: "Abortion types, Recurrent Pregnancy Loss (RPL), Ectopic Pregnancy diagnosis and medical/surgical management, and Vesicular Mole (Complete vs. Partial).",
    keyTakeaways: [
      "Categorization of miscarriage via the state of the internal cervical os.",
      "Discriminatory zones of beta-hCG: 1500 mIU/mL for TVS and 3500 mIU/mL for abdominal ultrasound.",
      "Strict criteria and protocols for medical methotrexate therapy in ectopic pregnancy.",
      "Distinction of Complete (androgenic) vs. Partial (triploid) molar pregnancies."
    ],
    clinicalScenarios: [
      {
        scenario: "Maternal patient at 8 weeks with vaginal spotting; speculum shows closed cervix, U/S confirms viable intrauterine embryo.",
        action: "Diagnose as Threatened Miscarriage. Prescribe bed rest, rule out infections like BV, reassure the patient, and monitor."
      },
      {
        scenario: "Hemodynamically unstable patient with severe unilateral pelvic pain, brown discharge, and positive pregnancy test but empty uterus on TVS.",
        action: "Perform immediate resuscitation (ABCDE): insert 2 large-bore IVs, draw crossmatch/coagulation labs, run rapid crystalloids, and prepare for urgent Laparoscopy/Laparotomy Salpingectomy."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Clinical Types of Miscarriage (Abortion)</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-3 bg-emerald-50/50 rounded border border-emerald-100">
              <strong class="text-emerald-800 block">1. Threatened Abortion (الإجهاض المنذر)</strong>
              Mild vaginal spotting or bleeding. Cervical os is closed. Fetus is viable, active and inside the uterus on ultrasound.
            </div>
            <div class="p-3 bg-red-50/50 rounded border border-red-100">
              <strong class="text-red-800 block">2. Inevitable Abortion (الإجهاض الحتمي)</strong>
              Heavy vaginal bleeding and severe colicky lower abdominal pain. Cervical os is dilated/open. No tissue passed yet, but miscarriage cannot be stopped.
            </div>
            <div class="p-3 bg-amber-50/50 rounded border border-amber-100">
              <strong class="text-amber-800 block">3. Incomplete Abortion (الإجهاض غير المكتمل)</strong>
              Heavy bleeding with clots and tissue. Cervical os is open. Retained Products of Conception (RPOC) are still inside. Requires mechanical evacuation.
            </div>
            <div class="p-3 bg-blue-50/50 rounded border border-blue-100">
              <strong class="text-blue-800 block">4. Complete Abortion (الإجهاض المكتمل)</strong>
              Bleeding and pain have subsided. Cervical os is closed. All gestational tissues have completely passed. Ultrasound shows a completely empty uterus.
            </div>
            <div class="p-3 bg-indigo-50/50 rounded border border-indigo-100">
              <strong class="text-indigo-800 block">5. Missed Abortion (الإجهاض المستتر)</strong>
              The fetus has died in utero before 24 weeks but is retained. Minimal brown prune-juice discharge or asymptomatic. Cervical os is closed.
            </div>
            <div class="p-3 bg-purple-50/50 rounded border border-purple-100">
              <strong class="text-purple-800 block">6. Septic Abortion (الإجهاض العفن)</strong>
              Any type of abortion complicated by localized or systemic uterine infection. Features spiked fever, uterine tenderness, and foul-smelling purulent discharge.
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Recurrent Pregnancy Loss (RPL - الإجهاض المتكرر)</h4>
          <p class="text-slate-700 leading-relaxed mb-2">
            Defined as <strong>3 or more spontaneous pregnancy losses</strong> before viability.
          </p>
          <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h5 class="font-semibold text-slate-800 mb-1">Causes and Diagnostic Workup:</h5>
            <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
              <li><strong>Fetal:</strong> Chromosomal and genetic abnormalities (karyotype of both parents is required), Rh isoimmunization.</li>
              <li><strong>Anatomical:</strong> Congenital anomalies (septate uterus, bicornuate, cervical insufficiency), acquired (submucosal fibroids, Asherman Syndrome). DX: 3D Pelvic US, Hysteroscopy, or HSG.</li>
              <li><strong>Endocrine:</strong> Uncontrolled diabetes, severe thyroid disease, luteal phase defect. DX: HbA1c, TSH, free T4.</li>
              <li><strong>Immunological:</strong> Antiphospholipid Syndrome (APS). Causes thrombosis in placental vessels. DX: Lupus anticoagulant, anticardiolipin, and anti-beta2-glycoprotein-I antibodies.</li>
            </ul>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Ectopic Pregnancy (الحمل خارج الرحم)</h4>
          <p class="text-slate-700 leading-relaxed">
            Classic Symptom Triad: <strong>Amenorrhea (6-8 weeks)</strong>, <strong>Abdominal/Pelvic Pain</strong> (most common, unilateral), and <strong>Scanty dark brown vaginal bleeding ("prune-juice")</strong>. Note that only 50% of patients present with the complete triad.
          </p>
          <div class="bg-amber-50 p-3 my-2 rounded border border-amber-200 text-sm">
            <strong>Discriminatory Zone:</strong> The serum beta-hCG level at which an intrauterine gestational sac must definitely appear.
            <ul class="list-disc list-inside mt-1 font-mono">
              <li>Transvaginal Ultrasound (TVS): 1,500 mIU/mL</li>
              <li>Transabdominal Ultrasound (TAS): 3,500 mIU/mL</li>
            </ul>
            If beta-hCG exceeds 1,500 and no intrauterine sac is visualized, ectopic pregnancy is highly suspected!
          </div>

          <div class="bg-red-50 p-3 rounded border border-red-200 text-sm mt-2">
            <strong>Methotrexate (MTX) Therapy Eligibility Criteria:</strong>
            <p class="mt-1">Patient must be hemodynamically stable, unruptured ectopic, mass size < 3.5-4 cm, beta-hCG < 6,000 mIU/mL, absolute absence of fetal cardiac activity, and normal liver/renal functions.</p>
            <p class="mt-1 text-xs text-red-700 font-semibold font-mono">
              Follow-up: Measure beta-hCG on Day 4 and Day 7. A successful response is indicated by a >=15% drop in beta-hCG between Day 4 and Day 7. Repeat weekly until undetectable.
            </p>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Hydatidiform Vesicular Mole (الحمل العنقودي)</h4>
          <p class="text-slate-700 leading-relaxed">
            Pathological mechanics: Avascular placenta and abnormal trophoblastic hyperproliferation leads to fluid accumulation inside the core. Since there is no functioning fetal system to drain it, the villi swell, forming classic grape-like translucent vesicles.
          </p>
          <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded border border-slate-200 shadow-xs">
              <strong class="text-slate-800 block text-sm border-b pb-1">Complete Molar Pregancy</strong>
              <ul class="list-disc list-inside mt-1 text-xs text-slate-600 space-y-1">
                <li>100% paternal origin (empty egg fertilized by 1 or 2 sperm, 46,XX or 46,XY)</li>
                <li>Absolute absence of embryo/fetal tissue</li>
                <li>Diffuse hydatidiform changes with circumferential hyperplasia</li>
                <li>High malignancy potential: 15-20% progression to GTN</li>
                <li>Snowstorm / Swiss-cheese sound signature on ultrasound</li>
              </ul>
            </div>
            <div class="bg-white p-3 rounded border border-slate-200 shadow-xs">
              <strong class="text-slate-800 block text-sm border-b pb-1">Partial Molar Pregnancy</strong>
              <ul class="list-disc list-inside mt-1 text-xs text-slate-600 space-y-1">
                <li>Triploid chromosomal set (69,XXX, 69,XXY; 1 maternal and 2 paternal sets)</li>
                <li>Fetal tissue or abnormal fetus present</li>
                <li>Patchy, focal hydatidiform abnormalities, mild hyperplasia</li>
                <li>Lower malignancy potential: 1-5% progression to GTN</li>
              </ul>
            </div>
          </div>
          <div class="bg-slate-50 p-3 mt-3 rounded text-xs text-slate-600">
            <strong>Clinical signs of Mole:</strong> Amenorrhea, severe hyperemesis gravidarum (excessive beta-hCG), doughy uterus, fundal height significantly larger than expected dates, and early preeclampsia presentation before 20 weeks.
          </div>
        </section>
      </div>
    `
  },
  {
    id: 2,
    number: "02",
    titleAr: "ارتفاع ضغط الدم مع الحمل",
    titleEn: "Hypertension in Pregnancy",
    pages: "11 - 27",
    description: "Gestational Hypertension, Preeclampsia (PET), Eclampsia seizures, HELLP Syndrome, and magnesium sulfate (MgSO4) protocols.",
    keyTakeaways: [
      "BP threshhold: >= 140/90 mmHg on two occasions at least 4 hours apart.",
      "Pathophysiology of headache & vision blur: cerebral vasospasms, PRES back-lobe edema, increased ICP.",
      "Fluid restrictions to 80ml/hr to avoid pulmonary edema under capillary leakage.",
      "Critical HELLP profile: AST/ALT > 70, Platelets < 100k, hemolysis LDH > 600."
    ],
    clinicalScenarios: [
      {
        scenario: "Severe preeclampsia patient at 32 weeks presents with continuous headaches and visual spots/scotomata.",
        action: "Admit immediately. Initiate seizure prophylaxis using MgSO4, administer IV Hydralazine/Labetalol to lower blood pressure, and give Dexamethasone for fetal lung maturity."
      },
      {
        scenario: "The patient suddenly develops a generalized tonic-clonic fit during active labor.",
        action: "Diagnose as Eclampsia. Call for help, position the patient in left lateral tilt, secure the airway/oxygen, and immediately administer a 4-5g IV MgSO4 loading dose."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Clinical Classifications</h4>
          <ol class="list-decimal list-inside space-y-2 text-slate-700">
            <li><strong>Chronic Hypertension:</strong> Diagnostic high BP before pregnancy or before 20 weeks, or persisting past 12 weeks postpartum.</li>
            <li><strong>Gestational Hypertension:</strong> New onset high BP after 20 weeks of pregnancy without proteinuria.</li>
            <li><strong>Preeclampsia (PET):</strong> New onset high BP after 20 weeks with clinically significant proteinuria (>= 0.3g/24h or spot ratio) or end-organ dysfunction.</li>
            <li><strong>Eclampsia:</strong> Development of generalized convulsive seizures or unexplained coma on top of preeclampsia.</li>
            <li><strong>Superimposed Preeclampsia:</strong> Preeclampsia developing in a patient with pre-existing, chronic high blood pressure.</li>
          </ol>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Severity Stratification of PET</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-3 bg-amber-50 rounded border border-amber-200">
              <strong class="text-amber-800 block text-sm">Mild (Non-Severe) Preeclampsia</strong>
              <p class="text-xs text-slate-600 mt-1">
                BP 140-159 / 90-109 mmHg. Spot protein 1+ or 2+. No system failures, headaches, or pain.
                <em>Treatment:</em> Bed rest, regular assessment of BP and fetal movements, deliver at 38 weeks.
              </p>
            </div>
            <div class="p-3 bg-red-50 rounded border border-red-200">
              <strong class="text-red-800 block text-sm">Severe Preeclampsia</strong>
              <p class="text-xs text-slate-600 mt-1">
                BP >= 160/110 mmHg, OR any BP with severe features:
                Severe persistent headache, blurring of vision, RUQ/epigastric pain (from Glisson's capsule stretching), oliguria (<500 mL/24h), thrombocytopenia (<100,000), pulmonary edema, or creatinine > 1.1 mg/dL.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Pathophysiology</h4>
          <p class="text-slate-700 leading-relaxed text-sm">
            Uncontrolled cytotrophoblasic remodeling failures with uterine spiral arterioles lead to global vasoconstriction and ischemic vascular injuries.
            The placenta cascades toxic anti-angiogenic factors (sFlt-1) into maternal blood. Widespread endothelial dysfunction follows, increasing capillary permeability ("leaky capillaries") and reducing blood oncotic pressure via massive urinary protein loss.
          </p>
          <div class="mt-2 bg-red-50 p-3 rounded border border-red-200 text-xs">
            <strong>Fluid overload hazard:</strong> Due to leaky capillary structures, active water leaks into pulmonary spaces under crystalloid burden. We must restrict total infusions strictly to <strong>80 - 100 mL/hour</strong> (including medication drips).
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. HELLP Syndrome</h4>
          <p class="text-slate-700 leading-relaxed text-sm">
            A life-threatening, severe variant of preeclampsia causing extensive multi-organ injury:
          </p>
          <ul class="list-disc list-inside mt-2 text-xs text-slate-600 space-y-1">
            <li><strong>H (Hemolysis):</strong> Microangiopathic hemolytic anemia with schistocytes, and high LDH (>600 IU/L).</li>
            <li><strong>EL (Elevated Liver enzymes):</strong> Liver cell necrosis with high transaminases (AST/ALT > 70 IU/L).</li>
            <li><strong>LP (Low Platelets):</strong> Platelet consumption resulting in counts < 100,000/mcL.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 3,
    number: "03",
    titleAr: "نزيف ما قبل الولادة",
    titleEn: "Antepartum Hemorrhage (APH)",
    pages: "28 - 56",
    description: "Definition and complete differential diagnosis (Placenta Previa, Abruptio Placentae, Vasa Previa, and local vaginal/cervical causes).",
    keyTakeaways: [
      "Vaginal Examination (PV) is strictly contraindicated until Placenta Previa is excluded by U/S.",
      "The anatomical mechanism behind posterior marginal placenta previa necessitating a C-Section.",
      "Concealed abruption risk of underestimating massive blood loss and triggering consumptive DIC.",
      "Pathology of Couvelaire Uterus: retroplacental myometrium extravasation causing purple-colored atony."
    ],
    clinicalScenarios: [
      {
        scenario: "A patient at 36 weeks gestation presents with sudden, painless, bright red vaginal bleeding.",
        action: "Suspect Placenta Previa. Perform immediate speculum exam for local sources, prepare crossmatched blood, avoid digital PV, perform ultrasound for localization, and manage expectantly (MacAfee scheme) if stable."
      },
      {
        scenario: "A patient with severe preeclampsia presents with sudden, extremely painful, dark vaginal bleeding and a rigid, woody uterus.",
        action: "Diagnose as Placental Abruption (Abruptio Placentae). Check maternal vitals and fetal heart activity. Stabilize with rapid IV fluids and blood. Perform artificial rupture of membranes (amniotomy) to lower intrauterine pressure."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Definitions and Comparison</h4>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-slate-200 border text-xs">
              <thead class="bg-slate-100">
                <tr>
                  <th class="px-3 py-2 text-left font-semibold text-slate-700">Feature</th>
                  <th class="px-3 py-2 text-left font-semibold text-slate-700">Placenta Previa (المشيمة المزاحة)</th>
                  <th class="px-3 py-2 text-left font-semibold text-slate-700">Placental Abruption (انفصال المشيمة)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 bg-white">
                <tr>
                  <td class="px-3 py-2 font-medium text-slate-900">Bleeding Character</td>
                  <td class="px-3 py-2">Painless, causeless, recurrent, bright red blood. Often starts during sleep.</td>
                  <td class="px-3 py-2">Highly painful, sudden, continuous, dark altered blood. Triggered by trauma/HTN.</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium text-slate-900">Uterine Status</td>
                  <td class="px-3 py-2">Uterus is soft, relaxed, and non-tender on palpation.</td>
                  <td class="px-3 py-2">Uterus is tense, highly tender, rigid, and "woody hard."</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium text-slate-900">Fetal Presentation</td>
                  <td class="px-3 py-2">Malpresentations (breech/transverse) and high unengaged head are common.</td>
                  <td class="px-3 py-2">Fetal parts are difficult/impossible to palpate due to high uterine tone.</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium text-slate-900">Primary Etiology</td>
                  <td class="px-3 py-2">Prior C-section scans, high parity, advanced age (>35), or smoking histories.</td>
                  <td class="px-3 py-2">Hypertension/Preeclampsia, blunt trauma, sudden ROM, or cocaine use histories.</td>
                </tr>
                <tr>
                  <td class="px-3 py-2 font-medium text-slate-900">Ultrasound Sign</td>
                  <td class="px-3 py-2">Implanted placenta in lower uterine segment covering or next to the internal os.</td>
                  <td class="px-3 py-2">Retroplacental hematoma with normally situated upper/fundal placenta.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Quick Clinical Scrutiny: Why Marginal Posterior requires C/S?</h4>
          <p class="text-slate-750 text-sm leading-relaxed">
            If the placenta lies in the <strong>marginal posterior position</strong>, it directly covers the bony, thick sacral promontory. This physically compromises the pelvic inlet space (the true conjugate diameter) and arrests the fetal head from engaging.
            If the placenta is <strong>anterior</strong>, the descending fetal head easily compresses the bleeding placental lip against the flat pubic symphysis, self-limiting the bleeding and permitting a vaginal delivery trial.
          </p>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Vasa Previa (الأوعية المزاحة)</h4>
          <p class="text-slate-750 text-sm leading-relaxed mb-2">
            A critical condition where unprotected fetal blood vessels cross the internal cervical os, within 2 cm of the membranes. It is highly associated with velamentous cord insertion or succenturiate/bilobed placentas.
          </p>
          <ul class="list-disc list-inside text-xs text-slate-600 bg-red-50 p-3 rounded border border-red-200">
            <li><strong>Blood origin:</strong> 100% fetal. The mother loses none of her own blood and remains completely stable.</li>
            <li><strong>Fetal outcomes:</strong> Sudden rupture of membranes tears the vessels, causing rapid neonatal exsanguination (fetal blood volume is only ~80-90 mL/kg; losing 30-50 mL causes fatal hypovolemic shock).</li>
            <li><strong>Action:</strong> Elective C-Section scheduled early at 34 - 35 weeks before labor/rupture starts.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 4,
    number: "04",
    titleAr: "نزيف ما بعد الولادة",
    titleEn: "Postpartum Hemorrhage (PPH)",
    pages: "57 - 63",
    description: "Definitions of Primary vs. Secondary PPH, the classic '4 Ts' framework of etiology, medical management, drug sequences, and surgical step-downs.",
    keyTakeaways: [
      "PPH baseline: >= 500 mL in vaginal delivery and >= 1000 mL in Cesarean section.",
      "The '4 Ts' framework: Tone (atony), Trauma (lacerations), Tissue (retained placenta), and Thrombin (coagulopathies).",
      "Sheehan Syndrome: postpartum pituitary necrosis caused by ischemic hypoperfusion.",
      "The critical value of early Tranexamic Acid (TXA) within 3 hours to stabilize clotting."
    ],
    clinicalScenarios: [
      {
        scenario: "The patient bleeds heavily following placental delivery. Uterine palpation feels soft, boggy, and enlarged above the umbilicus.",
        action: "Diagnose as Primary Uterine Atony (Tone). Begin continuous firm bimanual uterine massage, insert a Foley catheter, administer first-line Oxytocin and Misoprostol, and prepare TXA."
      },
      {
        scenario: "The uterus is firmly contracted postpartum, but bright red arterial bleeding is continuously flowing.",
        action: "Suspect Genital Tract Trauma. Put the patient under anesthesia and perform an extensive vaginal/cervical speculum inspection to locate and repair cervical or vaginal lacerations."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Essential Definitions</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li><strong>Primary (Early) PPH:</strong> Bleeding >= 500 mL (vaginal) or >= 1000 mL (C-section) within the first 24 hours of delivery.</li>
            <li><strong>Secondary (Late) PPH:</strong> Excessive bleeding occurring from 24 hours up to 6 - 12 weeks postpartum. Most commonly caused by Retained Products of Conception (RPOC) or subinvolution.</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. The Etiological "4 Ts"</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-3 bg-red-50 rounded border border-red-200">
              <strong class="text-red-800 block text-sm">1. Tone (Uterine Atony) - 70-80%</strong>
              The uterus fails to contract. Risk factors include uterine overdistention (multiple gestations, polyhydramnios, macrosomia), prolonged labor, grand multiparity, or myometrial relaxants (MgSO4, nifedipine).
            </div>
            <div class="p-3 bg-amber-50 rounded border border-amber-200">
              <strong class="text-amber-800 block text-sm">2. Trauma (Genital Injury) - 15-20%</strong>
              Lacerations of the cervix, vagina, or perineum; uterine rupture; vulvar or vaginal hematomas.
            </div>
            <div class="p-3 bg-blue-50 rounded border border-blue-200">
              <strong class="text-blue-800 block text-sm">3. Tissue (Retained Products) - 5-10%</strong>
              Placental fragments, accessory lobes, or abnormally invasive placenta (Placenta Accreta spectrum).
            </div>
            <div class="p-3 bg-purple-50 rounded border border-purple-200">
              <strong class="text-purple-800 block text-sm">4. Thrombin (Coagulopathy) - &lt;1%</strong>
              DIC secondary to placental abruption, severe preeclampsia, or sepsis.
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Sheehan Syndrome (متلازمة شيهان)</h4>
          <p class="text-slate-700 leading-relaxed text-sm">
            Postpartum Pituitary Necrosis caused by massive PPH and severe obstetric hypovolemic shock.
          </p>
          <div class="bg-indigo-50 p-3 mt-1 rounded border border-indigo-200 text-xs">
            <strong>Clinical signs:</strong> Inability to lactate (the earliest sign due to loss of prolactin), secondary amenorrhea (loss of FSH/LH), fatigue and cold intolerance (hypothyroidism), and adrenal insufficiency (weakness, low BP).
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Stepwise Surgical De-escalation Protocol</h4>
          <p class="text-slate-700 leading-relaxed text-sm mb-2">
            If medical management (massage, Oxytocin, Misoprostol, TXA) fails, we progress rapidly to:
          </p>
          <ol class="list-decimal list-inside space-y-1 text-xs text-slate-600 pl-2">
            <li>Bimanual compression and Bakri Balloon tamponade.</li>
            <li>Uterine compression sutures (B-Lynch or Hayman sutures).</li>
            <li>Stepwise surgical devascularization (Uterine artery ligation, internal iliac artery ligation).</li>
            <li>Emergency Peripartum Hysterectomy (the last resort to save maternal life).</li>
          </ol>
        </section>
      </div>
    `
  },
  {
    id: 5,
    number: "05",
    titleAr: "تمزق الأغشية المبكر واضطرابات السائل الأمنيوسي",
    titleEn: "PROM, PPROM & Amniotic Fluid Disorders",
    pages: "64 - 74",
    description: "Diagnosis and management protocols of PROM/PPROM, Chorioamnionitis signs, Oligohydramnios, and Polyhydramnios including therapeutic amnioreduction metrics.",
    keyTakeaways: [
      "PROM vs. PPROM definition split exactly at 37 completed weeks of gestation.",
      "Digital PV exams are strictly forbidden to minimize the risk of ascending infections.",
      "Chorioamnionitis requires rapid termination regardless of gestational age under antibiotic cover.",
      "Amnioreduction rate controls: slow manual drainage (500-1000 mL) to prevent abruption."
    ],
    clinicalScenarios: [
      {
        scenario: "A patient at 32 weeks presents with a classic gush of clear fluid. Fern test shows ferning, but there is no fever, tenderness, or contractions.",
        action: "PPROM. Admit the patient, start prophylactic antibiotics (Ampicillin/Erythromycin) and corticosteroids (Dexamethasone) for lung maturity. Perform zero digital PV exams; monitor for chorioamnionitis."
      },
      {
        scenario: "The same patient develops maternal tachycardia (110), fetal tachycardia (175), and uterine tenderness.",
        action: "Diagnose as Chorioamnionitis. Administer broad-spectrum IV triple antibiotics (Ampicillin, Gentamicin, Metronidazole) and initiate immediate delivery/labor induction."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. PROM & PPROM Definitions</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li><strong>PROM (Premature Rupture of Membranes):</strong> Rupture of fetal membranes prior to the onset of labor after 37 completed weeks.</li>
            <li><strong>PPROM (Preterm Premature Rupture of Membranes):</strong> Rupture of membranes occurring before 37 completed weeks.</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Clinical Diagnosis of Ruptured Membranes</h4>
          <ol class="list-decimal list-inside space-y-2 text-slate-700 text-sm">
            <li><strong>Sterile Speculum Examination (Cusco's Speculum):</strong> The Gold Standard. Direct visualization of clear fluid pooling in the posterior vaginal fornix or leaking through the external os.</li>
            <li><strong>Nitrazine pH Paper Test:</strong> Amniotic fluid is alkaline (pH 7.0-7.5), changing yellow nitrazine paper to blue/green (vagina is normally acidic, pH 4.5-5.5).</li>
            <li><strong>Fern Test (Ferning):</strong> Fluid on a glass slide air-dries, crystallizing into a microscopic fern-leaf arborization pattern.</li>
          </ol>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Chorioamnionitis Clinical Markers</h4>
          <p class="text-slate-700 leading-relaxed text-sm mb-2">
            Requires maternal fever (>= 38°C) plus 2 or more of the following:
          </p>
          <div class="grid grid-cols-2 gap-4 text-xs bg-red-50/50 p-3 rounded border border-red-100">
            <div>• Maternal tachycardia (>100 bpm)</div>
            <div>• Fetal tachycardia (>160 bpm sustained)</div>
            <div>• Marked uterine tenderness</div>
            <div>• Purulent or foul-smelling amniotic fluid/discharge</div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Amniotic Fluid Volume Disorders</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-3 bg-cyan-50 rounded border border-cyan-200">
              <strong class="text-cyan-800 block text-sm">Oligohydramnios (قلة السائل الأمنيوسي)</strong>
              <p class="text-xs text-slate-600 mt-1">
                AFI < 5 cm or Single Deepest Pocket < 2 cm.
                <em>Etiology:</em> Aging placenta (post-term redistribution), fetal renal agenesis, maternal dehydration, or ruptured membranes.
              </p>
            </div>
            <div class="p-3 bg-sky-50 rounded border border-sky-200">
              <strong class="text-sky-800 block text-sm">Polyhydramnios (زيادة السائل الأمنيوسي)</strong>
              <p class="text-xs text-slate-600 mt-1">
                AFI >= 25 cm or Single Deepest Pocket >= 8 cm.
                <em>Etiology:</em> Maternal diabetes (fetal polyuria), fetal esophageal atresia, multiple gestations.
                <strong class="block mt-1 text-sky-900 font-medium">Decompression Hazard:</strong> Rapid fluid loss can trigger immediate placental abruption. Drain slowly, removing 500 - 1000 mL per session.
              </p>
            </div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 6,
    number: "06",
    titleAr: "الولادة الطبيعية والبارتوجرام",
    titleEn: "Normal Labour & Partogram Monitoring",
    pages: "75 - 78",
    description: "Definition of normal labor, clinical stages, durations in primigravida vs. multigravida, and complete details of Partogram components.",
    keyTakeaways: [
      "Normal labor: living full-term vertex presentation via the vagina without maternal/fetal complications.",
      "The exact timeline thresholds of the 1st, 2nd, 3rd, and 4th stages.",
      "Partogram parameters: fetal status, progress elements (fifths, cervix), and maternal vitals.",
      "True labor pain: regular, back-to-groin radiating pain, causing clinical cervical modifications."
    ],
    clinicalScenarios: [
      {
        scenario: "A nulliparous patient has contractions every 15 minutes; cervix is 2 cm dilated and uneffaced.",
        action: "Patient is in the Latent Stage of Phase 1. Admit for supportive care, encourage mobilization, and avoid premature active-phase hospital actions."
      },
      {
        scenario: "The patient is in active-phase labor; her cervical dilatation curve has crossed the Action Line of the Partogram.",
        action: "Diagnose as Failure to Progress. Re-evaluate using the '3 Ps' framework: identify Power (conducive contractions), Passenger (size/position), and Passage (pelvis)."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Clinical Stages of Labor</h4>
          <div class="space-y-3">
            <div class="p-3 bg-white rounded border border-slate-200 shadow-xs">
              <span class="font-bold text-slate-800">First Stage (Cervical Dilatation & Effacement):</span>
              <p class="text-xs text-slate-600 mt-1">
                From regular true contractions until complete dilation (10 cm). Divided into:
                <strong class="block mt-1">• Latent Phase:</strong> 0 - 4 cm dilatation. Slower progression.
                <strong class="block">• Active Phase:</strong> 4 - 10 cm dilation. Expected dilatation: >= 1.2 cm/hr in primigravida and >= 1.5 cm/hr in multigravida.
              </p>
            </div>
            <div class="p-3 bg-white rounded border border-slate-200 shadow-xs">
              <span class="font-bold text-slate-800">Second Stage (Expulsion of the Fetus):</span>
              <p class="text-xs text-slate-600 mt-1">
                From 10 cm dilation until the birth of the baby. Average duration: 1 - 2 hours in primigravidas and < 30 minutes in multigravidas. (An extra hour is added if epidural is in place).
              </p>
            </div>
            <div class="p-3 bg-white rounded border border-slate-200 shadow-xs">
              <span class="font-bold text-slate-800">Third Stage (Placental Delivery):</span>
              <p class="text-xs text-slate-600 mt-1">
                From the birth of the baby until complete placental and membrane delivery. Under active management (oxytocin + controlled cord traction), it should not exceed 30 minutes.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. True vs. False Labor Pain</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="bg-emerald-50/50 p-3 rounded border border-emerald-100">
              <strong class="text-emerald-800 block">True Labor Pain (الألم الحقيقي)</strong>
              <ul class="list-disc list-inside mt-1 space-y-1 text-slate-600">
                <li>Regular, progressive contractions with shorter intervals.</li>
                <li>Progressive increase in intensity and duration.</li>
                <li>Pain begins in the back and radiates to the front.</li>
                <li>Directly associated with cervical dilating changes.</li>
                <li>Cannot be abolished by rest, hydration, or mild sedatives.</li>
              </ul>
            </div>
            <div class="bg-red-50/50 p-3 rounded border border-red-100">
              <strong class="text-red-800 block">False Labor Pain (الألم الكاذب)</strong>
              <ul class="list-disc list-inside mt-1 space-y-1 text-slate-600">
                <li>Irregular, erratic intervals and non-progressive.</li>
                <li>Intensity remains constant and weak.</li>
                <li>Pain localized primarily in the lower abdomen or groin.</li>
                <li>No cervix effacement or dilating changes.</li>
                <li>Abolished easily by resting, warmth, or mild hydration.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. The Partogram (البارتوجرام)</h4>
          <p class="text-slate-750 text-sm leading-relaxed mb-2">
            A graphical, vital recording tool to monitor maternal and fetal safety. Includes:
          </p>
          <ul class="list-disc list-inside text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded border border-slate-200">
            <li><strong>Fetal Status:</strong> Heart rate (checked every 30 mins, or every 5 mins in stage 2), membrane integrity, color of amniotic fluid (meconium indicators).</li>
            <li><strong>Progress:</strong> Cervical dilatation (cm) plotted against hourly indices, descent of the fetal head in fifths palpable above the brim.</li>
            <li><strong>Uterine Activity:</strong> Frequency of contractions per 10 mins, duration (seconds) of contractions, and intensity.</li>
            <li><strong>Alert and Action Lines:</strong> The alert line marks normal progress (1 cm/hr). The action line runs parallel, 4 hours to the right. Crossing the action line requires urgent obstetric intervention/C-section.</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 7,
    number: "07",
    titleAr: "وضعيات المجيء غير الطبيعية",
    titleEn: "Malposition & Malpresentation",
    pages: "78 - 81",
    description: "Definitions of positional errors, causes of Malpresentation, persistent occipitoposterior, transverse lie, and Leopold Maneuvers clinical checks.",
    keyTakeaways: [
      "Malpresentation: any lowest presenting fetal part other than the head vertex.",
      "Malposition: altered rotation of the vertex head (e.g., Occipito-Posterior) relative to pelvis.",
      "Transverse lie is associated with a dramatic decrease in fundal height (several cm behind actual weeks).",
      "Leopold maneuvers: fundal grip, lateral grip, pelvic pelvic engagement grips."
    ],
    clinicalScenarios: [
      {
        scenario: "At 36 weeks, abdominal inspection reveals an oval, broad uterus with an empty fundus and fetal heads palpable in the flanks.",
        action: "Diagnose as Transverse Lie. Calculate fundal height; it will be significantly decreased (e.g., 28 cm instead of 36 cm). Never permit labor; prepare for elective C-section."
      },
      {
        scenario: "The patient presents with deep transverse arrest of the fetal head during active labor stage 2.",
        action: "Manage medically using oxytocin if appropriate. If no rotation occurs within 2 hours, proceed to immediate C-Section."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Key Distinctions</h4>
          <ul class="list-disc list-inside space-y-3 text-slate-700">
            <li>
              <strong>Malpresentation (سوء المجيء):</strong> Any presenting part at the pelvic inlet other than vertex cephalic.
              <p class="text-xs text-slate-500 pl-4">Examples: Breech (most common, 3-4%), Face, Brow, Shoulder, or Transverse / Oblique lies.</p>
            </li>
            <li>
              <strong>Malposition (سوء الوضعية):</strong> The fetus is still cephalic (vertex), but the orientation is rotated away from occipito-anterior.
              <p class="text-xs text-slate-500 pl-4">Example: Occipito-Posterior (OP) or Occipito-Transverse (OT). Right Occipito-Posterior (ROP) is most common. Most rotate to OA spontaneously, but persistent cases cause arrested descent.</p>
            </li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Causes of Malpresentation</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div class="bg-slate-50 p-3 rounded border">
              <strong class="text-slate-800 block mb-1">Maternal</strong>
              Grand multiparity (lax muscles causing pendulous abdomen), contracted pelvis, uterine congenital anomalies (bicornuate, septate), pelvic tumors (obstructing fibroids).
            </div>
            <div class="bg-slate-50 p-3 rounded border">
              <strong class="text-slate-800 block mb-1">Fetal</strong>
              Prematurity, macrosomia, multiple pregnancies (twins interlocking), fetal anomalies (hydrocephalus, anencephaly), or short cords.
            </div>
            <div class="bg-slate-50 p-3 rounded border">
              <strong class="text-slate-800 block mb-1">Placental/Amniotic</strong>
              Placenta Previa occupying the lower segment and preventing head engagement; Polyhydramnios (excessive fetal mobility); Oligohydramnios.
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Leopold Maneuvers (مناورات ليوبولد)</h4>
          <div class="space-y-2 text-xs text-slate-600">
            <div><strong>1st Grip (Fundal Palpation):</strong> Checks what is in the fundus. Firm/round = head; soft/bulky = breech.</div>
            <div><strong>2nd Grip (Umbilical/Lateral):</strong> Palpates flanks. Smooth/firm = back; small/knobby = fetal limbs.</div>
            <div><strong>3rd Grip (Pawlik's Grip / 1st Pelvic):</strong> Grasps lower uterine pole with thumb and fingers. Confirms head vs. breech and checks mobility/engagement.</div>
            <div><strong>4th Grip (2nd Pelvic):</strong> Examiner faces feet, using tips of 3 fingers of each hand. Confirms the degree of flexion of the head.</div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 8,
    number: "08",
    titleAr: "ضيق الحوض والولادة المتعسرة",
    titleEn: "Contracted Pelvis & Obstructed Labor",
    pages: "81 - 89",
    description: "Pelvic diameters, diagnosing contracted inlet/cavity/outlet, Trial of Labor (TOLAC) eligibility, Bandl's Ring formation, and VVF etiology.",
    keyTakeaways: [
      "Pelvic Inlet contracted if diagonal conjugate is easily reached (< 11.5 cm).",
      "Vesicovaginal Fistula (VVF): pressure necrosis after 12-24 hours of head impaction.",
      "Bandl's Ring: pathological boundary showing extreme, impending uterine rupture.",
      "Obstructed labor is a mechanical lock: oxytocin is strictly contraindicated."
    ],
    clinicalScenarios: [
      {
        scenario: "Active-labor patient with a contracted pelvis shows an oblique abdominal groove (groover Bandl). Contractions are hypertonic and extremely painful.",
        action: "Diagnose as Obstructed Labor with imminent Uterine Rupture. Stop any active oxytocin immediately and prepare for emergency C-Section."
      },
      {
        scenario: "The patient under prolonged, obstructed labor experiences fetal head impaction in the pelvis.",
        action: "Perform emergency C-section. Ensure a silicon Foley catheter is placed and left in situ for 10-14 days postpartum to continuously decompress the bladder and prevent VVF development."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Clinical Pelvimetry Normal Values</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center font-mono text-xs">
            <div class="p-2 border rounded bg-slate-50">
              <strong class="block text-slate-700">Pelvic Inlet</strong>
              Diagonal Conjugate: 12.5 cm<br/>
              Obstetric Conjugate: 10.5 cm<br/>
              Transverse: 13.5 cm
            </div>
            <div class="p-2 border rounded bg-slate-50">
              <strong class="block text-slate-700">Mid-Cavity</strong>
              Bispinous (narrowest): 10.5 cm<br/>
              Anteroposterior: 12.0 cm<br/>
              Flat sacrum indicates contraction
            </div>
            <div class="p-2 border rounded bg-slate-50">
              <strong class="block text-slate-700">Pelvic Outlet</strong>
              Bituberous: 11.0 cm<br/>
              Subpubic Angle: 90 - 100° (acute < 85° = android/contracted)
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Causes of Obstructed Labor (3 Ps)</h4>
          <ul class="list-disc list-inside space-y-1 text-xs text-slate-600 pl-2">
            <li><strong>Passage:</strong> Severe contracted pelvis, pelvic tumors, vaginal septum, cervical dystocia.</li>
            <li><strong>Passenger:</strong> Fetal macrosomia (>4.5 kg), transverse lie, face (mento-posterior), hydrocephalus, conjoined twins.</li>
            <li><strong>Power (Secondary):</strong> Hypertonic, incoordinate contractions against a mechanical blockade.</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Bandl's Ring & Uterine Rupture</h4>
          <p class="text-slate-705 text-sm leading-relaxed text-slate-700">
            A pathological retraction ring that forms as an oblique, visible abdominal ridge between the thick, hyperactive upper segment and the severely thinned lower segment. This is the ultimate warning sign of <strong>impending uterine rupture</strong>!
          </p>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Vesicovaginal Fistula (VVF - ناصور بولى مهبلى)</h4>
          <p class="text-slate-750 text-sm leading-relaxed text-slate-700">
            Pathological Mechanism: In obstructed labor, the fetal head is impacted against the symphysis pubis for >= 12-24 hours. The base of the bladder and vaginal wall are compressed against the public bone. This causes severe ischemia and subsequent <strong>pressure necrosis</strong>. The tissue sloughs off 5-10 days postpartum, creating a fistula.
          </p>
          <div class="mt-2 bg-emerald-50 p-3 rounded border border-emerald-200 text-xs">
            <strong>Prevention:</strong> Insert a silicon Foley's catheter immediately and leave it as a continuous, long-term bladder decompressor for <strong>7 - 14 days</strong> postpartum to let injured ischemic tissue heal.
          </div>
        </section>
      </div>
    `
  },
  {
    id: 9,
    number: "09",
    titleAr: "العملية القيصرية ومضاعفاتها",
    titleEn: "Cesarean Section (C-S)",
    pages: "90 - 99",
    description: "Absolute and relative indications, Upper (classical) vs. Lower segment vertical incisions, postoperative evaluations, complications, and advanced repeat C-section adhesion risks.",
    keyTakeaways: [
      "Absolute indications: central placenta previa, severe CPD, transverse lie, obstructed Bandl's ring.",
      "Lower segment (LSCS) advantages: less blood loss, easier repair, extraperitoneal flap, lower future rupture risk.",
      "Indications for upper segment Classical C-Section: prior classical scar, VVF repair, dense lower segment adhesions.",
      "Clinical signs of postoperative DVT: unilateral leg swelling, warmth, tenderness."
    ],
    clinicalScenarios: [
      {
        scenario: "The patient presents with an active history of 2 previous low-segment C-sections and a current central placenta previa.",
        action: "Perform elective C-section at 36-37 weeks. Ensure 2-4 units of crossmatched blood are fully ready due to high risk of placenta accreta spectrum and hemorrhage."
      },
      {
        scenario: "Post-op C-section patient presents with sudden right calf warmth, swelling, and severe unilateral calf pain.",
        action: "Suspect deep vein thrombosis (DVT). Elevate the limb, avoid aggressive massage to prevent PE, perform Doppler, and initiate therapeutic anticoagulation."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Indications for C-Section</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="bg-slate-50 p-3 border rounded">
              <strong class="text-slate-800 block mb-1">Maternal / Passage</strong>
              Grade IV Central Placenta Previa, severe CPD, pelvic tumors (blocking fibroids), cervical carcinoma, prior classical scar, structural VVF repair history.
            </div>
            <div class="bg-slate-50 p-3 border rounded">
              <strong class="text-slate-800 block mb-1">Fetal / Passenger</strong>
              Fetal distress (severe bradycardia/late decelerations), transverse lie/shoulder presentation, impacted breech, macrosomia, lock twins.
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Upper (Classical) vs. Lower Segment (LSCS)</h4>
          <p class="text-slate-700 text-sm leading-relaxed mb-2">
            <strong>LSCS</strong> is the standard of care (95%+). Incision is made transversally inside the passive, thin lower uterine segment.
          </p>
          <div class="bg-red-50 p-3 rounded border border-red-200 text-xs">
            <strong>Classical (Upper segment vertical) C-Section:</strong> Only used if:
            <ul class="list-disc list-inside mt-1 space-y-1 text-slate-650">
              <li>Dense pelvic adhesions make it impossible to create a bladder flap.</li>
              <li>Placenta previa is complicated by anterior placenta accreta (incision above the placenta).</li>
              <li>Extreme prematurity (<26 weeks) with a poorly formed lower segment.</li>
              <li>Cervical carcinoma obstructing the lower uterus.</li>
            </ul>
            <em>Disadvantage:</em> High risk of future uterine rupture (4-9% vs 0.5% in LSCS).
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Repeat C-Sections (The 7th Caesarean Challenge)</h4>
          <p class="text-slate-700 text-sm leading-relaxed mb-2">
            Why do advanced repeat C-sections (e.g., 5th or 7th) take significantly longer?
          </p>
          <ul class="list-disc list-inside text-xs text-slate-600 pl-2 space-y-1 bg-slate-50 p-3 rounded border">
            <li><strong>Adhesions & Fibrosis:</strong> The bladder becomes densely adhered to the lower uterine segment, requiring delicate, tedious dissection.</li>
            <li><strong>Tissue Friability:</strong> Fibrotic, highly thinned tissue increases risks of extension into the uterine arteries, causing massive hemorrhage.</li>
            <li><strong>Placenta Accreta Spectrum (PAS):</strong> Risk of placental invasion increases exponentially with each prior scar.</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Postoperative Complications</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <strong class="text-slate-700 block font-semibold mb-1">Early (Within 24 Hours)</strong>
              Hemorrhagic shock, primary PPH (atony), venous thromboembolism (DVT/PE - risk is 5-10x higher than in vaginal births), paralytic ileus, or urinary retention.
            </div>
            <div>
              <strong class="text-slate-700 block font-semibold mb-1">Late / Long-term</strong>
              Wound infections/abscess, endometritis, VTE after 7-14 days, secondary PPH, future scar dehiscence/rupture, or cesarean scar ectopic.
            </div>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 10,
    number: "10",
    titleAr: "وفاة الجنين داخل الرحم وتجاوز موعد الولادة",
    titleEn: "Post-date, Post-term & IUFD",
    pages: "99 - 106",
    description: "Definitions, fetal surveillance protocols in post-dates, IUFD diagnosis, causes, maternal DIC complications, and Misoprostol induction doses.",
    keyTakeaways: [
      "IUFD definition: fetal death occurring after viability (>= 24 completed weeks or weight >= 500g).",
      "Retained dead fetus after 3-4 weeks releases thromboplastin, triggering severe maternal consumptive DIC.",
      "Misoprostol dosage titration: lower dose limit (25 mcg) if the uterus is scarred.",
      "Post-term placental aging causes fetal brain-sparing and oligohydramnios."
    ],
    clinicalScenarios: [
      {
        scenario: "Patient at 39 weeks presents with absent fetal movements for 24 hours. Ultrasound confirms absent fetal cardiac activity.",
        action: "Diagnose as IUFD. Order a CBC and coagulation profile (checking fibrinogen). Give psychological and bereavement counseling, administer Anti-D if Rh-negative, and initiate medical induction of labor."
      },
      {
        scenario: "Maternal patient with a previous lower-segment C-section scar presents with intrauterine fetal death at 32 weeks.",
        action: "Initiate induction of labor using a highly monitored, low dose of Misoprostol (25 mcg vaginally/sublingually every 6 hours) to prevent uterine rupture."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Intrauterine Fetal Death (IUFD - وفاة الجنين داخل الرحم)</h4>
          <p class="text-slate-700 text-sm leading-relaxed mb-2">
            Fetal death after 24 completed weeks of gestation (or weight >= 500 grams) before active labor begins.
          </p>
          <div class="bg-red-50 p-3 rounded border border-red-200 text-xs">
            <strong>Critical Hazard - Consumptive DIC:</strong>
            A dead fetus retained for >3-4 weeks releases tissue thromboplastin into maternal circulation. This triggers the extrinsic clotting cascade, consuming platelets and clotting factors (specifically fibrinogen).
            If clotting factors are consumed, severe maternal hemorrhage occurs.
            <strong class="block mt-1 font-mono">Marker:</strong> Serum fibrinogen falling < 200 mg/dL is an ominous sign of DIC.
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Misoprostol (Prostaglandin E1) IUFD Protocols</h4>
          <div class="overflow-x-auto text-xs">
            <table class="min-w-full divide-y border text-center font-mono bg-white">
              <thead class="bg-slate-100">
                <tr>
                  <th class="px-2 py-1 text-slate-700">Gestational Stage</th>
                  <th class="px-2 py-1 text-slate-700">Dose & Route</th>
                  <th class="px-2 py-1 text-slate-700">Frequency</th>
                </tr>
              </thead>
              <tbody class="divide-y text-slate-600">
                <tr>
                  <td>Second Trimester (&lt;28 weeks)</td>
                  <td>200 - 400 mcg (Vaginally / Sublingually)</td>
                  <td>Every 4 - 6 hours</td>
                </tr>
                <tr>
                  <td>Third Trimester (&ge;28 weeks)</td>
                  <td>25 - 50 mcg (Vaginally)</td>
                  <td>Every 4 - 6 hours</td>
                </tr>
                <tr>
                  <td>Scarred Uterus (Prior C-Section)</td>
                  <td>25 mcg (Vaginally) [Avoid high doses]</td>
                  <td>Every 6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Post-date vs. Post-term Pregnancy</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li><strong>Post-date:</strong> Gestation exceeding the estimated date of delivery (> 40 weeks).</li>
            <li><strong>Post-term:</strong> Gestation continuing past 42 completed weeks (> 294 days).</li>
          </ul>
          <div class="mt-2 text-xs bg-slate-50 p-3 rounded border">
            <strong>Placental aging sequence:</strong> Aging and calcification of the aging placenta leads to progressive placental insufficiency. Fetal hypoxia ensues, triggering a <em>brain-sparing reflex</em>: blood flow is diverted from the kidneys to the heart/brain. Fetal renal perfusion drops, severely reducing urine output. This results in <strong>oligohydramnios</strong> (AFI < 5 cm).
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Mathematical Naming: Naegele's Rule Margins of Error</h4>
          <p class="text-slate-700 text-xs">
            <strong>Naegele's Rule:</strong> Gregorian: LMP + 7 days + 9 months. Hijri: LMP + 10-14 days - 3 months.
          </p>
          <ul class="list-disc list-inside border-t mt-2 pt-2 text-xs text-slate-500 space-y-1 font-mono">
            <li>1st Trimester U/S Error Margin: ± 5-7 days (Crown-Rump Length is highly accurate).</li>
            <li>2nd Trimester U/S Error Margin: ± 7-14 days (uses BPD, HC, FL).</li>
            <li>3rd Trimester U/S Error Margin: ± 3 weeks (highly unreliable for dating).</li>
          </ul>
        </section>
      </div>
    `
  },
  {
    id: 11,
    number: "11",
    titleAr: "الصدمات التوليدية",
    titleEn: "Obstetrics Shock",
    pages: "106 - 108",
    description: "Definition, immediate diagnostic hallmarks, maternal-adapted ABC resuscitations, and detailed 4 stages of hypovolemic blood loss.",
    keyTakeaways: [
      "The paramount importance of immediate left lateral tilt position to relieve aortocaval compression.",
      "High-flow 100% oxygen is always indicated to protect the fetus even if maternal SaO2 seems normal.",
      "Noradrenaline is indicated as the first-line vasopressor if crystalloids fail.",
      "Class IV Shock means > 40% (2L+) blood loss, profound hypotension, respiratory failure, and anuria."
    ],
    clinicalScenarios: [
      {
        scenario: "An APH patient is admitted in a state of severe hypovolemic shock (pale, cold, clammy skin, BP 80/45).",
        action: "Call for help. Turn the patient to the left lateral tilt, administer high-flow oxygen, insert 2 large-bore IVs, infuse warmed crystalloids, and prepare crossmatched blood."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Emergency Resuscitation Steps (ABCDE in Obstetrics)</h4>
          <ul class="list-decimal list-inside space-y-2 text-slate-700 text-sm">
            <li><strong>Airway:</strong> Ensure patency. Pregnancy has a high aspiration risk. Intubate early if GCS <= 8.</li>
            <li><strong>Breathing:</strong> High-flow oxygen (10-15 L/min) via non-rebreather mask to protect the fetus.</li>
            <li><strong>Circulation:</strong>
              <ul class="list-disc list-inside ml-4 mt-1 text-xs text-slate-650 space-y-1">
                <li><strong>Left lateral tilt (15-30°):</strong> Prevents the heavy pregnant uterus from compressing the inferior vena cava and aorta (aortocaval compression), improving cardiac preload.</li>
                <li>Insert 2 large-bore IVs (14G or 16G). Infuse warmed crystalloids (Ringer's Lactate).</li>
                <li>Transfuse early (O-negative packed RBCs if crossmatched blood is unavailable).</li>
              </ul>
            </li>
            <li><strong>Disability:</strong> Assess level of consciousness, check blood glucose.</li>
            <li><strong>Exposure:</strong> Keep the patient warm to prevent the lethal triad (hypothermia, acidosis, coagulopathy).</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Hypovolemic Shock Progression (The Four Stages)</h4>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-slate-200 border text-xs bg-white text-center font-mono">
              <thead class="bg-slate-100">
                <tr>
                  <th class="px-2 py-1 text-slate-700">Parameter</th>
                  <th class="px-2 py-1 text-slate-700">Stage I (Mild)</th>
                  <th class="px-2 py-1 text-slate-700">Stage II (Incipient)</th>
                  <th class="px-2 py-1 text-slate-700">Stage III (Severe)</th>
                  <th class="px-2 py-1 text-slate-705">Stage IV (Profound)</th>
                </tr>
              </thead>
              <tbody class="divide-y text-slate-650">
                <tr>
                  <td class="font-medium text-slate-900 text-left">Blood Loss (%)</td>
                  <td>&lt;15%</td>
                  <td>15 - 30%</td>
                  <td>30 - 40%</td>
                  <td>&gt;40%</td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-900 text-left">Blood Loss (mL)</td>
                  <td>&lt;750 mL</td>
                  <td>750 - 1500 mL</td>
                  <td>1500 - 2000 mL</td>
                  <td>&gt;2000 mL</td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-900 text-left">Pulse Rate (bpm)</td>
                  <td>&lt;100</td>
                  <td>&gt;100 (tachycardia)</td>
                  <td>&gt;120</td>
                  <td>&gt;140</td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-900 text-left">Blood Pressure</td>
                  <td>Normal</td>
                  <td>Slightly Decreased</td>
                  <td>Decreased</td>
                  <td>Severe Hypotension</td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-900 text-left">Respiratory Rate</td>
                  <td>14 - 20</td>
                  <td>20 - 30</td>
                  <td>30 - 40</td>
                  <td>&gt;35 (gasping)</td>
                </tr>
                <tr>
                  <td class="font-medium text-slate-900 text-left">Mental State</td>
                  <td>Slightly Anxious</td>
                  <td>Confused/Anxious</td>
                  <td>Confused/Lethargic</td>
                  <td>Confused/Obtunded/Coma</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    `
  },
  {
    id: 12,
    number: "12",
    titleAr: "موانع الحمل وعدم تطابق عامل الريسوس",
    titleEn: "Contraceptive & Rh Incompatibility",
    pages: "109 - 114",
    description: "Complications of IUDs, Combined vs. Progesterone-only contraceptives, Rh immunization pathology, and anti-D prophylaxis rules.",
    keyTakeaways: [
      "IUD insertion risk: uterine perforations occur at a rate of 1 in 1000 insertions.",
      "Combined contraceptives are strictly avoided in lactating moms under 6 weeks postpartum due to VTE and milk suppression.",
      "Rh sensitization occurs when Rh-negative mothers develop antibodies against Rh-positive fetal cells.",
      "Middle Cerebral Artery Doppler Peak Systolic Velocity (MCA-PSV) is the gold standard check for fetal anemia."
    ],
    clinicalScenarios: [
      {
        scenario: "An unsensitized Rh-negative maternal patient is admitted at 28 weeks gestation.",
        action: "Administer the standard routine antenatal dose of Anti-D Immunoglobulin (300 mcg or 1500 IU) to prevent Rh sensitization."
      },
      {
        scenario: "An Rh-negative patient delivers an Rh-positive baby. Cord blood shows the baby is Rh-positive.",
        action: "Administer a postnatal dose of Anti-D (300 mcg) within 72 hours of delivery. Perform a Kleihauer-Betke test if a large fetomaternal hemorrhage is suspected."
      }
    ],
    content: `
      <div class="space-y-6">
        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">1. Intrauterine Devices (IUD) Complications</h4>
          <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm">
            <li><strong>Immediate:</strong> Pain/vasovagal syncope during insertion, or uterine perforation (rare, ~1 in 1000).</li>
            <li><strong>Early (First 3 months):</strong> Heavy menstrual bleeding and spotting (Copper IUD), irregular spotting/amenorrhea (Mirena), or pelvic inflammatory disease (PID) risk in the first 20 days.</li>
            <li><strong>Late:</strong> Expulsion, pregnancy (rule out ectopic first if self-tested positive), or lost threads.</li>
          </ul>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">2. Combined vs. Progesterone-Only Contraceptives</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="bg-white p-3 rounded border border-slate-200">
              <strong class="text-slate-800 block mb-1">Combined Hormonal Contraceptives (COCs)</strong>
              Estrogen suppresses FSH (inhibits follicular development), and Progestin suppresses LH surge (inhibits ovulation).
              <p class="text-slate-500 mt-1">
                <strong>Contraindications (WHO Category 4):</strong> Breastfeeding <6 weeks postpartum, age >35 and smoking >15 of cigarettes/day, history of DVT/PE, migraine with aura, uncontrolled hypertension.
              </p>
            </div>
            <div class="bg-white p-3 rounded border border-slate-200">
              <strong class="text-slate-800 block mb-1">Progesterone-Only Contraceptives (POCs)</strong>
              Thickens cervical mucus (sperm barrier) and thins endometrium.
              <p class="text-slate-500 mt-1">
                <strong>Advantages:</strong> Perfectly safe for breastfeeding mothers immediately postpartum, smokers over 35, and patients with prior VTE history or hypertension.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">3. Rh Incompatibility Immunopathology (عدم تلائم عامل الريسوس)</h4>
          <p class="text-slate-750 text-sm leading-relaxed text-slate-700">
            Rh incompatibility occurs when an <strong>Rh-negative mother</strong> carries an <strong>Rh-positive fetus</strong>.
          </p>
          <div class="bg-red-50 p-3 rounded border border-red-200 text-xs">
            <strong>The Sensitization Cascade:</strong>
            During placental separation, amniocentesis, or trauma, Rh-positive fetal red cells enter maternal circulation.
            The maternal immune system develops Anti-D antibodies (IgM initially, then IgG).
            In subsequent pregnancies, maternal IgG crossing the placenta clears fetal Rh-positive red cells, causing severe fetal hemolytic anemia, <strong>Hydrops Fetalis</strong>, or neonatal Kernicterus.
          </div>
        </section>

        <section>
          <h4 class="text-lg font-bold text-slate-800 mb-2">4. Anti-D Prophylaxis Protocol (الوقاية بحقنة الأنتي-دي)</h4>
          <ul class="list-disc list-inside text-xs text-slate-650 space-y-1 bg-slate-50 p-3 rounded border">
            <li><strong>Routine Antenatal Prophylaxis (RAAP):</strong> Give 300 mcg (1500 IU) of Anti-D IM at 28 weeks to unsensitized Rh-negative mothers.</li>
            <li><strong>Postnatal Prophylaxis:</strong> Administer 300 mcg IM within 72 hours of delivering an Rh-positive baby.</li>
            <li><strong>Sensitizing events:</strong> Give after any miscarriage, ectopic pregnancy, abruption, or abdominal trauma if gestation is >12 weeks.</li>
            <li><strong>Quantification:</strong> Perform a <strong>Kleihauer-Betke test</strong> to estimate fetomaternal hemorrhage volume; adjust Anti-D dosage (300 mcg per 30 mL fetal blood).</li>
          </ul>
        </section>
      </div>
    `
  }
];
