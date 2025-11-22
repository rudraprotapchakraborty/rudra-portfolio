import { useState } from "react";
import { X } from "lucide-react";
import ChatWindow from "./ChatWindow";
import { motion, AnimatePresence } from "framer-motion";
import chatLogo from "../assets/icons/chatgpt.png"; // your transparent PNG

const ChatButton = () => {
  const [open, setOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false); // ⭐ Purple new message dot

  const toggleChat = () => {
    if (!hasOpenedOnce) setHasOpenedOnce(true);
    setOpen((prev) => !prev);

    // Clear new message dot when opening
    if (!open) setHasNewMessage(false);
  };

  return (
    <>
      {/* FIXED WRAPPER TO PREVENT TRANSFORM SHIFTING */}
      <div className="fixed bottom-6 right-6 z-[10000] flex items-center gap-3">

        {/* ⭐ Floating “Click me!” bubble — only before first open */}
        {!hasOpenedOnce && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="
              px-3 py-2 rounded-xl
              bg-white/20 backdrop-blur-md
              border border-white/30
              text-purple-600 text-sm shadow-lg
              pointer-events-none
            "
          >
            Click me!
          </motion.div>
        )}

        {/* ⭐ Floating Chat Button */}
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "none" }}
          className="
            w-14 h-14 rounded-full relative
            bg-white/10 backdrop-blur-md
            border border-white/20 shadow-lg
            flex items-center justify-center cursor-pointer
          "
        >
          {/* ⭐ Purple new-message dot */}
          {hasNewMessage && !open && (
            <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-purple-400 rounded-full shadow-md animate-pulse"></div>
          )}

          {/* ⭐ First-time purple dot */}
          {!hasOpenedOnce && !open && !hasNewMessage && (
            <div className="absolute top-1 right-1 w-3.5 h-3.5 bg-purple-400 rounded-full animate-pulse"></div>
          )}

          {/* Icon switching */}
          <AnimatePresence mode="wait">
            {!open ? (
              <motion.img
                key="logo"
                src={chatLogo}
                alt="Chat Icon"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 object-contain pointer-events-none"
              />
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={30} className="text-white" />
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
              if (!open) setHasNewMessage(true); // purple dot appears
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
