import { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const SUGGESTED_PROMPTS = [
  "What skills do you have?",
  "How long do you work per day?",
  "What projects have you built?",
  "Introduce yourself.",
  "What's your weekly schedule?",
];

const predefined = [
  {
    keywords: ["work", "hours", "day", "how long"],
    answer:
      "I usually work 6–8 hours per day depending on the workload and project complexity.",
  },
  {
    keywords: ["days", "week", "schedule"],
    answer: "I typically work 5–6 days a week, keeping Sundays flexible for rest and learning.",
  },
  {
    keywords: ["skills", "tech stack", "stack"],
    answer:
      "My strongest skills are MERN Stack (MongoDB, Express, React, Node), UI/UX polish, animations, backend logic, and clean architecture.",
  },
  {
    keywords: ["projects", "portfolio", "work"],
    answer:
      "You can explore my projects including a health-care system, chat app, portfolio website, and several MERN apps on my GitHub.",
  },
  {
    keywords: ["about you", "who are you", "introduce"],
    answer:
      "I'm Rudra Protap Chakraborty — a MERN Stack Developer focused on building fast, modern, and polished web experiences.",
  },
];

function matchHardcoded(message) {
  if (!message) return null;
  const lower = message.toLowerCase();
  for (const item of predefined) {
    if (item.keywords.some((k) => lower.includes(k))) {
      return item.answer;
    }
  }
  return null;
}

export default function ChatWindow({ onClose, onNewMessage }) {
  const { darkMode } = useContext(ThemeContext);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi — I'm Rudra's assistant. Try the suggested prompts or ask about Rudra's skills, projects, or schedule.",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [sending, setSending] = useState(false);
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, thinking]);

  const pushBotMessage = (text) => {
    setMessages((prev) => [...prev, { sender: "bot", text }]);
    if (onNewMessage) onNewMessage();
  };

  const pushUserMessage = (text) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
  };

  const sendMessage = async (override = null) => {
    const msg = override ?? input;
    if (!msg.trim()) return;

    pushUserMessage(msg);
    if (!override) setInput("");

    setTyping(true);
    setSending(true);
    setThinking(true);

    try {
      const hard = matchHardcoded(msg);
      if (hard) {
        await new Promise((r) => setTimeout(r, 400));
        setTyping(false);
        setThinking(false);
        pushBotMessage(hard);
        setSending(false);
        return;
      }

      const res = await fetch("https://rudra-portfolio-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) {
        pushBotMessage("Sorry — couldn't get a response. Please try again later.");
        setTyping(false);
        setThinking(false);
        setSending(false);
        return;
      }

      const data = await res.json();
      const reply = data?.reply ?? "No reply.";

      await new Promise((r) => setTimeout(r, 250));

      setTyping(false);
      setThinking(false);
      pushBotMessage(reply);
    } catch (err) {
      pushBotMessage("Something went wrong — check console.");
    } finally {
      setSending(false);
    }
  };

  const sendSuggestion = (text) => sendMessage(text);

  const bg = darkMode ? "bg-[#0b0a0f]/95" : "bg-white/90";
  const containerBorder = darkMode ? "border border-white/10" : "border border-purple-200/60";
  const inputBg = darkMode ? "bg-black/20 text-white" : "bg-white text-gray-900";

  return (
    <>
      {/* Bubble tail + typing dots CSS */}
      <style>{`
        .bubble { position: relative; }

        .bubble.bot::after,

        .bubble.bot::after {
          left: 14px;
          background: ${darkMode ? "#0f0e12" : "#ffffff"};
        }

        .typing-dots span {
          width: 6px;
          height: 6px;
          margin: 0 2px;
          background: ${darkMode ? "#d1d5db" : "#6b7280"};
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1s infinite;
          opacity: 0.6;
        }

        .typing-dots span:nth-child(2) { animation-delay: 0.15s; }
        .typing-dots span:nth-child(3) { animation-delay: 0.3s; }

        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`fixed bottom-24 right-6 z-[9999] w-80 h-96 lg:w-96 lg:h-[520px] 
          rounded-2xl shadow-2xl flex flex-col ${bg} ${containerBorder}`}
      >
        {/* Header */}
        <div
          className={`px-4 py-3 rounded-t-2xl text-white flex justify-between items-center 
            ${darkMode 
              ? "bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899]" 
              : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
        >
          <div>
            <div className="font-semibold">Rudra AI Assistant</div>
            <div className="text-xs opacity-80">Portfolio helper</div>
          </div>

          <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
            <X size={18} />
          </button>
        </div>

        {/* Suggested Prompts */}
        <div className={`px-3 py-2 border-b ${darkMode ? "border-white/10" : "border-purple-200/50"}`}>
          <div className="flex gap-2 overflow-x-auto">
            {SUGGESTED_PROMPTS.map((p, i) => (
              <button
                key={i}
                onClick={() => sendSuggestion(p)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap text-sm transition 
                  ${darkMode 
                    ? "bg-white/10 text-white hover:bg-white/20" 
                    : "bg-white text-gray-700 border border-purple-200 hover:bg-purple-50"
                  }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, index) => {
            const isUser = m.sender === "user";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isUser ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`bubble ${isUser ? "user" : "bot"} max-w-[80%] 
                  ${isUser ? "ml-auto" : "mr-auto"}
                `}
              >
                <div
                  className={`px-4 py-2 rounded-xl ${
                    isUser ? "text-white" : darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                  style={{
                    background: isUser
                      ? "linear-gradient(90deg,#7c2bd9,#ec4899)"
                      : darkMode
                      ? "#0f0e12"
                      : "white",
                    border: isUser ? "none" : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {m.text}
                </div>
              </motion.div>
            );
          })}

          {/* typing bubble */}
          {typing && (
            <div className="bubble bot max-w-[80%] mr-auto">
              <div
                className={`px-4 py-2 rounded-xl ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
                style={{
                  background: darkMode ? "#0f0e12" : "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="typing-dots flex">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          {/* thinking placeholder */}
          {thinking && !typing && (
            <div className="text-center text-sm text-gray-500">Bot is thinking…</div>
          )}
        </div>

        {/* Input Box */}
        <div className={`px-3 py-3 border-t ${darkMode ? "border-white/10" : "border-purple-200/50"}`}>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className={`flex-1 px-4 py-2 rounded-xl outline-none ${inputBg}`}
            />
            <button
              onClick={() => sendMessage()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
