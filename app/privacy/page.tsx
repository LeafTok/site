import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'LeafTok Privacy Policy - Learn how we protect your data and respect your privacy. Learn about local reading data, optional book clubs, analytics and moderation.',
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
              Last updated: September 22, 2026
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
                  into reading cards. Your library is stored locally. When a feature uses server-side PDF processing or AI summaries, the document or relevant text is transmitted to our API and processing services.
                </li>
                <li>
                  <strong>Reading Progress:</strong> Your reading history, bookmarks, and progress
                  are stored locally on your device.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> App interactions and device/app information, associated with an analytics identifier, help us improve the app through PostHog. Reading events can include book titles and reading progress.
                </li>
                <li>
                  <strong>Book Clubs:</strong> A generated device identifier links your club profile and memberships. We store your display name, emoji avatar, club descriptions, shared book titles/authors, comments, reactions and community-rule acceptance. Participation in clubs is optional; the app may register a device-linked profile when it starts.
                </li>
                <li>
                  <strong>Safety Reports:</strong> We store reports, their reasons/details, a snapshot of the reported content, block relationships and moderation decisions to investigate abuse.
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
                <li>Enable club discussions and protect readers through reporting, blocking and moderation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Local library data stays on your device unless you use a feature that transmits it.
                Club data and reports are stored on our servers and sent over HTTPS. Club members
                can see your display name, avatar, shared book metadata, comments and reactions.
                Reports and their details are available to authorized moderators rather than other
                readers. Reports preserve evidence and review history even if the original comment
                is deleted. Removing the app does not delete server-side club data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary mb-4">
                Our app may use third-party services that collect information:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Analytics:</strong> PostHog processes usage events and app/device information for analytics. Generated identifiers are not a guarantee of anonymity.
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
                <li>Request information about analytics data associated with you</li>
                <li>Delete your own discussion comments and manage blocked readers in the app</li>
              </ul>
            </section>

            <section id="data-deletion">
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Deletion and Community Safety</h2>
              <p className="text-text-secondary">
                Email contact@leaftok.app with the subject “LeafTok data deletion” to request deletion of your club profile and associated server-side data, or to request access or correction.
                Identify the relevant club and profile; we may need to verify ownership before acting.
                We retain report evidence and moderation records when needed to investigate abuse and protect readers. Do not send your device credential. Report content or block a reader through the app.
                Harassment, hate, threats, sexual content, spam and disclosure of private information
                are prohibited. Share only content you have permission to share and mark spoilers.
                Moderators may remove content or suspend club access for violations.
              </p>
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
