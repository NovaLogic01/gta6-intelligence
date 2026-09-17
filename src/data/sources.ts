import { Source } from '@/types'

export const sources: Source[] = [
  {
    id: 'rockstar-games',
    name: 'Rockstar Games',
    url: 'https://www.rockstargames.com',
    type: 'OFFICIAL',
    priority: 1,
  },
  {
    id: 'gamer-guides',
    name: 'Gamer Guides',
    url: 'https://www.gamerguides.com',
    type: 'NEWS',
    priority: 2,
  },
  {
    id: 'rockstar-newswire',
    name: 'Rockstar Newswire',
    url: 'https://www.rockstargames.com/newswire',
    type: 'OFFICIAL',
    priority: 1,
  },
  {
    id: 'take-two-interactive',
    name: 'Take-Two Interactive',
    url: 'https://www.take2games.com',
    type: 'OFFICIAL',
    priority: 1,
  },
  {
    id: 'ign',
    name: 'IGN',
    url: 'https://www.ign.com',
    type: 'NEWS',
    priority: 2,
  },
  {
    id: 'bloomberg',
    name: 'Bloomberg',
    url: 'https://www.bloomberg.com',
    type: 'REPORTING',
    priority: 2,
  },
  {
    id: 'kotaku',
    name: 'Kotaku',
    url: 'https://www.kotaku.com',
    type: 'NEWS',
    priority: 3,
  },
  {
    id: 'the-verge',
    name: 'The Verge',
    url: 'https://www.theverge.com',
    type: 'NEWS',
    priority: 3,
  },
  {
    id: 'gamespot',
    name: 'GameSpot',
    url: 'https://www.gamespot.com',
    type: 'NEWS',
    priority: 3,
  },
]

export function getSourceById(id: string): Source | undefined {
  return sources.find(s => s.id === id)
}

export function getSourcesByType(type: Source['type']): Source[] {
  return sources.filter(s => s.type === type)
}
