import type { FAQItem } from "@/lib/types";

/**
 * Centralized copy for the landing page.
 *
 * Every claim is cross-checked against shipping iOS code (see
 * leaftok-docs/plans/2026-06-17-landing-page-editorial-refresh-design.md).
 */

/** Hero trust row — honest, verifiable proof. */
export const heroTrust: string[] = [
  "Free to start",
  "No signup",
  "Works offline",
];

/** Feature grid — what you get. */
export interface Feature {
  title: string;
  points: string[];
  screenshot?: {
    src: string;
    alt: string;
  };
}

export const features: Feature[] = [
  {
    title: "Swipe-first reading",
    points: [
      "Any EPUB or PDF becomes focused, swipeable cards",
      "Chapters, images, and code blocks survive the cut",
      "Pick up exactly where you left off",
    ],
    screenshot: {
      src: "/assets/screenshot-01-swipe-books-like-tiktok.webp",
      alt: "A book turned into swipeable LeafTok cards",
    },
  },
  {
    title: "Listen with on-device narration",
    points: [
      "16 British and American AI voices",
      "Runs entirely on-device — works offline",
      "Ambient soundscapes with a sleep timer",
    ],
    screenshot: {
      src: "/assets/screenshot-02-listen-hands-free.webp",
      alt: "LeafTok reading a book aloud with on-device narration",
    },
  },
  {
    title: "Book clubs",
    points: [
      "Read with friends, invite with a share code",
      "Discuss chapters right inside the reader",
      "Spoiler-safe flags and reactions",
    ],
    screenshot: {
      src: "/assets/screenshot-03-get-ai-summaries.webp",
      alt: "A LeafTok book club discussion",
    },
  },
  {
    title: "Make it yours",
    points: [
      "5 reading themes, from paper-bright to midnight",
      "5 fonts with adjustable size and spacing",
      "OpenDyslexic, high contrast, and reduced motion",
    ],
  },
  {
    title: "Track your streak",
    points: [
      "A streak counts the days you showed up",
      "Shelves keep want-to-read, reading, and finished apart",
      "Favorite any card to find it again later",
    ],
  },
  {
    title: "Import anything",
    points: [
      "Any EPUB or PDF you already own",
      "No account, no catalog lock-in",
      "Converted and ready to read in seconds",
    ],
  },
];

/** Getting-started steps. */
export interface Step {
  numeral: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    numeral: "01",
    title: "Drop in a book",
    description:
      "Any PDF or EPUB you already own. No account, no setup wizard. Just a file.",
  },
  {
    numeral: "02",
    title: "We split it up",
    description:
      "LeafTok breaks it into hundreds of optimized cards. Chapters, images, and formatting all survive.",
  },
  {
    numeral: "03",
    title: "Swipe and absorb",
    description:
      "Read like you scroll. Track your progress, build a streak, and actually finish the book this time.",
  },
];

/** FAQ — objection handling, matched to the ICP's real doubts. */
export const homeFAQs: FAQItem[] = [
  {
    question: "Will it work with the books I already own?",
    answer:
      "Yes. Drop in any EPUB or PDF from your device and LeafTok turns it into swipeable cards automatically. Chapters, images, and formatting are preserved. No catalog lock-in, no re-buying.",
    learnMore: {
      href: "/guides/best-epub-reader-iphone/",
      label: "How LeafTok compares to other EPUB readers",
    },
  },
  {
    question: "Is LeafTok really free?",
    answer:
      "Free to download, no signup, with 3 book slots and the core reading experience. Upgrade to Pro for unlimited books, AI narration voices, and AI-powered summaries.",
  },
  {
    question: "Why are swipeable cards easier to read?",
    answer:
      "Each card holds 100 to 350 characters and is sized to its content, so your eye can keep its place. You read in focused passages instead of navigating a wall of text. It is built for comprehension, not skimming.",
    learnMore: {
      href: "/guides/tiktok-for-books/",
      label: "Why swipe-reading works",
    },
  },
  {
    question: "Can it read my books aloud?",
    answer:
      "Yes. 16 Kokoro neural voices — British and American — narrate any card hands-free, with a sleep timer and ambient soundscapes underneath. Voices are generated on-device, so narration works with no connection at all.",
    learnMore: {
      href: "/guides/app-that-reads-books-aloud/",
      label: "How on-device narration works",
    },
  },
  {
    question: "Can I really use it offline?",
    answer:
      "Once a book is converted, everything works offline: reading, narration, and ambient audio. The 16 Kokoro voices are generated on-device, so flights, commutes, and dead zones are no problem.",
    learnMore: {
      href: "/guides/pdf-to-audiobook-iphone/",
      label: "Turn a PDF into an offline audiobook",
    },
  },
  {
    question: "What can I customize?",
    answer:
      "5 reading themes (light, sepia, reader, high-contrast, dark), 5 fonts with adjustable size and line spacing, plus accessibility options like OpenDyslexic, high contrast, and reduced motion. English and Portuguese (Brazil) interface.",
    learnMore: {
      href: "/guides/reading-with-short-attention-span/",
      label: "Reading with a short attention span",
    },
  },
  {
    question: "Can I read with friends?",
    answer:
      "Yes — Book Clubs shipped in version 3.0. Create a club, invite friends with a share code, add books, and comment on chapters right inside the reader with spoiler flags and reactions.",
    learnMore: {
      href: "/guides/book-club-app/",
      label: "How LeafTok book clubs work",
    },
  },
  {
    question: "Will I actually keep using it?",
    answer:
      "A built-in sample book gets you to your first swipe in seconds, reading streaks keep the habit going, and you can favorite any card to revisit later. It's designed to feel like the feed, but pointed at books.",
    learnMore: {
      href: "/guides/how-to-finish-more-books/",
      label: "How to actually finish books",
    },
  },
];
