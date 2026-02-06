"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/siteNav";

export default function RightRail() {
  const pathname = usePathname();

  const currentItem = NAV_ITEMS.find((item) => item.path === pathname);
  const currentLabel = currentItem?.label || "HOME";

  // Filter items that should show in desktop navigation
  const visibleItems = NAV_ITEMS.filter((item) => item.showInDesktop !== false);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
      {/* Current Page Indicator */}
      <div className="flex flex-col items-center gap-3 mb-2">
        <div className="text-[9px] font-mono text-white/40 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr] transition-colors duration-300 hover:text-white/60">
          {currentLabel}
        </div>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--border-line)] to-transparent" />
      </div>

      {/* Navigation Dots */}
      <div className="flex flex-col items-center gap-3">
        {visibleItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.id}
              href={item.path}
              className="group pointer-events-auto relative"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--accent-blue)] scale-150 shadow-[0_0_12px_var(--accent-blue)]"
                    : "bg-[var(--border-line)] hover:bg-[var(--border-line-hover)] hover:scale-125 group-hover:shadow-[0_0_8px_var(--border-line-hover)]"
                }`}
              />
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                <div className="bg-[var(--panel-bg)] backdrop-blur-xl border border-[var(--border-line)] px-3 py-1.5 rounded-lg text-[10px] font-mono text-[var(--text-primary)] shadow-lg">
                  {item.label}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Indicator */}
      <div className="flex flex-col items-center gap-3 mt-2">
        <div className="w-px h-8 bg-gradient-to-t from-[var(--border-line)] to-transparent" />
        <div className="text-[9px] font-mono text-white/30 tracking-[0.25em] uppercase rotate-180 [writing-mode:vertical-lr]">
          MENU
        </div>
      </div>
    </div>
  );
}
