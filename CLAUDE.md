# CLAUDE.md

This file provides guidance for Claude Code when working on this project.

## Project Overview

LeafTok SEO Platform - A Next.js 16 static site for programmatic SEO, generating book summaries at scale.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build (outputs to /out)
npm run lint       # ESLint check
npm run type-check # TypeScript check
```

## Architecture

- **Next.js 16 App Router** with static export (`output: 'export'`)
- **TypeScript** with strict mode
- **Tailwind CSS** for styling
- **JSON files** in `/content` for data
- **GitHub Pages** deployment

## Key Patterns

### Adding Pages

Dynamic routes use `generateStaticParams()`:
```typescript
export async function generateStaticParams() {
  const items = await getData();
  return items.map(item => ({ slug: item.slug }));
}
```

### SEO Metadata

Use `lib/seo/metadata.ts` generators:
```typescript
export const metadata = generateBookMetadata(bookData);
```

### Schema.org

Use `components/seo/SchemaGenerator.tsx`:
```tsx
<SchemaGenerator schemas={[bookSchema, faqSchema]} />
```

### Content Data

Books are stored as JSON in `content/books/[category]/[slug].json`. Categories defined in `content/books/_categories.json`.

## File Locations

| Purpose | Location |
|---------|----------|
| Pages | `app/` |
| Components | `components/` |
| Data fetching | `lib/data/` |
| SEO utilities | `lib/seo/` |
| Schema generators | `lib/schema/` |
| Types | `lib/types/` |
| Content | `content/` |
| Static assets | `public/assets/` |

## Static Export Requirements

- All routes must be statically determinable at build time
- Use `export const dynamic = 'force-static'` for sitemap.ts and robots.ts
- No server-side features (API routes, server actions, etc.)
- Images use `unoptimized: true` in next.config.js

## Styling

- Use Tailwind utility classes
- Brand colors: primary (`#2DD29F`), accent (`#D36462`), dark (`#13141E`)
- Custom colors defined in `tailwind.config.ts`

## Testing Changes

Always run before committing:
```bash
npm run type-check && npm run lint && npm run build
```
