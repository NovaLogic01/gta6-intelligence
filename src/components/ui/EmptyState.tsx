interface EmptyStateProps {
  title: string
  description: string
  icon?: string
  action?: {
    label: string
    href: string
  }
}

import Link from 'next/link'

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 lg:py-24 text-center">
      {icon && (
        <div className="text-4xl mb-4 opacity-30">{icon}</div>
      )}
      <h3 className="text-subheading text-text-secondary font-display mb-2">{title}</h3>
      <p className="text-body text-text-tertiary max-w-md mb-6">{description}</p>
      {action && (
        <Link
          href={action.href}
          className="px-4 py-2 text-body-sm text-accent-blue border border-accent-blue-border rounded-subtle hover:bg-accent-blue-subtle transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  )
}
