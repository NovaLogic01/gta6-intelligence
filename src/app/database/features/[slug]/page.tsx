import { features } from '@/data/features'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return features.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = features.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} — Features | GTA VI Platform`,
    description: item.description,
  }
}

export default function FeatureDetailPage({ params }: { params: { slug: string } }) {
  const feature = features.find(i => i.slug === params.slug)
  if (!feature) {
    notFound()
  }
  return <EntityDossier entity={feature} backLink="/database/features" backLabel="BACK TO FEATURES" />
}
