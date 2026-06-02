import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LEGAL_SUPPORT } from '../data/legal-support'
import { EMERGENCY_PROTOCOLS } from '../data/emergency-protocols'
import { NGO_SUPPORT } from '../data/ngo-support'

const LHDN_RELIEFS = [
  {
    id: 'medical-self',
    title: 'Medical Treatment — Self, Spouse & Children',
    limit: 'RM 1,000',
    color: '#16a34a',
    what: 'Doctor and specialist consultation fees, hospitalisation charges, prescribed medication, physiotherapy, dental treatment (excluding cosmetics), optical (glasses/contact lenses up to RM 800).',
    includes: ['GP / specialist consultation fees', 'Private hospital bills (co-pay and non-insured portion)', 'Prescribed medications', 'Physiotherapy treatment', 'Dental treatment (non-cosmetic)', 'Optical: frames, lenses, contact lenses (up to RM 800 sub-limit)'],
    note: 'Sub-limit: Full medical check-up is capped at RM 500 within this RM 1,000 relief. Keep all official receipts from hospitals, clinics, and pharmacies.',
  },
  {
    id: 'serious-disease',
    title: 'Serious Diseases — Self, Spouse & Children',
    limit: 'RM 8,000',
    color: '#dc2626',
    what: 'Medical treatment costs for serious diseases including cancer, kidney failure, heart disease, stroke, Parkinson\'s, AIDS, leukaemia, liver cirrhosis, fulminant hepatitis, tumour, and mental illness (including depression, anxiety disorders).',
    includes: ['Cancer treatment (chemo, radiotherapy, immunotherapy, targeted therapy)', 'Kidney dialysis (all sessions in the year)', 'Cardiac surgery, angioplasty, stenting', 'Stroke rehabilitation', 'Mental health treatment (psychiatrist fees, medication)', 'Fertility treatment (IVF, IUI) — sub-limit applies'],
    note: 'This RM 8,000 is separate from the RM 1,000 general medical relief. Both can be claimed in the same year. Fertility treatment for self or spouse is included under this category.',
  },
  {
    id: 'parents-medical',
    title: 'Parents\' Medical Treatment',
    limit: 'RM 8,000',
    color: '#7c3aed',
    what: 'Medical treatment expenses paid for your mother and/or father. Covers the same range as the self/spouse/children categories above.',
    includes: ['Hospitalisation for parents', 'Specialist treatment for parents', 'Surgery and procedures', 'Nursing home fees (if medically necessitated)', 'Medication and physiotherapy for parents'],
    note: 'Must be a Malaysian resident claiming. Both parents\' expenses are pooled under this single RM 8,000 limit. Keep receipts in the parent\'s name. Parents do not need to live with you.',
  },
  {
    id: 'medical-checkup',
    title: 'Complete Medical Examination',
    limit: 'RM 500',
    color: '#0891b2',
    what: 'Annual health screening and full medical check-up for yourself. Sub-limit within the RM 1,000 medical relief above.',
    includes: ['Full blood panel', 'Health screening packages at hospitals or private labs', 'Preventive health check-ups'],
    note: 'RM 500 is a sub-limit within the RM 1,000 general medical relief — not an additional RM 500 on top. Claim your health screening receipts under the medical treatment category.',
  },
  {
    id: 'insurance-premium',
    title: 'Medical & Education Insurance Premiums',
    limit: 'RM 3,000',
    color: '#d97706',
    what: 'Annual premiums paid for medical insurance or education insurance covering yourself, spouse, and children.',
    includes: ['Medical card / hospitalisation insurance premiums (AIA, Prudential, Great Eastern, Allianz, etc.)', 'Critical illness rider premiums', 'Education insurance premiums', 'Takaful medical premiums'],
    note: 'Group insurance premiums paid by your employer on your behalf are not claimable by you — only premiums you personally pay qualify. Combined with life insurance under a separate relief category.',
  },
  {
    id: 'epf-life',
    title: 'EPF Contributions + Life Insurance Premiums',
    limit: 'RM 7,000 (combined)',
    color: '#059669',
    what: 'Employee EPF contributions and life insurance premiums are pooled under one RM 7,000 relief.',
    includes: ['Employee EPF / KWSP contribution (shown on EA form)', 'Life insurance annual premiums', 'Takaful contributions (life / family takaful)'],
    note: 'If your EPF contribution alone exceeds RM 7,000, the full relief is used. Life insurance premiums are only claimable if EPF contribution leaves room within the RM 7,000 cap.',
  },
  {
    id: 'oku',
    title: 'Disability Equipment & Special Needs',
    limit: 'RM 6,000',
    color: '#6366f1',
    what: 'Equipment purchased for a disabled person — yourself, spouse, child, or parent registered as OKU (Orang Kurang Upaya) with JKM.',
    includes: ['Wheelchair, crutches, prosthetics, hearing aids', 'Dialysis equipment for home use', 'Respiratory equipment', 'Visual aids for registered blind individuals'],
    note: 'The disabled person must be registered with JKM as OKU. Keep JKM registration details and purchase receipts.',
  },
]

