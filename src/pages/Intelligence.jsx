import { useState } from 'react'
import { INSURANCE_PANELS } from '../data/insurance-panels'
import { COST_REFERENCE } from '../data/cost-reference'
import { VERIFY_GUIDE } from '../data/verify-guide'
import { GLOSSARY } from '../data/glossary'
import { SPECIALTIES_REFERENCE } from '../data/specialties-reference'

const TOPICS = [
  { id: 'hacks',       icon: '💡', label: 'Insider Tips',      desc: '12 things most patients don\'t know' },
  { id: 'tiers',       icon: '🏥', label: 'Hospital Tiers',    desc: 'Public referral system explained' },
  { id: 'insurance',   icon: '🛡️', label: 'Insurance',         desc: 'Panels, LOG limits & claims guide' },
  { id: 'costs',       icon: '💰', label: 'Cost Reference',    desc: 'Procedure costs public vs. private' },
  { id: 'doctor',      icon: '👨‍⚕️', label: 'Doctor Check',      desc: 'Verify qualifications & spot red flags' },
  { id: 'trials',      icon: '🔬', label: 'Clinical Trials',   desc: 'Access to experimental treatments' },
  { id: 'night',       icon: '🌙', label: 'Night Cover',       desc: 'Overnight care by hospital type' },
  { id: 'verify',      icon: '✅', label: 'Verify Facilities', desc: 'Nursing homes, dialysis, dental & more' },
  { id: 'glossary',    icon: '📖', label: 'Medical Glossary',  desc: 'Plain-English guide to medical terms' },
  { id: 'specialties', icon: '⚕️', label: 'Specialties Guide', desc: 'Where to go for each speciality' },
]

export default function Intelligence() {
  const [active, setActive] = useState('hacks')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Healthcare Intelligence</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Insider knowledge for smarter healthcare decisions.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Everything patients wish they knew before navigating Malaysia's healthcare system — from insurance hacks to hospital verification.
          </p>
        </div>
      </div>

      {/* Topic nav — horizontal scroll on mobile */}
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

        {active === 'hacks'       && <HacksSection />}
        {active === 'tiers'       && <TiersSection />}
        {active === 'insurance'   && <InsuranceSection />}
        {active === 'costs'       && <CostsSection />}
        {active === 'doctor'      && <DoctorSection />}
        {active === 'trials'      && <TrialsSection />}
        {active === 'night'       && <NightSection />}
        {active === 'verify'      && <VerifySection />}
        {active === 'glossary'    && <GlossarySection />}
        {active === 'specialties' && <SpecialtiesSection />}
      </div>
    </div>
  )
}

/* ─── Insider Tips ─────────────────────────────────────────────── */

