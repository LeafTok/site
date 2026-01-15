import type { Metadata, Viewport } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

// Font configuration
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

// Site-wide metadata defaults
export const metadata: Metadata = {
  metadataBase: new URL('https://leaftok.app'),
  title: {
    default: 'LeafTok - AI-Powered Reading App | Transform Books into Smart Cards',
    template: '%s | LeafTok',
  },
  description:
    'Revolutionary AI-powered reading app that transforms any book into bite-sized, swipeable cards. Perfect for students, professionals, and AI enthusiasts.',
  keywords: [
    'PDF reader app',
    'EPUB reader',
    'reading app',
    'free ebook reader',
    'speed reading app',
    'book management app',
    'AI reading app',
    'smart reading cards',
    'spaced repetition',
  ],
  authors: [{ name: 'Iago Cavalcante', url: 'https://iagocavalcante.com' }],
  creator: 'Iago Cavalcante',
  publisher: 'LeafTok',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'pt_BR',
    siteName: 'LeafTok',
    title: 'LeafTok - AI-Powered Reading Revolution | Smart Learning Cards',
    description:
      'Transform any book into intelligent, swipeable cards with AI. Perfect for modern learners, students, and professionals.',
    url: 'https://leaftok.app/',
    images: [
      {
        url: '/assets/banner.png',
        width: 1200,
        height: 630,
        alt: 'LeafTok AI Reading App - Transform Books into Smart Cards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leaftok',
    creator: '@iagocavalcante',
    title: 'LeafTok - AI Reading Revolution | Smart Learning Cards',
    description:
      'AI-powered app that transforms books into bite-sized cards. Enhanced learning with smart algorithms.',
    images: ['/assets/banner.png'],
  },
  alternates: {
    canonical: 'https://leaftok.app/',
    languages: {
      en: 'https://leaftok.app/',
      'pt-BR': 'https://leaftok.app/',
    },
  },
  verification: {
    google: 'google71987400e32a7301',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#0a0b0f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />

        {/* PWA meta tags */}
        <meta name="application-name" content="LeafTok" />
        <meta name="apple-mobile-web-app-title" content="LeafTok" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2DD29F" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
