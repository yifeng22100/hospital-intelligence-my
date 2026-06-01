import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ALL_HOSPITALS, PUBLIC_COUNT, PRIVATE_COUNT, ALL_STATES } from '../data/index'
import HospitalModal from '../components/HospitalModal'

const FEATURED_IDS = ['hkl', 'prince-court', 'gleneagles-kl', 'ummc', 'sunway-medical', 'sjmc']

const INTEL_CARDS = [
  {
    icon: '💡',
    bg: 'bg-blue-50',
    title: 'FPP Scheme',
    desc: 'Access specialist care in government hospitals at 30–60% below private rates.',
  },
  {
    icon: '🛡️',
    bg: 'bg-purple-50',
    title: 'Insurance Hacks',
    desc: 'Pre-admission expense windows most patients never claim — keep every receipt.',
  },
  {
    icon: '🔄',
    bg: 'bg-teal-50',
    title: 'Referral Pathways',
    desc: 'Navigate from clinic to quaternary care using the public referral ladder.',
  },
  {
    icon: '💰',
    bg: 'bg-amber-50',
    title: 'Financial Aid',
    desc: 'EPF Account 2 withdrawals, MySalam B40 coverage, and cost-saving strategies.',
  },
]

const QUICK_SEARCHES = [
  'Emergency', 'Public', 'Kuala Lumpur', 'Selangor', 'Penang', 'Private',
]

