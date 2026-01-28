"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const auroraElement = auroraRef.current;
    if (!auroraElement) return;

    // Passive pointer move listener for cursor-reactive scanner glow
    const handlePointerMove = (e: PointerEvent) => {
      auroraElement.style.setProperty("--mx", `${e.clientX}px`);
      auroraElement.style.setProperty("--my", `${e.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Base dual-layer grid (24px + 96px) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.020) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.020) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 96px 96px, 96px 96px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Aurora Flow overlay - animated color along grid lines */}
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

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, rgba(7,8,11,0) 45%, rgba(7,8,11,0.55) 100%)",
        }}
      />
    </div>
  );
}
