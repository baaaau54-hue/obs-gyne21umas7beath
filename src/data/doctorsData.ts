import { Doctor } from '../types';

export const doctorsData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Luqia Al-Dhahiri (د. لقية الظاهري)",
    hospital: "Al-Sabeen",
    role: "Senior Examiner",
    personality: "Encouraging, reassuring, and highly conversational. Smiles and responds with 'Excellent, bravo!' when answers are accurate.",
    focusPoints: [
      "Leopold Maneuvers is her highest priority! Know the 4 steps in exact order, explain the purpose of each step, and demonstrate them cleanly on a model.",
      "General Examination steps, specifically the physical spots to check for anemia/pallor (conjunctiva, palm, and oral mucus membranes).",
      "Emergency drugs checklist: MgSO4 dosing, Hydralazine, and Oxytocin.",
      "PROM (Premature Rupture of Membranes) and Placenta Previa cases."
    ],
    scenarios: [
      {
        title: "The Leopold Maneuver Execution",
        description: "Always seek patient permission first, rub hands to warm them up, stand on the client's right side, and outline the 4 maneuvers with precise anatomical terms."
      }
    ],
    advice: "Speak clearly, maintain self-confidence, and keep responses direct and concise. She dislikes long-winded answers and will stop you with 'This is exactly what I wanted' once you hit the key clinical terms."
  },
  {
    id: 2,
    name: "Dr. Rajaa Al-Ezzi (د. رجاء العزي)",
    hospital: "Al-Sabeen",
    role: "Emergency & Surgical Expert",
    personality: "Quiet, maintains a calm poker face without giving immediate positive or negative verbal feedback. This might induce stress in some students.",
    focusPoints: [
      "The ABCDE resuscitation protocol for managing obstetric shock and clinical hemorrhages.",
      "Preeclampsia (PET) warning signs, severe features, and systematic complications.",
      "Critical emergency drugs: MgSO4 loading doses, Misoprostol application, and Dexamethasone timing.",
      "Instruments and tools identification: Cusco self-retaining speculum, Artery forceps, Ring forceps, and Sims' speculum."
    ],
    scenarios: [
      {
        title: "First Steps in Obstetric Hemorrhage",
        description: "Always shout 'Call for help' (Code Blue) first. Do not jump to drugs before obtaining airway, oxygen, and 2 wide-bore IVs with aggressive fluids."
      }
    ],
    advice: "Do not get anxious if she does not smile or react to your answers; it is simply her standard examiner style. Focus heavily on emergency protocols and triage."
  },
  {
    id: 3,
    name: "Dr. Rabab Al-Moaysari (د. رباب الميسري)",
    hospital: "Al-Sabeen",
    role: "Clinical Specialist",
    personality: "Highly approachable and pleasant, yet expects strict diagnostic accuracy and formal clinical terminology.",
    focusPoints: [
      "Precise clinical classifications (e.g. difference between Chronic, Gestational HTN vs. Preeclampsia, PPH types).",
      "Emergency Ampoules! She frequently uses actual vials of MgSO4, Hydralazine, Misoprostol, or TXA as props for her questions.",
      "Volunteering drug profiles: For any drug shown, you must immediately state its pharmacological class, uterine mechanism (uterotonic vs. tocolytic), core indications, and doses."
    ],
    scenarios: [
      {
        title: "The Ampoule Spot Check",
        description: "Given a vial of Tranexamic Acid (TXA): identify it as an antifibrinolytic, explain that it inhibits plasminogen, and outline the dose (1g slowly over 10m within 3hr)."
      }
    ],
    advice: "Be precise and thorough in your definitions. Do not say 'high blood pressure' when you mean 'severe preeclampsia with features of end-organ dysfunction'."
  },
  {
    id: 4,
    name: "Dr. Doaa Shoheit (د. دعاء شحيط)",
    hospital: "Al-Sabeen",
    role: "General & Case Reviewer",
    personality: "Extremely gentle, quiet, and friendly. She offers students plenty of room to present their log cases without interruption.",
    focusPoints: [
      "Case presentation: A highly concise, 1-minute case summary outlining the main chief complaints.",
      "Differentiating Placenta Previa vs. Placental Abruption (History, Exam, and Ultrasound) — her absolute signature question!",
      "Anatomical reasoning: Why 'Posterior Marginal Placenta Previa' mandates a C-Section, while 'Anterior' might allow vaginal delivery.",
      "Doses of critical drugs: MgSO4 bolus, Hydralazine, and Dexamethasone."
    ],
    scenarios: [
      {
        title: "Previa vs. Abruption Contrast",
        description: "Explain how previa yields painless bright-red blood with a soft uterus, while abruption shows highly painful dark-red blood with a board-like, woody uterus."
      }
    ],
    advice: "Maintain good eye contact and display professional confidence. For case summaries, use a structured chronological format."
  },
  {
    id:5,
    name: "Dr. Lamia Abdullah (د. لمياء عبدالله)",
    hospital: "Al-Sabeen",
    role: "precise Academic Examiner",
    personality: "Very detailed, academic, and strict on calculations. Focuses heavily on theoretical understanding and medical mathematics.",
    focusPoints: [
      "Theoretical mechanisms over pure physical exams.",
      "Medical Mathematics: Polyhydramnios amnioreduction fluid limitations, MgSO4 dosage titration, and nursing math for drip rates without a pump (13 drops/min).",
      "Identifying surgical instruments by name (expects rapid naming without unprompted descriptions).",
      "Cusco's speculum use to confirm the 'Water Pool' sign in PROM diagnostic specs."
    ],
    scenarios: [
      {
        title: "The Nursing Drip-Rate Math",
        description: "Calculate how to run a 1 g/hr MgSO4 maintenance dose (50 mL/hr) without an infusion pump using a 15-drop factor kit: outputting exactly 13 drops per minute."
      }
    ],
    advice: "Be mathematically precise. Review your drug calculations, gestational calculation formulas, and speculum signs."
  },
  {
    id: 6,
    name: "Dr. Maimoona Jabari (د. ميمونة جباري)",
    hospital: "Al-Sabeen",
    role: "Clinical Skills Mentor",
    personality: "Values analytical thinking. She tests the limits of the student's knowledge by asking 'Why?' after each of their answers.",
    focusPoints: [
      "Rigorous physical exam mechanics: the 'Why' behind every step in prenatal/abdominal examinations.",
      "C-Section indications: distinguishing elective from category-1 emergency indications.",
      "Why a 'Classical' Caesarean vertical scar might be indicated (e.g. dense adhesions, previa accreta, extreme prematurity).",
      "Antihypertensives and shock stabilizers: MgSO4, Hydralazine, Tranexamic Acid, Labetalol."
    ],
    scenarios: [
      {
        title: "The 'Why' Challenge",
        description: "If you state you check deep tendon reflexes in severe preeclampsia, be ready for the follow-up: 'Why?' (hyperreflexia signs impending eclampsia) and 'Why else?' (MgSO4 toxicity loss)."
      }
    ],
    advice: "Be patient and structured. If she asks multiple follow-ups, she is testing your depth. State 'Cooperative, oriented' before initiating exams."
  },
  {
    id: 7,
    name: "Dr. Ahlam Al-Maqtari (د. أحلام المقطري)",
    hospital: "Al-Sabeen",
    role: "Passionate OSCE Specialist",
    personality: "Enthusiastic, lively, and highly supportive of anxious students. Encourages team-spirit and has a great sense of humor.",
    focusPoints: [
      "The Partogram (her absolute favorite topic!): Alert & Action lines, Cervical dilatation plotting, and fetal head descent.",
      "Foley's Catheter ('The Sweetheart of Obstetrics'): Uses across all 3 stages of labor, C-sections, and VVF prevention.",
      "Translating uterine active words: Ecbolic (uterotonics) vs. Tocolytic (uterine relaxants).",
      "Post-operative C-section complications: adhesions, bladder injuries, wound fluid types."
    ],
    scenarios: [
      {
        title: "The Partogram Crossing",
        description: "Explain what it clinically means when the dilation curve crosses the action line: Failure to Progress, mandating '3 Ps' re-evaluation."
      }
    ],
    advice: "Show high confidence and speak with a clear, audible voice. Present case histories organically, like telling a structured medical story."
  },
  {
    id: 8,
    name: "Dr. Athba Al-Burati (د. عذبة البوراتي)",
    hospital: "Al-Sabeen",
    role: "Professionalism Auditor",
    personality: "Highly professional and meticulous. Places significant emphasis on student presentation, decorum, and log book neatness.",
    focusPoints: [
      "Decorum and attire: White coat fully buttoned up, stethoscope positioned around your neck.",
      "Obstetric History terms: precise notation of Gravida, Parity, abortions, and gestational age.",
      "PPH classifications, risk factors, and pelvic VVF mechanisms.",
      "Preoperative C-Section prerequisites: blood crossmatching, ultrasound checks for scar niches/placenta accreta."
    ],
    scenarios: [
      {
        title: "Meticulous History Presentation",
        description: "State: 'This is Mrs. X, a 28-year-old female, Gravida 3, Para 2, at 38 weeks gestation...' with absolute professional poise."
      }
    ],
    advice: "First impressions are crucial! Dress formally, ensure your lab coat is buttoned, keep your stethoscope around your neck, and present a clean, well-organized logbook."
  },
  {
    id: 9,
    name: "Dr. Ferdous Al-Faiq (د. فردوس الفائق)",
    hospital: "Al-Sabeen",
    role: "Emergency Flow Expert",
    personality: "Gracious, patient, and clinical. She loves testing the student's hands-on emergency management.",
    focusPoints: [
      "ER triage: 'How would you manage this patient if she arrives bleeding or in shock?'",
      "Preeclampsia definitions, classifications (Severe vs Mild), risk factors, and signs.",
      "Amniotic Fluid abnormalities: causes and complications of Oligo vs. Polyhydramnios.",
      "Surgical instruments: Sponge forceps, Artery forceps, Ovum forceps, and Foley's catheters."
    ],
    scenarios: [
      {
        title: "Unstable APH ER Arrival",
        description: "Immediately start resuscitating using the ABC protocol: left lateral tilt, 100% oxygen mask, double wide-bore IVs, draw crossmatch, and prepare for emergency C-section."
      }
    ],
    advice: "Focus on the initial 2 minutes of emergency arrivals. Always outline actions in order: resuscitation first, followed by diagnostics."
  },
  {
    id: 10,
    name: "Dr. Ishraq (د. إشراق)",
    hospital: "Al-Sabeen",
    role: "Clinical Skills Examiner",
    personality: "Friendly, supportive, and appreciative of structured physical exam steps.",
    focusPoints: [
      "Physical examination details (general review, chest checking, and abdominal palps).",
      "The Cusco speculum: its double-ended size logic (multiparous vs. nulliparous vaginal canals).",
      "Preeclampsia diagnosis and initial emergency MgSO4 drip setups."
    ],
    scenarios: [
      {
        title: "Cusco Speculum Sizing",
        description: "Explain that the wider blade is for multips with lax vaginal walls, while the narrower blade is for nulliparous tightness."
      }
    ],
    advice: "Write a detailed notes file for physical exams in your playbook. She values methodical clinical steps."
  },
  {
    id: 11,
    name: "Dr. Amal Al-Malki (د. أمل المالكي)",
    hospital: "Al-Sabeen",
    role: "Preeclampsia Specialist",
    personality: "Serious, focused, and expects students to be precise on clinical science and complications.",
    focusPoints: [
      "Preeclampsia and HELLP syndrome: diagnostic markers, laboratory tests, and multi-organ effects.",
      "Fecundity evaluations: 'Why do we order LFTs and RFTs in preeclamptic mothers?'",
      "Specific drug profiles: MgSO4, Dexamethasone, and Hydralazine."
    ],
    scenarios: [
      {
        title: "HELLP Syndrome Diagnosis",
        description: "Explain how rising AST/ALT (>70), microangiopathic hemolysis (LDH >600), and platelet drop (<100k) define HELLP."
      }
    ],
    advice: "Avoid general statements. Use precise medical terminology when describing HELLP and organ failure."
  },
  {
    id: 12,
    name: "Dr. Tahani Mubarak (د. تهاني مبارك)",
    hospital: "Al-Sabeen",
    role: "High-Yield Clinical Tutor",
    personality: "Gentle, calm, and highly collaborative. Encourages students and allows them to present their cases fully if they are organized.",
    focusPoints: [
      "Menstrual History details: regular cycles, date verification, and calculating EDD (Gregorian vs. Hijri).",
      "Differential Diagnosis (DDx) for headaches in pregnancy.",
      "Clinical Pelvimetry: describing step-by-step external and internal pelvic diameter measurements.",
      "Post-date surveillance protocols, twice-weekly testing (NST + AFI), and induction steps."
    ],
    scenarios: [
      {
        title: "Pregnant Headache DDx",
        description: "Differentiate obstetric causes (Severe preeclampsia/PRES) from benign non-obstetric causes (tension, migraines, meningitis) using key diagnostic markers."
      }
    ],
    advice: "Be comprehensive in your answers. When asked for C-section indications, don't just list two; try to present a structured, complete list."
  },
  {
    id: 13,
    name: "Dr. Naseem Shubaile (د. نسيم شبيل)",
    hospital: "Al-Sabeen",
    role: "Scenario Specialist",
    personality: "Employs rapid scenario-based questions to assess diagnostic logic and critical thinking.",
    focusPoints: [
      "APH diagnosis: the targeted screening questions to ask a bleeding patient in the ER.",
      "Differentiating the stable vs. unstable APH management pathways.",
      "MgSO4 toxicity metrics: sequential loss of reflexes, respiratory drop, and antidote dosing.",
      "Simulated hands-on examinations."
    ],
    scenarios: [
      {
        title: "ER Bleeding Triage",
        description: "Assess if the bleeding is painful (abruption) vs. painless (previa), check maternal vitals to evaluate shock, and perform a CTG to check fetal status before proceeding."
      }
    ],
    advice: "Always divide your clinical management logically: 'If she is in shock, I do X... If she is stable, I follow expectant path Y...'"
  },
  {
    id: 14,
    name: "Dr. Sarah Al-Habsi (د. سارة الحبشي)",
    hospital: "Al-Sabeen",
    role: "Clinical Case Reviewer",
    personality: "Extremely kind, patient, and handles students with care. Appreciates structured physiological explanations.",
    focusPoints: [
      "Extensive abruption vs. previa clinical profile contrasts.",
      "Vasa Previa: source of blood (100% fetal) and neonatal total blood parameters (80-100 mL/kg).",
      "Core surgical instruments: Cusco speculum, Allis tissue forceps, Toothed forceps, and Towel clips.",
      "Physiological degrees of hypovolemic shock (Class I–IV)."
    ],
    scenarios: [
      {
        title: "The Neonatal Volume Crisis",
        description: "Explain why vasa previa rupture is fatal for the baby: neonatal blood volume is tiny, so losing even 30-50 mL of blood causes fatal shock, while the mother remains unaffected."
      }
    ],
    advice: "Do not rush your answers. Take a few seconds to organize your thoughts before speaking. Always prepare a backup case in your playbook."
  },
  {
    id: 15,
    name: "Dr. Nesreen (د. نسرين)",
    hospital: "Al-Thawra",
    role: "Clinical Skills Lead",
    personality: "Elegant, polite, and excels at reducing student stress during oral exams.",
    focusPoints: [
      "Dual focus: cardiopulmonary safety (checking chest sounds) alongside obstetric exams.",
      "The ABCDE resuscitation protocol in trauma or severe breeding.",
      "Uterine involution timeline postpartum: normal uterine levels and causes of subinvolution.",
      "Key clinical tools: cervix dilators (Hegar), Uterine Sound, and speculums."
    ],
    scenarios: [
      {
        title: "Postpartum Fundal Evaluation",
        description: "Always ask the patient to void her bladder first, then palpate. A fundus displaced upward or laterally suggests a full bladder rather than uterine subinvolution."
      }
    ],
    advice: "Don't forget to mention step 1: perform a chest auscultation for pulmonary edema in severe preeclampsia before performing abdominal exams."
  },
  {
    id: 16,
    name: "Dr. Eman Al-Sharai (د. إيمان الشرعي)",
    hospital: "Al-Thawra",
    role: "senior Academic Examiner",
    personality: "Meticulous, values deep clinical mechanisms, and prefers candidates to answer in medical English.",
    focusPoints: [
      "Uterine remodeling and vascular pathology in preeclampsia.",
      "The biological mechanism of eclamptic fits and cerebral PRES.",
      "Rh immunization kinetics: sensitization events, IgM vs IgG crossing, and the role of the father's blood type (homozygous vs heterozygous D)."
    ],
    scenarios: [
      {
        title: "The Rh Sensitization Path",
        description: "Explain how primary FMH exposure triggers IgM (cannot cross placenta), while subsequent pregnancies trigger a rapid IgG response which crosses the placenta and clears fetal cells."
      }
    ],
    advice: "Always explain the physiological 'why' and 'how' in clear, fluent medical English. She values deep scientific explanations."
  },
  {
    id: 17,
    name: "Dr. Abdulhakim (د. عبدالحكيم)",
    hospital: "Al-Thawra",
    role: "Case Reviewer",
    personality: "Quietly spoken, but frequently interrupts to test the student's responsiveness and clinical agility.",
    focusPoints: [
      "Comparative tables: previa vs. abruption, lower (LSCS) vs. classical upper vertical C-section.",
      "DVT and thromboembolic signs post-op: Homan's sign, unilateral calf swelling, warmth, and redness.",
      "Uterine manual curettage uses, indications, and Asherman Syndrome risks."
    ],
    scenarios: [
      {
        title: "The DVT Post-Op Exam",
        description: "Check the client's legs for unilateral swelling, warmth, and calf tenderness. Avoid vigorous calf massage to prevent a pulmonary embolism."
      }
    ],
    advice: "Keep your answers brief and focused. If he interrupts, pause immediately, listen to the new question, and answer concisely."
  },
  {
    id: 18,
    name: "Dr. Amat Allah Fadha'el (د. أمة الله فضائل)",
    hospital: "Al-Thawra",
    role: "Diagnostic specialist",
    personality: "Highly precise, data-focused, and evaluates both calculations and imaging.",
    focusPoints: [
      "Dating accuracy: gestational math checks and early U/S discrepancies.",
      "CTG interpretation: baseline, variability, and deceleration profiles (early head compression vs. late uteroplacental compromise).",
      "Vesicular Mole: snowstorm ultrasound appearance and beta-hCG surveillance."
    ],
    scenarios: [
      {
        title: "CTG Deceleration Interpretation",
        description: "Differentiate late decelerations (uteroplacental insufficiency with nadir matching after contraction peak) from physiological early decelerations (head compression)."
      }
    ],
    advice: "Be mathematically precise. Review your gestational calculation formulas and CTG definitions."
  },
  {
    id: 19,
    name: "Dr. Amal Al-Asouli (د. آمال العسولي)",
    hospital: "Al-Thawra",
    role: "Traditional Clinical Lead",
    personality: "Meticulous and formal. Evaluates history presentation structure and clinical decorum.",
    focusPoints: [
      "Strict chronological history presentation matching the academic guidelines.",
      "Thorough general physical exams (Decorum rules, stands on right side, seeks permission first).",
      "Preeclampsia history taking: documenting previous blood pressure baselines to confirm a rise."
    ],
    scenarios: [
      {
        title: "Chronological History Taking",
        description: "Begin with personal details, then chief complaints, HOPI in chronological order, and resolve review of systems before moving to examination."
      }
    ],
    advice: "Strictly adhere to the traditional academic case framework. Ensure all physical exams are thorough and systematic."
  },
  {
    id: 20,
    name: "Dr. Sahar Al-Hammadi (د. سحر الحمادي)",
    hospital: "Al-Jumhouri",
    role: "Meticulous Academic Coach",
    personality: "Highly analytical and focuses on detailed symptom analysis.",
    focusPoints: [
      "Detailed symptom analysis (e.g. orthopnea vs. dyspnea in preeclamptic polyhydramnios).",
      "BMI calculations and weight tracking.",
      "PPROM protocols: antibiotic choices (Ampicillin + Erythromycin) and steroid completion intervals."
    ],
    scenarios: [
      {
        title: "PPROM Antibiotic Timing",
        description: "Outline the 7-day course of prophylactic Ampicillin + Erythromycin to extend the latency period and reduce GBS neonatal sepsis."
      }
    ],
    advice: "Review the exact names and dosages of clinical guidelines. She values high academic and clinical accuracy."
  },
  {
    id: 21,
    name: "Dr. Lamia Al-Shahari (د. لمياء الشهاري)",
    hospital: "Al-Jumhouri",
    role: "Clinical Skills Lead",
    personality: "Gracious, professional, and focuses on clinical logic and reasoning.",
    focusPoints: [
      "Ectopic pregnancy criteria for Methotrexate use: unruptured, beta-hCG < 6000, reliable follow-up.",
      "Signs and symptoms of shock in ruptured ectopic pregnancy.",
      "Understanding APH shock vital signs (hypotension, rapid pulse)."
    ],
    scenarios: [
      {
        title: "Ectopic PUL Diagnosis",
        description: "Manage a Pregnancy of Unknown Location (P PUL) below the discriminatory zone: monitor serial beta-hCG over 48 hours to assess viability before taking action."
      }
    ],
    advice: "Be precise with laboratory values and clinical criteria. She values structured, logical clinical plans."
  },
  {
    id: 22,
    name: "Dr. Jehan Al-Moaysari (د. جيهان الميسري)",
    hospital: "Al-Jumhouri",
    role: "Supportive Clinical Mentor",
    personality: "Enthusiastic and highly supportive of students. Focuses on procedural details.",
    focusPoints: [
      "The three classic signs of curettage completion (Regi/Gritty sensation, bubbles, and crepitation) — her absolute signature question!",
      "Asherman Syndrome: pathogenesis, clinical features, and prevention.",
      "MgSO4 loading and maintenance protocols."
    ],
    scenarios: [
      {
        title: "Curettage Completion Signs",
        description: "Identify curettage completion: 1. Gritty 'Regi' sensation on uterine walls. 2. Red bubble mix escaping suction. 3. Crepitating crunch of metal scraper against bare myometrium."
      }
    ],
    advice: "Review procedural steps in Detail. She values understanding the 'how' and 'when' of minor surgical procedures."
  },
  {
    id: 23,
    name: "Dr. Nawal (د. نوال)",
    hospital: "Al-Jumhouri",
    role: "Clinical Specialist",
    personality: "Calm, focused, and asks highly practical ANC questions.",
    focusPoints: [
      "Antenatal Clinic (ANC) checks: physical gait signs, facial puffiness, and baseline blood pressure checks.",
      "Prostaglandins vs. Oxytocin: differences in mechanism and clinical use.",
      "Cesarean Section: types of abdominal incisions and anatomical layers opened."
    ],
    scenarios: [
      {
        title: "ANC Physical Signs",
        description: "Recognize facial puffiness as an early sign of preeclampsia during routine ANC check-ups, and prioritize immediate blood pressure assessment."
      }
    ],
    advice: "Differentiate between the emergency ER environment and the routine ANC clinical check-up."
  }
];
