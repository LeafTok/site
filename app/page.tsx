import { Metadata } from 'next';
import { Header, Footer, AppStoreButtons } from '@/components/shared';
import { SchemaGenerator, FAQSection } from '@/components/seo';
import {
  generateOrganizationSchema,
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
  generateFAQSchema,
} from '@/lib/schema/generators';
import type { FAQItem } from '@/lib/types';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LeafTok — Your Books, Reimagined',
  description:
    'Turn any PDF or EPUB into TikTok-style swipeable cards. Read 3x faster with AI narration, ambient soundscapes, and beautiful themes. The reading app that actually makes you finish books.',
  alternates: {
    canonical: 'https://leaftok.app/',
  },
};

const homeFAQs: FAQItem[] = [
  {
    question: 'Is LeafTok really free?',
    answer:
      'Yes! LeafTok is free to download with 3 book slots and core features. Upgrade to Pro for unlimited books, AI narration voices, ambient audio, and AI-powered summaries.',
  },
  {
    question: 'What book formats does LeafTok support?',
    answer:
      'LeafTok supports EPUB and PDF — the two most common digital book formats. Upload your file and LeafTok converts it into swipeable cards automatically.',
  },
  {
    question: 'What is AI Narration?',
    answer:
      'LeafTok includes Kokoro AI — on-device neural text-to-speech with 16 natural-sounding voices. British, American, male, female. It even modulates tone for questions and exclamations.',
  },
  {
    question: 'Can I use LeafTok offline?',
    answer:
      'Absolutely. Once a book is converted, everything works offline — reading, narration, ambient audio. Perfect for flights, commutes, and signal dead zones.',
  },
  {
    question: 'What are Ambient Soundscapes?',
    answer:
      'Built-in audio environments — rain, forest, café, brown noise, white noise, pink noise. They help you focus while reading. Includes a sleep timer with fade-out.',
  },
];

const features = [
  {
    title: 'Swipeable Cards',
    description:
      'Your book, sliced into bite-sized cards. Swipe through chapters like your favorite feed. Each card is optimized for mobile — 100 to 350 characters of pure comprehension.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <path d="M9 3v18" />
        <path d="M13 8h4" />
        <path d="M13 12h4" />
      </svg>
    ),
  },
  {
    title: 'AI Narration',
    description:
      '16 Kokoro AI voices that sound human. British, American, male, female — all on-device, no internet needed. It even raises its voice on exclamation marks.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
  {
    title: 'Ambient Audio',
    description:
      'Rain on a window. A bustling café. Forest at dawn. Six built-in soundscapes to help you sink into your book. With a sleep timer that fades out gently.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: 'AI Summaries',
    description:
      'Don\'t have time to finish? Get an AI-generated summary with key themes, character breakdowns, notable quotes, and chapter-by-chapter insights. Powered by GPT-4o.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: '5 Reading Themes',
    description:
      'Dark for midnight sessions. Sepia for that old-book warmth. High contrast for bright days. Light for the park. Reader mode for pure focus. Pick your mood.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Drop in a book',
    description: 'Any PDF or EPUB from your device. No account needed. No setup wizard. Just a file.',
  },
  {
    number: '02',
    title: 'We do the magic',
    description: 'LeafTok splits it into hundreds of optimized cards. Chapters, images, formatting — all preserved.',
  },
  {
    number: '03',
    title: 'Swipe & absorb',
    description: 'Read like you scroll. Track progress. Build streaks. Actually finish the book this time.',
  },
];

