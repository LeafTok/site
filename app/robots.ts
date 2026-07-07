import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

/**
 * AI-crawler policy (decided 2026-07-07): allow retrieval/answer bots so
 * LeafTok can be cited by AI search (ChatGPT search, Claude, Perplexity,
 * Gemini); block pure training crawlers. Cloudflare's AI Crawl Control
 * enforces the same policy at the edge — keep the two in sync.
 */
const RETRIEVAL_BOTS = [
  'ChatGPT-User',
  'OAI-SearchBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'DuckAssistBot',
  'Google-Extended',
];

const TRAINING_BOTS = [
  'GPTBot',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'meta-externalagent',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      ...RETRIEVAL_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
      ...TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: '/',
      })),
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://leaftok.app/sitemap.xml',
    host: 'https://leaftok.app',
  };
}
