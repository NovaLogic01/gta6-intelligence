import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy | GTA VI Intelligence Platform',
  description: 'Our standards for information classification, verification, and accuracy.',
};

export default function EditorialPolicyPage() {
  return (
    <main className="container-article mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-white">Editorial Policy</h1>

      <section className="section-spacing mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Information Classification</h2>
        <p className="text-body text-text-secondary mb-4 leading-relaxed">
          Every entry in our database is tagged with a classification status. These tags are absolute and determine how the information is presented:
        </p>
        <ul className="list-none space-y-4 text-body text-text-secondary ml-2">
          <li className="flex flex-col">
            <span className="font-bold text-white mb-1">CONFIRMED</span>
            <span>Explicitly stated by the developer (Rockstar Games) or publisher (Take-Two Interactive) in press releases, financial reports, or official communications.</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-white mb-1">OFFICIALLY_SHOWN</span>
            <span>Visually present in official trailers, screenshots, or artwork released by Rockstar Games.</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-white mb-1">REPORTED</span>
            <span>Information provided by mainstream journalistic outlets with an established history of verified internal sources.</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-white mb-1">RUMOR</span>
            <span>Unverified claims circulating within the community. We only archive rumors that have gained significant traction or come from historically accurate community members.</span>
          </li>
          <li className="flex flex-col">
            <span className="font-bold text-white mb-1">SPECULATION</span>
            <span>Theories derived from analyzing existing confirmed or shown materials.</span>
          </li>
        </ul>
      </section>

      <section className="section-spacing mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Source Verification</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          Before adding non-official information to the platform, we trace the claim back to its primary origin. We do not aggregate information from secondary aggregators without verifying the original source. If a primary source cannot be identified, the information is discarded or strictly labeled as an unverified rumor.
        </p>
      </section>

      <section className="section-spacing mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Correction Policy</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          We are committed to correcting factual errors swiftly and transparently. When an error is identified, the entry is updated, and significant changes are logged on our Corrections page. We do not stealth-edit major factual inaccuracies.
        </p>
      </section>

      <section className="section-spacing mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Attribution Standards</h2>
        <p className="text-body text-text-secondary leading-relaxed">
          Credit is always given where it is due. We mandate clear attribution to the individuals, journalists, or community members who first discover or report a piece of intelligence. Direct links to the original discovery are provided whenever possible.
        </p>
      </section>

      <section className="section-spacing mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-white">Independence & No Fabrication</h2>
        <p className="text-body text-text-secondary leading-relaxed mb-4">
          The GTA VI Intelligence Platform is strictly independent. We do not accept payment in exchange for altering our classifications or archiving specific rumors.
        </p>
        <p className="text-body text-text-secondary leading-relaxed">
          Furthermore, we operate under a strict no-fabrication policy. We do not create rumors, invent details, or exaggerate claims for engagement. Our role is archival and analytical, not sensationalist.
        </p>
      </section>
    </main>
  );
}
