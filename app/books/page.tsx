import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/shared';
import { Breadcrumbs, SchemaGenerator } from '@/components/seo';
import { getAllCategories } from '@/lib/data/books';
import { generateCollectionPageSchema } from '@/lib/schema/generators';
import type { Breadcrumb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Book Summaries - Browse All Categories',
  description:
    'Browse our comprehensive collection of book summaries. Discover insights from the best books in self-improvement, business, technology, psychology, and more.',
  alternates: {
    canonical: 'https://leaftok.app/books/',
  },
};

const breadcrumbs: Breadcrumb[] = [
  { label: 'Home', url: '/' },
  { label: 'Books', url: '/books/' },
];

export default async function BooksIndexPage() {
  const categories = await getAllCategories();

  const schema = generateCollectionPageSchema(
    'Book Summaries Collection',
    'Browse our comprehensive collection of book summaries across multiple categories.',
    '/books/',
    categories.length
  );

  return (
    <>
      <SchemaGenerator schemas={[schema]} />
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge mb-4">Book Library</span>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              Book Summaries
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Discover key insights from the world&apos;s best books. Transform your reading
              with our AI-powered summaries.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/books/${category.slug}/`}
                className="card group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h2>
                <p className="text-text-secondary text-sm mb-4">
                  {category.description}
                </p>
                <span className="text-primary text-sm font-medium">
                  Browse {category.name} →
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center p-12 bg-dark-100 rounded-2xl border border-white/5">
            <h2 className="text-2xl font-serif mb-4">
              Can&apos;t find a book you&apos;re looking for?
            </h2>
            <p className="text-text-secondary mb-6">
              Upload any PDF or EPUB to LeafTok and transform it into swipeable reading cards.
            </p>
            <Link href="/#download" className="btn-primary inline-flex">
              Download LeafTok
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
