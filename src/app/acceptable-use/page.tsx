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
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                1. Permitted Use
              </h2>
              <p>
                You may use ReviewCraft for educational examples, product
                mockups, UX demonstrations, and lawful presentation materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                2. Prohibited Activities
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fraud, impersonation, or deceptive commercial activity.</li>
                <li>Harassment, defamation, or targeted abuse.</li>
                <li>
                  Misrepresentation of generated content as real-world evidence.
                </li>
                <li>Any activity violating law or third-party rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                3. Enforcement
              </h2>
              <p>
                We reserve the right to restrict access or take other action
                when abuse, fraud, or policy violations are detected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                4. Reporting Abuse
              </h2>
              <p>
                If you discover misuse involving ReviewCraft output, contact us
                through the About page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
