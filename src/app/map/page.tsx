'use client'

import { useState, useMemo } from 'react'
import { locations } from '@/data/locations'
import { activities } from '@/data/activities'
import Link from 'next/link'

export default function MapPage() {
  const [filter, setFilter] = useState<string>('LOCATIONS')
  const [mode, setMode] = useState<'TOPOGRAPHIC' | 'GRID'>('GRID')
  const [selectedNode, setSelectedNode] = useState<any>(null)

  const items = useMemo(() => {
    switch(filter) {
      case 'LOCATIONS':
        return locations.filter(l => l.locationType !== 'Landmark' && l.locationType !== 'Business')
      case 'ACTIVITIES':
        return activities
      case 'LANDMARKS':
        return locations.filter(l => l.locationType === 'Landmark')
      case 'BUSINESSES':
        return locations.filter(l => l.locationType === 'Business')
      case 'UNKNOWN':
        return []
      default:
        return []
    }
  }, [filter])

  const renderNodes = () => {
    if (items.length === 0) {
      return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-bg-secondary/80 backdrop-blur-md px-6 py-4 border border-border-primary/50 text-center">
            <h3 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-2">STATUS: NO INDEXED RECORDS</h3>
            <p className="text-xs text-text-muted">Verified spatial intelligence for this category is currently unavailable.</p>
          </div>
        </div>
      )
    }

    // Deterministic placement for schematic map
    const centerX = 50
    const centerY = 50
    const radius = 30
    
    return items.map((item, index) => {
      // Create a deterministic angle based on index
      const angle = (index / items.length) * Math.PI * 2
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius
      
      const isSelected = selectedNode?.id === item.id

      return (
        <div 
          key={item.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group z-30`}
          style={{ left: `${x}%`, top: `${y}%` }}
          onClick={() => setSelectedNode(item)}
        >
          {/* Node Point */}
          <div className={`relative flex items-center justify-center ${isSelected ? 'scale-125' : 'hover:scale-110'}`}>
            <div className={`w-3 h-3 rounded-full border-2 ${isSelected ? 'bg-accent-blue border-white' : 'bg-bg-primary border-accent-blue'} z-10 transition-colors shadow-[0_0_15px_rgba(45,136,255,0.4)]`}></div>
            {isSelected && <div className="absolute w-8 h-8 rounded-full border border-accent-blue animate-ping opacity-20"></div>}
            
            {/* Label */}
            <div className={`absolute top-5 whitespace-nowrap text-[10px] font-mono tracking-widest uppercase transition-opacity ${isSelected ? 'text-white opacity-100 font-bold' : 'text-text-tertiary opacity-70 group-hover:opacity-100 group-hover:text-text-primary'}`}>
              {item.name}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] relative bg-bg-primary overflow-hidden">
      
      {/* Background geographic texture based on mode */}
      <div className="absolute inset-0 bg-coordinate-grid opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-film-grain opacity-50 pointer-events-none" aria-hidden="true" />
      
      {mode === 'TOPOGRAPHIC' && (
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 Q25,10 50,40 T100,20" stroke="currentColor" fill="none" className="text-text-muted" strokeWidth="0.2"/>
            <path d="M0,50 Q25,30 50,60 T100,40" stroke="currentColor" fill="none" className="text-text-muted" strokeWidth="0.2"/>
            <path d="M0,70 Q25,50 50,80 T100,60" stroke="currentColor" fill="none" className="text-text-muted" strokeWidth="0.2"/>
            <path d="M0,90 Q25,70 50,100 T100,80" stroke="currentColor" fill="none" className="text-text-muted" strokeWidth="0.2"/>
        </svg>
      )}

      {mode === 'GRID' && (
         <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
           {Array.from({length: 10}).map((_, i) => (
             <div key={i} className="w-full h-px bg-accent-blue"></div>
           ))}
           <div className="absolute inset-0 flex justify-between">
             {Array.from({length: 10}).map((_, i) => (
               <div key={i} className="h-full w-px bg-accent-blue"></div>
             ))}
           </div>
         </div>
      )}

      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-blue-subtle blur-[120px] pointer-events-none opacity-30 mix-blend-screen" aria-hidden="true" />

      {/* Header Bar */}
      <div className="w-full flex-shrink-0 border-b border-border-primary/50 bg-bg-secondary/40 backdrop-blur-md px-6 py-4 flex items-center justify-between z-20 relative">
        <div>
          <h1 className="text-xl font-medium tracking-tight text-text-primary mb-1 uppercase">Leonida Intelligence Map</h1>
          <p className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase flex items-center gap-2">
            SCHEMATIC // NOT TO SCALE
          </p>
        </div>
        
        <div className="hidden sm:flex items-center gap-6 text-[10px] font-mono text-text-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-status-confirmed rounded-full animate-pulse"></span>
            <span>SYSTEM: ACTIVE</span>
          </div>
          <div className="border-l border-border-primary/50 pl-6 text-accent-blue">
            POSITION DATA: SOURCE-CONSTRAINED
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex">

        {/* Sidebar Filters */}
        <aside className="w-64 bg-bg-secondary/60 backdrop-blur-xl border-r border-border-primary/50 z-20 flex flex-col">
          <div className="p-6">
            <h3 className="text-[10px] text-text-tertiary uppercase font-mono tracking-widest mb-6 pb-2 border-b border-border-primary/50">Classification Filters</h3>
            <nav className="space-y-1" aria-label="Map filters">
              {['LOCATIONS', 'ACTIVITIES', 'LANDMARKS', 'BUSINESSES', 'UNKNOWN'].map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setSelectedNode(null); }}
                  className={`w-full text-left px-3 py-3 text-xs font-mono tracking-widest hover:text-white border transition-all flex items-center justify-between group ${filter === f ? 'bg-accent-blue/10 border-accent-blue/50 text-white' : 'text-text-secondary bg-bg-primary/30 border-border-primary/30 hover:border-accent-blue/30'}`}
                >
                  <span>{f}</span>
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors ${filter === f ? 'bg-accent-blue' : 'bg-border-primary group-hover:bg-accent-blue/50'}`} />
                </button>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto p-6 border-t border-border-primary/50">
             <div className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase mb-2">Display Mode</div>
             <div className="flex gap-2">
               <button 
                onClick={() => setMode('TOPOGRAPHIC')}
                className={`flex-1 py-2 text-[10px] font-mono uppercase border transition-colors ${mode === 'TOPOGRAPHIC' ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue' : 'bg-bg-primary/50 border-border-primary/50 text-text-tertiary hover:text-text-secondary'}`}
               >
                 Topographic
               </button>
               <button 
                onClick={() => setMode('GRID')}
                className={`flex-1 py-2 text-[10px] font-mono uppercase border transition-colors ${mode === 'GRID' ? 'bg-accent-blue/10 border-accent-blue/30 text-accent-blue' : 'bg-bg-primary/50 border-border-primary/50 text-text-tertiary hover:text-text-secondary'}`}
               >
                 Grid
               </button>
             </div>
          </div>
        </aside>

        {/* Main map area */}
        <div className="flex-1 relative flex items-center justify-center bg-bg-primary overflow-hidden">
          
          {/* Crosshairs */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent-blue/10 pointer-events-none" aria-hidden="true" />
          <div className="absolute left-1/2 top-0 w-px h-full bg-accent-blue/10 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-accent-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
          <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-accent-blue/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

          {/* Schematic Nodes */}
          {renderNodes()}

          {/* Detail Panel */}
          {selectedNode && (
            <div className="absolute bottom-8 right-8 w-80 bg-bg-secondary/90 backdrop-blur-md border border-border-primary shadow-2xl z-40 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="p-4 border-b border-border-primary/50 flex justify-between items-center bg-bg-primary/50">
                <span className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase">Entity Dossier</span>
                <button onClick={() => setSelectedNode(null)} className="text-text-muted hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-2 h-2 rounded-full ${selectedNode.status === 'CONFIRMED' ? 'bg-status-confirmed' : selectedNode.status === 'OFFICIALLY_SHOWN' ? 'bg-status-shown' : 'bg-status-reported'}`}></span>
                  <span className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase">{selectedNode.status}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{selectedNode.name}</h3>
                <p className="text-sm font-light text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                  {selectedNode.description}
                </p>
                <Link 
                  href={filter === 'ACTIVITIES' ? `/database/activities/${selectedNode.slug}` : `/database/locations/${selectedNode.slug}`}
                  className="block w-full text-center border border-accent-blue/50 bg-accent-blue/10 hover:bg-accent-blue hover:text-bg-primary text-accent-blue py-3 text-[10px] font-mono tracking-widest uppercase transition-colors"
                >
                  Access Full Record
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
