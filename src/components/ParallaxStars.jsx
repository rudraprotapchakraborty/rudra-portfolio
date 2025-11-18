import { useEffect, useState } from "react";

const ParallaxStars = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background:
          'radial-gradient(2px 2px at 10% 20%, white, transparent), ' +
          'radial-gradient(1.5px 1.5px at 30% 40%, #ff5e3a, transparent), ' +
          'radial-gradient(1px 1px at 60% 80%, #b620e0, transparent), ' +
          'radial-gradient(1.8px 1.8px at 85% 50%, #ff4c29, transparent)',
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        transform: `translateY(${offsetY * 0.3}px)`,
        opacity: 0.15,
        willChange: "transform",
      }}
    />
  );
};

export default ParallaxStars;
