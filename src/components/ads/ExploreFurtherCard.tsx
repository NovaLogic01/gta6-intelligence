'use client'

export function ExploreFurtherCard() {
  return (
    <aside className="w-full bg-bg-primary border-t border-border-primary py-12 px-6 flex justify-center" aria-label="Explore Further">
      <div className="bg-bg-tertiary border border-border-secondary border-l-2 border-l-red-500/40 w-full max-w-3xl p-6 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-6 hover:bg-bg-elevated transition-colors">
        <div className="text-center sm:text-left">
          <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary mb-1.5">Explore Further</h4>
          <p className="text-sm font-body font-light text-text-tertiary">
            Go deeper. Discover more.
          </p>
        </div>
        
        <a
          href="https://omg10.com/4/11839742"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="shrink-0 px-5 py-2.5 bg-bg-primary border border-border-primary hover:border-border-secondary hover:text-red-400 text-[11px] font-mono uppercase tracking-[0.2em] text-text-primary transition-all flex items-center gap-2"
        >
          Explore <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </aside>
  )
}
