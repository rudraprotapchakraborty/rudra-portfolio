import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
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
            className="fixed pointer-events-none rounded-full z-[9999] transition-transform duration-200 ease-out"
            style={{
                width: isHovering ? "50px" : "25px",
                height: isHovering ? "50px" : "25px",
                background: "rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                borderRadius: "50%",
                transition: "transform 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out, background 0.2s ease-out",
                transformOrigin: "center",
                backdropFilter: "invert(100%)"
            }}
        />
    );
};

export default CustomCursor;