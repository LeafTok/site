import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, AppStoreButtons } from "@/components/shared";
import { SchemaGenerator, FAQSection } from "@/components/seo";
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
} from "@/lib/schema/generators";
import { heroTrust, features, steps, homeFAQs } from "@/lib/data/landing";
import { getAllGuides } from "@/lib/data/guides";

export const metadata: Metadata = {
  title: "LeafTok — Swipe Through Books Like TikTok | EPUB & PDF Reader",
  description:
    "The TikTok-style book reader for iPhone and Android. Turn any EPUB or PDF into swipeable cards, listen with on-device narration, keep a reading streak, and read with friends in book clubs. Free to start.",
  alternates: {
    canonical: "https://leaftok.app/",
  },
};

const heroScreenshots = [
  {
    src: "/assets/screenshot-04-turn-epub-into-cards.webp",
    alt: "An EPUB turned into swipeable LeafTok cards",
    rotate: "-rotate-[4deg] translate-y-3",
  },
  {
    src: "/assets/screenshot-01-swipe-books-like-tiktok.webp",
    alt: "Swiping through a book like a TikTok feed",
    rotate: "rotate-[2deg] -translate-y-2",
  },
  {
    src: "/assets/screenshot-03-get-ai-summaries.webp",
    alt: "An AI-generated summary card in LeafTok",
    rotate: "-rotate-[2deg] translate-y-4",
  },
  {
    src: "/assets/screenshot-02-listen-hands-free.webp",
    alt: "LeafTok reading a book aloud hands-free",
    rotate: "rotate-[3deg] -translate-y-1",
    hideOnMobile: true,
  },
  {
    src: "/assets/screenshot-05-read-to-lo-fi-beats.webp",
    alt: "Reading in LeafTok with a lo-fi ambient soundscape",
    rotate: "-rotate-[3deg] translate-y-2",
    hideOnMobile: true,
  },
];

export default function HomePage() {
  // FAQ schema is emitted once by <FAQSection>; no page-level duplicate here.
  const schemas = [
    generateOrganizationSchema(),
    generateSoftwareApplicationSchema(),
    generateWebSiteSchema(),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
          <div className="section-container flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-balance font-serif text-[40px] leading-[1.1] tracking-tight lg:text-[52px]">
              Finish the books you started.
              <br />
              One swipe at a time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary">
              Turn any PDF or EPUB you own into focused cards that keep your
              place and help you finish. Free to start, no account needed.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/download/" className="btn-primary">
                Download free &rarr;
              </Link>
              <a href="#how-it-works" className="btn-secondary">
                Read how it works
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-faint">
              {heroTrust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            {/* Screenshot collage — a scattered, balanced cluster of real UI */}
            <div className="mt-16 flex justify-center gap-2 sm:gap-3">
              {heroScreenshots.map((shot) => (
                <div
                  key={shot.src}
                  className={`w-20 shrink-0 overflow-hidden rounded sm:w-28 lg:w-36 ${shot.rotate} ${
                    shot.hideOnMobile ? "hidden sm:block" : ""
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={400}
                    height={870}
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 144px"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-24">
          <div className="section-container">
            <h2 className="mx-auto max-w-2xl text-balance text-center font-serif text-[28px] leading-[1.35] tracking-tight lg:text-[34px]">
              Everything you need to actually finish
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg border border-ink/10 bg-paper-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  {feature.screenshot && (
                    <div className="relative mb-5 h-48 w-full overflow-hidden rounded">
                      <Image
                        src={feature.screenshot.src}
                        alt={feature.screenshot.alt}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
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
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-[60px] py-20 lg:py-24"
        >
          <div className="section-container">
            <h2 className="mx-auto max-w-2xl text-balance text-center font-serif text-[28px] leading-[1.35] tracking-tight lg:text-[34px]">
              From file to first card.
            </h2>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.numeral}
                  className="rounded-lg border border-ink/10 bg-paper-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                >
                  <span className="masthead-meta">{step.numeral}</span>
                  <h3 className="mt-3 font-sans text-[22px] font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-secondary">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper-warm py-20 lg:py-24">
          <div className="section-container">
            <div className="mx-auto max-w-2xl">
              <FAQSection
                faqs={homeFAQs}
                title="Questions, answered"
                subtitle="Everything you need to know before your first swipe"
              />
            </div>
          </div>
        </section>

        {/* Field guides */}
        <section className="py-20 lg:py-24">
          <div className="section-container">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-serif text-[28px] leading-[1.35] tracking-tight lg:text-[34px]">
                Field guides
              </h2>
              <Link
                href="/guides/"
                className="text-sm font-semibold text-primary hover:underline"
              >
                All guides &rarr;
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {getAllGuides().map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group rounded-lg border border-ink/10 bg-paper-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors hover:border-ink/20"
                >
                  <span className="masthead-meta">{guide.keyword}</span>
                  <h3 className="mt-2 font-serif text-lg leading-snug text-ink group-hover:text-primary">
                    {guide.heading}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="scroll-mt-[60px] py-24 lg:py-28">
          <div className="section-container flex flex-col items-center text-center">
            <h2 className="font-serif text-[40px] leading-[1.1] tracking-tight lg:text-[52px]">
              Start with one page.
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-secondary">
              Your books are already waiting. LeafTok is free to try and
              needs no account.
            </p>
            <div className="mt-8">
              <AppStoreButtons />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