export default function HomePage() {
  const schemas = [
    generateOrganizationSchema(),
    generateSoftwareApplicationSchema(),
    generateWebSiteSchema(),
    generateFAQSchema(homeFAQs),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
          <div className="hero-glow" />
          <div className="leaf-shape w-[250px] h-[250px] top-[15%] right-[8%] opacity-[0.06]" />
          <div className="leaf-shape w-[180px] h-[180px] bottom-[25%] left-[5%] rotate-180 opacity-[0.04]" style={{ animationDelay: '-2s' }} />

          <div className="relative z-10 max-w-container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Copy — 7 cols */}
              <div className="lg:col-span-7 animate-fadeIn">
                <div className="badge mb-8">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>iOS &middot; Free to start</span>
                </div>

                <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-serif leading-[0.95] mb-8 tracking-tight">
                  <span className="block">Stop reading books</span>
                  <span className="block">
                    <span className="line-through decoration-accent/50 decoration-[3px] underline-offset-4 text-ink-muted">the old way</span>
                  </span>
                  <span className="block text-primary serif-italic mt-1">Start swiping them.</span>
                </h1>

                <p className="text-lg lg:text-xl text-ink-secondary max-w-lg mb-10 leading-relaxed">
                  LeafTok turns any PDF or EPUB into addictive, bite-sized cards.
                  Read 3x faster. Remember more. Finish the book.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                  <AppStoreButtons showBadge />
                </div>

                <div className="flex items-center gap-6 text-sm text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="text-accent font-semibold">5.0</span>
                    <span className="text-accent">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                  </span>
                  <span className="w-px h-4 bg-ink/10" />
                  <span>No signup required</span>
                  <span className="w-px h-4 bg-ink/10 hidden sm:block" />
                  <span className="hidden sm:block">Works offline</span>
                </div>
              </div>

              {/* Phone — 5 cols */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end animate-slideUp" style={{ animationDelay: '150ms' }}>
                <div className="relative">
                  <div className="absolute inset-0 -m-8 rounded-full border-2 border-dashed border-primary/10 animate-[spin_60s_linear_infinite]" />

                  <div className="relative w-[280px] lg:w-[320px]">
                    <Image
                      src="/assets/screenshot-01-swipe-books-like-tiktok.webp"
                      alt="LeafTok — swipe books like TikTok"
                      width={400}
                      height={870}
                      className="rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(26,22,18,0.25)]"
                      priority
                    />

                    {/* Floating stat chip */}
                    <div className="absolute -left-6 top-1/3 bg-paper-warm rounded-xl px-4 py-3 border border-ink/5 shadow-lg animate-float">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">3x faster</div>
                          <div className="text-xs text-ink-muted">reading speed</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating feature chip */}
                    <div className="absolute -right-6 bottom-1/3 bg-paper-warm rounded-xl px-4 py-3 border border-ink/5 shadow-lg animate-float" style={{ animationDelay: '-3s' }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-ink">16 AI voices</div>
                          <div className="text-xs text-ink-muted">Kokoro engine</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee — feature power words */}
        <div className="py-6 border-y border-ink/5 overflow-hidden bg-paper-warm">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...'repeating'].map((_, i) => (
              <span key={i} className="flex items-center gap-8 mx-8 text-ink-faint text-sm font-medium uppercase tracking-[0.2em]">
                <span>Swipeable Cards</span>
                <span className="text-primary">&#9679;</span>
                <span>AI Narration</span>
                <span className="text-primary">&#9679;</span>
                <span>Ambient Audio</span>
                <span className="text-primary">&#9679;</span>
                <span>AI Summaries</span>
                <span className="text-primary">&#9679;</span>
                <span>5 Themes</span>
                <span className="text-primary">&#9679;</span>
                <span>Reading Streaks</span>
                <span className="text-primary">&#9679;</span>
                <span>OpenDyslexic Font</span>
                <span className="text-primary">&#9679;</span>
                <span>Offline Mode</span>
                <span className="text-primary">&#9679;</span>
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <section id="features" className="py-24 lg:py-32">
          <div className="max-w-container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-5">
                <div className="editorial-rule mb-6" />
                <h2 className="text-4xl lg:text-5xl font-serif tracking-tight mb-6">
                  Everything your next book{' '}
                  <span className="serif-italic text-primary">deserves</span>
                </h2>
                <p className="text-lg text-ink-secondary leading-relaxed">
                  Not just a reader. A reading experience. Built for people who want to
                  finish more books without it feeling like work.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`card group relative overflow-hidden ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-ink">{feature.title}</h3>
                    <p className="text-ink-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshot Showcase */}
        <section id="screenshots" className="py-24 lg:py-32 bg-paper-warm overflow-hidden">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="editorial-rule mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-serif tracking-tight mb-5">
                See it in <span className="serif-italic text-primary">action</span>
              </h2>
              <p className="text-lg text-ink-secondary max-w-xl mx-auto">
                Five screens. Five ways LeafTok changes how you read.
              </p>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
              {[
                { src: '/assets/screenshot-01-swipe-books-like-tiktok.webp', label: 'Swipeable Cards', w: 400, h: 870 },
                { src: '/assets/screenshot-02-listen-hands-free.webp', label: 'Hands-Free Listening', w: 400, h: 870 },
                { src: '/assets/screenshot-03-get-ai-summaries.webp', label: 'AI Summaries', w: 400, h: 870 },
                { src: '/assets/screenshot-04-turn-epub-into-cards.webp', label: 'EPUB to Cards', w: 400, h: 870 },
                { src: '/assets/screenshot-05-read-to-lo-fi-beats.webp', label: 'Read to Lo-Fi Beats', w: 400, h: 870 },
              ].map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="flex-shrink-0 snap-center first:ml-auto last:mr-auto"
                >
                  <div className="w-[220px] lg:w-[260px]">
                    <div className="relative group">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.label}
                        width={screenshot.w}
                        height={screenshot.h}
                        className="rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </div>
                    <p className="text-sm font-medium text-ink-muted text-center mt-4">{screenshot.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 lg:py-32">
          <div className="max-w-container mx-auto px-6">
            <div className="text-center mb-20">
              <div className="editorial-rule mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-serif tracking-tight mb-5">
                Three steps. Two minutes.
              </h2>
              <p className="text-lg text-ink-secondary max-w-xl mx-auto">
                From PDF to your first swipeable card. No account. No setup. No waiting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center md:text-left group">
                  <span className="inline-block font-serif text-6xl lg:text-7xl text-primary/15 mb-4 leading-none select-none">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-ink">{step.title}</h3>
                  <p className="text-ink-secondary leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block mt-8">
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

        {/* Stats */}
        <section className="py-20 bg-paper-warm">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
              {[
                { value: '3x', label: 'Faster reading', detail: 'Same comprehension' },
                { value: '16', label: 'AI voices', detail: 'On-device, no internet' },
                { value: '5', label: 'Reading themes', detail: 'From sepia to dark' },
                { value: '100%', label: 'Offline ready', detail: 'Every feature works' },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-serif text-5xl lg:text-6xl text-primary mb-2 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-ink mb-1">{stat.label}</div>
                  <div className="text-sm text-ink-muted">{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="editorial-rule mx-auto mb-6" />
              <FAQSection
                faqs={homeFAQs}
                title="Questions, answered"
                subtitle="Everything you need to know before your first swipe"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="download" className="py-28 lg:py-36 relative overflow-hidden bg-paper-warm">
          <div className="hero-glow opacity-50" />
          <div className="leaf-shape w-[200px] h-[200px] top-[10%] right-[10%] opacity-[0.05]" />
          <div className="leaf-shape w-[150px] h-[150px] bottom-[15%] left-[8%] rotate-180 opacity-[0.04]" />

          <div className="relative z-10 max-w-container mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-6xl font-serif tracking-tight mb-6">
              Your bookshelf is{' '}
              <span className="serif-italic text-primary">waiting</span>
            </h2>
            <p className="text-lg lg:text-xl text-ink-secondary max-w-lg mx-auto mb-10">
              Stop buying books you never finish. Start swiping through them in minutes.
              Free to try. No account needed.
            </p>
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
