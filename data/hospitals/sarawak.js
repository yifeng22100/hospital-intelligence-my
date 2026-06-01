// data/hospitals/sarawak.js
var HOSPITALS_SARAWAK = [
  {
    id: "hus",
    name: "Hospital Umum Sarawak (HUS) Kuching",
    nameShort: "HUS Kuching",
    sector: "public",
    tier: "quaternary",
    state: "Sarawak",
    city: "Kuching",
    intro: "Hospital Umum Sarawak (HUS) in Kuching is Sarawak's apex quaternary referral hospital and the highest-level medical facility for the entire state. With 1,210 beds, HUS is the largest hospital in Sarawak and provides the full spectrum of specialist services for a state characterised by vast distances, diverse indigenous communities (Iban, Bidayuh, Melanau, and others), and significant rural populations who depend on referral pathways from district hospitals.",
    famousFor: ["Sarawak's apex quaternary referral centre", "Largest hospital in Sarawak (1,210 beds)", "Full specialist services for the entire state", "Critical referral hub for Sarawak's remote interior communities"],
    infrastructure: {
      yearEstablished: 1923,
      totalBeds: 1210,
      icuBeds: 60,
      nicuBeds: 20,
      operatingTheatres: 20,
      area: "~30 acres",
      buildings: "Main Clinical Block, Specialist Tower, Women & Children Block, Emergency Block",
      helipad: true,
      parkingBays: "~800 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Tun Ahmad Zaidi Adruce, 93586 Kuching, Sarawak",
      mainLine: "+6082-276 666",
      emergencyLine: "+6082-276 666 ext. A&E",
      appointmentLine: "+6082-276 666",
      website: "https://hus.moh.gov.my",
      mapQuery: "Hospital Umum Sarawak HUS Kuching"
    },
    transport: {
      nearest: "Kuching city centre — 15 min taxi",
      bus: "Kuching city bus routes",
      highway: "Jalan Tun Ahmad Zaidi Adruce — Kuching city",
      landmark: "Near Kuching city centre, Sarawak"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor and Level 4, 6:30am–9pm",
      atm: "Main lobby (multiple banks)",
      surau: "Multiple floors",
      chapel: "Available (multi-faith prayer room)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HUS-Guest)",
      patientTransport: "Hospital ambulance. Air ambulance coordination for interior Sarawak."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted. Others: standard hours",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "MOH standard hours. Busy quaternary centre — confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU", "PICU",
        "General Surgery", "Trauma Surgery",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine",
        "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology",
        "Clinical Oncology", "Haematology", "Radiation Oncology",
        "Nephrology", "Urology", "Kidney Transplant",
        "Gastroenterology", "Colorectal Surgery", "Hepatobiliary Surgery",
        "Respiratory Medicine", "Infectious Disease",
        "Endocrinology", "Rheumatology",
        "Psychiatry", "Dermatology",
        "Ophthalmology", "ENT",
        "Rehabilitation Medicine", "Palliative Care",
        "Vascular Surgery", "Plastic & Reconstructive Surgery",
        "Interventional Radiology"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "Malaysia's only liver transplant centre — airlift to Peninsular" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN), Kuala Lumpur", note: "IJN national heart transplant centre" },
        { specialty: "Bone Marrow Transplant (BMT)", transferTo: "Hospital Ampang, Selangor", note: "National Haematology Centre — airlift to Peninsular" }
      ],
      byReferral: [
        "Liver transplant — Hospital Selayang (Malaysia's only centre)",
        "BMT — Hospital Ampang",
        "Heart transplant — IJN Kuala Lumpur"
      ]
    },
    transferPathway: {
      summary: "HUS Kuching is the apex centre for all Sarawak — cases are referred TO HUS from all district and regional hospitals in Sarawak. Only liver transplant, BMT, and heart transplant require transfer to Peninsular Malaysia.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang, Selangor", reason: "Malaysia's only liver transplant centre", distanceKm: 1500 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN), KL", reason: "IJN national cardiac transplant centre", distanceKm: 1450 },
        { condition: "Bone Marrow Transplant", to: "Hospital Ampang, Selangor", reason: "National Haematology Centre", distanceKm: 1480 }
      ],
      howToTransfer: "For transfers TO HUS from interior Sarawak: MOH referral letter. Air ambulance (Flying Doctor/medivac) or road ambulance. For transfers OUT to Peninsular: MOH inter-state referral, air ambulance or commercial flight with medical escort."
    },
    specialtyRanks: {
      "Sarawak Apex Referral": { rank: "Sole quaternary centre for Sarawak", desc: "HUS is the undisputed apex referral for all of Sarawak — all complex district and regional cases funnel here" },
      "Cardiothoracic Surgery": { rank: "Only cardiac surgery in Sarawak", desc: "HUS is the only hospital in Sarawak with full cardiothoracic surgical capability" }
    },
    accreditations: ["MSQH Accredited", "MOH Quaternary Centre Designation — Sarawak"],
    verifiedNotes: "1,210 beds (MOH 2023). Sarawak quaternary apex centre confirmed. Cardiothoracic surgery available. FPP scheme available.",
    notableGaps: "No liver transplant in Sarawak. No BMT in Sarawak. No heart transplant in Sarawak.",
    primaryExcellence: "Sarawak's apex quaternary referral hospital — full tertiary/quaternary services",
    secondarySpecialties: "Cardiothoracic Surgery, Oncology, Neurosurgery, Kidney Transplant",
    fullSpecialties: ["Cardiology", "Cardiothoracic Surgery", "Neurosurgery", "Oncology", "Orthopaedics", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised public hospital. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–3,000 depending on procedure",
    gaps: "No liver transplant. No BMT. No heart transplant. Transfer to Peninsular required for these.",
    robotics: "CT, MRI, radiotherapy equipment for oncology. Standard advanced public hospital imaging.",
    doctorQualifications: "MOH specialists — MMC-registered. Many trained at UK Royal Colleges and Australian institutions.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/27_August_2011_Sarawak_General_Hospital.jpg",
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://hus.moh.gov.my" },
      { label: "Sarawak Health Department", url: "https://jkns.moh.gov.my" },
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hsibu",
    name: "Hospital Sibu",
    nameShort: "Hospital Sibu",
    sector: "public",
    tier: "state",
    state: "Sarawak",
    city: "Sibu",
    intro: "Hospital Sibu is the main public referral hospital for central Sarawak, serving as the regional hub for the Sibu, Kapit, and surrounding divisions. With 390 beds, it provides essential specialist services for a vast catchment area that includes the remote interior communities of Kapit and the Rejang River basin, many of whom require medivac to reach Sibu.",
    famousFor: ["Regional referral hospital for central Sarawak", "Main specialist centre for the Rejang River basin communities", "Medivac destination for remote interior Sarawak including Kapit", "Serves a large Iban and mixed indigenous population"],
    infrastructure: {
      yearEstablished: 1955,
      totalBeds: 390,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~12 acres",
      buildings: "Main Block, Women & Children Block, Specialist Clinics",
      helipad: true,
      parkingBays: "~300 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Ulu Oya, 96000 Sibu, Sarawak",
      mainLine: "+6084-343 333 (verify with hospital)",
      emergencyLine: "+6084-343 333 ext. A&E (verify)",
      appointmentLine: "+6084-343 333 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Sibu Sarawak"
    },
    transport: {
      nearest: "Sibu town centre — 15 min taxi",
      bus: "Sibu town bus routes",
      highway: "Jalan Ulu Oya, Sibu",
      landmark: "Near Sibu town centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, daytime hours",
      atm: "Main lobby",
      surau: "Available",
      chapel: "Available (multi-faith)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (limited)",
      patientTransport: "Hospital ambulance. Air ambulance (Flying Doctor) for interior cases."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "MOH standard hours."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology (general — no cardiac surgery)",
        "Neurology (general — limited neurosurgery)",
        "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Nephrology",
        "Respiratory Medicine", "Endocrinology",
        "Psychiatry", "Ophthalmology", "ENT", "Dermatology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Umum Sarawak (HUS) Kuching", note: "Transfer to HUS Kuching — only cardiac surgery in Sarawak" },
        { specialty: "Neurosurgery (complex)", transferTo: "Hospital Umum Sarawak (HUS) Kuching", note: "Transfer to HUS for neurosurgery" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sarawak" },
        { specialty: "Complex Oncology", transferTo: "Hospital Umum Sarawak (HUS) Kuching", note: "Specialist oncology at HUS" }
      ],
      byReferral: [
        "Cardiac surgery — HUS Kuching (~200 km by road or flight)",
        "Complex neurosurgery — HUS Kuching",
        "Specialist oncology — HUS Kuching"
      ]
    },
    transferPathway: {
      summary: "Hospital Sibu is the central Sarawak regional hub. It receives patients from Kapit and interior districts. Complex surgery and quaternary cases refer to HUS Kuching (~200 km by road or ~40 min by air).",
      routes: [
        { condition: "Cardiothoracic surgery, complex neurosurgery, complex oncology", to: "Hospital Umum Sarawak (HUS) Kuching", reason: "Sarawak apex centre", distanceKm: 200 },
        { condition: "Liver transplant, BMT", to: "Hospital Selayang / Hospital Ampang, Selangor", reason: "Peninsular national centres", distanceKm: 1500 }
      ],
      howToTransfer: "MOH inter-hospital referral. Road or air ambulance. Air ambulance recommended for time-critical cases."
    },
    specialtyRanks: {
      "Central Sarawak Regional Hub": { rank: "Main regional hospital for central Sarawak", desc: "Primary specialist referral for Sibu, Kapit divisions — serves vast Rejang River basin" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "390 beds. Central Sarawak regional hospital. Medivac hub for Kapit interior.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Limited complex specialist range.",
    primaryExcellence: "Regional public referral hospital — central Sarawak (Sibu, Kapit divisions)",
    secondarySpecialties: "Orthopaedics, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No cardiac surgery. No neurosurgery. Transfer to HUS Kuching required for complex cases.",
    robotics: "Standard imaging — CT, X-ray, ultrasound.",
    doctorQualifications: "MOH specialists — MMC-registered.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hmiri",
    name: "Hospital Miri",
    nameShort: "Hospital Miri",
    sector: "public",
    tier: "state",
    state: "Sarawak",
    city: "Miri",
    intro: "Hospital Miri is the main public referral hospital for northern Sarawak, serving the Miri, Baram, and Limbang divisions. With 330 beds, it provides specialist care for a region that includes a significant oil and gas industry workforce as well as longhouse and rural indigenous communities.",
    famousFor: ["Regional hospital for northern Sarawak", "Serves Miri's oil and gas workforce community", "Main specialist centre for Baram and Limbang divisions"],
    infrastructure: {
      yearEstablished: 1968,
      totalBeds: 330,
      icuBeds: 18,
      nicuBeds: 7,
      operatingTheatres: 8,
      area: "~10 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: true,
      parkingBays: "~250 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Cahaya, 98000 Miri, Sarawak",
      mainLine: "+6085-420 033 (verify with hospital)",
      emergencyLine: "+6085-420 033 ext. A&E (verify)",
      appointmentLine: "+6085-420 033 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Miri Sarawak"
    },
    transport: {
      nearest: "Miri city centre — 15 min taxi",
      bus: "Miri city bus routes",
      highway: "Jalan Cahaya, Miri",
      landmark: "Near Miri city centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, daytime",
      atm: "Main lobby",
      surau: "Available",
      chapel: "Available (multi-faith)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (limited)",
      patientTransport: "Hospital ambulance. Air ambulance coordination."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "MOH standard hours."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology (general)", "Neurology (general)",
        "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Nephrology",
        "Respiratory Medicine", "Endocrinology",
        "Psychiatry", "Ophthalmology", "ENT", "Dermatology"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HUS Kuching", note: "Transfer to HUS Kuching (~600 km by road / ~1 hr by air)" },
        { specialty: "Neurosurgery (complex)", transferTo: "HUS Kuching", note: "Transfer to HUS Kuching" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sarawak" }
      ],
      byReferral: [
        "Complex cardiac/neuro — HUS Kuching by air ambulance or commercial flight"
      ]
    },
    transferPathway: {
      summary: "Hospital Miri serves northern Sarawak. Complex cases transfer to HUS Kuching (~600 km by road, ~1 hr by air). Air ambulance is the preferred route for time-critical cases.",
      routes: [
        { condition: "Cardiac surgery, neurosurgery, complex specialist care", to: "Hospital Umum Sarawak (HUS) Kuching", reason: "Sarawak apex centre", distanceKm: 600 }
      ],
      howToTransfer: "MOH referral. Air ambulance or commercial flight to Kuching."
    },
    specialtyRanks: {
      "North Sarawak Regional Hub": { rank: "Main regional hospital for northern Sarawak", desc: "Primary referral centre for Miri, Baram, and Limbang divisions" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "330 beds. Northern Sarawak regional hospital. No cardiac surgery on site.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Transfer to HUS Kuching required.",
    primaryExcellence: "Regional public hospital — northern Sarawak (Miri, Baram, Limbang)",
    secondarySpecialties: "Orthopaedics, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No cardiac surgery. No neurosurgery. Transfer to HUS KCH for complex cases.",
    robotics: "Standard imaging — CT, X-ray, ultrasound.",
    doctorQualifications: "MOH specialists — MMC-registered.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hbintulu",
    name: "Hospital Bintulu",
    nameShort: "Hospital Bintulu",
    sector: "public",
    tier: "district",
    state: "Sarawak",
    city: "Bintulu",
    intro: "Hospital Bintulu is the main public hospital for Bintulu Division in coastal Sarawak, serving the industrial city of Bintulu and surrounding areas. With 200 beds, it provides secondary-level care for the Bintulu industrial and oil and gas workforce, referring complex cases to Hospital Sibu or HUS Kuching.",
    famousFor: ["Main hospital for Bintulu — industrial coastal Sarawak", "Serves Bintulu's oil, gas and industrial communities"],
    infrastructure: {
      yearEstablished: 1975,
      totalBeds: 200,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 6,
      area: "~6 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: true,
      parkingBays: "~180 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Hospital, 97000 Bintulu, Sarawak",
      mainLine: "+6086-252 333 (verify with hospital)",
      emergencyLine: "+6086-252 333 ext. A&E (verify)",
      appointmentLine: "+6086-252 333 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Bintulu Sarawak"
    },
    transport: {
      nearest: "Bintulu town centre — 10 min taxi",
      bus: "Town bus routes",
      highway: "Coastal Sarawak road network",
      landmark: "Bintulu town"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, daytime",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (limited)",
      patientTransport: "Hospital ambulance. Air transport coordination for critical cases."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Standard",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Internal Medicine",
        "Psychiatry (limited)", "Ophthalmology (visiting)", "ENT (visiting)"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HUS Kuching", note: "Transfer to HUS KCH" },
        { specialty: "Neurosurgery", transferTo: "HUS Kuching or Hospital Sibu", note: "Transfer to regional/apex centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No transplant in Sarawak" }
      ],
      byReferral: [
        "Complex cases — Hospital Sibu (~150 km) or HUS Kuching (~600 km)"
      ]
    },
    transferPathway: {
      summary: "Bintulu district hospital. Complex cases to Hospital Sibu (150 km) or HUS Kuching (600 km).",
      routes: [
        { condition: "Specialist cases", to: "Hospital Sibu", reason: "Nearest regional centre", distanceKm: 150 },
        { condition: "Quaternary cases", to: "Hospital Umum Sarawak (HUS) Kuching", reason: "Sarawak apex centre", distanceKm: 600 }
      ],
      howToTransfer: "MOH referral. Road or air ambulance."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "200 beds. Bintulu district/secondary hospital.",
    notableGaps: "No cardiac surgery. No neurosurgery. Transfer to Sibu or KCH required.",
    primaryExcellence: "Secondary public hospital — Bintulu, coastal Sarawak",
    secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80",
    roomRateRaw: 5,
    insurance: "Heavily subsidised.",
    fppScheme: true,
    fppDeposit: "RM 500–1,500",
    gaps: "No cardiac surgery. No neurosurgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hkapit",
    name: "Hospital Kapit",
    nameShort: "Hospital Kapit",
    sector: "public",
    tier: "district",
    state: "Sarawak",
    city: "Kapit",
    intro: "Hospital Kapit serves the deeply remote Kapit Division in the interior of Sarawak, accessible primarily by river or air. With 100 beds and very limited facilities, it is the frontline hospital for a large area inhabited predominantly by indigenous Iban and Orang Ulu communities living in longhouses deep in the Sarawak interior. Critical cases are medivac'd to Hospital Sibu. The Flying Doctor Service (Perkhidmatan Udara) serves the most remote longhouses beyond Kapit.",
    famousFor: ["Hospital serving Sarawak's most remote interior region", "Serves Iban and Orang Ulu longhouse communities of the upper Rejang", "Medivac hub — frequent air ambulance transfers to Hospital Sibu", "Accessible mainly by river boat or aircraft"],
    infrastructure: {
      yearEstablished: 1970,
      totalBeds: 100,
      icuBeds: 4,
      nicuBeds: 2,
      operatingTheatres: 2,
      area: "~3 acres",
      buildings: "Main Block",
      helipad: true,
      parkingBays: "~80 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Hospital, 96800 Kapit, Sarawak",
      mainLine: "+6084-796 333 (verify with hospital)",
      emergencyLine: "+6084-796 333 ext. A&E (verify)",
      appointmentLine: "+6084-796 333 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Kapit Sarawak interior"
    },
    transport: {
      nearest: "Kapit town — accessible by river express (speedboat) from Sibu (~3 hours) or by light aircraft",
      bus: "No road connection to Kuching or Sibu — river or air access only",
      highway: "No road connection — river or air access only",
      landmark: "Kapit town, upper Rejang River, interior Sarawak"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Limited daytime",
      atm: "Very limited — Kapit town",
      surau: "Available",
      chapel: "Available (multi-faith)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Very limited",
      patientTransport: "Air ambulance (medivac) to Hospital Sibu. River ambulance for some cases."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Standard",
      notes: "Remote hospital. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7 — basic)", "ICU (very limited)",
        "General Medicine", "General Surgery (basic)",
        "Obstetrics & Gynaecology (basic)", "Paediatrics (basic)",
        "Internal Medicine (basic)"
      ],
      notAvailable: [
        { specialty: "Specialist Services", transferTo: "Hospital Sibu", note: "MEDIVAC REQUIRED — Kapit has very limited specialist capability. Medivac to Hospital Sibu for all specialist care." },
        { specialty: "Cardiothoracic Surgery", transferTo: "HUS Kuching via Hospital Sibu", note: "Medivac to Sibu, then transfer to HUS KCH" },
        { specialty: "Neurosurgery", transferTo: "Hospital Sibu or HUS Kuching", note: "Medivac required" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No transplant in Sarawak" }
      ],
      byReferral: [
        "URGENT: All specialist cases must medivac to Hospital Sibu",
        "The Flying Doctor Service covers longhouses beyond Kapit for primary care and stabilisation"
      ]
    },
    transferPathway: {
      summary: "CRITICAL: Hospital Kapit is a remote district hospital with extremely limited capability. Kapit is accessible only by river or air. All specialist cases require medivac (air ambulance) to Hospital Sibu. The Flying Doctor Service (Perkhidmatan Udara) covers remote longhouses in this division.",
      routes: [
        { condition: "ALL specialist and complex cases", to: "Hospital Sibu", reason: "Nearest regional centre — air ambulance required", distanceKm: 160 },
        { condition: "Quaternary/highly complex", to: "Hospital Umum Sarawak (HUS) Kuching", reason: "Sarawak apex centre — via Sibu or direct flight", distanceKm: 350 }
      ],
      howToTransfer: "Air ambulance (medivac) arranged by MOH from Kapit airport. River ambulance may be used for some cases to reach Sibu by river express. Do not delay — stabilise and arrange medivac."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "100 beds. Remote interior Sarawak hospital. River/air access only. Very limited specialist services. Medivac to Sibu for all complex cases.",
    notableGaps: "CRITICAL: Very limited specialist services. Accessible only by river or air. Medivac to Sibu required for all specialist care. Flying Doctor Service serves remote longhouses beyond Kapit.",
    primaryExcellence: "Remote district hospital — Kapit, interior Sarawak (serves indigenous longhouse communities)",
    secondarySpecialties: "Basic Emergency, Obstetrics",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "Obstetrics"],
    roomRate: "RM 3 – RM 30",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "CRITICAL: Extremely limited specialist capability. River/air access only. Medivac to Sibu required for virtually all specialist care.",
    robotics: "Very basic — X-ray, limited imaging.",
    doctorQualifications: "MOH medical officers. Very limited specialist coverage.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hsriaman",
    name: "Hospital Sri Aman",
    nameShort: "Hospital Sri Aman",
    sector: "public",
    tier: "district",
    state: "Sarawak",
    city: "Sri Aman",
    intro: "Hospital Sri Aman serves the Sri Aman Division in southern Sarawak, providing essential healthcare for the region's predominantly Iban communities and the Sri Aman town population. With 100 beds and limited specialist services, complex cases are referred to HUS Kuching approximately 180 km away.",
    famousFor: ["District hospital for Sri Aman Division, southern Sarawak", "Serves the predominantly Iban communities of Sri Aman"],
    infrastructure: {
      yearEstablished: 1965,
      totalBeds: 100,
      icuBeds: 4,
      nicuBeds: 2,
      operatingTheatres: 2,
      area: "~3 acres",
      buildings: "Main Block",
      helipad: true,
      parkingBays: "~100 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Hospital, 95000 Sri Aman, Sarawak",
      mainLine: "+6083-320 333 (verify with hospital)",
      emergencyLine: "+6083-320 333 ext. A&E (verify)",
      appointmentLine: "+6083-320 333 (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Sri Aman Sarawak"
    },
    transport: {
      nearest: "Sri Aman town — 5 min",
      bus: "Limited town transport",
      highway: "Pan Borneo Highway / Jalan Kuching–Sri Aman (~180 km to Kuching)",
      landmark: "Sri Aman town, southern Sarawak"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Daytime only",
      atm: "Limited",
      surau: "Available",
      chapel: "Available",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Hospital ambulance to HUS Kuching."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Standard",
      notes: "Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7 — basic)", "ICU (limited)",
        "General Medicine", "General Surgery (basic)",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics (basic)", "Internal Medicine (basic)"
      ],
      notAvailable: [
        { specialty: "Specialist Services", transferTo: "HUS Kuching (~180 km)", note: "District hospital — transfer to HUS Kuching for specialist care" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HUS Kuching", note: "Transfer to apex centre" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No transplant in Sarawak" }
      ],
      byReferral: [
        "All specialist cases — HUS Kuching (~180 km by road)"
      ]
    },
    transferPathway: {
      summary: "Sri Aman is a district hospital. All specialist care requires transfer to HUS Kuching, approximately 180 km by road.",
      routes: [
        { condition: "All specialist cases", to: "Hospital Umum Sarawak (HUS) Kuching", reason: "Nearest apex centre — 180 km by road", distanceKm: 180 }
      ],
      howToTransfer: "MOH referral. Road ambulance to HUS KCH."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "100 beds. District hospital for Sri Aman Division.",
    notableGaps: "Limited specialist services. Transfer to HUS Kuching required for all specialist care.",
    primaryExcellence: "District hospital — Sri Aman Division, southern Sarawak",
    secondarySpecialties: "Obstetrics, Paediatrics, Basic Emergency",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 30",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited specialist capability. Transfer to HUS KCH required.",
    robotics: "Basic imaging.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "normah-kuching",
    name: "Normah Medical Specialist Centre Kuching",
    nameShort: "Normah Kuching",
    sector: "private",
    tier: "tertiary",
    state: "Sarawak",
    city: "Kuching",
    intro: "Normah Medical Specialist Centre is the leading and most well-established private hospital in Sarawak, with 250 beds and a long track record of serving Kuching and Sarawak's private healthcare needs. Normah is the first choice for private specialist care in Sarawak and attracts patients from across the state.",
    famousFor: ["Leading private hospital in Sarawak", "Most established and trusted private hospital brand in Kuching", "Comprehensive private specialist services", "Serves Sarawak's growing middle-class and corporate patients"],
    infrastructure: {
      yearEstablished: 1994,
      totalBeds: 250,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 10,
      area: "~4 acres",
      buildings: "Main Tower, Specialist Clinics Block",
      helipad: false,
      parkingBays: "~300 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "937, Jalan Tun Abdul Rahman, 93050 Kuching, Sarawak",
      mainLine: "+6082-440 055",
      emergencyLine: "+6082-440 055 ext. A&E",
      appointmentLine: "+6082-440 055",
      website: "https://www.normah.com.my",
      mapQuery: "Normah Medical Specialist Centre Kuching Sarawak"
    },
    transport: {
      nearest: "Kuching city centre — 15 min taxi",
      bus: "Kuching city bus routes",
      highway: "Jalan Tun Abdul Rahman / Jalan Taman Budaya, Kuching",
      landmark: "Jalan Tun Abdul Rahman, near Kuching city"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 7am–9pm",
      atm: "Main lobby",
      surau: "Available",
      chapel: "Available (multi-faith room)",
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Medical transport available"
    },
    visitingHours: {
      general: "11:00–21:00 (private rooms flexible)",
      icu: "Restricted — check with nurse",
      paediatric: "Parents: unrestricted",
      maternity: "Partner/family: flexible",
      notes: "Private hospital — flexible visiting."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/CCU", "NICU",
        "Cardiology", "Interventional Cardiology",
        "General Surgery", "Colorectal Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery", "Sports Medicine",
        "Obstetrics & Gynaecology", "Fertility/IVF",
        "Paediatrics", "Paediatric Surgery",
        "Clinical Oncology", "Surgical Oncology",
        "Gastroenterology", "Hepatobiliary Surgery",
        "Nephrology", "Urology",
        "Respiratory Medicine", "Endocrinology",
        "Psychiatry", "Dermatology",
        "Ophthalmology", "ENT",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sarawak" },
        { specialty: "Cardiothoracic Surgery (complex)", transferTo: "HUS Kuching or KL private centres", note: "Complex cardiac surgery — refer to HUS or KL" }
      ],
      byReferral: [
        "Liver transplant — Hospital Selayang",
        "BMT — Hospital Ampang or UMMC"
      ]
    },
    transferPathway: {
      summary: "Normah is Sarawak's leading private hospital. Complex transplant cases refer to national centres in Peninsular Malaysia.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang, Selangor", reason: "Malaysia's only liver transplant centre", distanceKm: 1500 }
      ],
      howToTransfer: "Specialist referral. International patient coordinator for Peninsular transfers."
    },
    specialtyRanks: {
      "Sarawak Private": { rank: "Leading private hospital in Sarawak", desc: "Most recognised and comprehensive private hospital in Kuching and Sarawak" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "250 beds. Most established private hospital in Sarawak. Comprehensive specialist services.",
    notableGaps: "No liver transplant. Complex cardiac surgery limited.",
    primaryExcellence: "Sarawak's leading private specialist hospital — Kuching",
    secondarySpecialties: "Cardiology, Oncology, Orthopaedics, Obstetrics, IVF",
    fullSpecialties: ["Cardiology", "Oncology", "Orthopaedics", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 600+/night",
    roomRateRaw: 320,
    insurance: "Accepts most major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A (deposit RM 2,000–8,000)",
    gaps: "No liver transplant.",
    robotics: "Modern imaging — CT, MRI, advanced endoscopy.",
    doctorQualifications: "MMC-registered specialists — many trained at Royal Colleges.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.normah.com.my" }
    ]
  },
  {
    id: "bmc-kuching",
    name: "Borneo Medical Centre (BMC) Kuching",
    nameShort: "Borneo Medical Centre",
    sector: "private",
    tier: "tertiary",
    state: "Sarawak",
    city: "Kuching",
    intro: "Borneo Medical Centre (BMC) is an established private hospital in Kuching, Sarawak, providing specialist medical care for the Kuching community. BMC offers a comprehensive range of specialist services and is a recognised private healthcare option in Sarawak.",
    famousFor: ["Established private hospital in Kuching", "Known for orthopaedics and general specialist care"],
    infrastructure: {
      yearEstablished: 1998,
      totalBeds: 200,
      icuBeds: 16,
      nicuBeds: 6,
      operatingTheatres: 8,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~220 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Jalan Tun Ahmad Zaidi Adruce, 93450 Kuching, Sarawak",
      mainLine: "+6082-250 333 (verify with hospital)",
      emergencyLine: "+6082-250 333 ext. A&E (verify)",
      appointmentLine: "+6082-250 333 (verify)",
      website: "https://www.borneomedical.com.my",
      mapQuery: "Borneo Medical Centre BMC Kuching Sarawak"
    },
    transport: {
      nearest: "Kuching city — 15 min taxi",
      bus: "City bus routes",
      highway: "Jalan Tun Ahmad Zaidi Adruce, Kuching",
      landmark: "Near HUS Kuching area"
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
      patientTransport: "Available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Neurology", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Oncology (selected)",
        "ENT", "Ophthalmology", "Urology", "Dermatology"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sarawak" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Normah or HUS Kuching", note: "Refer to larger centres" }
      ],
      byReferral: [
        "Complex cases — Normah or HUS Kuching"
      ]
    },
    transferPathway: {
      summary: "Private hospital in Kuching. Complex cases to Normah or HUS.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "200 beds. Established private hospital in Kuching.",
    notableGaps: "No liver transplant. No cardiothoracic surgery.",
    primaryExcellence: "Established private specialist hospital — Kuching",
    secondarySpecialties: "Orthopaedics, Obstetrics, Cardiology",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 500+/night",
    roomRateRaw: 270,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.borneomedical.com.my" }
    ]
  },
  {
    id: "kpj-kuching",
    name: "KPJ Kuching Specialist Hospital",
    nameShort: "KPJ Kuching",
    sector: "private",
    tier: "tertiary",
    state: "Sarawak",
    city: "Kuching",
    intro: "KPJ Kuching Specialist Hospital is part of the KPJ Healthcare group, offering private specialist care in Kuching with the benefit of the nationwide KPJ group's insurance panel and clinical network.",
    famousFor: ["KPJ Healthcare group presence in Sarawak", "Wide insurance panel acceptance"],
    infrastructure: {
      yearEstablished: 2005,
      totalBeds: 150,
      icuBeds: 12,
      nicuBeds: 5,
      operatingTheatres: 7,
      area: "~2 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~180 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Jalan Tun Jugah, 93350 Kuching, Sarawak",
      mainLine: "+6082-365 777 (verify with hospital)",
      emergencyLine: "+6082-365 777 ext. A&E (verify)",
      appointmentLine: "+6082-365 777 (verify)",
      website: "https://www.kpjkuching.com",
      mapQuery: "KPJ Kuching Specialist Hospital Sarawak"
    },
    transport: {
      nearest: "Kuching city — 15 min taxi",
      bus: "City bus routes",
      highway: "Jalan Tun Jugah, Kuching",
      landmark: "Jalan Tun Jugah, Kuching"
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
      patientTransport: "Available"
    },
    visitingHours: {
      general: "11:00–21:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology", "Neurology", "Orthopaedics",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Gastroenterology", "Oncology (selected)",
        "ENT", "Ophthalmology", "Urology", "Dermatology",
        "Rehabilitation"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sarawak" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Normah or HUS Kuching", note: "Refer to larger centres" }
      ],
      byReferral: [
        "Complex cases — Normah or HUS KCH"
      ]
    },
    transferPathway: {
      summary: "KPJ private hospital. Complex cases to Normah or HUS.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "150 beds. KPJ Healthcare group hospital in Kuching.",
    notableGaps: "No liver transplant. No cardiac surgery.",
    primaryExcellence: "KPJ private hospital — Kuching, Sarawak",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 480+/night",
    roomRateRaw: 260,
    insurance: "KPJ group insurance panels. Major Malaysian insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.kpjkuching.com" },
      { label: "KPJ Healthcare Group", url: "https://www.kpj.com.my" }
    ]
  },
  {
    id: "timberland-kuching",
    name: "Timberland Medical Centre Kuching",
    nameShort: "Timberland Medical Centre",
    sector: "private",
    tier: "tertiary",
    state: "Sarawak",
    city: "Kuching",
    intro: "Timberland Medical Centre is an established private hospital in Kuching providing specialist care for the community. It is a trusted community private hospital offering a range of specialist services at accessible pricing.",
    famousFor: ["Established community private hospital in Kuching", "Accessible private specialist care in Sarawak"],
    infrastructure: {
      yearEstablished: 1997,
      totalBeds: 120,
      icuBeds: 10,
      nicuBeds: 4,
      operatingTheatres: 6,
      area: "~2 acres",
      buildings: "Main Building, Specialist Clinics",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "Jalan Rock, 93200 Kuching, Sarawak",
      mainLine: "+6082-234 466 (verify with hospital)",
      emergencyLine: "+6082-234 466 ext. A&E (verify)",
      appointmentLine: "+6082-234 466 (verify)",
      website: "https://www.timberlandmedical.com.my",
      mapQuery: "Timberland Medical Centre Kuching Sarawak"
    },
    transport: {
      nearest: "Kuching city centre — 10 min taxi",
      bus: "City bus routes",
      highway: "Jalan Rock, Kuching city",
      landmark: "Jalan Rock area, Kuching"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, daytime",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi",
      patientTransport: "Available"
    },
    visitingHours: {
      general: "11:00–20:00",
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology (general)", "Obstetrics & Gynaecology",
        "Paediatrics", "Orthopaedics",
        "ENT", "Ophthalmology", "Dermatology", "Urology"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "No liver transplant in Sarawak" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Normah or HUS Kuching", note: "Refer to larger centre" }
      ],
      byReferral: [
        "Complex cases — Normah or HUS Kuching"
      ]
    },
    transferPathway: {
      summary: "Community private hospital in Kuching. Complex cases to Normah or HUS.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "120 beds. Established private hospital in Kuching.",
    notableGaps: "No liver transplant. No cardiac surgery. Smaller hospital.",
    primaryExcellence: "Community private hospital — Kuching",
    secondarySpecialties: "Obstetrics, General Surgery, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 130 – RM 400+/night",
    roomRateRaw: 210,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.timberlandmedical.com.my" }
    ]
  },
  {
    id: "columbia-kuching",
    name: "Columbia Asia Hospital Kuching",
    nameShort: "Columbia Asia Kuching",
    sector: "private",
    tier: "tertiary",
    state: "Sarawak",
    city: "Kuching",
    intro: "Columbia Asia Hospital Kuching is part of the Columbia Asia group, offering affordable private specialist care in Kuching. The hospital provides a range of specialist services at competitive pricing, making it a choice for patients seeking cost-effective private healthcare in Sarawak.",
    famousFor: ["Affordable Columbia Asia private care in Kuching", "Growing private hospital option in Sarawak"],
    infrastructure: {
      yearEstablished: 2010,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 3,
      operatingTheatres: 4,
      area: "~2 acres",
      buildings: "Main Building",
      helipad: false,
      parkingBays: "~120 bays",
      parkingRate: "RM 1.50/hour"
    },
    contact: {
      address: "No. 1 Jalan Song Thian Cheok, 93350 Kuching, Sarawak",
      mainLine: "+6082-365 888 (verify with hospital)",
      emergencyLine: "+6082-365 888 ext. A&E (verify)",
      appointmentLine: "+6082-365 888 (verify)",
      website: "https://www.columbiaasia.com/kuching",
      mapQuery: "Columbia Asia Hospital Kuching Sarawak"
    },
    transport: {
      nearest: "Kuching city — 15 min taxi",
      bus: "City bus routes",
      highway: "Jalan Song Thian Cheok, Kuching",
      landmark: "Kuching city area"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, daytime",
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
      icu: "Restricted",
      paediatric: "Parents: unrestricted",
      maternity: "Flexible",
      notes: "Private hospital."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU",
        "General Medicine", "General Surgery",
        "Cardiology (general)", "Obstetrics & Gynaecology",
        "Paediatrics", "Orthopaedics",
        "ENT", "Ophthalmology", "Dermatology"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "No liver transplant in Sarawak" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Normah or HUS Kuching", note: "Refer to larger centre" }
      ],
      byReferral: [
        "Complex cases — Normah or HUS Kuching"
      ]
    },
    transferPathway: {
      summary: "Community private hospital. Complex cases to Normah or HUS.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "Columbia Asia Group"],
    verifiedNotes: "100 beds. Columbia Asia group hospital in Kuching.",
    notableGaps: "No liver transplant. No cardiac surgery. Smaller hospital.",
    primaryExcellence: "Affordable private care — Kuching",
    secondarySpecialties: "Obstetrics, General Medicine",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 120 – RM 350+/night",
    roomRateRaw: 180,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.columbiaasia.com/kuching" }
    ]
  }
