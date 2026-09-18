import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Map Explorer',
  description: 'Interactive map explorer for GTA VI Leonida - geographic intelligence as verified information becomes available.',
}

export default function MapPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] relative bg-bg-primary overflow-hidden">
      
      {/* Background geographic texture */}
      <div className="absolute inset-0 bg-coordinate-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-film-grain opacity-50 pointer-events-none" aria-hidden="true" />
      
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue-subtle blur-[120px] pointer-events-none opacity-30 mix-blend-screen" aria-hidden="true" />

      {/* Header Bar */}
      <div className="w-full flex-shrink-0 border-b border-border-primary/50 bg-bg-secondary/40 backdrop-blur-md px-6 py-4 flex items-center justify-between z-20 relative">
        <div>
          <h1 className="text-xl font-medium tracking-tight text-text-primary mb-1 uppercase">Leonida Topographic Interface</h1>
          <p className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase">
            GEOGRAPHIC RECONNAISSANCE // VICE CITY & SURROUNDS
          </p>
        </div>
        
        <div className="hidden sm:flex items-center gap-6 text-[10px] font-mono text-text-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-status-confirmed rounded-full animate-pulse"></span>
            <span>SAT-LINK: ACTIVE</span>
          </div>
          <div className="border-l border-border-primary/50 pl-6">
            LAT: 25.7617° N | LNG: 80.1918° W
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex">

        {/* Sidebar Filters */}
        <aside className="w-64 bg-bg-secondary/60 backdrop-blur-xl border-r border-border-primary/50 z-20 flex flex-col">
          <div className="p-6">
            <h3 className="text-[10px] text-text-tertiary uppercase font-mono tracking-widest mb-6 pb-2 border-b border-border-primary/50">Classification Filters</h3>
            <nav className="space-y-1" aria-label="Map filters">
              {['LOCATIONS', 'ACTIVITIES', 'LANDMARKS', 'BUSINESSES', 'UNKNOWN'].map((filter) => (
                <button
                  key={filter}
                  className="w-full text-left px-3 py-3 text-xs font-mono tracking-widest text-text-secondary hover:text-white bg-bg-primary/30 border border-border-primary/30 hover:border-accent-blue/50 transition-all flex items-center justify-between group"
                >
                  <span>{filter}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-border-primary group-hover:bg-accent-blue transition-colors" />
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto p-6 border-t border-border-primary/50">
             <div className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase mb-2">Display Mode</div>
             <div className="flex gap-2">
               <button className="flex-1 py-2 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-mono uppercase">Topographic</button>
               <button className="flex-1 py-2 bg-bg-primary/50 border border-border-primary/50 text-text-tertiary hover:text-text-secondary text-[10px] font-mono uppercase">Satellite</button>
             </div>
          </div>
        </aside>

        {/* Main map area */}
        <div className="flex-1 relative flex items-center justify-center bg-bg-primary overflow-hidden">
          
          {/* Faint Abstract Geometry */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none animate-slow-pan" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1" fill="none" className="text-accent-blue">
              <path d="M100,100 C300,150 400,300 350,500 C300,700 500,800 700,900" />
              <path d="M120,120 C320,170 420,320 370,520 C320,720 520,820 720,920" strokeDasharray="4,4" />
              <path d="M400,400 L600,400 L700,600 L450,650 Z" strokeWidth="0.5" strokeOpacity="0.5"/>
              <circle cx="600" cy="400" r="4" fill="currentColor" />
              <circle cx="700" cy="600" r="4" fill="currentColor" />
            </g>
          </svg>

          {/* Crosshairs */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent-blue/10 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-accent-blue/10 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-accent-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-accent-blue/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

          {/* Center content */}
          <div className="relative z-10 max-w-md bg-bg-secondary/70 backdrop-blur-xl p-8 border border-border-primary/50 text-center shadow-2xl">
            <div className="flex justify-center mb-6">
               <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-4 uppercase">Geographic Module Initialization</h2>
            <p className="text-sm font-light text-text-secondary mb-8 leading-relaxed">
              Geographic coordinates and interactive features will populate this matrix when official territories, points of interest, and borders are verified by intelligence sources.
            </p>
            <div className="inline-flex items-center gap-3 text-[10px] font-mono text-accent-blue uppercase tracking-widest border border-accent-blue/30 bg-accent-blue/5 px-6 py-3">
              STATUS: AWAITING SPATIAL DATA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
