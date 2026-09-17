import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GTA VI Intelligence Platform',
  description: 'Privacy policy for the GTA VI Intelligence Platform.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: September 2026</p>

      <div className="space-y-10 text-body text-text-secondary">
        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Data Collection</h2>
          <p className="leading-relaxed mb-4">
            The GTA VI Intelligence Platform believes in data minimization. We do not require user accounts to browse our database. Consequently, we do not collect personal identification information such as names, addresses, or phone numbers.
          </p>
          <p className="leading-relaxed">
            If you contact us via email, we will only retain your email address and communication history for the purpose of responding to your inquiry or addressing your reported correction.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Cookies</h2>
          <p className="leading-relaxed">
            We only use essential cookies necessary for the basic functioning of the website (such as maintaining your theme preferences). We do not use intrusive tracking cookies for advertising or invasive profiling.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Services</h2>
          <p className="leading-relaxed">
            Currently, we do not utilize third-party analytics trackers. If we integrate services such as Google Analytics or similar privacy-friendly alternatives in the future to understand platform usage, this policy will be updated accordingly.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Retention</h2>
          <p className="leading-relaxed">
            Any communication sent to our contact email is retained only as long as necessary to resolve the inquiry. We do not maintain marketing lists or sell contact information to third parties under any circumstances.
          </p>
        </section>

        <section className="section-spacing">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Information</h2>
          <p className="leading-relaxed">
            If you have questions or concerns regarding your privacy while using the GTA VI Intelligence Platform, please reach out to us via our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
