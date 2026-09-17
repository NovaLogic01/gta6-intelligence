import type { Metadata } from 'next'
import Link from 'next/link'
import { databaseCategories } from '@/data/categories'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Database',
  description: 'Structured intelligence covering characters, locations, vehicles, gameplay features, and more.',
}

export default function DatabasePage() {
  return (
    <div className="section-spacing">
      <div className="container-wide">
        <SectionHeader
          eyebrow="The Database"
          title="Structured Intelligence"
          description="Every known detail about GTA VI, organized and categorized with source verification."
        />

        {/* Search link */}
        <div className="mb-10">
          <Link href="/search" className="block max-w-lg mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-subtle bg-bg-secondary border border-border-primary hover:border-border-secondary hover:bg-bg-tertiary transition-all group">
              <svg className="w-5 h-5 text-text-muted group-hover:text-text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span className="text-body text-text-muted group-hover:text-text-secondary transition-colors">
                Search the database...
              </span>
            </div>
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {databaseCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group card-base card-hover p-5 lg:p-6 flex flex-col"
            >
              <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all" aria-hidden="true">
                {category.icon}
              </div>
              <h3 className="text-body-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors mb-1.5">
                {category.name}
              </h3>
              <p className="text-body-sm text-text-tertiary mb-3 flex-grow">
                {category.description}
              </p>
              <div className="text-caption text-text-muted">
                {category.count > 0 ? `${category.count} entries` : 'Coming soon'}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
