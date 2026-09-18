import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | GTA VI Intelligence Platform',
  description: 'Terms of Service for the GTA VI Intelligence Platform.',
};

export default function TermsPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Terms of Service</h1>
        <p className="text-xl text-text-secondary font-light">
          Last updated: September 18, 2026
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the GTA VI Intelligence Platform (&quot;the Website&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">2. Independent Platform Status</h2>
          <p>
            The GTA VI Intelligence Platform is an independent, unofficial informational resource. We are not affiliated with, endorsed by, sponsored by, or officially connected to Rockstar Games, Take-Two Interactive, or any of their subsidiaries. All trademarks, registered trademarks, and copyrighted materials are the property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">3. Informational Nature</h2>
          <p>
            The content provided on this Website is for general informational and reference purposes only. While we strive to categorize information accurately (e.g., Confirmed, Reported, Rumor), we make no warranties about the completeness, reliability, or accuracy of this information. Any action you take upon the information on this Website is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">4. Acceptable Use</h2>
          <p>
            You agree not to use the Website in any way that causes, or may cause, damage to the Website or impairment of the availability or accessibility of the Website. You must not use the Website for any unlawful, illegal, fraudulent, or harmful purpose or activity.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">5. Intellectual Property</h2>
          <p>
            The original editorial content, structural organization, design, and knowledge graph architecture of this Website are the property of the GTA VI Intelligence Platform. We do not claim ownership over official game assets, imagery, or external journalism referenced within the intelligence database. These materials are used for reporting, reference, and informational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">6. External Links</h2>
          <p>
            Our Website contains links to external sites (such as news outlets and official publisher websites). We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">7. Availability</h2>
          <p>
            We strive to ensure the Website is available at all times, but we reserve the right to modify, suspend, or discontinue the Website or any service to which it connects, with or without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">8. Limitations of Liability</h2>
          <p>
            In no event shall the GTA VI Intelligence Platform be liable for any direct, indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to revise these terms at any time as we see fit. By using this Website, you are expected to review these terms on a regular basis.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">10. Contact Method</h2>
          <p>
            For any questions or concerns regarding these Terms of Service, please contact us at:
            <br />
            <a href="mailto:studiolaurent15@gmail.com" className="text-accent-blue hover:underline">studiolaurent15@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
