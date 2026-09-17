import { trailers } from '@/data/trailers';

export const metadata = {
  title: 'Trailers & Media | GTA VI Platform',
  description: 'Archive of official GTA VI trailers and official media.',
};

export default function TrailersPage() {
  return (
    <div className="container-wide section-spacing">
      <div className="mb-16 border-b border-border-primary pb-8">
        <h1 className="text-heading mb-4">
          Media <span className="font-light text-text-secondary">Archive</span>
        </h1>
        <p className="text-body max-w-2xl font-light">
          An archive of officially released trailers and primary visual evidence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {trailers.map(trailer => (
          <div key={trailer.id} className="group">
            <div className="aspect-video bg-bg-secondary/50 border border-border-primary/50 relative mb-6 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-noise opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-caption text-accent-blue tracking-widest">{new Date(trailer.releaseDate).getFullYear()}</span>
              <span className="h-px flex-1 bg-border-primary/50"></span>
            </div>
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mb-3">
              {trailer.name}
            </h2>
            <p className="text-body-sm mb-4 line-clamp-2">
              {trailer.description}
            </p>
            <a 
              href={trailer.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent-blue transition-colors"
            >
              [ACCESS OFFICIAL SOURCE]
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
