export const siteConfig = {
  name: 'GTA VI Intel',
  tagline: 'The Intelligence Layer',
  description: 'A continuously organized intelligence layer for GTA VI — tracking official announcements, reported developments, characters, locations, gameplay, and more.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://remarkable-gumption-725330.netlify.app',
  creator: 'GTA VI Intel',
  // Analytics - Prepared for Session 6+
  analytics: {
    enabled: false,
    googleAnalyticsId: '',
    plausibleDomain: '',
  },
  // Monetization - Prepared for Session 6+
  monetization: {
    enabled: false,
  },
  features: {
    enableRSS: true,
  },
  // Navigation
  navigation: [
    { label: 'Intelligence', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Database', href: '/database' },
    { label: 'Timeline', href: '/timeline' },
    { label: 'Map', href: '/map' },
    { label: 'Trailers', href: '/trailers' },
  ],
  // Footer navigation
  footerLinks: {
    platform: [
      { label: 'News', href: '/news' },
      { label: 'Database', href: '/database' },
      { label: 'Timeline', href: '/timeline' },
      { label: 'Map', href: '/map' },
      { label: 'Trailers', href: '/trailers' },
    ],
    database: [
      { label: 'Characters', href: '/database/characters' },
      { label: 'Locations', href: '/database/locations' },
      { label: 'Vehicles', href: '/database/vehicles' },
      { label: 'Gameplay', href: '/database/gameplay' },
      { label: 'Features', href: '/database/features' },
    ],
    editorial: [
      { label: 'About', href: '/about' },
      { label: 'Sources', href: '/sources' },
      { label: 'Editorial Policy', href: '/editorial-policy' },
      { label: 'Corrections', href: '/corrections' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Disclaimer', href: '/disclaimer' },
      { label: 'DMCA / Copyright', href: '/dmca' },
    ],
  },
  disclaimer: 'GTA VI Intel is an independent fan-operated information project. It is not affiliated with, endorsed by, or connected to Rockstar Games, Take-Two Interactive, or any of their subsidiaries. Grand Theft Auto, GTA, and related marks are trademarks of Take-Two Interactive Software, Inc.',
} as const