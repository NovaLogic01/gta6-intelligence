import { DatabaseCategory } from '@/types'
import { characters } from './characters'
import { locations } from './locations'
import { vehicles } from './vehicles'
import { features } from './features'
import { trailers } from './trailers'
import { gameplay } from './gameplay'
import { activities } from './activities'

export const databaseCategories: DatabaseCategory[] = [
  {
    id: 'characters',
    slug: 'characters',
    name: 'Characters',
    description: 'Known and reported characters in GTA VI',
    icon: '👤',
    count: characters.length,
    href: '/database/characters',
  },
  {
    id: 'locations',
    slug: 'locations',
    name: 'Locations',
    description: 'Confirmed and reported locations in Leonida',
    icon: '📍',
    count: locations.length,
    href: '/database/locations',
  },
  {
    id: 'vehicles',
    slug: 'vehicles',
    name: 'Vehicles',
    description: 'Vehicles spotted in trailers and reports',
    icon: '🚗',
    count: vehicles.length,
    href: '/database/vehicles',
  },
  {
    id: 'features',
    slug: 'features',
    name: 'Features',
    description: 'Gameplay features and mechanics',
    icon: '⚡',
    count: features.length,
    href: '/database/features',
  },
  {
    id: 'gameplay',
    slug: 'gameplay',
    name: 'Gameplay',
    description: 'Gameplay mechanics and systems',
    icon: '🎮',
    count: gameplay.length,
    href: '/database/gameplay',
  },
  {
    id: 'map',
    slug: 'map',
    name: 'Map',
    description: 'Map details and geographic information',
    icon: '🗺️',
    count: 0,
    href: '/map',
  },
  {
    id: 'trailers',
    slug: 'trailers',
    name: 'Trailers',
    description: 'Official trailers and video materials',
    icon: '🎬',
    count: trailers.length,
    href: '/trailers',
  },
  {
    id: 'wildlife',
    slug: 'wildlife',
    name: 'Wildlife',
    description: 'Animals and wildlife spotted in Leonida',
    icon: '🐊',
    count: 0,
    href: '/database/wildlife',
  },
  {
    id: 'activities',
    slug: 'activities',
    name: 'Activities',
    description: 'In-game activities and side content',
    icon: '⚽',
    count: activities.length,
    href: '/database/activities',
  },
]
