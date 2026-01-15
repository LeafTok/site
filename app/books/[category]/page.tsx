import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs, SchemaGenerator, generateCategoryBreadcrumbs } from '@/components/seo';
import {
  getAllCategories,
  getCategoryData,
  getBooksByCategory,
} from '@/lib/data/books';
import { generateCategoryMetadata } from '@/lib/seo/metadata';
import { generateCollectionPageSchema, generateItemListSchema } from '@/lib/schema/generators';
import { siteConfig } from '@/lib/types';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = await getCategoryData(category);

  if (!categoryData) {
    return { title: 'Category Not Found' };
  }

  return generateCategoryMetadata(categoryData);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = await getCategoryData(category);

  if (!categoryData) {
    notFound();
  }

  const books = await getBooksByCategory(category);
  const breadcrumbs = generateCategoryBreadcrumbs(categoryData.name, categoryData.slug);

  const schemas = [
    generateCollectionPageSchema(
      `${categoryData.name} Book Summaries`,
      categoryData.description,
      `/books/${categoryData.slug}/`,
      books.length
    ),
    generateItemListSchema(
      `Best ${categoryData.name} Books`,
      books.map((book, index) => ({
        name: book.title,
        url: `${siteConfig.url}/books/${categoryData.slug}/${book.slug}/`,
        position: index + 1,
      }))
    ),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          {/* Header */}
          <div className="mb-12">
            <span className="badge mb-4">Book Category</span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              {categoryData.name} Books
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl">
              {categoryData.description}
            </p>
            <p className="text-text-muted mt-4">
              {books.length} book{books.length !== 1 ? 's' : ''} in this category
            </p>
          </div>

          {/* Books Grid */}
          {books.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <Link
                  key={book.slug}
                  href={`/books/${categoryData.slug}/${book.slug}/`}
                  className="card group"
                >
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                    {book.title}
                  </h2>
                  <p className="text-text-secondary text-sm mb-4">
                    by {book.author.name}
                  </p>
                  <p className="text-text-muted text-sm line-clamp-3">
                    {book.description}
                  </p>
                  {book.rating && (
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <span className="text-yellow-400">★</span>
                      <span className="text-text-secondary">{book.rating.value}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                No books in this category yet. Check back soon!
              </p>
              <Link href="/books/" className="text-primary hover:underline mt-4 inline-block">
                Browse all categories
              </Link>
            </div>
          )}

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/books/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Categories
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
