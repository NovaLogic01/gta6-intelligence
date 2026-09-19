import { characters } from '@/data/characters'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { constructMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return characters.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = characters.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  
  return constructMetadata({
    title: `${item.name} | WITCHWAY Intelligence`,
    description: item.description,
    url: `/database/characters/${item.slug}`,
    type: 'profile',
    keywords: [item.name, 'characters', 'GTA VI'],
  })
}

export default function CharacterDetailPage({ params }: { params: { slug: string } }) {
  const character = characters.find(i => i.slug === params.slug)
  if (!character) {
    notFound()
  }
  return <EntityDossier entity={character} backLink="/database/characters" backLabel="BACK TO CHARACTERS" />
}