const HACKS = [
  { num:'01', tag:'Cost Saving',      color:'#1d4ed8',
    title:'FPP Scheme (Full-Paying Patient)',
    body:'Most government (MOH) hospitals offer a Full-Paying Patient (FPP) scheme — private-room care and direct specialist access at a government hospital, paying 30–60% less than equivalent private hospitals. You skip the long outpatient queue and get an air-conditioned room with the same clinical team as subsidised wards. Best for: routine specialist consults, elective surgery, maternity. Apply at the FPP unit with your IC. Tip: FPP rates are not publicly listed — ask directly and request a written estimate.' },
  { num:'02', tag:'Insurance Hack',   color:'#7c3aed',
    title:'Pre-Admission Expense Claim (30–90 Day Window)',
    body:'If outpatient specialist visits — scans, blood tests, specialist consultations — lead to a hospital admission within 30–90 days (varies by insurer), all those pre-admission bills become claimable as "Pre-Admission Medical Expenses". This is the most commonly missed insurance claim in Malaysia. Keep EVERY receipt from every specialist visit, imaging centre, and lab. AIA: 30–60 days; Prudential: 60–90 days; Great Eastern: 30–60 days. Confirm your insurer\'s specific window.' },
  { num:'03', tag:'Navigation',       color:'#0d9488',
    title:'Stabilise & Transfer Protocol',
    body:'If admitted to a district or state hospital that lacks a specialist you need, you have the right to request a formal transfer after stabilisation. The receiving hospital (HKL, IJN, UMMC) must accept government-hospital referrals. Key phrase: "I would like to formally request a transfer to [hospital] for specialist care." The doctor must document this request. For cardiac: IJN accepts direct referrals from any MOH hospital. For neuro: UMMC or Hospital Selayang. Do NOT self-discharge — this voids your insurance and referral pathway.' },
  { num:'04', tag:'Cost Saving',      color:'#d97706',
    title:'Academic-Hybrid Pricing Arbitrage (UMSC, UKMSC)',
    body:'UMSC (UM Specialist Centre) and UKMSC (UKM Medical Centre) are not-for-profit university entities offering private-hospital-standard care at 20–40% below pure private hospital rates. Senior consultants are UM/UKM faculty professors — you get Associate Professor / Professor level expertise at SJMC-equivalent facilities for significantly less. Best kept secret in KL for high-end specialist care on a budget.' },
  { num:'05', tag:'Critical Caveat',  color:'#ef4444',
    title:'Serdang Heart Centre OT Caveat (2024 Status)',
    body:'Hospital Sultan Idris Shah (Serdang) has the highest cardiac PCI surgical volume in Southeast Asia. HOWEVER: as of 2024, some open-heart surgery (CABG) cases have experienced longer OT scheduling waiting times. For emergency PCI, Serdang remains the gold standard in Selangor. For elective CABG or valve replacement, confirm current OT wait times directly: +603-8947 5555. Cross-reference with IJN for urgent elective cases.' },
  { num:'06', tag:'Insurance Warning',color:'#dc2626',
    title:'Gleneagles Budget Card Exclusion (LOG Limit)',
    body:'Gleneagles KL room rates start at RM 380/night (standard) to RM 1,200+/night (suite). Many insurance plans have a daily LOG (Letter of Guarantee) limit of RM 150–200/night. The gap is YOUR liability every night. On a 5-day stay: RM 1,000–5,000 in unexpected personal expense. Before booking Gleneagles, Prince Court, or Pantai KL: call your insurer, confirm your daily room LOG limit, and verify it matches or exceeds the hospital\'s minimum room rate. Upgrade your plan before illness, not after.' },
  { num:'07', tag:'Cancer / Trials',  color:'#059669',
    title:'ESMO Clinical Trial Access (Beacon, Sunway, UMMC)',
    body:'Three key centres for international oncology trials: (1) Beacon Hospital — SOLARIS (Southeast Asia Oncology Research Institute), one of SE Asia\'s most active trial sites; (2) Sunway Medical Centre — breast, colorectal, and haematology trials; (3) UMMC — largest government academic oncology trial centre, NMRR-registered. Search clinicaltrials.gov or nmrr.gov.my. Some trials cover ALL treatment costs. Ask your oncologist for referral specifically to the research unit — not the main hospital line.' },
  { num:'08', tag:'Navigation',       color:'#0891b2',
    title:'HTAR Highest Outpatient Volume (Klang Valley)',
    body:'Hospital Tengku Ampuan Rahimah (HTAR) in Klang has the highest outpatient volume of any hospital in the Klang Valley. Waiting time for specialist clinics: 4–8 hours. Plan a full-day visit; arrive by 7:30am (some clinics fill by 8am). However, HTAR doctors see more cases than almost any other hospital — particularly internal medicine, O&G, and paediatrics. High volume = high experience. Bring a book, snacks, and a portable charger.' },
  { num:'09', tag:'Financial Aid',    color:'#4f46e5',
    title:'EPF Account 2 Medical Withdrawal',
    body:'EPF Account 2 can be withdrawn for medical expenses covering yourself, spouse, parents, children, and in-laws. Eligible: hospitalisation, surgery, specialist treatment, dialysis, chemotherapy, physiotherapy, and certain medical equipment. Apply via i-Akaun (i-Akaun.kwsp.gov.my) or at any EPF branch. Bring: original hospital bills, doctor letter, IC. Processing: 7–14 working days online, 3 working days at counter. No minimum withdrawal amount for medical purposes.' },
  { num:'10', tag:'Financial Aid',    color:'#16a34a',
    title:'MySalam Automatic B40 Coverage',
    body:'MySalam is a free government-funded critical illness insurance for B40 Malaysians (household income ≤ RM100,000/year). RM 8,000 payout upon diagnosis of any of 36 critical illnesses including cancer, heart attack, stroke, and kidney failure. It is AUTOMATIC — no registration, no premium payment. Check eligibility at mysalam.com.my or call 1-800-88-1234. Submit diagnosis letter + IC + bank account details. Processed within 14 working days. Many B40 families are unaware they are covered.' },
  { num:'11', tag:'Safety',           color:'#7c3aed',
    title:'Night Cover Intelligence (MO vs Specialist Overnight)',
    body:'Private hospital night cover (10pm–7am): at most private hospitals, the overnight on-call is a Medical Officer (MO) or Registrar — your specialist is called only if the MO deems it necessary. At academic hospitals (UMMC, UKMSC, UKMMC) and IJN, residents and fellows cover overnight with specialist consultants on backup call. At small private hospitals and day-surgery centres: there may be NO doctor on-site — only a nurse with a GP on phone. ALWAYS ask before admission: "Who is the overnight doctor — is a specialist on-site or on phone call?" This is your right as a patient.' },
  { num:'12', tag:'Navigation',       color:'#0d9488',
    title:'How to Get a Referral Letter',
    body:'PUBLIC hospitals: visit Klinik Kesihatan in the morning, tell the doctor you need a specialist referral, bring any existing test results. Without a referral, you wait longer. PRIVATE hospitals: no referral needed — book a specialist directly. However, your GP\'s referral letter helps the specialist understand your history and is needed for insurance pre-authorisation. KEY TIP: bring ALL previous test results, scans, and discharge summaries to every specialist visit — government systems do not share records between hospitals.' },
]

