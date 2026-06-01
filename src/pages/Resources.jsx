import { useState } from 'react'
import { LEGAL_SUPPORT } from '../data/legal-support'
import { EMERGENCY_PROTOCOLS } from '../data/emergency-protocols'
import { NGO_SUPPORT } from '../data/ngo-support'

/* ─── Static sections (unchanged from original) ─────────────────── */

const FINANCIAL_SCHEMES = [
  { q: 'MySalam', a: 'Free critical illness insurance for B40 Malaysians (household income ≤ RM100,000/year). Covers 36 critical illnesses. Automatic — no registration needed. RM 8,000 payout. Check at mysalam.com.my.' },
  { q: 'Peka B40', a: 'Health screening programme for B40 households. Covers cancer screening, cardiovascular risk assessment, eye examination, and more. Check at pekab40.com.my.' },
  { q: 'EPF Account 2 Withdrawal', a: 'Withdraw EPF Account 2 savings for medical expenses for yourself, spouse, parents, children, and in-laws. Apply at i-Akaun.kwsp.gov.my.' },
  { q: 'SOCSO / PERKESO Medical Benefits', a: 'SOCSO contributors are entitled to medical treatment for work-related injuries and occupational diseases. Employment Injury Scheme covers all treatment costs.' },
  { q: 'Zakat Medical Aid', a: 'State religious bodies (LZMA, LZS, MAIWP) provide zakat aid for medical expenses for eligible Muslims. Contact your state Zakat board.' },
]

const INSURANCE_QA = [
  { q: 'What is a panel hospital?', a: 'A panel hospital has a direct billing arrangement with your insurer. You pay only the co-pay or deductible upfront; the insurer settles the rest directly with the hospital.' },
  { q: 'What is a Letter of Guarantee (LOG)?', a: 'A LOG is a guarantee from your insurer to the hospital that they will pay. Most hospitals require a LOG before admission for planned procedures. Call your insurer 24–48 hours before admission.' },
  { q: 'What if my hospital is not on panel?', a: 'You pay upfront and claim reimbursement. Keep all original receipts. Submit within the claim period specified in your policy (usually 90–120 days from discharge).' },
  { q: 'Pre-admission window', a: 'Specialist visits, scans, and lab tests within 30–90 days before admission (varies by insurer) are claimable as pre-admission expenses. Keep every receipt.' },
  { q: 'How to check panel status?', a: "Call your insurer's hotline or check their app. AIA: 1300-88-1899. Prudential: 1800-88-8811. Great Eastern: 1300-1300-88. Allianz: 1800-22-5542." },
]

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Resources</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5">
            Emergency contacts, patient rights, NGO support, financial schemes, and insurance guidance.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-10 space-y-16">
        <EmergencySection />
        <PatientRightsSection />
        <NgoSection />
        <StaticSection icon="💳" title="Government Financial Schemes" items={FINANCIAL_SCHEMES} />
        <StaticSection icon="🏥" title="Insurance Panels — How They Work" items={INSURANCE_QA} />
      </div>
    </div>
  )
}

/* ─── Shared simple accordion ────────────────────────────────────── */

