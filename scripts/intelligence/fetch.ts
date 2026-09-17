import Parser from 'rss-parser';
import { IntelligenceSource } from '../../src/intelligence/sources';

const parser = new Parser({
  timeout: 10000,
  customFields: {
    item: ['media:content', 'media:thumbnail']
  }
});

export interface RawItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  guid: string;
  sourceId: string;
}

export async function fetchAndParse(source: IntelligenceSource): Promise<RawItem[]> {
  if (source.parserType === 'CUSTOM_ROCKSTAR') {
    console.log(`[FETCH] Skipping ${source.name} (Custom parser not yet implemented)`);
    return [];
  }

  if (!source.feedUrl) {
    console.log(`[FETCH] No feed URL for ${source.name}`);
    return [];
  }

  try {
    console.log(`[FETCH] Fetching ${source.name} from ${source.feedUrl}`);
    const feed = await parser.parseURL(source.feedUrl);
    
    return feed.items.map(item => ({
      title: item.title || 'Untitled',
      link: item.link || source.url,
      pubDate: item.isoDate || item.pubDate || new Date().toISOString(),
      contentSnippet: item.contentSnippet || item.summary || '',
      guid: item.guid || (item as any).id || item.link || String(Math.random()),
      sourceId: source.id
    }));
  } catch (error) {
    console.error(`[FETCH] Failed to fetch ${source.name}:`, error instanceof Error ? error.message : error);
    return [];
  }
}
