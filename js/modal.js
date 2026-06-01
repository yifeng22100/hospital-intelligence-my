// js/modal.js
window.HI = window.HI || {};

(function() {
  var currentHospital = null;
  var activeTab = 1;

  function openModal(id) {
    var h = window.HI.getHospitalById(id);
    if (!h) return;
    currentHospital = h;
    activeTab = 1;

    var modal = document.getElementById('hospital-modal');
    var modalName = document.getElementById('modal-name');
    var sectorBadge = document.getElementById('modal-sector-badge');
    var tierBadge = document.getElementById('modal-tier-badge');
    var stateBadge = document.getElementById('modal-state-badge');
    var cityLine = document.getElementById('modal-city-line');

    if (!modal) return;

    if (modalName) modalName.textContent = h.name;
    if (sectorBadge) {
      sectorBadge.textContent = window.HI.t('sector_' + h.sector);
      sectorBadge.className = 'badge-sector badge-' + h.sector;
    }
    if (tierBadge) {
      tierBadge.textContent = window.HI.t('tier_' + h.tier);
      tierBadge.className = 'badge-tier';
    }
    if (stateBadge) {
      stateBadge.textContent = h.state;
      stateBadge.className = 'badge-state';
    }
    if (cityLine) cityLine.textContent = h.city || '';

    // Render all tabs
    renderPanel1(h);
    renderPanel2(h);
    renderPanel3(h);
    renderPanel4(h);
    renderPanel5(h);

    // Bind modal tab buttons
    document.querySelectorAll('.modal-tab-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = parseInt(this.getAttribute('data-tab'));
        switchModalTab(tab);
      });
    });

    // Show modal
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    setTimeout(function() {
      var inner = document.getElementById('modal-inner');
      if (inner) inner.classList.add('modal-visible');
    }, 10);

    switchModalTab(1);
  }

  function closeModal() {
    var modal = document.getElementById('hospital-modal');
    var inner = document.getElementById('modal-inner');
    if (!modal) return;
    if (inner) inner.classList.remove('modal-visible');
    setTimeout(function() {
      modal.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }, 200);
  }

  function switchModalTab(n) {
    activeTab = n;
    document.querySelectorAll('.modal-tab-btn').forEach(function(btn) {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-tab')) === n);
    });
    for (var i = 1; i <= 5; i++) {
      var panel = document.getElementById('modal-panel-' + i);
      if (panel) panel.classList.toggle('hidden', i !== n);
    }
  }

  // Panel 1: Overview
  function renderPanel1(h) {
    var el = document.getElementById('modal-panel-1');
    if (!el) return;

    var inf = h.infrastructure || {};
    var accs = (h.accreditations || []).map(function(a) {
      return '<span class="badge-verified">' + a + '</span>';
    }).join('');

    var famousList = (h.famousFor || []).map(function(f) {
      return '<li>' + f + '</li>';
    }).join('');

    var infraItems = [
      { label: window.HI.t('beds_total'), value: inf.totalBeds ? inf.totalBeds.toLocaleString() + ' ' + window.HI.t('beds_label') : '—' },
      { label: window.HI.t('icu_label'), value: inf.icuBeds ? inf.icuBeds + ' ' + window.HI.t('icu_label') : '—' },
      { label: window.HI.t('nicu_label'), value: inf.nicuBeds ? inf.nicuBeds + ' ' + window.HI.t('nicu_label') : '—' },
      { label: window.HI.t('ot_label'), value: inf.operatingTheatres ? inf.operatingTheatres + ' ' + window.HI.t('ot_label') : '—' },
      { label: window.HI.t('established'), value: inf.yearEstablished ? window.HI.t('years_est') + ' ' + inf.yearEstablished : '—' },
      { label: window.HI.t('area_label'), value: inf.area || '—' },
      { label: window.HI.t('buildings_label'), value: inf.buildings || '—' },
      { label: window.HI.t('helipad'), value: inf.helipad ? '&#10003; Yes' : 'No' }
    ];

    var infraHtml = infraItems.map(function(item) {
      return '<div class="infra-item"><span class="infra-label">' + item.label + '</span><span class="infra-value">' + item.value + '</span></div>';
    }).join('');

    el.innerHTML =
      '<div class="modal-section">' +
        '<p class="hospital-intro">' + (h.intro || '') + '</p>' +
      '</div>' +
      (h.famousFor && h.famousFor.length ? '<div class="modal-section"><h4>' + window.HI.t('famous_for') + '</h4><ul class="famous-list">' + famousList + '</ul></div>' : '') +
      '<div class="modal-section">' +
        '<h4>' + window.HI.t('infrastructure') + '</h4>' +
        '<div class="infra-grid">' + infraHtml + '</div>' +
      '</div>' +
      (accs ? '<div class="modal-section"><h4>' + window.HI.t('accreditations') + '</h4><div class="accreditations-row">' + accs + '</div></div>' : '') +
      (h.verifiedNotes ? '<div class="modal-section verified-notes-box"><div><h4>' + window.HI.t('verified_notes') + '</h4><p>' + h.verifiedNotes + '</p></div></div>' : '') +
      (h.notableGaps ? '<div class="modal-section notable-gaps-box"><div><h4>' + window.HI.t('notable_gaps') + '</h4><p>' + h.notableGaps + '</p></div></div>' : '');
  }

  // Panel 2: Specialties
  function renderPanel2(h) {
    var el = document.getElementById('modal-panel-2');
    if (!el) return;

    var cov = h.specialtyCoverage || {};
    var available = cov.available || [];
    var notAvailable = cov.notAvailable || [];
    var byReferral = cov.byReferral || [];
    var ranks = h.specialtyRanks || {};
    var tp = h.transferPathway || {};

    // Available specialties
    var availHtml = '';
    if (available.length > 0) {
      availHtml = '<div class="modal-section">' +
        '<h4 class="spec-section-title spec-available-title">&#9989; ' + window.HI.t('spec_available') + ' <span class="spec-count">' + available.length + '</span></h4>' +
        '<div class="spec-chips">' +
          available.map(function(s) {
            var rankInfo = ranks[s];
            var rankBadge = rankInfo ? ' <span class="rank-badge">' + rankInfo.rank + '</span>' : '';
            return '<span class="spec-chip available" title="' + (rankInfo ? rankInfo.desc : '') + '">' + s + rankBadge + '</span>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    // Not available
    var notAvailHtml = '';
    if (notAvailable.length > 0) {
      var rows = notAvailable.map(function(item) {
        return '<tr>' +
          '<td class="spec-na-name">&#10060; ' + (item.specialty || item) + '</td>' +
          '<td class="spec-na-transfer">' + (item.transferTo ? '<span class="transfer-label">' + window.HI.t('transfer_to') + '</span> ' + item.transferTo : '—') + '</td>' +
          '<td class="spec-na-note text-xs text-slate-500">' + (item.note || '') + '</td>' +
        '</tr>';
      }).join('');
      notAvailHtml = '<div class="modal-section">' +
        '<h4 class="spec-section-title spec-unavailable-title">&#10060; ' + window.HI.t('spec_unavailable') + ' <span class="spec-count">' + notAvailable.length + '</span></h4>' +
        '<div class="spec-na-table-wrap"><table class="spec-na-table"><thead><tr><th>' + window.HI.t('col_specialty') + '</th><th>' + window.HI.t('col_transfer_to') + '</th><th>' + window.HI.t('col_note') + '</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</div>';
    }

    // By referral
    var referralHtml = '';
    if (byReferral.length > 0) {
      referralHtml = '<div class="modal-section">' +
        '<h4 class="spec-section-title spec-referral-title">&#128260; ' + window.HI.t('spec_referral') + ' <span class="spec-count">' + byReferral.length + '</span></h4>' +
        '<div class="spec-chips">' +
          byReferral.map(function(s) {
            return '<span class="spec-chip referral">' + s + '</span>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    // Transfer pathway
    var transferHtml = '';
    if (tp.summary || (tp.routes && tp.routes.length)) {
      var routeRows = (tp.routes || []).map(function(r) {
        return '<tr>' +
          '<td class="font-medium">' + (r.condition || '—') + '</td>' +
          '<td>' + (r.to || '—') + '</td>' +
          '<td class="text-xs text-slate-500">' + (r.reason || '') + '</td>' +
          '<td class="text-xs mono">' + (r.distanceKm ? r.distanceKm + ' km' : '—') + '</td>' +
        '</tr>';
      }).join('');
      transferHtml = '<div class="modal-section">' +
        '<h4>' + window.HI.t('transfer_pathway') + '</h4>' +
        (tp.summary ? '<p class="transfer-summary">' + tp.summary + '</p>' : '') +
        (routeRows ? '<div class="transfer-table-wrap"><table class="transfer-table"><thead><tr><th>' + window.HI.t('col_condition') + '</th><th>' + window.HI.t('col_go_to') + '</th><th>' + window.HI.t('col_reason') + '</th><th>' + window.HI.t('col_distance') + '</th></tr></thead><tbody>' + routeRows + '</tbody></table></div>' : '') +
        (tp.howToTransfer ? '<div class="how-to-transfer-box"><strong>' + window.HI.t('how_to_transfer') + ':</strong> ' + tp.howToTransfer + '</div>' : '') +
      '</div>';
    }

    // Top ranked specialties
    var rankHtml = '';
    var rankEntries = Object.entries(ranks);
    if (rankEntries.length > 0) {
      rankHtml = '<div class="modal-section">' +
        '<h4>' + window.HI.t('top_ranked') + '</h4>' +
        '<div class="rank-list">' +
          rankEntries.slice(0, 8).map(function(e) {
            return '<div class="rank-row"><span class="rank-name">' + e[0] + '</span>' +
              '<span class="rank-val">' + e[1].rank + '</span>' +
              (e[1].desc ? '<span class="rank-desc">' + e[1].desc + '</span>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>';
    }

    el.innerHTML = rankHtml + availHtml + referralHtml + notAvailHtml + transferHtml;
    if (!el.innerHTML.trim()) {
      el.innerHTML = '<div class="modal-section"><p class="text-slate-500">' + window.HI.t('no_specialty_info') + '</p></div>';
    }
  }

  // Panel 3: Facilities & Access
  function renderPanel3(h) {
    var el = document.getElementById('modal-panel-3');
    if (!el) return;

    var c = h.contact || {};
    var t = h.transport || {};
    var f = h.facilities || {};
    var v = h.visitingHours || {};
    var inf = h.infrastructure || {};

    var mapUrl = c.mapQuery
      ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.mapQuery)
      : (c.address ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(c.address) : null);

    // Contact block
    var contactHtml = '<div class="modal-section">' +
      '<h4>' + window.HI.t('contact_location') + '</h4>' +
      '<div class="contact-block">' +
        (c.address ?
          '<div class="contact-row address-row">' +
            '<span class="contact-icon">&#128205;</span>' +
            '<span class="contact-text">' + c.address + '</span>' +
            '<button class="copy-addr-btn btn-sm" onclick="navigator.clipboard.writeText(\'' + c.address.replace(/'/g, "\\'") + '\').then(function(){window.HI.showToast(window.HI.t(\'toast_copied\'));})">&#128203; ' + window.HI.t('copy_address') + '</button>' +
          '</div>' : '') +
        (mapUrl ?
          '<div class="contact-row">' +
            '<a href="' + mapUrl + '" target="_blank" class="btn-map">&#128506; ' + window.HI.t('get_directions') + '</a>' +
          '</div>' : '') +
        (c.mainLine ?
          '<div class="contact-row">' +
            '<span class="contact-icon">&#128222;</span>' +
            '<span class="contact-label">' + window.HI.t('main_line') + ': </span>' +
            '<a href="tel:' + c.mainLine.replace(/[^+0-9]/g, '') + '" class="contact-link">' + c.mainLine + '</a>' +
          '</div>' : '') +
        (c.emergencyLine ?
          '<div class="contact-row emergency-line-row">' +
            '<span class="contact-icon">&#128680;</span>' +
            '<span class="contact-label">' + window.HI.t('emergency_line_label') + ': </span>' +
            '<a href="tel:' + c.emergencyLine.replace(/[^+0-9]/g, '') + '" class="contact-link emergency-link">' + c.emergencyLine + '</a>' +
          '</div>' : '') +
        (c.appointmentLine ?
          '<div class="contact-row">' +
            '<span class="contact-icon">&#128197;</span>' +
            '<span class="contact-label">' + window.HI.t('appointments_label') + ': </span>' +
            '<a href="tel:' + c.appointmentLine.replace(/[^+0-9]/g, '') + '" class="contact-link">' + c.appointmentLine + '</a>' +
          '</div>' : '') +
        (c.website ?
          '<div class="contact-row">' +
            '<span class="contact-icon">&#127760;</span>' +
            '<a href="' + c.website + '" target="_blank" class="contact-link">' + c.website.replace(/^https?:\/\//, '') + '</a>' +
          '</div>' : '') +
      '</div>' +
    '</div>';

    // Transport block
    var transportHtml = '<div class="modal-section">' +
      '<h4>&#128652; ' + window.HI.t('transport') + '</h4>' +
      '<div class="transport-block">' +
        (t.nearest ? '<div class="transport-row"><strong>' + window.HI.t('nearest_transit') + ':</strong> ' + t.nearest + '</div>' : '') +
        (t.bus ? '<div class="transport-row"><strong>' + window.HI.t('bus_label') + ':</strong> ' + t.bus + '</div>' : '') +
        (t.highway ? '<div class="transport-row"><strong>' + window.HI.t('highway_label') + ':</strong> ' + t.highway + '</div>' : '') +
        (t.landmark ? '<div class="transport-row"><strong>' + window.HI.t('landmark_label') + ':</strong> ' + t.landmark + '</div>' : '') +
      '</div>' +
    '</div>';

    // Parking block
    var parkingHtml = '';
    if (inf.parkingBays || inf.parkingRate) {
      parkingHtml = '<div class="modal-section">' +
        '<h4>&#128663; ' + window.HI.t('parking') + '</h4>' +
        '<div class="parking-block">' +
          (inf.parkingBays ? '<div><strong>' + window.HI.t('parking_bays') + ':</strong> ' + inf.parkingBays.toLocaleString() + '</div>' : '') +
          (inf.parkingRate ? '<div><strong>' + window.HI.t('parking_rate') + ':</strong> ' + inf.parkingRate + '</div>' : '') +
        '</div>' +
      '</div>';
    }

    // Facilities icons
    var facItems = [
      { key: 'pharmacy24h', label: window.HI.t('pharmacy_24h'), icon: '&#128138;' },
      { key: 'cafeteria', label: window.HI.t('cafeteria'), icon: '&#127829;' },
      { key: 'atm', label: window.HI.t('atm'), icon: '&#127984;' },
      { key: 'surau', label: window.HI.t('prayer_room'), icon: '&#127775;' },
      { key: 'chapel', label: window.HI.t('chapel'), icon: '&#9962;' },
      { key: 'buddhistRoom', label: window.HI.t('buddhist_room'), icon: '&#9775;' },
      { key: 'disabledAccess', label: window.HI.t('disabled_access'), icon: '&#9855;' },
      { key: 'wifi', label: window.HI.t('wifi'), icon: '&#128246;' },
      { key: 'patientTransport', label: window.HI.t('patient_transport'), icon: '&#128659;' }
    ];
    var facHtml = '<div class="modal-section">' +
      '<h4>' + window.HI.t('facilities') + '</h4>' +
      '<div class="facilities-grid">' +
        facItems.map(function(item) {
          var available = f[item.key];
          return '<div class="facility-item ' + (available ? 'fac-yes' : 'fac-no') + '">' +
            '<span class="fac-icon">' + item.icon + '</span>' +
            '<span class="fac-label">' + item.label + '</span>' +
            '<span class="fac-status">' + (available ? '&#10003;' : '&#10007;') + '</span>' +
          '</div>';
        }).join('') +
      '</div>' +
    '</div>';

    // Visiting hours
    var vhRows = [
      { label: window.HI.t('general_ward'), val: v.general },
      { label: window.HI.t('icu_ward'), val: v.icu },
      { label: window.HI.t('paediatric'), val: v.paediatric },
      { label: window.HI.t('maternity'), val: v.maternity }
    ].filter(function(r) { return r.val; });

    var vhHtml = '';
    if (vhRows.length > 0) {
      vhHtml = '<div class="modal-section">' +
        '<h4>&#128336; ' + window.HI.t('visiting_hours') + '</h4>' +
        '<table class="vh-table">' +
          vhRows.map(function(r) {
            return '<tr><td class="vh-label">' + r.label + '</td><td class="vh-val">' + r.val + '</td></tr>';
          }).join('') +
        '</table>' +
        (v.notes ? '<p class="vh-notes text-xs text-slate-500 mt-2">' + v.notes + '</p>' : '') +
      '</div>';
    }

    el.innerHTML = contactHtml + transportHtml + parkingHtml + facHtml + vhHtml;
  }

  // Panel 4: Insurance & Cost
  function renderPanel4(h) {
    var el = document.getElementById('modal-panel-4');
    if (!el) return;

    var roomHtml = '<div class="modal-section">' +
      '<h4>' + window.HI.t('room_rate') + '</h4>' +
      '<div class="room-rate-box">' +
        '<div class="room-rate-value">' + (h.roomRate || '—') + '</div>' +
        (h.roomRateRaw ? '<div class="room-rate-note">RM ' + h.roomRateRaw.toLocaleString() + window.HI.t('per_night_std') + '</div>' : '') +
      '</div>' +
    '</div>';

    var insHtml = '<div class="modal-section">' +
      '<h4>' + window.HI.t('insurance_coverage') + '</h4>' +
      '<p class="insurance-text">' + (h.insurance || '—') + '</p>' +
    '</div>';

    var fppHtml = '';
    if (h.fppScheme) {
      var fppDesc = (typeof h.fppScheme === 'string') ? h.fppScheme
        : window.HI.t('fpp_default_text');
      fppHtml = '<div class="modal-section fpp-block">' +
        '<h4>&#127963; ' + window.HI.t('fpp_scheme') + '</h4>' +
        '<p>' + fppDesc + '</p>' +
        (h.fppDeposit ? '<div class="fpp-deposit"><strong>' + window.HI.t('fpp_deposit') + ':</strong> ' + h.fppDeposit + '</div>' : '') +
      '</div>';
    }

    var gapsHtml = '';
    if (h.gaps && h.gaps.length) {
      gapsHtml = '<div class="modal-section gaps-block">' +
        '<h4>&#9888; ' + window.HI.t('gaps_label') + '</h4>' +
        '<ul class="gaps-list">' +
          (Array.isArray(h.gaps) ? h.gaps : [h.gaps]).map(function(g) { return '<li>' + g + '</li>'; }).join('') +
        '</ul>' +
      '</div>';
    }

    var roboticsHtml = '';
    if (h.robotics) {
      roboticsHtml = '<div class="modal-section">' +
        '<h4>&#129302; ' + window.HI.t('robotics_tech') + '</h4>' +
        '<p>' + h.robotics + '</p>' +
      '</div>';
    }

    var docQualHtml = '';
    if (h.doctorQualifications) {
      docQualHtml = '<div class="modal-section">' +
        '<h4>&#127891; ' + window.HI.t('doctor_qual') + '</h4>' +
        '<p>' + h.doctorQualifications + '</p>' +
      '</div>';
    }

    el.innerHTML = roomHtml + insHtml + fppHtml + gapsHtml + roboticsHtml + docQualHtml;
  }

  // Panel 5: Sources
  function renderPanel5(h) {
    var el = document.getElementById('modal-panel-5');
    if (!el) return;

    var sources = (h.officialSources || []).map(function(src) {
      return '<li><a href="' + src.url + '" target="_blank" class="source-link">&#128279; ' + src.label + '</a></li>';
    }).join('');

    el.innerHTML =
      '<div class="modal-section">' +
        '<h4>' + window.HI.t('official_sources') + '</h4>' +
        (sources ? '<ul class="sources-list">' + sources + '</ul>' : '<p class="text-slate-500">' + window.HI.t('no_sources') + '</p>') +
      '</div>' +
      (h.imageCredit ?
        '<div class="modal-section">' +
          '<h4>' + window.HI.t('image_credit') + '</h4>' +
          '<p class="image-credit-text">' + h.imageCredit + '</p>' +
        '</div>' : '') +
      '<div class="modal-section data-note-box">' +
        '<p class="text-xs text-slate-400">' + window.HI.t('data_note') + '</p>' +
      '</div>';
  }

  // Bind close & ESC
  document.addEventListener('DOMContentLoaded', function() {
    var closeBtn = document.getElementById('modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Backdrop click
    var modal = document.getElementById('hospital-modal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
      });
    }

    // ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  });

  // Re-render modal panels when language changes while modal is open
  var _prevOnLangChange = window.HI.onLangChange;
  window.HI.onLangChange = function(code) {
    if (_prevOnLangChange) _prevOnLangChange(code);
    var modal = document.getElementById('hospital-modal');
    if (currentHospital && modal && !modal.classList.contains('hidden')) {
      var h = currentHospital;
      var tab = activeTab;
      // Re-render all panels with new language
      renderPanel1(h);
      renderPanel2(h);
      renderPanel3(h);
      renderPanel4(h);
      renderPanel5(h);
      // Re-render header badges
      var sectorBadge = document.getElementById('modal-sector-badge');
      var tierBadge = document.getElementById('modal-tier-badge');
      if (sectorBadge) sectorBadge.textContent = window.HI.t('sector_' + h.sector);
      if (tierBadge) tierBadge.textContent = window.HI.t('tier_' + h.tier);
      // Re-render tab labels
      document.querySelectorAll('.modal-tab-btn').forEach(function(btn) {
        var key = btn.getAttribute('data-i18n');
        if (key) btn.textContent = window.HI.t(key);
      });
      switchModalTab(tab);
    }
  };

  window.HI.openModal = openModal;
  window.HI.closeModal = closeModal;
  window.HI.switchModalTab = switchModalTab;
})();
