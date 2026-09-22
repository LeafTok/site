"use client";

import { siteConfig } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { AppleIcon, PlayStoreIcon } from "./icons";

interface AppStoreButtonsProps {
  variant?: "primary" | "compact";
  /**
   * Render a "free on both platforms" note under the buttons. Only worth setting
   * where nothing nearby already says it — the hero and the closing CTA both
   * state it in their own copy.
   */
  showFreeNote?: boolean;
}

export function AppStoreButtons({
  variant = "primary",
  showFreeNote = false,
}: AppStoreButtonsProps) {
  const handleStoreClick = (store: "app_store" | "google_play") => {
    trackEvent("store_open", { store, placement: variant });
  };

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        <a
          href={siteConfig.appStoreLinks.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink/10 bg-ink/5 px-4 py-2 text-ink transition-colors duration-200 hover:bg-ink/10"
          aria-label="Download on the App Store"
          onClick={() => handleStoreClick("app_store")}
        >
          <AppleIcon />
          <span className="text-sm font-medium">App Store</span>
        </a>
        <a
          href={siteConfig.appStoreLinks.android}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-ink/10 bg-ink/5 px-4 py-2 text-ink transition-colors duration-200 hover:bg-ink/10"
          aria-label="Get it on Google Play"
          onClick={() => handleStoreClick("google_play")}
        >
          <PlayStoreIcon />
          <span className="text-sm font-medium">Google Play</span>
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <a
          href={siteConfig.appStoreLinks.ios}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="Download on the App Store"
          onClick={() => handleStoreClick("app_store")}
        >
          <AppleIcon />
          <span>App Store</span>
        </a>
        <a
          href={siteConfig.appStoreLinks.android}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="Get it on Google Play"
          onClick={() => handleStoreClick("google_play")}
        >
          <PlayStoreIcon />
          <span>Google Play</span>
        </a>
      </div>
      {/* Sits under both buttons, not on one of them: LeafTok is free to start on
          iOS and Android alike, and a badge pinned to a single store button read
          as though the other one cost money. */}
      {showFreeNote && (
        <p className="mt-3 text-sm text-ink-muted">Free on iOS and Android</p>
      )}
    </div>
  );
}
