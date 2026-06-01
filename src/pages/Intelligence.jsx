import { useState } from 'react'

const HACKS = [
  {
    num: '01', tag: 'Cost Saving', color: '#1d4ed8',
    title: 'FPP Scheme (Full-Paying Patient)',
    body: 'Most government (MOH) hospitals offer a Full-Paying Patient (FPP) scheme — access specialist care and private rooms at a government hospital, paying roughly 30–60% less than equivalent private hospitals. You skip the long outpatient queue and get direct specialist access. Best for: routine specialist consults, elective surgery, maternity. Apply at the FPP unit with your IC. Tip: FPP rates are not publicly listed — ask directly and request a written estimate.',
  },
  {
    num: '02', tag: 'Insurance Hack', color: '#7c3aed',
    title: 'Pre-Admission Expense Claim (30–90 Day Window)',
    body: 'If outpatient specialist visits — scans, blood tests, specialist consultations — lead to a hospital admission within 30–90 days (varies by insurer), all those pre-admission bills become claimable as "Pre-Admission Medical Expenses". This is the most commonly missed insurance claim in Malaysia. Keep EVERY receipt from every specialist visit, imaging centre, and lab. AIA: typically 30–60 days; Prudential: 60–90 days; Great Eastern: 30–60 days.',
  },
  {
    num: '03', tag: 'Navigation', color: '#0d9488',
    title: 'Stabilise & Transfer Protocol',
    body: 'If admitted to a district or state hospital that lacks a needed specialist, you have the right to request a formal transfer after stabilisation. The receiving hospital must accept government-hospital referrals. Key phrase: "I would like to formally request a transfer to [hospital] for specialist care." The doctor must document this. For complex cardiac cases, IJN accepts direct referrals from any MOH hospital. Do NOT self-discharge — this voids insurance and referral pathway.',
  },
  {
    num: '04', tag: 'Cost Saving', color: '#d97706',
    title: 'Academic-Hybrid Pricing Arbitrage (UMSC, UKMSC)',
    body: 'UMSC (UM Specialist Centre) and UKMSC (UKM Medical Centre) offer private-hospital-standard care at 20–40% below pure private hospital rates. They are not-for-profit university entities — senior consultants are UM/UKM faculty professors. You get Professor-level expertise at SJMC-equivalent facilities for less. Best kept secret in KL for high-end specialist care on a budget.',
  },
  {
    num: '05', tag: 'Critical Caveat', color: '#ef4444',
    title: 'Serdang Heart Centre OT Caveat (2024 Status)',
    body: 'Hospital Sultan Idris Shah (Serdang) has the highest cardiac surgical PCI volume in Southeast Asia. HOWEVER: as of 2024, some open-heart surgery (CABG) cases experience longer OT waiting times. For emergency PCI, Serdang remains the gold standard in Selangor. For elective CABG or valve replacement, confirm current OT wait times directly: +603-8947 5555. Cross-reference with IJN for urgent elective cases.',
  },
  {
    num: '06', tag: 'Insurance Warning', color: '#dc2626',
    title: 'Gleneagles Budget Card Exclusion (LOG Limit)',
    body: 'Gleneagles KL room rates start at RM 380/night. Many insurance plans have a daily LOG (Letter of Guarantee) limit of RM 150–200/night. The gap is YOUR liability every night. On a 5-day stay: RM 1,000–5,000 in unexpected personal expense. Before booking Gleneagles, Prince Court, or Pantai KL: call your insurer, confirm your daily room LOG limit, and verify it matches the hospital\'s minimum room rate. Upgrade your plan before illness, not after.',
  },
  {
    num: '07', tag: 'Cancer / Trials', color: '#059669',
    title: 'ESMO Clinical Trial Access (Beacon, Sunway, UMMC)',
    body: 'Three key centres for international oncology clinical trials: (1) Beacon Hospital — SOLARIS research institute, one of SE Asia\'s most active trial sites; (2) Sunway Medical Centre — breast, colorectal, and haematology trials; (3) UMMC — largest government academic oncology trial centre. To access trials: search clinicaltrials.gov or nmrr.gov.my. Some trials cover all treatment costs. Ask your oncologist for referral specifically to the research unit.',
  },
  {
    num: '08', tag: 'Navigation', color: '#0891b2',
    title: 'HTAR Highest Outpatient Volume (Klang Valley)',
    body: 'Hospital Tengku Ampuan Rahimah (HTAR) in Klang has the highest outpatient volume in the Klang Valley. Waiting time for specialist clinics: 4–8 hours. Plan a full-day visit; arrive by 7:30am (some clinics fill by 8am). However, because of the volume, HTAR doctors see more cases than almost any other hospital — particularly internal medicine, O&G, and paediatrics. High volume = high experience.',
  },
  {
    num: '09', tag: 'Financial Aid', color: '#4f46e5',
    title: 'EPF Account 2 Medical Withdrawal',
    body: 'EPF Account 2 can be withdrawn for medical expenses covering yourself, spouse, parents, children, and in-laws. Eligible: hospitalisation, surgery, specialist treatment, dialysis, chemotherapy, physiotherapy, and certain medical equipment. Apply via i-Akaun (i-Akaun.kwsp.gov.my) or at any EPF branch. Bring: original hospital bills, doctor letter, IC of patient and account holder. Processing: 7–14 working days online, 3 working days at counter.',
  },
  {
    num: '10', tag: 'Financial Aid', color: '#16a34a',
    title: 'MySalam Automatic B40 Coverage',
    body: 'MySalam is a free government-funded critical illness insurance for B40 Malaysians (household income ≤ RM100,000/year). Coverage: RM 8,000 payout upon diagnosis of any of 36 critical illnesses including cancer, heart attack, stroke, and kidney failure. It is AUTOMATIC — no registration, no premium. Check eligibility at mysalam.com.my or call 1-800-88-1234. To claim: submit diagnosis letter + IC + bank details. Many B40 families are unaware they are covered.',
  },
  {
    num: '11', tag: 'Safety', color: '#7c3aed',
    title: 'Night Cover Intelligence (MO vs Specialist Overnight)',
    body: 'Private hospital night cover (10pm–7am) is typically handled by a Medical Officer or Registrar — your specialist is called only if the MO deems necessary. At academic hospitals (UMMC, UKMSC) and IJN, residents and fellows cover overnight with specialist backup. At small private hospitals: there may be NO on-call doctor on-site overnight — only a nurse with a GP on phone. ALWAYS ask before admission: "Who is the overnight doctor if I deteriorate — is a specialist on-site or on phone call?"',
  },
  {
    num: '12', tag: 'Navigation', color: '#0d9488',
    title: 'How to Get a Referral Letter',
    body: 'PUBLIC hospitals: you need a referral letter from a Klinik Kesihatan or district hospital doctor. Without a referral, you wait longer. To get a referral fast: visit Klinik Kesihatan in the morning, bring any existing test results, and state you need a specialist referral. PRIVATE hospitals: no referral needed — book a specialist directly. However, your GP referral letter helps the specialist understand your history and is needed for insurance pre-authorisation. Key tip: bring ALL previous test results, scans, and discharge summaries to every specialist visit — government systems do not share records between hospitals.',
  },
]

