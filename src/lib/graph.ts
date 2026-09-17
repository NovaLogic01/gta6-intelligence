import { BaseEntity, Relationship } from '@/types'
import { characters } from '@/data/characters'
import { locations } from '@/data/locations'
import { vehicles } from '@/data/vehicles'
import { features } from '@/data/features'
import { gameplay } from '@/data/gameplay'
import { activities } from '@/data/activities'
import { trailers } from '@/data/trailers'
import { articles } from '@/data/articles'
import { timelineEvents } from '@/data/timeline'
import { relationships } from '@/data/relationships'

// Create a central pool of all entities
export const allEntities = [
  ...characters,
  ...locations,
  ...vehicles,
  ...features,
  ...gameplay,
  ...activities,
  ...trailers,
] as BaseEntity[]

// Basic resolvers
export const getEntityById = (id: string) => allEntities.find((e) => e.id === id)
export const getArticleById = (id: string) => articles.find((a) => a.id === id)
export const getTimelineEventById = (id: string) => timelineEvents.find((t) => t.id === id)

// Graph resolvers
export function getRelatedEntities(entityId: string) {
  // Find all relationships where this entity is either "from" or "to"
  const relevantRelations = relationships.filter(
    (rel) => rel.fromEntityId === entityId || rel.toEntityId === entityId
  )

  const related = relevantRelations.map((rel) => {
    const isFrom = rel.fromEntityId === entityId
    const targetId = isFrom ? rel.toEntityId : rel.fromEntityId
    const targetEntity = getEntityById(targetId)

    return {
      relationship: rel,
      targetEntity: targetEntity as BaseEntity,
      direction: isFrom ? 'OUTBOUND' : 'INBOUND'
    }
  }).filter((r) => r.targetEntity !== undefined)

  return related
}

export function getRelatedArticles(entityId: string) {
  // Return articles where relatedEntityIds includes entityId
  return articles.filter((a) => a.relatedEntityIds?.includes(entityId))
}

export function getRelatedTimelineEvents(entityId: string) {
  return timelineEvents.filter((t) => t.relatedEntityIds?.includes(entityId))
}
