import { articles } from '@/data/articles'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { formatDate } from '@/lib/utils'
import { getSourceById } from '@/data/sources'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: article.title,
    description: article.summary,
    openGraph: { title: article.title, description: article.summary, type: 'article' },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const source = getSourceById(article.sourceId)
  const paragraphs = article.content.split('\n\n')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'GTA VI Intel',
    },
    publisher: {
      '@type': 'Organization',
      name: 'GTA VI Intel',
    },
  }

  return (
    <article className="section-spacing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container-article">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-body-sm text-text-tertiary hover:text-text-primary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to News
        </Link>

        {/* Seed data notice */}
        {article.isSeedData && (
          <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-subtle bg-bg-secondary border border-border-primary">
            <span className="w-2 h-2 rounded-full bg-accent-blue/50" aria-hidden="true" />
            <span className="text-caption text-text-muted">
              Seed data — this article will be replaced with live content in Session 2
            </span>
          </div>
        )}

        {/* Article header */}
        <header className="mb-10 pb-8 border-b border-border-primary">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <StatusBadge status={article.status} size="md" />
            <span className="text-overline text-text-tertiary uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-display lg:text-hero text-text-primary font-display mb-4">
            {article.title}
          </h1>

          <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-body-sm text-text-tertiary">
            {source && (
              <div className="flex items-center gap-1.5">
                <span className="text-text-muted">Source:</span>
                <span className="text-text-secondary font-medium">{source.name}</span>
              </div>
            )}
            <span className="text-text-muted" aria-hidden="true">&middot;</span>
            <time dateTime={article.publishedAt}>
              Published {formatDate(article.publishedAt)}
            </time>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <>
                <span className="text-text-muted" aria-hidden="true">&middot;</span>
                <time dateTime={article.updatedAt}>
                  Updated {formatDate(article.updatedAt)}
                </time>
              </>
            )}
          </div>
        </header>

        {/* Article body */}
        <div className="mb-12">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-body-lg text-text-secondary leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-border-primary">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-caption text-text-tertiary bg-bg-secondary border border-border-primary rounded-subtle">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Related articles */}
        {article.relatedArticleIds && article.relatedArticleIds.length > 0 && (
          <section className="pt-8 border-t border-border-primary" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-subheading font-display text-text-primary mb-6">
              Related Intelligence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.relatedArticleIds.map((id) => {
                const related = articles.find(a => a.id === id)
                if (!related) return null
                return (
                  <Link
                    key={id}
                    href={`/news/${related.slug}`}
                    className="group card-base card-hover p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <StatusBadge status={related.status} size="sm" />
                    </div>
                    <h3 className="text-body font-medium text-text-primary group-hover:text-accent-blue transition-colors mb-1">
                      {related.title}
                    </h3>
                    <time className="text-caption text-text-muted" dateTime={related.publishedAt}>
                      {formatDate(related.publishedAt)}
                    </time>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
