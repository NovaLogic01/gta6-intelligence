'use client'

import { useState, useMemo } from 'react'
import { characters } from '@/data/characters'
import { FilterBar } from '@/components/ui/FilterBar'
import { EntityCard } from '@/components/ui/EntityCard'
import { EmptyState } from '@/components/ui/EmptyState'
import { SectionHeader } from '@/components/ui/SectionHeader'

const statusFilters = [
  { label: 'All', value: 'ALL' },
  { label: 'Confirmed', value: 'CONFIRMED' },
  { label: 'Officially Shown', value: 'OFFICIALLY_SHOWN' },
  { label: 'Reported', value: 'REPORTED' },
  { label: 'Rumor', value: 'RUMOR' },
  { label: 'Speculation', value: 'SPECULATION' },
]

export default function CharactersPage() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filtered = useMemo(() => {
    return characters.filter(c => activeFilter === 'ALL' || c.status === activeFilter)
  }, [activeFilter])

  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Database"
          title="Characters"
          description="Known and reported characters appearing in GTA VI."
        />

        <div className="mb-8">
          <FilterBar
            filters={statusFilters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            label="Filter by status"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((character) => (
              <EntityCard
                key={character.id}
                entity={character}
                basePath="/database/characters"
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No characters found"
            description="Try adjusting your filter to see more results."
            icon="👤"
          />
        )}
      </div>
    </div>
  )
}
