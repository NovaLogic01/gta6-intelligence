import { allEntities } from '../../src/lib/graph'
import { articles } from '../../src/data/articles'

function runGEOAudit() {
  console.log('Running GEO (Generative Engine Optimization) Readiness Audit...')
  let errors = 0
  
  // GEO content validation: Check for clear source attribution and entity context
  for (const entity of allEntities) {
    if (entity.knownInformation.length > 0 && !entity.category) {
      console.error(`[GEO ERROR] Entity ${entity.name} has information but no category context.`)
      errors++
    }
  }

  for (const article of articles) {
    if (!article.sourceId) {
      console.error(`[GEO ERROR] Article ${article.slug} lacks a source. Generative engines require clear evidence chains.`)
      errors++
    }
    if (!article.status) {
      console.error(`[GEO ERROR] Article ${article.slug} lacks status classification.`)
      errors++
    }
  }

  console.log(`\nGEO Audit Complete: ${errors} structure gaps found.`)
  if (errors > 0) {
    process.exit(1)
  }
}

runGEOAudit()
