import { trailers } from '@/data/trailers';
import { getRelatedEntities, getRelatedArticles } from '@/lib/graph';
import Link from 'next/link';

export const metadata = {
  title: 'Trailers & Media | GTA VI Platform',
  description: 'Archive of official GTA VI trailers and primary visual evidence.',
};

export default function TrailersPage() {
  return (
    <div className="relative bg-bg-primary min-h-screen pb-32">
      <div className="absolute inset-0 bg-film-grain opacity-30 pointer-events-none" aria-hidden="true" />
      
      <div className="container-wide pt-24 mb-16 relative z-10">
        <div className="border-b border-border-primary/50 pb-12 mb-8">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-widest uppercase text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span>
            <span>VISUAL EVIDENCE ARCHIVE</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-text-primary">
            MEDIA <span className="font-light text-text-secondary">ARCHIVE</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
            An archive of officially released trailers and primary visual evidence. Select a trailer to explore confirmed entities and related intelligence.
          </p>
        </div>
      </div>

      <div className="container-wide relative z-10 space-y-32">
        {trailers.map((trailer, idx) => {
          const related = getRelatedEntities(trailer.id)
          const articles = getRelatedArticles(trailer.id)
          
          return (
            <div key={trailer.id} className="group relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Visual Area */}
                <div className="lg:col-span-7">
                  <div className="aspect-[21/9] bg-bg-secondary relative mb-8 overflow-hidden flex items-center justify-center border border-border-primary/50">
                    <div className="absolute inset-0 bg-noise opacity-30"></div>
                    {/* Simulated cinematic frame */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-border-primary"></div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-border-primary"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-border-primary"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-border-primary"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-105 group-hover:bg-white/10 transition-all duration-500">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[14px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-3xl font-light text-text-primary tracking-tighter opacity-80">
                      {new Date(trailer.releaseDate).getFullYear()}
                    </span>
                    <span className="h-px flex-1 bg-border-primary"></span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-text-primary tracking-tight mb-4">
                    {trailer.name}
                  </h2>
                  <p className="text-lg text-text-secondary leading-relaxed font-light mb-8 max-w-2xl">
                    {trailer.description}
                  </p>
                  
                  <a 
                    href={trailer.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] font-mono text-text-primary tracking-widest uppercase border border-border-primary px-6 py-3 hover:bg-white hover:text-black transition-colors"
                  >
                    <span>Play Source Media</span>
                    <span>&rarr;</span>
                  </a>
                </div>

                {/* Analysis Area */}
                <div className="lg:col-span-5 space-y-12 pt-4">
                  <div className="bg-bg-secondary/20 p-8 border border-border-primary/40">
                    <h3 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-4 border-b border-border-primary/50">Intelligence Derived</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {related.map(rel => (
                        <Link key={`${trailer.id}-${rel.targetEntity.id}`} href={`/database/${rel.targetEntity.category}s/${rel.targetEntity.slug}`} className="group/link flex flex-col p-4 border border-border-primary/30 bg-bg-primary/50 hover:bg-bg-hover transition-colors">
                          <span className="text-[10px] font-mono text-text-tertiary uppercase mb-2">{rel.targetEntity.category}</span>
                          <span className="text-sm font-medium text-text-primary group-hover/link:text-white transition-colors line-clamp-1">{rel.targetEntity.name}</span>
                        </Link>
                      ))}
                      {related.length === 0 && (
                        <div className="col-span-2 text-xs text-text-muted font-mono tracking-widest uppercase">No connections mapped.</div>
                      )}
                    </div>
                  </div>
                  
                  {articles.length > 0 && (
                    <div>
                      <h3 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-4 border-b border-border-primary/50">Related Reports</h3>
                      <div className="flex flex-col gap-1">
                        {articles.map(article => (
                          <Link key={article.id} href={`/news/${article.slug}`} className="group/article flex items-center justify-between p-4 border-b border-border-primary/30 hover:bg-bg-hover transition-colors">
                            <span className="text-sm font-light text-text-secondary group-hover/article:text-text-primary transition-colors line-clamp-1 pr-4">{article.title}</span>
                            <span className="text-text-tertiary group-hover/article:text-white">&rarr;</span>
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
