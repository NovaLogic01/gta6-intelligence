'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { checkClaim, ClaimResult } from '@/lib/interaction'
import { StatusBadge } from '@/components/ui/StatusBadge'
import Link from 'next/link'

function getCategoryPath(category: string): string {
  const cat = category.toLowerCase();
  if (cat === 'gameplay') return 'gameplay';
  if (cat === 'activity') return 'activities';
  return cat + 's';
}

function ConfirmedToolInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlQuery = searchParams.get('q') || ''

  const [query, setQuery] = useState(urlQuery)
  const [result, setResult] = useState<ClaimResult | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  // Execute search if q param is present on load or changes
  useEffect(() => {
    if (urlQuery.trim()) {
      setQuery(urlQuery)
      setResult(checkClaim(urlQuery))
      setHasSearched(true)
    } else {
      setQuery('')
      setResult(null)
      setHasSearched(false)
    }
  }, [urlQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    router.push(`/confirmed?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <>
      <form onSubmit={handleSearch} className="mb-16">
        <div className="relative flex flex-col sm:flex-row gap-0 sm:gap-4 items-stretch border border-border-primary/50 bg-bg-secondary/40 p-1 backdrop-blur-sm">
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-accent-blue/50 font-mono text-sm hidden sm:block">
            &gt;_
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Query known intelligence (e.g. Is Lucia playable?)"
            className="flex-1 bg-transparent px-4 sm:pl-10 py-4 text-text-primary placeholder:text-text-tertiary font-mono text-sm focus:outline-none focus:bg-bg-hover/30 transition-colors"
          />
          <button
            type="submit"
            className="bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-widest transition-colors border border-accent-blue/30"
          >
            Execute Query
          </button>
        </div>
      </form>

      {hasSearched && result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {!result.match ? (
            <div className="p-8 border border-border-primary bg-bg-secondary/20 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-border-primary/50"></div>
              <div className="text-[10px] font-mono text-text-tertiary tracking-widest mb-4">STATUS: INSUFFICIENT EVIDENCE</div>
              <h3 className="text-2xl text-text-primary font-medium mb-3">NO INDEXED INTELLIGENCE FOUND</h3>
              <p className="text-text-secondary font-light max-w-md">
                We cannot verify this claim based on the official materials and reports currently indexed in the database.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              
              {/* Status Block */}
              <div className="p-6 border border-border-primary/50 bg-bg-secondary/40 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue"></div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-text-tertiary mb-4">Verification Result</div>
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <StatusBadge status={result.status as any} size="md" />
                  <span className="w-px h-3 bg-border-primary"></span>
                  <span className="text-[10px] font-mono text-text-tertiary uppercase tracking-widest">
                    {result.entity?.category}
                  </span>
                </div>
                <h3 className="text-3xl text-text-primary font-medium mt-4">
                  {result.entity?.name}
                </h3>
              </div>

              {/* Evidence Block */}
              <div className="p-6 border border-border-primary/30 bg-bg-secondary/10">
                <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Intelligence Summary</h4>
                <p className="text-lg text-text-secondary leading-relaxed font-light mb-8">
                  {result.entity?.description}
                </p>

                {result.evidence && result.evidence.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-4">Supporting Evidence</h4>
                    <ul className="space-y-3">
                      {result.evidence.map((ev, i) => (
                        <li key={i} className="text-sm text-text-secondary font-light flex items-start gap-3">
                          <span className="text-accent-blue/50 font-mono mt-0.5">{(i+1).toString().padStart(2, '0')}</span>
                          <span>{ev}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.sources && result.sources.length > 0 && (
                  <div className="pt-6 border-t border-border-primary/30">
                    <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-4">Verified Sources</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.sources.map((s, i) => (
                        <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono text-accent-blue hover:text-white transition-colors">
                          [{s.name.toUpperCase()}]
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Related Context */}
              {result.related && result.related.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-mono tracking-widest text-text-tertiary uppercase mb-4 pl-1">Related Context</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {result.related.slice(0, 3).map((rel, i) => (
                      <Link key={i} href={`/database/${getCategoryPath(rel.category)}/${rel.slug}`} className="p-4 border border-border-primary/30 bg-bg-secondary/10 hover:border-accent-blue/30 hover:bg-bg-hover transition-colors group">
                        <div className="text-[10px] font-mono text-text-tertiary uppercase mb-2">{rel.category}</div>
                        <div className="text-sm font-medium text-text-primary group-hover:text-accent-blue transition-colors line-clamp-1">{rel.name}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default function ConfirmedTool() {
  return (
    <div className="section-spacing min-h-screen bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>

      <div className="container-narrow relative z-10">
        <div className="mb-12 border-b border-border-primary/50 pb-8">
          <div className="flex items-center gap-2 mb-4 text-[10px] font-mono tracking-widest text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-pulse"></span>
            <span>INTELLIGENCE QUERY TOOL</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-text-primary">
            VERIFICATION <span className="font-light text-text-secondary">SYSTEM</span>
          </h1>
          <p className="text-body max-w-xl font-light text-text-secondary">
            Query claims against the verified GTA VI knowledge base. Outputs are deterministic and based only on indexed official and reported sources.
          </p>
        </div>

        <Suspense fallback={<div className="h-20 bg-bg-secondary/20 animate-pulse border border-border-primary/30"></div>}>
          <ConfirmedToolInner />
        </Suspense>
      </div>
    </div>
  )
}
