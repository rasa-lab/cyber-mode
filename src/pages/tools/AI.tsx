import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function AI() {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Halo! Saya OTAX AI Assistant. Ada yang bisa saya bantu hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'You are OTAX AI, a helpful virtual assistant integrated into the OTAX Dashboard. Answer in Indonesian.',
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Maaf, saya tidak mengerti.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Terjadi kesalahan saat menghubungi server AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] p-4">
      <div className="flex items-center gap-3 mb-4 shrink-0">
        <div className="flex items-center justify-center w-10 h-10 bg-red-500/20 rounded-xl">
          <Gamepad2 className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Game & <span className="text-red-500">AI</span></h2>
          <p className="text-xs text-zinc-400">OTAX AI Assistant</p>
        </div>
      </div>

      <div className="flex-1 p-4 mb-4 overflow-y-auto border bg-zinc-900/50 border-white/5 rounded-3xl">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${msg.role === 'user' ? 'bg-red-500/20 text-red-500' : 'bg-zinc-800 text-zinc-400'}`}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`p-3 text-sm rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-zinc-800 text-zinc-300 rounded-tl-none'}`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-zinc-800 text-zinc-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 text-sm rounded-2xl bg-zinc-800 text-zinc-300 rounded-tl-none flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-red-500" /> Thinking...
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={handleSend} className="relative shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message OTAX AI..."
          className="w-full py-4 pl-4 pr-12 text-sm text-white transition-all border outline-none bg-zinc-900/50 border-white/10 rounded-2xl focus:border-red-500/50 focus:bg-zinc-900"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="absolute right-2 top-2 bottom-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
