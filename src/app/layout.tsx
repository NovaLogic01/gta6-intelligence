import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

// Using Inter with heavier weight as display font for now
// Can be replaced with a premium display font later
const displayFont = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600', '700', '800'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gta6intel.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GTA VI Intel — The Intelligence Layer',
    template: '%s | GTA VI Intel',
  },
  description: 'A continuously organized intelligence layer for GTA VI — tracking official announcements, reported developments, characters, locations, gameplay, and more.',
  keywords: ['GTA VI', 'GTA 6', 'Grand Theft Auto VI', 'Grand Theft Auto 6', 'Rockstar Games', 'GTA VI news', 'GTA VI database', 'GTA 6 release', 'GTA VI characters', 'GTA VI map'],
  authors: [{ name: 'GTA VI Intel' }],
  creator: 'GTA VI Intel',
  publisher: 'GTA VI Intel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'GTA VI Intel',
    title: 'GTA VI Intel — The Intelligence Layer',
    description: 'A continuously organized intelligence layer for GTA VI — tracking official announcements, reported developments, characters, locations, gameplay, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA VI Intel — The Intelligence Layer',
    description: 'A continuously organized intelligence layer for GTA VI — tracking official announcements, reported developments, characters, locations, gameplay, and more.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.variable} bg-bg-primary text-text-primary min-h-screen flex flex-col relative`}>
        <div className="bg-noise" aria-hidden="true" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-subtle">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}