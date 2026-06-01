// js/intelligence.js
window.HI = window.HI || {};

(function() {

  function initIntelligence() {
    // Cards use inline onclick calling window.HI.toggleIntelSection() — no extra wiring needed.
    // Close dialogs on backdrop click
    var hacksDialog = document.getElementById('hacks-dialog');
    if (hacksDialog) {
      hacksDialog.addEventListener('click', function(e) {
        if (e.target === hacksDialog) hacksDialog.classList.add('hidden');
      });
    }
    var tierDialog = document.getElementById('tier-dialog');
    if (tierDialog) {
      tierDialog.addEventListener('click', function(e) {
        if (e.target === tierDialog) tierDialog.classList.add('hidden');
      });
    }
    // Wire hacks/tier close buttons
    var hacksClose = document.getElementById('hacks-dialog-close');
    if (hacksClose) hacksClose.addEventListener('click', function() {
      if (hacksDialog) hacksDialog.classList.add('hidden');
    });
    var tierClose = document.getElementById('tier-dialog-close');
    if (tierClose) tierClose.addEventListener('click', function() {
      if (tierDialog) tierDialog.classList.add('hidden');
    });
  }

  // ─── HACKS DIALOG ────────────────────────────────────────────────────────────

  function openHacksDialog() {
    var dialog = document.getElementById('hacks-dialog');
    var content = document.getElementById('hacks-content');
    if (!dialog || !content) return;

    content.innerHTML = renderHacksContent();
    dialog.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  }

  function renderHacksContent() {
    var hacks = [
      {
        num: '01',
        title: 'FPP Scheme (Full-Paying Patient)',
        color: '#1d4ed8',
        body: 'Most government (MOH) hospitals offer a Full-Paying Patient (FPP) scheme, allowing you to get private-room care and direct specialist access at a government hospital — paying roughly 30–60% less than equivalent private hospitals. You skip the long outpatient queue and get an air-conditioned private room with same clinical team as subsidised wards. Best for: routine specialist consults, elective surgery, maternity. Apply at the hospital\'s FPP unit with your IC. Tip: FPP rates are not publicly listed — ask directly and request a written estimate.',
        tag: 'Cost Saving'
      },
      {
        num: '02',
        title: 'Pre-Admission Expense Claim (30–90 Day Window)',
        color: '#7c3aed',
        body: 'If outpatient specialist visits — scans, blood tests, specialist consultations, and investigations — lead to a hospital admission within 30–90 days (varies by insurer), all those pre-admission bills become claimable as "Pre-Admission Medical Expenses". This is the single most commonly missed insurance claim in Malaysia. Keep EVERY receipt from every specialist visit, imaging centre, and lab — even months before admission. Call your insurer to confirm your policy\'s pre-admission window: AIA typically 30–60 days; Prudential typically 60–90 days; Great Eastern typically 30–60 days.',
        tag: 'Insurance Hack'
      },
      {
        num: '03',
        title: 'Stabilise & Transfer Protocol',
        color: '#0d9488',
        body: 'If you are admitted to a district or state hospital that lacks a specialist you need, you have the right to request a formal transfer after stabilisation. The receiving hospital (e.g. HKL, IJN, UMMC) must accept government-hospital referrals. The key phrase is "I would like to formally request a transfer to [hospital] for specialist care." The doctor must document this request. For complex cardiac cases, IJN accepts direct referrals from any MOH hospital. For neuro, UMMC or Hospital Selayang. Do NOT discharge yourself — this voids your insurance and referral pathway.',
        tag: 'Navigation'
      },
      {
        num: '04',
        title: 'Academic-Hybrid Pricing Arbitrage (UMSC, UKMSC)',
        color: '#d97706',
        body: 'University-affiliated private specialist centres — UMSC (UM Specialist Centre) and UKMSC (UKM Medical Centre) — offer private-hospital-standard specialist care at 20–40% below pure private hospital rates. Why? They are not-for-profit university entities. Senior consultants are UM/UKM faculty professors who simultaneously run private practices here. You get Associate Professor / Professor level expertise at SJMC-equivalent facilities but for less. Parking and admin are handled by the government university, not a for-profit entity. Best kept secret in KL for high-end specialist care on a budget.',
        tag: 'Cost Saving'
      },
      {
        num: '05',
        title: 'Serdang Heart Centre OT Caveat (2024 Status)',
        color: '#ef4444',
        body: 'Hospital Sultan Idris Shah (Serdang) has the highest cardiac surgical volume in Southeast Asia for PCI (percutaneous coronary intervention) and coronary angiogram. HOWEVER: as of 2024, some open-heart surgery (CABG) cases have experienced longer waiting times due to OT scheduling constraints. For emergency PCI, Serdang remains the gold standard in Selangor. For elective CABG or valve replacement, confirm current OT wait times with the cardiothoracic surgery unit directly: +603-8947 5555. Cross-reference with IJN for urgent elective cases.',
        tag: 'Critical Caveat'
      },
      {
        num: '06',
        title: 'Gleneagles Budget Card Exclusion (LOG Limit)',
        color: '#dc2626',
        body: 'Gleneagles Kuala Lumpur room rates start at RM 380/night (standard) to RM 1,200+/night (suite). Many insurance plans — especially older or budget plans — have a daily LOG (Letter of Guarantee) limit of RM 150–200/night. The gap between your LOG limit and the actual room rate is YOUR liability, every night. On a 5-day stay this could be RM 1,000–5,000 in unexpected personal expense. Before booking Gleneagles, Prince Court, or Pantai KL: call your insurer, confirm your daily room LOG limit, and verify it matches or exceeds the hospital\'s minimum room rate. Upgrade your plan before illness, not after.',
        tag: 'Insurance Warning'
      },
      {
        num: '07',
        title: 'ESMO Clinical Trial Access (Beacon, Sunway, UMMC)',
        color: '#059669',
        body: 'Malaysia has three key centres for accessing international oncology clinical trials and cutting-edge cancer treatment protocols: (1) Beacon Hospital — operates SOLARIS (Southeast Asia Oncology Research Institute), one of Southeast Asia\'s most active trial sites for late-phase cancer trials; (2) Sunway Medical Centre — active in breast, colorectal, and haematology trials; (3) UMMC — largest government academic oncology trial centre, NMRR-registered. To access trials: search clinicaltrials.gov or nmrr.gov.my for open Malaysian trials. Call the trial coordinator (not the main hospital line). Some trials cover all treatment costs. Ask your oncologist for referral specifically to the research unit.',
        tag: 'Cancer / Trials'
      },
      {
        num: '08',
        title: 'HTAR Highest Outpatient Volume (Klang Valley)',
        color: '#0891b2',
        body: 'Hospital Tengku Ampuan Rahimah (HTAR) in Klang has the highest outpatient volume of any hospital in the Klang Valley, and arguably in Malaysia. This creates two realities: (1) Expected waiting time for outpatient specialist clinics can be 4–8 hours. Plan a full-day visit. Arrive by 7:30am for number-taking (some clinics fill by 8am). (2) Because of the volume, HTAR doctors see more cases than almost any other hospital — particularly for internal medicine, O&G, and paediatrics. High volume = high experience. Bring a book, snacks, and a portable charger.',
        tag: 'Navigation'
      },
      {
        num: '09',
        title: 'EPF Account 2 Medical Withdrawal',
        color: '#4f46e5',
        body: 'Employees Provident Fund (EPF) Account 2 can be withdrawn for medical expenses covering: yourself, spouse, parents, children, and in-laws. Eligible expenses include hospitalisation, surgery, specialist treatment, dialysis, chemotherapy, physiotherapy, and certain medical equipment. Apply online via i-Akaun (i-Akaun.kwsp.gov.my) or at any EPF branch. Bring: original hospital bills, doctor letter, IC of patient and account holder, and relevant relationship documents. Processing time: 7–14 working days for online, 3 working days at counter. There is no minimum withdrawal amount for medical purposes.',
        tag: 'Financial Aid'
      },
      {
        num: '10',
        title: 'MySalam Automatic B40 Coverage',
        color: '#16a34a',
        body: 'MySalam is a free government-funded critical illness insurance scheme for B40 Malaysians (household income ≤ RM100,000/year). Coverage: RM 8,000 payout upon diagnosis of any of 36 critical illnesses including cancer, heart attack, stroke, kidney failure, and others. It is AUTOMATIC — no registration, no premium payment. Check your eligibility and claim status at mysalam.com.my or call 1-800-88-1234. To claim: submit diagnosis letter from a registered doctor + IC + bank account details. Money is deposited within 14 working days of approved claim. Many B40 families are unaware they are covered.',
        tag: 'Financial Aid'
      },
      {
        num: '11',
        title: 'Night Cover Intelligence (MO vs Specialist Overnight)',
        color: '#7c3aed',
        body: 'In Malaysia, private hospital night cover (10pm–7am) is handled differently by institution: At most private hospitals, the overnight on-call is a Medical Officer (MO) or Registrar — your specialist is called only if the MO deems it necessary. At academic hospitals (UMMC, UKMSC, UKMMC) and IJN, residents and fellows cover overnight with specialist consultants on backup call. At small private hospitals and day-surgery centres: there may be NO on-call doctor on-site overnight — only a nurse with a GP on phone. ALWAYS ask before admission: "Who is the overnight doctor if I deteriorate — is a specialist on-site or on phone call?" This is your right as a patient.',
        tag: 'Safety'
      },
      {
        num: '12',
        title: 'How to Get a Referral Letter',
        color: '#0d9488',
        body: 'For PUBLIC hospitals: you need a referral letter from a Klinik Kesihatan (government clinic) or your district hospital doctor. Without a referral, you will be seen as a "walk-in" and may wait longer. To get a referral fast: visit Klinik Kesihatan in the morning, tell the doctor you need a specialist referral, bring any existing test results or previous specialist letters. The doctor will write a referral on the spot if clinically warranted. For PRIVATE hospitals: no referral is needed. You can book a specialist directly. However, your GP\'s referral letter helps the specialist understand your history and is needed for insurance pre-authorisation letters. Key tip: bring ALL your previous test results, scans, and discharge summaries to every specialist visit — government systems do not share records between hospitals.',
        tag: 'Navigation'
      }
    ];

    var tagColors = {
      'Cost Saving': '#16a34a', 'Insurance Hack': '#7c3aed', 'Navigation': '#0891b2',
      'Critical Caveat': '#dc2626', 'Insurance Warning': '#dc2626', 'Cancer / Trials': '#059669',
      'Financial Aid': '#1d4ed8', 'Safety': '#d97706'
    };

    return '<div class="hacks-grid">' +
      hacks.map(function(hack) {
        var tagColor = tagColors[hack.tag] || '#64748b';
        return '<div class="hack-card" style="border-left: 4px solid ' + hack.color + '">' +
          '<div class="hack-header">' +
            '<span class="hack-num" style="color:' + hack.color + '">' + hack.num + '</span>' +
            '<h4 class="hack-title">' + hack.title + '</h4>' +
            '<span class="hack-tag" style="background:' + tagColor + '20;color:' + tagColor + '">' + hack.tag + '</span>' +
          '</div>' +
          '<p class="hack-body">' + hack.body + '</p>' +
        '</div>';
      }).join('') +
    '</div>';
  }

  // ─── TIER DIALOG ─────────────────────────────────────────────────────────────

  function openTierDialog() {
    var dialog = document.getElementById('tier-dialog');
    var content = document.getElementById('tier-content');
    if (!dialog || !content) return;

    content.innerHTML = renderTierDiagram();
    dialog.classList.remove('hidden');
  }

  function renderTierDiagram() {
    var tiers = [
      {
        level: 1,
        icon: '&#127968;',
        name: 'Klinik Kesihatan (KK)',
        subtitle: 'Primary Care / Penjagaan Primer',
        color: '#16a34a',
        desc: 'Your entry point to the Malaysian public healthcare system. Every Malaysian can walk in for free primary care — GPs, basic medications, MCH (maternal & child health), health screening, and referrals.',
        features: [
          'Walk-in, no appointment needed',
          'Free or heavily subsidised for Malaysians',
          'Issues government sick leave (MC)',
          'Manages chronic disease (diabetes, hypertension, asthma)',
          'Issues referral letters to specialist clinics'
        ],
        note: 'Tip: Get your referral letter here — it fast-tracks you at district and state hospital specialist clinics.'
      },
      {
        level: 2,
        icon: '&#127973;',
        name: 'District Hospital',
        subtitle: 'Hospital Daerah',
        color: '#2563eb',
        desc: 'Serves a district (~100,000–500,000 population). Handles general medicine, surgery, obstetrics, and paediatrics. Has 24/7 emergency (A&E). Refers complex cases upward.',
        features: [
          '24/7 A&E / Emergency Department',
          'Inpatient wards (general medicine, surgery, O&G, paediatrics)',
          'Basic diagnostic imaging (X-ray, ultrasound)',
          'Operating theatre for emergencies',
          '50–200 beds typically'
        ],
        note: 'Examples: Hospital Kuala Kubu Bharu, Hospital Banting, Hospital Segamat.'
      },
      {
        level: 3,
        icon: '&#127963;',
        name: 'State General Hospital',
        subtitle: 'Hospital Negeri / Hospital Umum',
        color: '#7c3aed',
        desc: 'The main referral centre for each state. Has most major specialties, specialist clinics, and full surgical capability. Accepts complex referrals from district hospitals statewide.',
        features: [
          'All major specialties on-site',
          'ICU, NICU, HDU',
          'Complex surgery including cardiac and neurosurgery at larger centres',
          '300–1,500+ beds',
          'Specialist clinics with referred appointments'
        ],
        note: 'Examples: Hospital Raja Permaisuri Bainun (Perak), Hospital Sultan Idris Shah (Selangor), Hospital Sultanah Aminah (Johor).'
      },
      {
        level: 4,
        icon: '&#127975;',
        name: 'Tertiary / Quaternary / Academic Hospital',
        subtitle: 'Hospital Pakar Tertiari / Hospital Universiti',
        color: '#dc2626',
        desc: 'The apex of the system. Handles the most complex, rare, and multi-system cases. Many are academic hospitals attached to public universities — where research, training, and clinical care intersect.',
        features: [
          'Super-specialist care (transplant, neurovascular, complex oncology)',
          'Dedicated research units and clinical trials',
          'Professors and clinical subspecialty consultants',
          'Advanced imaging: PET-CT, MRI 3T, interventional radiology',
          'Teaching hospitals: residents supervised by consultants 24/7'
        ],
        note: 'Examples: Hospital Kuala Lumpur (HKL), UMMC, UKMMC, Institut Jantung Negara (IJN — cardiac only), Hospital Universiti Sains Malaysia (HUSM).'
      }
    ];

    var arrowHtml = '<div class="tier-arrow">&#11014;&#65039; ' + window.HI.t('tier_referred_up') + ' &nbsp;|&nbsp; &#11015;&#65039; ' + window.HI.t('tier_discharged_down') + '</div>';

    var html = '<div class="tier-diagram">' +
      '<p class="tier-intro">Malaysia\'s public healthcare system operates in a structured referral pyramid. Understanding this helps you navigate faster and avoid unnecessary waits.</p>' +
      tiers.map(function(tier, i) {
        return '<div class="tier-card" style="border-left: 4px solid ' + tier.color + '">' +
          '<div class="tier-header">' +
            '<div class="tier-badge" style="background:' + tier.color + '">' + tier.level + '</div>' +
            '<div class="tier-icon">' + tier.icon + '</div>' +
            '<div>' +
              '<h4 style="color:' + tier.color + '">' + tier.name + '</h4>' +
              '<span class="tier-subtitle">' + tier.subtitle + '</span>' +
            '</div>' +
          '</div>' +
          '<p class="tier-desc">' + tier.desc + '</p>' +
          '<ul class="tier-features">' + tier.features.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
          '<div class="tier-note">&#128161; ' + tier.note + '</div>' +
          (i < tiers.length - 1 ? arrowHtml : '') +
        '</div>';
      }).join('') +
      '<div class="tier-private-note">' +
        '<h4>&#127894; ' + window.HI.t('tier_private_title') + '</h4>' +
        '<p>Private hospitals operate in parallel to the public system — they are not on this referral ladder. You access them directly (no referral needed) and pay out-of-pocket or via insurance. Quality varies widely from community day-surgery centres to quaternary-equivalent facilities like Sunway Medical Centre, Prince Court, or Gleneagles. They are NOT necessarily "better" than government hospitals — they offer faster access and more comfort, but for highly complex cases (transplant, experimental treatment, cardiac surgery volume), government academic centres often have more experience.</p>' +
      '</div>' +
    '</div>';

    return html;
  }

  // ─── SECTION RENDERING ───────────────────────────────────────────────────────

  var activeTopicId = null;

  var topicLabels = {
    'intel-tier':      { icon: '&#127970;', key: 'intel_tier_title' },
    'intel-insurance': { icon: '&#128179;', key: 'intel_insurance_title' },
    'intel-cost':      { icon: '&#128200;', key: 'intel_cost_title' },
    'intel-rights':    { icon: '&#9878;&#65039;', key: 'intel_rights_title' },
    'intel-verify':    { icon: '&#10003;', key: 'intel_verify_title' },
    'intel-doctor':    { icon: '&#128104;&#8205;&#9877;&#65039;', key: 'intel_doctor_title' },
    'intel-trial':     { icon: '&#128300;', key: 'intel_trial_title' },
    'intel-night':     { icon: '&#127769;', key: 'intel_night_title' }
  };

  function selectIntelTopic(topicId) {
    var panel = document.getElementById('intel-topic-panel');
    var body = document.getElementById('intel-topic-body');
    var labelEl = document.getElementById('intel-topic-label');
    if (!panel || !body) return;

    // Deactivate all cards
    var allCards = document.querySelectorAll('.intel-card');
    for (var i = 0; i < allCards.length; i++) allCards[i].classList.remove('active');

    // Toggle off if same topic
    if (activeTopicId === topicId) {
      activeTopicId = null;
      panel.classList.add('hidden');
      return;
    }

    activeTopicId = topicId;

    // Activate the clicked card
    var card = document.getElementById(topicId + '-card');
    if (card) card.classList.add('active');

    // Hide the card grid and show topic in its place
    var cardGrid = document.getElementById('intel-quick-grid');
    if (cardGrid) cardGrid.classList.add('hidden');

    // Update label
    var meta = topicLabels[topicId] || { icon: '', key: topicId };
    if (labelEl) labelEl.innerHTML = meta.icon + ' ' + (meta.key ? window.HI.t(meta.key) : topicId);

    // Render content
    body.innerHTML = '';
    renderSection(topicId, body);

    // Show panel
    panel.classList.remove('hidden');
    setTimeout(function() {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  }

  function closeIntelTopic() {
    var panel = document.getElementById('intel-topic-panel');
    if (panel) panel.classList.add('hidden');
    var allCards = document.querySelectorAll('.intel-card');
    for (var i = 0; i < allCards.length; i++) allCards[i].classList.remove('active');
    // Show the card grid again
    var cardGrid = document.getElementById('intel-quick-grid');
    if (cardGrid) cardGrid.classList.remove('hidden');
    activeTopicId = null;
  }

  // Keep backward-compat alias
  function toggleIntelSection(sectionId) { selectIntelTopic(sectionId); }

  function renderSection(sectionId, el) {
    switch (sectionId) {
      case 'intel-insurance': renderInsuranceSection(el); break;
      case 'intel-cost':      renderCostSection(el); break;
      case 'intel-night':     renderNightSection(el); break;
      case 'intel-rights':    renderRightsSection(el); break;
      case 'intel-verify':    renderVerifySection(el); break;
      case 'intel-trial':     renderTrialSection(el); break;
      case 'intel-doctor':    renderDoctorSection(el); break;
      case 'intel-tier':      renderTierInSection(el); break;
    }
  }

  function renderTierInSection(el) {
    el.innerHTML = renderTierDiagram();
  }

  // Insurance Pre-Qualifier
  function renderInsuranceSection(el) {
    if (!window.INSURANCE_PANELS) return;
    var rules = INSURANCE_PANELS.generalRules || {};
    var insurers = INSURANCE_PANELS.insurers || [];

    var rulesHtml = '<div class="intel-subsection">' +
      '<h4>&#128220; ' + window.HI.t('intel_gen_rules') + '</h4>' +
      '<div class="rules-grid">' +
        Object.entries(rules).map(function(e) {
          var key = e[0];
          var val = e[1];
          var keyLabel = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(s) { return s.toUpperCase(); });
          return '<div class="rule-card"><h5>' + keyLabel + '</h5><p>' + val + '</p></div>';
        }).join('') +
      '</div>' +
    '</div>';

    var insurerHtml = '<div class="intel-subsection">' +
      '<h4>&#127968; ' + window.HI.t('intel_major_insurers') + '</h4>' +
      '<div class="insurer-list">' +
        insurers.map(function(ins) {
          return '<details class="insurer-details">' +
            '<summary class="insurer-summary"><strong>' + ins.name + '</strong>' +
              (ins.logLimitWarning ? '<span class="warning-dot">&#9888;</span>' : '') +
            '</summary>' +
            '<div class="insurer-body">' +
              (ins.generalNote ? '<p>' + ins.generalNote + '</p>' : '') +
              (ins.logLimitWarning ? '<div class="warning-box">&#9888; <strong>' + window.HI.t('log_limit_warning') + ':</strong> ' + ins.logLimitWarning + '</div>' : '') +
              (ins.preAdmissionWindow ? '<div class="info-box">&#128197; <strong>' + window.HI.t('pre_admission_window') + ':</strong> ' + ins.preAdmissionWindow + '</div>' : '') +
              (ins.tiers ? '<p><strong>' + window.HI.t('plan_tiers') + ':</strong> ' + ins.tiers.join(', ') + '</p>' : '') +
              (ins.website ? '<a href="' + ins.website + '" target="_blank" class="source-link">&#127760; ' + ins.website.replace(/^https?:\/\//, '') + '</a>' : '') +
            '</div>' +
          '</details>';
        }).join('') +
      '</div>' +
    '</div>';

    el.innerHTML =
      '<div class="intel-section-wrap">' +
        '<p class="intel-section-intro">' + window.HI.t('intel_insurer_intro') + '</p>' +
        rulesHtml + insurerHtml +
      '</div>';
  }

  // Cost Intelligence
  function renderCostSection(el) {
    if (!window.COST_REFERENCE) return;
    var cats = COST_REFERENCE.categories || [];

    var html = '<div class="intel-section-wrap">' +
      '<p class="intel-section-intro">' + (COST_REFERENCE.disclaimer || '') + '</p>' +
      '<div class="cost-tier-key">' +
        '<span class="tier-key public">' + window.HI.t('tier_key_public') + '</span>' +
        '<span class="tier-key public-fpp">' + window.HI.t('tier_key_public_fpp') + '</span>' +
        '<span class="tier-key private-mid">' + window.HI.t('tier_key_private_mid') + '</span>' +
        '<span class="tier-key private-premium">' + window.HI.t('tier_key_private_premium') + '</span>' +
      '</div>' +
      cats.map(function(cat) {
        var procs = (cat.procedures || []).map(function(p) {
          return '<tr>' +
            '<td class="proc-name">' + p.name + (p.nameBM ? '<div class="proc-bm">' + p.nameBM + '</div>' : '') + '</td>' +
            '<td class="cost public">' + (p.publicCost || '—') + '</td>' +
            '<td class="cost public-fpp">' + (p.publicFPP || '—') + '</td>' +
            '<td class="cost private-mid">' + (p.privateMid || '—') + '</td>' +
            '<td class="cost private-premium">' + (p.privatePremium || '—') + '</td>' +
          '</tr>' +
          (p.notes ? '<tr class="proc-notes-row"><td colspan="5"><div class="proc-notes">&#128161; ' + p.notes + '</div></td></tr>' : '');
        }).join('');

        return '<details class="cost-category">' +
          '<summary class="cost-cat-summary"><strong>' + cat.title + '</strong>' +
            (cat.titleZH ? '<span class="cost-cat-zh"> ' + cat.titleZH + '</span>' : '') +
          '</summary>' +
          '<div class="cost-table-wrap">' +
            '<table class="cost-table">' +
              '<thead><tr>' +
                '<th>' + window.HI.t('cost_col_procedure') + '</th>' +
                '<th>' + window.HI.t('cost_col_public') + '</th>' +
                '<th>' + window.HI.t('cost_col_public_fpp') + '</th>' +
                '<th>' + window.HI.t('cost_col_private_mid') + '</th>' +
                '<th>' + window.HI.t('cost_col_private_premium') + '</th>' +
              '</tr></thead>' +
              '<tbody>' + procs + '</tbody>' +
            '</table>' +
          '</div>' +
        '</details>';
      }).join('') +
    '</div>';

    el.innerHTML = html;
  }

  // FPP Navigator
  function renderFPPSection(el) {
    var steps = [
      {
        n: '1',
        title: 'Am I eligible for FPP?',
        body: 'The Full-Paying Patient (FPP) scheme is available at <strong>all MOH government hospitals</strong>. Any Malaysian or non-Malaysian may use FPP — there is no income test. FPP simply means you pay the non-subsidised rate. You access a private room and direct specialist appointments without a referral letter in some hospitals.',
        tip: 'FPP is most useful for: elective specialist consultations, planned surgery, maternity care, and chronic disease management at government tertiary hospitals.'
      },
      {
        n: '2',
        title: 'Find the FPP Unit',
        body: 'At your target hospital, go to the <strong>Unit Pesakit Bayar Penuh (FPP Unit)</strong> — usually at the main outpatient registration or a dedicated counter. Ask reception: "Di mana Unit FPP?" (Where is the FPP Unit?)',
        tip: 'Call ahead: most FPP units operate Mon–Fri 8am–4pm. Avoid showing up on public holidays.'
      },
      {
        n: '3',
        title: 'Request a Written Estimate',
        body: 'Ask for a <strong>written cost estimate</strong> before committing. The FPP clerk will provide an estimate for: consultation fee, room rate, OT fee (if surgery), expected days. You are legally entitled to this estimate under MOH Private Healthcare Facilities and Services Act.',
        tip: 'FPP rates are NOT published online — always ask. Rates vary by hospital category and service.'
      },
      {
        n: '4',
        title: 'Paying & Insurance',
        body: 'FPP bills can be paid by: cash, credit card, EPF Account 2 withdrawal, or insurance (if your insurer covers FPP). Call your insurer to confirm: "Does my plan cover FPP at government hospitals?" — not all plans do. Takaful plans typically cover FPP. Most panel insurers treat FPP government hospitals as in-network.',
        tip: 'If your insurer does not cover FPP, compare the FPP cost to an equivalent private hospital — FPP is typically 30–60% cheaper.'
      },
      {
        n: '5',
        title: 'Book Your Appointment',
        body: 'Once you have your cost estimate and payment method sorted, the FPP clerk will schedule your appointment directly with the specialist. FPP patients typically wait <strong>1–7 days</strong> for a specialist appointment versus 4–8 weeks on the subsidised queue.',
        tip: 'Bring your IC, existing test results, and any previous specialist letters to your first FPP appointment. Government hospitals do not share electronic records between institutions.'
      }
    ];

    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('fpp_nav_title') + '</h3>' +
      '<p class="intel-section-intro">' + window.HI.t('fpp_intro') + '</p>' +
      '<div class="fpp-steps">' +
        steps.map(function(s) {
          return '<div class="fpp-step">' +
            '<div class="fpp-step-num">' + s.n + '</div>' +
            '<div class="fpp-step-content">' +
              '<h4>' + s.title + '</h4>' +
              '<p>' + s.body + '</p>' +
              '<div class="fpp-tip">&#128161; ' + s.tip + '</div>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      '<div class="fpp-hospitals-note">' +
        '<h4>' + window.HI.t('fpp_hospitals_note') + '</h4>' +
        '<ul>' +
          '<li><strong>HKL (Hospital Kuala Lumpur)</strong> — widest specialty range in the system</li>' +
          '<li><strong>UMMC (UM Medical Centre)</strong> — academic hospital, professor-level consultants</li>' +
          '<li><strong>Hospital Sultan Idris Shah, Serdang</strong> — cardiac surgery, highest volume in Southeast Asia</li>' +
          '<li><strong>Hospital Pulau Pinang</strong> — Penang state FPP, all major specialties</li>' +
          '<li><strong>Hospital Sultanah Aminah, Johor Bahru</strong> — Johor state FPP</li>' +
        '</ul>' +
      '</div>' +
    '</div>';
  }

  // Night Cover
  function renderNightSection(el) {
    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('night_cover_title') + '</h3>' +
      '<p class="intel-section-intro">' + window.HI.t('night_intro') + '</p>' +
      '<div class="night-table-wrap">' +
        '<table class="night-table">' +
          '<thead><tr><th>Hospital Type</th><th>Overnight Cover</th><th>Specialist On-Site?</th><th>Recommendation</th></tr></thead>' +
          '<tbody>' +
            '<tr>' +
              '<td><strong>Academic Hospitals</strong><div class="text-xs text-slate-500">UMMC, UKMMC, HUSM, USM</div></td>' +
              '<td>Resident doctors (MO/HO) + registrar, with consultant on backup call</td>' +
              '<td class="text-amber-600">Consultant on backup call (phone/15 min)</td>' +
              '<td>Best coverage — teaching hospital structure means multi-level overnight presence</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>IJN (Institut Jantung Negara)</strong></td>' +
              '<td>24/7 cardiac registrar on-site. Cardiac surgeon on call.</td>' +
              '<td class="text-green-600">&#10003; Cardiac specialist always available</td>' +
              '<td>Gold standard for cardiac overnight emergencies</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Government State Hospitals</strong><div class="text-xs text-slate-500">HKL, HPP, HSA, HRPB...</div></td>' +
              '<td>Medical Officer (MO) on duty, supported by specialist on-call roster</td>' +
              '<td class="text-amber-600">Specialist on-call — response within 30–60 min</td>' +
              '<td>Reasonable overnight safety net. For complex cases, MO will escalate.</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Major Private Hospitals</strong><div class="text-xs text-slate-500">Gleneagles, Pantai, Sunway, SJMC</div></td>' +
              '<td>In-house MO or Resident Medical Officer (RMO). Your specialist is on-call by phone.</td>' +
              '<td class="text-amber-600">Your specialist is on phone call only (typically)</td>' +
              '<td>Ask specifically: "Is your RMO on-site 24/7 and is there an ICU doctor on-site overnight?"</td>' +
            '</tr>' +
            '<tr>' +
              '<td><strong>Small / Community Private Hospitals</strong><div class="text-xs text-slate-500">Day surgery centres, small private medical centres</div></td>' +
              '<td>Nurse + on-call GP by phone. May have NO doctor on-site overnight.</td>' +
              '<td class="text-red-600">&#10007; Nurse only on-site overnight (some facilities)</td>' +
              '<td class="text-red-700"><strong>HIGH RISK</strong> for complex post-operative patients. Always ask: "Is a doctor physically on-site overnight?"</td>' +
            '</tr>' +
          '</tbody>' +
        '</table>' +
      '</div>' +
      '<div class="night-question-box">' +
        '<h4>' + window.HI.t('night_q_heading') + ':</h4>' +
        '<blockquote>"If I deteriorate at 3am, who is the doctor physically on-site — and can a specialist be at my bedside within 15 minutes?"</blockquote>' +
        '<p>This is your right as a patient (Patient Rights Charter, MOH). You are entitled to a clear answer before signing admission documents.</p>' +
      '</div>' +
    '</div>';
  }

  // Patient Rights & Complaints
  function renderRightsSection(el) {
    if (!window.LEGAL_SUPPORT) return;
    var comp = LEGAL_SUPPORT.complaints || {};

    var whenHtml = (comp.when || []).map(function(w) { return '<li>' + w + '</li>'; }).join('');
    var stepsHtml = (comp.steps || []).map(function(s, i) {
      return '<div class="rights-step"><div class="rights-step-num">' + (i + 1) + '</div><p>' + s + '</p></div>';
    }).join('');
    var channelsHtml = (comp.channels || []).map(function(c) {
      return '<div class="complaint-channel">' +
        '<h5>' + c.name + '</h5>' +
        '<p class="channel-for"><strong>' + window.HI.t('for_label') + ':</strong> ' + c.for + '</p>' +
        '<p class="channel-how"><strong>' + window.HI.t('how_label') + ':</strong> ' + c.how + '</p>' +
        (c.timeline ? '<p class="channel-timeline"><strong>' + window.HI.t('timeline_label') + ':</strong> ' + c.timeline + '</p>' : '') +
        (c.phone ? '<a href="tel:' + c.phone.replace(/[^+0-9]/g, '') + '" class="channel-phone">&#128222; ' + c.phone + '</a>' : '') +
        (c.website ? '<a href="' + c.website + '" target="_blank" class="source-link">&#127760; ' + window.HI.t('website_label') + '</a>' : '') +
      '</div>';
    }).join('');
    var rightsHtml = (comp.patientRights || LEGAL_SUPPORT.complaints && LEGAL_SUPPORT.complaints.patientRights || []).map(function(r) {
      return '<li>' + r + '</li>';
    }).join('');

    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('rights_section_title') + '</h3>' +
      (comp.statute ? '<div class="statute-box"><strong>&#9878; ' + window.HI.t('limitation_period') + ':</strong> ' + comp.statute + '</div>' : '') +
      '<div class="intel-subsection">' +
        '<h4>' + window.HI.t('your_patient_rights') + '</h4>' +
        (rightsHtml ? '<ul class="rights-list">' + rightsHtml + '</ul>' : '') +
      '</div>' +
      '<div class="intel-subsection">' +
        '<h4>' + window.HI.t('when_to_complain') + '</h4>' +
        '<ul class="rights-list">' + whenHtml + '</ul>' +
      '</div>' +
      '<div class="intel-subsection">' +
        '<h4>' + window.HI.t('complaint_process') + '</h4>' +
        stepsHtml +
      '</div>' +
      '<div class="intel-subsection">' +
        '<h4>' + window.HI.t('complaint_channels') + '</h4>' +
        channelsHtml +
      '</div>' +
    '</div>';
  }

  // Legal Support
  function renderLegalSection(el) {
    if (!window.LEGAL_SUPPORT) return;
    var legalAid = LEGAL_SUPPORT.legalAid || [];
    var dv = LEGAL_SUPPORT.domesticViolence;

    var legalHtml = legalAid.map(function(org) {
      return '<div class="legal-org-card">' +
        '<h5>' + org.name + '</h5>' +
        (org.eligibility ? '<p class="legal-eligibility">&#10003; <strong>' + window.HI.t('eligibility') + '</strong> ' + org.eligibility + '</p>' : '') +
        (org.services ? '<p><strong>' + window.HI.t('services_offered') + '</strong> ' + (Array.isArray(org.services) ? org.services.join('; ') : org.services) + '</p>' : '') +
        (org.howToApply ? '<p><strong>' + window.HI.t('how_to_apply') + '</strong> ' + org.howToApply + '</p>' : '') +
        (org.notes ? '<p class="text-xs text-slate-500">' + org.notes + '</p>' : '') +
        '<div class="org-links">' +
          (org.phone ? '<a href="tel:' + org.phone.replace(/[^+0-9]/g, '').split('|')[0] + '" class="ngo-phone">&#128222; ' + org.phone.split('|')[0].trim() + '</a>' : '') +
          (org.website ? '<a href="' + org.website + '" target="_blank" class="ngo-web">&#127760; ' + window.HI.t('website_label') + '</a>' : '') +
        '</div>' +
      '</div>';
    }).join('');

    var dvHtml = '';
    if (dv) {
      dvHtml = '<div class="dv-box">' +
        '<h4>&#9888; ' + window.HI.t('dv_support') + '</h4>' +
        '<a href="tel:15999" class="hotline-btn">&#128222; Talian Kasih 15999 (24/7, Free)</a>' +
        '<p>' + (dv.desc || 'Call Talian Kasih 15999 for 24/7 domestic violence support.') + '</p>' +
      '</div>';
    }

    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('legal_section_title') + '</h3>' +
      '<p class="intel-section-intro">' + window.HI.t('legal_title') + '</p>' +
      dvHtml +
      '<div class="intel-subsection">' +
        '<h4>' + window.HI.t('free_legal_aid') + '</h4>' +
        '<div class="legal-grid">' + legalHtml + '</div>' +
      '</div>' +
    '</div>';
  }

  // Clinical Trial Guide
  function renderTrialSection(el) {
    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('trial_section_title') + '</h3>' +
      '<p class="intel-section-intro">' + window.HI.t('trial_intro') + '</p>' +

      '<div class="trial-steps">' +
        '<div class="trial-step">' +
          '<h4>1. Search Registered Malaysian Trials</h4>' +
          '<p>All clinical trials conducted in Malaysia must be registered with <strong>NMRR (National Medical Research Register)</strong>.</p>' +
          '<a href="https://www.nmrr.gov.my" target="_blank" class="btn-source">&#128279; nmrr.gov.my — Malaysian Trial Register</a>' +
          '<p class="text-sm text-slate-500 mt-2">Search by disease type, phase, or hospital. Filter for "Open for Recruitment" status.</p>' +
        '</div>' +
        '<div class="trial-step">' +
          '<h4>2. Search International Databases</h4>' +
          '<p>ClinicalTrials.gov (US NIH) lists many trials that include Malaysian sites. Search by condition and filter by country "Malaysia".</p>' +
          '<a href="https://clinicaltrials.gov" target="_blank" class="btn-source">&#128279; clinicaltrials.gov</a>' +
          '<a href="https://www.who.int/clinical-trials-registry-platform" target="_blank" class="btn-source">&#128279; WHO Trial Registry Platform</a>' +
        '</div>' +
        '<div class="trial-step">' +
          '<h4>3. Key Malaysian Trial Centres</h4>' +
          '<div class="trial-centres">' +
            '<div class="trial-centre"><strong>Beacon Hospital (Petaling Jaya)</strong><p>SOLARIS (Southeast Asia Oncology Research Institute) — one of Southeast Asia\'s most active oncology trial sites. Phase 1–3 cancer trials. Contact: research@beaconhospital.com.my</p></div>' +
            '<div class="trial-centre"><strong>Sunway Medical Centre (Petaling Jaya)</strong><p>Active in breast cancer, colorectal, haematology, and immunotherapy trials. Ask for their Clinical Research Unit.</p></div>' +
            '<div class="trial-centre"><strong>UMMC (University Malaya Medical Centre)</strong><p>Largest academic trial centre. Wide range of specialties. Trials are NMRR-registered. Ask your specialist for referral to the Clinical Trials Unit.</p></div>' +
            '<div class="trial-centre"><strong>Institut Kanser Negara (IKN)</strong><p>National cancer institute — conducts and coordinates national oncology trials. Specialises in cancers prevalent in Malaysia.</p></div>' +
          '</div>' +
        '</div>' +
        '<div class="trial-step">' +
          '<h4>4. Understanding Trial Phases</h4>' +
          '<ul class="phase-list">' +
            '<li><strong>Phase 1:</strong> Safety testing in small groups — highest risk, may have early treatment benefit</li>' +
            '<li><strong>Phase 2:</strong> Efficacy and dosing — promising results in specific cancer types</li>' +
            '<li><strong>Phase 3:</strong> Large-scale comparison with current standard treatment — often good option if standard therapy has failed</li>' +
            '<li><strong>Phase 4:</strong> Post-approval safety monitoring — usually accessible treatment, minimal experimental risk</li>' +
          '</ul>' +
        '</div>' +
        '<div class="trial-step">' +
          '<h4>5. What Trials May Cover</h4>' +
          '<ul>' +
            '<li>Experimental drug or treatment at no cost</li>' +
            '<li>All trial-related medical tests, scans, and monitoring</li>' +
            '<li>Sometimes: transport, accommodation, and caregiver support</li>' +
            '<li>Access to drugs not yet commercially available in Malaysia</li>' +
          '</ul>' +
          '<div class="trial-tip">Always ask the trial coordinator: "What costs are covered by the trial, and what am I responsible for?" Get this in writing before consenting.</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  // Doctor Verification Guide
  function renderDoctorSection(el) {
    var qualAbbrev = [
      { abbr: 'MBBS / MD', meaning: 'Basic medical degree (5–6 years). All registered doctors hold this.' },
      { abbr: 'MRCP', meaning: 'Member of the Royal College of Physicians — UK postgraduate internal medicine qualification.' },
      { abbr: 'FRCP', meaning: 'Fellow of the Royal College of Physicians — senior, higher recognition.' },
      { abbr: 'MRCS / FRCS', meaning: 'Member/Fellow of the Royal College of Surgeons — surgical postgraduate qualifications.' },
      { abbr: 'MS (Surgery)', meaning: 'Master of Surgery — Malaysian/UK surgical postgraduate qualification.' },
      { abbr: 'MMed', meaning: 'Master of Medicine — Malaysian specialist qualification (UM, UKM, USM, UM).' },
      { abbr: 'MRCOG / FRCOG', meaning: 'Member/Fellow Royal College of Obstetricians & Gynaecologists.' },
      { abbr: 'FRCR', meaning: 'Fellow of the Royal College of Radiologists — radiology and oncology.' },
      { abbr: 'FAMS', meaning: 'Fellow of the Academy of Medicine Singapore — Singapore senior specialist.' },
      { abbr: 'AM(Mal) / AM', meaning: 'Academy of Medicine Malaysia Fellow — Malaysian senior specialist recognition.' },
      { abbr: 'FANZCA', meaning: 'Fellow of the Australian/NZ College of Anaesthetists.' },
      { abbr: 'PhD', meaning: 'Doctor of Philosophy — research doctorate, not a medical/clinical degree on its own.' },
      { abbr: 'Dato\' / Tan Sri', meaning: 'Malaysian honorific title — indicates civic recognition, not a medical qualification.' },
      { abbr: 'Adj Prof / Prof Madya', meaning: 'Adjunct/Associate Professor — academic rank, indicates teaching at a university hospital.' }
    ];

    el.innerHTML = '<div class="intel-section-wrap">' +
      '<h3>' + window.HI.t('doctor_section_title') + '</h3>' +
      '<p class="intel-section-intro">' + window.HI.t('doctor_intro') + '</p>' +

      '<div class="verify-steps-doctor">' +
        '<div class="doctor-verify-step">' +
          '<h4>&#128269; How to Verify a Doctor</h4>' +
          '<ol>' +
            '<li>Go to <a href="https://www.mmc.gov.my" target="_blank" class="source-link">mmc.gov.my</a> → "Semak Pengamal Perubatan Berdaftar" (Check Registered Medical Practitioners)</li>' +
            '<li>Search by full name or MMC registration number (ask doctor for their MMC number)</li>' +
            '<li>The result will show: registration status (active/lapsed/suspended), specialty, qualification, and any disciplinary actions</li>' +
            '<li>If the doctor does NOT appear or their status is "suspended" — do not proceed. Report to MMC: +603-4049 6000</li>' +
          '</ol>' +
          '<a href="https://www.mmc.gov.my" target="_blank" class="btn-source">&#128279; mmc.gov.my — Official MMC Registry</a>' +
        '</div>' +
        '<div class="doctor-verify-step">' +
          '<h4>&#127891; Understanding Doctor Qualifications</h4>' +
          '<p class="text-sm text-slate-600 mb-3">Malaysian doctors\' name cards often list multiple qualifications. Here is what they mean:</p>' +
          '<div class="qual-table-wrap">' +
            '<table class="qual-table">' +
              '<thead><tr><th>' + window.HI.t('abbr_col') + '</th><th>' + window.HI.t('meaning_col') + '</th></tr></thead>' +
              '<tbody>' +
                qualAbbrev.map(function(q) {
                  return '<tr><td class="qual-abbr"><code>' + q.abbr + '</code></td><td>' + q.meaning + '</td></tr>';
                }).join('') +
              '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>' +
        '<div class="doctor-verify-step">' +
          '<h4>&#128204; ' + window.HI.t('other_boards') + '</h4>' +
          '<ul>' +
            '<li><strong>Dentists:</strong> <a href="https://www.mdc.gov.my" target="_blank">mdc.gov.my</a> — Malaysian Dental Council</li>' +
            '<li><strong>Nurses & Midwives:</strong> <a href="https://www.ljm.moh.gov.my" target="_blank">ljm.moh.gov.my</a> — Lembaga Jururawat Malaysia</li>' +
            '<li><strong>Pharmacists:</strong> <a href="https://pharmacy.gov.my" target="_blank">pharmacy.gov.my</a> — Pharmacy Board Malaysia</li>' +
            '<li><strong>Traditional & Complementary Medicine:</strong> <a href="https://www.tcm.moh.gov.my" target="_blank">tcm.moh.gov.my</a> — Traditional & Complementary Medicine Division, MOH</li>' +
          '</ul>' +
        '</div>' +
        '<div class="doctor-verify-step">' +
          '<h4>&#9888; Red Flags</h4>' +
          '<ul class="red-flags-list">' +
            '<li>Doctor cannot provide their MMC registration number when asked</li>' +
            '<li>Qualifications listed that do not appear in the MMC database</li>' +
            '<li>Practising at a facility that is not licensed by MOH</li>' +
            '<li>Using titles like "Dr." without an MBBS, MD, or equivalent degree</li>' +
            '<li>Offering guaranteed cure rates for serious illnesses (medically unethical)</li>' +
            '<li>Requesting large upfront cash payments without itemised billing</li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function renderVerifySection(el) {
    if (typeof VERIFY_GUIDE === 'undefined' || !VERIFY_GUIDE.length) {
      el.innerHTML = '<p class="text-muted">Verify guide data not available.</p>';
      return;
    }
    el.innerHTML = '<div class="verify-grid">' +
      VERIFY_GUIDE.slice(0, 8).map(function(guide) {
        return '<div class="verify-card">' +
          '<h4>' + guide.facilityType + '</h4>' +
          '<p class="text-sm text-muted" style="margin-bottom:0.5rem"><strong>' + window.HI.t('governed_by') + ':</strong> ' + guide.governingLaw + '</p>' +
          '<p class="text-sm text-muted" style="margin-bottom:0.75rem"><strong>' + window.HI.t('licensed_by') + ':</strong> ' + guide.licensingBody + '</p>' +
          '<div class="verify-steps">' +
          (guide.howToVerify || []).slice(0, 3).map(function(step) {
            return '<div class="verify-step">&#10003; ' + step + '</div>';
          }).join('') +
          '</div>' +
          (guide.redFlags ? '<div class="red-flags-list" style="margin-top:0.75rem"><strong>&#9888; ' + window.HI.t('red_flags') + ':</strong><ul>' +
            guide.redFlags.slice(0, 3).map(function(f) { return '<li>' + f + '</li>'; }).join('') +
          '</ul></div>' : '') +
          (guide.complaintChannel ? '<p style="font-size:0.75rem;color:var(--muted);margin-top:0.5rem">' + window.HI.t('complaint_label') + ': ' + guide.complaintChannel + '</p>' : '') +
        '</div>';
      }).join('') +
    '</div>';
  }

  // Re-render open intel topic panel when language changes
  var _prevIntelLangChange = window.HI.onLangChange;
  window.HI.onLangChange = function(code) {
    if (_prevIntelLangChange) _prevIntelLangChange(code);
    if (activeTopicId) {
      var body = document.getElementById('intel-topic-body');
      var labelEl = document.getElementById('intel-topic-label');
      if (body) {
        body.innerHTML = '';
        renderSection(activeTopicId, body);
      }
      if (labelEl) {
        var meta = topicLabels[activeTopicId];
        if (meta) labelEl.innerHTML = meta.icon + ' ' + window.HI.t(meta.key);
      }
    }
  };

  window.HI.selectIntelTopic = selectIntelTopic;
  window.HI.closeIntelTopic = closeIntelTopic;
  window.HI.toggleIntelSection = selectIntelTopic; // backward compat
  window.HI.openHacksDialog = openHacksDialog;
  window.HI.openTierDialog = openTierDialog;
  window.HI.initIntelligence = initIntelligence;
})();
