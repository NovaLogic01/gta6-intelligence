import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | GTA VI Intelligence Platform',
  description: 'Terms and conditions for using the GTA VI Intelligence Platform.',
};

export default function TermsPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Terms of Use</h1>
      
      <div className="space-y-10 text-body text-text-secondary mt-8">
        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="leading-relaxed">
            By accessing and using the GTA VI Intelligence Platform, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Content Disclaimer</h2>
          <p className="leading-relaxed mb-4">
            The content provided on this platform is for informational and archival purposes only. While we strive to classify and verify information accurately based on our Editorial Policy, we cannot guarantee the absolute accuracy, completeness, or timeliness of all information.
          </p>
          <p className="leading-relaxed">
            Information marked as &ldquo;RUMOR&rdquo; or &ldquo;SPECULATION&rdquo; is inherently unverified and may be entirely false. The user assumes all risk associated with relying on such information.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Not Affiliated with Rockstar Games</h2>
          <p className="leading-relaxed">
            The GTA VI Intelligence Platform is an unofficial, independent fan project. We are not endorsed, sponsored, affiliated with, or otherwise authorized by Rockstar Games, Take-Two Interactive, or any of their subsidiaries. All trademarks, service marks, trade names, trade dress, product names, and logos appearing on the site are the property of their respective owners.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
          <p className="leading-relaxed">
            The compilation, organization, and presentation of the intelligence data on this website are the property of the GTA VI Intelligence Platform. Original text and classifications may not be scraped, bulk-downloaded, or redistributed for commercial purposes without explicit permission.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Usage Limitations</h2>
          <p className="leading-relaxed">
            Users agree not to use the platform in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the platform. Automated scraping of the platform without our consent is prohibited.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
          <p className="leading-relaxed">
            In no event shall the GTA VI Intelligence Platform or its contributors be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your access or use of or inability to access or use the platform and its content.
          </p>
        </section>
      </div>
    </main>
  );
}
