import type { FAQItem } from "@/lib/types";

/**
 * Field guides — one page per target search keyword.
 *
 * Each guide answers the searcher's actual question first (useful on its
 * own), then bridges into how LeafTok solves it. Every product claim is
 * cross-checked against content/app.md (App Store listing snapshot) and
 * lib/data/landing.ts. Keep them honest.
 */

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface GuideStep {
  title: string;
  description: string;
}

export interface Guide {
  slug: string;
  /** Primary search keyword this guide targets. */
  keyword: string;
  /** SEO <title> (without site suffix). */
  title: string;
  metaDescription: string;
  /** On-page H1. */
  heading: string;
  /** Editorial lede beneath the H1. */
  lede: string;
  /**
   * 2–3 sentence direct answer to the target query, rendered in a callout
   * under the H1. This is the citable unit for AI answer engines and
   * featured snippets — self-contained, factual, no teaser phrasing.
   */
  quickAnswer: string;
  /** Opening paragraphs that answer the query directly. */
  intro: string[];
  sections: GuideSection[];
  /** "Do it with LeafTok" bridge. */
  leaftokHeading: string;
  leaftokSteps: GuideStep[];
  screenshot: { src: string; alt: string };
  faqs: FAQItem[];
  /** Slugs of related guides for internal linking. */
  related: string[];
  publishedAt: string; // ISO date
}

