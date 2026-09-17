import { Character } from '@/types'

export const characters: Character[] = [
  {
    id: 'char-lucia',
    slug: 'lucia',
    name: 'Lucia',
    description: 'One of the two main protagonists of GTA VI. Seen in the first official trailer wearing a prison uniform, and subsequently carrying out robberies with a male partner.',
    status: 'OFFICIALLY_SHOWN',
    category: 'character',
    knownInformation: [
      'Seen in a prison setting under the supervision of an official',
      'In a romantic and criminal partnership with a male co-protagonist'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    role: 'Protagonist',
    firstAppearance: 'Trailer 1'
  },
  {
    id: 'char-jason',
    slug: 'jason',
    name: 'Jason',
    description: 'The male protagonist of GTA VI. While his name is widely reported in secondary leaks, Rockstar has only officially shown him visually alongside Lucia.',
    status: 'REPORTED',
    category: 'character',
    knownInformation: [
      'Partner in crime to Lucia',
      'Visual appearance officially confirmed in Trailer 1',
      'Name widely reported but technically unconfirmed by Rockstar directly'
    ],
    sourceIds: ['gamer-guides', 'rockstar-newswire'],
    lastUpdated: '2023-12-05T00:00:00Z',
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    role: 'Protagonist',
    firstAppearance: 'Trailer 1'
  }
]
