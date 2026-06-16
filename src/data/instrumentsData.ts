import { Instrument } from '../types';

export const instrumentsData: Instrument[] = [
  {
    id: 1,
    nameEn: "Cusco's Speculum",
    nameAr: "منظار كيسكو المهبلي الذاتي التثبيت",
    synonyms: ["Bivalve Self-Retaining Vaginal Speculum", "Cusco speculum", "مبعد كيسكو ذو المصراعين"],
    description: "A bivalve, self-retaining metal or plastic speculum with two adjustable blades, designed to visualize the vagina and cervix without requiring manual holding.",
    uses: [
      "Diagnose PROM or PPROM by directly visualizing the pooling of amniotic fluid in the posterior fornix.",
      "Evaluate Antepartum Hemorrhage (APH) safely: visualizing the cervix to rule out local lesions (polyps, cervical erosion) and checking if placenta covers the os, avoiding a dangerous digital PV exam.",
      "Inspect cervical dilatation, cervical effacement, or the presence of umbilical cord prolapse during high-risk active labor.",
      "Obtain sterile swabs/cultures from the cervical canal or posterior fornix for microbial screens (such as GBS or BV)."
    ],
    specifications: "Self-retaining with an adjustable side-screw or ratchet lock that holds the blades open, freeing both of the examiner's hands.",
    contraindications: "Active severe vaginal tears or unruled-out suspected pelvic trauma if inserted forcefully.",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Lamia Abdullah (Al-Sabeen Hospital)",
        note: "Stresses using Cusco speculum to diagnose PROM by searching for the 'Water Pool' sign (liquor pool in the posterior fornix on coughing) - his favorite question!"
      },
      {
        doctor: "Dr. Maimoona Jabari (Al-Sabeen Hospital)",
        note: "Specifically warns students to focus exclusively on OBSTETRIC uses during the obstetric OSCE (e.g., PROM, APH spec, labor cervix). Do not list gynecological uses like Pap smears or IUDs unless explicitly asked!"
      }
    ]
  },
  {
    id: 2,
    nameEn: "Sims' Speculum",
    nameAr: "منظار سيمز مهبلي ثنائي الطرف",
    synonyms: ["Double-Ended Duckbill Speculum", "Sims Vaginal Retractor", "منظار سيمز البطة"],
    description: "A non-self-retaining, double-ended metal speculum shaped like a curved channel. Each end features a differently sized blade.",
    uses: [
      "Direct revision and repair of vaginal and cervical tears/lacerations after delivery (requires an assistant for manual retraction).",
      "Diagnose and visualize Vesicovaginal Fistula (VVF) in Sims position, coupled with the methylene blue dye bladder test.",
      "Cervical biopsy, cerclage placement, or checking for cervical incompetence."
    ],
    specifications: "Double-ended with two differently sized blades (one wider, one narrower) to adapt to vaginal space differences.",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Ishraq (Al-Sabeen Hospital)",
        note: "Expects students to explain the size/double-ended logic: one end has a wider blade for multiparous women with lax vaginal walls, while the opposite narrower blade is for nulliparous tightness."
      }
    ]
  },
  {
    id: 3,
    nameEn: "Artery Forceps",
    nameAr: "ملقط الشرايين / ملقط سبنسر ويلز لوقف النزيف",
    synonyms: ["Hemostatic Forceps", "Spencer Wells Forceps", "Pean Forceps", "موقف النزيف"],
    description: "Surgical locking forceps with straight or curved serrated jaws and ringed handles, designed to clamp vessels to control bleeding.",
    uses: [
      "Clamping and ligating active arterial/venous bleeders during perineal tear operations, episiotomy repair, and Cesarean sections.",
      "Clamping the umbilical cord after birth before cutting it.",
      "Grasping membranes or tough fibrous tissue during deep tissue dissections."
    ],
    specifications: "Serrated jaws with a ratchet lock mechanism near the fingers to secure clamping without continuous finger force.",
    contraindications: "Should not be clamped on delicate hollow organs (e.g., bowel, bladder, fallopian tube) as it causes permanent crush injuries."
  },
  {
    id: 4,
    nameEn: "Ring Forceps / Ovum Forceps",
    nameAr: "ملقط بقايا الحمل / ملقط الاسفنج",
    synonyms: ["Sponge Holding Forceps", "Ovum Forceps", "ملقط البقيا", "حامل الشاش"],
    description: "Long, scissor-like locking forceps ending in oval, fenestrated (open ring) loops with horizontal inner serrations.",
    uses: [
      "Grasping and removing products of conception (RPOC) from the uterine cavity during active incomplete miscarriage evacuations (referred to as Ovum Forceps).",
      "Holding sterile gauze sponges for prep/painting of the perineum or abdomen before surgery.",
      "Inserting vaginal packs to stem bleeding, or grasping the cervix gently if other forceps are unavailable."
    ],
    specifications: "Long shafts, fenestrated ring-shaped jaws to prevent excessive crushing while maintaining traction.",
    contraindications: "Forceful rotation inside the soft pregnant uterus can cause catastrophic uterine perforation."
  },
  {
    id: 5,
    nameEn: "Sponge Holding Forceps",
    nameAr: "ملقط مايو-روبسون حامل الاسفنج",
    synonyms: ["Straight Mayo-Robson Forceps", "حامل الاسفنج المستقيم"],
    description: "Long, straight surgical locking forceps with loop heads and horizontal serrations, similar to Ring Forceps but strictly straight.",
    uses: [
      "Holding gauze sponges for surgical site prep (antiseptic painting).",
      "Grasping and retracting the cervical lips gently during deep exams.",
      "Clearing blood clots and amniotic debris from the vaginal vault post-delivery."
    ],
    specifications: "Straight profile, robust locking ratchets."
  },
  {
    id: 6,
    nameEn: "Allis Tissue Forceps",
    nameAr: "ملقط أليس للأنسجة المتينة",
    synonyms: ["Allis Forceps", "ملقط أليس ذو المخالب"],
    description: "Locking, scissor-handled forceps ending in small, sharp, interlocking teeth that mesh together cleanly.",
    uses: [
      "Securing skin edges, subcutaneous tissue, or tough rectus sheath/fascia during Cesarean section closure.",
      "Grasping tough tissue intended for excision (salpingectomy of ectopic sites).",
      "Clamping the vaginal mucosa during pelvic floor repairs."
    ],
    specifications: "Jaws with small interlocking claws. It is a traumatic forceps and holds tissue tightly.",
    contraindications: "Strictly contraindicated on viable skin edges, bladder wall, bowel, or delicate vessels due to puncture/shearing trauma."
  },
  {
    id: 7,
    nameEn: "Toothed Forceps",
    nameAr: "الجفت الجراحي ذو الأسنان",
    synonyms: ["Surgical Dissecting Forceps", "Tissue Forceps", "الجفت المشرشر"],
    description: "Tweezer-like, non-locking dissecting forceps featuring 1x2 or 2x3 interlocking sharp teeth at the tips.",
    uses: [
      "Firmly grasping and lifting tough tissues (fascia, rectus sheath, skin) during suturing without causing crushing injury.",
      "Manipulating surgical needles through tough rectus fascia.",
      "Holding vaginal mucosal margins during perineal tear / episiotomy surgery."
    ],
    specifications: "Spring-loaded tweezer profile with interlocking teeth.",
    contraindications: "Do not use on delicate internal organs (bowel, bladder, ureters) to avoid tearing them."
  },
  {
    id: 8,
    nameEn: "Towel Clips",
    nameAr: "ماسك الفوط والدريش الجراحي",
    synonyms: ["Towel Holding Forceps", "Backhaus Towel Clip", "ماسك الفوط"],
    description: "Scissor-handled, locking forceps ending in extremely sharp, curved prongs that pinch tissues and drapes.",
    uses: [
      "Securing sterile surgical drapes, sheets, and towels onto the patient's skin to maintain a pristine sterile field during C-sections.",
      "Holding suction lines or diathermy cords securely onto drapes."
    ],
    specifications: "Curved and pointed interlocking prongs.",
    contraindications: "Avoid pinching patient skin if they are awake; always ensure drapes are clamped without catching deep folds of skin."
  },
  {
    id: 9,
    nameEn: "Needle Holder",
    nameAr: "حامل الإبر الجراحي",
    synonyms: ["Mayo-Hegar Needle Holder", "ماسك الإبرة"],
    description: "Robust, heavy locking forceps with short, thick, flattened jaws, often embedded with tungsten carbide grooves to grasp steel needles.",
    uses: [
      "Firmly holding and driving curved surgical needles during all suturing procedures (C-section layer closures, episiotomy, tear repairs).",
      "Directing needle paths through thick tissues."
    ],
    specifications: "Serrated, cross-hatched jaws with deep grooves, and heavy locking ratchets near the finger loops.",
    doctorSpecialNotes: [
      {
        doctor: "General Surgery Rules",
        note: "Curved needles must always be grasped at the junction of the middle and posterior thirds. Grasping too close to the eye damages the suture, while grasping too close to the tip blunts the needle."
      }
    ]
  },
  {
    id: 10,
    nameEn: "Straight Mayo Scissors",
    nameAr: "مقص مايو المستقيم لقص الخيوط",
    synonyms: ["Suture Scissors", "Surgical Suture Cutter", "مقص مايو الجراحي"],
    description: "Sturdy, straight surgical scissors with thick, blunt-tipped blades designed to cut materials cleanly.",
    uses: [
      "Cutting thick suture strands after knot-tying during operations.",
      "Cutting surgical drapes, tape, or bandages.",
      "Coarse blunt dissection of fibrous planes if curved scissors are unavailable."
    ],
    specifications: "Thick straight blades, heavy pivot hinges, blunt safety tips."
  },
  {
    id: 11,
    nameEn: "Foley's Catheter",
    nameAr: "قسطرة فولي البولية ثنائية المجرى",
    synonyms: ["Silicon vs. Latex Urinary Catheter", "قسطرة فولي البالونية", "Sweetheart of Obstetrics"],
    description: "A flexible, double-lumen latex or silicon tube inserted via the urethra into the bladder, kept in place by a water-inflated retaining balloon.",
    uses: [
      "Decompress and empty the bladder before C-section to reduce risks of accidental bladder laceration when incising the lower segment.",
      "Continuous hourly urine output checks in severe preeclampsia/eclampsia: essential to detect renal failure and prevent MgSO4 toxicity (magnesium is excreted solely by kidneys).",
      "Monitor renal perfusion and perfusion in postpartum hemorrhage (PPH) or hypovolemic shock (urine < 30 mL/hr is the earliest sign of shock and kidney failure).",
      "Left for 10-14 days after obstructed labor to continuously drain the bladder, promoting tissue recovery and preventing Vesicovaginal Fistula (VVF).",
      "Mechanical Cervical Ripening (Induction): Foley balloon inserted through the cervix, inflated in the extra-amniotic space with 30-50 mL of water, applying direct mechanical pressure to stimulate endogenous prostaglandin release."
    ],
    specifications: "Double-lumen: one for continuous urine drainage, one ending in a 10-30 mL balloon filled with sterile water.",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Ahlam Al-Maqtari (Al-Sabeen Hospital)",
        note: "Affectionately calls it the 'Sweetheart of Obstetrics' because of its invaluable role in almost every obstetric emergency and procedure (PET, shock, pre-op, VVF, mechanical IOL)."
      },
      {
        doctor: "Dr. Laiqa Al-Dhahiri (Al-Sabeen Hospital)",
        note: "Highlights that Silicon catheters, being hypoallergenic and resistant to encrustation, must be chosen over Latex for the 2-week indwelling course required after obstructed labor to prevent VVF."
      }
    ]
  },
  {
    id: 12,
    nameEn: "Uterine Sound",
    nameAr: "مسبار الرحم الجراحي المدرج",
    synonyms: ["Graduated Uterine Sound", "مسبار الرحم المدرج"],
    description: "A long, slender, flexible metal rod with a blunt rounded tip and a graduated measurement scale starting from the tip.",
    uses: [
      "Measure the depth of the uterine cavity (from the external os to the fundus) prior to inserting an IUD or performing a D&C to prevent accidental puncture.",
      "Determine the anatomical direction of the uterus (anteflexed vs. retroflexed) to guide instruments safely."
    ],
    specifications: "Graduated centimeters starting from the blunt tip; malleable to allow slight bending.",
    contraindications: "suspected normal intrauterine pregnancy (absolute contraindication as it terminates the pregnancy immediately).",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Nesreen (Al-Thawra Hospital)",
        note: "Emphasizes the risk of Uterine Perforation, particularly in soft, tissue-thin postpartum, lactating, or post-aborted uteri. Perforation can lead to internal hemorrhage and bowel injuries."
      }
    ]
  },
  {
    id: 13,
    nameEn: "Hegar Dilators",
    nameAr: "موسعات هيجار لعنق الرحم",
    synonyms: ["Hegar Cervical Dilators", "موسعات عنق الرحم"],
    description: "A set of double-ended, curved, solid metal rods in graduated millimeter thicknesses, designed to gradually dilate the cervix.",
    uses: [
      "Gradual mechanical dilation of the cervical canal to allow instrument access (suction cannulas, curettes, hysteroscopes) for diagnostic/therapeutic uterine evacuations.",
      "Dilating both the internal and external cervical os."
    ],
    specifications: "A sequence of progressive diameters (e.g. 1 mm up to 26 mm). No sharp edges.",
    contraindications: "Active acute cervical infections or suspected viable intrauterine pregnancies.",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Nesreen (Al-Thawra Hospital)",
        note: "Warns about Cervical Incompetence as a late complication if the internal os is over-dilated beyond 8-10 mm or torn forcefully during rapid procedures."
      }
    ]
  },
  {
    id: 14,
    nameEn: "Uterine Curette",
    nameAr: "مجرفة الرحم / المكحت",
    synonyms: ["Sharp & Suction Curette", "Karman Cannula", "Curette", "المكحت الجراحي"],
    description: "A surgical scraping loop or plastic/metal cannula connected to a vacuum source, designed to evacuate tissues from the uterus.",
    uses: [
      "Therapeutic evacuation: clearing retained products of conception (RPOC) in incomplete / missed miscarriage or postpartum hemorrhage.",
      "Therapeutic: rapid evacuation of hydatidiform molar pregnancy.",
      "Diagnostic: obtaining endometrial biopsy tissue for abnormal uterine bleeding, suspected hyperplasia, or endometrial cancer testing."
    ],
    specifications: "Sharp loop at one end or connected to a manual vacuum aspirator (MVA) syringe (suction / Karman cannula). Suction MVA is safer than sharp metal curettes, causing less perforation.",
    contraindications: "Suspected viable intrauterine pregnancy.",
    doctorSpecialNotes: [
      {
        doctor: "Dr. Jehan Al-Moaysari (Al-Jumhouri Hospital)",
        note: "Asks for the 3 classic signs indicating COMPLETE evacuation of the uterus: 1. 'Regi' (Gritty sensation felt as the metal loop slides against the firm, rough myometrium). 2. Appearance of bubbles (air mixed with blood) in the suction line. 3. 'Crepitation' (gratings heard as the scrapers engage the bare muscle wall). Essential check-off items!"
      }
    ]
  }
];
