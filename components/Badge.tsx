import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "accent-bg text-white"
      : "surface border border-custom";

  return (
    <span
      className={`${styles} px-3 py-1 rounded-full text-sm font-medium inline-block`}
    >
      {children}
    </span>
  );
}
