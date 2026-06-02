import { useState } from 'react'
import { Link } from 'react-router-dom'

const TOPICS = [
  { id: 'access',       icon: '🆔', label: 'Healthcare Access',      desc: 'Citizen vs PR vs Foreigner — who gets what' },
  { id: 'importance',   icon: '🛡️', label: 'Why Insurance Matters',  desc: 'Public system gaps and out-of-pocket risks' },
  { id: 'choose',       icon: '🎯', label: 'Choosing for Your Case',  desc: 'Match insurance type to your needs' },
  { id: 'premium',      icon: '📊', label: 'Premium Calculation',     desc: 'How premiums are calculated — formula explained' },
  { id: 'comparison',   icon: '⚖️', label: 'Takaful vs Conventional', desc: 'Islamic vs conventional products compared' },
  { id: 'glossary',     icon: '📖', label: 'Insurance Terms',         desc: 'Insurance jargon and abbreviations decoded' },
]

const ACCESS_MATRIX = [
  {
    status: 'Malaysian Citizen',
    icon: '🇲🇾',
    color: '#16a34a',
    publicClinics: 'Free to RM 10',
    publicHospital: 'Free (MOH-subsidised)',
    privateClinic: 'RM 80–300',
    privateHospital: 'RM 500–10,000+ (depends on procedure)',
    special: 'Eligible for LHDN tax relief (RM 1,000–RM 8,000), MySalam, EPF Account 2, SOCSO (if employed)',
    notes: ['Full public healthcare entitlement', 'Eligible for all government schemes', 'Can claim medical expenses for tax relief', 'Subsidised medications at public hospitals'],
  },
  {
    status: 'Permanent Resident (PR)',
    icon: '📋',
    color: '#0891b2',
    publicClinics: 'RM 20–50',
    publicHospital: 'RM 50–200 (not fully subsidised)',
    privateClinic: 'RM 80–300 (same rate as citizens)',
    privateHospital: 'RM 500–10,000+ (same rate)',
    special: 'NOT eligible for LHDN relief, MySalam, EPF Account 2, or SOCSO. Private insurance is essential.',
    notes: ['Public system charges higher fees than citizens', 'No government subsidies or schemes', 'Must rely on private insurance', 'Medical insurance is highly recommended'],
  },
  {
    status: 'Foreigner / Expatriate',
    icon: '🌍',
    color: '#d97706',
    publicClinics: 'RM 50–150',
    publicHospital: 'RM 200–500 (non-subsidised)',
    privateClinic: 'RM 100–400 (higher rate than locals)',
    privateHospital: 'RM 1,000–15,000+ (full rate, no discounts)',
    special: 'NO public healthcare entitlement. MUST have private medical insurance or risk massive out-of-pocket costs. Some countries\' embassies provide healthcare schemes for nationals.',
    notes: ['Completely excluded from government schemes', 'Full private rates apply', 'Medical insurance is mandatory for safety', 'Some insurers exclude pre-existing conditions for foreigners'],
  },
]

const GAP_ANALYSIS = [
  {
    category: 'Waiting Times',
    icon: '⏳',
    publicGap: 'Public system: 6–12 months wait for elective surgery',
    insurance: 'Insurance: Usually 1–4 weeks for non-emergency procedures',
    riskIfUninsured: 'Delayed care, disease progression during wait',
  },
  {
    category: 'ICU & Critical Care',
    icon: '🚨',
    publicGap: 'Public ICU is overcrowded; no guarantee of ICU bed if needed',
    insurance: 'Insurance: Guaranteed ICU placement in partner private hospital',
    riskIfUninsured: 'Risk of being transferred to crowded wards; complications may go untreated',
  },
  {
    category: 'Specialist Choice',
    icon: '👨‍⚕️',
    publicGap: 'Public system: Doctor assigned by government; no choice',
    insurance: 'Insurance: Can choose your specialist; second opinions allowed',
    riskIfUninsured: 'No control over doctor or treatment approach',
  },
  {
    category: 'High-Cost Procedures',
    icon: '💰',
    publicGap: 'Some procedures not available publicly (e.g., proton therapy, advanced robotics)',
    insurance: 'Insurance: Access to latest technology and treatments',
    riskIfUninsured: 'May need to pay full private price (RM 50,000–500,000+) out-of-pocket',
  },
  {
    category: 'Outpatient Follow-up',
    icon: '📅',
    publicGap: 'Public: Follow-up visits also take months to book',
    insurance: 'Insurance: Quick follow-up appointments, short wait times',
    riskIfUninsured: 'Gaps in monitoring = higher risk of complications',
  },
]

