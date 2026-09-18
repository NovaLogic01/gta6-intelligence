'use client'

import { useState } from 'react'
import { timelineEvents } from '@/data/timeline'
import { getEntityById, getArticleById } from '@/lib/graph'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Link from 'next/link'

type FilterType = 'ALL' | 'CONFIRMED' | 'OFFICIALLY_SHOWN' | 'REPORTED' | 'RUMOR' | 'SPECULATION'

export default function TimelinePage() {
  const [filter, setFilter] = useState<FilterType>('ALL')

  const filteredEvents = timelineEvents.filter(e => {
    if (filter === 'ALL') return true
    return e.status === filter
  })

  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Chronology"
          title="Interactive Timeline"
          description="Follow the history of GTA VI becoming known, from early development reports to official trailers."
        />

        <div className="flex flex-wrap gap-2 mb-16 border-b border-border-primary/30 pb-6">
          {(['ALL', 'CONFIRMED', 'OFFICIALLY_SHOWN', 'REPORTED', 'RUMOR', 'SPECULATION'] as FilterType[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition-colors rounded-sm ${
                filter === f 
                  ? 'border-accent-blue text-accent-blue bg-accent-blue/10' 
                  : 'border-border-primary/50 text-text-tertiary hover:text-text-primary hover:border-border-primary'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="relative border-l-2 border-border-primary/30 ml-4 md:ml-8 space-y-16 pb-12">
          {filteredEvents.map((event) => {
            const date = new Date(event.date)
            const relatedEntities = event.relatedEntityIds?.map(id => getEntityById(id)).filter(Boolean) || []
            const relatedArticles = event.relatedArticleIds?.map(id => getArticleById(id)).filter(Boolean) || []

            return (
              <div key={event.id} className="relative pl-8 md:pl-12 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-border-primary group-hover:border-accent-blue transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-border-primary group-hover:bg-accent-blue transition-colors"></div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                  <time className="text-accent-blue font-mono text-sm font-medium tracking-widest shrink-0">
                    {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <h3 className="text-xl md:text-2xl font-medium text-text-primary tracking-tight">
                    {event.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <StatusBadge status={event.status} size="sm" />
                  <span className="text-xs font-mono text-text-tertiary tracking-widest uppercase border-l border-border-primary/50 pl-3">
                    {event.category.replace('_', ' ')}
                  </span>
                </div>
                
                <p className="text-body text-text-secondary max-w-3xl leading-relaxed mb-6">
                  {event.description}
                </p>

                {(relatedEntities.length > 0 || relatedArticles.length > 0) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-primary/30 max-w-4xl">
                    {relatedEntities.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono tracking-widest uppercase text-text-tertiary mb-3">Entities Involved</div>
                        <div className="flex flex-wrap gap-2">
                          {relatedEntities.map(rel => (
                            <Link key={rel!.id} href={`/database/${rel!.category}s/${rel!.slug}`} className="px-3 py-1.5 border border-border-primary/40 bg-bg-secondary/20 hover:border-accent-blue/50 hover:bg-bg-secondary/40 transition-colors rounded-sm flex items-center gap-2">
                              <span className="text-[10px] font-mono text-text-tertiary uppercase">{rel!.category}</span>
                              <span className="text-sm text-text-primary">{rel!.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    {relatedArticles.length > 0 && (
                      <div>
                        <div className="text-[10px] font-mono tracking-widest uppercase text-text-tertiary mb-3">Related Intelligence</div>
                        <div className="flex flex-col gap-2">
                          {relatedArticles.map(art => (
                            <Link key={art!.id} href={`/news/${art!.slug}`} className="text-sm text-text-secondary hover:text-accent-blue transition-colors line-clamp-1 border-l-2 border-border-primary/30 hover:border-accent-blue pl-3 py-0.5">
                              {art!.title}
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
            <div className="pl-8 md:pl-12">
              <p className="text-text-secondary font-mono text-sm uppercase tracking-widest">No events found for this filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
