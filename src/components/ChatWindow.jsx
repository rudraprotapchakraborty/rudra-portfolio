import { useState, useRef, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const SUGGESTED_PROMPTS = [
  "What skills do you have?",
  "How long do you work per day?",
  "What projects have you built?",
  "Introduce yourself.",
];

const predefined = [
  {
    keywords: ["work", "hours", "day", "how long"],
    answer: "I usually work 6–8 hours per day depending on the workload and project complexity.",
  },
  {
    keywords: ["days", "week", "schedule"],
    answer: "I typically work 5–6 days a week, keeping Sundays flexible for rest and learning.",
  },
  {
    keywords: ["skills", "tech stack", "stack"],
    answer: "My strongest skills are MERN Stack (MongoDB, Express, React, Node), UI/UX polish, animations, backend logic, and clean architecture.",
  },
  {
    keywords: ["projects", "portfolio", "work"],
    answer: "You can explore my projects including a health-care system, digital wallet, portfolio website, and several MERN apps on my GitHub.",
  },
  {
    keywords: ["about you", "who are you", "introduce"],
    answer: "I'm Rudra Protap Chakraborty — a MERN Stack Developer focused on building fast, modern, and polished web experiences.",
  },
];

function matchHardcoded(message) {
  if (!message) return null;
  const lower = message.toLowerCase();
  for (const item of predefined) {
    if (item.keywords.some((k) => lower.includes(k))) return item.answer;
  }
  return null;
}

export default function ChatWindow({ onClose, onNewMessage }) {
  const { darkMode } = useContext(ThemeContext);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const [messages, setMessages] = useState([
    {
      id: "initial-msg",
      sender: "bot",
      text: "Hi! I'm Rudra's AI assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, typing]);

  const pushBotMessage = (t) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "bot", text: t }]);
    if (onNewMessage) onNewMessage();
  };

  const pushUserMessage = (t) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "user", text: t }]);
  };

  const sendMessage = async (override = null) => {
    const msg = override ?? input;
    if (!msg.trim()) return;

    pushUserMessage(msg);
    if (!override) setInput("");
    setTyping(true);

    try {
      const hard = matchHardcoded(msg);
      if (hard) {
        await new Promise((r) => setTimeout(r, 600));
        pushBotMessage(hard);
        setTyping(false);
        return;
      }

      const res = await fetch("https://rudra-portfolio-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) {
        pushBotMessage("Sorry, I'm having trouble connecting right now.");
        return;
      }

      const data = await res.json();
      const reply = data?.reply ?? "No reply.";
      await new Promise((r) => setTimeout(r, 400));
      pushBotMessage(reply);
    } catch {
      pushBotMessage("Something went wrong connecting to my servers.");
    } finally {
      setTyping(false);
    }
  };

  const windowClasses = darkMode 
    ? "bg-[#0b0a0f]/80 border-white/10" 
    : "bg-white/70 border-gray-200/50";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
      className={`fixed bottom-24 right-6 lg:right-10 z-[10000] 
        w-[90vw] sm:w-[380px] h-[500px] lg:h-[600px]
        rounded-3xl shadow-2xl flex flex-col border backdrop-blur-3xl overflow-hidden
        ${windowClasses}
      `}
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-500/10 flex justify-between items-center bg-gradient-to-r from-purple-500/10 to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
            <Bot size={22} className="text-white" />
          </div>
          <div>
            <h3 className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"}`}>Rudra AI</h3>
            <div className="flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Online</span>
            </div>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="p-2 rounded-full bg-gray-500/10 hover:bg-gray-500/20 transition-colors"
        >
          <X size={20} className={darkMode ? "text-gray-300" : "text-gray-600"} />
        </button>
      </div>

      {/* Suggested Prompts */}
      <div className="px-4 py-3 border-b border-gray-500/10 hide-scrollbar overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2">
          {SUGGESTED_PROMPTS.map((p, i) => (
            <button
              key={i}
              onClick={() => sendMessage(p)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:scale-105 active:scale-95 ${
                darkMode ? "border-purple-500/30 text-purple-300 bg-purple-500/10 hover:bg-purple-500/20" : "border-purple-500/20 text-purple-700 bg-purple-50 hover:bg-purple-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((m) => {
            const isUser = m.sender === "user";
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? "bg-gray-200" : "bg-gradient-to-tr from-purple-500 to-pink-500"}`}>
                  {isUser ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-white" />}
                </div>
                
                {/* Bubble */}
                <div 
                  className={`px-5 py-3 rounded-2xl max-w-[75%] shadow-sm text-sm leading-relaxed ${
                    isUser 
                      ? "rounded-tr-none bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                      : darkMode ? "rounded-tl-none bg-white/10 text-gray-200 border border-white/5" : "rounded-tl-none bg-white border border-gray-100 text-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            );
          })}
          
          {/* Typing Indicator */}
          {typing && (
             <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex gap-3"
             >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-white" />
                </div>
                <div className={`px-4 py-4 rounded-2xl rounded-tl-none flex items-center gap-1.5 ${darkMode ? "bg-white/10" : "bg-white"}`}>
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-400"}`} />
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.15, ease: "easeInOut" }} className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-400"}`} />
                   <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.3, ease: "easeInOut" }} className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-gray-400" : "bg-gray-400"}`} />
                </div>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Area */}
      <div className={`p-4 bg-gradient-to-t ${darkMode ? "from-[#0b0a0f] to-transparent" : "from-white to-transparent"}`}>
        <div className={`flex items-center gap-2 p-2 rounded-full border shadow-inner ${darkMode ? "bg-white/5 border-white/10 focus-within:border-purple-500" : "bg-gray-50 border-gray-200 focus-within:border-purple-400"} transition-colors`}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask AI anything..."
            className="flex-1 bg-transparent px-4 py-2 outline-none text-sm placeholder-gray-500"
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center disabled:opacity-50 disabled:grayscale transition-all hover:scale-105 active:scale-95"
          >
            <Send size={18} className="translate-x-[1px] translate-y-[1px]" />
          </button>
        </div>
      </div>
      
    </motion.div>
  );
}
