import { useState } from 'react'
import { ALL_HOSPITALS, PUBLIC_COUNT, PRIVATE_COUNT, ALL_STATES } from '../data/index'
import { Link } from 'react-router-dom'

const FAQ = [
  {
    q: 'Is this data official or government-sourced?',
    a: 'All hospital entries are compiled from official sources including the MOH Malaysia hospital directory, MSQH accreditation lists, and individual hospital websites. We are not affiliated with or endorsed by the Malaysian government. Think of us as a structured, searchable layer on top of publicly available official information.',
  },
  {
    q: 'How accurate is the data?',
    a: 'We make every effort to verify data against 2024–2025 official records. However, hospitals change — bed counts, specialties, room rates, and insurance panels update frequently. Always verify critical details directly with the hospital before admission. If you find an error, please report it on our GitHub.',
  },
  {
    q: 'What does FPP mean?',
    a: 'FPP (Full Paying Patient) is a scheme at government (MOH) hospitals where you pay full cost for a private room and direct specialist access — bypassing the subsidised queue while remaining in a government facility. FPP rates are typically 30–60% cheaper than equivalent private hospital care. Use the FPP filter on Find Care to see which hospitals offer it.',
  },
  {
    q: 'Does this platform track my data?',
    a: 'No. This is a fully static, client-side application with no backend, no analytics, no cookies, and no user accounts. The only data stored is your Compare selection, saved locally in your browser\'s localStorage and never transmitted anywhere.',
  },
  {
    q: 'Can I use this to find a specific doctor?',
    a: 'Not directly — we cover hospitals, not individual practitioners. For doctor verification, use the MMC (Malaysian Medical Council) registry at mmc.gov.my. The Intelligence Hub → Doctor Check section has a guide on how to verify qualifications and spot red flags.',
  },
  {
    q: 'How do I report an error or missing hospital?',
    a: 'Open an issue on our GitHub repository: github.com/yifeng22100/hospital-intelligence-my/issues. Include the hospital name, the incorrect data, and the correct data with a source link. We typically action corrections within a few days.',
  },
]

const DATA_FIELDS = [
  { icon: '🏥', label: 'Name & short name', note: 'Full official name + common abbreviation' },
  { icon: '📍', label: 'Address & city', note: 'Verified address, Google Maps / Waze links' },
  { icon: '🛏', label: 'Bed counts', note: 'Total beds, ICU, NICU, operating theatres' },
  { icon: '⚕️', label: 'Specialty coverage', note: '20+ specialties: available / by referral / not available' },
  { icon: '✓', label: 'FPP scheme', note: 'Whether Full-Paying Patient scheme is available' },
  { icon: '🏅', label: 'Accreditations', note: 'MSQH, JCI, MOH designations, ISO' },
  { icon: '🛡️', label: 'Insurance notes', note: 'Accepted panels, insurance group affiliations' },
  { icon: '💰', label: 'Room rates', note: 'Approximate room rate range where known' },
  { icon: '🔬', label: 'Technology', note: 'Robotics, advanced imaging, specialist equipment' },
  { icon: '🚁', label: 'Infrastructure', note: 'Helipad, parking, year established, area' },
  { icon: '🚗', label: 'Transport', note: 'MRT/LRT access, bus, highway, landmark' },
  { icon: '📊', label: 'Specialty rankings', note: 'Verified rankings for flagship specialties' },
  { icon: '🔄', label: 'Transfer pathways', note: 'Where complex cases get referred to' },
  { icon: '📞', label: 'Contact details', note: 'Main line, appointments, emergency line, website' },
]

