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
    <article className="section-spacing relative bg-bg-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Cinematic noise and gradient for article */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-primary pointer-events-none">
        <div className="absolute inset-0 bg-film-grain opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-accent-blue-subtle blur-[100px] opacity-20 pointer-events-none"></div>
      </div>

      <div className="max-w-[720px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-text-tertiary hover:text-text-primary transition-colors mb-12 group"
        >
          <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all">&larr;</span>
          Return to Archive
        </Link>

        {/* Seed data notice */}
        {article.isSeedData && (
          <div className="flex items-center gap-2 mb-6 px-4 py-2 border-l-2 border-accent-blue/50 bg-bg-secondary/50 text-caption text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" aria-hidden="true" />
            Seed data - will be replaced with live content
          </div>
        )}

        {/* Article header */}
        <header className="mb-12 pb-8 border-b border-border-primary/50">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <StatusBadge status={article.status} size="md" />
            <span className="w-px h-3 bg-border-primary"></span>
            <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-text-primary font-bold tracking-tighter mb-6 leading-[1.05]">
            {article.title}
          </h1>

          <p className="text-xl text-text-secondary mb-8 leading-relaxed font-light">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono tracking-widest text-text-tertiary pt-6 border-t border-border-primary/30">
            {source && (
              <div className="flex items-center gap-2">
                <span className="text-text-muted">SRC:</span>
                <span className="text-text-primary">{source.name}</span>
              </div>
            )}
            <time dateTime={article.publishedAt}>
              PUB: {formatDate(article.publishedAt)}
            </time>
            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <time dateTime={article.updatedAt}>
                UPD: {formatDate(article.updatedAt)}
              </time>
            )}
          </div>
        </header>

        {/* Article body */}
        <div className="mb-16 editorial-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-border-primary/30">
            {article.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-text-tertiary bg-bg-secondary/50 border border-border-primary/50">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related articles */}
        {article.relatedArticleIds && article.relatedArticleIds.length > 0 && (
          <section className="mb-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-sm font-mono tracking-widest uppercase text-text-muted mb-6">
              Related Intelligence
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {article.relatedArticleIds.map((id) => {
                const related = articles.find(a => a.id === id)
                if (!related) return null
                return (
                  <Link
                    key={id}
                    href={`/news/${related.slug}`}
                    className="group editorial-row p-4 border border-border-primary/30 bg-bg-secondary/20 hover:bg-bg-hover"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <StatusBadge status={related.status} size="sm" />
                        <time className="text-[10px] font-mono text-text-muted" dateTime={related.publishedAt}>
                          {formatDate(related.publishedAt)}
                        </time>
                      </div>
                      <h3 className="text-lg font-medium text-text-primary group-hover:text-white transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* SHARE / DISCOVERY TOOLS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border-primary/50">
          <Link 
            href={`/share/article/${article.slug}`} 
            className="flex-1 flex items-center justify-center px-6 py-4 bg-bg-secondary text-text-primary text-[10px] font-mono tracking-widest uppercase hover:bg-bg-tertiary transition-colors border border-border-primary/50 group"
          >
            <span className="group-hover:text-accent-blue transition-colors">Generate Share Card</span>
          </Link>
          <Link 
            href="/explore" 
            className="flex-1 flex items-center justify-center px-6 py-4 bg-accent-blue/5 text-accent-blue text-[10px] font-mono tracking-widest uppercase hover:bg-accent-blue/10 transition-colors border border-accent-blue/20"
          >
            Explore the Graph
          </Link>
        </div>
      </div>
    </article>
  )
}
