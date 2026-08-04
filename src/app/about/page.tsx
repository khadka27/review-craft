import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Sparkles, BookOpen, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "About ReviewCraft - Review & Social Proof Screenshot Generator",
  description:
    "Learn about ReviewCraft: a web application created to help UI/UX designers, developers, marketers, and educators build high-fidelity social media and ecommerce review mockups safely and efficiently.",
  openGraph: {
    title: "About ReviewCraft - Review & Social Proof Screenshot Generator",
    description:
      "Learn about ReviewCraft: a web application created to help UI/UX designers, developers, marketers, and educators build high-fidelity social media and ecommerce review mockups safely and efficiently.",
    url: "/about",
    type: "website",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-xs uppercase tracking-wider mb-4">
            <Sparkles size={14} /> Design & Prototype Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight mb-4">
            About ReviewCraft
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering designers, developers, and educators with realistic, non-deceptive review and chat mockup tools.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10 mb-8 space-y-10">
          {/* Mission Statement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="text-indigo-600" size={24} />
              What is ReviewCraft?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ReviewCraft is an online utility built for creating pixel-perfect, customizable social media reviews, chat conversations, and payment confirmation screenshots. Whether you are crafting a Figma design prototype, presenting a client pitch deck, training a team on customer feedback analysis, or designing an app interface demo, ReviewCraft accelerates your design workflow without requiring manual layout assembly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With support for over 30 popular platforms-including Amazon, Google, Yelp, Trustpilot, Reddit, Twitter/X, Instagram, WhatsApp, and Stripe-our generators mirror authentic platform typography, iconography, and spacing to deliver professional visuals in seconds.
            </p>
          </section>

          {/* Why We Built This */}
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="text-indigo-600" size={24} />
              Why We Built ReviewCraft
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During modern website and application development, empty review components or static placeholder text ("Lorem ipsum") make wireframes look incomplete and difficult for stakeholders to evaluate. Designers previously had to spend hours recreating complex UI components like star rating bars, verified buyer badges, upvote counters, and reviewer avatars in design software.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ReviewCraft was built to solve this exact problem: providing instant, editable templates that allow product creators to preview how social proof elements look inside their layouts before launch.
            </p>
          </section>

          {/* Core Features */}
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Layers className="text-indigo-600" size={24} />
              Key Platform Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">30+ Platform Presets</h3>
                <p className="text-sm text-gray-600 leading-normal">
                  Accurate UI templates for major ecommerce, social media, hospitality, and messaging applications.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Full Customization</h3>
                <p className="text-sm text-gray-600 leading-normal">
                  Edit reviewer names, star ratings, dates, verified badges, reaction counts, and uploaded avatars.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">High-Resolution Export</h3>
                <p className="text-sm text-gray-600 leading-normal">
                  Export crisp PNG screenshots ready for inclusion in pitch decks, case studies, or portfolio pieces.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">Privacy Focused</h3>
                <p className="text-sm text-gray-600 leading-normal">
                  No personal review data is stored on remote servers. All screenshot generation runs directly in your browser.
                </p>
              </div>
            </div>
          </section>

          {/* Responsible Use Policy */}
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" size={24} />
              Responsible Use & Ethical Guidelines
            </h2>
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-5 text-amber-900 text-sm leading-relaxed">
              <p className="font-bold mb-2 text-base text-amber-950">Important Notice for All Users:</p>
              <p className="mb-3">
                ReviewCraft is intended strictly for <strong>educational purposes, design wireframing, client presentations, UI/UX prototyping, and software demos</strong>.
              </p>
              <p>
                Generated screenshots must <strong>never</strong> be used to fabricate public trust signals, post fake reviews on live business listings, deceive customers, or violate third-party trademark terms. For full details on acceptable usage, please review our{" "}
                <Link href="/acceptable-use" className="underline font-semibold hover:text-amber-700">
                  Acceptable Use Policy
                </Link>{" "}
                and{" "}
                <Link href="/disclaimer" className="underline font-semibold hover:text-amber-700">
                  Disclaimer
                </Link>
                .
              </p>
            </div>
          </section>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Is ReviewCraft free to use?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Yes. ReviewCraft is 100% free for educational use, design mockups, and client demos. No registration or credit card is required.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Can I use generated reviews on live commercial websites?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                No. Generated reviews are simulated mockups. Presenting fake customer feedback as genuine buyer testimonials on a live production website is deceptive and prohibited by consumer protection laws and our Acceptable Use Policy.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-bold text-gray-900 text-lg mb-1">How can I contact the team?</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                For questions, feedback, or legal inquiries, please reach out via our{" "}
                <Link href="/contact" className="text-indigo-600 font-semibold hover:underline">
                  Contact Page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
