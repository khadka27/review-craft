import type { Metadata } from "next";
import { Mail, MessageSquare, Shield, Clock, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - ReviewCraft Support & Inquiries",
  description:
    "Contact ReviewCraft for technical support, feedback, privacy requests, or general inquiries.",
  openGraph: {
    title: "Contact Us - ReviewCraft Support & Inquiries",
    description: "Get in touch with the ReviewCraft team.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white relative overflow-hidden py-16 sm:py-20">
      
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 font-medium text-sm mb-6 border border-blue-200 shadow-sm backdrop-blur-md">
            <MessageSquare size={16} /> Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            We'd love to hear from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">you</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether you have technical feedback, bug reports, feature suggestions, or privacy inquiries, our team is here to assist.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Contact Information Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">Contact Channels</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex items-start gap-4 group">
                <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Support & Inquiries</h3>
                  <div className="flex flex-col gap-1.5">
                    <a href="mailto:support@fakereviewgenerator.com" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors block">
                      support@fakereviewgenerator.com
                    </a>
                    <a href="mailto:info@fakereviewgenerator.com" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors block">
                      info@fakereviewgenerator.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">General Help</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Have questions about our generators or ethical guidelines? Check out our{" "}
                    <a href="/about" className="text-indigo-600 font-semibold hover:underline">
                      About Page
                    </a>{" "}
                    or explore our latest design guides.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-300">
              <Shield className="text-emerald-500 mb-4" size={36} />
              <h3 className="font-extrabold text-gray-900 mb-2 text-lg">Privacy & Transparency</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                All data generated on ReviewCraft is client-rendered inside your browser. We respect your privacy and process no personal data.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-300">
              <Clock className="text-amber-500 mb-4" size={36} />
              <h3 className="font-extrabold text-gray-900 mb-2 text-lg">Response Time</h3>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">
                We actively review technical feedback and user messages, aiming to respond to all inquiries within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
