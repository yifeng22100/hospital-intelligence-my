import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    id: 'medical-disclaimer',
    title: '1. Medical Disclaimer',
    content: `Healthcare Intelligence MY is an informational reference platform only. Nothing on this website constitutes medical advice, diagnosis, treatment, or a recommendation to pursue a specific course of medical action.

All content — including hospital listings, specialty information, cost estimates, insurance guidance, Knowledge Hub medical references, premium calculations, panel lookup data, and emergency protocols — is provided for general informational purposes. It does not replace consultation with a qualified healthcare professional.

Always consult a licensed doctor, specialist, or other qualified medical practitioner before making any healthcare decision. In an emergency, call 999 immediately.`,
  },
  {
    id: 'data-accuracy',
    title: '2. Data Accuracy & Limitations',
    content: `We make every reasonable effort to verify hospital data against official sources including the Ministry of Health Malaysia (MOH), MSQH, and official hospital websites. However, we cannot guarantee that all information is complete, current, or error-free.

Hospital facilities, bed counts, specialty coverage, insurance panels, room rates, and contact details change over time. Insurance panel hotlines, TPA assignments, and premium estimates are indicative — always verify directly with your insurer on the day of admission.

Knowledge Hub content (drug information, lab values, vaccination schedules, medical report guidance) is for general educational purposes only and must not replace the advice of a licensed healthcare professional.

If you find an error or outdated information, please report it so we can correct it promptly.`,
  },
  {
    id: 'use-of-information',
    title: '3. Permitted Use',
    content: `This platform is intended for personal, non-commercial reference use only.

You may not:
• Reproduce, redistribute, or commercially exploit the data on this platform without permission.
• Present this platform's content as official medical or government information.
• Use this platform's data to build competing commercial products without attribution.

Hospital names, logos, and trademarks remain the property of their respective owners. References to specific hospitals are for informational purposes only and do not imply endorsement.`,
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    content: `The data compilation, structure, editorial descriptions, Intelligence Hub content, and presentation design on this platform are original works. The underlying facts (hospital names, addresses, bed counts) are public information, but the curation, classification, and synthesis represent significant original effort.

If you wish to cite or reference this platform in academic, journalistic, or educational work, please attribute it as: "Healthcare Intelligence MY (healthcaremy.com), accessed [date]."`,
  },
  {
    id: 'privacy',
    title: '5. Privacy',
    content: `This is a fully static, client-side web application. We do not:
• Collect, store, or process any personal information.
• Use cookies, tracking pixels, or analytics scripts.
• Require account creation or login.
• Log search queries or browsing behaviour.
• Share any data with third parties.

Comparison preferences are saved locally in your browser's localStorage only — they are never transmitted anywhere and are deleted when you clear your browser data.`,
  },
  {
    id: 'third-party-links',
    title: '6. Third-Party Links',
    content: `This platform contains links to external websites including hospital websites, government portals, insurance providers, and NGO pages. These links are provided for convenience only.

We do not control the content of external websites and are not responsible for their accuracy, availability, or privacy practices. Visiting an external link means you are leaving this platform and are subject to that site's own terms and conditions.`,
  },
  {
    id: 'liability',
    title: '7. Limitation of Liability',
    content: `To the fullest extent permitted by law, Healthcare Intelligence MY and its contributors are not liable for:
• Any medical decision made based on information found on this platform.
• Any financial loss arising from insurance, hospital cost, or treatment decisions informed by this platform.
• Any harm, injury, or adverse outcome resulting from use or reliance on this platform.
• Errors, omissions, or outdated information in the hospital directory or intelligence content.

Use of this platform is entirely at your own risk.`,
  },
  {
    id: 'changes',
    title: '8. Changes to These Terms',
    content: `These terms may be updated at any time without prior notice. Continued use of the platform following any update constitutes acceptance of the revised terms.

The platform itself may change, expand, or be discontinued at any time. We endeavour to keep the data current but cannot guarantee any particular update schedule.`,
  },
  {
    id: 'contact',
    title: '9. Corrections & Contact',
    content: `If you believe any information on this platform is inaccurate, outdated, or misleading, please raise an issue on our GitHub repository. We review and act on corrections promptly.

For general enquiries or to report a data error: github.com/yifeng22100/hospital-intelligence-my/issues`,
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[760px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Legal</p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Terms & Conditions</h1>
          <p className="text-ink-secondary text-[14px] mt-2">
            Please read these terms before using Healthcare Intelligence MY. By using this platform you agree to these terms.
          </p>
          <p className="text-ink-tertiary text-[12px] mt-2">Last updated: June 2026</p>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 py-10">
        {/* Quick nav */}
        <div className="bg-surface-secondary rounded-2xl p-5 mb-8">
          <p className="text-[12px] font-semibold text-ink uppercase tracking-wider mb-3">Contents</p>
          <ol className="space-y-1">
            {SECTIONS.map(s => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-[13px] text-brand hover:underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {SECTIONS.map(s => (
            <section key={s.id} id={s.id}>
              <h2 className="text-[17px] font-bold text-ink mb-3">{s.title}</h2>
              <div className="space-y-3">
                {s.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-ink-secondary text-[14px] leading-relaxed whitespace-pre-line">{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-ink-quaternary">
          <p className="text-ink-secondary text-[13px] mb-4">
            This platform is built to help Malaysians navigate healthcare — not to replace professional medical judgment. Use it as a starting point, not a final answer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/find-care" className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-brand-dark transition-colors">
              Find a hospital
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 bg-surface-secondary text-ink px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-surface-tertiary transition-colors">
              About this platform
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
