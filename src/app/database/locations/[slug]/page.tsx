import { locations } from '@/data/locations'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = locations.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  
  return constructMetadata({
    title: `${item.name} | WITCHWAY Intelligence`,
    description: item.description,
    url: `/database/locations/${item.slug}`,
    type: 'profile',
    keywords: [item.name, 'locations', 'GTA VI'],
  })
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find(i => i.slug === params.slug)
  if (!location) {
    notFound()
  }
  return <EntityDossier entity={location} backLink="/database/locations" backLabel="BACK TO LOCATIONS" />
}
