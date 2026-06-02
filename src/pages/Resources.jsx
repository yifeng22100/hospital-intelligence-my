import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LEGAL_SUPPORT } from '../data/legal-support'
import { EMERGENCY_PROTOCOLS } from '../data/emergency-protocols'
import { NGO_SUPPORT } from '../data/ngo-support'

const FINANCIAL_SCHEMES = [
  { q: 'MySalam', a: 'Free critical illness insurance for B40 Malaysians (household income ≤ RM100,000/year). Covers 36 critical illnesses. Automatic — no registration needed. RM 8,000 payout. Check eligibility at mysalam.com.my or call 1-800-88-1234.' },
  { q: 'Peka B40', a: 'Health screening programme for B40 households. Covers cancer screening, cardiovascular risk assessment, and eye examinations. Register at pekab40.com.my. Bring IC and proof of household income to the nearest Klinik Kesihatan.' },
  { q: 'EPF Account 2 Withdrawal', a: 'Withdraw EPF Account 2 for medical expenses covering yourself, spouse, parents, children, and in-laws. Eligible for: hospitalisation, surgery, specialist treatment, dialysis, chemo, physiotherapy. Apply at i-Akaun.kwsp.gov.my or any EPF branch. Bring: original bills, doctor letter, IC. Processing: 7–14 working days online.' },
  { q: 'SOCSO / PERKESO Medical Benefits', a: 'SOCSO contributors are entitled to treatment for work-related injuries and occupational diseases under the Employment Injury Scheme — all treatment costs covered. Report the injury to your employer within 48 hours and visit the nearest SOCSO panel clinic.' },
  { q: 'Zakat Medical Aid', a: 'State religious bodies (LZMA, LZS, MAIWP) provide zakat aid for medical expenses for eligible Muslims. Contact your state Zakat board with medical bills and supporting documents. Each state has different application processes and caps.' },
  { q: 'JKM Medical Welfare', a: 'Jabatan Kebajikan Masyarakat (JKM) provides financial assistance for medical expenses to eligible low-income individuals and families. Apply at your nearest JKM district office with hospital bills, doctor letter, and income proof.' },
]

const TOPICS = [
  { id: 'emergency',        icon: '🚨', label: 'Emergency Contacts', desc: 'Hotlines, ambulances, and when to call 999' },
  { id: 'emergency-events', icon: '⚕️', label: 'Emergency Events',   desc: 'Step-by-step action guides for each emergency' },
  { id: 'rights',           icon: '⚖️', label: 'Patient Rights',    desc: 'Your rights, complaints, and legal aid' },
  { id: 'support',          icon: '🤝', label: 'Support Orgs',      desc: 'NGOs and patient support organisations' },
  { id: 'financial',        icon: '💳', label: 'Financial Aid',     desc: 'Government schemes and welfare assistance' },
]

const EMERGENCY_EVENT_CATEGORIES = ['All', 'Cardiac', 'Neurological', 'Airway', 'Trauma', 'Envenomation', 'Allergy', 'Medical', 'Child']

export default function Resources() {
  const [active, setActive] = useState('emergency')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Support & Action</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Contacts, rights, and practical support.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Who to call, where to complain, and how to access financial aid — for when you need to act, not just learn.
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

        {active === 'emergency'        && <EmergencySection onShowEvents={() => setActive('emergency-events')} />}
        {active === 'emergency-events' && <EmergencyEventsSection onShowContacts={() => setActive('emergency')} />}
        {active === 'rights'           && <PatientRightsSection />}
        {active === 'support'          && <NgoSection />}
        {active === 'financial'        && <FinancialSection />}
      </div>
    </div>
  )
}

/* ─── Intelligence crosslink banner ────────────────────────────────── */

function IntelligenceCrosslink({ to, label }) {
  return (
    <div className="bg-brand/5 border border-brand/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3 mb-6">
      <p className="text-[13px] text-ink-secondary">
        <span className="text-brand font-semibold">Intelligence Hub</span> has in-depth guides on {label}.
      </p>
      <Link
        to={`/intelligence`}
        className="flex-shrink-0 text-[12px] font-semibold text-brand border border-brand/30 rounded-lg px-3 py-1.5 hover:bg-brand hover:text-white transition-colors"
      >
        Open →
      </Link>
    </div>
  )
}

/* ─── Emergency Contacts ────────────────────────────────────────────── */

