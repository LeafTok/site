import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookSummaryTemplate } from '@/components/templates/BookSummaryTemplate';
import {
  getAllBookSlugs,
  getBookData,
  getCategoryData,
  getRelatedBooks,
} from '@/lib/data/books';
import { generateBookMetadata } from '@/lib/seo/metadata';

interface BookPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for all books
export async function generateStaticParams() {
  const slugs = await getAllBookSlugs();
  return slugs.map(({ category, slug }) => ({
    category,
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const book = await getBookData(category, slug);
  const categoryData = await getCategoryData(category);

  if (!book || !categoryData) {
    return {
      title: 'Book Not Found',
    };
  }

  return generateBookMetadata(book, categoryData);
}

export default async function BookPage({ params }: BookPageProps) {
  const { category, slug } = await params;
  const book = await getBookData(category, slug);
  const categoryData = await getCategoryData(category);

  if (!book || !categoryData) {
    notFound();
  }

  const relatedBooks = await getRelatedBooks(slug, 3);

  return (
    <BookSummaryTemplate
      book={book}
      category={categoryData}
      relatedBooks={relatedBooks}
    />
  );
}
