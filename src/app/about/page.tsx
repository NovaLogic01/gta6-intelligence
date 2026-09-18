import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | GTA VI Intelligence Platform',
  description: 'An independent intelligence and information platform focused on organizing publicly available GTA VI information.',
};

export default function AboutPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">About GTA6 Intel</h1>
        <p className="text-xl text-text-secondary font-light">
          An independent intelligence and information platform focused on organizing publicly available GTA VI information.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">The Platform</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
          GTA6 Intel is an independent intelligence and information platform. Our purpose is to cut through speculation by providing a source-aware, structured repository of public information surrounding the next generation of Grand Theft Auto.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Distinctive Systems</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
          The platform operates on several core systems designed to verify and organize information:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-body text-text-secondary ml-4">
          <li><strong className="text-text-primary">Structured Database:</strong> Entities (characters, locations, vehicles) are mapped comprehensively.</li>
          <li><strong className="text-text-primary">Knowledge Graph:</strong> Every data point links intrinsically to related entities and events.</li>
          <li><strong className="text-text-primary">Timeline:</strong> A chronological tracking system for historical development milestones.</li>
          <li><strong className="text-text-primary">Intelligence Classification:</strong> Strict confidence scoring (Confirmed, Reported, Rumored).</li>
          <li><strong className="text-text-primary">Claim Verification:</strong> Direct cross-referencing against primary sources.</li>
          <li><strong className="text-text-primary">Search & Discovery:</strong> High-performance text and graph-based exploration.</li>
          <li><strong className="text-text-primary">Source-Aware Reporting:</strong> Articles are bound to verified original sources.</li>
          <li><strong className="text-text-primary">Automated Monitoring:</strong> Real-time tracking of official RSS endpoints and public signals.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-6 pb-2 border-b border-border-primary/30">Independence</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-6 font-light">
          This project is an independent platform. We are not official, licensed, partnered, or authorized by Rockstar Games or Take-Two Interactive.
        </p>
      </section>
    </main>
  );
}