const TAG_COLORS = {
  'Cost Saving': '#16a34a',
  'Insurance Hack': '#7c3aed',
  'Navigation': '#0891b2',
  'Critical Caveat': '#dc2626',
  'Insurance Warning': '#dc2626',
  'Cancer / Trials': '#059669',
  'Financial Aid': '#1d4ed8',
  'Safety': '#d97706',
}

const TIERS = [
  {
    icon: '🏘️',
    name: 'Primary Care',
    malay: 'Penjagaan Primer',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-800',
    desc: 'First point of contact. Klinik Kesihatan (government) or GP clinics (private). Handles common illnesses, chronic disease management, vaccinations, minor injuries, and issues referrals to higher tiers.',
  },
  {
    icon: '🏥',
    name: 'District Hospital',
    malay: 'Hospital Daerah',
    color: 'bg-sky-50 border-sky-200',
    textColor: 'text-sky-800',
    desc: 'Covers a district population (~50,000–200,000). Handles general medicine, surgery, O&G, paediatrics, and emergency care. Refers complex cases to state or tertiary hospitals.',
  },
  {
    icon: '🏨',
    name: 'State / General Hospital',
    malay: 'Hospital Negeri / Hospital Umum',
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-800',
    desc: 'Covers an entire state. Handles all major specialties including ICU, cardiology, neurology, oncology. Acts as the referral hub for district hospitals in the state.',
  },
  {
    icon: '🔬',
    name: 'Tertiary / University Hospital',
    malay: 'Hospital Pakar Tertiari',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-800',
    desc: 'Apex referral centres. University-affiliated (UMMC, UKMMC, HUSM). Handles the most complex cases — transplants, experimental treatments, quaternary-level neurosurgery, burns. National referral for rare conditions.',
  },
]

const TOPICS = ['All', 'Cost Saving', 'Navigation', 'Insurance Hack', 'Financial Aid', 'Safety']