const GOV_SCHEMES = [
  {
    id: 'mysalam',
    title: 'MySalam — Free B40 Critical Illness Cover',
    badge: 'Automatic — No Registration',
    color: '#16a34a',
    payout: 'RM 8,000',
    who: 'B40 Malaysians (household income ≤ RM 100,000/year)',
    covers: '36 critical illnesses including cancer, heart attack, stroke, kidney failure, HIV from medical procedure',
    how: 'Automatic — no registration or premium payment. Submit claim with diagnosis letter, IC, and bank account at mysalam.com.my or call 1-800-88-1234. Processed within 14 working days.',
    url: 'https://www.mysalam.com.my',
  },
  {
    id: 'socso',
    title: 'SOCSO / PERKESO — Work Injury Medical Benefits',
    badge: 'All Costs Covered',
    color: '#0891b2',
    payout: 'Full treatment costs (no cap for work injuries)',
    who: 'SOCSO contributors who suffered work-related injury or occupational disease',
    covers: 'All treatment at SOCSO panel hospitals and clinics — surgery, hospitalisation, rehabilitation, prosthetics, follow-up for work injuries',
    how: 'Report injury to employer within 48 hours. Employer submits Form 34 to SOCSO. Visit SOCSO panel clinic with your PERKESO Assist Card. For occupational disease: submit Form 35.',
    url: 'https://www.perkeso.gov.my',
  },
  {
    id: 'jkm',
    title: 'JKM Medical Welfare — Low-Income Assistance',
    badge: 'Apply at JKM Office',
    color: '#d97706',
    payout: 'Varies by case (partial to full bill coverage)',
    who: 'Low-income individuals and families unable to pay medical bills',
    covers: 'Hospitalisation bills, surgery, specialist treatment, medication, assistive devices for the disabled, dialysis subsidies',
    how: 'Bring hospital bills, doctor letter, IC, and income proof to your nearest JKM district office (Jabatan Kebajikan Masyarakat). JKM may negotiate directly with hospitals on your behalf.',
    url: 'https://www.jkm.gov.my',
  },
  {
    id: 'epf',
    title: 'EPF Account 2 Medical Withdrawal',
    badge: 'For EPF Contributors',
    color: '#7c3aed',
    payout: 'Up to full Account 2 balance',
    who: 'EPF contributors — for self, spouse, children, parents, in-laws',
    covers: 'Hospitalisation, surgery, specialist treatment, dialysis, chemo, radiotherapy, physiotherapy, purchase of medical equipment',
    how: 'Apply online at i-Akaun (i-Akaun.kwsp.gov.my) or any EPF branch. Documents: original hospital bills, doctor\'s letter, IC, EPF member number. Processing: 7–14 working days online, 3 working days in-branch.',
    url: 'https://www.kwsp.gov.my',
  },
  {
    id: 'zakat',
    title: 'Zakat Medical Aid',
    badge: 'Muslims Eligible',
    color: '#059669',
    payout: 'Varies by state and case severity',
    who: 'Muslims in financial need — asnaf categories (fakir, miskin, gharimin)',
    covers: 'Hospital bills, surgery, critical illness treatment, dialysis, chemotherapy, medical equipment',
    how: 'Contact your state Zakat board with hospital bills, doctor letter, IC, and income proof. Each state has different processes. Apply early — some states have monthly disbursement cycles.',
    url: null,
    stateBoards: [
      { state: 'Selangor', name: 'LZS (Lembaga Zakat Selangor)', url: 'https://www.zakatselangor.com.my', phone: '+603-5514 3400' },
      { state: 'KL / W.P.', name: 'MAIWP (Baitulmal)', url: 'https://www.maiwp.gov.my', phone: '+603-2274 8060' },
      { state: 'Perak', name: 'MAIPk', url: 'https://www.maipk.gov.my', phone: '+605-253 3000' },
      { state: 'Johor', name: 'MAINJ', url: 'https://www.mainj.gov.my', phone: '+607-222 4000' },
      { state: 'Penang', name: 'MAINPP', url: 'https://www.mainpp.gov.my', phone: '+604-229 1006' },
    ],
  },
]