function EmergencySection({ onShowEvents }) {
  const ep = EMERGENCY_PROTOCOLS

  return (
    <div className="space-y-8">
      <div className="bg-brand/5 border border-brand/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-[13px] text-ink-secondary">
          <span className="text-brand font-semibold">Emergency Events</span> has step-by-step action guides for stroke, heart attack, burns, choking, and 9 more scenarios.
        </p>
        <button onClick={onShowEvents} className="flex-shrink-0 text-[12px] font-semibold text-brand border border-brand/30 rounded-lg px-3 py-1.5 hover:bg-brand hover:text-white transition-colors">
          View →
        </button>
      </div>

      {/* Primary hotlines */}
      <div>
        <h3 className="font-semibold text-ink text-[15px] mb-3">📞 Emergency Hotlines</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ep.hotlines.map((h, i) => (
            <div key={i} className={`rounded-xl border p-3.5 ${h.number === '999' || h.number === '112' ? 'bg-red-50 border-red-200' : 'bg-white border-ink-quaternary'}`}>
              <p className={`font-semibold text-[13px] ${h.number === '999' || h.number === '112' ? 'text-red-900' : 'text-ink'}`}>{h.name}</p>
              <a href={`tel:${h.number.replace(/[\s\-]/g, '')}`}
                className={`font-bold text-[20px] hover:underline block my-0.5 ${h.number === '999' || h.number === '112' ? 'text-red-600' : 'text-brand'}`}>
                {h.number}
              </a>
              <p className="text-[11px] text-ink-tertiary">{h.available}</p>
              <p className="text-[12px] text-ink-secondary mt-1.5 leading-relaxed">{h.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* When to call 999 */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <h3 className="font-bold text-red-900 text-[15px] mb-3">🚑 Call 999 Immediately For</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {ep.whenToCallAmbulance.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-[12px] text-red-800">
              <span className="mt-0.5 flex-shrink-0 text-red-500">⚠</span>{item}
            </div>
          ))}
        </div>
      </div>

      {/* Ambulance services */}
      <div>
        <h3 className="font-semibold text-ink text-[15px] mb-3">🚑 Ambulance Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {ep.ambulanceServices.map((svc, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3.5 bg-white">
              <p className="font-semibold text-ink text-[13px]">{svc.name}</p>
              <div className="flex items-center gap-2 flex-wrap mt-0.5">
                {svc.number && <a href={`tel:${svc.number.replace(/[\s\-]/g, '')}`} className="text-brand font-bold text-[15px] hover:underline">{svc.number}</a>}
                <span className="text-[11px] text-ink-tertiary border border-ink-quaternary rounded px-1.5 py-0.5">{svc.type}</span>
              </div>
              <p className="text-[11px] text-ink-tertiary mt-1">{svc.coverage}</p>
              {svc.notes && <p className="text-[12px] text-ink-secondary mt-1.5 leading-relaxed">{svc.notes}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* AED */}
      {ep.aedLocations && (
        <div>
          <h3 className="font-semibold text-ink text-[15px] mb-2">⚡ AED Locations (Automated Defibrillator)</h3>
          <p className="text-ink-secondary text-[13px] mb-3 leading-relaxed">{ep.aedLocations.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {ep.aedLocations.commonLocations.map((loc, i) => (
              <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                <span className="text-brand flex-shrink-0 mt-0.5">·</span>{loc}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Patient Rights ─────────────────────────────────────────────── */

function PatientRightsSection() {
  const [openChannel, setOpenChannel] = useState(null)
  const comp = LEGAL_SUPPORT?.complaints || {}
  const legalAid = LEGAL_SUPPORT?.legalAid || []
  const dv = LEGAL_SUPPORT?.domesticViolence

  return (
    <div className="space-y-8">
      {comp.statute && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[13px] text-amber-900">
          ⏱ <strong>Limitation Period:</strong> {comp.statute}
        </div>
      )}

      <div>
        <h3 className="font-semibold text-ink text-[16px] mb-3">Your 12 Patient Rights</h3>
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
        <h3 className="font-semibold text-ink text-[16px] mb-3">When to File a Complaint</h3>
        <div className="space-y-1.5">
          {(comp.when || []).map((w, i) => (
            <div key={i} className="flex items-start gap-2 text-[13px] text-ink-secondary">
              <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>{w}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-ink text-[16px] mb-3">Step-by-Step Complaint Process</h3>
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
        <h3 className="font-semibold text-ink text-[16px] mb-3">Where to Complain</h3>
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
        <h3 className="font-semibold text-ink text-[16px] mb-3">Free Legal Aid Organisations</h3>
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
    <div className="space-y-8">
      <p className="text-ink-secondary text-[14px] max-w-[640px] leading-relaxed">
        Free and subsidised support from NGOs, foundations, and welfare organisations across Malaysia. Ask your hospital social worker for referrals — most hospitals have a medical social worker on staff.
      </p>

      {availableSections.map(({ key, label, color }) => {
        const orgs = NGO_SUPPORT[key] || []
        return (
          <div key={key}>
            <h3 className="font-semibold text-ink text-[15px] mb-3" style={{ borderLeft: `3px solid ${color}`, paddingLeft: '10px' }}>{label}</h3>
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
          <h3 className="font-semibold text-ink text-[15px] mb-3" style={{ borderLeft: '3px solid #1d4ed8', paddingLeft: '10px' }}>🏛️ Government Schemes</h3>
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
  )
}

/* ─── Financial Aid ──────────────────────────────────────────────── */

function FinancialSection() {
  const [open, setOpen] = useState(null)
  return (
    <div className="space-y-3 max-w-[760px]">
      <IntelligenceCrosslink label="EPF, MySalam, and financial aid hacks (with exact claim tips)" />
      {FINANCIAL_SCHEMES.map(({ q, a }) => {
        const isOpen = open === q
        return (
          <div key={q} className="border border-ink-quaternary rounded-xl overflow-hidden">
            <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
              onClick={() => setOpen(isOpen ? null : q)}>
              <span className="font-semibold text-ink text-[13px]">{q}</span>
              <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-ink-quaternary">
                <p className="text-ink-secondary text-[13px] leading-relaxed">{a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ─── Emergency Events ───────────────────────────────────────────── */

function EmergencyEventsSection({ onShowContacts }) {
  const [category, setCategory] = useState('All')
  const [open, setOpen] = useState(null)
  const scenarios = EMERGENCY_PROTOCOLS.emergencyScenarios
  const visible = category === 'All' ? scenarios : scenarios.filter(s => s.category === category)

  return (
    <div>
      <div className="bg-brand/5 border border-brand/20 rounded-xl px-4 py-3 flex items-center justify-between gap-3 mb-6">
        <p className="text-[13px] text-ink-secondary">
          <span className="text-brand font-semibold">Emergency Contacts</span> has all hotlines, ambulances, and when to call 999.
        </p>
        <button onClick={onShowContacts} className="flex-shrink-0 text-[12px] font-semibold text-brand border border-brand/30 rounded-lg px-3 py-1.5 hover:bg-brand hover:text-white transition-colors">
          View →
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {EMERGENCY_EVENT_CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
              category === cat
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{cat}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(s => {
          const isOpen = open === s.id
          return (
            <div key={s.id}
              className="bg-white border border-ink-quaternary rounded-2xl overflow-hidden cursor-pointer hover:border-brand/40 transition-colors"
              style={{ borderLeft: `3px solid ${s.color}` }}
              onClick={() => setOpen(isOpen ? null : s.id)}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg leading-none">{s.icon}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${s.color}18`, color: s.color }}>{s.category}</span>
                    {s.callAmbulance && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Call 999</span>
                    )}
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-ink text-[13px] leading-snug">{s.label}</h3>

                {isOpen && (
                  <div className="mt-3 pt-3 border-t border-ink-quaternary space-y-3 text-[12px]">
                    <div>
                      <p className="font-semibold text-ink mb-1.5" style={{ color: s.color }}>🔍 Recognise</p>
                      <ul className="space-y-1">
                        {s.recognize.map((r, i) => (
                          <li key={i} className="text-ink-secondary leading-relaxed flex gap-1.5">
                            <span className="flex-shrink-0 mt-0.5 text-ink-tertiary">·</span>{r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-ink mb-1.5 text-green-700">✅ Do Now</p>
                      <ol className="space-y-1 list-none">
                        {s.doNow.map((d, i) => (
                          <li key={i} className="text-ink-secondary leading-relaxed flex gap-1.5">
                            <span className="flex-shrink-0 font-semibold text-green-600 mt-0.5">{i + 1}.</span>{d}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <p className="font-semibold text-red-600 mb-1.5">🚫 Do NOT</p>
                      <ul className="space-y-1">
                        {s.doNot.map((d, i) => (
                          <li key={i} className="text-ink-secondary leading-relaxed flex gap-1.5">
                            <span className="flex-shrink-0 text-red-400 mt-0.5">✕</span>{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {s.note && (
                      <div className="bg-surface-secondary rounded-xl px-3 py-2.5">
                        <p className="text-ink-secondary leading-relaxed">{s.note}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

