"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function TopProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#00D4FF] via-[#5B5FFF] to-[#E94FFF] origin-left z-100 opacity-80"
      style={{ scaleX }}
    />
  );
}
