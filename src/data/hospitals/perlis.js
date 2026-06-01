// data/hospitals/perlis.js
export const HOSPITALS_PERLIS = [
  {
    id: "htf",
    name: "Hospital Tuanku Fauziah (HTF) Kangar",
    nameShort: "HTF",
    sector: "public", tier: "state", state: "Perlis", city: "Kangar",
    intro: "Hospital Tuanku Fauziah is the sole hospital for the Federal Territory of Perlis — Malaysia's smallest state. With 399 beds, it provides the most basic tertiary services for Perlis. Specialist capacity is significantly limited compared to larger states, and complex cases routinely transfer to Hospital Sultanah Bahiyah in Alor Setar, Kedah (50km).",
    famousFor: ["Sole hospital for Malaysia's smallest state — Perlis", "Limited specialist services — covers basic tertiary needs", "Complex cases routinely transferred to HSB Alor Setar"],
    infrastructure: { yearEstablished: 1958, totalBeds: 399, icuBeds: 16, nicuBeds: 6, operatingTheatres: 6, area: "~8 acres", buildings: "Main Block, Specialist Clinics", helipad: true, parkingBays: "~200 bays", parkingRate: "RM 1/hour" },
    contact: { address: "Jalan Tun Abdul Razak, 01000 Kangar, Perlis", mainLine: "+604-973 8000", emergencyLine: "+604-973 8000 ext. A&E", appointmentLine: "+604-973 8000", website: "https://jknperlis.moh.gov.my/htf/", mapQuery: "Hospital Tuanku Fauziah Kangar Perlis" },
    transport: { nearest: "Arau Railway Station (KTM/ETS) — 10 min taxi. Kangar town — 5 min taxi", bus: "Local Kangar bus routes", highway: "North-South Highway — Exit Kangar/Perlis", landmark: "Kangar town centre, Perlis state capital" },
    facilities: { pharmacy24h: true, cafeteria: "Ground floor, 7am–9pm", atm: "Main lobby", surau: "Multiple floors", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Free (HTF-Guest)", patientTransport: "Limited — mainly ambulance transfer to HSB Alor Setar for complex cases" },
    visitingHours: { general: "12:00–14:00, 17:00–20:00", icu: "11:30–12:00, 17:30–18:00", paediatric: "Parents: unrestricted", maternity: "Partner: unrestricted", notes: "Confirm with ward." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "ICU (limited capacity)", "NICU (basic)", "General Medicine", "General Surgery", "Cardiology (outpatient)", "Neurology (outpatient)", "Orthopaedics", "Obstetrics & Gynaecology", "Paediatrics", "Oncology (outpatient referral)", "Nephrology (dialysis available)", "Urology (outpatient)", "Gastroenterology (outpatient)", "Respiratory Medicine", "Endocrinology", "Psychiatry", "Ophthalmology (visiting)", "ENT (visiting)"],
      notAvailable: [
        { specialty: "Neurosurgery", transferTo: "Hospital Sultanah Bahiyah (HSB) Alor Setar", note: "50km to HSB — nearest neurosurgery centre" },
        { specialty: "Cardiothoracic Surgery", transferTo: "Hospital Sultanah Bahiyah (HSB) Alor Setar", note: "Refer to HSB or HKL" },
        { specialty: "Liver Transplant", transferTo: "Hospital Selayang", note: "National centre" },
        { specialty: "Complex Oncology (inpatient radiation)", transferTo: "HSB Alor Setar", note: "Limited oncology capacity — refer to HSB" },
        { specialty: "Bone Marrow Transplant", transferTo: "Hospital Ampang or UMMC", note: "Refer to national BMT centres in KL" }
      ],
      byReferral: [
        "Most complex specialty cases — routine transfer to HSB Alor Setar (50km)",
        "National quaternary cases — HKL or UMMC"
      ]
    },
    transferPathway: {
      summary: "HTF is Perlis's only hospital. Private specialist services in Perlis are very limited. For specialist care, patients typically travel to Hospital Sultanah Bahiyah in Alor Setar, Kedah (50km away).",
      routes: [
        { condition: "Neurosurgery, cardiothoracic surgery, complex oncology", to: "Hospital Sultanah Bahiyah (HSB) Alor Setar", reason: "Nearest full tertiary hospital — 50km", distanceKm: 50 },
        { condition: "Liver transplant, BMT, quaternary care", to: "HKL or UMMC Kuala Lumpur", reason: "National quaternary centres", distanceKm: 470 }
      ],
      howToTransfer: "Doctor initiates MOH inter-hospital referral. Ambulance transfer available to HSB Alor Setar. For KL — ambulance or air."
    },
    specialtyRanks: {},
    accreditations: ["MSQH Accredited"],
    verifiedNotes: "399 beds. Sole hospital for Perlis — smallest Malaysian state. Limited specialist capacity confirmed. Routine transfers to HSB Alor Setar.",
    notableGaps: "No neurosurgery. No cardiothoracic surgery. No radiation oncology. No BMT. Private specialist services essentially absent in Perlis — patients travel to Alor Setar or Penang for specialist private care.",
    primaryExcellence: "Sole state hospital — Perlis (basic tertiary services)", secondarySpecialties: "General Medicine, Obstetrics, Paediatrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Nephrology (dialysis)"],
    roomRate: "RM 3 – RM 50 (Subsidised Public)", roomRateRaw: 5,
    insurance: "Heavily subsidised. FPP scheme available for some procedures.",
    fppScheme: true, fppDeposit: "RM 500–1,500",
    gaps: "No neurosurgery. No cardiothoracic. No complex oncology. No BMT. Very limited private specialist options in state.",
    robotics: "Basic imaging — X-ray, CT scan, ultrasound.",
    doctorQualifications: "MOH medical officers and rotating specialist teams. Limited permanent specialist coverage.",
    imageUrl: null, imageCredit: "N/A",
    officialSources: [
      { label: "MOH Hospital Directory", url: "https://www.moh.gov.my" },
      { label: "Note: For specialist care, nearest full centre is HSB Alor Setar", url: "https://hsb.moh.gov.my" }
    ]
  }
