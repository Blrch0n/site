"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/siteNav";

export default function RightRail() {
  const pathname = usePathname();

  const currentItem = NAV_ITEMS.find((item) => item.path === pathname);
  const currentLabel = currentItem?.label || "INTRO";

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
      {}
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="text-[9px] font-mono text-white/40 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          {currentLabel}
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--border-line)] to-transparent" />
      </div>

      {}
      <div className="flex flex-col items-center gap-3">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.id}
              href={item.path}
              className="group pointer-events-auto"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--accent-blue)] scale-150 shadow-[0_0_12px_rgba(91,95,255,0.8)]"
                    : "bg-[var(--border-line)] hover:bg-[var(--border-line-hover)] hover:scale-125"
                }`}
              />
            </Link>
          );
        })}
      </div>

      {}
      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="w-px h-8 bg-gradient-to-t from-[var(--border-line)] to-transparent" />
        <div className="text-[9px] font-mono text-white/30 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          MENU
        </div>
      </div>
    </div>
  );
}
