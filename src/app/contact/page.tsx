import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | GTA VI Intelligence Platform',
  description: 'Get in touch with the GTA VI Intelligence Platform team.',
};

export default function ContactPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>

      <section className="section-spacing mb-12">
        <p className="text-body text-text-secondary leading-relaxed mb-6">
          We welcome input from the community. Whether you have discovered new information, spotted an error in our database, or simply want to provide feedback, we want to hear from you.
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Direct Email</h2>
          <p className="text-body text-text-secondary mb-2">
            For all general inquiries, corrections, and tips:
          </p>
          <a href="mailto:contact@gta6intel.placeholder.com" className="text-blue-400 hover:underline font-mono">
            contact@gta6intel.placeholder.com
          </a>
        </div>
      </section>

      <section className="section-spacing mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Report Issues</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            If you find a bug on the website, a broken link, or a factual inaccuracy, please email us with the subject line <strong>&ldquo;Issue Report&rdquo;</strong>. Include the exact URL and a brief description of the problem.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Suggest Additions</h2>
          <p className="text-body text-text-secondary leading-relaxed">
            Have you found an obscure piece of officially released media or a credible report we missed? Send us an email with the subject line <strong>&ldquo;Intelligence Tip&rdquo;</strong>. Please include a link to the primary source for verification.
          </p>
        </div>
      </section>

      <section className="section-spacing mt-12 pt-8 border-t border-gray-800">
        <p className="text-sm text-gray-500 italic">
          Please note: The GTA VI Intelligence Platform is an independent fan project. We do not have direct access to Rockstar Games and cannot answer support questions regarding their games, accounts, or services.
        </p>
      </section>
    </main>
  );
}
