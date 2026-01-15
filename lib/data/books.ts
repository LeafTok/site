import type { BookData, CategoryData, AuthorData, TopicData } from '@/lib/types';
import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * Get all book slugs for static generation
 */
export async function getAllBookSlugs(): Promise<Array<{ category: string; slug: string }>> {
  try {
    const booksDir = path.join(CONTENT_DIR, 'books');
    const categories = fs.readdirSync(booksDir).filter((f) => {
      const stat = fs.statSync(path.join(booksDir, f));
      return stat.isDirectory();
    });

    const slugs: Array<{ category: string; slug: string }> = [];

    for (const category of categories) {
      const categoryDir = path.join(booksDir, category);
      const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.json'));

      for (const file of files) {
        slugs.push({
          category,
          slug: file.replace('.json', ''),
        });
      }
    }

    return slugs;
  } catch {
    return [];
  }
}

/**
 * Get book data by category and slug
 */
export async function getBookData(
  category: string,
  slug: string
): Promise<BookData | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'books', category, `${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as BookData;
  } catch {
    return null;
  }
}

/**
 * Get all books in a category
 */
export async function getBooksByCategory(category: string): Promise<BookData[]> {
  try {
    const categoryDir = path.join(CONTENT_DIR, 'books', category);
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.json'));

    const books: BookData[] = [];
    for (const file of files) {
      const content = fs.readFileSync(path.join(categoryDir, file), 'utf-8');
      books.push(JSON.parse(content));
    }

    return books;
  } catch {
    return [];
  }
}

/**
 * Get all categories
 */
export async function getAllCategories(): Promise<CategoryData[]> {
  try {
    const filePath = path.join(CONTENT_DIR, 'books', '_categories.json');
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as CategoryData[];
  } catch {
    return [];
  }
}

/**
 * Get category data by slug
 */
export async function getCategoryData(slug: string): Promise<CategoryData | null> {
  const categories = await getAllCategories();
  return categories.find((c) => c.slug === slug) || null;
}

/**
 * Get all author slugs for static generation
 */
export async function getAllAuthorSlugs(): Promise<string[]> {
  try {
    const authorsDir = path.join(CONTENT_DIR, 'authors');
    const files = fs.readdirSync(authorsDir).filter((f) => f.endsWith('.json'));
    return files.map((f) => f.replace('.json', ''));
  } catch {
    return [];
  }
}

/**
 * Get author data by slug
 */
export async function getAuthorData(slug: string): Promise<AuthorData | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'authors', `${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as AuthorData;
  } catch {
    return null;
  }
}

/**
 * Get all topic slugs for static generation
 */
export async function getAllTopicSlugs(): Promise<string[]> {
  try {
    const topicsDir = path.join(CONTENT_DIR, 'topics');
    const files = fs.readdirSync(topicsDir).filter((f) => f.endsWith('.json'));
    return files.map((f) => f.replace('.json', ''));
  } catch {
    return [];
  }
}

/**
 * Get topic data by slug
 */
export async function getTopicData(slug: string): Promise<TopicData | null> {
  try {
    const filePath = path.join(CONTENT_DIR, 'topics', `${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content) as TopicData;
  } catch {
    return null;
  }
}

/**
 * Get related books for a book
 */
export async function getRelatedBooks(
  bookSlug: string,
  limit: number = 5
): Promise<BookData[]> {
  const allSlugs = await getAllBookSlugs();
  const books: BookData[] = [];

  for (const { category, slug } of allSlugs) {
    if (slug === bookSlug) continue;
    if (books.length >= limit) break;

    const book = await getBookData(category, slug);
    if (book) books.push(book);
  }

  return books;
}

/**
 * Search books by title or author
 */
export async function searchBooks(query: string): Promise<BookData[]> {
  const allSlugs = await getAllBookSlugs();
  const results: BookData[] = [];
  const lowerQuery = query.toLowerCase();

  for (const { category, slug } of allSlugs) {
    const book = await getBookData(category, slug);
    if (!book) continue;

    if (
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.name.toLowerCase().includes(lowerQuery)
    ) {
      results.push(book);
    }
  }

  return results;
}
