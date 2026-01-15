import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'LeafTok Privacy Policy - Learn how we protect your data and respect your privacy. Your reading data stays on your device.',
  alternates: {
    canonical: 'https://leaftok.app/privacy/',
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Privacy Policy', url: '/privacy/' },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-text-secondary text-lg">
              Last updated: January 2025
            </p>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary">
                LeafTok (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information
                when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                We collect minimal information to provide you with our services:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Books and Documents:</strong> Files you upload to the app for conversion
                  into reading cards. These are stored locally on your device.
                </li>
                <li>
                  <strong>Reading Progress:</strong> Your reading history, bookmarks, and progress
                  are stored locally on your device.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> Anonymous usage statistics to help us improve
                  the app experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Provide and maintain our services</li>
                <li>Convert your books into swipeable reading cards</li>
                <li>Save your reading progress and preferences</li>
                <li>Improve and optimize our app</li>
                <li>Communicate with you about updates and features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Your books and reading data are stored locally on your device. We do not upload
                your books to our servers. Your data remains private and under your control at
                all times. We implement appropriate security measures to protect against
                unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary mb-4">
                Our app may use third-party services that collect information:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Analytics:</strong> We use anonymous analytics to understand how users
                  interact with our app.
                </li>
                <li>
                  <strong>App Stores:</strong> Apple App Store and Google Play Store have their
                  own privacy policies.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Your Rights</h2>
              <p className="text-text-secondary mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Access the data we have about you</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of analytics collection</li>
                <li>Export your reading progress and data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Children&apos;s Privacy</h2>
              <p className="text-text-secondary">
                Our app is not intended for children under 13. We do not knowingly collect
                personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Changes to This Policy</h2>
              <p className="text-text-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the
                &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:contact@leaftok.app"
                  className="text-primary hover:underline"
                >
                  contact@leaftok.app
                </a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
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
