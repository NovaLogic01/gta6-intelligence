'use client'

import { EmptyState } from '@/components/ui/EmptyState'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function WildlifePage() {
  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Database"
          title="Wildlife"
          description="Animals and wildlife spotted in Leonida."
        />

        <EmptyState
          title="NO INDEXED RECORDS"
          description="We currently have no verified database records for this category."
          icon="dY?S"
        />
      </div>
    </div>
  )
}
