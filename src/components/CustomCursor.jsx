import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", moveCursor);
    document.body.style.cursor = "none";

    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      el.style.cursor = "none";
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.style.cursor = "default";
      elements.forEach((el) => {
        el.style.cursor = "";
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        width: isHovering ? "32px" : "16px",
        height: isHovering ? "32px" : "16px",
        background: isHovering
          ? "radial-gradient(circle, rgba(203,80,255,0.35) 0%, rgba(203,80,255,0.05) 80%)"
          : "radial-gradient(circle, rgba(203,80,255,0.25) 0%, rgba(203,80,255,0.05) 80%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        transition:
          "width 0.2s ease, height 0.2s ease, background 0.2s ease, transform 0.1s ease-out",
      }}
    />
  );
};

export default CustomCursor;