function StaticSection({ icon, title, items }) {
  return (
    <section>
      <SectionHeader icon={icon} title={title} />
      <div className="space-y-3 max-w-[760px]">
        {items.map(({ q, a }) => (
          <div key={q} className="bg-surface-secondary rounded-2xl p-4">
            <p className="font-semibold text-ink text-[14px] mb-1">{q}</p>
            <p className="text-ink-secondary text-[13px] leading-relaxed">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-[20px] font-bold text-ink tracking-tight">{title}</h2>
    </div>
  )
}

/* ─── Emergency ──────────────────────────────────────────────────── */

function EmergencySection() {
  const ep = EMERGENCY_PROTOCOLS

  return (
    <section>
      <SectionHeader icon="🚨" title="Emergency" />
      <div className="space-y-8">

        {/* Hotlines */}
        <div>
          <h3 className="font-bold text-ink text-[15px] mb-3">📞 Emergency Hotlines</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ep.hotlines.map((h, i) => (
              <div key={i} className={`rounded-xl border p-3.5 ${h.number === '999' || h.number === '112' ? 'bg-red-50 border-red-200' : 'bg-white border-ink-quaternary'}`}>
                <p className={`font-semibold text-[13px] ${h.number === '999' || h.number === '112' ? 'text-red-900' : 'text-ink'}`}>{h.name}</p>
                <a href={`tel:${h.number.replace(/[\s\-]/g, '')}`}
                  className={`font-bold text-[18px] hover:underline ${h.number === '999' || h.number === '112' ? 'text-red-600' : 'text-brand'}`}>
                  {h.number}
                </a>
                <p className="text-[11px] text-ink-tertiary mt-0.5">{h.available}</p>
                <p className="text-[12px] text-ink-secondary mt-2 leading-relaxed">{h.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* When to call 999 */}
        {ep.whenToCallAmbulance && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <h3 className="font-bold text-red-900 text-[15px] mb-3">🚑 When to Call 999 Immediately</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {ep.whenToCallAmbulance.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-red-800">
                  <span className="mt-0.5 flex-shrink-0 text-red-500">⚠</span>{item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAST stroke */}
        {ep.strokeProtocol && (
          <div className="border border-amber-200 bg-amber-50 rounded-2xl p-5">
            <h3 className="font-bold text-amber-900 text-[15px] mb-1">🧠 Stroke: Remember FAST</h3>
            <p className="text-amber-800 text-[12px] mb-3">{ep.strokeProtocol.critical}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {ep.strokeProtocol.steps.map(s => (
                <div key={s.letter} className="bg-white rounded-xl p-3 text-center border border-amber-200">
                  <span className="text-[28px] font-black text-amber-600">{s.letter}</span>
                  <p className="font-bold text-ink text-[12px] mt-0.5">{s.word}</p>
                  <p className="text-ink-secondary text-[11px] mt-1 leading-tight">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ep.strokeProtocol.topCentres.map((c, i) => (
                <span key={i} className="bg-white border border-amber-200 rounded-lg px-2 py-1 text-[11px] text-amber-900">{c}</span>
              ))}
            </div>
          </div>
        )}

        {/* Heart attack */}
        {ep.heartAttackProtocol && (
          <div className="border border-red-200 bg-red-50 rounded-2xl p-5">
            <h3 className="font-bold text-red-900 text-[15px] mb-2">❤️ Heart Attack: What to Do</h3>
            <div className="space-y-1.5 mb-3">
              {ep.heartAttackProtocol.steps?.map((step, i) => (
                <div key={i} className="flex items-start gap-2 text-[12px] text-red-800">
                  <span className="font-bold text-red-600 flex-shrink-0 mt-0.5">{i + 1}.</span>{step}
                </div>
              ))}
            </div>
            {ep.heartAttackProtocol.doNot?.length > 0 && (
              <div className="bg-white border border-red-100 rounded-xl p-3">
                <p className="font-semibold text-red-900 text-[12px] mb-1">Do NOT:</p>
                {ep.heartAttackProtocol.doNot.map((d, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-red-700"><span>×</span>{d}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* A&E vs Clinic */}
        {ep.aeVsClinic && (
          <div>
            <h3 className="font-bold text-ink text-[15px] mb-3">🏥 A&E or Clinic? Quick Guide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="font-bold text-red-900 text-[13px] mb-2">Go to A&E immediately:</p>
                {ep.aeVsClinic.goToAE?.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[12px] text-red-800 mb-1">
                    <span className="flex-shrink-0">→</span>{item}
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-bold text-green-900 text-[13px] mb-2">Clinic or GP is fine:</p>
                {ep.aeVsClinic.goToClinic?.map((item, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[12px] text-green-800 mb-1">
                    <span className="flex-shrink-0">→</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Ambulance services */}
        {ep.ambulanceServices && (
          <div>
            <h3 className="font-bold text-ink text-[15px] mb-3">🚑 Ambulance Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ep.ambulanceServices.map((svc, i) => (
                <div key={i} className="border border-ink-quaternary rounded-xl p-3.5">
                  <p className="font-semibold text-ink text-[13px]">{svc.name}</p>
                  {svc.number && <a href={`tel:${svc.number.replace(/[\s\-]/g, '')}`} className="text-brand font-bold text-[15px] hover:underline">{svc.number}</a>}
                  {svc.cost && <p className="text-ink-secondary text-[12px] mt-1">Cost: {svc.cost}</p>}
                  {svc.note && <p className="text-ink-tertiary text-[11px] mt-1 leading-relaxed">{svc.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Patient Rights ─────────────────────────────────────────────── */

function PatientRightsSection() {
  const [openChannel, setOpenChannel] = useState(null)
  const comp = LEGAL_SUPPORT?.complaints || {}
  const legalAid = LEGAL_SUPPORT?.legalAid || []
  const dv = LEGAL_SUPPORT?.domesticViolence

  return (
    <section>
      <SectionHeader icon="⚖️" title="Patient Rights & Complaints" />
      <div className="space-y-8">

        {comp.statute && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-[13px] text-red-900">
            ⚠ <strong>Limitation Period:</strong> {comp.statute}
          </div>
        )}

        <div>
          <h3 className="font-bold text-ink text-[16px] mb-3">Your 12 Patient Rights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(comp.patientRights || []).map((r, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-surface-secondary rounded-xl p-3 text-[13px]">
                <span className="text-brand font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
                <span className="text-ink-secondary leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-ink text-[16px] mb-3">When to File a Complaint</h3>
          <div className="space-y-1.5">
            {(comp.when || []).map((w, i) => (
              <div key={i} className="flex items-start gap-2 text-[13px] text-ink-secondary">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>{w}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-ink text-[16px] mb-3">Step-by-Step Complaint Process</h3>
          <div className="space-y-3">
            {(comp.steps || []).map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-white text-[11px] font-bold mt-0.5">{i + 1}</div>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-ink text-[16px] mb-3">Where to Complain</h3>
          <div className="space-y-2">
            {(comp.channels || []).map(c => {
              const isOpen = openChannel === c.name
              return (
                <div key={c.name} className="border border-ink-quaternary rounded-xl overflow-hidden">
                  <button className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-secondary transition-colors"
                    onClick={() => setOpenChannel(isOpen ? null : c.name)}>
                    <span className="font-semibold text-ink text-[13px]">{c.name}</span>
                    <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 space-y-2 border-t border-ink-quaternary pt-3 text-[13px]">
                      <p><span className="font-medium text-ink">For: </span><span className="text-ink-secondary">{c.for}</span></p>
                      <p><span className="font-medium text-ink">How: </span><span className="text-ink-secondary">{c.how}</span></p>
                      {c.timeline && <p><span className="font-medium text-ink">Timeline: </span><span className="text-ink-secondary">{c.timeline}</span></p>}
                      {c.phone && <a href={`tel:${c.phone.replace(/[^+0-9]/g, '')}`} className="block text-brand hover:underline">📞 {c.phone}</a>}
                      {c.website && <a href={c.website} target="_blank" rel="noopener noreferrer" className="block text-brand hover:underline">🌐 {c.website}</a>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-ink text-[16px] mb-3">Free Legal Aid Organisations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {legalAid.map(org => (
              <div key={org.id} className="bg-surface-secondary rounded-2xl p-4">
                <h4 className="font-semibold text-ink text-[13px] mb-1">{org.name}</h4>
                {org.eligibility && <p className="text-[12px] text-ink-secondary mb-1.5">{org.eligibility}</p>}
                {org.howToApply && <p className="text-[12px] text-ink-secondary mb-2">{org.howToApply}</p>}
                <div className="flex flex-wrap gap-2">
                  {org.phone && <a href={`tel:${org.phone.split('|')[0].replace(/[^+0-9]/g, '')}`} className="text-brand text-[12px] hover:underline">📞 {org.phone.split('|')[0].trim()}</a>}
                  {org.website && <a href={org.website} target="_blank" rel="noopener noreferrer" className="text-brand text-[12px] hover:underline">🌐 Website</a>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {dv && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
            <h3 className="font-bold text-red-900 text-[15px] mb-3">⚠ Domestic Violence Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(dv.emergencyContacts || []).map(c => (
                <div key={c.name} className="bg-white rounded-xl p-3">
                  <p className="font-semibold text-[13px] text-ink">{c.name}</p>
                  <a href={`tel:${c.number}`} className="block text-brand font-bold text-[15px] my-0.5">📞 {c.number}</a>
                  <p className="text-[11px] text-ink-tertiary">{c.available}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── NGO & Support ──────────────────────────────────────────────── */

function NgoSection() {
  const [openOrg, setOpenOrg] = useState(null)

  const sectionConfig = [
    { key: 'cancer',       label: '🎗️ Cancer Support',         color: '#dc2626' },
    { key: 'heart',        label: '❤️ Heart & Cardiac',         color: '#e11d48' },
    { key: 'kidney',       label: '🫘 Kidney & Dialysis',       color: '#7c3aed' },
    { key: 'mentalHealth', label: '🧘 Mental Health',            color: '#0891b2' },
    { key: 'disability',   label: '♿ Disability & Rehab',      color: '#16a34a' },
    { key: 'financial',    label: '💰 Financial Assistance',     color: '#d97706' },
    { key: 'elderly',      label: '👴 Elderly & Geriatric',     color: '#64748b' },
    { key: 'general',      label: '🏥 General Patient Support', color: '#0d9488' },
  ]

  const availableSections = sectionConfig.filter(s => NGO_SUPPORT[s.key]?.length > 0)

  return (
    <section>
      <SectionHeader icon="🤝" title="NGO & Patient Support" />
      <p className="text-ink-secondary text-[14px] mb-8 max-w-[640px]">
        Free and subsidised support from NGOs, foundations, and welfare organisations across Malaysia. Ask your hospital social worker for referrals.
      </p>
      <div className="space-y-8">
        {availableSections.map(({ key, label, color }) => {
          const orgs = NGO_SUPPORT[key] || []
          return (
            <div key={key}>
              <h3 className="font-bold text-ink text-[15px] mb-3" style={{ borderLeft: `3px solid ${color}`, paddingLeft: '10px' }}>{label}</h3>
              <div className="space-y-2">
                {orgs.map((org, i) => {
                  const orgKey = `${key}-${i}`
                  const isOpen = openOrg === orgKey
                  return (
                    <div key={i} className="border border-ink-quaternary rounded-xl overflow-hidden">
                      <button className="w-full flex items-start justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                        onClick={() => setOpenOrg(isOpen ? null : orgKey)}>
                        <div>
                          <p className="font-semibold text-ink text-[13px]">{org.name}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-0.5">
                            {org.phone && (
                              <a href={`tel:${org.phone.replace(/[\s\-]/g, '')}`} onClick={e => e.stopPropagation()}
                                className="text-brand text-[12px] font-medium hover:underline">{org.phone}</a>
                            )}
                            {org.website && (
                              <a href={org.website} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                                className="text-brand text-[12px] hover:underline truncate max-w-[200px]">
                                {org.website.replace('https://www.', '').replace('https://', '')}
                              </a>
                            )}
                          </div>
                        </div>
                        <svg className={`flex-shrink-0 text-ink-tertiary mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-3">
                          {org.services?.length > 0 && (
                            <div>
                              <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">Services</p>
                              <div className="space-y-1">
                                {org.services.map((s, j) => (
                                  <div key={j} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                                    <span className="text-brand mt-0.5 flex-shrink-0">✓</span>{s}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {org.eligibility && (
                            <div className="bg-brand/5 border border-brand/15 rounded-xl px-3 py-2.5">
                              <p className="text-brand text-[12px] leading-relaxed"><strong>Eligibility:</strong> {org.eligibility}</p>
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
        })}

        {NGO_SUPPORT.govSchemes?.length > 0 && (
          <div>
            <h3 className="font-bold text-ink text-[15px] mb-3" style={{ borderLeft: '3px solid #1d4ed8', paddingLeft: '10px' }}>🏛️ Government Schemes</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NGO_SUPPORT.govSchemes.map((scheme, i) => (
                <div key={i} className="border border-ink-quaternary rounded-xl p-3.5">
                  <p className="font-semibold text-ink text-[13px]">{scheme.name}</p>
                  {scheme.description && <p className="text-ink-secondary text-[12px] mt-1 leading-relaxed">{scheme.description}</p>}
                  {scheme.eligibility && <p className="text-ink-tertiary text-[11px] mt-1">Eligibility: {scheme.eligibility}</p>}
                  {scheme.contact && <p className="text-brand text-[12px] mt-1 font-medium">{scheme.contact}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
