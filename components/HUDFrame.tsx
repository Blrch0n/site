"use client";

import { ReactNode } from "react";

interface HUDFrameProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "compact";
}

export function HUDFrame({
  children,
  className = "",
  variant = "default",
}: HUDFrameProps) {
  const lineLength = variant === "compact" ? "w-12 h-12" : "w-20 h-20";
  const thickness =
    variant === "compact" ? "h-[1px] w-[1px]" : "h-[2px] w-[2px]";

  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 pointer-events-none">
        <div
          className={`absolute top-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-linear-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-linear-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute top-0 right-0 pointer-events-none">
        <div
          className={`absolute top-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-linear-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute top-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-linear-to-b from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 left-0 pointer-events-none">
        <div
          className={`absolute bottom-0 left-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-linear-to-r from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 left-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-linear-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div
          className={`absolute bottom-0 right-0 ${lineLength.split(" ")[0]} ${thickness.split(" ")[0]} bg-linear-to-l from-[#5B5FFF] to-transparent`}
        />
        <div
          className={`absolute bottom-0 right-0 ${thickness.split(" ")[1]} ${lineLength.split(" ")[1]} bg-linear-to-t from-[#5B5FFF] to-transparent`}
        />
      </div>

      {children}
    </div>
  );
}
