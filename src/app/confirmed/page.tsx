'use client'

import { useState } from 'react'
import { checkClaim, ClaimResult } from '@/lib/interaction'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Link from 'next/link'

export default function ConfirmedTool() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<ClaimResult | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    const res = checkClaim(query)
    setResult(res)
    setHasSearched(true)
  }

  return (
    <div className="section-spacing min-h-[70vh]">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Intelligence Tool"
          title="Is This Confirmed?"
          description="Check claims against our verified GTA VI knowledge base. Based ONLY on currently indexed official and reported sources."
        />

        <form onSubmit={handleSearch} className="mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-transparent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Is Lucia playable? Where is it set?"
              className="flex-1 bg-bg-secondary/50 border border-border-primary rounded-md px-4 py-3 text-body focus:outline-none focus:border-accent-blue transition-colors"
            />
            <button
              type="submit"
              className="bg-accent-blue text-bg-primary px-6 py-3 rounded-md font-medium hover:bg-accent-blue/90 transition-colors"
            >
              Verify
            </button>
          </div>
        </form>

        {hasSearched && result && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {!result.match ? (
              <div className="card-base p-8 text-center border-border-primary/50 bg-bg-secondary/20">
                <div className="inline-block px-3 py-1 bg-bg-tertiary border border-border-primary rounded text-xs font-mono text-text-tertiary mb-4">
                  NOT CURRENTLY VERIFIED
                </div>
                <h3 className="text-xl text-text-primary mb-2">Insufficient Evidence</h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  We cannot verify this claim based on the official materials and reports currently indexed in our database.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="card-base p-6 md:p-8 border-l-4 border-l-accent-blue bg-gradient-to-br from-bg-secondary/40 to-bg-primary">
                  <div className="flex items-center gap-3 mb-6">
                    <StatusBadge status={result.status as any} size="md" />
                    <span className="text-xs font-mono text-text-tertiary uppercase border-l border-border-primary/50 pl-3">
                      {result.entity?.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl text-text-primary font-medium mb-3">
                    {result.entity?.name}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {result.entity?.description}
                  </p>

                  {result.evidence && result.evidence.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-3">Supporting Evidence</h4>
                      <ul className="space-y-2">
                        {result.evidence.map((ev, i) => (
                          <li key={i} className="text-sm text-text-secondary flex gap-3">
                            <span className="text-accent-blue/50 select-none">→</span> {ev}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {result.sources && result.sources.length > 0 && (
                    <div className="pt-6 border-t border-border-primary/30">
                      <h4 className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-3">Verified Sources</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.sources.map((s, i) => (
                          <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-accent-blue bg-accent-blue/10 px-2 py-1 rounded hover:bg-accent-blue/20 transition-colors">
                            {s.name.toUpperCase()}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {result.related && result.related.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono tracking-widest text-text-tertiary uppercase mb-4 pl-1">Related Connections</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {result.related.slice(0, 3).map((rel, i) => (
                        <Link key={i} href={`/database/${rel.category}s/${rel.slug}`} className="card-base p-4 hover:border-accent-blue/50 transition-colors group">
                          <div className="text-[10px] font-mono text-text-tertiary uppercase mb-1">{rel.category}</div>
                          <div className="text-sm text-text-primary group-hover:text-accent-blue transition-colors line-clamp-1">{rel.name}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
