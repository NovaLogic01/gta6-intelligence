import { trailers } from '@/data/trailers';
import { getRelatedEntities, getRelatedArticles } from '@/lib/graph';
import Link from 'next/link';

export const metadata = {
  title: 'Trailers & Media | GTA VI Platform',
  description: 'Archive of official GTA VI trailers and official media.',
};

export default function TrailersPage() {
  return (
    <div className="container-wide section-spacing">
      <div className="mb-16 border-b border-border-primary pb-8">
        <h1 className="text-heading mb-4">
          Media <span className="font-light text-text-secondary">Archive</span>
        </h1>
        <p className="text-body max-w-2xl font-light">
          An archive of officially released trailers and primary visual evidence. Select a trailer to explore what it reveals.
        </p>
      </div>

      <div className="space-y-24">
        {trailers.map(trailer => {
          const related = getRelatedEntities(trailer.id)
          const articles = getRelatedArticles(trailer.id)
          
          return (
            <div key={trailer.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="aspect-video bg-bg-secondary/50 border border-border-primary/50 relative mb-6 overflow-hidden flex items-center justify-center rounded-subtle">
                    <div className="absolute inset-0 bg-noise opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-caption text-accent-blue tracking-widest">{new Date(trailer.releaseDate).getFullYear()}</span>
                    <span className="h-px flex-1 bg-border-primary/50"></span>
                  </div>
                  <h2 className="text-2xl font-semibold text-text-primary tracking-tight mb-3">
                    {trailer.name}
                  </h2>
                  <p className="text-body-sm mb-4">
                    {trailer.description}
                  </p>
                  <a 
                    href={trailer.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    [ACCESS OFFICIAL SOURCE]
                  </a>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-4 border-b border-border-primary/30 pb-2">What It Shows</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {related.map(rel => (
                        <Link key={`${trailer.id}-${rel.targetEntity.id}`} href={`/database/${rel.targetEntity.category}s/${rel.targetEntity.slug}`} className="card-base p-3 hover:border-accent-blue/50 transition-colors bg-bg-secondary/10">
                          <div className="text-[10px] font-mono text-text-tertiary uppercase mb-1">{rel.targetEntity.category}</div>
                          <div className="text-sm text-text-primary group-hover:text-accent-blue transition-colors truncate">{rel.targetEntity.name}</div>
                        </Link>
                      ))}
                      {related.length === 0 && (
                        <div className="col-span-2 text-sm text-text-muted font-mono">No connections mapped.</div>
                      )}
                    </div>
                  </div>
                  
                  {articles.length > 0 && (
                    <div>
                      <h3 className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-4 border-b border-border-primary/30 pb-2">Related Articles</h3>
                      <div className="space-y-2">
                        {articles.map(article => (
                          <Link key={article.id} href={`/news/${article.slug}`} className="block group">
                            <div className="text-sm text-text-secondary group-hover:text-text-primary transition-colors line-clamp-1">{article.title}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
