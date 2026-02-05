"use client";

import { useEffect, useState } from "react";

export default function HUDLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.setAttribute("aria-busy", "true");

    const timer = setTimeout(() => {
      setShow(false);
      document.body.removeAttribute("aria-busy");
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.removeAttribute("aria-busy");
    };
  }, []);

  if (!show) return null;

  return (
    <div className="hud-loader" role="status" aria-live="polite">
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
    </div>
  );
}
