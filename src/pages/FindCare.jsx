import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ALL_HOSPITALS, ALL_STATES } from '../data/index'
import HospitalModal from '../components/HospitalModal'
import { SPECIALTIES_REFERENCE } from '../data/specialties-reference'
import { VERIFY_GUIDE } from '../data/verify-guide'

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
  const [view, setView] = useState('hospitals')
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

          {/* View switcher */}
          <div className="flex gap-1 mt-4 mb-0">
            {[
              { v: 'hospitals',   icon: '🏥', label: 'Find Hospitals' },
              { v: 'specialties', icon: '⚕️', label: 'Specialties Guide' },
              { v: 'verify',      icon: '✅', label: 'Verify Facilities' },
            ].map(({ v, icon, label }) => (
              <button key={v} onClick={() => setView(v)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12px] font-semibold border transition-colors ${
                  view === v
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}>
                <span>{icon}</span>{label}
              </button>
            ))}
          </div>

          {/* Filters */}
          {view === 'hospitals' && <div className="flex flex-wrap items-center gap-3 mt-4">
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
          </div>}
        </div>
      </div>

      {view === 'hospitals' && (
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
      )}

      {view === 'hospitals' && selected && <HospitalModal hospital={selected} onClose={() => setSelected(null)} />}

      {view === 'specialties' && (
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <SpecialtiesSection />
        </div>
      )}
      {view === 'verify' && (
        <div className="max-w-[1200px] mx-auto px-5 py-8">
          <VerifySection />
        </div>
      )}
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

/* ─── Specialties Guide ──────────────────────────────────────────── */

function SpecialtiesSection() {
  const [search, setSearch] = useState('')
  const [openSpec, setOpenSpec] = useState(null)

  const filtered = SPECIALTIES_REFERENCE.filter(s => {
    const q = search.toLowerCase()
    return !q || s.name.toLowerCase().includes(q) || s.description?.toLowerCase().includes(q)
  })

  return (
    <div className="space-y-5">
      <p className="text-ink-secondary text-[14px] max-w-[640px]">
        22 medical specialties — when to see each specialist, what they do, top centres in Malaysia, and what to expect.
      </p>

      <input
        type="search"
        placeholder="Search specialties… (e.g. heart, cancer, eye)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full sm:max-w-sm border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
      />

      <div className="space-y-2">
        {filtered.map(spec => {
          const isOpen = openSpec === spec.id
          return (
            <div key={spec.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpenSpec(isOpen ? null : spec.id)}>
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">{spec.icon}</span>
                  <div>
                    <p className="font-semibold text-ink text-[14px]">{spec.name}</p>
                    <p className="text-ink-tertiary text-[12px] mt-0.5 line-clamp-1 max-w-[480px]">{spec.description?.substring(0, 85)}…</p>
                  </div>
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ml-3 ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 border-t border-ink-quaternary pt-4 space-y-5">
                  {spec.emergencyNote && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-red-900 text-[12px] mb-0.5">🚨 Emergency</p>
                      <p className="text-red-800 text-[12px] leading-relaxed">{spec.emergencyNote}</p>
                    </div>
                  )}

                  <p className="text-ink-secondary text-[13px] leading-relaxed">{spec.description}</p>

                  {spec.symptoms?.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-2">When to See This Specialist</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {spec.symptoms.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                            <span className="text-brand mt-0.5 flex-shrink-0">•</span>{s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {spec.commonProcedures?.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-2">Common Procedures / Investigations</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.commonProcedures.map((p, i) => (
                          <span key={i} className="bg-surface-secondary text-ink-secondary text-[11px] px-2.5 py-1 rounded-full border border-ink-quaternary">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {spec.topPublicCentres?.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-2">🏥 Top Public Centres</h5>
                        <div className="space-y-1">
                          {spec.topPublicCentres.map((c, i) => (
                            <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                              <span className="text-brand mt-0.5 flex-shrink-0">✓</span>{c}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {spec.topPrivateCentres?.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-2">🏢 Top Private Centres</h5>
                        <div className="space-y-1">
                          {spec.topPrivateCentres.map((c, i) => (
                            <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                              <span className="text-ink-tertiary mt-0.5 flex-shrink-0">›</span>{c}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {spec.notes && (
                    <div className="bg-surface-secondary rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-ink text-[12px] mb-0.5">ℹ️ Notes</p>
                      <p className="text-ink-secondary text-[12px] leading-relaxed">{spec.notes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No specialties match your search.</p>
        )}
      </div>
    </div>
  )
}

/* ─── Verify Facilities ──────────────────────────────────────────── */

function VerifySection() {
  const [openFac, setOpenFac] = useState(null)
  const facilities = VERIFY_GUIDE.filter(g => !g.isMasterTip)
  const masterTip = VERIFY_GUIDE.find(g => g.isMasterTip)

  return (
    <div className="space-y-5">
      {masterTip && (
        <div className="bg-brand-light border border-brand/20 rounded-2xl p-4 text-[13px] text-brand leading-relaxed">
          🌐 <strong>Universal tip:</strong> {masterTip.content}
        </div>
      )}

      <p className="text-ink-secondary text-[14px]">
        How to verify any healthcare facility in Malaysia — from nursing homes to dialysis centres to dental clinics.
      </p>

      <div className="space-y-2">
        {facilities.map(fac => {
          const isOpen = openFac === fac.id
          return (
            <div key={fac.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpenFac(isOpen ? null : fac.id)}>
                <div>
                  <span className="font-semibold text-ink text-[14px]">{fac.title}</span>
                  {fac.titleZH && <span className="text-ink-tertiary text-[12px] ml-2">{fac.titleZH}</span>}
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {isOpen && (
                <div className="px-4 pb-5 space-y-4 border-t border-ink-quaternary pt-4">
                  {fac.why && <p className="text-ink-secondary text-[13px] leading-relaxed">{fac.why}</p>}

                  {fac.howToVerify?.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wider mb-2">How to Verify</h5>
                      <div className="space-y-1.5">
                        {fac.howToVerify.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                            <span className="text-brand mt-0.5 flex-shrink-0">✓</span>{s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {fac.redFlags?.length > 0 && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                      <h5 className="font-semibold text-red-900 text-[12px] uppercase tracking-wider mb-2">🚩 Red Flags</h5>
                      <div className="space-y-1">
                        {fac.redFlags.map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12px] text-red-800">
                            <span className="mt-0.5 flex-shrink-0">×</span>{f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {fac.minimumStandards?.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-ink text-[12px] uppercase tracking-wider mb-2">Minimum Standards Required by Law</h5>
                      <div className="space-y-1">
                        {fac.minimumStandards.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                            <span className="text-emerald-600 mt-0.5 flex-shrink-0">✓</span>{s}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {fac.complaintChannel && (
                    <p className="text-[12px] text-ink-secondary bg-surface-secondary rounded-xl p-3">
                      <span className="font-medium text-ink">Complaint channel: </span>{fac.complaintChannel}
                    </p>
                  )}

                  {fac.subsidizedOptions && (
                    <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-[12px] text-green-800">
                      💚 <strong>Subsidised options:</strong> {fac.subsidizedOptions}
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
