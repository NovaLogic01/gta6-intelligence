'use client'

import { useState, useMemo } from 'react'
import { vehicles } from '@/data/vehicles'
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

export default function VehiclesPage() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const filtered = useMemo(() => vehicles.filter(v => activeFilter === 'ALL' || v.status === activeFilter), [activeFilter])

  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader eyebrow="Database" title="Vehicles" description="Vehicles spotted in trailers and reported through various sources." />
        <div className="mb-8">
          <FilterBar filters={statusFilters} activeFilter={activeFilter} onFilterChange={setActiveFilter} label="Filter by status" />
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((vehicle) => (<EntityCard key={vehicle.id} entity={vehicle} basePath="/database/vehicles" />))}
          </div>
        ) : (
          <EmptyState title="No vehicles found" description="Try adjusting your filter to see more results." icon="🚗" />
        )}
      </div>
    </div>
  )
}
