import Link from 'next/link';
import { databaseCategories as categories } from '@/data/categories';

export const metadata = {
  title: 'Entity Database | GTA VI Platform',
  description: 'Explore structured dossiers on characters, locations, vehicles, and features.',
};

export default function DatabasePage() {
  return (
    <div className="section-spacing relative bg-bg-primary min-h-[90vh]">
      <div className="absolute inset-0 bg-coordinate-grid opacity-10 pointer-events-none"></div>
      
      <div className="container-wide relative z-10">
        <div className="mb-16 border-b border-border-primary/50 pb-8">
          <div className="flex items-center gap-2 mb-4 text-caption text-text-tertiary">
            <span className="w-1.5 h-1.5 bg-status-confirmed rounded-full animate-pulse"></span>
            <span>SYSTEM DIRECTORY</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            ENTITY <span className="font-light text-text-secondary">DATABANKS</span>
          </h1>
          <p className="text-body max-w-2xl font-light">
            Structured records built from primary intelligence sources. Access categorized dossiers across multiple tracked sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link href={`/database/${category.slug}`} key={category.id} className="group relative p-6 bg-bg-secondary/40 border border-border-primary/50 hover:bg-bg-hover transition-colors flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-border-primary/50 group-hover:bg-accent-blue transition-colors"></div>
              
              <div className="flex items-start justify-between mb-8">
                <h2 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-white transition-colors uppercase pl-3">
                  {category.name}
                </h2>
                <span className="text-[10px] font-mono tracking-widest text-text-tertiary group-hover:text-accent-blue transition-colors uppercase">
                  [ {category.count} RECORDS ]
                </span>
              </div>
              <p className="text-sm font-light text-text-secondary mb-6 flex-1 pl-3">
                {category.description}
              </p>
              <div className="text-[10px] font-mono text-text-tertiary pt-4 border-t border-border-primary/30 pl-3 group-hover:text-accent-blue/70 transition-colors">
                ACCESS DIRECTORY &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
