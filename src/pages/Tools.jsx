import { useState, useMemo } from 'react'
import { COST_REFERENCE } from '../data/cost-reference'
import { INSURANCE_PANELS } from '../data/insurance-panels'
import { ALL_HOSPITALS } from '../data/index'

const TOPICS = [
  { id: 'costs',       icon: '💰', label: 'Cost Reference',    desc: 'Procedure costs across public, FPP and private' },
  { id: 'calculators', icon: '🧮', label: 'Calculators',       desc: 'BMI, LOG room check, procedure costs & FPP savings' },
  { id: 'panel',       icon: '🏦', label: 'Panel Lookup',      desc: 'Find which insurers panel your hospital — and what LOG limits apply' },
]

export default function Tools() {
  const [active, setActive] = useState('costs')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Healthcare Tools</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Cost reference, calculators & insurance panel lookup.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Estimate procedure costs, check your insurance LOG coverage, calculate BMI, and find out which insurers panel your hospital.
          </p>
        </div>
      </div>

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

      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="mb-6">
          <h2 className="text-[20px] font-bold text-ink">{topic.icon} {topic.label}</h2>
          <p className="text-ink-secondary text-[13px] mt-0.5">{topic.desc}</p>
        </div>
        {active === 'costs'       && <CostsSection />}
        {active === 'calculators' && <CalculatorsSection />}
        {active === 'panel'       && <PanelLookupSection />}
      </div>
    </div>
  )
}

/* ─── Cost Reference ────────────────────────────────────────────── */

