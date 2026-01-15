# LeafTok - Programmatic SEO Platform

A scalable Next.js-based programmatic SEO platform for LeafTok, capable of generating 100,000+ pages with book summaries, author profiles, and topic hubs.

## Tech Stack

- **Framework**: Next.js 16 (App Router with Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: JSON data files
- **Deployment**: GitHub Pages (static export)

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Production build
npm run build
```

## Project Structure

```
leaftok-site/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── books/                    # Book pages
│   │   ├── page.tsx              # Books index
│   │   ├── [category]/           # Category hubs
│   │   │   ├── page.tsx
│   │   │   └── [slug]/           # Individual book summaries
│   │   │       └── page.tsx
│   ├── privacy/page.tsx          # Privacy policy
│   ├── changelog/page.tsx        # Changelog
│   ├── sitemap.ts                # Dynamic sitemap generation
│   └── robots.ts                 # Robots.txt generation
├── components/
│   ├── seo/                      # SEO components
│   │   ├── SchemaGenerator.tsx   # JSON-LD schema injection
│   │   ├── Breadcrumbs.tsx       # Breadcrumb navigation
│   │   └── FAQSection.tsx        # FAQ with schema
│   ├── shared/                   # Shared UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── AppStoreButtons.tsx
│   └── templates/                # Page templates
│       └── BookSummaryTemplate.tsx
├── lib/
│   ├── data/books.ts             # Data fetching utilities
│   ├── schema/generators.ts      # Schema.org generators
│   ├── seo/metadata.ts           # Metadata generation
│   ├── types/index.ts            # TypeScript types
│   └── validation/content-quality.ts  # Content validation
├── content/                      # Content data (JSON)
│   └── books/
│       ├── _categories.json      # Category definitions
│       └── [category]/[slug].json # Book data files
└── public/assets/                # Static assets
```

## Page Types

| Type | URL Pattern | Purpose |
|------|-------------|---------|
| Homepage | `/` | Main landing page |
| Books Index | `/books/` | All books hub |
| Category Hub | `/books/[category]/` | Category landing pages |
| Book Summary | `/books/[category]/[slug]/` | Individual book summaries |
| Privacy | `/privacy/` | Privacy policy |
| Changelog | `/changelog/` | App changelog |

## Adding Content

### Adding a New Book

1. Create a JSON file in `content/books/[category]/[slug].json`:

```json
{
  "title": "Book Title",
  "slug": "book-slug",
  "author": "Author Name",
  "authorSlug": "author-slug",
  "category": "category-slug",
  "publishedYear": 2024,
  "coverImage": "/assets/covers/book-cover.jpg",
  "rating": 4.5,
  "readingTime": "15 min",
  "summary": "Brief book summary...",
  "keyTakeaways": [
    "Key takeaway 1",
    "Key takeaway 2"
  ],
  "chapters": [
    {
      "title": "Chapter 1",
      "summary": "Chapter summary..."
    }
  ],
  "quotes": [
    {
      "text": "Notable quote from the book",
      "chapter": "Chapter 1"
    }
  ],
  "faq": [
    {
      "question": "What is this book about?",
      "answer": "Answer here..."
    }
  ],
  "relatedBooks": ["related-book-slug"],
  "topics": ["productivity", "habits"],
  "seo": {
    "title": "Book Title Summary | LeafTok",
    "description": "SEO description...",
    "keywords": ["keyword1", "keyword2"]
  }
}
```

2. The book will automatically be included in the build.

### Adding a New Category

Add the category to `content/books/_categories.json`:

```json
{
  "slug": "category-slug",
  "name": "Category Name",
  "description": "Category description...",
  "icon": "icon-name"
}
```

## SEO Features

- **Dynamic Metadata**: Generated per page type
- **Schema.org**: Book, FAQ, Breadcrumb, Organization schemas
- **Sitemap**: Auto-generated with all pages
- **Robots.txt**: Configured for search engines
- **Internal Linking**: Hub-and-spoke architecture
- **Content Validation**: Prevents thin content and keyword cannibalization

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to `main`.

### Manual Build

```bash
npm run build
```

Output is in the `out/` directory.

## Brand Colors

- **Primary**: `#2DD29F` (Mint Green)
- **Accent**: `#D36462` (Coral Red)
- **Dark**: `#13141E` (Deep Navy)

## Live URLs

- **Production**: https://leaftok.app
- **GitHub Pages**: https://leaftok.github.io/site/

## App Links

- **iOS**: [App Store](https://apps.apple.com/br/app/leaftok/id6748622950)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.iagocavalcante.leaftok)

## License

MIT License - see [LICENSE](LICENSE) for details.
