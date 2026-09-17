interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  action?: {
    label: string
    href: string
  }
}

import Link from 'next/link'

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
      <div>
        {eyebrow && (
          <span className="text-overline text-accent-blue tracking-widest uppercase block mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="text-heading text-text-primary font-display">
          {title}
        </h2>
        {description && (
          <p className="text-body text-text-secondary mt-2 max-w-2xl">
            {description}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="text-body-sm text-accent-blue hover:text-accent-blue-muted transition-colors whitespace-nowrap flex items-center gap-1 group"
        >
          {action.label}
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      )}
    </div>
  )
}