const TAG_COLORS = {
  'Cost Saving':'#16a34a','Insurance Hack':'#7c3aed','Navigation':'#0891b2',
  'Critical Caveat':'#dc2626','Insurance Warning':'#dc2626','Cancer / Trials':'#059669',
  'Financial Aid':'#1d4ed8','Safety':'#d97706',
}
const HACK_TAGS = ['All', 'Cost Saving', 'Navigation', 'Insurance Hack', 'Financial Aid', 'Safety', 'Critical Caveat']

function HacksSection() {
  const [open, setOpen] = useState(null)
  const [tag, setTag] = useState('All')
  const visible = tag === 'All' ? HACKS : HACKS.filter(h => h.tag === tag)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {HACK_TAGS.map(t => (
          <button key={t} onClick={() => setTag(t)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
              tag === t ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{t}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visible.map(h => {
          const tagColor = TAG_COLORS[h.tag] || '#64748b'
          const isOpen = open === h.num
          return (
            <div key={h.num} className="bg-white border border-ink-quaternary rounded-2xl overflow-hidden cursor-pointer hover:border-brand/40 transition-colors"
              style={{ borderLeft: `3px solid ${h.color}` }} onClick={() => setOpen(isOpen ? null : h.num)}>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold" style={{ color: h.color }}>{h.num}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: `${tagColor}18`, color: tagColor }}>{h.tag}</span>
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform mt-0.5 ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-ink text-[13px] leading-snug">{h.title}</h3>
                {isOpen && <p className="text-ink-secondary text-[12px] leading-relaxed mt-3 pt-3 border-t border-ink-quaternary">{h.body}</p>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Hospital Tiers ────────────────────────────────────────────── */

const TIERS = [
  { level:1, icon:'🏘️', color:'#16a34a', name:'Klinik Kesihatan (KK)', subtitle:'Primary Care / Penjagaan Primer',
    desc:'Your entry point to the Malaysian public healthcare system. Every Malaysian can walk in for free primary care — GPs, basic medications, maternal & child health, health screening, and referrals.',
    features:['Walk-in, no appointment needed','Free or heavily subsidised for Malaysians','Issues government sick leave (MC)','Manages chronic disease (diabetes, hypertension, asthma)','Issues referral letters to specialist clinics'],
    note:'Tip: Get your referral letter here — it fast-tracks you at district and state hospital specialist clinics.' },
  { level:2, icon:'🏥', color:'#2563eb', name:'District Hospital', subtitle:'Hospital Daerah',
    desc:'Serves a district (~100,000–500,000 population). Handles general medicine, surgery, obstetrics, and paediatrics. Has 24/7 emergency (A&E). Refers complex cases upward.',
    features:['24/7 A&E / Emergency Department','Inpatient wards (general medicine, surgery, O&G, paediatrics)','Basic diagnostic imaging (X-ray, ultrasound)','Operating theatre for emergencies','50–200 beds typically'],
    note:'Examples: Hospital Kuala Kubu Bharu, Hospital Banting, Hospital Segamat.' },
  { level:3, icon:'🏨', color:'#7c3aed', name:'State General Hospital', subtitle:'Hospital Negeri / Hospital Umum',
    desc:'The main referral centre for each state. Has most major specialties, specialist clinics, and full surgical capability. Accepts complex referrals from district hospitals statewide.',
    features:['All major specialties on-site','ICU, NICU, HDU','Complex surgery including cardiac and neurosurgery at larger centres','300–1,500+ beds','Specialist clinics with referred appointments'],
    note:'Examples: Hospital Raja Permaisuri Bainun (Perak), Hospital Sultan Idris Shah (Selangor), Hospital Sultanah Aminah (Johor).' },
  { level:4, icon:'🔬', color:'#dc2626', name:'Tertiary / Quaternary / Academic Hospital', subtitle:'Hospital Pakar Tertiari / Hospital Universiti',
    desc:'The apex of the system. Handles the most complex, rare, and multi-system cases. Many are academic hospitals attached to public universities — where research, training, and clinical care intersect.',
    features:['Super-specialist care (transplant, neurovascular, complex oncology)','Dedicated research units and clinical trials','Professors and clinical subspecialty consultants','Advanced imaging: PET-CT, MRI 3T, interventional radiology','Teaching hospitals: residents supervised by consultants 24/7'],
    note:'Examples: Hospital Kuala Lumpur (HKL), UMMC, UKMMC, Institut Jantung Negara (IJN — cardiac only), HUSM.' },
]

function TiersSection() {
  return (
    <div className="space-y-4">
      <p className="text-ink-secondary text-[14px] max-w-[640px] leading-relaxed">
        Malaysia's public healthcare system operates in a structured referral pyramid. Understanding this helps you navigate faster, save time, and access the right level of care.
      </p>
      {TIERS.map((tier, i) => (
        <div key={tier.level} className="bg-white border border-ink-quaternary rounded-2xl p-5"
          style={{ borderLeft: `3px solid ${tier.color}` }}>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0"
              style={{ background: tier.color }}>{tier.level}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <h3 className="font-bold text-[15px]" style={{ color: tier.color }}>{tier.icon} {tier.name}</h3>
                  <p className="text-ink-tertiary text-[12px] italic">{tier.subtitle}</p>
                </div>
              </div>
              <p className="text-ink-secondary text-[13px] leading-relaxed mt-2 mb-3">{tier.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                {tier.features.map((f, fi) => (
                  <div key={fi} className="flex items-start gap-1.5 text-[12px] text-ink">
                    <span className="mt-0.5" style={{ color: tier.color }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div className="bg-surface-secondary rounded-xl p-3 text-[12px] text-ink-secondary">
                💡 {tier.note}
              </div>
            </div>
          </div>
          {i < TIERS.length - 1 && (
            <div className="mt-4 text-center text-[11px] text-ink-tertiary">
              ⬆️ referred up &nbsp;·&nbsp; ⬇️ discharged down
            </div>
          )}
        </div>
      ))}
      <div className="bg-surface-secondary rounded-2xl p-5 mt-2">
        <h3 className="font-semibold text-ink text-[14px] mb-2">🏪 Private Hospitals — Parallel System</h3>
        <p className="text-ink-secondary text-[13px] leading-relaxed">
          Private hospitals operate in parallel to the public system — not on this referral ladder. You access them directly (no referral needed) and pay out-of-pocket or via insurance. Quality varies widely from community day-surgery centres to quaternary-equivalent facilities like Sunway Medical Centre, Prince Court, or Gleneagles. They are <strong>NOT necessarily "better"</strong> than government hospitals — they offer faster access and more comfort, but for highly complex cases (transplants, experimental treatment, cardiac surgery volume), government academic centres often have more experience.
        </p>
      </div>
    </div>
  )
}

/* ─── Insurance ────────────────────────────────────────────────── */

function InsuranceSection() {
  const [openRule, setOpenRule] = useState(null)
  const [openIns, setOpenIns] = useState(null)
  const rules = INSURANCE_PANELS?.generalRules || {}
  const insurers = INSURANCE_PANELS?.insurers || []

  const ruleLabels = {
    preAdmission: 'Pre-Admission Expense Claim Window',
    cashlessVsReimbursement: 'Cashless vs. Reimbursement',
    logLimit: 'LOG Limit — The Hidden Trap',
    panelCheck: 'Panel Check — Always Confirm on the Day',
    denialAppeal: 'Claim Denied? How to Appeal',
    commonExclusions: 'Common Policy Exclusions',
    coPayAndDeductible: 'Co-Pay & Deductible',
    annualLimit: 'Annual Coverage Limit',
    lifetimeLimit: 'Lifetime Limit',
    waitingPeriod: 'Waiting Period',
  }

  return (
    <div className="space-y-8">
      {/* General rules */}
      <div>
        <h3 className="font-bold text-ink text-[16px] mb-1">📋 10 Rules Every Insurance Holder Must Know</h3>
        <p className="text-ink-secondary text-[13px] mb-4">Understanding these before hospitalisation can save you thousands of ringgit.</p>
        <div className="space-y-2">
          {Object.entries(rules).map(([key, val], i) => {
            const label = ruleLabels[key] || key
            const isOpen = openRule === key
            return (
              <div key={key} className="border border-ink-quaternary rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenRule(isOpen ? null : key)}>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-ink-tertiary w-5">{String(i+1).padStart(2,'0')}</span>
                    <span className="font-semibold text-ink text-[13px]">{label}</span>
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isOpen && <div className="px-4 pb-4 text-ink-secondary text-[13px] leading-relaxed border-t border-ink-quaternary pt-3">{val}</div>}
              </div>
            )
          })}
        </div>
      </div>

      {/* Insurers */}
      <div>
        <h3 className="font-bold text-ink text-[16px] mb-1">🏦 Major Insurers in Malaysia</h3>
        <p className="text-ink-secondary text-[13px] mb-4">Panel lists, LOG warnings, and pre-admission windows for {insurers.length} insurers.</p>
        <div className="space-y-2">
          {insurers.map(ins => {
            const isOpen = openIns === ins.id
            return (
              <div key={ins.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenIns(isOpen ? null : ins.id)}>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-ink text-[14px]">{ins.name}</span>
                    {ins.logLimitWarning && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-700">⚠ LOG warning</span>
                    )}
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 space-y-3 border-t border-ink-quaternary pt-3">
                    {ins.generalNote && <p className="text-ink-secondary text-[13px] leading-relaxed">{ins.generalNote}</p>}
                    {ins.tiers?.length > 0 && (
                      <p className="text-[13px]"><span className="font-medium text-ink">Plans: </span><span className="text-ink-secondary">{ins.tiers.join(' · ')}</span></p>
                    )}
                    {ins.logLimitWarning && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-[12px] text-red-800">
                        ⚠ <strong>LOG Limit Warning:</strong> {ins.logLimitWarning}
                      </div>
                    )}
                    {ins.preAdmissionWindow && (
                      <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 text-[12px] text-blue-900">
                        📅 <strong>Pre-Admission Window:</strong> {ins.preAdmissionWindow}
                      </div>
                    )}
                    {ins.cashlessHospitals?.length > 0 && (
                      <p className="text-[12px] text-ink-secondary">
                        <span className="font-medium text-ink">Panel hospitals ({ins.cashlessHospitals.length} IDs listed).</span> Always confirm on the day of admission as panels change.
                      </p>
                    )}
                    {ins.website && (
                      <a href={ins.website} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-brand text-[13px] hover:underline">
                        🌐 {ins.website.replace('https://','').replace('http://','')}
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
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

/* ─── Doctor Verification ────────────────────────────────────────── */

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

/* ─── Clinical Trials ────────────────────────────────────────────── */

function TrialsSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] leading-relaxed max-w-[640px]">
        Clinical trials provide access to treatments not yet commercially available — sometimes at no cost to the patient. Malaysia has an active trial ecosystem at several major centres.
      </p>

      {/* Steps */}
      <div className="space-y-3">
        {[
          { n:'1', title:'Search the Malaysian National Registry (NMRR)',
            body:'All clinical trials conducted in Malaysia must be registered with the National Medical Research Register (NMRR). Filter by disease type, phase, and "Open for Recruitment" status.',
            link:{ label:'nmrr.gov.my — Malaysian Trial Register', url:'https://www.nmrr.gov.my' } },
          { n:'2', title:'Search International Databases',
            body:'ClinicalTrials.gov (US NIH) lists many trials that include Malaysian sites. Search by condition and filter by country "Malaysia".',
            link:{ label:'clinicaltrials.gov', url:'https://clinicaltrials.gov' } },
          { n:'3', title:'Contact Trial Coordinators Directly',
            body:'Call the research/trial coordinator — NOT the main hospital line. Ask specifically: "I would like to inquire about open clinical trials for [condition]."' },
          { n:'4', title:'Ask Your Specialist for a Referral',
            body:'Your current treating specialist can refer you to the trial centre\'s research unit. Ask: "Are there any clinical trials I might be eligible for at [hospital]?"' },
          { n:'5', title:'Understand What the Trial Covers',
            body:'Ask the trial coordinator before consenting: "What costs are covered by the trial, and what am I personally responsible for?" Common coverage includes: experimental drug, all trial-related tests, scans, and monitoring. Sometimes: transport, accommodation, and caregiver support. Get this in writing before consenting.',
          },
        ].map(({ n, title, body, link }) => (
          <div key={n} className="bg-surface-secondary rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-white text-[12px] font-bold">{n}</div>
              <div>
                <h4 className="font-semibold text-ink text-[14px] mb-1">{title}</h4>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{body}</p>
                {link && <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-1.5 text-brand text-[12px] font-medium hover:underline">🔗 {link.label}</a>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key centres */}
      <div>
        <h3 className="font-bold text-ink text-[15px] mb-3">Key Trial Centres in Malaysia</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name:'Beacon Hospital (Petaling Jaya)', desc:'SOLARIS (Southeast Asia Oncology Research Institute) — one of SE Asia\'s most active oncology trial sites. Phase 1–3 cancer trials.' },
            { name:'Sunway Medical Centre (Petaling Jaya)', desc:'Active in breast cancer, colorectal, haematology, and immunotherapy trials. Ask for their Clinical Research Unit.' },
            { name:'UMMC (University Malaya Medical Centre)', desc:'Largest academic trial centre across all specialties. NMRR-registered. Ask your specialist for referral to the Clinical Trials Unit.' },
            { name:'Institut Kanser Negara (IKN)', desc:'National cancer institute — conducts and coordinates national oncology trials. Specialises in cancers prevalent in Malaysia.' },
          ].map(({ name, desc }) => (
            <div key={name} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[13px] mb-1">{name}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phases */}
      <div>
        <h3 className="font-bold text-ink text-[15px] mb-3">Understanding Trial Phases</h3>
        <div className="space-y-2">
          {[
            { phase:'Phase 1', desc:'Safety testing in small groups — highest experimental risk, may have early treatment benefit for late-stage patients.' },
            { phase:'Phase 2', desc:'Efficacy and dosing — promising results in specific conditions. Smaller groups, actively monitored.' },
            { phase:'Phase 3', desc:'Large-scale comparison with current standard treatment — often a good option if standard therapy has failed. This is where most patients access trials.' },
            { phase:'Phase 4', desc:'Post-approval safety monitoring — usually accessible treatment with minimal experimental risk.' },
          ].map(({ phase, desc }) => (
            <div key={phase} className="flex items-start gap-3 bg-surface-secondary rounded-xl p-3 text-[13px]">
              <span className="font-bold text-brand w-20 flex-shrink-0">{phase}</span>
              <span className="text-ink-secondary leading-relaxed">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Night Cover ────────────────────────────────────────────────── */

const NIGHT_ROWS = [
  { type:'Academic Hospitals', sub:'UMMC, UKMMC, HUSM, USM',
    cover:'Resident doctors (MO/HO) + registrar, with specialist consultant on backup call',
    onSite:'⚠ Consultant on backup call (phone / 15 min response)',
    rec:'Best coverage — teaching hospital structure means multi-level overnight presence.',
    risk:'low' },
  { type:'IJN (Institut Jantung Negara)', sub:'Cardiac only',
    cover:'24/7 cardiac registrar on-site. Cardiac surgeon on call.',
    onSite:'✅ Cardiac specialist always accessible',
    rec:'Gold standard for cardiac overnight emergencies.',
    risk:'low' },
  { type:'Government State Hospitals', sub:'HKL, HPP, HSA, HRPB…',
    cover:'Medical Officer (MO) on duty, supported by specialist on-call roster',
    onSite:'⚠ Specialist on-call — response within 30–60 min',
    rec:'Reasonable overnight safety net. MO will escalate complex cases.',
    risk:'medium' },
  { type:'Major Private Hospitals', sub:'Gleneagles, Pantai, Sunway, SJMC',
    cover:'In-house MO or Resident Medical Officer (RMO). Your specialist is on phone call.',
    onSite:'⚠ Your specialist is on phone call only (typically)',
    rec:'Ask specifically: "Is your RMO on-site 24/7 and is there an ICU doctor on-site overnight?"',
    risk:'medium' },
  { type:'Small / Community Private Hospitals', sub:'Day surgery centres, small medical centres',
    cover:'Nurse + on-call GP by phone. May have NO doctor on-site overnight.',
    onSite:'❌ Nurse only on-site overnight at some facilities',
    rec:'HIGH RISK for complex post-operative patients. Always ask: "Is a doctor physically on-site overnight?"',
    risk:'high' },
]

function NightSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[600px] leading-relaxed">
        In Malaysia, who is available overnight (10pm–7am) varies significantly by hospital type. Understanding this before admission can be critical for complex or post-operative patients.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-ink-quaternary">
        <table className="w-full text-[12px] min-w-[700px]">
          <thead>
            <tr className="bg-surface-secondary border-b border-ink-quaternary">
              <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Hospital Type</th>
              <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Overnight Cover</th>
              <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Specialist On-Site?</th>
              <th className="text-left px-4 py-3 font-semibold text-ink-secondary">Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {NIGHT_ROWS.map(row => (
              <tr key={row.type} className="border-t border-ink-quaternary">
                <td className="px-4 py-3 font-semibold text-ink">
                  {row.type}
                  <div className="font-normal text-ink-tertiary text-[11px]">{row.sub}</div>
                </td>
                <td className="px-4 py-3 text-ink-secondary">{row.cover}</td>
                <td className={`px-4 py-3 font-medium ${row.risk === 'low' ? 'text-emerald-700' : row.risk === 'high' ? 'text-red-700' : 'text-amber-700'}`}>
                  {row.onSite}
                </td>
                <td className={`px-4 py-3 ${row.risk === 'high' ? 'text-red-800 font-semibold' : 'text-ink-secondary'}`}>{row.rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-semibold text-amber-900 text-[14px] mb-2">The Question to Ask Before Admission</h3>
        <blockquote className="border-l-4 border-amber-400 pl-4 text-amber-900 text-[14px] italic mb-2">
          "If I deteriorate at 3am, who is the doctor physically on-site — and can a specialist be at my bedside within 15 minutes?"
        </blockquote>
        <p className="text-amber-800 text-[12px]">This is your right as a patient under the MOH Patient Rights Charter. You are entitled to a clear answer before signing admission documents.</p>
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

/* ─── Medical Glossary ───────────────────────────────────────────── */

function GlossarySection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')

  const categories = ['all', ...Array.from(new Set(GLOSSARY.map(g => g.category)))]
  const catLabel = { all: 'All', hospital: 'Hospital Settings', insurance: 'Insurance', procedure: 'Procedures', drug: 'Medications', admin: 'Admin & Billing', financial: 'Financial Aid' }

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
