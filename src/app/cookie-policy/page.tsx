import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Fake Review Generator",
  description:
    "Cookie Policy for Fake Review Generator explaining how cookies and similar tracking technologies are used.",
  openGraph: {
    title: "Cookie Policy - Fake Review Generator",
    description: "Read how Fake Review Generator uses cookies and similar technologies.",
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
          <p className="text-lg text-gray-600">Last updated: 06/14/2026</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-8 text-gray-700 leading-7">
            <p className="text-lg">
              Cookies are small text files placed on your device when you visit a
              website. They are widely used to make websites work efficiently and
              provide information to the site owners.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                How We Use Cookies
              </h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies for the following
                purposes:
              </p>
              <ul className="space-y-4">
                <li>
                  <strong>Essential cookies:</strong> Necessary for the Site to
                  function (e.g., session cookies that remember your cookie consent
                  preference). These do not gather information about you and cannot
                  be switched off in our system.
                </li>
                <li>
                  <strong>Advertising cookies:</strong> We use Google AdSense to
                  display advertisements. Google uses the DoubleClick cookie and
                  other identifiers to serve personalised ads based on your previous
                  visits to our Site and other websites. This may involve profiling.
                  Google may also use cookies to limit the number of times you see
                  an ad and measure ad effectiveness.
                </li>
                <li>
                  <strong>Analytics cookies:</strong> We may use Google Analytics
                  (which sets cookies) to collect aggregated, anonymised data about
                  Site traffic and user interactions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Third-Party Cookies
              </h2>
              <p>
                Our advertising partners, primarily Google, may set their own
                cookies through our Site. We do not control these cookies. For
                detailed information on how Google uses data, visit{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google’s Privacy & Terms
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Your Choices
              </h2>
              <p className="mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-4">
                <li>
                  <strong>Cookie Consent Banner:</strong> When you first visit our
                  Site, a banner allows you to accept or reject non-essential
                  (advertising and analytics) cookies. You can change your
                  preferences at any time by clicking the “Cookie Settings” link in
                  the footer.
                </li>
                <li>
                  <strong>Browser Settings:</strong> Most browsers allow you to
                  block or delete cookies. However, blocking essential cookies may
                  affect Site functionality.
                </li>
                <li>
                  <strong>Opt-out of Personalised Ads:</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Google Ads Settings:{" "}
                      <a
                        href="https://adssettings.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://adssettings.google.com
                      </a>
                    </li>
                    <li>
                      Network Advertising Initiative (for US):{" "}
                      <a
                        href="https://www.aboutads.info"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.aboutads.info
                      </a>
                    </li>
                    <li>
                      European Interactive Digital Advertising Alliance (for EU):{" "}
                      <a
                        href="https://www.youronlinechoices.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline break-all"
                      >
                        https://www.youronlinechoices.eu
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Do Not Track:</strong> We respond to Global Privacy
                  Control (GPC) and similar “Do Not Track” signals where legally
                  required, particularly for California users under the CCPA.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Changes
              </h2>
              <p>
                We may update this Cookie Policy periodically. Any changes will be
                reflected with a new “Last updated” date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
