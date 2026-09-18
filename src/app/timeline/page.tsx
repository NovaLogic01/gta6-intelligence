'use client'

import { useState } from 'react'
import { timelineEvents } from '@/data/timeline'
import { getEntityById, getArticleById } from '@/lib/graph'
import { StatusBadge } from '@/components/ui/StatusBadge'
import Link from 'next/link'

type FilterType = 'ALL' | 'CONFIRMED' | 'OFFICIALLY_SHOWN' | 'REPORTED' | 'RUMOR' | 'SPECULATION'

export default function TimelinePage() {
  const [filter, setFilter] = useState<FilterType>('ALL')

  const filteredEvents = timelineEvents.filter(e => {
    if (filter === 'ALL') return true
    return e.status === filter
  })

  return (
    <div className="section-spacing relative bg-bg-primary min-h-screen">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="mb-16 border-b border-border-primary/50 pb-8">
          <div className="flex items-center gap-2 mb-4 text-caption text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></span>
            <span>CHRONOLOGY // EVENT LOG</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4 text-text-primary">
            THE <span className="font-light text-text-secondary">TIMELINE</span>
          </h1>
          <p className="text-body max-w-2xl font-light">
            Follow the history of GTA VI becoming known, from early development reports to official trailers and confirmations.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-20 pb-6 border-b border-border-primary/30">
          {(['ALL', 'CONFIRMED', 'OFFICIALLY_SHOWN', 'REPORTED', 'RUMOR', 'SPECULATION'] as FilterType[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase border transition-colors ${
                filter === f 
                  ? 'border-accent-blue/50 text-accent-blue bg-accent-blue/5' 
                  : 'border-border-primary/30 text-text-tertiary hover:text-text-primary hover:border-border-primary'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="relative border-l border-border-primary/50 ml-4 md:ml-12 space-y-24 pb-20">
          {filteredEvents.map((event) => {
            const date = new Date(event.date)
            const relatedEntities = event.relatedEntityIds?.map(id => getEntityById(id)).filter(Boolean) || []
            const relatedArticles = event.relatedArticleIds?.map(id => getArticleById(id)).filter(Boolean) || []

            const isConfirmed = event.status === 'CONFIRMED' || event.status === 'OFFICIALLY_SHOWN'

            return (
              <div key={event.id} className="relative pl-8 md:pl-16 group animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className={`absolute -left-[5px] top-3 w-[9px] h-[9px] rounded-full transition-colors flex items-center justify-center ${isConfirmed ? 'bg-status-confirmed shadow-[0_0_12px_rgba(16,185,129,0.8)]' : 'bg-bg-primary border border-border-primary group-hover:border-accent-blue'}`}>
                  {!isConfirmed && <div className="w-1 h-1 rounded-full bg-border-primary group-hover:bg-accent-blue transition-colors"></div>}
                </div>
                
                <div className="flex flex-col gap-1 mb-6">
                  <div className="flex items-center gap-4">
                    <time className="text-3xl md:text-5xl font-light text-text-primary tracking-tighter shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                      {date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })}
                    </time>
                    <div className="h-px bg-border-primary/50 flex-grow max-w-[100px] md:max-w-[200px]"></div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-text-primary tracking-tight mb-4">
                    {event.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <StatusBadge status={event.status} size="md" />
                    <span className="w-px h-3 bg-border-primary"></span>
                    <span className="text-[10px] font-mono text-text-tertiary tracking-widest uppercase">
                      CAT: {event.category.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <p className="text-lg text-text-secondary max-w-3xl leading-relaxed mb-8 font-light">
                  {event.description}
                </p>

                {(relatedEntities.length > 0 || relatedArticles.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border-primary/30 max-w-4xl">
                    {relatedEntities.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono tracking-widest uppercase text-text-muted mb-4">Entities Involved</div>
                        <div className="flex flex-col gap-2">
                          {relatedEntities.map(rel => (
                            <Link key={rel!.id} href={`/database/${rel!.category}s/${rel!.slug}`} className="group/link flex items-center justify-between p-3 border border-border-primary/30 bg-bg-secondary/10 hover:border-accent-blue/30 hover:bg-bg-secondary/30 transition-colors">
                              <span className="text-sm text-text-primary group-hover/link:text-accent-blue transition-colors">{rel!.name}</span>
                              <span className="text-[10px] font-mono text-text-tertiary uppercase">{rel!.category}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {relatedArticles.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono tracking-widest uppercase text-text-muted mb-4">Related Intelligence</div>
                        <div className="flex flex-col gap-2">
                          {relatedArticles.map(art => (
                            <Link key={art!.id} href={`/news/${art!.slug}`} className="group/link flex items-center gap-3 p-3 border border-border-primary/30 bg-bg-secondary/10 hover:border-accent-blue/30 hover:bg-bg-secondary/30 transition-colors">
                              <div className="w-1 h-1 bg-border-primary group-hover/link:bg-accent-blue rounded-full"></div>
                              <span className="text-sm text-text-secondary group-hover/link:text-text-primary transition-colors line-clamp-1">
                                {art!.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
          
          {filteredEvents.length === 0 && (
            <div className="pl-8 md:pl-16">
              <p className="text-text-secondary font-mono text-[10px] uppercase tracking-widest">No events found for this filter parameter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
