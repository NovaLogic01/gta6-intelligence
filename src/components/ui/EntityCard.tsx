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
      className="dossier-panel p-6 group block hover:border-border-primary transition-colors flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-4 border-b border-border-primary/30 pb-4">
        <StatusBadge status={entity.status} size="sm" />
        <span className="text-caption text-text-tertiary font-mono uppercase tracking-widest">{entity.category}</span>
      </div>

      <h3 className="text-xl font-medium text-text-primary group-hover:text-accent-blue transition-colors mb-3 line-clamp-1">
        {entity.name}
      </h3>

      <p className="text-body-sm text-text-secondary line-clamp-3 mb-6 flex-1 font-light">
        {entity.description}
      </p>

      <div className="flex items-center justify-between text-xs font-mono text-text-tertiary pt-4 border-t border-border-primary/30 mt-auto">
        <span>{entity.knownInformation.length} RECORD{entity.knownInformation.length !== 1 ? 'S' : ''}</span>
        <span className="opacity-50">ID: {entity.id.substring(0,8).toUpperCase()}</span>
      </div>
    </Link>
  )
}
