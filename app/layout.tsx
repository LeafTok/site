import type { Metadata, Viewport } from 'next';
import { DM_Sans, Literata } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leaftok.app'),
  title: {
    default: 'LeafTok — Your Books, Reimagined',
    template: '%s | LeafTok',
  },
  description:
    'Turn any PDF or EPUB into TikTok-style swipeable cards. Read 3x faster with AI narration, ambient soundscapes, and beautiful themes.',
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
    title: 'LeafTok — Your Books, Reimagined',
    description:
      'Turn any PDF or EPUB into TikTok-style swipeable cards. Read 3x faster with AI narration, ambient soundscapes, and beautiful themes.',
    url: 'https://leaftok.app/',
    images: [
      {
        url: '/assets/banner.png',
        width: 1200,
        height: 630,
        alt: 'LeafTok — Your Books, Reimagined',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@leaftok',
    creator: '@iagocavalcante',
    title: 'LeafTok — Your Books, Reimagined',
    description:
      'Turn any PDF or EPUB into TikTok-style swipeable cards. Read 3x faster.',
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
  themeColor: '#FAF6F0',
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
    <html lang="en" className={`${dmSans.variable} ${literata.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
        <link rel="manifest" href="/assets/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="application-name" content="LeafTok" />
        <meta name="apple-mobile-web-app-title" content="LeafTok" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3D7A5F" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
