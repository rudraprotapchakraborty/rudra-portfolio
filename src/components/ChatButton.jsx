import { useState } from "react";
import { X } from "lucide-react";
import ChatWindow from "./ChatWindow";
import { motion, AnimatePresence } from "framer-motion";
import chatLogo from "../assets/icons/chatgpt.png";

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const toggleChat = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true);
    setOpen((prev) => !prev);

    // Clear purple dot when chat opens
    if (!open) setHasNewMessage(false);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* FIXED CONTAINER prevents float shifting */}
      <div className="fixed bottom-6 right-6 z-[10000] flex items-center gap-3">

        {/* “Click Me!” bubble (only before first open) */}
        {!hasOpenedOnce && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: isMobile ? 0 : [0, -6, 0] 
            }}
            transition={{
              duration: 1,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              px-3 py-2 rounded-xl shadow-md
              text-purple-600 text-sm
              bg-white/40 backdrop-blur-sm
              border border-white/40
              pointer-events-none
            "
          >
            Click me!
          </motion.div>
        )}

        {/* MAIN CHAT BUTTON */}
        <motion.button
          onClick={toggleChat}
          whileHover={!isMobile ? { scale: 1.08 } : {}}
          animate={!isMobile ? { y: [0, -6, 0] } : {}}
          transition={{
            duration: 2,
            repeat: !isMobile ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="
            w-14 h-14 rounded-full relative
            bg-white/10 backdrop-blur-md
            border border-white/20 shadow-lg
            flex items-center justify-center
          "
        >
          {/* ⭐ Purple notification dot */}
          {hasNewMessage && !open && (
            <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-purple-400 rounded-full shadow-md animate-pulse"></div>
          )}

          {/* ⭐ Purple dot for first-time user */}
          {!hasOpenedOnce && !open && !hasNewMessage && (
            <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-purple-400 rounded-full animate-pulse"></div>
          )}

          {/* ICON SWITCH (PNG ↔ CLOSE) */}
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.img
                key="logo"
                src={chatLogo}
                alt="Chat Icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 object-contain"
              />
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {open && (
          <ChatWindow
            onClose={toggleChat}
            onNewMessage={() => {
              if (!open) setHasNewMessage(true);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
