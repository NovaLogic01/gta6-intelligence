import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | GTA VI Intelligence Platform',
  description: 'Contact the GTA VI Intelligence Platform team for editorial corrections, business inquiries, or privacy requests.',
};

export default function ContactPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <header className="mb-12 pb-8 border-b border-border-primary/50">
        <h1 className="text-4xl font-bold mb-4 text-text-primary tracking-tighter">Contact</h1>
        <p className="text-xl text-text-secondary font-light">
          Get in touch with the GTA6 Intel team.
        </p>
      </header>

      <div className="editorial-content text-text-secondary font-light space-y-8">
        <section>
          <p>
            Because we are a statically hosted intelligence platform, we route all communications directly through email. Please select the appropriate subject line when contacting us so we can route your request efficiently.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          
          <div className="border border-border-primary/50 p-6 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <h2 className="text-lg font-bold text-text-primary mb-2">Editorial & Corrections</h2>
            <p className="text-sm mb-4">For source corrections, status updates, or intelligence submissions.</p>
            <a href="mailto:studiolaurent15@gmail.com?subject=Editorial Correction" className="text-sm font-mono tracking-widest text-accent-blue hover:underline uppercase">Email Editorial</a>
          </div>

          <div className="border border-border-primary/50 p-6 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <h2 className="text-lg font-bold text-text-primary mb-2">Copyright & IP Concerns</h2>
            <p className="text-sm mb-4">For rights holders to report IP concerns or DMCA notices.</p>
            <a href="mailto:studiolaurent15@gmail.com?subject=Copyright / IP Concern" className="text-sm font-mono tracking-widest text-accent-blue hover:underline uppercase">Email Legal</a>
          </div>

          <div className="border border-border-primary/50 p-6 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <h2 className="text-lg font-bold text-text-primary mb-2">Business Inquiries</h2>
            <p className="text-sm mb-4">For partnerships, sponsorships, or platform infrastructure inquiries.</p>
            <a href="mailto:studiolaurent15@gmail.com?subject=Business Inquiry" className="text-sm font-mono tracking-widest text-accent-blue hover:underline uppercase">Email Business</a>
          </div>

          <div className="border border-border-primary/50 p-6 bg-bg-secondary/20 hover:bg-bg-secondary/40 transition-colors">
            <h2 className="text-lg font-bold text-text-primary mb-2">Privacy Requests</h2>
            <p className="text-sm mb-4">To exercise your data privacy rights regarding your communications with us.</p>
            <a href="mailto:studiolaurent15@gmail.com?subject=Privacy Request" className="text-sm font-mono tracking-widest text-accent-blue hover:underline uppercase">Email Privacy</a>
          </div>

        </section>

        <section className="pt-12">
          <h2 className="text-sm font-mono tracking-widest text-text-tertiary uppercase mb-4">General Inquiries</h2>
          <p>
            For all other matters, please reach out to us at:<br/>
            <a href="mailto:studiolaurent15@gmail.com" className="text-lg font-mono text-accent-blue hover:underline mt-2 inline-block">studiolaurent15@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
