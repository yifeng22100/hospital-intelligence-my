// js/onboarding.js
window.HI = window.HI || {};

(function() {
  var selectedIntent = null;
  var selectedState = null;

  var intents = [
    { id: 'emergency', icon: '&#128680;', key: 'intent_emergency' },
    { id: 'surgery', icon: '&#128299;', key: 'intent_surgery' },
    { id: 'cancer', icon: '&#127895;', key: 'intent_cancer' },
    { id: 'heart', icon: '&#10084;&#65039;', key: 'intent_heart' },
    { id: 'maternity', icon: '&#128118;', key: 'intent_maternity' },
    { id: 'fertility', icon: '&#127807;', key: 'intent_fertility' },
    { id: 'child', icon: '&#129490;', key: 'intent_child' },
    { id: 'specialist', icon: '&#128104;&#8205;&#9877;&#65039;', key: 'intent_specialist' },
    { id: 'affordable', icon: '&#128154;', key: 'intent_affordable' },
    { id: 'insurance', icon: '&#128179;', key: 'intent_insurance' },
    { id: 'trial', icon: '&#128300;', key: 'intent_trial' },
    { id: 'elder', icon: '&#128116;', key: 'intent_elder' },
    { id: 'mental', icon: '&#129504;', key: 'intent_mental' },
    { id: 'explore', icon: '&#128506;&#65039;', key: 'intent_explore' }
  ];

  var states = [
    'Kuala Lumpur', 'Putrajaya', 'Selangor', 'Penang', 'Johor',
    'Perak', 'Kedah', 'Kelantan', 'Terengganu', 'Pahang',
    'Negeri Sembilan', 'Melaka', 'Perlis', 'Sarawak', 'Sabah', 'Labuan'
  ];

  function renderIntentGrid(containerId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    intents.forEach(function(item) {
      var btn = document.createElement('button');
      btn.className = 'intent-btn';
      btn.setAttribute('data-id', item.id);
      btn.innerHTML = '<span class="intent-icon">' + item.icon + '</span><span class="intent-label">' + HI.t(item.key) + '</span>';
      btn.addEventListener('click', function() {
        selectedIntent = item.id;
        el.querySelectorAll('.intent-btn').forEach(function(b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        // Advance to next step
        var parent = el.closest('#onboarding-box, #panel-find');
        if (parent) {
          var s1 = parent.querySelector('#onboarding-step-1') || parent.querySelector('#find-step-1');
          var s2 = parent.querySelector('#onboarding-step-2') || parent.querySelector('#find-step-2');
          if (s1) s1.classList.add('hidden');
          if (s2) s2.classList.remove('hidden');
        }
      });
      el.appendChild(btn);
    });
  }

  function renderStateGrid(containerId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = '';
    states.forEach(function(state) {
      var btn = document.createElement('button');
      btn.className = 'state-btn';
      btn.textContent = state;
      btn.addEventListener('click', function() {
        selectedState = state;
        el.querySelectorAll('.state-btn').forEach(function(b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        var context = containerId.includes('onboard') ? 'onboard' : 'find';
        showResults(context);
      });
      el.appendChild(btn);
    });
  }

  function showResults(context) {
    var headerEl, gridEl, step2, step3;
    if (context === 'onboard') {
      headerEl = document.getElementById('onboard-result-header');
      gridEl = document.getElementById('onboard-result-grid');
      step2 = document.getElementById('onboarding-step-2');
      step3 = document.getElementById('onboarding-step-3');
    } else {
      headerEl = document.getElementById('find-results-header');
      gridEl = document.getElementById('find-results-grid');
      step2 = document.getElementById('find-step-2');
      step3 = document.getElementById('find-step-3');
    }
    if (step2) step2.classList.add('hidden');
    if (step3) step3.classList.remove('hidden');

    var allH = window.HI.getAllHospitals ? window.HI.getAllHospitals() : [];
    var matched = matchHospitals(allH, selectedIntent, selectedState);

    if (headerEl) {
      var countText = HI.t('hospitals_matched').replace('{n}', matched.length);
      headerEl.innerHTML =
        '<h3>' + HI.t('onboarding_step3') + '</h3>' +
        '<p class="results-context">' + getIntentLabel(selectedIntent) + (selectedState ? ' &middot; ' + selectedState : '') + '</p>' +
        '<p class="results-meta">' + countText + '</p>';
    }
    if (gridEl) {
      gridEl.innerHTML = '';
      var toShow = matched.slice(0, 6);
      if (toShow.length === 0) {
        gridEl.innerHTML = '<p class="find-no-results">' + HI.t('no_hospitals_found') + '</p>';
      }
      toShow.forEach(function(h) {
        var card = document.createElement('div');
        card.className = 'find-result-card';
        var sectorLabel = HI.t('sector_' + h.sector) || h.sector;
        var tierLabel = HI.t('tier_' + h.tier) || h.tier;
        var reasonText = (h.famousFor && h.famousFor[0]) ? h.famousFor[0] : (h.primaryExcellence || '');
        var imgSection = h.imageUrl
          ? '<div class="find-card-image" style="background-image:url(\'' + h.imageUrl + '\')"></div>'
          : '<div class="find-card-image find-card-image-' + h.sector + '"><span class="find-card-image-icon">&#127973;</span></div>';
        card.innerHTML =
          imgSection +
          '<div class="find-card-body">' +
            '<div class="find-card-badges">' +
              '<span class="find-badge find-badge-' + h.sector + '">' + sectorLabel + '</span>' +
              '<span class="find-badge find-badge-tier">' + tierLabel + '</span>' +
            '</div>' +
            '<div class="find-card-name">' + h.name + '</div>' +
            '<div class="find-card-location">&#128205; ' + h.city + ', ' + h.state + '</div>' +
            (reasonText ? '<div class="find-card-reason">' + reasonText + '</div>' : '') +
            '<button class="find-card-btn" data-id="' + h.id + '">' + HI.t('view_profile') + ' &#8594;</button>' +
          '</div>';
        card.querySelector('.find-card-btn').addEventListener('click', function() {
          window.HI.openModal(h.id);
          if (context === 'onboard') dismissOnboarding();
        });
        gridEl.appendChild(card);
      });

      if (matched.length > 6) {
        var moreBtn = document.createElement('button');
        moreBtn.className = 'find-more-btn';
        moreBtn.textContent = HI.t('see_all_in_dir').replace('{n}', matched.length);
        moreBtn.addEventListener('click', function() {
          window.HI.showPanel('directory');
          window.HI.filterByIntent(selectedIntent, selectedState);
          if (context === 'onboard') dismissOnboarding();
        });
        gridEl.appendChild(moreBtn);
      }
    }
  }

  function matchHospitals(all, intent, state) {
    var intentSpecMap = {
      'emergency': ['Emergency', 'Trauma', 'ICU', 'A&E', 'Accident'],
      'surgery': ['Surgery', 'Cardiothoracic', 'Neurosurgery', 'Orthopaedic', 'Robotic', 'Surgical'],
      'cancer': ['Oncology', 'Haematology', 'Cancer', 'Radiation', 'Chemotherapy'],
      'heart': ['Cardiology', 'Cardiothoracic', 'Cardiac', 'Heart', 'IJN'],
      'maternity': ['Obstetrics', 'Gynaecology', 'Maternity', 'O&G', 'Midwifery'],
      'fertility': ['Fertility', 'IVF', 'Reproductive', 'ART'],
      'child': ['Paediatric', 'Neonatology', 'Child', 'NICU', 'Pediatric'],
      'specialist': [],
      'affordable': [],
      'insurance': [],
      'trial': ['Clinical Research', 'Clinical Trial', 'Research', 'NMRR', 'Trial'],
      'elder': ['Geriatric', 'Geriatrics', 'Elder', 'Palliative', 'Rehabilitation'],
      'mental': ['Psychiatry', 'Psychology', 'Mental', 'Psychiatric'],
      'explore': []
    };
    var specs = intentSpecMap[intent] || [];

    // Filter to state first (mandatory) — unless no state selected
    var pool = state ? all.filter(function(h) { return h.state === state; }) : all;

    // If pool is empty (unlikely), fall back to all
    if (pool.length === 0) pool = all;

    var scored = pool.map(function(h) {
      var score = 0;
      // Tier bonuses — prefer higher-capability hospitals for clinical intents
      var tierBonus = { quaternary: 6, academic: 6, tertiary: 4, state: 2, secondary: 1, district: 0 };
      score += (tierBonus[h.tier] || 0);

      if (intent === 'affordable') {
        // Public sector strongly preferred, then lower room rate
        if (h.sector === 'public') score += 20;
        score += Math.max(0, 5000 - (h.roomRateRaw || 3000)) / 1000;
      }
      if (intent === 'insurance') {
        // Private hospitals more relevant for insurance usage
        if (h.sector === 'private') score += 15;
        if (h.insurance && h.insurance !== 'N/A') score += 5;
      }
      if (intent === 'specialist') {
        // Academic and private tertiary hospitals are best for specialist access
        if (h.tier === 'academic' || h.tier === 'quaternary' || h.tier === 'tertiary') score += 10;
        if (h.sector === 'private') score += 5;
      }
      if (h.sector === 'public' && intent === 'trial') score += 5;

      // Specialty match scoring
      specs.forEach(function(spec) {
        var specL = spec.toLowerCase();
        // Match in famousFor (most meaningful signal)
        (h.famousFor || []).forEach(function(f) {
          if (f.toLowerCase().includes(specL)) score += 8;
        });
        // Match in specialty coverage
        var cov = h.specialtyCoverage || {};
        var available = (cov.available || []).concat(cov.byReferral || []);
        available.forEach(function(s) {
          if (s.toLowerCase().includes(specL)) score += 4;
        });
        // Match in specialty ranks
        Object.keys(h.specialtyRanks || {}).forEach(function(k) {
          if (k.toLowerCase().includes(specL)) score += 6;
        });
        // Match in primaryExcellence / intro
        if (h.primaryExcellence && h.primaryExcellence.toLowerCase().includes(specL)) score += 6;
        if (h.intro && h.intro.toLowerCase().includes(specL)) score += 2;
      });

      return { h: h, score: score };
    });

    scored.sort(function(a, b) { return b.score - a.score; });
    return scored.map(function(x) { return x.h; });
  }

  function getIntentLabel(intent) {
    var item = intents.find(function(i) { return i.id === intent; });
    return item ? (item.icon + ' ' + HI.t(item.key)) : (intent || '');
  }

  function showOnboarding() {
    var overlay = document.getElementById('onboarding-overlay');
    if (!overlay) return;
    overlay.classList.remove('hidden');
    renderIntentGrid('intent-grid-onboard');
    renderStateGrid('state-grid-onboard');

    // Reset to step 1
    var s1 = document.getElementById('onboarding-step-1');
    var s2 = document.getElementById('onboarding-step-2');
    var s3 = document.getElementById('onboarding-step-3');
    if (s1) s1.classList.remove('hidden');
    if (s2) s2.classList.add('hidden');
    if (s3) s3.classList.add('hidden');

    var backBtn = document.getElementById('onboard-back-btn');
    if (backBtn) {
      // Remove old listeners by cloning
      var newBack = backBtn.cloneNode(true);
      backBtn.parentNode.replaceChild(newBack, backBtn);
      newBack.addEventListener('click', function() {
        var step2 = document.getElementById('onboarding-step-2');
        var step1 = document.getElementById('onboarding-step-1');
        var step3 = document.getElementById('onboarding-step-3');
        if (step3 && !step3.classList.contains('hidden')) {
          step3.classList.add('hidden');
          if (step2) step2.classList.remove('hidden');
        } else {
          if (step2) step2.classList.add('hidden');
          if (step1) step1.classList.remove('hidden');
        }
      });
    }

    var doneBtn = document.getElementById('onboard-done-btn');
    if (doneBtn) {
      var newDone = doneBtn.cloneNode(true);
      doneBtn.parentNode.replaceChild(newDone, doneBtn);
      newDone.addEventListener('click', function() {
        dismissOnboarding();
        window.HI.showPanel('directory');
        window.HI.filterByIntent(selectedIntent, selectedState);
      });
    }

    var skipBtn = document.getElementById('onboarding-skip');
    if (skipBtn) {
      var newSkip = skipBtn.cloneNode(true);
      skipBtn.parentNode.replaceChild(newSkip, skipBtn);
      newSkip.addEventListener('click', dismissOnboarding);
    }
  }

  function dismissOnboarding() {
    var overlay = document.getElementById('onboarding-overlay');
    if (overlay) overlay.classList.add('hidden');
    localStorage.setItem('hi_onboarding_done', '1');
  }

  function initFindPanel() {
    renderIntentGrid('intent-grid');
    renderStateGrid('state-grid');

    var backBtn = document.getElementById('find-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        var step2 = document.getElementById('find-step-2');
        var step1 = document.getElementById('find-step-1');
        var step3 = document.getElementById('find-step-3');
        if (step3 && !step3.classList.contains('hidden')) {
          step3.classList.add('hidden');
          if (step2) step2.classList.remove('hidden');
        } else {
          if (step2) step2.classList.add('hidden');
          if (step1) step1.classList.remove('hidden');
        }
      });
    }

    var restartBtn = document.getElementById('find-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', function() {
        selectedIntent = null;
        selectedState = null;
        var s3 = document.getElementById('find-step-3');
        var s2 = document.getElementById('find-step-2');
        var s1 = document.getElementById('find-step-1');
        if (s3) s3.classList.add('hidden');
        if (s2) s2.classList.add('hidden');
        if (s1) s1.classList.remove('hidden');
        // Re-render grids with cleared selection
        renderIntentGrid('intent-grid');
        renderStateGrid('state-grid');
      });
    }
  }

  window.HI.showOnboarding = showOnboarding;
  window.HI.dismissOnboarding = dismissOnboarding;
  window.HI.initFindPanel = initFindPanel;
})();
