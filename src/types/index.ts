// ==========================================
// STATUS CLASSIFICATION SYSTEM
// ==========================================

export type Status = 
  | 'CONFIRMED'
  | 'OFFICIALLY_SHOWN'
  | 'REPORTED'
  | 'RUMOR'
  | 'SPECULATION'

export type SourceType = 'OFFICIAL' | 'NEWS' | 'REPORTING' | 'COMMUNITY'

export type EntityType = 'character' | 'location' | 'vehicle' | 'feature' | 'gameplay' | 'trailer' | 'wildlife' | 'activity'

export type ArticleCategory = 
  | 'RELEASE'
  | 'MAP'
  | 'GAMEPLAY'
  | 'CHARACTERS'
  | 'VEHICLES'
  | 'FEATURES'
  | 'TRAILERS'
  | 'STORY'
  | 'MULTIPLAYER'
  | 'OFFICIAL'
  | 'GENERAL'

// ==========================================
// SOURCE
// ==========================================

export interface Source {
  id: string
  name: string
  url: string
  type: SourceType
  priority: number // 1 = highest (official), 5 = lowest
}

// ==========================================
// ARTICLE
// ==========================================

export interface Article {
  id: string
  slug: string
  title: string
  summary: string
  content: string
  category: ArticleCategory
  status: Status
  sourceId: string
  sourceUrl?: string
  publishedAt: string // ISO date
  updatedAt?: string // ISO date
  isSeedData: boolean // true = sample/placeholder content
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  tags?: string[]
}

// ==========================================
// BASE ENTITY
// ==========================================

export interface BaseEntity {
  id: string
  slug: string
  name: string
  description: string
  status: Status
  category: EntityType
  knownInformation: string[]
  sourceIds: string[]
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  lastUpdated: string // ISO date
  isSeedData: boolean
  imageDescription?: string // Description for future image
}

// ==========================================
// SPECIFIC ENTITY TYPES
// ==========================================

export interface Character extends BaseEntity {
  category: 'character'
  role?: string
  voiceActor?: string
  firstAppearance?: string
}

export interface Location extends BaseEntity {
  category: 'location'
  locationType?: string // city, district, landmark, etc.
  region?: string
  coordinates?: { lat: number; lng: number } // for future map integration
}

export interface Vehicle extends BaseEntity {
  category: 'vehicle'
  vehicleType?: string // car, motorcycle, boat, aircraft, etc.
  manufacturer?: string
  realWorldInspiration?: string
}

export interface Feature extends BaseEntity {
  category: 'feature'
  featureType?: string // gameplay, graphics, physics, AI, etc.
}

export interface Gameplay extends BaseEntity {
  category: 'gameplay'
  gameplayType?: string // mechanics, missions, activities, etc.
}

export interface Wildlife extends BaseEntity {
  category: 'wildlife'
  species?: string
}

export interface Activity extends BaseEntity {
  category: 'activity'
  activityType?: string
}

// ==========================================
// TRAILER
// ==========================================

export interface Trailer {
  id: string
  slug: string
  title: string
  description: string
  status: Status
  releaseDate: string // ISO date
  officialUrl?: string // Official YouTube URL
  embedId?: string // YouTube video ID for embedding
  duration?: string
  sourceId: string
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  isSeedData: boolean
  keyDetails?: string[]
}

// ==========================================
// TIMELINE EVENT
// ==========================================

export interface TimelineEvent {
  id: string
  date: string // ISO date
  title: string
  description: string
  category: ArticleCategory
  status: Status
  sourceId: string
  sourceUrl?: string
  relatedArticleIds?: string[]
  relatedEntityIds?: string[]
  isSeedData: boolean
}

// ==========================================
// DATABASE CATEGORY (for UI)
// ==========================================

export interface DatabaseCategory {
  id: string
  slug: string
  name: string
  description: string
  icon: string // emoji or icon name
  count: number
  href: string
}

// ==========================================
// SEARCH RESULT
// ==========================================

export interface SearchResult {
  id: string
  title: string
  type: EntityType | 'article' | 'trailer'
  status: Status
  description: string
  href: string
  score: number
}

// ==========================================
// FILTER OPTIONS
// ==========================================

export interface FilterOption {
  label: string
  value: string
  count?: number
}

// ==========================================
// AD SLOT (placeholder architecture)
// ==========================================

export interface AdSlot {
  id: string
  position: 'header' | 'sidebar' | 'in-feed' | 'in-article' | 'footer'
  enabled: boolean
  format?: string
}
