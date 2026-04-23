import { ChatData, ChatMessage, ChatPlatform } from "@/types/chat";
import { useState } from "react";
import { Plus, Trash2, User, Monitor, Smartphone, Sun, Moon } from "lucide-react";

interface ChatFormProps {
  chatData: ChatData;
  onUpdate: (data: Partial<ChatData>) => void;
  showPlatformSelector?: boolean;
}

export const ChatForm = ({ chatData, onUpdate, showPlatformSelector = true }: ChatFormProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [newSender, setNewSender] = useState<"me" | "them">("them");

  const addMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: ChatMessage = {
      id: Date.now().toString(),
      text: newMessage,
      sender: newSender,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "read"
    };

    onUpdate({
      messages: [...chatData.messages, message]
    });
    setNewMessage("");
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
            <label className="block text-sm font-semibold text-gray-700">Platform</label>
            <select 
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
          <label className="block text-sm font-semibold text-gray-700">Contact Name</label>
          <input 
            type="text"
            value={chatData.contactName}
            onChange={(e) => onUpdate({ contactName: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Status (Online/Last seen)</label>
          <input 
            type="text"
            value={chatData.contactStatus}
            onChange={(e) => onUpdate({ contactStatus: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="space-y-4 border-t pt-4">
        <label className="block text-sm font-semibold text-gray-700">Messages</label>
        <div className="space-y-4 max-h-[400px] overflow-y-auto p-2 border rounded-lg bg-gray-50">
          {chatData.messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col gap-1 ${msg.sender === "me" ? "items-end" : "items-start"}`}>
              <div className="flex items-center gap-2 w-full max-w-[90%]">
                <div className={`flex-1 p-2 rounded-lg text-sm shadow-sm ${msg.sender === "me" ? "bg-blue-600 text-white" : "bg-white text-gray-800 border"}`}>
                  <textarea 
                    value={msg.text}
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
              
              <div className={`flex items-center gap-2 text-[10px] ${msg.sender === "me" ? "flex-row-reverse mr-1" : "ml-1"} text-gray-500`}>
                <input 
                  type="text" 
                  value={msg.timestamp}
                  onChange={(e) => updateMessage(msg.id, { timestamp: e.target.value })}
                  className="bg-transparent border-none p-0 focus:ring-0 w-16 text-[10px]"
                />
                {msg.sender === "me" && (
                  <select 
                    value={msg.status}
                    onChange={(e) => updateMessage(msg.id, { status: e.target.value as any })}
                    className="bg-transparent border-none p-0 focus:ring-0 text-[10px] cursor-pointer"
                  >
                    <option value="sent">Sent</option>
                    <option value="delivered">Delivered</option>
                    <option value="read">Read</option>
                  </select>
                )}
                <button 
                  onClick={() => updateMessage(msg.id, { sender: msg.sender === "me" ? "them" : "me" })}
                  className="hover:text-blue-500 transition-colors"
                >
                  Switch Side
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* New Message Input */}
        <div className="flex gap-2 bg-white p-3 rounded-lg border shadow-sm">
          <select 
            value={newSender}
            onChange={(e) => setNewSender(e.target.value as "me" | "them")}
            className="p-2 border rounded-lg text-xs"
          >
            <option value="them">Them</option>
            <option value="me">Me</option>
          </select>
          <input 
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addMessage()}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
          />
          <button 
            onClick={addMessage}
            className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