export default function Home() {
  const [query, setQuery] = useState('')
  const [selectedHospital, setSelectedHospital] = useState(null)
  const navigate = useNavigate()

  const featured = ALL_HOSPITALS.filter(h => FEATURED_IDS.includes(h.id)).slice(0, 6)

  const handleSearch = e => {
    e.preventDefault()
    navigate(query.trim() ? `/find-care?q=${encodeURIComponent(query)}` : '/find-care')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white px-5 pt-16 pb-14 text-center">
        <div className="max-w-[680px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-4">
            Healthcare Intelligence Malaysia
          </p>
          <h1 className="text-[44px] sm:text-[56px] font-bold text-ink tracking-tight leading-[1.07] mb-5">
            Healthcare starts with<br className="hidden sm:block" /> the right information.
          </h1>
          <p className="text-ink-secondary text-[18px] leading-relaxed mb-9 max-w-[520px] mx-auto">
            Discover, compare, and navigate {ALL_HOSPITALS.length} hospitals across Malaysia — public and private.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="max-w-[540px] mx-auto">
            <div className="flex items-center bg-surface-secondary rounded-2xl px-4 py-3 border border-ink-quaternary focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all shadow-sm">
              <svg className="text-ink-tertiary flex-shrink-0 mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search hospitals, states, specialties…"
                className="flex-1 bg-transparent text-ink placeholder-ink-tertiary text-[16px] outline-none"
                autoComplete="off"
              />
              <button
                type="submit"
                className="ml-3 bg-brand text-white px-4 py-1.5 rounded-xl text-[13px] font-semibold hover:bg-brand-dark transition-colors flex-shrink-0"
              >
                Search
              </button>
            </div>
          </form>

          {/* Quick links */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {QUICK_SEARCHES.map(term => (
              <button
                key={term}
                onClick={() => navigate(`/find-care?q=${encodeURIComponent(term)}`)}
                className="px-3 py-1 bg-white border border-ink-quaternary text-ink-secondary text-[12px] rounded-full hover:border-brand hover:text-brand transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-surface-secondary border-y border-ink-quaternary py-9 px-5">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { n: ALL_HOSPITALS.length, label: 'Hospitals', sub: 'Across Malaysia' },
            { n: ALL_STATES.length, label: 'States & FTs', sub: 'Full coverage' },
            { n: PUBLIC_COUNT, label: 'Public', sub: 'MOH & University' },
            { n: PRIVATE_COUNT, label: 'Private', sub: 'Licensed facilities' },
          ].map(({ n, label, sub }) => (
            <div key={label}>
              <div className="text-[36px] font-bold text-ink tracking-tight leading-none">{n}</div>
              <div className="text-[14px] font-semibold text-ink mt-1">{label}</div>
              <div className="text-[12px] text-ink-tertiary mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Find Care ── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-[32px] font-bold text-ink tracking-tight">Find the right care</h2>
              <p className="text-ink-secondary text-[16px] mt-1.5">
                Browse {ALL_HOSPITALS.length} hospitals by state, sector, or specialty.
              </p>
            </div>
            <Link
              to="/find-care"
              className="hidden sm:flex items-center gap-1 text-brand text-[14px] font-semibold hover:underline"
            >
              View all <Arrow />
            </Link>
          </div>

          {/* State pills */}
          <div className="flex flex-wrap gap-2 mb-7">
            {['All Malaysia', 'Kuala Lumpur', 'Selangor', 'Penang', 'Johor', 'Perak', 'Sabah', 'Sarawak'].map(
              (s, i) => (
                <Link
                  key={s}
                  to={i === 0 ? '/find-care' : `/find-care?state=${encodeURIComponent(s)}`}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium border transition-colors ${
                    i === 0
                      ? 'bg-ink text-white border-ink'
                      : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                  }`}
                >
                  {s}
                </Link>
              )
            )}
          </div>

          {/* Hospital cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.length > 0
              ? featured.map(h => (
                  <HospitalCardHome key={h.id} h={h} onClick={() => setSelectedHospital(h)} />
                ))
              : ALL_HOSPITALS.slice(0, 6).map(h => (
                  <HospitalCardHome key={h.id} h={h} onClick={() => setSelectedHospital(h)} />
                ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link to="/find-care" className="text-brand font-semibold text-[14px]">
              View all hospitals <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intelligence Hub ── */}
      <section className="bg-surface-secondary py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[520px] mb-9">
            <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-3">
              Healthcare Intelligence
            </p>
            <h2 className="text-[32px] font-bold text-ink tracking-tight">
              Data-driven insights for better decisions.
            </h2>
            <p className="text-ink-secondary text-[16px] mt-3 leading-relaxed">
              Navigate the public system, save on costs, and understand your rights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {INTEL_CARDS.map(({ icon, bg, title, desc }) => (
              <Link
                key={title}
                to="/intelligence"
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-xl mb-4`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-ink text-[14px] mb-1.5 group-hover:text-brand transition-colors">
                  {title}
                </h3>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>

          <Link
            to="/intelligence"
            className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:bg-ink/90 transition-colors"
          >
            Explore Healthcare Intelligence <Arrow white />
          </Link>
        </div>
      </section>

      {/* ── Trust ── */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-3">
              Transparent by design
            </p>
            <h2 className="text-[32px] font-bold text-ink tracking-tight mb-3">Data you can trust.</h2>
            <p className="text-ink-secondary text-[16px] max-w-[480px] mx-auto">
              Every record verified against official sources. We show you exactly where data comes from.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[840px] mx-auto">
            {[
              {
                icon: '🏛️',
                title: 'MOH Malaysia verified',
                desc: 'All public hospital data sourced from official Ministry of Health records and hospital websites.',
              },
              {
                icon: '🔄',
                title: 'Updated 2025–2026',
                desc: 'Data continuously audited and refreshed from official sources.',
              },
              {
                icon: '🔍',
                title: `${ALL_HOSPITALS.length} hospitals audited`,
                desc: 'Every entry reviewed for accuracy. Duplicates removed, state fields verified, specialty coverage confirmed.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title}>
                <div className="text-[28px] mb-3">{icon}</div>
                <h3 className="font-semibold text-ink text-[16px] mb-2">{title}</h3>
                <p className="text-ink-secondary text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-14 px-5 text-center">
        <div className="max-w-[520px] mx-auto">
          <h2 className="text-[28px] font-bold text-white tracking-tight mb-3">
            Ready to find the right hospital?
          </h2>
          <p className="text-white/60 text-[15px] mb-7">
            Search by state, specialty, or hospital name across all of Malaysia.
          </p>
          <Link
            to="/find-care"
            className="inline-flex items-center gap-2 bg-white text-ink px-6 py-3 rounded-xl font-semibold text-[15px] hover:bg-white/90 transition-colors"
          >
            Find a hospital <Arrow />
          </Link>
        </div>
      </section>

      {selectedHospital && (
        <HospitalModal hospital={selectedHospital} onClose={() => setSelectedHospital(null)} />
      )}
    </>
  )
}

function Arrow({ white }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline-block">
      <path
        d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
        stroke={white ? 'currentColor' : 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SECTOR_STYLES = {
  public: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
  private: 'text-blue-700 bg-blue-50 border border-blue-200',
}
const TIER_STYLES = {
  quaternary: 'text-purple-700 bg-purple-50',
  tertiary: 'text-indigo-700 bg-indigo-50',
  secondary: 'text-sky-700 bg-sky-50',
  district: 'text-teal-700 bg-teal-50',
  specialist: 'text-pink-700 bg-pink-50',
}

function HospitalCardHome({ h, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white border border-ink-quaternary rounded-2xl p-5 hover:border-brand hover:shadow-card-hover transition-all group w-full"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md ${SECTOR_STYLES[h.sector] || 'text-ink-secondary bg-surface-secondary'}`}>
          {h.sector}
        </span>
        {h.tier && (
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${TIER_STYLES[h.tier] || 'text-ink-secondary bg-surface-secondary'}`}>
            {h.tier}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-ink text-[14px] leading-snug mb-1 group-hover:text-brand transition-colors line-clamp-2">
        {h.name}
      </h3>
      <p className="text-ink-secondary text-[12px] mb-3">{h.city}, {h.state}</p>
      {h.infrastructure?.totalBeds && (
        <p className="text-ink-tertiary text-[11px]">
          🛏 {Number(h.infrastructure.totalBeds).toLocaleString()} beds
        </p>
      )}
    </button>
  )
}
