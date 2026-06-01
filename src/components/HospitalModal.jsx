import { useState, useEffect } from 'react'

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'specialties', label: 'Specialties' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'intelligence', label: 'Intelligence' },
]

const SECTOR_STYLES = {
  public: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
  private: 'text-blue-700 bg-blue-50 border border-blue-200',
}
const TIER_STYLES = {
  quaternary: 'text-purple-700 bg-purple-50',
  tertiary: 'text-indigo-700 bg-indigo-50',
  secondary: 'text-sky-700 bg-sky-50',
  district: 'text-teal-700 bg-teal-50',
  specialist: 'text-pink-700 bg-pink-50',
}

export default function HospitalModal({ hospital: h, onClose }) {
  const [tab, setTab] = useState('overview')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] flex flex-col shadow-modal animate-slide-up overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-5 pb-4 flex-shrink-0">
          <div className="flex items-start gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    SECTOR_STYLES[h.sector] || 'text-ink-secondary bg-surface-secondary'
                  }`}
                >
                  {h.sector}
                </span>
                {h.tier && (
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                      TIER_STYLES[h.tier] || 'text-ink-secondary bg-surface-secondary'
                    }`}
                  >
                    {h.tier}
                  </span>
                )}
                <span className="text-[12px] text-ink-tertiary">{h.state}</span>
              </div>
              <h2 className="text-[20px] font-bold text-ink tracking-tight leading-snug">
                {h.name}
              </h2>
              <p className="text-ink-secondary text-[13px] mt-0.5">
                {h.city}, {h.state}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-surface-secondary hover:bg-surface-tertiary flex items-center justify-center transition-colors mt-0.5"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="#6e6e73" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-ink-quaternary flex-shrink-0">
          <div className="flex -mb-px gap-0">
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`px-4 py-2.5 text-[13px] font-medium border-b-2 transition-colors ${
                  tab === id
                    ? 'border-brand text-brand'
                    : 'border-transparent text-ink-secondary hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {tab === 'overview' && <OverviewTab h={h} />}
          {tab === 'specialties' && <SpecialtiesTab h={h} />}
          {tab === 'facilities' && <FacilitiesTab h={h} />}
          {tab === 'intelligence' && <IntelligenceTab h={h} />}
        </div>
      </div>
    </div>
  )
}

function OverviewTab({ h }) {
  const infra = h.infrastructure || {}
  const stats = [
    { label: 'Beds', value: infra.totalBeds },
    { label: 'ICU Beds', value: infra.icuBeds },
    { label: 'OTs', value: infra.operatingTheatres },
    { label: 'Est.', value: infra.yearEstablished },
  ].filter(s => s.value)

  return (
    <div className="px-6 py-5 space-y-5">
      {h.intro && (
        <p className="text-ink text-[14px] leading-relaxed">{h.intro}</p>
      )}

      {stats.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-surface-secondary rounded-xl p-3 text-center">
              <div className="text-[22px] font-bold text-ink leading-none">
                {Number(value).toLocaleString()}
              </div>
              <div className="text-ink-secondary text-[11px] mt-1">{label}</div>
            </div>
          ))}
        </div>
      )}

      {h.famousFor?.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Known for
          </h4>
          <ul className="space-y-1.5">
            {h.famousFor.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-ink">
                <span className="text-brand mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {h.contact && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Contact
          </h4>
          <div className="space-y-1.5 text-[13px]">
            {h.contact.address && (
              <p className="text-ink-secondary">{h.contact.address}</p>
            )}

            {/* Maps buttons */}
            {(h.contact.mapQuery || h.contact.address) && (
              <div className="flex flex-wrap gap-2 pt-0.5 pb-1">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.contact.mapQuery || h.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-secondary hover:bg-surface-tertiary border border-ink-quaternary rounded-xl text-[12px] font-medium text-ink transition-colors"
                >
                  <span>🗺</span> Open in Google Maps
                </a>
                <a
                  href={`https://waze.com/ul?q=${encodeURIComponent(h.contact.mapQuery || h.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-secondary hover:bg-surface-tertiary border border-ink-quaternary rounded-xl text-[12px] font-medium text-ink transition-colors"
                >
                  <span>🚗</span> Open in Waze
                </a>
              </div>
            )}

            {h.contact.mainLine && (
              <p>
                <span className="font-medium text-ink">Main: </span>
                <a href={`tel:${h.contact.mainLine.replace(/[\s-]/g, '')}`} className="text-brand hover:underline">
                  {h.contact.mainLine}
                </a>
              </p>
            )}
            {h.contact.appointmentLine && h.contact.appointmentLine !== h.contact.mainLine && (
              <p>
                <span className="font-medium text-ink">Appointments: </span>
                <a href={`tel:${h.contact.appointmentLine.replace(/[\s-]/g, '')}`} className="text-brand hover:underline">
                  {h.contact.appointmentLine}
                </a>
              </p>
            )}
            {h.contact.emergencyLine && (
              <p>
                <span className="font-medium text-ink">Emergency: </span>
                <span className="text-ink-secondary">{h.contact.emergencyLine}</span>
              </p>
            )}
            {h.contact.website && (
              <a
                href={h.contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-brand hover:underline break-all"
              >
                {h.contact.website.replace('https://', '')}
              </a>
            )}
          </div>
        </div>
      )}

      {h.transport && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Getting there
          </h4>
          <div className="space-y-1.5 text-[13px] text-ink-secondary">
            {h.transport.nearest && <p>🚇 {h.transport.nearest}</p>}
            {h.transport.bus && <p>🚌 {h.transport.bus}</p>}
            {h.transport.highway && <p>🚗 {h.transport.highway}</p>}
            {h.transport.landmark && <p>📍 {h.transport.landmark}</p>}
          </div>
        </div>
      )}

      {h.visitingHours && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Visiting hours
          </h4>
          <div className="space-y-1 text-[13px]">
            {h.visitingHours.general && (
              <p><span className="font-medium text-ink">General: </span><span className="text-ink-secondary">{h.visitingHours.general}</span></p>
            )}
            {h.visitingHours.icu && (
              <p><span className="font-medium text-ink">ICU: </span><span className="text-ink-secondary">{h.visitingHours.icu}</span></p>
            )}
            {h.visitingHours.notes && (
              <p className="text-ink-tertiary text-[12px] italic mt-1">{h.visitingHours.notes}</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function SpecialtiesTab({ h }) {
  const avail = h.specialtyCoverage?.available || []
  const byReferral = h.specialtyCoverage?.byReferral || []
  const notAvail = h.specialtyCoverage?.notAvailable || []

  if (!avail.length && !byReferral.length && !notAvail.length) {
    return (
      <div className="px-6 py-10 text-center text-ink-secondary text-[14px]">
        Specialty information not available.
      </div>
    )
  }

  return (
    <div className="px-6 py-5 space-y-5">
      {avail.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Available ({avail.length})
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {avail.map((s, i) => (
              <span key={i} className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[12px] font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
      {byReferral.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            By Referral ({byReferral.length})
          </h4>
          <div className="space-y-1.5">
            {byReferral.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      )}
      {notAvail.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Not available here ({notAvail.length})
          </h4>
          <div className="space-y-2">
            {notAvail.map((item, i) => {
              const specialty = typeof item === 'string' ? item : item.specialty
              const transferTo = typeof item === 'object' ? item.transferTo : null
              const note = typeof item === 'object' ? item.note : null
              return (
                <div key={i} className="bg-surface-secondary rounded-xl p-3 text-[12px]">
                  <p className="font-medium text-ink">{specialty}</p>
                  {transferTo && <p className="text-ink-secondary mt-0.5">Refer to: {transferTo}</p>}
                  {note && <p className="text-ink-tertiary mt-0.5 italic">{note}</p>}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

function FacilitiesTab({ h }) {
  const fac = h.facilities || {}
  const infra = h.infrastructure || {}

  return (
    <div className="px-6 py-5 space-y-5">
      <div>
        <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
          Amenities
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {fac.pharmacy24h !== undefined && (
            <FacilRow icon="💊" label="24h Pharmacy" value={fac.pharmacy24h ? 'Yes' : 'No'} ok={fac.pharmacy24h} />
          )}
          {fac.cafeteria && <FacilRow icon="☕" label="Cafeteria" value={fac.cafeteria} />}
          {fac.atm && <FacilRow icon="🏧" label="ATM" value={fac.atm} />}
          {fac.wifi && <FacilRow icon="📶" label="WiFi" value={fac.wifi} />}
          {fac.disabledAccess !== undefined && (
            <FacilRow icon="♿" label="Disabled Access" value={fac.disabledAccess ? 'Yes' : 'No'} ok={fac.disabledAccess} />
          )}
          {fac.patientTransport && (
            <FacilRow icon="🚗" label="Patient Transport" value={fac.patientTransport} />
          )}
        </div>
      </div>

      {(infra.helipad !== undefined || infra.area || infra.parkingBays) && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Infrastructure
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {infra.helipad !== undefined && (
              <FacilRow icon="🚁" label="Helipad" value={infra.helipad ? 'Yes' : 'No'} ok={infra.helipad} />
            )}
            {infra.area && <FacilRow icon="📐" label="Area" value={infra.area} />}
            {infra.parkingBays && <FacilRow icon="🅿️" label="Parking" value={infra.parkingBays} />}
            {infra.parkingRate && <FacilRow icon="💳" label="Parking Rate" value={infra.parkingRate} />}
          </div>
        </div>
      )}
    </div>
  )
}

function FacilRow({ icon, label, value, ok }) {
  return (
    <div className="flex items-start gap-2 py-2 px-3 bg-surface-secondary rounded-xl text-[13px]">
      <span className="flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <span className="font-medium text-ink">{label}: </span>
        <span className={ok === false ? 'text-ink-tertiary' : 'text-ink-secondary'}>{value}</span>
      </div>
    </div>
  )
}

function IntelligenceTab({ h }) {
  const tp = h.transferPathway || {}
  const ranks = h.specialtyRanks || {}
  const rankEntries = Object.entries(ranks)

  return (
    <div className="px-6 py-5 space-y-5">

      {/* Primary excellence */}
      {h.primaryExcellence && (
        <div className="bg-brand/5 border border-brand/20 rounded-xl px-4 py-3 text-[13px] text-brand font-medium">
          ★ {h.primaryExcellence}
        </div>
      )}

      {/* Verified notes */}
      {h.verifiedNotes && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Verified Notes
          </h4>
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-[13px] text-blue-900 leading-relaxed">
            {h.verifiedNotes}
          </div>
        </div>
      )}

      {/* Notable gaps */}
      {h.notableGaps && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Notable Gaps
          </h4>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-[13px] text-amber-900 leading-relaxed">
            {h.notableGaps}
          </div>
        </div>
      )}

      {/* Specialty rankings */}
      {rankEntries.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Specialty Rankings
          </h4>
          <div className="space-y-2">
            {rankEntries.map(([specialty, info]) => (
              <div key={specialty} className="bg-surface-secondary rounded-xl p-3 text-[13px]">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-medium text-ink">{specialty}</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    {info.rank}
                  </span>
                </div>
                {info.desc && <p className="text-ink-secondary mt-1">{info.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Transfer / referral pathway */}
      {tp.summary && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Transfer Pathway
          </h4>
          <div className="bg-surface-secondary rounded-xl p-4 text-[13px] text-ink space-y-3">
            <p className="text-ink-secondary leading-relaxed">{tp.summary}</p>
            {tp.routes?.length > 0 && (
              <div className="space-y-2">
                {tp.routes.map((r, i) => (
                  <div key={i} className="border-l-2 border-ink-quaternary pl-3">
                    <p className="font-medium text-ink">{r.condition}</p>
                    <p className="text-ink-secondary">→ {r.to}
                      {r.distanceKm > 0 && <span className="text-ink-tertiary"> ({r.distanceKm} km)</span>}
                    </p>
                    {r.reason && <p className="text-ink-tertiary text-[12px] italic">{r.reason}</p>}
                  </div>
                ))}
              </div>
            )}
            {tp.howToTransfer && (
              <p className="text-[12px] text-ink-tertiary border-t border-ink-quaternary pt-2">{tp.howToTransfer}</p>
            )}
          </div>
        </div>
      )}

      {/* Accreditations */}
      {h.accreditations?.length > 0 && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Accreditations
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {h.accreditations.map((a, i) => (
              <span key={i} className="px-2.5 py-1 bg-surface-secondary border border-ink-quaternary rounded-full text-[12px] text-ink-secondary">
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Costs & insurance */}
      {(h.roomRate || h.insurance) && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Costs & Insurance
          </h4>
          <div className="space-y-2 text-[13px]">
            {h.roomRate && (
              <div className="flex items-start gap-2">
                <span className="text-ink-tertiary flex-shrink-0">Room:</span>
                <span className="text-ink">{h.roomRate}</span>
              </div>
            )}
            {h.fppScheme && (
              <div className="flex items-start gap-2">
                <span className="text-ink-tertiary flex-shrink-0">FPP:</span>
                <span className="text-ink">Available{h.fppDeposit ? ` · Deposit ${h.fppDeposit}` : ''}</span>
              </div>
            )}
            {h.insurance && (
              <p className="text-ink-secondary leading-relaxed">{h.insurance}</p>
            )}
          </div>
        </div>
      )}

      {/* Technology & robotics */}
      {h.robotics && h.robotics.toLowerCase() !== 'none' && h.robotics.toLowerCase() !== 'not available' && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Technology
          </h4>
          <p className="text-[13px] text-ink-secondary leading-relaxed">{h.robotics}</p>
        </div>
      )}

      {/* Doctor qualifications */}
      {h.doctorQualifications && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Doctor Qualifications
          </h4>
          <p className="text-[13px] text-ink-secondary leading-relaxed">{h.doctorQualifications}</p>
        </div>
      )}

      {/* Gaps */}
      {h.gaps && (
        <div>
          <h4 className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-2.5">
            Known Limitations
          </h4>
          <p className="text-[13px] text-ink-secondary leading-relaxed">{h.gaps}</p>
        </div>
      )}

    </div>
  )
}
