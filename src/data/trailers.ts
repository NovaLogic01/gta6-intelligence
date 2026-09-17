import { Trailer } from '@/types'

export const trailers: Trailer[] = [
  {
    id: 'trailer-1',
    slug: 'trailer-1',
    name: 'Grand Theft Auto VI Trailer 1',
    description: 'The first official look at GTA VI, introducing Lucia, Jason, and the state of Leonida.',
    status: 'CONFIRMED',
    category: 'trailer',
    releaseDate: '2023-12-04T23:00:00Z',
    officialUrl: 'https://www.youtube.com/watch?v=QdBZY2fkU-0',
    embedId: 'QdBZY2fkU-0',
    duration: '1:31',
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    knownInformation: [
      'Set to Tom Petty\'s "Love Is A Long Road"',
      'Introduces Lucia in a prison setting',
      'Showcases various locations in Leonida including Vice City',
      'Highlights social media culture and dense crowds'
    ]
  }
]
