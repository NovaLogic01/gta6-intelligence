import { allEntities } from '@/lib/graph';
import { articles } from '@/data/articles';
import { notFound } from 'next/navigation';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { ShareButton } from '@/components/ui/ShareButton';
import Link from 'next/link';

import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  const entityParams = allEntities.map(e => ({ type: 'entity', slug: e.slug }))
  const articleParams = articles.map(a => ({ type: 'article', slug: a.slug }))
  return [...entityParams, ...articleParams]
}

export default function ShareCardPage({ params }: { params: { type: string, slug: string } }) {
  let data: any = null;
  let title = '';
  let status = '';
  let description = '';
  let category = '';

  if (params.type === 'entity') {
    const entity = allEntities.find(e => e.slug === params.slug);
    if (!entity) return notFound();
    data = entity;
    title = entity.name;
    status = entity.status;
    description = entity.description;
    category = entity.category;
  } else if (params.type === 'article') {
    const article = articles.find(a => a.slug === params.slug);
    if (!article) return notFound();
    data = article;
    title = article.title;
    status = article.status;
    description = article.summary;
    category = 'news';
  } else {
    return notFound();
  }

  return (
    <div className="min-h-screen p-4 md:p-8 section-spacing-sm">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        <div className="flex justify-between items-center px-2">
          <Link href="/" className="text-sm font-mono tracking-widest uppercase text-text-tertiary hover:text-text-primary transition-colors">
            Back to Platform
          </Link>
          <div className="text-sm font-mono tracking-widest text-text-muted">SHARE CARD</div>
        </div>

        <div className="relative aspect-[1200/630] w-full card-base border-border-primary/50 overflow-hidden flex flex-col justify-between p-8 sm:p-12 bg-gradient-to-br from-bg-secondary/40 to-bg-primary">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <StatusBadge status={status as any} size="md" />
              <div className="h-4 w-px bg-border-primary/50"></div>
              <span className="text-xs font-mono text-text-tertiary uppercase tracking-widest">{category}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-text-primary font-medium tracking-tight leading-tight mb-6 line-clamp-3">
              {title}
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed line-clamp-4 max-w-xl">
              {description}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <ShareButton 
            title={title} 
            description={description} 
            url={siteConfig.url + '/' + category + 's/' + data.slug} 
          />
        </div>
      </div>
    </div>
  );
}
