import { Location } from '@/types'

export const locations: Location[] = [
  {
    id: 'loc-leonida',
    slug: 'leonida',
    name: 'Leonida',
    description: 'The state in which GTA VI is set, heavily inspired by Florida.',
    status: 'CONFIRMED',
    category: 'location',
    knownInformation: [
      'State containing Vice City and surrounding areas',
      'Features diverse biomes including beaches, cities, and swamps'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    locationType: 'State'
  },
  {
    id: 'loc-vice-city',
    slug: 'vice-city',
    name: 'Vice City',
    description: 'The iconic neon-soaked city returning in GTA VI, based on Miami.',
    status: 'CONFIRMED',
    category: 'location',
    knownInformation: [
      'Major urban center of Leonida',
      'Features a sprawling beach and dense downtown areas'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    locationType: 'City',
    region: 'Leonida'
  },
  {
    id: 'loc-kelly-county',
    slug: 'kelly-county',
    name: 'Kelly County',
    description: 'A county within the state of Leonida, shown in the first trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'Seen on a highway sign in Trailer 1',
      'Rural or suburban area outside the main city'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    locationType: 'County',
    region: 'Leonida'
  },
  {
    id: 'loc-gator-keys',
    slug: 'gator-keys-sample',
    name: '[Sample Data] Gator Keys',
    description: 'A string of islands south of the main landmass.',
    status: 'SPECULATION',
    category: 'location',
    knownInformation: [
      'Rumored recreation of the Florida Keys'
    ],
    sourceIds: ['kotaku'],
    lastUpdated: '2024-03-01T00:00:00Z',
    isSeedData: true,
    locationType: 'Region',
    region: 'Leonida'
  },
  {
    id: 'loc-port-gelhorn',
    slug: 'port-gelhorn-sample',
    name: '[Sample Data] Port Gelhorn',
    description: 'A secondary city or large town located on the western coast of the map.',
    status: 'RUMOR',
    category: 'location',
    knownInformation: [
      'Spotted in various leaked maps'
    ],
    sourceIds: ['the-verge'],
    lastUpdated: '2024-04-10T00:00:00Z',
    isSeedData: true,
    locationType: 'City',
    region: 'Leonida'
  }
]
