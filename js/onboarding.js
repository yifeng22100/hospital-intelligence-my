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
      headerEl.innerHTML =
        '<h3>' + HI.t('onboarding_step3') + '</h3>' +
        '<p class="results-context">' + getIntentLabel(selectedIntent) + (selectedState ? ' &middot; ' + selectedState : '') + '</p>' +
        '<p class="results-meta text-sm text-slate-500">' + matched.length + ' hospitals matched</p>';
    }
    if (gridEl) {
      gridEl.innerHTML = '';
      var toShow = matched.slice(0, 6);
      if (toShow.length === 0) {
        gridEl.innerHTML = '<p class="text-slate-500">No hospitals found for this selection. Try a different category or state.</p>';
      }
      toShow.forEach(function(h) {
        var card = document.createElement('div');
        card.className = 'find-result-card';
        card.innerHTML =
          '<div class="find-card-badges">' +
            '<span class="badge-sector badge-' + h.sector + '">' + h.sector + '</span>' +
            '<span class="badge-tier">' + h.tier + '</span>' +
          '</div>' +
          '<div class="find-card-name">' + h.name + '</div>' +
          '<div class="find-card-state">' + h.state + ' &middot; ' + h.city + '</div>' +
          '<div class="find-card-reason">' + (h.famousFor && h.famousFor[0] ? h.famousFor[0] : h.primaryExcellence) + '</div>' +
          '<button class="btn-primary view-profile-btn" data-id="' + h.id + '">View Profile</button>';
        card.querySelector('.view-profile-btn').addEventListener('click', function() {
          window.HI.openModal(h.id);
          if (context === 'onboard') dismissOnboarding();
        });
        gridEl.appendChild(card);
      });

      if (matched.length > 6) {
        var moreBtn = document.createElement('button');
        moreBtn.className = 'btn-secondary find-more-btn';
        moreBtn.textContent = 'View all ' + matched.length + ' results in Directory';
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
      'emergency': ['Emergency Medicine', 'Trauma', 'ICU'],
      'surgery': ['General Surgery', 'Cardiothoracic', 'Neurosurgery', 'Orthopaedic', 'Robotic'],
      'cancer': ['Oncology', 'Haematology', 'Cancer', 'Radiation', 'Clinical Oncology'],
      'heart': ['Cardiology', 'Cardiothoracic', 'Cardiac'],
      'maternity': ['Obstetrics', 'Gynaecology', 'Maternity', 'O&G'],
      'fertility': ['Fertility', 'IVF', 'Reproductive'],
      'child': ['Paediatric', 'Neonatology', 'Child', 'NICU'],
      'specialist': [],
      'affordable': [],
      'insurance': [],
      'trial': ['Clinical Research', 'Clinical Trial', 'Research'],
      'elder': ['Geriatric', 'Elder', 'Palliative'],
      'mental': ['Psychiatry', 'Psychology', 'Mental'],
      'explore': []
    };
    var specs = intentSpecMap[intent] || [];
    var scored = all.map(function(h) {
      var score = 0;
      if (state && h.state === state) score += 10;
      if (intent === 'affordable') {
        score += (1000 - (h.roomRateRaw || 500));
        if (h.sector === 'public') score += 15;
      }
      if (h.sector === 'public' && intent === 'trial') score += 5;
      specs.forEach(function(spec) {
        (h.fullSpecialties || []).forEach(function(s) {
          if (s.toLowerCase().includes(spec.toLowerCase())) score += 3;
        });
        if (h.primaryExcellence && h.primaryExcellence.toLowerCase().includes(spec.toLowerCase())) score += 5;
        if (Object.keys(h.specialtyRanks || {}).some(function(k) {
          return k.toLowerCase().includes(spec.toLowerCase());
        })) score += 4;
        if ((h.famousFor || []).some(function(f) { return f.toLowerCase().includes(spec.toLowerCase()); })) score += 3;
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
