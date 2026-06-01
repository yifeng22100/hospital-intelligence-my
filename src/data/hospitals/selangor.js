// data/hospitals/selangor.js
export const HOSPITALS_SELANGOR = [
  {
    id: "htar",
    name: "Hospital Tengku Ampuan Rahimah (HTAR) Klang",
    nameShort: "HTAR Klang",
    sector: "public",
    tier: "state",
    state: "Selangor",
    city: "Klang",
    intro: "Hospital Tengku Ampuan Rahimah (HTAR) Klang is one of Malaysia's busiest public hospitals, handling the highest trauma and emergency volume in Selangor. With 1,094 beds, it is the main referral hospital for Klang, Port Klang, and surrounding areas.",
    famousFor: ["One of Malaysia's busiest A&E departments", "Major trauma centre for Klang Valley west", "High-volume public tertiary hospital", "Burns unit available"],
    infrastructure: {
      yearEstablished: 1956,
      totalBeds: 1094,
      icuBeds: 50,
      nicuBeds: 18,
      operatingTheatres: 16,
      area: "~20 acres",
      buildings: "Main Block, Women & Children Block, New Clinical Block",
      helipad: true,
      parkingBays: "~800 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Langat, 41200 Klang, Selangor",
      mainLine: "+603-3375 7000",
      emergencyLine: "+603-3375 7000 ext. A&E",
      appointmentLine: "+603-3375 7000",
      website: "https://jknselangor.moh.gov.my/htar/",
      mapQuery: "Hospital Tengku Ampuan Rahimah HTAR Klang"
    },
    transport: {
      nearest: "Klang KTM Komuter Station — 10 min taxi",
      bus: "Rapid KL Bus routes (Klang bus terminal)",
      highway: "KESAS/Federal Highway — Exit Klang",
      landmark: "Near Klang town centre, off Jalan Langat"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Level 2, 4",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HTAR-Guest)",
      patientTransport: "Hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Confirm with ward. High occupancy — phone ahead."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU",
        "General Surgery", "Trauma Surgery", "Burns & Plastic Surgery",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Paediatric Surgery",
        "Clinical Oncology", "Haematology",
        "Nephrology", "Urology",
        "Gastroenterology", "Colorectal Surgery",
        "Respiratory Medicine", "Infectious Disease",
        "Endocrinology", "Psychiatry", "Dermatology",
        "Ophthalmology", "ENT",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "Gamma Knife", transferTo: "Private hospitals in KL", note: "Not available in public sector" }
      ],
      byReferral: [
        "Cochlear Implant — refer to UMMC or Hospital Sultanah Bahiyah",
        "BMT — refer to UMMC"
      ]
    },
    transferPathway: {
      summary: "HTAR is a major state tertiary hospital. Highly specialised cases referred to HKL or KL quaternary centres.",
      routes: [
        { condition: "Quaternary/national referral cases", to: "Hospital Kuala Lumpur (HKL)", reason: "National apex centre", distanceKm: 40 },
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 50 }
      ],
      howToTransfer: "MOH inter-hospital referral via treating doctor. Ambulance transfer available."
    },
    specialtyRanks: {
      "Trauma": { rank: "Highest volume in Selangor west", desc: "Handles the highest trauma and accident volume in the Klang Valley west corridor" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "1,094 beds (MOH 2023). Burns unit confirmed. High trauma volume hospital.",
    notableGaps: "No liver transplant. Extremely busy — waiting times can be very long.",
    primaryExcellence: "Major public tertiary hospital — trauma centre for Klang Valley west",
    secondarySpecialties: "Cardiology, Neurosurgery, Oncology, Burns",
    fullSpecialties: ["Emergency Medicine", "Trauma Surgery", "Cardiology", "Neurosurgery", "Oncology"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000 depending on procedure",
    gaps: "No liver transplant. Very busy hospital — overcrowding common.",
    robotics: "Radiation therapy equipment. Standard imaging — 3T MRI, CT.",
    doctorQualifications: "MOH specialists — MMC-registered. Many trained at UK Royal Colleges.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Klang_TAR_hospital_main_building.jpg",
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://jknselangor.moh.gov.my/htar/" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hsgb",
    name: "Hospital Sungai Buloh (HSGB)",
    nameShort: "HSGB",
    sector: "public",
    tier: "tertiary",
    state: "Selangor",
    city: "Sungai Buloh",
    intro: "Hospital Sungai Buloh is Malaysia's national centre for infectious diseases and has a long history as a dedicated infectious disease hospital. With 1,037 beds, it was the main COVID-19 treatment centre and remains the national referral for infectious disease cases including tuberculosis, HIV/AIDS, and emerging infections.",
    famousFor: ["Malaysia's National Infectious Disease Centre", "Main COVID-19 treatment hospital 2020–2022", "TB and HIV/AIDS specialist centre", "Long history as infectious disease hospital (formerly Sungai Buloh Hospital for communicable diseases)"],
    infrastructure: {
      yearEstablished: 1935,
      totalBeds: 1037,
      icuBeds: 60,
      nicuBeds: 16,
      operatingTheatres: 14,
      area: "~30 acres",
      buildings: "Main Block, Isolation Wards, New Clinical Tower, Women & Children Block",
      helipad: true,
      parkingBays: "~600 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Hospital, 47000 Sungai Buloh, Selangor",
      mainLine: "+603-6145 4333",
      emergencyLine: "+603-6145 4333 ext. A&E",
      appointmentLine: "+603-6145 4333",
      website: "https://jknselangor.moh.gov.my/hsgbuloh/",
      mapQuery: "Hospital Sungai Buloh Selangor"
    },
    transport: {
      nearest: "Sungai Buloh MRT (PY04/KA01, Putrajaya + Kajang Lines interchange) — 3 km from hospital; feeder bus T100 (RM1, ~10 min) runs from station to hospital — do not attempt to walk",
      bus: "Rapid KL Bus routes (Sungai Buloh area)",
      highway: "NKVE/Damansara-Sungai Buloh — Exit Hospital Sungai Buloh",
      landmark: "Jalan Hospital, Sungai Buloh town"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Level G, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Available multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HSGB-Guest)",
      patientTransport: "Hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted. Others: standard hours",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Infectious disease wards may restrict visiting during outbreak periods."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU (Infectious Disease / General)", "NICU",
        "Infectious Disease (National Centre)", "Tuberculosis (TB) specialist",
        "HIV/AIDS specialist programme", "Dermatology & Venereology",
        "General Medicine", "General Surgery",
        "Cardiology", "Neurology", "Neurosurgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Paediatric Infectious Disease",
        "Orthopaedics", "Respiratory Medicine",
        "Nephrology", "Urology",
        "Gastroenterology", "ENT", "Ophthalmology",
        "Psychiatry", "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Serdang Heart Centre", note: "Refer to cardiac surgical centres" }
      ],
      byReferral: [
        "Complex cardiac surgery — refer to Serdang Heart Centre or HKL",
        "BMT — refer to UMMC"
      ]
    },
    transferPathway: {
      summary: "National infectious disease centre. General tertiary care available. Complex non-infectious cases referred to KL centres.",
      routes: [
        { condition: "Cardiac surgery", to: "Serdang Heart Centre or HKL", reason: "Cardiac surgical capability", distanceKm: 30 }
      ],
      howToTransfer: "MOH inter-hospital referral."
    },
    specialtyRanks: {
      "Infectious Disease": { rank: "National #1 (Public)", desc: "Malaysia's designated National Infectious Disease Centre" }
    },
    accreditations: ["MSQH Accredited", "MOH National Infectious Disease Centre Designation"],
    verifiedNotes: "1,037 beds. National infectious disease centre. Main COVID-19 hospital confirmed.",
    notableGaps: "No liver transplant. No cardiothoracic surgery on site.",
    primaryExcellence: "National Infectious Disease Centre — TB, HIV, emerging infections",
    secondarySpecialties: "General Surgery, Obstetrics, Neurosurgery",
    fullSpecialties: ["Infectious Disease", "TB", "HIV/AIDS", "General Medicine", "Obstetrics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No liver transplant. No cardiothoracic surgery.",
    robotics: "Standard imaging. Infection control equipment.",
    doctorQualifications: "MOH specialists — MMC-registered. Infectious disease specialists fellowship-trained.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://jknselangor.moh.gov.my/hsgbuloh/" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "serdang",
    name: "Hospital Sultan Idris Shah Serdang (HSIS)",
    nameShort: "Serdang / SHC",
    sector: "public",
    tier: "tertiary",
    state: "Selangor",
    city: "Serdang",
    intro: "Hospital Sultan Idris Shah Serdang, home to the Serdang Heart Centre (SHC), is one of Malaysia's most important cardiac centres and the largest cardiac surgical volume centre in Southeast Asia. The hospital combines comprehensive general tertiary services with a world-class cardiac programme.",
    famousFor: ["Serdang Heart Centre — largest cardiac surgical volume in SE Asia", "24/7 STEMI programme for heart attacks", "Over 3,000 open-heart surgeries per year", "Cardiothoracic surgery national referral"],
    infrastructure: {
      yearEstablished: 1972,
      totalBeds: 1062,
      icuBeds: 60,
      nicuBeds: 16,
      operatingTheatres: 18,
      area: "~25 acres",
      buildings: "Main Hospital, Serdang Heart Centre, Women & Children Block",
      helipad: true,
      parkingBays: "~800 bays",
      parkingRate: "15-min grace; 1st hr: RM1.50; subsequent hrs: RM1.00/hr; max/day: RM10.00"
    },
    contact: {
      address: "Jalan Puchong, 43000 Kajang, Selangor",
      mainLine: "+603-8947 5555",
      emergencyLine: "+603-8947 5555 ext. A&E",
      appointmentLine: "+603-8947 5555",
      website: "https://jknselangor.moh.gov.my/hsis/",
      mapQuery: "Hospital Sultan Idris Shah Serdang Heart Centre"
    },
    transport: {
      nearest: "Serdang KTM Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Serdang area)",
      highway: "SILK/BESRAYA — Exit Serdang / UPM",
      landmark: "Near Universiti Putra Malaysia (UPM), Serdang"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (SHC-Guest)",
      patientTransport: "Hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "12:00–12:30, 17:30–18:00 (ICU restricted)",
      paediatric: "Parents: unrestricted. Others: standard hours",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "Cardiac ICU (CICU) — very restricted. Confirm with family liaison."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "Cardiac ICU (CICU)", "General ICU", "NICU",
        "Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology (24/7 STEMI PCI)",
        "Cardiac Electrophysiology", "Vascular Surgery",
        "General Surgery", "Trauma Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Paediatric Cardiology",
        "Clinical Oncology", "Haematology",
        "Nephrology", "Urology",
        "Gastroenterology", "Colorectal Surgery",
        "Respiratory Medicine", "Endocrinology",
        "Psychiatry", "Dermatology", "ENT", "Ophthalmology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National liver transplant centre" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", note: "IJN performs heart transplants" }
      ],
      byReferral: [
        "BMT — refer to UMMC",
        "Cochlear Implant — refer to UMMC"
      ]
    },
    transferPathway: {
      summary: "Major cardiac centre. Non-cardiac quaternary cases referred to KL national centres.",
      routes: [
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN)", reason: "IJN national cardiac transplant centre", distanceKm: 30 },
        { condition: "Liver transplant", to: "Hospital Selayang", reason: "National liver transplant centre", distanceKm: 40 }
      ],
      howToTransfer: "MOH inter-hospital referral."
    },
    specialtyRanks: {
      "Cardiothoracic Surgery": { rank: "Largest volume SE Asia (Public)", desc: "Over 3,000 open-heart surgeries annually — largest volume cardiac centre in Southeast Asia" },
      "STEMI Programme": { rank: "National Model", desc: "24/7 primary PCI programme — model for Malaysia's national STEMI protocol" }
    },
    accreditations: ["MSQH Accredited", "MOH Cardiac Centre of Excellence"],
    verifiedNotes: "1,062 combined beds (hospital + SHC). Cardiac centre status confirmed. Largest cardiac surgical volume in SE Asia (MOH 2023 report).",
    notableGaps: "No liver transplant. No heart transplant.",
    primaryExcellence: "National cardiac referral — largest cardiac surgical volume in SE Asia",
    secondarySpecialties: "Neurosurgery, Oncology, Obstetrics",
    fullSpecialties: ["Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology", "Vascular Surgery"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No liver transplant. No heart transplant.",
    robotics: "Hybrid catheterisation labs. Intraoperative imaging. Advanced electrophysiology lab.",
    doctorQualifications: "MOH cardiac specialists — many fellowship-trained in UK, US, Australia cardiac centres.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hselayang",
    name: "Hospital Selayang",
    nameShort: "Hospital Selayang",
    sector: "public",
    tier: "quaternary",
    state: "Selangor",
    city: "Selayang",
    intro: "Hospital Selayang is Malaysia's ONLY liver transplant centre and a quaternary referral hospital of national importance. Beyond liver transplant, it is a comprehensive tertiary centre with 900 beds serving northern Selangor and as a national referral for hepatobiliary diseases.",
    famousFor: ["Malaysia's ONLY liver transplant centre", "National hepatobiliary and gastroenterology excellence centre", "Live donor liver transplant programme", "Paediatric liver transplant available"],
    infrastructure: {
      yearEstablished: 1997,
      totalBeds: 900,
      icuBeds: 50,
      nicuBeds: 14,
      operatingTheatres: 18,
      area: "~20 acres",
      buildings: "Main Clinical Block, Liver Transplant Unit, Specialist Block",
      helipad: true,
      parkingBays: "~600 bays",
      parkingRate: "20-min grace; RM2.00/hr; max/day: RM14.00; valet: RM14.00"
    },
    contact: {
      address: "Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
      mainLine: "+603-6126 3333",
      emergencyLine: "+603-6126 3333 ext. A&E",
      appointmentLine: "+603-6126 3333",
      website: "https://jknselangor.moh.gov.my/hselayang/",
      mapQuery: "Hospital Selayang Batu Caves Selangor"
    },
    transport: {
      nearest: "Batu Caves KTM Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Batu Caves area)",
      highway: "DUKE/MRR2 — Exit Selayang/Batu Caves",
      landmark: "Off Lebuhraya Selayang-Kepong, near Batu Caves"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor and Level 4, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HS-Guest)",
      patientTransport: "Hospital transport available"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "12:00–12:30, 17:30–18:00 (very restricted — liver ICU)",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "Liver transplant ICU is especially restricted. Family liaison officer assists."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU (Liver & General)", "NICU",
        "Liver Transplant (Adult & Paediatric, Living Donor & Deceased Donor)",
        "Hepatobiliary Surgery", "Gastroenterology & Hepatology",
        "Kidney Transplant", "Nephrology",
        "General Surgery", "Colorectal Surgery",
        "Cardiology", "Neurology", "Neurosurgery",
        "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics", "Paediatric Surgery",
        "Haematology", "Clinical Oncology",
        "Urology", "Respiratory Medicine",
        "Endocrinology", "Infectious Disease",
        "Psychiatry", "Dermatology", "ENT", "Ophthalmology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HKL or Serdang Heart Centre", note: "Refer to cardiac surgical centres" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN)", note: "IJN performs heart transplants" }
      ],
      byReferral: [
        "Complex cardiac surgery — refer to Serdang Heart Centre",
        "BMT — refer to UMMC"
      ]
    },
    transferPathway: {
      summary: "Hospital Selayang is the national destination for liver transplant. It refers out for heart surgery and complex cardiac cases.",
      routes: [
        { condition: "Cardiothoracic surgery", to: "Serdang Heart Centre or HKL", reason: "Cardiac surgical centres", distanceKm: 45 }
      ],
      howToTransfer: "Liver transplant referral via transplant coordinator. Call +603-6126 3333. Bring full hepatology workup and referral letter."
    },
    specialtyRanks: {
      "Liver Transplant": { rank: "National #1 — ONLY centre", desc: "Malaysia's only liver transplant centre — both adult and paediatric, living and deceased donor" },
      "Hepatobiliary Surgery": { rank: "National #1 (Public)", desc: "National centre for complex liver, bile duct, and pancreatic surgery" }
    },
    accreditations: ["MSQH Accredited", "MOH National Liver Transplant Centre Designation"],
    verifiedNotes: "900 beds. National liver transplant centre confirmed (sole centre in Malaysia as of 2025). Kidney transplant also available.",
    notableGaps: "No cardiothoracic surgery. No heart transplant.",
    primaryExcellence: "Malaysia's ONLY liver transplant centre — hepatobiliary national centre",
    secondarySpecialties: "Kidney Transplant, Gastroenterology, Haematology",
    fullSpecialties: ["Liver Transplant", "Kidney Transplant", "Hepatobiliary Surgery", "Gastroenterology"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available. For liver transplant — separate funding assessment.",
    fppScheme: true,
    fppDeposit: "RM 500–5,000 (transplant procedures — higher deposit)",
    gaps: "No cardiothoracic surgery. No heart transplant.",
    robotics: "Laparoscopic liver surgery systems. Advanced imaging for transplant.",
    doctorQualifications: "MOH hepatobiliary and transplant surgeons — many fellowship-trained overseas at top liver transplant centres.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hospital_Selayang_04.jpg",
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://jknselangor.moh.gov.my/hselayang/" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hshah-alam",
    name: "Hospital Shah Alam",
    nameShort: "Hospital Shah Alam",
    sector: "public",
    tier: "state",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Hospital Shah Alam is a modern public hospital serving Selangor's state capital and largest city. It provides comprehensive secondary and tertiary services for the growing Shah Alam and Petaling Jaya population.",
    famousFor: ["Main public hospital for Selangor's state capital Shah Alam", "Modern purpose-built facility", "Comprehensive state hospital services"],
    infrastructure: {
      yearEstablished: 2009,
      totalBeds: 400,
      icuBeds: 24,
      nicuBeds: 10,
      operatingTheatres: 10,
      area: "~10 acres",
      buildings: "Main Clinical Tower, Specialist Block",
      helipad: true,
      parkingBays: "~400 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Persiaran Kayangan, Section 7, 40000 Shah Alam, Selangor",
      mainLine: "+603-5526 3000",
      emergencyLine: "+603-5526 3000 ext. A&E",
      appointmentLine: "+603-5526 3000",
      website: "https://jknselangor.moh.gov.my/hsas/",
      mapQuery: "Hospital Shah Alam Section 7"
    },
    transport: { nearest: "Shah Alam KTM Komuter Station — 15 min taxi", bus: "Rapid KL Bus routes (Shah Alam)", highway: "KESAS/NKVE — Exit Shah Alam", landmark: "Section 7 Shah Alam, near Stadium Shah Alam" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Main lobby", surau: "Multiple floors", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free (HSA-Guest)", patientTransport: "Hospital transport available" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "11:30–12:00, 17:30–18:00", paediatric: "Parents: unrestricted", maternity: "Partner: unrestricted", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Surgery", "Cardiology", "Neurology",
        "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Gastroenterology", "Nephrology",
        "Respiratory Medicine", "Endocrinology",
        "Psychiatry", "Dermatology", "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR or Serdang Heart Centre", note: "Refer to cardiac surgical centres" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre" }
      ],
      byReferral: ["Complex oncology — refer to HKL or UMMC"]
    },
    transferPathway: { summary: "State hospital. Complex cases refer to Serdang Heart Centre, HKL, or UMMC.", routes: [], howToTransfer: "MOH inter-hospital referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "400 beds. Modern public hospital for Shah Alam.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Public state hospital for Shah Alam / Selangor state capital",
    secondarySpecialties: "Cardiology, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging.",
    doctorQualifications: "MOH specialists — MMC-registered.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "hampang",
    name: "Hospital Ampang",
    nameShort: "Hospital Ampang",
    sector: "public",
    tier: "tertiary",
    state: "Selangor",
    city: "Ampang",
    intro: "Hospital Ampang is a nationally important public hospital, recognized as Malaysia's national haematology and oncology centre. It is the primary public referral centre for leukaemia, lymphoma, blood disorders, and bone marrow transplants.",
    famousFor: ["National Haematology Centre for Malaysia", "Bone Marrow Transplant (BMT) programme", "Leukaemia, lymphoma, and blood disorder specialist", "Paediatric haematology & oncology"],
    infrastructure: {
      yearEstablished: 1966,
      totalBeds: 400,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 8,
      area: "~10 acres",
      buildings: "Main Block, Haematology Block, BMT Unit",
      helipad: false,
      parkingBays: "~300 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Mewah Utara, Pandan Mewah, 68000 Ampang, Selangor",
      mainLine: "+603-4289 6000",
      emergencyLine: "+603-4289 6000 ext. A&E",
      appointmentLine: "+603-4289 6000",
      website: "https://jknselangor.moh.gov.my/hampg/",
      mapQuery: "Hospital Ampang Selangor Pandan Mewah"
    },
    transport: { nearest: "No direct rail to hospital; nearest: Ampang LRT (AG33, Ampang Line) — 2 km, taxi/bus recommended; bus routes T305, T350 stop ~5 min walk from hospital", bus: "Rapid KL Bus routes T305, T350 (Ampang area)", highway: "AKLEH — Exit Ampang", landmark: "Pandan Mewah, Ampang, Selangor" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Main lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Hospital transport available" },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Standard hours",
      notes: "BMT ward — strict infection control. Visiting may be heavily restricted for immunocompromised patients."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "Haematology (National Centre)", "Bone Marrow Transplant (BMT)",
        "Clinical Oncology", "Paediatric Haematology/Oncology",
        "General Medicine", "General Surgery",
        "Cardiology", "Nephrology", "Gastroenterology",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Psychiatry", "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Serdang Heart Centre or HTAR", note: "Refer to cardiac surgical centre" }
      ],
      byReferral: ["Complex radiation oncology — refer to HKL"]
    },
    transferPathway: { summary: "National haematology centre. Complex non-haematology cases referred to other state hospitals.", routes: [], howToTransfer: "MOH inter-hospital referral." },
    specialtyRanks: {
      "Haematology": { rank: "National #1 Public (Haematology)", desc: "Malaysia's primary national haematology and bone marrow transplant centre" }
    },
    accreditations: ["MSQH Accredited", "MOH National Haematology Centre"],
    verifiedNotes: "National haematology centre confirmed. BMT programme active.",
    notableGaps: "No liver transplant. No cardiothoracic surgery.",
    primaryExcellence: "National Haematology Centre — BMT, leukaemia, blood disorders",
    secondarySpecialties: "Oncology, Paediatric Oncology",
    fullSpecialties: ["Haematology", "BMT", "Oncology", "Paediatric Oncology"],
    roomRate: "RM 3 – RM 80",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No liver transplant. No cardiothoracic surgery.",
    robotics: "BMT unit equipment. Standard imaging.",
    doctorQualifications: "MOH haematology and oncology specialists — many fellowship-trained.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "hkajang",
    name: "Hospital Tengku Permaisuri Norashikin (HTPN)",
    nameShort: "Hospital HTPN",
    sector: "public",
    tier: "state",
    state: "Selangor",
    city: "Kajang",
    intro: "Hospital Kajang is the main public hospital for the Kajang and Nilai corridor, serving a rapidly growing population in southern Selangor. It provides comprehensive secondary care services.",
    famousFor: ["Main public hospital for Kajang / southern Selangor", "Serves the Kajang-Nilai growth corridor"],
    infrastructure: { yearEstablished: 1966, totalBeds: 400, icuBeds: 20, nicuBeds: 8, operatingTheatres: 8, area: "~10 acres", buildings: "Main Block, Specialist Clinics", helipad: false, parkingBays: "~300 bays", parkingRate: "RM 1/hour" },
    contact: { address: "4 Jalan Semenyih, 43000 Kajang, Selangor", mainLine: "+603-8913 3333", emergencyLine: "+603-8913 3333 ext. A&E", appointmentLine: "+603-8913 3333", website: "https://jknselangor.moh.gov.my/htpn/", mapQuery: "Hospital Tengku Permaisuri Norashikin HTPN Kajang Selangor" },
    transport: { nearest: "Kajang MRT/KTM Station — 10 min taxi", bus: "Rapid KL Bus routes (Kajang)", highway: "SILK — Exit Kajang", landmark: "Kajang town centre" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Main lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Limited" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Partner: unrestricted", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "NICU", "General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "Serdang Heart Centre", note: "Refer to cardiac centre" }],
      byReferral: ["Complex cases — refer to Serdang or HKL"]
    },
    transferPathway: { summary: "Secondary care hospital. Complex cases refer to Serdang or HKL.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "400 beds. Public hospital for Kajang.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Public secondary hospital — Kajang / southern Selangor",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80",
    roomRateRaw: 5,
    insurance: "Heavily subsidised.",
    fppScheme: true,
    fppDeposit: "RM 500–1,500",
    gaps: "No cardiothoracic surgery. Limited subspecialties.",
    robotics: "Standard imaging.",
    doctorQualifications: "MOH specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "hbanting",
    name: "Hospital Banting",
    nameShort: "Hospital Banting",
    sector: "public",
    tier: "district",
    state: "Selangor",
    city: "Banting",
    intro: "Hospital Banting serves the Kuala Langat district in southwest Selangor, providing basic inpatient and emergency services for the district population.",
    famousFor: ["District hospital for Kuala Langat / Banting area"],
    infrastructure: { yearEstablished: 1975, totalBeds: 200, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~5 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "Free" },
    contact: { address: "Jalan Sultan Alam Shah, 42700 Banting, Selangor", mainLine: "+603-3187 1333", emergencyLine: "+603-3187 1333 ext. A&E", appointmentLine: "+603-3187 1333", website: "https://jknselangor.moh.gov.my/hbanting/", mapQuery: "Hospital Banting Selangor" },
    transport: { nearest: "Banting town — accessible by road from Kuala Lumpur via Coastal Highway", bus: "Limited public transport", highway: "Federal Route 5 / Coastal Highway", landmark: "Banting town centre" },
    facilities: { pharmacy24h: false, cafeteria: "Available daytime", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "Limited" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU (basic)", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics (basic)"],
      notAvailable: [{ specialty: "Most specialties", transferTo: "HTAR Klang or HKL", note: "District hospital — limited specialist services" }],
      byReferral: ["Most specialties — refer to HTAR Klang"]
    },
    transferPathway: { summary: "District hospital. Most complex cases referred to HTAR Klang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "200 beds. District hospital for Kuala Langat.",
    notableGaps: "Limited specialist services. District-level care only.",
    primaryExcellence: "District hospital — Kuala Langat / Banting",
    secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "RM 3 – RM 30",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Very limited specialist range. District level only.",
    robotics: "Basic imaging.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "sunway-mc",
    name: "Sunway Medical Centre (SMC)",
    nameShort: "Sunway Medical",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "Sunway Medical Centre is one of Malaysia's largest and most advanced private hospitals, located in Sunway City. With 1,100 beds, it is the largest private hospital by bed count in Malaysia and offers comprehensive tertiary and quaternary services.",
    famousFor: ["Malaysia's largest private hospital (1,100 beds)", "Comprehensive cardiothoracic and cancer programme", "Strong paediatric and NICU services", "Gamma Knife radiosurgery available"],
    infrastructure: {
      yearEstablished: 1999,
      totalBeds: 1100,
      icuBeds: 80,
      nicuBeds: 25,
      operatingTheatres: 24,
      area: "~8 acres",
      buildings: "Tower A, Tower B, Specialist Clinics, Sunway Cancer Centre",
      helipad: true,
      parkingBays: "~1,000 bays",
      parkingRate: "10-min grace; 1st 3 hrs: RM3.00; 4th–5th hr: RM1.00/hr; 6th hr onwards: RM3.00/hr; max/day: RM16.00; valet: RM25.00"
    },
    contact: {
      address: "No. 5, Jalan Lagoon Selatan, Bandar Sunway, 47500 Petaling Jaya, Selangor",
      mainLine: "+603-7491 9191",
      emergencyLine: "+603-5566 8888",
      appointmentLine: "+603-7491 9191",
      website: "https://www.sunwaymedical.com",
      mapQuery: "Sunway Medical Centre Subang Jaya Bandar Sunway"
    },
    transport: { nearest: "SunMed BRT Station (BRT Sunway Line) — 2 min walk, station is directly adjacent to hospital entrance; Setia Jaya KTM Komuter — 15 min by BRT then walk", bus: "BRT Sunway Line (frequent, RM1 or free within Sunway)", highway: "NPE/LDP — Exit Sunway/Subang Jaya", landmark: "Sunway City, next to Sunway Pyramid Mall" },
    facilities: { pharmacy24h: true, cafeteria: "Multiple F&B outlets, 7am–10pm", atm: "Main lobby (multiple banks)", surau: "Multiple floors", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi throughout", patientTransport: "Medical transport and international patient services" },
    visitingHours: { general: "11:00–21:00 (private rooms flexible)", icu: "Restricted — check with nurse", paediatric: "Parents: unrestricted", maternity: "Partner/family: flexible", notes: "Private hospital — flexible visiting." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU/NICU/PICU",
        "Cardiology", "Cardiothoracic Surgery", "Interventional Cardiology",
        "Neurology", "Neurosurgery", "Gamma Knife Radiosurgery",
        "Clinical Oncology", "Radiation Oncology", "Surgical Oncology",
        "Haematology", "Paediatric Oncology",
        "Orthopaedic Surgery", "Spine Surgery", "Joint Replacement", "Sports Medicine",
        "Gastroenterology", "Hepatobiliary Surgery", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine", "Fertility/IVF",
        "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology",
        "Urology", "Nephrology", "Kidney Transplant",
        "ENT", "Ophthalmology", "Dermatology",
        "Endocrinology", "Rheumatology", "Psychiatry",
        "Interventional Radiology", "PET-CT", "Nuclear Medicine",
        "Rehabilitation Medicine", "Vascular Surgery"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only in Malaysia" }
      ],
      byReferral: [
        "Proton therapy — overseas referral via Sunway international team"
      ]
    },
    transferPathway: { summary: "Comprehensive private hospital — few referrals needed. Liver transplant to Selayang.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {
      "Private Hospital Size": { rank: "Largest private hospital Malaysia (1,100 beds)", desc: "Largest private hospital by bed count in Malaysia" }
    },
    accreditations: ["MSQH Accredited", "JCI Accredited"],
    verifiedNotes: "1,100 beds (largest private hospital in Malaysia). JCI accreditation confirmed. Gamma Knife available.",
    notableGaps: "No liver transplant.",
    primaryExcellence: "Malaysia's largest private hospital — comprehensive tertiary/quaternary care",
    secondarySpecialties: "Cardiology, Oncology, Neurosurgery, Gamma Knife, IVF",
    fullSpecialties: ["Cardiology", "Oncology", "Neurosurgery", "Gamma Knife", "Orthopaedics", "IVF"],
    roomRate: "RM 200 – RM 800+/night",
    roomRateRaw: 400,
    insurance: "Accepts most major Malaysian and international insurance. JCI — preferred by corporate clients.",
    fppScheme: false,
    fppDeposit: "N/A (deposit RM 3,000–15,000)",
    gaps: "Premium pricing. No liver transplant.",
    robotics: "Gamma Knife Radiosurgery. Da Vinci Robotic Surgery. PET-CT. 3T MRI. Hybrid cath lab.",
    doctorQualifications: "MMC-registered specialists with higher qualifications. Many internationally trained.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sunway_Medical_Centre_(220711)_01.jpg",
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.sunwaymedical.com" }]
  },
  {
    id: "sjmc",
    name: "Subang Jaya Medical Centre (SJMC)",
    nameShort: "SJMC",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Subang Jaya",
    intro: "Subang Jaya Medical Centre (SJMC) is a longstanding and highly reputed private hospital in the heart of Subang Jaya, offering comprehensive specialist services. Part of the Ramsay Sime Darby Health Care group, it is a preferred choice for KL Selatan and Subang Jaya residents.",
    famousFor: ["Trusted private hospital in Subang Jaya since 1996", "Strong cardiology and oncology programme", "Wide insurance panel acceptance", "Ramsay Sime Darby group"],
    infrastructure: {
      yearEstablished: 1996,
      totalBeds: 440,
      icuBeds: 36,
      nicuBeds: 12,
      operatingTheatres: 14,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~400 bays",
      parkingRate: "1st hr: RM2.00; subsequent hrs: RM1.00; max/day: RM10.00; Sun/PH: flat RM3.00"
    },
    contact: {
      address: "No. 1, Jalan SS 12/1A, 47500 Subang Jaya, Selangor",
      mainLine: "+603-5639 1212",
      emergencyLine: "019-9000 330",
      appointmentLine: "+603-5639 1212",
      website: "https://subangjayamedicalcentre.com",
      mapQuery: "Subang Jaya Medical Centre SJMC SS12"
    },
    transport: { nearest: "Subang Jaya KTM Station — 10 min walk", bus: "Rapid KL Bus routes (Subang Jaya SS12)", highway: "NPE/Federal Highway — Exit Subang Jaya", landmark: "SS12 Subang Jaya, near Subang Jaya KTM" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor, 7am–9pm", atm: "Main lobby", surau: "Level 2", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Medical transport available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted — check with nurse", paediatric: "Parents: unrestricted", maternity: "Partner: flexible", notes: "Private hospital — flexible visiting." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Clinical Oncology", "Surgical Oncology", "Radiation Oncology",
        "Gastroenterology", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Urology", "Nephrology", "ENT", "Ophthalmology",
        "Endocrinology", "Rheumatology", "Dermatology",
        "Interventional Radiology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" },
        { specialty: "Gamma Knife", transferTo: "Sunway Medical or Gleneagles KL", note: "Refer to centres with Gamma Knife" }
      ],
      byReferral: ["Proton therapy — overseas"]
    },
    transferPathway: { summary: "Comprehensive private hospital. Complex transplant cases refer to national centres.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Ramsay Sime Darby Group"],
    verifiedNotes: "440 beds. Ramsay Sime Darby group.",
    notableGaps: "No liver transplant. No Gamma Knife.",
    primaryExcellence: "Trusted private hospital — Subang Jaya / PJ south",
    secondarySpecialties: "Cardiology, Oncology, Neurosurgery",
    fullSpecialties: ["Cardiology", "Oncology", "Neurology", "Orthopaedics", "Obstetrics"],
    roomRate: "RM 200 – RM 700+/night",
    roomRateRaw: 350,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No Gamma Knife.",
    robotics: "Radiation therapy. Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.rsdh.com.my/sjmc" }]
  },
  {
    id: "kpj-damansara",
    name: "KPJ Damansara Specialist Hospital",
    nameShort: "KPJ Damansara",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "KPJ Damansara Specialist Hospital is one of KPJ Healthcare's flagship hospitals, offering comprehensive specialist services in Petaling Jaya. It is a trusted choice for the Damansara and Petaling Jaya community.",
    famousFor: ["KPJ Healthcare flagship — Damansara/PJ corridor", "Comprehensive specialist services", "Strong obstetrics and paediatrics programme"],
    infrastructure: { yearEstablished: 1995, totalBeds: 300, icuBeds: 24, nicuBeds: 8, operatingTheatres: 10, area: "~3 acres", buildings: "Main Tower, Specialist Clinics", helipad: false, parkingBays: "~350 bays", parkingRate: "1st 2 hrs: RM3.00; subsequent hrs: RM1.00; max/day: RM5.00" },
    contact: { address: "119, Jalan SS 20/10, Damansara Utama, 47400 Petaling Jaya, Selangor", mainLine: "+603-7718 1000", emergencyLine: "+603-7718 1112", appointmentLine: "+603-7718 1000", website: "https://kpjhealth.com.my/damansara", mapQuery: "KPJ Damansara Specialist Hospital Petaling Jaya" },
    transport: { nearest: "TTDI MRT Station (Putrajaya Line) — 7-min walk (~478 m); also Mutiara Damansara MRT — 15-min walk", bus: "Rapid KL T786, T813, T814, 780 (bus stop: Glo Damansara, 2-min walk)", highway: "NKVE — Exit Damansara Utama / Mutiara Damansara; LDP accessible", landmark: "Damansara Utama, PJ — near Glo Damansara Mall, SS20" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Medical transport available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Private hospital — flexible." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU", "Cardiology", "General Surgery", "Neurology", "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics", "Gastroenterology", "Oncology (selected)", "ENT", "Ophthalmology", "Urology", "Dermatology", "Rehabilitation"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or Gleneagles KL", note: "Refer to larger tertiary centre" }],
      byReferral: ["Complex oncology — refer to Beacon or Sunway"]
    },
    transferPathway: { summary: "Community private hospital. Complex cases to Sunway Medical or Gleneagles KL.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "300 beds. KPJ Healthcare group.",
    notableGaps: "No cardiothoracic surgery on site.",
    primaryExcellence: "KPJ private hospital — Damansara/PJ corridor",
    secondarySpecialties: "Obstetrics, Paediatrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 550+/night",
    roomRateRaw: 300,
    insurance: "Accepts major Malaysian insurance. KPJ group panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.kpjdamansara.com" }]
  },
  {
    id: "kpj-klang",
    name: "KPJ Klang Specialist Hospital",
    nameShort: "KPJ Klang",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Klang",
    intro: "KPJ Klang Specialist Hospital provides private specialist care for the Klang community, serving as an alternative to the busy public Hospital HTAR Klang.",
    famousFor: ["Private specialist care in Klang", "KPJ Healthcare group"],
    infrastructure: { yearEstablished: 2000, totalBeds: 150, icuBeds: 12, nicuBeds: 4, operatingTheatres: 6, area: "~2 acres", buildings: "Main Building", helipad: false, parkingBays: "~200 bays", parkingRate: "RM 2/hour" },
    contact: { address: "No. 102, Persiaran Rajawali/KU1, Bandar Baru Klang, 41150 Klang, Selangor", mainLine: "+603-3377 7888", emergencyLine: "+603-3377 7999", appointmentLine: "+603-3377 7888", website: "https://kpjhealth.com.my/klang/", mapQuery: "KPJ Klang Specialist Hospital Bandar Baru Klang" },
    transport: { nearest: "Padang Jawa KTM Station (Port Klang Line) — ~28-min walk / 2.3 km; Grab/taxi recommended", bus: "Rapid KL 708, 710, P701, 753 (Klang area)", highway: "Federal Highway (Route 2), KESAS, ELITE — Exit Bandar Baru Klang / KU1", landmark: "Bandar Baru Klang; near Aeon Bukit Tinggi (~2 km)" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Private hospital." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics", "Orthopaedics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to larger centre" }],
      byReferral: ["Complex cases — refer to larger tertiary centres"]
    },
    transferPathway: { summary: "Community private hospital in Klang.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "150 beds. KPJ group hospital in Klang.",
    notableGaps: "No cardiothoracic surgery. Limited specialist range.",
    primaryExcellence: "Private specialist care — Klang",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 250,
    insurance: "KPJ group insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited specialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://kpjhealth.com.my/klang/" }]
  },
  {
    id: "thomson-thkd",
    name: "Thomson Hospital Kota Damansara (THKD)",
    nameShort: "THKD",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Kota Damansara",
    intro: "Thomson Hospital Kota Damansara (THKD), formerly Tropicana Medical Centre, is a large modern private hospital in Kota Damansara serving the northern Klang Valley. Rebranded under Thomson Medical Group (Singapore) in 2018, it has 559 beds and is one of the largest private hospitals in Malaysia.",
    famousFor: ["Formerly Tropicana Medical Centre — rebranded to THKD in 2018", "Thomson Medical Group (Singapore) flagship Malaysian hospital", "559 beds — one of the largest private hospitals in Malaysia", "Strong obstetrics, paediatrics and cardiology"],
    infrastructure: {
      yearEstablished: 2013,
      totalBeds: 559,
      icuBeds: 45,
      nicuBeds: 18,
      operatingTheatres: 18,
      area: "~5 acres",
      buildings: "Main Tower, Specialist Clinics, Maternity Block",
      helipad: false,
      parkingBays: "~600 bays",
      parkingRate: "1st 3 hrs: RM6.00; subsequent hrs: RM3.00; max/day: RM20.00"
    },
    contact: {
      address: "No. 11, Jalan Teknologi, PJU 5, Kota Damansara, 47810 Petaling Jaya, Selangor",
      mainLine: "+603-6287 1111",
      emergencyLine: "+603-6287 1999",
      appointmentLine: "+603-6287 1111",
      website: "https://www.thomsonhospitals.com",
      mapQuery: "Thomson Hospital Kota Damansara THKD Selangor"
    },
    transport: { nearest: "Kota Damansara MRT Station (Putrajaya Line) — 4-min walk / 241 m (station is directly in front of hospital entrance)", bus: "Rapid KL T805, 780, 802; MRT feeder buses from Kota Damansara station", highway: "NKVE — Exit Kota Damansara / Persiaran Surian; LDP accessible", landmark: "Kota Damansara, directly adjacent to Kota Damansara MRT station" },
    facilities: { pharmacy24h: true, cafeteria: "Level G and Level 4 food court, 7am–10pm", atm: "Main lobby", surau: "Level 2, 4", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Medical transport available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted — check with nurse", paediatric: "Parents: unrestricted", maternity: "Partner/family: flexible", notes: "Private hospital — flexible." },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU/NICU/PICU",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedics", "Spine Surgery", "Joint Replacement",
        "Clinical Oncology", "Surgical Oncology", "Radiation Oncology",
        "Gastroenterology", "Colorectal Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine", "Fertility/IVF",
        "Paediatrics", "Paediatric Surgery",
        "Urology", "Nephrology", "ENT", "Ophthalmology",
        "Endocrinology", "Dermatology", "Rheumatology",
        "Interventional Radiology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre" },
        { specialty: "Gamma Knife", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to gamma knife centres" }
      ],
      byReferral: ["Complex haematology/BMT — refer to Sunway or UMMC"]
    },
    transferPathway: { summary: "Comprehensive private hospital. Complex transplant cases referred.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Thomson Medical Group"],
    verifiedNotes: "559 beds confirmed. Part of Thomson Medical Group (Singapore).",
    notableGaps: "No liver transplant. No Gamma Knife.",
    primaryExcellence: "Large private hospital — northern KL / Kota Damansara",
    secondarySpecialties: "Cardiology, Oncology, Obstetrics, Paediatrics",
    fullSpecialties: ["Cardiology", "Oncology", "Obstetrics", "Paediatrics", "Neurosurgery"],
    roomRate: "RM 200 – RM 700+/night",
    roomRateRaw: 380,
    insurance: "Accepts major Malaysian insurance. Thomson group panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No Gamma Knife.",
    robotics: "Radiation therapy. Standard imaging — 3T MRI, CT. Da Vinci robotic surgery.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hospital_Thomson_Kota_Damansara.jpg",
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.thomsonhospital.com" }]
  },
  {
    id: "columbia-bukit-rimau",
    name: "Columbia Asia Hospital Bukit Rimau Shah Alam",
    nameShort: "Columbia Asia Shah Alam",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Columbia Asia Hospital Bukit Rimau serves the Shah Alam and Klang corridor with affordable private specialist care as part of the Columbia Asia group.",
    famousFor: ["Affordable private care for Shah Alam / Klang corridor"],
    infrastructure: { yearEstablished: 2009, totalBeds: 100, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~2 acres", buildings: "Main Building", helipad: false, parkingBays: "~150 bays", parkingRate: "RM 1.50/hour" },
    contact: { address: "No. 3, Persiaran Anggerik Eria, Bukit Rimau, Seksyen 32, 40460 Shah Alam, Selangor", mainLine: "+603-5125 9999", emergencyLine: "+603-5125 9999", appointmentLine: "+603-5125 9999", website: "https://www.columbiaasia.com/malaysia/hospitals/bukit-rimau/", mapQuery: "Columbia Asia Hospital Bukit Rimau Shah Alam Seksyen 32" },
    transport: { nearest: "No MRT/LRT nearby; nearest transit: Shah Alam KTM (~8 km); Grab/taxi recommended", bus: "Rapid KL SA06, T756 (bus stop: Chinese Taipei School, ~4-min walk)", highway: "KESAS — Exit Bukit Rimau / Seksyen 32; also accessible from Federal Highway via USJ", landmark: "Bukit Rimau / Seksyen 32, Shah Alam; near Kota Kemuning" },
    facilities: { pharmacy24h: false, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Limited" },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics", "Orthopaedics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to larger centre" }],
      byReferral: ["Complex cases — refer to larger centres"]
    },
    transferPathway: { summary: "Community private hospital.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Columbia Asia Group"],
    verifiedNotes: "100 beds. Columbia Asia group hospital in Shah Alam.",
    notableGaps: "Small hospital. Limited specialist range.",
    primaryExcellence: "Affordable private care — Shah Alam west",
    secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "RM 120 – RM 350+/night",
    roomRateRaw: 180,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited specialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.columbiaasia.com/malaysia/hospitals/bukit-rimau/" }]
  },
  {
    id: "ara-damansara",
    name: "Ara Damansara Medical Centre",
    nameShort: "Ara Damansara MC",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Ara Damansara Medical Centre is a modern private hospital in the Ara Damansara area, offering comprehensive specialist services for the upscale Ara Damansara, Subang, and Petaling Jaya north communities.",
    famousFor: ["Modern private hospital in Ara Damansara / Subang area", "Growing specialist services"],
    infrastructure: { yearEstablished: 2015, totalBeds: 200, icuBeds: 16, nicuBeds: 6, operatingTheatres: 8, area: "~2 acres", buildings: "Main Tower", helipad: false, parkingBays: "~250 bays", parkingRate: "1st hr: RM2.00; subsequent 30 min: RM1.00" },
    contact: { address: "Lot 2, Jalan Lapangan Terbang Subang, Seksyen U2, 40150 Shah Alam, Selangor", mainLine: "+603-5639 1888", emergencyLine: "+603-7839 9210", appointmentLine: "+603-5639 1888", website: "https://aradamansaramedicalcentre.com", mapQuery: "Ara Damansara Medical Centre Jalan Lapangan Terbang Subang Shah Alam" },
    transport: { nearest: "Ara Damansara LRT Station (Kelana Jaya Line) — ~1 km / 12-min walk; Glenmarie LRT Station — ~1.5 km", bus: "Rapid KL 772, T782 (bus stop: Bulatan Subang Airport area)", highway: "NKVE — Exit Subang Airport / Ara Damansara; also accessible via LDP", landmark: "Opposite Oasis Ara Damansara Mall; near Sultan Abdul Aziz Shah (Subang) Airport" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Private hospital — flexible." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU", "Cardiology", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Gastroenterology", "Neurology", "ENT", "Ophthalmology", "Oncology (selected)", "Urology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to larger centre" }],
      byReferral: ["Complex oncology — refer to Beacon or Sunway"]
    },
    transferPathway: { summary: "Community private hospital.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "200 beds. Private hospital in Ara Damansara.",
    notableGaps: "No cardiothoracic surgery on site.",
    primaryExcellence: "Private specialist care — Ara Damansara / PJ north",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 550+/night",
    roomRateRaw: 280,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://www.aradamansara.com.my" }]
  },
  {
    id: "assunta-hospital",
    name: "Assunta Hospital",
    nameShort: "Assunta",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "Assunta Hospital is one of Petaling Jaya's oldest and most trusted private hospitals, founded by the Franciscan Missionaries of Mary (FMM). Known for its compassionate care tradition, it offers comprehensive specialist services for the PJ and Klang Valley community.",
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
      parkingRate: "1st hr: RM3.00; 2nd hr: RM2.00; subsequent hrs: RM1.00; max: RM8.00"
    },
    contact: {
      address: "Jalan Templer, 46990 Petaling Jaya, Selangor",
      mainLine: "+603-7872 3000",
      emergencyLine: "+603-7872 3199",
      appointmentLine: "+603-7872 3000",
      website: "https://assunta.com.my",
      mapQuery: "Assunta Hospital Petaling Jaya Jalan Templer"
    },
    transport: {
      nearest: "Asia Jaya LRT Station (Kelana Jaya Line) — 6-min walk / ~444 m",
      bus: "Rapid KL 780, 782, PJ01, T640 (bus stop: Kompleks Arena PJ, 3-min walk)",
      highway: "Federal Highway — Exit Jalan Templer / Jalan Timur interchange (~300 m north of Federal Highway)",
      landmark: "Jalan Templer, Petaling Jaya — near Asia Jaya LRT station"
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
    verifiedNotes: "240 beds. One of PJ's oldest private hospitals. FMM-founded. Located in Petaling Jaya, Selangor.",
    notableGaps: "No cardiothoracic surgery. Limited complex oncology.",
    primaryExcellence: "Trusted community private hospital — Petaling Jaya, Selangor",
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
    officialSources: [{ label: "Official Website", url: "https://assunta.com.my" }]
  },
  {
    id: "kpj-ap",
    name: "KPJ Ampang Puteri Specialist Hospital",
    nameShort: "KPJ Ampang Puteri",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Ampang",
    intro: "KPJ Ampang Puteri Specialist Hospital is one of KPJ Healthcare's largest and most established flagship hospitals, providing comprehensive specialist services for the Ampang and greater KL east corridor.",
    famousFor: ["One of KPJ Healthcare's flagship hospitals", "Comprehensive specialist services for Ampang / KL east", "Strong obstetrics and oncology programme"],
    infrastructure: {
      yearEstablished: 1994,
      totalBeds: 242,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~350 bays",
      parkingRate: "1st hr: RM3.00; subsequent hrs: RM3.00; max/day: RM7.00; valet: RM15.00"
    },
    contact: {
      address: "1, Jalan Mamanda 9, Ampang Point, 68000 Ampang, Selangor",
      mainLine: "+603-4289 5000",
      emergencyLine: "+603-4270 7060",
      appointmentLine: "+603-4289 5000",
      website: "https://kpjhealth.com.my/ampang",
      mapQuery: "KPJ Ampang Puteri Specialist Hospital Ampang Selangor"
    },
    transport: {
      nearest: "Dato' Keramat LRT Station (Ampang/Sri Petaling Line) — 7-min walk",
      bus: "Rapid KL 300, 303, 253, T300, T301",
      highway: "AKLEH (Exit 1204 Ampang/MRR2), then via MRR2 to Ampang Point",
      landmark: "Ampang Point area; adjacent to Ampang Point Shopping Centre (~250 m)"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor",
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
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery", "Neurology",
        "Orthopaedics", "Spine Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Gastroenterology", "Oncology (selected)",
        "Urology", "Nephrology", "ENT", "Ophthalmology",
        "Endocrinology", "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to larger tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology — refer to Beacon or Gleneagles KL"]
    },
    transferPathway: {
      summary: "Comprehensive private hospital. Complex cardiac and transplant cases referred to specialist centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "242 beds. KPJ Healthcare flagship hospital in Ampang. One of the larger KPJ hospitals in Malaysia.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "KPJ flagship private hospital — Ampang / KL east",
    secondarySpecialties: "Cardiology, Obstetrics, Oncology, Paediatrics",
    fullSpecialties: ["Cardiology", "General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Oncology"],
    roomRate: "RM 180 – RM 600+/night",
    roomRateRaw: 320,
    insurance: "KPJ group insurance panels. Major Malaysian insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "",
    wikiLink: "https://en.wikipedia.org/wiki/KPJ_Ampang_Puteri_Specialist_Hospital",
    officialSources: [{ label: "Official Website", url: "https://kpjhealth.com.my/ampang" }]
  },
  {
    id: "huppm",
    name: "Hospital Sultan Abdul Aziz Shah UPM (HSAAS UPM)",
    nameShort: "HSAAS UPM",
    sector: "private",
    tier: "academic",
    state: "Selangor",
    city: "Serdang",
    intro: "Hospital Sultan Abdul Aziz Shah UPM (HSAAS UPM, formerly HPUPM) is the teaching hospital of Universiti Putra Malaysia, renamed on 28 February 2023. It combines academic medical education with specialist clinical care in Serdang, serving the surrounding community while conducting UPM-affiliated research.",
    famousFor: ["UPM teaching hospital — renamed HSAAS UPM (Feb 2023)", "Academic research hospital affiliated with UPM", "Good value academic specialist care in Serdang"],
    infrastructure: { yearEstablished: 2018, totalBeds: 300, icuBeds: 20, nicuBeds: 8, operatingTheatres: 10, area: "~5 acres (UPM campus)", buildings: "Teaching Hospital Tower", helipad: false, parkingBays: "~300 bays (UPM campus)", parkingRate: "RM 1/hour" },
    contact: { address: "Persiaran Mardi – UPM, 43400 Serdang, Selangor", mainLine: "+603-9769 5500", emergencyLine: "+603-9769 9580", appointmentLine: "+603-9769 5500", website: "https://hsaas.upm.edu.my", mapQuery: "Hospital Sultan Abdul Aziz Shah HSAAS UPM Serdang" },
    transport: { nearest: "UPM MRT Station (Putrajaya Line) — 15–19-min walk via campus; also Taman Equine MRT — ~15-min walk", bus: "Rapid KL SJ04, SJ05, T566, T567, T568 (MRT feeder buses from UPM MRT)", highway: "SILK Highway / MEX (Maju Expressway) — exit toward Serdang/UPM; Persiaran MARDI–UPM road into campus", landmark: "UPM Campus, Serdang" },
    facilities: { pharmacy24h: false, cafeteria: "UPM campus cafeteria nearby", atm: "Campus", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "UPM campus WiFi", patientTransport: "Limited" },
    visitingHours: { general: "11:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Academic hospital — confirm with ward." },
    specialtyCoverage: {
      available: ["General Medicine", "General Surgery", "Cardiology", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology", "Psychiatry"],
      notAvailable: [{ specialty: "Emergency A&E (24/7)", transferTo: "Hospital Sultan Idris Shah Serdang", note: "Limited emergency — refer to nearby public hospital" }],
      byReferral: ["Complex cases — refer to Hospital Serdang or UMMC"]
    },
    transferPathway: { summary: "Academic private hospital. Complex emergencies refer to Hospital Sultan Idris Shah Serdang nearby.", routes: [], howToTransfer: "Academic hospital referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "UPM Academic Affiliation"],
    verifiedNotes: "UPM teaching hospital in Serdang. Newer hospital — verify full service coverage.",
    notableGaps: "Newer hospital. Limited emergency capability.",
    primaryExcellence: "UPM academic teaching hospital — private specialist care",
    secondarySpecialties: "General Medicine, Obstetrics, Research",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 400+/night",
    roomRateRaw: 220,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Newer — verify specialist coverage. Limited emergency.",
    robotics: "Academic hospital — research imaging equipment.",
    doctorQualifications: "UPM professors and lecturers — MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "Official Website", url: "https://hsaas.upm.edu.my" }]
  },
  {
    id: "hkuala-selangor",
    name: "Hospital Kuala Selangor",
    nameShort: "Hospital Kuala Selangor",
    sector: "public", tier: "district", state: "Selangor", city: "Kuala Selangor",
    intro: "Hospital Kuala Selangor is a district hospital serving the coastal Kuala Selangor area northwest of Selangor.",
    famousFor: ["District hospital for Kuala Selangor"],
    infrastructure: { yearEstablished: 1970, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45000 Kuala Selangor, Selangor", mainLine: "+603-3289 2222 (verify)", emergencyLine: "+603-3289 2222 ext. A&E", appointmentLine: "+603-3289 2222 (verify)", website: "https://jknselangor.moh.gov.my/hkualasel/", mapQuery: "Hospital Kuala Selangor" },
    transport: { nearest: "Kuala Selangor town — 5 min walk", bus: "Bus from KL (~1.5 hrs)", highway: "LATAR Expressway / Route 5", landmark: "Kuala Selangor town centre" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)", "Paediatrics (basic)"],
      notAvailable: [{ specialty: "Specialist care", transferTo: "Hospital Tengku Ampuan Rahimah (HTAR)", note: "District hospital" }],
      byReferral: ["Specialist → HTAR Klang"]
    },
    transferPathway: { summary: "District hospital. Complex cases → HTAR Klang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kuala Selangor", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital.", notableGaps: "Specialist care → HTAR Klang."
  },
  {
    id: "hsabak-bernam",
    name: "Hospital Tengku Ampuan Jemaah (HTAJ)",
    nameShort: "HTAJ",
    sector: "public", tier: "district", state: "Selangor", city: "Sabak Bernam",
    intro: "Hospital Tengku Ampuan Jemaah (HTAJ) serves the northernmost district of Selangor (Sabak Bernam district) with basic district hospital services.",
    famousFor: ["District hospital for Sabak Bernam — northernmost Selangor"],
    infrastructure: { yearEstablished: 1968, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45300 Sabak Bernam, Selangor", mainLine: "+603-3228 2222 (verify)", emergencyLine: "+603-3228 2222 ext. A&E", appointmentLine: "+603-3228 2222 (verify)", website: "https://jknselangor.moh.gov.my/htaj/", mapQuery: "Hospital Tengku Ampuan Jemaah HTAJ Sabak Bernam Selangor" },
    transport: { nearest: "Sabak Bernam town — 5 min walk", bus: "Local bus routes", highway: "Via Route 5 coastal road", landmark: "Sabak Bernam town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Kuala Selangor / HTAR Klang", note: "District hospital" }],
      byReferral: ["Specialist → HTAR Klang"]
    },
    transferPathway: { summary: "Small district hospital. Refer to HTAR Klang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sabak Bernam", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://jknselangor.moh.gov.my/htaj/" }],
    verifiedNotes: "~60 beds (est.). Officially named Hospital Tengku Ampuan Jemaah (HTAJ).", notableGaps: "Refer to HTAR Klang."
  },
  {
    id: "htanjung-karang",
    name: "Hospital Tanjung Karang",
    nameShort: "Hospital Tanjung Karang",
    sector: "public", tier: "district", state: "Selangor", city: "Tanjung Karang",
    intro: "Hospital Tanjung Karang serves the Tanjung Karang area in the Kuala Selangor district of Selangor.",
    famousFor: ["District hospital for Tanjung Karang"],
    infrastructure: { yearEstablished: 1972, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45500 Tanjung Karang, Selangor", mainLine: "+603-3267 2222 (verify)", emergencyLine: "+603-3267 2222 ext. A&E", appointmentLine: "+603-3267 2222 (verify)", website: "https://jknselangor.moh.gov.my/htgkarang/", mapQuery: "Hospital Tanjung Karang Selangor" },
    transport: { nearest: "Tanjung Karang town — 5 min walk", bus: "Local bus", highway: "Via Route 54", landmark: "Tanjung Karang town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Kuala Selangor / HTAR Klang", note: "District hospital" }],
      byReferral: ["Specialist → HTAR Klang"]
    },
    transferPathway: { summary: "Small district hospital.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Tanjung Karang", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~60 beds (est.). District hospital.", notableGaps: "Refer to HTAR Klang."
  },
  {
    id: "hkuala-kubu-bharu",
    name: "Hospital Kuala Kubu Bharu",
    nameShort: "Hospital KKB",
    sector: "public", tier: "district", state: "Selangor", city: "Kuala Kubu Bharu",
    intro: "Hospital Kuala Kubu Bharu serves the Hulu Selangor district and gateway to Cameron Highlands from Selangor.",
    famousFor: ["District hospital for Hulu Selangor / KKB area"],
    infrastructure: { yearEstablished: 1968, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 44000 Kuala Kubu Bharu, Selangor", mainLine: "+603-6064 1333", emergencyLine: "+603-6064 1333", appointmentLine: "+603-6064 1333", website: "https://jknselangor.moh.gov.my/hkkb/", mapQuery: "Hospital Kuala Kubu Bharu Selangor" },
    transport: { nearest: "KKB town — 5 min walk", bus: "Bus from KL (~1 hr)", highway: "Route 1 / Karak Highway junction", landmark: "Kuala Kubu Bharu town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Selayang", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Selayang"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Selayang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kuala Kubu Bharu / Hulu Selangor", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://jknselangor.moh.gov.my/hkkb/" }],
    verifiedNotes: "150 beds, 7 wards. Established 1936. District hospital for Hulu Selangor.", notableGaps: "Specialist referral to Hospital Selayang."
  },
  {
    id: "sunway-mc-damansara",
    name: "Sunway Medical Centre Damansara (SMCD)",
    nameShort: "Sunway Damansara",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Kota Damansara, Petaling Jaya",
    intro: "Sunway Medical Centre Damansara (SMCD) is the fourth campus of the Sunway Healthcare Group, opened on 2 December 2024 in Kota Damansara (PJU 5), Petaling Jaya. With 345+ planned beds and 35 haemodialysis bays, it serves the Kota Damansara, Sri Damansara, and Kepong corridor within the Sunway integrated healthcare ecosystem.",
    famousFor: ["Fourth campus of Sunway Healthcare Group — opened Dec 2024", "35 haemodialysis bays; 60 specialist consultation suites", "Kota Damansara corridor — near Surian MRT", "24/7 A&E with direct ambulance line"],
    infrastructure: { yearEstablished: 2024, totalBeds: 345, icuBeds: 30, nicuBeds: 10, operatingTheatres: 8, area: "~4 acres", buildings: "Main Tower", helipad: false, parkingBays: "~600 bays", parkingRate: "10 min free; 1st 3 hrs: RM 3.00; subsequent hrs: RM 1.00; max/day: RM 10.00; valet: RM 15.00" },
    contact: { address: "No. 2, Jalan PJU 5/1a, Kota Damansara, PJU 5, 47810 Petaling Jaya, Selangor", mainLine: "+603-8966 9191", emergencyLine: "+603-8966 4153", appointmentLine: "+603-8966 9191", website: "https://www.sunwaymedicaldamansara.com.my", mapQuery: "Sunway Medical Centre Damansara SMCD Kota Damansara Petaling Jaya" },
    transport: { nearest: "Surian MRT (Kajang Line, KJ10) — ~450 m / ~6 min walk", bus: "RapidKL T805/T806 feeder from Kota Damansara MRT; bus routes along Persiaran Surian", highway: "SPRINT / Penchala Link — Kota Damansara exit; NKVE — Kota Damansara interchange", landmark: "Kota Damansara (PJU 5) — near Sunway Giza & Sunway Nexis" },
    facilities: { pharmacy24h: true, cafeteria: "F&B outlets", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Ambulance +603-8966 4153 / WhatsApp +6019-216 8825" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted — nurse discretion", paediatric: "Parents: unrestricted", maternity: "Partner: flexible", notes: "Private hospital — flexible visiting." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "NICU", "Haemodialysis (35 bays)", "General Medicine", "General Surgery", "Cardiology", "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics", "Gastroenterology", "Oncology", "ENT", "Ophthalmology", "Neurology", "Urology"],
      notAvailable: [{ specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }],
      byReferral: ["Complex cardiothoracic → Sunway Medical Centre (Subang Jaya main campus)", "Complex oncology → Sunway Medical or Beacon Hospital"]
    },
    transferPathway: { summary: "Tertiary private hospital. Complex subspecialty cases refer to Sunway Medical main campus (Subang Jaya) or national specialist centres.", routes: [], howToTransfer: "Specialist referral within Sunway Healthcare network." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "Sunway Healthcare Group"],
    primaryExcellence: "New-build private tertiary — Kota Damansara / PJU 5", secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics, Haemodialysis, Oncology",
    fullSpecialties: ["Cardiology", "Surgery", "Orthopaedics", "Oncology", "Obstetrics", "Paediatrics", "Gastroenterology", "Neurology", "Urology", "Haemodialysis"],
    roomRate: "RM 300–700/night", roomRateRaw: 450, insurance: "Accepts most major Malaysian and international insurance. Sunway Healthcare network panel.", fppScheme: false,
    gaps: "Newer campus (opened Dec 2024) — some complex subspecialties refer to Sunway Medical main campus.", robotics: "Selected surgical robotics.", doctorQualifications: "MMC-registered specialists; Sunway Healthcare Group credentialing.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Sunway Medical Centre Damansara", url: "https://www.sunwaymedicaldamansara.com.my" }],
    verifiedNotes: "345+ beds (156 licensed at opening Dec 2024). Fourth Sunway Healthcare campus. Kota Damansara PJU 5. Surian MRT ~450m.", notableGaps: "Newer campus — some complex subspecialties refer to Sunway Medical Subang Jaya main campus."
  },
  {
    id: "kpj-kajang",
    name: "KPJ Kajang Specialist Hospital",
    nameShort: "KPJ Kajang",
    sector: "private", tier: "secondary", state: "Selangor", city: "Kajang",
    intro: "KPJ Kajang Specialist Hospital is a private specialist hospital serving the Kajang and Hulu Langat district of Selangor.",
    famousFor: ["Private specialist hospital for Kajang district", "KPJ network hospital"],
    infrastructure: { yearEstablished: 2002, totalBeds: 160, icuBeds: 10, nicuBeds: 4, operatingTheatres: 5, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~250 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Batu 14, Jalan Cheras, 43000 Kajang, Selangor", mainLine: "+603-8769 2999", emergencyLine: "+603-8769 2999 ext. A&E", appointmentLine: "+603-8769 2999", website: "https://kpjhealth.com.my/kajang", mapQuery: "KPJ Kajang Specialist Hospital Jalan Cheras Kajang" },
    transport: { nearest: "Stadium Kajang MRT (Putrajaya Line) — 3–5-min walk / ~354 m; also Sungai Jernih MRT — ~390 m", bus: "Rapid KL 450, T450, T451, KJ01, T456, T457", highway: "LEKAS Highway (Kajang Selatan exit); SILK Highway; Jalan Cheras (Federal Route 1) at Batu 14", landmark: "Batu 14, Jalan Cheras, near Kajang town" },
    facilities: { pharmacy24h: false, cafeteria: "Café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Orthopaedics", "Obstetrics", "Paediatrics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic surgery", transferTo: "SJMC / Sunway Medical", note: "KPJ referral network" }],
      byReferral: ["Complex → SJMC or Sunway Medical Centre"]
    },
    transferPathway: { summary: "Private specialist. Complex → Sunway Medical or KPJ Damansara.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed", "MSQH Accredited"],
    primaryExcellence: "Private specialist — Kajang / Hulu Langat", secondarySpecialties: "General Medicine, Orthopaedics",
    fullSpecialties: ["General Medicine", "Surgery", "Orthopaedics", "Obstetrics"],
    roomRate: "RM 180–450/night", roomRateRaw: 250, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "No cardiothoracic on site.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://kpjhealth.com.my/kajang" }],
    verifiedNotes: "~160 beds (est.). Private specialist, Kajang. On Jalan Cheras (Batu 14), near Stadium Kajang MRT.", notableGaps: "Complex → SJMC or Sunway MC."
  },
  {
    id: "an-nur-specialist",
    name: "An-Nur Specialist Hospital",
    nameShort: "An-Nur Specialist",
    sector: "private", tier: "secondary", state: "Selangor", city: "Bangi",
    intro: "An-Nur Specialist Hospital is a private Islamic hospital based in Bangi, serving the Muslim-majority community of southern Selangor with shariah-compliant medical services.",
    famousFor: ["Islamic-oriented private specialist hospital", "Serves Bangi and Putrajaya corridor"],
    infrastructure: { yearEstablished: 2006, totalBeds: 120, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "15-min grace; 1st hr: RM2.50; subsequent hrs: RM1.50/hr; max/day: RM12.00; night: RM5.00 flat" },
    contact: { address: "Jalan Gerbang Wawasan 1, Seksyen 15, 43650 Bandar Baru Bangi, Selangor", mainLine: "+603-8923 5500", emergencyLine: "+603-8923 5500", appointmentLine: "+603-8923 5500", website: "http://annurspecialisthospital.migh.com.my", mapQuery: "An-Nur Specialist Hospital Bandar Baru Bangi Selangor" },
    transport: { nearest: "Bangi KTM station — 10 min taxi", bus: "Rapid KL bus", highway: "ELITE Highway / Kajang SILK", landmark: "Bandar Baru Bangi" },
    facilities: { pharmacy24h: false, cafeteria: "Halal café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Cardiothoracic surgery", transferTo: "Sunway Medical Centre", note: "Refer" }],
      byReferral: ["Complex → Sunway Medical or Hospital Kajang"]
    },
    transferPathway: { summary: "Private specialist in Bangi. Complex cases → Sunway Medical.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Islamic-oriented private specialist — Bangi", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180–400/night", roomRateRaw: 220, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "Limited subspecialties.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "http://annurspecialisthospital.migh.com.my" }],
    verifiedNotes: "~120 beds (est.). Private Islamic specialist hospital in Bandar Baru Bangi (Seksyen 15). Shariah-compliant.", notableGaps: "Complex cases → Sunway Medical."
  },
  {
    id: "hselesa-jaya",
    name: "Hospital Hulu Selangor",
    nameShort: "Hospital Hulu Selangor",
    sector: "public", tier: "district", state: "Selangor", city: "Serendah",
    intro: "Hospital Hulu Selangor (also referred to as Hospital Serendah) serves the Hulu Selangor district with district-level public healthcare.",
    famousFor: ["District hospital for Hulu Selangor district"],
    infrastructure: { yearEstablished: 1970, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, Serendah, 48200 Rawang, Selangor", mainLine: "+603-6064 2222 (verify)", emergencyLine: "+603-6064 2222 ext. A&E", appointmentLine: "+603-6064 2222 (verify)", website: "https://jknselangor.moh.gov.my/hserendah/", mapQuery: "Hospital Hulu Selangor Serendah" },
    transport: { nearest: "Serendah KTM station — 10 min walk", bus: "Bus from KL (~1 hr)", highway: "North-South Highway — Rawang/Serendah exit", landmark: "Serendah town, north of Rawang" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Selayang", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Selayang"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Selayang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Hulu Selangor", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://jknselangor.moh.gov.my/hkkb/" }],
    verifiedNotes: "150 beds, 7 wards. Established 1936. District hospital for Hulu Selangor.", notableGaps: "Specialist referral to Hospital Selayang."
  },
  {
    id: "columbia-puchong",
    name: "Columbia Asia Hospital Puchong",
    nameShort: "Columbia Asia Puchong",
    sector: "private", tier: "secondary", state: "Selangor", city: "Puchong",
    intro: "Columbia Asia Hospital Puchong is a private hospital serving the Puchong township in Selangor with specialist medical services.",
    famousFor: ["Private hospital in Puchong", "Columbia Asia network hospital"],
    infrastructure: { yearEstablished: 2012, totalBeds: 120, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Puchong, Selangor", mainLine: "+603-8067 3333 (verify)", emergencyLine: "+603-8067 3333 ext. A&E", appointmentLine: "+603-8067 3333 (verify)", website: "https://www.columbiaasia.com", mapQuery: "Columbia Asia Hospital Puchong Selangor" },
    transport: { nearest: "Puchong town — taxi recommended", bus: "RapidKL bus routes", highway: "LDP Highway / KESAS", landmark: "Puchong township" },
    facilities: { pharmacy24h: false, cafeteria: "Café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Cardiothoracic surgery", transferTo: "Sunway Medical Centre", note: "Refer" }],
      byReferral: ["Complex → Sunway Medical Centre"]
    },
    transferPathway: { summary: "Private hospital. Complex → Sunway Medical.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private hospital — Puchong", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180–400/night", roomRateRaw: 250, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "Limited subspecialties.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Columbia Asia", url: "https://www.columbiaasia.com" }],
    verifiedNotes: "~120 beds (est.). Private hospital, Puchong.", notableGaps: "Complex → Sunway Medical."
  },
  {
    id: "columbia-rawang",
    name: "Columbia Asia Hospital Rawang",
    nameShort: "Columbia Asia Rawang",
    sector: "private", tier: "secondary", state: "Selangor", city: "Rawang",
    intro: "Columbia Asia Hospital Rawang is a private hospital serving the Rawang township in northern Selangor, a fast-growing residential area.",
    famousFor: ["Private hospital — Rawang northern Selangor", "Columbia Asia network hospital"],
    infrastructure: { yearEstablished: 2014, totalBeds: 100, icuBeds: 6, nicuBeds: 3, operatingTheatres: 3, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Rawang, Selangor", mainLine: "+603-6092 3333 (verify)", emergencyLine: "+603-6092 3333 ext. A&E", appointmentLine: "+603-6092 3333 (verify)", website: "https://www.columbiaasia.com", mapQuery: "Columbia Asia Hospital Rawang Selangor" },
    transport: { nearest: "Rawang KTM station — 10 min taxi", bus: "Bus from KL (~40 min)", highway: "North-South Highway — Rawang exit", landmark: "Rawang town" },
    facilities: { pharmacy24h: false, cafeteria: "Café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Complex subspecialties", transferTo: "Hospital Selayang / Columbia Bukit Rimau", note: "Refer" }],
      byReferral: ["Complex → Hospital Selayang or Columbia Bukit Rimau"]
    },
    transferPathway: { summary: "Private hospital. Complex → Hospital Selayang.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private hospital — Rawang", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "RM 180–400/night", roomRateRaw: 250, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "Limited subspecialties.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Columbia Asia", url: "https://www.columbiaasia.com" }],
    verifiedNotes: "~100 beds (est.). Private hospital, Rawang.", notableGaps: "Complex → Hospital Selayang."
  },
  {
    id: "columbia-klang",
    name: "Columbia Asia Hospital Klang",
    nameShort: "Columbia Asia Klang",
    sector: "private", tier: "secondary", state: "Selangor", city: "Klang",
    intro: "Columbia Asia Hospital Klang provides private medical care for the Klang area and the large surrounding population near Port Klang.",
    famousFor: ["Private hospital — Klang / Port Klang area", "Columbia Asia network"],
    infrastructure: { yearEstablished: 2011, totalBeds: 110, icuBeds: 7, nicuBeds: 3, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Klang, Selangor", mainLine: "+603-3324 3999 (verify)", emergencyLine: "+603-3324 3999 ext. A&E", appointmentLine: "+603-3324 3999 (verify)", website: "https://www.columbiaasia.com", mapQuery: "Columbia Asia Hospital Klang" },
    transport: { nearest: "Klang KTM station — 10 min taxi", bus: "RapidKL bus", highway: "KESAS / Federal Highway", landmark: "Klang town / Port Klang area" },
    facilities: { pharmacy24h: false, cafeteria: "Café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Complex subspecialties", transferTo: "HTAR Klang / KPJ Klang", note: "Refer" }],
      byReferral: ["Complex → HTAR Klang or KPJ Klang"]
    },
    transferPathway: { summary: "Private hospital. Complex → HTAR Klang.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private hospital — Klang / Port Klang area", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180–400/night", roomRateRaw: 250, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "Limited subspecialties.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Columbia Asia", url: "https://www.columbiaasia.com" }],
    verifiedNotes: "~110 beds (est.). Private hospital, Klang.", notableGaps: "Complex → HTAR Klang."
  },
  {
    id: "hospital-cyberjaya",
    name: "Hospital Cyberjaya",
    nameShort: "Hospital Cyberjaya",
    sector: "public",
    tier: "district",
    state: "Selangor",
    city: "Cyberjaya",
    intro: "Hospital Cyberjaya is a modern MOH public hospital serving Cyberjaya and the Sepang district, opened to cater to the rapidly growing smart-city population of Cyberjaya and surrounding areas including Putrajaya's spillover catchment.",
    famousFor: ["Public hospital for Cyberjaya smart city", "Modern MOH district hospital", "Serves Cyberjaya-Sepang growth corridor"],
    infrastructure: {
      yearEstablished: 2015,
      totalBeds: 200,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~5 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: false,
      parkingBays: "~250 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Persiaran Rimba Permai, Cyber 8, 63000 Cyberjaya, Selangor",
      mainLine: "+603-8320 2222",
      emergencyLine: "+603-8320 2222 ext. A&E",
      appointmentLine: "+603-8320 2222",
      website: "https://jknselangor.moh.gov.my/hcyberjaya/",
      mapQuery: "Hospital Cyberjaya Selangor"
    },
    transport: {
      nearest: "Cyberjaya Utara MRT Station (Putrajaya Line, PY18) — 10 min taxi",
      bus: "Rapid KL Bus routes (Cyberjaya feeder buses)",
      highway: "ELITE Highway / Persiaran APEC — Cyberjaya exit",
      landmark: "Cyber 8, Cyberjaya — near Multimedia University"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, daytime hours",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (MOH-Guest)",
      patientTransport: "MOH ambulance"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU (basic)", "General Medicine",
        "General Surgery", "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Serdang", reason: "Refer to cardiac centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre" }
      ],
      byReferral: ["Subspecialties → Hospital Sepang or Hospital Serdang"]
    },
    transferPathway: {
      summary: "District hospital for Cyberjaya. Complex cases referred to Hospital Serdang or Hospital Selayang.",
      routes: [
        { condition: "Tertiary/complex care", to: "Hospital Sultan Idris Shah Serdang", reason: "Nearest tertiary centre", distanceKm: 20 }
      ],
      howToTransfer: "MOH inter-hospital referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "~200 beds. Modern MOH district hospital for Cyberjaya. Verify current bed count and specialist coverage with MOH.",
    notableGaps: "Limited subspecialties. Complex cases → Hospital Serdang.",
    primaryExcellence: "Public district hospital — Cyberjaya smart city",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 50 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. MySalam / MyCard eligible.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited specialist range. District-level care only.",
    robotics: "Basic imaging.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hoag",
    name: "Hospital Orang Asli Gombak (HOAG)",
    nameShort: "HOAG",
    sector: "public",
    tier: "district",
    state: "Selangor",
    city: "Gombak",
    intro: "Hospital Orang Asli Gombak (HOAG) is Malaysia's dedicated public hospital for the Orang Asli (indigenous) community, operated by the MOH. It provides healthcare specifically tailored to the needs of Peninsular Malaysia's aboriginal peoples, including jungle triage, tropical and endemic disease management, and culturally sensitive care.",
    famousFor: [
      "Malaysia's dedicated hospital for Orang Asli indigenous community",
      "Specialist in tropical and endemic diseases affecting Orang Asli",
      "Culturally sensitive care with bilingual (Malay/Orang Asli language) staff",
      "Gateway hospital for Orang Asli from deep jungle settlements"
    ],
    infrastructure: {
      yearEstablished: 1960,
      totalBeds: 120,
      icuBeds: 6,
      nicuBeds: 2,
      operatingTheatres: 2,
      area: "~5 acres",
      buildings: "Main Ward Block, Outpatient Clinics",
      helipad: false,
      parkingBays: "~100 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Pahang Lama, Km 24, 53300 Gombak, Selangor",
      mainLine: "+603-6189 2211",
      emergencyLine: "+603-6189 2211 ext. A&E",
      appointmentLine: "+603-6189 2211",
      website: "https://jknselangor.moh.gov.my/hoag/",
      mapQuery: "Hospital Orang Asli Gombak Selangor"
    },
    transport: {
      nearest: "Batu Caves KTM Station — 20 min taxi via Jalan Pahang Lama (Km 24, Gombak)",
      bus: "Limited public bus. Taxi from Batu Caves or Gombak LRT strongly recommended.",
      highway: "Karak Highway — Exit Gombak / Km 24 Jalan Pahang",
      landmark: "Km 24, Jalan Pahang Lama, Gombak — look for MOH signage"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Basic canteen available",
      atm: "Nearby Gombak town",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "MOH ambulance. JAKOA (Department of Orang Asli Development) transport support."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Standard",
      notes: "Hospital serves a unique patient population — confirm visiting protocol with staff."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "General Medicine", "Tropical Medicine",
        "General Surgery", "Obstetrics & Gynaecology", "Paediatrics",
        "Dermatology (tropical skin diseases)", "Malaria / Dengue management",
        "Nutritional and community medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Selayang", note: "Refer to tertiary centre" },
        { specialty: "Specialist subspecialties", transferTo: "Hospital Selayang or HKL", note: "District-level hospital" }
      ],
      byReferral: ["Subspecialties → Hospital Selayang", "Quaternary → HKL"]
    },
    transferPathway: {
      summary: "Specialist Orang Asli hospital. Complex cases referred to Hospital Selayang or HKL.",
      routes: [
        { condition: "Tertiary/complex care", to: "Hospital Selayang", reason: "Nearest tertiary public hospital", distanceKm: 15 }
      ],
      howToTransfer: "MOH inter-hospital referral. JAKOA support available for Orang Asli patients."
    },
    specialtyRanks: {
      "Orang Asli Healthcare": { rank: "National #1 — Dedicated Centre", desc: "Malaysia's only dedicated hospital for Orang Asli indigenous communities" }
    },
    accreditations: ["MOH Accredited", "Dedicated Orang Asli Healthcare Centre — MOH/JAKOA"],
    verifiedNotes: "Dedicated Orang Asli hospital confirmed as MOH facility in Gombak. Bed count approximately 120 (verify with MOH). JAKOA-affiliated.",
    notableGaps: "Limited specialist range. Complex cases → Hospital Selayang.",
    primaryExcellence: "Malaysia's only dedicated hospital for Orang Asli indigenous community",
    secondarySpecialties: "Tropical Medicine, Community Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Tropical Medicine", "Obstetrics", "Paediatrics", "Community Medicine"],
    roomRate: "Free (public — Orang Asli healthcare fully subsidised)",
    roomRateRaw: 0,
    insurance: "Fully subsidised for Orang Asli community. MySalam eligible.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited subspecialties. Primarily serves Orang Asli community.",
    robotics: "Basic imaging.",
    doctorQualifications: "MOH medical officers. Some specialists in tropical/community medicine.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "JAKOA — Jabatan Kemajuan Orang Asli", url: "https://www.jakoa.gov.my" }
    ]
  },
  {
    id: "kpj-rawang",
    name: "KPJ Rawang Specialist Hospital",
    nameShort: "KPJ Rawang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Rawang",
    intro: "KPJ Rawang Specialist Hospital is a private specialist hospital serving the rapidly growing Rawang township and surrounding new townships in northern Selangor, providing accessible specialist care as part of KPJ Healthcare's nationwide network.",
    famousFor: [
      "Private specialist hospital for Rawang and northern Selangor",
      "KPJ Healthcare group — largest private hospital network in Malaysia",
      "Accessible specialist services for Rawang new townships (Kundang, Bandar Tasik Puteri)"
    ],
    infrastructure: {
      yearEstablished: 2018,
      totalBeds: 150,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~3 acres",
      buildings: "Main Specialist Tower",
      helipad: false,
      parkingBays: "~250 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "No. 2, Jalan Kundang Jaya, Bandar Rawang Jaya, 48000 Rawang, Selangor",
      mainLine: "+603-6093 9999",
      emergencyLine: "+603-6093 9999 ext. A&E",
      appointmentLine: "+603-6093 9999",
      website: "https://www.kpjrawang.com",
      mapQuery: "KPJ Rawang Specialist Hospital Selangor"
    },
    transport: {
      nearest: "Rawang KTM Komuter Station — 10 min taxi",
      bus: "Bus routes from KL (Rawang town terminus)",
      highway: "North-South Expressway (PLUS) — Rawang exit (Exit 128)",
      landmark: "Bandar Rawang Jaya, Rawang town"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor café",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to larger tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex subspecialties → KPJ Damansara or Sunway Medical"]
    },
    transferPathway: {
      summary: "Community private specialist hospital. Complex cases referred to KPJ Damansara or Sunway Medical.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "~150 beds. KPJ Healthcare group hospital in Rawang. Verify current specialist coverage.",
    notableGaps: "No cardiothoracic surgery. No liver transplant. Limited complex subspecialties.",
    primaryExcellence: "Private specialist care — Rawang / northern Selangor",
    secondarySpecialties: "Obstetrics, Paediatrics, Cardiology, Orthopaedics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology", "Orthopaedics"],
    roomRate: "RM 180 – RM 500+/night",
    roomRateRaw: 260,
    insurance: "KPJ group insurance panels. Major Malaysian insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. Limited complex subspecialties.",
    robotics: "Standard imaging — CT, MRI.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "KPJ Rawang", url: "https://www.kpjrawang.com" },
      { label: "KPJ Healthcare Group", url: "https://www.kpjhealth.com.my" }
    ]
  },
  {
    id: "kpj-selangor-shah-alam",
    name: "KPJ Selangor Specialist Hospital",
    nameShort: "KPJ Selangor",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "KPJ Selangor Specialist Hospital is one of KPJ Healthcare's larger flagship hospitals in Shah Alam, serving the state capital of Selangor and surrounding areas. It offers a wide range of specialist services and is a key private referral centre for the Shah Alam and greater west Selangor corridor.",
    famousFor: [
      "KPJ Healthcare flagship hospital in Selangor's state capital",
      "Comprehensive private specialist care — Shah Alam",
      "Strong oncology and women's health programme",
      "One of the larger KPJ hospitals in Selangor"
    ],
    infrastructure: {
      yearEstablished: 1996,
      totalBeds: 252,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~400 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "33, Jalan Semarak Api 2, Section 7, 40000 Shah Alam, Selangor",
      mainLine: "+603-5522 9000",
      emergencyLine: "+603-5522 9000 ext. A&E",
      appointmentLine: "+603-5522 9000",
      website: "https://www.kpjselangor.com",
      mapQuery: "KPJ Selangor Specialist Hospital Shah Alam"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Shah Alam Section 7 area)",
      highway: "NKVE / KESAS — Shah Alam exit",
      landmark: "Section 7, Shah Alam — near Stadium Shah Alam"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor café, 7am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
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
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery", "Neurology",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Fertility/IVF",
        "Paediatrics", "Paediatric Surgery",
        "Gastroenterology", "Colorectal Surgery",
        "Clinical Oncology", "Surgical Oncology",
        "Urology", "Nephrology",
        "ENT", "Ophthalmology",
        "Endocrinology", "Dermatology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or SJMC", note: "Refer to larger tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex haematology → Sunway Medical", "Complex cardiac surgery → SJMC or Sunway Medical"]
    },
    transferPathway: {
      summary: "Comprehensive private hospital in Shah Alam. Complex cases refer to Sunway Medical or other KL tertiary centres.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "252 beds. KPJ Healthcare flagship hospital in Shah Alam.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "KPJ flagship private hospital — Shah Alam / Selangor state capital",
    secondarySpecialties: "Oncology, Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["Cardiology", "Oncology", "Obstetrics", "Paediatrics", "Surgery", "Orthopaedics"],
    roomRate: "RM 180 – RM 600+/night",
    roomRateRaw: 320,
    insurance: "KPJ group insurance panels. Major Malaysian insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "KPJ Selangor", url: "https://www.kpjselangor.com" },
      { label: "KPJ Healthcare Group", url: "https://www.kpjhealth.com.my" }
    ]
  },
  {
    id: "avisena-specialist",
    name: "Avisena Specialist Hospital",
    nameShort: "Avisena",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Avisena Specialist Hospital is a private tertiary hospital in Shah Alam offering a broad range of specialist services to the growing population of Selangor's state capital. It is known for its comprehensive specialist coverage and accessible location in Section 14, Shah Alam.",
    famousFor: [
      "Private specialist hospital in Shah Alam Section 14",
      "Comprehensive specialist services — Shah Alam west corridor",
      "Strong cardiology and surgical programmes",
      "Accessible alternative to public Hospital Shah Alam"
    ],
    infrastructure: {
      yearEstablished: 2011,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 6,
      operatingTheatres: 8,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~300 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "2, Jalan Akuatik 14/8, Section 14, 40000 Shah Alam, Selangor",
      mainLine: "+603-5510 0000",
      emergencyLine: "+603-5510 0000 ext. A&E",
      appointmentLine: "+603-5510 0000",
      website: "https://www.avisena.com.my",
      mapQuery: "Avisena Specialist Hospital Shah Alam Section 14"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Shah Alam Section 14)",
      highway: "NKVE / KESAS — Shah Alam exit (Batu Tiga area)",
      landmark: "Section 14, Shah Alam — near Shah Alam Stadium"
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
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Urology",
        "ENT", "Ophthalmology", "Dermatology",
        "Oncology (selected)", "Endocrinology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or SJMC", note: "Refer to larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology → Beacon or Sunway Medical", "Complex cardiac surgery → SJMC"]
    },
    transferPathway: {
      summary: "Private specialist hospital in Shah Alam. Complex cases referred to Sunway Medical or SJMC.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "~200 beds. Private specialist hospital in Shah Alam Section 14.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Private specialist hospital — Shah Alam",
    secondarySpecialties: "Cardiology, Obstetrics, Orthopaedics, Paediatrics",
    fullSpecialties: ["Cardiology", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180 – RM 550+/night",
    roomRateRaw: 280,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.avisena.com.my" }
    ]
  },
  {
    id: "avisena-womens-children",
    name: "Avisena Women's & Children's Specialist Hospital",
    nameShort: "Avisena W&C",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Avisena Women's & Children's Specialist Hospital is a dedicated private hospital in Shah Alam focused on obstetrics, gynaecology, fertility, paediatrics, and neonatal care. It is a sister hospital to Avisena Specialist and serves women and families in the Shah Alam and Klang valley west corridor.",
    famousFor: [
      "Dedicated women's and children's private hospital in Shah Alam",
      "Specialist obstetrics, gynaecology, and fertility services",
      "Paediatric and neonatal specialist care",
      "Sister hospital to Avisena Specialist Hospital"
    ],
    infrastructure: {
      yearEstablished: 2016,
      totalBeds: 120,
      icuBeds: 6,
      nicuBeds: 10,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "Main Tower (Women & Children focus)",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "2A, Jalan Akuatik 14/8, Section 14, 40000 Shah Alam, Selangor",
      mainLine: "+603-5510 1000",
      emergencyLine: "+603-5510 1000 ext. A&E",
      appointmentLine: "+603-5510 1000",
      website: "https://www.avisena.com.my",
      mapQuery: "Avisena Women's Children's Specialist Hospital Shah Alam"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Shah Alam Section 14)",
      highway: "NKVE / KESAS — Shah Alam exit",
      landmark: "Section 14, Shah Alam — adjacent to Avisena Specialist Hospital"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor",
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
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: flexible access",
      notes: "Women's and children's focused hospital — family-friendly visiting policy."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "NICU (Neonatal ICU)", "HDU",
        "Obstetrics & Gynaecology", "High-Risk Obstetrics / Maternal-Fetal Medicine",
        "Fertility / IVF",
        "Paediatrics", "Paediatric Surgery", "Neonatology",
        "Women's Health / Breast Surgery",
        "Gynaecological Oncology (selected)"
      ],
      notAvailable: [
        { specialty: "General Adult Surgery", transferTo: "Avisena Specialist Hospital", note: "Sister hospital — adjacent" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or SJMC", note: "Refer to larger centre" }
      ],
      byReferral: ["Complex oncology → Beacon or Sunway Medical"]
    },
    transferPathway: {
      summary: "Dedicated women's and children's hospital. Adult complex cases refer to Avisena Specialist or Sunway Medical.",
      routes: [
        { condition: "Adult complex cases", to: "Avisena Specialist Hospital", reason: "Sister hospital adjacent", distanceKm: 0.1 }
      ],
      howToTransfer: "Specialist referral — direct link to Avisena Specialist next door."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Avisena Healthcare Group"],
    verifiedNotes: "~120 beds. Dedicated women's and children's hospital, Shah Alam. Part of Avisena Healthcare group.",
    notableGaps: "Focused on women and children only. General adult care → Avisena Specialist.",
    primaryExcellence: "Dedicated women's and children's private hospital — Shah Alam",
    secondarySpecialties: "Neonatology, Paediatric Surgery, IVF, Maternal-Fetal Medicine",
    fullSpecialties: ["Obstetrics", "Gynaecology", "IVF", "Paediatrics", "Neonatology", "Paediatric Surgery"],
    roomRate: "RM 200 – RM 600+/night",
    roomRateRaw: 320,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Adult general medicine → Avisena Specialist. No cardiothoracic.",
    robotics: "Laparoscopic gynaecological surgery equipment. Standard imaging.",
    doctorQualifications: "MMC-registered O&G and paediatric specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.avisena.com.my" }
    ]
  },
  {
    id: "pantai-klang",
    name: "Pantai Hospital Klang",
    nameShort: "Pantai Klang",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Klang",
    intro: "Pantai Hospital Klang is a private tertiary hospital operated by Pantai Holdings (part of IHH Healthcare, one of the world's largest healthcare groups). Serving the Klang and Port Klang population, it is a trusted private alternative to the busy public HTAR Klang.",
    famousFor: [
      "Pantai Holdings (IHH Healthcare) flagship in Klang",
      "Private tertiary care alternative to HTAR Klang",
      "Comprehensive specialist services — Klang / Port Klang corridor",
      "Part of IHH Healthcare — world's largest private healthcare group"
    ],
    infrastructure: {
      yearEstablished: 1999,
      totalBeds: 228,
      icuBeds: 18,
      nicuBeds: 8,
      operatingTheatres: 9,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~350 bays",
      parkingRate: "~RM3 first hr, RM2 subsequent; max ~RM8 (verify on-site)"
    },
    contact: {
      address: "No. 2, Jalan Langat, 41200 Klang, Selangor",
      mainLine: "+603-3258 5500",
      emergencyLine: "+603-3258 5500 ext. A&E",
      appointmentLine: "+603-3258 5500",
      website: "https://www.pantai.com.my/klang",
      mapQuery: "Pantai Hospital Klang Selangor"
    },
    transport: {
      nearest: "Klang KTM Komuter Station — 10 min taxi",
      bus: "Rapid KL Bus routes (Klang bus terminal area)",
      highway: "KESAS / Federal Highway — Exit Klang town",
      landmark: "Jalan Langat, Klang town — near HTAR Klang"
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
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Colorectal Surgery",
        "Oncology (selected)", "Urology", "Nephrology",
        "ENT", "Ophthalmology", "Dermatology",
        "Endocrinology", "Neurology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to IHH/larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology → Pantai KL or Beacon", "Complex cardiac → Gleneagles KL"]
    },
    transferPathway: {
      summary: "IHH/Pantai tertiary hospital in Klang. Complex cases refer to Gleneagles KL or Pantai KL within IHH network.",
      routes: [],
      howToTransfer: "Specialist referral within Pantai/IHH network."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "IHH Healthcare / Pantai Holdings"],
    verifiedNotes: "228 beds. Pantai Holdings (IHH Healthcare) hospital in Klang.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Pantai/IHH private hospital — Klang / Port Klang",
    secondarySpecialties: "Cardiology, Obstetrics, Oncology, Orthopaedics",
    fullSpecialties: ["Cardiology", "Surgery", "Obstetrics", "Paediatrics", "Oncology", "Orthopaedics"],
    roomRate: "RM 200 – RM 650+/night",
    roomRateRaw: 350,
    insurance: "Accepts major Malaysian and international insurance. Pantai/IHH panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists. IHH group credentialing.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Pantai Hospital Klang", url: "https://www.pantai.com.my/klang" },
      { label: "Pantai Holdings (IHH)", url: "https://www.pantai.com.my" }
    ]
  },
  {
    id: "pantai-cheras",
    name: "Pantai Hospital Cheras",
    nameShort: "Pantai Cheras",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Cheras",
    intro: "Pantai Hospital Cheras is a private tertiary hospital operated by Pantai Holdings (IHH Healthcare) serving the Cheras and Kajang corridor in southeast Selangor. It provides comprehensive specialist services for one of the most densely populated districts in the Klang Valley.",
    famousFor: [
      "Pantai Holdings (IHH Healthcare) hospital in Cheras",
      "Comprehensive private specialist care — Cheras / southeast KL Valley",
      "Strong women's health and oncology programme",
      "Trusted private option for the large Cheras-Kajang population"
    ],
    infrastructure: {
      yearEstablished: 2004,
      totalBeds: 280,
      icuBeds: 24,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~400 bays",
      parkingRate: "1st hr: RM3.00; subsequent hrs: RM2.00"
    },
    contact: {
      address: "No. 1, Lorong Batu Nilam 1A, Bandar Bukit Tinggi, 43200 Cheras, Selangor",
      mainLine: "+603-9145 2888",
      emergencyLine: "+603-9145 2888 ext. A&E",
      appointmentLine: "+603-9145 2888",
      website: "https://www.pantai.com.my/cheras",
      mapQuery: "Pantai Hospital Cheras Selangor"
    },
    transport: {
      nearest: "Bandar Tun Hussein Onn MRT Station (Putrajaya Line, PY07) — 10 min taxi; or Taman Connaught MRT (Putrajaya Line) — 15 min taxi",
      bus: "Rapid KL Bus routes (Cheras area)",
      highway: "SILK Highway / Cheras–Kajang Highway — Exit Cheras/Bandar Baru Bangi direction",
      landmark: "Bandar Bukit Tinggi, Cheras, Selangor"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor café, 7am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Fertility/IVF",
        "Paediatrics", "Paediatric Surgery",
        "Gastroenterology", "Colorectal Surgery",
        "Clinical Oncology", "Surgical Oncology",
        "Urology", "Nephrology",
        "ENT", "Ophthalmology", "Dermatology",
        "Endocrinology", "Neurology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to IHH/larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex cardiac → Gleneagles KL", "Complex haematology → Sunway Medical"]
    },
    transferPathway: {
      summary: "IHH/Pantai tertiary hospital in Cheras. Complex cases referred within Pantai/IHH network to Gleneagles KL.",
      routes: [],
      howToTransfer: "Specialist referral within Pantai/IHH network."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "IHH Healthcare / Pantai Holdings"],
    verifiedNotes: "~280 beds. Pantai Holdings (IHH Healthcare) hospital in Cheras.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Pantai/IHH private hospital — Cheras / southeast KL",
    secondarySpecialties: "Cardiology, Obstetrics, Oncology, Orthopaedics",
    fullSpecialties: ["Cardiology", "Surgery", "Obstetrics", "Paediatrics", "Oncology", "Orthopaedics"],
    roomRate: "RM 200 – RM 700+/night",
    roomRateRaw: 380,
    insurance: "Accepts major Malaysian and international insurance. Pantai/IHH panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists. IHH group credentialing.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Pantai Hospital Cheras", url: "https://www.pantai.com.my/cheras" },
      { label: "Pantai Holdings (IHH)", url: "https://www.pantai.com.my" }
    ]
  },
  {
    id: "sungai-long-specialist",
    name: "Sungai Long Specialist Hospital",
    nameShort: "Sungai Long Specialist",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Sungai Long, Kajang",
    intro: "Sungai Long Specialist Hospital is a private specialist hospital serving the rapidly growing Sungai Long, Cheras Perdana, and Kajang Utama townships in southeast Selangor. It provides accessible private specialist care for these dense residential areas.",
    famousFor: [
      "Private specialist hospital for Sungai Long / Cheras Perdana residents",
      "Serves the fast-growing southeast Selangor townships",
      "Accessible private specialist care — Sungai Long, Kajang corridor"
    ],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 130,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~3 acres",
      buildings: "Main Building",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "No. 1, Jalan Sungai Long 1, Bandar Sungai Long, 43000 Kajang, Selangor",
      mainLine: "+603-9010 3999",
      emergencyLine: "+603-9010 3999 ext. A&E",
      appointmentLine: "+603-9010 3999",
      website: "https://www.sungailongspecialist.com.my",
      mapQuery: "Sungai Long Specialist Hospital Kajang Selangor"
    },
    transport: {
      nearest: "Sungai Long MRT Station (Putrajaya Line, PY06) — 5 min taxi",
      bus: "Rapid KL Bus routes (Sungai Long feeder)",
      highway: "SILK Highway / Cheras–Kajang Highway — Exit Sungai Long",
      landmark: "Bandar Sungai Long, near Sungai Long MRT Station"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor café",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Pantai Hospital Cheras or Sunway Medical", note: "Refer to larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex subspecialties → Pantai Cheras or Sunway Medical"]
    },
    transferPathway: {
      summary: "Community private specialist. Complex cases → Pantai Cheras or Sunway Medical.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "MSQH Accredited"],
    verifiedNotes: "~130 beds. Private specialist hospital, Sungai Long, Kajang. Verify current specialist list.",
    notableGaps: "No cardiothoracic surgery. Limited complex subspecialties.",
    primaryExcellence: "Private specialist — Sungai Long / Kajang southeast corridor",
    secondarySpecialties: "Obstetrics, Paediatrics, Orthopaedics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180 – RM 500+/night",
    roomRateRaw: 260,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. Community-level specialist range.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Sungai Long Specialist Hospital", url: "https://www.sungailongspecialist.com.my" }
    ]
  },
  {
    id: "sri-kota-specialist",
    name: "Sri Kota Specialist Medical Centre",
    nameShort: "Sri Kota",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Klang",
    intro: "Sri Kota Specialist Medical Centre is one of Klang's largest and most established private hospitals, providing comprehensive tertiary specialist care. It is a major private referral centre for the Klang and Port Klang community and a longstanding trusted hospital in the region.",
    famousFor: [
      "One of Klang's largest and most established private hospitals",
      "Comprehensive tertiary specialist care — Klang / Port Klang",
      "Strong cardiology, oncology, and surgical programme",
      "Major private referral centre in Klang Valley west"
    ],
    infrastructure: {
      yearEstablished: 1994,
      totalBeds: 280,
      icuBeds: 22,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~400 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 1, Lorong Batu Nilam 1, Bandar Bukit Tinggi, 41150 Klang, Selangor",
      mainLine: "+603-3375 7755",
      emergencyLine: "+603-3375 7755 ext. A&E",
      appointmentLine: "+603-3375 7755",
      website: "https://www.srikota.com.my",
      mapQuery: "Sri Kota Specialist Medical Centre Klang Selangor"
    },
    transport: {
      nearest: "Klang KTM Komuter Station — 15 min taxi",
      bus: "Rapid KL Bus routes (Klang Bandar Bukit Tinggi area)",
      highway: "KESAS / Federal Highway — Exit Klang / Bukit Tinggi",
      landmark: "Bandar Bukit Tinggi, Klang"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 7am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted — confirm with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "General Surgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Colorectal Surgery",
        "Clinical Oncology", "Surgical Oncology",
        "Urology", "Nephrology",
        "ENT", "Ophthalmology", "Dermatology",
        "Endocrinology", "Neurology", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KL or Sunway Medical", note: "Refer to larger centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex oncology → Beacon or Gleneagles KL", "Complex cardiac → Sunway Medical"]
    },
    transferPathway: {
      summary: "Comprehensive private hospital in Klang. Complex cases referred to Sunway Medical or Gleneagles KL.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "~280 beds. One of Klang's largest private hospitals. Sri Kota group.",
    notableGaps: "No cardiothoracic surgery. No liver transplant.",
    primaryExcellence: "Major private hospital — Klang / Port Klang",
    secondarySpecialties: "Cardiology, Oncology, Obstetrics, Orthopaedics",
    fullSpecialties: ["Cardiology", "Surgery", "Oncology", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 200 – RM 650+/night",
    roomRateRaw: 340,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No cardiothoracic surgery. No liver transplant.",
    robotics: "Standard imaging — MRI, CT.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Sri Kota Specialist Medical Centre", url: "https://www.srikota.com.my" }
    ]
  },
  {
    id: "msu-medical-centre",
    name: "MSU Medical Centre",
    nameShort: "MSU Medical Centre",
    sector: "private",
    tier: "academic",
    state: "Selangor",
    city: "Shah Alam",
    intro: "MSU Medical Centre is the teaching hospital of Management & Science University (MSU) in Shah Alam, combining medical education with specialist clinical care. As part of MSU's Faculty of Medicine, it provides affordable private specialist services while supporting medical and health sciences training.",
    famousFor: [
      "Teaching hospital of Management & Science University (MSU) Shah Alam",
      "Academic private hospital with specialist and medical education role",
      "Affordable private specialist care — Shah Alam / PJ corridor",
      "MSU Faculty of Medicine clinical training hospital"
    ],
    infrastructure: {
      yearEstablished: 2014,
      totalBeds: 200,
      icuBeds: 12,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~4 acres (MSU campus)",
      buildings: "MSU Medical Centre Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~300 bays (campus)",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Plaza Masalam, No. 2, Jalan Tengku Ampuan Zabedah C 9/C, Section 9, 40100 Shah Alam, Selangor",
      mainLine: "+603-5521 8600",
      emergencyLine: "+603-5521 8600 ext. A&E",
      appointmentLine: "+603-5521 8600",
      website: "https://www.msumedical.com.my",
      mapQuery: "MSU Medical Centre Shah Alam Selangor"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station — 10 min taxi",
      bus: "Rapid KL Bus routes (Shah Alam Section 9 area)",
      highway: "NKVE / Federal Highway — Shah Alam Section 9 exit",
      landmark: "Plaza Masalam, Section 9, Shah Alam — near Shah Alam KTM"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "MSU campus cafeteria nearby, 7am–9pm",
      atm: "Plaza Masalam / campus",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "MSU campus WiFi / Free guest WiFi",
      patientTransport: "Limited — ambulance available"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Academic hospital — confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Cardiology",
        "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology",
        "Psychiatry", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Shah Alam or SJMC", note: "Refer to tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex subspecialties → Hospital Shah Alam or Sunway Medical"]
    },
    transferPathway: {
      summary: "Academic teaching hospital in Shah Alam. Complex cases referred to Hospital Shah Alam or Sunway Medical.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "MSU Faculty of Medicine Academic Affiliation"],
    verifiedNotes: "~200 beds. MSU teaching hospital in Shah Alam (Plaza Masalam). Verify current specialist list as academic hospital.",
    notableGaps: "Academic hospital — some complex subspecialties limited. Refer to public/larger private hospitals.",
    primaryExcellence: "MSU academic teaching hospital — private specialist care, Shah Alam",
    secondarySpecialties: "General Medicine, Obstetrics, Research, Medical Education",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Academic hospital — verify specialist coverage. Limited complex subspecialties.",
    robotics: "Academic-level imaging. Standard diagnostic equipment.",
    doctorQualifications: "MSU professors and lecturers — MMC-registered specialists. Academic clinicians.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MSU Medical Centre", url: "https://www.msumedical.com.my" },
      { label: "Management & Science University", url: "https://www.msu.edu.my" }
    ]
  },
  {
    id: "mahsa-specialist-hospital",
    name: "MAHSA Specialist Hospital",
    nameShort: "MAHSA Specialist",
    sector: "private",
    tier: "academic",
    state: "Selangor",
    city: "Jenjarom, Kuala Langat",
    intro: "MAHSA Specialist Hospital is the teaching hospital of MAHSA University, located in Jenjarom in the Kuala Langat district of southwest Selangor. It serves as the clinical training facility for MAHSA's medical and health sciences faculties while providing specialist care to the surrounding communities including Banting, Teluk Panglima Garang, and Port Klang area.",
    famousFor: [
      "Teaching hospital of MAHSA University — Jenjarom, Kuala Langat",
      "Academic private hospital for southwest Selangor",
      "Serves Banting, Jenjarom, and Kuala Langat communities",
      "Medical and health sciences clinical training facility"
    ],
    infrastructure: {
      yearEstablished: 2016,
      totalBeds: 200,
      icuBeds: 12,
      nicuBeds: 6,
      operatingTheatres: 6,
      area: "~5 acres (MAHSA campus)",
      buildings: "MAHSA Specialist Hospital Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~300 bays (campus)",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "MAHSA Avenue, Jalan Elmu, Off Jalan Universiti, 68100 Jenjarom, Kuala Langat, Selangor",
      mainLine: "+603-3179 3000",
      emergencyLine: "+603-3179 3000 ext. A&E",
      appointmentLine: "+603-3179 3000",
      website: "https://www.mahsa.edu.my/hospital",
      mapQuery: "MAHSA Specialist Hospital Jenjarom Kuala Langat Selangor"
    },
    transport: {
      nearest: "No direct rail. Nearest: Teluk Pulai KTM Station — 25 min taxi; or KLIA2 area — 20 min drive",
      bus: "Limited public transport. Car or taxi strongly recommended.",
      highway: "Coastal Highway (Route 5) / ELITE Highway — Exit Banting / Jenjarom",
      landmark: "MAHSA University campus, Jenjarom — off Jalan Universiti, Kuala Langat"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "MAHSA campus cafeteria, 7am–9pm",
      atm: "Campus area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "MAHSA campus WiFi / Free guest WiFi",
      patientTransport: "Limited — ambulance available"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Academic hospital — confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Cardiology",
        "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology",
        "Psychiatry", "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }
      ],
      byReferral: ["Complex subspecialties → HTAR Klang or Hospital Banting"]
    },
    transferPathway: {
      summary: "MAHSA University teaching hospital in Jenjarom. Complex cases referred to HTAR Klang or other centres.",
      routes: [
        { condition: "Complex/tertiary care", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 35 }
      ],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "MAHSA University Faculty of Medicine Academic Affiliation"],
    verifiedNotes: "~200 beds. MAHSA University teaching hospital in Jenjarom, Kuala Langat. Verify current specialist list.",
    notableGaps: "Academic hospital in rural/semi-urban setting. Limited complex subspecialties. Remote location — limited public transport.",
    primaryExcellence: "MAHSA University academic teaching hospital — southwest Selangor / Jenjarom",
    secondarySpecialties: "General Medicine, Obstetrics, Research, Medical Education",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 150 – RM 450+/night",
    roomRateRaw: 200,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Academic hospital — verify specialist coverage. Limited complex subspecialties. Remote location.",
    robotics: "Academic-level imaging. Standard diagnostic equipment.",
    doctorQualifications: "MAHSA University academic clinicians — MMC-registered specialists and lecturers.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MAHSA Specialist Hospital", url: "https://www.mahsa.edu.my/hospital" },
      { label: "MAHSA University", url: "https://www.mahsa.edu.my" }
    ]
  },
  {
    id: "columbia-cheras",
    name: "Columbia Asia Hospital – Cheras",
    nameShort: "Columbia Asia Cheras",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Cheras, Selangor",
    intro: "Columbia Asia Hospital – Cheras is a private community hospital serving the Cheras Selatan area in Selangor. Part of the Columbia Asia / A1Health network, it provides accessible specialist and inpatient care distinct from the Kuala Lumpur Cheras facilities. Opened in 2011, it covers general medicine, surgery, and emergency services for the surrounding community.",
    famousFor: ["Columbia Asia / A1Health network hospital", "Community specialist hospital for Cheras Selatan, Selangor", "24-hour emergency services", "Accessible private healthcare south of Kuala Lumpur"],
    infrastructure: {
      yearEstablished: 2011,
      totalBeds: 120,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~3 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~200 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "Lot 33107, Jalan Suakasih, 43200 Cheras, Selangor",
      mainLine: "+603-9086 9999",
      emergencyLine: "+603-9086 9999 ext. A&E",
      appointmentLine: "+603-9086 9999",
      website: "https://www.columbiaasia.com",
      mapQuery: "Columbia Asia Hospital Cheras Selangor 43200"
    },
    transport: {
      nearest: "Cheras Selatan / Bandar Mahkota Cheras area — car or taxi recommended",
      bus: "Local bus routes (Cheras Selatan area)",
      highway: "SILK Highway / Cheras-Kajang Highway — Cheras Selatan exit",
      landmark: "Jalan Suakasih, Cheras Selatan, Selangor"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Café on-site, 7am–9pm",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: 11:00–21:00",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to tertiary private or public hospital"]
    },
    transferPathway: {
      summary: "Community secondary hospital. Complex or high-acuity cases referred to tertiary centres in Klang Valley.",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre or SJMC", reason: "Nearest tertiary private centres", distanceKm: 25 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "Columbia Asia / A1Health Network"],
    verifiedNotes: "Opened 2011. Part of Columbia Asia / A1Health network. Serves Cheras Selatan, Selangor (postcode 43200). Distinct from Columbia Asia Hospital in KL. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties. Refer complex cases to tertiary centres.",
    primaryExcellence: "Community specialist hospital for Cheras Selatan, Selangor",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging (X-ray, ultrasound, CT).",
    doctorQualifications: "MMC-registered specialists. Columbia Asia network standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Columbia Asia Hospital", url: "https://www.columbiaasia.com" }
    ]
  },
  {
    id: "columbia-pj",
    name: "Columbia Asia Hospital – Petaling Jaya",
    nameShort: "Columbia Asia PJ",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "Columbia Asia Hospital – Petaling Jaya is a private community specialist hospital located in Section 13, Petaling Jaya. Part of the Columbia Asia / A1Health network, it provides accessible inpatient and specialist outpatient care to the Petaling Jaya community. It is one of several Columbia Asia hospitals in the Klang Valley.",
    famousFor: ["Columbia Asia / A1Health network hospital in PJ", "Community specialist care for Petaling Jaya", "24-hour emergency services", "Accessible private healthcare in central PJ"],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 120,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~3 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~200 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "Lot 69, Jalan 13/6, Seksyen 13, 46200 Petaling Jaya, Selangor",
      mainLine: "+603-7949 9999",
      emergencyLine: "+603-7949 9999 ext. A&E",
      appointmentLine: "+603-7949 9999",
      website: "https://www.columbiaasia.com",
      mapQuery: "Columbia Asia Hospital Petaling Jaya Seksyen 13"
    },
    transport: {
      nearest: "LRT Kelana Jaya Line — Asia Jaya or Taman Jaya Station (~10 min taxi)",
      bus: "RapidKL bus routes (Section 13, PJ)",
      highway: "Federal Highway / SPRINT — PJ Section 13 exit",
      landmark: "Section 13, Petaling Jaya — near PJ Civic Centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Café on-site, 7am–9pm",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: 11:00–21:00",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to tertiary private or public hospital"]
    },
    transferPathway: {
      summary: "Community secondary hospital in PJ. Complex cases referred to SJMC, Sunway Medical, or DEMC nearby.",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre or SJMC", reason: "Nearest tertiary private centres", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "Columbia Asia / A1Health Network"],
    verifiedNotes: "Part of Columbia Asia / A1Health network in Petaling Jaya. Serves Section 13, PJ. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for Petaling Jaya (Section 13)",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging (X-ray, ultrasound, CT).",
    doctorQualifications: "MMC-registered specialists. Columbia Asia network standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Columbia Asia Hospital", url: "https://www.columbiaasia.com" }
    ]
  },
  {
    id: "salam-shah-alam",
    name: "SALAM Shah Alam Specialist Hospital",
    nameShort: "SALAM Shah Alam",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "SALAM Shah Alam Specialist Hospital is a private specialist hospital located in Seksyen 19, Shah Alam, Selangor. Part of the SALAM Group of Hospitals, it provides specialist inpatient and outpatient services to the Shah Alam community. Distinct from the SALAM KT hospital in Kuala Terengganu, this facility focuses on accessible specialist care in the state capital of Selangor.",
    famousFor: ["SALAM Group hospital in Shah Alam", "Specialist care for Shah Alam community", "24-hour emergency services", "Accessible private hospital in Selangor state capital"],
    infrastructure: {
      yearEstablished: 2005,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~150 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "2, Jalan Nelayan 19/B, Seksyen 19, 40300 Shah Alam, Selangor",
      mainLine: "+603-5543 4000",
      emergencyLine: "+603-5543 4000 ext. A&E",
      appointmentLine: "+603-5543 4000",
      website: "https://www.salamshahalam.com",
      mapQuery: "SALAM Shah Alam Specialist Hospital Seksyen 19"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station (~10 min taxi)",
      bus: "RapidKL bus routes (Shah Alam Seksyen 19 area)",
      highway: "Federal Highway / KESAS — Shah Alam exit",
      landmark: "Seksyen 19, Shah Alam — near Shah Alam Lake"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Café on-site, 7am–9pm",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: 11:00–21:00",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to SJMC, Sunway Medical, or HTAA"]
    },
    transferPathway: {
      summary: "Community specialist hospital in Shah Alam. Complex cases referred to SJMC, Sunway Medical, or Hospital Tengku Ampuan Ampuan (HTAA).",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre or SJMC", reason: "Nearest tertiary private centres", distanceKm: 20 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "SALAM Group of Hospitals"],
    verifiedNotes: "SALAM Group hospital in Shah Alam (Seksyen 19). Distinct from SALAM KT in Terengganu. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for Shah Alam (SALAM Group)",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "SALAM Shah Alam Specialist Hospital", url: "https://www.salamshahalam.com" }
    ]
  },
  {
    id: "sentosa-specialist-klang",
    name: "Sentosa Specialist Hospital",
    nameShort: "Sentosa Specialist Klang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Klang",
    intro: "Sentosa Specialist Hospital is a private community specialist hospital located in Klang, Selangor. Serving the Klang community alongside HTAR and other private hospitals, it provides specialist inpatient and outpatient services for general medicine, surgery, and emergency care. The hospital is accessible from the Klang town centre area.",
    famousFor: ["Community specialist hospital in Klang", "24-hour emergency services", "Accessible private care in Klang", "Specialist outpatient clinics"],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 0,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~100 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "27–29, Lorong Temenggung 15A, off Jalan Sungai Jati, 41200 Klang, Selangor",
      mainLine: "+603-5162 8814",
      emergencyLine: "+603-5162 8814 ext. A&E",
      appointmentLine: "+603-5162 8814",
      website: "https://www.sshmedicare.com",
      mapQuery: "Sentosa Specialist Hospital Klang Selangor"
    },
    transport: {
      nearest: "Klang KTM Komuter Station (~10 min taxi)",
      bus: "Local bus routes (Klang town area)",
      highway: "Federal Highway / KESAS — Klang exit",
      landmark: "Off Jalan Sungai Jati, Klang"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang or Pantai Klang", note: "Refer to larger centre" },
        { specialty: "Neurosurgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to HTAR Klang or tertiary centres"]
    },
    transferPathway: {
      summary: "Community secondary hospital in Klang. Complex cases referred to HTAR Klang or tertiary private hospitals.",
      routes: [
        { condition: "Complex tertiary care", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 5 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Community specialist hospital in Klang (off Jalan Sungai Jati). Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for Klang",
    secondarySpecialties: "General Medicine, Surgery, Obstetrics",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Sentosa Specialist Hospital", url: "https://www.sshmedicare.com" }
    ]
  },
  {
    id: "hospital-umra",
    name: "Hospital UMRA",
    nameShort: "UMRA",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Shah Alam",
    intro: "Hospital UMRA is a private specialist hospital in Seksyen 13, Shah Alam, operated by UMRA Medical Services Sdn Bhd. Opened in January 2006, it specialises in maternity, paediatrics, and emergency care, serving the Shah Alam community as a focused women and children's health facility. It provides both inpatient and specialist outpatient services.",
    famousFor: ["Maternity and women's health specialist in Shah Alam", "Paediatric specialist care", "24-hour emergency services", "Opened January 2006"],
    infrastructure: {
      yearEstablished: 2006,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 6,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~100 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "No. 12–18, Jalan Bola Tampar 13/14, Seksyen 13, 40100 Shah Alam, Selangor",
      mainLine: "+603-5518 4319",
      emergencyLine: "+603-5518 4319 ext. A&E",
      appointmentLine: "+603-5518 4319",
      website: "https://www.umramedical.com.my",
      mapQuery: "Hospital UMRA Shah Alam Seksyen 13"
    },
    transport: {
      nearest: "Shah Alam KTM Komuter Station (~10 min taxi)",
      bus: "RapidKL bus routes (Shah Alam Seksyen 13 area)",
      highway: "Federal Highway / KESAS — Shah Alam exit",
      landmark: "Seksyen 13, Shah Alam — near Shah Alam sports complex"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Maternity and paediatric specialist — confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU",
        "Obstetrics & Gynaecology", "Maternity",
        "Paediatrics", "Neonatology",
        "General Medicine", "General Surgery"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to HTAA or tertiary centres"]
    },
    transferPathway: {
      summary: "Maternity and paediatric specialist hospital in Shah Alam. Complex cases referred to HTAA or tertiary private centres.",
      routes: [
        { condition: "Complex tertiary care", to: "Hospital Tengku Ampuan Ampuan (HTAA) Shah Alam", reason: "Nearest public tertiary hospital", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Operated by UMRA Medical Services Sdn Bhd. Opened January 2006. Specialises in maternity and paediatrics. Bed count est. Website verify: umramedical.com.my.",
    notableGaps: "Specialist in maternity and paediatrics — limited general medicine subspecialties.",
    primaryExcellence: "Maternity and paediatric specialist hospital — Shah Alam",
    secondarySpecialties: "Obstetrics, Paediatrics, Neonatology, Emergency",
    fullSpecialties: ["Obstetrics & Gynaecology", "Paediatrics", "Neonatology", "Emergency Medicine", "General Medicine"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Maternity/paediatric focus — limited general specialist subspecialties.",
    robotics: "Standard obstetric and diagnostic imaging (ultrasound, X-ray).",
    doctorQualifications: "MMC-registered obstetricians, gynaecologists and paediatricians.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Hospital UMRA", url: "https://www.umramedical.com.my" }
    ]
  },
  {
    id: "bukit-tinggi-mc",
    name: "Bukit Tinggi Medical Centre",
    nameShort: "BTMC",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Klang",
    intro: "Bukit Tinggi Medical Centre (BTMC) is a private specialist hospital in Bandar Bukit Tinggi, Klang, opened in 2016 with 171 beds. Formerly known as Manipal Hospital Klang and Arunamari Specialist Medical Centre, it is now operated under CAH Medical Centres within the Columbia Asia group. It serves the growing Bandar Bukit Tinggi community and surrounding Klang areas.",
    famousFor: ["171-bed specialist hospital in Bandar Bukit Tinggi", "Formerly Manipal Hospital Klang / Arunamari Specialist Medical Centre", "Now under CAH Medical Centres (Columbia Asia group)", "Opened 2016"],
    infrastructure: {
      yearEstablished: 2016,
      totalBeds: 171,
      icuBeds: 10,
      nicuBeds: 6,
      operatingTheatres: 5,
      area: "~4 acres (est.)",
      buildings: "Main Hospital Block, Specialist Clinics",
      helipad: false,
      parkingBays: "~250 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "Lot 83211, Persiaran Batu Nilam, Bandar Bukit Tinggi, 41200 Klang, Selangor",
      mainLine: "+603-3884 3884",
      emergencyLine: "+603-3884 3884 ext. A&E",
      appointmentLine: "+603-3884 3884",
      website: "https://www.cah.com.my",
      mapQuery: "Bukit Tinggi Medical Centre Klang Bandar Bukit Tinggi"
    },
    transport: {
      nearest: "Klang KTM Komuter Station (~15 min taxi) or AEON Bukit Tinggi area",
      bus: "Local bus routes (Bandar Bukit Tinggi, Klang)",
      highway: "KESAS Highway — Bukit Tinggi exit; Federal Highway — Klang",
      landmark: "Bandar Bukit Tinggi, Klang — near AEON Mall Bukit Tinggi"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Café on-site, 7am–9pm",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Cardiology",
        "Gastroenterology", "ENT", "Ophthalmology",
        "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang or Pantai Klang", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to HTAR Klang or tertiary private hospitals"]
    },
    transferPathway: {
      summary: "171-bed community specialist hospital in Bandar Bukit Tinggi. Complex cases referred to HTAR Klang or tertiary private hospitals.",
      routes: [
        { condition: "Complex tertiary care", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "CAH Medical Centres (Columbia Asia group)"],
    verifiedNotes: "171 beds confirmed. Opened 2016. Formerly Manipal Hospital Klang / Arunamari Specialist Medical Centre. Now under CAH Medical Centres. Website verify: cah.com.my.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "171-bed community specialist hospital — Bandar Bukit Tinggi, Klang",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging (X-ray, ultrasound, CT).",
    doctorQualifications: "MMC-registered specialists. CAH Medical Centres network standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "CAH Medical Centres", url: "https://www.cah.com.my" }
    ]
  },
  {
    id: "andalas-mc",
    name: "Andalas Medical Centre",
    nameShort: "Andalas MC",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Klang",
    intro: "Andalas Medical Centre is a private specialist hospital in Taman Sri Andalas, Klang. Located along Persiaran Tengku Ampuan Rahimah, it serves the residential communities of Taman Sri Andalas and surrounding Klang areas. The hospital provides specialist inpatient and outpatient services with 24-hour emergency care.",
    famousFor: ["Private specialist hospital in Taman Sri Andalas, Klang", "24-hour emergency services", "Accessible private care in west Klang area", "Specialist outpatient clinics"],
    infrastructure: {
      yearEstablished: 2005,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~3 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~150 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "77, Persiaran Tengku Ampuan Rahimah, Taman Sri Andalas, 41200 Klang, Selangor",
      mainLine: "+603-3324 1000",
      emergencyLine: "+603-3324 1000 ext. A&E",
      appointmentLine: "+603-3324 1000",
      website: "https://www.andalasmedicalcentre.com",
      mapQuery: "Andalas Medical Centre Klang Taman Sri Andalas"
    },
    transport: {
      nearest: "Klang KTM Komuter Station (~15 min taxi)",
      bus: "Local bus routes (Taman Sri Andalas, Klang)",
      highway: "Federal Highway / KESAS — Klang exit towards Andalas",
      landmark: "Taman Sri Andalas, Klang — Persiaran Tengku Ampuan Rahimah"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang or Pantai Klang", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to HTAR Klang or tertiary centres"]
    },
    transferPathway: {
      summary: "Community secondary hospital in Taman Sri Andalas, Klang. Complex cases referred to HTAR Klang.",
      routes: [
        { condition: "Complex tertiary care", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 8 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Private specialist hospital in Taman Sri Andalas, Klang. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for Taman Sri Andalas, Klang",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Andalas Medical Centre", url: "https://www.andalasmedicalcentre.com" }
    ]
  },
  {
    id: "kmi-kelana-jaya",
    name: "KMI Kelana Jaya Medical Centre",
    nameShort: "KMI Kelana Jaya",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "KMI Kelana Jaya Medical Centre is a private specialist hospital in Kelana Jaya, Petaling Jaya, operated by KMI Healthcare Group (TDM Berhad). With 32 beds and ISQua accreditation, it has been providing specialist healthcare since 1999. The hospital is part of a national healthcare network and offers specialist inpatient and outpatient services in the Kelana Jaya area.",
    famousFor: ["KMI Healthcare Group (TDM Berhad) network hospital", "ISQua accredited", "Specialist hospital in Kelana Jaya, PJ", "Operating since 1999"],
    infrastructure: {
      yearEstablished: 1999,
      totalBeds: 32,
      icuBeds: 4,
      nicuBeds: 0,
      operatingTheatres: 2,
      area: "~1 acre (est.)",
      buildings: "Main Medical Centre Block",
      helipad: false,
      parkingBays: "~80 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "No. 1, FAS Business Avenue, Jalan Perbandaran SS 7, Kelana Jaya, 47301 Petaling Jaya, Selangor",
      mainLine: "+603-7805 2111",
      emergencyLine: "+603-7805 2111 ext. A&E",
      appointmentLine: "+603-7805 2111",
      website: "https://www.kmihealthcare.com",
      mapQuery: "KMI Kelana Jaya Medical Centre Petaling Jaya"
    },
    transport: {
      nearest: "LRT Kelana Jaya Line — Kelana Jaya Station (~5 min walk)",
      bus: "RapidKL bus routes (Kelana Jaya, PJ)",
      highway: "SPRINT Highway / LDP — Kelana Jaya exit",
      landmark: "FAS Business Avenue, Jalan Perbandaran, Kelana Jaya"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café nearby",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Small specialist centre. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Orthopaedics", "ENT"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "SJMC or Sunway Medical", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to SJMC or Sunway Medical Centre"]
    },
    transferPathway: {
      summary: "Small 32-bed specialist hospital in Kelana Jaya. Complex cases referred to SJMC or Sunway Medical Centre.",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre or SJMC", reason: "Nearest tertiary private centres", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "ISQua Accredited", "KMI Healthcare Group (TDM Berhad)"],
    verifiedNotes: "32 beds confirmed. ISQua accredited. Operating since 1999. Part of KMI Healthcare Group (TDM Berhad). Located in Kelana Jaya, PJ.",
    notableGaps: "Small 32-bed hospital — limited capacity and subspecialties.",
    primaryExcellence: "ISQua-accredited community specialist hospital — Kelana Jaya, PJ",
    secondarySpecialties: "General Medicine, Obstetrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels. KMI network panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Small 32-bed hospital — limited capacity. Complex cases must be transferred.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists. KMI Healthcare Group network standards.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "KMI Healthcare Group", url: "https://www.kmihealthcare.com" }
    ]
  },
  {
    id: "putra-mc-sg-buloh",
    name: "Putra Medical Centre",
    nameShort: "Putra MC",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Sungai Buloh",
    intro: "Putra Medical Centre is a private specialist hospital in Bukit Rahman Putra, Sungai Buloh, established in 1998. Serving the Sungai Buloh and surrounding areas, it provides inpatient and specialist outpatient services. The hospital is distinct from Hospital Sungai Buloh (public) and offers accessible private healthcare for the northern Klang Valley.",
    famousFor: ["Private specialist hospital in Sungai Buloh since 1998", "Community healthcare for Bukit Rahman Putra area", "Accessible private alternative to public Hospital Sungai Buloh", "24-hour emergency care"],
    infrastructure: {
      yearEstablished: 1998,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 4,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~120 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "43, 45 & 47, Jalan BRP 1/3, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor",
      mainLine: "+603-6156 4735",
      emergencyLine: "+603-6156 4735 ext. A&E",
      appointmentLine: "+603-6156 4735",
      website: "https://www.putramedicalcentre.com.my",
      mapQuery: "Putra Medical Centre Sungai Buloh Bukit Rahman Putra"
    },
    transport: {
      nearest: "Sungai Buloh MRT Station (Putrajaya Line / Kajang Line) — 5–10 min taxi",
      bus: "Local bus routes (Sungai Buloh area)",
      highway: "NKVE / Damansara-Sungai Buloh Highway — Sungai Buloh exit",
      landmark: "Bukit Rahman Putra, Sungai Buloh"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Sungai Buloh (public) or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Hospital Sungai Buloh or Sunway Medical", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to Hospital Sungai Buloh (public) or tertiary private centres"]
    },
    transferPathway: {
      summary: "Community secondary hospital in Sungai Buloh. Complex cases referred to Hospital Sungai Buloh (public) or Sunway Medical Centre.",
      routes: [
        { condition: "Complex/infectious disease", to: "Hospital Sungai Buloh", reason: "National infectious disease centre", distanceKm: 3 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Established 1998. Private community specialist hospital in Bukit Rahman Putra, Sungai Buloh. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for Sungai Buloh area",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Putra Medical Centre", url: "https://www.putramedicalcentre.com.my" }
    ]
  },
  {
    id: "kpmc-puchong",
    name: "KPMC Puchong Specialist Centre",
    nameShort: "KPMC Puchong",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Puchong",
    intro: "KPMC Puchong Specialist Centre is a branch facility of Kajang Plaza Medical Centre (KPMC), serving the Puchong and Bandar Puteri communities. Formerly known as KPMC Puchong Medical Centre, it provides specialist outpatient and inpatient care in one of Selangor's fastest-growing townships. It is part of the KPMC group headquartered in Kajang.",
    famousFor: ["KPMC group branch in Puchong", "Specialist care for Bandar Puteri Puchong community", "Formerly KPMC Puchong Medical Centre", "Accessible private healthcare in Puchong"],
    infrastructure: {
      yearEstablished: 2005,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 4,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~150 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "No. 1 & 3, Jalan Puteri 2/1, Bandar Puteri Puchong, 47100 Puchong, Selangor",
      mainLine: "+603-8062 4073",
      emergencyLine: "+603-8062 4073 ext. A&E",
      appointmentLine: "+603-8062 4073",
      website: "https://www.kpmc.com.my",
      mapQuery: "KPMC Puchong Specialist Centre Bandar Puteri Puchong"
    },
    transport: {
      nearest: "LRT Sri Petaling Line — Puteri station or IOI Puchong area; taxi from Puchong town",
      bus: "RapidKL bus routes (Puchong / Bandar Puteri area)",
      highway: "LDP / KESAS — Puchong exit",
      landmark: "Bandar Puteri Puchong — near IOI Mall"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to KPMC Kajang (main) or tertiary private centres"]
    },
    transferPathway: {
      summary: "KPMC branch hospital in Puchong. Complex cases referred to KPMC Kajang main hospital or tertiary private centres.",
      routes: [
        { condition: "Complex cases", to: "Kajang Plaza Medical Centre (KPMC Kajang)", reason: "KPMC main/parent hospital", distanceKm: 20 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "KPMC Group"],
    verifiedNotes: "Branch of KPMC Kajang. Formerly KPMC Puchong Medical Centre. Located in Bandar Puteri Puchong. Bed count est.",
    notableGaps: "Branch hospital — limited subspecialties compared to KPMC Kajang main.",
    primaryExcellence: "KPMC group branch hospital for Puchong / Bandar Puteri community",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Branch hospital — limited subspecialties vs KPMC Kajang main.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "KPMC Puchong Specialist Centre", url: "https://www.kpmc.com.my" }
    ]
  },
  {
    id: "kpmc-kajang",
    name: "Kajang Plaza Medical Centre",
    nameShort: "KPMC Kajang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Kajang",
    intro: "Kajang Plaza Medical Centre (KPMC) is the original and main facility of the KPMC group, located in Bandar Kajang. As the parent hospital of KPMC Puchong, it provides a broader range of specialist inpatient and outpatient services for the Kajang community and surrounding areas including Semenyih and Beranang. KPMC Kajang has served as a key private healthcare anchor for southern Selangor.",
    famousFor: ["Original KPMC facility — parent hospital of the KPMC group", "Key private specialist hospital for Kajang area", "Serving southern Selangor (Kajang, Semenyih, Beranang)", "24-hour emergency services"],
    infrastructure: {
      yearEstablished: 1995,
      totalBeds: 120,
      icuBeds: 8,
      nicuBeds: 6,
      operatingTheatres: 4,
      area: "~3 acres (est.)",
      buildings: "Main Hospital Block, Specialist Clinics",
      helipad: false,
      parkingBays: "~200 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "36, Jalan Dato Seri P. Alagendra 2, Bandar Kajang, 43000 Kajang, Selangor",
      mainLine: "+603-8739 8981",
      emergencyLine: "+603-8739 8981 ext. A&E",
      appointmentLine: "+603-8739 8981",
      website: "https://www.kpmc.com.my",
      mapQuery: "Kajang Plaza Medical Centre KPMC Kajang"
    },
    transport: {
      nearest: "Kajang MRT Station (Kajang Line / Putrajaya Line interchange) — 10 min taxi",
      bus: "RapidKL bus routes (Kajang town area)",
      highway: "SILK Highway / LEKAS — Kajang exit",
      landmark: "Bandar Kajang town centre, Jalan Dato Seri P. Alagendra"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Café on-site, 7am–9pm",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Orthopaedic Surgery", "Obstetrics & Gynaecology",
        "Paediatrics", "Neonatology",
        "Cardiology", "Gastroenterology",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to Sunway Medical or tertiary private centres"]
    },
    transferPathway: {
      summary: "KPMC main hospital in Kajang. Complex cases referred to Sunway Medical Centre or SJMC.",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre or SJMC", reason: "Nearest tertiary private centres", distanceKm: 25 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "KPMC Group — parent/main facility"],
    verifiedNotes: "Original and main KPMC facility in Bandar Kajang. Parent hospital of KPMC Puchong. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Main KPMC group hospital — key private specialist centre for Kajang and southern Selangor",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery, Cardiology",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Cardiology"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging (X-ray, ultrasound, CT).",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Kajang Plaza Medical Centre (KPMC)", url: "https://www.kpmc.com.my" }
    ]
  },
  {
    id: "kajang-specialist-maternity",
    name: "Kajang Specialist Maternity & Surgery",
    nameShort: "KSMS Kajang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Kajang",
    intro: "Kajang Specialist Maternity & Surgery is a private specialist hospital in Kajang, focusing on maternity, obstetrics, gynaecology, and surgical services. Located along Jalan Bukit, it is a separate facility from KPMC and serves the Kajang community as a dedicated maternity and surgical centre. The hospital provides both inpatient and specialist outpatient care.",
    famousFor: ["Maternity and surgical specialist hospital in Kajang", "Focused obstetrics and gynaecology care", "Separate from KPMC — independent specialist centre", "24-hour maternity emergency services"],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 60,
      icuBeds: 4,
      nicuBeds: 6,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~100 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "Lot 119, Jalan Bukit, 43000 Kajang, Selangor",
      mainLine: "+603-8733 3644",
      emergencyLine: "+603-8733 3644 ext. A&E",
      appointmentLine: "+603-8733 3644",
      website: "https://www.kajangspecialist.com",
      mapQuery: "Kajang Specialist Maternity Surgery Jalan Bukit Kajang"
    },
    transport: {
      nearest: "Kajang MRT / KTM Komuter Station — 10 min taxi",
      bus: "Local bus routes (Kajang town)",
      highway: "SILK / LEKAS — Kajang exit",
      landmark: "Jalan Bukit, Kajang town"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — partner visits encouraged",
      notes: "Maternity and surgical focus. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "NICU/SCN",
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "General Surgery", "Paediatrics"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "KPMC Kajang or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "General Medicine", transferTo: "KPMC Kajang", note: "Specialist maternity and surgery focus" }
      ],
      byReferral: ["Complex obstetric cases — refer to SJMC or Hospital Kajang (public)"]
    },
    transferPathway: {
      summary: "Maternity and surgical specialist hospital in Kajang. Complex cases referred to KPMC Kajang or Hospital Kajang (public).",
      routes: [
        { condition: "Complex/high-risk obstetrics", to: "Hospital Kajang (public)", reason: "Nearest public tertiary hospital", distanceKm: 3 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Private maternity and surgery specialist hospital in Kajang. Separate from KPMC. Bed count est.",
    notableGaps: "Specialist maternity/surgery focus — limited general medicine subspecialties.",
    primaryExcellence: "Maternity and surgical specialist hospital — Kajang",
    secondarySpecialties: "Obstetrics, Gynaecology, Neonatology, Surgery",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "General Surgery", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Specialist maternity/surgery focus — refer complex general medicine cases.",
    robotics: "Standard obstetric and surgical imaging (ultrasound, X-ray).",
    doctorQualifications: "MMC-registered obstetricians, gynaecologists and surgeons.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Kajang Specialist Maternity & Surgery", url: "https://www.kajangspecialist.com" }
    ]
  },
  {
    id: "andorra-women-children",
    name: "ANDORRA Women & Children Hospital",
    nameShort: "ANDORRA",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Seri Kembangan",
    intro: "ANDORRA Women & Children Hospital is a pioneering private hospital in Seri Kembangan, Selangor, founded by Dr Khamsiah Muda. Malaysia's first hospital dedicated 'By Women; For Women & Children', it provides a Shariah-friendly environment and specialises in women's health, obstetrics, gynaecology, and paediatrics. The hospital has ambitious plans for seven new branches across Malaysia.",
    famousFor: ["Malaysia's first hospital 'By Women; For Women & Children'", "Founded by Dr Khamsiah Muda", "Shariah-friendly environment", "Plans for 7 new branches — growing national network"],
    infrastructure: {
      yearEstablished: 2015,
      totalBeds: 60,
      icuBeds: 4,
      nicuBeds: 6,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~100 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "19, Jalan Utama Suria Tropika 1, Taman Suria Tropika, 43300 Seri Kembangan, Selangor",
      mainLine: "+603-8966 1133",
      emergencyLine: "+603-8966 1133 ext. A&E",
      appointmentLine: "+603-8966 1133",
      website: "https://www.andorrahospital.com.my",
      mapQuery: "ANDORRA Women Children Hospital Seri Kembangan"
    },
    transport: {
      nearest: "MRT Putrajaya Line — Equine Park Station (~5–10 min taxi)",
      bus: "Local bus routes (Seri Kembangan area)",
      highway: "SILK Highway / Cheras-Kajang Highway — Seri Kembangan exit",
      landmark: "Taman Suria Tropika, Seri Kembangan"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available — Shariah-friendly environment",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — family-centred care",
      notes: "Women and children specialist. Shariah-friendly. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "NICU/SCN",
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "Paediatrics", "Women's Health",
        "Fertility & Reproductive Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" },
        { specialty: "General Male Specialties", transferTo: "General hospitals", note: "Women and children specialist focus" }
      ],
      byReferral: ["Complex cases — refer to tertiary private or public hospitals"]
    },
    transferPathway: {
      summary: "Women and children specialist hospital in Seri Kembangan. Complex cases referred to Sunway Medical, SJMC, or Hospital Serdang.",
      routes: [
        { condition: "Complex tertiary/high-risk", to: "Hospital Putrajaya or Hospital Serdang", reason: "Nearest public tertiary hospitals", distanceKm: 15 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Malaysia's first hospital 'By Women; For Women & Children'. Founded by Dr Khamsiah Muda. Shariah-friendly. Located in Seri Kembangan. Plans for 7 branches. Website verify: andorrahospital.com.my. Bed count est.",
    notableGaps: "Specialist women and children hospital — not a general hospital. Male patients / general medicine limited.",
    primaryExcellence: "Malaysia's first 'By Women; For Women & Children' specialist hospital — Seri Kembangan",
    secondarySpecialties: "Obstetrics, Paediatrics, Neonatology, Women's Health, Fertility",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "Paediatrics", "Women's Health", "Fertility & Reproductive Medicine"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Specialist women/children focus — refer general male patients or complex non-OB cases.",
    robotics: "Standard obstetric and diagnostic imaging.",
    doctorQualifications: "MMC-registered obstetricians, gynaecologists, paediatricians.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "ANDORRA Women & Children Hospital", url: "https://www.andorrahospital.com.my" }
    ]
  },
  {
    id: "uitm-psc",
    name: "UiTM Private Specialist Centre",
    nameShort: "UiTMPSC",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Sungai Buloh",
    intro: "UiTM Private Specialist Centre (UiTMPSC) is a university-linked private specialist centre located at UiTM's Sungai Buloh medical campus. Affiliated with UiTM's Faculty of Medicine, it provides specialist inpatient and outpatient services on Levels 2, 4 and 5 of the clinical building, combining academic medical training with accessible private healthcare. It is distinct from UiTM's main campus in Shah Alam.",
    famousFor: ["University-linked private specialist centre at UiTM Sungai Buloh medical campus", "Affiliated with UiTM Faculty of Medicine", "Academic-clinical environment combining training and patient care", "Distinct from UiTM Shah Alam main campus"],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 4,
      operatingTheatres: 3,
      area: "Within Bangunan Pengajian Klinikal, UiTM Sungai Buloh campus",
      buildings: "Bangunan Pengajian Klinikal (Levels 2, 4, 5)",
      helipad: false,
      parkingBays: "~200 bays (campus, est.)",
      parkingRate: "RM 1/hour (campus, est.)"
    },
    contact: {
      address: "Level 2, 4 & 5, Bangunan Pengajian Klinikal, Fakulti Perubatan UiTM, Kampus Sungai Buloh, Jalan Hospital, 47000 Sungai Buloh, Selangor",
      mainLine: "+603-6144 1600",
      emergencyLine: "+603-6144 1600 ext. A&E",
      appointmentLine: "+603-6144 1600",
      website: "https://www.uitmpsc.com.my",
      mapQuery: "UiTM Private Specialist Centre Sungai Buloh"
    },
    transport: {
      nearest: "Sungai Buloh MRT Station (Putrajaya + Kajang Line interchange) — feeder bus to campus or taxi (~5 min)",
      bus: "RapidKL feeder bus T100 (Sungai Buloh MRT to Hospital / UiTM campus area)",
      highway: "NKVE / Damansara-Sungai Buloh — exit Hospital Sungai Buloh / UiTM",
      landmark: "Jalan Hospital, Sungai Buloh — UiTM Faculty of Medicine building"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "UiTM campus cafeteria nearby",
      atm: "Campus area",
      surau: "Available on campus",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "UiTM campus WiFi / Free patient WiFi",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Academic hospital environment. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Cardiology", "ENT", "Ophthalmology",
        "Dermatology", "Psychiatry"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Sungai Buloh (public) or Sunway Medical", note: "Refer to tertiary centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre" }
      ],
      byReferral: ["Complex subspecialties — refer to Hospital Sungai Buloh or tertiary centres"]
    },
    transferPathway: {
      summary: "University-linked specialist centre at UiTM Sungai Buloh. Complex cases referred to Hospital Sungai Buloh (public) or Sunway Medical.",
      routes: [
        { condition: "Infectious disease / complex cases", to: "Hospital Sungai Buloh", reason: "Adjacent national infectious disease centre", distanceKm: 1 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "UiTM Faculty of Medicine Academic Affiliation"],
    verifiedNotes: "University-linked private specialist centre at UiTM Sungai Buloh medical campus (NOT Shah Alam main campus). Affiliated with UiTM Faculty of Medicine. Bed count est.",
    notableGaps: "Academic-linked specialist centre — complex cases referred out.",
    primaryExcellence: "University-linked private specialist centre — UiTM Faculty of Medicine, Sungai Buloh",
    secondarySpecialties: "General Medicine, Obstetrics, Surgery, Academic Medicine",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics", "Orthopaedics", "Cardiology"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Academic hospital — verify specialist coverage. Complex cases referred out.",
    robotics: "Academic-level diagnostic imaging. Standard equipment.",
    doctorQualifications: "UiTM academic clinicians and specialists — MMC-registered. Faculty of Medicine affiliation.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "UiTM Private Specialist Centre", url: "https://www.uitmpsc.com.my" }
    ]
  },
  {
    id: "jmc-klang",
    name: "JMC Specialist Medical Centre",
    nameShort: "JMC Klang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Klang",
    intro: "JMC Specialist Medical Centre is a private specialist hospital in Klang, Selangor, specialising in obstetrics, gynaecology, and paediatrics. With 90 beds and approximately 70 doctors, it holds MSQH accreditation. The hospital is located along Persiaran Raja Muda Musa in Klang and serves the community with specialist women and children's health services alongside general inpatient care.",
    famousFor: ["MSQH accredited specialist hospital in Klang", "Specialist in obstetrics, gynaecology and paediatrics", "90 beds, ~70 doctors", "Private specialist care in Klang (Kawasan 6)"],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 90,
      icuBeds: 6,
      nicuBeds: 8,
      operatingTheatres: 4,
      area: "~3 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~150 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "80, Persiaran Raja Muda Musa, Kawasan 6, 41100 Klang, Selangor",
      mainLine: "+603-3372 6333",
      emergencyLine: "+603-3372 6333 ext. A&E",
      appointmentLine: "+603-3372 6333",
      website: "https://www.jmcmedical.com.my",
      mapQuery: "JMC Specialist Medical Centre Klang Persiaran Raja Muda Musa"
    },
    transport: {
      nearest: "Klang KTM Komuter Station (~10 min taxi)",
      bus: "Local bus routes (Klang town area)",
      highway: "Federal Highway / KESAS — Klang exit",
      landmark: "Persiaran Raja Muda Musa, Kawasan 6, Klang"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — partner visits encouraged",
      notes: "OB/GYN and paediatric specialist. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU/SCN",
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "Paediatrics", "General Surgery",
        "General Medicine", "ENT"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang or Pantai Klang", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to HTAR Klang or tertiary private hospitals"]
    },
    transferPathway: {
      summary: "MSQH-accredited OB/GYN and paediatric specialist hospital in Klang. Complex cases referred to HTAR Klang.",
      routes: [
        { condition: "Complex tertiary care", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 5 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "MOH Licensed"],
    verifiedNotes: "90 beds confirmed. ~70 doctors. MSQH accredited. Specialises in OB/GYN and paediatrics. Located in Kawasan 6, Klang. Website verify: jmcmedical.com.my.",
    notableGaps: "Specialist OB/GYN and paediatric focus — limited general medicine subspecialties.",
    primaryExcellence: "MSQH-accredited OB/GYN and paediatric specialist hospital — Klang",
    secondarySpecialties: "Obstetrics, Paediatrics, Neonatology, Surgery",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "Paediatrics", "General Surgery", "Emergency Medicine"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Specialist OB/GYN and paediatric focus — limited complex general medicine.",
    robotics: "Standard obstetric and surgical imaging.",
    doctorQualifications: "MMC-registered obstetricians, gynaecologists, paediatricians. ~70 doctors on panel.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "JMC Specialist Medical Centre", url: "https://www.jmcmedical.com.my" }
    ]
  },
  {
    id: "qhc-subang",
    name: "QHC Medical Centre",
    nameShort: "QHC",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Subang Jaya",
    intro: "QHC Medical Centre is a private hospital in USJ 9, Subang Jaya, established on 21 March 1995. Providing both inpatient and outpatient services, it serves the dense residential areas of USJ and surrounding Subang Jaya townships. The hospital offers specialist consultations and general medical services to the community.",
    famousFor: ["Established 21 March 1995 — one of Subang Jaya's longer-serving private hospitals", "Inpatient and outpatient private care in USJ 9", "Serving USJ and Subang Jaya community", "24-hour emergency services"],
    infrastructure: {
      yearEstablished: 1995,
      totalBeds: 80,
      icuBeds: 6,
      nicuBeds: 4,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~150 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "No. 2, Jalan USJ 9/5R, USJ 9, 47620 Subang Jaya, Selangor",
      mainLine: "+603-8024 5760",
      emergencyLine: "+603-8024 5760 ext. A&E",
      appointmentLine: "+603-8024 5760",
      website: "https://www.qhcmedical.com",
      mapQuery: "QHC Medical Centre USJ 9 Subang Jaya"
    },
    transport: {
      nearest: "LRT Kelana Jaya Line — USJ 7 Station (~10 min walk or taxi)",
      bus: "RapidKL bus routes (USJ 9, Subang Jaya area)",
      highway: "KESAS / LDP — USJ exit",
      landmark: "USJ 9, Subang Jaya"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible. Confirm with ward.",
      notes: "Standard private hospital visiting hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "General Medicine",
        "General Surgery", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "ENT", "Ophthalmology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical Centre or Ara Damansara MC", note: "Refer to tertiary centre" },
        { specialty: "Neurosurgery", transferTo: "Sunway Medical Centre or SJMC", note: "Refer to tertiary centre" }
      ],
      byReferral: ["Complex subspecialties — refer to Sunway Medical or SJMC"]
    },
    transferPathway: {
      summary: "Community secondary hospital in USJ 9. Complex cases referred to Sunway Medical Centre or SJMC.",
      routes: [
        { condition: "Complex tertiary care", to: "Sunway Medical Centre", reason: "Nearest tertiary private hospital", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Established 21 March 1995. Located in USJ 9, Subang Jaya. Bed count est.",
    notableGaps: "Secondary community hospital — limited complex subspecialties.",
    primaryExcellence: "Community specialist hospital for USJ / Subang Jaya (since 1995)",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics, Surgery",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "General Surgery", "Obstetrics & Gynaecology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Secondary community hospital — limited complex subspecialties.",
    robotics: "Standard diagnostic imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "QHC Medical Centre", url: "https://www.qhcmedical.com" }
    ]
  },
  {
    id: "wanita-metro-klang",
    name: "Hospital Wanita Metro",
    nameShort: "Wanita Metro Klang",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Klang",
    intro: "Hospital Wanita Metro is the flagship branch of the Hospital Wanita Metro group, established in 1989 in Klang, Selangor. Specialising in maternity, obstetrics, gynaecology, and women's health, it has served the Klang community for over three decades. As the founding and main branch of the Wanita Metro network, it has anchored private maternity care in Klang since 1989.",
    famousFor: ["Flagship Hospital Wanita Metro — operating since 1989", "Maternity and women's health specialist in Klang", "Over 35 years of private maternity care in Klang", "Founded 1989 — longest-serving Wanita Metro branch"],
    infrastructure: {
      yearEstablished: 1989,
      totalBeds: 60,
      icuBeds: 4,
      nicuBeds: 8,
      operatingTheatres: 3,
      area: "~2 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~100 bays (est.)",
      parkingRate: "RM 1–2/hour (est.)"
    },
    contact: {
      address: "32–36, Jalan Pasar, Kawasan 18, 41400 Klang, Selangor",
      mainLine: "+603-3341 2277",
      emergencyLine: "+603-3341 2277 ext. Maternity",
      appointmentLine: "+603-3341 2277",
      website: "https://www.wanita-metro.com.my",
      mapQuery: "Hospital Wanita Metro Klang Jalan Pasar Kawasan 18"
    },
    transport: {
      nearest: "Klang KTM Komuter Station (~10 min taxi)",
      bus: "Local bus routes (Klang town — Kawasan 18)",
      highway: "Federal Highway — Klang exit, Jalan Pasar area",
      landmark: "Jalan Pasar, Kawasan 18, Klang"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — partner/family visits encouraged",
      notes: "Maternity and women's specialist. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "Paediatrics", "NICU/SCN",
        "General Surgery", "Emergency Maternity Care (24/7)"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" },
        { specialty: "General Internal Medicine", transferTo: "HTAR Klang or Pantai Klang", note: "Maternity and women's specialist focus" }
      ],
      byReferral: ["High-risk obstetrics — refer to HTAR Klang or private tertiary hospitals"]
    },
    transferPathway: {
      summary: "Flagship maternity and women's specialist hospital in Klang. Complex cases referred to HTAR Klang.",
      routes: [
        { condition: "High-risk / complex obstetrics", to: "Hospital Tengku Ampuan Rahimah (HTAR) Klang", reason: "Nearest large tertiary hospital", distanceKm: 5 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Flagship branch of Hospital Wanita Metro group. Established 1989. Located at Jalan Pasar, Kawasan 18, Klang. Maternity and women's specialist. Bed count est.",
    notableGaps: "Maternity and women's specialist focus — limited general medicine subspecialties.",
    primaryExcellence: "Flagship maternity and women's specialist hospital — Klang (since 1989)",
    secondarySpecialties: "Obstetrics, Gynaecology, Neonatology, Paediatrics",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "Paediatrics", "Women's Health"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Maternity and women's specialist — refer complex general cases to HTAR Klang.",
    robotics: "Standard obstetric imaging (ultrasound, fetal monitoring).",
    doctorQualifications: "MMC-registered obstetricians, gynaecologists, and paediatricians.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Hospital Wanita Metro", url: "https://www.wanita-metro.com.my" }
    ]
  },
  {
    id: "wanita-metro-banting",
    name: "Hospital Wanita Metro Banting",
    nameShort: "Wanita Metro Banting",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Banting",
    intro: "Hospital Wanita Metro Banting is a branch of the Hospital Wanita Metro group, opened in April 2008 in Banting, Selangor. Specialising in maternity, obstetrics, gynaecology, and women's health, it serves the Banting and Kuala Langat district communities. The hospital provides an accessible private maternity and women's specialist option in the southwest Selangor region.",
    famousFor: ["Hospital Wanita Metro branch in Banting — opened April 2008", "Private maternity and women's specialist in Kuala Langat district", "Serving Banting and southwest Selangor", "Part of Hospital Wanita Metro group"],
    infrastructure: {
      yearEstablished: 2008,
      totalBeds: 40,
      icuBeds: 2,
      nicuBeds: 6,
      operatingTheatres: 2,
      area: "~1.5 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~80 bays (est.)",
      parkingRate: "RM 1/hour (est.)"
    },
    contact: {
      address: "22, Jalan Emas 1, Bandar Sungai Emas, Sungai Manggis, 42700 Banting, Selangor",
      mainLine: "N/A — contact via Hospital Wanita Metro group",
      emergencyLine: "N/A — contact via Hospital Wanita Metro group",
      appointmentLine: "N/A — contact via Hospital Wanita Metro group",
      website: "https://www.wanita-metro.com.my",
      mapQuery: "Hospital Wanita Metro Banting Sungai Manggis"
    },
    transport: {
      nearest: "Banting town — car or taxi strongly recommended (limited public transport)",
      bus: "Limited public transport. Car recommended.",
      highway: "Coastal Highway (Route 5) / ELITE Highway — Exit Banting",
      landmark: "Bandar Sungai Emas, Sungai Manggis, Banting"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — partner/family visits encouraged",
      notes: "Maternity and women's specialist. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "Paediatrics", "NICU/SCN",
        "Emergency Maternity Care (24/7)"
      ],
      notAvailable: [
        { specialty: "General Surgery", transferTo: "Hospital Banting (public) or Hospital Wanita Metro Klang", note: "Refer to main branch or public hospital" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["High-risk obstetrics — refer to Hospital Banting (public) or HTAR Klang"]
    },
    transferPathway: {
      summary: "Maternity and women's specialist hospital in Banting. Complex cases referred to Hospital Banting (public) or the Klang flagship.",
      routes: [
        { condition: "High-risk / complex obstetrics", to: "Hospital Banting or HTAR Klang", reason: "Public hospital or flagship Wanita Metro", distanceKm: 10 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Branch of Hospital Wanita Metro group. Opened April 2008 in Banting (Bandar Sungai Emas, Sungai Manggis). Maternity and women's specialist. Bed count est. Phone not confirmed.",
    notableGaps: "Small branch maternity hospital — limited to obstetric/gynaecology services.",
    primaryExcellence: "Private maternity and women's specialist for Banting / Kuala Langat district",
    secondarySpecialties: "Obstetrics, Gynaecology, Neonatology, Paediatrics",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Small branch maternity hospital — limited scope.",
    robotics: "Standard obstetric imaging (ultrasound, fetal monitoring).",
    doctorQualifications: "MMC-registered obstetricians and gynaecologists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Hospital Wanita Metro", url: "https://www.wanita-metro.com.my" }
    ]
  },
  {
    id: "wanita-metro-kuala-selangor",
    name: "Hospital Wanita Metro Kuala Selangor",
    nameShort: "Wanita Metro KS",
    sector: "private",
    tier: "secondary",
    state: "Selangor",
    city: "Kuala Selangor",
    intro: "Hospital Wanita Metro Kuala Selangor is a branch of the Hospital Wanita Metro group, serving the Kuala Selangor district with private maternity, obstetrics, gynaecology, and women's health services. Located in Taman Rhu Permai, it provides an accessible private maternity option for communities in Kuala Selangor and northern Selangor coastal areas.",
    famousFor: ["Hospital Wanita Metro branch in Kuala Selangor", "Private maternity and women's specialist for Kuala Selangor district", "Accessible private maternity care for northern Selangor coast", "Part of Hospital Wanita Metro group"],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 40,
      icuBeds: 2,
      nicuBeds: 6,
      operatingTheatres: 2,
      area: "~1.5 acres (est.)",
      buildings: "Main Hospital Block",
      helipad: false,
      parkingBays: "~60 bays (est.)",
      parkingRate: "RM 1/hour (est.)"
    },
    contact: {
      address: "28, Jalan Rhu 3, Taman Rhu Permai, 45000 Kuala Selangor, Selangor",
      mainLine: "+603-3281 1681",
      emergencyLine: "+603-3281 1681 ext. Maternity",
      appointmentLine: "+603-3281 1681",
      website: "https://www.wanita-metro.com.my",
      mapQuery: "Hospital Wanita Metro Kuala Selangor Taman Rhu Permai"
    },
    transport: {
      nearest: "Kuala Selangor town — car or taxi strongly recommended (no rail in Kuala Selangor)",
      bus: "Limited public transport. Car recommended.",
      highway: "Route 54 / LATAR Expressway — Kuala Selangor exit",
      landmark: "Taman Rhu Permai, Kuala Selangor"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Café on-site",
      atm: "Lobby area",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi (patients)",
      patientTransport: "Ambulance available"
    },
    visitingHours: {
      general: "11:00–14:00, 17:00–21:00",
      icu: "Restricted — limited hours",
      paediatric: "Parents: extended. Others: standard hours",
      maternity: "Flexible — partner/family visits encouraged",
      notes: "Maternity and women's specialist. Confirm visiting hours with ward."
    },
    specialtyCoverage: {
      available: [
        "Obstetrics & Gynaecology", "Maternity", "Neonatology",
        "Paediatrics", "NICU/SCN",
        "Emergency Maternity Care (24/7)"
      ],
      notAvailable: [
        { specialty: "General Surgery", transferTo: "Hospital Kuala Selangor (public) or Wanita Metro Klang", note: "Refer to public hospital or main branch" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HTAR Klang", note: "Refer to tertiary centre" }
      ],
      byReferral: ["High-risk obstetrics — refer to Hospital Kuala Selangor (public) or HTAR Klang"]
    },
    transferPathway: {
      summary: "Maternity and women's specialist hospital in Kuala Selangor. Complex cases referred to Hospital Kuala Selangor (public) or HTAR Klang.",
      routes: [
        { condition: "High-risk / complex obstetrics", to: "Hospital Kuala Selangor or HTAR Klang", reason: "Public hospital or nearest large tertiary", distanceKm: 55 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Branch of Hospital Wanita Metro group in Kuala Selangor (Taman Rhu Permai). Maternity and women's specialist. Bed count est.",
    notableGaps: "Small branch maternity hospital in Kuala Selangor — limited to obstetric/gynaecology services.",
    primaryExcellence: "Private maternity and women's specialist for Kuala Selangor district",
    secondarySpecialties: "Obstetrics, Gynaecology, Neonatology, Paediatrics",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology", "Paediatrics"],
    roomRate: "RM 180–400/night",
    roomRateRaw: 220,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Small branch maternity hospital — limited scope.",
    robotics: "Standard obstetric imaging (ultrasound, fetal monitoring).",
    doctorQualifications: "MMC-registered obstetricians and gynaecologists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Hospital Wanita Metro", url: "https://www.wanita-metro.com.my" }
    ]
  },
  {
    id: "dbm-pusrawi-kota-damansara",
    name: "Dewan Bersalin Muslimah (DBM) Pusrawi Kota Damansara",
    sector: "private",
    type: "Maternity Centre",
    state: "Selangor",
    city: "Kota Damansara",
    address: "No. 22, Jalan Pekaka 8/3, Seksyen 8, Kota Damansara, 47810 Petaling Jaya, Selangor",
    coordinates: { lat: 3.1638, lng: 101.5898 },
    mainLine: "+603-6157 8596",
    emergencyLine: null,
    website: "https://www.dbmpusrawi.com",
    yearEstablished: null,
    bedCount: null,
    intro: "Dewan Bersalin Muslimah (DBM) Pusrawi Kota Damansara is a private Islamic maternity centre serving Muslim mothers in the Kota Damansara and Petaling Jaya area. Operating under the Pusrawi brand — known for Islamic-compliant healthcare — the centre provides obstetric and gynaecology services in a Shariah-compliant environment, including gender-segregated wards and female specialist preference.",
    transferPathway: {
      summary: "Maternity-only centre in Kota Damansara. Complex obstetric emergencies referred to larger facilities.",
      routes: [
        { condition: "High-risk obstetric emergency", to: "SJMC or Sunway Medical Centre", reason: "Nearest large private tertiary", distanceKm: 8 },
        { condition: "Critically ill mother/neonate", to: "Hospital Sungai Buloh (public)", reason: "MOH tertiary referral", distanceKm: 6 }
      ],
      howToTransfer: "Specialist referral letter. Ambulance transfer available."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Islamic maternity centre under Pusrawi group (Kota Damansara branch). Verified at dbmpusrawi.com and +603-6157 8596.",
    notableGaps: "Maternity-only scope — limited to obstetric/gynaecology services.",
    primaryExcellence: "Islamic-compliant private maternity care in Kota Damansara",
    secondarySpecialties: "Obstetrics, Gynaecology, Neonatology",
    fullSpecialties: ["Obstetrics & Gynaecology", "Maternity", "Neonatology"],
    roomRate: "Contact hospital",
    roomRateRaw: null,
    insurance: "Accepts major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Maternity-only scope.",
    robotics: "Standard obstetric imaging (ultrasound, fetal monitoring).",
    doctorQualifications: "MMC-registered obstetricians and gynaecologists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "DBM Pusrawi Kota Damansara", url: "https://www.dbmpusrawi.com" }
    ]
  },
  {
    id: "beacon-hospital",
    name: "Beacon Hospital",
    nameShort: "Beacon Hospital",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
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
      address: "1, Jalan 215, Seksyen 51, Off Jalan Templer, 46050 Petaling Jaya, Selangor",
      mainLine: "+603-7620 7979",
      emergencyLine: "+603-7787 7888 ext. A&E",
      appointmentLine: "+603-7787 7888",
      website: "https://www.beaconhospital.com.my",
      mapQuery: "Beacon Hospital Petaling Jaya Jalan 215 Seksyen 51"
    },
    transport: {
      nearest: "Paramount LRT Station (Kelana Jaya Line) — 15 min walk or short ride",
      bus: "Rapid KL bus routes near PJ area",
      highway: "NKVE/Damansara-Puchong — Exit Petaling Jaya",
      landmark: "Off Jalan Templer, Seksyen 51, Petaling Jaya"
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
    verifiedNotes: "Dedicated cancer hospital confirmed at beaconhospital.com.my. Address verified: 1, Jalan 215, Seksyen 51, Off Jalan Templer, 46050 PJ. TrueBeam STx system verified. BMT programme confirmed.",
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
    robotics: "TrueBeam STx Radiotherapy System. Elekta Linear Accelerators. PET-CT.",
    doctorQualifications: "All oncologists and haematologists are MMC-registered subspecialists. Many have fellowship training at MD Anderson, Princess Margaret, RMH London.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Beacon_Hospital_Picture.jpg",
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.beaconhospital.com.my" }
    ]
  }
];
