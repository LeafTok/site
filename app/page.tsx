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

// Page-specific metadata
export const metadata: Metadata = {
  title: 'LeafTok - AI-Powered Reading App | Transform Books into Smart Cards',
  description:
    'Revolutionary AI-powered reading app that transforms any book into bite-sized, swipeable cards. Perfect for students, professionals, and AI enthusiasts. Enhanced learning with spaced repetition and smart algorithms.',
  alternates: {
    canonical: 'https://leaftok.app/',
  },
};

// FAQ data for the homepage
const homeFAQs: FAQItem[] = [
  {
    question: 'Is LeafTok really free?',
    answer:
      "Yes! LeafTok is completely free to download and use. There are no hidden fees, subscriptions, or in-app purchases. We believe everyone should have access to better reading tools.",
  },
  {
    question: 'What book formats does LeafTok support?',
    answer:
      'LeafTok supports EPUB and PDF formats - the two most common digital book formats. Simply upload your file and LeafTok automatically converts it into swipeable cards.',
  },
  {
    question: 'How long does it take to convert a book?',
    answer:
      'Most books convert in under 2 minutes. Simply upload your PDF or EPUB, and LeafTok does the rest automatically. You can continue reading other books while conversion happens in the background.',
  },
  {
    question: 'Can I use LeafTok offline?',
    answer:
      "Yes! Once you've uploaded and converted a book, you can read it completely offline. Perfect for commutes, flights, or anywhere you don't have internet access.",
  },
  {
    question: 'Is my reading data private and secure?',
    answer:
      'Absolutely. Your books and reading data are stored securely on your device. We respect your privacy and never sell your data.',
  },
];

// Step data for How It Works section
const steps = [
  {
    number: '01',
    title: 'Upload Your Book',
    description:
      'Choose any PDF or EPUB from your device. No account creation or complicated setup required.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Let LeafTok Convert It',
    description:
      'LeafTok automatically transforms your book into bite-sized, swipeable cards optimized for mobile reading.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Start Swiping',
    description:
      'Swipe through cards like TikTok. Track your progress and retain key concepts effortlessly.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

// Feature data
const features = [
  {
    title: 'Lightning Fast Learning',
    description:
      'Absorb key concepts in seconds with our bite-sized card format. Perfect for busy schedules and modern attention spans.',
    iconColor: 'text-primary',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Enhanced Retention',
    description:
      'Our spaced repetition system helps you remember what you read. Turn passive reading into active learning.',
    iconColor: 'text-accent',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Any Book, Any Format',
    description:
      'Transform PDFs, EPUBs, or any digital book into interactive cards. Your entire library, reimagined.',
    iconColor: 'text-purple-400',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

// Stats data
const stats = [
  { value: '100+', label: 'Active Users' },
  { value: '50+', label: 'Books Transformed' },
  { value: '5.0', label: 'App Store Rating' },
];

export default function HomePage() {
  // Generate all schemas for the homepage
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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="hero-bg" />
          <div className="leaf-shape w-[300px] h-[300px] top-[10%] right-[5%]" />
          <div className="leaf-shape w-[200px] h-[200px] bottom-[20%] left-[10%] rotate-180" style={{ animationDelay: '-5s' }} />
          <div className="leaf-shape w-[150px] h-[150px] top-[60%] right-[15%] rotate-90" style={{ animationDelay: '-10s' }} />

          <div className="relative z-10 max-w-container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="animate-fadeIn">
                {/* Badge */}
                <div className="badge mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span>AI-Powered Reading Revolution</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
                  <span className="block">Transform books into</span>
                  <span className="block text-primary serif-italic">swipeable magic</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-text-secondary mb-8 max-w-xl">
                  Turn any PDF or EPUB into addictive, TikTok-style cards. Read 3x faster without
                  losing comprehension. Perfect for busy professionals who want to read more.
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-sm text-text-secondary">5.0 Rating</span>
                  </div>
                  <div className="w-px h-4 bg-white/20" />
                  <span className="text-sm text-text-secondary">100+ readers transforming habits</span>
                </div>

                {/* CTA Buttons */}
                <AppStoreButtons showBadge />

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No Signup Required</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Works Offline</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative hidden lg:block animate-slideUp" style={{ animationDelay: '200ms' }}>
                <div className="relative">
                  <Image
                    src="/assets/screenshot.webp"
                    alt="LeafTok App Screenshot"
                    width={400}
                    height={800}
                    className="mx-auto rounded-3xl shadow-2xl"
                    priority
                  />
                  {/* Floating Cards */}
                  <div className="absolute -left-8 top-1/4 bg-dark-200 rounded-xl p-4 border border-white/10 shadow-xl animate-leafFloat">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">3x Faster</div>
                        <div className="text-sm text-text-secondary">Reading Speed</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-8 bottom-1/4 bg-dark-200 rounded-xl p-4 border border-white/10 shadow-xl animate-leafFloat" style={{ animationDelay: '-7s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">PDF & EPUB</div>
                        <div className="text-sm text-text-secondary">All Formats</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-dark-100/50">
          <div className="max-w-container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="badge mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Finish Your Next Book in 3 Simple Steps
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Go from PDF to your first swipeable card in under 2 minutes
              </p>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="card text-center relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="absolute top-4 right-4 text-6xl font-serif text-white/5">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24">
          <div className="max-w-container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="badge mb-4">Why LeafTok</span>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Why Choose <span className="text-primary serif-italic">LeafTok</span>?
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Experience reading like never before with our innovative card-based approach
                designed for modern learners
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-xl ${feature.iconColor === 'text-primary' ? 'bg-primary/20' : feature.iconColor === 'text-accent' ? 'bg-accent/20' : 'bg-purple-500/20'} ${feature.iconColor} flex items-center justify-center mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-white/5">
          <div className="max-w-container mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={homeFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about LeafTok"
        />

        {/* Final CTA Section */}
        <section id="download" className="py-24 relative overflow-hidden">
          <div className="hero-bg opacity-50" />
          <div className="relative z-10 max-w-container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
              Ready to revolutionize your{' '}
              <span className="text-primary serif-italic">reading</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10">
              Join readers who finish more books than ever. Start for free today.
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
