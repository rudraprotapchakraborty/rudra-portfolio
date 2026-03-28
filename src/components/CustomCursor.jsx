import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useDevice from "../hooks/useDevice";

const CustomCursor = () => {
  const { isMobile } = useDevice();
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer circle
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Faster spring for the inner dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 400 });

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none"; // Hide default

    const addHoverListeners = () => {
      const elements = document.querySelectorAll(
        "a, button, input, textarea, .hover-target"
      );
      elements.forEach((el) => {
        el.style.cursor = "none";
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });
      return elements;
    };

    // Run once, and ideally observe mutations if SPA changes DOM
    let elements = addHoverListeners();
    const observer = new MutationObserver(() => {
      // Re-attach listeners when DOM changes (ideal for React Router)
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      elements = addHoverListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
      observer.disconnect();
      elements.forEach((el) => {
        el.style.cursor = "";
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: isHovering ? "rgba(255, 255, 255, 0.8)" : "transparent",
          border: isHovering ? "0px solid transparent" : "2px solid rgba(255, 255, 255, 0.4)",
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ scale: { type: "tween", duration: 0.2 } }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
