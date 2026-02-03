"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const auroraElement = auroraRef.current;
    if (!auroraElement) return;

    let rafId: number;
    const handlePointerMove = (e: PointerEvent) => {
      
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        auroraElement.style.setProperty("--mx", `${e.clientX}px`);
        auroraElement.style.setProperty("--my", `${e.clientY}px`);
        rafId = 0;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 grid-background" />

      <div
        ref={auroraRef}
        className="aurora-flow-overlay"
        style={
          {
            "--mx": "50vw",
            "--my": "50vh",
          } as React.CSSProperties
        }
      />

      <div className="absolute inset-0 vignette-overlay" />
    </div>
  );
}
