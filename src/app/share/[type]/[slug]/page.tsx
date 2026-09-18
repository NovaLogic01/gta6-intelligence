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
  let id = '';

  if (params.type === 'entity') {
    const entity = allEntities.find(e => e.slug === params.slug);
    if (!entity) return notFound();
    data = entity;
    title = entity.name;
    status = entity.status;
    description = entity.description;
    category = entity.category;
    id = entity.id;
  } else if (params.type === 'article') {
    const article = articles.find(a => a.slug === params.slug);
    if (!article) return notFound();
    data = article;
    title = article.title;
    status = article.status;
    description = article.summary;
    category = 'news';
    id = article.id;
  } else {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary relative flex flex-col items-center justify-center p-4 py-24">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>
      
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center gap-8">
        
        <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-widest uppercase border-b border-border-primary/50 pb-4">
          <Link href="/" className="text-text-tertiary hover:text-white transition-colors">&larr; Return to Platform</Link>
          <span className="text-accent-blue/50">SHARE CARD GENERATOR</span>
        </div>

        {/* The Card */}
        <div className="relative aspect-[1200/630] w-full border border-border-primary/50 overflow-hidden bg-bg-secondary/20 flex flex-col justify-between p-8 sm:p-12 md:p-16">
          <div className="absolute inset-0 bg-film-grain opacity-50 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue-subtle blur-[120px] rounded-full pointer-events-none opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-accent-blue/30 opacity-50 pointer-events-none m-8"></div>
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-accent-blue/30 opacity-50 pointer-events-none m-8"></div>

          <div className="relative z-10 flex-grow flex flex-col">
            <div className="flex items-center gap-4 mb-auto">
              <StatusBadge status={status as any} size="md" />
              <div className="h-4 w-px bg-border-primary"></div>
              <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                CLASS: {category} {'//'} ID: {id.substring(0,8)}
              </span>
            </div>

            <div className="mt-auto max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-text-primary mb-6 line-clamp-3">
                {title}
              </h1>
              <p className="text-lg md:text-xl font-light text-text-secondary leading-relaxed line-clamp-3 max-w-2xl border-l-2 border-accent-blue/50 pl-6">
                {description}
              </p>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 flex items-center justify-between border-t border-border-primary/30 pt-6">
            <div className="text-[10px] font-mono tracking-widest uppercase text-text-muted flex items-center gap-2">
              <span className="w-1 h-1 bg-accent-blue rounded-full animate-pulse"></span>
              <span>GTA VI INTELLIGENCE PLATFORM</span>
            </div>
            <div className="text-[10px] font-mono text-text-tertiary">
              VERIFIED // {new Date().getFullYear()}
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <ShareButton 
            title={title} 
            description={description} 
            url={siteConfig.url + (category === 'news' ? '/news/' : `/database/${category}s/`) + data.slug} 
          />
        </div>

      </div>
    </div>
  );
}
