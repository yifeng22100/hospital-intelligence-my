// data/hospitals/sabah.js
export const HOSPITALS_SABAH = [
  {
    id: "hqe",
    name: "Hospital Queen Elizabeth (HQE) Kota Kinabalu",
    nameShort: "HQE Kota Kinabalu",
    sector: "public",
    tier: "quaternary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "Hospital Queen Elizabeth (HQE) is Sabah's apex public hospital and the state's quaternary referral centre, serving as the highest-level medical facility for all of Sabah and Labuan. With 862 beds and the full spectrum of specialist services, HQE handles the most complex cases from across Sabah's vast and diverse population, including significant indigenous and rural communities.",
    famousFor: ["Sabah's apex quaternary referral centre", "Only centre in Sabah for complex surgical and medical cases", "Main hospital for East Malaysia's largest state by area", "Serves as referral hub for all district hospitals in Sabah"],
    infrastructure: {
      yearEstablished: 1956,
      totalBeds: 862,
      icuBeds: 40,
      nicuBeds: 14,
      operatingTheatres: 16,
      area: "~20 acres",
      buildings: "Main Block, Specialist Tower, Women & Children Block, HQEII adjacent specialist tower",
      helipad: true,
      parkingBays: "~600 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "13A, Jalan Penampang, 88200 Kota Kinabalu, Sabah",
      mainLine: "+6088-517 555",
      emergencyLine: "+6088-517 555 ext. A&E",
      appointmentLine: "+6088-218 166",
      website: "https://jknsabah.moh.gov.my/hqe1/",
      mapQuery: "Hospital Queen Elizabeth Kota Kinabalu Sabah"
    },
    transport: {
      nearest: "Kota Kinabalu city centre — 10 min taxi",
      bus: "City bus routes (KK city bus terminal)",
      highway: "Jalan Lilitan / Inner Ring Road — KK city",
      landmark: "Near Kota Kinabalu city centre, adjacent to HQEII"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 6:30am–9pm",
      atm: "Main lobby",
      surau: "Multiple floors",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HQE-Guest)",
      patientTransport: "Hospital ambulance and inter-hospital transfer coordination"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "MOH standard hours. Very busy hospital — phone ahead. ICU strictly limited."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU", "PICU",
        "General Surgery", "Trauma Surgery",
        "Cardiology", "Cardiothoracic Surgery",
        "Neurology", "Neurosurgery",
        "Orthopaedic Surgery", "Spine Surgery",
        "Obstetrics & Gynaecology", "Maternal-Fetal Medicine",
        "Paediatrics", "Paediatric Surgery",
        "Clinical Oncology", "Haematology", "Radiation Oncology",
        "Nephrology", "Urology",
        "Gastroenterology", "Colorectal Surgery", "Hepatobiliary Surgery",
        "Respiratory Medicine", "Infectious Disease",
        "Endocrinology", "Rheumatology",
        "Psychiatry", "Dermatology",
        "Ophthalmology", "ENT",
        "Rehabilitation Medicine", "Palliative Care",
        "Vascular Surgery", "Plastic & Reconstructive Surgery"
      ],
      notAvailable: [
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "Malaysia's only liver transplant centre — airlift or arrange transfer to Peninsular" },
        { specialty: "Heart Transplant", transferTo: "Institut Jantung Negara (IJN), KL", note: "IJN performs heart transplants" },
        { specialty: "Bone Marrow Transplant (BMT)", transferTo: "Hospital Ampang or UMMC, Selangor/KL", note: "No BMT programme in Sabah" }
      ],
      byReferral: [
        "Complex BMT — refer to Hospital Ampang (National Haematology Centre)",
        "Liver transplant — refer to Hospital Selayang",
        "Proton therapy — overseas or Peninsular"
      ]
    },
    transferPathway: {
      summary: "HQE is the apex centre for all Sabah — cases are referred TO HQE from all district and regional hospitals. Only the most complex quaternary cases (liver transplant, BMT, heart transplant) require referral to Peninsular Malaysia.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang, Selangor", reason: "Malaysia's only liver transplant centre", distanceKm: 1650 },
        { condition: "Heart transplant", to: "Institut Jantung Negara (IJN), KL", reason: "IJN national cardiac transplant centre", distanceKm: 1600 },
        { condition: "Bone Marrow Transplant", to: "Hospital Ampang, Selangor", reason: "National Haematology Centre for BMT", distanceKm: 1620 }
      ],
      howToTransfer: "For transfers OUT of HQE to Peninsular: MOH inter-state referral via treating specialist. Air ambulance or commercial flight with medical escort. For transfers IN to HQE from Sabah district hospitals: MOH referral letter from treating doctor."
    },
    specialtyRanks: {
      "Sabah Apex Referral": { rank: "Sole quaternary centre for Sabah", desc: "HQE is the undisputed apex referral hospital for all of Sabah — all complex district hospital cases funnel here" },
      "Cardiothoracic Surgery": { rank: "Only cardiac surgery in Sabah", desc: "The only hospital in Sabah with cardiothoracic surgical capability" }
    },
    accreditations: ["MSQH Accredited", "MOH Quaternary Centre Designation — Sabah"],
    verifiedNotes: "862 beds (MOH 2023). Sabah quaternary apex centre confirmed. Cardiothoracic surgery available. HQEII specialist tower opened 2021 on same campus.",
    notableGaps: "No liver transplant in Sabah. No BMT in Sabah. No heart transplant in Sabah. Significantly far from Peninsular Malaysia quaternary centres.",
    primaryExcellence: "Sabah's apex quaternary referral hospital — full tertiary/quaternary services",
    secondarySpecialties: "Cardiothoracic Surgery, Oncology, Neurosurgery, Maternal-Fetal Medicine",
    fullSpecialties: ["Cardiology", "Cardiothoracic Surgery", "Neurosurgery", "Oncology", "Orthopaedics", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised public hospital. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–3,000 depending on procedure",
    gaps: "No liver transplant. No BMT. No heart transplant. Transfer to Peninsular required for these.",
    robotics: "Standard public hospital imaging — CT, MRI, ultrasound. Radiotherapy equipment for oncology.",
    doctorQualifications: "MOH specialists — MMC-registered. Many trained at UK Royal Colleges and Australian institutions.",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:Redirect/file/KotaKinabalu_Sabah_Queen-Elizabeth-Hospital-01.jpg",
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "Sabah Health Department", url: "https://jkns.moh.gov.my" }
    ]
  },
  {
    id: "hqeii",
    name: "Hospital Queen Elizabeth II (HQEII) Kota Kinabalu",
    nameShort: "HQEII Kota Kinabalu",
    sector: "public",
    tier: "tertiary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "Hospital Queen Elizabeth II (HQEII) is a new specialist and surgical tower that opened in 2021 on the HQE campus in Kota Kinabalu, designed to expand Sabah's specialist capacity. With 400 beds, it functions as a dedicated specialist and elective surgical facility adjacent to HQE, relieving pressure from the main hospital and improving access to planned specialist care.",
    famousFor: ["Newest specialist hospital in Sabah (opened 2021)", "Modern purpose-built specialist and surgical tower", "Elective surgery and specialist outpatient services", "Co-located with HQE on same campus"],
    infrastructure: {
      yearEstablished: 2021,
      totalBeds: 400,
      icuBeds: 20,
      nicuBeds: 8,
      operatingTheatres: 12,
      area: "~5 acres (shared HQE campus)",
      buildings: "New Specialist Tower (purpose-built 2021)",
      helipad: false,
      parkingBays: "~400 bays (shared campus)",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Lorong Bersatu, Off Jalan Damai, Luyang, 88300 Kota Kinabalu, Sabah",
      mainLine: "+6088-324 600",
      emergencyLine: "+6088-218 166 (A&E via HQE main)",
      appointmentLine: "+6088-XXX XXX (verify with HQEII)",
      website: "https://jknsabah.moh.gov.my/hqe2/",
      mapQuery: "Hospital Queen Elizabeth II HQEII Kota Kinabalu Sabah"
    },
    transport: {
      nearest: "Kota Kinabalu city centre — 10 min taxi (same campus as HQE)",
      bus: "City bus routes (KK city)",
      highway: "Jalan Lilitan / Inner Ring Road",
      landmark: "Same campus as HQE, near Kota Kinabalu city centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HQEII-Guest)",
      patientTransport: "Shared campus transport with HQE"
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "MOH standard hours. New facility — confirm specific ward hours with hospital."
    },
    specialtyCoverage: {
      available: [
        "Specialist Outpatient Clinics", "Elective Surgery",
        "Cardiology", "Interventional Cardiology",
        "Orthopaedic Surgery", "Spine Surgery",
        "Gastroenterology", "Urology",
        "Obstetrics & Gynaecology",
        "Paediatrics", "Paediatric Surgery",
        "Neurology", "Neurosurgery",
        "General Surgery", "Colorectal Surgery",
        "Ophthalmology", "ENT", "Dermatology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Emergency A&E (full 24/7)", transferTo: "HQE (adjacent)", note: "Main A&E is at HQE — HQEII is specialist/elective focused" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "No transplant in Sabah" }
      ],
      byReferral: [
        "Emergency cases — direct to HQE A&E on same campus",
        "Complex quaternary cases — HQE or Peninsular Malaysia"
      ]
    },
    transferPathway: {
      summary: "HQEII is a specialist extension of HQE. For emergencies, patients go to HQE A&E. HQEII handles planned specialist work and elective surgery.",
      routes: [
        { condition: "Acute emergencies", to: "Hospital Queen Elizabeth (HQE) — same campus", reason: "HQE has the main A&E", distanceKm: 0 }
      ],
      howToTransfer: "Within same campus — direct transfer to HQE for emergencies."
    },
    specialtyRanks: {
      "Elective Specialist Care": { rank: "Newest specialist tower in Sabah", desc: "HQEII opened 2021 to expand planned specialist and surgical capacity in Sabah" }
    },
    accreditations: ["MOH Accredited"],
    verifiedNotes: "400 beds. Opened 2021 on HQE campus. Specialist and surgical tower. Phone numbers to be verified as facility is new.",
    notableGaps: "Not a standalone emergency hospital — A&E is at HQE. New hospital — verify full service list.",
    primaryExcellence: "New specialist and elective surgical tower — Sabah (2021)",
    secondarySpecialties: "Cardiology, Orthopaedics, Gastroenterology",
    fullSpecialties: ["Specialist Outpatient", "Elective Surgery", "Cardiology", "Orthopaedics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No standalone A&E. Newer facility — verify all services.",
    robotics: "Modern imaging equipment (new facility). CT, MRI, advanced endoscopy.",
    doctorQualifications: "MOH specialists — MMC-registered. Shared specialist pool with HQE.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "Sabah Health Department", url: "https://jkns.moh.gov.my" }
    ]
  },
  {
    id: "hdok-sandakan",
    name: "Hospital Duchess of Kent Sandakan",
    nameShort: "Hospital Duchess of Kent",
    sector: "public",
    tier: "state",
    state: "Sabah",
    city: "Sandakan",
    intro: "Hospital Duchess of Kent (HDK) in Sandakan is the main public referral hospital for East Sabah, serving the large and dispersed population of Sandakan, Lahad Datu, Tawau, and surrounding districts. With 400 beds, it is the primary specialist centre east of Kota Kinabalu, handling cases from a catchment area that includes many remote and indigenous communities.",
    famousFor: ["Regional referral hospital for East Sabah", "Serves Sandakan, Lahad Datu, Tawau and surrounding districts", "Important role in healthcare for east Sabah's diverse communities", "Main specialist centre outside Kota Kinabalu in Sabah"],
    infrastructure: {
      yearEstablished: 1954,
      totalBeds: 400,
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
      address: "Jalan Utara, 90000 Sandakan, Sabah",
      mainLine: "+6089-248 600 (verify with hospital)",
      emergencyLine: "+6089-248 600 ext. A&E (verify)",
      appointmentLine: "+6089-248 600 (verify)",
      website: "https://jknsabah.moh.gov.my/hdok/",
      mapQuery: "Hospital Duchess of Kent Sandakan Sabah"
    },
    transport: {
      nearest: "Sandakan town centre — 10 min taxi",
      bus: "Sandakan town bus routes",
      highway: "Jalan Utama, Sandakan",
      landmark: "Near Sandakan town centre"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, daytime hours",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free (HDK-Guest)",
      patientTransport: "Hospital ambulance. Medivac coordination for critical cases to HQE KK."
    },
    visitingHours: {
      general: "12:00–14:00, 17:00–20:00",
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted. Others: 12:00–14:00, 17:00–20:00",
      maternity: "Partner: unrestricted. Others: 12:00–20:00",
      notes: "MOH standard hours. Confirm with ward."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU/HDU", "NICU",
        "General Medicine", "General Surgery",
        "Cardiology (general — no cardiac surgery)",
        "Neurology (general — no neurosurgery on site)",
        "Orthopaedic Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Internal Medicine", "Psychiatry",
        "Gastroenterology", "Nephrology",
        "Respiratory Medicine", "Endocrinology",
        "Ophthalmology", "ENT", "Dermatology",
        "Rehabilitation Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", note: "No cardiac surgery in East Sabah — transfer to KK" },
        { specialty: "Neurosurgery", transferTo: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", note: "Transfer to HQE KK for neurosurgery" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Oncology (complex)", transferTo: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", note: "Specialist oncology refer to HQE" }
      ],
      byReferral: [
        "Complex cardiac — refer to HQE KK (~380 km west)",
        "Neurosurgery — refer to HQE KK",
        "Complex oncology — refer to HQE KK"
      ]
    },
    transferPathway: {
      summary: "Hospital Duchess of Kent is the main East Sabah referral centre. Complex surgical and specialist cases transfer to HQE Kota Kinabalu, approximately 380 km west by road or ~1 hour by air.",
      routes: [
        { condition: "Cardiothoracic surgery, neurosurgery, complex oncology", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Sabah apex centre — only cardiac/neurosurgery in Sabah", distanceKm: 380 },
        { condition: "Liver transplant", to: "Hospital Selayang, Selangor", reason: "Malaysia's only liver transplant centre", distanceKm: 1700 }
      ],
      howToTransfer: "MOH inter-hospital referral. Road or air ambulance to HQE KK. For critical cases, coordinate with HQE KK ahead of transfer."
    },
    specialtyRanks: {
      "East Sabah Regional Hub": { rank: "Main regional hospital for East Sabah", desc: "Primary referral centre for Sandakan, Lahad Datu, Tawau districts" }
    },
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "400 beds. East Sabah regional hospital. No cardiac surgery or neurosurgery on site.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. No liver transplant. Distant from HQE KK (380 km).",
    primaryExcellence: "Regional public referral hospital — East Sabah (Sandakan, Lahad Datu, Tawau)",
    secondarySpecialties: "Orthopaedics, Obstetrics, Paediatrics, Infectious Disease",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available.",
    fppScheme: true,
    fppDeposit: "RM 500–2,000",
    gaps: "No cardiac surgery. No neurosurgery. Transfer to KK required for complex cases.",
    robotics: "Standard imaging — CT, X-ray, ultrasound.",
    doctorQualifications: "MOH specialists — MMC-registered.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "Sabah Health Department", url: "https://jkns.moh.gov.my" }
    ]
  },
  {
    id: "htawau",
    name: "Hospital Tawau",
    nameShort: "Hospital Tawau",
    sector: "public",
    tier: "state",
    state: "Sabah",
    city: "Tawau",
    intro: "Hospital Tawau is the main public hospital for southern Sabah, serving the Tawau district and surrounding areas including Semporna and Kunak. With 300 beds, it provides essential acute and specialist care for a region that is distant from both Kota Kinabalu and Sandakan, and serves a significant rural and coastal population.",
    famousFor: ["Main hospital for southern Sabah (Tawau district)", "Serves Semporna and coastal Sabah communities", "Important access point for remote southern Sabah patients"],
    infrastructure: {
      yearEstablished: 1967,
      totalBeds: 300,
      icuBeds: 14,
      nicuBeds: 6,
      operatingTheatres: 8,
      area: "~8 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: true,
      parkingBays: "~200 bays",
      parkingRate: "RM 1/hour"
    },
    contact: {
      address: "Jalan Hospital, 91009 Tawau, Sabah",
      mainLine: "+6089-773 533",
      emergencyLine: "+6089-772 533 ext. A&E (verify)",
      appointmentLine: "+6089-772 533 (verify)",
      website: "https://jknsabah.moh.gov.my/htawau/",
      mapQuery: "Hospital Tawau Sabah"
    },
    transport: {
      nearest: "Tawau town centre — 10 min taxi",
      bus: "Tawau town bus routes",
      highway: "Jalan Hospital, Tawau",
      landmark: "Near Tawau town centre"
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
      icu: "11:30–12:00, 17:30–18:00",
      paediatric: "Parents: unrestricted",
      maternity: "Partner: unrestricted",
      notes: "MOH standard hours."
    },
    specialtyCoverage: {
      available: [
        "Emergency Medicine & A&E (24/7)", "ICU (limited)", "NICU",
        "General Medicine", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics", "Internal Medicine",
        "Psychiatry (limited)", "Ophthalmology (visiting)",
        "ENT (visiting)", "Respiratory Medicine"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HQE Kota Kinabalu", note: "Transfer to HQE KK (~500 km by road)" },
        { specialty: "Neurosurgery", transferTo: "HQE Kota Kinabalu", note: "Transfer or air ambulance to HQE KK" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Complex Oncology", transferTo: "Hospital Duchess of Kent or HQE", note: "Refer to regional/apex centre" }
      ],
      byReferral: [
        "Complex cases — Hospital Duchess of Kent Sandakan or HQE KK",
        "Cardiac/neuro emergencies — air ambulance to HQE KK"
      ]
    },
    transferPathway: {
      summary: "Hospital Tawau serves southern Sabah. Complex cases transfer to Hospital Duchess of Kent Sandakan or HQE KK. Air ambulance is frequently used given the distance.",
      routes: [
        { condition: "Complex surgery, cardiac, neuro", to: "Hospital Duchess of Kent Sandakan", reason: "East Sabah regional centre", distanceKm: 200 },
        { condition: "Quaternary-level cases", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Sabah apex centre", distanceKm: 500 }
      ],
      howToTransfer: "MOH referral. Road or air ambulance. Critical cases may require air ambulance to KK."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "300 beds. Southern Sabah public hospital. Limited specialist range.",
    notableGaps: "No cardiothoracic surgery. No neurosurgery. Limited specialist range. Distant from apex centres.",
    primaryExcellence: "Main public hospital for southern Sabah — Tawau district",
    secondarySpecialties: "Obstetrics, Paediatrics, General Surgery",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)",
    roomRateRaw: 5,
    insurance: "Heavily subsidised.",
    fppScheme: true,
    fppDeposit: "RM 500–1,500",
    gaps: "No cardiac surgery. No neurosurgery. Distant from apex centre.",
    robotics: "Basic imaging — X-ray, CT, ultrasound.",
    doctorQualifications: "MOH medical officers and rotating specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hkeningau",
    name: "Hospital Keningau",
    nameShort: "Hospital Keningau",
    sector: "public",
    tier: "district",
    state: "Sabah",
    city: "Keningau",
    intro: "Hospital Keningau is the main public hospital for the Interior Division of Sabah, serving the Keningau, Tambunan, Tenom, and surrounding districts. With 200 beds, it provides essential healthcare access for a largely rural and indigenous population in Sabah's interior, where healthcare access is a significant challenge.",
    famousFor: ["Main hospital for Sabah's Interior Division", "Serves large indigenous Kadazan-Dusun and rural communities", "Critical access point for interior Sabah patients"],
    infrastructure: {
      yearEstablished: 1970,
      totalBeds: 200,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 4,
      area: "~6 acres",
      buildings: "Main Block, Specialist Clinics",
      helipad: true,
      parkingBays: "~150 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Hospital, 89008 Keningau, Sabah",
      mainLine: "+6087-313 000",
      emergencyLine: "+6087-331 211 ext. A&E (verify)",
      appointmentLine: "+6087-331 211 (verify)",
      website: "https://jknsabah.moh.gov.my/hkgu/",
      mapQuery: "Hospital Keningau Sabah Interior"
    },
    transport: {
      nearest: "Keningau town centre — 5 min taxi",
      bus: "Limited town bus routes",
      highway: "Jalan Keningau–Kota Kinabalu (Jalan Penampang — interior road)",
      landmark: "Keningau town"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Ground floor, daytime",
      atm: "Lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Hospital ambulance. Medivac coordination to HQE KK for critical cases."
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
        "Emergency Medicine & A&E (24/7)", "ICU (basic)",
        "General Medicine", "General Surgery",
        "Obstetrics & Gynaecology", "Paediatrics",
        "Orthopaedics (basic)", "Psychiatry (limited)",
        "Internal Medicine (basic)"
      ],
      notAvailable: [
        { specialty: "Cardiothoracic Surgery", transferTo: "HQE Kota Kinabalu", note: "Transfer to HQE KK (~170 km by road)" },
        { specialty: "Neurosurgery", transferTo: "HQE Kota Kinabalu", note: "Transfer to HQE KK" },
        { specialty: "Most Specialist Services", transferTo: "HQE Kota Kinabalu", note: "Very limited specialist range — district hospital. Transfer to HQE KK for specialist care." },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" }
      ],
      byReferral: [
        "Almost all specialist cases — refer to HQE Kota Kinabalu (~170 km)"
      ]
    },
    transferPathway: {
      summary: "Hospital Keningau is a district hospital with very limited specialist services. Nearly all specialist cases must transfer to HQE Kota Kinabalu. Road distance is ~170 km via interior roads. Air ambulance available for critical cases.",
      routes: [
        { condition: "All specialist and complex cases", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Sabah apex centre — 170 km by road", distanceKm: 170 }
      ],
      howToTransfer: "MOH referral. Road ambulance or air ambulance to HQE KK. Interior roads can be slow — air ambulance recommended for critical cases."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "200 beds. District-level hospital for Sabah Interior Division. Very limited specialist range — most specialist care requires transfer to HQE KK.",
    notableGaps: "Very limited specialist services. No cardiothoracic surgery. No neurosurgery. No complex oncology. All specialist referrals to HQE KK.",
    primaryExcellence: "District public hospital — Sabah Interior Division (Keningau)",
    secondarySpecialties: "Obstetrics, Paediatrics, General Surgery",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 30 (Subsidised Public)",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Very limited specialist range. District-level care only. Transfer to HQE KK for specialist care.",
    robotics: "Basic imaging — X-ray, ultrasound. Limited CT.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hkudat",
    name: "Hospital Kudat",
    nameShort: "Hospital Kudat",
    sector: "public",
    tier: "district",
    state: "Sabah",
    city: "Kudat",
    intro: "Hospital Kudat is the district hospital serving the Kudat district at the northern tip of Sabah. With 100 beds and very limited specialist services, it is primarily a first-contact hospital that stabilises patients before transferring complex cases to HQE Kota Kinabalu. Patients requiring specialist care must travel approximately 160 km to Kota Kinabalu.",
    famousFor: ["District hospital for Kudat — northern tip of Sabah", "Serves the Rungus indigenous community and northern Sabah"],
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
      address: "Jalan Hospital, 89057 Kudat, Sabah",
      mainLine: "+6088-XXX XXX (verify with hospital)",
      emergencyLine: "+6088-XXX XXX ext. A&E (verify)",
      appointmentLine: "+6088-XXX XXX (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Kudat Sabah"
    },
    transport: {
      nearest: "Kudat town centre — 5 min",
      bus: "Very limited public transport",
      highway: "Jalan Kudat–Kota Kinabalu (~160 km)",
      landmark: "Kudat town, northern Sabah"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Limited daytime",
      atm: "Limited",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Hospital ambulance. Air ambulance for critical cases to HQE KK."
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
        "Emergency Medicine & A&E (24/7 — basic)", "ICU (very limited)",
        "General Medicine", "General Surgery (basic)",
        "Obstetrics & Gynaecology (basic)", "Paediatrics (basic)"
      ],
      notAvailable: [
        { specialty: "Specialist Services", transferTo: "HQE Kota Kinabalu", note: "TRANSFER REQUIRED — Kudat has very limited specialist services. HQE KK is ~160 km south." },
        { specialty: "Cardiothoracic Surgery", transferTo: "HQE Kota Kinabalu", note: "Transfer immediately" },
        { specialty: "Neurosurgery", transferTo: "HQE Kota Kinabalu", note: "Transfer immediately" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No transplant in Sabah" }
      ],
      byReferral: [
        "URGENT: All specialist cases must transfer to HQE Kota Kinabalu (~160 km by road or air)"
      ]
    },
    transferPathway: {
      summary: "IMPORTANT: Hospital Kudat has very limited specialist capability. Stabilise the patient and arrange immediate transfer to HQE KK for any specialist condition. Road to KK is ~160 km. Air ambulance available.",
      routes: [
        { condition: "ALL specialist and complex cases", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Only viable specialist centre — 160 km south", distanceKm: 160 }
      ],
      howToTransfer: "MOH emergency referral. Road ambulance or air ambulance to HQE KK. Do not delay — stabilise and transfer."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "100 beds. Very limited specialist services — district hospital at northern tip of Sabah. Transfer to HQE KK for all specialist care.",
    notableGaps: "CRITICAL: Very limited specialists. No cardiac surgery, no neurosurgery, no complex medical specialists. Transfer to HQE KK required for all specialist conditions.",
    primaryExcellence: "District hospital — northern Sabah (Kudat)",
    secondarySpecialties: "Basic Emergency, Obstetrics",
    fullSpecialties: ["Emergency Medicine", "General Medicine", "Obstetrics"],
    roomRate: "RM 3 – RM 30",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "CRITICAL: Very limited specialist capability. Transfer to HQE KK required for virtually all specialist care.",
    robotics: "Basic — X-ray, basic imaging only.",
    doctorQualifications: "MOH medical officers. Very limited specialist coverage.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "hlahadDatu",
    name: "Hospital Lahad Datu",
    nameShort: "Hospital Lahad Datu",
    sector: "public",
    tier: "district",
    state: "Sabah",
    city: "Lahad Datu",
    intro: "Hospital Lahad Datu serves the Lahad Datu district on Sabah's east coast, providing essential healthcare for a region known for its plantation and agricultural communities, as well as access to the Danum Valley area. With 150 beds and limited specialist services, complex cases are referred to Hospital Duchess of Kent Sandakan or HQE Kota Kinabalu.",
    famousFor: ["District hospital for Lahad Datu — east coast Sabah", "Serves plantation and agricultural communities of east Sabah"],
    infrastructure: {
      yearEstablished: 1968,
      totalBeds: 150,
      icuBeds: 6,
      nicuBeds: 3,
      operatingTheatres: 3,
      area: "~4 acres",
      buildings: "Main Block",
      helipad: true,
      parkingBays: "~120 bays",
      parkingRate: "Free"
    },
    contact: {
      address: "Jalan Hospital, 91100 Lahad Datu, Sabah",
      mainLine: "+6089-XXX XXX (verify with hospital)",
      emergencyLine: "+6089-XXX XXX ext. A&E (verify)",
      appointmentLine: "+6089-XXX XXX (verify)",
      website: "https://www.moh.gov.my",
      mapQuery: "Hospital Lahad Datu Sabah"
    },
    transport: {
      nearest: "Lahad Datu town centre — 5 min",
      bus: "Limited town transport",
      highway: "Jalan Lahad Datu (east coast road)",
      landmark: "Lahad Datu town, east coast Sabah"
    },
    facilities: {
      pharmacy24h: false,
      cafeteria: "Daytime only",
      atm: "Limited",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Limited",
      patientTransport: "Hospital ambulance. Air ambulance for critical cases."
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
        "Internal Medicine (basic)", "Orthopaedics (basic)"
      ],
      notAvailable: [
        { specialty: "Specialist Services", transferTo: "Hospital Duchess of Kent Sandakan (~200 km) or HQE KK", note: "District hospital — limited specialists. Transfer required." },
        { specialty: "Cardiothoracic Surgery", transferTo: "HQE Kota Kinabalu", note: "Transfer to HQE KK" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No transplant in Sabah" }
      ],
      byReferral: [
        "Specialist cases — Hospital Duchess of Kent Sandakan (~200 km by road)"
      ]
    },
    transferPathway: {
      summary: "Lahad Datu is a district hospital. Complex and specialist cases transfer to Hospital Duchess of Kent Sandakan (~200 km) or HQE KK (~490 km).",
      routes: [
        { condition: "Specialist cases", to: "Hospital Duchess of Kent Sandakan", reason: "Nearest regional specialist centre", distanceKm: 200 },
        { condition: "Complex/quaternary cases", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "Sabah apex centre", distanceKm: 490 }
      ],
      howToTransfer: "MOH referral. Road or air ambulance."
    },
    specialtyRanks: {},
    accreditations: ["MOH Accredited"],
    verifiedNotes: "150 beds. District hospital for Lahad Datu. Limited specialist services.",
    notableGaps: "Limited specialist services. No cardiac surgery, neurosurgery. Transfer to Sandakan or KK required.",
    primaryExcellence: "District hospital — Lahad Datu, east coast Sabah",
    secondarySpecialties: "Obstetrics, Paediatrics, General Surgery",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 3 – RM 30",
    roomRateRaw: 3,
    insurance: "Heavily subsidised.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "Limited specialist range. Transfer to Sandakan or KK required.",
    robotics: "Basic imaging.",
    doctorQualifications: "MOH medical officers and visiting specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" }
    ]
  },
  {
    id: "gleneagles-kk",
    name: "Gleneagles Hospital Kota Kinabalu",
    nameShort: "Gleneagles KK",
    sector: "private",
    tier: "tertiary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "Gleneagles Hospital Kota Kinabalu is the leading private hospital in Sabah, part of the IHH Healthcare group. With 150 beds, it offers comprehensive private specialist services for Kota Kinabalu and Sabah, serving both local patients and medical tourists from Brunei and the region.",
    famousFor: ["Leading private hospital in Sabah (IHH Healthcare)", "Most recognised private brand in Kota Kinabalu", "Comprehensive private specialist services", "Attracts patients from Brunei and regional medical tourism"],
    infrastructure: {
      yearEstablished: 1994,
      totalBeds: 150,
      icuBeds: 14,
      nicuBeds: 6,
      operatingTheatres: 8,
      area: "~3 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Block A-1, Lorong Riverson@Sembulan, Off Coastal Highway, 88100 Kota Kinabalu, Sabah",
      mainLine: "+6088-518 888",
      emergencyLine: "+6088-518 911",
      appointmentLine: "+6088-518 888",
      website: "https://www.gleneagles.com.my/kota-kinabalu",
      mapQuery: "Gleneagles Hospital Kota Kinabalu Sabah"
    },
    transport: {
      nearest: "Kota Kinabalu city centre — 10 min taxi",
      bus: "City bus routes (KK city)",
      highway: "Jalan Damai / KK city road network",
      landmark: "Off Jalan Damai, Kota Kinabalu city area"
    },
    facilities: {
      pharmacy24h: true,
      cafeteria: "Ground floor, 7am–9pm",
      atm: "Main lobby",
      surau: "Available",
      chapel: false,
      buddhistRoom: false,
      disabledAccess: true,
      wifi: "Free WiFi throughout",
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
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Cardiothoracic Surgery", transferTo: "HQE Kota Kinabalu or KL private centres", note: "Cardiac surgery limited — refer to HQE or KL" }
      ],
      byReferral: [
        "Liver transplant — Hospital Selayang",
        "Complex cardiac surgery — HQE KK or IJN KL",
        "BMT — Hospital Ampang or UMMC"
      ]
    },
    transferPathway: {
      summary: "Gleneagles KK is Sabah's leading private hospital. Complex transplant and cardiac surgery cases refer to HQE KK (public) or Peninsular Malaysia private centres.",
      routes: [
        { condition: "Liver transplant", to: "Hospital Selayang, Selangor", reason: "Malaysia's only liver transplant centre", distanceKm: 1650 },
        { condition: "Complex cardiac surgery", to: "HQE Kota Kinabalu or IJN KL", reason: "Cardiac surgical centres", distanceKm: 0 }
      ],
      howToTransfer: "Specialist referral. International patient coordinator for transfers to Peninsular."
    },
    specialtyRanks: {
      "Sabah Private": { rank: "Leading private hospital in Sabah", desc: "Most recognised and comprehensive private hospital in Kota Kinabalu — IHH Healthcare group" }
    },
    accreditations: ["MSQH Accredited", "IHH Healthcare Group"],
    verifiedNotes: "150 beds. IHH Healthcare group. Leading private hospital in Sabah.",
    notableGaps: "No liver transplant. Cardiac surgery limited. Smaller than Peninsular Malaysia IHH hospitals.",
    primaryExcellence: "Sabah's leading private specialist hospital — Kota Kinabalu",
    secondarySpecialties: "Cardiology, Oncology, Orthopaedics, Obstetrics",
    fullSpecialties: ["Cardiology", "Oncology", "Orthopaedics", "Obstetrics", "Paediatrics"],
    roomRate: "RM 180 – RM 600+/night",
    roomRateRaw: 350,
    insurance: "Accepts most major Malaysian and international insurance. IHH group panels.",
    fppScheme: false,
    fppDeposit: "N/A (deposit RM 2,000–8,000)",
    gaps: "No liver transplant. Limited cardiac surgery.",
    robotics: "Standard modern imaging — CT, MRI, advanced endoscopy.",
    doctorQualifications: "MMC-registered specialists — many internationally trained.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.gleneagles.com.my/kotakinabalu" }
    ]
  },
  {
    id: "jesselton-mc",
    name: "Jesselton Medical Centre Kota Kinabalu",
    nameShort: "Jesselton Medical Centre",
    sector: "private",
    tier: "tertiary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "Jesselton Medical Centre (JMC) is a well-established private specialist hospital in Kota Kinabalu, offering comprehensive medical care to Sabahans and patients from across the region. The hospital is a trusted choice for private specialist care in Sabah.",
    famousFor: ["Established private specialist hospital in KK", "Trusted private hospital brand in Sabah", "Comprehensive specialist services"],
    infrastructure: {
      yearEstablished: 2000,
      totalBeds: 150,
      icuBeds: 12,
      nicuBeds: 5,
      operatingTheatres: 7,
      area: "~2 acres",
      buildings: "Main Tower, Specialist Clinics",
      helipad: false,
      parkingBays: "~200 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "Jalan Metro 2, Metro Town, Off Jalan Lintas, 88300 Kota Kinabalu, Sabah",
      mainLine: "+6088-366 333",
      emergencyLine: "+6088-366 333 ext. A&E (verify)",
      appointmentLine: "+6088-366 333 (verify)",
      website: "https://www.jmc.my",
      mapQuery: "Jesselton Medical Centre Kota Kinabalu Sabah"
    },
    transport: {
      nearest: "Kota Kinabalu city centre — 10 min taxi",
      bus: "City bus routes (KK)",
      highway: "KK city road network",
      landmark: "Georgetown area, Kota Kinabalu"
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
      notes: "Private hospital — flexible."
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
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KK or HQE KK", note: "Refer to larger centre" }
      ],
      byReferral: [
        "Complex cases — Gleneagles KK or HQE KK"
      ]
    },
    transferPathway: {
      summary: "Private specialist hospital. Complex cases refer to Gleneagles KK or HQE.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "150 beds. Established private hospital in Kota Kinabalu.",
    notableGaps: "No liver transplant. Limited cardiac surgery.",
    primaryExcellence: "Established private specialist hospital — Kota Kinabalu",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology"],
    roomRate: "RM 150 – RM 500+/night",
    roomRateRaw: 280,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. Limited cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.jesseltonmedical.com" }
    ]
  },
  {
    id: "kpj-sabah",
    name: "KPJ Sabah Specialist Hospital Kota Kinabalu",
    nameShort: "KPJ Sabah",
    sector: "private",
    tier: "tertiary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "KPJ Sabah Specialist Hospital is part of the nationwide KPJ Healthcare group, providing private specialist care in Kota Kinabalu. The hospital offers a wide range of specialist services and benefits from the KPJ group's extensive insurance panel and clinical network.",
    famousFor: ["KPJ Healthcare group presence in Sabah", "Wide insurance panel coverage", "Comprehensive private specialist services in KK"],
    infrastructure: {
      yearEstablished: 1997,
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
      address: "1 Jalan Damai Lama, 88300 Kota Kinabalu, Sabah",
      mainLine: "+6088-322 000 (verify with hospital)",
      emergencyLine: "+6088-322 000 ext. A&E (verify)",
      appointmentLine: "+6088-322 000 (verify)",
      website: "https://kpjhealth.com.my/sabah/",
      mapQuery: "KPJ Sabah Specialist Hospital Kota Kinabalu"
    },
    transport: {
      nearest: "Kota Kinabalu city centre — 10 min taxi",
      bus: "City bus routes (KK)",
      highway: "KK city road network",
      landmark: "Damai area, Kota Kinabalu"
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
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KK or HQE KK", note: "Refer to larger centre" }
      ],
      byReferral: [
        "Complex cases — Gleneagles KK or HQE KK"
      ]
    },
    transferPathway: {
      summary: "KPJ private hospital in KK. Complex cases refer to Gleneagles KK or HQE.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    verifiedNotes: "150 beds. KPJ Healthcare group hospital in Sabah.",
    notableGaps: "No liver transplant. Limited cardiac surgery.",
    primaryExcellence: "KPJ private specialist hospital — Kota Kinabalu",
    secondarySpecialties: "Obstetrics, Cardiology, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 150 – RM 500+/night",
    roomRateRaw: 270,
    insurance: "KPJ group insurance panels. Accepts major Malaysian insurers.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. Limited cardiac surgery.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.kpjsabah.com" },
      { label: "KPJ Healthcare Group", url: "https://www.kpj.com.my" }
    ]
  },
  {
    id: "damai-specialist-kk",
    name: "KPJ Damai Specialist Hospital Kota Kinabalu",
    nameShort: "Damai Specialist Centre",
    sector: "private",
    tier: "tertiary",
    state: "Sabah",
    city: "Kota Kinabalu",
    intro: "Damai Specialist Centre is an established private hospital in Kota Kinabalu offering specialist care for Sabah residents. The hospital provides a range of specialist services in a smaller, community-focused private setting.",
    famousFor: ["Established private specialist centre in Kota Kinabalu", "Community private hospital in KK"],
    infrastructure: {
      yearEstablished: 1993,
      totalBeds: 100,
      icuBeds: 8,
      nicuBeds: 4,
      operatingTheatres: 5,
      area: "~2 acres",
      buildings: "Main Building, Specialist Clinics",
      helipad: false,
      parkingBays: "~150 bays",
      parkingRate: "RM 2/hour"
    },
    contact: {
      address: "1 Lorong Bersatu, Off Jalan Damai, 88300 Kota Kinabalu, Sabah",
      mainLine: "+6088-222 922",
      emergencyLine: "+6088-233 333 ext. A&E (verify)",
      appointmentLine: "+6088-233 333 (verify)",
      website: "https://www.kpjdamai.com",
      mapQuery: "KPJ Damai Specialist Hospital Kota Kinabalu Sabah"
    },
    transport: {
      nearest: "Kota Kinabalu city — 10 min taxi",
      bus: "City bus routes",
      highway: "KK city road network",
      landmark: "Damai area, Kota Kinabalu"
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
      notes: "Confirm with ward."
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
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang, Selangor", note: "No liver transplant in Sabah" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Gleneagles KK or HQE KK", note: "Refer to larger centre" },
        { specialty: "Neurosurgery", transferTo: "HQE KK", note: "Transfer to HQE" }
      ],
      byReferral: [
        "Complex cases — Gleneagles KK or HQE KK"
      ]
    },
    transferPathway: {
      summary: "Community private hospital. Complex cases refer to Gleneagles KK or HQE KK.",
      routes: [],
      howToTransfer: "Specialist referral."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "100 beds. Established private specialist centre in KK.",
    notableGaps: "No liver transplant. No cardiac surgery. Smaller hospital — limited specialist range.",
    primaryExcellence: "Community private specialist hospital — Kota Kinabalu",
    secondarySpecialties: "Obstetrics, General Surgery, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "RM 130 – RM 400+/night",
    roomRateRaw: 220,
    insurance: "Major Malaysian insurance panels.",
    fppScheme: false,
    fppDeposit: "N/A",
    gaps: "No liver transplant. No cardiac surgery. Smaller community hospital.",
    robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.",
    imageUrl: null,
    imageCredit: "N/A",
    officialSources: [
      { label: "Official Website", url: "https://www.damaispecialist.com.my" }
    ]
  }
