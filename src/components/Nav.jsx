import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/find-care', label: 'Find Care' },
  { to: '/compare', label: 'Compare' },
  { to: '/intelligence', label: 'Intelligence' },
  { to: '/resources', label: 'Resources' },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-ink-quaternary'
          : 'bg-white'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-14 flex items-center gap-4">
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 flex-shrink-0 mr-2"
        >
          <span className="text-xl leading-none">🏥</span>
          <span className="font-bold text-ink text-[16px] tracking-tight">
            Healthcare<span className="text-brand">MY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'text-brand bg-brand-light'
                    : 'text-ink-secondary hover:text-ink hover:bg-surface-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex-1" />

        <button
          onClick={() => { navigate('/find-care'); setMobileOpen(false) }}
          className="p-2 rounded-full hover:bg-surface-secondary transition-colors text-ink-secondary hover:text-ink"
          aria-label="Search"
        >
          <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
            <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden p-2 rounded-lg hover:bg-surface-secondary transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-0.5 bg-ink rounded transition-transform origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-ink rounded transition-opacity ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 bg-ink rounded transition-transform origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-ink-quaternary bg-white px-4 py-2 animate-fade-in">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-[16px] font-medium transition-colors ${
                  isActive
                    ? 'text-brand bg-brand-light'
                    : 'text-ink hover:bg-surface-secondary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
