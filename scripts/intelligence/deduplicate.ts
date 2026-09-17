import { Article } from '../../src/types';

export function isDuplicate(newItem: any, existingArticles: Article[]): boolean {
  for (const article of existingArticles) {
    // Exact URL match
    if (article.sourceUrl === newItem.sourceUrl) {
      return true;
    }
    
    // Exact title match
    if (article.title.toLowerCase() === newItem.title.toLowerCase()) {
      return true;
    }

    // Time proximity and high similarity (basic implementation)
    const timeDiffHours = Math.abs(new Date(article.publishedAt).getTime() - new Date(newItem.publishedAt).getTime()) / (1000 * 60 * 60);
    if (timeDiffHours < 48) {
      const slugMatch = article.slug === newItem.slug;
      if (slugMatch) return true;
    }
  }
  return false;
}
