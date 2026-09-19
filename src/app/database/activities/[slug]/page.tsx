import { activities } from '@/data/activities'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return activities.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = activities.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  
  return constructMetadata({
    title: `${item.name} | WITCHWAY Intelligence`,
    description: item.description,
    url: `/database/activities/${item.slug}`,
    type: 'profile',
    keywords: [item.name, 'activities', 'GTA VI'],
  })
}

export default function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const item = activities.find(i => i.slug === params.slug)
  if (!item) {
    notFound()
  }
  return <EntityDossier entity={item} backLink="/database/activities" backLabel="BACK TO ACTIVITIES" />
}
