// js/i18n.js
window.HI = window.HI || {};

(function() {
  var DEFAULT_LANG = 'zh_s';
  var _lang = localStorage.getItem('hi_lang') || DEFAULT_LANG;

  function t(key) {
    var d = TRANSLATIONS[_lang] || TRANSLATIONS['en'];
    return d[key] || TRANSLATIONS['en'][key] || key;
  }

  function setLang(code) {
    if (!TRANSLATIONS[code]) return;
    _lang = code;
    localStorage.setItem('hi_lang', code);
    applyTranslations();
    if (window.HI.onLangChange) window.HI.onLangChange(code);
  }

  function applyTranslations() {
    // Apply data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update lang label
    var labels = { zh_s: '简体', zh_t: '繁體', en: 'EN', bm: 'BM' };
    var lbl = document.getElementById('lang-label');
    if (lbl) lbl.textContent = labels[_lang] || _lang;
    // Update html lang attr
    var langAttr = { zh_s: 'zh-Hans', zh_t: 'zh-Hant', en: 'en', bm: 'ms' };
    document.documentElement.lang = langAttr[_lang] || _lang;
  }

  // Wire language switcher
  function initLangSwitcher() {
    var btn = document.getElementById('lang-btn');
    var menu = document.getElementById('lang-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', function() { menu.classList.add('hidden'); });
    menu.querySelectorAll('[data-lang]').forEach(function(b) {
      b.addEventListener('click', function() {
        setLang(this.getAttribute('data-lang'));
        menu.classList.add('hidden');
      });
    });
  }

  window.HI.t = t;
  window.HI.setLang = setLang;
  window.HI.applyTranslations = applyTranslations;
  window.HI.initLangSwitcher = initLangSwitcher;
  window.HI._lang = function() { return _lang; };
})();