,
  {
    id: "hsarikei", name: "Hospital Sarikei", nameShort: "Hsp. Sarikei",
    sector: "public", tier: "district", state: "Sarawak", city: "Sarikei",
    intro: "Hospital Sarikei is the main public hospital serving the Sarikei division of Sarawak, an agricultural district known for its pepper production.",
    famousFor: ["Main hospital for Sarikei Division", "Serves pepper farming communities of central Sarawak"],
    infrastructure: { yearEstablished: 1975, totalBeds: 120, icuBeds: 8, nicuBeds: 4, operatingTheatres: 2, area: "~6 acres", buildings: "Main Block", helipad: true, parkingBays: "~120 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 96100 Sarikei, Sarawak", mainLine: "+6384-655 333", emergencyLine: "+6384-655 333 ext. A&E", appointmentLine: "+6384-655 333", website: "https://www.moh.gov.my", mapQuery: "Hospital Sarikei Sarawak" },
    transport: { nearest: "Sarikei town — 5 min drive", bus: "Bus from Sibu (~1.5 hrs)", highway: "Via Pan Borneo Highway", landmark: "Sarikei town centre" },
    facilities: { pharmacy24h: true, cafeteria: "Canteen", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "MOH ambulance and boat transfers" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Internal Medicine"],
      notAvailable: [{ specialty: "Advanced subspecialties", transferTo: "Hospital Sibu or Hospital Umum Sarawak", note: "District-level hospital" }],
      byReferral: ["Complex cases → Hospital Sibu or Kuching"]
    },
    transferPathway: { summary: "District hospital for Sarikei Division. Complex cases → Hospital Sibu.", routes: [], howToTransfer: "MOH referral or air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sarikei Division", secondarySpecialties: "General Medicine, Surgery, Obstetrics",
    fullSpecialties: ["Emergency", "General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: true, fppDeposit: "N/A",
    gaps: "No advanced specialties.", robotics: "None.", doctorQualifications: "MOH-registered MOs and specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~120 beds (est.). Main hospital for Sarikei Division.", notableGaps: "No complex surgery."
  },
  {
    id: "hsamarahan", name: "Hospital Samarahan", nameShort: "Hsp. Samarahan",
    sector: "public", tier: "district", state: "Sarawak", city: "Kota Samarahan",
    intro: "Hospital Samarahan serves Kota Samarahan — Sarawak's university city and administrative hub, home to UNIMAS. The hospital supports the growing student and government worker population.",
    famousFor: ["Serves UNIMAS university city population", "Fast-growing Samarahan district"],
    infrastructure: { yearEstablished: 1995, totalBeds: 150, icuBeds: 10, nicuBeds: 4, operatingTheatres: 3, area: "~8 acres", buildings: "Main Block", helipad: true, parkingBays: "~200 bays", parkingRate: "Free" },
    contact: { address: "Jalan Datu Patinggi Haji Abdul Rahman, 94300 Kota Samarahan, Sarawak", mainLine: "+6082-665 333", emergencyLine: "+6082-665 333 ext. A&E", appointmentLine: "+6082-665 333", website: "https://www.moh.gov.my", mapQuery: "Hospital Samarahan Sarawak" },
    transport: { nearest: "Kota Samarahan — 5 min drive", bus: "Bus from Kuching (~30 min)", highway: "Via Jalan Kuching–Samarahan", landmark: "Near UNIMAS campus" },
    facilities: { pharmacy24h: true, cafeteria: "Cafeteria", atm: "On-site", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Internal Medicine", "Orthopaedics"],
      notAvailable: [{ specialty: "Cardiothoracic surgery, Neurosurgery", transferTo: "Hospital Umum Sarawak Kuching", note: "Secondary district hospital" }],
      byReferral: ["Complex cases → Hospital Umum Sarawak"]
    },
    transferPathway: { summary: "District hospital near Kuching. Complex cases → Hospital Umum Sarawak.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kota Samarahan / UNIMAS area", secondarySpecialties: "General Medicine, Surgery, Obstetrics",
    fullSpecialties: ["Emergency", "General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Orthopaedics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: true, fppDeposit: "N/A",
    gaps: "No cardiothoracic or neurosurgery.", robotics: "None.", doctorQualifications: "MOH-registered MOs and specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~150 beds (est.). District hospital near UNIMAS university.", notableGaps: "Refer complex cases to Kuching."
  },
  {
    id: "miri-city-mc", name: "Miri City Medical Centre", nameShort: "Miri City MC",
    sector: "private", tier: "secondary", state: "Sarawak", city: "Miri",
    intro: "Miri City Medical Centre is a private hospital serving the oil and gas hub of Miri, northern Sarawak. It provides private specialist care for the city's energy sector workforce.",
    famousFor: ["Private hospital for Miri oil and gas community", "Key private healthcare provider in northern Sarawak"],
    infrastructure: { yearEstablished: 2000, totalBeds: 150, icuBeds: 12, nicuBeds: 4, operatingTheatres: 4, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "RM 1–2/hr" },
    contact: { address: "Jalan Hokkien, 98000 Miri, Sarawak", mainLine: "+6085-426 622", emergencyLine: "+6085-426 622 ext. A&E", appointmentLine: "+6085-426 622", website: "https://www.miricitymedical.com", mapQuery: "Miri City Medical Centre Sarawak" },
    transport: { nearest: "Miri city centre — 5 min drive", bus: "Local city bus", highway: "Via Pan Borneo Highway Miri section", landmark: "Miri city" },
    facilities: { pharmacy24h: true, cafeteria: "Café", atm: "On-site", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "Private ambulance" },
    visitingHours: { general: "10:00–12:00, 14:00–20:00", icu: "Restricted", paediatric: "Parents: extended", maternity: "Standard", notes: "Check with reception." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "Surgery", "Obstetrics", "Cardiology", "Orthopaedics", "ENT", "Ophthalmology"],
      notAvailable: [{ specialty: "Bone marrow transplant, complex neurosurgery", transferTo: "Hospital Miri (public) or KL", note: "Secondary private hospital" }],
      byReferral: ["Bone marrow transplant", "Complex neurosurgery"]
    },
    transferPathway: { summary: "Private hospital in Miri. Complex cases → Hospital Miri (public) or referral to KL.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {}, accreditations: ["MSQH Accredited (verify)"],
    primaryExcellence: "Private hospital — Miri oil and gas community", secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Cardiology", "Orthopaedics", "ENT", "Ophthalmology"],
    roomRate: "RM 180 – RM 500/night", roomRateRaw: 280, insurance: "Major panels; oil company corporate panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "No bone marrow transplant or complex neurosurgery.", robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.", imageUrl: null, imageCredit: "N/A",
    officialSources: [{ label: "Miri City Medical Centre", url: "https://www.miricitymedical.com" }],
    verifiedNotes: "~150 beds (est.). Private hospital for Miri energy sector.", notableGaps: "No bone marrow transplant."
  },
  {
    id: "hserian",
    name: "Hospital Serian",
    nameShort: "Hospital Serian",
    sector: "public", tier: "district", state: "Sarawak", city: "Serian",
    intro: "Hospital Serian serves the Serian Division of Sarawak, a predominantly Bidayuh indigenous community area near Kuching.",
    famousFor: ["District hospital for Serian Division — Bidayuh heartland"],
    infrastructure: { yearEstablished: 1972, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 94700 Serian, Sarawak", mainLine: "+6082-874 222 (verify)", emergencyLine: "+6082-874 222 ext. A&E", appointmentLine: "+6082-874 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Serian Sarawak" },
    transport: { nearest: "Serian town — 5 min walk", bus: "Bus from Kuching (~1.5 hrs)", highway: "Pan Borneo Highway — Serian exit", landmark: "Serian town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Sarawak General Hospital Kuching", note: "District hospital" }],
      byReferral: ["Specialist → SGH Kuching"]
    },
    transferPathway: { summary: "District hospital. Complex → SGH Kuching.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Serian Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Serian.", notableGaps: "Specialist referral to SGH Kuching."
  },
  {
    id: "hlimbang",
    name: "Hospital Limbang",
    nameShort: "Hospital Limbang",
    sector: "public", tier: "district", state: "Sarawak", city: "Limbang",
    intro: "Hospital Limbang serves the Limbang Division of northern Sarawak, which is enclosed within Brunei Darussalam territory.",
    famousFor: ["District hospital for Limbang — Sarawak exclave area between Brunei", "Cross-border access point"],
    infrastructure: { yearEstablished: 1968, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 98700 Limbang, Sarawak", mainLine: "+6085-212 222 (verify)", emergencyLine: "+6085-212 222 ext. A&E", appointmentLine: "+6085-212 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Limbang Sarawak" },
    transport: { nearest: "Limbang town — 5 min walk", bus: "Limited routes", highway: "Via Brunei border crossing", landmark: "Limbang town, Brunei-encircled area" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Miri / SGH Kuching", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Miri or SGH Kuching"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Miri.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Limbang Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Limbang.", notableGaps: "Specialist referral to Hospital Miri."
  },
  {
    id: "hbetong",
    name: "Hospital Betong",
    nameShort: "Hospital Betong",
    sector: "public", tier: "district", state: "Sarawak", city: "Betong",
    intro: "Hospital Betong serves the Betong Division of western Sarawak, a predominantly Iban and Malay community area.",
    famousFor: ["District hospital for Betong Division"],
    infrastructure: { yearEstablished: 1975, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 95700 Betong, Sarawak", mainLine: "+6083-473 222 (verify)", emergencyLine: "+6083-473 222 ext. A&E", appointmentLine: "+6083-473 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Betong Sarawak" },
    transport: { nearest: "Betong town — 5 min walk", bus: "Bus from Kuching (~3 hrs)", highway: "Pan Borneo Highway via Sri Aman", landmark: "Betong town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "SGH Kuching", note: "District hospital" }],
      byReferral: ["Specialist → SGH Kuching"]
    },
    transferPathway: { summary: "District hospital. Complex → SGH Kuching.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Betong Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Betong.", notableGaps: "Specialist referral to SGH Kuching."
  },
  {
    id: "hlawas",
    name: "Hospital Lawas",
    nameShort: "Hospital Lawas",
    sector: "public", tier: "district", state: "Sarawak", city: "Lawas",
    intro: "Hospital Lawas serves the remote Lawas Division in northern Sarawak, bordering Sabah and Brunei.",
    famousFor: ["District hospital for Lawas — remote northern Sarawak"],
    infrastructure: { yearEstablished: 1978, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 98850 Lawas, Sarawak", mainLine: "+6085-285 222 (verify)", emergencyLine: "+6085-285 222 ext. A&E", appointmentLine: "+6085-285 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Lawas Sarawak" },
    transport: { nearest: "Lawas town — 5 min walk", bus: "Limited routes", highway: "Via Brunei or Sabah crossing", landmark: "Lawas town, northernmost Sarawak" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Limbang / Hospital Miri", note: "Remote district hospital" }],
      byReferral: ["Specialist → Hospital Miri"]
    },
    transferPathway: { summary: "Remote district hospital. Complex → Hospital Miri.", routes: [], howToTransfer: "MOH referral / air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Lawas, northern Sarawak", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~60 beds (est.). Remote district hospital.", notableGaps: "Air medevac for complex cases."
  },
  {
    id: "hmukah",
    name: "Hospital Mukah",
    nameShort: "Hospital Mukah",
    sector: "public", tier: "district", state: "Sarawak", city: "Mukah",
    intro: "Hospital Mukah serves the Mukah Division of central Sarawak, a coastal area known for its Melanau community and sago industry.",
    famousFor: ["District hospital for Mukah Division — sago belt of Sarawak"],
    infrastructure: { yearEstablished: 1975, totalBeds: 130, icuBeds: 6, nicuBeds: 2, operatingTheatres: 3, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~100 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 96400 Mukah, Sarawak", mainLine: "+6084-872 222 (verify)", emergencyLine: "+6084-872 222 ext. A&E", appointmentLine: "+6084-872 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Mukah Sarawak" },
    transport: { nearest: "Mukah town — 5 min walk", bus: "Bus from Sibu (~3 hrs) or Bintulu (~2 hrs)", highway: "Route 10 coastal road", landmark: "Mukah town, Sarawak coast" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Sibu / Hospital Bintulu", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Sibu or Hospital Bintulu"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Sibu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Mukah Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~130 beds (est.). District hospital for Mukah.", notableGaps: "Specialist referral to Hospital Sibu."
  },
  {
    id: "hsong",
    name: "Hospital Song",
    nameShort: "Hospital Song",
    sector: "public", tier: "district", state: "Sarawak", city: "Song",
    intro: "Hospital Song serves the remote Song area in the Kapit Division of central Sarawak, accessible mainly by river transport.",
    famousFor: ["District hospital for Song — remote river community of central Sarawak"],
    infrastructure: { yearEstablished: 1980, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~30 bays", parkingRate: "Free" },
    contact: { address: "Song, 96700 Song, Sarawak", mainLine: "+6084-777 222 (verify)", emergencyLine: "+6084-777 222 ext. A&E", appointmentLine: "+6084-777 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Song Sarawak" },
    transport: { nearest: "Song town — 5 min walk", bus: "River boat from Sibu (~2 hrs)", highway: "Limited road access — mainly river transport", landmark: "Song town, Rejang river tributary" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / boat / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Kapit / Hospital Sibu", note: "Remote district hospital" }],
      byReferral: ["Specialist → Hospital Kapit or Hospital Sibu"]
    },
    transferPathway: { summary: "Remote river-access hospital. Complex → Hospital Kapit.", routes: [], howToTransfer: "MOH referral / river transport / helicopter." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Song, Kapit Division", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote river community.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Remote district hospital, river access.", notableGaps: "Helicopter/boat transfer for complex cases."
  },
  {
    id: "hmatu",
    name: "Hospital Daro",
    nameShort: "Hospital Daro",
    sector: "public", tier: "district", state: "Sarawak", city: "Daro",
    intro: "Hospital Daro serves the Daro area in the Mukah Division of central Sarawak, a predominantly Melanau community.",
    famousFor: ["District hospital for Daro area, Mukah Division"],
    infrastructure: { yearEstablished: 1978, totalBeds: 50, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~40 bays", parkingRate: "Free" },
    contact: { address: "Daro, Mukah, Sarawak", mainLine: "+6084-854 222 (verify)", emergencyLine: "+6084-854 222 ext. A&E", appointmentLine: "+6084-854 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Daro Mukah Sarawak" },
    transport: { nearest: "Daro town — 5 min walk", bus: "Limited routes", highway: "Coastal road near Mukah", landmark: "Daro town, Mukah Division" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Mukah", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Mukah"]
    },
    transferPathway: { summary: "Small district hospital. Complex → Hospital Mukah.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Daro, Mukah Division", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~50 beds (est.). Small district hospital for Daro.", notableGaps: "Specialist referral to Hospital Mukah."
  },
  {
    id: "hsri-aman",
    name: "Hospital Sri Aman",
    nameShort: "Hospital Sri Aman",
    sector: "public", tier: "district", state: "Sarawak", city: "Sri Aman",
    intro: "Hospital Sri Aman serves the Sri Aman Division of western Sarawak, historically known as Simanggang and home to many Iban longhouse communities.",
    famousFor: ["District hospital for Sri Aman Division — Iban heartland of Sarawak"],
    infrastructure: { yearEstablished: 1965, totalBeds: 130, icuBeds: 6, nicuBeds: 2, operatingTheatres: 3, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~100 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 95000 Sri Aman, Sarawak", mainLine: "+6083-320 222 (verify)", emergencyLine: "+6083-320 222 ext. A&E", appointmentLine: "+6083-320 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Sri Aman Sarawak" },
    transport: { nearest: "Sri Aman town — 5 min walk", bus: "Bus from Kuching (~3 hrs)", highway: "Pan Borneo Highway", landmark: "Sri Aman town, Batang Lupar river" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "SGH Kuching", note: "District hospital" }],
      byReferral: ["Specialist → SGH Kuching"]
    },
    transferPathway: { summary: "District hospital. Complex → SGH Kuching.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sri Aman Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~130 beds (est.). District hospital for Sri Aman.", notableGaps: "Specialist referral to SGH Kuching."
  },
  {
    id: "hdalat",
    name: "Hospital Dalat",
    nameShort: "Hospital Dalat",
    sector: "public", tier: "district", state: "Sarawak", city: "Dalat",
    intro: "Hospital Dalat serves the Mukah Division area around Dalat, a sago-growing community in central coastal Sarawak.",
    famousFor: ["District hospital for Dalat — sago area of Sarawak"],
    infrastructure: { yearEstablished: 1978, totalBeds: 50, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~40 bays", parkingRate: "Free" },
    contact: { address: "Dalat, Mukah, Sarawak", mainLine: "+6084-841 222 (verify)", emergencyLine: "+6084-841 222 ext. A&E", appointmentLine: "+6084-841 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Dalat Sarawak" },
    transport: { nearest: "Dalat town — 5 min walk", bus: "Limited routes from Mukah", highway: "Coastal roads near Mukah", landmark: "Dalat town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Mukah", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Mukah"]
    },
    transferPathway: { summary: "Small district hospital. Complex → Hospital Mukah.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Dalat", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~50 beds (est.). Small district hospital for Dalat.", notableGaps: "Specialist referral to Hospital Mukah."
  },
  {
    id: "hlubok-antu",
    name: "Hospital Lubok Antu",
    nameShort: "Hospital Lubok Antu",
    sector: "public", tier: "district", state: "Sarawak", city: "Lubok Antu",
    intro: "Hospital Lubok Antu serves the border town of Lubok Antu in the Sri Aman Division, near the Batang Ai dam and Indonesian Kalimantan border.",
    famousFor: ["District hospital for Lubok Antu — Batang Ai border area"],
    infrastructure: { yearEstablished: 1980, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~30 bays", parkingRate: "Free" },
    contact: { address: "Lubok Antu, Sri Aman, Sarawak", mainLine: "+6083-584 222 (verify)", emergencyLine: "+6083-584 222 ext. A&E", appointmentLine: "+6083-584 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Lubok Antu Sarawak" },
    transport: { nearest: "Lubok Antu town — 5 min walk", bus: "Limited routes from Sri Aman (~2 hrs)", highway: "Interior road via Sri Aman", landmark: "Lubok Antu, Batang Ai lake" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Sri Aman / SGH Kuching", note: "Remote border hospital" }],
      byReferral: ["Specialist → Hospital Sri Aman or SGH Kuching"]
    },
    transferPathway: { summary: "Remote border district hospital. Complex → Hospital Sri Aman.", routes: [], howToTransfer: "MOH referral / helicopter." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Lubok Antu border area", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote border.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Remote border district hospital.", notableGaps: "Helicopter transfer for complex cases."
  },
  {
    id: "hmarudi",
    name: "Hospital Marudi",
    nameShort: "Hospital Marudi",
    sector: "public", tier: "district", state: "Sarawak", city: "Marudi",
    intro: "Hospital Marudi serves the Marudi area in the Baram district of the Miri Division, an important interior trading post accessible mainly by river and air.",
    famousFor: ["District hospital for Marudi — interior Miri Division", "Serves Baram river communities"],
    infrastructure: { yearEstablished: 1975, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Marudi, Baram, Sarawak", mainLine: "+6085-755 222 (verify)", emergencyLine: "+6085-755 222 ext. A&E", appointmentLine: "+6085-755 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Marudi Sarawak" },
    transport: { nearest: "Marudi town — 5 min walk", bus: "River boat from Miri (~3 hrs) or MASwings flight", highway: "River transport — Baram river", landmark: "Marudi town, Baram river trading post" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter / boat" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Miri", note: "Remote district hospital" }],
      byReferral: ["Specialist → Hospital Miri"]
    },
    transferPathway: { summary: "Remote river-access hospital. Complex → Hospital Miri.", routes: [], howToTransfer: "MOH referral / river boat / MASwings." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Marudi, Baram river", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote river community.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). Remote hospital, Marudi.", notableGaps: "River/air transport to Hospital Miri."
  },
  {
    id: "hlong-lama",
    name: "Hospital Long Lama",
    nameShort: "Hospital Long Lama",
    sector: "public", tier: "district", state: "Sarawak", city: "Long Lama",
    intro: "Hospital Long Lama serves the remote Long Lama area in the Baram district of Sarawak, a settlement in the deep interior accessible only by river or air.",
    famousFor: ["Remote district hospital — Long Lama, Baram interior Sarawak"],
    infrastructure: { yearEstablished: 1985, totalBeds: 30, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~1 acre", buildings: "Main Block", helipad: true, parkingBays: "~20 bays", parkingRate: "Free" },
    contact: { address: "Long Lama, Baram, Sarawak", mainLine: "+6085-766 222 (verify)", emergencyLine: "+6085-766 222 ext. A&E", appointmentLine: "+6085-766 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Long Lama Sarawak" },
    transport: { nearest: "Long Lama — very remote", bus: "None — river/air only", highway: "River transport or MASwings", landmark: "Long Lama, Baram river interior" },
    facilities: { pharmacy24h: false, cafeteria: "Basic", atm: "None", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Very limited", patientTransport: "Helicopter / boat" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "All specialist services", transferTo: "Hospital Marudi / Hospital Miri", note: "Very remote" }],
      byReferral: ["Specialist → Hospital Miri by helicopter"]
    },
    transferPathway: { summary: "Very remote hospital. Air medevac for complex cases.", routes: [], howToTransfer: "Air medevac / river boat." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "Remote district hospital — Long Lama, Baram interior", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Extremely limited — very remote.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~30 beds (est.). Remote interior hospital.", notableGaps: "Air/river medevac for complex cases."
  },
  {
    id: "hbau",
    name: "Hospital Bau",
    nameShort: "Hospital Bau",
    sector: "public", tier: "district", state: "Sarawak", city: "Bau",
    intro: "Hospital Bau serves the Bau district southwest of Kuching, a gold-mining historical town near the Indonesian border.",
    famousFor: ["District hospital for Bau — gold mining town near Kuching"],
    infrastructure: { yearEstablished: 1972, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Bau, Kuching Division, Sarawak", mainLine: "+6082-763 222 (verify)", emergencyLine: "+6082-763 222 ext. A&E", appointmentLine: "+6082-763 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Bau Sarawak" },
    transport: { nearest: "Bau town — 5 min walk", bus: "Bus from Kuching (~1 hr)", highway: "Via Route A1 from Kuching", landmark: "Bau town, near Kuching border area" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Sarawak General Hospital Kuching", note: "District hospital" }],
      byReferral: ["Specialist → SGH Kuching"]
    },
    transferPathway: { summary: "District hospital. Complex → SGH Kuching.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Bau, near Kuching", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District hospital for Bau.", notableGaps: "Specialist referral to SGH Kuching."
  },
  {
    id: "htelang",
    name: "Hospital Sarikei",
    nameShort: "Hospital Sarikei",
    sector: "public", tier: "district", state: "Sarawak", city: "Sarikei",
    intro: "Hospital Sarikei serves the Sarikei Division of central Sarawak, predominantly a Chinese and Melanau community area known for pepper cultivation.",
    famousFor: ["District hospital for Sarikei Division — Sarawak pepper belt"],
    infrastructure: { yearEstallished: 1968, totalBeds: 130, icuBeds: 6, nicuBeds: 2, operatingTheatres: 3, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~100 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 96100 Sarikei, Sarawak", mainLine: "+6084-656 222 (verify)", emergencyLine: "+6084-656 222 ext. A&E", appointmentLine: "+6084-656 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Sarikei Sarawak" },
    transport: { nearest: "Sarikei town — 5 min walk", bus: "Bus from Sibu (~2 hrs)", highway: "Pan Borneo Highway", landmark: "Sarikei town, Rajang delta" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "Hospital Sibu", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Sibu"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Sibu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sarikei Division", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~130 beds (est.). District hospital for Sarikei.", notableGaps: "Specialist referral to Hospital Sibu."
  },
  {
    id: "hbinatang",
    name: "Hospital Binatang",
    nameShort: "Hospital Binatang",
    sector: "public", tier: "district", state: "Sarawak", city: "Bintangor",
    intro: "Hospital Binatang (also referred to as Hospital Bintangor) serves the Binatang/Bintangor area in the Sarikei Division of central Sarawak.",
    famousFor: ["District hospital for Bintangor / Binatang area, Sarikei Division"],
    infrastructure: { yearEstallished: 1972, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 96600 Bintangor, Sarawak", mainLine: "+6084-690 222 (verify)", emergencyLine: "+6084-690 222 ext. A&E", appointmentLine: "+6084-690 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Bintangor Sarawak" },
    transport: { nearest: "Bintangor town — 5 min walk", bus: "Bus from Sibu (~1.5 hrs)", highway: "Pan Borneo Highway", landmark: "Bintangor town, Rajang river area" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Sarikei / Hospital Sibu", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Sarikei or Hospital Sibu"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Sarikei or Sibu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Bintangor", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District hospital for Bintangor.", notableGaps: "Specialist referral to Hospital Sarikei."
  }
];