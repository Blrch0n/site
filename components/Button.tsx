"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07080B]";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(91,95,255,0.6),inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "glass-panel text-white border border-white/10 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {variant === "secondary" && (
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === "secondary" && (
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#00D4FF]/20 via-[#5B5FFF]/20 to-[#9B4FFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
