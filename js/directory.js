// js/directory.js
window.HI = window.HI || {};

(function() {
  var ALL = [];
  var viewMode = 'grid'; // 'grid' or 'table'
  var selectedIntent = null;
  var selectedState = null;

  function init(hospitals) {
    ALL = hospitals;
    populateSpecialtyFilter();
    updateStats();
    render();
    bindFilters();
    bindViewToggle();
  }

  function populateSpecialtyFilter() {
    var sel = document.getElementById('filter-specialty');
    if (!sel) return;
    var specs = new Set();
    ALL.forEach(function(h) {
      (h.fullSpecialties || []).forEach(function(s) { specs.add(s); });
    });
    var sorted = Array.from(specs).sort();
    sorted.forEach(function(s) {
      var opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      sel.appendChild(opt);
    });
  }

  function updateStats() {
    var pub = ALL.filter(function(h) { return h.sector === 'public'; }).length;
    var priv = ALL.filter(function(h) { return h.sector === 'private'; }).length;
    var rob = ALL.filter(function(h) {
      return h.robotics && (
        h.robotics.toLowerCase().includes('da vinci') ||
        h.robotics.toLowerCase().includes('mako') ||
        h.robotics.toLowerCase().includes('cyberknife') ||
        h.robotics.toLowerCase().includes('robot')
      );
    }).length;
    var el = function(id) { return document.getElementById(id); };
    if (el('stat-public-count')) el('stat-public-count').textContent = pub + ' ' + HI.t('filter_public');
    if (el('stat-private-count')) el('stat-private-count').textContent = priv + ' ' + HI.t('filter_private');
    if (el('stat-robotics-count')) el('stat-robotics-count').textContent = rob + ' facilities';
  }

  function getFiltered() {
    var search = (document.getElementById('search-input') || {}).value || '';
    var state = (document.getElementById('filter-state') || {}).value || '';
    var sector = (document.getElementById('filter-sector') || {}).value || '';
    var specialty = (document.getElementById('filter-specialty') || {}).value || '';
    var tier = (document.getElementById('filter-tier') || {}).value || '';
    var sort = (document.getElementById('sort-select') || {}).value || 'name';

    var filtered = ALL.filter(function(h) {
      if (state && h.state !== state) return false;
      if (sector && h.sector !== sector) return false;
      if (tier && h.tier !== tier) return false;
      if (specialty && !(h.fullSpecialties || []).includes(specialty)) return false;
      if (selectedIntent) {
        var intentMap = {
          'emergency': ['Emergency Medicine & A&E (24/7)', 'Trauma Surgery'],
          'cancer': ['Oncology', 'Radiation Oncology', 'Clinical Oncology'],
          'heart': ['Cardiology', 'Cardiothoracic Surgery'],
          'maternity': ['Obstetrics & Gynaecology', 'Obstetrics & Gynaecology (O&G)'],
          'fertility': ['Fertility/IVF', 'Fertility / Reproductive Medicine / IVF'],
          'child': ['Paediatrics', 'Paediatric Surgery', 'Child Development'],
          'affordable': [],
          'mental': ['Psychiatry', 'Psychology'],
          'elder': ['Geriatrics'],
          'trial': []
        };
        var needed = intentMap[selectedIntent] || [];
        if (selectedState && h.state !== selectedState) return false;
        if (needed.length > 0) {
          var specs = (h.fullSpecialties || []).concat(Object.keys(h.specialtyRanks || {}));
          var match = needed.some(function(n) {
            return specs.some(function(s) { return s.toLowerCase().includes(n.toLowerCase()); });
          });
          if (!match) return false;
        }
      }
      if (search) {
        var s = search.toLowerCase();
        var combined = [h.name, h.city, h.state, h.primaryExcellence, (h.fullSpecialties || []).join(' ')].join(' ').toLowerCase();
        if (!combined.includes(s)) return false;
      }
      return true;
    });

    if (sort === 'beds-desc') filtered.sort(function(a, b) { return (b.infrastructure ? b.infrastructure.totalBeds : 0) - (a.infrastructure ? a.infrastructure.totalBeds : 0); });
    else if (sort === 'beds-asc') filtered.sort(function(a, b) { return (a.infrastructure ? a.infrastructure.totalBeds : 0) - (b.infrastructure ? b.infrastructure.totalBeds : 0); });
    else if (sort === 'price-asc') filtered.sort(function(a, b) { return (a.roomRateRaw || 0) - (b.roomRateRaw || 0); });
    else if (sort === 'price-desc') filtered.sort(function(a, b) { return (b.roomRateRaw || 0) - (a.roomRateRaw || 0); });
    else filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });

    return filtered;
  }

  function render() {
    var filtered = getFiltered();
    var grid = document.getElementById('hospital-grid');
    var tbody = document.getElementById('table-body');
    var cnt = document.getElementById('results-count');
    var noRes = document.getElementById('no-results');

    if (cnt) cnt.textContent = filtered.length + ' ' + HI.t('results_count');
    if (noRes) noRes.classList.toggle('hidden', filtered.length > 0);

    if (viewMode === 'grid') {
      if (grid) {
        grid.innerHTML = '';
        filtered.forEach(function(h) {
          grid.appendChild(createCard(h));
        });
      }
    } else {
      if (tbody) {
        tbody.innerHTML = '';
        filtered.forEach(function(h) {
          tbody.appendChild(createTableRow(h));
        });
      }
    }
    // Re-init lucide icons if available
    if (window.lucide) window.lucide.createIcons();
  }

  function createCard(h) {
    var card = document.createElement('div');
    card.className = 'hospital-card';
    card.setAttribute('data-id', h.id);

    var compareList = window.HI.getCompareList ? window.HI.getCompareList() : [];
    var inCompare = compareList.indexOf(h.id) > -1;
    var hasGaps = h.specialtyCoverage && h.specialtyCoverage.notAvailable && h.specialtyCoverage.notAvailable.length > 0;
    var topSpecs = (h.fullSpecialties || []).slice(0, 3);

    var imgHtml = h.imageUrl
      ? '<img src="' + h.imageUrl + '" alt="' + h.name + '" loading="lazy" onerror="this.style.display=\'none\'">'
      : '';
    var imgBg = 'linear-gradient(135deg,' + (h.sector === 'public' ? '#1e3a8a,#1d4ed8' : '#4c1d95,#7c3aed') + ')';

    card.innerHTML =
      '<div class="card-image" style="background:' + imgBg + '">' + imgHtml +
        '<div class="card-image-overlay">' +
          '<span class="badge-sector badge-' + h.sector + '">' + HI.t('sector_' + h.sector) + '</span>' +
          '<span class="badge-tier">' + HI.t('tier_' + h.tier) + '</span>' +
        '</div>' +
        (inCompare ? '<div class="card-compare-check">&#10003;</div>' : '') +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-state">' + h.state + '</div>' +
        '<div class="card-name">' + h.name + '</div>' +
        '<div class="card-known-for">' + HI.t('known_for') + ' ' + (HI.tt ? HI.tt(h.famousFor && h.famousFor[0] ? h.famousFor[0] : (h.primaryExcellence || '')) : (h.famousFor && h.famousFor[0] ? h.famousFor[0] : (h.primaryExcellence || ''))) + '</div>' +
        '<div class="card-spec-pills">' + topSpecs.map(function(s) { return '<span class="spec-pill">' + (HI.tt ? HI.tt(s) : s) + '</span>'; }).join('') +
          (h.fullSpecialties && h.fullSpecialties.length > 3 ? '<span class="spec-pill more">+' + (h.fullSpecialties.length - 3) + '</span>' : '') +
        '</div>' +
        '<div class="card-meta">' +
          '<span>&#x1F6CF; ' + (h.infrastructure ? h.infrastructure.totalBeds.toLocaleString() : '—') + ' ' + HI.t('beds_label') + '</span>' +
          (hasGaps ? '<span class="badge-gap">&#9888; ' + HI.t('specialty_gaps') + '</span>' : '') +
        '</div>' +
        '<div class="card-actions">' +
          '<button class="card-compare-btn ' + (inCompare ? 'in-compare' : '') + '" data-id="' + h.id + '">' +
            (inCompare ? '&#10003; ' + HI.t('remove_compare') : '+ ' + HI.t('add_to_compare')) +
          '</button>' +
          '<button class="card-explore-btn" data-id="' + h.id + '">' + HI.t('explore_btn') + '</button>' +
        '</div>' +
      '</div>';

    card.querySelector('.card-explore-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      window.HI.openModal(h.id);
    });
    card.querySelector('.card-compare-btn').addEventListener('click', function(e) {
      e.stopPropagation();
      window.HI.toggleCompare(h.id);
    });
    card.addEventListener('click', function() { window.HI.openModal(h.id); });

    return card;
  }

  function createTableRow(h) {
    var tr = document.createElement('tr');
    tr.style.cursor = 'pointer';
    tr.innerHTML =
      '<td class="py-3 px-4"><div class="font-semibold text-sm">' + h.name + '</div>' +
        '<span class="badge-sector badge-' + h.sector + ' text-xs">' + h.sector + '</span></td>' +
      '<td class="py-3 px-4 text-xs text-slate-500">' + h.state + '</td>' +
      '<td class="py-3 px-4 text-xs text-blue-700 font-semibold max-w-xs">' + (h.primaryExcellence || '—') + '</td>' +
      '<td class="py-3 px-4 text-center font-bold mono">' + (h.infrastructure ? h.infrastructure.totalBeds.toLocaleString() : '—') + '</td>' +
      '<td class="py-3 px-4"><div class="flex flex-wrap gap-1">' + (h.fullSpecialties || []).slice(0, 3).map(function(s) { return '<span class="spec-pill">' + s + '</span>'; }).join('') + '</div></td>' +
      '<td class="py-3 px-4 text-right text-xs mono">' + (h.roomRate || '—') + '</td>' +
      '<td class="py-3 px-4 text-xs">' + (h.fppScheme ? '&#x1F3DB; FPP' : (h.insurance && h.insurance.toLowerCase().includes('cashless') ? '&#10003; Cashless' : 'Pay & Claim')) + '</td>' +
      '<td class="py-3 px-4 text-center"><button class="btn-view" data-id="' + h.id + '">View</button></td>';
    tr.addEventListener('click', function() { window.HI.openModal(h.id); });
    return tr;
  }

  function bindFilters() {
    var ids = ['search-input', 'filter-state', 'filter-sector', 'filter-specialty', 'filter-tier', 'sort-select'];
    ids.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', render);
      if (el) el.addEventListener('change', render);
    });
  }

  function bindViewToggle() {
    var gBtn = document.getElementById('view-grid-btn');
    var tBtn = document.getElementById('view-table-btn');
    var grid = document.getElementById('hospital-grid');
    var table = document.getElementById('hospital-table');
    if (gBtn) gBtn.addEventListener('click', function() {
      viewMode = 'grid';
      gBtn.classList.add('active');
      if (tBtn) tBtn.classList.remove('active');
      if (grid) grid.classList.remove('hidden');
      if (table) table.classList.add('hidden');
      render();
    });
    if (tBtn) tBtn.addEventListener('click', function() {
      viewMode = 'table';
      tBtn.classList.add('active');
      if (gBtn) gBtn.classList.remove('active');
      if (table) table.classList.remove('hidden');
      if (grid) grid.classList.add('hidden');
      render();
    });
  }

  function filterByIntent(intent, state) {
    selectedIntent = intent;
    selectedState = state || null;
    render();
  }

  // Re-render directory cards (they contain glossary-translated text) on lang change
  var _prevDirLang = window.HI.onLangChange;
  window.HI.onLangChange = function(code) {
    if (_prevDirLang) _prevDirLang(code);
    if (ALL.length) render();
  };

  window.HI.initDirectory = init;
  window.HI.renderDirectory = render;
  window.HI.filterByIntent = filterByIntent;
  window.HI.getAllHospitals = function() { return ALL; };
  window.HI.getHospitalById = function(id) { return ALL.find(function(h) { return h.id === id; }); };
})();
