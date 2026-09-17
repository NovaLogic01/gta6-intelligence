import { allEntities, getRelatedEntities, getRelatedArticles } from '../../src/lib/graph'
import { relationships } from '../../src/data/relationships'
import { articles } from '../../src/data/articles'
import { sources } from '../../src/data/sources'

function runGraphTest() {
  console.log('==================================================')
  console.log('GTA VI KNOWLEDGE GRAPH INTEGRITY TEST')
  console.log('==================================================\n')

  let errors = 0
  let orphans = 0
  let duplicates = 0
  let brokenRefs = 0

  const entityIds = new Set(allEntities.map(e => e.id))
  const sourceIds = new Set(sources.map(s => s.id))
  const relationshipIds = new Set()

  console.log(`Entities Loaded: ${allEntities.length}`)
  console.log(`Relationships Loaded: ${relationships.length}`)
  console.log(`Articles Loaded: ${articles.length}`)
  console.log(`Sources Loaded: ${sources.length}\n`)

  // 1. Check relationships
  relationships.forEach(rel => {
    if (relationshipIds.has(rel.id)) {
      console.error(`[DUPLICATE] Relationship ID: ${rel.id}`)
      duplicates++
      errors++
    }
    relationshipIds.add(rel.id)

    if (!entityIds.has(rel.fromEntityId)) {
      console.error(`[BROKEN REF] Relationship ${rel.id} has invalid fromEntityId: ${rel.fromEntityId}`)
      brokenRefs++
      errors++
    }
    if (!entityIds.has(rel.toEntityId)) {
      console.error(`[BROKEN REF] Relationship ${rel.id} has invalid toEntityId: ${rel.toEntityId}`)
      brokenRefs++
      errors++
    }

    rel.sourceRefs.forEach(src => {
      if (!sourceIds.has(src.sourceId)) {
        console.error(`[BROKEN REF] Relationship ${rel.id} has invalid sourceId: ${src.sourceId}`)
        brokenRefs++
        errors++
      }
    })
  })

  // 2. Check entities for orphans and broken refs
  allEntities.forEach(entity => {
    const relatedEnts = getRelatedEntities(entity.id)
    const relatedArts = getRelatedArticles(entity.id)

    if (relatedEnts.length === 0 && relatedArts.length === 0) {
      console.warn(`[ORPHAN] Entity has no connections: ${entity.id} (${entity.name})`)
      orphans++
    }

    entity.sourceIds.forEach(srcId => {
      if (!sourceIds.has(srcId)) {
        console.error(`[BROKEN REF] Entity ${entity.id} has invalid sourceId: ${srcId}`)
        brokenRefs++
        errors++
      }
    })
  })

  // 3. Check articles for broken refs
  articles.forEach(article => {
    if (!sourceIds.has(article.sourceId)) {
      console.error(`[BROKEN REF] Article ${article.id} has invalid sourceId: ${article.sourceId}`)
      brokenRefs++
      errors++
    }
    
    article.relatedEntityIds?.forEach(entId => {
      if (!entityIds.has(entId)) {
        console.error(`[BROKEN REF] Article ${article.id} has invalid relatedEntityId: ${entId}`)
        brokenRefs++
        errors++
      }
    })
  })

  console.log('\n==================================================')
  console.log(`RESULTS:`)
  console.log(`Errors: ${errors}`)
  console.log(`Orphans: ${orphans}`)
  console.log(`Duplicates: ${duplicates}`)
  console.log(`Broken References: ${brokenRefs}`)
  
  if (errors > 0) {
    console.error('\n❌ GRAPH INTEGRITY FAILED')
    process.exit(1)
  } else {
    console.log('\n✅ GRAPH INTEGRITY PASSED')
  }
}

runGraphTest()