const INSURANCE_TYPES = [
  {
    type: 'Medical Card (Indemnity)',
    icon: '💳',
    who: 'Best for: Healthy individuals, families, expats, anyone wanting broad coverage',
    covers: 'Hospitalisation, surgery, ICU, specialist fees, medication, diagnostic tests',
    noCovers: 'Routine check-ups, dental (usually), vision (usually), physiotherapy (limited)',
    cost: 'RM 100–500/month per person',
    whyChoose: 'Broadest coverage; reimburses almost any hospital cost up to your annual limit',
    consideration: 'Higher premiums; may have co-pays and deductibles',
  },
  {
    type: 'Critical Illness',
    icon: '⚠️',
    who: 'Best for: Breadwinners, sole income earners, high financial risk',
    covers: 'Lump sum payout on diagnosis of 40–60 critical illnesses (cancer, heart attack, stroke, kidney failure, etc.)',
    noCovers: 'Daily medical expenses; does not reimburse hospital bills — it is a cash benefit',
    cost: 'RM 30–150/month depending on age and coverage',
    whyChoose: 'Pays cash when you most need it; can cover lost income, medical gaps, family support',
    consideration: 'Does NOT pay hospital bills; must be combined with medical card for full protection',
  },
  {
    type: 'Major Medical (Catastrophic)',
    icon: '🏥',
    who: 'Best for: Budget-conscious individuals, employees with employer coverage for routine care',
    covers: 'Hospitalisation and major procedures only; high deductible (RM 2,000–5,000)',
    noCovers: 'Outpatient visits, medications, diagnostic tests (except during hospitalisation)',
    cost: 'RM 40–150/month (much cheaper than medical card)',
    whyChoose: 'Protects against catastrophic expenses; lower premiums',
    consideration: 'Only covers inpatient care; out-of-pocket costs for other expenses can add up',
  },
  {
    type: 'Group Insurance (via Employer)',
    icon: '🏢',
    who: 'Best for: Employees (usually automatic)',
    covers: 'Usually medical card, critical illness rider, accidental death',
    noCovers: 'Family members often excluded unless added as dependent',
    cost: 'Employer-paid (free to you); sometimes can add family at discounted rate',
    whyChoose: 'Often better rates than individual insurance; employer subsidises premium',
    consideration: 'Coverage ends if you leave the job; you lose coverage and must buy individual policy',
  },
  {
    type: 'Takaful (Islamic Insurance)',
    icon: '☪️',
    who: 'Best for: Muslims, those preferring Sharia-compliant products, anyone comfortable with takaful model',
    covers: 'Same coverage as conventional medical cards / critical illness',
    noCovers: 'Same exclusions as equivalent conventional product',
    cost: 'Similar to conventional (RM 100–500/month) but structured as "shared contributions"',
    whyChoose: 'Complies with Islamic principles; profits shared with participants',
    consideration: 'No difference in actual benefits; choice is religious/ethical preference',
  },
]

