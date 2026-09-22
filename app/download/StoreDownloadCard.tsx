"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

interface StoreDownloadCardProps {
  icon: ReactNode;
  platform: string;
  requirement: string;
  href: string;
  store: "app_store" | "google_play";
  buttonLabel: string;
}

/** One platform's download card on /download/ — fires its own store_open event
 *  tagged with placement "download_page" so it's distinguishable from the
 *  hero/CTA store buttons in analytics. */
export function StoreDownloadCard({
  icon,
  platform,
  requirement,
  href,
  store,
  buttonLabel,
}: StoreDownloadCardProps) {
  return (
    <div className="rounded-lg border border-ink/10 bg-paper-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-3 text-ink">{icon}
        <h2 className="font-sans text-[22px] font-bold">{platform}</h2>
      </div>
      <p className="mt-2 text-[14px] text-ink-faint">{requirement}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary mt-6 w-full"
        onClick={() => trackEvent("store_open", { store, placement: "download_page" })}
      >
        {buttonLabel}
      </a>
      <p className="mt-3 text-center text-[14px] text-ink-faint">
        Free &middot; Subscriptions optional
      </p>
    </div>
  );
}
