import { Link } from 'react-router-dom'
import { ALL_HOSPITALS } from '../data/index'

export default function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-ink-quaternary mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🏥</span>
              <span className="font-bold text-ink text-[15px]">
                Healthcare<span className="text-brand">MY</span>
              </span>
            </div>
            <p className="text-ink-secondary text-[13px] leading-relaxed">
              The easiest place to discover, compare, and navigate healthcare in Malaysia.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-ink uppercase tracking-wider mb-3">Platform</h4>
            <ul className="space-y-2">
              {[
                ['/find-care', 'Find Care'],
                ['/compare', 'Compare'],
                ['/intelligence', 'Intelligence'],
                ['/knowledge', 'Knowledge'],
                ['/resources', 'Resources'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-ink-secondary text-[13px] hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-ink uppercase tracking-wider mb-3">Information</h4>
            <ul className="space-y-2">
              {[
                ['/about', 'About'],
                ['/sources', 'Data Sources'],
                ['/resources', 'Patient Rights'],
                ['/terms', 'Terms & Conditions'],
              ].map(([to, label]) => (
                <li key={label}>
                  <Link to={to} className="text-ink-secondary text-[13px] hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-ink uppercase tracking-wider mb-3">Data</h4>
            <p className="text-ink-secondary text-[13px] leading-relaxed">
              Verified against MOH Malaysia official records and hospital websites.
            </p>
            <p className="text-ink-tertiary text-[12px] mt-2">Updated 2025–2026</p>
          </div>
        </div>

        <div className="border-t border-ink-quaternary pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-tertiary text-[12px]">
            © 2026 Healthcare Intelligence MY. For reference only — not medical advice.
          </p>
          <p className="text-ink-tertiary text-[12px]">
            {ALL_HOSPITALS.length} hospitals · 16 states · Public information
          </p>
        </div>
      </div>
    </footer>
  )
}
