import type { BookData, PageType } from '@/lib/types';

/**
 * Content quality thresholds by page type
 */
interface ContentQualityThresholds {
  minimumWordCount: number;
  minimumKeyTakeaways: number;
  minimumFAQs: number;
  requiredFields: string[];
}

const QUALITY_THRESHOLDS: Record<string, ContentQualityThresholds> = {
  'book-summary': {
    minimumWordCount: 300,
    minimumKeyTakeaways: 3,
    minimumFAQs: 2,
    requiredFields: ['title', 'author', 'category', 'description', 'summary', 'keyTakeaways'],
  },
  'category-hub': {
    minimumWordCount: 100,
    minimumKeyTakeaways: 0,
    minimumFAQs: 0,
    requiredFields: ['name', 'description', 'slug'],
  },
  'author-profile': {
    minimumWordCount: 100,
    minimumKeyTakeaways: 0,
    minimumFAQs: 0,
    requiredFields: ['name', 'bio', 'slug'],
  },
};

export interface ValidationResult {
  valid: boolean;
  score: number;
  issues: ValidationIssue[];
  warnings: ValidationIssue[];
}

export interface ValidationIssue {
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

/**
 * Count words in a string
 */
function countWords(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

/**
 * Validate book content quality
 */
export function validateBookContent(book: BookData): ValidationResult {
  const issues: ValidationIssue[] = [];
  const warnings: ValidationIssue[] = [];
  const thresholds = QUALITY_THRESHOLDS['book-summary'];
  let score = 100;

  // Check required fields
  for (const field of thresholds.requiredFields) {
    const value = book[field as keyof BookData];
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      issues.push({
        field,
        message: `Missing required field: ${field}`,
        severity: 'error',
      });
      score -= 20;
    }
  }

  // Check summary word count
  if (book.summary) {
    const wordCount = countWords(book.summary);
    if (wordCount < thresholds.minimumWordCount) {
      issues.push({
        field: 'summary',
        message: `Summary too short: ${wordCount} words (minimum: ${thresholds.minimumWordCount})`,
        severity: 'error',
      });
      score -= 15;
    }
  }

  // Check key takeaways
  if (!book.keyTakeaways || book.keyTakeaways.length < thresholds.minimumKeyTakeaways) {
    issues.push({
      field: 'keyTakeaways',
      message: `Not enough key takeaways: ${book.keyTakeaways?.length || 0} (minimum: ${thresholds.minimumKeyTakeaways})`,
      severity: 'error',
    });
    score -= 10;
  }

  // Check FAQs
  if (!book.faq || book.faq.length < thresholds.minimumFAQs) {
    warnings.push({
      field: 'faq',
      message: `Few FAQs: ${book.faq?.length || 0} (recommended: ${thresholds.minimumFAQs}+)`,
      severity: 'warning',
    });
    score -= 5;
  }

  // Check for thin description
  if (book.description && countWords(book.description) < 20) {
    warnings.push({
      field: 'description',
      message: 'Description may be too short for good SEO',
      severity: 'warning',
    });
    score -= 5;
  }

  // Ensure author has valid reference
  if (!book.author?.slug || !book.author?.name) {
    issues.push({
      field: 'author',
      message: 'Author must have both slug and name',
      severity: 'error',
    });
    score -= 10;
  }

  // Ensure category has valid reference
  if (!book.category?.slug || !book.category?.name) {
    issues.push({
      field: 'category',
      message: 'Category must have both slug and name',
      severity: 'error',
    });
    score -= 10;
  }

  return {
    valid: issues.length === 0,
    score: Math.max(0, score),
    issues,
    warnings,
  };
}

/**
 * Validate batch of books and generate report
 */
export function validateBookBatch(books: BookData[]): {
  totalBooks: number;
  validBooks: number;
  invalidBooks: number;
  averageScore: number;
  results: Array<{ slug: string; result: ValidationResult }>;
} {
  const results = books.map((book) => ({
    slug: book.slug,
    result: validateBookContent(book),
  }));

  const validBooks = results.filter((r) => r.result.valid).length;
  const averageScore =
    results.reduce((sum, r) => sum + r.result.score, 0) / results.length;

  return {
    totalBooks: books.length,
    validBooks,
    invalidBooks: books.length - validBooks,
    averageScore: Math.round(averageScore),
    results,
  };
}

/**
 * Check for keyword cannibalization across books
 */
export function checkKeywordCannibalization(
  books: BookData[]
): Array<{ keyword: string; pages: string[] }> {
  const keywordMap = new Map<string, string[]>();

  for (const book of books) {
    // Extract keywords from title
    const titleKeywords = book.title.toLowerCase().split(/\s+/);

    // Extract keywords from topics
    const topicKeywords = book.topics || [];

    // Combine all keywords
    const allKeywords = [...titleKeywords, ...topicKeywords.map((t) => t.toLowerCase())];

    for (const keyword of allKeywords) {
      if (keyword.length < 4) continue; // Skip short words

      if (!keywordMap.has(keyword)) {
        keywordMap.set(keyword, []);
      }
      keywordMap.get(keyword)!.push(book.slug);
    }
  }

  // Find duplicates
  const duplicates: Array<{ keyword: string; pages: string[] }> = [];
  keywordMap.forEach((pages, keyword) => {
    if (pages.length > 1) {
      duplicates.push({ keyword, pages });
    }
  });

  return duplicates;
}

/**
 * Check for duplicate content (similar titles/descriptions)
 */
export function checkDuplicateContent(
  books: BookData[]
): Array<{ books: string[]; similarity: number; type: string }> {
  const duplicates: Array<{ books: string[]; similarity: number; type: string }> = [];

  for (let i = 0; i < books.length; i++) {
    for (let j = i + 1; j < books.length; j++) {
      // Check title similarity
      const titleSimilarity = calculateSimilarity(
        books[i].title.toLowerCase(),
        books[j].title.toLowerCase()
      );
      if (titleSimilarity > 0.8) {
        duplicates.push({
          books: [books[i].slug, books[j].slug],
          similarity: titleSimilarity,
          type: 'title',
        });
      }

      // Check description similarity
      const descSimilarity = calculateSimilarity(
        books[i].description.toLowerCase(),
        books[j].description.toLowerCase()
      );
      if (descSimilarity > 0.7) {
        duplicates.push({
          books: [books[i].slug, books[j].slug],
          similarity: descSimilarity,
          type: 'description',
        });
      }
    }
  }

  return duplicates;
}

/**
 * Simple Jaccard similarity calculation
 */
function calculateSimilarity(str1: string, str2: string): number {
  const set1 = new Set(str1.split(/\s+/));
  const set2 = new Set(str2.split(/\s+/));

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size;
}
