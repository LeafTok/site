import { Metadata } from 'next';
import type { SEOMetadata, BookData, AuthorData, CategoryData, TopicData, PageType } from '@/lib/types';
import { siteConfig } from '@/lib/types';

/**
 * Generate base metadata that applies to all pages
 */
export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,
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
  };
}

/**
 * Generate metadata for a book summary page
 */
export function generateBookMetadata(book: BookData, category: CategoryData): Metadata {
  const title = `${book.title} Summary & Key Takeaways`;
  const description = truncate(
    `Read our comprehensive summary of "${book.title}" by ${book.author.name}. Discover key insights, main concepts, and actionable takeaways from this ${category.name} book.`,
    160
  );
  const url = `${siteConfig.url}/books/${category.slug}/${book.slug}/`;

  return {
    title,
    description,
    keywords: [
      `${book.title} summary`,
      `${book.title} key takeaways`,
      `${book.author.name} books`,
      category.name.toLowerCase(),
      'book summary',
      'book review',
    ],
    openGraph: {
      title: `${book.title} - Summary & Key Insights | LeafTok`,
      description,
      url,
      type: 'article',
      images: book.coverImage
        ? [{ url: book.coverImage, width: 600, height: 900, alt: `${book.title} book cover` }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: book.coverImage ? [book.coverImage] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate metadata for an author profile page
 */
export function generateAuthorMetadata(author: AuthorData): Metadata {
  const title = `${author.name} - Books & Biography`;
  const description = truncate(
    `Explore all books by ${author.name}. Read summaries, discover key insights, and find your next great read from this acclaimed author.`,
    160
  );
  const url = `${siteConfig.url}/authors/${author.slug}/`;

  return {
    title,
    description,
    keywords: [
      `${author.name} books`,
      `${author.name} author`,
      `${author.name} bibliography`,
      'book author',
    ],
    openGraph: {
      title: `${author.name} - Author Profile & Book Summaries | LeafTok`,
      description,
      url,
      type: 'profile',
      images: author.image
        ? [{ url: author.image, width: 400, height: 400, alt: `${author.name} photo` }]
        : undefined,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate metadata for a category hub page
 */
export function generateCategoryMetadata(category: CategoryData): Metadata {
  const title = `Best ${category.name} Books - Summaries & Reviews`;
  const description = truncate(
    `Discover the best ${category.name.toLowerCase()} books with our comprehensive summaries. Browse ${category.bookCount}+ book summaries with key takeaways and insights.`,
    160
  );
  const url = `${siteConfig.url}/books/${category.slug}/`;

  return {
    title,
    description,
    keywords: [
      `${category.name.toLowerCase()} books`,
      `best ${category.name.toLowerCase()} books`,
      `${category.name.toLowerCase()} book summaries`,
      'book recommendations',
    ],
    openGraph: {
      title: `${category.name} Book Summaries & Reviews | LeafTok`,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate metadata for a topic hub page
 */
export function generateTopicMetadata(topic: TopicData): Metadata {
  const title = `${topic.name} Books - Best Reads & Summaries`;
  const description = truncate(
    `Explore the best books about ${topic.name.toLowerCase()}. Read summaries, discover key insights, and accelerate your learning with our curated collection.`,
    160
  );
  const url = `${siteConfig.url}/topics/${topic.slug}/`;

  return {
    title,
    description,
    keywords: [
      `${topic.name.toLowerCase()} books`,
      `books about ${topic.name.toLowerCase()}`,
      `${topic.name.toLowerCase()} reading list`,
      'topic books',
    ],
    openGraph: {
      title: `${topic.name} - Curated Book Collection | LeafTok`,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate metadata for blog articles
 */
export function generateArticleMetadata(article: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt: Date;
  author: string;
}): Metadata {
  const url = `${siteConfig.url}/blog/${article.slug}/`;

  return {
    title: article.title,
    description: truncate(article.description, 160),
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      publishedTime: article.publishedAt.toISOString(),
      authors: [article.author],
      images: article.image
        ? [{ url: article.image, width: 1200, height: 630, alt: article.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: truncate(article.description, 200),
      images: article.image ? [article.image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Generate metadata from generic SEO data
 */
export function generateMetadataFromSEO(seo: SEOMetadata, pageType: PageType): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      url: seo.canonical,
      images: seo.ogImage ? [{ url: seo.ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.twitterTitle || seo.title,
      description: seo.twitterDescription || seo.description,
    },
    alternates: {
      canonical: seo.canonical,
    },
    robots: seo.noIndex ? { index: false, follow: false } : undefined,
  };
}

/**
 * Utility function to truncate text to a maximum length
 */
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + '...';
}

/**
 * Generate unique title to avoid keyword cannibalization
 * Uses different title patterns based on page type
 */
export function generateUniqueTitle(
  baseTitle: string,
  pageType: PageType,
  additionalContext?: string
): string {
  const patterns: Record<PageType, (title: string, context?: string) => string> = {
    home: (title) => title,
    'book-summary': (title, ctx) => `${title} Summary & Key Takeaways${ctx ? ` | ${ctx}` : ''}`,
    'category-hub': (title) => `Best ${title} Books - Summaries & Reviews`,
    'author-profile': (title) => `${title} - Books & Biography`,
    'topic-hub': (title) => `${title} Books - Best Reads & Summaries`,
    'reading-list': (title) => `${title} Reading List - Curated Book Collection`,
    'blog-article': (title) => title,
    comparison: (title) => title,
    guide: (title) => `${title} - Complete Guide`,
    legal: (title) => title,
  };

  return patterns[pageType](baseTitle, additionalContext);
}
