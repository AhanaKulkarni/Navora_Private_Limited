"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Hi there! Looking for a new maritime career? How can I help?' }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");
    
    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Thanks for reaching out! Our team is currently reviewing opportunities that might match your query. In the meantime, feel free to browse our jobs portal.' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-[#24439C] text-white rounded-full shadow-2xl hover:bg-[#1a3070] transition-transform hover:scale-105 z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-[#24439C] p-4 text-white flex justify-between items-center">
              <div className="font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Navora Support
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 bg-slate-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.role === 'user' ? 'bg-[#24439C] text-white self-end rounded-br-sm' : 'bg-white border border-gray-100 text-gray-800 self-start rounded-bl-sm shadow-sm'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 px-3 py-2 bg-slate-100 rounded-full outline-none text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="p-2 bg-[#CEA72B] text-[#24439C] rounded-full hover:bg-[#b0882e] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
