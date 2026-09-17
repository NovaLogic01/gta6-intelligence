import { type ClassValue, clsx } from 'clsx'

// Simple class name merger without tailwind-merge to keep dependencies minimal
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateShort(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatRelativeDate(date: string | Date): string {
  const d = new Date(date)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30)

  if (seconds < 60) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  if (weeks < 4) return `${weeks}w ago`
  if (months < 12) return `${months}mo ago`
  return formatDateShort(date)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + '…'
}

export function getStatusColor(status: string): string {
  switch (status.toUpperCase()) {
    case 'CONFIRMED': return 'bg-status-confirmed/15 text-status-confirmed border-status-confirmed/25'
    case 'OFFICIALLY_SHOWN':
    case 'OFFICIALLY SHOWN': return 'bg-status-official/15 text-status-official border-status-official/25'
    case 'REPORTED': return 'bg-status-reported/15 text-status-reported border-status-reported/25'
    case 'RUMOR': return 'bg-status-rumor/15 text-status-rumor border-status-rumor/25'
    case 'SPECULATION': return 'bg-status-speculation/15 text-status-speculation border-status-speculation/25'
    default: return 'bg-bg-elevated text-text-secondary border-border-primary'
  }
}

export function getStatusLabel(status: string): string {
  switch (status.toUpperCase()) {
    case 'CONFIRMED': return 'Confirmed'
    case 'OFFICIALLY_SHOWN':
    case 'OFFICIALLY SHOWN': return 'Officially Shown'
    case 'REPORTED': return 'Reported'
    case 'RUMOR': return 'Rumor'
    case 'SPECULATION': return 'Speculation'
    default: return status
  }
}