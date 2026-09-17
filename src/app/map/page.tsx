import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Map Explorer',
  description: 'Interactive map explorer for GTA VI Leonida — geographic intelligence as verified information becomes available.',
}

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="container-wide py-6 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-8 bg-accent-blue/40" aria-hidden="true" />
          <span className="text-overline text-accent-blue tracking-widest">Map Explorer</span>
        </div>
        <h1 className="text-heading font-display text-text-primary mb-2">Leonida Map Explorer</h1>
        <p className="text-body text-text-secondary max-w-2xl">
          <span className="text-accent-blue font-medium">Confirmed Setting:</span> The state of Leonida, including Vice City. This explorer will expand as more geographical data is verified.
        </p>
      </div>

      <div className="flex-1 relative bg-surface-dark border-y border-border-primary overflow-hidden flex min-h-[500px]">
        {/* Topographic grid */}
        <div className="absolute inset-0 grid-topographic opacity-30 pointer-events-none" aria-hidden="true" />

        {/* Secondary major grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '200px 200px',
          }}
          aria-hidden="true"
        />

        {/* Sidebar Filters */}
        <aside className="w-56 bg-bg-primary/80 backdrop-blur-sm border-r border-border-primary p-5 z-10 hidden md:block">
          <h3 className="text-overline text-text-muted uppercase tracking-widest mb-5">Map Filters</h3>
          <nav className="space-y-1.5" aria-label="Map filters">
            {['LOCATIONS', 'ACTIVITIES', 'LANDMARKS', 'BUSINESSES', 'UNKNOWN'].map((filter) => (
              <button
                key={filter}
                className="w-full text-left px-3 py-2.5 rounded-subtle text-body-sm text-text-tertiary hover:text-text-primary hover:bg-bg-hover/50 border border-transparent hover:border-border-secondary transition-all flex items-center justify-between group"
                aria-label={`Filter by ${filter.toLowerCase()}`}
              >
                <span>{filter}</span>
                <div className="w-2 h-2 rounded-full bg-border-secondary group-hover:bg-accent-blue transition-colors" />
              </button>
            ))}
          </nav>
        </aside>

        {/* Main map area */}
        <div className="flex-1 relative flex items-center justify-center p-8">
          {/* Coordinate overlays */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-accent-blue/30 tracking-widest pointer-events-none select-none" aria-hidden="true">
            LAT: 25.7617° N | LNG: 80.1918° W
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-accent-blue/30 tracking-widest pointer-events-none select-none" aria-hidden="true">
            SCALE: 1:10000 | GRID: NAD83
          </div>

          {/* Crosshair */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent-blue/8 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-accent-blue/8 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-accent-blue/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

          {/* Center content */}
          <div className="text-center z-10 max-w-md bg-bg-primary/70 backdrop-blur-sm p-8 rounded-card border border-border-primary">
            <h2 className="text-display font-display text-text-primary mb-3">MAP EXPLORER</h2>
            <p className="text-body text-text-secondary mb-6 leading-relaxed">
              Geographic data and interactive features will populate as official locations, territories, and points of interest are verified.
            </p>
            <div className="inline-flex items-center gap-2 text-overline text-accent-blue uppercase tracking-widest border border-accent-blue-border bg-accent-blue-subtle px-4 py-2 rounded-subtle">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" aria-hidden="true" />
              Awaiting Verified Data
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
