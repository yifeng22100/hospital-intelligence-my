// data/hospitals/labuan.js
var HOSPITALS_LABUAN = [
  {
    id: "hlabuan",
    name: "Hospital Labuan",
    nameShort: "Hospital Labuan",
    sector: "public",
    tier: "state",
    state: "Labuan",
    city: "Labuan",
    intro: "Hospital Labuan is the sole public hospital for the Federal Territory of Labuan, a small island off the coast of Sabah. With 200 beds and a limited range of specialist services, it serves as the primary healthcare facility for Labuan's population of approximately 100,000. Complex cases are transferred to Hospital Queen Elizabeth in Kota Kinabalu or hospitals in Peninsular Malaysia.",
    famousFor: ["Sole hospital for Labuan Federal Territory", "Serves Labuan's offshore oil & gas workforce community", "24/7 emergency services for island population"],
    infrastructure: {
      yearEstablished: 1971,
      totalBeds: 200,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~5 acres",
      buildings: "Main Block, Specialist Clinic",
      helipad: true,
      parkingBays: "~150 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Tun Mustapha, 87008 Wilayah Persekutuan Labuan",
      mainLine: "+6087-422 811",
      emergencyLine: "+6087-422 811 ext. A&E",
      appointmentLine: "+6087-422 811",
      website: "https://hlabuan.moh.gov.my",
      mapQuery: "Hospital Labuan Wilayah Persekutuan"
    },
    transport: {
      nearest: "Labuan Town Centre — 5 min taxi ride",
      bus: "Limited public transport on island",
      highway: "N/A (island)",
      landmark: "Near Labuan town centre, accessible from Jalan Tun Mustapha"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Available, daytime hours",
      atm: "Main lobby (Maybank)",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Air transport coordination for critical cases to KL or KK"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "12:00–12:30, 17:30–18:00 (restricted)",
      paediatric: "Parents: unrestricted. Others: standard hours",
      maternity: "Partner: 12:00–20:00",
      notes: "Confirm with ward directly."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU (limited)",
        "General Medicine", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics (basic)", "Ophthalmology (visiting)",
        "ENT (visiting consultant)", "Psychiatry (limited)"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Queen Elizabeth (KK) or KL hospitals", note: "No cardiac surgery on island — airlift required" },
        { specialty: "Neurosurgery", transferTo: "Hospital Queen Elizabeth (KK)", note: "Airlift to KK or KL" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre — airlift" },
        { specialty: "Oncology (specialist)", transferTo: "Hospital Queen Elizabeth (KK) or KL", note: "Specialist oncology not available in Labuan" },
        { specialty: "Interventional Cardiology", transferTo: "Hospital Queen Elizabeth II (KK)", note: "Airlift to KK for cardiac intervention" }
      ],
      byReferral: [
        "Most subspecialty care — refer to HQE Kota Kinabalu or KL",
        "Cardiac cases — airlift to HQEII or KL cardiac centres"
      ]
    },
    transferPathway: {
      summary: "Labuan's geographic isolation means airlift is required for complex cases. This is a known challenge for residents and offshore workers.",
      routes: [
        { condition: "Complex cardiac cases, neurosurgery, oncology, transplant", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Nearest full tertiary centre — 30 min by air", distanceKm: 110 },
        { condition: "Highly complex cases requiring quaternary care", to: "Hospital Kuala Lumpur or UMMC", reason: "National quaternary centres", distanceKm: 1700 }
      ],
      howToTransfer: "Air ambulance arranged by MOH. Patient must be stable for transfer. For cardiac/neuro emergencies, stabilise in Labuan A&E then airlift. Medical Assistance Hotline: +6087-422 811."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "200 beds. Only hospital for Labuan FT. Limited specialist services — many subspecialties unavailable locally.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. No specialist oncology. Airlift required for complex cases.",
    primaryExcellence: "Sole hospital for Labuan Federal Territory — general acute care",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 30 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Subsidised public hospital. Limited insurance infrastructure for specialist services.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Very limited specialist services. No cardiac surgery, neurosurgery, or oncology. Airlift required for complex care.",
    robotics: "Basic imaging — X-ray, CT scan, ultrasound.",
    doctorQualifications: "MOH-posted medical officers and rotating specialists. Limited permanent specialist coverage.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "labuan-specialist",
    name: "Labuan Specialist & Medical Centre",
    nameShort: "Labuan Specialist",
    sector: "private",
    tier: "tertiary",
    state: "Labuan",
    city: "Labuan",
    intro: "Labuan Specialist & Medical Centre is a small private specialist clinic and hospital in Labuan, providing outpatient specialist consultations and basic inpatient care. It is the only private medical facility of note in Labuan FT. For complex specialist care, residents typically travel to Kota Kinabalu or Kuala Lumpur. Note: No major private hospital group (KPJ, Pantai, IHH, Sunway) currently operates a hospital in Labuan.",
    famousFor: ["Only private specialist facility in Labuan FT", "Outpatient specialist consultations for Labuan residents"],
    infrastructure: {
      yearEstablished: 2005,
      totalBeds: 20,
      icuBeds: 2,
      nicuBeds: 0,
      operatingTheatres: 1,
      area: "~1 acre",
      buildings: "Main clinic building",
      helipad: false,
      parkingBays: "~40 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Labuan Town Centre, 87000 Wilayah Persekutuan Labuan",
      mainLine: "+6087-414 500 (verify)",
      emergencyLine: "N/A — use Hospital Labuan for emergencies",
      appointmentLine: "+6087-414 500 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Labuan Specialist Medical Centre Labuan"
    },
    transport: {
      nearest: "Labuan Town Centre — 5 min walk",
      bus: "Limited public transport on island",
      highway: "N/A (island)",
      landmark: "Labuan town centre area"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: false,
      atm: "Available in town",
      surau: false,
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: false,
      patientTransport: false
    },
    visitingHours: {
      general: "Clinic hours: 8:00–17:00 weekdays",
      icu: "N/A",
      paediatric: "As per ward policy",
      maternity: "N/A",
      notes: "Primarily an outpatient specialist clinic. For emergencies, go to Hospital Labuan (public)."
    },
    specialtyCoverage: {
      available: ["Outpatient specialist consultations (selected specialties)", "Basic inpatient care", "General Medicine", "Surgery (minor)"],
      notAvailable: [
        { specialty: "Emergency Medicine", transferTo: "Hospital Labuan (public)", note: "No emergency department — go to Hospital Labuan" },
        { specialty: "Most specialist surgery", transferTo: "Hospital Queen Elizabeth (KK) or KL hospitals", note: "Very limited surgical capability — airlift for complex cases" }
      ],
      byReferral: ["Complex cases — Hospital Labuan or airlift to KK/KL"]
    },
    transferPathway: {
      summary: "Very small private facility. All complex cases refer to Hospital Labuan (public) or airlift to Kota Kinabalu.",
      routes: [
        { condition: "All complex cases", to: "Hospital Queen Elizabeth (KK) or KL hospitals", reason: "Nearest full private/tertiary care", distanceKm: 110 }
      ],
      howToTransfer: "Specialist referral. Air ambulance for critical cases."
    },
    specialtyRanks: {},
    accreditations: ["MOH Licensed"],
    verifiedNotes: "Only private medical facility in Labuan FT. Very limited capacity. No major private hospital group operates in Labuan as of 2025. Residents requiring private specialist care typically travel to KK or KL.",
    notableGaps: "No major private hospital in Labuan. Very limited private specialist services. Residents must travel to KK or KL for comprehensive private care.",
    primaryExcellence: "Limited private outpatient specialist clinic — Labuan FT",
    secondarySpecialties: "Outpatient consultations",
    fullSpecialties: ["General Medicine"],
    roomRate: "RM 150 – RM 400+/night (est.)",
    roomRateRaw: 200,
    insurance: "Some insurance panels (verify).",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Very small facility. No emergency. No specialist surgery. Residents must travel for real private specialist care.",
    robotics: "Basic imaging.",
    doctorQualifications: "MMC-registered doctors (verify specialist credentials).",
    imageUrl: null,
    imageCredit: "",
    wikiLink: null,
    officialSources: [{ label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }]
  },
  {
    id: "labuan-biz-mc",
    name: "Labuan Biz Medical Centre",
    nameShort: "Labuan Biz MC",
    sector: "private", tier: "secondary", state: "Labuan", city: "Labuan",
    intro: "Labuan Biz Medical Centre is a private medical facility serving the business and offshore energy community of Labuan federal territory.",
    famousFor: ["Private medical centre — Labuan offshore financial centre", "Serves oil & gas and business community"],
    infrastructure: { yearEstablished: 2008, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~1 acre", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Labuan, Malaysia", mainLine: "+6087-422 000 (verify)", emergencyLine: "+6087-422 000 ext. A&E", appointmentLine: "+6087-422 000 (verify)", website: "https://www.moh.gov.my", mapQuery: "Labuan Biz Medical Centre" },
    transport: { nearest: "Labuan town — 10 min taxi", bus: "Local Labuan bus", highway: "Labuan island roads", landmark: "Labuan town / financial district" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free", patientTransport: "Ambulance" },
    visitingHours: { general: "11:00–14:00, 17:00–21:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["General Medicine", "Basic procedures"],
      notAvailable: [{ specialty: "Most specialist services", transferTo: "Hospital Labuan / Gleneagles KK", note: "Small facility" }],
      byReferral: ["Specialist → Hospital Labuan or Kota Kinabalu"]
    },
    transferPathway: { summary: "Small private facility. Complex → Hospital Labuan or KK.", routes: [], howToTransfer: "Private referral." },
    specialtyRanks: {}, accreditations: ["MOH Licensed"],
    primaryExcellence: "Private medical centre — Labuan financial territory", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine"],
    roomRate: "RM 150–400/night", roomRateRaw: 200, insurance: "Panel insurance accepted.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services — small facility.", robotics: "None.", doctorQualifications: "MOH-registered doctors.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Small private medical centre for Labuan business community.", notableGaps: "Complex → Hospital Labuan or KK."
  }
];
