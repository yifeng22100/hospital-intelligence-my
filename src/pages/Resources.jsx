const SECTIONS = [
  {
    icon: '🛡️',
    title: 'Patient Rights in Malaysia',
    items: [
      { q: 'Right to information', a: 'You have the right to a clear explanation of your diagnosis, treatment options, risks, and alternatives in a language you understand.' },
      { q: 'Right to refuse treatment', a: 'You may refuse any proposed treatment. The doctor must document your decision. You should sign a refusal form.' },
      { q: 'Right to a second opinion', a: 'You may seek a second opinion at any time. Request a copy of your medical records — hospitals are legally required to provide them.' },
      { q: 'Right to cost estimate', a: 'For private hospitals, you are entitled to a written cost estimate before elective admission under the Private Healthcare Facilities and Services Act.' },
      { q: 'Right to confidentiality', a: 'Your medical information is confidential and cannot be shared without your consent except in specific legal circumstances.' },
    ],
  },
  {
    icon: '💳',
    title: 'Government Financial Schemes',
    items: [
      { q: 'MySalam', a: 'Free critical illness insurance for B40 Malaysians (household income ≤ RM100,000/year). Covers 36 critical illnesses. Automatic — no registration needed. RM 8,000 payout. Check at mysalam.com.my.' },
      { q: 'Peka B40', a: 'Health screening programme for B40 households. Covers cancer screening, cardiovascular risk assessment, eye examination, and more. Check at pekab40.com.my.' },
      { q: 'EPF Account 2 Withdrawal', a: 'Withdraw EPF Account 2 savings for medical expenses for yourself, spouse, parents, children, and in-laws. Apply at i-Akaun.kwsp.gov.my.' },
      { q: 'SOCSO / PERKESO Medical Benefits', a: 'SOCSO contributors are entitled to medical treatment for work-related injuries and occupational diseases. Employment Injury Scheme covers all treatment costs.' },
      { q: 'Zakat Medical Aid', a: 'State religious bodies (LZMA, LZS, MAIWP) provide zakat aid for medical expenses for eligible Muslims. Contact your state Zakat board.' },
    ],
  },
  {
    icon: '🏥',
    title: 'Insurance Panels — How They Work',
    items: [
      { q: 'What is a panel hospital?', a: 'A panel hospital has a direct billing arrangement with your insurer. You pay only the co-pay or deductible upfront; the insurer settles the rest directly with the hospital.' },
      { q: 'What is a Letter of Guarantee (LOG)?', a: 'A LOG is a guarantee from your insurer to the hospital that they will pay. Most hospitals require a LOG before admission for planned procedures. Call your insurer 24–48 hours before admission.' },
      { q: 'What if my hospital is not on panel?', a: 'You pay upfront and claim reimbursement. Keep all original receipts. Submit within the claim period specified in your policy (usually 90–120 days from discharge).' },
      { q: 'Pre-admission window', a: 'Specialist visits, scans, and lab tests within 30–90 days before admission (varies by insurer) are claimable as pre-admission expenses. Keep every receipt.' },
      { q: 'How to check panel status?', a: 'Call your insurer\'s hotline or check their app. AIA: 1300-88-1899. Prudential: 1800-88-8811. Great Eastern: 1300-1300-88. Allianz: 1800-22-5542.' },
    ],
  },
  {
    icon: '🆘',
    title: 'Emergency Contacts',
    items: [
      { q: 'National Emergency', a: '999 (Police, Fire, Ambulance)' },
      { q: 'Ambulance only', a: '991' },
      { q: 'MERCY Malaysia disaster response', a: '+603-7956 5986' },
      { q: 'Hospital KL emergency', a: '+603-2615 5555' },
      { q: 'IJN (cardiac emergency)', a: '+603-2600 1500' },
      { q: 'Poisoning (National Poison Centre)', a: '1800-888-099' },
      { q: 'Mental Health Helpline', a: '15555 (MIASA) · 03-7627 2929 (Befrienders KL)' },
    ],
  },
]

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Resources</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5">
            Patient rights, financial schemes, insurance guidance, and emergency contacts.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-10 space-y-12">
        {SECTIONS.map(({ icon, title, items }) => (
          <section key={title}>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-2xl">{icon}</span>
              <h2 className="text-[20px] font-bold text-ink tracking-tight">{title}</h2>
            </div>
            <div className="space-y-3 max-w-[760px]">
              {items.map(({ q, a }) => (
                <div key={q} className="bg-surface-secondary rounded-2xl p-4">
                  <p className="font-semibold text-ink text-[14px] mb-1">{q}</p>
                  <p className="text-ink-secondary text-[13px] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
