import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy - ReviewCraft",
  description:
    "Acceptable Use Policy for ReviewCraft describing prohibited activities and responsible usage requirements.",
  openGraph: {
    title: "Acceptable Use Policy - ReviewCraft",
    description:
      "Understand what is and is not allowed when using ReviewCraft.",
    url: "/acceptable-use",
    type: "website",
  },
  alternates: {
    canonical: "/acceptable-use",
  },
};

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Acceptable Use Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-6 text-gray-700 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                1. Permitted Prototyping & Educational Use
              </h2>
              <p className="mb-3">ReviewCraft strictly permits the use of its visual component generators for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>UI/UX Prototyping & Wireframing</strong>: Designing layout components for landing pages, web applications, and mobile interfaces in design tools like Figma or Adobe XD.</li>
                <li><strong>Design Presentations & Client Pitch Decks</strong>: Illustrating how user feedback card sections will appear in completed client projects.</li>
                <li><strong>Software QA & Usability Testing</strong>: Evaluating font wrapping, line breaks, and responsive screen breakpoints across desktop and mobile devices.</li>
                <li><strong>Educational & Training Demonstrations</strong>: Classroom instruction, design system benchmarking, and UX research exercises.</li>
                <li><strong>Fictional Demos</strong>: Product walk-through videos and portfolio case studies featuring clearly labeled fictional feedback.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                2. Strictly Prohibited Deceptive Activities
              </h2>
              <p className="mb-3">You are strictly prohibited from using ReviewCraft outputs for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Public Commercial Deception</strong>: Publishing generated reviews or testimonials on live commercial storefronts or business listings to fabricate customer satisfaction or fake genuine buyer activity.</li>
                <li><strong>Fabricating Transactions & Financial Records</strong>: Generating payment receipts, bank confirmations, invoices, or wallet screenshots to fabricate financial transactions, deceive buyers, or submit fake transaction evidence.</li>
                <li><strong>Impersonation & Defamation</strong>: Impersonating real individuals, real buyers, or real businesses without explicit written consent, or generating defamatory, abusive, or harassing content.</li>
                <li><strong>Fake Verification Claims</strong>: Presenting generated visual components as authentic verified buyer records, platform certifications, or official receipts.</li>
                <li><strong>Phishing & Cyber Fraud</strong>: Utilizing mockups for phishing campaigns, social engineering scams, or unauthorized identity misrepresentation.</li>
                <li><strong>Illegal Activity & Infringement</strong>: Any activity that violates federal consumer protection laws (including FTC Endorsement Guides), intellectual property rights, or platform terms of service.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                3. Enforcement & Abuse Mitigation
              </h2>
              <p>
                ReviewCraft embeds permanent simulation disclaimers on exported visual components. We reserve the right to restrict access, block IP ranges, or take legal action against individuals or entities that attempt to remove disclaimers or engage in deceptive commercial activities using our tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                4. Reporting Policy Violations
              </h2>
              <p>
                If you encounter unauthorized or deceptive misuse of ReviewCraft visual outputs, please report the incident to <a href="mailto:support@fakereviewgenerator.com" className="text-indigo-600 underline font-semibold">support@fakereviewgenerator.com</a> or via our <a href="/contact" className="text-indigo-600 underline font-semibold">Contact Page</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
