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
      <Link href={`/news/${article.slug}`} className="editorial-row group block">
        <div className="flex-1 pr-6">
          <div className="flex items-center gap-4 mb-2">
            <StatusBadge status={article.status} />
            <span className="text-caption">{article.category}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
            {article.title}
          </h3>
          <p className="text-body-sm text-text-secondary line-clamp-2">
            {article.summary}
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:w-48 flex flex-col sm:items-end text-caption text-text-tertiary">
          <span className="mb-1">{domainName}</span>
          <span>{formattedDate}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${article.slug}`} className="dossier-panel p-6 group block hover:border-border-primary transition-colors h-full flex flex-col">
      <div className="mb-4">
        <StatusBadge status={article.status} />
      </div>
      <h3 className="text-lg md:text-xl font-medium text-text-primary mb-3 group-hover:text-accent-blue transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-body-sm text-text-secondary line-clamp-3 mb-6 flex-1">
        {article.summary}
      </p>
      <div className="flex items-center justify-between text-caption pt-4 border-t border-border-primary/20">
        <span className="truncate max-w-[120px]">{domainName}</span>
        <span>{formattedDate}</span>
      </div>
    </Link>
  );
}