const NGO_FUNDS = [
  { name: 'National Cancer Society Malaysia (NCSM)', focus: 'Cancer', desc: 'Financial aid for cancer patients for treatment costs, transport, and prosthetics. Home care nursing subsidies.', url: 'https://www.cancer.org.my', phone: '+603-2698 7300' },
  { name: 'Makna (Majlis Kanser Nasional)', focus: 'Cancer', desc: 'Financial assistance for cancer patients from low-income backgrounds. Covers treatment, transport, food allowance during treatment.', url: 'https://www.makna.org.my', phone: '+603-2287 0833' },
  { name: 'Hospis Malaysia', focus: 'Palliative Care', desc: 'Free palliative and hospice care for terminal patients (cancer and non-cancer). Home visits, counselling, pain management.', url: 'https://www.hospismalaysia.org', phone: '+603-9133 3936' },
  { name: 'Malaysian AIDS Foundation (MAF)', focus: 'HIV / AIDS', desc: 'Financial aid, medication support, and social assistance for HIV-positive individuals and affected families.', url: 'https://www.maf.org.my', phone: '+603-4045 1033' },
  { name: 'Heart Foundation Malaysia (YJM)', focus: 'Cardiac', desc: 'Financial aid for low-income heart patients. Covers cardiac surgery costs, medication subsidies, and cardiac rehabilitation.', url: 'https://www.heartfoundation.org.my', phone: '+603-2272 9888' },
  { name: 'Kidney Foundation Malaysia (YGM)', focus: 'Kidney / Dialysis', desc: 'Subsidised dialysis for low-income patients, medication assistance, financial aid for kidney transplant. Free dialysis centres for eligible patients.', url: 'https://www.ygm.org.my', phone: '+603-4044 3841' },
  { name: 'Thalassaemia Malaysia', focus: 'Thalassaemia', desc: 'Support for thalassaemia patients — financial aid, access to blood banking, chelation therapy guidance.', url: 'https://www.thalassaemia.org.my', phone: '+603-4023 9956' },
  { name: 'Alzheimer\'s Disease Foundation Malaysia (ADFM)', focus: 'Dementia / Alzheimer\'s', desc: 'Caregiver support, day care centres, financial counselling for families managing dementia patients.', url: 'https://www.adfm.org.my', phone: '+603-7956 2008' },
]

