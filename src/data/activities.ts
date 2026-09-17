import { Activity } from '@/types'

export const activities: Activity[] = [
  {
    id: 'act-mud-club',
    slug: 'mud-club',
    name: 'Thrillbilly Mud Club',
    description: 'Off-road mudding and vehicular events in the rural areas of Leonida.',
    status: 'OFFICIALLY_SHOWN',
    category: 'activity',
    knownInformation: [
      'Trailer 1 prominently shows a mud-covered truck spinning its wheels in a rural gathering',
      'Signage reads Thrillbilly Mud Club'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    activityType: 'Recreation'
  },
  {
    id: 'act-street-takeovers',
    slug: 'street-takeovers',
    name: 'Street Takeovers',
    description: 'Illegal car meets and intersection takeovers.',
    status: 'OFFICIALLY_SHOWN',
    category: 'activity',
    knownInformation: [
      'Trailer 1 features an intersection blocked by cars drifting in circles'
    ],
    sourceIds: ['rockstar-newswire'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    activityType: 'Illegal'
  }
]
