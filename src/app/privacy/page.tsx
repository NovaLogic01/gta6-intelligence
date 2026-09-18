import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | GTA VI Intelligence Platform',
  description: 'Privacy Policy for the GTA VI Intelligence Platform.',
};

export default function PrivacyPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Privacy Policy</h1>
        <p className="text-xl text-text-secondary font-light">
          Last updated: September 18, 2026
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">1. Introduction</h2>
          <p>
            Welcome to the GTA VI Intelligence Platform (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and protect information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">2. Information Collected</h2>
          <p>
            Currently, we do not require users to create accounts, and we do not collect personal identifying information (such as names or addresses) through voluntary submission forms. If you contact us via email, we will collect your email address and any information you choose to provide to respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">3. Automatically Collected Technical Information</h2>
          <p>
            Our hosting provider (Netlify) may automatically collect standard connection information, such as your IP address, browser type, operating system, and access times, to deliver the website and maintain infrastructure security.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">4. Cookies and Local Storage</h2>
          <p>
            This website currently operates without setting non-essential cookies. We do not use localized tracking mechanisms for user profiling. If features requiring persistent settings are added in the future, standard browser local storage may be utilized, and this policy will be updated accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">5. Analytics</h2>
          <p>
            We do not currently employ third-party behavioral analytics services (such as Google Analytics). Technical aggregate bandwidth and visitor metrics are processed at the infrastructure layer (via our host) strictly for operational performance.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">6. Advertising</h2>
          <p>
            The platform currently operates without advertising. In the event that advertising (such as Google AdSense) is activated, this policy will be updated to reflect the use of advertising cookies and third-party data collection practices, and appropriate consent mechanisms will be implemented for users in applicable jurisdictions (including the EEA, UK, and Switzerland).
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">7. Third-Party Services & External Links</h2>
          <p>
            Our website contains links to external news sources and reference materials. We do not control these third-party websites and are not responsible for their privacy practices. We encourage you to read the privacy notices of any website you visit.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">8. Data Retention & Security</h2>
          <p>
            We retain communication records (such as support emails) only as long as necessary to address inquiries. We use standard encryption (HTTPS) to protect data transmitted between your browser and our servers.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">9. Children&apos;s Privacy</h2>
          <p>
            Our platform is intended for a general audience and is strictly informational. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">10. User Rights and Contact</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data (including access, deletion, and correction). To exercise these rights or to ask questions regarding this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:studiolaurent15@gmail.com" className="text-accent-blue hover:underline">studiolaurent15@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">11. Policy Updates</h2>
          <p>
            We may update this Privacy Policy periodically. We will update the &quot;Last updated&quot; date at the top of this document whenever material changes occur.
          </p>
        </section>
      </div>
    </main>
  );
}
