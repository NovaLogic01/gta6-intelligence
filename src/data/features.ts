import { Feature } from '@/types'

export const features: Feature[] = [
  {
    id: 'feat-social-media',
    slug: 'social-media-feed',
    name: 'Social Media Interface',
    description: 'An in-game social media platform heavily resembling TikTok or Instagram Reels.',
    status: 'OFFICIALLY_SHOWN',
    category: 'feature',
    knownInformation: [
      'Trailer 1 extensively featured vertical video clips with UI elements resembling modern social media'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    featureType: 'UI/Gameplay'
  },
  {
    id: 'feat-dense-crowds',
    slug: 'dense-crowds',
    name: 'High-Density Crowds',
    description: 'Significantly increased pedestrian density on beaches and streets.',
    status: 'OFFICIALLY_SHOWN',
    category: 'feature',
    knownInformation: [
      'Trailer footage showed highly populated beach scenes with unique NPC behaviors'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    featureType: 'AI/Graphics'
  },
  {
    id: 'feat-hair-physics',
    slug: 'advanced-hair-physics',
    name: 'Advanced Hair Physics',
    description: 'Highly detailed hair movement and physics on character models.',
    status: 'OFFICIALLY_SHOWN',
    category: 'feature',
    knownInformation: [
      'Noticed on Lucia and NPCs in trailer footage'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    featureType: 'Graphics'
  },
  {
    id: 'feat-crawling',
    slug: 'prone-crawling-sample',
    name: '[Sample Data] Prone Crawling',
    description: 'The ability for characters to go completely prone and crawl.',
    status: 'REPORTED',
    category: 'feature',
    knownInformation: [
      'Reported in various leaks as a new movement mechanic'
    ],
    sourceIds: ['bloomberg'],
    lastUpdated: '2024-02-20T00:00:00Z',
    isSeedData: true,
    featureType: 'Mechanics'
  },
  {
    id: 'feat-weapon-inventory',
    slug: 'limited-weapon-inventory-sample',
    name: '[Sample Data] Limited Weapon Inventory',
    description: 'A more realistic weapon carrying system similar to Red Dead Redemption 2.',
    status: 'RUMOR',
    category: 'feature',
    knownInformation: [
      'Players may only carry a limited number of large weapons at a time'
    ],
    sourceIds: ['ign'],
    lastUpdated: '2024-03-15T00:00:00Z',
    isSeedData: true,
    featureType: 'Mechanics'
  }
]
