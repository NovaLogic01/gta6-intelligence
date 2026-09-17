import { TimelineEvent } from '@/types'

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-trailer-1-announcement',
    date: '2023-12-01T14:00:00Z',
    title: 'Trailer 1 Date Announced',
    description: 'Rockstar Games officially announces that the first trailer for the next Grand Theft Auto will be released on December 5, 2023.',
    category: 'OFFICIAL',
    status: 'CONFIRMED',
    sourceId: 'rockstar-games',
    isSeedData: true
  },
  {
    id: 'event-trailer-1-leak-release',
    date: '2023-12-04T23:00:00Z',
    title: 'Trailer 1 Released Early',
    description: 'Due to a leak on social media, Rockstar releases Trailer 1 a day early, revealing the Vice City setting and protagonists.',
    category: 'TRAILERS',
    status: 'CONFIRMED',
    sourceId: 'rockstar-games',
    relatedArticleIds: ['art-trailer-1', 'art-leonida'],
    isSeedData: true
  },
  {
    id: 'event-initial-2025-window',
    date: '2023-12-04T23:05:00Z',
    title: '2025 Release Window Confirmed',
    description: 'The end of Trailer 1 confirms that GTA VI is slated for release in 2025.',
    category: 'RELEASE',
    status: 'CONFIRMED',
    sourceId: 'rockstar-games',
    isSeedData: true
  },
  {
    id: 'event-tt-fall-2025',
    date: '2024-05-16T20:00:00Z',
    title: 'Fall 2025 Release Window Clarified',
    description: 'During an earnings call, Take-Two Interactive narrows the release window for GTA VI to Fall 2025.',
    category: 'RELEASE',
    status: 'REPORTED',
    sourceId: 'take-two-interactive',
    relatedArticleIds: ['art-tt-earnings'],
    isSeedData: true
  },
  {
    id: 'event-trailer-2-release',
    date: '2025-01-30T14:00:00Z',
    title: 'Trailer 2 Released',
    description: 'Rockstar Games releases the second official trailer for GTA VI.',
    category: 'TRAILERS',
    status: 'CONFIRMED',
    sourceId: 'rockstar-games',
    relatedArticleIds: ['art-trailer-2'],
    isSeedData: true
  },
  {
    id: 'event-delay-rumors-sample',
    date: '2025-03-15T10:00:00Z',
    title: '[Sample Data] Delay Rumors Surface',
    description: 'Unverified reports suggest a potential internal delay pushing the game out of Fall 2025.',
    category: 'RELEASE',
    status: 'RUMOR',
    sourceId: 'kotaku',
    relatedArticleIds: ['art-release-window'],
    isSeedData: true
  },
  {
    id: 'event-screenshots-batch-1-sample',
    date: '2025-05-10T14:00:00Z',
    title: '[Sample Data] First Official Screenshots',
    description: 'Rockstar releases the first batch of high-resolution screenshots showcasing wildlife and vehicles.',
    category: 'OFFICIAL',
    status: 'SPECULATION',
    sourceId: 'rockstar-newswire',
    isSeedData: true
  },
  {
    id: 'event-preorders-live-sample',
    date: '2025-07-01T16:00:00Z',
    title: '[Sample Data] Pre-orders Go Live',
    description: 'Digital and physical pre-orders for GTA VI become available, revealing special editions.',
    category: 'RELEASE',
    status: 'SPECULATION',
    sourceId: 'rockstar-games',
    isSeedData: true
  }
]
