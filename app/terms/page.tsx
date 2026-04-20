import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'LeafTok Terms of Use - Read the terms and conditions for using LeafTok, including subscription terms and user responsibilities.',
  alternates: {
    canonical: 'https://leaftok.app/terms/',
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Terms of Use', url: '/terms/' },
];

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-8">Terms of Use</h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-text-secondary text-lg">
              Last updated: April 2026
            </p>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-secondary">
                By downloading, installing, or using LeafTok (&quot;the App&quot;), you agree to be bound by these
                Terms of Use (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">2. Description of Service</h2>
              <p className="text-text-secondary">
                LeafTok is a reading application that transforms EPUB and PDF books into swipeable vertical cards
                for an immersive reading experience. The App provides features including book import, text-to-speech
                narration, AI-powered summaries, ambient sounds, and reading progress tracking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">3. User Content</h2>
              <p className="text-text-secondary">
                You are responsible for the books and content you import into LeafTok. You must have the legal right
                to access and use any content you import. LeafTok does not host, distribute, or claim ownership of
                your imported content. All imported books are stored locally on your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">4. Subscriptions and Payments</h2>
              <p className="text-text-secondary">
                LeafTok offers optional auto-renewable subscription plans (&quot;LeafTok Pro&quot;) that provide
                access to premium features including AI book summaries, premium narration voices, and additional
                ambient sounds.
              </p>
              <ul className="text-text-secondary space-y-2 mt-4">
                <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                <li>You can manage and cancel your subscriptions in your Apple ID account settings.</li>
                <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</li>
              </ul>
              <p className="text-text-secondary mt-4">
                Subscription plans available:
              </p>
              <ul className="text-text-secondary space-y-2 mt-2">
                <li><strong>Weekly</strong> &mdash; auto-renews every 7 days</li>
                <li><strong>Monthly</strong> &mdash; auto-renews every month</li>
                <li><strong>Yearly</strong> &mdash; auto-renews every year</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">5. Intellectual Property</h2>
              <p className="text-text-secondary">
                The App, including its design, code, features, and branding, is the property of LeafTok and is
                protected by intellectual property laws. You may not copy, modify, distribute, or reverse-engineer
                any part of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">6. AI-Generated Content</h2>
              <p className="text-text-secondary">
                LeafTok uses artificial intelligence to generate book summaries and analysis. AI-generated content
                is provided for informational purposes only and may not be fully accurate. We do not guarantee the
                accuracy, completeness, or reliability of AI-generated summaries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">7. Limitation of Liability</h2>
              <p className="text-text-secondary">
                LeafTok is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted
                by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising
                from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">8. Termination</h2>
              <p className="text-text-secondary">
                We reserve the right to terminate or suspend your access to the App at any time, without notice,
                for conduct that we believe violates these Terms or is harmful to other users or the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">9. Changes to Terms</h2>
              <p className="text-text-secondary">
                We may update these Terms from time to time. We will notify you of any material changes by updating
                the &quot;Last updated&quot; date. Your continued use of the App after changes constitutes acceptance
                of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">10. Contact</h2>
              <p className="text-text-secondary">
                If you have questions about these Terms, contact us at{' '}
                <a href="mailto:iago@leaftok.app" className="text-primary hover:underline">
                  iago@leaftok.app
                </a>
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p className="text-text-secondary">
                See also our{' '}
                <Link href="/privacy/" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
