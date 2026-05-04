import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ReviewCraft",
  description:
    "ReviewCraft privacy policy describing analytics use, data processing practices, and user rights for this educational generator.",
  openGraph: {
    title: "Privacy Policy - ReviewCraft",
    description:
      "Learn how ReviewCraft handles analytics data, generated content, and privacy safeguards.",
    url: "/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-6 text-gray-700 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                1. Overview
              </h2>
              <p>
                ReviewCraft is an educational tool for generating simulated
                review and chat mockups. We minimize data collection and avoid
                storing the text you generate whenever possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                2. Information We Collect
              </h2>
              <p>
                We may collect limited technical information such as browser
                type, device category, basic interaction events, and anonymized
                usage metrics through analytics tooling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                3. How We Use Data
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improve performance, reliability, and user experience.</li>
                <li>Monitor abuse and protect platform security.</li>
                <li>Understand product usage trends in aggregate form.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                4. Generated Content
              </h2>
              <p>
                Generated screenshots and text are intended for educational and
                mockup use. ReviewCraft does not intentionally retain generated
                content as user profiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                5. Third-Party Services
              </h2>
              <p>
                ReviewCraft may rely on third-party services such as analytics
                and avatar/data providers. Their handling of data is governed by
                their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                6. Data Security
              </h2>
              <p>
                We implement reasonable technical safeguards, but no internet
                service can guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                7. Your Rights
              </h2>
              <p>
                Depending on your region, you may have rights to request access,
                correction, or deletion of personal data. Contact us through the
                About page for privacy-related requests.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