function CostsSection() {
  const [openCat, setOpenCat] = useState(null)
  const cats = COST_REFERENCE?.categories || []

  return (
    <div className="space-y-6">
      <div>
        <p className="text-[13px] text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 leading-relaxed">
          ⚠ {COST_REFERENCE?.disclaimer}
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'Public (Subsidised)', cls: 'bg-green-50 text-green-700 border-green-200' },
          { label: 'Public FPP', cls: 'bg-teal-50 text-teal-700 border-teal-200' },
          { label: 'Private Mid-tier', cls: 'bg-blue-50 text-blue-700 border-blue-200' },
          { label: 'Private Premium', cls: 'bg-purple-50 text-purple-700 border-purple-200' },
        ].map(({ label, cls }) => (
          <span key={label} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cls}`}>{label}</span>
        ))}
      </div>

      {/* Categories */}
      <div className="space-y-2">
        {cats.map(cat => {
          const isOpen = openCat === cat.id
          return (
            <div key={cat.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
              <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpenCat(isOpen ? null : cat.id)}>
                <div>
                  <span className="font-semibold text-ink text-[14px]">{cat.title}</span>
                  {cat.titleZH && <span className="text-ink-tertiary text-[12px] ml-2">{cat.titleZH}</span>}
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {isOpen && (
                <div className="border-t border-ink-quaternary overflow-x-auto">
                  <table className="w-full text-[12px] min-w-[600px]">
                    <thead>
                      <tr className="bg-surface-secondary">
                        <th className="text-left px-4 py-2.5 font-semibold text-ink-secondary">Procedure</th>
                        <th className="text-left px-3 py-2.5 font-semibold text-green-700">Public</th>
                        <th className="text-left px-3 py-2.5 font-semibold text-teal-700">Public FPP</th>
                        <th className="text-left px-3 py-2.5 font-semibold text-blue-700">Private Mid</th>
                        <th className="text-left px-3 py-2.5 font-semibold text-purple-700">Private Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(cat.procedures || []).map((p, pi) => (
                        <>
                          <tr key={pi} className="border-t border-ink-quaternary">
                            <td className="px-4 py-2.5 font-medium text-ink">{p.name}
                              {p.nameZH && <span className="block text-ink-tertiary font-normal text-[11px]">{p.nameZH}</span>}
                            </td>
                            <td className="px-3 py-2.5 text-green-700">{p.publicCost || '—'}</td>
                            <td className="px-3 py-2.5 text-teal-700">{p.publicFPP || '—'}</td>
                            <td className="px-3 py-2.5 text-blue-700">{p.privateMid || '—'}</td>
                            <td className="px-3 py-2.5 text-purple-700">{p.privatePremium || '—'}</td>
                          </tr>
                          {p.notes && (
                            <tr key={`${pi}-note`} className="bg-surface-secondary">
                              <td colSpan={5} className="px-4 py-2 text-[11px] text-ink-secondary italic">
                                💡 {p.notes}
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Calculators ────────────────────────────────────────────────── */

const PROCEDURE_COSTS = [
  { label: 'Appendectomy (open)', public: [800, 1500], fpp: [2500, 4000], private: [8000, 15000] },
  { label: 'Appendectomy (laparoscopic)', public: [1200, 2000], fpp: [3500, 6000], private: [12000, 20000] },
  { label: 'Caesarean Section (C-Section)', public: [500, 1000], fpp: [3000, 5000], private: [8000, 15000] },
  { label: 'Normal Delivery', public: [200, 600], fpp: [2000, 3500], private: [4000, 8000] },
  { label: 'Hip Replacement (THR)', public: [2000, 5000], fpp: [8000, 15000], private: [25000, 50000] },
  { label: 'Knee Replacement (TKR)', public: [2000, 5000], fpp: [8000, 15000], private: [22000, 45000] },
  { label: 'Coronary Angioplasty (PCI + 1 stent)', public: [3000, 8000], fpp: [15000, 25000], private: [25000, 50000] },
  { label: 'Coronary Bypass (CABG)', public: [5000, 12000], fpp: [25000, 40000], private: [60000, 120000] },
  { label: 'Cholecystectomy (gallbladder removal)', public: [800, 2000], fpp: [3000, 5000], private: [8000, 15000] },
  { label: 'Cataract Surgery (per eye)', public: [200, 500], fpp: [1500, 3000], private: [3000, 8000] },
  { label: 'Hernia Repair', public: [600, 1500], fpp: [2500, 4500], private: [6000, 12000] },
  { label: 'Colonoscopy', public: [200, 500], fpp: [800, 1500], private: [1500, 3500] },
  { label: 'Dialysis (per session)', public: [15, 50], fpp: [120, 200], private: [200, 350] },
  { label: 'MRI Brain', public: [100, 300], fpp: [400, 800], private: [800, 2000] },
  { label: 'CT Abdomen', public: [80, 200], fpp: [300, 600], private: [600, 1400] },
]

const HOSPITAL_ROOM_RATES = [
  { label: 'Government Ward (6-bed)', rate: [5, 25], type: 'public' },
  { label: 'Government FPP Room', rate: [180, 350], type: 'fpp' },
  { label: 'Private Hospital Standard (1-bed)', rate: [200, 400], type: 'private' },
  { label: 'Private Hospital Superior', rate: [350, 600], type: 'private' },
  { label: 'Private Hospital Suite (Gleneagles, Pantai KL)', rate: [600, 1200], type: 'private' },
  { label: 'Academic Hospital (UMSC, UKMSC)', rate: [180, 380], type: 'private' },
]

function CalculatorsSection() {
  return (
    <div className="space-y-10 max-w-[820px]">
      <BmiCalculator />
      <LogRoomRateCheck />
      <ProcedureCostCalculator />
      <FppSavingsCalculator />
    </div>
  )
}

function CalcCard({ title, icon, desc, children }) {
  return (
    <div className="border border-ink-quaternary rounded-2xl overflow-hidden">
      <div className="bg-surface-secondary border-b border-ink-quaternary px-5 py-4">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xl">{icon}</span>
          <h3 className="font-bold text-ink text-[16px]">{title}</h3>
        </div>
        {desc && <p className="text-ink-secondary text-[13px] mt-0.5">{desc}</p>}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const bmi = height && weight ? (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)) : null
  const rounded = bmi ? Math.round(bmi * 10) / 10 : null

  const getCategory = b => {
    if (b < 18.5) return { label: 'Underweight', color: '#0891b2', risk: 'Risk of nutritional deficiency and osteoporosis.' }
    if (b < 23.0) return { label: 'Normal weight', color: '#16a34a', risk: 'Healthy range for Asians. Maintain with balanced diet and exercise.' }
    if (b < 25.0) return { label: 'Overweight (At Risk)', color: '#d97706', risk: 'Increased risk of diabetes, hypertension, and heart disease. Lifestyle review recommended.' }
    if (b < 30.0) return { label: 'Obese (Class I)', color: '#ef4444', risk: 'High risk. Blood pressure, blood sugar, and cholesterol screening recommended. Seek medical advice.' }
    return { label: 'Obese (Class II)', color: '#dc2626', risk: 'Very high risk. Medical review strongly recommended. Associated with diabetes, heart disease, sleep apnoea, and joint problems.' }
  }

  const cat = rounded ? getCategory(rounded) : null

  return (
    <CalcCard icon="⚖️" title="BMI Calculator" desc="Uses WHO Asian-Pacific cut-offs (lower thresholds than Western standards — Asians develop metabolic risk at lower BMI).">
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">Height (cm)</label>
          <input type="number" placeholder="e.g. 168" value={height} onChange={e => setHeight(e.target.value)}
            className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand" />
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">Weight (kg)</label>
          <input type="number" placeholder="e.g. 72" value={weight} onChange={e => setWeight(e.target.value)}
            className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand" />
        </div>
      </div>

      {rounded && cat && (
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: cat.color }}>
          <div className="px-5 py-4" style={{ background: `${cat.color}12` }}>
            <div className="flex items-baseline gap-3">
              <span className="text-[40px] font-bold" style={{ color: cat.color }}>{rounded}</span>
              <span className="text-[14px] text-ink-secondary">BMI</span>
            </div>
            <p className="font-bold text-[16px] mt-0.5" style={{ color: cat.color }}>{cat.label}</p>
          </div>
          <div className="px-5 py-3 bg-white">
            <p className="text-ink-secondary text-[13px] leading-relaxed">{cat.risk}</p>
          </div>
          <div className="px-5 py-3 border-t border-ink-quaternary bg-surface-secondary">
            <p className="text-[11px] text-ink-tertiary">Asian cut-offs: Normal 18.5–22.9 · Overweight ≥ 23.0 · Obese ≥ 27.5 (Class I ≥ 25.0 by WHO standard)</p>
          </div>
        </div>
      )}
      {!rounded && (
        <div className="rounded-xl border border-ink-quaternary bg-surface-secondary px-4 py-3 text-center text-ink-tertiary text-[13px]">Enter height and weight above to calculate</div>
      )}
    </CalcCard>
  )
}

function LogRoomRateCheck() {
  const [logLimit, setLogLimit] = useState('')
  const [days, setDays] = useState('5')
  const [selected, setSelected] = useState(null)

  const room = HOSPITAL_ROOM_RATES[selected] || null
  const log = parseFloat(logLimit) || 0
  const numDays = parseInt(days) || 5

  const minRate = room?.rate[0] || 0
  const maxRate = room?.rate[1] || 0
  const midRate = room ? Math.round((minRate + maxRate) / 2) : 0

  const covered = log >= minRate
  const gap = Math.max(0, midRate - log)
  const totalGap = gap * numDays

  return (
    <CalcCard icon="🛡️" title="Insurance LOG Room Rate Check" desc="Check if your daily room LOG (Letter of Guarantee) limit covers your chosen hospital's room rate. Gaps are your personal liability.">
      <div className="space-y-4 mb-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">Your daily room LOG limit (RM)</label>
            <input type="number" placeholder="e.g. 200" value={logLimit} onChange={e => setLogLimit(e.target.value)}
              className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand" />
            <p className="text-[11px] text-ink-tertiary mt-1">Find this in your policy schedule or call your insurer.</p>
          </div>
          <div>
            <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">Estimated stay (days)</label>
            <input type="number" placeholder="e.g. 5" value={days} onChange={e => setDays(e.target.value)}
              className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[14px] focus:outline-none focus:border-brand" />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Hospital room type</label>
          <div className="space-y-1.5">
            {HOSPITAL_ROOM_RATES.map((r, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className={`w-full text-left px-4 py-2.5 rounded-xl border text-[13px] transition-colors ${
                  selected === i ? 'border-brand bg-brand/5 text-ink' : 'border-ink-quaternary hover:border-brand/40 text-ink-secondary'
                }`}>
                <span className="font-medium">{r.label}</span>
                <span className="ml-2 text-ink-tertiary">RM {r.rate[0]}–{r.rate[1]}/night</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {log > 0 && room && (
        <div className={`rounded-2xl border overflow-hidden ${covered ? 'border-emerald-200' : 'border-red-200'}`}>
          <div className={`px-5 py-4 ${covered ? 'bg-emerald-50' : 'bg-red-50'}`}>
            <p className={`font-bold text-[16px] mb-1 ${covered ? 'text-emerald-800' : 'text-red-800'}`}>
              {covered ? '✓ Partially or fully covered' : '⚠ Gap risk — not fully covered'}
            </p>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div className="bg-white rounded-xl p-3 text-center">
                <p className="text-[11px] text-ink-tertiary mb-0.5">LOG limit/day</p>
                <p className="font-bold text-ink text-[16px]">RM {log}</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <p className="text-[11px] text-ink-tertiary mb-0.5">Typical room rate</p>
                <p className="font-bold text-ink text-[16px]">RM {midRate}</p>
              </div>
              <div className={`rounded-xl p-3 text-center ${gap > 0 ? 'bg-red-100' : 'bg-emerald-100'}`}>
                <p className="text-[11px] text-ink-tertiary mb-0.5">Gap/day</p>
                <p className={`font-bold text-[16px] ${gap > 0 ? 'text-red-700' : 'text-emerald-700'}`}>RM {gap}</p>
              </div>
            </div>
            {gap > 0 && (
              <div className="mt-3 bg-white rounded-xl px-4 py-3">
                <p className="text-[13px] text-red-800">
                  <strong>{numDays}-day stay gap estimate:</strong> RM {totalGap.toLocaleString()} out of pocket for room alone. Upgrade your plan before admission — not after.
                </p>
              </div>
            )}
          </div>
          <div className="px-5 py-3 bg-white border-t border-ink-quaternary">
            <p className="text-[11px] text-ink-tertiary">Room rates are estimates. Always confirm with the hospital directly. LOG gap applies to the room rate component only — other charges (surgeon, anaesthesia, tests) are governed by separate limits.</p>
          </div>
        </div>
      )}
      {(!log || !room) && (
        <div className="rounded-xl border border-ink-quaternary bg-surface-secondary px-4 py-3 text-center text-ink-tertiary text-[13px]">Enter your LOG limit and select a room type above</div>
      )}
    </CalcCard>
  )
}

function ProcedureCostCalculator() {
  const [selected, setSelected] = useState(null)
  const proc = selected !== null ? PROCEDURE_COSTS[selected] : null

  const fmtRange = ([lo, hi]) => `RM ${lo.toLocaleString()} – ${hi.toLocaleString()}`

  return (
    <CalcCard icon="💰" title="Public vs Private Procedure Cost" desc="Estimated cost ranges for common procedures. Public = subsidised ward. FPP = Full Paying Patient at government hospital. Private = private hospital.">
      <div className="mb-5">
        <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Select a procedure</label>
        <select value={selected ?? ''} onChange={e => setSelected(e.target.value === '' ? null : parseInt(e.target.value))}
          className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand appearance-none bg-white">
          <option value="">Choose a procedure…</option>
          {PROCEDURE_COSTS.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
        </select>
      </div>

      {proc ? (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
              <p className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide mb-1">Public Hospital</p>
              <p className="font-bold text-emerald-800 text-[18px]">{fmtRange(proc.public)}</p>
              <p className="text-[11px] text-emerald-700 mt-1">Subsidised ward (with referral)</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-center">
              <p className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide mb-1">FPP (Govt Hospital)</p>
              <p className="font-bold text-blue-800 text-[18px]">{fmtRange(proc.fpp)}</p>
              <p className="text-[11px] text-blue-700 mt-1">Full Paying Patient — private room</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
              <p className="text-[11px] font-semibold text-amber-700 uppercase tracking-wide mb-1">Private Hospital</p>
              <p className="font-bold text-amber-800 text-[18px]">{fmtRange(proc.private)}</p>
              <p className="text-[11px] text-amber-700 mt-1">Private hospital standard room</p>
            </div>
          </div>
          <div className="bg-surface-secondary rounded-xl px-4 py-3">
            <p className="text-[12px] text-ink-secondary leading-relaxed">
              Choosing <strong>FPP over private</strong> saves approximately <strong className="text-brand">RM {Math.round((proc.private[0] + proc.private[1])/2 - (proc.fpp[0] + proc.fpp[1])/2).toLocaleString()}</strong> on average for this procedure.
            </p>
            <p className="text-[11px] text-ink-tertiary mt-1">Estimates only. Actual costs vary by hospital, surgeon, complications, and insurance coverage.</p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-ink-quaternary bg-surface-secondary px-4 py-3 text-center text-ink-tertiary text-[13px]">Select a procedure above to see cost comparison</div>
      )}
    </CalcCard>
  )
}

function FppSavingsCalculator() {
  const [selected, setSelected] = useState(null)
  const [insured, setInsured] = useState('yes')
  const proc = selected !== null ? PROCEDURE_COSTS[selected] : null

  const fmtRange = ([lo, hi]) => `RM ${lo.toLocaleString()} – ${hi.toLocaleString()}`
  const midVal = arr => Math.round((arr[0] + arr[1]) / 2)

  const privateMid = proc ? midVal(proc.private) : 0
  const fppMid = proc ? midVal(proc.fpp) : 0
  const saving = privateMid - fppMid
  const pct = privateMid ? Math.round(saving / privateMid * 100) : 0

  return (
    <CalcCard icon="✓" title="FPP Savings Estimator" desc="How much you save by choosing the Full Paying Patient (FPP) scheme at a government hospital instead of a private hospital.">
      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Procedure</label>
          <select value={selected ?? ''} onChange={e => setSelected(e.target.value === '' ? null : parseInt(e.target.value))}
            className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand appearance-none bg-white">
            <option value="">Choose a procedure…</option>
            {PROCEDURE_COSTS.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Do you have insurance?</label>
          <div className="flex rounded-xl border border-ink-quaternary overflow-hidden text-[13px]">
            {[['yes', 'Yes'], ['no', 'No']].map(([val, label]) => (
              <button key={val} onClick={() => setInsured(val)}
                className={`flex-1 px-4 py-2.5 font-medium transition-colors ${insured === val ? 'bg-ink text-white' : 'bg-white text-ink-secondary hover:bg-surface-secondary'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {proc ? (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-[11px] font-semibold text-amber-700 uppercase mb-1">Private Hospital Cost</p>
              <p className="font-bold text-amber-800 text-[18px]">{fmtRange(proc.private)}</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <p className="text-[11px] font-semibold text-emerald-700 uppercase mb-1">FPP at Govt Hospital</p>
              <p className="font-bold text-emerald-800 text-[18px]">{fmtRange(proc.fpp)}</p>
            </div>
          </div>

          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-5 text-center">
            <p className="text-[13px] text-ink-secondary mb-1">Estimated average savings with FPP</p>
            <p className="font-bold text-brand text-[32px]">RM {saving.toLocaleString()}</p>
            <p className="text-ink-secondary text-[14px]">{pct}% less than private hospital</p>
            {insured === 'yes' && (
              <p className="mt-2 text-[12px] text-ink-tertiary">With insurance, your insurer pays the FPP rate — your out-of-pocket may be near zero if your plan covers it. Confirm FPP is on your insurer's panel list.</p>
            )}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <p className="text-[12px] text-emerald-800 leading-relaxed">
              <strong>FPP tip:</strong> FPP rooms are at government hospitals (HKL, HTAR, Hospital Selayang, etc.) — same doctors, private room, air-conditioned. Apply at the FPP unit with your IC. Rates are not publicly listed — ask for a written estimate.
            </p>
          </div>
          <p className="text-[11px] text-ink-tertiary">All figures are estimates based on typical Malaysian hospital charges (2024–2025). Actual costs vary by hospital, surgeon seniority, complications, length of stay, and insurance terms.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-ink-quaternary bg-surface-secondary px-4 py-3 text-center text-ink-tertiary text-[13px]">Select a procedure above to calculate savings</div>
      )}
    </CalcCard>
  )
}

