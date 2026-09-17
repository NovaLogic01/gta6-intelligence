import { Location } from '@/types'

export const locations: Location[] = [
  {
    id: 'loc-leonida',
    slug: 'leonida',
    name: 'Leonida',
    description: 'The state in which GTA VI is set, heavily inspired by Florida. Rockstar officially confirmed the name in their newswire.',
    status: 'CONFIRMED',
    category: 'location',
    knownInformation: [
      'State containing Vice City and surrounding areas',
      'Features diverse biomes including beaches, cities, and swamps'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'State'
  },
  {
    id: 'loc-vice-city',
    slug: 'vice-city',
    name: 'Vice City',
    description: 'The iconic neon-soaked city returning in GTA VI, based on Miami. Officially confirmed by Rockstar to be part of the Leonida map.',
    status: 'CONFIRMED',
    category: 'location',
    knownInformation: [
      'Major urban center of Leonida',
      'Features a sprawling beach and dense downtown areas',
      'Contains Washington Beach and Ocean Drive equivalents seen in trailer'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'City',
    region: 'Leonida'
  },
  {
    id: 'loc-kelly-county',
    slug: 'kelly-county',
    name: 'Kelly County',
    description: 'A county within the state of Leonida, explicitly named on a highway sign in the first trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'Seen on a highway sign in Trailer 1',
      'Rural or suburban area connected by major highways'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'County',
    region: 'Leonida'
  },
  {
    id: 'loc-vci-airport',
    slug: 'vci-airport',
    name: 'VCI Airport',
    description: 'An airport located in Vice City. The acronym VCI is visible in the trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'Visible in highway signs pointing to VCI Airport'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'Airport',
    region: 'Vice City'
  }
,

  {
    id: 'loc-port-gelhorn',
    slug: 'port-gelhorn',
    name: 'Port Gelhorn',
    description: 'A city or significant area within the state of Leonida, identified by police vehicles and signage.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'Police cruisers are explicitly marked with "Port Gelhorn"',
      'Seen in various street-level shots in Trailer 1'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'City'
  },
  {
    id: 'loc-hamlet',
    slug: 'hamlet',
    name: 'Hamlet',
    description: 'A location in Leonida shown via an overhead shot in the trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'A sign reads "Hamlet" during an overhead shot of a highway and residential area.'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'Area'
  },
  {
    id: 'loc-ocean-view',
    slug: 'ocean-view-hotel',
    name: 'Ocean View Hotel',
    description: 'The iconic Ocean View Hotel returns in the GTA VI rendition of Vice City.',
    status: 'OFFICIALLY_SHOWN',
    category: 'location',
    knownInformation: [
      'A hotel with the Ocean View name is clearly visible along the Vice City beach strip.'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    locationType: 'Landmark'
  }

]
