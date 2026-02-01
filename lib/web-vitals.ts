import { onCLS, onINP, onLCP, onFCP, onTTFB } from "web-vitals";

const COLORS = {
  good: "#0CCE6B",
  needsImprovement: "#FFA400",
  poor: "#FF4E42",
  info: "#5B5FFF",
};

const thresholds = {
  lcp: { good: 2500, poor: 4000 },
  inp: { good: 200, poor: 500 },
  cls: { good: 0.1, poor: 0.25 },
  fcp: { good: 1800, poor: 3000 },
  ttfb: { good: 800, poor: 1800 },
};

function getColor(metric: string, value: number): string {
  const threshold = thresholds[metric as keyof typeof thresholds];
  if (!threshold) return COLORS.info;
  if (value <= threshold.good) return COLORS.good;
  if (value <= threshold.poor) return COLORS.needsImprovement;
  return COLORS.poor;
}

function getRating(metric: string, value: number): string {
  const threshold = thresholds[metric as keyof typeof thresholds];
  if (!threshold) return "INFO";
  if (value <= threshold.good) return "✓ GOOD";
  if (value <= threshold.poor) return "⚠ NEEDS IMPROVEMENT";
  return "✗ POOR";
}

export function reportWebVitals() {
  if (typeof window === "undefined") return;

  console.log(
    "%c⚡ Web Vitals Monitoring Active",
    `color: ${COLORS.info}; font-weight: bold; font-size: 12px; font-family: monospace;`,
  );

  onLCP((metric) => {
    const color = getColor("lcp", metric.value);
    const rating = getRating("lcp", metric.value);
    console.log(
      `%cLCP: ${metric.value.toFixed(0)}ms ${rating}`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
      metric,
    );
  });

  onINP((metric) => {
    const color = getColor("inp", metric.value);
    const rating = getRating("inp", metric.value);
    console.log(
      `%cINP: ${metric.value.toFixed(0)}ms ${rating}`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
      metric,
    );
  });

  onCLS((metric) => {
    const color = getColor("cls", metric.value);
    const rating = getRating("cls", metric.value);
    console.log(
      `%cCLS: ${metric.value.toFixed(3)} ${rating}`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
      metric,
    );
  });

  onFCP((metric) => {
    const color = getColor("fcp", metric.value);
    const rating = getRating("fcp", metric.value);
    console.log(
      `%cFCP: ${metric.value.toFixed(0)}ms ${rating}`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
      metric,
    );
  });

  onTTFB((metric) => {
    const color = getColor("ttfb", metric.value);
    const rating = getRating("ttfb", metric.value);
    console.log(
      `%cTTFB: ${metric.value.toFixed(0)}ms ${rating}`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
      metric,
    );
  });
}

export function trackWebGLInit() {
  if (typeof window === "undefined") return;

  const start = performance.now();

  return () => {
    const duration = performance.now() - start;
    const color =
      duration < 500
        ? COLORS.good
        : duration < 1000
          ? COLORS.needsImprovement
          : COLORS.poor;
    console.log(
      `%c🎨 WebGL Init: ${duration.toFixed(0)}ms`,
      `color: ${color}; font-weight: bold; font-family: monospace;`,
    );
  };
}
