'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { search, type SearchResult } from '@/lib/search'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { EmptyState } from '@/components/ui/EmptyState'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (!query.trim() || query.trim().length < 2) {
      setResults([])
      setHasSearched(false)
      return
    }

    const timerId = setTimeout(() => {
      const searchResults = search(query)
      setResults(searchResults)
      setHasSearched(true)
    }, 200)

    return () => clearTimeout(timerId)
  }, [query])

  return (
    <div className="section-spacing">
      <div className="container-wide max-w-3xl mx-auto">
        <h1 className="text-heading font-display text-text-primary mb-2">Search Intelligence</h1>
        <p className="text-body text-text-secondary mb-8">Search across articles, characters, locations, vehicles, features, and trailers.</p>

        <div className="relative mb-10">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search characters, locations, vehicles, features..."
            className="w-full bg-bg-secondary border border-border-primary rounded-subtle pl-12 pr-4 py-3.5 text-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue-border focus:ring-1 focus:ring-accent-blue/30 transition-all"
            aria-label="Search query"
          />
        </div>

        <div className="space-y-3">
          {!query.trim() || query.trim().length < 2 ? (
            <EmptyState
              title="Begin your search"
              description="Enter at least 2 characters to search the intelligence database."
              icon="🔍"
            />
          ) : hasSearched && results.length === 0 ? (
            <EmptyState
              title="No results found"
              description={`No matches for "${query}". Try different keywords.`}
              icon="📡"
            />
          ) : (
            <>
              <p className="text-caption text-text-muted mb-4">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
              {results.map((result) => (
                <Link href={result.href} key={result.id} className="group block">
                  <div className="card-base card-hover p-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-caption text-text-tertiary uppercase tracking-wider">{result.type}</span>
                      <StatusBadge status={result.status} size="sm" />
                    </div>
                    <h2 className="text-body-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-1">
                      {result.title}
                    </h2>
                    <p className="text-body-sm text-text-secondary line-clamp-2">
                      {result.description}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
