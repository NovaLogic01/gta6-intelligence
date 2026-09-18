import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sources & Ingestion | GTA VI Intelligence Platform',
  description: 'How we track, verify, and document intelligence sources.',
};

export default function SourcesPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Sources</h1>
        <p className="text-xl text-text-secondary font-light">
          Understanding our intelligence origins and ingestion pipelines.
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <p>
            The accuracy of the GTA VI Intelligence Platform depends entirely on the quality of its sources. We categorize our sources into three strict tiers to govern how data is weighted within our knowledge graph.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Official / Primary Sources</h2>
          <p>
            Primary sources represent absolute confirmation. Intelligence derived from these sources bypasses secondary verification and is immediately marked as <strong>CONFIRMED</strong> or <strong>OFFICIALLY_SHOWN</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Rockstar Games Newswire</li>
            <li>Take-Two Interactive SEC Filings & Investor Calls</li>
            <li>Official Rockstar Games Social Media Channels</li>
            <li>Official Press Releases</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Verified Secondary Sources</h2>
          <p>
            Secondary sources are established journalistic entities with a proven track record of insider reporting. Information from these sources is logged as <strong>REPORTED</strong>. It is treated as highly credible but remains distinct from official confirmation.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Bloomberg (Jason Schreier)</li>
            <li>IGN</li>
            <li>Established gaming industry reporters</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Automated Ingestion & Validation</h2>
          <p>
            To maintain a real-time intelligence database, we utilize automated ingestion pipelines that monitor verified RSS feeds and public signals. 
          </p>
          <p className="mt-4">
            <strong>Important Note:</strong> Automated ingestion does not mean automatic publishing of unverified facts. All incoming data passes through a validation layer. If an unofficial source publishes a rumor, our system classifies it as <strong>RUMOR</strong>, not fact. We do not currently have a direct, private backend integration with Rockstar&apos;s internal systems; our automation relies strictly on publicly accessible, verified endpoints and standard web protocols.
          </p>
        </section>
      </div>
    </main>
  );
}
