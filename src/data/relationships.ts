import { Relationship } from '@/types'

export const relationships: Relationship[] = [
  // Characters -> Trailers
  {
    id: 'rel-lucia-trailer1',
    fromEntityId: 'char-lucia',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [
      { sourceId: 'rockstar-newswire', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }
    ]
  },
  {
    id: 'rel-jason-trailer1',
    fromEntityId: 'char-jason',
    toEntityId: 'trailer-1',
    relationshipType: 'APPEARS_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [
      { sourceId: 'rockstar-newswire', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }
    ]
  },
  // Characters -> Characters
  {
    id: 'rel-lucia-jason',
    fromEntityId: 'char-lucia',
    toEntityId: 'char-jason',
    relationshipType: 'CONNECTED_TO',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [
      { sourceId: 'rockstar-newswire', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0' }
    ]
  },
  // Places -> Locations
  {
    id: 'rel-vicecity-leonida',
    fromEntityId: 'loc-vice-city',
    toEntityId: 'loc-leonida',
    relationshipType: 'LOCATED_IN',
    status: 'CONFIRMED',
    sourceRefs: [
      { sourceId: 'rockstar-newswire', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.rockstargames.com/VI', note: 'Rockstar officially states Vice City is in the state of Leonida' }
    ]
  },
  {
    id: 'rel-kellycounty-leonida',
    fromEntityId: 'loc-kelly-county',
    toEntityId: 'loc-leonida',
    relationshipType: 'LOCATED_IN',
    status: 'OFFICIALLY_SHOWN',
    sourceRefs: [
      { sourceId: 'rockstar-newswire', sourceType: 'OFFICIAL', checkedAt: new Date().toISOString(), url: 'https://www.youtube.com/watch?v=QdBZY2fkU-0', note: 'Highway signs denote Kelly County' }
    ]
  }
];
