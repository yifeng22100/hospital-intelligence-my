export default function PrintButton({ label = 'Print this guide' }) {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[12.5px] font-semibold text-ink-secondary border border-ink-quaternary hover:border-brand hover:text-brand transition-colors"
    >
      <span aria-hidden="true">🖨️</span>
      {label}
    </button>
  )
}
