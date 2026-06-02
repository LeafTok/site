# LeafTok Landing Page — Design Reference

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#3D7A5F` | CTAs, highlights, accent links, editorial rule |
| `primary-dark` | `#2E5E49` | Hover states |
| `primary-light` | `#5A9E7E` | Hover highlights |
| `primary-muted` | `#3D7A5F1A` | Badge backgrounds, subtle tints |

### Accent

| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | `#C4654A` | Terracotta — rating stars, FREE badge, strikethrough |
| `accent-light` | `#D98A74` | Light accent |

### Ink (Text & Dark Elements)

| Token | Hex | Usage |
|-------|-----|-------|
| `ink` | `#1A1612` | Primary text, buttons, headings |
| `ink-light` | `#2C2620` | Button hover state |
| `ink-muted` | `#5C5347` | Secondary text, labels |
| `ink-faint` | `#8A7E72` | Muted text, marquee, breadcrumbs |

### Paper (Backgrounds)

| Token | Hex | Usage |
|-------|-----|-------|
| `paper` | `#FAF6F0` | Page background |
| `paper-warm` | `#F5EDE2` | Card backgrounds, alternating sections |
| `paper-cream` | `#EDE4D6` | Card hover, elevated surfaces |
| `paper-dark` | `#E8DFD0` | Borders, dividers |

### Backward-Compatible Aliases

Old token names still work for pages not yet migrated:

| Old Token | Maps To |
|-----------|---------|
| `text-primary` | `ink` (#1A1612) |
| `text-secondary` | `ink-muted` (#5C5347) |
| `text-muted` | `ink-faint` (#8A7E72) |
| `dark` | `ink` (#1A1612) |
| `dark-100` | `paper-warm` (#F5EDE2) |
| `dark-200` | `paper-cream` (#EDE4D6) |
| `dark-300` | `paper-dark` (#E8DFD0) |

## Typography

### Font Stack

| Role | Font | Fallback | Source |
|------|------|----------|--------|
| Headings / Serif | **Literata** | Georgia, serif | Google Fonts |
| Body / Sans | **DM Sans** | -apple-system, BlinkMacSystemFont, sans-serif | Google Fonts |

### Why Literata

- Designed by Google for Play Books — optimized for continuous screen reading
- Lower x-height with higher ascenders = airy line spacing
- Supports normal + italic in weights 400–700
- Open source (SIL Open Font License)

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero H1 | `clamp(2.5rem, 6vw, 5rem)` | 400 (serif) | 0.95 |
| Section H2 | `2.5rem–3rem` | 400 (serif) | 1.05 |
| Card H3 | `1.25rem` | 600 (sans) | 1.2 |
| Body | `1rem–1.25rem` | 400 (sans) | 1.6 |
| Small / Labels | `0.875rem` | 500 (sans) | 1.4 |

### Italic Convention

Serif italic is used for the emotional/transformative word in headlines:

```html
<span className="serif-italic text-primary">deserves</span>
```

## Layout

### Container

- Max width: `1200px`
- Padding: `24px` (px-6)
- Centered with `mx-auto`

### Grid System

The homepage uses a 12-column grid for the hero:

```
|------ 7 cols (copy) ------|--- 5 cols (phone) ---|
```

Feature cards use a 3-column grid with the first card spanning 2 columns.

### Spacing Rhythm

| Element | Vertical Padding |
|---------|-----------------|
| Hero | `pt-28 pb-20` |
| Major sections | `py-24 lg:py-32` |
| Alternating sections | `py-24` with `bg-paper-warm` |
| Final CTA | `py-28 lg:py-36` |

## Components

### `.badge`

Pill-shaped label with green tint background:

```
bg-primary-muted border border-primary/15 text-primary
```

### `.card`

Warm paper card with subtle border:

```
bg-paper-warm rounded-2xl p-8 border border-ink/5
```

On hover: lifts 2px, background lightens to `paper-cream`.

### `.btn-primary`

Dark ink button — the main CTA:

```
bg-ink text-paper rounded-full px-7 py-3.5
```

### `.btn-secondary`

Ghost button with ink border:

```
border-2 border-ink/15 text-ink rounded-full px-7 py-3.5
```

### `.editorial-rule`

12px wide, 2px tall green line — section accent:

```
w-12 h-[2px] bg-primary
```

### `.feature-number`

Ghost watermark number on feature cards:

```
font-serif text-7xl text-ink/5 absolute -top-2 -left-2
```

### `.hero-glow`

Radial gradient overlay on hero/CTA sections — two subtle color blobs (green top-left, terracotta bottom-right).

### `.leaf-shape`

Decorative floating leaf with `border-radius: 0 70% 70% 70%` and a 6s float animation.

### Marquee

Auto-scrolling feature ticker. Uses `animate-marquee` (30s linear infinite translateX). Content is duplicated for seamless loop.

## Animations

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `float` | 6s | ease-in-out | Floating chips, leaf shapes |
| `fadeIn` | 0.6s | ease-out | Hero copy entrance |
| `slideUp` | 0.8s | ease-out | Phone mockup entrance |
| `fadeInScale` | 0.5s | ease-out | Scale-in elements |
| `marquee` | 30s | linear | Feature ticker strip |
| `spin` | 60s | linear | Dashed ring behind phone |

## Assets

### Logo

| File | Size | Usage |
|------|------|-------|
| `logo.webp` | 256px | General logo (iOS app icon exported) |
| `logo-dark.webp` | 256px | Header & footer — icon on `#1A1612` background |
| `logo-small.webp` | 96px | Favicons, small contexts |

### Screenshots

All from `screenshots/final/` — real iOS App Store marketing screenshots:

| File | Feature |
|------|---------|
| `screenshot-01-swipe-books-like-tiktok.webp` | Hero + showcase |
| `screenshot-02-listen-hands-free.webp` | Showcase carousel |
| `screenshot-03-get-ai-summaries.webp` | Showcase carousel |
| `screenshot-04-turn-epub-into-cards.webp` | Showcase carousel |
| `screenshot-05-read-to-lo-fi-beats.webp` | Showcase carousel |

Resized to 400×870px webp for web.

## Page Sections (Homepage)

1. **Hero** — 7/5 grid, strikethrough headline, real screenshot, floating chips, dashed ring
2. **Marquee** — Scrolling feature ticker on warm background
3. **Features** — 5 cards (first spans 2 cols), ghost numbers, editorial header
4. **Screenshot Showcase** — Horizontal snap-scroll carousel of 5 real screenshots
5. **How It Works** — 3 steps with editorial arrows between them
6. **Stats** — 4 stats on warm background (3x, 16, 5, 100%)
7. **FAQ** — Accordion with warm styling
8. **Final CTA** — "Your bookshelf is waiting" with glow and leaf decorations

## Design Principles

1. **Book-first, not app-first** — copy talks about reading, not technology
2. **Curiosity over explanation** — make people want to try it, not read about it
3. **Warmth over coolness** — cream, paper, ink — not neon, glass, chrome
4. **One surprise per scroll** — each section has one unexpected detail
5. **Urgency through beauty** — FOMO from "this looks amazing" not "limited time"

## Anti-References (What This Is NOT)

- No dark mode tech aesthetic
- No purple-to-blue gradients
- No glassmorphism / frosted glass
- No neon accents on dark backgrounds
- No identical card grids
- No generic SaaS layout
