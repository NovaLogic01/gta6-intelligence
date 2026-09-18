import Link from 'next/link';
import { Article } from '@/types';
import { StatusBadge } from './StatusBadge';
import { formatDistanceToNow } from '@/lib/dateUtils';

interface ArticleCardProps {
  article: Article;
  layout?: 'grid' | 'row';
}

export function ArticleCard({ article, layout = 'grid' }: ArticleCardProps) {
  const publishedDate = new Date(article.publishedAt);
  const formattedDate = formatDistanceToNow(publishedDate);
  const domainName = article.sourceUrl ? new URL(article.sourceUrl).hostname.replace('www.', '') : 'Unknown Source';

  if (layout === 'row') {
    return (
      <Link href={`/news/${article.slug}`} className="editorial-row group block px-2">
        <div className="flex-1 pr-6 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
          <div className="w-full sm:w-24 flex-shrink-0 text-caption text-text-muted group-hover:text-accent-blue transition-colors">
            {publishedDate.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}
          </div>
          <div className="flex-grow">
            <h3 className="text-lg md:text-xl font-medium text-text-primary mb-2 group-hover:text-white transition-colors">
              {article.title}
            </h3>
            <p className="text-body-sm text-text-secondary line-clamp-2 mb-3">
              {article.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-caption text-text-tertiary">
              <StatusBadge status={article.status} />
              <span className="hidden sm:inline-block w-px h-3 bg-border-primary"></span>
              <span>SRC: {domainName}</span>
              <span className="hidden sm:inline-block w-px h-3 bg-border-primary"></span>
              <span>CAT: {article.category}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`} className="dossier-panel p-6 group block hover:bg-bg-hover transition-colors h-full flex flex-col">
      <div className="mb-4 flex items-center justify-between">
        <StatusBadge status={article.status} />
        <span className="text-caption">{article.category}</span>
      </div>
      <h3 className="text-lg md:text-xl font-medium text-text-primary mb-3 group-hover:text-white transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-body-sm text-text-secondary line-clamp-3 mb-6 flex-1 font-light">
        {article.summary}
      </p>
      <div className="flex items-center justify-between text-caption pt-4 border-t border-border-primary/50 text-text-tertiary">
        <span className="truncate max-w-[120px]">SRC: {domainName}</span>
        <span>{formattedDate}</span>
      </div>
    </Link>
  );
}
