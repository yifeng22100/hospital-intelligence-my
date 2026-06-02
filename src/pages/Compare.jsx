import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ALL_HOSPITALS, ALL_STATES } from '../data/index'
import HospitalModal from '../components/HospitalModal'

const FIELDS = [
  { key: 'sector',      label: 'Sector',             render: h => h.sector },
  { key: 'tier',        label: 'Tier',               render: h => h.tier || '—' },
  { key: 'state',       label: 'State',              render: h => h.state },
  { key: 'beds',        label: 'Total Beds',         render: h => h.infrastructure?.totalBeds?.toLocaleString() || '—' },
  { key: 'icu',         label: 'ICU Beds',           render: h => h.infrastructure?.icuBeds || '—' },
  { key: 'ot',          label: 'Operating Theatres', render: h => h.infrastructure?.operatingTheatres || '—' },
  { key: 'fpp',         label: 'FPP Scheme',         render: h => h.fppScheme ? '✓ Yes' : '—' },
  { key: 'msqh',        label: 'MSQH Accredited',    render: h => (h.accreditations || []).some(a => a.includes('MSQH')) ? '✓ Yes' : '—' },
  { key: 'helipad',     label: 'Helipad',            render: h => h.infrastructure?.helipad ? 'Yes' : 'No' },
  { key: 'pharmacy',    label: '24h Pharmacy',       render: h => h.facilities?.pharmacy24h ? 'Yes' : 'No' },
  { key: 'specialties', label: 'Specialties',        render: h => h.specialtyCoverage?.available?.length ? `${h.specialtyCoverage.available.length} available` : '—' },
  { key: 'established', label: 'Established',        render: h => h.infrastructure?.yearEstablished || '—' },
]

const SECTOR_STYLES = {
  public: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
  private: 'text-blue-700 bg-blue-50 border border-blue-200',
}

