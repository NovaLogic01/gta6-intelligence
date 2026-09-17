import { RawItem } from './fetch';
import { IntelligenceSource } from '../../src/intelligence/sources';
import { ArticleCategory } from '../../src/types';

export function normalizeItem(raw: RawItem, source: IntelligenceSource) {
  // Safe slug generation
  const slug = raw.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  return {
    id: `art-${slug}-${Date.now().toString(36)}`, // Temporary ID, might be deduped
    slug,
    title: raw.title.trim(),
    summary: raw.contentSnippet ? raw.contentSnippet.substring(0, 300).trim() + (raw.contentSnippet.length > 300 ? '...' : '') : '',
    content: '', // Do not pull full bodies due to copyright/space
    category: 'GENERAL' as ArticleCategory, // Will be refined by relevance/classifier
    sourceId: source.id,
    sourceUrl: raw.link,
    publishedAt: new Date(raw.pubDate).toISOString(),
    isSeedData: false,
    _guid: raw.guid, // Internal use
    _rawTitle: raw.title
  };
}
