"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

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
    "inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-violet)] text-white shadow-[inset_0_1px_0_0_color-mix(in_srgb,white_10%,transparent)] hover:shadow-[0_0_40px_color-mix(in_srgb,var(--accent-blue)_60%,transparent),inset_0_1px_0_0_color-mix(in_srgb,white_15%,transparent)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "glass-panel text-[var(--text-primary)] border border-[var(--border-line)] hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {variant === "secondary" && (
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[var(--accent-cyan)]/20 via-[var(--accent-blue)]/20 to-[var(--accent-violet)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {variant === "secondary" && (
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[var(--accent-cyan)]/20 via-[var(--accent-blue)]/20 to-[var(--accent-violet)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
