/**
 * Throttle a function to execute at most once per delay period
 */
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastRan = 0;

  return function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now();

    if (lastRan && now - lastRan < delay) {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          lastRan = now;
          func.apply(this, args);
        },
        delay - (now - lastRan),
      );
    } else {
      lastRan = now;
      func.apply(this, args);
    }
  };
}

/**
 * Debounce a function to execute after delay period of inactivity
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: unknown, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Safe localStorage access with fallback
 */
export const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch {
      // Silently fail
    }
  },
  removeItem: (key: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Silently fail
    }
  },
};

/**
 * Check if code is running on client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Class name helper for conditional classes
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
