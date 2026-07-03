import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Fake Review Generator",
  description:
    "Privacy Policy for Fake Review Generator explaining how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy - Fake Review Generator",
    description:
      "Privacy Policy for Fake Review Generator explaining how we collect, use, and protect your information.",
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
          <p className="text-lg text-gray-600">Last updated: 06/14/2026</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-8 text-gray-700 leading-7">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Who We Are
              </h2>
              <p>
                Fake Review Generator (“we”, “us”, “our”) operates the website
                fakereviewgenerator.com (the “Site”). We are committed to
                protecting your privacy and handling your data transparently. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your personal information when you visit our Site or use
                our fake review generation tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                What Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Information You Provide Directly
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Input prompts:</strong> When you type prompts or
                      keywords into our generator, we process that text to
                      create a response. We do not permanently store your
                      prompts unless necessary for debugging, but they may be
                      processed in real time.
                    </li>
                    <li>
                      <strong>Contact details:</strong> If you use the contact
                      form or email us, we collect your name, email address,
                      and any message you write.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Information Collected Automatically
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Log data:</strong> Like most websites, we
                      automatically log your IP address, browser type, operating
                      system, referring URLs, date/time stamps, and pages
                      visited. We use this for security, analytics, and to
                      ensure the service functions properly.
                    </li>
                    <li>
                      <strong>Cookies and similar technologies:</strong> We and
                      our advertising partners use cookies, web beacons, and
                      similar tracking technologies to personalise content and
                      ads, provide social media features, and analyse our
                      traffic. (See the “Cookies & Advertising” section
                      below.)
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-2">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain the fake review generator tool</li>
                <li>To serve advertisements (including personalised ads via Google AdSense)</li>
                <li>To analyse usage and improve our Site (e.g., through aggregated analytics)</li>
                <li>To detect, prevent, and address technical issues or misuse (such as spamming)</li>
                <li>To communicate with you if you contact us</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Cookies & Advertising
              </h2>
              <div className="space-y-4">
                <p>
                  We use Google AdSense to display advertisements. Google and its
                  third-party vendors use cookies to serve ads based on a user’s
                  prior visits to our Site or other websites.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>DoubleClick cookie:</strong> Google uses the DoubleClick
                    cookie to enable interest-based advertising. This cookie allows
                    Google and its partners to show you ads that may be more relevant
                    to you based on your browsing history on this Site and across the
                    internet.
                  </li>
                  <li>
                    <strong>Opt-out:</strong> You can opt out of personalised
                    advertising by visiting Google’s Ads Settings or by visiting
                    www.aboutads.info. You can also manage cookie preferences through
                    our consent banner (if available) or your browser settings.
                  </li>
                  <li>
                    <strong>Other cookies:</strong> We may use essential session cookies
                    for the functioning of the Site. No personally identifiable
                    information is stored in these cookies.
                  </li>
                </ul>
                <p>
                  Under the GDPR (EU/UK), we will not place non-essential advertising
                  cookies on your device without your explicit consent. You can
                  change your preferences at any time by clicking “Cookie Settings”
                  at the bottom of the page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Legal Bases for Processing (GDPR/UK GDPR)
              </h2>
              <p className="mb-2">
                If you are in the European Economic Area (EEA), the United Kingdom,
                or Switzerland, we rely on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Consent:</strong> For placing personalised advertising
                  cookies and processing input prompts for the generator (when your
                  consent is required).
                </li>
                <li>
                  <strong>Legitimate interests:</strong> For ensuring network
                  security, preventing fraud, serving basic contextual ads (where
                  consent is not required), and analysing aggregated, anonymous
                  statistics.
                </li>
                <li>
                  <strong>Performance of a contract:</strong> When you use our tool,
                  we process your prompts to provide the service you requested.
                </li>
                <li>
                  <strong>Legal obligation:</strong> To comply with applicable laws
                  and lawful requests from authorities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                How We Share Your Information
              </h2>
              <p className="mb-2">
                We do not sell your personal data in the traditional sense. However,
                we may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google AdSense and other ad partners:</strong> For serving
                  personalised or non-personalised ads. This may involve sharing
                  cookie identifiers, IP addresses, and browsing data with Google,
                  which acts as a data controller for ad serving.
                </li>
                <li>
                  <strong>Analytics providers:</strong> We may use Google Analytics or
                  similar services that collect anonymised usage data.
                </li>
                <li>
                  <strong>Service providers:</strong> Third-party hosting, security,
                  and email services that process data on our behalf. They are
                  contractually bound to only use data as instructed.
                </li>
                <li>
                  <strong>Legal and safety:</strong> If required by law, court order,
                  or to protect the rights, property, or safety of ourselves or
                  others.
                </li>
              </ul>
              <p className="mt-4">
                Please note that sharing data with ad networks could be considered a
                “sale” of personal information under the California Consumer Privacy
                Act (CCPA). See the “Your Rights” section below for how to opt out.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Data Retention
              </h2>
              <p className="mb-2">
                We retain personal data only as long as necessary for the purposes
                stated in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Server logs:</strong> up to 30 days (unless needed for
                  security investigations).
                </li>
                <li>
                  <strong>Contact form submissions:</strong> up to 12 months after
                  the query is resolved.
                </li>
                <li>
                  <strong>Cookie data:</strong> as per the expiry period of each
                  cookie (you can clear them at any time).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                International Data Transfers
              </h2>
              <p className="mb-2">
                Your information may be transferred to, and processed in, countries
                outside your own (including the United States, where our servers may
                be located, or where Google processes data). We ensure that
                appropriate safeguards are in place, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Standard Contractual Clauses (SCCs) approved by the European
                  Commission and the UK Information Commissioner’s Office
                </li>
                <li>Reliance on adequacy decisions where applicable</li>
              </ul>
              <p className="mt-4">
                By using our Site, you consent to such transfers in accordance with
                this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Your Rights Under Specific Jurisdictions
              </h2>
              <p className="mb-6">
                We respect your rights and will honour any valid request. Depending
                on your location, you may have the following rights:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of the EEA, UK, and Switzerland (GDPR/UK GDPR)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure (“right to be forgotten”)</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing (including for direct marketing)</li>
                    <li>Right to withdraw consent at any time</li>
                    <li>Right to lodge a complaint with your local supervisory authority</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of California, USA (CCPA/CPRA)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Right to know:</strong> You can request details about
                      the categories and specific pieces of personal information we
                      have collected, used, and disclosed about you over the past 12
                      months.
                    </li>
                    <li>
                      <strong>Right to delete:</strong> You can ask us to delete
                      personal information we have collected from you (subject to
                      exceptions).
                    </li>
                    <li>
                      <strong>Right to opt-out of “sale”:</strong> Although we do
                      not sell personal information for money, our use of
                      advertising cookies may be considered a “sale” under CCPA. You
                      can exercise your right to opt-out by using the cookie consent
                      banner to reject non-essential cookies, or by emailing us at
                      the address below. We will also honour opt-out preference
                      signals such as the Global Privacy Control (GPC) where legally
                      required.
                    </li>
                    <li>
                      <strong>Right to non-discrimination:</strong> We will not
                      discriminate against you for exercising any of these rights.
                    </li>
                  </ul>
                  <p className="mt-2 text-sm">
                    To submit a request, email us at support@fakereviewgenerator.com or info@fakereviewgenerator.com
                  with “California Privacy Request” in the subject. We may need to
                  verify your identity.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of Canada (PIPEDA)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to access your personal information</li>
                    <li>
                      Right to challenge the accuracy and completeness of your
                      information and have it amended
                    </li>
                    <li>
                      Right to withdraw consent to the collection, use, or
                      disclosure of your personal information (subject to legal or
                      contractual restrictions)
                    </li>
                    <li>
                      Right to lodge a complaint with the Office of the Privacy
                      Commissioner of Canada
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of Australia (Privacy Act 1988)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to access your personal data</li>
                    <li>Right to request correction of inaccurate data</li>
                    <li>
                      Right to complain to the Office of the Australian Information
                      Commissioner (OAIC) if you believe your privacy rights have
                      been breached
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of the Philippines (Data Privacy Act of 2012)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to be informed about the processing of your data</li>
                    <li>Right to access, rectify, and erase your personal data</li>
                    <li>Right to object to processing and to withdraw consent</li>
                    <li>
                      Right to data portability and to file a complaint with the
                      National Privacy Commission
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of India (Digital Personal Data Protection Act, 2023)
                  </h3>
                  <p className="mb-2 text-sm">
                    While the DPDP Act is being implemented, we voluntarily extend
                    these rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Right to access a summary of personal data processed</li>
                    <li>Right to correction and erasure</li>
                    <li>
                      Right to nominate a representative in case of death or
                      incapacity
                    </li>
                    <li>
                      Right to grievance redressal – you may contact us using the
                      details below; we will respond within the timeframe mandated
                      by applicable Indian law.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    For Residents of Nepal, Pakistan, and Bangladesh
                  </h3>
                  <p>
                    Nepal, Pakistan, and Bangladesh currently do not have
                    comprehensive omnibus privacy legislation (Pakistan’s data
                    protection bill is pending). However, as a gesture of good
                    faith, we will extend the same rights of access, correction, and
                    deletion to you upon request. We also respect any applicable
                    electronic transaction or consumer protection laws in your
                    country that relate to personal data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Children’s Privacy
              </h2>
              <p>
                Our Site is not directed to individuals under the age of 16 (or the
                relevant digital consent age in your country). We do not knowingly
                collect personal information from children. If you believe we have
                inadvertently collected such information, please contact us
                immediately so we can delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this policy from time to time. The “Last updated” date
                at the top will indicate when changes were made. We encourage you to
                review this page periodically. In case of material changes, we will
                display a notice on the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="mb-2">
                If you have any questions, concerns, or wish to exercise your
                rights, please contact us:
              </p>
              <ul className="space-y-1">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@fakereviewgenerator.com"
                    className="text-blue-600 hover:underline"
                  >
                    support@fakereviewgenerator.com
                  </a>{" "}
                  /{" "}
                  <a
                    href="mailto:info@fakereviewgenerator.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@fakereviewgenerator.com
                  </a>
                </li>
                <li>
                  <strong>Contact Page:</strong>{" "}
                  <a
                    href="https://fakereviewgenerator.com/contact"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://fakereviewgenerator.com/contact
                  </a>
                </li>
                <li>
                  <strong>Postal Address:</strong> 100 Market Street, Suite 300, San Francisco, CA 94111, USA
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
