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
  }
];
