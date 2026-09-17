import { Vehicle } from '@/types'

export const vehicles: Vehicle[] = [
  {
    id: 'veh-comet-retro',
    slug: 'comet-retro',
    name: 'Pfister Comet Retro Custom',
    description: 'A returning sports car from previous titles, spotted in trailer footage.',
    status: 'OFFICIALLY_SHOWN',
    category: 'vehicle',
    knownInformation: [
      'Spotted driving in Vice City streets in Trailer 1'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    vehicleType: 'Sports Car',
    manufacturer: 'Pfister',
    realWorldInspiration: 'Porsche 911'
  },
  {
    id: 'veh-fanboat',
    slug: 'fanboat',
    name: 'Airboat / Fanboat',
    description: 'A flat-bottomed vessel powered by an aircraft-type propeller, used in the swamp regions.',
    status: 'OFFICIALLY_SHOWN',
    category: 'vehicle',
    knownInformation: [
      'Seen navigating the Everglades-like swamps of Leonida in Trailer 1'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    vehicleType: 'Boat',
    realWorldInspiration: 'Everglades Airboat'
  },
  {
    id: 'veh-tulip',
    slug: 'tulip',
    name: 'Declasse Tulip',
    description: 'A classic muscle car seen in the trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'vehicle',
    knownInformation: [
      'Visible parked and driving in various trailer scenes'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    vehicleType: 'Muscle Car',
    manufacturer: 'Declasse',
    realWorldInspiration: '1972 Chevrolet Chevelle Malibu'
  }
]
