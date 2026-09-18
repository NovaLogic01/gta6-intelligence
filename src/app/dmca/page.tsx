import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DMCA / Copyright Contact | GTA VI Intelligence Platform',
  description: 'Copyright and Intellectual Property reporting guidelines.',
};

export default function DMCAPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Copyright & IP Contact</h1>
        <p className="text-xl text-text-secondary font-light">
          Guidelines for reporting intellectual property concerns.
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <p>
            The GTA VI Intelligence Platform operates as an independent informational database. We respect the intellectual property rights of creators and publishers, and we intend for all media usage on this platform to comply with standard editorial, news-reporting, and archival practices.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Reporting a Concern</h2>
          <p>
            If you are a rights holder (or an authorized representative) and believe that any content published on this platform infringes upon your copyright or trademark, please contact us directly so we can address your concern.
          </p>
          <p className="mt-4">
            While this is not a formal legal venue and specific regional DMCA mechanisms may not automatically govern international hosting, we are committed to promptly reviewing and removing any content that infringes on legitimate IP rights.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">What to Include</h2>
          <p>To help us process your request accurately, please provide the following details in your communication:</p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>A clear description of the copyrighted work or intellectual property that you claim has been infringed.</li>
            <li>The exact URL(s) on our platform where the material is located.</li>
            <li>Your contact information (name, organization, email address).</li>
            <li>A statement establishing your authority to represent the rights holder.</li>
            <li>Any other relevant supporting information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">Contact Information</h2>
          <p>
            Please direct all copyright, trademark, and IP-related communications to our dedicated legal contact email:
            <br /><br />
            <a href="mailto:studiolaurent15@gmail.com?subject=Copyright Concern" className="text-lg font-mono text-accent-blue hover:underline">studiolaurent15@gmail.com</a>
          </p>
        </section>

        <section>
          <p className="text-sm text-text-tertiary">
            For all non-IP related inquiries, please visit our <Link href="/contact" className="hover:underline text-text-secondary">General Contact page</Link>.
          </p>
        </section>
      </div>
    </main>
  );
}
