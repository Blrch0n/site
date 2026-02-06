"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HUDLoader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.setAttribute("aria-busy", "true");
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setShow(false);
      document.body.removeAttribute("aria-busy");
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.removeAttribute("aria-busy");
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`hud-loader ${fadeOut ? "hud-loader-fade-out" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="hud-loader-sr-only">Loading</span>
      <div className="hud-loader-background" />
      <div className="hud-loader-grid-lines">
        <div className="hud-loader-vertical-center" />
        <div className="hud-loader-horizontal-center" />
        <div className="hud-loader-vertical-left" />
        <div className="hud-loader-vertical-right" />
        <div className="hud-loader-horizontal-top" />
        <div className="hud-loader-horizontal-bottom" />
      </div>
      <div className="hud-loader-corner-top-left" />
      <div className="hud-loader-corner-top-right" />
      <div className="hud-loader-corner-bottom-left" />
      <div className="hud-loader-corner-bottom-right" />
      <div className="hud-loader-loading-text-left">LOADING</div>
      <div className="hud-loader-loading-text-right">LOADING</div>

      <div className="hud-loader-center-icon">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/loading_logo.gif"
            alt="Loading"
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>
      </div>
    </div>
  );
}
