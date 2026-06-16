import { Drug } from '../types';

export const drugsData: Drug[] = [
  {
    id: 1,
    name: "Oxytocin (Syntocinon)",
    class: "Synthetic Hypothalamic Hormone / Uterotonic",
    mechanism: "Binds to specific G-protein coupled myometrial oxytocin receptors. This activates the IP3/DAG signaling pathway, triggering intracellular calcium release from the sarcoplasmic reticulum, generating rhythmic, coordinated, and progressive uterine contractions.",
    indications: [
      {
        condition: "Active Management of 3rd Stage of Labor (AMTSL) to prevent postpartum hemorrhage (PPH)",
        dose: "10 IU IM single dose administered immediately after the birth of the baby (specifically after checking for a second twin or after delivery of the anterior shoulder)."
      },
      {
        condition: "Treatment of primary Postpartum Hemorrhage (PPH)",
        dose: "5 IU by slow, diluted IV bolus (never run rapid push to avoid severe hypotension), followed by 20 - 40 IU in 500 mL Normal Saline or Ringer's Lactate IV infusion running at 125 mL/hour."
      },
      {
        condition: "Induction and Augmentation of Labor (IOL)",
        dose: "Start at 1 - 2 mU/minute IV infusion (using 5 IU in 500 mL normal saline), increasing the rate every 20-30 minutes until 3 - 4 strong contractions are achieved every 10 minutes (each lasting 40-60 secs). Max dose: 40 mU/min."
      }
    ],
    toxicity: {
      signs: [
        "Uterine hyperstimulation / tachysystole (>5 contractions in 10 minutes) causing fetal hypoxia.",
        "Uterine rupture (highest risk in multiparous or scarred uteri).",
        "Water intoxication and maternal hyponatremia (acts like ADH at higher doses, leading to fluid retention, convulsions, or coma)."
      ],
      monitoring: [
        "Continuous electronic fetal heart rate (CTG).",
        "Uterine contraction frequency, duration, and baseline resting tone.",
        "Maternal fluid balance and serum sodium if infusing high doses."
      ],
      antidote: "No direct pharmacological antidote.",
      antidoteProtocol: "Stop the Oxytocin infusion immediately! Place the mother in the left lateral position, administer high-flow oxygen, run a fluid bolus, and administer rapid-acting tocolytics (subcutaneous Terbutaline 0.25 mg or IV Nitroglycerin 100-200 mcg) to relax the myometrium."
    },
    contraindications: [
      "Hypertonic or incoordinate uterine contractions.",
      "Suspected Cephalopelvic Disproportion (CPD) or severe contracted pelvis.",
      "Fetal distress / non-reassuring CTG pre-induction.",
      "Malpresentation (e.g., transverse lie, shoulder presentation, brow)."
    ],
    clinicalTips: "Never administer Oxytocin as a rapid, undiluted IV bolus! Rapid IV push causes sudden relaxation of vascular smooth muscle, triggering severe maternal hypotension, tachycardia, and coronary hypoperfusion."
  },
  {
    id: 2,
    name: "Misoprostol (Cytotec)",
    class: "Synthetic Prostaglandin E1 (PGE1) Analogue / Uterotonic & Cervical Ripener",
    mechanism: "Binds to EP3/EP4 prostaglandin receptors on uterine smooth muscle cells, increasing intracellular calcium influx to stimulate direct, sustained, and tetanic contractions. Concurrently, it activates collagenases in the cervix to dissolve collagen cross-links, softening and ripening the cervix.",
    indications: [
      {
        condition: "Treatment of active Postpartum Hemorrhage (PPH) when oxytocin is unavailable or fails",
        dose: "800 - 1000 mcg rectally (PR) as a single dose, or 600 - 800 mcg sublingually for rapid absorption."
      },
      {
        condition: "Active Management of the 3rd Stage of Labor (AMTSL - PPH prophylaxis)",
        dose: "600 mcg orally (or 400 mcg sublingually) as a single dose immediately after delivery of the baby."
      },
      {
        condition: "Medical Abortion / Incomplete Miscarriage Evacuation",
        dose: "400 - 800 mcg vaginally or sublingually (often 24-48 hours after Mifepristone)."
      },
      {
        condition: "Cervical Ripening and Labor Induction (IOL) with unfavorable cervix (Bishop < 6)",
        dose: "25 mcg vaginally or sublingually every 4 - 6 hours. Lower doses protect against uterine hyperstimulation."
      },
      {
        condition: "Second and Third Trimester Intrauterine Fetal Death (IUFD) Induction",
        dose: "Second Trimester (<28 weeks): 200 - 400 mcg vaginally/sublingually every 4-6 hours. Third Trimester (>=28 weeks): 25 mcg vaginally every 6 hours (particularly in scarred uteri to prevent rupture)."
      }
    ],
    toxicity: {
      signs: [
        "Uterine hyperstimulation and tachysystole.",
        "Uterine rupture (elevated risk in grand multiparas or previous uterine scars).",
        "Maternal hyperpyrexia (prostaglandins act directly on the hypothalamic thermoregulation center, causing transient spiking fevers up to 40°C accompanied by localized shaking chills)."
      ],
      monitoring: [
        "Maternal core temperature.",
        "Uterine contraction frequency.",
        "Assess for post-dose shivering (highly common, treated supportively)."
      ],
      antidote: "No direct antidote; treatment is supportive.",
      antidoteProtocol: "Stop administration. If placed vaginally, remove any unabsorbed fragments of the tablet from the posterior fornix. Administer antipyretics (e.g. Paracetamol) and tocolytics if uterine hyperstimulation occurs."
    },
    contraindications: [
      "Previous classical (vertical) C-section scar (absolute contraindication due to high risk of uterine rupture).",
      "Known hypersensitivity to prostaglandins.",
      "Unruled-out placenta previa or vasa previa.",
      "Unexplained vaginal bleeding."
    ],
    clinicalTips: "Can be used synergistically with Oxytocin in severe, refractory postpartum hemorrhage. Oxytocin generates fast, rhythmic contractions while Misoprostol yields a prolonged, sustained muscular tone (compression effect)."
  },
  {
    id: 3,
    name: "Hydralazine (Apresoline)",
    class: "Direct-Acting Arterial Vasodilator / Antihypertensive",
    mechanism: "Directly relaxes arteriolar smooth muscle (acting primarily on arteries, with minimal venous effect) by interfering with calcium movement and stimulating nitric oxide-mediated pathways. This rapidly drops peripheral vascular resistance and maternal blood pressure.",
    indications: [
      {
        condition: "Acute treatment of severe hypertension (BP >= 160/110 mmHg) in preeclampsia or eclampsia",
        dose: "5 - 10 mg IV bolus diluted in 10 mL Normal Saline, administered slowly over 10 - 20 minutes (prevents sudden cerebrovascular shock). Can be repeated every 20-30 minutes if needed."
      }
    ],
    contraindications: [
      "Known systemic lupus erythematosus (can trigger drug-induced lupus).",
      "Severe coronary artery disease or aortic aneurysm.",
      "Severe mitral valve stenosis."
    ],
    clinicalTips: "The target is to lower diastolic blood pressure to 90 - 100 mmHg. Never lower diastolic BP below 90 mmHg! Sudden severe drops in maternal BP will cause placental hypoperfusion, crashing the uterine blood supply and causing immediate fetal distress (bradycardia, late decelerations)."
  },
  {
    id: 4,
    name: "Labetalol IV / Oral",
    class: "Mixed Alpha- and Beta-Adrenergic Blocker / Antihypertensive",
    mechanism: "Acts as a competitive antagonist at both alpha-1 adrenergic receptors (causing peripheral vasodilation) and beta-1/beta-2 receptors (preventing reflex tachycardia). This dual action decreases systemic vascular resistance while maintaining steady cardiac output.",
    indications: [
      {
        condition: "Acute severe hypertensive crisis in preeclampsia/eclampsia (first-line alternative to Hydralazine)",
        dose: "20 mg slow IV bolus over 2 minutes. If BP remains uncontrolled after 10 minutes, administer 40 mg, then 80 mg every 10 minutes. Maximum cumulative dose: 220 mg."
      },
      {
        condition: "Chronic or non-severe gestational hypertension",
        dose: "100 - 400 mg orally twice daily (max: 2400 mg/day)."
      }
    ],
    contraindications: [
      "Maternal asthma or severe history of bronchospasm (beta-2 blockade causes severe airway constriction).",
      "Severe maternal sinus bradycardia (<60 bpm).",
      "Second- or third-degree heart block, or cardiogenic shock."
    ],
    clinicalTips: "Highly preferred in patients experiencing reflex tachycardia. Unlike Hydralazine, Labetalol does not induce rapid acceleration of maternal heart rate, offering a smooth cardiovascular control path."
  },
  {
    id: 5,
    name: "Tranexamic Acid (TXA)",
    class: "Antifibrinolytic Agent",
    mechanism: "An analogue of lysine that binds competitively to the lysine-binding sites of plasminogen and plasmin. This blocks the binding of plasminogen to fibrin, preventing the degradation of fibrin clots (inhibits fibrinolysis), thereby stabilizing existing clots.",
    indications: [
      {
        condition: "Active Postpartum Hemorrhage (PPH) or severe Antepartum Hemorrhage (APH)",
        dose: "1 gram (10 mL of 100 mg/mL solution) slow IV injection administered over 10 minutes. Best given within 3 hours of labor completion (the WHO WOMAN Trial guideline). Can repeat with an additional 1g IV once after 30 minutes if active bleeding persists."
      }
    ],
    contraindications: [
      "Active thromboembolic event (acute deep vein thrombosis, pulmonary embolism, or cerebral sinus thrombosis).",
      "Severe hypersensitivity to tranexamic acid.",
      "Renal impairment (requires dosage adjustments as it is excreted unchanged in urine)."
    ],
    clinicalTips: "Based on the landmark WOMAN Trial (2017), TXA must be given within the first 3 hours of PPH onset. Giving it later than 3 hours provides no clinical mortality benefit and may worsen coagulopathies."
  },
  {
    id: 6,
    name: "Dexamethasone",
    class: "Synthetic Glucocorticoid / Corticosteroid",
    mechanism: "Crosses the placenta rapidly and binds to glucocorticoid receptors in fetal alveolar type-II cells. This stimulates the transcription and translation of enzymes responsible for synthesizing dipalmitoylphosphatidylcholine, the primary component of pulmonary surfactant. It also increases lung compliance.",
    indications: [
      {
        condition: "Fetal lung maturation in cases of threatened preterm labor or planned preterm deliveries between 24 and 34 weeks gestation",
        dose: "6 mg IM injection administered every 12 hours for 4 doses (Total: 24 mg over 48 hours). (Alternative is Betamethasone: 12 mg IM given 24 hours apart for 2 doses)."
      },
      {
        condition: "HELLP syndrome adjunct therapy (unlabeled use to improve platelets)",
        dose: "10 mg IV every 12 hours, tapered down once platelet counts recover above 100,000/mcL."
      }
    ],
    contraindications: [
      "Active systemic maternal infections (sepsis, chorioamnionitis - unless delivery is immediate).",
      "Active, untreated maternal tuberculosis.",
      "Ophthalmic herpes simplex."
    ],
    clinicalTips: "Corticosteroid administration significantly reduces the incidence of neonatal Respiratory Distress Syndrome (RDS), Intraventricular Hemorrhage (IVH), Necrotizing Enterocolitis (NEC), and neonatal mortality."
  },
  {
    id: 7,
    name: "Magnesium Sulfate (MgSO4)",
    class: "NMDA Receptor Antagonist / Central Anticonvulsant & Neuroprotector",
    mechanism: "Blocks N-methyl-D-aspartate (NMDA) receptors in the brain, raising the seizure threshold and suppressing focal cerebral convulsions. It also acts as a competitive calcium antagonist, blocking calcium influx into presynaptic motor terminals to reduce acetylcholine release, yielding a peripheral neuromuscular blockade. It relieves cerebral vasospasms, preserving cerebral perfusion.",
    indications: [
      {
        condition: "Prevention and treatment of eclamptic seizures",
        dose: "Zuspan Protocol: Loading dose: 4 - 5 grams IV (using 50% solution diluted in 100 mL Normal Saline) slow infusion over 20 minutes. Maintenance dose: 1 gram/hour continuous IV infusion (e.g. 50 mL/hour of a 2% solution) running for 24 hours postpartum or 24 hours after the last convulsion."
      },
      {
        condition: "Eclampsia: recurrence of seizure while on maintenance",
        dose: "Administer an additional 2 grams IV bolus slowly over 5 - 10 minutes."
      },
      {
        condition: "Fetal Neuroprotection in anticipated early preterm labor (<32 weeks)",
        dose: "Loading: 4g IV over 30 mins, maintenance: 1g/hr until delivery, to reduce cerebral palsy risks."
      }
    ],
    toxicity: {
      signs: [
        "Loss of patellar (knee-jerk) reflex — the earliest clinical sign of toxicity (serum level: 8-10 mEq/L).",
        "Respiratory depression (<12 breaths/minute; serum level: 10-12 mEq/L).",
        "Oliguria (<30 mL/hour) or anuria (accumulates rapidly since it is excreted solely by kidneys).",
        "Cardiac conduction defects, heart block, or cardiac arrest (>12-15 mEq/L)."
      ],
      monitoring: [
        "Deep Tendon Reflexes (DTR / Patellar): must be strictly present prior to every dose/check.",
        "Respiratory Rate: must be >= 16 breaths/minute continuously.",
        "Urine Output: must be >= 30 mL/hour (calculated hourly via indwelling Foley's catheter)."
      ],
      antidote: "Calcium Gluconate 10% (حقنة الكالسيوم جلوكونات)",
      antidoteProtocol: "Immediately stop the MgSO4 infusion! Administer 1 gram of 10% Calcium Gluconate (10 mL of 10% solution) slowly IV push over 10 minutes (the clinical 'Rule of 10'). Place the mother under oxygen, monitor ECG, and prepare for mechanical ventilation if respiratory arrest occurs."
    },
    contraindications: [
      "Myasthenia Gravis (absolute contraindication; neuromuscular blockade can trigger a fatal myasthenic crisis and respiratory collapse).",
      "Severe, decompensated renal failure (Creatinine > 1.2 mg/dL or severe oliguria). Scale down dosage if relative.",
      "Severe pulmonary edema or active cardiac block."
    ],
    clinicalTips: "Renal failure causes Magnesium toxicity, not vice versa! Magnesium is cleared exclusively via glomerular filtration in the kidneys; in oliguria, normal dosing leads quickly to toxic accumulation."
  },
  {
    id: 8,
    name: "Ergometrine (Ergonovine)",
    class: "Ergot Alkaloid / Uterotonic",
    mechanism: "Directly stimulates alpha-adrenergic, serotonergic, and dopaminergic receptors on myometrial smooth muscle cells. This generates strong, rapid, and sustained tetanic uterine contractions across both the upper and lower uterine segments, compressing patent placental bed vessels.",
    indications: [
      {
        condition: "Treatment of severe, refractory Postpartum Hemorrhage (PPH) secondary to uterine atony",
        dose: "0.2 mg or 0.5 mg IM or slow IV injection (often administered alongside Oxytocin as Syntometrine)."
      }
    ],
    contraindications: [
      "Preeclampsia, eclampsia, chronic hypertension, or any hypertensive disorder in pregnancy (causes severe systemic vasoconstriction, leading to sudden, life-threatening blood pressure spikes, hypertensive encephalopathy, or maternal stroke).",
      "Severe maternal cardiovascular or coronary artery disease.",
      "Severe peripheral vascular disease."
    ],
    clinicalTips: "Never administer Ergometrine as a rapid IV bolus! It can cause severe coronary vasospasms, acute myocardial infarction, or sudden cardiac arrest. Always choose the IM route by default unless fully prepared for slow, diluted IV infuses."
  },
  {
    id: 9,
    name: "Tocolytic Therapy (Nifedipine, Atosiban, Indomethacin)",
    class: "Uterine Relaxants / Myometrial Inhibitors",
    mechanism: "Atosiban competitively blocks uterine oxytocin receptors. Nifedipine blocks L-type calcium channels, reducing calcium influx into myometrial cells. Indomethacin inhibits prostaglandin synthesis in myometrium. This relaxes the uterus.",
    indications: [
      {
        condition: "Delaying preterm labor for 24 - 48 hours to complete corticosteroid courses",
        dose: "Nifedipine: 20 mg oral loading dose, followed by 10 - 20 mg orally every 6 - 8 hours."
      }
    ],
    contraindications: [
      "Chorioamnionitis (uterine infection requires immediate delivery, delaying it causes maternal sepsis).",
      "Severe Placental Abruption (demands immediate resuscitation/delivery).",
      "Severe preeclampsia or eclampsia (prolonging pregnancy is life-threatening).",
      "Non-reassuring fetal status or fetal death (IUFD)."
    ],
    clinicalTips: "Tocolytics are not indicated for long-term maintenance therapy! Their sole clinical purpose is to delay labor for 24-48 hours to allow the administration of lung-maturing corticosteroids and facilitate the safe transfer of the mother and unborn child to a tertiary center with NICU facilities."
  }
];
