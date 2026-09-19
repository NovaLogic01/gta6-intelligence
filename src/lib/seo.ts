import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

interface SEOProps {
  title: string
  description?: string
  url: string
  type?: 'website' | 'article' | 'profile'
  image?: string
  keywords?: string[]
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  url,
  type = 'website',
  image,
  keywords = [],
  publishedTime,
  modifiedTime,
  authors,
}: SEOProps): Metadata {
  const fullUrl = `${siteConfig.url}${url}`
  
  return {
    title,
    description,
    keywords: ['GTA VI', 'GTA 6', 'Grand Theft Auto VI', 'Leonida', ...keywords],
    authors: authors ? authors.map(name => ({ name })) : [{ name: siteConfig.creator }],
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      type,
      ...(image && {
        images: [{ url: image }],
      }),
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: authors || [siteConfig.creator],
      }),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(image && { images: [image] }),
    },
  }
}
