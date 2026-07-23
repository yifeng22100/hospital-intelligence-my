export default function LastVerified({ date, note }) {
  return (
    <p className="inline-flex items-center gap-1.5 text-ink-tertiary text-[11px] font-medium">
      <span aria-hidden="true">🕓</span>
      <span>Last verified {date}{note ? ` — ${note}` : ''}</span>
    </p>
  )
}
