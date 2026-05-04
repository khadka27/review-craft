import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - ReviewCraft",
  description:
    "Cookie policy for ReviewCraft explaining how cookies and local storage may be used for analytics and functionality.",
  openGraph: {
    title: "Cookie Policy - ReviewCraft",
    description: "Read how ReviewCraft uses cookies and similar technologies.",
    url: "/cookie-policy",
    type: "website",
  },
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: {new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-6 text-gray-700 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                1. What Are Cookies
              </h2>
              <p>
                Cookies are small text files stored on your device to help
                websites remember preferences and usage patterns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                2. How We Use Cookies
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Essential functionality for site behavior and routing.</li>
                <li>Performance and analytics measurement.</li>
                <li>Preference storage for improved usability.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                3. Similar Technologies
              </h2>
              <p>
                We may use local storage and browser storage to retain
                lightweight preference data relevant to your current session.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                4. Managing Cookies
              </h2>
              <p>
                You can manage or disable cookies through your browser settings.
                Some site features may be limited if cookies are disabled.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
