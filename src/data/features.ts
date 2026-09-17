import { Feature } from '@/types'

export const features: Feature[] = [
  {
    id: 'feat-social-media',
    slug: 'social-media-feed',
    name: 'Social Media Interface',
    description: 'An in-game social media platform resembling TikTok or Instagram Reels.',
    status: 'OFFICIALLY_SHOWN',
    category: 'feature',
    knownInformation: [
      'Trailer 1 extensively featured vertical video clips with UI elements resembling modern social media',
      'Used by NPCs to stream activities'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    featureType: 'UI'
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
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    featureType: 'Graphics/AI'
  }
]
