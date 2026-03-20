import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Oasis - Water Tracker Reminder | Privacy Policy',
  description:
    'Privacy Policy for Oasis - Water Tracker Reminder. Learn how we handle your data and protect your privacy.',
  alternates: {
    canonical: 'https://leaftok.app/oasis/privacy/',
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Oasis Privacy Policy', url: '/oasis/privacy/' },
];

export default function OasisPrivacyPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Oasis - Water Tracker Reminder
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-text-secondary text-lg">
              Last updated: March 2026
            </p>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary">
                Oasis - Water Tracker Reminder (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                Oasis is designed with privacy in mind. We collect minimal information:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Water Intake Data:</strong> Your daily water consumption logs, hydration
                  goals, and drinking history are stored locally on your device.
                </li>
                <li>
                  <strong>Reminder Preferences:</strong> Your notification schedules and reminder
                  settings are stored locally on your device.
                </li>
                <li>
                  <strong>Health Data:</strong> If you provide body weight or activity level for
                  personalized recommendations, this data is stored locally on your device.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> Anonymous usage statistics to help us improve the
                  app experience. No personally identifiable information is collected.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Track and display your daily water intake</li>
                <li>Send you hydration reminders at your preferred times</li>
                <li>Calculate personalized daily hydration goals</li>
                <li>Show your hydration history and trends</li>
                <li>Improve and optimize the app experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Your hydration data, health information, and preferences are stored locally on your
                device. We do not upload your personal health data to our servers. Your data remains
                private and under your control at all times. We implement appropriate security
                measures to protect against unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Notifications and Permissions</h2>
              <p className="text-text-secondary">
                Oasis requests permission to send push notifications to remind you to drink water.
                You can manage or disable these notifications at any time through your device
                settings. We do not use notification permissions for marketing or advertising
                purposes.
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
                  interact with our app. No personally identifiable information is shared.
                </li>
                <li>
                  <strong>App Stores:</strong> Apple App Store and Google Play Store have their
                  own privacy policies governing app distribution.
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
                <li>Disable notifications at any time</li>
                <li>Delete all local app data by uninstalling the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Children&apos;s Privacy</h2>
              <p className="text-text-secondary">
                Our app is not intended for children under 13. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your
                child has provided us with personal information, please contact us.
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
