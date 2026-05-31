// data/emergency-protocols.js
var EMERGENCY_PROTOCOLS = {
  "heart-attack": {
    id: "heart-attack",
    title: "Heart Attack (Serangan Jantung / 心脏病发作)",
    icon: "heart",
    color: "red",
    goldenHour: "90 minutes from symptom onset to PCI (balloon angioplasty) — every minute of delay = permanent heart muscle damage",
    symptoms: ["Chest tightness, pressure, or crushing pain", "Pain radiating to left arm, jaw, or back", "Shortness of breath, sweating, nausea", "Sudden dizziness or loss of consciousness"],
    doNow: [
      "Call 999 immediately — tell them 'possible heart attack'",
      "Chew 1 aspirin (300mg) if NOT allergic and available",
      "Lie still, loosen tight clothing, stay calm"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Institut Jantung Negara (IJN)", aePhone: "+603-2617 8200", note: "National Heart Institute — 24/7 cardiac catheterisation lab. Fastest for STEMI in KL." },
      "Selangor": { hospital: "Serdang Heart Centre (Hospital Sultan Idris Shah)", aePhone: "+603-8947 5555", note: "Largest cardiac surgical volume in Southeast Asia — 24/7 emergency PCI" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "Full cardiac unit. Refer to IJN (15 min away) for complex cases." },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "State cardiac centre. Private: Penang Adventist Hospital has 24/7 cardiac cath lab." },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Johor state cardiac centre — 24/7 PCI available" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Perak state cardiac centre" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB) Alor Setar", aePhone: "+604-740 6233", note: "Kedah state cardiac centre" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Kelantan state cardiac centre" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Terengganu state cardiac centre" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA) Kuantan", aePhone: "+609-557 2222", note: "Pahang state cardiac centre" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ) Seremban", aePhone: "+606-768 4000", note: "NS state cardiac centre" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Melaka state cardiac centre. Private: Mahkota Medical Centre" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF) Kangar", aePhone: "+604-976 3333", note: "Limited cardiac capacity — complex cases transferred to HSB Alor Setar (50km)" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak cardiac centre — cardiac surgery available" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", aePhone: "+6088-218 166", note: "Sabah cardiac centre — cardiology unit available" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Limited cardiac capacity — airlift to HQE Kota Kinabalu or KL for complex STEMI" }
    }
  },
  "stroke": {
    id: "stroke",
    title: "Stroke (Strok / 中风)",
    icon: "brain",
    color: "purple",
    goldenHour: "4.5 hours from symptom onset for IV thrombolysis (clot-busting drug). 24 hours for mechanical thrombectomy at stroke centres.",
    symptoms: ["Sudden face drooping — smile test: one side droops", "Arm weakness — one arm drifts down", "Speech slurring or inability to speak", "Sudden severe headache, vision loss, or confusion"],
    doNow: [
      "Call 999 immediately — say 'stroke symptoms'",
      "Use FAST test: Face, Arms, Speech, Time",
      "Do NOT give food or water — may cause choking if swallowing is impaired",
      "Note the exact time symptoms started — critical for treatment decision"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — Stroke Unit or UMMC", aePhone: "+603-2615 5555", note: "HKL and UMMC both have 24/7 stroke teams and neurointerventional radiology" },
      "Selangor": { hospital: "Hospital Sungai Buloh or Hospital Selayang", aePhone: "+603-6156 0111", note: "Hospital Sungai Buloh has dedicated stroke unit. Selayang has neurosurgery." },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "Stroke unit available. Complex neurointerventional → refer to UMMC or HKL" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Penang state stroke centre. Neurosurgery available." },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Johor stroke centre with neurology" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Perak state stroke centre" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Kedah stroke centre" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Kelantan stroke unit" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Terengganu stroke unit" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Pahang stroke unit" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "NS stroke unit" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Melaka stroke unit. Private option: Mahkota Medical Centre." },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "Neurologist on-call — complex cases transferred to HSB Alor Setar" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak stroke centre with neurosurgery" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Sabah stroke centre" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Stabilise and transfer to HQE KK or KL — no neurointerventional locally" }
    }
  },
  "burns": {
    id: "burns",
    title: "Severe Burns (Melecur Teruk / 严重烧伤)",
    icon: "flame",
    color: "orange",
    goldenHour: "First aid within minutes matters. Burns unit admission within hours for major burns.",
    symptoms: ["Burns covering >10% body surface area (BSA) in adults, >5% in children", "Burns on face, hands, feet, genitals, or joints", "Deep burns (white/black/charred tissue, painless)", "Inhalation injury (singed nasal hair, hoarse voice, soot in mouth)"],
    doNow: [
      "Cool burn with COOL running water for 20 minutes (NOT ice, NOT toothpaste, NOT butter)",
      "Call 999 if major burns, facial burns, or breathing difficulty",
      "Cover loosely with clean non-fluffy cloth after cooling",
      "Do NOT break blisters or remove stuck clothing"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — Burns Unit", aePhone: "+603-2615 5555", note: "HKL has Malaysia's largest public burns unit. Skin banking available." },
      "Selangor": { hospital: "Hospital Tengku Ampuan Rahimah (HTAR) Klang or HKL", aePhone: "+603-3375 5000", note: "HTAR has burns unit. Major burns → HKL burns unit" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "A&E and plastic surgery — major burns transferred to HKL" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Burns unit in Penang HPP" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Burns unit available" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Burns cases — plastic surgery referral" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Burns management — major cases → HRPB or HKL" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Burns unit available" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Burns management available" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Burns management — major cases → HKL" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "Burns management — major cases → HKL" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Burns management — major cases → HKL" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "Major burns → HSB Alor Setar or HKL" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Burns unit in HUS" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Burns management in HQE" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Stabilise and transfer to HQE KK for major burns" }
    }
  },
  "road-trauma": {
    id: "road-trauma",
    title: "Road Traffic Accident / Severe Trauma (Kemalangan Jalan Raya / 严重创伤)",
    icon: "car-crash",
    color: "red",
    goldenHour: "The 'Golden Hour' — definitive haemorrhage control and surgery within 60 minutes saves lives.",
    symptoms: ["Multiple injuries from high-impact collision", "Suspected spinal injury (Do NOT move unless immediate danger)", "Significant blood loss / uncontrolled bleeding", "Unconsciousness, breathing difficulty"],
    doNow: [
      "Call 999 — describe location, number of casualties, and consciousness level",
      "Do NOT move injured person if spinal injury suspected",
      "Apply firm direct pressure to bleeding wounds",
      "Keep patient warm and still — shock prevention"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) Level 1 Trauma Centre", aePhone: "+603-2615 5555", note: "HKL is Malaysia's premier Level 1 trauma centre with 24/7 neurosurgery, cardiothoracic, and orthopedic teams" },
      "Selangor": { hospital: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", aePhone: "+603-3375 5000", note: "Major trauma centre for Selangor. HTAR handles the highest trauma volume outside KL." },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "Trauma resuscitation — complex cases to HKL or Serdang" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Penang state trauma centre with 24/7 surgical teams" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Johor trauma centre" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Perak trauma centre" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Kedah trauma centre" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Kelantan trauma centre" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Terengganu trauma centre" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Pahang trauma centre" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "NS trauma centre" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Melaka trauma centre" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "Trauma stabilisation — complex cases transferred to HSB Alor Setar" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak Level 1 trauma centre" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Sabah trauma centre" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Stabilise and transfer to HQE KK or KL for complex trauma" }
    }
  },
  "severe-bleeding": {
    id: "severe-bleeding",
    title: "Severe Bleeding / Haemorrhage (Pendarahan Teruk / 严重出血)",
    icon: "droplets",
    color: "red",
    goldenHour: "Uncontrolled bleeding can be fatal in minutes. Act immediately.",
    symptoms: ["Uncontrolled external bleeding", "Blood spurting rhythmically (arterial bleed)", "Signs of internal bleeding: rigid abdomen, blood in urine/stool/vomit", "Shock: pale, cold, clammy skin, rapid pulse, confusion"],
    doNow: [
      "Apply FIRM direct pressure with a clean cloth — do NOT remove once applied, apply more on top",
      "If limb bleeding: elevate above heart level",
      "If tourniquet available and limb bleeding is life-threatening: apply 5-7cm above wound",
      "Call 999 immediately"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL)", aePhone: "+603-2615 5555", note: "24/7 blood bank, interventional radiology for embolisation, surgical teams on call" },
      "Selangor": { hospital: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", aePhone: "+603-3375 5000", note: "24/7 A&E with blood bank and surgical team" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "A&E with surgical capability" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Penang state hospital — 24/7 surgical and blood bank" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "24/7 surgical teams" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "24/7 A&E and surgery" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "24/7 A&E and surgery" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "24/7 A&E and surgery" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "24/7 A&E and surgery" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "24/7 A&E and surgery" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "24/7 A&E and surgery" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "24/7 A&E and surgery" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "A&E and surgery — complex cases to HSB Alor Setar" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "24/7 A&E and surgery" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "24/7 A&E and surgery" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Stabilise and transfer if surgical intervention needed" }
    }
  },
  "poisoning": {
    id: "poisoning",
    title: "Poisoning / Overdose (Keracunan / 中毒/过量)",
    icon: "skull",
    color: "green",
    goldenHour: "Time to treatment is critical. Bring the substance or packaging to hospital.",
    symptoms: ["Unconsciousness or altered consciousness after ingestion", "Difficulty breathing, seizures", "Chemical burns around mouth", "Vomiting, severe abdominal pain", "Substance/medication containers found nearby"],
    doNow: [
      "Call 999 or Poison Control: +603-8994 2281 (Hospital Kuala Lumpur)",
      "Do NOT induce vomiting unless specifically instructed by Poison Control",
      "If unconscious: recovery position (on side) to prevent choking",
      "Bring the substance container, pill packaging, or take a photo of it"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — Poison Control Centre", aePhone: "+603-2615 5555 / Poison Hotline: +603-8994 2281", note: "Malaysia's National Poison Centre. Toxicology expertise 24/7." },
      "Selangor": { hospital: "Nearest public hospital A&E", aePhone: "+603-3375 5000 (HTAR Klang)", note: "Call HKL Poison Control for guidance while transporting" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "A&E with ICU. Call Poison Hotline for specialist toxicology advice." },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Toxicology support — call national Poison Control for guidance" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "A&E and ICU available" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "A&E and ICU available" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "A&E and ICU available" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "A&E and ICU available" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "A&E and ICU available" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "A&E and ICU available" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "A&E and ICU available" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "A&E and ICU available" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "A&E available — complex cases transferred" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "A&E and ICU available" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "A&E and ICU available" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "A&E available — call national Poison Hotline for toxicology support" }
    }
  },
  "obstetric": {
    id: "obstetric",
    title: "Obstetric Emergency (Kecemasan Obstetrik / 产科急症)",
    icon: "baby",
    color: "pink",
    goldenHour: "Maternal and foetal life — act in minutes.",
    symptoms: ["Heavy vaginal bleeding in pregnancy (placenta praevia / abruption)", "Severe abdominal pain in pregnancy", "Pre-eclampsia: severe headache, visual changes, upper abdominal pain, severe hypertension", "Umbilical cord prolapse — foetal heart rate drop", "Seizure in pregnancy (eclampsia)"],
    doNow: [
      "Call 999 immediately — say 'obstetric emergency'",
      "Lie on LEFT side (reduces aorto-caval compression)",
      "Do NOT delay transport — obstetric emergencies deteriorate rapidly",
      "Note gestational age and any known complications to tell paramedics"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — O&G & NICU", aePhone: "+603-2615 5555", note: "HKL has Malaysia's largest NICU and maternal-fetal medicine unit. 24/7 emergency C-section." },
      "Selangor": { hospital: "Hospital Sungai Buloh or Hospital Tengku Ampuan Rahimah (HTAR)", aePhone: "+603-6156 0111", note: "Both hospitals have 24/7 obstetric teams and NICU" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "O&G and NICU available" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Penang state obstetric centre with NICU" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Johor obstetric centre with NICU" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Perak obstetric centre" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Kedah obstetric centre" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Kelantan women's hospital — specialises in O&G" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Terengganu obstetric centre" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Pahang obstetric centre" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "NS obstetric centre" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Melaka obstetric centre" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "O&G available — complex cases transferred to HSB Alor Setar" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak obstetric centre" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Sabah obstetric centre" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "O&G available — complex cases transferred to HQE KK" }
    }
  },
  "child-emergency": {
    id: "child-emergency",
    title: "Child Emergency (Kecemasan Kanak-kanak / 儿童紧急)",
    icon: "baby",
    color: "blue",
    goldenHour: "Children deteriorate FAST — paediatric A&E immediately for breathing difficulty, altered consciousness, or seizure.",
    symptoms: ["Breathing difficulty: fast breathing, retractions, grunting, cyanosis", "Prolonged seizure (>5 minutes)", "High fever with stiff neck and rash (meningitis)", "Severe dehydration in infants", "Loss of consciousness or unresponsive"],
    doNow: [
      "Call 999 for breathing difficulty, unresponsiveness, or ongoing seizure",
      "If febrile seizure: time the seizure, do NOT restrain, protect from injury",
      "If not breathing: start CPR (2 rescue breaths for every 30 compressions in infants)",
      "Keep calm — panic increases child's distress"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — Paediatric & PICU", aePhone: "+603-2615 5555", note: "HKL has Malaysia's largest PICU and paediatric surgery team. UMMC also excellent for complex paediatric cases." },
      "Selangor": { hospital: "Hospital Sungai Buloh (Paediatric A&E)", aePhone: "+603-6156 0111", note: "Sunway Medical Centre also has excellent paediatric ICU for private patients" },
      "Putrajaya": { hospital: "Hospital Putrajaya (Paediatrics)", aePhone: "+603-8888 8000", note: "Paediatric unit with PICU" },
      "Penang": { hospital: "Hospital Pulau Pinang (Paediatrics)", aePhone: "+604-222 5333", note: "Penang paediatric centre with PICU" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Johor paediatric centre" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Perak paediatric centre" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Kedah paediatric centre" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Kelantan paediatric centre" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Terengganu paediatric centre" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Pahang paediatric centre" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "NS paediatric centre" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Melaka paediatric centre" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "Paediatric ward — complex cases transferred" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak paediatric centre with PICU" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Sabah paediatric centre" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Paediatric ward — complex cases transferred to HQE KK" }
    }
  },
  "infectious": {
    id: "infectious",
    title: "Infectious Disease / Outbreak (Penyakit Berjangkit / 传染病)",
    icon: "virus",
    color: "green",
    goldenHour: "Isolation and early treatment prevent spread and improve outcomes.",
    symptoms: ["High fever with rash, bleeding, or organ failure signs", "Suspected dengue: severe headache, retro-orbital pain, muscle pain, rash", "Suspected leptospirosis (after flood/animal exposure): jaundice, bleeding", "Meningitis: stiff neck, photophobia, petechial rash"],
    doNow: [
      "Isolate and use mask if respiratory symptoms",
      "Call ahead to hospital A&E to alert them of possible infectious presentation",
      "Note all recent travel, animal exposure, flood exposure, or known contacts",
      "Do NOT self-medicate with antibiotics before diagnosis"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur (HKL) — Infectious Disease Unit", aePhone: "+603-2615 5555", note: "HKL has Malaysia's national infectious disease and microbiology expertise. Isolation wards available." },
      "Selangor": { hospital: "Hospital Sungai Buloh — National Infectious Disease Centre", aePhone: "+603-6156 0111", note: "Hospital Sungai Buloh is Malaysia's NATIONAL centre for infectious disease — designated for outbreaks including COVID-19." },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "Refer to Hospital Sungai Buloh for complex infectious disease" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "Infectious disease unit available" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "Infectious disease management" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "Infectious disease management" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "Infectious disease management" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "Infectious disease management" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "Infectious disease management" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "Infectious disease management" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "Infectious disease management" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "Infectious disease management" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "Infectious disease management — complex cases to HSB" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "Sarawak infectious disease centre" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "Sabah infectious disease centre" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "Basic management — complex cases airlifted" }
    }
  },
  "drowning": {
    id: "drowning",
    title: "Drowning / Near-Drowning (Lemas / 溺水)",
    icon: "waves",
    color: "blue",
    goldenHour: "Brain damage begins within 4–6 minutes without oxygen. Start CPR immediately.",
    symptoms: ["Unconscious after water submersion", "Breathing difficulty, coughing, or respiratory distress after rescue", "Altered consciousness or confusion after near-drowning"],
    doNow: [
      "Remove from water safely — without endangering yourself",
      "Call 999 immediately",
      "Start CPR immediately if not breathing (30 compressions : 2 breaths)",
      "Do NOT perform 'water drainage' procedures — start CPR, not tilting"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Nearest A&E — Hospital Kuala Lumpur (HKL)", aePhone: "+603-2615 5555", note: "ICU support for near-drowning. All public hospitals have A&E." },
      "Selangor": { hospital: "Nearest public hospital A&E", aePhone: "+603-3375 5000 (HTAR Klang)", note: "All state hospitals have ICU for post-drowning management" },
      "Putrajaya": { hospital: "Hospital Putrajaya", aePhone: "+603-8888 8000", note: "A&E and ICU" },
      "Penang": { hospital: "Hospital Pulau Pinang", aePhone: "+604-222 5333", note: "A&E and ICU" },
      "Johor": { hospital: "Hospital Sultanah Aminah (HSA)", aePhone: "+607-223 4422", note: "A&E and ICU" },
      "Perak": { hospital: "Hospital Raja Permaisuri Bainun (HRPB) Ipoh", aePhone: "+605-208 5000", note: "A&E and ICU" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB)", aePhone: "+604-740 6233", note: "A&E and ICU" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII)", aePhone: "+609-748 5300", note: "A&E and ICU" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ)", aePhone: "+609-621 3333", note: "A&E and ICU" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA)", aePhone: "+609-557 2222", note: "A&E and ICU" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ)", aePhone: "+606-768 4000", note: "A&E and ICU" },
      "Melaka": { hospital: "Hospital Melaka", aePhone: "+606-289 2344", note: "A&E and ICU" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF)", aePhone: "+604-976 3333", note: "A&E and ICU — complex cases to HSB Alor Setar" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) Kuching", aePhone: "+6082-276 666", note: "A&E and ICU" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE)", aePhone: "+6088-218 166", note: "A&E and ICU" },
      "Labuan": { hospital: "Hospital Labuan", aePhone: "+6087-422 811", note: "A&E and ICU" }
    }
  },
  "mental-crisis": {
    id: "mental-crisis",
    title: "Mental Health Crisis (Krisis Kesihatan Mental / 心理健康危机)",
    icon: "brain",
    color: "indigo",
    goldenHour: "De-escalation and safety — prioritise the person's dignity and safety.",
    symptoms: ["Active suicidal ideation with plan or intent", "Psychotic episode with risk to self or others", "Severe self-harm", "Drug-induced psychosis or severe withdrawal"],
    doNow: [
      "Stay calm — speak slowly, clearly, non-judgementally",
      "Remove access to means if possible (medications, sharp objects)",
      "Call Befrienders (24/7): 03-7956 8145 (KL) for talk support",
      "For acute danger: call 999 — police have trained mental health response in major cities"
    ],
    byState: {
      "Kuala Lumpur": { hospital: "Hospital Kuala Lumpur Psychiatric (HKLP) or HKL Psychiatric Ward", aePhone: "+603-2615 5555 (HKL A&E)", note: "HKLP is Malaysia's largest dedicated psychiatric hospital. Befrienders KL: 03-7956 8145 (24/7)" },
      "Selangor": { hospital: "Hospital Sungai Buloh — Psychiatric Unit", aePhone: "+603-6156 0111", note: "Psychiatric unit at HSGB. Befrienders KL serves Selangor too." },
      "Putrajaya": { hospital: "Hospital Putrajaya (Psychiatry)", aePhone: "+603-8888 8000", note: "Psychiatric unit — acute cases to HKL Psychiatric" },
      "Penang": { hospital: "Hospital Bahagia Ulu Kinta Perak OR Hospital Pulau Pinang Psychiatric Ward", aePhone: "+604-222 5333", note: "Penang HPP has psychiatric ward. Befrienders Penang: 04-281 5161" },
      "Johor": { hospital: "Hospital Permai Tampoi Johor Bahru (Psychiatric Hospital)", aePhone: "+607-232 8000 (verify)", note: "Dedicated psychiatric hospital in Johor. Hospital Sultanah Aminah also has psychiatric ward." },
      "Perak": { hospital: "Hospital Bahagia Ulu Kinta (Psychiatric Hospital)", aePhone: "+605-527 1333 (verify)", note: "Malaysia's oldest dedicated psychiatric hospital — full inpatient and outpatient psychiatry" },
      "Kedah": { hospital: "Hospital Sultanah Bahiyah (HSB) — Psychiatric Unit", aePhone: "+604-740 6233", note: "Psychiatric unit at HSB" },
      "Kelantan": { hospital: "Hospital Raja Perempuan Zainab II (HRPZII) — Psychiatric Unit", aePhone: "+609-748 5300", note: "Psychiatric unit available" },
      "Terengganu": { hospital: "Hospital Sultanah Nur Zahirah (HSNZ) — Psychiatric Unit", aePhone: "+609-621 3333", note: "Psychiatric unit available" },
      "Pahang": { hospital: "Hospital Tengku Ampuan Afzan (HTAA) — Psychiatric Unit", aePhone: "+609-557 2222", note: "Psychiatric unit available" },
      "Negeri Sembilan": { hospital: "Hospital Tuanku Jaafar (HTJ) — Psychiatric Unit", aePhone: "+606-768 4000", note: "Psychiatric unit available" },
      "Melaka": { hospital: "Hospital Melaka — Psychiatric Unit", aePhone: "+606-289 2344", note: "Psychiatric unit available" },
      "Perlis": { hospital: "Hospital Tuanku Fauziah (HTF) — Psychiatric Unit", aePhone: "+604-976 3333", note: "Psychiatric services — complex cases to HSB or HKLP" },
      "Sarawak": { hospital: "Hospital Umum Sarawak (HUS) — Psychiatric Ward", aePhone: "+6082-276 666", note: "Sarawak psychiatric centre. Befrienders Kuching: 082-254 340" },
      "Sabah": { hospital: "Hospital Queen Elizabeth (HQE) — Psychiatric Ward", aePhone: "+6088-218 166", note: "Sabah psychiatric centre. Befrienders Kota Kinabalu: 088-231 300 (verify)" },
      "Labuan": { hospital: "Hospital Labuan — basic psychiatric support", aePhone: "+6087-422 811", note: "Refer to HQE KK for inpatient psychiatry" }
    }
  }
};

// All Malaysian states list
var MY_STATES = [
  "Kuala Lumpur",
  "Putrajaya",
  "Labuan",
  "Selangor",
  "Penang",
  "Johor",
  "Perak",
  "Kedah",
  "Kelantan",
  "Terengganu",
  "Pahang",
  "Negeri Sembilan",
  "Melaka",
  "Perlis",
  "Sarawak",
  "Sabah"
];
