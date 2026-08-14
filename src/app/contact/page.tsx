import type { Metadata } from "next";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

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
            Whether you have technical feedback, bug reports, design suggestions, or policy inquiries, our team is here to assist.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Contact Form Card */}
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
            
            <ContactForm />
          </div>

          {/* Contact Information Cards */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/80 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Contact Channels</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Support Email:</strong>
                  <br />
                  <a href="mailto:support@fakereviewgenerator.com" className="text-indigo-600 hover:underline">
                    support@fakereviewgenerator.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong>Response Information:</strong>
                  <br />
                  We aim to respond to technical and support inquiries within 24–48 business hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
