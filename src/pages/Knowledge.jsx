import { useState } from 'react'
import { GLOSSARY } from '../data/glossary'
import { DRUGS, DRUG_CATEGORIES } from '../data/drugs'

const TOPICS = [
  { id: 'glossary', icon: '📖', label: 'Medical Glossary',  desc: 'Plain-English guide to medical terms and abbreviations' },
  { id: 'drugs',    icon: '💊', label: 'Common Drugs',      desc: 'Common medications — Mandarin names, what they do, where to get them' },
]

export default function Knowledge() {
  const [active, setActive] = useState('glossary')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Knowledge Hub</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Your medical reference library.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Medical glossary, common drug names in English and Mandarin — everything you need to understand and navigate your healthcare.
          </p>
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-b border-ink-quaternary bg-white sticky top-14 z-30 overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-5 flex gap-0 min-w-max sm:min-w-0 sm:flex-wrap">
          {TOPICS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-[13px] font-medium border-b-2 whitespace-nowrap transition-colors ${
                active === t.id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-ink-secondary hover:text-ink'
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="mb-6">
          <h2 className="text-[20px] font-bold text-ink">{topic.icon} {topic.label}</h2>
          <p className="text-ink-secondary text-[13px] mt-0.5">{topic.desc}</p>
        </div>

        {active === 'glossary' && <GlossarySection />}
        {active === 'drugs'    && <DrugsSection />}
      </div>
    </div>
  )
}

/* ─── Medical Glossary ───────────────────────────────────────────── */

function GlossarySection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')

  const categories = ['all', ...Array.from(new Set(GLOSSARY.map(g => g.category)))]
  const catLabel = {
    all: 'All',
    hospital: 'Hospital Settings',
    insurance: 'Insurance',
    procedure: 'Procedures',
    drug: 'Medications',
    admin: 'Admin & Billing',
    financial: 'Financial Aid',
  }

  const filtered = GLOSSARY.filter(g => {
    const matchCat = cat === 'all' || g.category === cat
    const q = search.toLowerCase()
    const matchSearch = !q || g.term.toLowerCase().includes(q) || g.full?.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search terms… (e.g. ICU, deductible, LOS)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
        />
        <div className="flex flex-wrap gap-1.5">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
                cat === c ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
              }`}>
              {catLabel[c] || c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-ink-tertiary text-[12px]">{filtered.length} term{filtered.length !== 1 ? 's' : ''}</p>

      <div className="space-y-2">
        {filtered.map((g, i) => (
          <div key={i} className="border border-ink-quaternary rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-bold text-ink text-[15px]">{g.term}</span>
                  {g.full && <span className="text-ink-secondary text-[12px]">{g.full}</span>}
                  <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{g.category}</span>
                </div>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{g.definition}</p>
                {g.tip && (
                  <div className="mt-2 bg-brand/5 border border-brand/20 rounded-lg px-3 py-2">
                    <p className="text-brand text-[12px] leading-relaxed">💡 {g.tip}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No terms match your search.</p>
        )}
      </div>
    </div>
  )
}

/* ─── Common Drugs & Medicines ───────────────────────────────────── */

function DrugsSection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)
  const [rxFilter, setRxFilter] = useState('all')

  const filtered = DRUGS.filter(d => {
    const matchCat = cat === 'all' || d.category === cat
    const matchRx = rxFilter === 'all' || (rxFilter === 'otc' && !d.prescription) || (rxFilter === 'rx' && d.prescription)
    const q = search.toLowerCase()
    const matchSearch = !q ||
      d.name.toLowerCase().includes(q) ||
      d.mandarin.includes(q) ||
      d.mandarinCommon.includes(q) ||
      d.pinyin.toLowerCase().includes(q) ||
      d.what.toLowerCase().includes(q) ||
      d.commonBrands.some(b => b.toLowerCase().includes(q))
    return matchCat && matchRx && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-[13px] text-amber-900">
        ⚕️ <strong>Medical disclaimer:</strong> This reference is for general awareness only. Always consult a qualified doctor or pharmacist before taking any medication. Do not self-diagnose or self-medicate for serious conditions.
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-3">
        <input
          type="search"
          placeholder="Search by name, Mandarin, brand, or use… (e.g. Panadol, 退烧, antibiotic)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
        />
        <div className="flex flex-wrap gap-2">
          <div className="flex rounded-xl border border-ink-quaternary overflow-hidden text-[12px]">
            {[['all', 'All'], ['otc', 'OTC (No Rx)'], ['rx', 'Prescription']].map(([val, label]) => (
              <button key={val} onClick={() => setRxFilter(val)}
                className={`px-3 py-1.5 font-medium transition-colors ${rxFilter === val ? 'bg-ink text-white' : 'bg-white text-ink-secondary hover:bg-surface-secondary'}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {DRUG_CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
                  cat === c.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-ink-tertiary text-[12px]">{filtered.length} medicine{filtered.length !== 1 ? 's' : ''}</p>

      <div className="space-y-2">
        {filtered.map(d => {
          const isOpen = open === d.id
          return (
            <div key={d.id} className="border border-ink-quaternary rounded-xl overflow-hidden hover:border-brand/40 transition-colors">
              <button
                className="w-full flex items-start justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpen(isOpen ? null : d.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="font-bold text-ink text-[14px]">{d.name}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${d.prescription ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {d.prescription ? 'Rx Required' : 'OTC'}
                    </span>
                    {d.emergency && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Emergency Use</span>
                    )}
                    <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{d.categoryLabel}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-[15px] font-medium text-ink">{d.mandarin}</span>
                    <span className="text-[12px] text-ink-tertiary">{d.pinyin}</span>
                    <span className="text-[12px] text-ink-secondary">{d.mandarinCommon}</span>
                  </div>
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform mt-1 ml-3 ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 border-t border-ink-quaternary pt-4 space-y-4">
                  {d.emergency && d.emergencyNote && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-red-900 text-[12px] mb-0.5">🚨 Emergency Use</p>
                      <p className="text-red-800 text-[12px] leading-relaxed">{d.emergencyNote}</p>
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">What It Does</p>
                    <p className="text-ink-secondary text-[13px] leading-relaxed">{d.what}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">Common Brands in Malaysia</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.commonBrands.map(b => (
                          <span key={b} className="bg-surface-secondary text-ink-secondary text-[12px] px-2.5 py-1 rounded-full border border-ink-quaternary">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">Where to Get</p>
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{d.whereToGet}</p>
                    </div>
                  </div>

                  {d.dose && (
                    <div className="bg-brand/5 border border-brand/15 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-brand text-[12px] mb-0.5">💊 Typical Dose</p>
                      <p className="text-ink-secondary text-[12px] leading-relaxed">{d.dose}</p>
                    </div>
                  )}

                  {d.notes && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-amber-900 text-[12px] mb-0.5">⚠ Important Notes</p>
                      <p className="text-amber-800 text-[12px] leading-relaxed">{d.notes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No medicines match your search.</p>
        )}
      </div>
    </div>
  )
}