export const guides: Guide[] = [
  {
    slug: "tiktok-for-books",
    keyword: "tiktok for books",
    title: "TikTok for Books: What It Is and Why Swipe-Reading Works",
    metaDescription:
      "Looking for a TikTok for books? Learn how swipe-based reading apps turn real books into vertical, bite-sized cards — and how to try it free on iPhone.",
    heading: "TikTok for books, explained",
    lede: "The scroll trained your thumb. Swipe-reading points that reflex at actual books.",
    quickAnswer:
      "A “TikTok for books” is a reading app that splits real books into short vertical cards you swipe through like a feed. LeafTok does this on iPhone for any EPUB or PDF you already own — the full text respaced into 100–350 character cards, free to start, no signup, fully offline.",
    intro: [
      "When people search for a “TikTok for books,” they usually mean one of two things: a place to talk about books (that already exists — it’s BookTok), or a way to read real books with the same effortless, vertical, one-thing-at-a-time rhythm the feed taught them. This guide is about the second one.",
      "A swipe-reading app takes a full book — an EPUB or PDF you already own — and splits it into short cards, each holding a focused passage. You swipe up for the next card, exactly like a feed. Same muscle memory, but every swipe moves you through a book instead of away from one.",
    ],
    sections: [
      {
        heading: "Why reading in cards actually works",
        paragraphs: [
          "A page is a wall of text: your eye has to hold its own place across dozens of lines, and every glance at your phone’s notifications costs you that place. A card holds one passage — roughly 100 to 350 characters — sized so you take it in as a unit. Losing your place stops being possible, because your place is the card.",
          "The feed’s trick was never the content; it was removing every decision except “next.” Card-based reading borrows that: no page-turning animations, no chapter menus mid-flow, no pinch-zooming a PDF. Just the next passage, then the next.",
        ],
      },
      {
        heading: "What to look for in a swipe-reading app",
        paragraphs: [
          "If the format sounds right, judge apps on the things that make or break daily use:",
        ],
        list: [
          "Works with books you already own (EPUB and PDF), not a locked catalog",
          "Preserves chapters, images, and formatting when it slices the book",
          "Reads offline — commutes and flights are where this format shines",
          "Keeps your progress and streaks so the habit compounds",
          "No account requirement just to try it",
        ],
      },
    ],
    leaftokHeading: "How LeafTok turns a book into a feed",
    leaftokSteps: [
      {
        title: "Drop in any EPUB or PDF",
        description:
          "No signup, no catalog lock-in. LeafTok converts the file on your iPhone into hundreds of swipeable cards, keeping chapters, images, and code blocks intact.",
      },
      {
        title: "Swipe like you scroll",
        description:
          "Swipe up for the next card, sideways to jump chapters. Progress, streaks, and favorites are tracked automatically.",
      },
      {
        title: "Read or listen, fully offline",
        description:
          "16 on-device narration voices and ambient soundscapes work with no connection at all — the whole app does.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-01-swipe-books-like-tiktok.webp",
      alt: "LeafTok showing a book split into swipeable vertical cards, like a TikTok feed for reading",
    },
    faqs: [
      {
        question: "Is there really an app like TikTok but for books?",
        answer:
          "Yes. LeafTok converts any EPUB or PDF you own into vertical, swipeable reading cards with a feed-style interface — free to try on iPhone with no signup.",
      },
      {
        question: "Is swipe-reading the same as BookTok?",
        answer:
          "No. BookTok is the community on TikTok where people recommend books. Swipe-reading apps like LeafTok are how you actually read a book in a feed-like format.",
      },
      {
        question: "Does reading in short cards hurt comprehension?",
        answer:
          "Cards are sized to hold complete passages, not fragments, so you read in focused units instead of skimming a wall of text. You control the pace — nothing auto-advances.",
      },
    ],
    related: ["how-to-finish-more-books", "reading-with-short-attention-span", "best-epub-reader-iphone"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "best-epub-reader-iphone",
    keyword: "best epub reader for iphone",
    title: "Best EPUB Reader for iPhone in 2026: Honest Picks (Free & Paid)",
    metaDescription:
      "Comparing the best EPUB readers for iPhone in 2026 — Apple Books, PocketBook, Yomu, and LeafTok. Which fits how you actually read, including offline and TTS.",
    heading: "The best EPUB reader for iPhone, honestly",
    lede: "There is no single best reader — there’s the best one for how you actually read.",
    quickAnswer:
      "For classic page-based reading, Apple Books (pre-installed, free) is the best EPUB reader for iPhone, and PocketBook is best for wide format support. If you keep abandoning books, LeafTok converts the same EPUB into swipeable, feed-style cards with offline narration — free to start with 3 book slots and no account.",
    intro: [
      "Every EPUB reader on iOS opens the file. The differences that matter are what happens after: how it handles your attention, whether it works offline, whether it can read aloud, and whether it nags you to sign up before you’ve read a page.",
      "Here’s the honest landscape in 2026, including where each option genuinely wins.",
    ],
    sections: [
      {
        heading: "The established picks",
        paragraphs: [
          "Apple Books is pre-installed, free, and syncs position and highlights across your devices via iCloud. If you want zero friction and classic page-based reading, start there — it’s genuinely good.",
          "PocketBook Reader is the format workhorse: free, no ads, and it opens more than two dozen formats beyond EPUB. If you have a messy library of odd files, it earns its keep.",
          "Yomu is the tinkerer’s choice — a clean reader with deep typography and layout customization behind a one-time Pro purchase.",
        ],
      },
      {
        heading: "When a classic reader isn’t the answer",
        paragraphs: [
          "All three of those present books the traditional way: as pages. If pages work for you, pick one and go read. But if you keep opening a reader, drifting to another app, and abandoning books at 12% — the format is the problem, not your discipline.",
          "That’s the case where LeafTok is the better fit: it converts the same EPUB into short, swipeable cards, so reading feels like the feed you’d otherwise drift to. It’s free to start with 3 book slots, needs no account, and everything — including narration — works offline.",
        ],
      },
    ],
    leaftokHeading: "Reading an EPUB in LeafTok",
    leaftokSteps: [
      {
        title: "Import the EPUB",
        description:
          "Share the file to LeafTok or pick it from Files. Conversion happens on-device in seconds — chapters, images, and formatting survive.",
      },
      {
        title: "Set your reading room",
        description:
          "5 themes (light, sepia, reader, high-contrast, dark), 5 fonts plus OpenDyslexic, adjustable size and spacing.",
      },
      {
        title: "Swipe, or let it read to you",
        description:
          "16 on-device voices narrate any card hands-free, with a sleep timer and ambient soundscapes — all offline.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-04-turn-epub-into-cards.webp",
      alt: "LeafTok converting an EPUB file into swipeable reading cards on iPhone",
    },
    faqs: [
      {
        question: "What is the best free EPUB reader for iPhone?",
        answer:
          "Apple Books for classic page reading (pre-installed, free), PocketBook for wide format support, and LeafTok if you want a swipeable, feed-style reading experience — free to start, no signup, works offline.",
      },
      {
        question: "Can I read EPUB files on iPhone without an account?",
        answer:
          "Yes. LeafTok requires no account at all — drop in an EPUB and read. Apple Books uses your existing Apple ID.",
      },
      {
        question: "Which EPUB reader for iPhone has text-to-speech built in?",
        answer:
          "LeafTok includes 16 neural voices generated on-device, so narration works offline and isn’t a system-accessibility workaround. Most classic readers rely on iOS VoiceOver or Spoken Content instead.",
      },
    ],
    related: ["tiktok-for-books", "app-that-reads-books-aloud", "pdf-to-audiobook-iphone"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "app-that-reads-books-aloud",
    keyword: "app that reads books aloud free",
    title: "Free App That Reads Books Aloud: On-Device TTS That Works Offline",
    metaDescription:
      "Want an app that reads your books aloud for free? Compare your options — and see how LeafTok narrates any EPUB or PDF with 16 on-device voices, offline.",
    heading: "An app that reads your books aloud — without a subscription per book",
    lede: "You own the book. You shouldn’t have to buy it again to hear it.",
    quickAnswer:
      "iOS Spoken Content (Settings → Accessibility) reads any screen aloud for free, but it behaves like a screen reader. For an actual listening experience, LeafTok narrates any EPUB or PDF with 16 neural voices generated on the iPhone itself — no cloud upload, no per-minute fees, works in airplane mode.",
    intro: [
      "Audiobooks are wonderful and expensive. If you already own a book as an EPUB or PDF, what you actually want is text-to-speech that sounds human, works offline, and doesn’t meter you by the minute.",
      "You have three broad options on iPhone: the system accessibility route, cloud TTS apps, and readers with narration built in. They differ more than the app stores make it look.",
    ],
    sections: [
      {
        heading: "Your three options, compared",
        paragraphs: [
          "iOS Spoken Content (Settings → Accessibility) can read any screen aloud for free. It works, but it’s a screen reader, not a listening experience: robotic pacing, awkward controls, and it stops when you leave the app.",
          "Cloud TTS apps (Speechify-style) sound great but typically gate the good voices behind subscriptions, need a connection, and upload your text to servers.",
          "Built-in narration readers generate speech on your device. No connection, no per-minute metering, and your book never leaves your phone. This is the category LeafTok is in.",
        ],
      },
      {
        heading: "What “on-device” gets you in practice",
        paragraphs: [
          "On-device narration means the voice synthesis runs on your iPhone’s chip. Flights, subway commutes, and dead zones don’t interrupt it. There’s no monthly voice quota because there’s no server to pay for. And privacy is structural: the text physically never leaves the device.",
        ],
      },
    ],
    leaftokHeading: "Listening to a book in LeafTok",
    leaftokSteps: [
      {
        title: "Convert your book",
        description:
          "Import any EPUB or PDF. LeafTok splits it into cards on-device — the same cards you read are the ones it narrates.",
      },
      {
        title: "Pick a voice",
        description:
          "16 Kokoro neural voices, British and American, generated locally. Narration is a Pro feature (from $1.99/week) after the free trial of the app’s core reading.",
      },
      {
        title: "Listen hands-free",
        description:
          "Cards advance as they’re read. Add a rain or café soundscape underneath, and the sleep timer fades out gently when you drift off.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-02-listen-hands-free.webp",
      alt: "LeafTok narrating a book hands-free with on-device text-to-speech voices",
    },
    faqs: [
      {
        question: "Is there a free app that reads books aloud on iPhone?",
        answer:
          "iOS Spoken Content is free and reads any screen. For an actual listening experience, LeafTok is free to download and read; its 16 on-device narration voices are part of Pro. No connection is required for any of it.",
      },
      {
        question: "Can an app read my PDF aloud offline?",
        answer:
          "Yes. LeafTok converts the PDF to reading cards and narrates them with voices generated on your iPhone, so it works in airplane mode.",
      },
      {
        question: "Does listening count as reading?",
        answer:
          "For comprehension, research broadly finds listening and reading land similarly for narrative text. LeafTok keeps the text on screen while narrating, so you can do both at once.",
      },
    ],
    related: ["pdf-to-audiobook-iphone", "best-epub-reader-iphone", "tiktok-for-books"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "pdf-to-audiobook-iphone",
    keyword: "convert pdf to audiobook iphone",
    title: "How to Convert a PDF to an Audiobook on iPhone (Offline, No Upload)",
    metaDescription:
      "Turn any PDF into an audiobook on your iPhone — no cloud upload, no per-minute fees. Step-by-step with LeafTok's on-device narration.",
    heading: "Turn any PDF into an audiobook on your iPhone",
    lede: "Three steps, no cloud upload, and it works in airplane mode.",
    quickAnswer:
      "You don’t need to upload a PDF anywhere or render an MP3 to listen to it. Share the PDF to LeafTok on iPhone and it becomes narrated, auto-advancing reading cards using on-device voices — private, offline, and ready in seconds. Scanned PDFs need OCR first; digital PDFs work as-is.",
    intro: [
      "Most “PDF to audiobook” tutorials route you through a website: upload the file, wait for a server to synthesize an MP3, download it back. That’s slow, it caps file sizes, and your document — maybe a work report or a draft manuscript — sits on someone’s server.",
      "The cleaner way on iPhone is an app that reads the PDF with voices generated on the device itself. Nothing uploads, nothing renders in a queue, and “converting” takes as long as opening the file.",
    ],
    sections: [
      {
        heading: "Why on-device beats upload-and-render",
        paragraphs: [
          "A rendered MP3 is a frozen artifact: one voice, one speed, no text to follow along with. On-device narration is live — you can switch voices mid-chapter, skim visually and resume listening, and jump by chapter instead of scrubbing a waveform.",
          "It’s also the only approach that’s genuinely private and offline. If the PDF is confidential, upload services are a non-starter.",
        ],
      },
      {
        heading: "What about scanned PDFs?",
        paragraphs: [
          "Text-to-speech needs text. If your PDF is a scan (photographed pages), run it through iOS’s built-in text recognition or a proper OCR app first; a text-layer PDF narrates cleanly. Digitally-created PDFs — reports, papers, ebooks — work as-is.",
        ],
      },
    ],
    leaftokHeading: "PDF to audiobook with LeafTok",
    leaftokSteps: [
      {
        title: "Share the PDF to LeafTok",
        description:
          "From Files, Mail, or Safari, use the share sheet. LeafTok slices the PDF into reading cards on-device, preserving chapters and images.",
      },
      {
        title: "Tap play",
        description:
          "Choose one of 16 neural voices (Pro). The book plays like an audiobook — cards advance automatically as they’re narrated.",
      },
      {
        title: "Listen anywhere",
        description:
          "Everything is offline: the drive, the flight, the gym with no signal. A sleep timer and ambient soundscapes are built in.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-02-listen-hands-free.webp",
      alt: "Converting a PDF into a narrated audiobook experience in LeafTok on iPhone",
    },
    faqs: [
      {
        question: "How do I convert a PDF to an audiobook for free on iPhone?",
        answer:
          "iOS Spoken Content can read a PDF aloud for free via Accessibility settings. For a real audiobook experience — natural voices, auto-advancing chapters, sleep timer — LeafTok narrates any PDF with on-device voices as part of Pro (from $1.99/week).",
      },
      {
        question: "Do I have to upload my PDF somewhere?",
        answer:
          "Not with LeafTok. Conversion and voice synthesis both happen on your iPhone, so the file never leaves your device — it even works in airplane mode.",
      },
      {
        question: "Will it work with a scanned PDF?",
        answer:
          "Only after OCR. Narration needs a text layer; run a scan through text recognition first, then import it.",
      },
    ],
    related: ["app-that-reads-books-aloud", "best-epub-reader-iphone", "tiktok-for-books"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "how-to-finish-more-books",
    keyword: "how to finish more books",
    title: "How to Actually Finish Books: A System for Readers Who Lost to the Feed",
    metaDescription:
      "You don't lack discipline — your books are competing with a slot machine. A practical system to finish more books, plus the app format that makes it stick.",
    heading: "How to actually finish books again",
    lede: "You didn’t stop loving books. The feed just got louder.",
    quickAnswer:
      "Books die between sessions, not during them — re-entry friction, not discipline, is why you don’t finish. The fix is structural: shrink the reading unit to one passage, make your place impossible to lose, put the book on the phone it competes with, and make the streak visible.",
    intro: [
      "The average abandoned book dies around the first quarter mark, and it rarely dies during reading — it dies between sessions, when picking the book back up loses to picking up the phone. So the honest version of “how to finish more books” is: how do you make returning to the book as easy as opening the feed it competes with?",
      "Willpower advice ignores that asymmetry. A system beats it. Here’s one that works, in escalating order of leverage.",
    ],
    sections: [
      {
        heading: "The system",
        paragraphs: [
          "Each of these lowers the cost of re-entry — the real killer of unfinished books:",
        ],
        list: [
          "Shrink the unit. Commit to one passage, not one chapter. Momentum does the rest — nobody stops after exactly one.",
          "Never lose your place. Friction at re-entry (“where was I?”) is where books die. Use a format that reopens exactly where you left off.",
          "Put the book where the feed lives. If reading requires a different device or a bag, the phone wins by default. Put the book on the phone, in a form built for it.",
          "Make the streak visible. A visible chain of reading days converts identity (“I’m reading again”) into a thing you protect.",
          "Quit bad books fast, on purpose. A book you resent blocks every book behind it. Shelve it as abandoned and move on — that’s the system working.",
        ],
      },
      {
        heading: "Why format is the hidden variable",
        paragraphs: [
          "Every item above gets easier when the book itself is sliced into feed-sized units. A card is a natural “one more” unit; your place is always the card you’re on; the phone becomes the reading device instead of the enemy; and each swipe feeds the streak.",
        ],
      },
    ],
    leaftokHeading: "Running the system in LeafTok",
    leaftokSteps: [
      {
        title: "Load the book you keep not finishing",
        description:
          "Any EPUB or PDF. It becomes a deck of cards that reopens exactly where you stopped — zero re-entry cost.",
      },
      {
        title: "Read one card at red lights of your day",
        description:
          "Queues, kettles, elevators. Cards are 100–350 characters; “just one” is always true, and rarely where you stop.",
      },
      {
        title: "Protect the streak",
        description:
          "Reading streaks, shelves for want-to-read / reading / finished, and favorites for passages worth keeping.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-01-swipe-books-like-tiktok.webp",
      alt: "LeafTok reading streak and swipeable cards helping a reader finish more books",
    },
    faqs: [
      {
        question: "Why can’t I finish books anymore?",
        answer:
          "Usually not discipline — it’s re-entry friction. Books die between sessions, when reopening them loses to the feed. Shrinking the reading unit and never losing your place removes most of that friction.",
      },
      {
        question: "How many books should I read at once?",
        answer:
          "One to three. More than that and every book’s re-entry cost compounds. Keep a want-to-read shelf so new temptations have somewhere to go that isn’t your current book’s place.",
      },
      {
        question: "Is it okay to abandon a book?",
        answer:
          "Yes — deliberately and early. A resented book blocks every book behind it. Shelve it and start the next one the same day.",
      },
    ],
    related: ["tiktok-for-books", "reading-tracker-app", "reading-with-short-attention-span"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "book-club-app",
    keyword: "book club app",
    title: "Book Club App: Read the Same Book With Friends, Right Inside the Reader",
    metaDescription:
      "Looking for a book club app? Create a club with a share code, read together, and comment on chapters with spoiler flags — inside the reading app itself.",
    heading: "A book club that lives inside the book",
    lede: "Most “book club apps” are group chats about a book. The good ones put the conversation in the book.",
    quickAnswer:
      "A good book club app puts the discussion inside the book instead of a separate group chat. LeafTok 3.0 lets you create a club, invite friends with a share code, and comment on chapters with spoiler flags and reactions — right in the reader, with everyone reading at their own pace.",
    intro: [
      "The usual book club stack is duct tape: a group chat for logistics, a spreadsheet for the schedule, and a reading app that knows nothing about either. The conversation happens away from the text, spoilers require honor-system discipline, and half the club silently falls behind.",
      "A real book club app collapses that stack: the club, the book, and the discussion in one place, with spoiler protection built into the mechanics instead of the etiquette.",
    ],
    sections: [
      {
        heading: "What actually matters in a book club app",
        paragraphs: ["Judge any option against these:"],
        list: [
          "Frictionless invites — a share code beats accounts-for-everyone",
          "Discussion anchored to chapters, not a separate feed",
          "Spoiler flags that hide comments until you’ve earned them",
          "Everyone reads their own copy at their own pace",
          "Low ceremony: no meeting scheduler required to talk about chapter three",
        ],
      },
      {
        heading: "Reading together, asynchronously",
        paragraphs: [
          "The best clubs aren’t synchronous. People read at different speeds, in different time zones, in stolen minutes. Chapter-anchored comments mean the discussion is waiting for each reader when they arrive at the moment it references — like margin notes from your friends.",
        ],
      },
    ],
    leaftokHeading: "Book clubs in LeafTok 3.0",
    leaftokSteps: [
      {
        title: "Create a club, share a code",
        description:
          "One tap to create, one code to invite (case-insensitive). Friends join with a display name and emoji avatar — no signup ceremony.",
      },
      {
        title: "Add books and read together",
        description:
          "Everyone reads their own copy as swipeable cards, at their own pace, with their own themes and fonts.",
      },
      {
        title: "Comment on chapters, spoiler-safely",
        description:
          "Comments live right inside the reader, flagged as spoilers when needed, with reactions for when a passage deserves more than words.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-05-read-to-lo-fi-beats.webp",
      alt: "Reading a shared book with club comments in LeafTok",
    },
    faqs: [
      {
        question: "Is there an app to do a book club with friends?",
        answer:
          "Yes. LeafTok 3.0 lets you create a club, invite friends with a share code, add books, and discuss chapters right inside the reader with spoiler flags and reactions.",
      },
      {
        question: "How do spoiler flags work?",
        answer:
          "A comment marked as a spoiler stays hidden behind a flag until a reader chooses to reveal it — so being ahead of the club never ruins the book for anyone.",
      },
      {
        question: "Does everyone need to buy the app?",
        answer:
          "LeafTok is free to download with 3 book slots and no account requirement, so friends can join a club and try it without paying anything.",
      },
    ],
    related: ["how-to-finish-more-books", "reading-tracker-app", "tiktok-for-books"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "reading-tracker-app",
    keyword: "reading tracker app",
    title: "Reading Tracker App With Streaks: Track Books You Actually Finish",
    metaDescription:
      "The best reading tracker is the one inside your reader. Streaks, shelves, and favorites that update as you read — no manual logging.",
    heading: "A reading tracker you never have to update",
    lede: "Tracking apps fail for the same reason diets do: the logging is homework.",
    quickAnswer:
      "The reading tracker that survives is the one you can’t forget to update. LeafTok tracks streaks, shelves (want to read / reading / finished), and progress automatically as you swipe — reading is the whole logging workflow, so the chain never breaks from a missed entry.",
    intro: [
      "Most reading trackers are diaries: you finish a session, open a second app, and record what you read. It works until the first day you forget, the chain breaks, and the tracker quietly becomes another abandoned app.",
      "The tracker that survives is the one that can’t be forgotten — because it’s the same app you read in, and every swipe is the log entry.",
    ],
    sections: [
      {
        heading: "What’s worth tracking (and what isn’t)",
        paragraphs: [
          "Page counts and minutes-read make nice charts and change nothing. Three signals actually alter behavior:",
        ],
        list: [
          "The streak — did you read today? The chain you don’t want to break.",
          "The shelves — want to read / reading / finished. Ambition, focus, and proof, separated.",
          "The keepers — passages you favorited, searchable later. Proof the reading left a residue.",
        ],
      },
      {
        heading: "Trackers vs. social catalogs",
        paragraphs: [
          "Goodreads-style apps are social catalogs — great for discovering and rating, but the tracking is still manual and lives away from the text. If your problem is consistency rather than discovery, an integrated tracker beats a bigger database.",
        ],
      },
    ],
    leaftokHeading: "Tracking inside LeafTok",
    leaftokSteps: [
      {
        title: "Read — that’s the whole workflow",
        description:
          "Streaks and progress update as you swipe. There is no logging step to forget.",
      },
      {
        title: "Keep shelves honest",
        description:
          "Want to read, reading, finished. Moving a book to finished is one of life’s small, excellent moments.",
      },
      {
        title: "Favorite the keepers",
        description:
          "Any card can be favorited, searched later, and shared — your own commonplace book, built as a side effect of reading.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-03-get-ai-summaries.webp",
      alt: "LeafTok tracking reading progress with streaks, shelves, and favorites",
    },
    faqs: [
      {
        question: "What’s the best app to track reading?",
        answer:
          "If you want zero-effort tracking, use a reader with tracking built in. LeafTok updates streaks, shelves, and progress automatically as you read — no manual logging.",
      },
      {
        question: "Do reading streaks actually help?",
        answer:
          "Visible streaks convert “I should read” into “I don’t break chains.” They work best when the unit is small — one card keeps a streak alive, and rarely stays one card.",
      },
      {
        question: "Can I track books I read elsewhere?",
        answer:
          "LeafTok tracks what you read inside it. If you mainly need a catalog for paper books, a social catalog app is the better tool — they solve different problems.",
      },
    ],
    related: ["how-to-finish-more-books", "book-club-app", "tiktok-for-books"],
    publishedAt: "2026-07-07",
  },
  {
    slug: "reading-with-short-attention-span",
    keyword: "reading with a short attention span",
    title: "Reading With a Short Attention Span: Formats That Work With Your Focus",
    metaDescription:
      "Struggle to focus on books? Short-form reading formats, ADHD-friendly typography, and distraction-free design that work with your attention instead of against it.",
    heading: "Reading with a short attention span",
    lede: "Stop trying to fix your focus. Change the shape of the text instead.",
    quickAnswer:
      "You don’t need a longer attention span to read books — you need shorter units. Passage-sized cards (one complete thought per screen), accessible typography like OpenDyslexic and high-contrast themes, and reduced-motion design let feed-trained or ADHD attention run for a full reading session.",
    intro: [
      "If your attention span feels shorter than it used to, you’re in the majority, and the advice you’ve gotten — try harder, use a timer, delete the apps — treats it as a character flaw. More useful: treat it as a format mismatch. Dense pages assume an attention style; you’re allowed to pick text shapes that assume yours.",
      "This applies whether your focus is feed-trained, you have ADHD, or reading fatigue arrives fast for any reason. The levers are the same.",
    ],
    sections: [
      {
        heading: "Three levers that actually move the needle",
        paragraphs: [
          "Comprehension doesn’t require long unbroken sessions. It requires completed units. These change the unit:",
        ],
        list: [
          "Passage-sized text. One idea per screen keeps working memory on the idea, not on navigating the page. Finishing a unit every few seconds keeps you fed with completion instead of starved by an endless page.",
          "Typography that fights for you. Bigger sizes, looser line spacing, high-contrast or dark themes, and typefaces like OpenDyslexic reduce the effort-per-line — which is what fatigue actually is.",
          "Fewer moving parts. Reduced-motion modes and simplified interfaces remove the micro-distractions inside the reading app itself.",
        ],
      },
      {
        heading: "The counterintuitive part",
        paragraphs: [
          "Short-form reading isn’t a downgrade from “real” reading — it’s the same book, respaced. Nothing is summarized or skipped; the full text simply arrives one passage at a time. People who can’t hold a page for two minutes routinely swipe through forty minutes of cards, because each card ends before attention does.",
        ],
      },
    ],
    leaftokHeading: "How LeafTok is built for short attention",
    leaftokSteps: [
      {
        title: "The card is the unit",
        description:
          "Every card holds 100–350 characters — one complete thought. Your place is never lost, because your place is the card.",
      },
      {
        title: "Tune the text to your eyes",
        description:
          "OpenDyslexic, high-contrast and dark themes, adjustable size and spacing, reduced motion, simplified UI — all built in.",
      },
      {
        title: "Let sound hold the room",
        description:
          "Brown, white, or pink noise, rain, forest, café — ambient soundscapes under your reading, or narration when your eyes are done.",
      },
    ],
    screenshot: {
      src: "/assets/screenshot-01-swipe-books-like-tiktok.webp",
      alt: "LeafTok showing one focused passage per card for distraction-free reading",
    },
    faqs: [
      {
        question: "Is there a reading app for people with ADHD?",
        answer:
          "LeafTok’s format — one short passage per card, OpenDyslexic, reduced motion, high-contrast themes, and optional narration — is built for exactly the attention profile many ADHD readers describe. It’s a reading format, not a treatment.",
      },
      {
        question: "Why can I scroll for hours but not read for ten minutes?",
        answer:
          "The feed completes a unit every few seconds; a page never does. Card-based reading gives books the same completion rhythm, which is why the same attention span lasts much longer in it.",
      },
      {
        question: "Does breaking a book into cards change the content?",
        answer:
          "No. Nothing is summarized or removed — the full text is respaced into passage-sized cards, with chapters and images preserved.",
      },
    ],
    related: ["tiktok-for-books", "how-to-finish-more-books", "app-that-reads-books-aloud"],
    publishedAt: "2026-07-07",
  },
];

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(guide: Guide): Guide[] {
  return guide.related
    .map((slug) => getGuideBySlug(slug))
    .filter((related): related is Guide => Boolean(related));
}
