import { articles } from '@/data/articles';
import { ArticleCard } from '@/components/ui/ArticleCard';

export const metadata = {
  title: 'News & Intelligence | GTA VI Platform',
  description: 'The latest confirmed information, verified reports, and tracked intelligence regarding Grand Theft Auto VI.',
};

export default function NewsPage() {
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="container-wide section-spacing">
      <div className="mb-16 border-b border-border-primary pb-8 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none"></div>
        <h1 className="text-heading mb-4">
          Latest <span className="font-light text-text-secondary">Intelligence</span>
        </h1>
        <p className="text-body max-w-2xl font-light">
          A chronologically sorted feed of intercepted data, official announcements, and verified secondary reporting.
        </p>
      </div>

      <div className="space-y-2">
        {sortedArticles.map(article => (
          <ArticleCard key={article.id} article={article} layout="row" />
        ))}
      </div>
    </div>
  );
}
