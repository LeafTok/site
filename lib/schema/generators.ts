import type {
  BookData,
  AuthorData,
  CategoryData,
  FAQItem,
  Breadcrumb,
  SchemaOrg,
} from '@/lib/types';
import { siteConfig } from '@/lib/types';

/**
 * Generate Organization schema for the site
 */
export function generateOrganizationSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo.png`,
    description: siteConfig.description,
    founder: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    sameAs: [
      `https://twitter.com/${siteConfig.socialLinks.twitter.replace('@', '')}`,
    ],
  };
}

/**
 * Generate SoftwareApplication schema for the app
 */
export function generateSoftwareApplicationSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'EReader',
    operatingSystem: ['iOS', 'Android'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '30',
    },
    downloadUrl: [siteConfig.appStoreLinks.ios, siteConfig.appStoreLinks.android],
    screenshot: `${siteConfig.url}/assets/screenshot.png`,
    featureList: [
      'AI-powered content transformation',
      'PDF and EPUB support',
      'Swipeable card-based reading',
      'Progress tracking',
      'Offline reading',
      'Spaced repetition learning',
    ],
  };
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema(): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/books/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Book schema for book summary pages
 */
export function generateBookSchema(book: BookData, categoryName: string): SchemaOrg {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    description: book.description,
    author: {
      '@type': 'Person',
      name: book.author.name,
      url: `${siteConfig.url}/authors/${book.author.slug}/`,
    },
    genre: categoryName,
    url: `${siteConfig.url}/books/${book.category.slug}/${book.slug}/`,
  };

  if (book.isbn) {
    schema.isbn = book.isbn;
  }

  if (book.publishedYear) {
    schema.datePublished = String(book.publishedYear);
  }

  if (book.pageCount) {
    schema.numberOfPages = book.pageCount;
  }

  if (book.coverImage) {
    schema.image = book.coverImage;
  }

  if (book.rating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(book.rating.value),
      ratingCount: String(book.rating.count),
    };
  }

  return schema;
}

/**
 * Generate Review schema for book summaries (as a review of the book)
 */
export function generateBookReviewSchema(book: BookData): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Book',
      name: book.title,
      author: {
        '@type': 'Person',
        name: book.author.name,
      },
    },
    reviewBody: book.summary,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    url: `${siteConfig.url}/books/${book.category.slug}/${book.slug}/`,
  };
}

/**
 * Generate Person schema for author pages
 */
export function generateAuthorSchema(author: AuthorData): SchemaOrg {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    url: `${siteConfig.url}/authors/${author.slug}/`,
  };

  if (author.image) {
    schema.image = author.image;
  }

  if (author.socialLinks) {
    const sameAs: string[] = [];
    if (author.socialLinks.website) sameAs.push(author.socialLinks.website);
    if (author.socialLinks.twitter)
      sameAs.push(`https://twitter.com/${author.socialLinks.twitter.replace('@', '')}`);
    if (author.socialLinks.linkedin) sameAs.push(author.socialLinks.linkedin);
    if (sameAs.length > 0) {
      schema.sameAs = sameAs;
    }
  }

  return schema;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: crumb.url.startsWith('http') ? crumb.url : `${siteConfig.url}${crumb.url}`,
    })),
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  publishedAt: Date;
  modifiedAt?: Date;
  author: string;
  wordCount?: number;
}): SchemaOrg {
  const schema: SchemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/blog/${article.slug}/`,
    datePublished: article.publishedAt.toISOString(),
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/assets/logo.png`,
      },
    },
  };

  if (article.image) {
    schema.image = article.image;
  }

  if (article.modifiedAt) {
    schema.dateModified = article.modifiedAt.toISOString();
  }

  if (article.wordCount) {
    schema.wordCount = article.wordCount;
  }

  return schema;
}

/**
 * Generate CollectionPage schema for category/topic hub pages
 */
export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string,
  itemCount: number
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    numberOfItems: itemCount,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

/**
 * Generate ItemList schema for lists of books
 */
export function generateItemListSchema(
  name: string,
  items: Array<{ name: string; url: string; position: number }>
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}
