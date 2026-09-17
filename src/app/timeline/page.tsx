import { timelineEvents } from '@/data/timeline';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata = {
  title: 'Timeline | GTA VI Platform',
  description: 'Chronological history of GTA VI development, leaks, and official announcements.',
};

export default function TimelinePage() {
  return (
    <div className="container-wide section-spacing">
      <div className="mb-16 border-b border-border-primary pb-8">
        <h1 className="text-heading mb-4">
          Development <span className="font-light text-text-secondary">Timeline</span>
        </h1>
        <p className="text-body max-w-2xl font-light">
          A chronologically sorted log of development milestones, intelligence leaks, and confirmed studio announcements.
        </p>
      </div>

      <div className="relative border-l border-border-primary/50 ml-4 md:ml-8 space-y-12 pb-12">
        {timelineEvents.map((event, index) => {
          const date = new Date(event.date);
          return (
            <div key={event.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border-primary group-hover:bg-accent-blue transition-colors ring-4 ring-bg-primary"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
                <time className="text-accent-blue font-mono text-sm font-medium tracking-widest shrink-0">
                  {date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight">
                  {event.title}
                </h3>
              </div>
              
              <div className="mb-4">
                <StatusBadge status={event.status} />
              </div>
              
              <p className="text-body max-w-3xl">
                {event.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
