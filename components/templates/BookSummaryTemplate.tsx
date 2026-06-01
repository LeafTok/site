import Image from 'next/image';
import Link from 'next/link';
import type { BookData, CategoryData } from '@/lib/types';
import { SchemaGenerator, Breadcrumbs, FAQSection, generateBookBreadcrumbs } from '@/components/seo';
import { Header, Footer, AppStoreButtons } from '@/components/shared';
import { generateBookSchema, generateBookReviewSchema } from '@/lib/schema/generators';

interface BookSummaryTemplateProps {
  book: BookData;
  category: CategoryData;
  relatedBooks?: BookData[];
}

export function BookSummaryTemplate({
  book,
  category,
  relatedBooks = [],
}: BookSummaryTemplateProps) {
  const breadcrumbs = generateBookBreadcrumbs(
    category.slug,
    category.name,
    book.title,
    book.slug
  );

  const schemas = [
    generateBookSchema(book, category.name),
    generateBookReviewSchema(book),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {book.coverImage && (
                  <Image
                    src={book.coverImage}
                    alt={`${book.title} book cover`}
                    width={300}
                    height={450}
                    className="rounded-2xl shadow-2xl mx-auto mb-6"
                  />
                )}

                <div className="space-y-3 text-sm text-ink-secondary">
                  {book.author && (
                    <div className="flex justify-between">
                      <span>Author</span>
                      <Link
                        href={`/authors/${book.author.slug}/`}
                        className="text-primary hover:underline"
                      >
                        {book.author.name}
                      </Link>
                    </div>
                  )}
                  {book.publishedYear && (
                    <div className="flex justify-between">
                      <span>Published</span>
                      <span>{book.publishedYear}</span>
                    </div>
                  )}
                  {book.pageCount && (
                    <div className="flex justify-between">
                      <span>Pages</span>
                      <span>{book.pageCount}</span>
                    </div>
                  )}
                  {book.rating && (
                    <div className="flex justify-between">
                      <span>Rating</span>
                      <span className="flex items-center gap-1">
                        <span className="text-accent">&#9733;</span>
                        {book.rating.value} ({book.rating.count.toLocaleString()} reviews)
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-6 bg-paper-warm rounded-xl border border-ink/5">
                  <p className="text-sm text-ink-secondary mb-4">
                    Read this book summary in LeafTok — transform it into swipeable cards!
                  </p>
                  <AppStoreButtons variant="compact" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Link
                href={`/books/${category.slug}/`}
                className="badge mb-4 hover:bg-primary/20 transition-colors"
              >
                {category.name}
              </Link>

              <h1 className="text-4xl md:text-5xl font-serif mb-4">{book.title}</h1>
              <p className="text-xl text-ink-secondary mb-8">{book.description}</p>

              <section className="mb-12">
                <h2 className="text-2xl font-serif mb-4">Summary</h2>
                <div className="prose prose-lg max-w-none">
                  {book.summary.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-ink-secondary mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {book.keyTakeaways && book.keyTakeaways.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-serif mb-6">Key Takeaways</h2>
                  <div className="space-y-4">
                    {book.keyTakeaways.map((takeaway, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-paper-warm rounded-xl border border-ink/5"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                          {index + 1}
                        </span>
                        <p className="text-ink-secondary">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {book.topics && book.topics.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-serif mb-4">Topics</h2>
                  <div className="flex flex-wrap gap-2">
                    {book.topics.map((topic) => (
                      <Link
                        key={topic}
                        href={`/topics/${topic}/`}
                        className="px-4 py-2 bg-paper-cream rounded-full text-ink-secondary hover:text-ink hover:bg-paper-dark transition-colors"
                      >
                        {topic.replace(/-/g, ' ')}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {book.faq && book.faq.length > 0 && (
            <FAQSection
              faqs={book.faq}
              title={`Frequently Asked Questions about ${book.title}`}
              className="border-t border-ink/5"
            />
          )}

          {relatedBooks.length > 0 && (
            <section className="py-16 border-t border-ink/5">
              <h2 className="text-2xl font-serif mb-8">Related Books</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedBooks.slice(0, 3).map((relatedBook) => (
                  <Link
                    key={relatedBook.slug}
                    href={`/books/${relatedBook.category.slug}/${relatedBook.slug}/`}
                    className="card group"
                  >
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                      {relatedBook.title}
                    </h3>
                    <p className="text-sm text-ink-secondary mb-2">
                      by {relatedBook.author.name}
                    </p>
                    <span className="text-xs text-ink-muted">
                      {relatedBook.category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
