"use client";

import { useEffect } from "react";

export default function HUDLoader() {
  useEffect(() => {
    document.body.setAttribute("aria-busy", "true");
    return () => {
      document.body.removeAttribute("aria-busy");
    };
  }, []);

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
      <div className="hud-loader-center-icon">
        <div className="hud-loader-rainbow-ring">
          <div className="hud-loader-ring-inner">
            <svg
              className="hud-loader-helmet-svg"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="41"
                y="31"
                width="118"
                height="138"
                rx="16"
                stroke="rgba(239,239,229,0.25)"
                strokeWidth="2"
              />
              <path
                d="M 50 40 Q 100 25 150 40"
                stroke="rgba(239,239,229,0.25)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 55 50 Q 100 35 145 50"
                stroke="rgba(239,239,229,0.25)"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="30"
                cy="100"
                rx="12"
                ry="24"
                stroke="rgba(239,239,229,0.25)"
                strokeWidth="2"
              />
              <ellipse
                cx="170"
                cy="100"
                rx="12"
                ry="24"
                stroke="rgba(239,239,229,0.25)"
                strokeWidth="2"
              />
              <rect
                x="40"
                y="30"
                width="118"
                height="138"
                rx="16"
                stroke="rgba(239,239,229,0.65)"
                strokeWidth="2"
              />
              <path
                d="M 50 40 Q 100 25 150 40"
                stroke="rgba(239,239,229,0.65)"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 55 50 Q 100 35 145 50"
                stroke="rgba(239,239,229,0.65)"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="28"
                cy="100"
                rx="12"
                ry="24"
                stroke="rgba(239,239,229,0.65)"
                strokeWidth="2"
              />
              <ellipse
                cx="172"
                cy="100"
                rx="12"
                ry="24"
                stroke="rgba(239,239,229,0.65)"
                strokeWidth="2"
              />
            </svg>
            <div className="hud-loader-face-window">
              <div className="hud-loader-face-grid" />
              <div className="hud-loader-eye-left" />
              <div className="hud-loader-eye-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