export default function Compare() {
  const [slots, setSlots] = useState(() => {
    try {
      const ids = JSON.parse(localStorage.getItem('compareIds') || '[]')
      const found = ids.map(id => ALL_HOSPITALS.find(h => h.id === id)).filter(Boolean)
      return [...found, null, null, null, null, null].slice(0, 5)
    } catch { return [null, null, null, null, null] }
  })
  const [browseState, setBrowseState] = useState('')
  const [browseSector, setBrowseSector] = useState('')
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [viewModal, setViewModal] = useState(null)

  useEffect(() => {
    const ids = slots.filter(Boolean).map(h => h.id)
    localStorage.setItem('compareIds', JSON.stringify(ids))
  }, [slots])

  const addHospital = h => {
    const idx = slots.findIndex(s => s === null)
    if (idx === -1) return
    setSlots(prev => prev.map((s, i) => i === idx ? h : s))
    setShowAll(false)
  }

  const removeHospital = idx => {
    setSlots(prev => prev.map((s, i) => i === idx ? null : s))
  }

  const filled = slots.filter(Boolean)
  const filledIds = new Set(filled.map(h => h.id))
  const canAdd = slots.some(s => s === null)

  const browseList = useMemo(() => {
    let list = ALL_HOSPITALS
    if (browseState) list = list.filter(h => h.state === browseState)
    if (browseSector) list = list.filter(h => h.sector === browseSector)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(h =>
        h.name.toLowerCase().includes(q) ||
        (h.nameShort || '').toLowerCase().includes(q) ||
        h.city.toLowerCase().includes(q)
      )
    }
    return list
  }, [browseState, browseSector, search])

  const visibleList = showAll ? browseList : browseList.slice(0, 20)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight mb-1">Compare Hospitals</h1>
          <p className="text-ink-secondary text-[14px] mb-6">
            Browse below and add up to 5 hospitals, or add them directly from the{' '}
            <Link to="/find-care" className="text-brand hover:underline">Find Care</Link> page.
          </p>

          {/* Slot cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {slots.map((h, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-3 min-h-[76px] flex flex-col justify-between ${
                  h
                    ? 'bg-white border-brand/30'
                    : 'border-dashed border-ink-quaternary bg-transparent'
                }`}
              >
                {h ? (
                  <>
                    <div>
                      <span className={`text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-md ${SECTOR_STYLES[h.sector] || ''}`}>
                        {h.sector}
                      </span>
                      <p className="font-semibold text-ink text-[12px] leading-snug line-clamp-2 mt-1.5">{h.nameShort || h.name}</p>
                      <p className="text-ink-tertiary text-[11px] mt-0.5">{h.city}</p>
                    </div>
                    <button
                      onClick={() => removeHospital(i)}
                      className="text-[10px] text-red-500 hover:text-red-700 mt-2 text-left transition-colors"
                    >
                      Remove ×
                    </button>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-ink-tertiary text-[12px] py-4">
                    + Slot {i + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        {/* Browse panel */}
        {canAdd && (
          <div className="mb-10">
            <h2 className="text-[15px] font-semibold text-ink mb-4">
              Browse & Add — {browseList.length} hospitals
            </h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              {/* State */}
              <div className="relative">
                <select
                  value={browseState}
                  onChange={e => { setBrowseState(e.target.value); setShowAll(false) }}
                  className="appearance-none bg-white border border-ink-quaternary rounded-xl px-4 py-2 pr-8 text-[13px] text-ink focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none cursor-pointer"
                >
                  <option value="">All States</option>
                  {ALL_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Sector */}
              <div className="flex rounded-xl border border-ink-quaternary overflow-hidden text-[13px]">
                {[['', 'All'], ['public', 'Public'], ['private', 'Private']].map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => { setBrowseSector(val); setShowAll(false) }}
                    className={`px-4 py-2 font-medium transition-colors ${
                      browseSector === val
                        ? 'bg-ink text-white'
                        : 'bg-white text-ink-secondary hover:bg-surface-secondary'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="flex items-center bg-white rounded-xl px-3 py-2 border border-ink-quaternary focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10 transition-all">
                <svg className="text-ink-tertiary mr-2" width="13" height="13" viewBox="0 0 18 18" fill="none">
                  <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setShowAll(false) }}
                  placeholder="Search hospitals…"
                  className="bg-transparent text-ink placeholder-ink-tertiary text-[13px] outline-none w-40"
                />
              </div>
            </div>

            {/* Hospital rows */}
            <div className="space-y-1.5">
              {visibleList.map(h => {
                const added = filledIds.has(h.id)
                return (
                  <div
                    key={h.id}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-colors ${
                      added ? 'border-brand/30 bg-brand/5' : 'border-ink-quaternary bg-white hover:border-brand/30'
                    }`}
                  >
                    <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-ink text-[13px] leading-snug">{h.name}</span>
                      <span className="text-ink-tertiary text-[12px]">{h.city}, {h.state}</span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
                        h.sector === 'public'
                          ? 'text-emerald-700 bg-emerald-50'
                          : 'text-blue-700 bg-blue-50'
                      }`}>{h.sector}</span>
                      {h.fppScheme && (
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md text-emerald-700 bg-emerald-50 border border-emerald-200">FPP</span>
                      )}
                    </div>
                    <button
                      onClick={() =>
                        added
                          ? removeHospital(slots.findIndex(s => s?.id === h.id))
                          : addHospital(h)
                      }
                      disabled={!added && !canAdd}
                      className={`flex-shrink-0 text-[12px] font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
                        added
                          ? 'bg-brand text-white border-brand hover:bg-red-500 hover:border-red-500'
                          : !canAdd
                          ? 'bg-surface-secondary text-ink-tertiary border-ink-quaternary cursor-not-allowed'
                          : 'bg-white text-brand border-brand hover:bg-brand hover:text-white'
                      }`}
                    >
                      {added ? '✓ Added' : '+ Add'}
                    </button>
                  </div>
                )
              })}
            </div>

            {browseList.length > 20 && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="mt-4 text-brand text-[13px] font-medium hover:underline"
              >
                Show all {browseList.length} hospitals →
              </button>
            )}
            {browseList.length === 0 && (
              <p className="text-ink-secondary text-[13px] py-8 text-center">No hospitals match your filters.</p>
            )}
          </div>
        )}

        {/* Comparison table */}
        {filled.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-ink font-semibold text-[18px] mb-2">Add hospitals above to compare</h3>
            <p className="text-ink-secondary text-[14px]">Filter by state or sector, then tap "+ Add" on any hospital.</p>
          </div>
        ) : (
          <div>
            <h2 className="text-[16px] font-bold text-ink mb-4">Side-by-side comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px]">
                <thead>
                  <tr>
                    <th className="text-left py-3 pr-6 text-ink-secondary font-medium text-[11px] uppercase tracking-wider w-36">
                      Attribute
                    </th>
                    {slots.map((h, i) =>
                      h ? (
                        <th key={i} className="text-left py-3 px-4 min-w-[160px]">
                          <div className="font-semibold text-ink text-[14px] leading-snug">{h.nameShort || h.name}</div>
                          <div className="text-ink-tertiary text-[11px] font-normal mt-0.5">{h.city}, {h.state}</div>
                          <button
                            onClick={() => setViewModal(h)}
                            className="text-brand text-[11px] font-medium mt-1 hover:underline"
                          >
                            View details →
                          </button>
                        </th>
                      ) : null
                    )}
                  </tr>
                </thead>
                <tbody>
                  {FIELDS.map(({ key, label, render }) => (
                    <tr key={key} className="border-t border-ink-quaternary">
                      <td className="py-3 pr-6 text-ink-secondary font-medium text-[12px]">{label}</td>
                      {slots.map((h, i) =>
                        h ? (
                          <td key={i} className={`py-3 px-4 text-[13px] ${
                            render(h).toString().startsWith('✓') ? 'text-emerald-700 font-medium' : 'text-ink'
                          }`}>
                            {render(h)}
                          </td>
                        ) : null
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {viewModal && <HospitalModal hospital={viewModal} onClose={() => setViewModal(null)} />}
    </div>
  )
}
