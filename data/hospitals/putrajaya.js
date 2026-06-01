// data/hospitals/putrajaya.js
var HOSPITALS_PUTRAJAYA = [
  {
    id: "hputrajaya",
    name: "Hospital Putrajaya",
    nameShort: "Hospital Putrajaya",
    sector: "public",
    tier: "tertiary",
    state: "Putrajaya",
    city: "Putrajaya",
    intro: "Hospital Putrajaya is the federal government's flagship tertiary hospital, purpose-built to serve civil servants, government staff, and the residents of Putrajaya. With 710 beds and full specialist coverage, it functions as the state-equivalent hospital for the federal territory of Putrajaya.",
    famousFor: ["Federal government flagship hospital for civil servants", "Purpose-built modern public hospital (2010)", "Full tertiary services for Putrajaya Federal Territory", "Strong cardiac and oncology services"],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 710,
      icuBeds: 40,
      nicuBeds: 16,
      operatingTheatres: 14,
      area: "~15 acres",
      buildings: "Main Clinical Tower, Specialist Block, Women & Children Block",
      helipad: true,
      parkingBays: "~1,000 bays",
      parkingRate: "RM 1/hour, max RM 5/day"
    },
    contact: {
      address: "Precinct 7, 62250 Putrajaya",
      mainLine: "+603-8888 8000",
      emergencyLine: "+603-8888 8000 ext. A&E",
      appointmentLine: "+603-8888 8000",
      website: "https://hputrajaya.moh.gov.my",
      mapQuery: "Hospital Putrajaya Precinct 7"
    },
    transport: {
      nearest: "Putrajaya Sentral (ERL/KTM) — 10 min taxi ride",
      bus: "Nadi Putra Bus Route 401, 402",
      highway: "ELITE / MEX Highway — Exit Putrajaya/Cyberjaya",
      landmark: "Precinct 7 Putrajaya, near Ministry of Health complex"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level 1 & Level 4, 6:30am–9pm",
      atm: "Main lobby (Maybank, CIMB)",
      surau: "Level 2, 4, 6",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HP-Guest)",
      patientTransport: "Hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00 (max 2 visitors)",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Always confirm with ward. Hours may change during special circumstances."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "Intensive Care Medicine (ICU/HDU)", "NICU",
        "General Surgery", "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine",
        "Paediatrics", "Paediatric Surgery", "Neonatology",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology",
        "Nephrology", "Kidney Transplant", "Urology",
        "Gastroenterology", "Hepatobiliary Surgery",
        "Respiratory Medicine", "Infectious Disease",
        "Endocrinology", "Rheumatology", "Psychiatry",
        "Dermatology", "Ophthalmology", "ENT",
        "Interventional Radiology", "Nuclear Medicine",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", reason: "National cardiac surgical institute" },
        { specialty: "Bone Marrow Transplant (complex)", transferTo: "UMMC or HKL", note: "Refer to haematology centres" }
      ],
      byReferral: [
        "Cochlear Implant — refer to UMMC or Hospital Sultanah Bahiyah",
        "Proton Therapy — overseas referral"
      ]
    },
    transferPathway: {
      summary: "Hospital Putrajaya handles most tertiary cases in-house. Highly specialised procedures (liver transplant, proton therapy) referred to national centres.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 35 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "National cardiac institute", distanceKm: 25 }
      ],
      howToTransfer: "Treating doctor initiates MOH inter-hospital referral. Ambulance transfer covered. Bring all reports and referral letter."
    },
    specialtyRanks: {
      "Government Employee Healthcare": { rank: "Primary (Putrajaya)", desc: "Primary healthcare facility for Malaysia's federal civil service and government departments" }
    },
    accreditations: ["MSQH Accredited", "MOH Designated Federal Territory Tertiary Hospital"],
    verifiedNotes: "710 beds (MOH 2023). Purpose-built 2010. Full tertiary coverage. Primary hospital for Putrajaya federal territory.",
    notableGaps: "No liver transplant (refer Selayang). No in-house BMT programme (refer UMMC). Limited private room availability.",
    primaryExcellence: "Modern federal government tertiary hospital — full spectrum care",
    secondarySpecialties: "Cardiology, Oncology, Neurosurgery, Obstetrics",
    fullSpecialties: ["Emergency Medicine", "Cardiology", "Neurology", "Oncology", "Nephrology", "Obstetrics", "Paediatrics", "Surgery"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. Government employees may have additional JPA/PSMB coverage. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000 depending on procedure",
    gaps: "No liver transplant. Limited BMT programme. Waiting times for elective procedures.",
    robotics: "Radiation therapy with linear accelerators. Standard imaging — 3T MRI, CT, PET-CT (verify availability).",
    doctorQualifications: "MOH specialists — MMC-registered with higher specialist qualifications. Many trained at UK Royal Colleges.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://hputrajaya.moh.gov.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  }
  ,{
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
      address: "Jalan Yaacob Latif, Bandar Tun Razak, 56000 Cheras, Kuala Lumpur",
      mainLine: "+603-9145 7000 (verify)",
      emergencyLine: "+603-9145 7000 (no emergency dept — refer to HKL or HCTM)",
      appointmentLine: "+603-9145 7000 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Rehabilitasi Cheras HRC Kuala Lumpur"
    },
    transport: {
      nearest: "Bandar Tun Razak MRT Station (Putrajaya Line) — 15 min walk or short taxi",
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
    id: "pusrawi-putrajaya",
    name: "PUSRAWI Hospital Putrajaya",
    nameShort: "PUSRAWI Putrajaya",
    sector: "private", tier: "secondary", state: "Putrajaya", city: "Putrajaya",
    intro: "PUSRAWI Hospital Putrajaya is a private Islamic hospital serving government employees and residents of Putrajaya federal territory.",
    famousFor: ["Private Islamic hospital — Putrajaya federal territory", "PUSRAWI network hospital"],
    infrastructure: { yearEstablished: 2010, totalBeds: 100, icuBeds: 6, nicuBeds: 3, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Putrajaya, Malaysia", mainLine: "+603-8888 0000 (verify)", emergencyLine: "+603-8888 0000 ext. A&E", appointmentLine: "+603-8888 0000 (verify)", website: "https://www.pusrawi.com.my", mapQuery: "PUSRAWI Hospital Putrajaya" },
    transport: { nearest: "Putrajaya Sentral — 10 min taxi", bus: "NADI Putrajaya bus", highway: "ELITE Highway — Putrajaya exit", landmark: "Putrajaya federal government centre" },
    facilities: { pharmacy24h: false, cafeteria: "Halal café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Complex subspecialties", transferTo: "Hospital Putrajaya", note: "Refer" }],
      byReferral: ["Complex → Hospital Putrajaya or HUKM"]
    },
    transferPathway: { summary: "Private Islamic hospital. Complex → Hospital Putrajaya.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private Islamic hospital — Putrajaya", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180–400/night", roomRateRaw: 220, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "Limited subspecialties.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "PUSRAWI Hospital", url: "https://www.pusrawi.com.my" }],
    verifiedNotes: "~100 beds (est.). Private Islamic hospital, Putrajaya.", notableGaps: "Complex cases → Hospital Putrajaya."
  }
];
