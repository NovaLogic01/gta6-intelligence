import type { Metadata } from 'next'
import { trailers } from '@/data/trailers'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'

export const metadata: Metadata = {
  title: 'Trailers',
  description: 'Official GTA VI trailer archive with detailed breakdowns and key observations.',
}

export default function TrailersPage() {
  return (
    <div className="section-spacing">
      <div className="container-wide max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Trailers"
          title="Official Trailer Archive"
          description="Every official GTA VI trailer with detailed observations and analysis."
        />

        <div className="space-y-12">
          {trailers.map((trailer) => {
            const source = getSourceById(trailer.sourceId)

            return (
              <div key={trailer.id} id={trailer.id} className="card-base overflow-hidden">
                {/* Video embed */}
                {trailer.embedId && (
                  <div className="aspect-video bg-black relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube-nocookie.com/embed/${trailer.embedId}`}
                      title={trailer.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Info */}
                <div className="p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <StatusBadge status={trailer.status} size="md" />
                    {trailer.duration && (
                      <span className="text-caption text-text-tertiary">Duration: {trailer.duration}</span>
                    )}
                  </div>

                  <h2 className="text-heading font-display text-text-primary mb-2">
                    {trailer.title}
                  </h2>
                  <time className="text-body-sm text-accent-blue block mb-4" dateTime={trailer.releaseDate}>
                    Released {formatDate(trailer.releaseDate)}
                  </time>

                  <p className="text-body text-text-secondary mb-6 leading-relaxed">
                    {trailer.description}
                  </p>

                  {/* Key details */}
                  {trailer.keyDetails && trailer.keyDetails.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-overline text-text-secondary uppercase tracking-wider mb-3">Key Observations</h3>
                      <ul className="space-y-2">
                        {trailer.keyDetails.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-body-sm text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/40 mt-1.5 flex-shrink-0" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border-primary text-caption text-text-muted">
                    {source && (
                      <span>Source: <span className="text-text-tertiary">{source.name}</span></span>
                    )}
                    {trailer.officialUrl && (
                      <>
                        <span aria-hidden="true">&middot;</span>
                        <a
                          href={trailer.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-blue hover:text-accent-blue-muted transition-colors"
                        >
                          Watch on YouTube
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
