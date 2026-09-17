import Link from 'next/link'
import { articles } from '@/data/articles'
import { databaseCategories } from '@/data/categories'
import { timelineEvents } from '@/data/timeline'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { AdSlot } from '@/components/monetization/AdSlot'
import { formatDateShort } from '@/lib/utils'
import { getSourceById } from '@/data/sources'

export default function HomePage() {
  const latestArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const recentEvents = [...timelineEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5)

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Topographic grid background */}
        <div className="absolute inset-0 grid-topographic opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" aria-hidden="true" />
        
        {/* Subtle coordinate overlay */}
        <div className="absolute top-8 right-8 hidden lg:block text-text-muted/20 font-mono text-caption select-none" aria-hidden="true">
          <div>25.7617° N</div>
          <div>80.1918° W</div>
          <div className="mt-1 text-accent-blue/20">LEONIDA</div>
        </div>

        <div className="relative container-wide pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent-blue/40" aria-hidden="true" />
              <span className="text-overline text-accent-blue tracking-widest">GTA VI INTELLIGENCE</span>
            </div>

            <h1 id="hero-heading" className="text-hero lg:text-hero-xl text-text-primary font-display mb-6">
              Everything We Know.{' '}
              <span className="text-text-secondary">Nothing Lost.</span>
            </h1>

            <p className="text-body-lg text-text-secondary max-w-2xl mb-10 leading-relaxed">
              A continuously organized intelligence layer for GTA VI — tracking official announcements,
              reported developments, major changes, characters, locations, gameplay and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/database"
                className="inline-flex items-center justify-center px-6 py-3 text-body-sm font-medium bg-accent-blue text-white rounded-subtle hover:bg-accent-blue-muted transition-colors"
              >
                Explore Intelligence
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center px-6 py-3 text-body-sm font-medium text-text-secondary border border-border-secondary rounded-subtle hover:text-text-primary hover:border-border-hover hover:bg-bg-hover/30 transition-colors"
              >
                View Latest
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom edge line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-primary to-transparent" aria-hidden="true" />
      </section>

      {/* ============ LATEST SIGNAL ============ */}
      <section className="section-spacing" aria-labelledby="latest-signal-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Latest Signal"
            title="Recently Reported"
            description="The most recent intelligence updates across all categories."
            action={{ label: 'View all news', href: '/news' }}
          />

          <div className="mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-blue/50 animate-pulse" aria-hidden="true" />
            <span className="text-caption text-text-muted">Seed data — live pipeline connects in Session 2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
          
          {latestArticles.length > 3 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestArticles.slice(3, 6).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}

          <AdSlot position="in-feed" />
        </div>
      </section>

      {/* ============ WHAT CHANGED ============ */}
      <section className="section-spacing bg-bg-secondary border-y border-border-primary" aria-labelledby="what-changed-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="What Changed"
            title="Recent Developments"
            action={{ label: 'View timeline', href: '/timeline' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {recentEvents.map((event) => {
              const source = getSourceById(event.sourceId)
              return (
                <div key={event.id} className="card-base p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-caption text-accent-blue uppercase tracking-wider font-medium">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-body-sm font-semibold text-text-primary mb-1.5 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-caption text-text-tertiary line-clamp-2 mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-caption text-text-muted" dateTime={event.date}>
                      {formatDateShort(event.date)}
                    </time>
                    <StatusBadge status={event.status} size="sm" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ THE DATABASE ============ */}
      <section className="section-spacing" aria-labelledby="database-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="The Database"
            title="Structured Intelligence"
            description="Every known detail, organized and categorized."
            action={{ label: 'Explore database', href: '/database' }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
            {databaseCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group card-base card-hover p-4 lg:p-5 text-center"
              >
                <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all" aria-hidden="true">
                  {cat.icon}
                </div>
                <h3 className="text-body-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-caption text-text-tertiary line-clamp-2 mb-2 hidden sm:block">
                  {cat.description}
                </p>
                <span className="text-caption text-text-muted">
                  {cat.count > 0 ? `${cat.count} entries` : 'Coming soon'}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPLORE INTELLIGENCE ============ */}
      <section className="section-spacing bg-bg-secondary border-y border-border-primary" aria-labelledby="explore-heading">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Explore"
            title="The Intelligence Layers"
            description="Multiple ways to understand what we know about GTA VI."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'News', desc: 'Latest reported developments and official announcements.', href: '/news', icon: '📡' },
              { title: 'Timeline', desc: 'Chronological history of every major GTA VI event.', href: '/timeline', icon: '📊' },
              { title: 'Characters', desc: 'Known and reported characters appearing in the game.', href: '/database/characters', icon: '👤' },
              { title: 'Locations', desc: 'Confirmed and speculated locations across Leonida.', href: '/database/locations', icon: '📍' },
              { title: 'Map Explorer', desc: 'Geographic intelligence as verified information becomes available.', href: '/map', icon: '🗺️' },
              { title: 'Trailers', desc: 'Official trailer archive with detailed breakdowns.', href: '/trailers', icon: '🎬' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-start gap-4 card-base card-hover p-5"
              >
                <div className="text-2xl mt-0.5 grayscale group-hover:grayscale-0 transition-all" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-body-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EDITORIAL / TRUST LAYER ============ */}
      <section className="section-spacing" aria-labelledby="trust-heading">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-overline text-accent-blue tracking-widest block mb-3">Editorial Standards</span>
            <h2 id="trust-heading" className="text-heading font-display text-text-primary mb-4">
              Information, Classified
            </h2>
            <p className="text-body text-text-secondary mb-10">
              We separate verified facts from reporting and speculation. Every piece of intelligence
              is tagged with its classification so you always know what you&apos;re reading.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { status: 'CONFIRMED' as const, desc: 'Officially stated by Rockstar or Take-Two' },
                { status: 'OFFICIALLY_SHOWN' as const, desc: 'Visible in official trailers or materials' },
                { status: 'REPORTED' as const, desc: 'Published by credible news outlets' },
                { status: 'RUMOR' as const, desc: 'Circulated but not independently verified' },
                { status: 'SPECULATION' as const, desc: 'Community analysis or prediction' },
              ].map((item) => (
                <div key={item.status} className="card-base p-4 text-center">
                  <StatusBadge status={item.status} size="md" />
                  <p className="text-caption text-text-tertiary mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/editorial-policy"
                className="text-body-sm text-accent-blue hover:text-accent-blue-muted transition-colors"
              >
                Read our editorial policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AdSlot position="footer" />
    </>
  )
}
