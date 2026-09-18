import Link from 'next/link'
import { StatusBadge } from './StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'
import { getRelatedEntities, getRelatedArticles, getRelatedTimelineEvents } from '@/lib/graph'
import { BaseEntity } from '@/types'

export function EntityDossier({ entity, backLink, backLabel }: { entity: BaseEntity, backLink: string, backLabel: string }) {
  const relatedEntities = getRelatedEntities(entity.id)
  const relatedArticles = getRelatedArticles(entity.id)
  const relatedTimeline = getRelatedTimelineEvents(entity.id)
  
  return (
    <div className="section-spacing relative bg-bg-primary min-h-screen">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>
      
      <div className="container-article relative z-10">
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-text-tertiary hover:text-text-primary transition-colors mb-12 group"
        >
          <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">&larr;</span>
          {backLabel}
        </Link>

        <header className="mb-16 pb-12 border-b border-border-primary/50 relative">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent-blue-subtle blur-[100px] rounded-full pointer-events-none opacity-20"></div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status={entity.status} size="md" />
            <span className="w-px h-3 bg-border-primary"></span>
            <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
              CLASS: {entity.category}
            </span>
            <span className="w-px h-3 bg-border-primary"></span>
            <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
              ID: {entity.id.substring(0,8)}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-text-primary font-bold tracking-tighter mb-6 leading-[1.05]">
            {entity.name}
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed font-light max-w-3xl">
            {entity.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Verified Intelligence</h2>
              {entity.knownInformation.length > 0 ? (
                <ul className="space-y-4">
                  {entity.knownInformation.map((info, i) => (
                    <li key={i} className="flex items-start gap-4 text-body text-text-secondary">
                      <span className="text-accent-blue/50 font-mono text-xs mt-1">{(i+1).toString().padStart(2, '0')}</span>
                      <span className="font-light">{info}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body text-text-tertiary font-light">No detailed information available yet.</p>
              )}
            </section>

            {relatedEntities.length > 0 && (
              <section>
                <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Connections</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedEntities.map(rel => (
                    <Link key={rel.relationship.id} href={`/database/${rel.targetEntity.category === 'character' ? 'characters' : rel.targetEntity.category === 'location' ? 'locations' : rel.targetEntity.category === 'vehicle' ? 'vehicles' : rel.targetEntity.category === 'feature' ? 'features' : rel.targetEntity.category === 'gameplay' ? 'gameplay' : rel.targetEntity.category === 'activity' ? 'activities' : rel.targetEntity.category}s/${rel.targetEntity.slug}`} className="editorial-row group block p-4 border border-border-primary/20 hover:border-border-primary/60 transition-colors bg-bg-secondary/20">
                      <div className="text-xs font-mono text-text-tertiary mb-1 uppercase">{rel.relationship.relationshipType.replace('_', ' ')}</div>
                      <div className="text-text-primary group-hover:text-accent-blue transition-colors">{rel.targetEntity.name}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {(relatedArticles.length > 0 || relatedTimeline.length > 0) && (
              <section>
                <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Related Archives</h2>
                <ul className="space-y-3">
                  {relatedArticles.map(art => (
                    <li key={art.id}>
                      <Link href={`/news/${art.slug}`} className="text-text-secondary hover:text-accent-blue transition-colors line-clamp-1">
                        → {art.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            <div className="dossier-panel p-6 bg-bg-secondary/30">
              <h3 className="text-xs font-mono text-text-primary tracking-widest uppercase mb-4 pb-3 border-b border-border-primary/30">Record Metadata</h3>
              <dl className="space-y-4 text-sm font-mono">
                <div>
                  <dt className="text-text-tertiary mb-1">CLASSIFICATION</dt>
                  <dd className="text-text-secondary">{entity.category}</dd>
                </div>
                <div>
                  <dt className="text-text-tertiary mb-1">LAST VERIFIED</dt>
                  <dd className="text-text-secondary">{entity.lastVerifiedAt ? formatDate(entity.lastVerifiedAt) : formatDate(entity.lastUpdated)}</dd>
                </div>
              </dl>
            </div>

            {entity.sourceIds.length > 0 && (
              <div className="dossier-panel p-6 bg-bg-secondary/30">
                <h3 className="text-xs font-mono text-text-primary tracking-widest uppercase mb-4 pb-3 border-b border-border-primary/30">Primary Sources</h3>
                <ul className="space-y-3">
                  {entity.sourceIds.map((sourceId) => {
                    const source = getSourceById(sourceId)
                    if (!source) return <li key={sourceId} className="text-text-tertiary text-sm">{sourceId}</li>
                    return (
                      <li key={sourceId}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-mono text-accent-blue hover:text-accent-blue/70 transition-colors block truncate"
                        >
                          [↗] {source.name.toUpperCase()}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* SHARE / DISCOVERY TOOLS */}
            <div className="pt-6 mt-6 border-t border-border-primary/30 flex flex-col gap-3">
              <Link 
                href={`/share/entity/${entity.slug}`} 
                className="flex items-center justify-between px-4 py-3 bg-bg-primary text-text-primary text-[10px] font-mono tracking-widest uppercase hover:bg-bg-hover transition-colors border border-border-primary/50 group"
              >
                <span>Generate Share Card</span>
                <span className="text-text-tertiary group-hover:text-accent-blue">&rarr;</span>
              </Link>
              <Link 
                href="/explore" 
                className="flex items-center justify-between px-4 py-3 bg-accent-blue/5 text-accent-blue text-[10px] font-mono tracking-widest uppercase hover:bg-accent-blue/10 transition-colors border border-accent-blue/20 group"
              >
                <span>Explore Connections</span>
                <span className="text-accent-blue/50 group-hover:text-accent-blue">&rarr;</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
