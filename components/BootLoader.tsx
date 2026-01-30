"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderState {
  fonts: boolean;
  images: boolean;
}

export default function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadState, setLoadState] = useState<LoaderState>({
    fonts: false,
    images: false,
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const progress = useMemo(() => {
    const completed = Object.values(loadState).filter(Boolean).length;
    const totalSteps = Object.keys(loadState).length;
    return (completed / totalSteps) * 100;
  }, [loadState]);

  const statusText = useMemo(() => {
    if (!loadState.fonts) return "LOADING FONTS";
    if (!loadState.images) return "PRELOADING ASSETS";
    return "SYSTEMS ONLINE";
  }, [loadState]);

  useEffect(() => {
    const loadFonts = async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      await new Promise((resolve) => setTimeout(resolve, 150));
      setLoadState((prev) => ({ ...prev, fonts: true }));
    };
    loadFonts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadState((prev) => ({ ...prev, images: true }));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-9999 bg-[#07080b] flex items-center justify-center"
          style={{ pointerEvents: "none" }}
        >
          {}
          <div className="absolute inset-0 pointer-events-none">
            {}
            <div className="absolute top-6 left-6 md:top-12 md:left-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-12 h-12 md:w-20 md:h-20"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
                <div className="absolute top-0 left-0 w-0.5 h-full bg-linear-to-b from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
              </motion.div>
            </div>

            <div className="absolute top-6 right-6 md:top-12 md:right-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="relative w-12 h-12 md:w-20 md:h-20"
              >
                <div className="absolute top-0 right-0 w-full h-0.5 bg-linear-to-l from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-linear-to-b from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                className="relative w-12 h-12 md:w-20 md:h-20"
              >
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-linear-to-t from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
              </motion.div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                className="relative w-12 h-12 md:w-20 md:h-20"
              >
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-linear-to-l from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
                <div className="absolute bottom-0 right-0 w-0.5 h-full bg-linear-to-t from-[#5B5FFF] via-[#5B5FFF] to-transparent" />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 text-center space-y-8 px-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/90 font-mono text-xs md:text-sm tracking-[0.3em] mb-4"
            >
              SYS&COTECH
            </motion.div>

            <div className="w-72 md:w-96 mx-auto space-y-3">
              <div className="relative h-0.5 bg-white/10 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-linear-to-r from-[#00D4FF] via-[#5B5FFF] to-[#E94FFF]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.3,
                    ease: "easeOut",
                  }}
                />
                {!prefersReducedMotion && progress < 100 && (
                  <motion.div
                    className="absolute inset-y-0 w-16 bg-linear-to-r from-transparent via-white/40 to-transparent"
                    style={{ left: `${Math.max(0, progress - 15)}%` }}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-white/50">
                <motion.span
                  key={statusText}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {statusText}
                </motion.span>
                <span className="tabular-nums">{Math.round(progress)}%</span>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4">
                {[
                  { label: "FONTS", ready: loadState.fonts },
                  { label: "ASSETS", ready: loadState.images },
                ].map((system, idx) => (
                  <motion.div
                    key={system.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        system.ready
                          ? "bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                          : "bg-white/20"
                      }`}
                      style={{
                        animation:
                          !system.ready && !prefersReducedMotion
                            ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                            : "none",
                      }}
                    />
                    <span className="text-[10px] font-mono text-white/40 tracking-wider">
                      {system.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {!prefersReducedMotion && (
              <motion.div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-px bg-linear-to-r from-transparent via-[#5B5FFF]/30 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
