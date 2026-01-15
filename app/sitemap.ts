import { MetadataRoute } from 'next';
import { getAllBookSlugs, getAllCategories, getAllAuthorSlugs, getAllTopicSlugs } from '@/lib/data/books';

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
  ];

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

  // Author pages
  const authorSlugs = await getAllAuthorSlugs();
  const authorPages: MetadataRoute.Sitemap = authorSlugs.map((slug) => ({
    url: `${BASE_URL}/authors/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Topic pages
  const topicSlugs = await getAllTopicSlugs();
  const topicPages: MetadataRoute.Sitemap = topicSlugs.map((slug) => ({
    url: `${BASE_URL}/topics/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...bookPages,
    ...authorPages,
    ...topicPages,
  ];
}
