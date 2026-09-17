import type { Metadata } from 'next'
import { timelineEvents } from '@/data/timeline'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'

export const metadata: Metadata = {
  title: 'Timeline',
  description: 'Chronological history of every major GTA VI event, announcement, and development.',
}

export default function TimelinePage() {
  const sortedEvents = [...timelineEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="section-spacing">
      <div className="container-wide max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Timeline"
          title="Chronological Intelligence"
          description="Every major GTA VI event, announcement, and development — ordered by date."
        />

        <div className="flex items-center gap-2 mb-10 px-3 py-2 rounded-subtle bg-bg-secondary border border-border-primary">
          <span className="w-2 h-2 rounded-full bg-accent-blue/50" aria-hidden="true" />
          <span className="text-caption text-text-muted">Seed data — timeline expands as events are verified</span>
        </div>

        <div className="relative ml-4 md:ml-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border-primary" aria-hidden="true" />

          <div className="space-y-10">
            {sortedEvents.map((event) => {
              const source = getSourceById(event.sourceId)
              return (
                <div key={event.id} className="relative pl-8 md:pl-10">
                  {/* Dot */}
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-blue border-2 border-bg-primary" aria-hidden="true" />

                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                    <div className="md:w-28 flex-shrink-0">
                      <time className="text-body-sm font-medium text-accent-blue whitespace-nowrap" dateTime={event.date}>
                        {formatDate(event.date)}
                      </time>
                    </div>

                    <div className="flex-1 card-base p-5 hover:bg-bg-tertiary transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <StatusBadge status={event.status} size="sm" />
                        <span className="text-caption text-text-tertiary uppercase tracking-wider">{event.category}</span>
                        {event.isSeedData && event.title.includes('[Sample Data]') && (
                          <span className="text-caption text-text-muted italic">Sample</span>
                        )}
                      </div>

                      <h3 className="text-body-lg font-semibold text-text-primary mb-1.5">
                        {event.title}
                      </h3>
                      <p className="text-body-sm text-text-secondary mb-3">
                        {event.description}
                      </p>

                      {source && (
                        <div className="text-caption text-text-muted pt-3 border-t border-border-primary">
                          Source: <span className="text-text-tertiary">{source.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
