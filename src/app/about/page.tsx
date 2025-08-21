"use client";

import { SEO } from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About ReviewCraft - Educational Social Media Review Generator"
        description="Learn about ReviewCraft, an educational tool for generating realistic social media reviews for design mockups, presentations, and learning purposes. Created by Abishek Khadka."
        url="/about"
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About ReviewCraft
            </h1>
            <p className="text-xl text-gray-600">
              Educational tool for creating authentic social media content
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is ReviewCraft?
              </h2>
              <p className="text-gray-600 mb-6">
                ReviewCraft is an innovative educational tool designed to
                generate realistic-looking social media reviews for educational
                purposes, design mockups, and presentations. Our platform
                supports over 15 popular social media and review platforms,
                creating pixel-perfect replicas of their interfaces.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Educational Purpose
              </h2>
              <p className="text-gray-600 mb-6">
                This tool is specifically designed for educational and
                demonstration purposes. It helps designers, educators, students,
                and professionals create realistic mockups without using actual
                user-generated content. All generated reviews are clearly marked
                as simulated and should never be used to deceive or mislead
                users.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Support for 15+ major social media platforms
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Authentic user profiles using real API data
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Pixel-perfect platform interface replication
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Download as PNG images or copy to clipboard
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Responsive design for all devices
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Free to use for educational purposes
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Supported Platforms
              </h2>
              <p className="text-gray-600 mb-4">
                ReviewCraft currently supports the following platforms:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {[
                  "Reddit",
                  "Twitter/X",
                  "Instagram",
                  "Amazon",
                  "Netflix",
                  "Spotify",
                  "LinkedIn",
                  "YouTube",
                  "TikTok",
                  "Steam",
                  "Yelp",
                  "Trustpilot",
                  "IMDB",
                  "Facebook",
                  "Discord",
                ].map((platform) => (
                  <div
                    key={platform}
                    className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700"
                  >
                    {platform}
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-gray-600 mb-6">
                ReviewCraft is built using modern web technologies to ensure
                reliability, performance, and user experience:
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Next.js 15</strong> - React framework for production
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>TypeScript</strong> - Type-safe JavaScript
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Tailwind CSS</strong> - Utility-first CSS framework
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>html-to-image</strong> - DOM to image conversion
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Google Analytics</strong> - User insights and SEO
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Use Cases
              </h2>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Design Mockups:</strong> Create realistic social media
                  content for design presentations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Educational Materials:</strong> Demonstrate social
                  media interfaces in educational settings
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Portfolio Projects:</strong> Showcase design skills
                  with authentic-looking content
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Presentations:</strong> Include realistic social media
                  examples in business presentations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <strong>Research:</strong> Study user interface patterns and
                  social media behaviors
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Guidelines
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800">
                  <strong>Important:</strong> ReviewCraft is designed
                  exclusively for educational and demonstration purposes. Please
                  use this tool responsibly and never attempt to pass generated
                  content as authentic reviews. All generated content is
                  simulated and should be clearly identified as such in any
                  usage.
                </p>
              </div>
            </div>
          </div>

          {/* Creator Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the Creator
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 mb-6">
                  ReviewCraft was created by <strong>Abishek Khadka</strong>, a
                  passionate developer dedicated to building educational tools
                  that help designers and developers create better user
                  experiences.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/khadka27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    GitHub Profile
                  </a>
                  <a
                    href="https://github.com/khadka27/review-craft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
