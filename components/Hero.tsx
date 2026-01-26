"use client";

import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      const lowPower =
        (navigator as any).deviceMemory < 4 ||
        navigator.hardwareConcurrency < 4;
      setIsMobile(mobile || lowPower);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Lazy load 3D only when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isMobile) {
          setShouldLoad3D(true);
        }
      },
      { threshold: 0.1 },
    );

    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#07080B]" />
        <div className="absolute inset-0 grid-bg opacity-40 mask-gradient-to-b" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            {/* Badge Pill */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#5B5FFF] animate-pulse" />
              <span className="spectral-text">Est. 2009</span>
            </motion.div>

            {/* Headline with gradient underline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              Where Innovation
              <br />
              Meets{" "}
              <span className="relative inline-block">
                <span className="spectral-text">Community</span>
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] rounded-full opacity-60" />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl"
            >
              Join Mongolia&apos;s premier technology student club. Learn,
              build, and lead the next generation of digital innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(91,95,255,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Join the Club</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
              <a
                href="#programs"
                className="px-8 py-4 rounded-2xl glass-panel text-white font-semibold text-base hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 group relative"
              >
                <span className="relative z-10">Explore Programs</span>
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-300" />
              </a>
            </motion.div>

            {/* HUD Line Separator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4"
            >
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#5B5FFF] to-transparent" />
              <div className="text-xs text-white/40 font-mono uppercase tracking-wider">
                SCROLL TO EXPLORE
              </div>
            </motion.div>
          </motion.div>

          {/* Right: HUD-Framed 3D Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00D4FF]/10 via-[#5B5FFF]/10 to-[#E94FFF]/10 blur-3xl" />

            {/* Main panel with corner brackets */}
            <div className="relative aspect-square w-full max-w-lg mx-auto corner-brackets">
              {/* HUD Frame Lines */}
              <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-[#5B5FFF] to-transparent" />
              <div className="absolute top-0 left-0 w-[2px] h-20 bg-gradient-to-b from-[#5B5FFF] to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-gradient-to-l from-[#5B5FFF] to-transparent" />
              <div className="absolute bottom-0 right-0 w-[2px] h-20 bg-gradient-to-t from-[#5B5FFF] to-transparent" />

              {/* Glass panel container */}
              <div className="relative rounded-3xl glass-panel inset-glow overflow-hidden shadow-2xl h-full">
                {isMobile ? (
                  <div className="w-full h-full flex items-center justify-center p-12">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-48 h-48">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#5B5FFF] opacity-40 blur-3xl" />
                          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#9B4FFF] opacity-50 blur-2xl" />
                          <div className="absolute inset-16 rounded-full bg-[#00D4FF] opacity-80" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* Desktop: 3D Scene */
                  shouldLoad3D && (
                    <Suspense
                      fallback={
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-[#5B5FFF] border-t-transparent rounded-full animate-spin" />
                        </div>
                      }
                    >
                      <Scene3D />
                    </Suspense>
                  )
                )}

                {/* Overlay UI Card (Tooltip) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 border-l-2 border-l-[#00D4FF]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00D4FF] mt-1.5 animate-pulse" />
                    <div>
                      <div className="text-sm font-semibold text-white mb-1">
                        Interactive 3D Experience
                      </div>
                      <div className="text-xs text-white/60">
                        Move your mouse to explore
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-mono uppercase tracking-wider">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
