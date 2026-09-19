import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AdsterraSocialBar } from '@/components/ads/AdsterraSocialBar'
import { ExploreFurtherCard } from '@/components/ads/ExploreFurtherCard'

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

import { siteConfig } from '@/config/site'

const siteUrl = siteConfig.url

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GTA VI Intelligence Platform | The Verified Record',
    template: '%s | GTA VI Intelligence Platform',
  },
  description: 'The definitive, source-verified intelligence platform for Grand Theft Auto VI. Tracking characters, locations, vehicles, gameplay features, and official signals.',
  keywords: ['GTA VI', 'GTA 6 database', 'Leonida', 'GTA VI map', 'GTA VI characters', 'GTA VI intelligence', 'verified GTA 6 news'],
  authors: [{ name: 'GTA VI Intelligence Platform' }],
  creator: 'GTA VI Intelligence Platform',
  publisher: 'GTA VI Intelligence Platform',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'GTA VI Intelligence Platform',
    title: 'GTA VI Intelligence Platform | The Verified Record',
    description: 'The definitive, source-verified intelligence platform for Grand Theft Auto VI. Tracking characters, locations, vehicles, gameplay features, and official signals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA VI Intelligence Platform | The Verified Record',
    description: 'The definitive, source-verified intelligence platform for Grand Theft Auto VI.',
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
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3BWEZB251S"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3BWEZB251S');
        ` }}></script>
        <script src="https://5gvci.com/act/files/tag.min.js?z=11836364" data-cfasync="false" async></script>
        <script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='11836369',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }}></script>
        <script dangerouslySetInnerHTML={{ __html: `(function(s){s.dataset.zone='11836370',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))` }}></script>
      </head>
      <body className={`${inter.variable} bg-bg-primary text-text-primary min-h-screen flex flex-col relative`}>
        <div className="bg-noise" aria-hidden="true" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-subtle">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <ExploreFurtherCard />
        <Footer />
        <AdsterraSocialBar />
      </body>
    </html>
  )
}