const PREMIUM_FACTORS = [
  {
    factor: 'Age',
    icon: '🎂',
    formula: 'Base premium doubles approximately every 10 years from age 30 onwards',
    example: 'Age 25: RM 100/month → Age 35: RM 150/month → Age 45: RM 250/month → Age 55: RM 450/month',
    layman: 'Younger = cheaper. Older = more expensive because age brings more health risks.',
    professional: 'Insurance company uses mortality/morbidity tables (actuarial data) showing health claims increase exponentially with age. Risk increases = premium increases.',
  },
  {
    factor: 'Health Status',
    icon: '❤️',
    formula: 'Pre-existing conditions add surcharge: 25%–100%+ depending on severity',
    example: 'Diabetes: +30% surcharge | Cancer history: +100%–200% | High blood pressure: +15%–25%',
    layman: 'If you already have a health condition, insurance costs more. Some conditions may be excluded entirely.',
    professional: 'Underwriting risk assessment based on past diagnosis codes (ICD-10). Each condition carries a relative risk factor (RRF) that multiplies the base premium.',
  },
  {
    factor: 'Occupation / Risk Class',
    icon: '👷',
    formula: 'Manual/hazardous jobs add 10%–50% surcharge over office workers',
    example: 'Office worker: 1.0× | Factory worker: 1.15× | Construction: 1.35× | Deep-sea diver: 1.5–2.0×',
    layman: 'Dangerous jobs cost more because workers have higher injury/illness rates.',
    professional: 'Occupation coded per insurance classification (ICBEN, SOC). High-risk codes (e.g., mining, heavy machinery) get higher relative risk multipliers.',
  },
  {
    factor: 'Lifestyle Factors',
    icon: '🚬',
    formula: 'Smoking adds 50%+ surcharge; frequent flyers/adventurers add 10%–30%',
    example: 'Non-smoker, sedentary: 1.0× | Smoker, same age: 1.5–1.8× | Smoker + extreme sports: 2.0–3.0×',
    layman: 'Smoking makes insurance much more expensive. Dangerous hobbies (skydiving, mountaineering) cost more.',
    professional: 'Tobacco use is the largest modifiable risk factor; alone adds RM 50–100/month to medical cards. Adventure/extreme sports coded as occupational hazard class.',
  },
  {
    factor: 'Sum Assured (Coverage Limit)',
    icon: '💵',
    formula: 'Premium scales linearly with sum assured: RM 100,000 cover costs ≈ 2× the cost of RM 50,000 cover',
    example: 'RM 100k annual limit: RM 150/month | RM 250k annual limit: RM 300/month | RM 500k annual limit: RM 550/month',
    layman: 'Higher coverage = higher premium. Choose a limit that matches your expected healthcare costs.',
    professional: 'Premium loading per RM 1,000 of SI (Sum Insured). Insurer sets underwriting rule: e.g., RM 200k SI allows RM 25/RM1k = RM 5,000 annual premium.',
  },
  {
    factor: 'Gender',
    icon: '⚧',
    formula: 'Women aged 20–50: slightly higher (maternity risks) | After 50: similar rates',
    example: 'Female age 30: RM 130/month | Male age 30: RM 120/month | Female age 60: RM 350/month',
    layman: 'Women of childbearing age pay slightly more due to pregnancy and maternity care. This difference disappears after menopause.',
    professional: 'Maternity-eligible ages (18–50) carry additional rider cost (RM 15–40/month) unless specifically excluded. Post-50 female rates align with male rates.',
  },
]

const FORMULA_BREAKDOWN = [
  {
    label: 'Base Premium',
    desc: 'Starting rate per 1,000 sum assured, varies by insurer and product',
    example: 'RM 30 per RM 1,000 SI',
  },
  {
    label: '× Age Factor',
    desc: 'Multiplier for age band (e.g., 30–34: 1.05, 35–39: 1.20)',
    example: '× 1.20',
  },
  {
    label: '× Health Factor',
    desc: 'Multiplier for pre-existing conditions (1.0 = none, 1.30 = mild, 2.0 = severe)',
    example: '× 1.30 (diabetes)',
  },
  {
    label: '× Occupational Risk',
    desc: 'Multiplier for job hazard (1.0 = office, 1.35 = construction)',
    example: '× 1.35',
  },
  {
    label: '× Lifestyle',
    desc: 'Multiplier for smoking, extreme sports (1.0 = non-smoker, 1.5 = smoker)',
    example: '× 1.0 (non-smoker)',
  },
  {
    label: '× Sum Assured',
    desc: 'Annual limit in RM, divided by 1,000',
    example: '× 250,000 / 1,000 = 250',
  },
  {
    label: '= Annual Premium',
    desc: 'Total annual cost',
    example: 'RM 30 × 1.20 × 1.30 × 1.35 × 1.0 × 250 = RM 15,795/year = RM 1,316/month',
  },
]