,
  {
    id: "hsemporna", name: "Hospital Semporna", nameShort: "Hsp. Semporna",
    sector: "public", tier: "district", state: "Sabah", city: "Semporna",
    intro: "Hospital Semporna serves the coastal and island communities of the Semporna district, gateway to the Semporna Archipelago and Sipadan diving area. Handles diving-related emergencies and maritime accidents.",
    famousFor: ["Gateway to Sipadan diving area", "Diving-related emergency care", "Serves Bajau Laut sea nomad communities"],
    infrastructure: { yearEstablished: 1980, totalBeds: 100, icuBeds: 6, nicuBeds: 2, operatingTheatres: 2, area: "~5 acres", buildings: "Main Block", helipad: true, parkingBays: "~100 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 91300 Semporna, Sabah", mainLine: "+6089-781 666", emergencyLine: "+6089-781 666 ext. A&E", appointmentLine: "+6089-781 666", website: "https://www.moh.gov.my", mapQuery: "Hospital Semporna Sabah" },
    transport: { nearest: "Semporna town — 5 min drive", bus: "Local van/bus from Tawau", highway: "Via Lahad Datu–Semporna road", landmark: "Semporna town" },
    facilities: { pharmacy24h: true, cafeteria: "Canteen", atm: "Semporna town", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "MOH ambulance and boat transfer" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Diving Medicine (basic)"],
      notAvailable: [{ specialty: "Hyperbaric chamber", transferTo: "Hospital QE Kota Kinabalu", note: "No hyperbaric facility" }],
      byReferral: ["Complex cases → Hospital Queen Elizabeth KK"]
    },
    transferPathway: { summary: "District hospital with diving emergency capability. Complex cases → Hospital Lahad Datu or Hospital QE.", routes: [], howToTransfer: "MOH referral or air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Semporna coastal communities", secondarySpecialties: "Diving emergency, Obstetrics",
    fullSpecialties: ["Emergency", "General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: true, fppDeposit: "N/A",
    gaps: "No hyperbaric chamber.", robotics: "None.", doctorQualifications: "MOH-registered MOs and specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital serving Semporna and islands.", notableGaps: "No hyperbaric. Air medevac available."
  },
  {
    id: "hranau", name: "Hospital Ranau", nameShort: "Hsp. Ranau",
    sector: "public", tier: "district", state: "Sabah", city: "Ranau",
    intro: "Hospital Ranau serves the highland Ranau district, gateway to Mount Kinabalu. Handles trekking and altitude-related emergencies for climbers on Malaysia's highest peak.",
    famousFor: ["Proximity to Mount Kinabalu", "Altitude sickness and trekking emergency care", "Gateway district for Kinabalu climbers"],
    infrastructure: { yearEstablished: 1975, totalBeds: 100, icuBeds: 6, nicuBeds: 2, operatingTheatres: 2, area: "~5 acres", buildings: "Main Block", helipad: true, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89307 Ranau, Sabah", mainLine: "+6088-878 311", emergencyLine: "+6088-878 311 ext. A&E", appointmentLine: "+6088-878 311", website: "https://www.moh.gov.my", mapQuery: "Hospital Ranau Sabah" },
    transport: { nearest: "Ranau town — 5 min walk", bus: "Bus from KK (~2.5 hrs)", highway: "Via Kota Belud–Ranau road", landmark: "Ranau town, near Kinabalu Park" },
    facilities: { pharmacy24h: true, cafeteria: "Canteen", atm: "Ranau town", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "MOH ambulance, air medevac" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics", "Altitude sickness management"],
      notAvailable: [{ specialty: "Complex specialties", transferTo: "Hospital Queen Elizabeth KK", note: "District hospital" }],
      byReferral: ["All complex cases → Hospital QE KK"]
    },
    transferPathway: { summary: "District hospital. Complex cases → Hospital Queen Elizabeth or Hospital Keningau.", routes: [], howToTransfer: "MOH referral or air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Ranau / Mount Kinabalu gateway", secondarySpecialties: "Altitude emergency, Obstetrics",
    fullSpecialties: ["Emergency", "General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: true, fppDeposit: "N/A",
    gaps: "No complex surgery on-site.", robotics: "None.", doctorQualifications: "MOH-registered MOs and specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). Handles mountain rescue and altitude emergencies.", notableGaps: "No advanced surgery. Air medevac available."
  },
  {
    id: "hbeaufort", name: "Hospital Beaufort", nameShort: "Hsp. Beaufort",
    sector: "public", tier: "district", state: "Sabah", city: "Beaufort",
    intro: "Hospital Beaufort serves the Beaufort district in southwest Sabah, an agricultural and rail-connected town. The hospital serves communities along the Padas River valley.",
    famousFor: ["District hospital for Beaufort/Padas River valley", "Serves interior Sabah communities"],
    infrastructure: { yearEstablished: 1970, totalBeds: 80, icuBeds: 4, nicuBeds: 0, operatingTheatres: 1, area: "~4 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89800 Beaufort, Sabah", mainLine: "+6087-211 621", emergencyLine: "+6087-211 621 ext. A&E", appointmentLine: "+6087-211 621", website: "https://www.moh.gov.my", mapQuery: "Hospital Beaufort Sabah" },
    transport: { nearest: "Beaufort town — 5 min walk", bus: "Bus/train from KK (~2 hrs)", highway: "Via Papar–Beaufort road", landmark: "Beaufort town" },
    facilities: { pharmacy24h: false, cafeteria: "Canteen", atm: "Beaufort town", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "General Surgery (basic)", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Most specialties", transferTo: "Hospital Queen Elizabeth KK", note: "Small district hospital" }],
      byReferral: ["Complex cases → Hospital QE KK"]
    },
    transferPathway: { summary: "Small district hospital. Complex cases → Hospital QE Kota Kinabalu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Beaufort, Southwest Sabah", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["Emergency", "General Medicine", "Surgery", "Obstetrics", "Paediatrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: true, fppDeposit: "N/A",
    gaps: "No advanced specialties.", robotics: "None.", doctorQualifications: "MOH-registered MOs and specialists.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). Small district hospital serving Southwest Sabah.", notableGaps: "Limited specialists."
  },
  {
    id: "hkota-belud",
    name: "Hospital Kota Belud",
    nameShort: "Hospital Kota Belud",
    sector: "public", tier: "district", state: "Sabah", city: "Kota Belud",
    intro: "Hospital Kota Belud serves the Kota Belud district of northwest Sabah, famous for its weekly tamu (market) and Bajau horsemen culture.",
    famousFor: ["District hospital for Kota Belud — northwest Sabah"],
    infrastructure: { yearEstablished: 1975, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89150 Kota Belud, Sabah", mainLine: "+6088-976 222 (verify)", emergencyLine: "+6088-976 222 ext. A&E", appointmentLine: "+6088-976 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kota Belud Sabah" },
    transport: { nearest: "Kota Belud town — 5 min walk", bus: "Bus from Kota Kinabalu (~1.5 hrs)", highway: "Via Route A4 / Pan Borneo Highway", landmark: "Kota Belud town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Queen Elizabeth KK", note: "District hospital" }],
      byReferral: ["Specialist → HQE Kota Kinabalu"]
    },
    transferPathway: { summary: "District hospital. Complex → HQE Kota Kinabalu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kota Belud", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District hospital for Kota Belud.", notableGaps: "Specialist referral to HQE KK."
  },
  {
    id: "htenom",
    name: "Hospital Tenom",
    nameShort: "Hospital Tenom",
    sector: "public", tier: "district", state: "Sabah", city: "Tenom",
    intro: "Hospital Tenom serves the interior Tenom district of Sabah, an agricultural area known for orchid cultivation.",
    famousFor: ["District hospital for Tenom interior district"],
    infrastructure: { yearEstablished: 1978, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89900 Tenom, Sabah", mainLine: "+6087-737 222 (verify)", emergencyLine: "+6087-737 222 ext. A&E", appointmentLine: "+6087-737 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Tenom Sabah" },
    transport: { nearest: "Tenom town — 5 min walk", bus: "Bus from Keningau (~1 hr)", highway: "Route B4 / interior roads", landmark: "Tenom town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Keningau / HQE KK", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Keningau or HQE KK"]
    },
    transferPathway: { summary: "Interior district hospital. Complex → Hospital Keningau.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Tenom interior Sabah", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote interior.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~60 beds (est.). District hospital for Tenom.", notableGaps: "Specialist referral to Hospital Keningau."
  },
  {
    id: "hkinabatangan",
    name: "Hospital Kinabatangan",
    nameShort: "Hospital Kinabatangan",
    sector: "public", tier: "district", state: "Sabah", city: "Kinabatangan",
    intro: "Hospital Kinabatangan serves the vast Kinabatangan district of eastern Sabah, home to the famous Kinabatangan river wildlife corridor.",
    famousFor: ["District hospital for Kinabatangan — wildlife-rich eastern Sabah"],
    infrastructure: { yearEstablished: 1980, totalBeds: 60, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~50 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 90100 Kinabatangan, Sabah", mainLine: "+6089-531 222 (verify)", emergencyLine: "+6089-531 222 ext. A&E", appointmentLine: "+6089-531 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kinabatangan Sabah" },
    transport: { nearest: "Kinabatangan town — 5 min walk", bus: "Bus from Sandakan (~2 hrs)", highway: "Via Route A1 Pan Borneo Highway", landmark: "Kinabatangan town, river wildlife area" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital DOK Sandakan", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Sandakan or HQE KK"]
    },
    transferPathway: { summary: "Remote district hospital. Complex → Hospital Sandakan.", routes: [], howToTransfer: "MOH referral / helicopter." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kinabatangan", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote eastern Sabah.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~60 beds (est.). Remote district hospital.", notableGaps: "Complex cases require transfer to Sandakan."
  },
  {
    id: "htelupid",
    name: "Hospital Telupid",
    nameShort: "Hospital Telupid",
    sector: "public", tier: "district", state: "Sabah", city: "Telupid",
    intro: "Hospital Telupid serves the remote Telupid area in the interior of Sabah, covering an extensive rural catchment.",
    famousFor: ["District hospital for Telupid — interior Sabah"],
    infrastructure: { yearEstablished: 1985, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~40 bays", parkingRate: "Free" },
    contact: { address: "Telupid, Sabah", mainLine: "+6089-571 222 (verify)", emergencyLine: "+6089-571 222 ext. A&E", appointmentLine: "+6089-571 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Telupid Sabah" },
    transport: { nearest: "Telupid town — 5 min walk", bus: "Very limited", highway: "Interior roads — remote location", landmark: "Telupid town, interior Sabah" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Sandakan / HQE KK", note: "Remote district hospital" }],
      byReferral: ["Specialist → Hospital Sandakan or HQE KK"]
    },
    transferPathway: { summary: "Remote interior hospital. Helicopter medevac for critical cases.", routes: [], howToTransfer: "MOH referral / air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Telupid interior Sabah", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — remote.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Remote interior district hospital.", notableGaps: "Air medevac required for complex cases."
  },
  {
    id: "hkunak",
    name: "Hospital Kunak",
    nameShort: "Hospital Kunak",
    sector: "public", tier: "district", state: "Sabah", city: "Kunak",
    intro: "Hospital Kunak serves the Kunak district in southeastern Sabah, an area known for its palm oil and cocoa plantations.",
    famousFor: ["District hospital for Kunak — southeastern Sabah agricultural area"],
    infrastructure: { yearEstablished: 1980, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 91200 Kunak, Sabah", mainLine: "+6089-851 222 (verify)", emergencyLine: "+6089-851 222 ext. A&E", appointmentLine: "+6089-851 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kunak Sabah" },
    transport: { nearest: "Kunak town — 5 min walk", bus: "Bus from Lahad Datu (~1 hr)", highway: "Route A1 Pan Borneo Highway", landmark: "Kunak town, southeastern Sabah" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Lahad Datu", note: "District hospital" }],
      byReferral: ["Specialist → Hospital Lahad Datu or HQE KK"]
    },
    transferPathway: { summary: "District hospital. Complex → Hospital Lahad Datu.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kunak, southeastern Sabah", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District hospital for Kunak.", notableGaps: "Specialist referral to Hospital Lahad Datu."
  },
  {
    id: "hpapar",
    name: "Hospital Papar",
    nameShort: "Hospital Papar",
    sector: "public", tier: "district", state: "Sabah", city: "Papar",
    intro: "Hospital Papar serves the Papar district just south of Kota Kinabalu, a coastal agricultural and fisheries community area.",
    famousFor: ["District hospital for Papar — south of Kota Kinabalu"],
    infrastructure: { yearEstablished: 1972, totalBeds: 100, icuBeds: 4, nicuBeds: 0, operatingTheatres: 2, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~80 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89600 Papar, Sabah", mainLine: "+6088-911 222 (verify)", emergencyLine: "+6088-911 222 ext. A&E", appointmentLine: "+6088-911 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Papar Sabah" },
    transport: { nearest: "Papar KTM station — 10 min walk", bus: "Bus from Kota Kinabalu (~1 hr)", highway: "Via Route A1 / Pan Borneo Highway south", landmark: "Papar town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Subspecialties", transferTo: "HQE Kota Kinabalu", note: "District hospital" }],
      byReferral: ["Specialist → HQE KK"]
    },
    transferPathway: { summary: "District hospital. Complex → HQE KK.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Papar, southern KK", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~100 beds (est.). District hospital for Papar.", notableGaps: "Specialist referral to HQE KK."
  },
  {
    id: "hpitas",
    name: "Hospital Pitas",
    nameShort: "Hospital Pitas",
    sector: "public", tier: "district", state: "Sabah", city: "Pitas",
    intro: "Hospital Pitas serves the remote Pitas district in northern Sabah, one of the least developed and most isolated areas in the state.",
    famousFor: ["District hospital for Pitas — remote northern Sabah"],
    infrastructure: { yearEstablished: 1985, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: true, parkingBays: "~30 bays", parkingRate: "Free" },
    contact: { address: "Pitas, Sabah", mainLine: "+6088-981 222 (verify)", emergencyLine: "+6088-981 222 ext. A&E", appointmentLine: "+6088-981 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Pitas Sabah" },
    transport: { nearest: "Pitas town — 5 min walk", bus: "Very limited routes", highway: "Remote roads — very limited access", landmark: "Pitas town, northern Sabah" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "All specialist services", transferTo: "Hospital Kota Belud / HQE KK", note: "Remote district hospital" }],
      byReferral: ["Specialist → HQE KK by helicopter"]
    },
    transferPathway: { summary: "Remote district hospital. Helicopter medevac for complex cases.", routes: [], howToTransfer: "MOH referral / air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Pitas, remote northern Sabah", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — extremely remote.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Remote district hospital, Pitas.", notableGaps: "Air medevac required for complex cases."
  },
  {
    id: "hkuamut",
    name: "Hospital Kuamut",
    nameShort: "Hospital Kuamut",
    sector: "public", tier: "district", state: "Sabah", city: "Kuamut",
    intro: "Hospital Kuamut serves the deeply remote Kuamut area in the Kinabatangan district of eastern Sabah, accessible mainly via difficult forest roads.",
    famousFor: ["Remote district hospital — Kuamut, eastern Sabah interior"],
    infrastructure: { yearEstablished: 1985, totalBeds: 30, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~1 acre", buildings: "Main Block", helipad: true, parkingBays: "~30 bays", parkingRate: "Free" },
    contact: { address: "Kuamut, Kinabatangan, Sabah", mainLine: "+6089-571 222 (verify)", emergencyLine: "+6089-571 222 ext. A&E", appointmentLine: "+6089-571 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kuamut Sabah" },
    transport: { nearest: "Kuamut — very remote, few services", bus: "None — remote", highway: "Extremely limited road access", landmark: "Kuamut, deep eastern Sabah interior" },
    facilities: { pharmacy24h: false, cafeteria: "Basic", atm: "None", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Very limited", patientTransport: "Helicopter / boat" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "All specialist services", transferTo: "Hospital Sandakan / HQE KK", note: "Extremely remote" }],
      byReferral: ["Specialist → Hospital Sandakan or HQE KK by helicopter"]
    },
    transferPathway: { summary: "Remote hospital. Helicopter required for complex cases.", routes: [], howToTransfer: "Air medevac." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "Remote district hospital — Kuamut", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Extremely limited — very remote location.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~30 beds (est.). Extremely remote hospital.", notableGaps: "Air medevac for all complex cases."
  },
  {
    id: "hbongawan",
    name: "Hospital Bongawan",
    nameShort: "Hospital Bongawan",
    sector: "public", tier: "district", state: "Sabah", city: "Bongawan",
    intro: "Hospital Bongawan serves the Papar district area around Bongawan township in western Sabah.",
    famousFor: ["District hospital for Bongawan — western Sabah"],
    infrastructure: { yearEstablished: 1978, totalBeds: 40, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~1 acre", buildings: "Main Block", helipad: false, parkingBays: "~40 bays", parkingRate: "Free" },
    contact: { address: "Bongawan, Papar, Sabah", mainLine: "+6088-921 222 (verify)", emergencyLine: "+6088-921 222 ext. A&E", appointmentLine: "+6088-921 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Bongawan Sabah" },
    transport: { nearest: "Bongawan town — 5 min walk", bus: "Bus from Papar (~30 min)", highway: "Route A1 / Pan Borneo Highway south", landmark: "Bongawan town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Papar / HQE KK", note: "Small district hospital" }],
      byReferral: ["Specialist → Hospital Papar or HQE KK"]
    },
    transferPathway: { summary: "Small district hospital. Complex → Hospital Papar.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Bongawan", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~40 beds (est.). Small district hospital for Bongawan.", notableGaps: "Specialist referral to Hospital Papar."
  },
  {
    id: "hkota-marudu",
    name: "Hospital Kota Marudu",
    nameShort: "Hospital Kota Marudu",
    sector: "public", tier: "district", state: "Sabah", city: "Kota Marudu",
    intro: "Hospital Kota Marudu serves the Kota Marudu district in northern Sabah, an interior area with large Rungus indigenous community populations.",
    famousFor: ["District hospital for Kota Marudu — Rungus indigenous community area"],
    infrastructure: { yearEstablished: 1978, totalBeds: 80, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89100 Kota Marudu, Sabah", mainLine: "+6088-661 222 (verify)", emergencyLine: "+6088-661 222 ext. A&E", appointmentLine: "+6088-661 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kota Marudu Sabah" },
    transport: { nearest: "Kota Marudu town — 5 min walk", bus: "Bus from Kota Kinabalu (~3 hrs)", highway: "Via Route A4 / Pan Borneo Highway north", landmark: "Kota Marudu town" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "HQE KK", note: "District hospital" }],
      byReferral: ["Specialist → HQE KK"]
    },
    transferPathway: { summary: "District hospital. Complex → HQE KK.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kota Marudu", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~80 beds (est.). District hospital for Kota Marudu.", notableGaps: "Specialist referral to HQE KK."
  },
  {
    id: "hkundasang",
    name: "Hospital Kundasang",
    nameShort: "Hospital Kundasang",
    sector: "public", tier: "district", state: "Sabah", city: "Kundasang",
    intro: "Hospital Kundasang serves the highland Kundasang area near Mount Kinabalu, providing emergency and basic care for tourists and locals at altitude.",
    famousFor: ["District hospital near Mount Kinabalu — altitude tourism emergency care"],
    infrastructure: { yearEstablished: 1982, totalBeds: 30, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~1 acre", buildings: "Main Block", helipad: true, parkingBays: "~30 bays", parkingRate: "Free" },
    contact: { address: "Kundasang, Ranau, Sabah", mainLine: "+6088-881 222 (verify)", emergencyLine: "+6088-881 222 ext. A&E", appointmentLine: "+6088-881 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Kundasang Ranau Sabah" },
    transport: { nearest: "Kundasang town — 5 min walk", bus: "Bus from Kota Kinabalu (~2 hrs)", highway: "Via Route B3 / Ranau road", landmark: "Kundasang, near Mount Kinabalu Park" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance / helicopter" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7) — including altitude illness", "General Medicine", "Trauma (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Ranau / HQE KK", note: "Mountain gateway hospital" }],
      byReferral: ["Specialist → Hospital Ranau or HQE KK"]
    },
    transferPathway: { summary: "Mountain gateway hospital. Complex → Hospital Ranau or HQE KK.", routes: [], howToTransfer: "MOH referral / helicopter." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Kundasang / Mount Kinabalu area", secondarySpecialties: "Emergency, Altitude medicine",
    fullSpecialties: ["General Medicine", "Emergency"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited — altitude hospital.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "~30 beds (est.). Mountain gateway hospital near Mount Kinabalu.", notableGaps: "Specialist → Hospital Ranau or HQE KK."
  }
,
  {
    id: "hwkks", name: "Hospital Wanita Dan Kanak-Kanak Sabah (Hospital Likas)", nameShort: "Hospital Likas (HWKKS)",
    sector: "public", tier: "tertiary", state: "Sabah", city: "Kota Kinabalu",
    intro: "Hospital Wanita Dan Kanak-Kanak Sabah (HWKKS), formerly Hospital Pakar Likas, is a 504-bed specialist hospital in Likas, Kota Kinabalu, dedicated to women and children's health. It is the only dedicated women and children's specialist public hospital in Sabah, housing the only One Stop Oncology and Nuclear Medicine Centre (PPNR) in East Malaysia. Established from the former private Sabah Medical Centre, it was officially rebranded as HWKKS in 2009.",
    famousFor: ["Only dedicated women and children's specialist hospital in Sabah", "Only Nuclear Medicine and Radiotherapy Centre (PPNR) in East Malaysia", "Specialist oncology, obstetrics, gynaecology, and paediatric care", "Referral centre for women's and children's specialist needs from across Sabah"],
    infrastructure: { yearEstablished: 2003, totalBeds: 504, icuBeds: 20, nicuBeds: 20, operatingTheatres: 10, area: "~25 acres", buildings: "Main Block, PPNR (Nuclear Medicine & Radiotherapy)", helipad: false, parkingBays: "~400 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Karung Berkunci No. 187, 88996 Kota Kinabalu, Sabah", mainLine: "+6088-522 600", emergencyLine: "+6088-522 600 ext. A&E", appointmentLine: "+6088-522 600", website: "https://jknsabah.moh.gov.my/hwkks/", mapQuery: "Hospital Wanita Kanak-Kanak Sabah Likas Kota Kinabalu" },
    transport: { nearest: "Likas, Kota Kinabalu — ~7.8 km from city centre, 15 min taxi", bus: "City bus routes (KK Likas)", highway: "Jalan Likas / Kota Kinabalu city", landmark: "Likas area, Kota Kinabalu" },
    facilities: { pharmacy24h: true, cafeteria: "Canteen", atm: "On-site", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00\u201314:00, 17:00\u201320:00", icu: "Restricted", paediatric: "Parents: unrestricted. Others: standard hours", maternity: "Partner: unrestricted", notes: "Specialist hospital — confirm specific ward hours." },
    specialtyCoverage: {
      available: ["Obstetrics & Gynaecology", "Maternal-Fetal Medicine", "Paediatrics", "Paediatric Surgery", "Paediatric Cardiology", "Neonatology/NICU", "Clinical Oncology (Gynaecological)", "Radiation Oncology (PPNR)", "Nuclear Medicine (PPNR)", "Emergency & A&E (women & children)", "ICU/HDU", "Breast Surgery", "Fertility/Reproductive Medicine", "Gynaecological Oncology"],
      notAvailable: [{ specialty: "General adult specialist care", transferTo: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", note: "HWKKS is specialist women & children only — general adult cases go to HQE" }],
      byReferral: ["Adult complex cases → HQE Kota Kinabalu", "Liver transplant → Hospital Selayang"]
    },
    transferPathway: { summary: "HWKKS is the specialist women and children's hospital in Sabah. For adult general specialist care, patients are referred to HQE Kota Kinabalu.", routes: [{ condition: "Adult general specialist care", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "General adult specialist centre for Sabah", distanceKm: 8 }], howToTransfer: "MOH referral." },
    specialtyRanks: { "Women & Children Sabah": { rank: "Only dedicated women & children's specialist hospital in Sabah", desc: "Sole dedicated public specialist centre for women and children in Sabah, with East Malaysia's only nuclear medicine and radiotherapy centre" } },
    accreditations: ["MSQH Accredited", "MOH Sabah Specialist Hospital"],
    primaryExcellence: "Dedicated women and children's specialist hospital — Sabah (only nuclear medicine centre in East Malaysia)", secondarySpecialties: "Gynaecological Oncology, Neonatology, Paediatric Surgery",
    fullSpecialties: ["Obstetrics", "Gynaecology", "Paediatrics", "Oncology", "Nuclear Medicine"],
    roomRate: "RM 3 – RM 80 (Subsidised Public)", roomRateRaw: 5, insurance: "Heavily subsidised. FPP scheme available.", fppScheme: true, fppDeposit: "RM 500–2,000",
    gaps: "Women and children only — general adult specialist care at HQE.", robotics: "PPNR nuclear medicine and radiotherapy equipment — only such centre in East Malaysia.", doctorQualifications: "MOH specialists — MMC-registered, many with subspecialty training.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://jknsabah.moh.gov.my/hwkks/" }, { label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "504 beds. Specialist hospital for women and children. Formerly Hospital Pakar Likas / Sabah Medical Centre (private). Rebranded HWKKS 2009. Only nuclear medicine & radiotherapy centre (PPNR) in East Malaysia — operational since 2013.", notableGaps: "Not a general adult hospital — adult cases to HQE KK."
  },
  {
    id: "hmbp", name: "Hospital Mesra Bukit Padang Kota Kinabalu", nameShort: "Hospital Mesra Bukit Padang",
    sector: "public", tier: "tertiary", state: "Sabah", city: "Kota Kinabalu",
    intro: "Hospital Mesra Bukit Padang (HMBP) is the only dedicated psychiatric hospital in Sabah, located 6 km from Kota Kinabalu city. With 302 beds, it is the apex referral hospital for all psychiatric and mental health cases throughout Sabah, serving 19 hospitals and health clinics across the state. It is also gazetted as a Drug Addict Detoxification Centre.",
    famousFor: ["Only psychiatric hospital in Sabah", "Apex referral centre for all mental health cases in Sabah", "Drug Addict Detoxification Centre (gazetted)", "Serves all 19 hospitals and health clinics in Sabah for psychiatric referrals"],
    infrastructure: { yearEstablished: 1971, totalBeds: 302, icuBeds: 0, nicuBeds: 0, operatingTheatres: 0, area: "~10 acres", buildings: "Multiple ward blocks, rehabilitation units", helipad: false, parkingBays: "~150 bays", parkingRate: "Free" },
    contact: { address: "Peti Surat 11432, 88815 Kota Kinabalu, Sabah", mainLine: "+6088-240 984", emergencyLine: "+6088-240 984", appointmentLine: "+6088-240 984", website: "https://jknsabah.moh.gov.my/hmbp/", mapQuery: "Hospital Mesra Bukit Padang Kota Kinabalu Sabah" },
    transport: { nearest: "Kota Kinabalu city — 6 km, ~15 min taxi", bus: "City bus routes", highway: "Jalan Bukit Padang / KK inner road", landmark: "Bukit Padang, 6 km from KK city centre" },
    facilities: { pharmacy24h: false, cafeteria: "Canteen", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00\u201314:00, 17:00\u201320:00", icu: "N/A", paediatric: "N/A", maternity: "N/A", notes: "Psychiatric hospital — confirm visiting hours with ward." },
    specialtyCoverage: {
      available: ["Psychiatry (inpatient & outpatient)", "Forensic Psychiatry", "Drug Addiction Detoxification", "Rehabilitation — mental health", "Occupational Therapy (psychiatric)", "Counselling & Psychology"],
      notAvailable: [{ specialty: "General medical/surgical care", transferTo: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", note: "Psychiatric facility only — medical/surgical cases to HQE" }],
      byReferral: ["All psychiatric referrals from Sabah → HMBP"]
    },
    transferPathway: { summary: "HMBP is the sole psychiatric hospital in Sabah. All psychiatric cases from Sabah's hospitals and clinics are referred here. Medical/surgical needs are coordinated with HQE KK.", routes: [{ condition: "Medical/surgical complications", to: "Hospital Queen Elizabeth (HQE) Kota Kinabalu", reason: "General medical centre", distanceKm: 6 }], howToTransfer: "MOH psychiatric referral." },
    specialtyRanks: { "Sabah Psychiatry": { rank: "Only psychiatric hospital in Sabah", desc: "Apex referral centre for all mental health and drug detoxification in Sabah" } },
    accreditations: ["MOH Accredited", "Gazetted Drug Detoxification Centre"],
    primaryExcellence: "Only psychiatric hospital in Sabah — apex mental health and drug detoxification centre", secondarySpecialties: "Forensic Psychiatry, Drug Detoxification",
    fullSpecialties: ["Psychiatry", "Drug Detoxification", "Rehabilitation"],
    roomRate: "RM 3 – RM 30 (Subsidised Public)", roomRateRaw: 3, insurance: "Heavily subsidised.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Psychiatric facility only — no general medical/surgical services.", robotics: "None.", doctorQualifications: "MOH psychiatrists and medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "Official Website", url: "https://jknsabah.moh.gov.my/hmbp/" }, { label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "302 beds. Only psychiatric hospital in Sabah. Opened 1971. Gazetted Drug Detoxification Centre. Serves 19 hospitals/clinics across Sabah.", notableGaps: "Psychiatric only — medical/surgical to HQE KK."
  },
  {
    id: "hsipitang", name: "Hospital Sipitang", nameShort: "Hospital Sipitang",
    sector: "public", tier: "district", state: "Sabah", city: "Sipitang",
    intro: "Hospital Sipitang serves the Sipitang district in southwest Sabah, near the Sarawak and Brunei border. With 93 beds, it provides district-level healthcare for the Sipitang community including the Pan Borneo Highway corridor.",
    famousFor: ["District hospital for Sipitang — southwest Sabah near Sarawak border"],
    infrastructure: { yearEstablished: 1978, totalBeds: 93, icuBeds: 4, nicuBeds: 0, operatingTheatres: 1, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~60 bays", parkingRate: "Free" },
    contact: { address: "Peti Surat 250, 89857 Sipitang, Sabah", mainLine: "+6087-822 296", emergencyLine: "+6087-822 296 ext. A&E", appointmentLine: "+6087-822 296", website: "https://www.moh.gov.my", mapQuery: "Hospital Sipitang Sabah" },
    transport: { nearest: "Sipitang town — 5 min walk", bus: "Bus from Beaufort (~1 hr) or Kota Kinabalu (~2.5 hrs)", highway: "Pan Borneo Highway (Sipitang junction)", landmark: "Sipitang town, southwest Sabah" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00\u201314:00, 17:00\u201320:00", icu: "Restricted", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "General Surgery (basic)", "Obstetrics", "Paediatrics"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Beaufort / Hospital Queen Elizabeth KK", note: "District hospital" }],
      byReferral: ["Specialist -> Hospital Beaufort or HQE KK"]
    },
    transferPathway: { summary: "District hospital for southwest Sabah near Sarawak border. Complex -> Hospital Beaufort or HQE KK.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Sipitang, southwest Sabah", secondarySpecialties: "General Medicine, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Limited specialist services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "93 beds. District hospital for Sipitang, southwest Sabah near Sarawak/Brunei border.", notableGaps: "Specialist referral to Hospital Beaufort or HQE KK."
  },
  {
    id: "htambunan", name: "Hospital Tambunan", nameShort: "Hospital Tambunan",
    sector: "public", tier: "district", state: "Sabah", city: "Tambunan",
    intro: "Hospital Tambunan serves the Tambunan district in the interior of Sabah, a highland agricultural area known for its Kadazan-Dusun heritage. With 49 beds, it provides basic district-level care before complex cases are referred to Hospital Keningau or HQE Kota Kinabalu.",
    famousFor: ["District hospital for Tambunan — Kadazan-Dusun highland interior Sabah"],
    infrastructure: { yearEstablished: 1978, totalBeds: 49, icuBeds: 0, nicuBeds: 0, operatingTheatres: 1, area: "~2 acres", buildings: "Main Block", helipad: false, parkingBays: "~40 bays", parkingRate: "Free" },
    contact: { address: "Jalan Hospital, 89650 Tambunan, Sabah", mainLine: "+6087-774 222 (verify)", emergencyLine: "+6087-774 222 ext. A&E", appointmentLine: "+6087-774 222 (verify)", website: "https://www.moh.gov.my", mapQuery: "Hospital Tambunan Sabah" },
    transport: { nearest: "Tambunan town — 5 min walk", bus: "Bus from Keningau (~30 min)", highway: "Interior road via Keningau", landmark: "Tambunan town, Sabah interior" },
    facilities: { pharmacy24h: false, cafeteria: "Available", atm: "Nearby", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Limited", patientTransport: "MOH ambulance" },
    visitingHours: { general: "12:00\u201314:00, 17:00\u201320:00", icu: "N/A", paediatric: "Parents: unrestricted", maternity: "Standard", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency (24/7)", "General Medicine", "Obstetrics (basic)"],
      notAvailable: [{ specialty: "Specialist services", transferTo: "Hospital Keningau / HQE KK", note: "Small district hospital" }],
      byReferral: ["Specialist -> Hospital Keningau or HQE KK"]
    },
    transferPathway: { summary: "Small interior district hospital. Complex -> Hospital Keningau.", routes: [], howToTransfer: "MOH referral." },
    specialtyRanks: {}, accreditations: ["MOH Accredited"],
    primaryExcellence: "District hospital — Tambunan interior Sabah", secondarySpecialties: "General Medicine",
    fullSpecialties: ["General Medicine", "Obstetrics"],
    roomRate: "Free (public)", roomRateRaw: 0, insurance: "MyCard / MySalam.", fppScheme: false, fppDeposit: "N/A",
    gaps: "Very limited services.", robotics: "None.", doctorQualifications: "MOH medical officers.",
    imageUrl: null, imageCredit: "N/A", officialSources: [{ label: "MOH Malaysia", url: "https://www.moh.gov.my" }],
    verifiedNotes: "49 beds. Small district hospital for Tambunan, Sabah interior.", notableGaps: "Specialist referral to Hospital Keningau or HQE KK."
  }

];