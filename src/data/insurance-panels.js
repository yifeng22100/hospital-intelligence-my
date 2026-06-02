// data/insurance-panels.js
export const INSURANCE_PANELS = {

  generalRules: {
    preAdmission: "If outpatient specialist visits — scans, blood tests, specialist consults, and investigations — lead to a hospital admission within 30 to 90 days (varies by policy), all those pre-admission bills become claimable as 'Pre-Admission Medical Expenses'. This is one of the most commonly missed claims. Keep EVERY receipt from every specialist visit, imaging centre, and lab — even months before admission.",
    cashlessVsReimbursement: "Cashless means the hospital bills your insurer directly via a Letter of Guarantee (LOG). You pay only the co-pay or non-covered items. Reimbursement means you pay the full bill first, then submit a claim to get money back — which can take weeks. ALWAYS ask to use cashless if your hospital is on the insurer's panel. Call your insurer's 24h helpline BEFORE admission (not after) to confirm panel status and request a LOG.",
    logLimit: "Your LOG limit (Letter of Guarantee limit) is the maximum amount your insurer will guarantee per admission. If your room is RM 500/night and your LOG limit is RM 150/night, you will owe the difference every day. Premium hospitals like Gleneagles KL, Prince Court, and Pantai charge RM 400–1,000+/night. ALWAYS verify your LOG limit matches the hospital's room rate BEFORE you are admitted, or you may face unexpected bills. Upgrading insurance plan is easier before illness than after.",
    panelCheck: "Insurance panels change regularly — hospitals join and leave panels without much public notice. ALWAYS call your insurer's 24-hour helpline on the day of (or day before) admission to confirm the hospital is still on your panel AND to confirm the LOG has been issued. Do not assume because it was on the panel last year that it still is.",
    denialAppeal: "If your claim is denied: (1) Request the written denial reason in writing. (2) Review your policy wording carefully — what is explicitly excluded? (3) Submit a formal appeal with all supporting medical documents, specialist letters, and clinical notes. (4) If denied again, escalate to the Ombudsman for Financial Services (OFS) — free service, no lawyers needed: +603-2272 2811 or www.ofs.org.my. (5) For systemic issues, contact Bank Negara Malaysia: 1-300-88-5465.",
    commonExclusions: "Most Malaysian medical policies exclude: pre-existing conditions (for 2–4 years from policy start); congenital conditions; cosmetic procedures; fertility treatment and IVF; self-inflicted injuries; substance abuse treatment; experimental treatments; overseas treatment beyond emergency. Read your policy exclusions carefully before you need them.",
    coPayAndDeductible: "Some policies have co-pay (you pay 10–20% of every bill) or annual deductible (you pay first RM 500–5,000 before insurance kicks in). These reduce premiums but can add up during major treatment. Know your co-pay amount before hospitalisation.",
    annualLimit: "Your annual limit is the maximum your policy pays in one policy year. Major illnesses like cancer or cardiac surgery can cost RM 200,000–500,000. If your annual limit is RM 100,000, you may exhaust it mid-treatment. Consider policies with higher or unlimited annual limits if you have family history of serious illness.",
    lifetimeLimit: "Older policies have lifetime limits (e.g., RM 600,000 total for all years). Once exhausted, you have no more coverage. Newer policies often have no lifetime limit — check yours.",
    waitingPeriod: "New policies typically have a 30-day waiting period (no claims for any condition in first 30 days) and specific waiting periods for conditions like cancer (often 120 days). Do not cancel and restart policies without checking — you may lose your coverage history."
  },

  insurers: [
    {
      id: "aia",
      name: "AIA Malaysia",
      tiers: ["A-Plus Health", "A-Plus Health Max", "A-Life Med Saver", "AIA Vitality"],
      cashlessHospitals: [
        // KL — SMART Panel
        "gleneagles-kl", "prince-court", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc", "tawakal-kl", "kpj-sentosa", "kpj-dsh2", "smcv-velocity",
        // KL — General Panel
        "pusrawi", "imu-hospital", "ukmsc",
        // Selangor — SMART Panel
        "sunway-mc", "sunway-mc-damansara", "sjmc", "ara-damansara", "assunta-hospital",
        "kpj-damansara", "kpj-ap", "kpj-klang", "kpj-kajang", "kpj-selayang",
        "kpj-selangor-shah-alam", "thomson-thkd", "columbia-bukit-rimau",
        "columbia-asia-bukit-jalil", "columbia-cheras", "columbia-pj",
        "pantai-cheras", "pantai-klang",
        // Penang — SMART Panel
        "island-hospital", "gleneagles-penang", "pantai-penang", "kpj-penang", "sunway-mc-penang",
        // Penang — General Panel
        "loh-guan-lye", "penang-adventist", "lam-wah-ee",
        // Johor
        "gleneagles-medini", "kpj-johor", "regency-johor", "columbia-asia-iskputeri",
        "kpj-puteri", "kpj-pasir-gudang", "pantai-batu-pahat",
        // Perak
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh", "sunway-medical-ipoh",
        // Melaka
        "mahkota", "pantai-ayer-keroh",
        // Negeri Sembilan
        "kpj-seremban", "columbia-seremban",
        // Pahang
        "kpj-pahang",
        // Kedah
        "kpj-kedah",
        // Kelantan
        "kpj-kota-bharu",
        // Sabah
        "gleneagles-kk", "jesselton-mc", "kpj-sabah", "damai-specialist-kk",
        // Sarawak
        "normah-kuching", "kpj-kuching", "timberland-kuching", "bmc-kuching"
      ],
      generalNote: "AIA has one of Malaysia's widest hospital panels — 120 hospitals in two tiers: SMART Panel (75 hospitals with priority lanes, waived deposits, dedicated liaisons) and General Panel (45 hospitals with standard cashless). Sunway Medical Damansara and Sunway Medical Ipoh were added to SMART Panel in August 2025. All managed in-house by AIA Health Services Sdn Bhd (no external TPA).",
      logLimitWarning: "AIA A-Plus basic plans may have daily room limits of RM 150–250/day — insufficient for premium hospitals like Gleneagles KL (RM 350–600/night) or Prince Court. Upgrade to A-Plus Health Max or ensure your plan's room limit matches your preferred hospital.",
      preAdmissionWindow: "AIA typically covers pre-admission outpatient expenses 30–60 days before related hospitalisation. Confirm exact window in your Certificate of Insurance.",
      website: "https://www.aia.com.my"
    },
    {
      id: "prudential",
      name: "Prudential / PRUBSNTakaful Malaysia",
      tiers: ["PRUMy Health", "PRUWith You", "PRUSmart Medical", "PRUMedik Plus"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "prince-court", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc", "imu-hospital", "kpj-sentosa", "kpj-dsh2",
        "smcv-velocity", "tawakal-kl",
        // Selangor
        "sunway-mc", "sunway-mc-damansara", "sjmc", "ara-damansara", "assunta-hospital",
        "kpj-damansara", "kpj-klang", "kpj-ap", "kpj-kajang", "kpj-selayang",
        "kpj-selangor-shah-alam", "thomson-thkd", "columbia-bukit-rimau",
        "columbia-asia-bukit-jalil", "pantai-cheras", "pantai-klang",
        // Penang
        "island-hospital", "gleneagles-penang", "loh-guan-lye", "penang-adventist",
        "pantai-penang", "kpj-penang", "sunway-mc-penang",
        // Johor
        "gleneagles-medini", "kpj-johor", "regency-johor", "columbia-asia-iskputeri",
        "kpj-puteri", "kpj-pasir-gudang",
        // Perak
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh", "sunway-medical-ipoh",
        // Melaka
        "mahkota", "pantai-ayer-keroh",
        // Negeri Sembilan
        "kpj-seremban",
        // Pahang
        "kpj-pahang",
        // Kedah
        "kpj-kedah",
        // Kelantan
        "kpj-kota-bharu",
        // Sabah
        "gleneagles-kk", "jesselton-mc", "kpj-sabah",
        // Sarawak
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Prudential has a very wide panel across Malaysia managed in-house by HAS (Hospital Alliance Services) — no external TPA. PRUPanel Plus (~100 hospitals) offers waived admin fees and deposits. PRUBSNTakaful offers Shariah-compliant versions with broadly the same panel.",
      logLimitWarning: "Entry-level PRU plans have lower room and board limits. Confirm room limit against your preferred hospital's daily rate — especially for premium hospitals.",
      preAdmissionWindow: "Pre-admission expenses typically covered 30–90 days before admission for the related condition.",
      website: "https://www.prudential.com.my"
    },
    {
      id: "great-eastern",
      name: "Great Eastern Life Malaysia",
      tiers: ["GREAT MedProtect", "GREAT HealthLock", "Supreme MedCover", "GREAT Early Care"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "prince-court", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc", "kpj-sentosa",
        // Selangor
        "sunway-mc", "sjmc", "ara-damansara", "kpj-damansara", "kpj-klang",
        "kpj-ap", "thomson-thkd", "columbia-bukit-rimau", "pantai-cheras",
        // Penang
        "island-hospital", "gleneagles-penang", "loh-guan-lye", "pantai-penang",
        "sunway-mc-penang",
        // Johor
        "gleneagles-medini", "kpj-johor", "regency-johor",
        // Perak
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota", "pantai-ayer-keroh",
        // Negeri Sembilan
        "kpj-seremban",
        // Pahang
        "kpj-pahang",
        // Kedah
        "kpj-kedah",
        // Sabah
        "gleneagles-kk", "kpj-sabah",
        // Sarawak
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Great Eastern manages all GL/cashless in-house via its Healthcare Services Division (HSD) — no external TPA. 'The Great Journey' premium tier (85 hospitals, updated November 2025) offers streamlined admission and priority service. General panel covers 150+ hospitals nationwide.",
      logLimitWarning: "GREAT MedProtect plans have varying room limits. For hospitalisation at premium hospitals, ensure your daily room limit covers the hospital's room rate.",
      preAdmissionWindow: "Pre-admission expenses covered for related outpatient visits typically within 60 days before admission.",
      website: "https://www.greateasternlife.com/my"
    },
    {
      id: "allianz",
      name: "Allianz Malaysia",
      tiers: ["LifeBest", "SmartMed Plus", "Allianz Critical Care", "PrimeLink"],
      cashlessHospitals: [
        // KL — Blue Ribbon
        "prince-court", "pantai-kl", "beacon-hospital",
        // KL — General
        "gleneagles-kl", "pantai-ampang", "parkcity-mc", "umsc", "kpj-sentosa", "kpj-dsh2",
        // Selangor — Blue Ribbon
        "sunway-mc", "sjmc", "columbia-bukit-rimau",
        // Selangor — General
        "ara-damansara", "assunta-hospital", "kpj-damansara", "kpj-klang", "kpj-ap",
        "thomson-thkd", "columbia-asia-bukit-jalil", "pantai-cheras", "pantai-klang",
        // Penang — Blue Ribbon
        "gleneagles-penang", "pantai-penang",
        // Penang — General
        "island-hospital", "loh-guan-lye", "sunway-mc-penang",
        // Johor — Blue Ribbon
        "gleneagles-medini",
        // Johor — General
        "kpj-johor", "regency-johor", "columbia-asia-iskputeri", "kpj-puteri",
        // Perak — Blue Ribbon
        "kpj-ipoh",
        // Perak — General
        "pantai-ipoh", "fatimah-ipoh",
        // Melaka — Blue Ribbon
        "mahkota",
        // Melaka — General
        "pantai-ayer-keroh",
        // Negeri Sembilan — Blue Ribbon
        "mawar-mc",
        // Negeri Sembilan — General
        "kpj-seremban",
        // Pahang
        "kpj-pahang",
        // Sabah — Blue Ribbon
        "kpj-sabah",
        // Sabah — General
        "gleneagles-kk",
        // Sarawak — Blue Ribbon
        "bmc-kuching",
        // Sarawak — General
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Allianz manages all GL in-house via ACS (Allianz Care Services) — no external TPA. Blue Ribbon Programme: 16 premium hospitals with priority admission, bedside check-in, and cashless outpatient cancer/radiotherapy. General panel covers 200+ hospitals nationwide.",
      logLimitWarning: "Confirm daily room benefit versus hospital room rates. Allianz SmartMed Plus has tiered room benefits — ensure your tier matches your hospital preference.",
      preAdmissionWindow: "Pre-admission covered 30–90 days before related admission depending on plan.",
      website: "https://www.allianz.com.my"
    },
    {
      id: "tokio-marine",
      name: "Tokio Marine Life Malaysia",
      tiers: ["TM MediShield", "TM Medicare Flexi", "TM Protect Series"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc", "kpj-sentosa",
        // Selangor
        "sunway-mc", "sjmc", "kpj-damansara", "kpj-ap", "thomson-thkd",
        "columbia-bukit-rimau", "pantai-cheras",
        // Penang
        "island-hospital", "gleneagles-penang", "pantai-penang",
        "sunway-mc-penang",
        // Johor
        "gleneagles-medini", "kpj-johor", "regency-johor",
        // Perak
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota", "pantai-ayer-keroh",
        // Negeri Sembilan
        "kpj-seremban",
        // Sabah
        "gleneagles-kk", "kpj-sabah",
        // Sarawak
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Tokio Marine uses MiCare Sdn Bhd as its exclusive TPA for both hospital cashless and GP panel clinic services. MiCare hotline 1300-88-8690 is printed on new medical cards. MiCare MyMed App available for e-card, GL requests, and hospital locator.",
      logLimitWarning: "Check specific plan room benefit. Tokio Marine plans vary in hospital tier coverage.",
      preAdmissionWindow: "Pre-admission expenses within 30–60 days of related hospitalisation.",
      website: "https://www.tokiomarine.com.my"
    },
    {
      id: "zurich",
      name: "Zurich Malaysia (Life & Takaful)",
      tiers: ["Zurich LifeSurance", "Zurich MedSave", "Zurich Takaful MedPlus"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "pantai-kl", "beacon-hospital", "parkcity-mc",
        "kpj-sentosa", "umsc",
        // Selangor
        "sunway-mc", "sjmc", "kpj-damansara", "kpj-ap", "thomson-thkd",
        "columbia-bukit-rimau",
        // Penang
        "island-hospital", "gleneagles-penang", "pantai-penang",
        // Johor
        "kpj-johor", "gleneagles-medini", "regency-johor",
        // Perak
        "kpj-ipoh", "pantai-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota",
        // Sabah
        "gleneagles-kk", "kpj-sabah",
        // Sarawak
        "normah-kuching"
      ],
      generalNote: "Zurich Malaysia (formerly MCTIS/Zurich Takaful) has a medium-to-wide panel. As of April 2025, GL processing switched from 1800-82-6100 to MiCare Sdn Bhd (1800-88-2318). Takaful options available. Smaller panel than AIA/Prudential but covers all major cities.",
      logLimitWarning: "Verify panel status and LOG limit before admission — especially outside Klang Valley.",
      preAdmissionWindow: "Pre-admission expenses typically 30 days. Confirm in policy schedule.",
      website: "https://www.zurich.com.my"
    },
    {
      id: "sun-life",
      name: "Sun Life Malaysia",
      tiers: ["Sun MedAssure", "Sun LifeReach", "Sun MedCover Series"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "pantai-kl", "pantai-ampang", "beacon-hospital", "parkcity-mc",
        "umsc",
        // Selangor
        "sunway-mc", "sjmc", "kpj-damansara", "thomson-thkd",
        "columbia-bukit-rimau",
        // Penang
        "gleneagles-penang", "island-hospital", "pantai-penang",
        // Johor
        "gleneagles-medini", "kpj-johor", "regency-johor",
        // Perak
        "kpj-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota",
        // Sabah
        "gleneagles-kk",
        // Sarawak
        "normah-kuching"
      ],
      generalNote: "Sun Life Malaysia is a growing insurer with an expanding panel. GL processing via MediExpress (M) Sdn Bhd (24/7). Coverage is solid at major hospitals but the panel is smaller than market leaders. Best for those who plan to use flagship hospitals in major cities.",
      logLimitWarning: "Panel may be limited outside major cities. Verify panel status for hospitals in East Malaysia and smaller towns.",
      preAdmissionWindow: "Pre-admission window varies — check policy certificate.",
      website: "https://www.sunlifemalaysia.com"
    },
    {
      id: "etiqa",
      name: "Etiqa Insurance & Takaful (Maybank)",
      tiers: ["Etiqa eMedic", "MedikSaver", "Etiqa iMedik", "Takaful MySejahtera"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "pantai-kl", "pantai-ampang", "beacon-hospital", "parkcity-mc",
        "umsc", "kpj-sentosa", "pusrawi", "tawakal-kl",
        // Selangor
        "sunway-mc", "sjmc", "kpj-damansara", "kpj-klang", "kpj-ap",
        "thomson-thkd", "columbia-bukit-rimau", "ara-damansara",
        // Penang
        "island-hospital", "gleneagles-penang", "pantai-penang", "kpj-penang",
        "loh-guan-lye",
        // Johor
        "kpj-johor", "gleneagles-medini", "regency-johor",
        // Perak
        "kpj-ipoh", "pantai-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota", "pantai-ayer-keroh",
        // Negeri Sembilan
        "kpj-seremban",
        // Sabah
        "gleneagles-kk", "kpj-sabah",
        // Sarawak
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Etiqa (backed by Maybank) has 140 panel hospitals with a fully cardless cashless system — just show the eTiQa+ App QR code at admission, no physical card required. Etiqa and Etiqa Takaful share the same panel. GL managed in-house by Etiqa Healthcare Call Centre (1800-88-9998, 24/7).",
      logLimitWarning: "Etiqa eMedic entry-level plans have daily room limits around RM 150–200 — check against your hospital preference.",
      preAdmissionWindow: "30 days pre-admission for related condition. Confirm with Etiqa helpline.",
      website: "https://www.etiqa.com.my"
    },
    {
      id: "axa-affin",
      name: "Generali Life / Generali Insurance Malaysia (formerly AXA Affin)",
      tiers: ["Generali MedCover", "AXA MediCare", "Affin Life MediPlus", "SmartHealth"],
      cashlessHospitals: [
        // KL — cashless confirmed post-Jul 2025
        "gleneagles-kl", "beacon-hospital", "parkcity-mc", "umsc",
        // Selangor — cashless confirmed
        "sunway-mc", "sjmc", "thomson-thkd", "columbia-bukit-rimau", "ara-damansara",
        // Penang — cashless confirmed
        "gleneagles-penang", "island-hospital", "loh-guan-lye",
        // Johor — cashless confirmed
        "gleneagles-medini", "regency-johor",
        // Perak
        "fatimah-ipoh",
        // Melaka
        "mahkota",
        // Sabah
        "gleneagles-kk",
        // Sarawak
        "normah-kuching", "bmc-kuching"
      ],
      generalNote: "⚠ IMPORTANT (July 18, 2025): Generali discontinued cashless facility at selected Pantai Group and KPJ Group hospitals. Policyholders can still use those hospitals but must pay upfront and claim via reimbursement. AXA Affin rebranded to Generali (General Insurance 2023, Life Insurance 2024). Generali Life switching TPA from IHP to MiCare on January 1, 2026.",
      logLimitWarning: "Verify cashless status before any Pantai or KPJ admission — as of July 2025, selected hospitals in these groups no longer offer cashless GL under Generali. Call 1300-88-9979 to confirm.",
      preAdmissionWindow: "Typically 30–60 days. Confirm in policy document.",
      website: "https://www.generali.com.my"
    },
    {
      id: "msig",
      name: "MSIG Insurance Malaysia",
      tiers: ["MediPlus Individual", "MediPlus Family", "MSIG HealthShield"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "pantai-kl", "pantai-ampang", "beacon-hospital", "parkcity-mc",
        "umsc",
        // Selangor
        "sunway-mc", "sjmc", "kpj-damansara", "pantai-cheras",
        "columbia-bukit-rimau",
        // Penang
        "island-hospital", "gleneagles-penang", "pantai-penang", "loh-guan-lye",
        // Johor
        "kpj-johor", "gleneagles-medini", "regency-johor",
        // Perak
        "kpj-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota",
        // Sabah
        "gleneagles-kk", "kpj-sabah",
        // Sarawak
        "normah-kuching"
      ],
      generalNote: "MSIG FlexiHealth (individual) uses MSIG Assist Card for cashless GL at ~117 panel hospitals (listing updated July 1, 2024). Group products may use IHP or MiCare. MSIG Healthcare International (expat plan) has no fixed panel — direct billing arranged case by case.",
      logLimitWarning: "MSIG health products have clear room benefit tiers — select the tier matching your preferred hospital.",
      preAdmissionWindow: "30 days pre-admission for related hospitalisation.",
      website: "https://www.msig.com.my"
    },
    {
      id: "tune-protect",
      name: "Tune Protect (PRO-Health Medical)",
      tiers: ["Tune PRO-Health Medical", "Travel Insurance", "Tune Air Protection"],
      cashlessHospitals: [
        // KL (via MiCare panel)
        "gleneagles-kl", "pantai-kl", "pantai-ampang", "beacon-hospital", "parkcity-mc",
        "kpj-sentosa", "tawakal-kl", "kpj-dsh2", "pusrawi",
        // Selangor (via MiCare panel)
        "sunway-mc", "sjmc", "kpj-damansara", "kpj-ap", "kpj-klang", "kpj-selangor-shah-alam",
        "thomson-thkd", "columbia-bukit-rimau", "ara-damansara", "pantai-cheras",
        // Penang (via MiCare panel)
        "gleneagles-penang", "island-hospital", "kpj-penang", "pantai-penang", "loh-guan-lye",
        // Johor (via MiCare panel)
        "gleneagles-medini", "kpj-johor", "regency-johor", "pantai-batu-pahat",
        // Perak
        "kpj-ipoh", "fatimah-ipoh",
        // Melaka
        "mahkota",
        // Kedah
        "kpj-kedah",
        // Sabah
        "kpj-sabah", "gleneagles-kk",
        // Sarawak
        "bmc-kuching", "kpj-kuching"
      ],
      generalNote: "Tune Protect PRO-Health Medical uses the full MiCare hospital panel (~106 hospitals nationwide). GL processed 24/7 via MiCare on dedicated Tune Protect line 1800-88-7940. MiCare MyMed App available. Note: Tune Protect travel insurance has a different (much smaller) scope — confirm you're on a PRO-Health plan for full hospital coverage.",
      logLimitWarning: "Tune Protect travel insurance does not cover pre-existing conditions and has limited hospital scope. PRO-Health Medical is the standalone medical product. For comprehensive coverage, consider dedicated health insurers (AIA, Prudential, Great Eastern, Allianz).",
      preAdmissionWindow: "For PRO-Health: 30 days pre-admission for related condition. Travel insurance: not applicable.",
      website: "https://www.tuneprotect.com"
    },
    {
      id: "bupa",
      name: "Bupa Global (for Expatriates & International Plans)",
      tiers: ["Bupa Select", "Bupa Essential", "Bupa Global Travel"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "prince-court", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc",
        // Selangor
        "sunway-mc", "sunway-mc-damansara", "sjmc", "thomson-thkd",
        // Penang
        "island-hospital", "gleneagles-penang", "loh-guan-lye",
        // Johor
        "gleneagles-medini", "regency-johor",
        // Perak
        "pantai-ipoh",
        // Sabah
        "gleneagles-kk",
        // Sarawak
        "normah-kuching"
      ],
      generalNote: "Bupa International targets expatriates and globally mobile professionals. As of January 2025, GL processing in Malaysia is handled by IHP (Integrated Health Plans Malaysia). Wide international hospital network accepted at all major Malaysian private hospitals. Premiums are higher but coverage is comprehensive and internationally portable.",
      logLimitWarning: "Bupa generally has high LOGs suitable for premium hospitals. Confirm your specific plan level — Select and Essential tiers differ in coverage limits.",
      preAdmissionWindow: "Pre-admission typically 90 days for related condition. Confirm with Bupa customer service.",
      website: "https://www.bupaglobal.com/en/malaysia"
    },
    {
      id: "cigna",
      name: "Cigna International",
      tiers: ["Cigna Global Silver", "Cigna Global Gold", "Cigna Global Platinum"],
      cashlessHospitals: [
        // KL
        "gleneagles-kl", "prince-court", "pantai-kl", "pantai-ampang", "parkcity-mc",
        "beacon-hospital", "umsc",
        // Selangor
        "sunway-mc", "sjmc", "thomson-thkd",
        // Penang
        "island-hospital", "gleneagles-penang",
        // Johor
        "gleneagles-medini", "regency-johor",
        // Sabah
        "gleneagles-kk",
        // Sarawak
        "normah-kuching"
      ],
      generalNote: "Cigna International is a premium international health insurer popular with expatriates and internationally mobile professionals in Malaysia. Comprehensive global coverage accepted at all major Malaysian private hospitals. No public Malaysian hotline — call the number on your membership card.",
      logLimitWarning: "Cigna plans have high annual limits. Silver plan limits may be lower — Gold and Platinum plans offer near-unlimited coverage including evacuation.",
      preAdmissionWindow: "Cigna typically covers pre-admission expenses broadly — confirm with Cigna membership services.",
      website: "https://www.cignahealthbenefits.com"
    }
  ]
};