const TAKAFUL_VS_CONVENTIONAL = [
  {
    aspect: 'Structure',
    takaful: 'Mutual fund: participants pool money as a shared fund',
    conventional: 'Commercial insurance: customers buy risk transfer from company',
    remark: 'Takaful is collective; conventional is transactional',
  },
  {
    aspect: 'Profit Sharing',
    takaful: 'Surplus (if takaful fund is profitable) is shared with participants as dividend',
    conventional: 'Profit stays with insurance company shareholders',
    remark: 'You may get a bonus with takaful if the fund performs well',
  },
  {
    aspect: 'Shariah Compliance',
    takaful: 'No interest (riba), no speculation, operations must comply with Islamic law',
    conventional: 'May involve interest-based investments; no religious restrictions',
    remark: 'Takaful has a Shariah Board to ensure compliance',
  },
  {
    aspect: 'Investment',
    takaful: 'Funds invested in Shariah-compliant assets only (halal stocks, Islamic bonds)',
    conventional: 'Invested in any asset to maximise returns (including interest-bearing securities)',
    remark: 'Different investment universes can lead to different returns',
  },
  {
    aspect: 'Premium Price',
    takaful: 'Generally similar to conventional (RM 100–500/month for medical card)',
    conventional: 'Similar pricing; competition drives rates to parity',
    remark: 'Shop around — price differences are due to company, not takaful vs conventional',
  },
  {
    aspect: 'Claims Process',
    takaful: 'Same as conventional — submit docs, wait for assessment, get paid',
    conventional: 'Standard claims process',
    remark: 'No practical difference in claims handling',
  },
  {
    aspect: 'Eligibility',
    takaful: 'Open to anyone; Muslims prefer for religious reasons; non-Muslims can also buy',
    conventional: 'Open to anyone',
    remark: 'Takaful is a choice, not a restriction',
  },
  {
    aspect: 'Coverage Range',
    takaful: 'Medical card, critical illness, personal accident, travel insurance (all in Shariah form)',
    conventional: 'Same coverage types available',
    remark: 'Same benefits, different structure',
  },
]

