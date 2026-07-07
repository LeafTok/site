import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, AppStoreButtons } from "@/components/shared";
import { SchemaGenerator, FAQSection } from "@/components/seo";
import {
  Masthead,
  ReadChapter,
  ListenChapter,
  MakeItYoursChapter,
  TrackChapter,
  DownloadPrompt,
} from "@/components/landing";
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
} from "@/lib/schema/generators";
import { heroTrust, steps, homeFAQs } from "@/lib/data/landing";
import { getAllGuides } from "@/lib/data/guides";

export const metadata: Metadata = {
  title: "LeafTok — Swipe Through Books Like TikTok | EPUB & PDF Reader",
  description:
    "The TikTok-style book reader for iPhone. Turn any EPUB or PDF into swipeable cards, listen with on-device narration, keep a reading streak, and read with friends in book clubs. Free to start.",
  alternates: {
    canonical: "https://leaftok.app/",
  },
};

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
        {/* Hero — an editorial poster, not a SaaS split screen */}
        <section className="overflow-hidden pb-20 pt-28 lg:pb-24 lg:pt-28">
          <div className="section-container">
            <div className="mb-10 flex items-center justify-between border-y border-ink/15 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted sm:text-[0.68rem] sm:tracking-[0.2em]">
              <span>LeafTok Reader</span>
              <span className="hidden sm:inline">
                For books left unfinished
              </span>
              <span>Est. 2025</span>
            </div>

            <div className="relative grid gap-x-8 lg:grid-cols-12">
              <h1 className="relative z-10 col-span-full min-w-0 font-serif text-[clamp(3.2rem,8vw,7rem)] leading-[0.84] tracking-[-0.055em] lg:col-span-9 lg:leading-[0.82] lg:tracking-[-0.06em]">
                <span className="block">Stop reading</span>
                <span className="block lg:pl-[5vw]">books the old way.</span>
                <span className="block text-primary lg:pl-[1.5vw]">
                  Swipe <span className="block sm:inline">forward.</span>
                </span>
              </h1>

              <div className="relative z-20 mt-10 max-w-xl lg:col-span-5 lg:row-start-2 lg:mt-12">
                <p className="font-serif text-2xl leading-snug text-ink lg:text-3xl">
                  You didn&rsquo;t stop loving books. The feed just got louder.
                </p>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-secondary">
                  Turn any PDF or EPUB you own into focused cards that keep your
                  place and help you finish.
                </p>
                <div className="mt-8">
                  <AppStoreButtons showBadge />
                </div>
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
                  {heroTrust.map((item) => (
                    <span key={item}>&bull;&ensp;{item}</span>
                  ))}
                </div>
              </div>

              <figure className="relative z-20 mx-auto mt-14 w-[260px] lg:col-span-3 lg:col-start-10 lg:row-span-2 lg:row-start-1 lg:my-10 lg:w-[280px] lg:self-end lg:justify-self-end lg:rotate-[1deg]">
                <div className="absolute -inset-4 -z-10 border border-ink/15" />
                <Image
                  src="/assets/screenshot-01-swipe-books-like-tiktok.webp"
                  alt="LeafTok turning a book into swipeable reading cards"
                  width={400}
                  height={870}
                  className="w-full shadow-[18px_24px_0_rgba(26,22,18,0.10)]"
                  priority
                />
                <figcaption className="mt-5 flex justify-between border-b border-ink/20 pb-2 text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                  <span>Fig. 01</span>
                  <span>Reading, recut</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Masthead + Table of contents */}
        <Masthead />

        {/* The four chapters */}
        <ReadChapter />
        <ListenChapter />
        <DownloadPrompt
          eyebrow="Read or listen anywhere"
          title="Try your first book in minutes."
        />
        <MakeItYoursChapter />
        <TrackChapter />

        {/* Getting started */}
        <section id="getting-started" className="scroll-mt-24 py-24 lg:py-32">
          <div className="max-w-container mx-auto px-6">
            <header className="mb-16 max-w-xl">
              <div className="editorial-rule mb-5" />
              <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">
                From file to first card.
              </h2>
              <p className="mt-4 text-lg text-ink-secondary">
                No account, no setup wizard, no waiting room.
              </p>
            </header>

            <ol className="process-line">
              {steps.map((step, index) => (
                <li key={step.numeral} className="process-step">
                  <span className="masthead-meta text-primary">
                    {step.numeral}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-ink-secondary">
                    {step.description}
                  </p>
                  {index < steps.length - 1 && (
                    <span className="process-arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-paper-warm py-24">
          <div className="mx-auto max-w-container px-6">
            <div className="mx-auto max-w-2xl">
              <div className="editorial-rule mx-auto mb-6" />
              <FAQSection
                faqs={homeFAQs}
                title="Questions, answered"
                subtitle="Everything you need to know before your first swipe"
              />
            </div>
          </div>
        </section>

        {/* Field guides — the appendix */}
        <section id="guides" className="scroll-mt-24 py-24 lg:py-28">
          <div className="section-container">
            <header className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <div className="editorial-rule mb-5" />
                <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">
                  Appendix: the field guides.
                </h2>
                <p className="mt-4 text-lg text-ink-secondary">
                  Answers first, app second — swipe-reading, narration,
                  finishing what you start.
                </p>
              </div>
              <Link
                href="/guides/"
                className="text-sm font-semibold text-primary hover:underline"
              >
                All guides &rarr;
              </Link>
            </header>

            <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {getAllGuides().map((guide, index) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}/`}
                    className="group block border-t border-ink/25 pt-4 transition-colors hover:text-primary"
                  >
                    <span className="masthead-meta text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-snug">
                      {guide.heading}
                    </h3>
                    <span className="mt-3 inline-block text-xs uppercase tracking-[0.16em] text-ink-muted group-hover:text-primary">
                      {guide.keyword}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Final CTA — the colophon */}
        <section
          id="download"
          className="scroll-mt-24 overflow-hidden bg-primary py-24 text-paper lg:py-32"
        >
          <div className="section-container grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-paper/70">
                The next page is yours
              </p>
              <h2 className="font-serif text-[clamp(4rem,9vw,8rem)] leading-[0.82] tracking-[-0.055em]">
                Start with one page.
              </h2>
            </div>
            <div className="border-l border-paper/35 pl-6 lg:col-span-4">
              <p className="mb-8 text-xl leading-relaxed text-paper/85">
                Your books are already waiting. LeafTok is free to try and needs
                no account.
              </p>
              <AppStoreButtons showBadge />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
