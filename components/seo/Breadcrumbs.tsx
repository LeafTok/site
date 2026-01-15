import Link from 'next/link';
import type { Breadcrumb } from '@/lib/types';
import { generateBreadcrumbSchema } from '@/lib/schema/generators';
import { InlineSchema } from './SchemaGenerator';

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

/**
 * Breadcrumbs component with visual navigation and JSON-LD schema
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <InlineSchema schema={schema} />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-text-secondary ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.url} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-text-muted" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="hover:text-text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                    <span className="text-text-muted" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/**
 * Generate breadcrumb items for a book summary page
 */
export function generateBookBreadcrumbs(
  categorySlug: string,
  categoryName: string,
  bookTitle: string,
  bookSlug: string
): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Books', url: '/books/' },
    { label: categoryName, url: `/books/${categorySlug}/` },
    { label: bookTitle, url: `/books/${categorySlug}/${bookSlug}/` },
  ];
}

/**
 * Generate breadcrumb items for an author page
 */
export function generateAuthorBreadcrumbs(authorName: string, authorSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Authors', url: '/authors/' },
    { label: authorName, url: `/authors/${authorSlug}/` },
  ];
}

/**
 * Generate breadcrumb items for a category hub page
 */
export function generateCategoryBreadcrumbs(
  categoryName: string,
  categorySlug: string
): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Books', url: '/books/' },
    { label: categoryName, url: `/books/${categorySlug}/` },
  ];
}

/**
 * Generate breadcrumb items for a topic hub page
 */
export function generateTopicBreadcrumbs(topicName: string, topicSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Topics', url: '/topics/' },
    { label: topicName, url: `/topics/${topicSlug}/` },
  ];
}

/**
 * Generate breadcrumb items for a blog article
 */
export function generateBlogBreadcrumbs(articleTitle: string, articleSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog/' },
    { label: articleTitle, url: `/blog/${articleSlug}/` },
  ];
}