const ROADMAP = [
  { status: 'live', label: 'Hospital directory (294 hospitals, 16 states)' },
  { status: 'live', label: 'Specialty, state, sector, and FPP filters' },
  { status: 'live', label: 'Hospital comparison (up to 5 side-by-side)' },
  { status: 'live', label: 'Intelligence Hub (11 topics including emergency events)' },
  { status: 'live', label: 'Insurance Hub — premiums, takaful vs conventional, terms, calculator' },
  { status: 'live', label: 'Knowledge Hub — 10 topics: glossary, drugs, lab values, vaccination, children, elderly, mental health, medical reports' },
  { status: 'live', label: 'Tools — Cost Estimator, Premium Calculator, Panel Lookup by hospital or insurer' },
  { status: 'live', label: 'Resources: emergency contacts, patient rights, NGO support, second opinions' },
  { status: 'live', label: 'FPP and MSQH/JCI accreditation badges' },
  { status: 'planned', label: 'Geolocation — find nearest hospitals to you' },
  { status: 'planned', label: 'Specialist directory — individual consultant profiles' },
  { status: 'planned', label: 'A&E triage colour guide and wait time context' },
  { status: 'planned', label: 'Interactive referral ladder flowchart' },
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[760px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">About</p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Healthcare Intelligence MY</h1>
          <p className="text-ink-secondary text-[15px] mt-2 leading-relaxed">
            A decision-support platform helping Malaysians navigate healthcare with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 py-10 space-y-12">

        {/* Coverage stats */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { n: ALL_HOSPITALS.length, label: 'Hospitals' },
              { n: ALL_STATES.length, label: 'States & FTs' },
              { n: PUBLIC_COUNT, label: 'Public' },
              { n: PRIVATE_COUNT, label: 'Private' },
            ].map(({ n, label }) => (
              <div key={label} className="bg-surface-secondary rounded-2xl p-4 text-center">
                <div className="text-[28px] font-bold text-ink leading-none">{n}</div>
                <div className="text-ink-secondary text-[12px] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why we built this */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Why We Built This</h2>
          <p className="text-ink-secondary text-[15px] leading-relaxed">
            Malaysia has excellent healthcare — but finding the right hospital, understanding your options, or knowing what questions to ask is harder than it should be. Official government portals are built for administration, not patients. Hospital websites are built for marketing. Review apps give you opinions, not facts.
          </p>
          <p className="text-ink-secondary text-[15px] leading-relaxed mt-3">
            Healthcare Intelligence MY fills that gap: a structured, independent, fact-based platform built around the real questions Malaysians ask when navigating healthcare — from "which public hospital handles cardiac surgery in Selangor?" to "what documents do I need to submit an insurance claim?"
          </p>
          <p className="text-ink-secondary text-[15px] leading-relaxed mt-3">
            No ads, no hospital partnerships, no affiliate links. Just verified data and honest guidance.
          </p>
        </section>

        {/* What makes it different */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-4">What Makes It Different</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '🏛️', title: 'vs. MOH Portal', desc: 'MOH portals are comprehensive but hard to navigate — no filtering, no comparison, no patient-oriented guidance. We surface the same data in a usable format.' },
              { icon: '🏥', title: 'vs. Hospital Websites', desc: 'Hospital websites present their own information in their best light. We cover all hospitals with consistent structure, including weaknesses and gaps.' },
              { icon: '⭐', title: 'vs. Review Apps', desc: 'Review apps give you star ratings and customer experience. We give you bed counts, ICU capacity, specialty rankings, and transfer pathways.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-surface-secondary rounded-2xl p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-ink text-[14px] mb-1">{title}</p>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's in each hospital entry */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-1">What's in Each Hospital Entry</h2>
          <p className="text-ink-secondary text-[14px] mb-4">Each of the {ALL_HOSPITALS.length} hospitals in our directory is structured with up to {DATA_FIELDS.length} data categories:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DATA_FIELDS.map(({ icon, label, note }) => (
              <div key={label} className="flex items-start gap-2.5 py-2 px-3 bg-surface-secondary rounded-xl text-[13px]">
                <span className="flex-shrink-0 text-[16px]">{icon}</span>
                <div>
                  <span className="font-medium text-ink">{label}</span>
                  <p className="text-ink-tertiary text-[12px] mt-0.5">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Methodology</h2>
          <div className="space-y-3">
            {[
              {
                title: 'Primary sources',
                desc: 'All hospital data is sourced from official MOH Malaysia records, individual hospital websites, and Clinical Research Malaysia publications. Where possible, we cross-reference at least two independent sources per data point.',
              },
              {
                title: 'Verification process',
                desc: 'Each hospital entry is verified against at least one official source. Bed counts, specialty coverage, and contact details are cross-referenced with official hospital publications. For private hospitals, we also reference accreditation bodies (MSQH, JCI) and news sources.',
              },
              {
                title: 'Duplicate auditing',
                desc: 'We perform regular audits to detect duplicate entries, state field mismatches, and data inconsistencies. Duplicates are resolved by retaining the more complete and accurate entry.',
              },
              {
                title: 'Update cycle',
                desc: 'Data is reviewed and updated continuously with reference to 2025–2026 official sources. The full sources list is available on our Data Sources page.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-surface-secondary rounded-2xl p-4">
                <p className="font-semibold text-ink text-[14px] mb-1">{title}</p>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-4">Roadmap</h2>
          <div className="space-y-2">
            {ROADMAP.map(({ status, label }) => (
              <div key={label} className="flex items-center gap-3 text-[13px]">
                <span className={`flex-shrink-0 w-[52px] text-center text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  status === 'live'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-surface-secondary text-ink-tertiary border border-ink-quaternary'
                }`}>
                  {status === 'live' ? 'Live' : 'Planned'}
                </span>
                <span className={status === 'live' ? 'text-ink' : 'text-ink-secondary'}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech stack */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Technology</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <tbody>
                {[
                  ['Framework', 'React 18'],
                  ['Build tool', 'Vite 5'],
                  ['Styling', 'Tailwind CSS 3'],
                  ['Routing', 'React Router v6 (HashRouter)'],
                  ['Deployment', 'GitHub Pages (auto-deploy on push to main)'],
                  ['Data', 'Static ES module JS files — no backend, no database'],
                ].map(([layer, tech]) => (
                  <tr key={layer} className="border-t border-ink-quaternary">
                    <td className="py-2.5 pr-4 text-ink-secondary font-medium w-32">{layer}</td>
                    <td className="py-2.5 text-ink">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQ.map(({ q, a }) => {
              const isOpen = openFaq === q
              return (
                <div key={q} className="border border-ink-quaternary rounded-xl overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface-secondary transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : q)}
                  >
                    <span className="font-semibold text-ink text-[13px] pr-4">{q}</span>
                    <svg
                      className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      width="13" height="13" viewBox="0 0 13 13" fill="none"
                    >
                      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-ink-secondary text-[13px] leading-relaxed border-t border-ink-quaternary pt-3">{a}</div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Disclaimer</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-amber-900 text-[13px] leading-relaxed">
              Healthcare Intelligence MY is for reference and informational purposes only. It is <strong>not a substitute for professional medical advice</strong>, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions. Data accuracy cannot be guaranteed — always verify directly with the hospital before making healthcare decisions. See our full <Link to="/terms" className="underline">Terms & Conditions</Link>.
            </p>
          </div>
        </section>

        {/* Report error */}
        <section className="bg-surface-secondary rounded-2xl p-5">
          <h2 className="text-[16px] font-bold text-ink mb-1">Found an error?</h2>
          <p className="text-ink-secondary text-[13px] leading-relaxed mb-3">
            If a hospital entry has incorrect data — wrong address, outdated bed count, missing specialty — please open an issue on GitHub. Include the hospital name, what's wrong, and a source link.
          </p>
          <a
            href="https://github.com/yifeng22100/hospital-intelligence-my/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-white px-4 py-2 rounded-xl text-[13px] font-semibold hover:bg-ink/80 transition-colors"
          >
            Open GitHub Issue →
          </a>
        </section>

        {/* CTA */}
        <div className="flex gap-3 pt-2">
          <Link
            to="/find-care"
            className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-brand-dark transition-colors"
          >
            Find a hospital
          </Link>
          <Link
            to="/intelligence"
            className="inline-flex items-center gap-2 bg-surface-secondary text-ink px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-surface-tertiary transition-colors"
          >
            Explore Intelligence
          </Link>
          <Link
            to="/sources"
            className="inline-flex items-center gap-2 bg-surface-secondary text-ink px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-surface-tertiary transition-colors"
          >
            Data Sources
          </Link>
        </div>
      </div>
    </div>
  )
}
