import { ALL_HOSPITALS, PUBLIC_COUNT, PRIVATE_COUNT, ALL_STATES } from '../data/index'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[760px] mx-auto">
          <h1 className="text-[28px] font-bold text-ink tracking-tight">About Healthcare Intelligence MY</h1>
          <p className="text-ink-secondary text-[15px] mt-2 leading-relaxed">
            A decision-support platform helping Malaysians make informed healthcare decisions.
          </p>
        </div>
      </div>

      <div className="max-w-[760px] mx-auto px-5 py-10 space-y-10">
        {/* Mission */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Mission</h2>
          <p className="text-ink-secondary text-[15px] leading-relaxed">
            Healthcare Intelligence MY exists to make healthcare information accessible, honest, and actionable. We believe people deserve clear information to make confident decisions — not bureaucratic portals or marketing materials.
          </p>
          <p className="text-ink-secondary text-[15px] leading-relaxed mt-3">
            This is not a hospital website. This is not a government portal. This is a decision-support platform built around the questions real people ask when navigating healthcare.
          </p>
        </section>

        {/* What we cover */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-4">What We Cover</h2>
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

        {/* Methodology */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Methodology</h2>
          <div className="space-y-3">
            {[
              {
                title: 'Primary sources',
                desc: 'All hospital data is sourced primarily from official MOH Malaysia records, individual hospital websites, and Clinical Research Malaysia publications.',
              },
              {
                title: 'Verification process',
                desc: 'Each hospital entry is verified against at least one official source. Bed counts, specialty coverage, and contact details are cross-referenced with official hospital publications.',
              },
              {
                title: 'Duplicate auditing',
                desc: 'We perform regular automated audits to detect duplicate entries, state field mismatches, and data inconsistencies. Duplicates are resolved by retaining the more complete and accurate entry.',
              },
              {
                title: 'Update cycle',
                desc: 'Data is reviewed and updated continuously with reference to 2024–2025 official sources. Each entry includes information about when it was last verified.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-surface-secondary rounded-2xl p-4">
                <p className="font-semibold text-ink text-[14px] mb-1">{title}</p>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-[20px] font-bold text-ink mb-3">Disclaimer</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-amber-900 text-[13px] leading-relaxed">
              Healthcare Intelligence MY is for reference and informational purposes only. It is <strong>not a substitute for professional medical advice</strong>, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions. Data accuracy cannot be guaranteed — always verify directly with the hospital before making healthcare decisions.
            </p>
          </div>
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
        </div>
      </div>
    </div>
  )
}
