import { articles } from '@/data/articles'
import { characters } from '@/data/characters'
import { locations } from '@/data/locations'
import { vehicles } from '@/data/vehicles'
import { features } from '@/data/features'
import { trailers } from '@/data/trailers'

export interface SearchResult {
  id: string
  title: string
  type: 'article' | 'character' | 'location' | 'vehicle' | 'feature' | 'trailer'
  status: string
  description: string
  href: string
  score: number
}

function normalizeQuery(query: string): string {
  return query.toLowerCase().trim()
}

function scoreMatch(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = normalizeQuery(query)
  
  if (!normalizedQuery) return 0
  
  // Exact match
  if (normalizedText === normalizedQuery) return 100
  
  // Starts with query
  if (normalizedText.startsWith(normalizedQuery)) return 80
  
  // Contains exact query
  if (normalizedText.includes(normalizedQuery)) return 60
  
  // Check individual words
  const queryWords = normalizedQuery.split(/\s+/)
  const matchedWords = queryWords.filter(word => normalizedText.includes(word))
  if (matchedWords.length > 0) {
    return (matchedWords.length / queryWords.length) * 40
  }
  
  return 0
}

export function search(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return []

  const results: SearchResult[] = []

  // Search articles
  for (const article of articles) {
    const titleScore = scoreMatch(article.title, query)
    const summaryScore = scoreMatch(article.summary, query) * 0.6
    const categoryScore = scoreMatch(article.category, query) * 0.4
    const maxScore = Math.max(titleScore, summaryScore, categoryScore)
    
    if (maxScore > 0) {
      results.push({
        id: article.id,
        title: article.title,
        type: 'article',
        status: article.status,
        description: article.summary,
        href: `/news/${article.slug}`,
        score: maxScore,
      })
    }
  }

  // Search characters
  for (const character of characters) {
    const nameScore = scoreMatch(character.name, query)
    const descScore = scoreMatch(character.description, query) * 0.6
    const maxScore = Math.max(nameScore, descScore)
    
    if (maxScore > 0) {
      results.push({
        id: character.id,
        title: character.name,
        type: 'character',
        status: character.status,
        description: character.description,
        href: `/database/characters/${character.slug}`,
        score: maxScore,
      })
    }
  }

  // Search locations
  for (const location of locations) {
    const nameScore = scoreMatch(location.name, query)
    const descScore = scoreMatch(location.description, query) * 0.6
    const maxScore = Math.max(nameScore, descScore)
    
    if (maxScore > 0) {
      results.push({
        id: location.id,
        title: location.name,
        type: 'location',
        status: location.status,
        description: location.description,
        href: `/database/locations/${location.slug}`,
        score: maxScore,
      })
    }
  }

  // Search vehicles
  for (const vehicle of vehicles) {
    const nameScore = scoreMatch(vehicle.name, query)
    const descScore = scoreMatch(vehicle.description, query) * 0.6
    const maxScore = Math.max(nameScore, descScore)
    
    if (maxScore > 0) {
      results.push({
        id: vehicle.id,
        title: vehicle.name,
        type: 'vehicle',
        status: vehicle.status,
        description: vehicle.description,
        href: `/database/vehicles/${vehicle.slug}`,
        score: maxScore,
      })
    }
  }

  // Search features
  for (const feature of features) {
    const nameScore = scoreMatch(feature.name, query)
    const descScore = scoreMatch(feature.description, query) * 0.6
    const maxScore = Math.max(nameScore, descScore)
    
    if (maxScore > 0) {
      results.push({
        id: feature.id,
        title: feature.name,
        type: 'feature',
        status: feature.status,
        description: feature.description,
        href: `/database/features/${feature.slug}`,
        score: maxScore,
      })
    }
  }

  // Search trailers
  for (const trailer of trailers) {
    const titleScore = scoreMatch(trailer.title, query)
    const descScore = scoreMatch(trailer.description, query) * 0.6
    const maxScore = Math.max(titleScore, descScore)
    
    if (maxScore > 0) {
      results.push({
        id: trailer.id,
        title: trailer.title,
        type: 'trailer',
        status: trailer.status,
        description: trailer.description,
        href: `/trailers#${trailer.id}`,
        score: maxScore,
      })
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score)

  return results.slice(0, 20)
}