const INSURANCE_GLOSSARY = [
  {
    term: 'Underwriting',
    abbr: 'N/A',
    def: "Process where insurer reviews your health history, age, occupation, and lifestyle to decide if they'll insure you and at what price.",
    example: 'Your underwriting may include a health questionnaire and blood tests.',
  },
  {
    term: 'Sum Assured (SI)',
    abbr: 'SI',
    def: 'Maximum annual amount the insurer will pay out for your claims. Also called "coverage limit" or "annual limit".',
    example: 'RM 250,000 SI means your plan covers up to RM 250k of healthcare costs per year.',
  },
  {
    term: 'Premium',
    abbr: 'N/A',
    def: 'The amount you pay each month or year for your insurance policy.',
    example: 'RM 300/month premium = RM 3,600 annual payment.',
  },
  {
    term: 'Deductible',
    abbr: 'N/A',
    def: 'Amount you must pay out-of-pocket before insurance starts reimbursing. Only applies if your plan has one.',
    example: 'RM 2,000 deductible means you pay the first RM 2,000 of any claim, then insurance covers the rest.',
  },
  {
    term: 'Co-payment / Co-insurance',
    abbr: 'Co-pay / Co-insurance',
    def: 'Your share of the cost. Co-pay is a fixed amount per visit; co-insurance is a percentage of the bill.',
    example: 'RM 50 co-pay per doctor visit, OR 20% co-insurance (you pay 20%, insurance pays 80%).',
  },
  {
    term: 'Exclusions',
    abbr: 'N/A',
    def: 'Conditions or treatments your policy does NOT cover.',
    example: 'Common exclusions: pregnancy for first 12 months, cosmetic surgery, high-risk sports.',
  },
  {
    term: 'Pre-existing Condition (PEC)',
    abbr: 'PEC',
    def: 'Any illness or injury you had BEFORE buying the policy. Insurers may exclude or load premiums for PECs.',
    example: 'If you have diabetes before buying insurance, it may be excluded for the first 2 years (waiting period).',
  },
  {
    term: 'Waiting Period',
    abbr: 'N/A',
    def: 'Time period from policy start during which certain claims are not covered. Usually 12–24 months for pre-existing conditions.',
    example: 'You buy a policy on Jan 1. Diabetes diagnosed on March 15 — if diabetes is considered PEC, it may not be covered until Jan 1 next year.',
  },
  {
    term: 'Rider',
    abbr: 'N/A',
    def: 'Add-on coverage to your base plan. You can buy riders to expand what your policy covers.',
    example: 'Base plan: medical card. Optional riders: critical illness rider (RM 50/month), maternity rider (RM 30/month).',
  },
  {
    term: 'Cashless / Direct Billing',
    abbr: 'N/A',
    def: 'Insurer pays the hospital directly; you don\'t pay upfront and get reimbursed.',
    example: 'You go to a panel hospital, present your card, walk out. Insurance pays the hospital; you pay nothing (or just co-pay).',
    remark: 'Only works at hospitals in your insurer\'s panel network.',
  },
  {
    term: 'Panel Hospital',
    abbr: 'N/A',
    def: 'Hospital that has a contract with your insurer. Using a panel hospital = cashless benefit + better rates.',
    example: 'Your AIA card lists 100+ panel hospitals. Use one of them for cashless; use non-panel hospital and you pay upfront, then claim reimbursement.',
  },
  {
    term: 'Reimbursement',
    abbr: 'N/A',
    def: 'You pay the hospital upfront, then submit bills and receipts to insurance to get paid back.',
    example: 'Non-panel hospital charges RM 5,000. You pay RM 5,000. You send receipt to AIA; they reimburse you RM 3,500 (minus co-insurance and deductible).',
  },
  {
    term: 'Claim',
    abbr: 'N/A',
    def: 'Request to insurer to pay for medical expenses you incurred.',
    example: 'After surgery, you file a claim with hospital bills, invoices, and doctor\'s discharge letter.',
  },
  {
    term: 'Subrogation',
    abbr: 'N/A',
    def: 'If a third party (e.g., person who caused your accident) is responsible, insurer can recover money from them.',
    example: 'You get hit by a car and need RM 50,000 treatment. Insurance pays you. Insurance can sue the driver for RM 50,000.',
  },
  {
    term: 'Policy Anniversary',
    abbr: 'N/A',
    def: 'Annual date when your coverage renews and your premium is recalculated (may increase with age).',
    example: 'Policy starts Jan 1, 2025. Policy anniversary is Jan 1 every year. On Jan 1, 2026, your premium may increase by 5–10% due to age.',
  },
  {
    term: 'Grace Period',
    abbr: 'N/A',
    def: 'Short window (usually 30 days) after premium due date to pay without losing coverage.',
    example: 'Premium due on 1st of month. You can pay anytime in the month and still keep coverage; after 30 days, policy lapses.',
  },
  {
    term: 'Lapse',
    abbr: 'N/A',
    def: 'When your policy ends because you didn\'t pay premium on time or policy term expired.',
    example: 'You miss premium payment for 60 days → policy lapses → no coverage → any claims are denied.',
  },
  {
    term: 'Limit of Indemnity (LOI)',
    abbr: 'LOI',
    def: 'Same as Sum Assured; maximum amount insurer will pay per claim or per year.',
    example: 'RM 250,000 LOI medical card will not pay more than RM 250k in total claims per policy year.',
  },
  {
    term: 'LOG (Length of Stay)',
    abbr: 'LOG',
    def: 'Limit on number of days per hospitalisation that insurance will cover. Beyond LOG, you pay out-of-pocket.',
    example: 'LOG = 90 days means insurance covers up to 90 days in hospital. Day 91+ you pay. (Rarely used in Malaysia now, but important in some older policies.)',
  },
]

