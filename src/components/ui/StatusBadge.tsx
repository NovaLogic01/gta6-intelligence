import { getStatusColor, getStatusLabel } from '@/lib/utils'
import type { Status } from '@/types'

interface StatusBadgeProps {
  status: Status | string
  size?: 'sm' | 'md'
}

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const colorClasses = getStatusColor(status)
  const label = getStatusLabel(status)
  
  return (
    <span
      className={`status-badge border ${colorClasses} ${
        size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-overline px-2 py-0.5'
      }`}
    >
      {label}
    </span>
  )
}
