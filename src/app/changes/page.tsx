import { getRecentChanges } from '@/lib/interaction'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recent Updates | GTA VI Intelligence Platform',
  description: 'Track the most recently added or verified entities in the GTA VI knowledge base.',
}

export default function ChangesPage() {
  const changes = getRecentChanges(20)

  return (
    <div className="section-spacing">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Database Updates"
          title="Recent Activity"
          description="A log of entities that were recently added to the database or received formal verification."
        />

        {changes.length > 0 ? (
          <div className="space-y-6">
            {changes.map((change) => (
              <div key={change.id} className="editorial-row p-5 group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border-primary/30 bg-bg-secondary/10 hover:border-border-primary/60 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${
                      change.changeType === 'VERIFIED' ? 'text-accent-blue border-accent-blue/30 bg-accent-blue/10' :
                      change.changeType === 'ADDED' ? 'text-green-400 border-green-400/30 bg-green-400/10' :
                      'text-text-tertiary border-border-primary bg-bg-tertiary'
                    }`}>
                      {change.changeType.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-mono text-text-muted">{formatDate(change.occurredAt)}</span>
                  </div>
                  <h3 className="text-body font-medium text-text-primary">
                    {change.entityName}
                  </h3>
                </div>
                
                <Link
                  href={`/search?q=${encodeURIComponent(change.entityName)}`}
                  className="text-xs font-mono text-text-tertiary hover:text-accent-blue transition-colors self-start sm:self-center"
                >
                  [ VIEW DOSSIER ]
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-base p-12 text-center text-text-secondary border-border-primary/30">
            <p className="font-mono text-sm uppercase tracking-widest text-text-tertiary">No Verified Change History Available</p>
          </div>
        )}
      </div>
    </div>
  )
}
