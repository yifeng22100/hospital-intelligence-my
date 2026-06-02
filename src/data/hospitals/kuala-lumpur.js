// data/hospitals/kuala-lumpur.js
export const HOSPITALS_KL = [
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
      address: "Lot 25, Jalan Raja Muda Abdul Aziz, Kampung Baru, 50300 Kuala Lumpur",
      mainLine: "+603-2600 3000",
      emergencyLine: "+603-2615 5555 ext. 1",
      appointmentLine: "+603-2615 5555",
      website: "https://hkl.moh.gov.my",
      mapQuery: "Hospital Kuala Lumpur Jalan Pahang"
    },
    transport: {
      nearest: "Hospital Kuala Lumpur MRT (PY18, Putrajaya Line) — Entrance A is inside HKL grounds (0–5 min via walkalator); Titiwangsa interchange (PY17, MRT + LRT Ampang + LRT Sri Petaling + Monorail) — ~7 min walk; KL Monorail Chow Kit — ~4 min walk",
      bus: "Bus stops: KL55 (Hospital KL Barat) — 1 min walk; KL54 (Hospital KL Opp) — 3 min. Routes: 100, 103, 200, 202, 220, 250, 251, 254, 302, 402, GOKL-03/04/05/08, ML81, ML83",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Kuala_Lumpur_Hospital.JPG",
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://hkl.moh.gov.my" },
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
      mainLine: "+603-7949 4422",
      emergencyLine: "+603-7949 2333 ext. A&E",
      appointmentLine: "+603-7949 4422",
      website: "https://www.ummc.edu.my",
      mapQuery: "UMMC University Malaya Medical Centre Petaling Jaya"
    },
    transport: {
      nearest: "LRT Universiti (Kelana Jaya Line) — feeder bus T790 direct to PPUM Main Gate (~5 min bus ride; ~21 min walk not recommended); MRT Phileo Damansara (Kajang Line, KG11) — feeder bus T815 (~8 min walk then bus)",
      bus: "Feeder bus T790 (LRT Taman Paramount ↺ Mid Valley) stops at PPUM Main Gate — board at Universiti LRT. T789, T815 also serve campus. Routes: T790, T789, T815, 710, 750, 772, 780, P701, 734, 751",
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
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gleneagles_Hospital_and_Medical_Centre_2,_Jul_06.JPG",
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
      nearest: "LRT Ampang Park (Ampang Line) — 4 min walk (~280m); LRT KLCC (Kelana Jaya Line, KJ10) — 10 min walk",
      bus: "Bus stops: KL893 (Gleneagles Intan MC) — 4 min; KL2296/KL2306 (Ampang Park area) — 4 min. Routes: 300, 303, 220, T224, 402",
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
      emergencyLine: "+603-2160 0999",
      appointmentLine: "+603-2160 0000",
      website: "https://www.princecourt.com",
      mapQuery: "Prince Court Medical Centre Kuala Lumpur Jalan Kia Peng"
    },
    transport: {
      nearest: "Conlay MRT (PY22, Putrajaya Line) — 8 min walk; Tun Razak Exchange MRT (PY23, Putrajaya + Kajang Lines) — 11 min walk",
      bus: "Routes: 400, 402, 421, GOKL-02/04; bus stops along Jalan Kia Peng / Jalan Ampang",
      highway: "AKLEH — Exit KLCC",
      landmark: "39 Jalan Kia Peng, near KLCC Twin Towers"
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
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pantai_Hospital_at_Night.jpg",
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
      nearest: "LRT Kerinchi (Kelana Jaya Line) + feeder bus T791 — total ~10 min; LRT Universiti (Kelana Jaya Line) + feeder bus T789 — total ~20 min; no walkable rail station directly",
      bus: "Feeder bus T791 (from Kerinchi LRT) and T789 (from Universiti LRT) stop at hospital — recommended approach. Routes: 750, 751, 772, 780, 821, T791, T789, GOKL-06",
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
      mainLine: "+603-5639 1616",
      emergencyLine: "+603-6279 1212 ext. A&E",
      appointmentLine: "+603-6279 1212",
      website: "https://www.parkcitymedicalcentre.com",
      mapQuery: "ParkCity Medical Centre Desa ParkCity Kuala Lumpur"
    },
    transport: {
      nearest: "MRT Sri Damansara Sentral (Kajang Line, KG05) — ~14 min walk then T109 feeder bus to hospital (~20 min total); MRT Sri Damansara Timur (KG06) — similar",
      bus: "Feeder bus T109 (MRT Sri Damansara Sentral ↺ Desa ParkCity circular) — stops at Waterfront ParkCity near hospital; runs 06:00–23:30. Also: 801, T108, T115",
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
      nearest: "Bandar Tun Razak LRT (Sri Petaling Line) — 10 min walk; Taman Mutiara interchange (MRT Kajang Line + LRT Sri Petaling) — 12 min walk",
      bus: "Bus stops: KL349 (Pusat Belia Antarabangsa) — 2 min; KL1983 (UKM campus area) — 4 min. Routes: 400, 450, GOKL-11, T400, T402",
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
    name: "IMU Healthcare",
    nameShort: "IMU Healthcare",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "IMU Healthcare is the clinical training and specialist hospital of International Medical University (IMU), one of Malaysia's leading private medical universities. It provides specialist care combined with an academic and research environment.",
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
      nearest: "LRT Sri Petaling (Sri Petaling Line) — 4–5 min walk (~280m); LRT Bukit Jalil (Sri Petaling Line) — 11 min walk",
      bus: "Bus stop: IMU Bukit Jalil (~3 min walk). Routes: 651, 652, T563, T580",
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
    transport: {
      nearest: "Plaza Rakyat LRT (Ampang + Sri Petaling Lines) — ~900m, 9-10 min walk; Hang Tuah interchange (KL Monorail + LRT Ampang + Sri Petaling Lines) — ~900m, 9-10 min walk; Bukit Bintang MRT (Kajang Line) — ~10 min walk; Merdeka MRT (Kajang Line) — 12-15 min walk",
      bus: "Bus stop KL119 (Tung Shin Hospital stop) — 2-3 min walk from gate; Routes: 400, 401, 420, 421, 450, 452, 540, 580, 590, BET2, BET8",
      highway: "SMART Tunnel area / Jalan Pudu exit",
      landmark: "Jalan Pudu, near Bukit Bintang / Chinatown"
    },
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
    id: "smcv-velocity",
    name: "Sunway Medical Centre Velocity (SMCV)",
    nameShort: "Sunway Velocity SMCV",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Cheras, Kuala Lumpur",
    intro: "Sunway Medical Centre Velocity is the KL campus of Sunway Medical, opened in 2020 within the Sunway Velocity integrated development in Cheras. It provides modern private specialist care for the Cheras and Kuala Lumpur east communities, directly linked to Cochrane MRT.",
    famousFor: ["Sunway Medical Group Cheras campus — opened 2020", "MRT-connected private hospital (Cochrane Station)", "Integrated with Sunway Velocity Mall development"],
    infrastructure: {
      yearEstablished: 2020,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 6,
      operatingTheatres: 8,
      area: "~3 acres",
      buildings: "Integrated tower within Sunway Velocity Mall",
      helipad: false,
      parkingBays: "~500 bays (shared Sunway Velocity)",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Sunway Velocity Mall, Lingkaran SV, 55100 Cheras, Kuala Lumpur",
      mainLine: "+603-9772 6888",
      emergencyLine: "+603-9772 6888 ext. A&E",
      appointmentLine: "+603-9772 6888",
      website: "https://www.sunwaymedical.com/smcv",
      mapQuery: "Sunway Medical Centre Velocity Cheras Kuala Lumpur"
    },
    transport: {
      nearest: "Cochrane MRT (KG10, Kajang Line) — 7 min walk; Maluri interchange (LRT Ampang + LRT Sri Petaling Lines) — 8 min walk",
      bus: "Rapid KL Bus routes (Cheras area)",
      highway: "SMART Tunnel / MRR2 — Exit Cheras",
      landmark: "Sunway Velocity Mall, Cheras KL"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Multiple F&B within Sunway Velocity Mall",
      atm: "Within mall complex",
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
        "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Oncology (selected)", "ENT", "Ophthalmology",
        "Urology", "Endocrinology", "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre (main campus, Subang Jaya)", note: "Main campus has full cardiac surgery capability" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Sunway Cancer Centre or Beacon Hospital"]
    },
    transferPathway: {
      summary: "Full-service private hospital. Complex cases refer to Sunway Medical main campus or tertiary centres.",
      routes: [
        { condition: "Cardiothoracic surgery", to: "Sunway Medical Centre (Subang Jaya)", reason: "Main campus — full cardiac surgical capability", distanceKm: 15 }
      ],
      howToTransfer: "Specialist referral within Sunway Medical Group."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Sunway Medical Group"],
    verifiedNotes: "200 beds. Opened 2020. Sunway Medical Group's second campus, located in Cheras WP Kuala Lumpur.",
    notableGaps: "Newer campus — growing specialist range. No cardiothoracic surgery on site.",
    primaryExcellence: "Sunway Medical private hospital — Cheras / KL east corridor",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 200 – RM 700+/night",
    roomRateRaw: 350,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Newer campus. No cardiothoracic surgery.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "",
    wikiLink: null,
    officialSources: [{ label: "Official Website", url: "https://www.sunwaymedical.com" }]
  },
  {
    id: "hctm",
    name: "Hospital Canselor Tuanku Muhriz (HCTM / UKMMC)",
    nameShort: "HCTM / UKMMC",
    sector: "public",
    tier: "academic",
    state: "Kuala Lumpur",
    city: "Cheras, Kuala Lumpur",
    intro: "Hospital Canselor Tuanku Muhriz (HCTM), also known as Universiti Kebangsaan Malaysia Medical Centre (UKMMC), is the teaching hospital of Universiti Kebangsaan Malaysia (UKM — National University of Malaysia). Located in Cheras KL, it provides comprehensive academic tertiary and quaternary care, combining specialist clinical services with medical education and research.",
    famousFor: ["UKM National University teaching hospital", "Comprehensive academic medical centre in Cheras KL", "Strong research and clinical trials programme", "Bone marrow transplant and haematology services"],
    infrastructure: {
      yearEstablished: 1997,
      totalBeds: 900,
      icuBeds: 60,
      nicuBeds: 20,
      operatingTheatres: 18,
      area: "~25 acres (UKM Medical Campus)",
      buildings: "Main Clinical Tower, Women & Children Block, Research Institute",
      helipad: true,
      parkingBays: "~1,000 bays",
      parkingRate: "RM 1.50/hour (campus)"
    },
    contact: {
      address: "Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Kuala Lumpur",
      mainLine: "+603-9145 5555",
      emergencyLine: "+603-9145 5555 ext. A&E",
      appointmentLine: "+603-9145 4422",
      website: "https://hctm.ukm.my/en/",
      mapQuery: "Hospital Canselor Tuanku Muhriz HCTM UKMMC Cheras Kuala Lumpur"
    },
    transport: {
      nearest: "Bandar Tun Razak LRT (Sri Petaling Line) — 3 min walk; Taman Mutiara interchange (MRT Kajang + Sri Petaling LRT) — 4 min walk",
      bus: "Rapid KL Bus routes (Cheras / Bandar Tun Razak area)",
      highway: "KESAS / MRR2 — Exit Cheras / Bandar Tun Razak",
      landmark: "UKM Medical Campus, Bandar Tun Razak, Cheras"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level G & Level 4, 7am–9pm. UKM campus cafeterias nearby.",
      atm: "Main lobby (multiple banks)",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "UKM eduroam / HCTM-Guest",
      patientTransport: "HCTM transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00 (strictly restricted)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Teaching hospital — students may be present during ward rounds and consultations."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU", "PICU",
        "General Surgery", "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery", "Spine Surgery",
        "Haematology", "Bone Marrow Transplant (BMT)",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology",
        "Kidney Transplant", "Nephrology", "Urology",
        "Gastroenterology", "Hepatobiliary Surgery", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine",
        "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology",
        "Orthopaedics", "Hand & Microsurgery",
        "ENT", "Ophthalmology", "Dermatology", "Rheumatology",
        "Endocrinology", "Psychiatry", "Geriatric Medicine",
        "Infectious Disease", "Respiratory Medicine",
        "Interventional Radiology", "Nuclear Medicine",
        "Rehabilitation Medicine", "Palliative Care"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", note: "National cardiac surgical institute" }
      ],
      byReferral: [
        "Gamma Knife — refer to Gleneagles KL (private)",
        "Proton therapy — overseas referral"
      ]
    },
    transferPathway: {
      summary: "HCTM is a national quaternary academic referral centre. Refers out only for transplant procedures not available on site.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 18 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "National cardiac institute", distanceKm: 8 }
      ],
      howToTransfer: "MOH inter-hospital referral via treating specialist."
    },
    specialtyRanks: {
      "Academic Medical": { rank: "National leader — UKM", desc: "UKM National University's quaternary teaching hospital — comprehensive care with academic research excellence" }
    },
    accreditations: ["MSQH Accredited", "MOH Teaching Hospital", "UKM Academic Medical Centre"],
    verifiedNotes: "900 beds (est.). UKM teaching hospital. Also known as UKMMC. Full quaternary academic tertiary centre in Cheras KL. BMT programme confirmed.",
    notableGaps: "No liver transplant (refer Selayang). No heart transplant. Long outpatient waiting times for non-urgent referrals.",
    primaryExcellence: "UKM academic quaternary medical centre — Cheras KL",
    secondarySpecialties: "Haematology / BMT, Oncology, Cardiothoracic, Neurosurgery",
    fullSpecialties: ["Haematology", "BMT", "Oncology", "Cardiology", "Neurosurgery", "Kidney Transplant", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 200 (Public class RM 3–80, Specialist class up to RM 200)",
    roomRateRaw: 10,
    insurance: "Subsidised public hospital. FPP scheme available. Commercial insurance accepted for specialist class.",
    fppScheme: true,
    fppDeposit: "RM 500–3,000 depending on procedure",
    gaps: "No liver transplant. Long outpatient waits. Teaching hospital environment.",
    robotics: "Radiation therapy. 3T MRI. Da Vinci robotic surgery (verify). Nuclear medicine.",
    doctorQualifications: "UKM professors and associate professors — MMC-registered specialists with higher qualifications. Many internationally published researchers.",
    imageUrl: null,
    imageCredit: "",
    wikiLink: "https://en.wikipedia.org/wiki/UKM_Medical_Centre",
    officialSources: [
      { label: "Official Website", url: "https://www.ukmmc.com.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "pusrawi",
    name: "Hospital Pusrawi",
    nameShort: "Pusrawi",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Titiwangsa, Kuala Lumpur",
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
      address: "149, Jalan Tun Razak, 50400 Kuala Lumpur",
      mainLine: "+603-2687 5000",
      emergencyLine: "+603-2687 5181",
      appointmentLine: "+603-2687 5000",
      website: "https://www.pusrawi.com.my",
      mapQuery: "Hospital Pusrawi 149 Jalan Tun Razak Kuala Lumpur"
    },
    transport: { nearest: "Titiwangsa LRT (KJ12 / SP12) — ~8 min walk; Jelatek LRT (AMP6) — ~10 min walk", bus: "RapidKL routes along Jalan Tun Razak", highway: "DUKE Highway — Jalan Tun Razak exit", landmark: "Opposite Institut Jantung Negara (IJN), Jalan Tun Razak, Titiwangsa" },
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
  },
  {
    id: "kl-sports-mc",
    name: "KL Sports Medicine Centre (KLSMC)",
    nameShort: "KLSMC",
    sector: "private", tier: "secondary", state: "Kuala Lumpur", city: "Damansara Heights, Kuala Lumpur",
    intro: "KL Sports Medicine Centre (KLSMC) is a private specialist centre for sports injuries, orthopaedic surgery and physiotherapy, located at Wisma Perintis, Damansara Heights. Founded in 2005 by a group of orthopaedic specialists, it provides one-stop sports medicine care including arthroscopic surgery, MRI imaging, and hydrotherapy.",
    famousFor: ["Private one-stop sports medicine and orthopaedic centre", "Arthroscopic surgery — knee, shoulder, spine, hip", "MRI imaging and hydrotherapy on-site", "Founded by specialist orthopaedic surgeons (2005)"],
    infrastructure: { yearEstablished: 2005, totalBeds: 20, icuBeds: 0, nicuBeds: 0, operatingTheatres: 2, area: "~0.5 acres (multi-floor)", buildings: "7th–8th Floor, Wisma Perintis", helipad: false, parkingBays: "Building parking", parkingRate: "Paid" },
    contact: { address: "7th Floor, Wisma Perintis, 47 Jalan Dungun, Damansara Heights, 50490 Kuala Lumpur", mainLine: "+603-2096 1033", emergencyLine: "N/A — emergency to UMMC or Gleneagles KL", appointmentLine: "+603-2096 1033", website: "https://klsmc.com", mapQuery: "KLSMC KL Sports Medicine Centre 47 Jalan Dungun Damansara Heights" },
    transport: { nearest: "Semantan LRT (KJ14) — ~10 min walk; Bangsar LRT (KJ11) — ~15 min walk", bus: "RapidKL routes along Jalan Damansara", highway: "SPRINT Highway — Damansara Heights exit", landmark: "Wisma Perintis, 47 Jalan Dungun, Damansara Heights" },
    facilities: { pharmacy24h: false, cafeteria: "Building facilities", atm: "Building lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "N/A" },
    visitingHours: { general: "Mon–Fri 9:00am–5:00pm; Sat 8:00am–1:00pm", icu: "N/A", paediatric: "N/A", maternity: "N/A", notes: "Closed Sundays and public holidays. Appointment required." },
    specialtyCoverage: {
      available: ["Sports Medicine", "Orthopaedic Surgery (knee, shoulder, hip, spine, hand, foot)", "Arthroscopic Surgery", "Physiotherapy", "MRI Imaging", "Hydrotherapy"],
      notAvailable: [{ specialty: "General emergency / A&E", transferTo: "UMMC or Gleneagles KL", note: "Specialist centre only — no A&E" }],
      byReferral: ["Complex trauma → UMMC or Gleneagles KL"]
    },
    transferPathway: { summary: "Private sports medicine specialist. No A&E. Emergency → UMMC or Gleneagles KL.", routes: [], howToTransfer: "Self-referral or GP referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private sports medicine & orthopaedic specialist — Damansara Heights KL", secondarySpecialties: "Arthroscopic Surgery, Physiotherapy",
    fullSpecialties: ["Sports Medicine", "Orthopaedics", "Physiotherapy"],
    roomRate: "Private rates — outpatient & day surgery; inpatient wards available", roomRateRaw: 400, insurance: "Panel for major insurers.", fppScheme: false, fppDeposit: "N/A",
    gaps: "No A&E. No general medicine. No maternity.", robotics: "Arthroscopic surgery available.", doctorQualifications: "Fellowship-trained orthopaedic surgeons.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "KLSMC Official", url: "https://klsmc.com" }],
    verifiedNotes: "Private specialist. 7th–8th Floor, Wisma Perintis, 47 Jalan Dungun, Damansara Heights. Founded 2005. Phone +603-2096 1033.", notableGaps: "No A&E or general inpatient services."
  },
  {
    id: "tawakal-kl",
    name: "KPJ Tawakkal Specialist Hospital",
    nameShort: "KPJ Tawakkal Specialist Hospital",
    sector: "private", tier: "secondary", state: "Kuala Lumpur", city: "Kuala Lumpur",
    intro: "KPJ Tawakkal Specialist Hospital is a private hospital in Jalan Pahang, Kuala Lumpur, offering specialist services with an Islamic-oriented approach.",
    famousFor: ["Private hospital — Jalan Pahang area, Kuala Lumpur", "Long-established private hospital in KL"],
    infrastructure: { yearEstablished: 1985, totalBeds: 200, icuBeds: 12, nicuBeds: 6, operatingTheatres: 6, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~300 bays", parkingRate: "RM 2/hour" },
    contact: { address: "1, Jalan Pahang Barat, Pekeliling, 53000 Kuala Lumpur", mainLine: "+603-4026 7777", emergencyLine: "+603-4026 7777 ext. A&E", appointmentLine: "+603-4026 7777", website: "https://kpjhealth.com.my/tawakkal", mapQuery: "KPJ Tawakkal Specialist Hospital Kuala Lumpur" },
    transport: { nearest: "KL Monorail Chow Kit — ~4 min walk (nearest station); Hospital Kuala Lumpur MRT (PY18, Putrajaya Line) — ~5 min walk; Titiwangsa interchange (PY17, MRT + LRT + Monorail) — ~8 min walk", bus: "Bus stop: KL668 (KPJ Tawakkal HC) — 4 min. Routes: 170, 200, 201, 250, 260, GOKL-03/08, T180", highway: "MRR2 / Jalan Pahang", landmark: "Jalan Pahang, near Chow Kit / Titiwangsa lake" },
    facilities: { pharmacy24h: true, cafeteria: "Halal café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "Cardiology", "General Surgery", "Orthopaedics", "Obstetrics", "Paediatrics", "ENT", "Ophthalmology", "Urology"],
      notAvailable: [{ specialty: "Liver transplant", transferTo: "Hospital Selayang", note: "National centre" }],
      byReferral: ["Complex national → public centres"]
    },
    transferPathway: { summary: "Private hospital. Complex → public centres.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed", "MSQH Accredited"],
    primaryExcellence: "Private hospital — Jalan Pahang, Kuala Lumpur", secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics",
    fullSpecialties: ["Cardiology", "Surgery", "Orthopaedics", "Obstetrics", "Paediatrics"],
    roomRate: "RM 200–500/night", roomRateRaw: 280, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 5,000",
    gaps: "No transplant services.", robotics: "Standard imaging.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "KPJ Tawakkal Specialist Hospital", url: "https://www.tawakal.com.my" }],
    verifiedNotes: "~200 beds (est.). Private hospital, Jalan Pahang KL.", notableGaps: "No transplant services."
  },
  {
    id: "hospital-tunku-azizah", // Hospital Tunku Azizah
    name: "Hospital Tunku Azizah",
    nameShort: "Hospital Tunku Azizah",
    sector: "public",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Hospital Tunku Azizah (formerly Hospital Wanita dan Kanak-Kanak KL / HWKKL) is Malaysia's dedicated national Women's and Children's Hospital, located adjacent to Hospital Kuala Lumpur on Jalan Pahang. Renamed in 2019 in honour of the Queen, Tunku Azizah Aminah Maimunah Iskandariah, it serves as the public referral centre for high-risk obstetrics, gynaecology, and paediatric care in the Klang Valley.",
    famousFor: [
      "Dedicated national Women's and Children's hospital (renamed 2019)",
      "High-risk obstetrics and maternal-fetal medicine",
      "Paediatric subspecialty referral centre — KL",
      "Neonatal Intensive Care Unit (NICU)",
      "Adjacent to HKL — seamless tertiary backup"
    ],
    infrastructure: {
      yearEstablished: 1953,
      totalBeds: 600,
      icuBeds: 20,
      nicuBeds: 40,
      operatingTheatres: 10,
      area: "~6 acres (shared HKL campus)",
      buildings: "Women's Block, Children's Block, Neonatal Block, OPD Building",
      helipad: false,
      parkingBays: "~400 bays (shared HKL)",
      parkingRate: "RM 1/hour, max RM 8/day"
    },
    contact: {
      address: "Lot 25, Jalan Raja Muda Abdul Aziz, Kampung Baru, 50300 Kuala Lumpur",
      mainLine: "+603-2600 3000",
      emergencyLine: "+603-2615 5555 ext. A&E",
      appointmentLine: "+603-2615 5555",
      website: "https://hkl.moh.gov.my",
      mapQuery: "Hospital Tunku Azizah Jalan Pahang Kuala Lumpur"
    },
    transport: {
      nearest: "Hospital Kuala Lumpur MRT (PY18, Putrajaya Line) — 5 min walk via HKL shared campus; Titiwangsa interchange (PY17, MRT + LRT Ampang + LRT Sri Petaling + Monorail) — 8 min walk",
      bus: "Bus stops: KL55 (Hospital KL Barat) / KL54 (Hospital KL Opp) — shared with HKL campus. Routes: 100, 103, 200, 250, 260, 302, GOKL-03/04",
      highway: "MRR2/DUKE — Exit Jalan Pahang",
      landmark: "Adjacent to Hospital Kuala Lumpur, Jalan Pahang — near PWTC"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Level 2, 4",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HKL-Guest)",
      patientTransport: "Shared with HKL campus transport"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00 (max 2 visitors)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Women's and Children's ward policies strictly observed. Confirm with ward directly."
    },
    specialtyCoverage: {
      available: [
        "Obstetrics & Gynaecology (full service, 24/7)",
        "High-Risk Obstetrics / Maternal-Fetal Medicine",
        "Neonatal ICU (NICU)",
        "Paediatrics (general and subspecialties)",
        "Paediatric Surgery",
        "Paediatric Cardiology",
        "Paediatric Oncology",
        "Paediatric Nephrology",
        "Paediatric Neurology",
        "Neonatology",
        "Gynaecological Oncology",
        "Fertility & Reproductive Medicine (selected)",
        "Paediatric Endocrinology",
        "Paediatric Respiratory",
        "Child & Adolescent Psychiatry"
      ],
      notAvailable: [
        { specialty: "Adult General Medicine / Surgery", transferTo: "Hospital Kuala Lumpur (HKL)", note: "Women and children only — adult general cases to adjacent HKL" },
        { specialty: "Heart Transplant (Paediatric)", transferTo: "Institut Jantung Negara (IJN)", note: "IJN handles cardiac transplants" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" }
      ],
      byReferral: [
        "Complex paediatric cardiac surgery — co-managed with HKL Cardiothoracic or IJN",
        "Paediatric bone marrow transplant — refer to UMMC or HKL Haematology"
      ]
    },
    transferPathway: {
      summary: "National Women's and Children's Hospital co-located with HKL. Complex non-women/children cases transferred to HKL immediately across the campus. Highly complex paediatric subspecialty cases coordinated with IJN and Selayang.",
      routes: [
        { condition: "Adult medical/surgical emergencies", to: "Hospital Kuala Lumpur (HKL)", reason: "Adjacent campus — 5 min internal transfer", distanceKm: 0.2 },
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 18 },
        { condition: "Paediatric heart transplant", to: "Institut Jantung Negara (IJN)", reason: "National cardiac surgical institute", distanceKm: 3 }
      ],
      howToTransfer: "MOH inter-hospital referral. For emergencies, internal HKL campus transfer is immediate."
    },
    specialtyRanks: {
      "Obstetrics & Gynaecology": { rank: "National #1 (Public)", desc: "Highest-volume public Women's & Children's hospital in Malaysia" },
      "Neonatology (NICU)": { rank: "National #1 (Public)", desc: "One of the largest public NICU centres, co-ranked with HKL" }
    },
    accreditations: ["MSQH Accredited", "MOH Designated Women's and Children's Hospital"],
    verifiedNotes: "Formerly Hospital Wanita dan Kanak-Kanak KL (HWKKL). Renamed Hospital Tunku Azizah in 2019 after HRH Queen Tunku Azizah Aminah Maimunah Iskandariah. Located on Jalan Pahang adjacent to HKL. ~600 beds (MOH estimate). Dedicated NICU and full paediatric subspecialty services confirmed.",
    notableGaps: "Women and children only — no adult general services. Outpatient specialist waiting times can be long. Limited private room availability as public hospital.",
    primaryExcellence: "National public Women's and Children's Hospital — obstetrics, paediatrics, neonatology",
    secondarySpecialties: "Maternal-Fetal Medicine, Paediatric Oncology, Paediatric Cardiology",
    fullSpecialties: ["Obstetrics & Gynaecology", "Paediatrics", "Neonatology", "Paediatric Surgery", "Gynaecological Oncology", "Maternal-Fetal Medicine"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Subsidised public hospital. FPP scheme available. Commercial cashless panels via pay-and-claim.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000 depending on procedure",
    gaps: "Women and children only. No adult general care. Long outpatient waits.",
    robotics: "Foetal monitoring systems, advanced NICU equipment. Standard imaging.",
    doctorQualifications: "MMC-registered specialist O&G consultants and paediatricians. Many hold FRCOG, MRCPCH, and local specialist diplomas. Senior consultants are professors at local medical schools.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "HKL / Hospital Tunku Azizah", url: "https://hkl.moh.gov.my" }
    ]
  },
  {
    id: "ijn",
    name: "Institut Jantung Negara (IJN)",
    nameShort: "IJN",
    sector: "public",
    tier: "quaternary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Institut Jantung Negara (IJN), the National Heart Institute, is Malaysia's premier and only dedicated cardiac hospital, providing the full spectrum of cardiac care from prevention to the most complex interventional and surgical procedures including heart transplantation. Established in 1992, IJN is a government-linked specialist institution on Jalan Tun Razak and is the national referral centre for all cardiac and cardiothoracic conditions.",
    famousFor: [
      "Malaysia's National Heart Institute — only cardiac hospital",
      "Heart transplant programme (only centre in Malaysia)",
      "Highest-volume cardiac surgery centre in Malaysia",
      "Paediatric cardiac surgery programme",
      "Complex congenital heart disease management"
    ],
    infrastructure: {
      yearEstablished: 1992,
      totalBeds: 545,
      icuBeds: 80,
      nicuBeds: 0,
      operatingTheatres: 12,
      area: "~8 acres",
      buildings: "Main Tower, Cardiac ICU Block, Paediatric Cardiac Block, Research Wing",
      helipad: true,
      parkingBays: "~600 bays",
      parkingRate: "RM 2/hour, max RM 15/day"
    },
    contact: {
      address: "145, Jalan Tun Razak, 50400 Kuala Lumpur",
      mainLine: "+603-2600 5555",
      emergencyLine: "+603-2600 5555 ext. A&E",
      appointmentLine: "+603-2600 5555",
      website: "https://www.ijn.com.my",
      mapQuery: "Institut Jantung Negara IJN Jalan Tun Razak Kuala Lumpur"
    },
    transport: {
      nearest: "Raja Uda MRT (PY19, Putrajaya Line) — ~6 min walk via Entrance B; Ampang Park MRT (PY20) — 10 min walk along Jalan Tun Razak",
      bus: "Bus stops: KL271 (IJN Barat) — 2 min; KL1638 (IJN Timur) — 3 min. Routes: 220, 302, 402, GOKL-05",
      highway: "DUKE / AKLEH — Exit Jalan Tun Razak",
      landmark: "Jalan Tun Razak, near Hospital Kuala Lumpur and PWTC"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor and Level 4, 6:30am–9pm",
      atm: "Main lobby (multiple banks)",
      surau: "Level 2, 4",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (IJN-Guest)",
      patientTransport: "IJN medical transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Cardiac ICU: 11:30–12:00, 17:30–18:00 (strictly 2 visitors max)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "N/A",
      notes: "Cardiac ICU visiting strictly controlled. Always confirm with ward before visiting."
    },
    specialtyCoverage: {
      available: [
        "Cardiology (all subspecialties, 24/7)",
        "Cardiothoracic Surgery",
        "Cardiac Electrophysiology & Ablation",
        "Interventional Cardiology (PCI, TAVI, structural heart)",
        "Heart Failure & Advanced Cardiac Care",
        "Heart Transplant (only centre in Malaysia)",
        "Paediatric Cardiology",
        "Paediatric Cardiac Surgery (congenital heart disease)",
        "Cardiac Rehabilitation",
        "Cardiac Imaging (echo, cardiac MRI, cardiac CT)",
        "Cardiac Anaesthesia",
        "Vascular Surgery (cardiac-related)"
      ],
      notAvailable: [
        { specialty: "General Medicine / non-cardiac", transferTo: "Hospital Kuala Lumpur (HKL)", note: "IJN is cardiac-only — non-cardiac conditions transferred to HKL" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "General Neurosurgery", transferTo: "HKL or UMMC", note: "IJN handles only cardiac neurology complications" }
      ],
      byReferral: [
        "Aortic arch surgery — co-managed with HKL Cardiothoracic",
        "Multi-organ transplant — refer to respective national centres"
      ]
    },
    transferPathway: {
      summary: "IJN is the national cardiac referral destination. All complex cardiac conditions across Malaysia are referred here. Non-cardiac emergencies are transferred to adjacent HKL.",
      routes: [
        { condition: "Non-cardiac emergencies", to: "Hospital Kuala Lumpur (HKL)", reason: "Nearest full-service hospital — 3 km away", distanceKm: 3 },
        { condition: "Liver/kidney transplant", to: "Hospital Selayang / UMMC", reason: "IJN is cardiac-only", distanceKm: 18 }
      ],
      howToTransfer: "IJN accepts MOH inter-hospital referrals and private referrals for cardiac cases nationwide. Emergency cardiac transfers from all states arranged via IJN Control Centre."
    },
    specialtyRanks: {
      "Cardiology": { rank: "National #1 (Overall)", desc: "Malaysia's only dedicated cardiac hospital — national referral centre for all cardiac conditions" },
      "Cardiac Surgery": { rank: "National #1", desc: "Highest-volume cardiac surgery programme in Malaysia including heart transplant" },
      "Heart Transplant": { rank: "National #1 (Only Centre)", desc: "The only institution performing heart transplants in Malaysia" },
      "Paediatric Cardiac Surgery": { rank: "National #1 (Public)", desc: "National centre for congenital heart disease surgery" }
    },
    accreditations: ["MSQH Accredited", "JCI Accredited", "MOH Designated National Heart Institute", "ISO 9001"],
    verifiedNotes: "545 beds confirmed (IJN annual report). Heart transplant programme confirmed — only centre in Malaysia. JCI accreditation verified. Located at 145 Jalan Tun Razak. Established 1992 as government-linked corporation. Both public (subsidised) and private wings available.",
    notableGaps: "Cardiac-only — no general medicine, no general surgery. Non-cardiac emergencies must transfer to HKL. Outpatient waiting for elective cardiology can be 2–4 weeks for new referrals.",
    primaryExcellence: "National Heart Institute — only cardiac hospital in Malaysia, heart transplant centre",
    secondarySpecialties: "Paediatric Cardiac Surgery, Cardiac Electrophysiology, Heart Failure",
    fullSpecialties: ["Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology", "Cardiac Electrophysiology", "Heart Transplant", "Paediatric Cardiology", "Paediatric Cardiac Surgery"],
    roomRate: "RM 3 – RM 600+ (Subsidised public class RM 3–80; Private wing RM 250–600+/night)",
    roomRateRaw: 50,
    insurance: "Both public (subsidised) and private wings. FPP scheme available for public class. Major commercial insurance accepted for private wing. Cashless admission for major insurers.",
    fppScheme: true,
    fppDeposit: "RM 500–5,000 depending on procedure and class",
    gaps: "Cardiac-only. Non-cardiac cases must go elsewhere. Premium cost for private wing cardiac procedures.",
    robotics: "Robotic cardiac surgery (select procedures). Hybrid cardiac catheterisation labs. Cardiac MRI. 3D echocardiography. TAVI and structural heart intervention suite.",
    doctorQualifications: "All cardiologists and cardiac surgeons are MMC-registered subspecialists. Many hold fellowships from American College of Cardiology, European Society of Cardiology, Royal College of Surgeons. IJN consultants are leading researchers and visiting professors at Malaysian universities.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Institut_Jantung_Negara.jpg/1280px-Institut_Jantung_Negara.jpg",
    imageCredit: "Wikimedia Commons",
    officialSources: [
      { label: "Official Website", url: "https://www.ijn.com.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "pantai-ampang",
    name: "Pantai Hospital Ampang",
    nameShort: "Pantai Ampang",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Ampang, Kuala Lumpur",
    intro: "Pantai Hospital Ampang is a private tertiary hospital located in Ampang, on the KL–Selangor border, serving the large residential and expatriate communities of Ampang, Ulu Kelang, and eastern KL. Part of the Pantai/IHH Healthcare group, it offers comprehensive specialist services and is conveniently accessible from the Ampang LRT corridor.",
    famousFor: [
      "Private tertiary hospital serving Ampang and eastern KL communities",
      "IHH/Pantai network — consistent specialist standards",
      "Accessible from Ampang LRT corridor",
      "Wide specialist panel for Ampang and Ulu Kelang catchment"
    ],
    infrastructure: {
      yearEstablished: 1994,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 6,
      operatingTheatres: 7,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinic Block",
      helipad: false,
      parkingBays: "~300 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Jalan Mamanda 9, Ampang Point, 68000 Ampang, Kuala Lumpur",
      mainLine: "+603-4270 2500",
      emergencyLine: "+603-4270 2500 ext. A&E",
      appointmentLine: "+603-4270 2500",
      website: "https://www.pantai.com.my/ampang",
      mapQuery: "Pantai Hospital Ampang Kuala Lumpur"
    },
    transport: {
      nearest: "Ampang LRT Station (Ampang Line terminus) — 12 min walk or short taxi; Pandan Jaya LRT (Kelana Jaya Line) — 15 min by taxi",
      bus: "Rapid KL bus routes (Ampang area)",
      highway: "AKLEH — Exit Ampang; MRR2 — Exit Ampang Point",
      landmark: "Ampang Point commercial area, Ampang"
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
      notes: "Private hospital — flexible visiting. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery", "Neurology",
        "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Urology", "ENT", "Ophthalmology",
        "Oncology (selected)", "Endocrinology", "Dermatology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Pantai KL or Gleneagles KL", note: "Refer to larger tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or Gleneagles KL"]
    },
    transferPathway: {
      summary: "Full-service private hospital for Ampang community. Complex surgical and transplant cases referred to larger tertiary centres.",
      routes: [],
      howToTransfer: "Specialist-to-specialist referral. Patient coordinator handles logistics."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "IHH/Pantai Healthcare Group"],
    verifiedNotes: "Pantai Hospital Ampang is a confirmed IHH/Pantai group hospital in Ampang Point, Kuala Lumpur. ~200 beds (est.).",
    notableGaps: "No cardiothoracic surgery. No liver transplant. Smaller subspecialist range compared to Pantai KL flagship.",
    primaryExcellence: "Private tertiary hospital — Ampang / eastern KL community",
    secondarySpecialties: "Obstetrics, Paediatrics, Cardiology, Orthopaedics",
    fullSpecialties: ["General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180 – RM 550+/night",
    roomRateRaw: 280,
    insurance: "Accepts major Malaysian insurance panels. Cashless available for Pantai/IHH panel insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant. Smaller facility than Pantai KL flagship.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists. IHH/Pantai group standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.pantai.com.my/ampang" },
      { label: "IHH Healthcare Group", url: "https://www.ihhhealthcare.com" }
    ]
  },
  {
    id: "columbia-asia-setapak",
    name: "Columbia Asia Hospital Setapak",
    nameShort: "Columbia Asia Setapak",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Setapak, Kuala Lumpur",
    intro: "Columbia Asia Hospital Setapak is a private community hospital located in Setapak, north-east Kuala Lumpur. Part of the Columbia Asia group (now rebranded under Ramsay Sime Darby Health Care), it provides accessible and affordable specialist care for the Setapak, Wangsa Maju, and surrounding communities.",
    famousFor: [
      "Affordable private community hospital — Setapak, north-east KL",
      "Columbia Asia / Ramsay Sime Darby group — consistent care standards",
      "Conveniently serving Setapak, Wangsa Maju, Keramat corridor"
    ],
    infrastructure: {
      yearEstablished: 2004,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~2 acres",
      buildings: "Main hospital building",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "Jalan Pahang Barat, Setapak, 53000 Kuala Lumpur",
      mainLine: "+603-4023 8888",
      emergencyLine: "+603-4023 8888 ext. A&E",
      appointmentLine: "+603-4023 8888",
      website: "https://www.columbiaasia.com/setapak",
      mapQuery: "Columbia Asia Hospital Setapak Kuala Lumpur"
    },
    transport: {
      nearest: "Wangsa Maju LRT Station (Ampang Line) — 15 min by taxi; no direct walking route",
      bus: "Rapid KL bus routes (Setapak area)",
      highway: "MRR2 / DUKE — Exit Setapak / Jalan Pahang",
      landmark: "Setapak commercial area, near Jalan Pahang Barat"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, 7am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology",
        "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or HKL", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HKL or Gleneagles KL", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or HKL"]
    },
    transferPathway: {
      summary: "Community private hospital. Complex surgical cases and emergencies referred to HKL or tertiary private centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Columbia Asia / Ramsay Sime Darby Group"],
    verifiedNotes: "Columbia Asia Hospital Setapak — community hospital in Setapak, WP Kuala Lumpur. ~100 beds (est.). Part of Columbia Asia / Ramsay Sime Darby Health Care network.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Limited subspecialist range. Smaller facility.",
    primaryExcellence: "Affordable community private hospital — Setapak / north-east KL",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 120 – RM 320+/night",
    roomRateRaw: 180,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No neurosurgery. Community-level capacity.",
    robotics: "Standard imaging — CT, X-ray.",
    doctorQualifications: "MMC-registered specialists. Columbia Asia / Ramsay Sime Darby group standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Columbia Asia / Ramsay Sime Darby Health Care", url: "https://www.ramsaysimedarby.com" }
    ]
  },
  {
    id: "columbia-asia-bukit-jalil",
    name: "Columbia Asia Hospital Bukit Jalil",
    nameShort: "Columbia Asia Bukit Jalil",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Bukit Jalil, Kuala Lumpur",
    intro: "Columbia Asia Hospital Bukit Jalil is a private community hospital in Bukit Jalil, south Kuala Lumpur, serving the growing residential communities of Bukit Jalil, Sri Petaling, and Puchong North. Part of the Columbia Asia group (Ramsay Sime Darby Health Care), it offers affordable specialist care in a modern facility.",
    famousFor: [
      "Affordable private community hospital — Bukit Jalil, south KL",
      "Columbia Asia / Ramsay Sime Darby group network",
      "Serving Bukit Jalil, Sri Petaling, Puchong North catchment"
    ],
    infrastructure: {
      yearEstablished: 2008,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~2 acres",
      buildings: "Main hospital building",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "Persiaran Jalil 1, Bukit Jalil, 57000 Kuala Lumpur",
      mainLine: "+603-8996 8888",
      emergencyLine: "+603-8996 8888 ext. A&E",
      appointmentLine: "+603-8996 8888",
      website: "https://www.columbiaasia.com/bukit-jalil",
      mapQuery: "Columbia Asia Hospital Bukit Jalil Kuala Lumpur"
    },
    transport: {
      nearest: "Bukit Jalil LRT Station (Sri Petaling Line) — 10 min walk",
      bus: "Rapid KL bus routes (Bukit Jalil area)",
      highway: "LDP / KESAS — Exit Bukit Jalil",
      landmark: "Bukit Jalil township, near Bukit Jalil National Sports Complex"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, 7am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology",
        "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Prince Court", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HKL or UMMC", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or IMU Hospital Bukit Jalil"]
    },
    transferPathway: {
      summary: "Community private hospital. Complex cases referred to tertiary centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Columbia Asia / Ramsay Sime Darby Group"],
    verifiedNotes: "Columbia Asia Hospital Bukit Jalil — community hospital in Bukit Jalil, WP Kuala Lumpur. ~100 beds (est.). Part of Columbia Asia / Ramsay Sime Darby Health Care network.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Community-level capacity.",
    primaryExcellence: "Affordable community private hospital — Bukit Jalil / south KL",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 120 – RM 320+/night",
    roomRateRaw: 180,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No neurosurgery. Community-level capacity.",
    robotics: "Standard imaging — CT, X-ray.",
    doctorQualifications: "MMC-registered specialists. Columbia Asia / Ramsay Sime Darby group standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Columbia Asia / Ramsay Sime Darby Health Care", url: "https://www.ramsaysimedarby.com" }
    ]
  },
  {
    id: "chinese-maternity-hospital",
    name: "Chinese Maternity Hospital",
    nameShort: "Chinese Maternity Hospital",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "Chinese Maternity Hospital (CMH) is a historic, non-profit private hospital in central Kuala Lumpur, established by the Chinese community in 1921. Originally focused on maternity care for the Chinese community, it has expanded over the decades to offer general specialist services while retaining its community hospital ethos and more affordable fee structure compared to commercial private hospitals.",
    famousFor: [
      "Historic Chinese community non-profit hospital (est. 1921)",
      "Affordable maternity and specialist care in central KL",
      "Non-profit community hospital — community-priced fees",
      "Long-standing trust among KL Chinese community"
    ],
    infrastructure: {
      yearEstablished: 1921,
      totalBeds: 130,
      icuBeds: 10,
      nicuBeds: 6,
      operatingTheatres: 5,
      area: "~2 acres",
      buildings: "Main Block, Maternity Wing, Specialist Clinic",
      helipad: false,
      parkingBays: "~100 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "106, Jalan Pudu, 55100 Kuala Lumpur",
      mainLine: "+603-2078 2055",
      emergencyLine: "+603-2078 2055 ext. A&E",
      appointmentLine: "+603-2078 2055",
      website: "https://www.cmhkl.com.my",
      mapQuery: "Chinese Maternity Hospital 106 Jalan Pudu Kuala Lumpur"
    },
    transport: {
      nearest: "Maharajalela LRT (AMP4) — ~5 min walk; Hang Tuah LRT/Monorail Interchange (KJ14/AMP3) — ~8 min walk",
      bus: "RapidKL routes along Jalan Pudu",
      highway: "MRR2 / Jalan Pudu — direct access",
      landmark: "Adjacent to Tung Shin Hospital, Jalan Pudu, Kuala Lumpur"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, 7am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: "Yes — community prayer room available",
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible",
      notes: "Community hospital — confirm visiting with ward. Maternity ward policies may be more flexible."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "Obstetrics & Gynaecology (core strength)",
        "Maternity & Delivery",
        "Paediatrics & Neonatology",
        "General Medicine", "General Surgery",
        "Cardiology", "Orthopaedics",
        "ENT", "Ophthalmology", "Dermatology",
        "Gastroenterology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Gleneagles KL", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HKL or UMMC", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or HKL; Complex subspecialties — refer to HKL"]
    },
    transferPathway: {
      summary: "Non-profit community hospital with strong maternity focus. Complex cases referred to HKL or tertiary private hospitals.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {
      "Maternity Care": { rank: "Historic community leader", desc: "Over 100 years of maternity and community healthcare in KL — deeply trusted by KL Chinese community" }
    },
    accreditations: ["MOH Licensed", "Non-profit community hospital status"],
    verifiedNotes: "Chinese Maternity Hospital — established 1921, one of KL's oldest private hospitals. Non-profit community hospital status. ~130 beds (est.). Primarily serves Chinese community but open to all. Affordable fees compared to commercial private hospitals.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Limited subspecialist range for complex conditions. Older facilities in some areas.",
    primaryExcellence: "Historic non-profit community hospital — maternity, general medicine, affordable care",
    secondarySpecialties: "Obstetrics, Paediatrics, General Surgery",
    fullSpecialties: ["Obstetrics & Gynaecology", "Paediatrics", "General Medicine", "General Surgery"],
    roomRate: "RM 80 – RM 300+/night (more affordable non-profit rates)",
    roomRateRaw: 130,
    insurance: "Accepts some Malaysian insurance panels. Non-profit pricing structure.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited subspecialist range. No cardiothoracic or neurosurgery. Older infrastructure in parts.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists and visiting consultants.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Chinese Maternity Hospital KL", url: "https://www.cmhkl.com.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "damai-service-hospital",
    name: "Damai Service Hospital",
    nameShort: "Damai Service Hospital",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Segambut, Kuala Lumpur",
    intro: "Damai Service Hospital is a private community hospital in Segambut, north-west Kuala Lumpur. It serves the Segambut, Kepong, and Mont Kiara residential catchment with general specialist services. Damai is known for its longstanding community presence and accessibility for north KL residents.",
    famousFor: [
      "Established private community hospital — Segambut, north KL",
      "Serving Segambut, Kepong, Mont Kiara residential communities",
      "Accessible location in north-west KL"
    ],
    infrastructure: {
      yearEstablished: 1993,
      totalBeds: 120,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~2 acres",
      buildings: "Main Block",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No 1, Jalan Segambut Tengah, Segambut, 51200 Kuala Lumpur",
      mainLine: "+603-6250 4488",
      emergencyLine: "+603-6250 4488 ext. A&E",
      appointmentLine: "+603-6250 4488",
      website: "https://www.damai.com.my",
      mapQuery: "Damai Service Hospital Segambut Kuala Lumpur"
    },
    transport: {
      nearest: "Segambut KTM Komuter Station — 10 min walk; Kepong Sentral MRT (PY08, Putrajaya Line) — 12 min by taxi",
      bus: "Rapid KL bus routes (Segambut / Kepong area)",
      highway: "MRR2 / DUKE — Exit Segambut / Kepong",
      landmark: "Jalan Segambut Tengah, Segambut — near Kepong"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, 7am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–20:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Community hospital — confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Gleneagles KL", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HKL or Gleneagles KL", note: "Refer to neurosurgical centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or HKL"]
    },
    transferPathway: {
      summary: "Community private hospital. Complex cases referred to HKL or tertiary private centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Damai Service Hospital — private community hospital in Segambut, WP Kuala Lumpur. ~120 beds (est.). Longstanding community hospital serving north-west KL.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Community-level capacity only.",
    primaryExcellence: "Private community hospital — Segambut / north-west KL",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 120 – RM 350+/night",
    roomRateRaw: 180,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Community-level only. No cardiothoracic or neurosurgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists and visiting consultants.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Damai Service Hospital", url: "https://www.damai.com.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "kpj-sentosa",
    name: "KPJ Sentosa Specialist Hospital",
    nameShort: "KPJ Sentosa",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Setapak, Kuala Lumpur",
    intro: "KPJ Sentosa Specialist Hospital is a private specialist hospital in Setapak, Kuala Lumpur, operated by KPJ Healthcare — Malaysia's largest private hospital group. It provides specialist outpatient and inpatient services for the Setapak, Wangsa Maju, and Gombak communities.",
    famousFor: [
      "KPJ Healthcare network hospital — Setapak, north KL",
      "KPJ group — Malaysia's largest private hospital operator",
      "Specialist care for Setapak, Wangsa Maju, Gombak communities"
    ],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 130,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~2 acres",
      buildings: "Main hospital building, Specialist Clinic Block",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 2, Jalan 1/65, Off Jalan Pahang Barat, Setapak, 53300 Kuala Lumpur",
      mainLine: "+603-4023 3322",
      emergencyLine: "+603-4023 3322 ext. A&E",
      appointmentLine: "+603-4023 3322",
      website: "https://www.kpjsentosa.com.my",
      mapQuery: "KPJ Sentosa Specialist Hospital Setapak Kuala Lumpur"
    },
    transport: {
      nearest: "Wangsa Maju LRT Station (Ampang Line) — 12 min walk or short taxi",
      bus: "Rapid KL bus routes (Setapak / Wangsa Maju area)",
      highway: "MRR2 / DUKE — Exit Setapak",
      landmark: "Jalan Pahang Barat area, Setapak, north KL"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor café, 7am–8pm",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Gleneagles KL", note: "Refer to tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government national centre" }
      ],
      byReferral: ["Complex oncology — refer to Beacon Hospital or HKL; Neurosurgery — refer to HKL or UMMC"]
    },
    transferPathway: {
      summary: "KPJ specialist hospital — community level. Complex cases referred to HKL or larger KPJ/private tertiary hospitals.",
      routes: [],
      howToTransfer: "KPJ specialist referral within group or to public sector."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "KPJ Sentosa Specialist Hospital — KPJ Healthcare group hospital in Setapak, WP Kuala Lumpur. ~130 beds (est.). KPJ is Malaysia's largest private hospital operator.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery on-site. Community-level specialist range.",
    primaryExcellence: "KPJ private specialist hospital — Setapak / north KL",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 230,
    insurance: "Accepts major Malaysian insurance panels. KPJ group panel rates available.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No neurosurgery. Community-level capacity.",
    robotics: "Standard imaging — CT, X-ray.",
    doctorQualifications: "MMC-registered specialists. KPJ Healthcare group standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "KPJ Sentosa Specialist Hospital", url: "https://www.kpjsentosa.com.my" },
      { label: "KPJ Healthcare Group", url: "https://www.kpj.com.my" }
    ]
  },
  {
    id: "iheal-medical-centre",
    name: "iHEAL Medical Centre",
    nameShort: "iHEAL Medical Centre",
    sector: "private",
    tier: "secondary",
    state: "Kuala Lumpur",
    city: "Kuala Lumpur",
    intro: "iHEAL Medical Centre is a private medical centre in Kuala Lumpur offering specialist outpatient and inpatient services. It focuses on accessible and patient-centred care, with a range of specialist clinics and day-procedure facilities serving the urban KL population.",
    famousFor: [
      "Patient-centred private medical centre in KL",
      "Specialist clinics and day procedures",
      "Accessible urban location in Kuala Lumpur"
    ],
    infrastructure: {
      yearEstablished: 2015,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 2,
      operatingTheatres: 3,
      area: "~1 acre",
      buildings: "Medical Centre building",
      helipad: false,
      parkingBays: "~100 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Unit 1-9 (GF), Tower 1, Jalan Ampang Hilir, 50450 Kuala Lumpur",
      mainLine: "+603-4270 8900",
      emergencyLine: "+603-4270 8900",
      appointmentLine: "+603-4270 8900",
      website: "https://www.iheal.com.my",
      mapQuery: "iHEAL Medical Centre Kuala Lumpur"
    },
    transport: {
      nearest: "LRT Ampang Park (Ampang Line) — 8 min walk; LRT KLCC (Kelana Jaya Line, KJ10) — 10 min walk",
      bus: "Rapid KL bus routes (Ampang/KLCC area)",
      highway: "AKLEH — Exit Jalan Ampang",
      landmark: "Jalan Ampang Hilir, near KLCC / Ampang area"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Available during business hours",
      atm: "Nearby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Limited"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible",
      notes: "Smaller medical centre — confirm visiting with ward."
    },
    specialtyCoverage: {
      available: [
        "General Medicine", "General Surgery (day procedures)",
        "Cardiology", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology",
        "Dermatology", "Endocrinology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "24/7 Emergency A&E (full)", transferTo: "Gleneagles KL or HKL", note: "Limited emergency — refer to tertiary centre" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Prince Court", note: "Refer to larger tertiary centre" }
      ],
      byReferral: ["Complex surgery — refer to Gleneagles KL or UMMC; Oncology — refer to Beacon Hospital"]
    },
    transferPathway: {
      summary: "Specialist medical centre. Complex emergencies and surgical cases referred to tertiary hospitals.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "iHEAL Medical Centre — private medical centre in KL, located in Jalan Ampang Hilir area. ~80 beds (est.). Focus on specialist outpatient and day-procedure services.",
    notableGaps: "Limited inpatient capacity. No full 24/7 A&E. No cardiothoracic or neurosurgery. Smaller facility.",
    primaryExcellence: "Private specialist medical centre — urban KL",
    secondarySpecialties: "General Medicine, Obstetrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited emergency. No cardiothoracic or neurosurgery. Smaller capacity.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists and visiting consultants.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "iHEAL Medical Centre", url: "https://www.iheal.com.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
{
    id: "hrc-cheras",
    name: "Hospital Rehabilitasi Cheras (HRC)",
    nameShort: "HRC Cheras",
    sector: "public",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Cheras, Kuala Lumpur",
    intro: "Hospital Rehabilitasi Cheras (HRC) is Malaysia's national public rehabilitation specialist hospital, dedicated exclusively to rehabilitation medicine. Located in Cheras, it is the country's primary centre for physical medicine and rehabilitation following stroke, spinal cord injury, traumatic brain injury, and major orthopaedic procedures.",
    famousFor: ["Malaysia's national public rehabilitation specialist hospital", "Stroke rehabilitation centre", "Spinal cord injury and traumatic brain injury rehab", "Physical medicine and rehabilitation excellence"],
    infrastructure: {
      yearEstablished: 1987,
      totalBeds: 200,
      icuBeds: 0,
      nicuBeds: 0,
      operatingTheatres: 0,
      area: "~10 acres",
      buildings: "Rehabilitation Wards Block, Therapy Block, Outpatient Block",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Kuala Lumpur (WRONG JURISDICTION — HRC is under JKN Kuala Lumpur, not Putrajaya)",
      mainLine: "+603-9145 3400",
      emergencyLine: "+603-9145 7000 (no emergency dept — refer to HKL or HCTM)",
      appointmentLine: "+603-9145 7000 (verify)",
      website: "https://jknkl.moh.gov.my/hrc/",
      mapQuery: "Hospital Rehabilitasi Cheras HRC Kuala Lumpur"
    },
    transport: {
      nearest: "No direct rail station; Taman Midah MRT (KG11, Kajang Line) — 25 min walk or short taxi; bus T401/T400 from Cheras area stops ~5 min walk from hospital — Grab from any MRT is the practical choice",
      bus: "Rapid KL Bus routes (Cheras area)",
      highway: "KESAS / MRR2 — Exit Cheras / Bandar Tun Razak",
      landmark: "Cheras, near UKM Medical Campus (HCTM/UKMMC)"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Available daytime",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Patient transport for outpatient therapy available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "N/A",
      paediatric: "As per ward policy",
      maternity: "N/A",
      notes: "Rehabilitation hospital — visiting hours may be flexible to support family involvement in rehabilitation. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Physical Medicine & Rehabilitation (PMR)",
        "Stroke Rehabilitation",
        "Spinal Cord Injury Rehabilitation",
        "Traumatic Brain Injury Rehabilitation",
        "Orthopaedic Rehabilitation",
        "Amputation Rehabilitation & Prosthetics",
        "Neurological Rehabilitation",
        "Paediatric Rehabilitation",
        "Occupational Therapy",
        "Physiotherapy",
        "Speech Language Therapy",
        "Psychology (rehabilitation)",
        "Social Work (rehabilitation)"
      ],
      notAvailable: [
        { specialty: "Emergency Medicine (A&E)", transferTo: "Hospital Kuala Lumpur (HKL) or HCTM", note: "No emergency department — rehabilitation hospital only" },
        { specialty: "Acute Medical/Surgical Care", transferTo: "Hospital Kuala Lumpur (HKL)", note: "Rehabilitation hospital — no acute care" }
      ],
      byReferral: ["All admissions via referral from acute hospitals only"]
    },
    transferPathway: {
      summary: "HRC is a national specialist rehabilitation hospital. All admissions are by referral from acute hospitals. Medical emergencies in HRC patients are managed at HKL or HCTM.",
      routes: [
        { condition: "Medical emergency in inpatient", to: "Hospital Kuala Lumpur (HKL)", reason: "Nearest acute hospital", distanceKm: 5 }
      ],
      howToTransfer: "Admission requires referral from acute treating hospital. Patient must be medically stable before transfer to HRC."
    },
    specialtyRanks: {
      "Rehabilitation Medicine": { rank: "National #1 (Public)", desc: "Malaysia's designated national public rehabilitation specialist hospital" }
    },
    accreditations: ["MSQH Accredited", "MOH National Rehabilitation Hospital Designation"],
    verifiedNotes: "~200 beds (est.). National public rehabilitation specialist hospital in Cheras KL. Admission by referral only — not a walk-in or emergency hospital.",
    notableGaps: "No emergency department. No acute medical or surgical care. Admission by referral only.",
    primaryExcellence: "National public rehabilitation specialist hospital — stroke, spinal, TBI rehabilitation",
    secondarySpecialties: "Prosthetics, Paediatric Rehabilitation, Neurological Rehabilitation",
    fullSpecialties: ["Physical Medicine & Rehabilitation", "Stroke Rehab", "Spinal Cord Injury Rehab", "TBI Rehab", "Paediatric Rehab"],
    roomRate: "RM 5 – RM 20 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Government subsidised. FPP scheme may apply.",
    fppScheme: true,
    fppDeposit: "RM 200–500",
    gaps: "No emergency care. No acute surgery. Admission by referral only. Limited private room availability.",
    robotics: "Rehabilitation equipment. Basic imaging.",
    doctorQualifications: "MOH physical medicine and rehabilitation (PMR) specialists — MMC-registered with PMR fellowship training.",
    imageUrl: null,
    imageCredit: "",
    wikiLink: null,
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "alty-ortho",
    name: "ALTY Orthopaedic Hospital",
    nameShort: "ALTY",
    sector: "private", tier: "tertiary", state: "Kuala Lumpur", city: "Ampang, Kuala Lumpur",
    intro: "ALTY Orthopaedic Hospital is a dedicated orthopaedic specialist hospital located in Menara ALTY on Jalan Ampang, Kuala Lumpur. It focuses exclusively on musculoskeletal care including sports injuries, joint replacement, spine surgery, and trauma.",
    famousFor: ["Dedicated orthopaedic specialist hospital in KL", "Sports injury and joint replacement specialist"],
    infrastructure: { yearEstablished: null, totalBeds: 60, icuBeds: 6, nicuBeds: 0, operatingTheatres: 4, area: "N/A", buildings: "Menara ALTY", helipad: false, parkingBays: "~100 bays", parkingRate: "RM 2/hour (est.)" },
    contact: { address: "Ground Floor, Menara ALTY, 187, Jalan Ampang, Taman U Thant, 50450 Kuala Lumpur", mainLine: "+603-2787 0500", emergencyLine: "+603-2787 0500", appointmentLine: "+603-2787 0500", website: "https://altyortho.com", mapQuery: "ALTY Orthopaedic Hospital Menara ALTY Jalan Ampang Kuala Lumpur" },
    transport: { nearest: "KLCC LRT (Kelana Jaya Line) — ~8 min taxi via Jalan Ampang", bus: "Rapid KL routes along Jalan Ampang", highway: "MRR2 — Jalan Ampang access", landmark: "Taman U Thant, Jalan Ampang corridor; near KLCC" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "N/A", notes: "Specialist orthopaedic hospital. Confirm with hospital." },
    specialtyCoverage: {
      available: ["Orthopaedic Surgery", "Sports Medicine", "Joint Replacement Surgery", "Spine Surgery", "Hand & Upper Limb Surgery", "Foot & Ankle Surgery", "Paediatric Orthopaedics", "Physiotherapy & Rehabilitation"],
      notAvailable: [{ specialty: "General Medicine", transferTo: "Gleneagles KL or KLCC area hospitals", note: "Orthopaedic specialist only" }, { specialty: "Obstetrics & Gynaecology", transferTo: "Nearest general hospital", note: "Not available" }],
      byReferral: ["Complex medical co-morbidities — refer to nearest general hospital"]
    },
    transferPathway: { summary: "Dedicated orthopaedic specialist hospital. Non-orthopaedic cases refer to nearby general hospitals.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "~60 beds (est.). Dedicated orthopaedic specialist hospital at Menara ALTY, Jalan Ampang. Confirmed active.", notableGaps: "Orthopaedic specialist only — no general medical or obstetric services.",
    primaryExcellence: "Dedicated orthopaedic and musculoskeletal specialist hospital", secondarySpecialties: "Sports injury, Joint replacement, Spine surgery",
    fullSpecialties: ["Orthopaedics", "Sports Medicine", "Spine Surgery", "Physiotherapy"],
    roomRate: "RM 250 – RM 600/night", roomRateRaw: 350, insurance: "Major Malaysian insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Orthopaedic specialist only.", robotics: "Standard orthopaedic imaging (X-ray, MRI, CT).", doctorQualifications: "MMC-registered orthopaedic specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://altyortho.com" }]
  },
  {
    id: "cengild-gi",
    name: "Cengild G.I. Medical Centre",
    nameShort: "Cengild",
    sector: "private", tier: "secondary", state: "Kuala Lumpur", city: "Bangsar South, Kuala Lumpur",
    intro: "Cengild G.I. Medical Centre is a specialist centre established in October 2017, focused on gastrointestinal, hepatobiliary, metabolic and surgical care. Located in the Nexus building at Bangsar South, it provides advanced endoscopy, minimally invasive GI surgery, and metabolic surgery.",
    famousFor: ["GI/liver specialist centre", "Metabolic surgery"],
    infrastructure: { yearEstablished: 2017, totalBeds: 40, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "N/A", buildings: "Nexus, Bangsar South", helipad: false, parkingBays: "~100 bays (Nexus building)", parkingRate: "RM 2/hour (est.)" },
    contact: { address: "Unit 2-3 & 2-4, Nexus, 7 Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur", mainLine: "+60 3-2858 2727", emergencyLine: "+60 3-2858 2727", appointmentLine: "+60 3-2858 2727", website: "https://cengild.com", mapQuery: "Cengild GI Medical Centre Bangsar South Kuala Lumpur" },
    transport: { nearest: "Kerinchi LRT (Kelana Jaya Line) — ~5 min walk", bus: "Rapid KL routes to Bangsar South / Kerinchi", highway: "SPRINT Highway — Bangsar South exit", landmark: "Bangsar South, Nexus building; near Mid Valley / Kerinchi LRT" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Building lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "N/A", maternity: "N/A", notes: "Specialist GI centre. Confirm with hospital." },
    specialtyCoverage: {
      available: ["Gastroenterology & Hepatology", "GI Endoscopy", "Minimally Invasive Surgery", "Metabolic & Bariatric Surgery", "Hepatobiliary Surgery", "Colorectal Surgery", "General Surgery"],
      notAvailable: [{ specialty: "Cardiology", transferTo: "Pantai KL or Gleneagles KL", note: "GI specialist centre only" }, { specialty: "Obstetrics", transferTo: "Nearest general hospital", note: "Not available" }],
      byReferral: ["Complex systemic conditions — refer to general hospital"]
    },
    transferPathway: { summary: "GI specialist centre. Non-GI cases refer to nearby general hospitals.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "~40 beds (est.). Established October 2017. GI, liver, metabolic and surgical specialist centre at Bangsar South.", notableGaps: "GI/surgery specialist only — no cardiac, obstetric, or general medical services.",
    primaryExcellence: "Gastrointestinal, hepatobiliary and metabolic surgery specialist centre", secondarySpecialties: "Endoscopy, Minimally invasive GI surgery",
    fullSpecialties: ["Gastroenterology", "Hepatology", "Metabolic Surgery", "Colorectal Surgery", "General Surgery"],
    roomRate: "RM 200 – RM 500/night", roomRateRaw: 280, insurance: "Major Malaysian insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "GI specialist only.", robotics: "Advanced endoscopy. Laparoscopic surgery.", doctorQualifications: "MMC-registered gastroenterology and surgical specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://cengild.com" }]
  },
  {
    id: "cvskl",
    name: "Cardiac Vascular Sentral Kuala Lumpur",
    nameShort: "CVSKL",
    sector: "private", tier: "tertiary", state: "Kuala Lumpur", city: "KL Sentral, Kuala Lumpur",
    intro: "Cardiac Vascular Sentral Kuala Lumpur (CVSKL) is a 60-bed dedicated cardiac and vascular specialist hospital located at KL Sentral. It is a MHTC-featured (Malaysia Healthcare Travel Council) hospital focusing exclusively on heart and vascular conditions, offering interventional cardiology, cardiac surgery, and vascular surgery.",
    famousFor: ["Dedicated cardiac and vascular specialist hospital", "60-bed heart hospital at KL Sentral"],
    infrastructure: { yearEstablished: null, totalBeds: 60, icuBeds: 12, nicuBeds: 0, operatingTheatres: 4, area: "N/A", buildings: "KL Sentral specialist tower", helipad: false, parkingBays: "~100 bays (KL Sentral)", parkingRate: "RM 3/hour (est.)" },
    contact: { address: "Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur", mainLine: "+603 2276 7000", emergencyLine: "+603 2276 7000", appointmentLine: "+603 2276 7000", website: "https://cvskl.com", mapQuery: "Cardiac Vascular Sentral Kuala Lumpur CVSKL KL Sentral" },
    transport: { nearest: "KL Sentral (KTM Komuter, LRT Kelana Jaya, KLIA Ekspres, MRT Putrajaya Line, Monorail) — ~5 min walk", bus: "Multiple Rapid KL bus routes at KL Sentral hub", highway: "Federal Highway / KESAS — KL Sentral access", landmark: "KL Sentral transport hub; near Nu Sentral Mall" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted (cardiac ICU)", paediatric: "N/A", maternity: "N/A", notes: "Dedicated cardiac hospital. Confirm with hospital." },
    specialtyCoverage: {
      available: ["Cardiology", "Interventional Cardiology", "Cardiac Electrophysiology", "Cardiac Surgery", "Cardiothoracic Surgery", "Vascular Surgery", "Cardiac Rehabilitation", "Cardiac ICU"],
      notAvailable: [{ specialty: "General Medicine (non-cardiac)", transferTo: "Pantai KL or Sunway Medical", note: "Cardiac specialist only" }, { specialty: "Obstetrics", transferTo: "Nearest general hospital", note: "Not available" }],
      byReferral: ["Heart Transplant — refer to IJN"]
    },
    transferPathway: { summary: "Dedicated cardiac and vascular specialist hospital. Non-cardiac cases refer to general hospitals. Heart transplant → IJN.", routes: [{ condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "IJN performs heart transplants", distanceKm: 5 }], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "MHTC Featured Hospital"],
    verifiedNotes: "60 beds. Dedicated cardiac and vascular specialist hospital at KL Sentral. MHTC-featured hospital.", notableGaps: "Cardiac specialist only — no general medical, obstetric, or non-cardiac surgical services.",
    primaryExcellence: "Dedicated cardiac and vascular specialist hospital", secondarySpecialties: "Interventional cardiology, Cardiac surgery, Vascular surgery",
    fullSpecialties: ["Cardiology", "Cardiac Surgery", "Vascular Surgery", "Cardiac Rehabilitation"],
    roomRate: "RM 250 – RM 600/night", roomRateRaw: 350, insurance: "Major Malaysian insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Cardiac specialist only.", robotics: "Catheterisation laboratory. Cardiac imaging.", doctorQualifications: "MMC-registered cardiologists and cardiac surgeons.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://cvskl.com" }, { label: "MHTC", url: "https://mhtc.org.my" }]
  },
  {
    id: "global-doctors-kl",
    name: "Global Doctors Hospital",
    nameShort: "Global Doctors",
    sector: "private", tier: "secondary", state: "Kuala Lumpur", city: "Mont Kiara, Kuala Lumpur",
    intro: "Global Doctors Hospital is a multi-specialty ambulatory hospital serving the Mont Kiara, Hartamas, and Bukit Damansara expatriate and professional community. Located in Mont Kiara, it provides accessible private specialist care for residents of northwest KL.",
    famousFor: ["Serving Mont Kiara and expatriate community", "Multi-specialty ambulatory care"],
    infrastructure: { yearEstablished: null, totalBeds: 50, icuBeds: 6, nicuBeds: 0, operatingTheatres: 3, area: "N/A", buildings: "Mont Kiara specialist block", helipad: false, parkingBays: "~100 bays", parkingRate: "RM 2/hour (est.)" },
    contact: { address: "18, Jalan Kiara 3, Mont Kiara, 50480 Kuala Lumpur", mainLine: "+603-6203 0999", emergencyLine: "+603-6203 0999", appointmentLine: "+603-6203 0999", website: "https://globaldoctorshospital.com", mapQuery: "Global Doctors Hospital Mont Kiara Kuala Lumpur" },
    transport: { nearest: "Semantan MRT (Putrajaya Line) — ~10 min taxi; Sri Hartamas area", bus: "Rapid KL routes to Mont Kiara", highway: "NKVE / Sprint — Mont Kiara access", landmark: "Mont Kiara; near 1 Mont Kiara Mall and Sri Hartamas" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Private ambulatory hospital. Confirm with hospital." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "ENT", "Ophthalmology", "Dermatology"],
      notAvailable: [{ specialty: "Neurosurgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to larger centre" }, { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to larger centre" }],
      byReferral: ["Complex tertiary cases — refer to larger KL hospitals"]
    },
    transferPathway: { summary: "Community specialist hospital for Mont Kiara. Complex cases → Gleneagles KL or Sunway Medical.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "~50 beds (est.). Multi-specialty ambulatory hospital serving Mont Kiara, Hartamas, and Bukit Damansara corridor.", notableGaps: "No neurosurgery or cardiothoracic surgery.",
    primaryExcellence: "Community specialist hospital — Mont Kiara, northwest KL", secondarySpecialties: "Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 200 – RM 500/night", roomRateRaw: 280, insurance: "Major Malaysian insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited tertiary specialist range.", robotics: "Standard imaging.", doctorQualifications: "MMC-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://globaldoctorshospital.com" }]
  },
  {
    id: "kmi-taman-desa",
    name: "KMI Taman Desa Medical Centre",
    nameShort: "KMI Taman Desa",
    sector: "private", tier: "secondary", state: "Kuala Lumpur", city: "Taman Desa, Kuala Lumpur",
    intro: "KMI Taman Desa Medical Centre is part of the KMI Healthcare Group (TDM Berhad), with 39 beds and 27 doctors. It serves the Taman Desa and Old Klang Road corridor, providing full inpatient specialist care in a community hospital setting.",
    famousFor: ["KMI Healthcare Group hospital — Old Klang Road/Taman Desa corridor"],
    infrastructure: { yearEstablished: null, totalBeds: 39, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "N/A", buildings: "Taman Desa medical block", helipad: false, parkingBays: "~80 bays", parkingRate: "RM 2/hour (est.)" },
    contact: { address: "45, Jalan Desa, Taman Desa, Off Jalan Klang Lama, 58100 Kuala Lumpur", mainLine: "+603-7982 6500", emergencyLine: "+603-7982 6500", appointmentLine: "+603-7982 6500", website: "https://kmihealthcare.com", mapQuery: "KMI Taman Desa Medical Centre Jalan Klang Lama Kuala Lumpur" },
    transport: { nearest: "Jalan Klang Lama area — taxi/ride-hailing; ~20 min from KL Sentral", bus: "Rapid KL routes along Jalan Klang Lama / Old Klang Road", highway: "KESAS / Federal Highway — Old Klang Road access", landmark: "Taman Desa, off Old Klang Road (Jalan Klang Lama)" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Community private hospital. Confirm with hospital." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Tertiary specialist services", transferTo: "Pantai KL or Sunway Medical", note: "Community hospital — refer complex cases" }],
      byReferral: ["Complex cases — refer to larger KL hospitals"]
    },
    transferPathway: { summary: "Community hospital for Taman Desa / Old Klang Road area. Complex cases → larger KL hospitals.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "KMI Healthcare Group (TDM Berhad)"],
    verifiedNotes: "39 beds, 27 doctors. KMI Healthcare Group (TDM Berhad). Full inpatient facility in Taman Desa / Old Klang Road area.", notableGaps: "Limited tertiary specialist range.",
    primaryExcellence: "Community specialist hospital — Taman Desa, Old Klang Road", secondarySpecialties: "Obstetrics, General Surgery, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180 – RM 450/night", roomRateRaw: 250, insurance: "Major Malaysian insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited tertiary specialist range.", robotics: "Standard imaging.", doctorQualifications: "MMC-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://kmihealthcare.com" }]
  },
  {
    id: "htabtah-ukm",
    name: "Hospital Tunku Ampuan Besar Tuanku Aishah Rohani",
    nameShort: "HTABTAH / UKM Children's",
    sector: "public", tier: "tertiary", state: "Kuala Lumpur", city: "Cheras, Kuala Lumpur",
    intro: "Hospital Tunku Ampuan Besar Tuanku Aishah Rohani (HTABTAH) is Malaysia's first smart specialist children's hospital and the second teaching hospital under Universiti Kebangsaan Malaysia (UKM). Renamed in March 2022 (formerly known as UKM Specialist Children's Hospital / HPKK UKM), it is entirely separate from UKMSC (the private adult specialist centre). Located at the UKM Medical Centre campus in Cheras, it provides comprehensive paediatric subspecialty care with 200+ beds.",
    famousFor: ["Malaysia's first smart specialist children's hospital", "Second UKM teaching hospital", "Renamed March 2022 (formerly HPKK UKM)"],
    infrastructure: { yearEstablished: 2019, totalBeds: 200, icuBeds: 20, nicuBeds: 16, operatingTheatres: 8, area: "~5 acres (UKM Medical Centre campus)", buildings: "Specialist Children's Hospital Block", helipad: false, parkingBays: "~300 bays", parkingRate: "RM 1/hour (public hospital)" },
    contact: { address: "Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Kuala Lumpur", mainLine: "+603-9174 8888", emergencyLine: "+603-9174 8888 ext. A&E", appointmentLine: "+603-9174 8888", website: "https://hpkk.ukm.edu.my", mapQuery: "Hospital Tunku Ampuan Besar Tuanku Aishah Rohani UKM Cheras Kuala Lumpur" },
    transport: { nearest: "Bandar Tun Razak MRT (Putrajaya Line) — ~10 min taxi; Cheras area", bus: "Rapid KL routes to Bandar Tun Razak / Cheras", highway: "MRR2 — Bandar Tun Razak / Cheras exit", landmark: "UKM Medical Centre campus, Bandar Tun Razak, Cheras; near Hospital Canselor Tuanku Muhriz (HCTM)" },
    facilities: { pharmacy24h: true, cafeteria: "Available", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free (hospital guest)", patientTransport: "Available" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "11:30–12:00, 17:30–18:00 (max 2 visitors)", paediatric: "Parents: unrestricted", maternity: "N/A", notes: "Children's hospital — parents unrestricted. Confirm with ward." },
    specialtyCoverage: {
      available: ["Paediatric A&E (24/7)", "Neonatal ICU (NICU)", "Paediatric ICU (PICU)", "General Paediatrics", "Paediatric Surgery", "Paediatric Cardiology", "Paediatric Neurology", "Paediatric Haematology/Oncology", "Paediatric Nephrology", "Paediatric Gastroenterology", "Paediatric Respiratory Medicine", "Paediatric Orthopaedics", "Paediatric ENT", "Paediatric Ophthalmology", "Paediatric Endocrinology", "Developmental Paediatrics"],
      notAvailable: [{ specialty: "Adult Medicine", transferTo: "HCTM (Hospital Canselor Tuanku Muhriz)", note: "Children's hospital only" }],
      byReferral: ["Complex paediatric cardiac surgery — refer to IJN or HKL", "Paediatric organ transplant — refer to Hospital Selayang or UMMC"]
    },
    transferPathway: { summary: "Dedicated children's specialist hospital under UKM. Adult cases → HCTM. Complex paediatric surgery → IJN or HKL.", routes: [{ condition: "Paediatric cardiac surgery (complex)", to: "Institut Jantung Negara (IJN)", reason: "National cardiac centre", distanceKm: 8 }], howToTransfer: "MOH or UKM academic referral." },
    specialtyRanks: { "UKM Children's Hospital": { rank: "National", desc: "Malaysia's first smart specialist children's hospital" } },
    accreditations: ["MSQH Accredited", "UKM Teaching Hospital"],
    verifiedNotes: "200+ beds. Malaysia's first smart specialist children's hospital. Second UKM teaching hospital. Renamed March 2022 from HPKK UKM. Entirely separate from UKMSC (adult private specialist centre).", notableGaps: "Children's hospital only — no adult services.",
    primaryExcellence: "Malaysia's first smart specialist children's hospital (UKM)", secondarySpecialties: "Paediatric surgery, Paediatric cardiology, Paediatric haematology/oncology",
    fullSpecialties: ["Paediatrics", "Paediatric Surgery", "Paediatric Cardiology", "Neonatology", "Paediatric Haematology/Oncology"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "Subsidised. Malaysian citizens covered under MOH/UKM.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Adult services not available.", robotics: "Smart hospital technology. Standard paediatric imaging.", doctorQualifications: "UKM academic specialists and MOH specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://hpkk.ukm.edu.my" }]
  },
  {
    id: "kpj-dsh2",
    name: "Damansara Specialist Hospital 2 (DSH2)",
    nameShort: "DSH2",
    sector: "private",
    tier: "tertiary",
    state: "Kuala Lumpur",
    city: "Bukit Lanjan, Kuala Lumpur",
    intro: "Damansara Specialist Hospital 2 (DSH2) is a modern KPJ Healthcare hospital in Bukit Lanjan, providing additional specialist capacity for the Damansara, Petaling Jaya, and northwest KL communities. Opened around 2020, it is distinct from KPJ Damansara Specialist Hospital (DSH1) in Petaling Jaya.",
    famousFor: ["KPJ expansion hospital — Bukit Lanjan, northwest KL", "Modern tertiary private hospital serving Damansara/PJ corridor"],
    infrastructure: { yearEstablished: 2020, totalBeds: 200, icuBeds: 16, nicuBeds: 6, operatingTheatres: 8, area: "~2 acres", buildings: "New specialist tower", helipad: false, parkingBays: "~250 bays", parkingRate: "RM 3/hr; max/day RM 7; inpatient RM 7/day; valet RM 15/day" },
    contact: { address: "No. 1, Jalan Bukit Lanjan 3, Bukit Lanjan, 60000 Kuala Lumpur", mainLine: "+603-7717 3000", emergencyLine: "+603-7717 3000", appointmentLine: "+603-7717 3000", website: "https://kpjhealth.com.my/damansara2/", mapQuery: "Damansara Specialist Hospital 2 DSH2 Bukit Lanjan Kuala Lumpur" },
    transport: { nearest: "MRT Mutiara Damansara (Putrajaya Line) via feeder bus T810; ~8 min walk from bus stop", bus: "Rapid KL 780, 801, PJ06, T810 (Bukit Lanjan area)", highway: "NKVE — Bukit Lanjan interchange (Persiaran Bukit Lanjan)", landmark: "Bukit Lanjan; near Empire City Damansara (~980 m)" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with hospital." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to larger centre" }],
      byReferral: ["Complex cases — KPJ Damansara (DSH1) or Sunway Medical"]
    },
    transferPathway: { summary: "Modern KPJ tertiary private hospital. Complex cases refer to KPJ Damansara (DSH1) or Sunway Medical.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "200 beds. KPJ Healthcare group expansion hospital in Bukit Lanjan, state: Kuala Lumpur. Opened ~2020.", notableGaps: "Newer hospital — verify full specialist coverage with hospital.",
    primaryExcellence: "KPJ private hospital — Damansara 2, Bukit Lanjan northwest KL", secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Cardiology", "ENT", "Ophthalmology"],
    roomRate: "RM 180 – RM 500+/night", roomRateRaw: 280, insurance: "KPJ group insurance panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Newer — verify specialist availability.", robotics: "Standard imaging.", doctorQualifications: "MMC-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://kpjhealth.com.my/damansara2/" }]
  },
];
