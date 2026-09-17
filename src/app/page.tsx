import Link from 'next/link';
import { articles } from '@/data/articles';
import { timelineEvents } from '@/data/timeline';
import { databaseCategories as categories } from '@/data/categories';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { formatDistanceToNow } from '@/lib/dateUtils';

export default function Home() {
  const latestArticles = articles.slice(0, 5);
  const recentDevelopments = timelineEvents.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      
      {/* CINEMATIC HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
        {/* Deep Atmospheric Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none"></div>

        <div className="container-wide relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8 bg-accent-blue"></span>
                <span className="text-caption text-accent-blue">Active Intelligence Desk</span>
              </div>
              <h1 className="text-heading text-text-primary mb-6 drop-shadow-2xl font-light">
                The <span className="font-bold">GTA VI</span> <br/>
                Intelligence Platform.
              </h1>
              <p className="text-body text-text-secondary mb-10 max-w-xl text-lg sm:text-xl font-light leading-relaxed">
                A serious, strictly classified database of confirmed information, verified reports, and critical metadata regarding the next generation of Grand Theft Auto.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/news" className="btn-primary tracking-wide backdrop-blur-sm">
                  Access Latest Signals
                </Link>
                <Link href="/database" className="btn-secondary tracking-wide">
                  Query Database
                </Link>
              </div>
            </div>

            {/* Featured Hero Story (Top Latest Article) */}
            {latestArticles[0] && (
              <div className="lg:col-span-5 w-full mt-12 lg:mt-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Link href={`/news/${latestArticles[0].slug}`} className="dossier-panel p-8 block relative z-10 hover:border-border-primary transition-colors h-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-caption text-text-tertiary">Priority Override</span>
                    <StatusBadge status={latestArticles[0].status} size="sm" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4 leading-tight group-hover:text-accent-blue transition-colors">
                    {latestArticles[0].title}
                  </h2>
                  <p className="text-body-sm text-text-secondary line-clamp-3 mb-6">
                    {latestArticles[0].summary}
                  </p>
                  <div className="flex items-center justify-between text-caption border-t border-border-primary/30 pt-4">
                    <span>{latestArticles[0].category}</span>
                    <span>{formatDistanceToNow(new Date(latestArticles[0].publishedAt))}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE FEED */}
      <section className="py-24 border-t border-border-subtle relative bg-bg-secondary/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-border-primary/50 pb-6">
            <h2 className="text-subheading font-light tracking-wide uppercase text-text-primary">
              <span className="font-bold">Latest</span> Intercepts
            </h2>
            <Link href="/news" className="text-sm font-mono text-text-tertiary hover:text-accent-blue transition-colors mt-4 md:mt-0 flex items-center gap-2">
              View All Signals <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-primary/30 border border-border-primary/30 rounded-sm overflow-hidden">
            {latestArticles.slice(1, 5).map(article => (
              <Link href={`/news/${article.slug}`} key={article.id} className="bg-bg-primary p-6 group hover:bg-bg-secondary/50 transition-colors flex flex-col h-full">
                <div className="mb-4">
                  <StatusBadge status={article.status} size="sm" />
                </div>
                <h3 className="text-lg font-medium text-text-primary mb-3 group-hover:text-accent-blue transition-colors leading-snug">
                  {article.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between text-caption border-t border-border-primary/20">
                  <span className="truncate max-w-[120px]">{article.sourceUrl ? new URL(article.sourceUrl).hostname.replace('www.', '') : 'Unknown Source'}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENTITY DATABASE MODULE */}
      <section className="py-24 relative">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <div className="lg:col-span-1 pr-4">
              <h2 className="text-3xl font-light tracking-tight text-text-primary mb-6">
                Entity <span className="font-bold">Database</span>
              </h2>
              <p className="text-body mb-8 font-light">
                Explore structured dossiers on characters, mapped locations, tracked vehicles, and confirmed features built from primary intelligence sources.
              </p>
              <ul className="space-y-4 font-mono text-sm">
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <Link href={`/database/${cat.slug}`} className="flex items-center justify-between py-2 border-b border-border-primary/50 text-text-secondary hover:text-accent-blue transition-colors group">
                      <span className="uppercase tracking-widest">{cat.name}</span>
                      <span className="text-border-primary group-hover:text-accent-blue transition-colors">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-2 relative">
              <div className="absolute inset-0 border border-border-primary/30 p-2 pointer-events-none">
                <div className="w-full h-full border border-border-subtle"></div>
              </div>
              <div className="p-8 sm:p-12 relative z-10 flex flex-col justify-center h-full min-h-[300px] bg-bg-secondary/10">
                <div className="text-caption text-text-tertiary mb-2">System Status</div>
                <div className="text-2xl sm:text-4xl font-light text-text-primary mb-6 font-mono opacity-80">
                  DATABANKS <span className="text-status-confirmed font-bold">ONLINE</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-text-muted">
                  <span>LOC: LEONIDA</span>
                  <span className="h-1 w-1 bg-text-muted rounded-full"></span>
                  <span>SYS: GTA-VI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
