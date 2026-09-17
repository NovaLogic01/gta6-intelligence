import fs from 'fs'
import path from 'path'

const cwd = process.cwd()
function appendToExportedArray(filePath, itemsString) {
  let content = fs.readFileSync(filePath, 'utf8')
  const closingBracketIndex = content.lastIndexOf(']')
  if (closingBracketIndex !== -1) {
    const isArrayEmpty = content.substring(content.indexOf('['), closingBracketIndex).trim().length === 1;
    const insert = isArrayEmpty ? itemsString : `,\n${itemsString}`
    content = content.slice(0, closingBracketIndex) + insert + '\n]' + content.slice(closingBracketIndex + 1)
    fs.writeFileSync(filePath, content, 'utf8')
  }
}

const newLocations = `
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
`
appendToExportedArray(path.join(cwd, 'src/data/locations.ts'), newLocations)

const newVehicles = `
  {
    id: 'veh-cheetah',
    slug: 'cheetah',
    name: 'Grotti Cheetah',
    description: 'The classic Grotti Cheetah sports car appears heavily detailed in Trailer 1.',
    status: 'OFFICIALLY_SHOWN',
    category: 'vehicle',
    knownInformation: [
      'Seen speeding down the highway and cruising the strip in Vice City.'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    vehicleType: 'Sports Car',
    manufacturer: 'Grotti'
  }
`
appendToExportedArray(path.join(cwd, 'src/data/vehicles.ts'), newVehicles)

const newActivities = `
  {
    id: 'act-high-roller-club',
    slug: 'high-roller-club',
    name: 'High Roller Club',
    description: 'A nightlife or party location/activity shown in the trailer.',
    status: 'OFFICIALLY_SHOWN',
    category: 'activity',
    knownInformation: [
      'Scenes of dense, highly detailed clubbing environments.'
    ],
    sourceIds: ['rockstar-games'],
    lastUpdated: new Date().toISOString(),
    lastVerifiedAt: new Date().toISOString(),
    isSeedData: false,
    activityType: 'Recreation'
  }
`
appendToExportedArray(path.join(cwd, 'src/data/activities.ts'), newActivities)

const newRelationships = `
  {
    id: 'rel-port-gelhorn-leonida',
    fromEntityId: 'loc-port-gelhorn',
    toEntityId: 'loc-leonida',
    relationshipType: 'LOCATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-hamlet-leonida',
    fromEntityId: 'loc-hamlet',
    toEntityId: 'loc-leonida',
    relationshipType: 'LOCATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-ocean-view-vice-city',
    fromEntityId: 'loc-ocean-view',
    toEntityId: 'loc-vice-city',
    relationshipType: 'LOCATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-vci-vice-city',
    fromEntityId: 'loc-vci-airport',
    toEntityId: 'loc-vice-city',
    relationshipType: 'LOCATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-cheetah-trailer1',
    fromEntityId: 'veh-cheetah',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-comet-trailer1',
    fromEntityId: 'veh-comet-retro',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-tulip-trailer1',
    fromEntityId: 'veh-tulip',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-fanboat-trailer1',
    fromEntityId: 'veh-fanboat',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-socialmedia-trailer1',
    fromEntityId: 'feat-social-media',
    toEntityId: 'trailer-1',
    relationshipType: 'DEMONSTRATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-densecrowds-trailer1',
    fromEntityId: 'feat-dense-crowds',
    toEntityId: 'trailer-1',
    relationshipType: 'DEMONSTRATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-dualwield-trailer1',
    fromEntityId: 'gameplay-dual-wielding',
    toEntityId: 'trailer-1',
    relationshipType: 'DEMONSTRATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-mudclub-trailer1',
    fromEntityId: 'act-mud-club',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-streettake-trailer1',
    fromEntityId: 'act-street-takeovers',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  },
  {
    id: 'rel-highroller-trailer1',
    fromEntityId: 'act-high-roller-club',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [{ sourceId: 'rockstar-games', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }]
  }
`
appendToExportedArray(path.join(cwd, 'src/data/relationships.ts'), newRelationships)

console.log('Done appending!')
