"use client";

import { useEffect, useState } from "react";
import { ChatData, ChatPlatform } from "@/types/chat";
import { ChatForm } from "./ChatForm";
import { ChatPreview } from "./ChatPreview";
import { Shield, Download, Copy, Loader2 } from "lucide-react";
import { downloadComponentAsImage, copyComponentToClipboard } from "@/utils/export";
import { CustomDropdown, DropdownOption } from "@/components/ui/CustomDropdown";
import { useToast } from "@/components/ui/Toast";

const exportFormatOptions: DropdownOption[] = [
  { value: "png", label: "PNG Image", badge: "HD" },
  { value: "webp", label: "WEBP Image", badge: "Web" },
  { value: "jpg", label: "JPG Image", badge: "Fast" },
  { value: "pdf", label: "PDF Document", badge: "Doc" },
];

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
  extraContent?: React.ReactNode;
}

export function ChatGeneratorPage({
  initialPlatform = "whatsapp",
  lockPlatform = false,
  heroTitle = "Chat Generator",
  heroDescription = "Create realistic chat mockups for WhatsApp, iMessage, Messenger, Instagram, Telegram, and Discord.",
  theme,
  extraContent,
}: ChatGeneratorPageProps) {
  const [chatData, setChatData] = useState<ChatData>({
    id: "1",
    platform: initialPlatform,
    contactName: "Alex Morgan",
    contactAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    contactStatus: "online",
    messages: [
      {
        id: "1",
        text: "Hey! Did you get a chance to check out the new design?",
        timestamp: "10:42 AM",
        sender: "them",
        status: "read",
      },
      {
        id: "2",
        text: "Yes, it looks amazing! Really love the clean aesthetic.",
        timestamp: "10:43 AM",
        sender: "me",
        status: "read",
      },
      {
        id: "3",
        text: "Great! Let's schedule a call tomorrow to discuss the final touches.",
        timestamp: "10:45 AM",
        sender: "them",
        status: "delivered",
      },
    ],
    deviceMode: "mobile",
    theme: "light",
  });

  useEffect(() => {
    setChatData((prev) => ({
      ...prev,
      platform: initialPlatform,
    }));
  }, [initialPlatform]);

  const activeTheme = theme || {
    pageGradient: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50",
    heroGradient: "bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600",
    heroDescriptionColor: "text-white opacity-90",
  };

  const { success, error: toastError } = useToast();
  const [exportFormat, setExportFormat] = useState<'png' | 'jpeg' | 'jpg' | 'webp' | 'pdf'>('png');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [includeExif, setIncludeExif] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    await downloadComponentAsImage(
      "chat-screen-capture",
      `chat-${chatData.platform}-${Date.now()}`,
      { format: exportFormat, includeExif, isMobile: true }
    );
    const finalFormat = exportFormat.toUpperCase();
    success(`${finalFormat} downloaded successfully!${includeExif ? " (with EXIF metadata)" : ""}`);
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const handleCopy = async () => {
    if (isCopying) return;
    setIsCopying(true);
    try {
      await copyComponentToClipboard("chat-screen-capture", { includeExif, isMobile: true });
      success(`Chat screenshot copied to clipboard!${includeExif ? " (with EXIF metadata)" : ""}`);
    } catch (err) {
      console.error("Failed to copy chat screenshot:", err);
      toastError("Failed to copy image to clipboard.");
    } finally {
      setIsCopying(false);
    }
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
             <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
                
                {/* Export Options & Button */}
                <div className="flex flex-wrap items-center gap-2">
                  <CustomDropdown
                    value={exportFormat}
                    onChange={(val) => setExportFormat(val as any)}
                    options={exportFormatOptions}
                    ariaLabel="Export Format"
                  />

                  <label className="flex items-center gap-2 cursor-pointer bg-white border border-gray-300 hover:border-green-500/50 text-gray-700 px-3.5 py-2 rounded-lg text-sm font-semibold select-none transition-all duration-200"
                    style={{
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={includeExif}
                      onChange={(e) => setIncludeExif(e.target.checked)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
                    />
                    <span className="font-semibold whitespace-nowrap text-gray-700">Add EXIF</span>
                  </label>
                  
                  <button
                    onClick={handleCopy}
                    disabled={isCopying}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-60 transition-colors shadow-sm text-sm font-medium cursor-pointer"
                  >
                    {isCopying ? <Loader2 size={16} className="animate-spin" /> : <Copy size={16} />}
                    {isCopying ? "Copying..." : "Copy"}
                  </button>

                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-60 transition-colors shadow-sm text-sm font-medium cursor-pointer"
                  >
                    <Download size={16} />
                    {isDownloading ? "Downloading..." : `Download ${exportFormat.toUpperCase()}`}
                  </button>
                </div>
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

        {extraContent && (
          <div className="mt-16 border-t border-gray-200/80 pt-12">
            {extraContent}
          </div>
        )}
      </main>
    </div>
  );
}
