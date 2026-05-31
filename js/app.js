// js/app.js — Main bootstrap
(function() {
  // 1. Combine all hospital arrays
  var ALL_HOSPITALS = [].concat(
    (typeof HOSPITALS_KL !== 'undefined' ? HOSPITALS_KL : []),
    (typeof HOSPITALS_PUTRAJAYA !== 'undefined' ? HOSPITALS_PUTRAJAYA : []),
    (typeof HOSPITALS_LABUAN !== 'undefined' ? HOSPITALS_LABUAN : []),
    (typeof HOSPITALS_SELANGOR !== 'undefined' ? HOSPITALS_SELANGOR : []),
    (typeof HOSPITALS_PENANG !== 'undefined' ? HOSPITALS_PENANG : []),
    (typeof HOSPITALS_JOHOR !== 'undefined' ? HOSPITALS_JOHOR : []),
    (typeof HOSPITALS_PERAK !== 'undefined' ? HOSPITALS_PERAK : []),
    (typeof HOSPITALS_KEDAH !== 'undefined' ? HOSPITALS_KEDAH : []),
    (typeof HOSPITALS_KELANTAN !== 'undefined' ? HOSPITALS_KELANTAN : []),
    (typeof HOSPITALS_TERENGGANU !== 'undefined' ? HOSPITALS_TERENGGANU : []),
    (typeof HOSPITALS_PAHANG !== 'undefined' ? HOSPITALS_PAHANG : []),
    (typeof HOSPITALS_NS !== 'undefined' ? HOSPITALS_NS : []),
    (typeof HOSPITALS_MELAKA !== 'undefined' ? HOSPITALS_MELAKA : []),
    (typeof HOSPITALS_PERLIS !== 'undefined' ? HOSPITALS_PERLIS : []),
    (typeof HOSPITALS_SARAWAK !== 'undefined' ? HOSPITALS_SARAWAK : []),
    (typeof HOSPITALS_SABAH !== 'undefined' ? HOSPITALS_SABAH : [])
  );

  // 2. Tab navigation
  function showPanel(name) {
    document.querySelectorAll('.panel').forEach(function(p) {
      p.classList.remove('active');
      p.classList.add('hidden');
    });
    var target = document.getElementById('panel-' + name);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('active');
    }
    document.querySelectorAll('.nav-tab').forEach(function(t) {
      t.classList.toggle('active', t.getAttribute('data-panel') === name);
    });
    window.HI._currentPanel = name;
  }

  // Bind nav tabs (desktop + mobile)
  document.querySelectorAll('.nav-tab').forEach(function(btn) {
    btn.addEventListener('click', function() {
      showPanel(this.getAttribute('data-panel'));
    });
  });

  // 3. Toast
  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
    t.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function() {
      t.classList.remove('show');
      t.classList.add('hidden');
    }, 3000);
  }

  // 4. Disclaimer banner
  var dismissBtn = document.getElementById('disclaimer-dismiss');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', function() {
      var banner = document.getElementById('disclaimer-banner');
      if (banner) banner.style.display = 'none';
      localStorage.setItem('hi_disclaimer_dismissed', '1');
    });
  }
  if (localStorage.getItem('hi_disclaimer_dismissed')) {
    var bannerEl = document.getElementById('disclaimer-banner');
    if (bannerEl) bannerEl.style.display = 'none';
  }

  // 5. Init all modules on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // i18n — must go first
    if (window.HI.applyTranslations) window.HI.applyTranslations();
    if (window.HI.initLangSwitcher) window.HI.initLangSwitcher();
    window.HI.onLangChange = function() {
      if (window.HI.applyTranslations) window.HI.applyTranslations();
      if (window.HI.renderDirectory) window.HI.renderDirectory();
    };

    // Directory
    if (window.HI.initDirectory) window.HI.initDirectory(ALL_HOSPITALS);

    // Onboarding / Find panel
    if (window.HI.initFindPanel) window.HI.initFindPanel();

    // Emergency
    if (window.HI.initEmergency) window.HI.initEmergency();

    // Intelligence
    if (window.HI.initIntelligence) window.HI.initIntelligence();

    // Support
    if (window.HI.initSupport) window.HI.initSupport();

    // Close hacks dialog
    var hClose = document.getElementById('hacks-dialog-close');
    if (hClose) hClose.addEventListener('click', function() {
      var d = document.getElementById('hacks-dialog');
      if (d) d.classList.add('hidden');
    });
    // Close tier dialog
    var tClose = document.getElementById('tier-dialog-close');
    if (tClose) tClose.addEventListener('click', function() {
      var d = document.getElementById('tier-dialog');
      if (d) d.classList.add('hidden');
    });

    // ESC closes dialogs
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        var hd = document.getElementById('hacks-dialog');
        if (hd && !hd.classList.contains('hidden')) { hd.classList.add('hidden'); return; }
        var td = document.getElementById('tier-dialog');
        if (td && !td.classList.contains('hidden')) { td.classList.add('hidden'); return; }
      }
    });

    // Show onboarding on first visit
    if (!localStorage.getItem('hi_onboarding_done')) {
      if (window.HI.showOnboarding) {
        setTimeout(window.HI.showOnboarding, 500);
      }
    }

    // Default panel
    showPanel('directory');

    // Init lucide icons
    if (window.lucide) window.lucide.createIcons();

    // Animate stats counter
    animateStats();
  });

  function animateStats() {
    var targets = [
      { id: 'stat-public-count', end: null },
      { id: 'stat-private-count', end: null },
      { id: 'stat-robotics-count', end: null }
    ];
    targets.forEach(function(t) {
      var el = document.getElementById(t.id);
      if (!el) return;
      var text = el.textContent;
      var num = parseInt(text);
      if (isNaN(num) || num === 0) return;
      var current = 0;
      var step = Math.ceil(num / 30);
      var suffix = text.replace(/^[0-9]+/, '');
      var interval = setInterval(function() {
        current = Math.min(current + step, num);
        el.textContent = current + suffix;
        if (current >= num) clearInterval(interval);
      }, 30);
    });
  }

  // 6. Expose globally
  window.HI.showPanel = showPanel;
  window.HI.showToast = showToast;
  window.HI.getAllHospitalsList = function() { return ALL_HOSPITALS; };

  // scrollToSection (used by intelligence cards that call it before intelligence.js may override)
  if (!window.HI.scrollToSection) {
    window.HI.scrollToSection = function(id) {
      var el = document.getElementById(id);
      if (el) {
        el.classList.remove('hidden');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }
})();
