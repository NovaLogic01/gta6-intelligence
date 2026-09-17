import { characters } from '@/data/characters'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export function generateStaticParams() {
  return characters.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = characters.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} — Characters`,
    description: item.description,
  }
}

export default function CharacterDetailPage({ params }: { params: { slug: string } }) {
  const character = characters.find(i => i.slug === params.slug)

  if (!character) {
    notFound()
  }

  return (
    <div className="section-spacing">
      <div className="container-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: character.name,
              description: character.description,
            }),
          }}
        />

        <Link
          href="/database/characters"
          className="inline-flex items-center gap-2 text-body-sm text-text-tertiary hover:text-text-primary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Characters
        </Link>

        {character.isSeedData && (
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-subtle bg-bg-secondary border border-border-primary">
            <span className="w-2 h-2 rounded-full bg-accent-blue/50" aria-hidden="true" />
            <span className="text-caption text-text-muted">Seed data entry</span>
          </div>
        )}

        <header className="mb-10 pb-8 border-b border-border-primary">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <StatusBadge status={character.status} size="md" />
            <span className="text-overline text-text-tertiary uppercase tracking-wider">Character</span>
          </div>

          <h1 className="text-display lg:text-hero text-text-primary font-display mb-3">
            {character.name}
          </h1>

          {character.role && (
            <p className="text-subheading text-text-secondary mb-4">{character.role}</p>
          )}

          <p className="text-body-lg text-text-secondary leading-relaxed">
            {character.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-subheading font-display text-text-primary mb-4">Known Information</h2>
              {character.knownInformation.length > 0 ? (
                <ul className="space-y-3">
                  {character.knownInformation.map((info, i) => (
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

            {character.firstAppearance && (
              <section>
                <h2 className="text-subheading font-display text-text-primary mb-4">First Appearance</h2>
                <p className="text-body text-text-secondary">{character.firstAppearance}</p>
              </section>
            )}
          </div>

          <aside className="space-y-4">
            <div className="card-base p-5">
              <h3 className="text-body-sm font-semibold text-text-primary mb-4 pb-3 border-b border-border-primary">Record Details</h3>
              <dl className="space-y-3 text-body-sm">
                <div>
                  <dt className="text-text-muted mb-0.5">Category</dt>
                  <dd className="text-text-secondary capitalize">{character.category}</dd>
                </div>
                <div>
                  <dt className="text-text-muted mb-0.5">Last Updated</dt>
                  <dd className="text-text-secondary">{formatDate(character.lastUpdated)}</dd>
                </div>
                {character.voiceActor && (
                  <div>
                    <dt className="text-text-muted mb-0.5">Voice Actor</dt>
                    <dd className="text-text-secondary">{character.voiceActor}</dd>
                  </div>
                )}
              </dl>
            </div>

            {character.sourceIds.length > 0 && (
              <div className="card-base p-5">
                <h3 className="text-body-sm font-semibold text-text-primary mb-4 pb-3 border-b border-border-primary">Sources</h3>
                <ul className="space-y-2">
                  {character.sourceIds.map((sourceId) => {
                    const source = getSourceById(sourceId)
                    if (!source) return null
                    return (
                      <li key={sourceId}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-body-sm text-accent-blue hover:text-accent-blue-muted transition-colors"
                        >
                          {source.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}
