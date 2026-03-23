import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs } from '@/components/seo';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Trainer Gym AI | Privacy Policy',
  description:
    'Privacy Policy for Trainer Gym AI. Learn how we handle your data, protect your privacy, and how AI is used to generate your workout plans.',
  alternates: {
    canonical: 'https://leaftok.app/trainer-gym-ai/privacy/',
    languages: {
      'pt-BR': 'https://leaftok.app/pt-br/trainer-gym-ai/privacy/',
    },
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Trainer Gym AI Privacy Policy', url: '/trainer-gym-ai/privacy/' },
];

export default function TrainerGymAIPrivacyPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-secondary mb-4">
            Trainer Gym AI
          </p>
          <p className="text-sm text-text-secondary mb-8">
            <Link
              href="/pt-br/trainer-gym-ai/privacy/"
              className="text-primary hover:underline"
            >
              Ler em Portugu&ecirc;s
            </Link>
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p className="text-text-secondary text-lg">
              Last updated: March 2026
            </p>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary">
                Trainer Gym AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, share, and
                safeguard your information when you use our mobile application, including our use of
                artificial intelligence to generate personalized workout plans.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary mb-4">
                To provide personalized workout plans, we collect the following information during
                onboarding and app usage:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>Profile Data:</strong> Name, age, gender, and fitness experience level.
                </li>
                <li>
                  <strong>Health Data:</strong> Height, weight, body fat percentage (if provided),
                  existing injuries, and medical conditions relevant to exercise.
                </li>
                <li>
                  <strong>Body Measurements:</strong> Chest, waist, hip, arm, and leg measurements
                  (if provided) for progress tracking.
                </li>
                <li>
                  <strong>Fitness Goals:</strong> Your training objectives such as muscle gain,
                  fat loss, endurance, flexibility, or general fitness.
                </li>
                <li>
                  <strong>Workout Preferences:</strong> Available equipment, training frequency,
                  session duration, and exercise preferences.
                </li>
                <li>
                  <strong>Workout Logs:</strong> Exercises performed, sets, reps, weights, and
                  workout completion data.
                </li>
                <li>
                  <strong>Usage Analytics:</strong> Anonymous usage statistics to help us improve
                  the app experience. No personally identifiable information is included in analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">
                How We Use Artificial Intelligence
              </h2>
              <p className="text-text-secondary mb-4">
                Trainer Gym AI uses OpenAI&apos;s API to generate personalized workout plans based on
                your profile. Here is exactly what happens:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>What data is sent to OpenAI:</strong> Your profile information (age, gender,
                  fitness level), health data (height, weight, injuries), body measurements, fitness
                  goals, and workout preferences are sent to OpenAI&apos;s API to generate your
                  personalized training plan.
                </li>
                <li>
                  <strong>When data is sent:</strong> Data is only sent to OpenAI when you explicitly
                  request a new workout plan or plan update. This happens after you review and consent
                  to data sharing on the consent screen.
                </li>
                <li>
                  <strong>How OpenAI processes your data:</strong> OpenAI processes your data under
                  their{' '}
                  <a
                    href="https://openai.com/policies/api-data-usage-policies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    API Data Usage Policy
                  </a>
                  . Importantly, data sent through the API is <strong>not used to train
                  OpenAI&apos;s models</strong>. Your data is retained by OpenAI for up to 30 days
                  for abuse monitoring purposes, after which it is deleted.
                </li>
                <li>
                  <strong>No data selling:</strong> We do not sell your personal data to OpenAI or
                  any other third party. Data is shared solely for the purpose of generating your
                  workout plan.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Consent and Control</h2>
              <p className="text-text-secondary mb-4">
                Before any data is sent to OpenAI for AI-powered plan generation:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  You will be shown a consent screen clearly explaining what data will be shared
                  and how it will be used.
                </li>
                <li>
                  AI plan generation only occurs after you tap &quot;I Agree &amp; Continue&quot;
                  on the consent screen.
                </li>
                <li>
                  You can use the app without AI-generated plans by declining consent. In this case,
                  you can create and manage your workout plans manually.
                </li>
                <li>
                  You can withdraw your consent at any time in the app settings. Existing plans will
                  remain, but no new AI requests will be made.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Generate personalized AI-powered workout plans</li>
                <li>Track your fitness progress and workout history</li>
                <li>Adapt and update training plans based on your progress</li>
                <li>Send you workout reminders at your preferred times</li>
                <li>Display progress charts and body measurement trends</li>
                <li>Improve and optimize the app experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Storage and Security</h2>
              <p className="text-text-secondary">
                Your workout logs, health information, and preferences are stored locally on your
                device. Profile data used for AI plan generation is transmitted securely using
                industry-standard encryption (TLS/HTTPS). We do not maintain a central database
                of your health data on our servers. We implement appropriate technical and
                organizational security measures to protect against unauthorized access, alteration,
                or destruction of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary mb-4">
                Our app uses the following third-party services:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>
                  <strong>OpenAI API:</strong> For generating personalized workout plans. Data shared
                  is limited to profile, health, and measurement data as described above. See{' '}
                  <a
                    href="https://openai.com/policies/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    OpenAI&apos;s Privacy Policy
                  </a>
                  .
                </li>
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
                <li>Withdraw consent for AI data processing at any time</li>
                <li>Opt-out of analytics collection</li>
                <li>Disable notifications at any time</li>
                <li>Export your workout data</li>
                <li>Delete all local app data by uninstalling the app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Data Retention</h2>
              <p className="text-text-secondary">
                Your local app data is retained on your device until you delete the app or clear app
                data. Data sent to OpenAI through their API is retained for up to 30 days for abuse
                and misuse monitoring, then automatically deleted. We do not retain copies of data
                sent to OpenAI on our own servers.
              </p>
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
                &quot;Last updated&quot; date. For significant changes, we will also notify you
                through the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-text-primary mb-4">Contact Us</h2>
              <p className="text-text-secondary">
                If you have any questions about this Privacy Policy or how your data is handled,
                please contact us at{' '}
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