export default function Insurance() {
  const [active, setActive] = useState('access')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Insurance & Healthcare Access</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Navigate medical insurance for your needs.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Understanding healthcare access by status, why insurance matters, how to choose the right policy, and how premiums are calculated.
          </p>
        </div>
      </div>

      {/* Topic nav */}
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

        {active === 'access'       && <AccessSection />}
        {active === 'importance'   && <ImportanceSection />}
        {active === 'choose'       && <ChooseSection />}
        {active === 'premium'      && <PremiumSection />}
        {active === 'comparison'   && <ComparisonSection />}
        {active === 'glossary'     && <GlossarySection />}
      </div>
    </div>
  )
}

function AccessSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        Your healthcare entitlements and costs depend on your immigration status. Here's what each group is entitled to and what they must pay.
      </p>
      {ACCESS_MATRIX.map(item => (
        <div key={item.status} className="bg-surface rounded-xl border border-ink-quaternary p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-2xl">{item.icon}</div>
            <div>
              <h3 className="text-[16px] font-bold text-ink">{item.status}</h3>
              <p className="text-[12px] text-white px-2 py-1 bg-brand rounded mt-1 w-fit" style={{ backgroundColor: item.color }}>Entitlements & Costs</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-surface-secondary rounded-lg p-3">
              <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Public Clinics</p>
              <p className="text-[14px] font-bold text-ink">{item.publicClinics}</p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-3">
              <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Public Hospital</p>
              <p className="text-[14px] font-bold text-ink">{item.publicHospital}</p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-3">
              <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Private Clinic</p>
              <p className="text-[14px] font-bold text-ink">{item.privateClinic}</p>
            </div>
            <div className="bg-surface-secondary rounded-lg p-3">
              <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Private Hospital</p>
              <p className="text-[14px] font-bold text-ink">{item.privateHospital}</p>
            </div>
          </div>
          <div className="border-t border-ink-quaternary pt-4 mb-4">
            <p className="text-[13px] font-semibold text-ink mb-2">Key Points:</p>
            <p className="text-[13px] text-ink-secondary mb-3">{item.special}</p>
            <ul className="text-[13px] text-ink-secondary space-y-1">
              {item.notes.map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-brand font-bold mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <p className="text-[12px] font-semibold text-orange-900 mb-1">💡 Key Takeaway</p>
        <p className="text-[13px] text-orange-800">
          Malaysian citizens have access to heavily subsidised public healthcare. PRs and foreigners must rely on private insurance. Without insurance, a single major illness can cost RM 100,000–1,000,000+.
        </p>
      </div>
    </div>
  )
}

function ImportanceSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        The public healthcare system is excellent but overcrowded. Insurance bridges critical gaps and protects against catastrophic costs.
      </p>
      {GAP_ANALYSIS.map(gap => (
        <div key={gap.category} className="bg-surface rounded-xl border border-ink-quaternary p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{gap.icon}</span>
            <h3 className="text-[15px] font-bold text-ink">{gap.category}</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Public System Reality</p>
              <p className="text-[13px] text-ink">{gap.publicGap}</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">With Insurance</p>
              <p className="text-[13px] text-ink text-brand font-medium">{gap.insurance}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-[12px] font-semibold text-red-900 mb-1">⚠️ Risk if Uninsured</p>
              <p className="text-[13px] text-red-800">{gap.riskIfUninsured}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-[12px] font-semibold text-green-900 mb-2">✓ Why Insurance is Critical</p>
        <ul className="text-[13px] text-green-800 space-y-1">
          <li>• Guarantees ICU bed and critical care if needed</li>
          <li>• Access to procedures not available publicly (proton therapy, robotics, etc.)</li>
          <li>• Choice of doctor and specialist</li>
          <li>• Faster treatment (weeks vs. months)</li>
          <li>• Peace of mind: RM 500,000+ procedure costs are covered</li>
        </ul>
      </div>
    </div>
  )
}

function ChooseSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        Different people have different needs. Use these questions to match yourself to the right insurance type.
      </p>
      <div className="bg-brand/5 border border-brand/20 rounded-xl p-4 mb-6">
        <p className="text-[13px] font-semibold text-brand mb-3">❓ Ask Yourself These Questions</p>
        <div className="space-y-2 text-[13px] text-ink-secondary">
          <p><strong>1. What is your main concern?</strong> A catastrophic illness? Routine care? Chronic disease?</p>
          <p><strong>2. How much can you afford monthly?</strong> RM 100? RM 300? RM 500?</p>
          <p><strong>3. Do you have pre-existing conditions?</strong> (Diabetes, hypertension, asthma?)</p>
          <p><strong>4. Is your employer offering group insurance?</strong> (Usually the best value)</p>
          <p><strong>5. Do you have dependents?</strong> (Spouse, children, elderly parents?)</p>
          <p><strong>6. What's your risk profile?</strong> (Healthy & young? Chronic disease? High-risk job?)</p>
        </div>
      </div>
      {INSURANCE_TYPES.map(t => (
        <div key={t.type} className="bg-surface rounded-xl border border-ink-quaternary p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{t.icon}</span>
            <h3 className="text-[16px] font-bold text-ink">{t.type}</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">👤 Best For</p>
              <p className="text-[13px] text-ink">{t.who}</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">✓ What It Covers</p>
              <p className="text-[13px] text-ink">{t.covers}</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-[12px] font-semibold text-red-900 mb-1">✗ What It Doesn't Cover</p>
              <p className="text-[13px] text-red-800">{t.noCovers}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-secondary rounded-lg p-3">
                <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Cost</p>
                <p className="text-[13px] font-bold text-ink">{t.cost}</p>
              </div>
              <div className="bg-surface-secondary rounded-lg p-3">
                <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">Key Benefit</p>
                <p className="text-[13px] text-ink">{t.whyChoose}</p>
              </div>
            </div>
            <div className="border-t border-ink-quaternary pt-3">
              <p className="text-[12px] font-semibold text-ink-secondary mb-1">⚠️ Consider</p>
              <p className="text-[13px] text-ink-secondary">{t.consideration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function PremiumSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        Insurance companies use a formula to calculate your premium. Understanding the factors helps you know why your price is what it is.
      </p>

      {/* Simplified formula visualization */}
      <div className="bg-brand/5 border border-brand/20 rounded-xl p-6">
        <p className="text-[13px] font-bold text-ink mb-4">📐 The Premium Formula (Simplified)</p>
        <div className="space-y-2 font-mono text-[12px] bg-white rounded-lg p-4 border border-ink-quaternary">
          {FORMULA_BREAKDOWN.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              {i === 0 && <span className="text-ink-secondary">{step.label}</span>}
              {i > 0 && i < FORMULA_BREAKDOWN.length - 1 && <span className="text-brand font-bold">{step.label}</span>}
              {i === FORMULA_BREAKDOWN.length - 1 && <span className="text-brand font-bold">{step.label}</span>}
              <span className="text-ink-secondary text-[11px] flex-1">{step.example}</span>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-ink-secondary mt-3">
          <strong>Example result:</strong> RM 30 × 1.20 × 1.30 × 1.35 × 1.0 × 250 = <strong>RM 15,795/year = RM 1,316/month</strong>
        </p>
      </div>

      {/* Factor breakdown */}
      <p className="text-[14px] font-bold text-ink mt-8">Key Premium Factors Explained</p>
      {PREMIUM_FACTORS.map(f => (
        <div key={f.factor} className="bg-surface rounded-xl border border-ink-quaternary p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">{f.icon}</span>
            <h3 className="text-[16px] font-bold text-ink">{f.factor}</h3>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">🔢 In the Formula</p>
              <p className="text-[13px] text-ink font-mono bg-surface-secondary rounded p-2">{f.formula}</p>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-ink-secondary uppercase tracking-wider mb-1">📊 Real Numbers</p>
              <p className="text-[13px] text-ink font-mono">{f.example}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-[12px] font-semibold text-blue-900 mb-1">💬 In Plain English</p>
              <p className="text-[13px] text-blue-800">{f.layman}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-[12px] font-semibold text-purple-900 mb-1">👔 Professional Explanation</p>
              <p className="text-[13px] text-purple-800">{f.professional}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-[12px] font-semibold text-green-900 mb-2">💡 What You Can Control</p>
        <ul className="text-[13px] text-green-800 space-y-1">
          <li>✓ <strong>Quit smoking</strong> — saves RM 50–100+/month</li>
          <li>✓ <strong>Manage chronic diseases</strong> — controlled diabetes costs less than uncontrolled</li>
          <li>✓ <strong>Choose a safer job</strong> (if possible)</li>
          <li>✓ <strong>Pick appropriate coverage</strong> — don't overpay for features you don't need</li>
          <li>✗ <strong>Cannot control:</strong> Age, family health history, gender (though it's minor)</li>
        </ul>
      </div>
    </div>
  )
}

function ComparisonSection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        Both takaful and conventional insurance provide the same medical coverage. The difference is structure and values.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="bg-surface-secondary border-b border-ink-quaternary">
              <th className="text-left px-4 py-3 font-bold text-ink">Aspect</th>
              <th className="text-left px-4 py-3 font-bold text-ink">☪️ Takaful (Islamic)</th>
              <th className="text-left px-4 py-3 font-bold text-ink">💼 Conventional</th>
              <th className="text-left px-4 py-3 font-bold text-ink">Remark</th>
            </tr>
          </thead>
          <tbody>
            {TAKAFUL_VS_CONVENTIONAL.map((row, i) => (
              <tr key={i} className={`border-b border-ink-quaternary ${i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                <td className="px-4 py-3 font-semibold text-ink">{row.aspect}</td>
                <td className="px-4 py-3 text-ink-secondary">{row.takaful}</td>
                <td className="px-4 py-3 text-ink-secondary">{row.conventional}</td>
                <td className="px-4 py-3 text-ink-secondary italic">{row.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-[12px] font-semibold text-blue-900 mb-2">🎯 Bottom Line</p>
        <p className="text-[13px] text-blue-800">
          Choose based on your values (religious preference) and the insurer's reputation, not structure. Both offer excellent medical coverage. Compare plans from multiple insurers to find the best price and benefits for your situation.
        </p>
      </div>
    </div>
  )
}

function GlossarySection() {
  return (
    <div className="space-y-6">
      <p className="text-ink-secondary text-[14px] max-w-[700px]">
        Insurance has its own language. Here's a decoder for 20 common terms and abbreviations you'll encounter.
      </p>
      <div className="space-y-4">
        {INSURANCE_GLOSSARY.map(item => (
          <div key={item.term} className="bg-surface rounded-xl border border-ink-quaternary p-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-[15px] font-bold text-ink">{item.term}</h3>
                {item.abbr !== 'N/A' && <p className="text-[12px] text-ink-secondary">Abbr: <span className="font-mono text-brand">{item.abbr}</span></p>}
              </div>
            </div>
            <p className="text-[13px] text-ink-secondary mb-2">{item.def}</p>
            <div className="bg-surface-secondary rounded-lg p-3 mb-2">
              <p className="text-[12px] font-semibold text-ink-secondary mb-1">Example:</p>
              <p className="text-[13px] text-ink font-mono">{item.example}</p>
            </div>
            {item.remark && (
              <p className="text-[12px] text-ink-secondary italic">💡 {item.remark}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
