import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | GTA VI Intelligence Platform',
  description: 'Independent platform disclaimer and affiliation status.',
};

export default function DisclaimerPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Disclaimer</h1>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">No Official Affiliation</h2>
          <p className="text-lg text-white font-medium mb-4">
            GTA6 Intel is an independent fan and information platform. We are NOT affiliated with, endorsed by, sponsored by, or officially connected to Rockstar Games, Take-Two Interactive, or any of their subsidiaries.
          </p>
          <p>
            Grand Theft Auto, GTA, GTA VI, Rockstar Games, and the Rockstar Games logo are trademarks and/or registered trademarks of Take-Two Interactive Software, Inc.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Editorial Approach & Fair Use</h2>
          <p>
            The purpose of this platform is informational and historical archiving. Our editorial approach consists of:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Original writing and factual reporting</li>
            <li>Source attribution and linking to original source material</li>
            <li>Original interface and data organization structures</li>
            <li>Using media strictly where there is an appropriate legal or editorial usage basis</li>
            <li>Respect for intellectual property rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Intellectual Property Contact</h2>
          <p>
            We take intellectual property rights seriously. If you represent a rights holder and believe that any content on this site infringes upon your copyright or trademark rights, please review our <Link href="/dmca" className="text-accent-blue hover:underline">DMCA / Copyright Contact procedure</Link> or contact us directly at <a href="mailto:studiolaurent15@gmail.com" className="text-accent-blue hover:underline">studiolaurent15@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
