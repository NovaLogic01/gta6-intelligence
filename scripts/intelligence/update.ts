import fs from 'fs';
import path from 'path';
import { Article } from '../../src/types';
import { articles as existingArticles } from '../../src/data/articles';

const ARTICLES_FILE = path.join(process.cwd(), 'src/data/articles.ts');

export function loadArticles(): Article[] {
  // Use the statically imported articles list
  return [...existingArticles];
}

export function saveArticles(articles: Article[]) {
  // Sort by published date descending
  articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Cap at 200 articles max to prevent infinite growth
  const limitedArticles = articles.slice(0, 200);

  const fileContent = `import { Article } from '../types';

export const articles: Article[] = ${JSON.stringify(limitedArticles, null, 2)};
`;

  // Write to temporary file first for atomic safety
  const tempFile = `${ARTICLES_FILE}.tmp`;
  fs.writeFileSync(tempFile, fileContent, 'utf8');
  fs.renameSync(tempFile, ARTICLES_FILE);
}
