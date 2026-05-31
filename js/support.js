// js/support.js
window.HI = window.HI || {};

(function() {
  function init() {
    renderNGOFilters();
    renderNGOs('all');
    bindSupportTabs();
    renderCaretakerSection();
    renderFinancialSection();
  }

  function renderNGOFilters() {
    var el = document.getElementById('ngo-filter-btns');
    if (!el) return;
    var categories = ['all', 'cancer', 'kidney', 'heart', 'mental', 'women-dv', 'aids', 'disability', 'hospice', 'general', 'children', 'elder', 'legal'];
    categories.forEach(function(cat) {
      var btn = document.createElement('button');
      btn.className = 'ngo-filter-btn' + (cat === 'all' ? ' active' : '');
      btn.setAttribute('data-cat', cat);
      btn.textContent = HI.t('ngo_filter_' + cat) || cat.charAt(0).toUpperCase() + cat.slice(1);
      btn.addEventListener('click', function() {
        el.querySelectorAll('.ngo-filter-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderNGOs(cat);
      });
      el.appendChild(btn);
    });
  }

  function renderNGOs(category) {
    var grid = document.getElementById('ngo-grid');
    if (!grid || typeof NGO_SUPPORT === 'undefined') return;
    var filtered = category === 'all' ? NGO_SUPPORT : NGO_SUPPORT.filter(function(n) {
      return n.category === category || (n.categories && n.categories.includes(category));
    });
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = '<p class="no-results text-slate-500 col-span-full">No organisations found for this category.</p>';
      return;
    }
    filtered.forEach(function(ngo) {
      var card = document.createElement('div');
      card.className = 'ngo-card';
      card.innerHTML =
        '<div class="ngo-card-header">' +
          '<h4>' + ngo.name + '</h4>' +
          '<span class="ngo-cat-badge">' + (ngo.category || '') + '</span>' +
        '</div>' +
        (ngo.services && ngo.services.length ?
          '<div class="ngo-services"><strong>' + HI.t('services_offered') + '</strong> ' + ngo.services.join(', ') + '</div>' : '') +
        (ngo.eligibility ?
          '<div class="ngo-eligibility"><strong>' + HI.t('eligibility') + '</strong> ' + ngo.eligibility + '</div>' : '') +
        (ngo.howToApply ?
          '<div class="ngo-apply"><strong>' + HI.t('how_to_apply') + '</strong> ' + ngo.howToApply + '</div>' : '') +
        '<div class="ngo-contact">' +
          (ngo.phone ? '<a href="tel:' + ngo.phone.replace(/[^+0-9]/g, '') + '" class="ngo-phone">&#128222; ' + ngo.phone + '</a>' : '') +
          (ngo.website ? '<a href="' + ngo.website + '" target="_blank" class="ngo-web">&#127760; Website</a>' : '') +
        '</div>';
      grid.appendChild(card);
    });
  }

  function bindSupportTabs() {
    var tabs = document.querySelectorAll('.support-tab');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var section = this.getAttribute('data-section');
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        document.querySelectorAll('.support-section').forEach(function(s) { s.classList.add('hidden'); });
        var target = document.getElementById('support-' + section + '-section');
        if (target) {
          target.classList.remove('hidden');
          if (section === 'verify' && target.getAttribute('data-rendered') !== '1') {
            renderVerifyGuide();
            target.setAttribute('data-rendered', '1');
          }
          if (section === 'legal' && target.getAttribute('data-rendered') !== '1') {
            renderLegalInSupport();
            target.setAttribute('data-rendered', '1');
          }
          if (section === 'financial' && target.getAttribute('data-rendered') !== '1') {
            renderFinancialSection();
            target.setAttribute('data-rendered', '1');
          }
          if (section === 'caretaker' && target.getAttribute('data-rendered') !== '1') {
            renderCaretakerSection();
            target.setAttribute('data-rendered', '1');
          }
        }
      });
    });
  }

  function renderCaretakerSection() {
    var el = document.getElementById('support-caretaker-section');
    if (!el) return;
    el.innerHTML = '<div class="content-section">' +
      '<h3>No-Caretaker Pathway</h3>' +
      '<p class="section-intro">If a patient has no family caretaker, these are the steps to take <strong>on Day 1 of admission</strong> — not at discharge.</p>' +
      '<div class="pathway-steps">' +
        '<div class="pathway-step">' +
          '<div class="step-num">1</div>' +
          '<div>' +
            '<strong>Ask for the Medical Social Worker (MSW)</strong>' +
            '<p>Every public hospital has a Medical Social Work unit. They coordinate discharge planning, welfare home placement, and financial aid. Ask for them by name at the admissions desk or through the ward nurse.</p>' +
          '</div>' +
        '</div>' +
        '<div class="pathway-step">' +
          '<div class="step-num">2</div>' +
          '<div>' +
            '<strong>JKM Welfare Assessment</strong>' +
            '<p>The MSW will contact Jabatan Kebajikan Masyarakat (JKM) for a welfare assessment. JKM can arrange placement in Rumah Seri Kenangan (elderly care home) or Pusat Jagaan for post-discharge care.</p>' +
          '</div>' +
        '</div>' +
        '<div class="pathway-step">' +
          '<div class="step-num">3</div>' +
          '<div>' +
            '<strong>NGO Home Care Referral</strong>' +
            '<p>Hospis Malaysia provides free home visits for palliative patients. NASAM provides home rehabilitation for stroke patients. Malaysian Care provides community support.</p>' +
          '</div>' +
        '</div>' +
        '<div class="pathway-step">' +
          '<div class="step-num">4</div>' +
          '<div>' +
            '<strong>Gerontology / Geriatric Day Care</strong>' +
            '<p>For elderly patients, ask your doctor about referral to a geriatric day care programme — allowing independence with monitored daily care.</p>' +
          '</div>' +
        '</div>' +
        '<div class="pathway-step">' +
          '<div class="step-num">5</div>' +
          '<div>' +
            '<strong>Private Nursing Placement</strong>' +
            '<p>Private nursing homes and rehabilitation centres are available in most states. Costs range from RM 1,200–5,000/month. Ask the hospital MSW for a list of MOH-licensed facilities in your state.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="hotline-box">' +
        '<strong>Talian Kasih: 15999</strong> (24/7, free) — Social welfare referrals for any crisis including no-caretaker situations.' +
        '<br><strong>JKM Hotline: 1-800-88-3000</strong> — Jabatan Kebajikan Masyarakat national helpline.' +
      '</div>' +
    '</div>';
  }

  function renderFinancialSection() {
    var el = document.getElementById('support-financial-section');
    if (!el) return;
    el.innerHTML = '<div class="content-section">' +
      '<h3>Financial Aid &amp; Subsidies</h3>' +
      '<div class="financial-grid">' +
        renderFinancialCard('MySalam', 'Auto-coverage for B40 Malaysians', 'RM 8,000 payout on diagnosis of 36 critical illnesses. Free and automatic — no claim needed if your household income is below RM100,000/year. Check eligibility at mysalam.com.my', '&#128203;', 'https://mysalam.com.my') +
        renderFinancialCard('EPF Account 2 Withdrawal', 'Use your own savings', 'Withdraw from EPF Account 2 for medical expenses for yourself, spouse, parents, or children (including in-laws). Apply at any EPF counter or online via i-Akaun. Includes hospitalisation and specialist care.', '&#128176;', 'https://www.kwsp.gov.my') +
        renderFinancialCard('PERKESO / SOCSO', 'Work-related illness or injury', 'Covers hospitalisation, rehabilitation, and survivor benefits for workplace accidents or occupational diseases. Claim through your employer or directly at perkeso.gov.my or 1-800-22-8000.', '&#127981;', 'https://www.perkeso.gov.my') +
        renderFinancialCard('Zakat Medical Aid', 'For Muslims in need', 'State Islamic Religious Councils (e.g. MAIWP, MAIS, MAZS) provide Zakat Perubatan (medical Zakat) for eligible Muslims who cannot afford treatment. Contact your state Lembaga Zakat office.', '&#9764;&#65039;', null) +
        renderFinancialCard('JKM Bantuan Perubatan', 'Government welfare', 'Jabatan Kebajikan Masyarakat (JKM) provides medical assistance to B40 households. Covers hospital bills, prosthetics, and rehabilitation equipment. Apply at your nearest JKM district office.', '&#127963;', 'https://www.jkm.gov.my') +
        renderFinancialCard('Hospital Welfare Fund', 'Hospital-specific', 'Many hospitals have internal welfare funds or charity wards. Ask the Medical Social Worker about eligibility for fee waivers or subsidies before discharge.', '&#127973;', null) +
        renderFinancialCard('BRIM / STR / Bantuan Rakyat', 'Government cash assistance', 'B40 households receiving Bantuan Rakyat (formerly BRIM) may also apply for supplementary medical hardship assistance. Coordinate through your welfare officer.', '&#127968;', null) +
        renderFinancialCard('PharmaCare Malaysia', 'Pharmaceutical assistance', 'Several pharmaceutical companies (Roche, AstraZeneca, Pfizer) run patient assistance programmes for expensive medications. Ask your oncologist or specialist if your drug has a "Patient Access Program" (PAP).', '&#128138;', null) +
      '</div>' +
    '</div>';
  }

  function renderFinancialCard(title, subtitle, desc, icon, url) {
    return '<div class="financial-card">' +
      '<div class="financial-icon">' + icon + '</div>' +
      '<div>' +
        '<strong>' + title + '</strong>' +
        '<div class="financial-subtitle">' + subtitle + '</div>' +
        '<p>' + desc + '</p>' +
        (url ? '<a href="' + url + '" target="_blank" class="source-link text-xs">&#127760; Learn more</a>' : '') +
      '</div>' +
    '</div>';
  }

  function renderVerifyGuide() {
    var el = document.getElementById('support-verify-section');
    if (!el || typeof VERIFY_GUIDE === 'undefined') return;
    el.innerHTML = '<div class="content-section">' +
      '<h3>Verify a Healthcare Facility</h3>' +
      '<div class="verify-master-tip">&#127973; <strong>Master Tip:</strong> For ANY healthcare facility in Malaysia, call MOH Hotline <a href="tel:1800886000">1800-88-6000</a> or BPKK: <a href="tel:+60388831000">+603-8883 1000</a></div>' +
      '<div class="verify-grid">' +
        VERIFY_GUIDE.map(function(v) {
          return '<div class="verify-card">' +
            '<h4>' + v.title + '</h4>' +
            '<p class="verify-why">' + (v.why || '') + '</p>' +
            (v.howToVerify && v.howToVerify.length ?
              '<div class="verify-steps-list"><strong>How to verify:</strong><ol>' +
                v.howToVerify.map(function(s) { return '<li>' + s + '</li>'; }).join('') +
              '</ol></div>' : '') +
            (v.redFlags && v.redFlags.length ?
              '<div class="verify-red-flags"><strong>&#128681; Red flags:</strong><ul>' +
                v.redFlags.slice(0, 4).map(function(r) { return '<li>' + r + '</li>'; }).join('') +
              '</ul></div>' : '') +
            (v.complaintChannel ?
              '<div class="verify-complaint"><strong>Complaint channel:</strong> ' + v.complaintChannel + '</div>' : '') +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>';
  }

  function renderLegalInSupport() {
    var el = document.getElementById('support-legal-section');
    if (!el || typeof LEGAL_SUPPORT === 'undefined') return;
    var html = '<div class="content-section"><h3>Legal Support Directory</h3>';
    if (LEGAL_SUPPORT.legalAid) {
      html += '<h4>Free &amp; Subsidised Legal Aid</h4><div class="legal-grid">';
      LEGAL_SUPPORT.legalAid.forEach(function(org) {
        html += '<div class="legal-card">' +
          '<strong>' + org.name + '</strong>' +
          (org.eligibility ? '<p class="text-sm">' + org.eligibility + '</p>' : '') +
          (org.services ? '<p class="text-xs text-slate-500">' + (Array.isArray(org.services) ? org.services.slice(0, 3).join('; ') : org.services) + '</p>' : '') +
          '<div class="org-links">' +
            (org.phone ? '<a href="tel:' + org.phone.replace(/[^+0-9]/g, '').split('|')[0] + '">&#128222; ' + org.phone.split('|')[0].trim() + '</a>' : '') +
            (org.website ? ' <a href="' + org.website + '" target="_blank">&#127760; Website</a>' : '') +
          '</div>' +
        '</div>';
      });
      html += '</div>';
    }
    if (LEGAL_SUPPORT.domesticViolence) {
      html += '<div class="dv-box">' +
        '<h4>Domestic Violence</h4>' +
        '<a href="tel:15999" class="hotline-btn">&#128222; Talian Kasih 15999</a>' +
        '<p>' + (LEGAL_SUPPORT.domesticViolence.desc || 'Call Talian Kasih 15999 for 24/7 domestic violence support.') + '</p>' +
      '</div>';
    }
    if (LEGAL_SUPPORT.complaints && LEGAL_SUPPORT.complaints.patientRights) {
      html += '<div class="patient-rights-box"><h4>Patient Rights Summary</h4><ul class="rights-list">' +
        LEGAL_SUPPORT.complaints.patientRights.map(function(r) { return '<li>' + r + '</li>'; }).join('') +
      '</ul></div>';
    }
    html += '</div>';
    el.innerHTML = html;
  }

  window.HI.initSupport = init;
})();
