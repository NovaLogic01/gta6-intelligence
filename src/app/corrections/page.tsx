import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corrections | GTA VI Intelligence Platform',
  description: 'Our log of corrections and commitment to accuracy.',
};

export default function CorrectionsPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Corrections Log</h1>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Commitment to Accuracy</h2>
        <p className="text-body text-text-secondary leading-relaxed mb-4">
          The GTA VI Intelligence Platform strives for absolute accuracy in documenting the development and announcements of Grand Theft Auto VI. However, given the massive volume of information and the nature of early reporting, mistakes can happen.
        </p>
        <p className="text-body text-text-secondary leading-relaxed">
          When we make a factual error, we commit to correcting it promptly and transparently. Significant corrections that alter the understanding of a major intelligence entry will be logged on this page.
        </p>
      </section>

      <section className="section-spacing mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-white">Reporting Errors</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          If you identify an inaccuracy, misattribution, or a broken link, please let us know. You can report errors by visiting our <Link href="/contact" className="text-blue-400 hover:underline">Contact page</Link>. Please include the URL of the page containing the error and any evidence supporting the correction.
        </p>
      </section>

      <section className="section-spacing mt-16 pt-8 border-t border-gray-800">
        <h2 className="text-2xl font-semibold mb-6 text-white">Correction History</h2>
        
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
          <p className="text-body text-gray-400 italic">
            No major corrections have been issued yet. The log is currently empty.
          </p>
        </div>
      </section>
    </main>
  );
}
