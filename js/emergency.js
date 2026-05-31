// js/emergency.js
window.HI = window.HI || {};

(function() {
  var selectedCondition = null;

  var colorMap = {
    red: '#ef4444', purple: '#7c3aed', orange: '#f97316', blue: '#3b82f6',
    green: '#22c55e', amber: '#f59e0b', teal: '#14b8a6', rose: '#f43f5e',
    indigo: '#6366f1', cyan: '#06b6d4', lime: '#84cc16', pink: '#ec4899'
  };

  var conditionIcons = {
    'heart-attack': '&#10084;&#65039;&#8205;&#128293;',
    'stroke': '&#129504;',
    'burns': '&#128293;',
    'road-trauma': '&#128663;',
    'severe-bleeding': '&#129656;',
    'poisoning': '&#9763;&#65039;',
    'obstetric-emergency': '&#129330;',
    'child-emergency': '&#129490;',
    'infectious-outbreak': '&#129440;',
    'drowning': '&#127754;',
    'mental-crisis': '&#128153;',
    'anaphylaxis': '&#128138;',
    'respiratory-failure': '&#129978;',
    'diabetic-emergency': '&#128198;',
    'seizure': '&#9889;',
    'spinal-injury': '&#129428;'
  };

  function getConditionIcon(id) {
    return conditionIcons[id] || '&#128681;';
  }

  function init() {
    var container = document.getElementById('emergency-conditions');
    if (!container) return;
    if (typeof EMERGENCY_PROTOCOLS === 'undefined') return;
    container.innerHTML = '';

    var conditions = Object.values(EMERGENCY_PROTOCOLS);

    conditions.forEach(function(c) {
      var color = colorMap[c.color] || '#3b82f6';
      var btn = document.createElement('button');
      btn.className = 'emergency-btn';
      btn.setAttribute('data-id', c.id);
      btn.style.borderColor = color;
      btn.innerHTML =
        '<div class="emergency-btn-icon" style="background:' + color + '20;color:' + color + '">' + getConditionIcon(c.id) + '</div>' +
        '<div class="emergency-btn-title">' + (c.title ? c.title.split(' (')[0] : c.id) + '</div>';
      btn.addEventListener('click', function() {
        selectCondition(c.id);
        container.querySelectorAll('.emergency-btn').forEach(function(b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
        btn.style.background = color + '15';
      });
      container.appendChild(btn);
    });

    // State selector change
    var stateSel = document.getElementById('emergency-state-sel');
    if (stateSel) {
      stateSel.addEventListener('change', function() {
        if (selectedCondition) showResult(selectedCondition, this.value);
      });
    }
  }

  function selectCondition(id) {
    selectedCondition = id;
    var stateWrap = document.getElementById('emergency-state-wrap');
    if (stateWrap) stateWrap.classList.remove('hidden');
    var stateSel = document.getElementById('emergency-state-sel');
    if (stateSel && stateSel.value) {
      showResult(id, stateSel.value);
    }
  }

  function showResult(conditionId, state) {
    var protocol = EMERGENCY_PROTOCOLS[conditionId];
    if (!protocol) return;
    var el = document.getElementById('emergency-result');
    if (!el) return;

    var byState = (protocol.byState && state) ? protocol.byState[state] : null;
    var color = colorMap[protocol.color] || '#3b82f6';

    var symptomsHtml = '';
    if (protocol.symptoms && protocol.symptoms.length) {
      symptomsHtml =
        '<div class="emergency-symptoms">' +
          '<h4>&#128270; Recognise the symptoms:</h4>' +
          '<ul>' + protocol.symptoms.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }

    var doNowHtml = '';
    if (protocol.doNow && protocol.doNow.length) {
      doNowHtml =
        '<div class="emergency-do-now">' +
          '<h4>&#128680; ' + window.HI.t('do_now') + '</h4>' +
          '<ol>' + protocol.doNow.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
        '</div>';
    }

    var gotoHtml = '';
    if (byState) {
      gotoHtml =
        '<div class="emergency-goto">' +
          '<h4>&#127973; ' + window.HI.t('go_to') + ' <strong>' + byState.hospital + '</strong></h4>' +
          '<a href="tel:' + byState.aePhone.replace(/[^+0-9]/g, '') + '" class="ae-phone-btn">&#128222; ' + window.HI.t('ae_phone') + ' ' + byState.aePhone + '</a>' +
          '<p class="ae-note">' + byState.note + '</p>' +
        '</div>';
    } else if (state) {
      gotoHtml = '<div class="emergency-goto emergency-no-state"><p>No specific A&E recommendation for ' + state + ' for this condition. <strong>Call 999</strong> for the nearest emergency centre.</p></div>';
    }

    var doNotHtml = '';
    if (protocol.doNotDo && protocol.doNotDo.length) {
      doNotHtml =
        '<div class="emergency-do-not">' +
          '<h4>&#10060; Do NOT:</h4>' +
          '<ul>' + protocol.doNotDo.map(function(s) { return '<li>' + s + '</li>'; }).join('') + '</ul>' +
        '</div>';
    }

    el.classList.remove('hidden');
    el.innerHTML =
      '<div class="emergency-result-box" style="border-left: 4px solid ' + color + '">' +
        '<div class="emergency-result-header" style="border-bottom: 1px solid ' + color + '30">' +
          '<h3>' + protocol.title + '</h3>' +
          (protocol.goldenHour ? '<div class="golden-hour" style="background:' + color + '15;color:' + color + '">&#8987; ' + protocol.goldenHour + '</div>' : '') +
        '</div>' +
        '<div class="emergency-result-body">' +
          '<div class="emergency-call-box"><a href="tel:999" class="call-999-btn">&#128222; ' + window.HI.t('call_999') + '</a></div>' +
          symptomsHtml +
          doNowHtml +
          doNotHtml +
          gotoHtml +
        '</div>' +
      '</div>';

    // Scroll to result
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.HI.initEmergency = init;
})();
