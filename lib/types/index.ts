// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  noIndex?: boolean;
}

export interface Breadcrumb {
  label: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InternalLink {
  text: string;
  href: string;
  title?: string;
}

// Page Types
export type PageType =
  | 'home'
  | 'book-summary'
  | 'category-hub'
  | 'author-profile'
  | 'topic-hub'
  | 'reading-list'
  | 'blog-article'
  | 'comparison'
  | 'guide'
  | 'legal';

export type Locale = 'en' | 'pt-BR';

// Content Types
export interface PageContent {
  heroSection?: HeroContent;
  mainContent?: ContentBlock[];
  sidebar?: SidebarContent;
}

export interface HeroContent {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  image?: string;
}

export interface ContentBlock {
  type: 'text' | 'heading' | 'list' | 'quote' | 'image' | 'callout';
  content: string;
  level?: 1 | 2 | 3 | 4;
  items?: string[];
}

export interface SidebarContent {
  relatedPages?: InternalLink[];
  tableOfContents?: TOCItem[];
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  icon?: string;
}

// Programmatic Page Interface
export interface ProgrammaticPage {
  slug: string;
  locale: Locale;
  pageType: PageType;
  seo: SEOMetadata;
  content: PageContent;
  breadcrumbs: Breadcrumb[];
  faq?: FAQItem[];
  relatedPages: string[];
  internalLinks: InternalLink[];
  lastModified: Date;
  priority: number;
}

// Book-specific Types
export interface BookData {
  slug: string;
  title: string;
  author: AuthorReference;
  category: CategoryReference;
  description: string;
  summary: string;
  keyTakeaways: string[];
  coverImage?: string;
  isbn?: string;
  publishedYear?: number;
  pageCount?: number;
  rating?: {
    value: number;
    count: number;
  };
  faq: FAQItem[];
  relatedBooks: string[];
  topics: string[];
}

export interface AuthorReference {
  slug: string;
  name: string;
}

export interface CategoryReference {
  slug: string;
  name: string;
  parentCategory?: string;
}

export interface AuthorData {
  slug: string;
  name: string;
  bio: string;
  image?: string;
  books: string[];
  socialLinks?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface CategoryData {
  slug: string;
  name: string;
  description: string;
  parentCategory?: string;
  subcategories?: string[];
  bookCount: number;
}

export interface TopicData {
  slug: string;
  name: string;
  description: string;
  relatedTopics: string[];
  books: string[];
}

// Schema Types (for JSON-LD)
export interface SchemaOrg {
  '@context': 'https://schema.org';
  '@type': string;
  [key: string]: unknown;
}

// Site Configuration
export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    url: string;
    twitter: string;
  };
  socialLinks: {
    twitter: string;
    github?: string;
  };
  appStoreLinks: {
    ios: string;
    android: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'LeafTok',
  url: 'https://leaftok.app',
  description:
    'AI-powered reading app that transforms books into intelligent, swipeable cards.',
  author: {
    name: 'Iago Cavalcante',
    url: 'https://iagocavalcante.com',
    twitter: '@iagocavalcante',
  },
  socialLinks: {
    twitter: '@leaftok',
  },
  appStoreLinks: {
    ios: 'https://apps.apple.com/br/app/leaftok/id6748622950',
    android: 'https://play.google.com/store/apps/details?id=com.iagocavalcante.leaftok',
  },
};
