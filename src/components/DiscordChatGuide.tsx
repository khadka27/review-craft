"use client";

import { useState } from "react";
import {
  MessageSquare,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Sliders,
  Sparkles,
  Info,
  ShieldCheck,
  ChevronRight,
  Users,
} from "lucide-react";

export function DiscordChatGuide() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Enter Details",
      desc: "Add usernames, avatars, and message content to the form editor.",
    },
    {
      step: "02",
      title: "Customize Comments",
      desc: "Adjust timestamps, profile images, message bubbles, and layout settings to create a natural conversation.",
    },
    {
      step: "03",
      title: "Generate Preview",
      desc: "The realistic Discord chat preview generator instantly creates a live messaging simulation.",
    },
    {
      step: "04",
      title: "Download Screenshot",
      desc: "Export the finished Discord chat screenshot generator output as a high-quality image or mockup template.",
    },
  ];

  const features = [
    "Custom message creation",
    "Username and profile editing",
    "Timestamp controls",
    "Discord-style messaging UI",
    "Screenshot exporting",
    "Editable message layouts",
    "Light and dark mode previews",
    "Instant rendering system",
    "Mobile-responsive design",
    "Realistic inbox simulation",
  ];

  const useCases = [
    {
      title: "Landing Pages",
      desc: "Marketers use discord message screenshot mockup visuals to improve storytelling and increase visitor engagement on promotional pages.",
      badge: "Landing Pages",
      color: "border-indigo-200 bg-indigo-50 text-indigo-900",
    },
    {
      title: "Testimonials",
      desc: "Businesses display simulated Discord conversations as examples of communication experiences and customer interactions.",
      badge: "Testimonials",
      color: "border-violet-200 bg-violet-50 text-violet-850",
    },
    {
      title: "Affiliate Funnels",
      desc: "Affiliate marketers frequently use fake Discord conversation generator tools to create engaging visuals for conversion-focused campaigns.",
      badge: "Funnels",
      color: "border-purple-200 bg-purple-50 text-purple-800",
    },
    {
      title: "Social Proof Visuals",
      desc: "A Discord conversation screenshot maker helps agencies produce polished mockups for presentations, advertisements, and client demonstrations.",
      badge: "Social Proof",
      color: "border-slate-200 bg-slate-50 text-slate-805",
    },
  ];

  const faqs = [
    {
      q: "1. Is a fake Discord chat generator free to use?",
      a: "Many platforms offer a free Discord chat generator online with essential features available at no cost. Some advanced platforms may include premium export options, extra templates, or enhanced customization settings through paid subscription plans for professional users.",
    },
    {
      q: "2. Can I create Discord screenshots without signing up?",
      a: "Yes. Most no signup Discord chat generator tools allow users to generate and download realistic conversation screenshots instantly without creating an account, making the process fast and convenient for marketers, designers, and content creators.",
    },
    {
      q: "3. Is using a Discord DM mockup tool legal?",
      a: "Using a Discord DM mockup tool no signup platform for demonstrations, educational content, UI testing, or design presentations is generally acceptable. However, deceptive use, impersonation, or misleading communication may violate laws or platform policies depending on intent.",
    },
    {
      q: "4. Can I customize usernames and profile pictures?",
      a: "Most realistic Discord DM creator tools provide customization options for usernames, avatars, timestamps, message content, and chat layouts. This flexibility helps users create highly personalized and visually realistic Discord messaging mockups for presentations and marketing campaigns.",
    },
    {
      q: "5. What formats are available for download?",
      a: "Most Discord DM screenshot generator free tools support PNG and JPG exports. Some advanced editable Discord chat mockup systems may also provide downloadable templates or layered assets compatible with external graphic design software.",
    },
    {
      q: "6. Are Discord chat generators safe to use?",
      a: "Reputable Discord messaging mockup generator platforms are generally safe when used responsibly. Users should avoid uploading sensitive personal information and should use generated mockups ethically for demonstrations, educational content, testing, or presentations only.",
    },
    {
      q: "7. Can businesses use Discord chat mockups commercially?",
      a: "Yes. Businesses frequently use Discord conversation screenshot maker tools for marketing campaigns, landing pages, affiliate funnels, client presentations, and product demos where realistic messaging visuals improve audience engagement and communication quality.",
    },
    {
      q: "8. Do Discord chat generators work on mobile devices?",
      a: "Most Discord chat UI builder free tools are fully responsive and optimized for smartphones, tablets, and desktop browsers. This allows users to generate realistic messaging previews conveniently from nearly any modern device or operating system.",
    },
    {
      q: "9. How realistic are the generated Discord conversations?",
      a: "A high-quality realistic Discord conversation builder closely matches Discord’s interface design, including message spacing, fonts, timestamps, and chat layouts. Proper customization can create highly authentic-looking messaging previews suitable for professional mockups and demonstrations.",
    },
    {
      q: "10. Can I edit conversations after generation?",
      a: "Most instant Discord DM design creator platforms allow users to modify conversations before downloading screenshots. Users can typically edit usernames, timestamps, avatars, message content, and layout settings multiple times until the final mockup meets their exact requirements.",
    },
    {
      q: "11. What limitations do fake Discord generators have?",
      a: "Although these tools create highly realistic messaging previews, they do not connect to actual Discord accounts or send real messages. They are intended strictly for mockups, educational demonstrations, testing environments, design previews, and professional presentation workflows.",
    },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Hero Banner with Discord Blurple/Indigo Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#313338] via-[#5865F2]/20 to-[#434ECF]/30 p-8 sm:p-12 shadow-2xl border border-indigo-500/20">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        
        {/* Top brand header accent bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#5865F2]" />

        <div className="relative z-10 max-w-3xl text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 mb-6 uppercase tracking-wider">
            <MessageSquare size={13} className="text-[#5865F2] animate-pulse" /> Discord Simulator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            Discord Chat Generator
          </h2>
          <p className="text-base sm:text-lg text-slate-350 leading-relaxed font-normal">
            A fake Discord chat generator allows you to create realistic Discord conversations and DM message screenshots within seconds. Replicate Discord’s native layout, avatars, usernames, and dark/light settings for storytelling, UI testing, and digital presentations.
          </p>
        </div>
      </div>

      {/* Grid: What is it & Discord Comment Mockup Use */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* What is Fake Discord Chat Generator */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-[#5865F2]">
                <Info size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">What is this Generator?</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A fake Discord chat generator is an online tool designed to create simulated Discord conversations and realistic message screenshots. Replicate Discord’s familiar UI by configuring usernames, profile photos, timestamps, message text, and chat layouts.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Functioning as a direct-message simulator, it requires no sign-ups or discord authentication. You can quickly generate engagement visuals for UI/UX concepts, presentations, and product walkthroughs.
            </p>
          </div>
        </div>

        {/* Discord Comment Mockup Use */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-[#5865F2]">
                <Sliders size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Discord DM Layout Use</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              A realistic Discord DM creator supports many digital content workflows and presentation strategies:
            </p>
            <div className="space-y-3 pt-1">
              {[
                "Landing Pages: Add Discord message screenshots to improve storytelling and engagement.",
                "Testimonials: Present simulated chat threads as visual proofs of customer communication.",
                "Affiliate Funnels: Highlight community reactions and organic discussions for campaign conversions.",
                "Social Proof Visuals: Replicate Discord layouts to construct advertisements and client-facing demos.",
              ].map((reason, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <ChevronRight size={16} className="text-[#5865F2] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps: How It Works */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How It Works
          </h3>
          <p className="text-slate-500 text-sm">
            Using an instant Discord chat mockup creator is simple and beginner-friendly:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <span className="text-xs font-extrabold text-[#5865F2] uppercase tracking-widest block mb-4">Step {s.step}</span>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid: Features & Platforms Supported */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Features */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-50 rounded-xl text-[#5865F2]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-xs sm:text-sm font-medium leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platforms Supported */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-indigo-100 rounded-xl text-[#5865F2]">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Platforms Supported</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Most Discord chat template generator free tools are optimized for:
            </p>
            <div className="space-y-3 pt-1 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#5865F2]" /> Desktop browsers
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#5865F2]" /> Smartphones
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#5865F2]" /> Tablets
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#5865F2]" /> Marketing presentation systems
              </div>
              <div className="flex items-center gap-2">
                <ChevronRight size={14} className="text-[#5865F2]" /> UI/UX design workflows
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Use cases */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Use Cases
          </h3>
          <p className="text-slate-500 text-sm">
            Discord DM mockups are ideal across marketing, product development, and teaching environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((uc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
              <div className="space-y-2">
                <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${uc.color}`}>
                  {uc.badge}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">{uc.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
          {/* Benefits card */}
          <div className="bg-slate-950 text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-2">
              <span className="inline-block text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                Benefits
              </span>
              <h4 className="text-sm font-bold text-white leading-tight">Instant preview rendering, realistic layouts, and consistent mockup quality.</h4>
              <p className="text-slate-400 text-[10px] leading-normal">Helps users produce polished messaging visuals without complicated software.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Why Useful & Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-base">Why This Tool Is Useful</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Saves Time:</strong> Graphic design setups that take hours are automated to seconds.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Improves Design Quality:</strong> Standard layouts guarantee pixel-perfect spacing.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">Creates Realistic Mockups:</strong> Captures Discord's specific fonts, colours, and chat structures.</span>
            </li>
            <li className="flex gap-2">
              <ChevronRight size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span><strong className="text-slate-800">No Design Skills Needed:</strong> Create professional-quality messaging screenshots instantly.</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
          <h4 className="font-bold text-slate-900 text-base">Tips for Realistic Comments</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span>Keep conversations natural, casual, and conversational.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span>Avoid excessive promotional wording or robotic syntax.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span>Use realistic timestamps and reply spacing.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle size={14} className="text-[#5865F2] shrink-0 mt-0.5" />
              <span>Use believable avatars and usernames instead of plain placeholders.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ethical warning / disclaimer */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 max-w-4xl mx-auto">
        <div className="p-3 bg-white text-[#5865F2] rounded-xl shadow-sm shrink-0">
          <ShieldCheck size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 text-base">Important Disclaimer</h4>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            This fake discord chat generator and discord chat mockup style tool are intended strictly for mockups, demonstrations, educational examples, interface testing, design previews, and creative presentations only. Users must not use generated screenshots or simulated conversations to deceive individuals, impersonate real users, distribute misleading content, or create fake engagement.
          </p>
          <p className="text-slate-500 text-xs italic">
            Users assume full responsibility for how generated mockups, screenshots, and conversation previews are created, distributed, or presented.
          </p>
        </div>
      </div>

      {/* FAQ accordion */}
      <div className="space-y-8 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm">
            Everything you need to know about our fake Discord chat generator tool.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200/60 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left"
              >
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{faq.q}</span>
                <HelpCircle size={18} className="text-slate-400 shrink-0 ml-2" />
              </button>
              
              {activeFaq === idx && (
                <div className="p-4 border-t border-slate-100 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
