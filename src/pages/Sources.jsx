import { useState, useMemo } from 'react'
import { SOURCES } from '../data/sources'

const totalCount = SOURCES.reduce((n, cat) => n + cat.items.length, 0)

export default function Sources() {
  const [query, setQuery] = useState('')
  const [openCats, setOpenCats] = useState(() => new Set(SOURCES.map(c => c.category)))

  const toggleCat = cat => {
    setOpenCats(prev => {
      const next = new Set(prev)
      next.has(cat) ? next.delete(cat) : next.add(cat)
      return next
    })
  }

  const filtered = useMemo(() => {
    if (!query.trim()) return SOURCES
    const q = query.toLowerCase()
    return SOURCES.map(cat => ({
      ...cat,
      items: cat.items.filter(
        src =>
          src.name.toLowerCase().includes(q) ||
          src.description.toLowerCase().includes(q) ||
          src.dataUsed.toLowerCase().includes(q)
      ),
    })).filter(cat => cat.items.length > 0)
  }, [query])

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Transparency</p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight mb-1">Data Sources</h1>
          <p className="text-ink-secondary text-[14px] max-w-[600px]">
            Every piece of information on this platform is sourced from verified, publicly accessible references. All {totalCount} sources listed here were cross-checked during data compilation.
          </p>

          {/* Search */}
          <div className="flex items-center bg-white rounded-2xl px-4 py-3 border border-ink-quaternary focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/10 transition-all shadow-sm max-w-[500px] mt-5">
            <svg className="text-ink-tertiary flex-shrink-0 mr-3" width="16" height="16" viewBox="0 0 18 18" fill="none">
              <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 12L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search sources…"
              className="flex-1 bg-transparent text-ink placeholder-ink-tertiary text-[14px] outline-none"
            />
            {query && (
              <button onClick={() => setQuery('')} className="ml-2 text-ink-tertiary hover:text-ink transition-colors">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2l10 10M12 2l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 py-8 space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🔍</div>
            <p className="text-ink-secondary text-[14px]">No sources match "{query}"</p>
            <button onClick={() => setQuery('')} className="mt-3 text-brand text-[13px] hover:underline">Clear search</button>
          </div>
        ) : (
          filtered.map(cat => {
            const isOpen = query.trim() ? true : openCats.has(cat.category)
            return (
              <div key={cat.category} className="border border-ink-quaternary rounded-2xl overflow-hidden">
                <button
                  onClick={() => !query.trim() && toggleCat(cat.category)}
                  className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                    query.trim() ? 'cursor-default' : 'hover:bg-surface-secondary'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <span className="font-bold text-ink text-[15px]">{cat.category}</span>
                      <span className="ml-2 text-ink-tertiary text-[12px]">{cat.items.length} source{cat.items.length !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                  {!query.trim() && (
                    <svg
                      className={`flex-shrink-0 text-ink-tertiary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                    >
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-ink-quaternary divide-y divide-ink-quaternary">
                    {cat.items.map((src, i) => (
                      <div key={i} className="px-5 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-ink text-[14px]">{src.name}</span>
                              <span className="text-[11px] text-ink-tertiary bg-surface-secondary px-2 py-0.5 rounded-md">
                                Verified {src.verified}
                              </span>
                            </div>
                            <p className="text-ink-secondary text-[13px] leading-relaxed mt-1">{src.description}</p>
                            <p className="text-ink-tertiary text-[12px] mt-1.5">
                              <span className="font-medium text-ink-secondary">Data used for: </span>
                              {src.dataUsed}
                            </p>
                          </div>
                          <a
                            href={src.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand text-[12px] font-medium hover:underline"
                          >
                            Visit
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M1.5 8.5l7-7M3 1.5h5.5v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })
        )}

        <div className="pt-4 text-center text-ink-tertiary text-[12px]">
          All sources are publicly accessible. Data accuracy was verified during 2024–2025. Always confirm critical details directly with the source.
        </div>
      </div>
    </div>
  )
}
