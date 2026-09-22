import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/shared";
import { AppleIcon, PlayStoreIcon } from "@/components/shared/icons";
import { StoreDownloadCard } from "./StoreDownloadCard";
import { siteConfig } from "@/lib/types";
import { features } from "@/lib/data/landing";

export const metadata: Metadata = {
  title: "Download LeafTok for iPhone and Android",
  description:
    "Get LeafTok free on the App Store or Google Play. Turn any PDF or EPUB into swipeable reading cards, no account needed.",
  alternates: {
    canonical: "https://leaftok.app/download/",
  },
};

// The download page reuses the first three landing-page feature cards as a
// quick "what you get" recap rather than duplicating copy.
const whatYouGet = features.slice(0, 3);

export default function DownloadPage() {
  return (
    <>
      <Header />

      <main id="main-content" className="pb-24 pt-32 lg:pt-40">
        <div className="section-container flex flex-col items-center text-center">
          <h1 className="max-w-2xl text-balance font-serif text-[40px] leading-[1.1] tracking-tight lg:text-[52px]">
            Get LeafTok on your phone.
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink-secondary">
            Free to start on iOS and Android. No account needed.
          </p>
        </div>

        <div className="section-container mt-14 grid gap-5 sm:grid-cols-2">
          <StoreDownloadCard
            icon={<AppleIcon />}
            platform="iPhone & iPad"
            requirement="Requires iOS 17 or later"
            href={siteConfig.appStoreLinks.ios}
            store="app_store"
            buttonLabel="Download on the App Store"
          />
          <StoreDownloadCard
            icon={<PlayStoreIcon />}
            platform="Android"
            requirement="Requires Android 7.0 or later"
            href={siteConfig.appStoreLinks.android}
            store="google_play"
            buttonLabel="Get it on Google Play"
          />
        </div>

        <div className="section-container mt-20 lg:mt-24">
          <h2 className="text-balance text-center font-serif text-[28px] leading-[1.35] tracking-tight lg:text-[34px]">
            What you get
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {whatYouGet.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg border border-ink/10 bg-paper-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <h3 className="font-sans text-[22px] font-bold text-ink">
                  {feature.title}
                </h3>
                <ul className="mt-3 list-none space-y-2.5">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="text-[15px] leading-relaxed text-ink-secondary"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="section-container mt-14 text-center text-[14px] text-ink-faint">
          By downloading, you agree to our{" "}
          <Link href="/terms/" className="text-primary hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy/" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}
