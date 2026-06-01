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
      tiers: ["AIA Vitality Basic", "A-Life Income Goal", "A-Life Med Saver", "A-Plus Health", "A-Plus Health Max"],
      cashlessHospitals: [
        "hkl", "hklp", "ummc", "umsc", "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar",
        "beacon", "parkcity", "assunta", "columbia-pandan", "imu-hospital",
        "htar", "smc", "sjmc", "kpj-damansara", "kpj-dsh2", "kpj-klang", "thkd",
        "columbia-bukitrimau", "ara-damansara",
        "hpp", "island-hospital", "gleneagles-penang", "loh-guan-lye", "adventist", "pantai-penang", "kpj-penang",
        "hsa", "gleneagles-medini", "kpj-johor", "regency-jb", "columbia-iskandar",
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh",
        "gleneagles-kk", "jesselton-mc", "kpj-sabah",
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "AIA has one of the widest private hospital panel networks in Malaysia. Most major private hospitals — KPJ group, Gleneagles, Pantai, Beacon, Sunway — accept AIA cashless. AIA Vitality integrates health incentives with insurance.",
      logLimitWarning: "AIA A-Plus basic plans may have daily room limits of RM 150–250/day — insufficient for premium hospitals like Gleneagles KL (RM 350–600/night) or Prince Court. Upgrade to A-Plus Health Max or ensure your plan's room limit matches your preferred hospital.",
      preAdmissionWindow: "AIA typically covers pre-admission outpatient expenses 30–60 days before related hospitalisation. Confirm exact window in your Certificate of Insurance.",
      website: "https://www.aia.com.my"
    },
    {
      id: "prudential",
      name: "Prudential / Takaful BSN Takaful Malaysia",
      tiers: ["PRUMy Health", "PRUWith You", "PRUSmart Medical", "PRUMedik Plus"],
      cashlessHospitals: [
        "hkl", "hklp", "ummc", "umsc", "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar",
        "beacon", "parkcity", "assunta", "columbia-pandan",
        "htar", "smc", "sjmc", "kpj-damansara", "kpj-klang", "thkd", "ara-damansara",
        "hpp", "island-hospital", "gleneagles-penang", "loh-guan-lye", "adventist", "pantai-penang", "kpj-penang",
        "hsa", "gleneagles-medini", "kpj-johor", "regency-jb",
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh",
        "gleneagles-kk", "jesselton-mc", "kpj-sabah",
        "normah-kuching", "kpj-kuching"
      ],
      generalNote: "Prudential has a very wide panel network across Malaysia. PRUSmart Medical and PRUMedik series cover most major private hospitals. Prudential BSN Takaful offers Shariah-compliant versions.",
      logLimitWarning: "Entry-level PRU plans have lower room and board limits. Confirm room limit against your preferred hospital's daily rate — especially for premium hospitals.",
      preAdmissionWindow: "Pre-admission expenses typically covered 30–90 days before admission for the related condition.",
      website: "https://www.prudential.com.my"
    },
    {
      id: "great-eastern",
      name: "Great Eastern Life Malaysia",
      tiers: ["GREAT MedProtect", "GREAT HealthLock", "Supreme MedCover", "GREAT Early Care"],
      cashlessHospitals: [
        "hkl", "ummc", "umsc", "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar",
        "beacon", "parkcity", "assunta",
        "htar", "smc", "sjmc", "kpj-damansara", "thkd",
        "island-hospital", "gleneagles-penang", "loh-guan-lye", "pantai-penang",
        "hsa", "gleneagles-medini", "kpj-johor",
        "pantai-ipoh", "kpj-ipoh",
        "gleneagles-kk",
        "normah-kuching"
      ],
      generalNote: "Great Eastern has a solid panel network covering all major hospital groups. Slightly fewer community-level hospitals compared to AIA or Prudential, but all flagship hospitals are included.",
      logLimitWarning: "GREAT MedProtect plans have varying room limits. For hospitalisation at premium hospitals, ensure your daily room limit covers the hospital's room rate.",
      preAdmissionWindow: "Pre-admission expenses covered for related outpatient visits typically within 60 days before admission.",
      website: "https://www.greateasternlife.com/my"
    },
    {
      id: "allianz",
      name: "Allianz Malaysia",
      tiers: ["LifeBest", "SmartMed Plus", "Allianz Critical Care", "PrimeLink"],
      cashlessHospitals: [
        "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar", "beacon", "parkcity",
        "assunta", "columbia-pandan",
        "htar", "smc", "sjmc", "kpj-damansara", "kpj-klang", "thkd",
        "island-hospital", "gleneagles-penang", "loh-guan-lye", "pantai-penang",
        "hsa", "gleneagles-medini", "kpj-johor", "regency-jb",
        "pantai-ipoh", "kpj-ipoh", "fatimah-ipoh",
        "gleneagles-kk",
        "normah-kuching"
      ],
      generalNote: "Allianz Malaysia has a wide panel covering major hospitals across all states. Known for efficient claims processing. Strong in motor, health, and corporate insurance.",
      logLimitWarning: "Confirm daily room benefit versus hospital room rates. Allianz SmartMed Plus has tiered room benefits — ensure your tier matches your hospital preference.",
      preAdmissionWindow: "Pre-admission covered 30–90 days before related admission depending on plan.",
      website: "https://www.allianz.com.my"
    },
    {
      id: "tokio-marine",
      name: "Tokio Marine Life Malaysia",
      tiers: ["TM MediShield", "TM Medicare Flexi", "TM Protect Series"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "pantai-bangsar", "beacon", "parkcity",
        "htar", "smc", "sjmc", "kpj-damansara", "thkd",
        "island-hospital", "gleneagles-penang", "pantai-penang",
        "hsa", "gleneagles-medini", "kpj-johor",
        "pantai-ipoh", "kpj-ipoh",
        "gleneagles-kk",
        "normah-kuching"
      ],
      generalNote: "Tokio Marine has a solid Malaysia-wide panel network. Covers all major hospital groups. Part of the Tokio Marine Group (Japan) — strong financial backing.",
      logLimitWarning: "Check specific plan room benefit. Tokio Marine plans vary in hospital tier coverage.",
      preAdmissionWindow: "Pre-admission expenses within 30–60 days of related hospitalisation.",
      website: "https://www.tokiomarine.com.my"
    },
    {
      id: "zurich",
      name: "Zurich Malaysia (formerly MCTIS / Zurich Takaful)",
      tiers: ["Zurich LifeSurance", "Zurich MedSave", "Zurich Takaful MedPlus"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "beacon", "parkcity",
        "smc", "sjmc", "kpj-damansara", "thkd",
        "island-hospital", "gleneagles-penang", "pantai-penang",
        "kpj-johor", "gleneagles-medini",
        "kpj-ipoh", "pantai-ipoh",
        "gleneagles-kk"
      ],
      generalNote: "Zurich Malaysia has a medium-to-wide panel. Good coverage at major hospital groups but panel size is slightly smaller than AIA/Prudential. Takaful options available.",
      logLimitWarning: "Verify panel status and LOG limit before admission — especially outside Klang Valley.",
      preAdmissionWindow: "Pre-admission expenses typically 30 days. Confirm in policy schedule.",
      website: "https://www.zurich.com.my"
    },
    {
      id: "sun-life",
      name: "Sun Life Malaysia",
      tiers: ["Sun MedAssure", "Sun LifeReach", "Sun MedCover Series"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "pantai-bangsar", "beacon",
        "smc", "sjmc", "thkd",
        "gleneagles-penang", "island-hospital", "pantai-penang",
        "gleneagles-medini", "kpj-johor",
        "kpj-ipoh"
      ],
      generalNote: "Sun Life Malaysia is a growing insurer with an expanding panel. Coverage is solid at major hospitals but the panel is smaller than market leaders. Best for those who plan to use flagship hospitals in major cities.",
      logLimitWarning: "Panel may be limited outside major cities. Verify panel status for hospitals in East Malaysia and smaller towns.",
      preAdmissionWindow: "Pre-admission window varies — check policy certificate.",
      website: "https://www.sunlifemalaysia.com"
    },
    {
      id: "etiqa",
      name: "Etiqa Insurance & Takaful (Maybank)",
      tiers: ["Etiqa eMedic", "MedikSaver", "Takaful MySejahtera"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "beacon", "parkcity",
        "htar", "smc", "sjmc", "kpj-damansara", "thkd",
        "island-hospital", "gleneagles-penang", "pantai-penang", "kpj-penang",
        "hsa", "kpj-johor", "gleneagles-medini",
        "kpj-ipoh", "pantai-ipoh",
        "normah-kuching"
      ],
      generalNote: "Etiqa is backed by Maybank — accessible via Maybank branches and app. Medium panel size but improving. Popular for its digital-first approach and competitive pricing. Takaful MySejahtera is Shariah-compliant.",
      logLimitWarning: "Etiqa eMedic entry-level plans have daily room limits around RM 150–200 — check against your hospital preference.",
      preAdmissionWindow: "30 days pre-admission for related condition. Confirm with Etiqa helpline.",
      website: "https://www.etiqa.com.my"
    },
    {
      id: "axa-affin",
      name: "AXA Affin Life / Affin Hwang Life",
      tiers: ["AXA MediCare", "Affin Life MediPlus", "SmartHealth"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "beacon", "parkcity",
        "smc", "sjmc", "kpj-damansara",
        "gleneagles-penang", "island-hospital",
        "kpj-johor", "gleneagles-medini",
        "kpj-ipoh"
      ],
      generalNote: "AXA Affin Life has a medium panel, covering the major hospital groups in Peninsular Malaysia. Part of AXA Group internationally. Panel is adequate for most urban patients.",
      logLimitWarning: "Verify panel for hospitals outside Klang Valley and Penang. Less coverage in East Malaysia.",
      preAdmissionWindow: "Typically 30–60 days. Confirm in policy document.",
      website: "https://www.axaaffin.com.my"
    },
    {
      id: "msig",
      name: "MSIG Insurance Malaysia",
      tiers: ["MediPlus Individual", "MediPlus Family", "MSIG HealthShield"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "pantai-bangsar", "beacon",
        "htar", "smc", "sjmc",
        "island-hospital", "gleneagles-penang", "pantai-penang",
        "kpj-johor", "gleneagles-medini",
        "kpj-ipoh"
      ],
      generalNote: "MSIG is better known for general insurance (motor, travel, fire) but has a solid hospital panel for health insurance products. Good for existing MSIG customers who want to consolidate insurance.",
      logLimitWarning: "MSIG health products have clear room benefit tiers — select the tier matching your preferred hospital.",
      preAdmissionWindow: "30 days pre-admission for related hospitalisation.",
      website: "https://www.msig.com.my"
    },
    {
      id: "tune-protect",
      name: "Tune Protect / AirAsia Insurance",
      tiers: ["Travel Insurance", "Tune Air Protection", "Lifestyle Protect"],
      cashlessHospitals: [
        "gleneagles", "pantai-kl", "beacon",
        "smc", "sjmc",
        "gleneagles-penang", "island-hospital"
      ],
      generalNote: "Tune Protect is primarily a travel insurance provider. Its hospital panel for medical insurance is LIMITED compared to dedicated health insurers. Best for travel emergencies. NOT recommended as primary health insurance for serious medical conditions.",
      logLimitWarning: "Tune Protect travel insurance may not cover pre-existing conditions at all. For medical tourism or travel, Tune covers emergency treatment. For comprehensive local health coverage, choose a dedicated health insurer (AIA, Prudential, Great Eastern, Allianz).",
      preAdmissionWindow: "Not typically applicable for travel insurance products.",
      website: "https://www.tuneprotect.com"
    },
    {
      id: "bupa",
      name: "BUPA International (for Expatriates)",
      tiers: ["BUPA Select", "BUPA Essential", "BUPA Global Travel"],
      cashlessHospitals: [
        "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar", "beacon", "parkcity",
        "umsc",
        "smc", "sjmc", "thkd",
        "island-hospital", "gleneagles-penang", "loh-guan-lye",
        "gleneagles-medini",
        "pantai-ipoh",
        "gleneagles-kk",
        "normah-kuching"
      ],
      generalNote: "BUPA International is designed for expatriates in Malaysia and globally. Very wide panel — includes international hospitals and all major private hospitals in Malaysia. Premiums are higher but coverage is comprehensive and internationally portable.",
      logLimitWarning: "BUPA generally has high LOGs suitable for premium hospitals. Confirm your specific plan level — Select and Essential tiers differ in coverage limits.",
      preAdmissionWindow: "Pre-admission typically 90 days for related condition. Confirm with BUPA customer service.",
      website: "https://www.bupaglobal.com/en/malaysia"
    },
    {
      id: "cigna",
      name: "Cigna International",
      tiers: ["Cigna Global Silver", "Cigna Global Gold", "Cigna Global Platinum"],
      cashlessHospitals: [
        "gleneagles", "prince-court", "pantai-kl", "pantai-bangsar", "beacon", "parkcity",
        "umsc",
        "smc", "sjmc", "thkd",
        "island-hospital", "gleneagles-penang",
        "gleneagles-medini",
        "gleneagles-kk",
        "normah-kuching"
      ],
      generalNote: "Cigna International is another premium international health insurer popular with expatriates and internationally mobile professionals in Malaysia. Comprehensive global coverage. Accepted at all major Malaysian private hospitals.",
      logLimitWarning: "Cigna plans have high annual limits. Silver plan limits may be lower — Gold and Platinum plans offer near-unlimited coverage including evacuation.",
      preAdmissionWindow: "Cigna typically covers pre-admission expenses broadly — confirm with Cigna membership services.",
      website: "https://www.cignahealthbenefits.com"
    }
  ]
};
