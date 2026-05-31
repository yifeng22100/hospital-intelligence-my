// data/hospitals/kuala-lumpur.js
var HOSPITALS_KL = [
  {
    id: "hkl",
    name: "Hospital Kuala Lumpur (HKL)",
    nameShort: "HKL",
    sector: "public",
    tier: "quaternary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Hospital Kuala Lumpur is Malaysia's largest public hospital and the country's apex tertiary referral centre, with over 2,400 beds and the widest range of specialist services under one roof. Founded in 1896, it serves as the national referral hub for complex and rare conditions, treating patients from across Malaysia and the region.",
    famousFor: ["Malaysia's largest hospital (2,400+ beds)", "National Level 1 Trauma Centre", "Largest public NICU and PICU in Malaysia", "National Burns Unit with skin banking", "Quaternary referral for all states"],
    infrastructure: {
      yearEstablished: 1896,
      totalBeds: 2400,
      icuBeds: 120,
      nicuBeds: 40,
      operatingTheatres: 28,
      area: "~35 acres",
      buildings: "Main Tower, Women & Children Block, Specialist Block, Oncology Block, Surgical Suites",
      helipad: true,
      parkingBays: "~1,200 bays (multi-storey)",
      parkingRate: "RM 1/hour, max RM 8/day"
    },
    contact: {
      address: "Jalan Pahang, 50586 Kuala Lumpur",
      mainLine: "+603-2615 5555",
      emergencyLine: "+603-2615 5555 ext. 1",
      appointmentLine: "+603-2615 5555",
      website: "https://hkl.moh.gov.my",
      mapQuery: "Hospital Kuala Lumpur Jalan Pahang"
    },
    transport: {
      nearest: "PWTC LRT Station (Ampang/Kelana Jaya Line) — 10 min walk",
      bus: "Rapid KL Bus Route 250, 260",
      highway: "MRR2/DUKE — Exit Jalan Pahang",
      landmark: "Opposite Chow Kit Market, near Putra World Trade Centre (PWTC)"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground Floor & Level 4, 6:30am–10pm",
      atm: "Main lobby (Maybank, CIMB, RHB)",
      surau: "Level 2, 4, 6 main block",
      chapel: "Level 1",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HKL-Guest)",
      patientTransport: "Hospital van service, RM 20–50 within KL"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00 (max 2 visitors)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Always confirm with ward directly. Hours change during outbreaks."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "Intensive Care Medicine (ICU)", "Neonatal ICU (NICU)",
        "Paediatric ICU (PICU)", "General Surgery", "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery", "Spine Surgery", "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology", "Haematology",
        "Nephrology", "Urology", "Gastroenterology & Hepatology", "Colorectal Surgery",
        "Hepatobiliary Surgery", "Respiratory Medicine", "Thoracic Surgery",
        "Infectious Disease", "Endocrinology", "Rheumatology", "Psychiatry",
        "Dermatology", "Ophthalmology", "ENT & Head Neck Surgery", "Oral & Maxillofacial Surgery",
        "Burns & Plastic Reconstructive Surgery", "Vascular Surgery", "Interventional Radiology",
        "Nuclear Medicine", "PET-CT Scan", "Rehabilitation Medicine", "Dental Surgery"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Malaysia's only liver transplant centre" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", note: "IJN performs heart transplants" },
        { specialty: "Gamma Knife Radiosurgery", transferTo: "Gleneagles KL (private)", note: "Gamma Knife Icon available privately" },
        { specialty: "Proton Therapy", transferTo: "Overseas referral", note: "Not yet available in Malaysia" }
      ],
      byReferral: [
        "Cochlear Implant (refer to UMMC or Hospital Sultanah Bahiyah)",
        "Living Donor Kidney Transplant (refer to Hospital Selayang or UMMC)",
        "Haematopoietic Stem Cell Transplant (refer to UMMC)"
      ]
    },
    transferPathway: {
      summary: "HKL is itself the national quaternary referral destination. It refers out only for highly specialised procedures not offered here.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 18 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "National cardiac surgical institute", distanceKm: 3 },
        { condition: "Proton therapy / radiosurgery", to: "Overseas or private hospitals", reason: "Not available in public sector", distanceKm: 0 }
      ],
      howToTransfer: "Ask your treating doctor to initiate MOH inter-hospital referral. Ambulance transfer is covered. Bring all investigation results and referral letter."
    },
    specialtyRanks: {
      "Trauma Surgery": { rank: "National #1 (Public)", desc: "Malaysia's designated Level 1 Trauma Centre with 24/7 full surgical teams" },
      "Burns & Plastic Surgery": { rank: "National #1 (Public)", desc: "Largest public burns unit in Malaysia with skin banking" },
      "Neonatology": { rank: "National #1 (Public)", desc: "Largest NICU in the public sector" },
      "Oncology": { rank: "Top 3 (Public)", desc: "Comprehensive cancer centre with radiation, nuclear medicine and PET-CT" }
    },
    accreditations: ["MSQH Accredited", "JCI Reviewed", "MOH Designated National Referral Centre", "WHO Collaborating Centre (Trauma)"],
    verifiedNotes: "Bed count ~2,400 (MOH Annual Report 2023). Level 1 Trauma designation confirmed. Poison Control Centre located here (+603-8994 2281). 24/7 specialist coverage across all major disciplines.",
    notableGaps: "No liver transplant (refer Selayang). No Gamma Knife. Outpatient waiting times can be 2–4 months for non-urgent specialist appointments.",
    primaryExcellence: "National apex quaternary referral hospital and Level 1 Trauma Centre",
    secondarySpecialties: "Oncology, Neonatology, Neurosurgery, Burns",
    fullSpecialties: ["Emergency Medicine", "Cardiology", "Cardiothoracic Surgery", "Neurology", "Neurosurgery", "Oncology", "Haematology", "Nephrology", "Transplant (Kidney)", "Obstetrics", "Paediatrics", "Burns", "Trauma Surgery"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available. Commercial cashless panels available via pay-and-claim arrangement.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000 depending on procedure",
    gaps: "No liver transplant. Outpatient waiting times long. Parking can be difficult.",
    robotics: "Da Vinci Robotic Surgery System available for selected procedures. Radiation therapy with linear accelerators. Nuclear medicine SPECT/CT.",
    doctorQualifications: "All consultants hold MMC-registered specialist qualifications. Many hold fellowships from UK Royal Colleges, American Boards, and Australian Colleges. Senior consultants are professors at local medical schools.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://hkl.moh.gov.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hklp",
    name: "Hospital Kuala Lumpur Psychiatric (HKLP)",
    nameShort: "HKLP",
    sector: "public",
    tier: "quaternary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Hospital Kuala Lumpur Psychiatric is Malaysia's largest dedicated public psychiatric hospital, providing inpatient, outpatient, and forensic mental health services. It is the national referral centre for complex psychiatric cases and forensic psychiatry.",
    famousFor: ["Malaysia's largest public psychiatric hospital", "National forensic psychiatry centre", "Full range of inpatient psychiatric services", "Addiction medicine and detoxification programme"],
    infrastructure: {
      yearEstablished: 1910,
      totalBeds: 900,
      icuBeds: 0,
      nicuBeds: 0,
      operatingTheatres: 2,
      area: "~15 acres",
      buildings: "Acute Admission Block, Chronic Care Block, Forensic Block, OPD Building",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Pahang, 50586 Kuala Lumpur (adjacent to HKL)",
      mainLine: "+603-2615 5555 (via HKL main)",
      emergencyLine: "+603-2615 5555",
      appointmentLine: "+603-2615 5555",
      website: "https://hkl.moh.gov.my",
      mapQuery: "Hospital Kuala Lumpur Psychiatric Jalan Pahang"
    },
    transport: {
      nearest: "PWTC LRT Station — 12 min walk",
      bus: "Rapid KL Route 250, 260",
      highway: "MRR2 — Exit Jalan Pahang",
      landmark: "Adjacent to Hospital Kuala Lumpur main campus"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Available during daytime",
      atm: "Nearby at HKL main lobby",
      surau: "Available on campus",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Shared with HKL"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–19:00 (strictly enforced)",
      icu: "N/A",
      paediatric: "N/A",
      maternity: "N/A",
      notes: "Visiting may be restricted based on patient's clinical status. Confirm with ward before visiting."
    },
    specialtyCoverage: {
      available: [
        "General Adult Psychiatry (inpatient & outpatient)",
        "Child & Adolescent Psychiatry",
        "Forensic Psychiatry",
        "Addiction Medicine & Detoxification",
        "Geriatric Psychiatry",
        "Community Psychiatry",
        "ECT (Electroconvulsive Therapy)",
        "Psychology & Neuropsychology",
        "Occupational Therapy (psychiatric)",
        "Social Work (psychiatric)"
      ],
      notAvailable: [
        { specialty: "General Medical / Surgical Care", transferTo: "Hospital Kuala Lumpur (HKL)", note: "Medical emergencies transferred to HKL campus" }
      ],
      byReferral: [
        "Neuropsychiatric disorders — co-managed with HKL Neurology",
        "Eating disorders — specialist programme at private hospitals"
      ]
    },
    transferPathway: {
      summary: "HKLP handles all psychiatric admissions. Medical co-morbidities managed in liaison with HKL across the road.",
      routes: [
        { condition: "Medical emergencies in psychiatric patients", to: "Hospital Kuala Lumpur (HKL)", reason: "Shared campus — medical emergencies transferred within minutes", distanceKm: 0.2 }
      ],
      howToTransfer: "Referral for psychiatric admission via GP, A&E, or community psychiatry. Walk-in to HKLP OPD or present to HKL A&E for crisis assessment."
    },
    specialtyRanks: {
      "Forensic Psychiatry": { rank: "National #1 (Public)", desc: "National forensic psychiatric service for court-ordered assessments" },
      "General Psychiatry": { rank: "Largest (Public)", desc: "Highest-volume public psychiatric hospital in Malaysia" }
    },
    accreditations: ["MSQH Accredited", "MOH Designated National Forensic Psychiatric Centre"],
    verifiedNotes: "Dedicated psychiatric hospital adjacent to HKL. Handles MOH-ordered psychiatric detention and court-ordered psychiatric evaluation.",
    notableGaps: "No general medical or surgical wards — purely psychiatric. Long waiting list for community follow-up. Limited private room options.",
    primaryExcellence: "National public psychiatric and forensic mental health centre",
    secondarySpecialties: "Addiction Medicine, Child Psychiatry, Geriatric Psychiatry",
    fullSpecialties: ["General Psychiatry", "Child & Adolescent Psychiatry", "Forensic Psychiatry", "Addiction Medicine", "Geriatric Psychiatry"],
    roomRate: "RM 3 – RM 10 (Subsidised Public)",
    roomRateRaw: 3,
    insurance: "Subsidised public hospital. Commercial insurance coverage very limited for psychiatric admissions — verify with insurer.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No medical/surgical capability. Commercial insurance often excludes or limits psychiatric coverage.",
    robotics: "N/A",
    doctorQualifications: "All psychiatrists hold MMC-registered specialist qualifications (MRCPsych or equivalent). Many are professors at local medical schools.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "ummc",
    name: "Pusat Perubatan Universiti Malaya (UMMC)",
    nameShort: "UMMC",
    sector: "public",
    tier: "academic",
    state: "Kuala Lumpur",
    city: "Petaling Jaya / Kuala Lumpur",
    intro: "UMMC (University of Malaya Medical Centre) is Malaysia's oldest academic medical centre, affiliated with the country's premier university. With 1,617 beds, it combines world-class clinical care with cutting-edge research and medical education, serving as a quaternary referral centre for complex haematological, neurological, and transplant cases.",
    famousFor: ["Malaysia's oldest academic hospital (1967)", "Bone marrow transplant and haematology leader", "Kidney transplant programme", "Clinical trial hub with over 100 active trials", "Haematopoietic Stem Cell Transplant Unit"],
    infrastructure: {
      yearEstablished: 1967,
      totalBeds: 1617,
      icuBeds: 80,
      nicuBeds: 30,
      operatingTheatres: 20,
      area: "~40 acres (UM campus)",
      buildings: "Main Clinical Block, Women & Children Tower, Specialist Clinics Block, Research Institute",
      helipad: true,
      parkingBays: "~1,500 bays",
      parkingRate: "RM 1.50/hour (university parking)"
    },
    contact: {
      address: "Jalan Professor Diraja Ungku Aziz, 59100 Kuala Lumpur",
      mainLine: "+603-7949 2333",
      emergencyLine: "+603-7949 2333 ext. A&E",
      appointmentLine: "+603-7949 4422",
      website: "https://www.ummc.edu.my",
      mapQuery: "UMMC University Malaya Medical Centre Petaling Jaya"
    },
    transport: {
      nearest: "University LRT Station (Kelana Jaya Line) — 15 min walk or short taxi ride",
      bus: "Rapid KL Bus Route 12, U88",
      highway: "NPE — Exit UM/Jalan Universiti",
      landmark: "Inside University of Malaya campus, off Jalan Universiti"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level G & Level 3, 7am–9pm. Multiple food courts on UM campus nearby.",
      atm: "Main lobby (Maybank, CIMB, Public Bank)",
      surau: "Level 1, 3, 5",
      chapel: "Level 1",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (UMMC-Guest / UM eduroam)",
      patientTransport: "UMMC transport service available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:00–17:30 (max 2 visitors at a time)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Visiting strictly controlled in immunocompromised wards (haematology/BMT). Always confirm."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "Intensive Care Medicine (ICU/HDU)", "NICU & PICU",
        "Haematology & Bone Marrow Transplant (BMT)", "Haematopoietic Stem Cell Transplant (HSCT)",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology", "Gynaecological Oncology",
        "Cardiology", "Cardiothoracic Surgery", "Neurology", "Neurosurgery", "Spine Surgery",
        "Kidney Transplant", "Nephrology", "Urology",
        "Gastroenterology & Hepatology", "Hepatobiliary Surgery", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine", "Fertility / IVF",
        "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology", "Paediatric Oncology",
        "Orthopaedic Surgery", "Spine Surgery", "Hand & Microsurgery",
        "Oral & Maxillofacial Surgery", "Cochlear Implant Programme", "ENT & Head Neck Surgery",
        "Ophthalmology", "Dermatology", "Rheumatology", "Clinical Immunology",
        "Endocrinology & Diabetes", "Psychiatry", "Geriatric Medicine",
        "Interventional Radiology", "PET-CT Scan", "Nuclear Medicine",
        "Rehabilitation Medicine", "Palliative Care", "Infectious Disease"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Only liver transplant centre in Malaysia" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", note: "IJN performs cardiac transplants" },
        { specialty: "Proton Therapy", transferTo: "Overseas referral", note: "Not available in Malaysia" }
      ],
      byReferral: [
        "Gamma Knife (refer to private — Gleneagles KL or Pantai KL)",
        "Living Donor Liver Transplant (refer to Selayang)"
      ]
    },
    transferPathway: {
      summary: "UMMC is itself a national quaternary referral centre. The few conditions it cannot handle are transferred to even more specialised centres.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 20 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "National cardiac surgical institute", distanceKm: 8 }
      ],
      howToTransfer: "Referral via treating specialist. MOH inter-hospital referral letter required."
    },
    specialtyRanks: {
      "Haematology & BMT": { rank: "National #1 (Public)", desc: "Largest BMT programme in the public sector with full HSCT capability" },
      "Kidney Transplant": { rank: "National #1 (Public)", desc: "Largest public kidney transplant programme" },
      "Clinical Trials": { rank: "National #1 (Public/Academic)", desc: "Over 100 active clinical trials across all disciplines" },
      "Cochlear Implant": { rank: "National Leader", desc: "One of the main public cochlear implant centres" }
    },
    accreditations: ["MSQH Accredited", "JCI Accredited", "ISO 15189 (Laboratory)", "QS World University Rankings Top Medical School (Malaya)"],
    verifiedNotes: "1,617 beds (MOH 2023). Nationally recognized for haematology/BMT and kidney transplant. Clinical trial registry confirmed. Cochlear implant programme active.",
    notableGaps: "No liver transplant (refer Selayang). Long outpatient waiting times for non-urgent referrals. University teaching hospital means some procedures done by supervised trainees.",
    primaryExcellence: "Academic quaternary centre — national leader in BMT, haematology, and kidney transplant",
    secondarySpecialties: "Neurosurgery, Oncology, Clinical Trials, Cochlear Implant",
    fullSpecialties: ["Haematology", "Oncology", "Neurology", "Nephrology", "Cardiology", "Obstetrics", "Paediatrics", "Kidney Transplant", "BMT/HSCT"],
    roomRate: "RM 3 – RM 200 (Public class RM 3–80, Specialist class up to RM 200)",
    roomRateRaw: 10,
    insurance: "Subsidised public hospital. FPP scheme available. Many commercial insurers accept UMMC. Specialist class rooms eligible for insurance.",
    fppScheme: true,
    fppDeposit: "RM 500–3,000 depending on procedure",
    gaps: "No liver transplant. Long outpatient waits. Parking can be congested on weekdays.",
    robotics: "Da Vinci Robotic Surgery System. PET-CT. Linear accelerators for radiation therapy. 3T MRI.",
    doctorQualifications: "Professors, Associate Professors, and Senior Lecturers who are MMC-registered specialists. All hold higher specialist qualifications (MRCP, FRCS, FRCOG, etc.). Many are internationally recognized researchers.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.ummc.edu.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "gleneagles-kl",
    name: "Gleneagles Hospital Kuala Lumpur",
    nameShort: "Gleneagles KL",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Gleneagles Hospital KL is one of Malaysia's most reputable private hospitals, renowned for cardiac surgery, neurosurgery, and cancer care. Part of the IHH Healthcare group, it attracts international patients and is consistently ranked among the best private hospitals in Malaysia.",
    famousFor: ["Gamma Knife Icon radiosurgery (one of the first in Malaysia)", "Comprehensive cardiac centre", "Strong oncology with proton beam referral network", "International patient services hub"],
    infrastructure: {
      yearEstablished: 1996,
      totalBeds: 376,
      icuBeds: 40,
      nicuBeds: 12,
      operatingTheatres: 14,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Suites, Oncology Centre",
      helipad: true,
      parkingBays: "~500 bays",
      parkingRate: "RM 2/hour, max RM 20/day"
    },
    contact: {
      address: "286 & 288, Jalan Ampang, 50450 Kuala Lumpur",
      mainLine: "+603-4141 3000",
      emergencyLine: "+603-4141 3000 ext. A&E",
      appointmentLine: "+603-4141 3000",
      website: "https://www.gleneagles.com.my/kuala-lumpur",
      mapQuery: "Gleneagles Hospital Kuala Lumpur Jalan Ampang"
    },
    transport: {
      nearest: "Ampang Park MRT Station (Putrajaya Line) — 5 min walk",
      bus: "Rapid KL Bus along Jalan Ampang",
      highway: "AKLEH — Exit Jalan Ampang",
      landmark: "Jalan Ampang near Ampang Park, opposite KLCC area"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level 1 cafe and multiple food options in hospital",
      atm: "Main lobby",
      surau: "Level 2",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi throughout",
      patientTransport: "Medical transport and international patient coordination"
    },
    visitingHours: {
      general: "11:00–20:00 (flexible for private rooms)",
      icu: "Flexible — check with nursing team",
      paediatric: "Parents: unrestricted. Others: 11:00–20:00",
      maternity: "Partner/family: flexible by arrangement",
      notes: "Private hospital — more flexible visiting. ICU visits by arrangement."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU & CCU (24/7)",
        "Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology",
        "Neurology", "Neurosurgery", "Gamma Knife Radiosurgery",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology",
        "Gastroenterology", "Hepatobiliary Surgery", "Colorectal Surgery",
        "Orthopaedic Surgery", "Spine Surgery", "Joint Replacement",
        "Obstetrics & Gynaecology", "Fertility / IVF",
        "Urology", "Nephrology", "Vascular Surgery",
        "ENT & Head Neck", "Ophthalmology", "Dermatology",
        "Endocrinology", "Rheumatology", "Psychiatry",
        "Plastic & Reconstructive Surgery", "Sports Medicine",
        "Interventional Radiology", "PET-CT", "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang (public)", note: "Only available at national centre" },
        { specialty: "Proton Therapy", transferTo: "Overseas — Singapore, Thailand, Japan", note: "Not available in Malaysia" }
      ],
      byReferral: [
        "Bone Marrow Transplant (refer to UMMC or HKL)",
        "Heart Transplant (refer to IJN)"
      ]
    },
    transferPathway: {
      summary: "Gleneagles KL handles most complex private cases. For government-only procedures (liver transplant), patients are referred to Hospital Selayang.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang (public sector)", reason: "Only liver transplant centre in Malaysia", distanceKm: 20 },
        { condition: "Proton therapy", to: "Proton Treatment Centre Thailand / Japan", reason: "Not available in Malaysia", distanceKm: 0 }
      ],
      howToTransfer: "Private to public transfer requires MOH referral and specialist letter. Discuss with your Gleneagles specialist."
    },
    specialtyRanks: {
      "Gamma Knife Radiosurgery": { rank: "Private Leader KL", desc: "Gamma Knife Icon — one of Malaysia's most advanced radiosurgery units" },
      "Cardiac Surgery": { rank: "Top 3 Private KL", desc: "High-volume cardiac surgery centre with 24/7 cardiac catheterisation lab" }
    },
    accreditations: ["MSQH Accredited", "JCI Accredited", "IHH Healthcare Group"],
    verifiedNotes: "376 beds confirmed. Gamma Knife Icon available (verified 2024). Part of IHH Healthcare — largest private healthcare group in Asia.",
    notableGaps: "No liver transplant. No proton therapy. High cost — expect RM 5,000–30,000+ for complex procedures.",
    primaryExcellence: "Premium private hospital — Gamma Knife, cardiac surgery, oncology",
    secondarySpecialties: "Neurosurgery, Orthopaedics, IVF",
    fullSpecialties: ["Cardiology", "Neurosurgery", "Oncology", "Gamma Knife", "Orthopaedics", "IVF"],
    roomRate: "RM 250 – RM 800+/night",
    roomRateRaw: 450,
    insurance: "Accepts most major Malaysian and international insurance panels. Cashless admission available for most insurers. International patient billing available.",
    fppScheme: false,
    fppDeposit: "N/A (private — deposit RM 3,000–15,000 on admission)",
    gaps: "High cost. No liver transplant. No proton therapy.",
    robotics: "Gamma Knife Icon Radiosurgery. Da Vinci Robotic Surgery. 3T MRI. PET-CT. Hybrid cath lab.",
    doctorQualifications: "All specialists are MMC-registered with higher qualifications. Many trained in UK, US, Australia. Senior consultants are visiting professors at local universities.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.gleneagles.com.my/kuala-lumpur" },
      { label: "IHH Healthcare Group", url: "https://www.ihhhealthcare.com" }
    ]
  },
  {
    id: "prince-court",
    name: "Prince Court Medical Centre",
    nameShort: "Prince Court",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Prince Court Medical Centre is an award-winning private hospital located in the heart of Kuala Lumpur, known for its luxury facilities and strong medical tourism focus. It offers comprehensive specialist services and has been recognised internationally for patient experience.",
    famousFor: ["Multiple Best Hospital in Malaysia awards (Frost & Sullivan)", "Premier medical tourism destination", "Strong cardiac and orthopaedic programme", "Known for exceptional patient experience and private room standards"],
    infrastructure: {
      yearEstablished: 2008,
      totalBeds: 270,
      icuBeds: 24,
      nicuBeds: 8,
      operatingTheatres: 12,
      area: "~3 acres",
      buildings: "Single integrated tower building",
      helipad: true,
      parkingBays: "~400 bays",
      parkingRate: "RM 3/hour"
    },
    contact: {
      address: "39, Jalan Kia Peng, 50450 Kuala Lumpur",
      mainLine: "+603-2160 0000",
      emergencyLine: "+603-2160 0000 ext. A&E",
      appointmentLine: "+603-2160 0000",
      website: "https://www.princecourt.com",
      mapQuery: "Prince Court Medical Centre Kuala Lumpur Jalan Kia Peng"
    },
    transport: {
      nearest: "KLCC LRT Station — 10 min walk",
      bus: "Rapid KL along Jalan Ampang",
      highway: "AKLEH — Exit KLCC",
      landmark: "Near KLCC Twin Towers, off Jalan Ampang"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level 1 restaurant and cafe, 7am–10pm",
      atm: "Main lobby",
      surau: "Level 3",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free high-speed WiFi",
      patientTransport: "Medical concierge and airport transfer service"
    },
    visitingHours: {
      general: "10:00–21:00 (private rooms — flexible)",
      icu: "Flexible — visitor management by nursing team",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible by arrangement",
      notes: "Private hospital — visiting is flexible. Always confirm with nurse station."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU & CCU", "NICU",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery", "Joint Replacement",
        "Gastroenterology", "Hepatobiliary Surgery",
        "Clinical Oncology", "Surgical Oncology",
        "Obstetrics & Gynaecology", "Fertility/IVF",
        "Urology", "ENT", "Ophthalmology", "Dermatology",
        "Endocrinology", "Rheumatology", "Psychiatry",
        "Interventional Radiology", "PET-CT", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" },
        { specialty: "Gamma Knife", transferTo: "Gleneagles KL", note: "Available at Gleneagles KL" },
        { specialty: "Radiation Oncology (full)", transferTo: "Gleneagles KL or Beacon Hospital", note: "Limited radiotherapy — refer to dedicated oncology centres" }
      ],
      byReferral: [
        "Proton therapy — overseas referral",
        "BMT — refer to UMMC or HKL"
      ]
    },
    transferPathway: {
      summary: "Complex oncology and rare procedures may be transferred to dedicated centres.",
      routes: [
        { condition: "Radiation oncology", to: "Beacon Hospital or Gleneagles KL", reason: "Dedicated oncology centres with full radiotherapy", distanceKm: 5 }
      ],
      howToTransfer: "Specialist-to-specialist referral. Patient coordinator handles logistics."
    },
    specialtyRanks: {
      "Patient Experience": { rank: "Multiple award winner", desc: "Frost & Sullivan Best Hospital Malaysia multiple years" }
    },
    accreditations: ["MSQH Accredited", "JCI Accredited", "Frost & Sullivan Best Hospital Malaysia"],
    verifiedNotes: "270 beds confirmed. JCI accreditation verified. Petrol awards for patient experience verified.",
    notableGaps: "No liver transplant. Limited radiation oncology. Premium pricing.",
    primaryExcellence: "Premium private hospital — cardiac, orthopaedics, medical tourism",
    secondarySpecialties: "Neurosurgery, Oncology, IVF",
    fullSpecialties: ["Cardiology", "Orthopaedics", "Neurosurgery", "Oncology", "Obstetrics"],
    roomRate: "RM 350 – RM 1,200+/night",
    roomRateRaw: 600,
    insurance: "Accepts major Malaysian and international insurance. Cashless available for most major insurers.",
    fppScheme: false,
    fppDeposit: "N/A (deposit RM 5,000–20,000 on admission)",
    gaps: "Premium pricing. No radiation oncology (full suite). No liver transplant.",
    robotics: "Robotic surgery available. 3T MRI. PET-CT.",
    doctorQualifications: "All specialists MMC-registered with higher specialist qualifications. Many are top-ranked in their fields in Malaysia.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.princecourt.com" }
    ]
  },
  {
    id: "pantai-kl",
    name: "Pantai Hospital Kuala Lumpur",
    nameShort: "Pantai KL",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Pantai Hospital Kuala Lumpur is one of the largest private hospitals in Malaysia, part of the Pantai/IHH group. It offers comprehensive specialist services and is particularly known for its strong oncology programme and wide range of outpatient specialist clinics.",
    famousFor: ["Comprehensive cancer centre", "Wide panel of specialist consultants", "Strong outpatient specialist services", "Major private hospital serving KL south"],
    infrastructure: {
      yearEstablished: 1974,
      totalBeds: 300,
      icuBeds: 28,
      nicuBeds: 10,
      operatingTheatres: 12,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinic Block, Cancer Centre",
      helipad: false,
      parkingBays: "~400 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "8, Jalan Bukit Pantai, 59100 Kuala Lumpur",
      mainLine: "+603-2296 0888",
      emergencyLine: "+603-2296 0888 ext. A&E",
      appointmentLine: "+603-2296 0888",
      website: "https://www.pantai.com.my/kuala-lumpur",
      mapQuery: "Pantai Hospital Kuala Lumpur Bukit Pantai"
    },
    transport: {
      nearest: "Kerinchi LRT Station (Kelana Jaya Line) — 10 min walk or short taxi",
      bus: "Rapid KL Bus along Jalan Bangsar",
      highway: "Sprint Highway — Exit Bangsar/Pantai",
      landmark: "Near Bangsar, off Jalan Kerinchi"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level 1, 7am–9pm",
      atm: "Lobby",
      surau: "Level 2",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00 (private rooms — flexible)",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible",
      notes: "Private hospital — more flexible than public."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "Cardiothoracic Surgery",
        "Oncology (Clinical & Surgical)", "Radiation Oncology",
        "Neurology", "Neurosurgery",
        "Orthopaedics", "Spine Surgery",
        "Gastroenterology", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "IVF/Fertility",
        "Urology", "Nephrology", "ENT", "Ophthalmology",
        "Endocrinology", "Rheumatology", "Dermatology",
        "Interventional Radiology", "PET-CT", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" },
        { specialty: "Gamma Knife", transferTo: "Gleneagles KL", note: "Available at Gleneagles KL" }
      ],
      byReferral: ["Proton therapy — overseas"]
    },
    transferPathway: {
      summary: "Comprehensive private hospital. Complex transplant cases referred to national centres.",
      routes: [],
      howToTransfer: "Specialist referral as required."
    },
    specialtyRanks: {
      "Oncology": { rank: "Top 5 Private KL", desc: "Comprehensive cancer programme with radiation oncology" }
    },
    accreditations: ["MSQH Accredited", "IHH Healthcare Group"],
    verifiedNotes: "300 beds confirmed. Part of Pantai/IHH group.",
    notableGaps: "No liver transplant. No Gamma Knife.",
    primaryExcellence: "Comprehensive private hospital — oncology and wide specialist coverage",
    secondarySpecialties: "Cardiology, Neurosurgery, IVF",
    fullSpecialties: ["Oncology", "Cardiology", "Neurology", "Orthopaedics", "Obstetrics"],
    roomRate: "RM 200 – RM 700+/night",
    roomRateRaw: 350,
    insurance: "Accepts major Malaysian insurance panels. Cashless available.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No Gamma Knife.",
    robotics: "Radiation therapy equipment. 3T MRI.",
    doctorQualifications: "MMC-registered specialists. Higher specialist qualifications.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.pantai.com.my/kuala-lumpur" }
    ]
  },
  {
    id: "pantai-bangsar",
    name: "Pantai Hospital Bangsar",
    nameShort: "Pantai Bangsar",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Pantai Hospital Bangsar is a well-established private hospital in the upscale Bangsar neighbourhood, offering a wide range of specialist services. It is particularly accessible from the Bangsar, Damansara, and Mid Valley corridor.",
    famousFor: ["Well-established private hospital in Bangsar", "Wide specialist panel", "Convenient Bangsar/KL south location"],
    infrastructure: {
      yearEstablished: 1981,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 8,
      operatingTheatres: 8,
      area: "~2 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: false,
      parkingBays: "~250 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "2, Jalan Bukit Pantai, 59100 Kuala Lumpur",
      mainLine: "+603-2296 0888",
      emergencyLine: "+603-2296 0888 ext. A&E",
      appointmentLine: "+603-2296 0888",
      website: "https://www.pantai.com.my/bangsar",
      mapQuery: "Pantai Hospital Bangsar Kuala Lumpur"
    },
    transport: {
      nearest: "Bangsar LRT Station — 10 min walk",
      bus: "Rapid KL Bus along Jalan Bangsar",
      highway: "Sprint Highway — Exit Bangsar",
      landmark: "Bangsar commercial area, near Bangsar Shopping Centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level 1, 7am–9pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery", "Neurology",
        "Orthopaedics", "Gastroenterology",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Urology", "ENT", "Ophthalmology",
        "Oncology (selected)", "Endocrinology",
        "Dermatology", "Rheumatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Pantai KL or Gleneagles KL", note: "Refer to larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Pantai KL or Beacon"]
    },
    transferPathway: {
      summary: "Community-level private hospital. Complex cases referred to Pantai KL or other tertiary centres.",
      routes: [],
      howToTransfer: "Specialist-to-specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "IHH Healthcare Group"],
    verifiedNotes: "200 beds. Part of Pantai/IHH group.",
    notableGaps: "Smaller facility than Pantai KL. No cardiothoracic surgery on-site.",
    primaryExcellence: "Community private hospital — Bangsar corridor",
    secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 500+/night",
    roomRateRaw: 280,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Smaller facility. No cardiothoracic surgery.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.pantai.com.my/bangsar" }
    ]
  },
  {
    id: "beacon-hospital",
    name: "Beacon Hospital",
    nameShort: "Beacon Hospital",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Petaling Jaya",
    intro: "Beacon Hospital is Malaysia's leading dedicated cancer hospital, offering comprehensive oncology services including radiation therapy, medical oncology, and haematology. It is the country's primary private referral centre for cancer treatment.",
    famousFor: ["Malaysia's premier dedicated cancer hospital", "Proton beam therapy partner (overseas referral)", "Bone Marrow Transplant (BMT) programme", "Comprehensive radiation oncology with TrueBeam STx"],
    infrastructure: {
      yearEstablished: 2007,
      totalBeds: 100,
      icuBeds: 10,
      nicuBeds: 0,
      operatingTheatres: 4,
      area: "~2 acres",
      buildings: "Cancer Centre Tower, Radiation Block",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Jalan 215, Off Jalan Templer, 46050 Petaling Jaya, Selangor",
      mainLine: "+603-7787 7888",
      emergencyLine: "+603-7787 7888 ext. A&E",
      appointmentLine: "+603-7787 7888",
      website: "https://www.beaconhospital.com.my",
      mapQuery: "Beacon Hospital Petaling Jaya Jalan 215"
    },
    transport: {
      nearest: "Paramount LRT Station (Kelana Jaya Line) — 15 min walk or short ride",
      bus: "Rapid KL bus routes near PJ area",
      highway: "NKVE/Damansara-Puchong — Exit Petaling Jaya",
      landmark: "Off Jalan Templer, Petaling Jaya"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor cafe, 8am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport for outpatient chemo patients"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "N/A",
      notes: "Primarily oncology — visiting policies may vary by ward."
    },
    specialtyCoverage: {
      available: [
        "Medical Oncology", "Radiation Oncology (TrueBeam STx, IMRT, SBRT)",
        "Haematology", "Bone Marrow Transplant (Autologous & Allogeneic)",
        "Surgical Oncology", "Gynaecological Oncology",
        "Paediatric Oncology", "Head & Neck Oncology",
        "Lung Oncology", "GI Oncology", "Breast Oncology",
        "Nuclear Medicine (cancer imaging)", "PET-CT",
        "Palliative Care", "Supportive Cancer Care",
        "Clinical Trials (oncology)"
      ],
      notAvailable: [
        { specialty: "General Medicine (non-cancer)", transferTo: "Pantai KL or other hospitals", note: "Focused on cancer care" },
        { specialty: "Obstetrics / Maternity", transferTo: "Pantai KL or Gleneagles KL", note: "Not offered at Beacon" },
        { specialty: "Proton Therapy", transferTo: "Protom (Thailand) or Japan / Singapore", note: "Beacon provides overseas proton therapy coordination" }
      ],
      byReferral: ["Cardiac issues in cancer patients — refer to cardiac centre"]
    },
    transferPathway: {
      summary: "Beacon focuses exclusively on cancer care. Non-cancer medical emergencies are transferred to nearby hospitals.",
      routes: [],
      howToTransfer: "Referral for cancer treatment accepted from any GP or specialist. Overseas proton therapy arranged by Beacon's international team."
    },
    specialtyRanks: {
      "Oncology": { rank: "National #1 (Private)", desc: "Malaysia's highest-volume private cancer hospital with the most advanced radiotherapy technology" },
      "BMT": { rank: "Top Private Centre", desc: "Private sector BMT programme" }
    },
    accreditations: ["MSQH Accredited", "AABB Accredited (Blood & Marrow)", "JCI reviewed"],
    verifiedNotes: "Dedicated cancer hospital confirmed. TrueBeam STx system verified. BMT programme confirmed.",
    notableGaps: "Cancer-focused only — no maternity, no general surgery unrelated to cancer. No in-house proton therapy.",
    primaryExcellence: "Malaysia's national private cancer hospital — radiation oncology, BMT",
    secondarySpecialties: "Haematology, Palliative Care, Clinical Trials",
    fullSpecialties: ["Medical Oncology", "Radiation Oncology", "Haematology", "BMT", "Surgical Oncology"],
    roomRate: "RM 200 – RM 600+/night",
    roomRateRaw: 350,
    insurance: "Accepts major Malaysian insurance. Cancer riders essential. Many insurers have Beacon as panel.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Cancer-focused only. No proton therapy in Malaysia. Premium cost for cancer treatment.",
    robotics: "TrueBeam STx Radiotherapy System. Elekta Linear Accelerators. CyberKnife (verify). PET-CT.",
    doctorQualifications: "All oncologists and haematologists are MMC-registered subspecialists. Many have fellowship training at MD Anderson, Princess Margaret, RMH London.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.beaconhospital.com.my" }
    ]
  },
  {
    id: "parkcity-mc",
    name: "ParkCity Medical Centre",
    nameShort: "ParkCity MC",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "ParkCity Medical Centre is a modern private hospital in the leafy Desa ParkCity neighbourhood of KL, offering comprehensive specialist services in a comfortable environment. It serves the growing affluent communities of northern KL and Kepong.",
    famousFor: ["Modern hospital in Desa ParkCity", "Strong paediatric and obstetric services", "Comfortable facilities in a park setting"],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 100,
      icuBeds: 10,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "Main Tower",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "2, Jalan Intisari Perdana, Desa ParkCity, 52200 Kuala Lumpur",
      mainLine: "+603-6279 1212",
      emergencyLine: "+603-6279 1212 ext. A&E",
      appointmentLine: "+603-6279 1212",
      website: "https://www.parkcitymedical.com",
      mapQuery: "ParkCity Medical Centre Desa ParkCity Kuala Lumpur"
    },
    transport: {
      nearest: "Kepong Baru MRT Station — 15 min by taxi/ride-share",
      bus: "Rapid KL bus routes (Kepong area)",
      highway: "DUKE/MRR2 — Exit Desa ParkCity / Kepong",
      landmark: "Inside Desa ParkCity township, near The Waterfront"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 7am–9pm",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Neonatology",
        "Orthopaedics", "ENT", "Ophthalmology",
        "Gastroenterology", "Urology",
        "Oncology (selected)", "Endocrinology",
        "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Prince Court", note: "Refer to larger tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Gleneagles KL or UMMC", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or Gleneagles KL"]
    },
    transferPathway: {
      summary: "Community private hospital. Complex surgical cases referred to larger centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "100 beds. Modern private hospital in Desa ParkCity.",
    notableGaps: "No cardiothoracic surgery. Limited neurosurgery. Smaller capacity.",
    primaryExcellence: "Community private hospital — northern KL / Desa ParkCity",
    secondarySpecialties: "Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 500+/night",
    roomRateRaw: 280,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. Limited neurosurgery.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.parkcitymedical.com" }
    ]
  },
  {
    id: "ukmsc",
    name: "UKMSC – UKM Specialist Centre",
    nameShort: "UKMSC",
    sector: "private",
    tier: "academic",
    state: "Kuala Lumpur",
    city: "Cheras, Kuala Lumpur",
    intro: "UKMSC (Universiti Kebangsaan Malaysia Specialist Centre) is the private arm of the National University of Malaysia's medical faculty, offering specialist services backed by academic medical expertise. It provides high-quality care with access to UKM's research capabilities.",
    famousFor: ["Academic medical centre at UKM (National University)", "Private arm of UKM Faculty of Medicine", "Specialist care with research and teaching background", "Good value academic private hospital"],
    infrastructure: {
      yearEstablished: 1997,
      totalBeds: 100,
      icuBeds: 10,
      nicuBeds: 5,
      operatingTheatres: 5,
      area: "~2 acres (UKM Medical Campus)",
      buildings: "Main clinic building",
      helipad: false,
      parkingBays: "~200 bays (UKM campus)",
      parkingRate: "RM 1/hour (campus)"
    },
    contact: {
      address: "Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Kuala Lumpur",
      mainLine: "+603-9145 6000",
      emergencyLine: "+603-9145 6000",
      appointmentLine: "+603-9145 6000",
      website: "https://www.ukmsc.com.my",
      mapQuery: "UKMSC UKM Specialist Centre Cheras Kuala Lumpur"
    },
    transport: {
      nearest: "Bandar Tun Razak MRT Station — 10 min walk",
      bus: "Rapid KL bus routes (Cheras area)",
      highway: "KESAS/MRR2 — Exit Cheras/Bandar Tun Razak",
      landmark: "UKM Medical Campus, Bandar Tun Razak Cheras"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "University campus cafeteria nearby",
      atm: "Campus ATMs",
      surau: "Available on campus",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "UKM campus WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Private academic hospital — confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "General Medicine", "General Surgery", "Cardiology",
        "Gastroenterology", "Nephrology", "Neurology",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "ENT", "Ophthalmology",
        "Oncology (selected)", "Endocrinology", "Dermatology"
      ],
      notAvailable: [
        { specialty: "Emergency A&E (24/7)", transferTo: "Hospital Kuala Lumpur (HKL)", note: "No 24/7 emergency department — refer to HKL for emergencies" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or UMMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex surgery — refer to UKM Hospital (public) or HKL"]
    },
    transferPathway: {
      summary: "Academic specialist centre for outpatient and elective inpatient services. Emergencies → HKL.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "UKM Academic Affiliation"],
    verifiedNotes: "Academic private hospital. Part of UKM medical campus in Cheras.",
    notableGaps: "Limited emergency capability. Smaller than major private hospitals. No 24/7 A&E.",
    primaryExcellence: "Academic private specialist centre — UKM affiliation",
    secondarySpecialties: "Internal Medicine, Nephrology, Gastroenterology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Nephrology"],
    roomRate: "RM 150 – RM 400+/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No 24/7 emergency. Smaller specialist range. Limited complex surgery.",
    robotics: "Standard academic hospital imaging.",
    doctorQualifications: "UKM faculty members — professors and associate professors who are MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.ukmsc.com.my" }
    ]
  },
  {
    id: "imu-hospital",
    name: "IMU Hospital",
    nameShort: "IMU Hospital",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "IMU Hospital is the clinical training and specialist hospital of International Medical University (IMU), one of Malaysia's leading private medical universities. It provides specialist care combined with an academic and research environment.",
    famousFor: ["IMU academic medical centre", "Good access to IMU research and clinical trial programmes", "Growing specialist services"],
    infrastructure: {
      yearEstablished: 2019,
      totalBeds: 150,
      icuBeds: 12,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "IMU Hospital Tower",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 126, Jalan Jalil Perkasa 19, Bukit Jalil, 57000 Kuala Lumpur",
      mainLine: "+603-8656 7228",
      emergencyLine: "+603-8656 7228",
      appointmentLine: "+603-8656 7228",
      website: "https://www.imu.edu.my/imu-hospital",
      mapQuery: "IMU Hospital Bukit Jalil Kuala Lumpur"
    },
    transport: {
      nearest: "Awan Besar LRT Station (Kelana Jaya Line) — 15 min by taxi",
      bus: "Rapid KL bus routes (Bukit Jalil area)",
      highway: "LDP — Exit Bukit Jalil",
      landmark: "IMU campus area, Bukit Jalil"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "IMU campus cafeteria",
      atm: "Campus",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology", "Dermatology"],
      notAvailable: [
        { specialty: "24/7 Emergency A&E", transferTo: "Hospital Putrajaya or UMMC", note: "Limited emergency services" }
      ],
      byReferral: ["Complex surgery — refer to larger tertiary centres"]
    },
    transferPathway: { summary: "Academic private hospital. Complex emergencies referred to nearby tertiary centres.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "IMU Academic Affiliation"],
    verifiedNotes: "150 beds. IMU academic hospital in Bukit Jalil.",
    notableGaps: "Newer hospital — growing specialist range. Limited emergency capability.",
    primaryExcellence: "Academic private hospital — IMU affiliation, Bukit Jalil",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 400+/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Newer hospital. Limited emergency. Smaller specialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "IMU faculty and visiting consultants — MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.imu.edu.my/imu-hospital" }]
  },
  {
    id: "assunta-hospital",
    name: "Assunta Hospital",
    nameShort: "Assunta",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Petaling Jaya",
    intro: "Assunta Hospital is one of Petaling Jaya's oldest and most trusted private hospitals, founded by the Franciscan Missionaries of Mary (FMM). Known for its compassionate care tradition, it offers comprehensive specialist services for the PJ and KL community.",
    famousFor: ["One of PJ's oldest and most trusted hospitals", "Founded by FMM religious sisters — compassionate care tradition", "Wide range of specialist services", "Strong obstetrics and paediatrics programme"],
    infrastructure: {
      yearEstablished: 1954,
      totalBeds: 240,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~3 acres",
      buildings: "Main Block, New Wing, Chapel",
      helipad: false,
      parkingBays: "~300 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "Jalan Templer, 46990 Petaling Jaya, Selangor",
      mainLine: "+603-7782 3433",
      emergencyLine: "+603-7782 3433 ext. A&E",
      appointmentLine: "+603-7782 3433",
      website: "https://www.assuntahospital.com",
      mapQuery: "Assunta Hospital Petaling Jaya Jalan Templer"
    },
    transport: {
      nearest: "Taman Jaya LRT Station — 15 min walk or short taxi",
      bus: "Rapid KL bus routes (PJ area)",
      highway: "NPE/Federal Highway — Exit Petaling Jaya",
      landmark: "Near Asia Jaya / Universiti LRT, Petaling Jaya"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 7am–9pm",
      atm: "Lobby",
      surau: "Available",
      chapel: "Yes (Catholic chapel on site)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: { general: "11:00–21:00", icu: "Restricted — check with nurse", paediatric: "Parents: unrestricted", maternity: "Partner: flexible", notes: "Private hospital — flexible visiting." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology",
        "Urology", "ENT", "Ophthalmology",
        "Oncology (selected)", "Endocrinology", "Dermatology",
        "Neurology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or Gleneagles KL", note: "Refer to tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or Gleneagles KL"]
    },
    transferPathway: { summary: "Community private hospital with long tradition. Complex cases referred to larger tertiary centres.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "240 beds. One of PJ's oldest private hospitals. FMM-founded.",
    notableGaps: "No cardiothoracic surgery. Limited complex oncology.",
    primaryExcellence: "Trusted community private hospital — Petaling Jaya",
    secondarySpecialties: "Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 250,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists. Many longstanding consultants.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.assuntahospital.com" }]
  },
  {
    id: "umsc",
    name: "UMSC – UM Specialist Centre",
    nameShort: "UMSC",
    sector: "private",
    tier: "academic",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "UMSC (University of Malaya Specialist Centre) is the private specialist clinic arm of UMMC, offering access to University of Malaya's world-class specialists in a private setting. It provides outpatient specialist consultations and selected inpatient procedures.",
    famousFor: ["UM Faculty specialist consultations in private setting", "Access to UMMC specialists and facilities", "Strong haematology, neurology, and nephrology specialists"],
    infrastructure: {
      yearEstablished: 2008,
      totalBeds: 99,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~1 acre (UMMC campus)",
      buildings: "UMSC Building within UMMC campus",
      helipad: false,
      parkingBays: "Shared with UMMC",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "Lembah Pantai, 59100 Kuala Lumpur (UMMC campus)",
      mainLine: "+603-7949 4422",
      emergencyLine: "+603-7949 2333 (UMMC main for emergency)",
      appointmentLine: "+603-7949 4422",
      website: "https://www.umsc.com.my",
      mapQuery: "UMSC UM Specialist Centre Kuala Lumpur"
    },
    transport: { nearest: "University LRT Station — 15 min walk or taxi", bus: "Rapid KL bus (Jalan Universiti)", highway: "NPE — Exit Jalan Universiti", landmark: "Within UMMC campus" },
    facilities: { pharmacy24h: false, cafeteria: "Shared with UMMC campus", atm: "UMMC campus ATM", surau: "UMMC campus", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "UMMC WiFi", patientTransport: "Shared with UMMC" },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Internal Medicine", "Surgery (selected)", "Cardiology", "Haematology", "Neurology", "Nephrology", "Gastroenterology", "Obstetrics & Gynaecology", "Orthopaedics", "ENT", "Ophthalmology", "Oncology (selected)"],
      notAvailable: [
        { specialty: "24/7 Emergency A&E", transferTo: "UMMC A&E", note: "Full emergency at UMMC next door" }
      ],
      byReferral: ["Complex procedures — refer to UMMC main hospital"]
    },
    transferPathway: { summary: "UMSC provides private access to UMMC specialists. Complex emergencies → UMMC main hospital.", routes: [], howToTransfer: "Seamless referral to UMMC." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "UM Academic Affiliation"],
    verifiedNotes: "99 beds. Private arm of UMMC — access to UM specialist expertise.",
    notableGaps: "No 24/7 emergency — refer to UMMC. Smaller inpatient facility than UMMC.",
    primaryExcellence: "Private specialist clinic — access to UMMC specialist expertise",
    secondarySpecialties: "Haematology, Neurology, Nephrology",
    fullSpecialties: ["Internal Medicine", "Haematology", "Neurology", "Nephrology", "Surgery"],
    roomRate: "RM 200 – RM 500+/night",
    roomRateRaw: 300,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No 24/7 emergency. Limited bed count.",
    robotics: "Shared UMMC facilities — 3T MRI, PET-CT, robotic surgery.",
    doctorQualifications: "UM professors and lecturers — MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.umsc.com.my" }]
  },
  {
    id: "columbia-asia-pandan",
    name: "Columbia Asia Hospital Pandan Indah",
    nameShort: "Columbia Asia PJ",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Pandan Indah, Kuala Lumpur",
    intro: "Columbia Asia Hospital Pandan Indah is a modern private hospital serving the Pandan Indah, Ampang and Cheras communities. Part of the Columbia Asia group, it offers affordable specialist care with a focus on accessibility.",
    famousFor: ["Affordable private care in KL east", "Columbia Asia group — regional chain with consistent standards"],
    infrastructure: {
      yearEstablished: 2003,
      totalBeds: 120,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~2 acres",
      buildings: "Main hospital building",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "No. 10A, Jalan Pandan Indah 4/7A, Pandan Indah, 55100 Kuala Lumpur",
      mainLine: "+603-4296 0888",
      emergencyLine: "+603-4296 0888 ext. A&E",
      appointmentLine: "+603-4296 0888",
      website: "https://www.columbiaasia.com/pandan-indah",
      mapQuery: "Columbia Asia Hospital Pandan Indah Kuala Lumpur"
    },
    transport: { nearest: "Pandan Jaya LRT Station — 10 min walk", bus: "Rapid KL bus routes (Pandan Indah area)", highway: "BESRAYA — Exit Pandan Indah", landmark: "Pandan Indah township, east KL" },
    facilities: { pharmacy24h: false, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Limited" },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology"],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Prince Court", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or Gleneagles KL"]
    },
    transferPathway: { summary: "Community private hospital — complex cases refer to tertiary centres.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Columbia Asia Group"],
    verifiedNotes: "Columbia Asia group hospital in Pandan Indah.",
    notableGaps: "Limited complex surgery. No cardiothoracic.",
    primaryExcellence: "Affordable community private hospital — east KL",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 120 – RM 350+/night",
    roomRateRaw: 180,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. Smaller specialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.columbiaasia.com/pandan-indah" }]
  },
  {
    id: "tung-shin",
    name: "Tung Shin Hospital",
    nameShort: "Tung Shin",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Tung Shin Hospital is Kuala Lumpur's oldest Chinese voluntary hospital, founded in 1881, and a unique institution blending Western medicine with Traditional Chinese Medicine (TCM). It serves a broad urban population and is especially trusted by the Chow Kit and Chinatown communities. Subsidised wards are available.",
    famousFor: ["Malaysia's oldest Chinese voluntary/charitable hospital (1881)", "Integrated Western medicine and Traditional Chinese Medicine (TCM)", "Subsidised wards available — community hospital tradition", "Unique role in KL Chinatown community healthcare"],
    infrastructure: {
      yearEstablished: 1881,
      totalBeds: 200,
      icuBeds: 14,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "Main Block, TCM Centre, Outpatient Block",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "102, Jalan Pudu, 55100 Kuala Lumpur",
      mainLine: "+603-2037 2288",
      emergencyLine: "+603-2037 2288 ext. A&E",
      appointmentLine: "+603-2037 2288",
      website: "https://www.tungshin.com.my",
      mapQuery: "Tung Shin Hospital Jalan Pudu Kuala Lumpur"
    },
    transport: { nearest: "Hang Tuah LRT Station — 10 min walk", bus: "Rapid KL bus along Jalan Pudu", highway: "SMART Tunnel area / Jalan Pudu exit", landmark: "Jalan Pudu, near Bukit Bintang / Chinatown" },
    facilities: { pharmacy24h: true, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: "Yes — Buddhist shrine room available", disabledAccess: true, wifi: "Free WiFi", patientTransport: "Limited" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Community hospital — confirm with ward." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology", "Urology",
        "ENT", "Ophthalmology", "Dermatology",
        "Traditional Chinese Medicine (TCM)", "Acupuncture",
        "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Gleneagles KL", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HKL or UMMC", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or HKL"]
    },
    transferPathway: { summary: "Community hospital with unique TCM integration. Complex surgical cases referred.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {
      "Traditional Chinese Medicine": { rank: "Unique in KL", desc: "One of the few hospitals offering integrated Western-TCM care under the same roof" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "Founded 1881 — oldest Chinese voluntary hospital in Malaysia. TCM integration confirmed. Subsidised wards available.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Limited complex oncology.",
    primaryExcellence: "Historic Chinese community hospital — TCM integration, subsidised care",
    secondarySpecialties: "General Medicine, Obstetrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "TCM", "Obstetrics", "Paediatrics"],
    roomRate: "RM 60 – RM 400/night (subsidised class available from RM 60)",
    roomRateRaw: 100,
    insurance: "Accepts some insurance panels. Subsidised class available for qualifying patients.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No neurosurgery. Limited subspecialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists. Registered TCM practitioners for TCM component.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.tungshin.com.my" }]
  },
  {
    id: "pusrawi",
    name: "Hospital Pusrawi",
    nameShort: "Pusrawi",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Hospital Pusrawi (Pusat Rawatan Islam) is a unique Islamic private hospital in Kuala Lumpur, founded under the auspices of the Tabung Haji group. It provides halal-certified medical care with Islamic principles integrated throughout, serving the Muslim community and general public.",
    famousFor: ["Islamic halal-certified hospital", "Affiliated with Tabung Haji (Malaysia's pilgrimage fund)", "Spiritual and mental health care aligned with Islamic values", "Trusted by Muslim community for halal medical procedures"],
    infrastructure: {
      yearEstablished: 1998,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "Main Hospital Tower, Surau Block",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 2, Jalan Indah, Off Jalan Tun Razak, 50400 Kuala Lumpur",
      mainLine: "+603-4253 3344",
      emergencyLine: "+603-4253 3344 ext. A&E",
      appointmentLine: "+603-4253 3344",
      website: "https://www.pusrawi.com.my",
      mapQuery: "Hospital Pusrawi Kuala Lumpur Jalan Tun Razak"
    },
    transport: { nearest: "Dato' Keramat LRT Station — 10 min walk", bus: "Rapid KL bus (Jalan Tun Razak area)", highway: "DUKE — Exit Jalan Tun Razak", landmark: "Off Jalan Tun Razak, near Gleneagles KL" },
    facilities: { pharmacy24h: true, cafeteria: "Halal-certified cafeteria, 7am–9pm", atm: "Lobby", surau: "Multiple surau on all floors", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Medical transport available" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Partner/family: flexible", notes: "Islamic prayer times respected — visiting may be adjusted during prayer times." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "General Medicine", "General Surgery", "Cardiology",
        "Obstetrics & Gynaecology (Halal-certified OB)",
        "Paediatrics", "Orthopaedics",
        "Gastroenterology", "Urology", "ENT", "Ophthalmology",
        "Oncology (selected)", "Endocrinology", "Dermatology",
        "Islamic Medical Ethics consultation",
        "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or IJN", note: "Refer to cardiac surgical centres" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or HKL"]
    },
    transferPathway: { summary: "Islamic private hospital. Complex surgical cases referred to specialist centres.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Halal Hospital Certification"],
    verifiedNotes: "Islamic halal-certified hospital. Tabung Haji affiliated. Founded 1998.",
    notableGaps: "No cardiothoracic surgery. No liver transplant. Limited complex oncology.",
    primaryExcellence: "Islamic private hospital — halal-certified care, Muslim community trust",
    secondarySpecialties: "General Medicine, Obstetrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 250,
    insurance: "Accepts major Malaysian insurance panels including Takaful panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists. Islamic medical ethics training.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.pusrawi.com.my" }]
  }
];
