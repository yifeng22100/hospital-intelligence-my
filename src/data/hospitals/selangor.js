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
      mainLine: "+603-3375 5000",
      emergencyLine: "+603-3375 5000 ext. A&E",
      appointmentLine: "+603-3375 5000",
      website: "https://htar.moh.gov.my",
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
      { label: "Official Website", url: "https://htar.moh.gov.my" },
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
      mainLine: "+603-6156 0111",
      emergencyLine: "+603-6156 0111 ext. A&E",
      appointmentLine: "+603-6156 0111",
      website: "https://hsgb.moh.gov.my",
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
      { label: "Official Website", url: "https://hsgb.moh.gov.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "serdang",
    name: "Hospital Sultan Idris Shah Serdang (Serdang Heart Centre)",
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
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Puchong, 43000 Kajang, Selangor",
      mainLine: "+603-8947 5555",
      emergencyLine: "+603-8947 5555 ext. A&E",
      appointmentLine: "+603-8947 5555",
      website: "https://hserdang.moh.gov.my",
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
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Lebuhraya Selayang-Kepong, 68100 Batu Caves, Selangor",
      mainLine: "+603-6120 3333",
      emergencyLine: "+603-6120 3333 ext. A&E",
      appointmentLine: "+603-6120 3333",
      website: "https://hselayang.moh.gov.my",
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
      howToTransfer: "Liver transplant referral via transplant coordinator. Call +603-6120 3333. Bring full hepatology workup and referral letter."
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
      { label: "Official Website", url: "https://hselayang.moh.gov.my" },
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
      mainLine: "+603-5544 4500",
      emergencyLine: "+603-5544 4500 ext. A&E",
      appointmentLine: "+603-5544 4500",
      website: "https://hsa.moh.gov.my",
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
      website: "https://hampang.moh.gov.my",
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
    name: "Hospital Kajang",
    nameShort: "Hospital Kajang",
    sector: "public",
    tier: "state",
    state: "Selangor",
    city: "Kajang",
    intro: "Hospital Kajang is the main public hospital for the Kajang and Nilai corridor, serving a rapidly growing population in southern Selangor. It provides comprehensive secondary care services.",
    famousFor: ["Main public hospital for Kajang / southern Selangor", "Serves the Kajang-Nilai growth corridor"],
    infrastructure: { yearEstablished: 1966, totalBeds: 400, icuBeds: 20, nicuBeds: 8, operatingTheatres: 8, area: "~10 acres", buildings: "Main Block, Specialist Clinics", helipad: false, parkingBays: "~300 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Jalan Sungai Jelok, 43000 Kajang, Selangor", mainLine: "+603-8736 6500", emergencyLine: "+603-8736 6500 ext. A&E", appointmentLine: "+603-8736 6500", website: "https://www.moh.gov.my", mapQuery: "Hospital Kajang Selangor" },
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
    contact: { address: "Jalan Hospital, 42700 Banting, Selangor", mainLine: "+603-3187 4300 (verify)", emergencyLine: "+603-3187 4300 ext. A&E (verify)", appointmentLine: "+603-3187 4300 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Banting Selangor" },
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
    city: "Subang Jaya",
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "5, Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor",
      mainLine: "+603-7491 9191",
      emergencyLine: "+603-7491 9191 ext. A&E",
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "1, Jalan SS 12/1A, Subang Jaya, 47500 Petaling Jaya, Selangor",
      mainLine: "+603-5639 1212",
      emergencyLine: "+603-5639 1212 ext. A&E",
      appointmentLine: "+603-5639 1212",
      website: "https://www.rsdh.com.my/sjmc",
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
    infrastructure: { yearEstablished: 1995, totalBeds: 300, icuBeds: 24, nicuBeds: 8, operatingTheatres: 10, area: "~3 acres", buildings: "Main Tower, Specialist Clinics", helipad: false, parkingBays: "~350 bays", parkingRate: "RM 2/hour" },
    contact: { address: "119, Jalan SS 20/10, Damansara Utama, 47400 Petaling Jaya, Selangor", mainLine: "+603-7718 1000", emergencyLine: "+603-7718 1000 ext. A&E", appointmentLine: "+603-7718 1000", website: "https://www.kpjdamansara.com", mapQuery: "KPJ Damansara Specialist Hospital Petaling Jaya" },
    transport: { nearest: "Mutiara Damansara MRT Station — 10 min taxi", bus: "Rapid KL Bus (Damansara Utama area)", highway: "NKVE — Exit Damansara/Mutiara", landmark: "Damansara Utama, PJ — near SS20" },
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
    id: "kpj-dsh2",
    name: "KPJ Damansara 2 Specialist Hospital",
    nameShort: "KPJ Damansara 2",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "KPJ Damansara 2 is the newer, expanded facility of the KPJ Damansara group, providing additional specialist capacity for the growing Petaling Jaya and Damansara communities.",
    famousFor: ["Modern expansion of KPJ Damansara", "Additional specialist capacity for PJ/Damansara"],
    infrastructure: { yearEstablished: 2020, totalBeds: 200, icuBeds: 16, nicuBeds: 6, operatingTheatres: 8, area: "~2 acres", buildings: "New specialist tower", helipad: false, parkingBays: "~250 bays", parkingRate: "RM 2/hour" },
    contact: { address: "Damansara Perdana, Petaling Jaya, Selangor (verify address with hospital)", mainLine: "+603-XXXX XXXX (verify with KPJ Damansara 2)", emergencyLine: "+603-XXXX XXXX (verify)", appointmentLine: "+603-XXXX XXXX (verify)", website: "https://www.kpj.com.my", mapQuery: "KPJ Damansara 2 Specialist Hospital Petaling Jaya" },
    transport: { nearest: "Mutiara Damansara MRT — 10 min taxi", bus: "Rapid KL Bus", highway: "NKVE — Exit Damansara", landmark: "Petaling Jaya Damansara Perdana area" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Available" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Flexible", notes: "Confirm with hospital." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "General Medicine", "Surgery", "Cardiology", "Obstetrics", "Paediatrics", "Orthopaedics", "Gastroenterology", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Cardiothoracic Surgery", transferTo: "Sunway Medical or SJMC", note: "Refer to larger centre" }],
      byReferral: ["Complex cases — KPJ Damansara 1 or Sunway Medical"]
    },
    transferPathway: { summary: "Community private hospital.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "200 beds. KPJ group expansion hospital.",
    notableGaps: "Newer hospital — verify full specialist coverage.",
    primaryExcellence: "KPJ private hospital — Damansara 2 expansion",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 500+/night",
    roomRateRaw: 280,
    insurance: "KPJ group insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Newer — verify specialist availability.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [{ label: "KPJ Healthcare Group", url: "https://www.kpj.com.my" }]
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
    contact: { address: "Persiaran Raja Muda Musa, 41000 Klang, Selangor", mainLine: "+603-3375 7799", emergencyLine: "+603-3375 7799 ext. A&E", appointmentLine: "+603-3375 7799", website: "https://www.kpjklang.com", mapQuery: "KPJ Klang Specialist Hospital Selangor" },
    transport: { nearest: "Klang KTM Station — 10 min taxi", bus: "Rapid KL Bus routes (Klang)", highway: "Federal Highway — Exit Klang", landmark: "Klang town area" },
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
    officialSources: [{ label: "Official Website", url: "https://www.kpjklang.com" }]
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "11, Jalan Damansara, 47810 Kota Damansara, Petaling Jaya, Selangor",
      mainLine: "+603-5022 0888",
      emergencyLine: "+603-5022 0888 ext. A&E",
      appointmentLine: "+603-5022 0888",
      website: "https://www.thomsonhospital.com",
      mapQuery: "Thomson Hospital Kota Damansara THKD Selangor"
    },
    transport: { nearest: "Kota Damansara MRT Station — 10 min walk or taxi", bus: "Rapid KL Bus (Kota Damansara)", highway: "NKVE — Exit Kota Damansara", landmark: "Kota Damansara town, Petaling Jaya north" },
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
    contact: { address: "Persiaran Bukit Rimau 2, Bukit Rimau, 40460 Shah Alam, Selangor", mainLine: "+603-5524 5555", emergencyLine: "+603-5524 5555 ext. A&E", appointmentLine: "+603-5524 5555", website: "https://www.columbiaasia.com/bukit-rimau", mapQuery: "Columbia Asia Hospital Bukit Rimau Shah Alam" },
    transport: { nearest: "KTM Batu Tiga — 15 min taxi", bus: "Rapid KL Bus routes (Shah Alam west)", highway: "KESAS — Exit Bukit Rimau/Shah Alam", landmark: "Bukit Rimau, Shah Alam" },
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
    officialSources: [{ label: "Official Website", url: "https://www.columbiaasia.com/bukit-rimau" }]
  },
  {
    id: "ara-damansara",
    name: "Ara Damansara Medical Centre",
    nameShort: "Ara Damansara MC",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Petaling Jaya",
    intro: "Ara Damansara Medical Centre is a modern private hospital in the Ara Damansara area, offering comprehensive specialist services for the upscale Ara Damansara, Subang, and Petaling Jaya north communities.",
    famousFor: ["Modern private hospital in Ara Damansara / Subang area", "Growing specialist services"],
    infrastructure: { yearEstablished: 2015, totalBeds: 200, icuBeds: 16, nicuBeds: 6, operatingTheatres: 8, area: "~2 acres", buildings: "Main Tower", helipad: false, parkingBays: "~250 bays", parkingRate: "RM 2/hour" },
    contact: { address: "Jalan PJU 1A/2, Ara Damansara, 47301 Petaling Jaya, Selangor", mainLine: "+603-7845 1000", emergencyLine: "+603-7845 1000 ext. A&E", appointmentLine: "+603-7845 1000", website: "https://www.aradamansara.com.my", mapQuery: "Ara Damansara Medical Centre Petaling Jaya" },
    transport: { nearest: "Subang Jaya KTM or Ara Damansara MRT — 10 min taxi", bus: "Rapid KL Bus (Ara Damansara)", highway: "NKVE/LDP — Exit Ara Damansara", landmark: "Ara Damansara, PJ" },
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
    officialSources: [{ label: "Official Website", url: "https://www.assuntahospital.com" }]
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "1, Jalan Mamanda 9, Ampang Point, 68000 Ampang, Selangor",
      mainLine: "+603-4270 2500",
      emergencyLine: "+603-4270 2500 ext. A&E",
      appointmentLine: "+603-4270 2500",
      website: "https://www.kpjampangputeri.com",
      mapQuery: "KPJ Ampang Puteri Specialist Hospital Ampang Selangor"
    },
    transport: {
      nearest: "Ampang LRT Station — 10 min taxi",
      bus: "Rapid KL Bus routes (Ampang Point area)",
      highway: "AKLEH — Exit Ampang",
      landmark: "Ampang Point area, near KLCC east corridor"
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
    officialSources: [{ label: "Official Website", url: "https://www.kpjampangputeri.com" }]
  },
  {
    id: "huppm",
    name: "Hospital Pengajar Universiti Putra Malaysia (HPUPM)",
    nameShort: "HUPPM",
    sector: "private",
    tier: "academic",
    state: "Selangor",
    city: "Serdang",
    intro: "HUPPM (Hospital Universiti Putra Malaysia) is the teaching hospital of Universiti Putra Malaysia (UPM), combining academic medical education with specialist clinical care. Located in Serdang, it serves the surrounding community while conducting research affiliated with UPM.",
    famousFor: ["UPM teaching hospital", "Academic research hospital", "Good value private academic care in Serdang"],
    infrastructure: { yearEstablished: 2018, totalBeds: 300, icuBeds: 20, nicuBeds: 8, operatingTheatres: 10, area: "~5 acres (UPM campus)", buildings: "Teaching Hospital Tower", helipad: false, parkingBays: "~300 bays (UPM campus)", parkingRate: "RM 1/hour" },
    contact: { address: "Persiaran MAEPS 2, Serdang, 43400 UPM Campus, Selangor", mainLine: "+603-9769 3400 (verify)", emergencyLine: "+603-9769 3400 (verify)", appointmentLine: "+603-9769 3400 (verify)", website: "https://huppm.upm.edu.my", mapQuery: "Hospital Universiti Putra Malaysia HUPPM Serdang" },
    transport: { nearest: "Serdang KTM Station — 10 min taxi; UPM campus shuttle", bus: "Campus bus / Rapid KL bus (Serdang)", highway: "SILK/BESRAYA — Exit Serdang/UPM", landmark: "UPM Campus, Serdang" },
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
    officialSources: [{ label: "Official Website", url: "https://huppm.upm.edu.my" }]
  },
  {
    id: "hkuala-selangor",
    name: "Hospital Kuala Selangor",
    nameShort: "Hospital Kuala Selangor",
    sector: "public", tier: "district", state: "Selangor", city: "Kuala Selangor",
    intro: "Hospital Kuala Selangor is a district hospital serving the coastal Kuala Selangor area northwest of Selangor.",
    famousFor: ["District hospital for Kuala Selangor"],
    infrastructure: { yearEstablished: 1970, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45000 Kuala Selangor, Selangor", mainLine: "+603-3289 2222 (verify)", emergencyLine: "+603-3289 2222 ext. A&E", appointmentLine: "+603-3289 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kuala Selangor" },
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
    name: "Hospital Sabak Bernam",
    nameShort: "Hospital Sabak Bernam",
    sector: "public", tier: "district", state: "Selangor", city: "Sabak Bernam",
    intro: "Hospital Sabak Bernam serves the northernmost district of Selangor with basic district hospital services.",
    famousFor: ["District hospital for Sabak Bernam — northernmost Selangor"],
    infrastructure: { yearEstablished: 1968, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45300 Sabak Bernam, Selangor", mainLine: "+603-3228 2222 (verify)", emergencyLine: "+603-3228 2222 ext. A&E", appointmentLine: "+603-3228 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Sabak Bernam Selangor" },
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
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~60 beds (est.). Small district hospital.", notableGaps: "Refer to HTAR Klang."
  },
  {
    id: "htanjung-karang",
    name: "Hospital Tanjung Karang",
    nameShort: "Hospital Tanjung Karang",
    sector: "public", tier: "district", state: "Selangor", city: "Tanjung Karang",
    intro: "Hospital Tanjung Karang serves the Tanjung Karang area in the Kuala Selangor district of Selangor.",
    famousFor: ["District hospital for Tanjung Karang"],
    infrastructure: { yearEstablished: 1972, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 45500 Tanjung Karang, Selangor", mainLine: "+603-3267 2222 (verify)", emergencyLine: "+603-3267 2222 ext. A&E", appointmentLine: "+603-3267 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Tanjung Karang Selangor" },
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
    contact: { address: "Jalan Hospital, 44000 Kuala Kubu Bharu, Selangor", mainLine: "+603-6064 2222 (verify)", emergencyLine: "+603-6064 2222 ext. A&E", appointmentLine: "+603-6064 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kuala Kubu Bharu Selangor" },
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
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Hulu Selangor.", notableGaps: "Specialist referral to Hospital Selayang."
  },
  {
    id: "sunway-mc-damansara",
    name: "Sunway Medical Centre Damansara (SMCD)",
    nameShort: "Sunway Damansara",
    sector: "private",
    tier: "tertiary",
    state: "Selangor",
    city: "Damansara Damai, Petaling Jaya",
    intro: "Sunway Medical Centre Damansara (SMCD) is the third campus of Sunway Medical Group, opened in 2023 in Damansara Damai, Petaling Jaya. It serves the northern Klang Valley corridor with comprehensive private specialist care as part of Sunway's integrated healthcare expansion.",
    famousFor: ["Third campus of Sunway Medical Group", "Modern private tertiary hospital serving northern PJ/Damansara corridor", "Part of Sunway Health Ecosystem", "Specialist clinics and 24/7 emergency services"],
    infrastructure: { yearEstablished: 2023, totalBeds: 300, icuBeds: 24, nicuBeds: 10, operatingTheatres: 10, area: "~4 acres", buildings: "Main Tower", helipad: false, parkingBays: "~600 bays", parkingRate: "RM 2/hour" },
    contact: { address: "Persiaran Damai, Damansara Damai, 68100 Batu Caves, Selangor", mainLine: "+603-6145 5000", emergencyLine: "+603-6145 5000 ext. A&E", appointmentLine: "+603-6145 5000", website: "https://www.sunwaymedical.com", mapQuery: "Sunway Medical Centre Damansara SMCD Petaling Jaya" },
    transport: { nearest: "Damansara Damai MRT (Putrajaya Line) — nearby", bus: "RapidKL routes (Damansara Damai)", highway: "SPRINT Highway / Penchala Link — Damansara Damai exit", landmark: "Damansara Damai, northern PJ" },
    facilities: { pharmacy24h: true, cafeteria: "F&B outlets", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free WiFi", patientTransport: "Ambulance and transfer coordination" },
    visitingHours: { general: "11:00–21:00", icu: "Restricted — nurse discretion", paediatric: "Parents: unrestricted", maternity: "Partner: flexible", notes: "Private hospital — flexible visiting." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU", "NICU", "General Medicine", "General Surgery", "Cardiology", "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics", "Gastroenterology", "Oncology", "ENT", "Ophthalmology", "Neurology", "Urology"],
      notAvailable: [{ specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "Government centre only" }],
      byReferral: ["Complex cardiothoracic → Sunway Medical (Subang Jaya main campus)", "Complex oncology → Sunway Medical or Beacon"]
    },
    transferPathway: { summary: "Tertiary private hospital. Complex subspecialty cases refer to Sunway Medical main campus or national centres.", routes: [], howToTransfer: "Specialist referral within Sunway Health network." },
    specialtyRanks: {},
    accreditations: ["MOH Licensed", "Sunway Medical Group"],
    primaryExcellence: "Modern private tertiary — Damansara Damai / northern PJ", secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics, Oncology",
    fullSpecialties: ["Cardiology", "Surgery", "Orthopaedics", "Oncology", "Obstetrics", "Paediatrics", "Gastroenterology", "Neurology", "Urology"],
    roomRate: "RM 300–700/night", roomRateRaw: 450, insurance: "Accepts most major Malaysian and international insurance. Sunway network panel.", fppScheme: false,
    gaps: "Newer campus — some complex subspecialties refer to Sunway main campus.", robotics: "Selected surgical robotics.", doctorQualifications: "MMC-registered specialists; Sunway Medical Group credentialing.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Sunway Medical Centre", url: "https://www.sunwaymedical.com" }],
    verifiedNotes: "~300 beds. Third Sunway Medical campus, opened 2023, Damansara Damai.", notableGaps: "Newer campus — some complex subspecialties refer back to main Subang Jaya campus."
  },
  {
    id: "kpj-kajang",
    name: "KPJ Kajang Specialist Hospital",
    nameShort: "KPJ Kajang",
    sector: "private", tier: "secondary", state: "Selangor", city: "Kajang",
    intro: "KPJ Kajang Specialist Hospital is a private specialist hospital serving the Kajang and Hulu Langat district of Selangor.",
    famousFor: ["Private specialist hospital for Kajang district", "KPJ network hospital"],
    infrastructure: { yearEstablished: 2002, totalBeds: 160, icuBeds: 10, nicuBeds: 4, operatingTheatres: 5, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~250 bays", parkingRate: "RM 1/hour" },
    contact: { address: "No. 1, Jalan Semenyih, 43000 Kajang, Selangor", mainLine: "+603-8769 2999", emergencyLine: "+603-8769 2999 ext. A&E", appointmentLine: "+603-8769 2999", website: "https://www.kpjhealth.com.my", mapQuery: "KPJ Kajang Specialist Hospital Selangor" },
    transport: { nearest: "Kajang MRT/KTM — 10 min taxi", bus: "Rapid KL bus routes", highway: "LEKAS Highway / Kajang SILK", landmark: "Kajang town, near Kajang MRT" },
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
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "KPJ Healthcare", url: "https://www.kpjhealth.com.my" }],
    verifiedNotes: "~160 beds (est.). Private specialist, Kajang.", notableGaps: "Complex → SJMC or Sunway MC."
  },
  {
    id: "an-nur-specialist",
    name: "An-Nur Specialist Hospital",
    nameShort: "An-Nur Specialist",
    sector: "private", tier: "secondary", state: "Selangor", city: "Bangi",
    intro: "An-Nur Specialist Hospital is a private Islamic hospital based in Bangi, serving the Muslim-majority community of southern Selangor with shariah-compliant medical services.",
    famousFor: ["Islamic-oriented private specialist hospital", "Serves Bangi and Putrajaya corridor"],
    infrastructure: { yearEstablished: 2006, totalBeds: 120, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "RM 1/hour" },
    contact: { address: "No. 19, Jalan 2/23A, Seksyen 2, 43650 Bandar Baru Bangi, Selangor", mainLine: "+603-8925 2525 (verify)", emergencyLine: "+603-8925 2525 ext. A&E", appointmentLine: "+603-8925 2525 (verify)", website: "https://www.annur.com.my", mapQuery: "An-Nur Specialist Hospital Bangi Selangor" },
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
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~120 beds (est.). Private Islamic specialist hospital, Bangi.", notableGaps: "Complex cases → Sunway Medical."
  },
  {
    id: "hselesa-jaya",
    name: "Hospital Hulu Selangor",
    nameShort: "Hospital Hulu Selangor",
    sector: "public", tier: "district", state: "Selangor", city: "Serendah",
    intro: "Hospital Hulu Selangor (also referred to as Hospital Serendah) serves the Hulu Selangor district with district-level public healthcare.",
    famousFor: ["District hospital for Hulu Selangor district"],
    infrastructure: { yearEstablished: 1970, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, Serendah, 48200 Rawang, Selangor", mainLine: "+603-6064 2222 (verify)", emergencyLine: "+603-6064 2222 ext. A&E", appointmentLine: "+603-6064 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Hulu Selangor Serendah" },
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
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Hulu Selangor.", notableGaps: "Specialist referral to Hospital Selayang."
  },
  {
    id: "hsepang",
    name: "Hospital Sepang",
    nameShort: "Hospital Sepang",
    sector: "public", tier: "district", state: "Selangor", city: "Sepang",
    intro: "Hospital Sepang serves the Sepang district in southern Selangor, the area home to Kuala Lumpur International Airport (KLIA).",
    famousFor: ["District hospital for Sepang / KLIA area", "Serves KLIA airport district"],
    infrastructure: { yearEstablished: 1998, totalBeds: 150, icuBeds: 8, nicuBeds: 4, operatingTheatres: 4, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 43900 Sepang, Selangor", mainLine: "+603-8706 2222 (verify)", emergencyLine: "+603-8706 2222 ext. A&E", appointmentLine: "+603-8706 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Sepang Selangor" },
    transport: { nearest: "Salak Tinggi ERL station — 10 min taxi", bus: "Limited routes", highway: "ELITE Highway / KLIA Expressway", landmark: "Sepang, near KLIA" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Serdang", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Serdang"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Serdang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sepang / KLIA area", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~150 beds (est.). District hospital for Sepang.", notableGaps: "Specialist referral to Hospital Serdang."
  },
  {
    id: "hpuchong",
    name: "Hospital Puchong",
    nameShort: "Hospital Puchong",
    sector: "public", tier: "district", state: "Selangor", city: "Puchong",
    intro: "Hospital Puchong serves the rapidly growing Puchong township in the Petaling district, one of the most densely populated areas in Selangor.",
    famousFor: ["District hospital for Puchong — densely populated Selangor township"],
    infrastructure: { yearEstablished: 2008, totalBeds: 200, icuBeds: 10, nicuBeds: 4, operatingTheatres: 5, area: "~5 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "Free" },
    contact: { address: "Jalan Kenari 6, Bandar Puchong Jaya, 47100 Puchong, Selangor", mainLine: "+603-8064 2222 (verify)", emergencyLine: "+603-8064 2222 ext. A&E", appointmentLine: "+603-8064 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Puchong Selangor" },
    transport: { nearest: "IOI City Mall LRT — 10 min taxi", bus: "RapidKL bus routes", highway: "Damansara-Puchong (LDP) Highway / KESAS", landmark: "Puchong, near IOI City" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Sunway Medical Centre / HTAR Klang", note: "District hospital" }],
      byReferral: ["Complex → Sunway Medical or HTAR"]
    },
    transferPathway: { summary: "District hospital. Complex → Sunway Medical or HTAR.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Puchong", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~200 beds (est.). District hospital for Puchong.", notableGaps: "Specialist referral to Sunway Medical or HTAR."
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
    id: "hklang",
    name: "Hospital Klang",
    nameShort: "Hospital Klang",
    sector: "public", tier: "district", state: "Selangor", city: "Klang",
    intro: "Hospital Klang (also known as Hospital Tengku Ampuan Rahimah or HTAR) area includes several smaller district facilities; this entry covers the Klang town district annex facility.",
    famousFor: ["District hospital supporting Klang area"],
    infrastructure: { yearEstablished: 1970, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Jalan Meru, 41050 Klang, Selangor", mainLine: "+603-3372 2222 (verify)", emergencyLine: "+603-3372 2222 ext. A&E", appointmentLine: "+603-3372 2222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Meru Klang Selangor" },
    transport: { nearest: "Klang town — 10 min taxi", bus: "RapidKL bus routes", highway: "KESAS / Federal Highway", landmark: "Klang town, near Port Klang" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "HTAR Klang", note: "District support facility" }],
      byReferral: ["Specialist → HTAR Klang"]
    },
    transferPathway: { summary: "District support hospital. Complex → HTAR Klang.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Meru / Klang area", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District support hospital, Klang.", notableGaps: "Specialist referral to HTAR."
  },
  {
    id: "kpj-selayang",
    name: "KPJ Selayang Specialist Hospital",
    nameShort: "KPJ Selayang",
    sector: "private", tier: "secondary", state: "Selangor", city: "Selayang",
    intro: "KPJ Selayang Specialist Hospital is a private specialist hospital in the Selayang area of northern Selangor, serving the large population of the Gombak-Selayang corridor.",
    famousFor: ["Private specialist hospital — Selayang corridor", "KPJ network hospital"],
    infrastructure: { yearEstablished: 2005, totalBeds: 130, icuBeds: 8, nicuBeds: 4, operatingTheatres: 5, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~200 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Selayang, Selangor", mainLine: "+603-6136 9999 (verify)", emergencyLine: "+603-6136 9999 ext. A&E", appointmentLine: "+603-6136 9999 (verify)", website: "https://www.kpjhealth.com.my", mapQuery: "KPJ Selayang Specialist Hospital" },
    transport: { nearest: "Selayang area — taxi recommended", bus: "RapidKL bus", highway: "LATAR Expressway / Jalan Ipoh", landmark: "Selayang, near Hospital Selayang" },
    facilities: { pharmacy24h: false, cafeteria: "Café", atm: "Lobby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Orthopaedics", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Liver transplant", transferTo: "Hospital Selayang", note: "National centre nearby" }],
      byReferral: ["Complex → KPJ Damansara or Hospital Selayang"]
    },
    transferPathway: { summary: "Private specialist. Complex → KPJ Damansara or Hospital Selayang.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private specialist — Selayang area", secondarySpecialties: "General Medicine, Orthopaedics",
    fullSpecialties: ["General Medicine", "Surgery", "Orthopaedics", "Obstetrics"],
    roomRate: "RM 180–450/night", roomRateRaw: 250, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "RM 3,000",
    gaps: "No liver transplant.", robotics: "None.", doctorQualifications: "MOH-registered specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "KPJ Healthcare", url: "https://www.kpjhealth.com.my" }],
    verifiedNotes: "~130 beds (est.). Private specialist, Selayang.", notableGaps: "Liver transplant → Hospital Selayang."
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
      website: "https://www.moh.gov.my",
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
      website: "https://www.moh.gov.my",
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 2, Jalan Langat, 41200 Klang, Selangor",
      mainLine: "+603-3375 9191",
      emergencyLine: "+603-3375 9191 ext. A&E",
      appointmentLine: "+603-3375 9191",
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
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "No. 1, Lorong Batu Nilam 1A, Bandar Bukit Tinggi, 43200 Cheras, Selangor",
      mainLine: "+603-9100 3500",
      emergencyLine: "+603-9100 3500 ext. A&E",
      appointmentLine: "+603-9100 3500",
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
  }
];
