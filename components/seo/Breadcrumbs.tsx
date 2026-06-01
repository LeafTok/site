import Link from 'next/link';
import type { Breadcrumb } from '@/lib/types';
import { generateBreadcrumbSchema } from '@/lib/schema/generators';
import { InlineSchema } from './SchemaGenerator';

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <InlineSchema schema={schema} />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-ink-secondary ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.url} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-ink-muted" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="hover:text-ink transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                    <span className="text-ink-muted" aria-hidden="true">
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

export function generateAuthorBreadcrumbs(authorName: string, authorSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Authors', url: '/authors/' },
    { label: authorName, url: `/authors/${authorSlug}/` },
  ];
}

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

export function generateTopicBreadcrumbs(topicName: string, topicSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Topics', url: '/topics/' },
    { label: topicName, url: `/topics/${topicSlug}/` },
  ];
}

export function generateBlogBreadcrumbs(articleTitle: string, articleSlug: string): Breadcrumb[] {
  return [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog/' },
    { label: articleTitle, url: `/blog/${articleSlug}/` },
  ];
}
