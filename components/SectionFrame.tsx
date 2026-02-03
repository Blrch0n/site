"use client";

import { ReactNode } from "react";

interface SectionFrameProps {
  children: ReactNode;
  index?: string;
  className?: string;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}

export default function SectionFrame({
  children,
  index,
  className = "",
  showTopDivider = true,
  showBottomDivider = false,
}: SectionFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {showTopDivider && (
        <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border-line)]" />
      )}
      {showBottomDivider && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--border-line)]" />
      )}

      <div className="relative w-full">
        {/* Index positioned absolutely on the left */}
        {index && (
          <div className="hidden lg:block absolute left-6 xl:left-[max(1.5rem,calc((100vw-80rem)/2-7rem))] pt-24">
            <div className="sticky top-28">
              <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-mono)] tracking-[0.28em] uppercase">
                <span>{index}</span>
                <span className="h-px w-10 bg-[var(--border-line)]" />
              </div>
            </div>
          </div>
        )}

        {/* Centered content */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative">
            <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-l border-t border-[var(--border-line)]" />
            <div className="pointer-events-none absolute -top-3 -right-3 h-8 w-8 border-r border-t border-[var(--border-line)]" />
            <div className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 border-l border-b border-[var(--border-line)]" />
            <div className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-r border-b border-[var(--border-line)]" />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
