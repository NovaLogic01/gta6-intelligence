import { Article } from '../../src/types';

export function validateArticles(articles: Article[]): boolean {
  if (!Array.isArray(articles)) {
    console.error('[VALIDATE] Data is not an array.');
    return false;
  }

  const slugs = new Set<string>();
  const ids = new Set<string>();

  for (const article of articles) {
    if (!article.id || !article.slug || !article.title || !article.status || !article.category) {
      console.error(`[VALIDATE] Article missing required fields: ${article.title}`);
      return false;
    }

    if (slugs.has(article.slug)) {
      console.error(`[VALIDATE] Duplicate slug found: ${article.slug}`);
      return false;
    }
    slugs.add(article.slug);

    if (ids.has(article.id)) {
      console.error(`[VALIDATE] Duplicate ID found: ${article.id}`);
      return false;
    }
    ids.add(article.id);

    // Validate dates
    if (isNaN(new Date(article.publishedAt).getTime())) {
      console.error(`[VALIDATE] Invalid publishedAt date: ${article.publishedAt}`);
      return false;
    }
  }

  return true;
}
