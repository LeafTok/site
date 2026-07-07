import { MetadataRoute } from 'next';
import { getAllBookSlugs, getAllCategories } from '@/lib/data/books';
import { getAllGuides } from '@/lib/data/guides';

// Required for static export
export const dynamic = 'force-static';

const BASE_URL = 'https://leaftok.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/changelog/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/books/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/guides/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Keyword guide pages
  const guidePages: MetadataRoute.Sitemap = getAllGuides().map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}/`,
    lastModified: new Date(guide.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Category hub pages
  const categories = await getAllCategories();
  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/books/${category.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Book summary pages
  const bookSlugs = await getAllBookSlugs();
  const bookPages: MetadataRoute.Sitemap = bookSlugs.map(({ category, slug }) => ({
    url: `${BASE_URL}/books/${category}/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // NOTE: /authors/ and /topics/ routes do not exist in app/ — their sitemap
  // entries were removed 2026-07-07 because they advertised dead URLs to
  // crawlers. Restore them here if those routes ship.

  return [
    ...staticPages,
    ...guidePages,
    ...categoryPages,
    ...bookPages,
  ];
}
