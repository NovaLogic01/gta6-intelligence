import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gta6intel.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/news',
    '/database',
    '/database/characters',
    '/database/locations',
    '/database/vehicles',
    '/database/features',
    '/timeline',
    '/map',
    '/trailers',
    '/search',
    '/about',
    '/sources',
    '/editorial-policy',
    '/corrections',
    '/contact',
    '/privacy',
    '/terms',
  ]

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/news' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/news' ? 0.9 : 0.7,
  }))

  // Dynamic article routes - will expand as data grows
  const { articles } = require('@/data/articles')
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article: { slug: string; publishedAt: string }) => ({
    url: `${siteUrl}/news/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic entity routes
  const { characters } = require('@/data/characters')
  const { locations } = require('@/data/locations')
  const { vehicles } = require('@/data/vehicles')
  const { features } = require('@/data/features')

  const entityRoutes: MetadataRoute.Sitemap = [
    ...characters.map((c: { slug: string; lastUpdated: string }) => ({
      url: `${siteUrl}/database/characters/${c.slug}`,
      lastModified: c.lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...locations.map((l: { slug: string; lastUpdated: string }) => ({
      url: `${siteUrl}/database/locations/${l.slug}`,
      lastModified: l.lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...vehicles.map((v: { slug: string; lastUpdated: string }) => ({
      url: `${siteUrl}/database/vehicles/${v.slug}`,
      lastModified: v.lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
    ...features.map((f: { slug: string; lastUpdated: string }) => ({
      url: `${siteUrl}/database/features/${f.slug}`,
      lastModified: f.lastUpdated,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    })),
  ]

  return [...staticRoutes, ...articleRoutes, ...entityRoutes]
}
