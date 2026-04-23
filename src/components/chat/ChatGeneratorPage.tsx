"use client";

import { useState } from "react";
import { ChatData, ChatPlatform } from "@/types/chat";
import { ChatForm } from "./ChatForm";
import { ChatPreview } from "./ChatPreview";
import { Shield, Download } from "lucide-react";
import { downloadComponentAsImage } from "@/utils/export";

interface ChatGeneratorPageProps {
  initialPlatform?: ChatPlatform;
  lockPlatform?: boolean;
  heroTitle?: string;
  heroDescription?: string;
  theme?: {
    pageGradient: string;
    heroGradient: string;
    heroDescriptionColor: string;
  };
}

export function ChatGeneratorPage({
  initialPlatform = "whatsapp",
  lockPlatform = false,
  heroTitle = "Fake Social Media Chat Generator",
  heroDescription = "Create realistic chat screenshots for WhatsApp, Instagram, Messenger and more. Perfect for mockups, storytelling, and design presentations.",
  theme,
}: ChatGeneratorPageProps) {
  const [chatData, setChatData] = useState<ChatData>({
    id: "1",
    platform: initialPlatform,
    contactName: "John Doe",
    contactAvatar: "",
    contactStatus: "online",
    messages: [
      { id: "1", text: "Hey! How are you?", sender: "them", timestamp: "10:00 AM", status: "read" },
      { id: "2", text: "I'm doing great, thanks for asking!", sender: "me", timestamp: "10:01 AM", status: "read" },
      { id: "3", text: "Did you finish the project?", sender: "them", timestamp: "10:05 AM", status: "read" },
    ],
    deviceMode: "mobile",
    theme: "light",
  });

  const activeTheme = theme || {
    pageGradient: "bg-gray-50",
    heroGradient: "bg-gradient-to-r from-green-500 to-blue-600",
    heroDescriptionColor: "text-white opacity-90",
  };

  const updateChatData = (updates: Partial<ChatData>) => {
    setChatData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className={`min-h-screen ${activeTheme.pageGradient}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className={`${activeTheme.heroGradient} rounded-2xl p-8 text-white shadow-xl`}>
            <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
            <p className={`text-xl ${activeTheme.heroDescriptionColor} max-w-2xl mx-auto`}>
              {heroDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Left: Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize Chat</h2>
            <ChatForm 
              chatData={chatData} 
              onUpdate={updateChatData} 
              showPlatformSelector={!lockPlatform}
            />
          </div>

          {/* Right: Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
             <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
                <button
                  onClick={() => downloadComponentAsImage("chat-screen-capture", `chat-${chatData.platform}-${Date.now()}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm font-medium"
                >
                  <Download size={16} />
                  Download Image
                </button>
             </div>
             <ChatPreview chatData={chatData} />
             
             {/* Download Info */}
             <div className="mt-8 text-center text-xs text-gray-400 italic">
               <p>Note: Downloads may not include some background patterns due to browser restrictions.</p>
             </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex gap-3">
            <Shield className="text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-900">Ethical Use Disclaimer</h3>
              <p className="text-yellow-800 text-sm mt-1">
                This tool is strictly for educational, creative, and professional design purposes. 
                Do not use this to create fake evidence, spread misinformation, or impersonate others. 
                Always disclose that generated images are for illustrative purposes only.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
