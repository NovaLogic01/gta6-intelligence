'use client'

import { useState, useMemo } from 'react'
import { articles } from '@/data/articles'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { FilterBar } from '@/components/ui/FilterBar'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EmptyState } from '@/components/ui/EmptyState'
import { AdSlot } from '@/components/monetization/AdSlot'

const statusFilters = [
  { label: 'All', value: 'ALL' },
  { label: 'Confirmed', value: 'CONFIRMED' },
  { label: 'Officially Shown', value: 'OFFICIALLY_SHOWN' },
  { label: 'Reported', value: 'REPORTED' },
  { label: 'Rumor', value: 'RUMOR' },
  { label: 'Speculation', value: 'SPECULATION' },
]

const categoryFilters = [
  { label: 'All', value: 'ALL' },
  { label: 'Release', value: 'RELEASE' },
  { label: 'Map', value: 'MAP' },
  { label: 'Gameplay', value: 'GAMEPLAY' },
  { label: 'Characters', value: 'CHARACTERS' },
  { label: 'Vehicles', value: 'VEHICLES' },
  { label: 'Features', value: 'FEATURES' },
  { label: 'Trailers', value: 'TRAILERS' },
  { label: 'Story', value: 'STORY' },
  { label: 'Official', value: 'OFFICIAL' },
]

export default function NewsPage() {
  const [activeStatus, setActiveStatus] = useState('ALL')
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const statusMatch = activeStatus === 'ALL' || article.status === activeStatus
        const categoryMatch = activeCategory === 'ALL' || article.category === activeCategory
        return statusMatch && categoryMatch
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }, [activeStatus, activeCategory])

  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader
          eyebrow="News"
          title="Intelligence Feed"
          description="Latest reported developments, official announcements, and analysis."
        />

        {/* Seed data notice */}
        <div className="flex items-center gap-2 mb-6 px-3 py-2 rounded-subtle bg-bg-secondary border border-border-primary">
          <span className="w-2 h-2 rounded-full bg-accent-blue/50" aria-hidden="true" />
          <span className="text-caption text-text-muted">
            Displaying seed data — live news pipeline connects in Session 2
          </span>
        </div>

        {/* Filters */}
        <div className="space-y-3 mb-8">
          <div>
            <span className="text-caption text-text-tertiary block mb-2">Status</span>
            <FilterBar
              filters={statusFilters}
              activeFilter={activeStatus}
              onFilterChange={setActiveStatus}
              label="Filter by status"
            />
          </div>
          <div>
            <span className="text-caption text-text-tertiary block mb-2">Category</span>
            <FilterBar
              filters={categoryFilters}
              activeFilter={activeCategory}
              onFilterChange={setActiveCategory}
              label="Filter by category"
            />
          </div>
        </div>

        {/* Results */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles match"
            description="Try adjusting your filters to find what you're looking for."
            icon="📡"
          />
        )}

        <AdSlot position="in-feed" />
      </div>
    </div>
  )
}
