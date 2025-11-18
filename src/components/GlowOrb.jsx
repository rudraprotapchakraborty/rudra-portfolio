import { motion } from "framer-motion";

const GlowOrb = ({ className, color }) => (
  <motion.div
    className={className}
    style={{ backgroundColor: color }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default GlowOrb;
