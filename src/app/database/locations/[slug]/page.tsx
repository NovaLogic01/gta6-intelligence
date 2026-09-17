import { locations } from '@/data/locations'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = locations.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return { title: `${item.name} — Locations`, description: item.description }
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find(i => i.slug === params.slug)
  if (!location) { notFound() }

  return (
    <div className="section-spacing">
      <div className="container-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Place', name: location.name, description: location.description }) }} />

        <Link href="/database/locations" className="inline-flex items-center gap-2 text-body-sm text-text-tertiary hover:text-text-primary transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
          Back to Locations
        </Link>

        {location.isSeedData && (
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-subtle bg-bg-secondary border border-border-primary">
            <span className="w-2 h-2 rounded-full bg-accent-blue/50" aria-hidden="true" />
            <span className="text-caption text-text-muted">Seed data entry</span>
          </div>
        )}

        <header className="mb-10 pb-8 border-b border-border-primary">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatusBadge status={location.status} size="md" />
            <span className="text-overline text-text-tertiary uppercase tracking-wider">Location</span>
          </div>
          <h1 className="text-display lg:text-hero text-text-primary font-display mb-3">{location.name}</h1>
          <p className="text-body-lg text-text-secondary leading-relaxed">{location.description}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-subheading font-display text-text-primary mb-4">Known Information</h2>
              {location.knownInformation.length > 0 ? (
                <ul className="space-y-3">
                  {location.knownInformation.map((info, i) => (
                    <li key={i} className="flex items-start gap-3 text-body text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/40 mt-2 flex-shrink-0" aria-hidden="true" />
                      {info}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-body text-text-tertiary">No detailed information available yet.</p>
              )}
            </section>
          </div>
          <aside className="space-y-4">
            <div className="card-base p-5">
              <h3 className="text-body-sm font-semibold text-text-primary mb-4 pb-3 border-b border-border-primary">Details</h3>
              <dl className="space-y-3 text-body-sm">
                {location.locationType && <div><dt className="text-text-muted mb-0.5">Type</dt><dd className="text-text-secondary">{location.locationType}</dd></div>}
                {location.region && <div><dt className="text-text-muted mb-0.5">Region</dt><dd className="text-text-secondary">{location.region}</dd></div>}
                <div><dt className="text-text-muted mb-0.5">Last Updated</dt><dd className="text-text-secondary">{formatDate(location.lastUpdated)}</dd></div>
              </dl>
            </div>
            {location.sourceIds.length > 0 && (
              <div className="card-base p-5">
                <h3 className="text-body-sm font-semibold text-text-primary mb-4 pb-3 border-b border-border-primary">Sources</h3>
                <ul className="space-y-2">
                  {location.sourceIds.map((sourceId) => { const source = getSourceById(sourceId); if (!source) return null; return (<li key={sourceId}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-body-sm text-accent-blue hover:text-accent-blue-muted transition-colors">{source.name}</a></li>) })}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