,
  {
    id: "kpj-perlis", name: "KPJ Perlis Specialist Hospital", nameShort: "KPJ Perlis",
    sector: "private", tier: "secondary", state: "Perlis", city: "Kangar",
    intro: "KPJ Perlis Specialist Hospital provides private specialist healthcare in Kangar, the capital of Malaysia's smallest state. It serves Perlis residents seeking private care without travelling to Kedah or Penang.",
    famousFor: ["Only major private specialist hospital in Perlis", "KPJ Healthcare Group presence in Malaysia's smallest state"],
    infrastructure: { yearEstablished: 2010, totalBeds: 120, icuBeds: 8, nicuBeds: 4, operatingTheatres: 3, area: "~3 acres", buildings: "Main Block", helipad: false, parkingBays: "~150 bays", parkingRate: "RM 1/hr" },
    contact: { address: "No. 77, Jalan Dato' Wan Ahmad, Taman Mutiara, 01000 Kangar, Perlis", mainLine: "+604-970 7777", emergencyLine: "+604-970 7777 ext. A&E", appointmentLine: "+604-970 7777", website: "https://kpjhealth.com.my/perlis", mapQuery: "KPJ Perlis Specialist Hospital Kangar" },
    transport: { nearest: "Kangar town centre — 5 min drive", bus: "Local bus from Kangar", highway: "Via E1 North-South Highway Exit Kangar", landmark: "Kangar city, Perlis" },
    facilities: { pharmacy24h: true, cafeteria: "Café", atm: "On-site", surau: "Available", chapel: false, buddhistRoom: false, disabledAccess: true, wifi: "Available", patientTransport: "Private ambulance" },
    visitingHours: { general: "10:00–12:00, 14:00–20:00", icu: "Restricted", paediatric: "Parents: extended", maternity: "Standard", notes: "Check with reception." },
    specialtyCoverage: {
      available: ["Emergency Medicine & A&E (24/7)", "General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology (non-invasive)", "Orthopaedics"],
      notAvailable: [{ specialty: "Complex cardiac intervention, Neurosurgery", transferTo: "Hospital Sultanah Bahiyah Alor Setar or Penang", note: "Small private hospital in smallest state" }],
      byReferral: ["Complex cardiac surgery", "Neurosurgery", "Bone marrow transplant"]
    },
    transferPathway: { summary: "Private specialist hospital in Perlis. Complex cases → Alor Setar or Penang.", routes: [], howToTransfer: "Specialist referral." },
    specialtyRanks: {}, accreditations: ["MSQH Accredited", "KPJ Healthcare Group"],
    primaryExcellence: "Private hospital — Perlis (Malaysia's smallest state)", secondarySpecialties: "Cardiology, Orthopaedics, Obstetrics",
    fullSpecialties: ["General Medicine", "Surgery", "Obstetrics", "Paediatrics", "Cardiology", "Orthopaedics"],
    roomRate: "RM 170 – RM 500/night", roomRateRaw: 260, insurance: "KPJ group panels.", fppScheme: false, fppDeposit: "N/A",
    gaps: "No complex cardiac surgery or neurosurgery.", robotics: "Standard imaging.",
    doctorQualifications: "MMC-registered specialists.", imageUrl: null, imageCredit: "N/A",
    officialSources: [{ label: "KPJ Healthcare Group", url: "https://www.kpj.com.my" }],
    verifiedNotes: "~120 beds (est.). Primary private hospital in Perlis.", notableGaps: "Complex cases to Kedah/Penang."
  },
];