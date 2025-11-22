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
    if (item.keywords.some((k) => lower.includes(k))) return item.answer;
  }
  return null;
}

export default function ChatWindow({ onClose, onNewMessage }) {
  const { darkMode } = useContext(ThemeContext);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

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

  // Auto Scroll
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, thinking]);

  const pushBotMessage = (t) => {
    setMessages((prev) => [...prev, { sender: "bot", text: t }]);
    if (onNewMessage) onNewMessage();
  };

  const pushUserMessage = (t) => {
    setMessages((prev) => [...prev, { sender: "user", text: t }]);
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
        await new Promise((r) => setTimeout(r, 300));
        pushBotMessage(hard);
        setTyping(false);
        setThinking(false);
        return;
      }

      const res = await fetch("https://rudra-portfolio-backend.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!res.ok) {
        pushBotMessage("Sorry — couldn't get a response. Try again later.");
        return;
      }

      const data = await res.json();
      const reply = data?.reply ?? "No reply.";
      await new Promise((r) => setTimeout(r, 200));

      pushBotMessage(reply);
    } catch {
      pushBotMessage("Something went wrong — check console.");
    } finally {
      setTyping(false);
      setThinking(false);
      setSending(false);
    }
  };

  const sendSuggestion = (t) => sendMessage(t);

  const bg = darkMode ? "bg-[#0b0a0f]/95" : "bg-white/95";
  const border = darkMode
    ? "border border-white/10"
    : "border border-purple-200/50";

  const inputBg = darkMode
    ? "bg-black/20 text-white"
    : "bg-white text-gray-900";

  return (
    <>
      <style>{`
        .bubble { position: relative; }
        .bubble.bot::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 14px;
          bottom: -6px;
          left: 14px;
          transform: rotate(45deg);
          background: ${darkMode ? "#0f0e12" : "white"};
        }
        .typing-dots span {
          width: 6px; height: 6px;
          margin: 0 2px;
          background: ${darkMode ? "#d1d5db" : "#6b7280"};
          border-radius: 50%;
          display: inline-block;
          opacity: 0.6;
          animation: ${isMobile ? "none" : "bounce 1s infinite"};
        }
        .typing-dots span:nth-child(2){ animation-delay: .15s; }
        .typing-dots span:nth-child(3){ animation-delay: .3s; }
        @keyframes bounce {
          0%,100%{ transform:translateY(0); }
          50%{ transform:translateY(-6px); opacity:1; }
        }
      `}</style>

      <motion.div
        initial={isMobile ? {} : { opacity: 0, y: 20 }}
        animate={isMobile ? {} : { opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: isMobile ? 0 : 0.2 }}
        className={`fixed bottom-24 right-6 z-[9999] 
          w-80 h-96 lg:w-96 lg:h-[520px]
          rounded-2xl shadow-xl flex flex-col
          ${bg} ${border}
        `}
      >
        {/* Header */}
        <div
          className={`px-4 py-3 rounded-t-2xl text-white flex justify-between items-center ${
            darkMode
              ? "bg-[#6C2BD9]"
              : "bg-purple-500"
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
        <div className={`px-3 py-2 border-b ${border}`}>
          <div className="flex gap-2 overflow-x-auto">
            {SUGGESTED_PROMPTS.map((p, i) => (
              <button
                key={i}
                onClick={() => sendSuggestion(p)}
                className={`px-3 py-1.5 rounded-xl whitespace-nowrap text-sm ${
                  darkMode
                    ? "bg-white/10 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, i) => {
            const isUser = m.sender === "user";

            return (
              <div
                key={i}
                className={`bubble ${isUser ? "user" : "bot"} max-w-[80%] ${
                  isUser ? "ml-auto" : "mr-auto"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-xl text-sm ${
                    isUser ? "text-white" : darkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                  style={{
                    background: isUser
                      ? "linear-gradient(90deg,#7c2bd9,#ec4899)"
                      : darkMode
                      ? "#0f0e12"
                      : "white",
                  }}
                >
                  {m.text}
                </div>
              </div>
            );
          })}

          {typing && (
            <div className="bubble bot max-w-[80%] mr-auto">
              <div
                className={`px-4 py-2 rounded-xl ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
                style={{
                  background: darkMode ? "#0f0e12" : "white",
                }}
              >
                <div className="typing-dots flex">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className={`px-3 py-3 border-t ${border}`}>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className={`flex-1 px-4 py-2 rounded-xl outline-none ${inputBg}`}
              placeholder="Type a message..."
            />

            <button
              onClick={() => sendMessage()}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white"
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
