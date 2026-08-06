import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'LeafTok Changelog - See what&apos;s new in each version. Track our latest features, improvements, and bug fixes.',
  alternates: {
    canonical: 'https://leaftok.app/changelog/',
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Changelog', url: '/changelog/' },
];

interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: 'feature' | 'improvement' | 'fix';
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    version: '3.0.3',
    date: 'August 2026',
    changes: [
      {
        type: 'fix',
        description:
          'Fixed a crash that could stop the app from opening. The AI narration voice was loading on every launch — even for readers who never used it — and now loads only when an AI voice is chosen.',
      },
    ],
  },
  {
    version: '3.0.2',
    date: 'August 2026',
    changes: [
      { type: 'fix', description: 'Fixed a memory leak when opening several books in a row' },
      { type: 'improvement', description: 'Faster swiping in long books — no more slowdown as you get deeper in' },
      { type: 'improvement', description: 'Better reporting of low-memory shutdowns so we can catch them sooner' },
    ],
  },
  {
    version: '3.0.1',
    date: 'July 2026',
    changes: [
      { type: 'fix', description: 'Fixed crashes while navigating chapters and favoriting cards' },
      { type: 'fix', description: 'Fixed a crash during narration auto-advance' },
      { type: 'improvement', description: 'Image-heavy books use far less memory and no longer get shut down by iOS' },
    ],
  },
  {
    version: '3.0.0',
    date: 'July 2026',
    changes: [
      { type: 'feature', description: 'Book Clubs — create a club, invite friends with a share code, and read together' },
      { type: 'feature', description: 'Chapter discussions inside the reader, with spoiler flags and emoji reactions' },
      { type: 'feature', description: 'Reader profiles with a display name and emoji avatar' },
      { type: 'improvement', description: 'Invite codes are no longer case-sensitive' },
    ],
  },
  {
    version: '2.1.0',
    date: 'May 2026',
    changes: [
      { type: 'fix', description: 'Fixed crashes when backgrounding the app while audio or narration was playing' },
      { type: 'fix', description: 'Fixed a crash when closing the reader as narration finished' },
      { type: 'fix', description: 'Large books no longer get the app shut down for using too much memory' },
      { type: 'fix', description: 'The app recovers gracefully instead of crashing if local data is corrupted' },
      { type: 'fix', description: 'The sleep timer can now be cancelled mid-countdown' },
    ],
  },
  {
    version: '2.0.0',
    date: 'May 2026',
    changes: [
      { type: 'feature', description: 'Rebuilt from the ground up as a native iOS app — faster and smoother throughout' },
      { type: 'feature', description: 'Kokoro AI voices for natural-sounding narration' },
      { type: 'feature', description: 'Ambient sound generator — white, brown and pink noise, rain, forest and cafe' },
      { type: 'improvement', description: 'New local storage engine for quicker library loading' },
    ],
  },
  {
    version: '1.9.3',
    date: 'January 2025',
    changes: [
      { type: 'feature', description: 'Real user testimonials added to homepage' },
      { type: 'improvement', description: 'SEO optimization for EReader category' },
      { type: 'improvement', description: 'Updated landing page UI design' },
    ],
  },
  {
    version: '1.9.0',
    date: 'December 2024',
    changes: [
      { type: 'feature', description: 'Enhanced AI-powered card generation' },
      { type: 'feature', description: 'Improved spaced repetition algorithm' },
      { type: 'improvement', description: 'Better PDF parsing for complex layouts' },
      { type: 'fix', description: 'Fixed reading progress sync issues' },
    ],
  },
  {
    version: '1.8.0',
    date: 'November 2024',
    changes: [
      { type: 'feature', description: 'EPUB format support' },
      { type: 'feature', description: 'Dark mode for comfortable night reading' },
      { type: 'improvement', description: 'Faster book conversion times' },
    ],
  },
  {
    version: '1.7.0',
    date: 'October 2024',
    changes: [
      { type: 'feature', description: 'Offline reading mode' },
      { type: 'feature', description: 'Reading statistics and insights' },
      { type: 'improvement', description: 'UI/UX refinements' },
      { type: 'fix', description: 'Memory optimization for large books' },
    ],
  },
  {
    version: '1.0.0',
    date: 'September 2024',
    changes: [
      { type: 'feature', description: 'Initial release of LeafTok' },
      { type: 'feature', description: 'PDF to swipeable cards conversion' },
      { type: 'feature', description: 'Progress tracking' },
      { type: 'feature', description: 'iOS and Android support' },
    ],
  },
];

const typeStyles = {
  feature: 'bg-primary/20 text-primary',
  improvement: 'bg-blue-500/20 text-blue-400',
  fix: 'bg-orange-500/20 text-orange-400',
};

const typeLabels = {
  feature: 'New',
  improvement: 'Improved',
  fix: 'Fixed',
};

export default function ChangelogPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-4">Changelog</h1>
          <p className="text-text-secondary text-lg mb-12">
            Track our progress and see what&apos;s new in each version of LeafTok.
          </p>

          <div className="space-y-12">
            {changelog.map((entry) => (
              <article key={entry.version} className="relative">
                {/* Version header */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-serif">
                    v{entry.version}
                  </h2>
                  <span className="text-text-muted">{entry.date}</span>
                </div>

                {/* Changes list */}
                <ul className="space-y-3">
                  {entry.changes.map((change, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <span
                        className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ${typeStyles[change.type]}`}
                      >
                        {typeLabels[change.type]}
                      </span>
                      <span>{change.description}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="absolute -bottom-6 left-0 right-0 h-px bg-white/5" />
              </article>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