/* ─── Panel Lookup ───────────────────────────────────────────────── */

const INSURER_HOTLINES = {
  'aia':          { hotline: '1300-88-1899', panelUrl: 'https://www.aia.com.my/en/find-a-doctor.html' },
  'prudential':   { hotline: '1300-88-8811', panelUrl: 'https://www.prudential.com.my/panel-hospitals' },
  'great-eastern':{ hotline: '1300-1300-88', panelUrl: 'https://www.greateasternlife.com/my/en/find-a-panel-hospital.html' },
  'allianz':      { hotline: '1300-22-5542', panelUrl: 'https://www.allianz.com.my/life/panel-hospitals' },
  'tokio-marine': { hotline: '1800-88-2022', panelUrl: 'https://www.tokiomarine.com.my' },
  'zurich':       { hotline: '1800-88-6222', panelUrl: 'https://www.zurich.com.my' },
  'sun-life':     { hotline: '1800-88-5055', panelUrl: 'https://www.sunlifemalaysia.com' },
  'etiqa':        { hotline: '1300-13-8888', panelUrl: 'https://www.etiqa.com.my/en/panel-hospital.html' },
  'axa-affin':    { hotline: '1800-88-1311', panelUrl: 'https://www.axaaffin.com.my' },
  'msig':         { hotline: '1800-88-3833', panelUrl: 'https://www.msig.com.my' },
  'tune-protect': { hotline: '1800-22-8863', panelUrl: 'https://www.tuneprotect.com' },
  'bupa':         { hotline: '+603-2050 2200', panelUrl: 'https://www.bupaglobal.com/en/malaysia' },
  'cigna':        { hotline: '+603-7806 2900', panelUrl: 'https://www.cignahealthbenefits.com' },
}

