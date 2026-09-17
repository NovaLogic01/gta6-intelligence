import { activities } from '@/data/activities'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return activities.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = activities.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} — Activities | GTA VI Platform`,
    description: item.description,
  }
}

export default function ActivityDetailPage({ params }: { params: { slug: string } }) {
  const item = activities.find(i => i.slug === params.slug)
  if (!item) {
    notFound()
  }
  return <EntityDossier entity={item} backLink="/database/activities" backLabel="BACK TO ACTIVITIES" />
}
