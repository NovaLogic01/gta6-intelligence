import { allEntities } from '../../src/lib/graph'
import { articles } from '../../src/data/articles'

function runSEOAudit() {
  console.log('Running SEO Audit...')
  let errors = 0
  let warnings = 0

  // Check unique titles/slugs across articles
  const articleSlugs = new Set()
  for (const article of articles) {
    if (articleSlugs.has(article.slug)) {
      console.error(`[SEO ERROR] Duplicate article slug found: ${article.slug}`)
      errors++
    }
    articleSlugs.add(article.slug)
    
    if (!article.title || article.title.length < 10) {
      console.warn(`[SEO WARNING] Thin title on article: ${article.slug}`)
      warnings++
    }
    
    if (!article.summary || article.summary.length < 50) {
      console.warn(`[SEO WARNING] Thin summary/meta description on article: ${article.slug}`)
      warnings++
    }
  }

  // Check entities
  const entitySlugs = new Set()
  for (const entity of allEntities) {
    if (entitySlugs.has(entity.slug)) {
      console.error(`[SEO ERROR] Duplicate entity slug found: ${entity.slug}`)
      errors++
    }
    entitySlugs.add(entity.slug)
    
    if (!entity.description || entity.description.length < 50) {
      console.warn(`[SEO WARNING] Thin description on entity: ${entity.name}`)
      warnings++
    }
  }

  // Output
  console.log(`\nAudit Complete: ${errors} errors, ${warnings} warnings.`)
  if (errors > 0) {
    process.exit(1)
  }
}

runSEOAudit()
