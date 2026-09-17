import { Gameplay } from '@/types'

export const gameplay: Gameplay[] = [
  {
    id: 'gameplay-dual-wielding',
    slug: 'dual-wielding',
    name: 'Dual Wielding or Paired Actions',
    description: 'Lucia and Jason are seen operating as a duo during store robberies, suggesting potential co-op or advanced character switching mechanics.',
    status: 'OFFICIALLY_SHOWN',
    category: 'gameplay',
    knownInformation: [
      'Trailer 1 shows them holding up a store together',
      'The narrative heavily implies a Bonnie and Clyde dynamic, meaning deep cooperative gameplay'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    gameplayType: 'Mechanics'
  }
]
