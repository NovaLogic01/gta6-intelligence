import { vehicles } from '@/data/vehicles'
import { EntityDossier } from '@/components/ui/EntityDossier'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return vehicles.map((item) => ({ slug: item.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = vehicles.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.name} — Vehicles | GTA VI Platform`,
    description: item.description,
  }
}

export default function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = vehicles.find(i => i.slug === params.slug)
  if (!vehicle) {
    notFound()
  }
  return <EntityDossier entity={vehicle} backLink="/database/vehicles" backLabel="BACK TO VEHICLES" />
}