function PanelLookupSection() {
  const [view, setView] = useState('hospital')
  const [query, setQuery] = useState('')
  const [selectedIns, setSelectedIns] = useState(null)

  const insurers = INSURANCE_PANELS?.insurers || []

  // Build reverse map: hospitalId → [insurer names]
  const panelMap = useMemo(() => {
    const map = {}
    insurers.forEach(ins => {
      (ins.cashlessHospitals || []).forEach(hid => {
        if (!map[hid]) map[hid] = []
        map[hid].push(ins.name)
      })
    })
    return map
  }, [insurers])

  // Only private hospitals are relevant for panel lookup
  const privateHospitals = useMemo(() =>
    ALL_HOSPITALS.filter(h => h.sector === 'private'),
  [])

  const filtered = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return privateHospitals.filter(h =>
      h.name.toLowerCase().includes(q) ||
      (h.nameShort || '').toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.state.toLowerCase().includes(q)
    ).slice(0, 12)
  }, [query, privateHospitals])

  const Chevron = ({ open }) => (
    <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${open ? 'rotate-180' : ''}`}
      width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div className="space-y-6 max-w-[820px]">

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px] text-amber-800 leading-relaxed">
        <strong>Important:</strong> Insurance panels change regularly. This lookup uses data from hospital and insurer records but may not reflect the latest panel status. <strong>Always call your insurer's 24h hotline on the day of admission</strong> to confirm panel status and request a Letter of Guarantee (LOG). Do not assume — panels change without notice.
      </div>

      {/* View switcher */}
      <div className="flex flex-wrap gap-2">
        {[
          { v: 'hospital', label: '🏥 Find by Hospital' },
          { v: 'insurer',  label: '🏦 Find by Insurer' },
          { v: 'tips',     label: '💡 Panel Tips' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
      </div>

      {/* ── Find by Hospital ── */}
      {view === 'hospital' && (
        <div className="space-y-4">
          <div>
            <p className="text-ink-secondary text-[13px] mb-3">Search a private hospital to see which insurers have it on their cashless panel.</p>
            <input
              type="search"
              placeholder="Search hospital name, city, or state…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
              autoComplete="off"
            />
          </div>

          {query && filtered.length === 0 && (
            <p className="text-ink-tertiary text-[13px] text-center py-6">No private hospitals match "{query}"</p>
          )}

          {filtered.map(h => {
            const panels = panelMap[h.id] || []
            const panelCount = panels.length
            const hasData = panelCount > 0

            return (
              <div key={h.id} className="border border-ink-quaternary rounded-2xl p-4">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div>
                    <p className="font-bold text-ink text-[14px]">{h.name}</p>
                    <p className="text-ink-tertiary text-[12px]">{h.city}, {h.state} · {h.tier}</p>
                  </div>
                  {hasData ? (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex-shrink-0">
                      {panelCount} insurer{panelCount !== 1 ? 's' : ''} on file
                    </span>
                  ) : (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex-shrink-0">
                      Verify directly
                    </span>
                  )}
                </div>

                {hasData ? (
                  <div className="flex flex-wrap gap-1.5">
                    {panels.map((ins, i) => (
                      <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-brand/8 text-brand border border-brand/20">
                        {ins}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-[12px] text-ink-secondary">
                    This hospital is not in our panel records. Contact each insurer directly using their hotline to confirm — panel hospital lists are updated frequently.
                  </p>
                )}
              </div>
            )
          })}

          {!query && (
            <div className="bg-surface-secondary rounded-2xl p-5 text-center">
              <p className="text-[28px] mb-2">🔍</p>
              <p className="text-ink-secondary text-[13px]">Start typing a hospital name above to see its insurer panel coverage.</p>
              <p className="text-ink-tertiary text-[12px] mt-1">Only private hospitals are shown — public hospitals use a different billing system.</p>
            </div>
          )}
        </div>
      )}

      {/* ── Find by Insurer ── */}
      {view === 'insurer' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px] mb-1">Select an insurer to see their panel size, LOG warnings, and direct links to check their full hospital list.</p>
          {insurers.map(ins => {
            const isOpen = selectedIns === ins.id
            const extra = INSURER_HOTLINES[ins.id] || {}
            const panelCount = (ins.cashlessHospitals || []).length

            return (
              <div key={ins.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setSelectedIns(isOpen ? null : ins.id)}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-ink text-[14px]">{ins.name}</span>
                    {panelCount > 0 && (
                      <span className="text-[10px] font-medium text-ink-tertiary">{panelCount} hospitals on file</span>
                    )}
                    {ins.logLimitWarning && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200">⚠ LOG note</span>
                    )}
                  </div>
                  <Chevron open={isOpen} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 border-t border-ink-quaternary pt-3 space-y-4">

                    {ins.generalNote && (
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{ins.generalNote}</p>
                    )}

                    {ins.tiers?.length > 0 && (
                      <div>
                        <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">Plan tiers</p>
                        <div className="flex flex-wrap gap-1.5">
                          {ins.tiers.map((t, i) => (
                            <span key={i} className="text-[11px] px-2.5 py-1 rounded-full bg-surface-secondary border border-ink-quaternary text-ink-secondary">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {ins.logLimitWarning && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[12px] text-red-800 leading-relaxed">
                        ⚠ <strong>LOG Limit Warning:</strong> {ins.logLimitWarning}
                      </div>
                    )}

                    {ins.preAdmissionWindow && (
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-[12px] text-blue-900">
                        📅 <strong>Pre-Admission Window:</strong> {ins.preAdmissionWindow}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3 pt-1">
                      {extra.hotline && (
                        <a href={`tel:${extra.hotline}`}
                          className="flex items-center gap-1.5 text-[13px] font-semibold text-ink border border-ink-quaternary rounded-xl px-3 py-2 hover:border-brand hover:text-brand transition-colors">
                          📞 {extra.hotline}
                        </a>
                      )}
                      {(extra.panelUrl || ins.website) && (
                        <a href={extra.panelUrl || ins.website} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[13px] font-semibold text-brand border border-brand/30 rounded-xl px-3 py-2 hover:bg-brand hover:text-white transition-colors">
                          Check Panel List →
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ── Tips ── */}
      {view === 'tips' && (
        <div className="space-y-4">
          {[
            {
              title: 'Always call your insurer before admission',
              color: '#dc2626',
              icon: '📞',
              detail: 'Even if a hospital was on your panel last year, call your insurer\'s 24h hotline the day before or day of admission to confirm current panel status and request a LOG (Letter of Guarantee). Panels change without notice — a hospital can be removed from a panel at any time.',
            },
            {
              title: 'Understand your daily room LOG limit',
              color: '#d97706',
              icon: '🛏',
              detail: 'Your LOG limit is the maximum your insurer guarantees per night for room charges. If your limit is RM 200/night and the hospital charges RM 450/night, you personally owe RM 250 every night. On a 5-day stay, that\'s RM 1,250 unexpected expense — just for the room. Use the LOG Room Rate Check calculator (Calculators tab) to estimate your gap.',
            },
            {
              title: 'If your hospital is not on panel',
              color: '#7c3aed',
              icon: '🔄',
              detail: 'You can still be admitted — but you pay the full bill first, then claim reimbursement from your insurer. Keep ALL original receipts and an itemised bill. Submit within 90–180 days (check your policy). Reimbursement for eligible expenses will be paid back minus any non-covered items.',
            },
            {
              title: 'Pre-admission expenses are claimable',
              color: '#0891b2',
              icon: '🗓',
              detail: 'If outpatient specialist visits, scans, or blood tests lead to a hospitalisation within 30–90 days (varies by insurer), those pre-admission bills become claimable. This is one of the most frequently missed claims. Keep every receipt from specialists, labs, and imaging centres — even months before admission.',
            },
            {
              title: 'Panel hospitals vs non-panel hospitals: when to choose non-panel',
              color: '#16a34a',
              icon: '⚖️',
              detail: 'For complex or rare conditions, the best specialist may be at a hospital that is not on your panel. In these cases, the reimbursement route may be worth it — paying out of pocket and reclaiming is better than receiving suboptimal care at a panel hospital. For routine and non-life-threatening treatment, stick to panel where possible.',
            },
            {
              title: 'Check your co-pay and deductible before admission',
              color: '#6366f1',
              icon: '💳',
              detail: 'Some policies require you to pay 10–20% of every bill (co-pay), or to pay a deductible of RM 500–5,000 before insurance kicks in. These apply even at panel hospitals. Know your amounts before admission — ask your insurer or check your Certificate of Insurance.',
            },
          ].map(tip => (
            <div key={tip.title} className="border border-ink-quaternary rounded-2xl p-4" style={{ borderLeft: `3px solid ${tip.color}` }}>
              <div className="flex items-start gap-3">
                <span className="text-[22px] flex-shrink-0">{tip.icon}</span>
                <div>
                  <p className="font-bold text-ink text-[14px] mb-1">{tip.title}</p>
                  <p className="text-ink-secondary text-[13px] leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}
