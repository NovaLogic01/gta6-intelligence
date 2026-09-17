import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest GTA VI intelligence, announcements, and reported developments.',
  openGraph: {
    title: 'News | GTA VI Intel',
    description: 'Latest GTA VI intelligence, announcements, and reported developments.',
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