const TOPICS = [
  { id: 'emergency',        icon: '🚨', label: 'Emergency Contacts', desc: 'Hotlines, ambulances, and when to call 999' },
  { id: 'emergency-events', icon: '⚕️', label: 'Emergency Events',   desc: 'Step-by-step action guides for each emergency' },
  { id: 'rights',           icon: '⚖️', label: 'Patient Rights',    desc: 'Your rights, complaints, and legal aid' },
  { id: 'support',          icon: '🤝', label: 'Support Orgs',      desc: 'NGOs and patient support organisations' },
  { id: 'doctor',           icon: '👨‍⚕️', label: 'Doctor Check',      desc: 'Verify qualifications & spot red flags' },
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
        {active === 'support'   && <NgoSection />}
        {active === 'doctor'    && <DoctorSection />}
        {active === 'financial' && <FinancialSection />}
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
  const [section, setSection] = useState('lhdn')
  const [openRelief, setOpenRelief] = useState(null)
  const [openScheme, setOpenScheme] = useState(null)
  const [openNgo, setOpenNgo] = useState(null)

  const Chevron = ({ open }) => (
    <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${open ? 'rotate-180' : ''}`}
      width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const SECTIONS = [
    { id: 'lhdn',    label: 'LHDN Tax Relief' },
    { id: 'govt',    label: 'Government Schemes' },
    { id: 'ngo',     label: 'NGO & Charity Funds' },
  ]

  return (
    <div className="space-y-6 max-w-[820px]">

      {/* Section switcher */}
      <div className="flex flex-wrap gap-2">
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              section === s.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{s.label}</button>
        ))}
      </div>

      {/* ── LHDN Tax Relief ── */}
      {section === 'lhdn' && (
        <div className="space-y-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
            <h3 className="font-bold text-emerald-900 text-[15px] mb-2">💡 LHDN Income Tax Relief — Medical Expenses</h3>
            <p className="text-emerald-800 text-[13px] leading-relaxed">
              Malaysia's income tax law allows you to deduct specific medical and insurance expenses from your taxable income. Many taxpayers miss these reliefs, especially for parents' treatment, serious disease costs, and insurance premiums. Claim these on your annual e-Filing (ezHASiL).
            </p>
            <p className="text-emerald-700 text-[12px] mt-2">
              Tax year = Year of Assessment (YA). Claim for expenses in YA 2024 during e-Filing in 2025 (March–April submission deadline).
            </p>
          </div>

          <div className="space-y-2">
            {LHDN_RELIEFS.map(relief => {
              const isOpen = openRelief === relief.id
              return (
                <div key={relief.id} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${relief.color}` }}>
                  <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                    onClick={() => setOpenRelief(isOpen ? null : relief.id)}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-semibold text-ink text-[13px]">{relief.title}</span>
                      <span className="text-[12px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{ background: `${relief.color}15`, color: relief.color }}>Up to {relief.limit}</span>
                    </div>
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-3">
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{relief.what}</p>
                      <div>
                        <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1.5">What qualifies</p>
                        <div className="space-y-1">
                          {relief.includes.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                              <span className="text-emerald-600 mt-0.5 flex-shrink-0">✓</span>{item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-[12px] text-amber-800 leading-relaxed">
                        💡 {relief.note}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* How to claim */}
          <div className="bg-surface-secondary rounded-2xl p-5">
            <h3 className="font-bold text-ink text-[15px] mb-3">📋 How to Claim on e-Filing (ezHASiL)</h3>
            <ol className="space-y-2">
              {[
                'Log in to MyTax / ezHASiL at mytax.hasil.gov.my',
                'Select "e-Filing" → "e-BE" (for salaried employees) or "e-B" (for self-employed)',
                'Under "Pelepasan / Reliefs", scroll to the relevant medical or insurance categories',
                'Enter the total amount claimed — the system calculates the tax reduction automatically',
                'Attach digital copies of receipts if requested during audit (you are not required to upload receipts during normal filing, but keep originals for 7 years)',
                'Submit before 30 April (e-BE) or 30 June (e-B) of the following year',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-secondary">
                  <span className="w-5 h-5 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">{i + 1}</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-3 bg-red-50 border border-red-100 rounded-xl p-3 text-[12px] text-red-800">
              ⚠ <strong>Keep all receipts for 7 years.</strong> LHDN can audit any year within that window. Official receipts from hospitals, clinics, pharmacies, and insurers are required as evidence.
            </div>
          </div>
        </div>
      )}

      {/* ── Government Schemes ── */}
      {section === 'govt' && (
        <div className="space-y-3">
          {GOV_SCHEMES.map(scheme => {
            const isOpen = openScheme === scheme.id
            return (
              <div key={scheme.id} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${scheme.color}` }}>
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenScheme(isOpen ? null : scheme.id)}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-ink text-[14px]">{scheme.title}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border"
                      style={{ background: `${scheme.color}12`, color: scheme.color, borderColor: `${scheme.color}40` }}>{scheme.badge}</span>
                  </div>
                  <Chevron open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-3">
                    <div className="grid sm:grid-cols-3 gap-2 text-[12px]">
                      <div className="bg-surface-secondary rounded-xl p-3">
                        <p className="font-semibold text-ink-secondary mb-0.5">Payout / Benefit</p>
                        <p className="font-bold text-ink">{scheme.payout}</p>
                      </div>
                      <div className="bg-surface-secondary rounded-xl p-3">
                        <p className="font-semibold text-ink-secondary mb-0.5">Who qualifies</p>
                        <p className="text-ink">{scheme.who}</p>
                      </div>
                      <div className="bg-surface-secondary rounded-xl p-3">
                        <p className="font-semibold text-ink-secondary mb-0.5">What's covered</p>
                        <p className="text-ink">{scheme.covers}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">How to apply</p>
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{scheme.how}</p>
                    </div>
                    {scheme.stateBoards && (
                      <div>
                        <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Zakat Boards by State</p>
                        <div className="grid sm:grid-cols-2 gap-1.5">
                          {scheme.stateBoards.map(b => (
                            <div key={b.state} className="bg-surface-secondary rounded-xl p-2.5 text-[12px]">
                              <span className="font-semibold text-ink">{b.state} — </span>
                              <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">{b.name}</a>
                              <span className="text-ink-tertiary ml-1">· {b.phone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {scheme.url && (
                      <a href={scheme.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand text-[13px] font-medium hover:underline">
                        🔗 {scheme.url.replace('https://www.', '')}
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* ── NGO & Charity Funds ── */}
      {section === 'ngo' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px] leading-relaxed">
            These organisations provide financial aid, subsidised care, or equipment assistance for specific conditions. Most require an application with supporting medical and income documents.
          </p>
          <div className="space-y-2">
            {NGO_FUNDS.map(ngo => {
              const isOpen = openNgo === ngo.name
              return (
                <div key={ngo.name} className="border border-ink-quaternary rounded-xl overflow-hidden">
                  <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                    onClick={() => setOpenNgo(isOpen ? null : ngo.name)}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-semibold text-ink text-[13px]">{ngo.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand/10 text-brand">{ngo.focus}</span>
                    </div>
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-2">
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{ngo.desc}</p>
                      <div className="flex flex-wrap gap-3 text-[12px]">
                        <a href={ngo.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1 text-brand hover:underline">🔗 {ngo.url.replace('https://www.', '')}</a>
                        <a href={`tel:${ngo.phone}`} className="flex items-center gap-1 text-ink-secondary hover:text-brand">📞 {ngo.phone}</a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="bg-surface-secondary rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <p className="font-semibold text-ink mb-1">💡 Tips when applying for NGO aid</p>
            <ul className="space-y-1 text-[12px]">
              <li>• Apply as early as possible — many organisations have limited annual budgets that deplete by mid-year.</li>
              <li>• Bring originals + photocopies of: hospital bills, specialist letters, diagnosis report, IC, household income proof.</li>
              <li>• Medical social workers at public hospitals (HKL, UMMC, HTAR) can help identify aid options and facilitate applications.</li>
              <li>• Multiple sources can be combined — you can receive Zakat, JKM, and NGO aid simultaneously for the same illness.</li>
            </ul>
          </div>
        </div>
      )}

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


/* ─── Doctor Check ───────────────────────────────────────────────── */

const QUAL_ABBREV = [
  { abbr:'MBBS / MD', meaning:'Basic medical degree (5–6 years). All registered doctors hold this.' },
  { abbr:'MRCP', meaning:'Member of the Royal College of Physicians — UK postgraduate internal medicine qualification.' },
  { abbr:'FRCP', meaning:'Fellow of the Royal College of Physicians — senior, higher recognition.' },
  { abbr:'MRCS / FRCS', meaning:'Member/Fellow of the Royal College of Surgeons — surgical postgraduate qualifications.' },
  { abbr:'MS (Surgery)', meaning:'Master of Surgery — Malaysian/UK surgical postgraduate qualification.' },
  { abbr:'MMed', meaning:'Master of Medicine — Malaysian specialist qualification (UM, UKM, USM).' },
  { abbr:'MRCOG / FRCOG', meaning:'Member/Fellow Royal College of Obstetricians & Gynaecologists.' },
  { abbr:'FRCR', meaning:'Fellow of the Royal College of Radiologists — radiology and oncology.' },
  { abbr:'FAMS', meaning:'Fellow of the Academy of Medicine Singapore — Singapore senior specialist.' },
  { abbr:'AM(Mal)', meaning:'Academy of Medicine Malaysia Fellow — Malaysian senior specialist recognition.' },
  { abbr:'FANZCA', meaning:'Fellow of the Australian/NZ College of Anaesthetists.' },
  { abbr:'PhD', meaning:'Doctor of Philosophy — research doctorate, not a clinical medical degree on its own.' },
  { abbr:"Dato' / Tan Sri", meaning:'Malaysian honorific title — indicates civic recognition, NOT a medical qualification.' },
  { abbr:'Adj Prof / Prof Madya', meaning:'Adjunct/Associate Professor — academic rank, indicates teaching at a university hospital.' },
]

function DoctorSection() {
  return (
    <div className="space-y-7">
      {/* How to verify */}
      <div className="bg-surface-secondary rounded-2xl p-5">
        <h3 className="font-bold text-ink text-[15px] mb-3">🔍 How to Verify a Doctor (MMC Registry)</h3>
        <ol className="space-y-2">
          {[
            <>Go to <a href="https://www.mmc.gov.my" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-medium">mmc.gov.my</a> → "Semak Pengamal Perubatan Berdaftar" (Check Registered Medical Practitioners)</>,
            'Search by full name or MMC registration number (ask the doctor for their MMC number).',
            'The result will show: registration status (active/lapsed/suspended), specialty, qualification, and any disciplinary actions.',
            <><strong>If the doctor does NOT appear or their status is "suspended"</strong> — do not proceed. Report to MMC: <a href="tel:+60340496000" className="text-brand hover:underline">+603-4049 6000</a></>,
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13px] text-ink-secondary">
              <span className="w-5 h-5 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5">{i+1}</span>
              <span className="leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
        <a href="https://www.mmc.gov.my" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-brand text-[13px] font-semibold hover:underline">
          🔗 Open MMC Registry →
        </a>
      </div>

      {/* Qualification table */}
      <div>
        <h3 className="font-bold text-ink text-[15px] mb-3">🎓 Understanding Doctor Qualifications</h3>
        <p className="text-ink-secondary text-[13px] mb-3">Malaysian doctors' name cards often list multiple qualifications. Here is what they mean:</p>
        <div className="overflow-x-auto rounded-xl border border-ink-quaternary">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="bg-surface-secondary border-b border-ink-quaternary">
                <th className="text-left px-4 py-2.5 font-semibold text-ink-secondary">Abbreviation</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink-secondary">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {QUAL_ABBREV.map(({ abbr, meaning }) => (
                <tr key={abbr} className="border-t border-ink-quaternary">
                  <td className="px-4 py-2.5 font-mono font-semibold text-brand whitespace-nowrap">{abbr}</td>
                  <td className="px-4 py-2.5 text-ink-secondary">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Other boards */}
      <div>
        <h3 className="font-bold text-ink text-[15px] mb-3">📌 Other Regulatory Boards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { title:'Dentists', body:'Malaysian Dental Council (MDC)', url:'https://www.mdc.gov.my' },
            { title:'Nurses & Midwives', body:'Lembaga Jururawat Malaysia (LJM)', url:'https://www.ljm.moh.gov.my' },
            { title:'Pharmacists', body:'Pharmacy Board Malaysia', url:'https://pharmacy.gov.my' },
            { title:'Traditional Medicine (T&CM)', body:'T&CM Division, MOH Malaysia', url:'https://www.tcm.moh.gov.my' },
            { title:'Allied Health (Physio, OT, etc.)', body:'Allied Health Professions Board, MOH', url:'https://www.moh.gov.my' },
          ].map(({ title, body, url }) => (
            <div key={title} className="bg-surface-secondary rounded-xl p-3">
              <p className="font-semibold text-ink text-[13px]">{title}</p>
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand text-[12px] hover:underline">{body}</a>
            </div>
          ))}
        </div>
      </div>

      {/* Red flags */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <h3 className="font-bold text-red-900 text-[15px] mb-3">🚩 Red Flags</h3>
        <ul className="space-y-1.5">
          {[
            'Doctor cannot provide their MMC registration number when asked.',
            'Qualifications listed that do not appear in the MMC database.',
            'Practising at a facility that is not licensed by MOH.',
            'Using the title "Dr." without an MBBS, MD, or equivalent degree.',
            'Offering guaranteed cure rates for serious illnesses (medically unethical).',
            'Requesting large upfront cash payments without itemised billing.',
          ].map((flag, i) => (
            <li key={i} className="flex items-start gap-2 text-[12px] text-red-800">
              <span className="mt-0.5 flex-shrink-0">⚠</span>{flag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
