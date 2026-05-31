// js/compare.js
window.HI = window.HI || {};

(function() {
  var compareList = [];

  function toggleCompare(id) {
    var idx = compareList.indexOf(id);
    if (idx > -1) {
      compareList.splice(idx, 1);
    } else {
      if (compareList.length >= 3) {
        window.HI.showToast(window.HI.t('already_3'));
        return;
      }
      compareList.push(id);
    }
    updateCompareBar();
    window.HI.renderDirectory(); // re-render cards to update compare button states
  }

  function updateCompareBar() {
    var bar = document.getElementById('compare-bar');
    var cnt = document.getElementById('compare-count');
    if (!bar) return;
    if (compareList.length >= 2) {
      bar.classList.remove('hidden');
    } else {
      bar.classList.add('hidden');
    }
    if (cnt) cnt.textContent = compareList.length;
  }

  function clearCompare() {
    compareList = [];
    updateCompareBar();
    var panel = document.getElementById('compare-panel');
    if (panel) panel.classList.add('hidden');
    window.HI.renderDirectory();
  }

  function runCompare() {
    if (compareList.length < 2) return;
    var panel = document.getElementById('compare-panel');
    var grid = document.getElementById('compare-grid');
    if (!panel || !grid) return;
    panel.classList.remove('hidden');
    grid.innerHTML = '';
    compareList.forEach(function(id) {
      var h = window.HI.getHospitalById(id);
      if (!h) return;
      var col = document.createElement('div');
      col.className = 'compare-col';
      col.innerHTML = renderCompareCol(h);
      col.querySelector('.btn-view-full').addEventListener('click', function() { window.HI.openModal(id); });
      col.querySelector('.btn-remove-compare').addEventListener('click', function() {
        toggleCompare(id);
        runCompare();
      });
      grid.appendChild(col);
    });
    panel.scrollIntoView({ behavior: 'smooth' });
    if (window.lucide) window.lucide.createIcons();
  }

  function renderCompareCol(h) {
    var ranks = Object.entries(h.specialtyRanks || {}).slice(0, 3).map(function(e) {
      return '<div class="compare-rank"><strong>' + e[0] + '</strong>: <span class="rank-val">' + e[1].rank + '</span>' +
        (e[1].desc ? '<div class="rank-desc text-xs text-slate-500">' + e[1].desc + '</div>' : '') +
      '</div>';
    }).join('');
    var accs = (h.accreditations || []).slice(0, 2).map(function(a) { return '<span class="badge-verified">' + a + '</span>'; }).join('');

    var notAvailList = (h.specialtyCoverage && h.specialtyCoverage.notAvailable && h.specialtyCoverage.notAvailable.length > 0)
      ? h.specialtyCoverage.notAvailable.map(function(g) { return g.specialty || g; }).join(', ')
      : '—';

    return '<div class="compare-header">' +
        '<span class="badge-sector badge-' + h.sector + '">' + h.sector + '</span>' +
        '<button class="btn-remove-compare" title="Remove">&#10005;</button>' +
      '</div>' +
      '<h3 class="compare-name">' + h.name + '</h3>' +
      '<p class="compare-state">' + h.state + ' &middot; ' + h.tier + '</p>' +
      '<div class="compare-accs">' + accs + '</div>' +
      (h.primaryExcellence ? '<div class="compare-section"><div class="compare-label">Primary Excellence</div><div class="compare-val">' + h.primaryExcellence + '</div></div>' : '') +
      '<div class="compare-section"><div class="compare-label">Top Ranked Specialties</div>' + (ranks || '<span class="text-slate-400">None listed</span>') + '</div>' +
      '<div class="compare-section"><div class="compare-label">Total Beds</div><div class="compare-val mono">' + (h.infrastructure ? h.infrastructure.totalBeds.toLocaleString() : '—') + '</div></div>' +
      '<div class="compare-section"><div class="compare-label">ICU Beds</div><div class="compare-val mono">' + (h.infrastructure && h.infrastructure.icuBeds ? h.infrastructure.icuBeds : '—') + '</div></div>' +
      '<div class="compare-section"><div class="compare-label">Room Rate</div><div class="compare-val">' + (h.roomRate || '—') + '</div></div>' +
      '<div class="compare-section"><div class="compare-label">Insurance</div><div class="compare-val text-sm">' + (h.insurance ? h.insurance.substring(0, 80) + (h.insurance.length > 80 ? '...' : '') : '—') + '</div></div>' +
      (h.fppScheme ? '<div class="compare-section"><div class="compare-label">FPP Scheme</div><div class="compare-val text-blue-700">&#10003; Available</div></div>' : '') +
      (h.robotics ? '<div class="compare-section"><div class="compare-label">Robotics</div><div class="compare-val text-sm">' + h.robotics.substring(0, 60) + (h.robotics.length > 60 ? '...' : '') + '</div></div>' : '') +
      '<div class="compare-section"><div class="compare-label">Specialty Gaps</div><div class="compare-val text-rose-600 text-sm">' + notAvailList.substring(0, 100) + (notAvailList.length > 100 ? '...' : '') + '</div></div>' +
      '<button class="btn-view-full btn-primary">Full Profile</button>';
  }

  // Bind buttons
  document.addEventListener('DOMContentLoaded', function() {
    var clearBtn = document.getElementById('compare-clear-btn');
    var goBtn = document.getElementById('compare-go-btn');
    var closeBtn = document.getElementById('compare-close-btn');
    if (clearBtn) clearBtn.addEventListener('click', clearCompare);
    if (goBtn) goBtn.addEventListener('click', runCompare);
    if (closeBtn) closeBtn.addEventListener('click', function() {
      var p = document.getElementById('compare-panel');
      if (p) p.classList.add('hidden');
    });
  });

  window.HI.toggleCompare = toggleCompare;
  window.HI.clearCompare = clearCompare;
  window.HI.runCompare = runCompare;
  window.HI.getCompareList = function() { return compareList; };
})();
