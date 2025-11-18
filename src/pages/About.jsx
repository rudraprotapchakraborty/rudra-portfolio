import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import GlowOrb from "../components/GlowOrb";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const fadeInUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: "easeOut" },
    viewport: { once: true },
  });

  const floatingCards = [
    {
      title: "MERN Stack",
      body: "MongoDB, Express, React & Node.js for end-to-end web apps.",
      badge: "Full-Stack",
    },
    {
      title: "Clean UI, Clean Code",
      body: "Reusable components, clear structure, and attention to detail.",
      badge: "Frontend",
    },
    {
      title: "APIs & Logic",
      body: "REST APIs, authentication, and server-side logic that scales.",
      badge: "Backend",
    },
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-28 px-8 lg:px-24 min-h-screen 
        flex flex-col lg:flex-row items-center justify-between gap-16 
        transition-colors duration-700
        ${
          darkMode
            ? "bg-[#0b0a0f] text-white"
            : "bg-[#faf5ff] text-gray-900"
        }`}
    >
      {/* PURPLE GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.2] mix-blend-soft-light z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(138,43,226,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,43,226,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* PURPLE BLOBS */}
      <GlowOrb
        className="absolute top-[-150px] right-[-150px] w-[350px] h-[350px] blur-[180px] opacity-60 z-0"
        color="#C084FC"
      />
      <GlowOrb
        className="absolute bottom-[-150px] left-[-150px] w-[380px] h-[380px] blur-[200px] opacity-60 z-0"
        color="#A855F7"
      />

      {/* LEFT CONTENT */}
      <motion.div
        {...fadeInUp()}
        className="lg:w-1/2 z-10 space-y-8 text-center lg:text-left"
      >
        {/* PURPLE HEADING GLOW */}
        <div className="relative inline-block">
          <span
            className="
              absolute -inset-x-10 -inset-y-6 
              bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-[#EC4899]
              blur-2xl opacity-60 rounded-3xl -z-10
            "
          />
          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold leading-tight 
                       bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#EC4899] 
                       bg-clip-text text-transparent"
            {...fadeInUp(0)}
          >
            About Me
          </motion.h1>
        </div>

        {/* MAIN ABOUT TEXT – SHORT HIRING-FRIENDLY FULL-STACK VERSION */}
        <motion.p
          {...fadeInUp(0.2)}
          className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hi, I’m{" "}
          <span className="font-semibold text-[#A855F7]">
            Rudra Protap Chakraborty
          </span>
          , a full-stack developer who builds fast, clean, and user-focused web
          applications using the{" "}
          <span className="font-semibold text-[#A855F7]">MERN stack</span>. I
          enjoy designing smooth, modern interfaces on the front-end and writing
          efficient, scalable logic on the back-end.
        </motion.p>

        <motion.p
          {...fadeInUp(0.35)}
          className={`text-lg leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I focus on maintainable code, polished user experience, and continuous
          learning through real-world projects, documentation, and experimentation.
          I’m excited to work on teams where thoughtful design and solid
          engineering practices matter.
        </motion.p>

        {/* FUN FACTS – SHORT HIRING-FRIENDLY */}
        <motion.div {...fadeInUp(0.5)} className="mt-8">
          <h2
            className={`text-3xl font-semibold mb-4 ${
              darkMode ? "text-[#D8B4FE]" : "text-[#7C3AED]"
            }`}
          >
            Fun Facts
          </h2>
          <ul
            className={`list-disc pl-6 space-y-3 text-lg ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>Physics keeps my problem-solving mindset sharp.</li>
            <li>Movies and gaming inspire my creativity and sense of visuals.</li>
            <li>I love making products feel fast, intuitive, and refined.</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE – FLOATING CARDS INSTEAD OF LOTTIE */}
      <motion.div
        {...fadeInUp(0.4)}
        className="lg:w-1/2 flex justify-center items-center z-10"
      >
        <div className="relative w-full max-w-md h-[320px]">
          {floatingCards.map((card, index) => {
            const positions = [
              "top-4 left-4",
              "top-24 right-4",
              "bottom-6 left-10",
            ];
            const animY = [
              [0, -10, 0],
              [0, 8, 0],
              [0, -6, 0],
            ];

            return (
              <motion.div
                key={card.title}
                className={`
                  absolute ${positions[index]} 
                  w-60 rounded-2xl px-5 py-4
                  shadow-xl backdrop-blur-md
                  border border-white/10
                  bg-white/10
                `}
                animate={{ y: animY[index] }}
                transition={{ duration: 6 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/30 text-purple-100 mb-2">
                  {card.badge}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-200">{card.body}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
