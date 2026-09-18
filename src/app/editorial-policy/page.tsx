import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy | GTA VI Intelligence Platform',
  description: 'Our methodology for verifying, sourcing, and classifying Grand Theft Auto VI intelligence.',
};

export default function EditorialPolicyPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Editorial Policy</h1>
        <p className="text-xl text-text-secondary font-light">
          Our methodology for organizing intelligence.
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <p>
            The GTA VI Intelligence Platform is built on a foundation of clarity, factual reporting, and strict source attribution. Our objective is to separate verified facts from community speculation. This editorial policy governs how we ingest, classify, and present information.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">The Status Classification System</h2>
          <p className="mb-4">
            Every entity, event, and article in our database is assigned a strict confidence status. This ensures readers never confuse a rumor with a fact.
          </p>
          <div className="space-y-4">
            <div className="p-4 border border-border-primary/30 bg-bg-secondary/20">
              <strong className="text-accent-blue font-mono text-sm uppercase tracking-widest block mb-1">CONFIRMED</strong>
              <p className="text-sm">Information explicitly stated via an official press release, document, or direct communication from Rockstar Games or Take-Two Interactive.</p>
            </div>
            <div className="p-4 border border-border-primary/30 bg-bg-secondary/20">
              <strong className="text-accent-blue font-mono text-sm uppercase tracking-widest block mb-1">OFFICIALLY_SHOWN</strong>
              <p className="text-sm">Elements visually verified in official trailers, screenshots, or marketing materials, but not explicitly detailed in text by the publisher.</p>
            </div>
            <div className="p-4 border border-border-primary/30 bg-bg-secondary/20">
              <strong className="text-accent-blue font-mono text-sm uppercase tracking-widest block mb-1">REPORTED</strong>
              <p className="text-sm">Information published by highly credible journalistic sources with established track records (e.g., Bloomberg). We consider this likely accurate, but not officially confirmed.</p>
            </div>
            <div className="p-4 border border-border-primary/30 bg-bg-secondary/20">
              <strong className="text-accent-blue font-mono text-sm uppercase tracking-widest block mb-1">RUMOR</strong>
              <p className="text-sm">Information circulating within the community or from unverified sources. We document prominent rumors for historical tracking, but they are clearly marked as unverified.</p>
            </div>
            <div className="p-4 border border-border-primary/30 bg-bg-secondary/20">
              <strong className="text-accent-blue font-mono text-sm uppercase tracking-widest block mb-1">SPECULATION</strong>
              <p className="text-sm">Educated guesses, community theories, or logical deductions based on existing evidence. We do not present speculation as fact.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Source Attribution & Preference</h2>
          <p>
            We prioritize primary sources (Rockstar Games Newswire, Take-Two Investor Relations) above all else. When utilizing secondary sources, we provide explicit attribution and outbound links to the original reporting. We do not scrape or republish other journalists&apos; full articles; we index the core intelligence points and refer users to the original authors for full context.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Fabrication & Integrity</h2>
          <p>
            We strictly prohibit the fabrication of information. We do not invent facts, &quot;leak&quot; fake details to generate traffic, or manipulate our database to trend on search engines. All intelligence must be traceable to a documented source.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Corrections Policy</h2>
          <p>
            If a piece of intelligence is proven incorrect or if a source retracts a report, we will update the relevant entity/article and downgrade its status accordingly. We maintain an open channel for the community and rights holders to report inaccuracies. Please use our Contact page to submit editorial corrections.
          </p>
        </section>
      </div>
    </main>
  );
}
