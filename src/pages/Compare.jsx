import { useState, useMemo } from 'react'
import { ALL_HOSPITALS } from '../data/index'
import HospitalModal from '../components/HospitalModal'

const FIELDS = [
  { key: 'sector', label: 'Sector', render: h => h.sector },
  { key: 'tier', label: 'Tier', render: h => h.tier },
  { key: 'state', label: 'State', render: h => h.state },
  { key: 'beds', label: 'Total Beds', render: h => h.infrastructure?.totalBeds?.toLocaleString() || '—' },
  { key: 'icu', label: 'ICU Beds', render: h => h.infrastructure?.icuBeds || '—' },
  { key: 'ot', label: 'Operating Theatres', render: h => h.infrastructure?.operatingTheatres || '—' },
  { key: 'helipad', label: 'Helipad', render: h => h.infrastructure?.helipad ? 'Yes' : 'No' },
  { key: 'pharmacy', label: '24h Pharmacy', render: h => h.facilities?.pharmacy24h ? 'Yes' : 'No' },
  { key: 'specialties', label: 'Specialties', render: h => h.specialtyCoverage?.available?.length ? `${h.specialtyCoverage.available.length} available` : '—' },
  { key: 'established', label: 'Established', render: h => h.infrastructure?.yearEstablished || '—' },
]

export default function Compare() {
  const [search, setSearch] = useState('')
  const [slots, setSlots] = useState([null, null, null])
  const [viewModal, setViewModal] = useState(null)

  const suggestions = useMemo(() => {
    if (!search.trim()) return []
    const q = search.toLowerCase()
    return ALL_HOSPITALS.filter(
      h =>
        !slots.some(s => s?.id === h.id) &&
        (h.name.toLowerCase().includes(q) ||
          (h.nameShort || '').toLowerCase().includes(q) ||
          h.state.toLowerCase().includes(q))
    ).slice(0, 8)
  }, [search, slots])

  const addHospital = h => {
    const idx = slots.findIndex(s => s === null)
    if (idx === -1) return
    setSlots(prev => prev.map((s, i) => (i === idx ? h : s)))
    setSearch('')
  }

  const removeHospital = idx => {
    setSlots(prev => prev.map((s, i) => (i === idx ? null : s)))
  }

  const filled = slots.filter(Boolean)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight mb-1">Compare Hospitals</h1>
          <p className="text-ink-secondary text-[14px] mb-6">
            Select up to 3 hospitals to compare side by side.
          </p>

          {/* Slots */}
          <div className="flex flex-wrap gap-3 mb-5">
            {slots.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white border border-ink-quaternary rounded-xl px-3 py-2 text-[13px]"
              >
                {h ? (
                  <>
                    <span className="font-medium text-ink">{h.nameShort || h.name}</span>
                    <button
                      onClick={() => removeHospital(i)}
                      className="text-ink-tertiary hover:text-brand transition-colors ml-1"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <span className="text-ink-tertiary">Empty slot {i + 1}</span>
                )}
              </div>
            ))}
          </div>

          {/* Search to add */}
          {slots.some(s => s === null) && (
            <div className="relative max-w-[400px]">
              <div className="flex items-center bg-white rounded-xl px-3 py-2.5 border border-ink-quaternary focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/10 transition-all">
                <svg className="text-ink-tertiary mr-2.5" width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Add a hospital…"
                  className="flex-1 bg-transparent text-ink placeholder-ink-tertiary text-[14px] outline-none"
                />
              </div>
              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-ink-quaternary rounded-xl shadow-card overflow-hidden z-10">
                  {suggestions.map(h => (
                    <button
                      key={h.id}
                      onClick={() => addHospital(h)}
                      className="w-full text-left px-4 py-2.5 text-[13px] hover:bg-surface-secondary transition-colors border-b border-ink-quaternary last:border-0"
                    >
                      <span className="font-medium text-ink">{h.name}</span>
                      <span className="text-ink-tertiary ml-2">{h.state}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Comparison table */}
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        {filled.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-ink font-semibold text-[18px] mb-2">Add hospitals to compare</h3>
            <p className="text-ink-secondary text-[14px]">
              Search for hospitals above and add up to 3 to compare side by side.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr>
                  <th className="text-left py-3 pr-6 text-ink-secondary font-medium text-[11px] uppercase tracking-wider w-36">
                    Attribute
                  </th>
                  {slots.map((h, i) =>
                    h ? (
                      <th key={i} className="text-left py-3 px-4 min-w-[180px]">
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
                        <td key={i} className="py-3 px-4 text-ink text-[13px]">
                          {render(h)}
                        </td>
                      ) : null
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {viewModal && <HospitalModal hospital={viewModal} onClose={() => setViewModal(null)} />}
    </div>
  )
}
