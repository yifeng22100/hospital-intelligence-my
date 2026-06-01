// data/hospitals/putrajaya.js
export const HOSPITALS_PUTRAJAYA = [
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
      mainLine: "+603-8888 0080",
      emergencyLine: "+603-8888 8000 ext. A&E",
      appointmentLine: "+603-8888 8000",
      website: "https://hpj.gov.my",
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
  },
  {
    id: "ikn-putrajaya",
    name: "Institut Kanser Negara",
    nameShort: "IKN",
    sector: "public",
    tier: "quaternary",
    state: "Putrajaya",
    city: "Putrajaya",
    intro: "Institut Kanser Negara (IKN) is Malaysia's dedicated national cancer hospital under the Ministry of Health, located in Putrajaya Presint 7. Opened in 2013, it is the country's apex public oncology centre providing radiotherapy, chemotherapy, haematology, and comprehensive oncology services to all Malaysian patients.",
    famousFor: [
      "Malaysia's national cancer specialist hospital",
      "MOH-operated national cancer referral centre",
      "Comprehensive oncology services for all Malaysians",
      "Radiotherapy, chemotherapy, haematology — all under one roof"
    ],
    infrastructure: {
      yearEstablished: 2013,
      totalBeds: 250,
      icuBeds: 16,
      nicuBeds: 0,
      operatingTheatres: 6,
      area: "~10 acres",
      buildings: "Main Oncology Block, Radiation Oncology Wing, Haematology Ward",
      helipad: false,
      parkingBays: "~500 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "No. 4, Jalan P7, Presint 7, 62250 Putrajaya",
      mainLine: "+603-8892 5414",
      emergencyLine: "+603-8892 5414",
      appointmentLine: "+603-8892 5414",
      website: "https://www.moh.gov.my",
      mapQuery: "Institut Kanser Negara IKN Presint 7 Putrajaya"
    },
    transport: {
      nearest: "Putrajaya Sentral (ERL/KTM) — 10 min taxi ride",
      bus: "Nadi Putra Bus — Presint 7 routes",
      highway: "ELITE / MEX Highway — Exit Putrajaya/Cyberjaya",
      landmark: "Presint 7 Putrajaya, near Ministry of Health complex"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Available on site",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (IKN-Guest)",
      patientTransport: "MOH hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted",
      maternity: "N/A",
      notes: "Confirm with ward. Oncology patients may have restricted visiting during treatment."
    },
    specialtyCoverage: {
      available: [
        "Clinical Oncology",
        "Radiation Oncology",
        "Surgical Oncology",
        "Haematology & Haematological Oncology",
        "Medical Oncology",
        "Paediatric Oncology",
        "Gynaecological Oncology",
        "Head & Neck Oncology",
        "Palliative Care & Pain Management",
        "Nuclear Medicine (Oncology)",
        "Interventional Radiology (Oncology)",
        "Psycho-oncology",
        "Cancer Nursing",
        "Nutritional Support for Cancer Patients"
      ],
      notAvailable: [
        { specialty: "General A&E / Trauma", transferTo: "Hospital Putrajaya", note: "Oncology specialist hospital — no general A&E" },
        { specialty: "Proton Therapy", transferTo: "Overseas referral", note: "Proton therapy not available in Malaysia — overseas referral" }
      ],
      byReferral: [
        "Bone Marrow Transplant (complex) — Hospital Ampang or UMMC",
        "Proton therapy — Singapore or overseas"
      ]
    },
    transferPathway: {
      summary: "Malaysia's national cancer hospital. All cancer types treated. Non-oncology emergencies refer to Hospital Putrajaya. BMT and proton therapy cases may be referred to national BMT centres or overseas.",
      routes: [
        { condition: "Medical emergency (non-oncology)", to: "Hospital Putrajaya", reason: "General hospital with A&E", distanceKm: 2 },
        { condition: "Complex BMT", to: "Hospital Ampang", reason: "National BMT centre", distanceKm: 30 }
      ],
      howToTransfer: "MOH inter-hospital referral. Cancer referrals accepted nationwide — from any MOH hospital, UMMC, or private specialist."
    },
    specialtyRanks: {
      "National Cancer Centre": { rank: "National #1 (Public)", desc: "Malaysia's apex national cancer hospital under MOH" }
    },
    accreditations: ["MOH Designated National Cancer Hospital", "MSQH Accredited"],
    verifiedNotes: "~250 beds (est.). Dedicated national cancer hospital under Ministry of Health Malaysia. Located in Putrajaya Presint 7. Opened approx. 2013.",
    notableGaps: "No general A&E. No proton therapy (overseas referral). No general medicine/surgery.",
    primaryExcellence: "Malaysia's national public cancer hospital — comprehensive oncology",
    secondarySpecialties: "Haematology, Radiation Oncology, Palliative Care",
    fullSpecialties: ["Clinical Oncology", "Radiation Oncology", "Surgical Oncology", "Haematology", "Palliative Care", "Paediatric Oncology"],
    roomRate: "Free (public)",
    roomRateRaw: 0,
    insurance: "Heavily subsidised. Government cancer hospital — free/heavily subsidised for Malaysian citizens. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No general A&E. No proton therapy. Oncology only.",
    robotics: "Linear accelerators for radiotherapy. PET-CT imaging. Standard oncology imaging.",
    doctorQualifications: "MOH oncologists and haematologists — MMC-registered with postgraduate oncology qualifications.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  }
];
