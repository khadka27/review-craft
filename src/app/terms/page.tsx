import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Fake Review Generator",
  description:
    "Terms of Service for using Fake Review Generator. Please read our usage guidelines and legal terms.",
  openGraph: {
    title: "Terms of Service - Fake Review Generator",
    description:
      "Terms of Service for using Fake Review Generator. Educational usage guidelines and legal terms.",
    url: "/terms",
    type: "website",
  },
  alternates: {
    canonical: "/terms",
  },
};

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: 06/14/2026
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-7">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing or using fakereviewgenerator.com (the “Site”) and the
              AI-powered review generation tool (“Tool”), you agree to be bound by
              these Terms of Service (“Terms”). If you do not agree, do not use the
              Site. We may update these Terms at any time; continued use after changes
              constitutes acceptance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Description of the Service
            </h2>
            <p className="mb-4">
              The Tool generates fictional text – including business names, customer
              reviews, ratings, and similar content – based on user prompts. All
              generated content is entirely computer-generated and does not represent
              real people, businesses, or events. The Tool is designed exclusively for
              the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Mockup & Design Testing:</strong> populating wireframes, user
                interfaces, or demo applications with placeholder review text.
              </li>
              <li>
                <strong>Educational Use:</strong> understanding natural language
                generation, studying AI outputs, or teaching content moderation.
              </li>
              <li>
                <strong>Entertainment/Satire:</strong> creating obviously farcical or
                humorous fictional scenarios.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. Your Responsibilities & Prohibited Uses
            </h2>
            <p className="mb-4">
              By using the Tool, you agree that you are solely responsible for how
              you use the generated content. You agree NOT to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Use any generated output as a genuine review, testimonial, or rating
                on any website, platform, or marketplace (e.g., Google Reviews, Yelp,
                Amazon, Trustpilot, etc.).
              </li>
              <li>
                Present generated content as a real person’s opinion, experience, or
                identity.
              </li>
              <li>
                Use the Tool to deceive, defraud, mislead, harass, or prank any
                individual, business, or organisation.
              </li>
              <li>
                Impersonate any real business or person, or create content that
                could harm a real business’s reputation.
              </li>
              <li>
                Violate the terms of service of any third-party platform where
                reviews can be posted.
              </li>
              <li>
                Use the Tool for any illegal activity under applicable laws (including
                laws against false advertising, consumer protection, fraud, or
                defamation) in any jurisdiction, including but not limited to India,
                the United States, Canada, Nepal, Pakistan, the United Kingdom, the
                Philippines, Australia, Germany, and Bangladesh.
              </li>
              <li>
                Attempt to reverse engineer, disrupt, or overload the Tool, or use
                it to spread malware.
              </li>
            </ul>
            <p className="mb-6 italic text-sm">
              Clarification on “prank”: using generated content to make someone
              believe a fake review is real, causing them alarm, confusion, or
              reputational concern, is strictly forbidden and a violation of these
              Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Intellectual Property
            </h2>
            <div className="space-y-4 mb-6">
              <p>
                <strong>Your Input:</strong> If the Tool accepts free-text prompts,
                you retain any copyright you may hold in the original prompt. By
                submitting a prompt, you grant us a worldwide, non-exclusive,
                royalty-free licence to process it for the purpose of generating
                output and improving the Tool.
              </p>
              <p>
                <strong>Generated Output:</strong> Because the output is
                machine-generated from probabilistic models, we do not claim any
                intellectual property rights over the text itself. However, you
                receive a limited, revocable, non-transferable licence to use the
                generated content solely for the Permitted Purposes described in
                Section 2. Any use outside those purposes is a material breach of
                these Terms and immediately terminates your licence.
              </p>
              <p>
                <strong>Our IP:</strong> The Site’s design, code, logo, and original
                content are owned by us and protected by copyright and trademark
                laws.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              5. Disclaimers of Warranties
            </h2>
            <p className="mb-4 uppercase font-semibold text-sm">
              The Site and Tool are provided “as is” and “as available” without any
              warranties, express or implied. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                The generated content will be accurate, appropriate, or free of errors.
              </li>
              <li>
                The Tool will be uninterrupted, secure, or virus-free.
              </li>
              <li>
                The content does not infringe third-party rights (you assume the risk
                of any such claims if you use the output in ways not permitted).
              </li>
            </ul>
            <p className="mb-6">
              We specifically disclaim any warranties of merchantability, fitness for a
              particular purpose, and non-infringement to the fullest extent permitted
              by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent allowed by applicable law (including in the
              jurisdictions listed above), we shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages – including loss
              of profits, reputation, data, or business opportunities – arising from
              your use of the Site or reliance on any generated content, even if we
              have been advised of the possibility of such damages.
            </p>
            <p className="mb-6">
              This limitation applies regardless of the legal theory on which the claim
              is based, whether contract, tort (including negligence), strict
              liability, or otherwise. Our total liability to you for any direct
              damages shall not exceed the amount you paid us in the past 12 months
              (if any), or USD 10 if no payment was made.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Indemnification
            </h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Fake Review Generator,
              its owners, affiliates, and employees from and against any and all
              claims, damages, losses, liabilities, costs, or expenses (including
              reasonable legal fees) arising out of:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your violation of these Terms.</li>
              <li>Your misuse of the generated content (including posting fake reviews).</li>
              <li>Your violation of any third-party rights or applicable laws.</li>
              <li>Any claim that content you prompted or output you used caused harm to a third party.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              8. Third-Party Links & Advertisements
            </h2>
            <p className="mb-6">
              The Site may display ads served by Google AdSense and may link to
              external websites. We have no control over, and assume no responsibility
              for, the content, privacy policies, or practices of any third-party
              sites or services. Interactions with advertisers are solely between you
              and the advertiser.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              9. Termination
            </h2>
            <p className="mb-6">
              We reserve the right to suspend or terminate your access to the Tool,
              without prior notice, if we believe you have violated these Terms or
              applicable law. Provisions relating to disclaimers, limitations of
              liability, indemnification, and intellectual property will survive
              termination.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Governing Law & Dispute Resolution
            </h2>
            <div className="space-y-4 mb-6">
              <p>
                These Terms shall be governed by and construed in accordance with the
                laws of [India / insert your country], without giving effect to any
                conflict-of-law principles. The United Nations Convention on Contracts
                for the International Sale of Goods shall not apply.
              </p>
              <p>
                Any dispute arising out of these Terms shall first be attempted to be
                resolved through good-faith informal negotiations. If the dispute
                cannot be resolved within 30 days, it shall be submitted to the
                exclusive jurisdiction of the courts located in [insert your city, country].
                You consent to personal jurisdiction in those courts.
              </p>
              <p>
                <strong>For US residents:</strong> You waive any right to participate
                in a class action lawsuit or class-wide arbitration against us.
              </p>
              <p>
                <strong>For consumers in the EU, UK, and Australia:</strong> This
                governing law clause does not deprive you of the protection afforded
                by mandatory consumer protection laws of your country of residence.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              11. General
            </h2>
            <p className="mb-6">
              If any part of these Terms is held invalid or unenforceable, the
              remaining provisions will remain in full force. Our failure to enforce
              any right or provision does not constitute a waiver. You may not assign
              your rights under these Terms without our written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              Contact
            </h2>
            <p className="mb-2">
              For any questions regarding these Terms, please contact us at:
            </p>
            <ul className="space-y-1 mb-6">
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
                  href="/contact"
                  className="text-blue-600 hover:underline"
                >
                  /contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
