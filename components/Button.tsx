import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "accent-bg text-white hover:bg-[var(--accent-hover)] shadow-custom hover:shadow-custom-lg hover:scale-105",
    secondary:
      "surface border-2 border-custom hover:border-[var(--accent)] shadow-custom hover:shadow-custom-lg",
    ghost: "hover:surface hover:border hover:border-custom",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
