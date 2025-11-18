import { useEffect, useState } from "react";

const WarpSpeedStars = () => {
  const [active, setActive] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 300) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-1000 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-full bg-black/90 flex justify-center items-center">
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <span
              key={i}
              className="absolute bg-white opacity-50"
              style={{
                width: "2px",
                height: "30px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `warpStar 1.2s linear infinite`,
                animationDelay: `${i * 0.01}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes warpStar {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translateY(200vh) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WarpSpeedStars;
