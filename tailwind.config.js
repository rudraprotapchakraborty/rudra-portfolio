import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "warpStar": "warpStar 1.2s linear infinite",
      },
      keyframes: {
        warpStar: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.5" },
          "100%": { transform: "translateY(200vh) scale(3)", opacity: "0" },
        },
      },
    },
  },
  plugins: [daisyui],
};
