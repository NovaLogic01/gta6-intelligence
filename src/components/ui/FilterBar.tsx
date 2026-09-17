'use client'

interface FilterBarProps {
  filters: { label: string; value: string }[]
  activeFilter: string
  onFilterChange: (value: string) => void
  label?: string
}

export function FilterBar({ filters, activeFilter, onFilterChange, label = 'Filter' }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="group" aria-label={label}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-3 py-1.5 text-body-sm rounded-subtle whitespace-nowrap transition-colors border ${
            activeFilter === filter.value
              ? 'bg-bg-elevated text-text-primary border-border-secondary'
              : 'text-text-tertiary border-transparent hover:text-text-secondary hover:bg-bg-hover/50'
          }`}
          aria-pressed={activeFilter === filter.value}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
