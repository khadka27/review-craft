import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Fake Review Generator",
  description:
    "Contact Fake Review Generator for privacy requests, takedown demands, or general inquiries.",
  openGraph: {
    title: "Contact Us - Fake Review Generator",
    description: "Get in touch with Fake Review Generator.",
    url: "/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-gray-50 to-white relative overflow-hidden py-20">
      
      {/* Decorative blurred blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-700 font-medium text-sm mb-6 border border-blue-200 shadow-sm backdrop-blur-md">
            <MessageSquare size={16} /> Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            We’d love to hear from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">you</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Whether it's a privacy request, a takedown demand, or just a general inquiry, our team is ready to help you out.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Contact Information Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center sm:text-left">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex items-start gap-4 group">
                <div className="p-3.5 bg-blue-50/80 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Email Us</h4>
                  <div className="flex flex-col gap-1.5">
                    <a href="mailto:support@fakereviewgenerator.com" className="text-gray-500 hover:text-blue-600 transition-colors font-medium block">
                      support@fakereviewgenerator.com
                    </a>
                    <a href="mailto:info@fakereviewgenerator.com" className="text-gray-500 hover:text-blue-600 transition-colors font-medium block">
                      info@fakereviewgenerator.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3.5 bg-indigo-50/80 text-indigo-600 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-indigo-600/20 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">Office Address</h4>
                  <address className="not-italic text-gray-500 leading-relaxed font-medium">
                    100 Market Street, Suite 300<br />
                    San Francisco, CA 94111, USA
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <Shield className="text-emerald-500 mb-4" size={36} />
              <h4 className="font-extrabold text-gray-900 mb-2 text-lg">Privacy First</h4>
              <p className="text-gray-500 font-medium leading-relaxed">
                Your data and inquiries are handled securely and in strict confidence under compliance frameworks.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <Clock className="text-amber-500 mb-4" size={36} />
              <h4 className="font-extrabold text-gray-900 mb-2 text-lg">Fast Response</h4>
              <p className="text-gray-500 font-medium leading-relaxed">
                We monitor our support inboxes constantly and aim to respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
