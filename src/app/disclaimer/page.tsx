import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Fake Review Generator",
  description:
    "Disclaimer for Fake Review Generator regarding fictitious content, permitted use only, no endorsement of fraud, and limitation of liability.",
  openGraph: {
    title: "Disclaimer - Fake Review Generator",
    description:
      "Important legal disclaimer about educational use, fictional content, and non-affiliation.",
    url: "/disclaimer",
    type: "website",
  },
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Disclaimer
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: 06/14/2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-8 text-gray-700 leading-7">
            <p className="font-semibold text-red-600 uppercase tracking-wide text-sm mb-6">
              Please read this disclaimer carefully before using the tool.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Fictitious Content
              </h2>
              <p>
                Every review, name, business, rating, testimonial, or any other
                text produced by fakereviewgenerator.com is completely
                computer-generated and entirely fictional. Any resemblance to
                actual persons (living or dead), real businesses, genuine products,
                or real events is purely coincidental and unintentional. The tool
                does not access any database of real reviews; it creates synthetic
                text based on patterns learned during AI training.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Permitted Use Only
              </h2>
              <p className="mb-4">
                This website and its generated content are provided exclusively
                for mockup, testing, and educational purposes. This includes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  Filling design mockups and UI prototypes with placeholder review
                  text.
                </li>
                <li>
                  Testing content moderation filters or spam detection systems.
                </li>
                <li>
                  Classroom demonstrations on AI generation, misinformation, or
                  digital literacy.
                </li>
                <li>
                  Developing and debugging software that displays user reviews.
                </li>
              </ul>
              
              <p className="mb-4 font-medium text-gray-900">
                No content generated on this website may be used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Deceive any individual, business, or automated system into
                  believing the content is authentic.
                </li>
                <li>
                  Defraud consumers, businesses, or platforms by posting fake
                  positive or negative reviews.
                </li>
                <li>
                  Prank someone by making them think a fake review is real, causing
                  emotional distress or reputation concern.
                </li>
                <li>
                  Impersonate any real business or person, or create fake social
                  proof for commercial gain.
                </li>
                <li>
                  Comply with or circumvent any review policy of a third-party
                  service.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                No Endorsement of Fraud
              </h2>
              <p className="mb-4">
                We explicitly condemn the use of fake reviews for any fraudulent
                or deceptive purpose. Doing so may violate:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Consumer protection laws (e.g., FTC Act in the United States,
                  Consumer Protection from Unfair Trading Regulations 2008 in the
                  UK, Competition and Consumer Act 2010 in Australia, Consumer
                  Protection Act 2019 in India, etc.)
                </li>
                <li>Platform terms of service (Google, Amazon, Yelp, etc.)</li>
                <li>
                  Criminal laws against fraud and computer misuse in your
                  jurisdiction
                </li>
              </ul>
              <p>
                If you post a generated review as real, you are acting outside the
                scope of the licence granted by our Terms of Service, and we will
                cooperate with law enforcement or platform operators to the extent
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                No Professional Advice
              </h2>
              <p>
                The generated text does not constitute legal, financial, medical,
                or any other professional advice. It is a random synthesis of
                words and should never be relied upon to make decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Use at Your Own Risk
              </h2>
              <p>
                You assume full responsibility for any consequences arising from
                your use of the generated content. We disclaim all liability for
                any loss, damage, or legal action resulting from misuse of the
                tool.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Reporting Misuse
              </h2>
              <p>
                If you encounter content generated by this tool being used
                deceptively, please contact us at{" "}
                <a
                  href="mailto:info@fakereviewgenerator.com"
                  className="text-blue-600 hover:underline"
                >
                  info@fakereviewgenerator.com
                </a>{" "}
                so we can investigate and take appropriate action.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
