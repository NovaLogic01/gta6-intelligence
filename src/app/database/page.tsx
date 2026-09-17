import Link from 'next/link';
import { databaseCategories as categories } from '@/data/categories';

export const metadata = {
  title: 'Entity Database | GTA VI Platform',
  description: 'Explore structured dossiers on characters, locations, vehicles, and features.',
};

export default function DatabasePage() {
  return (
    <div className="container-wide section-spacing">
      <div className="mb-16 border-b border-border-primary pb-8 relative">
        <h1 className="text-heading mb-4">
          Entity <span className="font-light text-text-secondary">Database</span>
        </h1>
        <p className="text-body max-w-2xl font-light">
          Structured records built from primary intelligence sources. Access dossiers across multiple tracked categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => (
          <Link href={`/database/${category.slug}`} key={category.id} className="dossier-panel p-8 group flex flex-col h-full hover:bg-bg-tertiary/20">
            <div className="flex items-start justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-accent-blue transition-colors uppercase">
                {category.name}
              </h2>
              <span className="text-border-primary group-hover:text-accent-blue transition-colors font-mono">
                [ACCESS]
              </span>
            </div>
            <p className="text-body-sm mb-6 flex-1">
              {category.description}
            </p>
            <div className="text-caption text-text-tertiary pt-4 border-t border-border-primary/30">
              {category.count} RECORDS DETECTED
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
