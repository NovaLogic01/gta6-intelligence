import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | GTA VI Intelligence Platform',
  description: 'Learn about the GTA VI Intelligence Platform and our mission.',
};

export default function AboutPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">About GTA VI Intel</h1>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">The Project</h2>
        <p className="text-body text-text-secondary mb-4 leading-relaxed">
          The GTA VI Intelligence Platform is an independent fan, media, and information repository dedicated to chronicling the development, announcements, and discoveries surrounding Grand Theft Auto VI.
        </p>
        <p className="text-body text-text-secondary leading-relaxed">
          Our goal is to cut through the noise, rumors, and clickbait to provide a streamlined, verifiable, and highly organized database of what is actually known about the game.
        </p>
      </section>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          To organize all known GTA VI intelligence into a single, accessible, and historically accurate platform. We strive to classify information clearly so that readers know exactly whether a detail is an officially confirmed fact, a credible report, or merely a community rumor.
        </p>
      </section>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Information Classification</h2>
        <p className="text-body text-text-secondary mb-4 leading-relaxed">
          We utilize a strict status system to classify every piece of intelligence on this platform:
        </p>
        <ul className="list-disc list-inside text-body text-text-secondary space-y-2 ml-4">
          <li><strong>CONFIRMED:</strong> Officially stated by Rockstar Games or Take-Two Interactive.</li>
          <li><strong>OFFICIALLY_SHOWN:</strong> Seen in official promotional material (e.g., Trailer 1).</li>
          <li><strong>REPORTED:</strong> Information from highly credible journalistic sources with a track record of accuracy.</li>
          <li><strong>RUMOR:</strong> Unverified information circulating in the community without definitive proof.</li>
          <li><strong>SPECULATION:</strong> Educated guesses based on existing evidence.</li>
        </ul>
      </section>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer of Affiliation</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          This project is strictly an independent endeavor. We are in no way affiliated with, authorized, maintained, sponsored, or endorsed by Rockstar Games, Take-Two Interactive, or any of their affiliates or subsidiaries. All game materials, logos, and trademarks are the property of their respective owners.
        </p>
      </section>

      <section className="section-spacing">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact & Contributions</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          We welcome corrections and contributions from the community. If you have spotted an error, or if you have credible information that should be archived, please visit our Contact page or review our Corrections policy.
        </p>
      </section>
    </main>
  );
}
