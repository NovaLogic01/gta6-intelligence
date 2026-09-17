import { Character } from '@/types'

export const characters: Character[] = [
  {
    id: 'char-lucia',
    slug: 'lucia',
    name: 'Lucia',
    description: 'One of the two main protagonists of GTA VI. She is seen in the first trailer in a prison uniform and later committing crimes with her partner.',
    status: 'OFFICIALLY_SHOWN',
    category: 'character',
    knownInformation: [
      'First female protagonist in the 3D/HD era of GTA',
      'Seen in a prison setting',
      'In a relationship with Jason'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    role: 'Protagonist',
    firstAppearance: 'Trailer 1'
  },
  {
    id: 'char-jason',
    slug: 'jason',
    name: 'Jason',
    description: 'One of the two main protagonists of GTA VI. He is Lucia\'s partner in crime.',
    status: 'OFFICIALLY_SHOWN',
    category: 'character',
    knownInformation: [
      'Partner in crime to Lucia',
      'Seen driving getaway vehicles in trailer footage'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: '2023-12-05T00:00:00Z',
    isSeedData: true,
    role: 'Protagonist',
    firstAppearance: 'Trailer 1'
  },
  {
    id: 'char-stefanie',
    slug: 'stefanie-sample',
    name: '[Sample Data] Stefanie',
    description: 'A rumored character believed to be an associate of Lucia.',
    status: 'RUMOR',
    category: 'character',
    knownInformation: [
      'Rumored to provide mission intel'
    ],
    sourceIds: ['ign'],
    lastUpdated: '2024-01-10T00:00:00Z',
    isSeedData: true,
    role: 'Supporting Character'
  },
  {
    id: 'char-dre',
    slug: 'dre-sample',
    name: '[Sample Data] Dre',
    description: 'A supposed gang leader in the Vice City area.',
    status: 'SPECULATION',
    category: 'character',
    knownInformation: [
      'Mentioned in leaked documents'
    ],
    sourceIds: ['kotaku'],
    lastUpdated: '2024-02-15T00:00:00Z',
    isSeedData: true,
    role: 'Antagonist'
  }
]
