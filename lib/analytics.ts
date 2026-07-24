type HimetricaProperties = Record<string, string | number | boolean>;

interface Himetrica {
  track: (event: string, properties?: HimetricaProperties) => void;
  identify: (user: {
    name?: string;
    email?: string;
    metadata?: HimetricaProperties;
  }) => void;
}

declare global {
  interface Window {
    himetrica?: Himetrica;
  }
}

/**
 * Track a custom event via Himetrica. Safe to call anywhere: no-ops during
 * SSR/static export and before the deferred tracker script has loaded.
 */
export function trackEvent(event: string, properties?: HimetricaProperties) {
  if (typeof window === "undefined") return;
  window.himetrica?.track(event, properties);
}
