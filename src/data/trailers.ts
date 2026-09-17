import { Trailer } from '@/types'

export const trailers: Trailer[] = [
  {
    id: 'trailer-1',
    slug: 'trailer-1',
    title: 'Grand Theft Auto VI Trailer 1',
    description: 'The first official look at GTA VI, introducing Lucia, Jason, and the state of Leonida.',
    status: 'CONFIRMED',
    releaseDate: '2023-12-04T23:00:00Z',
    officialUrl: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    embedId: 'QdBZY2fkU-0',
    duration: '1:31',
    sourceId: 'rockstar-games',
    relatedEntityIds: ['char-lucia', 'char-jason', 'loc-leonida', 'loc-vice-city'],
    relatedArticleIds: ['art-trailer-1', 'art-leonida', 'art-protagonists'],
    isSeedData: true,
    keyDetails: [
      'Set to Tom Petty\'s "Love Is A Long Road"',
      'Introduces Lucia in a prison setting',
      'Showcases various locations in Leonida including Vice City',
      'Highlights social media culture and dense crowds'
    ]
  },
  {
    id: 'trailer-2',
    slug: 'trailer-2',
    title: 'Grand Theft Auto VI Trailer 2',
    description: 'The second official trailer for GTA VI, providing more insight into the story and world.',
    status: 'CONFIRMED',
    releaseDate: '2025-01-30T14:00:00Z',
    officialUrl: 'https://www.youtube.com/watch?v=VPfD9ARYXYQ',
    embedId: 'VPfD9ARYXYQ',
    duration: '1:45',
    sourceId: 'rockstar-games',
    relatedEntityIds: ['char-lucia', 'char-jason', 'loc-leonida'],
    relatedArticleIds: ['art-trailer-2'],
    isSeedData: true,
    keyDetails: [
      'Expands on the relationship between Lucia and Jason',
      'Shows new areas of the Leonida map',
      'Features more dynamic action sequences'
    ]
  }
]
