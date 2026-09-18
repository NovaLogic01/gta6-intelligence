import { allEntities, getRelatedEntities, getEntityById } from './graph'
import { articles } from '../data/articles'
import { sources } from '../data/sources'
import { BaseEntity } from '@/types'

// 1. CLAIM CHECKER
export interface ClaimResult {
  match: boolean
  entity?: BaseEntity
  status?: string
  evidence?: string[]
  sources?: any[]
  related?: any[]
}

export function checkClaim(query: string): ClaimResult {
  const normalized = query.toLowerCase().trim()
  
  // Exact or partial match on entities
  const matchedEntity = allEntities.find(e => 
    e.name.toLowerCase().includes(normalized) || 
    (e.slug && e.slug.toLowerCase().includes(normalized)) ||
    (e.description && e.description.toLowerCase().includes(normalized))
  )

  if (!matchedEntity) {
    return { match: false, status: 'NOT CURRENTLY VERIFIED' }
  }

  const related = getRelatedEntities(matchedEntity.id).map(r => r.targetEntity)
  const matchedSources = matchedEntity.sourceIds.map(id => sources.find(s => s.id === id)).filter(Boolean)

  return {
    match: true,
    entity: matchedEntity,
    status: matchedEntity.status,
    evidence: matchedEntity.knownInformation || [],
    sources: matchedSources,
    related: related
  }
}

// 2. DISCOVERY QUEUE (Random / "Did you know?")
export function getDiscoveryItems(count: number = 3, excludeIds: string[] = []): BaseEntity[] {
  const available = allEntities.filter(e => !excludeIds.includes(e.id) && e.status === 'OFFICIALLY_SHOWN')
  const shuffled = [...available].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// 3. CHANGE ENGINE
export interface ChangeEvent {
  id: string
  entityId: string
  entityName: string
  field: string
  changeType: 'ADDED' | 'UPDATED' | 'VERIFIED' | 'STATUS_CHANGED'
  occurredAt: string
}

export function getRecentChanges(limit: number = 10): ChangeEvent[] {
  // Synthesize changes from entities that have lastVerifiedAt or lastUpdated recently
  // In a real automated system, this would be a dedicated log.
  const changes: ChangeEvent[] = allEntities
    .filter(e => e.lastVerifiedAt || e.lastUpdated)
    .map(e => ({
      id: `change-${e.id}`,
      entityId: e.id,
      entityName: e.name,
      field: 'status',
      changeType: e.lastVerifiedAt ? 'VERIFIED' : 'UPDATED',
      occurredAt: e.lastVerifiedAt || e.lastUpdated
    }))
    
  return changes.sort((a, b) => new Date(b.occurredAt).getTime() - new Date(a.occurredAt).getTime()).slice(0, limit)
}
