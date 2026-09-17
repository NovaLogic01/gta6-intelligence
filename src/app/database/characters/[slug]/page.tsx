import { characters } from '@/data/characters'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return characters.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = characters.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} — Characters | GTA VI Platform`,
    description: item.description,
  }
}

export default function CharacterDetailPage({ params }: { params: { slug: string } }) {
  const character = characters.find(i => i.slug === params.slug)
  if (!character) {
    notFound()
  }
  return <EntityDossier entity={character} backLink="/database/characters" backLabel="BACK TO CHARACTERS" />
}
