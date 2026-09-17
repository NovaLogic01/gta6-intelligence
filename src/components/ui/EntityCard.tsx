import Link from 'next/link'
import { StatusBadge } from './StatusBadge'
import type { BaseEntity, Character, Location, Vehicle, Feature } from '@/types'

interface EntityCardProps {
  entity: BaseEntity | Character | Location | Vehicle | Feature
  basePath: string
}

export function EntityCard({ entity, basePath }: EntityCardProps) {
  return (
    <Link
      href={`${basePath}/${entity.slug}`}
      className="group block card-base card-hover p-5"
    >
      {/* Icon / Visual placeholder */}
      <div className="w-full h-32 rounded-subtle bg-bg-primary/50 border border-border-primary mb-4 flex items-center justify-center overflow-hidden">
        <div className="text-text-muted/30 text-4xl select-none">
          {entity.category === 'character' && '👤'}
          {entity.category === 'location' && '📍'}
          {entity.category === 'vehicle' && '🚗'}
          {entity.category === 'feature' && '⚡'}
          {entity.category === 'gameplay' && '🎮'}
          {entity.category === 'wildlife' && '🐊'}
          {entity.category === 'activity' && '🎯'}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <StatusBadge status={entity.status} size="sm" />
        <span className="text-caption text-text-tertiary uppercase tracking-wider">{entity.category}</span>
      </div>

      <h3 className="text-body-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-1.5 line-clamp-1">
        {entity.name}
      </h3>

      <p className="text-body-sm text-text-secondary line-clamp-2 mb-3">
        {entity.description}
      </p>

      {entity.knownInformation.length > 0 && (
        <div className="text-caption text-text-tertiary">
          {entity.knownInformation.length} known detail{entity.knownInformation.length !== 1 ? 's' : ''}
        </div>
      )}

      {entity.isSeedData && (
        <div className="mt-2 text-caption text-text-muted italic">
          Seed Data
        </div>
      )}
    </Link>
  )
}
