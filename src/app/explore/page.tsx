'use client'

import { useState } from 'react'
import { allEntities, getRelatedEntities } from '@/lib/graph'
import { BaseEntity } from '@/types'
import { SectionHeader } from '@/components/ui/SectionHeader'
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
    <div className="section-spacing min-h-[75vh]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Knowledge Explorer"
          title="Explore the Graph"
          description="Navigate the GTA VI intelligence network. Every connection is backed by evidence."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Stage */}
          <div className="lg:col-span-8">
            <div className="card-base min-h-[400px] flex flex-col border-border-primary/50 relative overflow-hidden bg-gradient-to-b from-bg-secondary/30 to-bg-primary">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
              
              {!currentEntity ? (
                <div className="p-8 md:p-12 flex flex-col justify-center h-full">
                  <h3 className="text-xl text-text-primary mb-6 font-medium">Select a starting point</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {seedEntities.map(seed => (
                      <button
                        key={seed.id}
                        onClick={() => handleSelect(seed)}
                        className="text-left p-4 border border-border-primary/40 hover:border-accent-blue/50 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors group rounded-subtle"
                      >
                        <div className="text-[10px] font-mono text-text-tertiary mb-1 uppercase">{seed.category}</div>
                        <div className="text-body font-medium text-text-primary group-hover:text-accent-blue transition-colors">{seed.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-8 md:p-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border-primary/30">
                    <button onClick={handleBack} className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-colors uppercase tracking-widest">
                      &larr; Back
                    </button>
                    <button onClick={handleReset} className="text-xs font-mono text-text-tertiary hover:text-text-primary transition-colors uppercase tracking-widest">
                      Reset
                    </button>
                  </div>
                  
                  <div className="mb-6 flex items-center gap-3">
                    <StatusBadge status={currentEntity.status as any} size="sm" />
                    <span className="text-xs font-mono text-text-tertiary uppercase">{currentEntity.category}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-medium text-text-primary mb-4">{currentEntity.name}</h2>
                  <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl">{currentEntity.description}</p>
                  
                  <Link href={`/database/${currentEntity.category}s/${currentEntity.slug}`} className="inline-block border border-border-primary/50 text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors text-sm px-6 py-2.5 rounded-sm font-mono uppercase tracking-wider">
                    Open Full Dossier
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Connections Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4 pl-1">
              {currentEntity ? 'Connections' : 'Graph Statistics'}
            </h3>
            
            {currentEntity ? (
              related.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {related.map(rel => (
                    <button
                      key={rel.relationship.id}
                      onClick={() => handleSelect(rel.targetEntity)}
                      className="text-left group card-base p-4 border-border-primary/30 hover:border-accent-blue/50 transition-colors relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-blue/20 group-hover:bg-accent-blue/60 transition-colors"></div>
                      <div className="text-[10px] font-mono text-text-tertiary mb-1 uppercase">{rel.relationship.relationshipType.replace('_', ' ')}</div>
                      <div className="text-sm text-text-primary group-hover:text-accent-blue transition-colors">{rel.targetEntity.name}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="card-base p-6 text-center border-border-primary/30 bg-bg-secondary/10">
                  <p className="text-sm font-mono text-text-tertiary uppercase">No further connections</p>
                </div>
              )
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <div className="card-base p-4 border-border-primary/30 bg-bg-secondary/10">
                  <div className="text-2xl text-text-primary font-medium">{allEntities.length}</div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase mt-1">Total Entities</div>
                </div>
                <div className="card-base p-4 border-border-primary/30 bg-bg-secondary/10">
                  <div className="text-2xl text-text-primary font-medium">100%</div>
                  <div className="text-[10px] font-mono text-text-tertiary uppercase mt-1">Verified</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