export default function Intelligence() {
  const [openHack, setOpenHack] = useState(null)
  const [tagFilter, setTagFilter] = useState('All')

  const visibleHacks = tagFilter === 'All' ? HACKS : HACKS.filter(h => h.tag === tagFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-2">
            Healthcare Intelligence
          </p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight">
            Insider knowledge for smarter healthcare decisions.
          </h1>
          <p className="text-ink-secondary text-[15px] mt-2 max-w-[560px]">
            12 verified intelligence tips, the public referral system explained, and financial aids most Malaysians don't know about.
          </p>
        </div>
      </div>

      {/* Insider Tips */}
      <section className="py-12 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <h2 className="text-[22px] font-bold text-ink tracking-tight">12 Things Most Patients Don't Know</h2>
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {TOPICS.map(t => (
              <button
                key={t}
                onClick={() => setTagFilter(t)}
                className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                  tagFilter === t
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleHacks.map(hack => (
              <HackCard
                key={hack.num}
                hack={hack}
                expanded={openHack === hack.num}
                onToggle={() => setOpenHack(openHack === hack.num ? null : hack.num)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Public Referral System */}
      <section className="bg-surface-secondary py-12 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[22px] font-bold text-ink tracking-tight mb-2">
            The Public Healthcare Referral System
          </h2>
          <p className="text-ink-secondary text-[14px] mb-8 max-w-[560px]">
            Malaysia's public system uses a structured referral ladder. Understanding it helps you navigate faster and avoid unnecessary costs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIERS.map((tier, i) => (
              <div key={tier.name} className={`rounded-2xl border p-5 ${tier.color}`}>
                <div className="text-2xl mb-3">{tier.icon}</div>
                <div className="text-[10px] font-semibold text-ink-tertiary uppercase tracking-wider mb-1">
                  Level {i + 1}
                </div>
                <h3 className={`font-bold text-[15px] mb-0.5 ${tier.textColor}`}>{tier.name}</h3>
                <p className="text-[11px] text-ink-secondary italic mb-2">{tier.malay}</p>
                <p className="text-[12px] text-ink-secondary leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white rounded-2xl border border-ink-quaternary p-5">
            <h3 className="font-semibold text-ink text-[14px] mb-2">How Referrals Work</h3>
            <div className="space-y-2 text-[13px] text-ink-secondary">
              <p>→ Klinik Kesihatan issues a referral letter to the district hospital or directly to a state hospital for urgent cases.</p>
              <p>→ District hospitals refer complex cases up the ladder with a documented referral.</p>
              <p>→ You can request a formal transfer at any time by telling the attending doctor: "I would like to formally request a transfer to [hospital] for specialist care."</p>
              <p>→ Private hospitals operate outside this ladder — you access them directly with no referral required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FPP Guide */}
      <section className="py-12 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[22px] font-bold text-ink tracking-tight mb-2">
            The FPP (Full-Paying Patient) Guide
          </h2>
          <p className="text-ink-secondary text-[14px] mb-7 max-w-[540px]">
            Step-by-step: how to access specialist care in a government hospital as a paying patient.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01', title: 'Check Eligibility',
                desc: 'Any Malaysian can use FPP. You do not need a referral letter for FPP (though having one helps). Walk in and ask for the FPP unit.',
              },
              {
                step: '02', title: 'Find the FPP Unit',
                desc: 'Ask at the hospital\'s main information counter for "Unit Pesakit Berbayar" or "FPP Unit". Not all hospitals have the unit at the front entrance.',
              },
              {
                step: '03', title: 'Request a Written Estimate',
                desc: 'Before committing, ask for a written cost estimate. You are legally entitled to this under the Private Healthcare Facilities and Services Act. Include consultation, OT fees, room rate, and expected days.',
              },
              {
                step: '04', title: 'Book Your Appointment',
                desc: 'FPP appointments are usually available within 1–7 days for non-urgent cases. Bring your IC, any previous test results, and a referral letter if you have one.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-surface-secondary rounded-2xl p-5">
                <div className="text-[28px] font-bold text-ink-quaternary leading-none mb-3">{step}</div>
                <h3 className="font-semibold text-ink text-[14px] mb-2">{title}</h3>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function HackCard({ hack, expanded, onToggle }) {
  const tagColor = TAG_COLORS[hack.tag] || '#64748b'
  return (
    <div
      className="bg-white border border-ink-quaternary rounded-2xl overflow-hidden hover:border-brand/30 transition-colors cursor-pointer"
      style={{ borderLeft: `3px solid ${hack.color}` }}
      onClick={onToggle}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold" style={{ color: hack.color }}>{hack.num}</span>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${tagColor}18`, color: tagColor }}
            >
              {hack.tag}
            </span>
          </div>
          <svg
            className={`flex-shrink-0 text-ink-tertiary transition-transform mt-0.5 ${expanded ? 'rotate-180' : ''}`}
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-semibold text-ink text-[13px] leading-snug">{hack.title}</h3>
        {expanded && (
          <p className="text-ink-secondary text-[12px] leading-relaxed mt-3 pt-3 border-t border-ink-quaternary">
            {hack.body}
          </p>
        )}
      </div>
    </div>
  )
}
