import { getRecentChanges } from '@/lib/interaction'
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
    <div className="section-spacing min-h-screen bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>
      
      <div className="container-narrow relative z-10">
        <div className="mb-12 border-b border-border-primary/50 pb-8">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-widest text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></span>
            <span>SYSTEM LOGS</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-text-primary">
            RECENT <span className="font-light text-text-secondary">ACTIVITY</span>
          </h1>
          <p className="text-body max-w-xl font-light text-text-secondary">
            A chronological log of entities that were recently added to the database or received formal verification status updates.
          </p>
        </div>

        {changes.length > 0 ? (
          <div className="relative border-l border-border-primary/50 ml-2 sm:ml-4 space-y-8 pb-12">
            {changes.map((change) => (
              <div key={change.id} className="relative pl-6 sm:pl-10 group animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-bg-primary border border-border-primary group-hover:border-accent-blue transition-colors flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-border-primary group-hover:bg-accent-blue transition-colors"></div>
                </div>

                <div className="p-5 border border-border-primary/30 bg-bg-secondary/40 hover:bg-bg-hover transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-[10px] font-mono tracking-widest uppercase border-l-2 pl-2 py-0.5 ${
                        change.changeType === 'VERIFIED' ? 'text-accent-blue border-accent-blue' :
                        change.changeType === 'ADDED' ? 'text-status-confirmed border-status-confirmed' :
                        'text-text-tertiary border-text-tertiary'
                      }`}>
                        {change.changeType.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted">{formatDate(change.occurredAt)}</span>
                    </div>
                    <h3 className="text-lg font-medium text-text-primary group-hover:text-white transition-colors">
                      {change.entityName}
                    </h3>
                  </div>
                  
                  <Link
                    href={`/search?q=${encodeURIComponent(change.entityName)}`}
                    className="text-[10px] font-mono text-text-tertiary hover:text-accent-blue transition-colors uppercase tracking-widest self-start sm:self-center border border-border-primary/50 px-3 py-1.5 bg-bg-primary/50"
                  >
                    View Dossier &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center border border-border-primary/50 bg-bg-secondary/20">
            <p className="font-mono text-xs uppercase tracking-widest text-text-tertiary">No Verified Change History Available</p>
          </div>
        )}
      </div>
    </div>
  )
}
