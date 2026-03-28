import { useState } from "react";
import { X } from "lucide-react";
import ChatWindow from "./ChatWindow";
import { motion, AnimatePresence } from "framer-motion";
import { BotMessageSquare } from "lucide-react";

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const toggleChat = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true);
    setOpen((prev) => !prev);
    if (!open) setHasNewMessage(false);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[10000] flex items-center gap-4">

        {/* “Ask AI!” floating badge (only before first open) */}
        {!hasOpenedOnce && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              y: isMobile ? 0 : [0, -4, 0] 
            }}
            transition={{
              duration: 2,
              repeat: isMobile ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="
              px-4 py-2 rounded-full shadow-xl
              text-white font-semibold text-sm
              bg-gradient-to-r from-purple-500 to-pink-500
              border border-white/20
              pointer-events-none relative
            "
          >
            Ask AI!
            {/* Connection Triangle */}
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-pink-500 rotate-45 -z-10" />
          </motion.div>
        )}

        {/* MAIN CHAT ORB */}
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={!isMobile ? { y: [0, -8, 0] } : {}}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`
            w-16 h-16 rounded-full relative
            flex items-center justify-center shadow-2xl transition-shadow
            hover:shadow-purple-500/50
            ${open ? "bg-white/10 backdrop-blur-md border border-white/20" : "bg-gradient-to-tr from-purple-600 via-purple-500 to-pink-500"}
          `}
        >
          {/* Ambient Glow */}
          {!open && (
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 -z-10" />
          )}

          {/* Unread dot */}
          {(hasNewMessage || (!hasOpenedOnce && !open)) && !open && (
            <span className="absolute top-0 right-0 flex w-4 h-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-purple-500"></span>
            </span>
          )}

          {/* ICON SWITCH */}
          <AnimatePresence mode="wait">
             {!open ? (
                <motion.div 
                   key="bot" 
                   initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
                   exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
                   transition={{ duration: 0.2 }}
                >
                   <BotMessageSquare size={28} className="text-white" />
                </motion.div>
             ) : (
                <motion.div
                   key="close"
                   initial={{ opacity: 0, rotate: 45, scale: 0.5 }}
                   animate={{ opacity: 1, rotate: 0, scale: 1 }}
                   exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
                   transition={{ duration: 0.2 }}
                >
                   <X size={28} className="text-white" />
                </motion.div>
             )}
          </AnimatePresence>
        </motion.button>
      </div>

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
