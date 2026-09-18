'use client'

import { useState } from 'react'
import { allEntities, getRelatedEntities } from '@/lib/graph'
import { BaseEntity } from '@/types'
import { StatusBadge } from '@/components/ui/StatusBadge'
import Link from 'next/link'

export default function ExplorePage() {
  const [history, setHistory] = useState<BaseEntity[]>([])
  
  // Starting point options
  const seedEntities = allEntities.filter(e => e.status === 'OFFICIALLY_SHOWN' || e.status === 'CONFIRMED').slice(0, 6)
  
  const currentEntity = history[history.length - 1]
  const related = currentEntity ? getRelatedEntities(currentEntity.id) : []

  const handleSelect = (entity: BaseEntity) => {
    setHistory([...history, entity])
  }

  const handleBack = () => {
    setHistory(history.slice(0, -1))
  }

  const handleReset = () => {
    setHistory([])
  }

  return (
    <div className="section-spacing min-h-screen bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="mb-12 border-b border-border-primary/50 pb-8">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-widest text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></span>
            <span>KNOWLEDGE GRAPH EXPLORER</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-text-primary">
            EXPLORE THE <span className="font-light text-text-secondary">GRAPH</span>
          </h1>
          <p className="text-body max-w-xl font-light text-text-secondary">
            Navigate the GTA VI intelligence network sequentially. Every connection is backed by verified evidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Stage */}
          <div className="lg:col-span-8">
            <div className="min-h-[400px] flex flex-col border border-border-primary/50 bg-bg-secondary/40 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue-subtle blur-[120px] pointer-events-none"></div>
              
              {!currentEntity ? (
                <div className="p-8 md:p-16 flex flex-col justify-center h-full relative z-10">
                  <div className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-6 border-b border-border-primary/30 pb-2">Initialize Node</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {seedEntities.map(seed => (
                      <button
                        key={seed.id}
                        onClick={() => handleSelect(seed)}
                        className="text-left p-4 border border-border-primary/30 bg-bg-primary/50 hover:bg-bg-hover hover:border-accent-blue/50 transition-colors group flex items-center justify-between"
                      >
                        <div>
                          <div className="text-[10px] font-mono text-text-tertiary mb-1 uppercase">{seed.category}</div>
                          <div className="text-sm font-medium text-text-primary group-hover:text-white transition-colors">{seed.name}</div>
                        </div>
                        <span className="text-text-tertiary group-hover:text-accent-blue transition-colors font-mono">&rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full z-10 relative">
                  <div className="flex items-center justify-between p-4 border-b border-border-primary/50 bg-bg-primary/50">
                    <button onClick={handleBack} className="text-[10px] font-mono text-text-tertiary hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
                      <span>&larr;</span> Step Back
                    </button>
                    
                    {/* Breadcrumb path */}
                    <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-text-tertiary truncate max-w-[50%]">
                      {history.slice(0, 3).map((h, i) => (
                        <span key={i} className="flex items-center gap-2 truncate">
                          <span className="truncate">{h.name}</span>
                          {i < history.length - 1 && <span className="text-border-primary">/</span>}
                        </span>
                      ))}
                      {history.length > 3 && <span className="text-border-primary">/ ...</span>}
                    </div>

                    <button onClick={handleReset} className="text-[10px] font-mono text-text-tertiary hover:text-white transition-colors uppercase tracking-widest">
                      Terminate [X]
                    </button>
                  </div>
                  
                  <div className="p-8 md:p-16 flex-grow flex flex-col justify-center animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <StatusBadge status={currentEntity.status as any} size="md" />
                      <span className="w-px h-3 bg-border-primary"></span>
                      <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                        {currentEntity.category} {'//'} {currentEntity.id.substring(0,8)}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tighter leading-[1.05]">{currentEntity.name}</h2>
                    <p className="text-lg text-text-secondary leading-relaxed mb-10 font-light max-w-2xl">{currentEntity.description}</p>
                    
                    <div>
                      <Link href={`/database/${currentEntity.category}s/${currentEntity.slug}`} className="inline-block border border-border-primary bg-bg-primary text-text-secondary hover:text-white hover:border-accent-blue/50 transition-colors px-6 py-3 font-mono text-[10px] uppercase tracking-widest">
                        Open Full Dossier &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Connections Sidebar */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-4 pl-1 border-b border-border-primary/50 pb-2">
              {currentEntity ? 'Linked Nodes' : 'System Metrics'}
            </h3>
            
            {currentEntity ? (
              related.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {related.map(rel => (
                    <button
                      key={rel.relationship.id}
                      onClick={() => handleSelect(rel.targetEntity)}
                      className="text-left group p-4 border border-border-primary/30 bg-bg-secondary/20 hover:bg-bg-hover hover:border-accent-blue/30 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <div className="text-[10px] font-mono text-text-tertiary mb-1 uppercase">REL: {rel.relationship.relationshipType.replace('_', ' ')}</div>
                        <div className="text-sm font-medium text-text-primary group-hover:text-accent-blue transition-colors">{rel.targetEntity.name}</div>
                      </div>
                      <span className="text-text-tertiary group-hover:text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-6 border border-border-primary/30 bg-bg-secondary/10 text-center flex items-center justify-center h-32">
                  <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">End of verified path</span>
                </div>
              )
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <div className="p-6 border border-border-primary/30 bg-bg-secondary/20 text-center">
                  <div className="text-3xl text-text-primary font-light mb-2 font-mono">{allEntities.length}</div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">Total Nodes</div>
                </div>
                <div className="p-6 border border-border-primary/30 bg-bg-secondary/20 text-center">
                  <div className="text-3xl text-status-confirmed font-light mb-2 font-mono">100%</div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">Verified</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
