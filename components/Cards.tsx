"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl glass-panel inset-glow p-8 hover-lift hover:shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_80px_rgba(91,95,255,0.2)] ${className}`}
    >
      {/* Gradient border overlay on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#00D4FF]/30 via-[#5B5FFF]/30 to-[#9B4FFF]/20 bg-clip-border"
          style={{ WebkitMaskComposite: "xor", maskComposite: "exclude" }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ValueCard({
  icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4FF]/10 to-[#5B5FFF]/10 border border-[#00D4FF]/20 mb-6 group-hover:border-[#00D4FF]/40 group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#00D4FF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#00D4FF] transition-colors">
        {title}
      </h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </Card>
  );
}

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function PillarCard({
  icon,
  title,
  description,
  delay = 0,
}: PillarCardProps) {
  return (
    <Card delay={delay}>
      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B5FFF]/10 to-[#9B4FFF]/10 border border-[#5B5FFF]/20 mb-5 group-hover:scale-110 group-hover:border-[#5B5FFF]/40 group-hover:shadow-[0_0_20px_rgba(91,95,255,0.3)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#5B5FFF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-lg font-semibold mb-2 group-hover:text-[#5B5FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function ProgramCard({
  number,
  title,
  description,
  delay = 0,
}: ProgramCardProps) {
  return (
    <Card delay={delay} className="relative overflow-hidden min-h-[280px]">
      {/* Glowing number background */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#00D4FF]/10 to-transparent rounded-full blur-2xl group-hover:from-[#00D4FF]/20 transition-all duration-500" />

      <div className="absolute top-8 right-8 text-7xl font-bold spectral-text opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-4 pr-16 group-hover:text-[#00D4FF] transition-colors">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed mb-6">{description}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] font-medium hover:bg-[#00D4FF]/20 hover:gap-3 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
        >
          Learn More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
}

interface EventCardProps {
  year: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function EventCard({
  year,
  icon,
  title,
  description,
  delay = 0,
}: EventCardProps) {
  return (
    <Card delay={delay}>
      <div className="inline-block px-4 py-1.5 rounded-lg bg-linear-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 border border-[#5B5FFF]/30 text-sm font-semibold spectral-text mb-5 group-hover:border-[#5B5FFF]/50 group-hover:shadow-[0_0_15px_rgba(91,95,255,0.3)] transition-all">
        {year}
      </div>
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#9B4FFF]/10 to-[#E94FFF]/10 border border-[#9B4FFF]/20 mb-5 group-hover:scale-110 group-hover:border-[#9B4FFF]/40 group-hover:shadow-[0_0_25px_rgba(155,79,255,0.4)] transition-all duration-300">
        <div className="absolute inset-0 bg-[#9B4FFF]/5 rounded-xl blur-sm" />
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-xl font-semibold mb-3 group-hover:text-[#9B4FFF] transition-colors">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
