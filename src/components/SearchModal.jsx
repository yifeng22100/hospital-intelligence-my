import { useState, useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { SEARCH_INDEX } from '../data/search-index'
import { ALL_HOSPITALS } from '../data/index'

const MAX_SECTION_RESULTS = 8
const MAX_HOSPITAL_RESULTS = 5

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const sectionResults = useMemo(() => {
    if (!query.trim()) return []
    const q = query.trim().toLowerCase()
    return SEARCH_INDEX.filter(s =>
      s.label.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      s.hub.toLowerCase().includes(q)
    ).slice(0, MAX_SECTION_RESULTS)
  }, [query])

  const hospitalResults = useMemo(() => {
    if (!query.trim()) return { list: [], total: 0 }
    const q = query.trim().toLowerCase()
    const matches = ALL_HOSPITALS.filter(h =>
      h.name.toLowerCase().includes(q) ||
      (h.nameShort || '').toLowerCase().includes(q) ||
      h.city.toLowerCase().includes(q) ||
      h.state.toLowerCase().includes(q)
    )
    return { list: matches.slice(0, MAX_HOSPITAL_RESULTS), total: matches.length }
  }, [query])

  const goTo = path => {
    navigate(path)
    onClose()
  }

  const goToHospitalSearch = () => {
    navigate(`/find-care?q=${encodeURIComponent(query.trim())}`)
    onClose()
  }

  if (!open) return null

  const hasResults = sectionResults.length > 0 || hospitalResults.list.length > 0
  const hasQuery = query.trim().length > 0

  return (
    <div className="fixed inset-0 z-[100] print:hidden" role="dialog" aria-modal="true" aria-label="Site search">
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-[560px] mx-auto mt-[10vh] px-4">
        <div className="bg-white rounded-2xl shadow-modal overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-ink-quaternary">
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 text-ink-tertiary" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search topics, guides, or hospitals…"
              aria-label="Search the site"
              className="flex-1 text-[15px] outline-none placeholder:text-ink-tertiary"
              autoComplete="off"
            />
            <button onClick={onClose} aria-label="Close search" className="text-ink-tertiary hover:text-ink text-[12px] font-semibold px-2 py-1 rounded-lg hover:bg-surface-secondary transition-colors">
              Esc
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto">
            {!hasQuery && (
              <p className="text-ink-tertiary text-[13px] text-center py-10">Start typing to search Knowledge, Lifestyle, Intelligence, Resources, Insurance, Tools — or any hospital.</p>
            )}

            {hasQuery && !hasResults && (
              <p className="text-ink-tertiary text-[13px] text-center py-10">No matches for "{query}". Try a different term.</p>
            )}

            {sectionResults.length > 0 && (
              <div className="py-2">
                <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wide text-ink-tertiary">Guides & Sections</p>
                {sectionResults.map((s, i) => (
                  <button
                    key={`${s.path}-${s.label}-${i}`}
                    onClick={() => goTo(s.path)}
                    className="w-full flex items-start gap-3 px-4 py-2.5 text-left hover:bg-surface-secondary transition-colors"
                  >
                    <span className="text-[16px] flex-shrink-0 mt-0.5">{s.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-ink">{s.label}</span>
                      <span className="block text-[11px] text-ink-tertiary">{s.hub} · {s.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            )}

            {hospitalResults.list.length > 0 && (
              <div className="py-2 border-t border-ink-quaternary">
                <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wide text-ink-tertiary">Hospitals</p>
                {hospitalResults.list.map(h => (
                  <button
                    key={h.id}
                    onClick={() => goTo(`/find-care?q=${encodeURIComponent(h.name)}`)}
                    className="w-full flex items-start gap-3 px-4 py-2.5 text-left hover:bg-surface-secondary transition-colors"
                  >
                    <span className="text-[16px] flex-shrink-0 mt-0.5">🏥</span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-ink">{h.name}</span>
                      <span className="block text-[11px] text-ink-tertiary">{h.city}, {h.state} · {h.sector === 'private' ? 'Private' : 'Public'}</span>
                    </span>
                  </button>
                ))}
                {hospitalResults.total > MAX_HOSPITAL_RESULTS && (
                  <button onClick={goToHospitalSearch} className="w-full text-left px-4 py-2.5 text-[12.5px] font-semibold text-brand hover:bg-surface-secondary transition-colors">
                    See all {hospitalResults.total} matching hospitals →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
