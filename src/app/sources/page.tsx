import { Metadata } from 'next';
import { sources } from '@/data/sources';

export const metadata: Metadata = {
  title: 'Sources | GTA VI Intelligence Platform',
  description: 'The sources and references used to compile the GTA VI Intelligence Platform.',
};

export default function SourcesPage() {
  const groupedSources = sources.reduce((acc, source) => {
    if (!acc[source.type]) {
      acc[source.type] = [];
    }
    acc[source.type].push(source);
    return acc;
  }, {} as Record<string, typeof sources>);

  const typeOrder = ['OFFICIAL', 'NEWS', 'REPORTING', 'COMMUNITY'];

  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-white">Intelligence Sources</h1>
      
      <div className="mb-12">
        <p className="text-body text-text-secondary leading-relaxed">
          The integrity of the GTA VI Intelligence Platform relies on the careful categorization and evaluation of our sources. We organize sources into distinct tiers to help users understand the origin and reliability of the information presented.
        </p>
      </div>

      <div className="space-y-12">
        {typeOrder.map((type) => {
          const typeSources = groupedSources[type];
          if (!typeSources || typeSources.length === 0) return null;

          return (
            <section key={type} className="section-spacing">
              <h2 className="text-2xl font-semibold mb-6 text-white capitalize border-b border-gray-800 pb-2">
                {type.toLowerCase()}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {typeSources
                  .sort((a, b) => (b.priority || 0) - (a.priority || 0))
                  .map((source) => (
                    <a
                      key={source.id || source.name}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors"
                    >
                      <h3 className="font-medium text-white mb-1">{source.name}</h3>
                      <p className="text-sm text-gray-400 break-all">{source.url}</p>
                      {source.priority && (
                        <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                          Priority: {source.priority}
                        </span>
                      )}
                    </a>
                  ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
