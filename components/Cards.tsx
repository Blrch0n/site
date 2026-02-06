"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode, memo } from "react";
import Image from "next/image";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card = memo(function Card({
  children,
  className = "",
  delay = 0,
}: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-xl glass-panel p-6 hover-lift hover:shadow-[0_8px_32px_var(--shadow-lg),0_0_40px_var(--panel-glow)] transition-all duration-300 ${className}`}
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const ValueCard = memo(function ValueCard({
  icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <Card delay={delay} className="hover:scale-105">
      <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--bg-surface)] border border-[var(--border-accent)] mb-5 group-hover:border-[var(--border-glow)] group-hover:shadow-[0_0_20px_var(--accent-cyan)] group-hover:rotate-6 transition-all duration-300">
        <div className="relative group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2.5 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
        {description}
      </p>
    </Card>
  );
});

interface PillarCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const PillarCard = memo(function PillarCard({
  icon,
  title,
  description,
  delay = 0,
}: PillarCardProps) {
  return (
    <Card delay={delay} className="hover:scale-105">
      <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg-surface)] border border-[var(--accent-blue)]/20 mb-4 group-hover:scale-110 group-hover:rotate-12 group-hover:border-[var(--accent-blue)]/40 group-hover:shadow-[0_0_20px_var(--accent-blue)] transition-all duration-300">
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-base font-semibold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors">
        {title}
      </h4>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
        {description}
      </p>
    </Card>
  );
});

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export const ProgramCard = memo(function ProgramCard({
  number,
  title,
  description,
  delay = 0,
}: ProgramCardProps) {
  return (
    <Card delay={delay} className="relative overflow-hidden min-h-60">
      <div className="absolute top-6 right-6 text-6xl font-bold text-[var(--text-primary)] opacity-[0.03] group-hover:opacity-[0.05] group-hover:scale-105 transition-all duration-300">
        {number}
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3 pr-12 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">
          {description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-sm font-medium hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-cyan)]/40 hover:gap-2.5 hover:shadow-[0_0_16px_var(--accent-cyan)] transition-all"
        >
          Learn More
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </Card>
  );
});

interface EventCardProps {
  year: string;
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const EventCard = memo(function EventCard({
  year,
  icon,
  title,
  description,
  delay = 0,
}: EventCardProps) {
  return (
    <Card delay={delay}>
      <div className="inline-block px-3 py-1 rounded-lg border border-[var(--accent-blue)]/20 bg-[var(--bg-surface)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-4 group-hover:border-[var(--accent-blue)]/40 group-hover:text-[var(--text-secondary)] transition-all">
        {year}
      </div>
      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--bg-surface)] border border-[var(--accent-violet)]/20 mb-4 group-hover:scale-105 group-hover:border-[var(--accent-violet)]/40 group-hover:shadow-[0_0_20px_var(--accent-violet)] transition-all duration-300">
        <div className="relative">{icon}</div>
      </div>
      <h4 className="text-base font-semibold mb-2.5 text-[var(--text-primary)] group-hover:text-[var(--accent-violet)] transition-colors">
        {title}
      </h4>
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
});

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
  delay?: number;
}

export const ProjectCard = memo(function ProjectCard({
  title,
  description,
  tags,
  links,
  image,
  delay = 0,
}: ProjectCardProps) {
  return (
    <Card delay={delay} className="flex flex-col h-full">
      {image && (
        <div className="relative w-full h-48 mb-5 -mx-6 -mt-6 overflow-hidden rounded-t-xl border-b border-[var(--border-line)]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-base)]/60 z-10" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}

      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] group-hover:border-[var(--accent-cyan)]/30 group-hover:text-[var(--text-secondary)] transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] text-xs font-medium hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-cyan)]/40 hover:shadow-[0_0_16px_var(--accent-cyan)] transition-all"
            >
              {link.label}
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
});
