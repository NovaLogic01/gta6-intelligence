import Link from 'next/link';
import { allEntities } from '@/lib/graph';
import { articles } from '@/data/articles';

export default function Home() {
  // Sort articles by publishedAt descending
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  const categories = [
    { id: 'characters', name: 'Characters', count: allEntities.filter(e => e.category === 'character').length, slug: 'characters' },
    { id: 'locations', name: 'Locations', count: allEntities.filter(e => e.category === 'location').length, slug: 'locations' },
    { id: 'vehicles', name: 'Vehicles', count: allEntities.filter(e => e.category === 'vehicle').length, slug: 'vehicles' },
    { id: 'features', name: 'Features', count: allEntities.filter(e => e.category === 'feature').length, slug: 'features' },
    { id: 'activities', name: 'Activities', count: allEntities.filter(e => e.category === 'activity').length, slug: 'activities' },
    { id: 'gameplay', name: 'Gameplay', count: allEntities.filter(e => e.category === 'gameplay').length, slug: 'gameplay' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* CINEMATIC HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center border-b border-border-primary overflow-hidden bg-bg-primary">
        
        {/* Abstract Geometry Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Grid */}
          <div className="absolute inset-0 bg-coordinate-grid opacity-20"></div>
          
          {/* Atmospheric Bloom */}
          <div className="bloom w-[800px] h-[600px] bg-accent-blue-subtle top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-breathe"></div>
          <div className="bloom w-[600px] h-[400px] bg-accent-amber-subtle bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-30"></div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050507_100%)]"></div>

          {/* Abstract SVG Geometry (Leonida-inspired contour) */}
          <svg className="absolute inset-0 w-full h-full opacity-10 animate-slow-pan" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <g stroke="currentColor" strokeWidth="1" fill="none" className="text-accent-blue">
              <path d="M-100,500 Q200,600 400,300 T900,400 T1200,600" />
              <path d="M-100,520 Q200,620 400,320 T900,420 T1200,620" strokeDasharray="4,4"/>
              <path d="M-100,540 Q200,640 400,340 T900,440 T1200,640" strokeOpacity="0.5"/>
              <circle cx="400" cy="300" r="4" fill="currentColor" />
              <circle cx="900" cy="400" r="4" fill="currentColor" />
              <text x="410" y="295" fontSize="10" fontFamily="monospace" fill="currentColor">LND-01</text>
              <text x="910" y="395" fontSize="10" fontFamily="monospace" fill="currentColor">VCE-02</text>
            </g>
          </svg>

          {/* Film Grain */}
          <div className="bg-film-grain"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container-wide relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* EYEBROW */}
            <div className="inline-flex items-center gap-2 mb-8 text-caption text-text-tertiary animate-on-scroll visible">
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
              <span>GTA VI INTELLIGENCE PLATFORM</span>
              <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
            </div>
            
            {/* MASSIVE HEADLINE */}
            <h1 className="text-hero md:text-hero-xl font-bold tracking-tighter mb-8 leading-[1.0] text-text-primary animate-on-scroll visible" style={{ animationDelay: '100ms' }}>
              THE <br className="hidden sm:block"/>INTELLIGENCE <br className="hidden sm:block"/>LAYER
            </h1>
            
            {/* SHORT EXPLANATION */}
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-10 font-light animate-on-scroll visible" style={{ animationDelay: '200ms' }}>
              Everything we know. Structured, verified, and mapped from primary signals. Explore the definitive knowledge graph for the next generation of Grand Theft Auto.
            </p>
            
            {/* PRIMARY ACTION */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll visible" style={{ animationDelay: '300ms' }}>
              <Link href="/explore" className="btn-primary w-full sm:w-auto min-w-[200px]">
                Enter Database
              </Link>
              <Link href="/news" className="btn-secondary w-full sm:w-auto min-w-[200px]">
                Latest Signals
              </Link>
            </div>
            
            {/* SECONDARY CONTEXT */}
            <div className="mt-16 pt-8 border-t border-border-primary/50 flex flex-wrap justify-center gap-8 text-caption text-text-muted animate-on-scroll visible" style={{ animationDelay: '400ms' }}>
              <div className="flex flex-col items-center">
                <span className="text-text-primary mb-1">{allEntities.length}</span>
                <span>Entities Tracked</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-text-primary mb-1">{articles.length}</span>
                <span>Intel Reports</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-status-confirmed mb-1">LIVE</span>
                <span>System Status</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST SIGNALS (Editorial Rows) */}
      <section className="py-24 bg-bg-secondary relative">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 border-b border-border-primary pb-4">
            <h2 className="text-subheading font-medium tracking-tight text-text-primary">
              Latest Signals
            </h2>
            <Link href="/news" className="text-caption text-text-secondary hover:text-accent-blue transition-colors">
              VIEW ARCHIVE &rarr;
            </Link>
          </div>

          <div className="flex flex-col">
            {recentArticles.map((article, idx) => {
              const isLead = idx === 0;
              return (
                <Link 
                  key={article.id} 
                  href={`/news/${article.slug}`}
                  className={`editorial-row group relative ${isLead ? 'py-8' : 'py-5'}`}
                >
                  <div className="w-full sm:w-32 flex-shrink-0 text-caption text-text-muted mb-2 sm:mb-0 group-hover:text-accent-blue transition-colors">
                    {new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })}
                  </div>
                  <div className="flex-grow pr-4">
                    <h3 className={`${isLead ? 'text-2xl font-semibold' : 'text-lg font-medium'} text-text-primary group-hover:text-white transition-colors mb-2`}>
                      {article.title}
                    </h3>
                    {isLead && (
                      <p className="text-body-sm text-text-secondary mb-3 line-clamp-2">
                        {article.summary}
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-wider text-text-tertiary">
                      <span className="text-status-official border border-status-official/30 px-1.5 py-0.5 rounded-sm bg-status-official/5">
                        {article.status}
                      </span>
                      {article.sourceUrl && (
                        <span>SRC: {new URL(article.sourceUrl).hostname.replace('www.', '')}</span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTELLIGENCE TOOLS (Terminal/Dossier aesthetic) */}
      <section className="py-24 border-y border-border-primary bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>
        <div className="container-wide relative z-10">
          <div className="mb-12 border-b border-border-primary pb-6">
            <h2 className="text-subheading font-medium tracking-tight text-text-primary">
              Intelligence Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/confirmed" className="dossier-panel p-6 group hover:bg-bg-hover transition-colors min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="text-caption text-text-tertiary mb-3 group-hover:text-accent-blue transition-colors">TOOL 01 // VERIFICATION</div>
                <h3 className="text-lg text-text-primary font-medium mb-2">Is This Confirmed?</h3>
              </div>
              <div className="text-sm text-text-secondary font-light">Check claims deterministically against the knowledge base.</div>
            </Link>
            
            <Link href="/changes" className="dossier-panel p-6 group hover:bg-bg-hover transition-colors min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="text-caption text-text-tertiary mb-3 group-hover:text-accent-blue transition-colors">TOOL 02 // LOGS</div>
                <h3 className="text-lg text-text-primary font-medium mb-2">Recent Activity</h3>
              </div>
              <div className="text-sm text-text-secondary font-light">Track additions and chronological updates.</div>
            </Link>

            <Link href="/explore" className="dossier-panel p-6 group hover:bg-bg-hover transition-colors min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="text-caption text-text-tertiary mb-3 group-hover:text-accent-blue transition-colors">TOOL 03 // DISCOVERY</div>
                <h3 className="text-lg text-text-primary font-medium mb-2">Knowledge Explorer</h3>
              </div>
              <div className="text-sm text-text-secondary font-light">Navigate the intelligence network sequentially.</div>
            </Link>

            <Link href="/timeline" className="dossier-panel p-6 group hover:bg-bg-hover transition-colors min-h-[160px] flex flex-col justify-between">
              <div>
                <div className="text-caption text-text-tertiary mb-3 group-hover:text-accent-blue transition-colors">TOOL 04 // CHRONOLOGY</div>
                <h3 className="text-lg text-text-primary font-medium mb-2">Interactive Timeline</h3>
              </div>
              <div className="text-sm text-text-secondary font-light">Follow the history of GTA VI becoming known.</div>
            </Link>
          </div>

          <div className="mt-16 pt-12 border-t border-border-primary/50">
            <h3 className="text-caption text-text-muted mb-6 uppercase tracking-widest">Awaiting spatial data integration...</h3>
          </div>
        </div>
      </section>

      {/* THE DATABASE */}
      <section className="py-24 relative bg-bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4 pr-4">
              <h2 className="text-heading text-text-primary mb-6">
                The Database
              </h2>
              <p className="text-body mb-8 font-light max-w-sm">
                Explore structured dossiers on characters, mapped locations, tracked vehicles, and confirmed features built from primary intelligence sources.
              </p>
              <ul className="space-y-0 border-t border-border-primary">
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <Link href={`/database/${cat.slug}`} className="flex items-center justify-between py-4 border-b border-border-primary text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors group px-2">
                      <span className="text-sm font-medium tracking-wide uppercase">{cat.name}</span>
                      <span className="text-caption text-text-muted group-hover:text-accent-blue transition-colors">[{cat.count} ENTRIES] &rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-8 relative">
              <div className="absolute inset-0 border border-border-primary/50 p-2 pointer-events-none">
                <div className="w-full h-full border border-border-subtle"></div>
              </div>
              <div className="p-8 sm:p-16 relative z-10 flex flex-col justify-center h-full min-h-[300px] bg-bg-primary/50 backdrop-blur-sm">
                <div className="text-caption text-text-tertiary mb-3">SYSTEM STATUS</div>
                <div className="text-3xl sm:text-5xl font-light text-text-primary mb-8 font-mono opacity-90">
                  DATABANKS <span className="text-status-confirmed font-bold">ONLINE</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-caption text-text-muted">
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent-blue rounded-full"></span> LOC: LEONIDA</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-status-confirmed rounded-full"></span> SYS: GTA-VI</div>
                  <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-text-muted rounded-full"></span> NET: SECURE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
