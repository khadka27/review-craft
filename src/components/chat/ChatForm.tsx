import { ChatData, ChatMessage, ChatPlatform } from "@/types/chat";
import { useState } from "react";
import { Plus, Trash2, User, Monitor, Smartphone, Sun, Moon, Upload, X, ImageIcon, RefreshCw } from "lucide-react";
import { useRef } from "react";

interface ChatFormProps {
  chatData: ChatData;
  onUpdate: (data: Partial<ChatData>) => void;
  showPlatformSelector?: boolean;
}

export const ChatForm = ({ chatData, onUpdate, showPlatformSelector = true }: ChatFormProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [newMessageImage, setNewMessageImage] = useState<string | null>(null);
  const [newSender, setNewSender] = useState<"me" | "them">("them");
  const [avatarType, setAvatarType] = useState<"api" | "default" | "custom">("api");
  const [customAvatarUrl, setCustomAvatarUrl] = useState("");
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const messageImageInputRef = useRef<HTMLInputElement>(null);

  const statusOptions = [
    "Online",
    "Last seen today",
    "Last seen yesterday",
    "typing...",
    "Last seen recently",
    "Custom"
  ];

  const handleAvatarTypeChange = (type: "api" | "default" | "custom") => {
    setAvatarType(type);
    if (type === "default") {
      onUpdate({ contactAvatar: "/images/default-avatar.jpg" });
    } else if (type === "api") {
      onUpdate({ contactAvatar: `https://i.pravatar.cc/150?u=${chatData.contactName || 'chat'}` });
    }
  };

  const handleCustomAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onUpdate({ contactAvatar: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMessageImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setNewMessageImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addMessage = () => {
    if (!newMessage.trim() && !newMessageImage) return;
    
    const message: ChatMessage = {
      id: Date.now().toString(),
      text: newMessage.trim() || undefined,
      sender: newSender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "read",
      image: newMessageImage || undefined
    };

    onUpdate({
      messages: [...chatData.messages, message]
    });
    setNewMessage("");
    setNewMessageImage(null);
  };

  const removeMessage = (id: string) => {
    onUpdate({
      messages: chatData.messages.filter(m => m.id !== id)
    });
  };

  const updateMessage = (id: string, updates: Partial<ChatMessage>) => {
    onUpdate({
      messages: chatData.messages.map(m => m.id === id ? { ...m, ...updates } : m)
    });
  };

  return (
    <div className="space-y-6">
      {/* Platform & Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {showPlatformSelector && (
          <div className="space-y-2">
            <label htmlFor="chat-platform" className="block text-sm font-semibold text-gray-700">Platform</label>
            <select aria-label="Select option" 
              id="chat-platform"
              value={chatData.platform}
              onChange={(e) => onUpdate({ platform: e.target.value as ChatPlatform })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="messenger">Messenger</option>
              <option value="instagram">Instagram</option>
              <option value="telegram">Telegram</option>
              <option value="discord">Discord</option>
              <option value="twitter">Twitter</option>
              <option value="imessage">iMessage</option>
            </select>
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Appearance</label>
          <div className="flex gap-2">
            <button 
              onClick={() => onUpdate({ theme: "light" })}
              className={`flex-1 p-2 border rounded-lg flex items-center justify-center gap-2 ${chatData.theme === "light" ? "bg-blue-50 border-blue-500 text-blue-600" : "bg-white"}`}
            >
              <Sun size={16} /> Light
            </button>
            <button 
              onClick={() => onUpdate({ theme: "dark" })}
              className={`flex-1 p-2 border rounded-lg flex items-center justify-center gap-2 ${chatData.theme === "dark" ? "bg-gray-800 border-gray-900 text-white" : "bg-white"}`}
            >
              <Moon size={16} /> Dark
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
        <div className="space-y-2">
          <label htmlFor="chat-contact-name" className="block text-sm font-semibold text-gray-700">Contact Name</label>
          <input 
            id="chat-contact-name"
            type="text"
            value={chatData.contactName}
            onChange={(e) => onUpdate({ contactName: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="chat-status" className="block text-sm font-semibold text-gray-700">Status (Online/Last seen)</label>
          <div className="flex gap-2">
            <select aria-label="Select option" 
              id="chat-status"
              value={statusOptions.slice(0, -1).includes(chatData.contactStatus) ? chatData.contactStatus : "Custom"}
              onChange={(e) => {
                if (e.target.value !== "Custom") {
                  onUpdate({ contactStatus: e.target.value });
                } else {
                  onUpdate({ contactStatus: "" }); // Clear to show placeholder
                }
              }}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
            >
              {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            {!statusOptions.slice(0, -1).includes(chatData.contactStatus) ? (
              <input 
                id="chat-custom-status"
                type="text"
                value={chatData.contactStatus}
                onChange={(e) => onUpdate({ contactStatus: e.target.value })}
                placeholder="Enter custom status..."
                aria-label="Custom status"
                className="flex-1 p-2 border border-gray-300 rounded-lg"
              />
            ) : null}
          </div>
        </div>

        {/* Profile Image Selection */}
        <div className="space-y-3 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">Profile Image</label>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="relative group">
              {chatData.contactAvatar ? (
                <img 
                  src={chatData.contactAvatar} 
                  alt="Avatar" 
                  className="w-16 h-16 rounded-full border border-gray-200 object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <User size={32} />
                </div>
              )}
              {avatarType === "api" && (
                <button 
                  onClick={() => onUpdate({ contactAvatar: `https://i.pravatar.cc/150?u=${Date.now()}` })}
                  className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-md border hover:text-blue-600 transition-colors"
                  title="Refresh random image"
                >
                  <RefreshCw size={12} />
                </button>
              )}
            </div>

            <div className="flex-1 space-y-3 w-full">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => handleAvatarTypeChange("api")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${avatarType === "api" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Generate API
                </button>
                <button 
                  onClick={() => handleAvatarTypeChange("default")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${avatarType === "default" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Default
                </button>
                <button 
                  onClick={() => handleAvatarTypeChange("custom")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${avatarType === "custom" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Custom Upload
                </button>
              </div>

              {avatarType === "custom" && (
                <div className="flex gap-2 w-full">
                  <input 
                    type="file"
                    ref={avatarInputRef}
                    onChange={handleCustomAvatarUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button 
                    onClick={() => avatarInputRef.current?.click()}
                    aria-label="Upload Image"
                    className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Upload size={16} />
                    Upload Image
                  </button>
                  <div className="flex-1">
                    <input 
                      id="chat-custom-avatar-url"
                      type="text"
                      value={chatData.contactAvatar.startsWith('data:') ? '' : chatData.contactAvatar}
                      onChange={(e) => onUpdate({ contactAvatar: e.target.value })}
                      placeholder="Or paste image URL"
                      aria-label="Custom image URL"
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className="space-y-4 border-t pt-4">
        <label className="block text-sm font-semibold text-gray-700">Messages</label>
        <div className="space-y-4 max-h-[400px] overflow-y-auto p-2 border rounded-lg bg-gray-50">
          {chatData.messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-1.5 ${msg.sender === "me" ? "items-end" : "items-start"}`}>
              <div className="flex items-center gap-2 w-full max-w-[90%]">
                <div className={`flex-1 p-2 rounded-lg text-sm shadow-sm ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-white text-gray-800 border"}`}>
                  {msg.image && (
                    <div className="relative mb-2 group">
                      <img src={msg.image} alt="Attached" className="max-w-full h-32 object-cover rounded" />
                      <button 
                        onClick={() => updateMessage(msg.id, { image: undefined })}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  )}
                  <textarea 
                    value={msg.text || ""}
                    onChange={(e) => updateMessage(msg.id, { text: e.target.value })}
                    className="w-full bg-transparent border-none focus:ring-0 resize-none p-0 min-h-[1.25rem]"
                    rows={1}
                  />
                </div>
                <button 
                  onClick={() => removeMessage(msg.id)}
                  className="text-red-400 hover:text-red-600 p-1 flex-shrink-0"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] ${msg.sender === "me" ? "flex-row-reverse mr-1" : "ml-1"} text-gray-500`}>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Time:</span>
                  <input 
                    type="text" 
                    value={msg.timestamp}
                    onChange={(e) => updateMessage(msg.id, { timestamp: e.target.value })}
                    className="bg-transparent border border-gray-200 rounded px-1 py-0.5 focus:ring-1 focus:ring-blue-500 w-16 text-[10px]"
                  />
                </div>
                {msg.sender === "me" && (
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">Status:</span>
                    <select aria-label="Select option" 
                      id={`chat-msg-status-${msg.id}`}
                      value={msg.status}
                      onChange={(e) => updateMessage(msg.id, { status: e.target.value as any })}
                      aria-label="Message status"
                      className="bg-transparent border border-gray-200 rounded px-1 py-0.5 focus:ring-1 focus:ring-blue-500 text-[10px] cursor-pointer"
                    >
                      <option value="sent">Sent</option>
                      <option value="delivered">Delivered</option>
                      <option value="read">Read</option>
                    </select>
                  </div>
                )}
                <button 
                  onClick={() => updateMessage(msg.id, { sender: msg.sender === "me" ? "them" : "me" })}
                  aria-label="Switch side"
                  className="hover:text-blue-500 transition-colors border border-gray-200 rounded px-1.5 py-0.5 bg-white shadow-sm"
                >
                  Switch Side
                </button>

                {/* Reaction Tool */}
                <div className="flex items-center gap-1 bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">
                  <span className="font-semibold text-gray-400">React:</span>
                  {["👍", "❤️", "😂", "😮", "😢", "😡"].map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => updateMessage(msg.id, { reaction: msg.reaction === emoji ? undefined : emoji })}
                      className={`w-4 h-4 flex items-center justify-center rounded-full text-[10px] transition-all hover:scale-125 ${msg.reaction === emoji ? "bg-blue-100 border border-blue-300 scale-110" : ""}`}
                      title={emoji}
                    >
                      {emoji}
                    </button>
                  ))}
                  <input
                    type="text"
                    placeholder="Other..."
                    value={msg.reaction || ""}
                    onChange={(e) => updateMessage(msg.id, { reaction: e.target.value || undefined })}
                    className="w-12 bg-transparent border-l border-gray-200 pl-1 ml-1 text-[10px] h-3.5 focus:ring-0 focus:border-none p-0 outline-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Message Input */}
        <div className="flex flex-col gap-2 bg-white p-3 rounded-lg border shadow-sm">
          {newMessageImage && (
            <div className="relative inline-block w-20 h-20 mb-2">
              <img src={newMessageImage} className="w-full h-full object-cover rounded-lg border" />
              <button 
                onClick={() => setNewMessageImage(null)}
                className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
              >
                <X size={12} />
              </button>
            </div>
          )}
          <div className="flex gap-2">
            <select aria-label="Select option" 
              id="chat-new-sender"
              value={newSender}
              onChange={(e) => setNewSender(e.target.value as "me" | "them")}
              aria-label="Sender"
              className="p-2 border rounded-lg text-xs"
            >
              <option value="them">Them</option>
              <option value="me">Me</option>
            </select>
            <input 
              id="chat-new-message"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addMessage()}
              placeholder="Type a message..."
              aria-label="New message text"
              className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
            />
            <input 
              id="chat-new-image"
              type="file"
              ref={messageImageInputRef}
              onChange={handleMessageImageUpload}
              accept="image/*"
              className="hidden"
            />
            <button 
              onClick={() => messageImageInputRef.current?.click()}
              className={`p-2 rounded-lg border transition-colors ${newMessageImage ? "bg-blue-50 border-blue-200 text-blue-600" : "bg-white text-gray-500 hover:bg-gray-50"}`}
              title="Attach Image"
            >
              <ImageIcon size={20} />
            </button>
            <button 
              onClick={addMessage}
              className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
