"use client";

import React, { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
        <h3 className="text-xl font-bold text-emerald-900">Message Received</h3>
        <p className="text-sm text-emerald-700">
          Thank you for reaching out to ReviewCraft support. We will review your inquiry and respond within 24–48 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg text-xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contactName" className="block text-sm font-semibold text-gray-800 mb-2">
            Your Name
          </label>
          <input
            id="contactName"
            type="text"
            required
            placeholder="Jane Doe"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>
        <div>
          <label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-800 mb-2">
            Your Email
          </label>
          <input
            id="contactEmail"
            type="email"
            required
            placeholder="jane@example.com"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contactReason" className="block text-sm font-semibold text-gray-800 mb-2">
          Reason for Contacting
        </label>
        <select
          id="contactReason"
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base bg-white"
        >
          <option value="support">Technical Support / Bug Report</option>
          <option value="feedback">Design Feedback / Feature Suggestion</option>
          <option value="compliance">Policy & Acceptable Use Inquiry</option>
          <option value="general">General Inquiries</option>
        </select>
      </div>

      <div>
        <label htmlFor="contactMessage" className="block text-sm font-semibold text-gray-800 mb-2">
          Message
        </label>
        <textarea
          id="contactMessage"
          rows={5}
          required
          placeholder="Describe your inquiry or feedback..."
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base resize-none"
        ></textarea>
      </div>

      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
        <strong>Privacy Notice:</strong> We respect your privacy. Submissions are used solely to respond to your inquiry and are never shared with third parties for marketing purposes. See our <Link href="/privacy-policy" className="text-indigo-600 underline">Privacy Policy</Link>.
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow-md text-sm sm:text-base"
      >
        Send Message
      </button>
    </form>
  );
}
