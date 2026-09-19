import { gameplay } from '@/data/gameplay'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return gameplay.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = gameplay.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  
  return constructMetadata({
    title: `${item.name} | WITCHWAY Intelligence`,
    description: item.description,
    url: `/database/gameplay/${item.slug}`,
    type: 'profile',
    keywords: [item.name, 'gameplay', 'GTA VI'],
  })
}

export default function GameplayDetailPage({ params }: { params: { slug: string } }) {
  const item = gameplay.find(i => i.slug === params.slug)
  if (!item) {
    notFound()
  }
  return <EntityDossier entity={item} backLink="/database/gameplay" backLabel="BACK TO GAMEPLAY" />
}
