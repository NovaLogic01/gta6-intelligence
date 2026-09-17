import fs from 'fs';
import path from 'path';
import { sources } from '../../src/intelligence/sources';
import { fetchAndParse } from './fetch';
import { normalizeItem } from './normalize';
import { determineRelevance } from './relevance';
import { isDuplicate } from './deduplicate';
import { classifyStatus } from './classify';
import { loadArticles, saveArticles } from './update';
import { validateArticles } from './validate';
import { Article } from '../../src/types';

const isDryRun = process.argv.includes('--dry-run');

async function main() {
  console.log(`[INTELLIGENCE] Run started${isDryRun ? ' (DRY RUN)' : ''}`);

  const articles = loadArticles();
  const initialCount = articles.length;

  let sourcesAttempted = 0;
  let sourcesSucceeded = 0;
  let sourcesFailed = 0;
  let itemsFetched = 0;
  let itemsRelevant = 0;
  let itemsRejected = 0;
  let duplicatesRemoved = 0;
  let itemsAdded = 0;

  const newArticles: Article[] = [];

  for (const source of sources) {
    if (!source.enabled) continue;
    
    sourcesAttempted++;
    console.log(`\n[SOURCE] ${source.name} — fetching`);
    
    try {
      const rawItems = await fetchAndParse(source);
      console.log(`[PARSE] ${rawItems.length} items found`);
      itemsFetched += rawItems.length;
      
      sourcesSucceeded++;

      for (const raw of rawItems) {
        const normalized = normalizeItem(raw, source);
        const relevance = determineRelevance(normalized.title, normalized.summary);
        
        if (relevance === 'IRRELEVANT') {
          itemsRejected++;
          if (isDryRun) console.log(`  [REJECTED] ${normalized.title} (Irrelevant)`);
          continue;
        }

        itemsRelevant++;

        if (isDuplicate(normalized, articles) || isDuplicate(normalized, newArticles)) {
          duplicatesRemoved++;
          if (isDryRun) console.log(`  [DEDUPE] ${normalized.title} (Duplicate)`);
          continue;
        }

        const status = classifyStatus(normalized.title, source);
        
        const finalArticle: Article = {
          id: normalized.id,
          slug: normalized.slug,
          title: normalized.title,
          summary: normalized.summary,
          content: '',
          category: 'GENERAL',
          status: status,
          sourceId: normalized.sourceId,
          sourceUrl: normalized.sourceUrl,
          publishedAt: normalized.publishedAt,
          updatedAt: new Date().toISOString(),
          isSeedData: false,
          tags: []
        };

        newArticles.push(finalArticle);
        itemsAdded++;
        if (isDryRun) console.log(`  [ADDED] ${finalArticle.title} (${status})`);
      }
    } catch (e) {
      sourcesFailed++;
      console.error(`[ERROR] Failed to process source ${source.name}:`, e);
    }
  }

  console.log(`\n[UPDATE] ${itemsAdded} new records`);

  if (itemsAdded > 0 && !isDryRun) {
    const combinedArticles = [...newArticles, ...articles];
    
    console.log(`[VALIDATE] Validating new dataset...`);
    const isValid = validateArticles(combinedArticles);
    
    if (isValid) {
      console.log(`[VALIDATE] PASS`);
      saveArticles(combinedArticles);
      console.log(`[WRITE] Successfully updated src/data/articles.ts`);
    } else {
      console.error(`[VALIDATE] FAIL - Aborting write`);
      process.exit(1);
    }
  } else if (!isDryRun) {
    console.log(`[UPDATE] No new records to write.`);
  }

  // Create log entry
  const logEntry = {
    runId: `run-${Date.now()}`,
    startedAt: new Date().toISOString(),
    isDryRun,
    sourcesAttempted,
    sourcesSucceeded,
    sourcesFailed,
    itemsFetched,
    itemsRelevant,
    itemsRejected,
    itemsAdded,
    duplicatesRemoved
  };

  if (!isDryRun) {
    const logDir = path.join(process.cwd(), 'data', 'intelligence');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    
    const logFile = path.join(logDir, 'ingestion-log.json');
    let logs = [];
    if (fs.existsSync(logFile)) {
      logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    }
    logs.unshift(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(logs.slice(0, 100), null, 2), 'utf8');
  }

  console.log(`\n[SUMMARY]`);
  console.log(`Sources configured: ${sources.filter(s => s.enabled).length}`);
  console.log(`Sources successfully tested: ${sourcesSucceeded}`);
  console.log(`Items fetched: ${itemsFetched}`);
  console.log(`Relevant items: ${itemsRelevant}`);
  console.log(`Duplicates removed: ${duplicatesRemoved}`);
  console.log(`New articles: ${itemsAdded}`);
  console.log(`Rejected items: ${itemsRejected}`);
}

main().catch(console.error);
