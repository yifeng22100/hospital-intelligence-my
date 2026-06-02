import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ALL_HOSPITALS, ALL_STATES } from '../data/index'
import HospitalModal from '../components/HospitalModal'

const SPECIALTY_FILTERS = [
  { label: 'Cardiology / Cardiac',      keywords: ['cardia', 'cardiac'] },
  { label: 'Oncology / Cancer',         keywords: ['oncology', 'cancer', 'bmt', 'bone marrow'] },
  { label: 'Orthopaedics',              keywords: ['orthopaedic', 'spine surgery', 'foot & ankle', 'hand surgery', 'joint replacement'] },
  { label: 'Neurology / Neurosurgery',  keywords: ['neurology', 'neurosurgery', 'neurophysiology', 'neurorehabilitation', 'stroke'] },
  { label: 'Obstetrics & Maternity',    keywords: ['obstetrics', 'maternity', 'antenatal', 'postnatal', 'labour', 'delivery'] },
  { label: 'Paediatrics / Children',    keywords: ['paediatric', 'pediatric', 'child', 'neonatal', 'nicu', 'infant'] },
  { label: 'Emergency & A&E',           keywords: ['emergency', 'a&e', 'accident & emergency'] },
  { label: 'Psychiatry / Mental Health',keywords: ['psychiatry', 'psychology', 'mental health', 'addiction', 'ecт', 'electroconvulsive'] },
  { label: 'Ophthalmology / Eyes',      keywords: ['ophthalmology', 'eye', 'refractive', 'retina', 'cataract', 'glaucoma'] },
  { label: 'ENT',                       keywords: ['ent', 'otorhin', 'cochlear', 'hearing', 'laryngology'] },
  { label: 'Nephrology / Urology',      keywords: ['nephrology', 'urology', 'dialysis', 'kidney', 'renal'] },
  { label: 'Endocrinology / Diabetes',  keywords: ['endocrinology', 'diabetes', 'thyroid', 'metabolism'] },
  { label: 'Gastroenterology',          keywords: ['gastroenterology', 'hepatology', 'colorectal', 'liver', 'endoscopy', 'gi ', 'gastro'] },
  { label: 'Respiratory / Lungs',       keywords: ['respiratory', 'pulmonol', 'thoracic', 'lung', 'sleep apnoea'] },
  { label: 'Fertility / IVF',           keywords: ['fertility', 'ivf', 'reproductive'] },
  { label: 'Rehabilitation / Physio',   keywords: ['rehabilitation', 'physiotherapy', 'physio', 'occupational therapy'] },
  { label: 'Transplant',               keywords: ['transplant'] },
  { label: 'Burns & Plastic Surgery',   keywords: ['burns', 'plastic surgery', 'reconstructive', 'aesthetic'] },
  { label: 'Haematology / Blood',       keywords: ['haematology', 'hematology', 'blood bank', 'thalassaemia'] },
  { label: 'Rheumatology / Immunology', keywords: ['rheumatology', 'immunology', 'autoimmune'] },
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

export default function FindCare() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [state, setState] = useState(searchParams.get('state') || '')
  const [sector, setSector] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [fppOnly, setFppOnly] = useState(false)
  const [selected, setSelected] = useState(null)
  const [compareIds, setCompareIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('compareIds') || '[]') } catch { return [] }
  })

  // Keep URL in sync when filters change externally (e.g. back/forward)
  useEffect(() => {
    setQuery(searchParams.get('q') || '')
    setState(searchParams.get('state') || '')
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = ALL_HOSPITALS
    if (query) {
      const q = query.toLowerCase()
      list = list.filter(
        h =>
          h.name.toLowerCase().includes(q) ||
          (h.nameShort || '').toLowerCase().includes(q) ||
          h.state.toLowerCase().includes(q) ||
          h.city.toLowerCase().includes(q) ||
          (h.famousFor || []).some(f => f.toLowerCase().includes(q)) ||
          (h.specialtyCoverage?.available || []).some(s => s.toLowerCase().includes(q))
      )
    }
    if (state) list = list.filter(h => h.state === state)
    if (sector) list = list.filter(h => h.sector === sector)
    if (specialty) {
      const kws = SPECIALTY_FILTERS.find(f => f.label === specialty)?.keywords || []
      list = list.filter(h =>
        (h.specialtyCoverage?.available || []).some(s =>
          kws.some(kw => s.toLowerCase().includes(kw.toLowerCase()))
        )
      )
    }
    if (fppOnly) list = list.filter(h => h.fppScheme === true)
    return list
  }, [query, state, sector, specialty, fppOnly])

  const toggleCompare = (e, h) => {
    e.stopPropagation()
    setCompareIds(prev => {
      const next = prev.includes(h.id)
        ? prev.filter(id => id !== h.id)
        : prev.length < 5 ? [...prev, h.id] : prev
      localStorage.setItem('compareIds', JSON.stringify(next))
      return next
    })
  }

  const updateQuery = val => {
    setQuery(val)
    const p = {}
    if (val) p.q = val
    if (state) p.state = state
    setSearchParams(p, { replace: true })
  }

  const updateState = val => {
    setState(val)
    const p = {}
    if (query) p.q = query
    if (val) p.state = val
    setSearchParams(p, { replace: true })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight mb-5">Find Care</h1>

          {/* Search */}
          <div className="flex items-center bg-white rounded-2xl px-4 py-3 border border-ink-quaternary focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all shadow-sm max-w-[600px]">
            <svg className="text-ink-tertiary flex-shrink-0 mr-3" width="17" height="17" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => updateQuery(e.target.value)}
              placeholder="Search hospitals, states, specialties…"
              className="flex-1 bg-transparent text-ink placeholder-ink-tertiary text-[15px] outline-none"
              autoComplete="off"
            />
            {query && (
              <button
                onClick={() => updateQuery('')}
                className="ml-2 text-ink-tertiary hover:text-ink transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 3l9 9M12 3l-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {/* State */}
            <div className="relative">
              <select
                value={state}
                onChange={e => updateState(e.target.value)}
                className="appearance-none bg-white border border-ink-quaternary rounded-xl px-4 py-2 pr-8 text-[13px] text-ink focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none cursor-pointer"
              >
                <option value="">All States</option>
                {ALL_STATES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Sector toggle */}
            <div className="flex rounded-xl border border-ink-quaternary overflow-hidden text-[13px]">
              {[['', 'All'], ['public', 'Public'], ['private', 'Private']].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setSector(val)}
                  className={`px-4 py-2 font-medium transition-colors ${
                    sector === val
                      ? 'bg-ink text-white'
                      : 'bg-white text-ink-secondary hover:bg-surface-secondary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Specialty */}
            <div className="relative">
              <select
                value={specialty}
                onChange={e => setSpecialty(e.target.value)}
                className="appearance-none bg-white border border-ink-quaternary rounded-xl px-4 py-2 pr-8 text-[13px] text-ink focus:border-brand focus:ring-2 focus:ring-brand/10 outline-none cursor-pointer"
              >
                <option value="">All Specialties</option>
                {SPECIALTY_FILTERS.map(f => (
                  <option key={f.label} value={f.label}>{f.label}</option>
                ))}
              </select>
              <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-tertiary pointer-events-none" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* FPP toggle */}
            <button
              onClick={() => setFppOnly(v => !v)}
              className={`px-4 py-2 rounded-xl border text-[13px] font-medium transition-colors ${
                fppOnly
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white text-ink-secondary border-ink-quaternary hover:border-emerald-500 hover:text-emerald-700'
              }`}
            >
              ✓ FPP Only
            </button>

            {/* Clear */}
            {(query || state || sector || specialty || fppOnly) && (
              <button
                onClick={() => { updateQuery(''); updateState(''); setSector(''); setSpecialty(''); setFppOnly(false) }}
                className="text-[13px] text-ink-secondary hover:text-brand transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-[1200px] mx-auto px-5 py-7">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <p className="text-ink-secondary text-[13px]">
            {filtered.length.toLocaleString()} hospital{filtered.length !== 1 ? 's' : ''}
            {query && <span className="font-medium text-ink"> for "{query}"</span>}
            {state && <span> · {state}</span>}
            {sector && <span> · {sector}</span>}
            {specialty && <span> · {specialty}</span>}
            {fppOnly && <span> · FPP only</span>}
          </p>
          {compareIds.length > 0 && (
            <Link
              to="/compare"
              className="inline-flex items-center gap-2 bg-brand text-white px-4 py-1.5 rounded-xl text-[13px] font-semibold hover:bg-brand-dark transition-colors"
            >
              Compare {compareIds.length} selected →
            </Link>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-ink font-semibold text-[18px] mb-2">No hospitals found</h3>
            <p className="text-ink-secondary text-[14px]">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map(h => (
              <HospitalCard
                key={h.id}
                h={h}
                onClick={() => setSelected(h)}
                inCompare={compareIds.includes(h.id)}
                onToggleCompare={e => toggleCompare(e, h)}
                compareFull={compareIds.length >= 5 && !compareIds.includes(h.id)}
              />
            ))}
          </div>
        )}
      </div>

      {selected && <HospitalModal hospital={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}

function HospitalCard({ h, onClick, inCompare, onToggleCompare, compareFull }) {
  const keyAccreditations = (h.accreditations || []).filter(
    a => a.includes('JCI') || a.includes('MSQH')
  )

  return (
    <button
      onClick={onClick}
      className="text-left bg-white border border-ink-quaternary rounded-2xl p-4 hover:border-brand hover:shadow-card transition-all group w-full"
    >
      <div className="flex items-center gap-1.5 mb-2.5">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${
            SECTOR_STYLES[h.sector] || 'text-ink-secondary bg-surface-secondary'
          }`}
        >
          {h.sector}
        </span>
        {h.tier && (
          <span
            className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${
              TIER_STYLES[h.tier] || 'text-ink-secondary bg-surface-secondary'
            }`}
          >
            {h.tier}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-ink text-[14px] leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2">
        {h.name}
      </h3>

      <p className="text-ink-secondary text-[12px] mb-2">{h.city}, {h.state}</p>

      {/* Accreditation + FPP badges */}
      {(h.fppScheme || keyAccreditations.length > 0) && (
        <div className="flex flex-wrap items-center gap-1 mb-2.5">
          {h.fppScheme && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md text-emerald-700 bg-emerald-50 border border-emerald-200">
              ✓ FPP
            </span>
          )}
          {keyAccreditations.map((a, i) => (
            <span
              key={i}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                a.includes('JCI')
                  ? 'text-amber-700 bg-amber-50 border border-amber-200'
                  : 'text-blue-700 bg-blue-50 border border-blue-200'
              }`}
            >
              {a.includes('JCI') ? 'JCI' : 'MSQH'}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between gap-2">
        {h.infrastructure?.totalBeds ? (
          <p className="text-ink-tertiary text-[11px]">
            🛏 {Number(h.infrastructure.totalBeds).toLocaleString()} beds
          </p>
        ) : <span />}

        <button
          onClick={onToggleCompare}
          disabled={compareFull}
          title={compareFull ? 'Compare is full (max 5)' : inCompare ? 'Remove from compare' : 'Add to compare'}
          className={`flex-shrink-0 text-[10px] font-semibold px-2 py-1 rounded-lg border transition-colors ${
            inCompare
              ? 'bg-brand text-white border-brand'
              : compareFull
              ? 'bg-surface-secondary text-ink-tertiary border-ink-quaternary cursor-not-allowed'
              : 'bg-white text-ink-tertiary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}
        >
          {inCompare ? '✓' : '+'} Compare
        </button>
      </div>
    </button>
  )
}
