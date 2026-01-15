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
