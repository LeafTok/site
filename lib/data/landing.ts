import type { FAQItem } from "@/lib/types";

/**
 * Centralized copy for the editorial landing page.
 *
 * Chapter *prose* (lead paragraphs + epigraphs) lives in the chapter
 * components because it embeds inline <Footnote> JSX. Everything that is
 * plain data — marginalia, footnote bodies, FAQ, contents, type
 * specimens, ledger — lives here so copy is editable in one place.
 *
 * Every claim is cross-checked against shipping iOS code (see
 * leaftok-docs/plans/2026-06-17-landing-page-editorial-refresh-design.md).
 */

export interface MarginNote {
  text: string;
}

/** Masthead strip beneath the hero. */
export const masthead = {
  issue: "iOS Edition",
  volume: "Free to start",
  note: "A field guide to reading on your phone",
};

/** Table of contents — doubles as in-page jump links. */
export interface ContentsEntry {
  numeral: string;
  id: string;
  title: string;
  blurb: string;
}

export const contents: ContentsEntry[] = [
  {
    numeral: "I",
    id: "read",
    title: "Read",
    blurb: "Any book, sliced into swipeable cards",
  },
  {
    numeral: "II",
    id: "listen",
    title: "Listen",
    blurb: "16 on-device voices, hands-free",
  },
  {
    numeral: "III",
    id: "make-it-yours",
    title: "Make it yours",
    blurb: "Themes, fonts, accessibility",
  },
  {
    numeral: "IV",
    id: "track",
    title: "Track & keep",
    blurb: "Streaks, shelves, favorites",
  },
];

/** Hero trust row — honest, verifiable proof (replaces the 5.0★ badge). */
export const heroTrust: string[] = [
  "Free to start",
  "No signup",
  "Works offline",
];

/** Chapter 01 · READ */
export const readMarginalia: MarginNote[] = [
  { text: "Chapters preserved" },
  { text: "Swipe sideways to jump chapters" },
  { text: "Images & code blocks kept intact" },
];

/** Chapter 02 · LISTEN */
export const listenMarginalia: MarginNote[] = [
  { text: "British & American voices" },
  { text: "Generated on-device — works offline" },
  { text: "Sleep timer fades out gently" },
];

export const soundscapes = [
  "Rain",
  "Forest",
  "Café",
  "Brown noise",
  "White noise",
  "Pink noise",
];

/** Chapter 03 · MAKE IT YOURS — live type specimens. */
export interface Specimen {
  name: string;
  /** Real iOS font-family string with graceful web fallbacks. */
  stack: string;
}

export const specimens: Specimen[] = [
  { name: "Georgia", stack: "Georgia, serif" },
  { name: "New York", stack: '"New York", ui-serif, Georgia, serif' },
  {
    name: "Palatino",
    stack: '"Palatino Linotype", Palatino, "Book Antiqua", serif',
  },
  { name: "Charter", stack: 'Charter, "Bitstream Charter", Georgia, serif' },
  {
    name: "System",
    stack: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
];

export const specimenLine =
  "She read three chapters before her stop — and remembered every one.";

export interface ReadingTheme {
  name: string;
  /** Background + ink preview swatch (illustrative of the in-app theme). */
  bg: string;
  ink: string;
}

export const themes: ReadingTheme[] = [
  { name: "Light", bg: "#FAF6F0", ink: "#1A1612" },
  { name: "Sepia", bg: "#EFE3CC", ink: "#4A3B28" },
  { name: "Reader", bg: "#F3ECDD", ink: "#2C2620" },
  { name: "High contrast", bg: "#FFFFFF", ink: "#000000" },
  { name: "Dark", bg: "#1A1612", ink: "#F5EDE2" },
];

export const accessibilityNotes: MarginNote[] = [
  { text: "OpenDyslexic font" },
  { text: "High-contrast mode" },
  { text: "Reduced motion" },
  { text: "Simplified UI" },
];

/** Chapter 04 · TRACK & KEEP */
export interface LedgerStat {
  value: string;
  label: string;
  detail: string;
}

export const ledger: LedgerStat[] = [
  { value: "3", label: "Free book slots", detail: "no signup" },
  { value: "16", label: "AI voices", detail: "on-device" },
  { value: "5", label: "Reading themes", detail: "sepia → dark" },
  { value: "100%", label: "Offline", detail: "every feature" },
];

export const shelves = ["Want to read", "Reading", "Finished"];

export const trackMarginalia: MarginNote[] = [
  { text: "Favorite any card you want to keep" },
  { text: "Search back through your saved cards" },
  { text: "Share a card straight to anywhere" },
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
  },
  {
    question: "Can I really use it offline?",
    answer:
      "Once a book is converted, everything works offline: reading, narration, and ambient audio. The 16 Kokoro voices are generated on-device, so flights, commutes, and dead zones are no problem.",
  },
  {
    question: "What can I customize?",
    answer:
      "5 reading themes (light, sepia, reader, high-contrast, dark), 5 fonts with adjustable size and line spacing, plus accessibility options like OpenDyslexic, high contrast, and reduced motion. English and Portuguese (Brazil) interface.",
  },
  {
    question: "Will I actually keep using it?",
    answer:
      "A built-in sample book gets you to your first swipe in seconds, reading streaks keep the habit going, and you can favorite any card to revisit later. It's designed to feel like the feed, but pointed at books.",
  },
];
