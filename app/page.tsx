import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer, AppStoreButtons } from '@/components/shared';
import { SchemaGenerator, FAQSection } from '@/components/seo';
import {
  Masthead,
  ReadChapter,
  ListenChapter,
  MakeItYoursChapter,
  TrackChapter,
  Plates,
} from '@/components/landing';
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
} from '@/lib/schema/generators';
import { heroTrust, steps, homeFAQs } from '@/lib/data/landing';

export const metadata: Metadata = {
  title: 'LeafTok — Your Books, Reimagined',
  description:
    'Turn any PDF or EPUB you already own into TikTok-style swipeable cards. Read 3x faster with 16 on-device AI voices, ambient soundscapes, and beautiful themes. The reading app that actually makes you finish books.',
  alternates: {
    canonical: 'https://leaftok.app/',
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

      <main>
        {/* Hero — the title page */}
        <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28">
          <div className="hero-glow" />
          <div className="leaf-shape top-[15%] right-[8%] h-[250px] w-[250px] opacity-[0.06]" />
          <div
            className="leaf-shape bottom-[25%] left-[5%] h-[180px] w-[180px] rotate-180 opacity-[0.04]"
            style={{ animationDelay: '-2s' }}
          />

          <div className="relative z-10 mx-auto max-w-container px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
              {/* Copy */}
              <div className="animate-fadeIn lg:col-span-7">
                <div className="badge mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>iOS &middot; Free to start</span>
                </div>

                <h1 className="mb-6 font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
                  <span className="block">Stop reading books</span>
                  <span className="block">
                    <span className="text-ink-muted line-through decoration-accent/50 decoration-[3px] underline-offset-4">
                      the old way
                    </span>
                  </span>
                  <span className="serif-italic mt-1 block text-primary">Start swiping them.</span>
                </h1>

                <p className="serif-italic mb-5 text-xl text-ink-secondary">
                  You didn&rsquo;t stop loving books&mdash;the feed just got louder.
                </p>

                <p className="mb-10 max-w-lg text-lg leading-relaxed text-ink-secondary lg:text-xl">
                  LeafTok turns any PDF or EPUB you already own into swipeable
                  cards&mdash;so you read 3&times; faster, comprehension intact, and
                  actually finish.
                </p>

                <div className="mb-10 flex flex-col items-start gap-4 sm:flex-row">
                  <AppStoreButtons showBadge />
                </div>

                {/* Honest trust row (replaces the unverified 5.0★ badge) */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
                  {heroTrust.map((item, i) => (
                    <span key={item} className="flex items-center gap-4">
                      {i > 0 && <span aria-hidden="true" className="h-4 w-px bg-ink/15" />}
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex animate-slideUp justify-center lg:col-span-5 lg:justify-end"
                style={{ animationDelay: '150ms' }}
              >
                <div className="relative">
                  <div className="absolute inset-0 -m-8 animate-[spin_60s_linear_infinite] rounded-full border-2 border-dashed border-primary/10" />

                  <div className="relative w-[280px] lg:w-[320px]">
                    <Image
                      src="/assets/screenshot-01-swipe-books-like-tiktok.webp"
                      alt="LeafTok — swipe books like TikTok"
                      width={400}
                      height={870}
                      className="rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(26,22,18,0.25)]"
                      priority
                    />

                    {/* Floating margin notes */}
                    <div className="animate-float absolute -left-6 top-1/3 rounded-xl border border-ink/5 bg-paper-warm px-4 py-3 shadow-lg">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">3&times; faster</div>
                          <div className="text-xs text-ink-muted">same comprehension</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="animate-float absolute -right-6 bottom-1/3 rounded-xl border border-ink/5 bg-paper-warm px-4 py-3 shadow-lg"
                      style={{ animationDelay: '-3s' }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">16 voices</div>
                          <div className="text-xs text-ink-muted">on-device</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masthead + Table of contents */}
        <Masthead />

        {/* The four chapters */}
        <ReadChapter />
        <ListenChapter />
        <MakeItYoursChapter />
        <TrackChapter />

        {/* Plates — screenshot showcase */}
        <Plates />

        {/* Getting started */}
        <section id="getting-started" className="scroll-mt-24 py-24 lg:py-32">
          <div className="max-w-container mx-auto px-6">
            <header className="mb-20 max-w-xl">
              <div className="editorial-rule mb-5" />
              <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">
                Three steps. Two minutes.
              </h2>
              <p className="mt-4 text-lg text-ink-secondary">
                From a file to your first swipeable card. No account, no setup, no waiting.
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.numeral} className="group">
                  <span className="mb-4 inline-block select-none font-serif text-6xl leading-none text-primary/15 lg:text-7xl">
                    {step.numeral}
                  </span>
                  <h3 className="mb-3 text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="leading-relaxed text-ink-secondary">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="mt-8 hidden md:block">
                      <svg width="40" height="12" viewBox="0 0 40 12" className="text-ink/10">
                        <path d="M0 6h36l-4-5M36 6l-4 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
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

        {/* Final CTA — the colophon */}
        <section id="download" className="relative scroll-mt-24 overflow-hidden py-28 lg:py-36">
          <div className="hero-glow opacity-50" />
          <div className="leaf-shape top-[10%] right-[10%] h-[200px] w-[200px] opacity-[0.05]" />
          <div className="leaf-shape bottom-[15%] left-[8%] h-[150px] w-[150px] rotate-180 opacity-[0.04]" />

          <div className="relative z-10 mx-auto max-w-container px-6 text-center">
            <h2 className="mb-6 font-serif text-4xl tracking-tight lg:text-6xl">
              Your bookshelf is <span className="serif-italic text-primary">waiting</span>
            </h2>
            <p className="mx-auto mb-4 max-w-lg text-lg text-ink-secondary lg:text-xl">
              Stop buying books you never finish. Start swiping through them in minutes.
            </p>
            <p className="serif-italic mb-10 text-ink-muted">Free to try. No account needed.</p>
            <div className="flex justify-center">
              <AppStoreButtons showBadge />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
