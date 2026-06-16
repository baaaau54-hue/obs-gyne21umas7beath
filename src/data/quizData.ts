import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    scenario: "A patient with an unknown gestational age presents to the ER with mild spotting. An ultrasound reveals the complete absence of an intrauterine gestational sac. If her initial beta-hCG is 500 mIU/mL and her repeat beta-hCG after 48 hours is 800 mIU/mL, what is your most accurate clinical diagnosis?",
    options: [
      "Normal, viable intrauterine pregnancy",
      "Spontaneous complete abortion",
      "Pregnancy of Unknown Location (PUL), highly suspicious of an ectopic pregnancy",
      "Vesicular molar pregnancy"
    ],
    correctAnswerIndex: 2,
    explanation: "Since the beta-hCG levels are below the discriminatory zone (1,500 mIU/mL), the absence of a gestational sac on TVS is expected. However, the rise (from 500 to 800 is a 60% increase, which is suboptimal and fails to demonstrate normal doubling kinetics), making it a class 1 Pregnancy of Unknown Location (PUL) highly suspicious of an ectopic pregnancy.",
    category: "Early Pregnancy Bleeding"
  },
  {
    id: 2,
    scenario: "A preeclamptic patient on a continuous IV Magnesium Sulfate (MgSO4) maintenance drip of 1 g/hour is checked by the floor nurse. The nurse reports that the patient's respiratory rate is 10 breaths/minute, urine output is 15 mL over the past hour, and her patellar knee-jerk reflexes are completely absent. What is your immediate action?",
    options: [
      "Increase the MgSO4 drip to 2g/hour to treat imminent eclampsia",
      "Stop the MgSO4 infusion immediately and administer 1 gram of 10% Calcium Gluconate slowly IV over 10 minutes",
      "Administer IV Hydralazine 5 mg slowly over 15 minutes",
      "Continue monitoring; these signs are normal transient side effects"
    ],
    correctAnswerIndex: 1,
    explanation: "Loss of deep tendon reflexes, respiratory depression < 12 breaths/minute, and severe oliguria are classic signs of Magnesium toxicity, exacerbated by kidney failure. The immediate protocol is to STOP the MgSO4 infusion immediately and administer the antidote: 1 gram of 10% Calcium Gluconate slowly IV over 10 minutes ('Rule of 10').",
    category: "Hypertension in Pregnancy"
  },
  {
    id: 3,
    scenario: "During active-phase labor, you plot the cervix dilatation on the Partogram. You observe that the dilatation curve has crossed the Action Line. What does this signify and what is your clinical response?",
    options: [
      "This indicates hyperactive labor; administer tocolytics immediately.",
      "This is normal labor progression; continue supportive doula care.",
      "This signifies Failure to Progress. Perform a comprehensive clinical re-assessment of the '3 Ps' (Power, Passenger, Passage) to rule out obstruction.",
      "This means the baby has successfully engaged; prepare for immediate forceps extraction."
    ],
    correctAnswerIndex: 2,
    explanation: "When the labor curve crosses the Action Line on the Partogram, it signifies a prolonged active phase and Failure to Progress. This requires the clinician to assess: 1. Power (quality of contraction), 2. Passenger (fetal presentation, size, position), and 3. Passage (maternal pelvic safety) to rule out mechanical obstruction before trying oxytocin augmentation.",
    category: "Normal Labor"
  },
  {
    id: 4,
    scenario: "You are performing a manual vacuum aspiration (MVA) for an incomplete miscarriage. What are the three classic signs that indicate the uterus has been completely evacuated and the procedure is finished?",
    options: [
      "Cessation of patient pain, contraction spikes, and fetal movement on CTG",
      "Absence of vaginal bleeding, normalization of blood pressure, and closing of cervical os",
      "The Gritty 'Regi' sensation on the uterine wall, presence of air/tissue bubbles in the suction line, and Crepitation (gratings heard as the scraper meets bare myometrium)",
      "Uterine dilatation, cervical relaxation, and spontaneous placental expulsion"
    ],
    correctAnswerIndex: 2,
    explanation: "Dr. Jehan Al-Moaysari stresses that the three classic procedural indicators of a complete curettage/evacuation are: 1. A gritty, washboard-like sensation ('Regi') as the curette slides over firm myometrial muscle, 2. The appearance of clear bubbles in the suction cannula, and 3. Audible or palpable crepitation (grating) during strokes.",
    category: "Instruments"
  },
  {
    id: 5,
    scenario: "A patient at 32 weeks gestation with a history of severe preeclampsia is admitted following a sudden gush of dark vaginal blood accompanied by severe, constant abdominal pain. On abdominal palpation, her uterus is board-like, rigid, and extremely tender. The fetal heart rate is displaying late decelerations. What is your diagnosis and immediate management?",
    options: [
      "Placenta Previa; put the patient on strict bed rest and manage expectantly (MacAfee scheme)",
      "Placental Abruption (Abruptio Placentae) with fetal distress; stabilize the mother and perform an immediate emergency Cesarean Section",
      "Vasa Previa rupture; administer IV fluids and await spontaneous vaginal delivery",
      "Uterine atony; administer IV Oxytocin 10 IU and perform bimanual massage"
    ],
    correctAnswerIndex: 1,
    explanation: "Constant, severe pain, dark blood, and a board-like, woody uterus are classic signs of Placental Abruption. Preeeclampsia is its leading medical risk factor. Since the fetus is displaying severe distress (late decelerations) at 32 weeks, immediate emergency Cesarean delivery is indicated once the mother is stabilized.",
    category: "Antepartum Hemorrhage"
  },
  {
    id: 6,
    scenario: "You are managing a postpartum hemorrhage (PPH) secondary to uterine atony. The patient's blood pressure is 150/100 mmHg. Which uterotonic drug is strictly contraindicated?",
    options: [
      "Oxytocin (Syntocinon)",
      "Misoprostol (Cytotec)",
      "Ergometrine (Syntometrine)",
      "Tranexamic Acid (TXA)"
    ],
    correctAnswerIndex: 2,
    explanation: "Ergometrine directly stimulates myometrial and vascular smooth muscle, causing profound peripheral vasoconstriction. In patients with hypertension (preeclampsia, eclampsia, chronic HTN), administering Ergometrine can cause sudden, fatal spikes in blood pressure, triggering maternal stroke or coronary spasm.",
    category: "Drugs"
  },
  {
    id: 7,
    scenario: "A patient with a history of 5 previous Cesarean Sections is scheduled for an elective primary C-section. What critical intraoperative risk is the surgical team most concerned about, and what permanent contraception option should be discussed preoperatively?",
    options: [
      "Risk of deep vein thrombosis (DVT); prescribe Oral Contraceptive Pills at discharge",
      "Risk of uterine rupture/dehiscence and Placenta Accreta Spectrum (PAS); discuss and recommend permanent Tubal Ligation",
      "Risk of postpartum depression; prescribe antenatal selective serotonin reuptake inhibitors",
      "Risk of breech malpresentation; perform external cephalic version (ECV)"
    ],
    correctAnswerIndex: 1,
    explanation: "Having 5 previous Cesarean scars places the patient at an extremely high risk for uterine scar rupture/dehiscence and Placenta Accreta Spectrum (PAS) where the placenta invades the deep scar. During the pre-op counseling of such high-parity repeat C-sections, permanent Tubal Ligation must be strongly recommended and consented to.",
    category: "Cesarean Section"
  },
  {
    id: 8,
    scenario: "A newborn is delivered in a case of suspected Vasa Previa rupture. The fetal vessels torn during membrane rupture have caused bleeding. Why is this event highly fatal to the baby while the mother remains completely stable?",
    options: [
      "The mother feels intense pain which causes localized uterine spasms",
      "Fetal blood volume is extremely small (~80-100 mL/kg), meaning a loss of even 30-50 mL represents acute exsanguination and hypovolemic shock, whereas no maternal blood is lost.",
      "The placenta absorbs the lost maternal blood, hiding the active volume depletion",
      "Fetal and maternal blood are fully mixed, leading to rapid immune rejection"
    ],
    correctAnswerIndex: 1,
    explanation: "In Vasa Previa, the exposed, unprotected vessels crossing the cervix are fetal in origin. When they rupture, the blood lost is 100% fetal. Because a newborn's total blood volume is tiny (~80-100 mL/kg, or ~250 mL total for a 3 kg baby), losing even 30-50 mL causes catastrophic fetal shock and death, while the mother experiences zero system compromise.",
    category: "Antepartum Hemorrhage"
  }
];
