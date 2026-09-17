import Link from 'next/link'
import { StatusBadge } from './StatusBadge'
import { formatDateShort } from '@/lib/utils'
import type { Article } from '@/types'
import { getSourceById } from '@/data/sources'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'compact' | 'featured'
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const source = getSourceById(article.sourceId)

  if (variant === 'compact') {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group flex items-start gap-4 py-4 border-b border-border-primary last:border-0 hover:bg-bg-hover/30 -mx-2 px-2 rounded-subtle transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <StatusBadge status={article.status} size="sm" />
            <span className="text-caption text-text-tertiary uppercase tracking-wider">{article.category}</span>
          </div>
          <h3 className="text-body font-medium text-text-primary group-hover:text-accent-blue transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 mt-1.5 text-caption text-text-tertiary">
            {source && <span>{source.name}</span>}
            <span aria-hidden="true">&middot;</span>
            <time dateTime={article.publishedAt}>{formatDateShort(article.publishedAt)}</time>
          </div>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/news/${article.slug}`}
        className="group block card-base card-hover p-6 lg:p-8"
      >
        <div className="flex items-center gap-2 mb-3">
          <StatusBadge status={article.status} />
          <span className="text-overline text-text-tertiary uppercase tracking-wider">{article.category}</span>
        </div>
        <h3 className="text-subheading font-display text-text-primary group-hover:text-accent-blue transition-colors mb-3">
          {article.title}
        </h3>
        <p className="text-body text-text-secondary line-clamp-3 mb-4">
          {article.summary}
        </p>
        <div className="flex items-center gap-2 text-caption text-text-tertiary">
          {source && (
            <>
              <span className="text-text-secondary">{source.name}</span>
              <span aria-hidden="true">&middot;</span>
            </>
          )}
          <time dateTime={article.publishedAt}>{formatDateShort(article.publishedAt)}</time>
          {article.isSeedData && (
            <>
              <span aria-hidden="true">&middot;</span>
              <span className="text-text-muted italic">Seed Data</span>
            </>
          )}
        </div>
      </Link>
    )
  }

  // Default variant
  return (
    <Link
      href={`/news/${article.slug}`}
      className="group block card-base card-hover p-5"
    >
      <div className="flex items-center gap-2 mb-2.5">
        <StatusBadge status={article.status} size="sm" />
        <span className="text-caption text-text-tertiary uppercase tracking-wider">{article.category}</span>
      </div>
      <h3 className="text-body-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-2 line-clamp-2">
        {article.title}
      </h3>
      <p className="text-body-sm text-text-secondary line-clamp-2 mb-3">
        {article.summary}
      </p>
      <div className="flex items-center gap-2 text-caption text-text-tertiary">
        {source && <span>{source.name}</span>}
        <span aria-hidden="true">&middot;</span>
        <time dateTime={article.publishedAt}>{formatDateShort(article.publishedAt)}</time>
        {article.isSeedData && (
          <>
            <span aria-hidden="true">&middot;</span>
            <span className="text-text-muted italic">Seed Data</span>
          </>
        )}
      </div>
    </Link>
  )
}
