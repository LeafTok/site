import Image from 'next/image';
import { Chapter } from './Chapter';
import { Footnote } from './Footnote';
import { readMarginalia } from '@/lib/data/landing';

export function ReadChapter() {
  return (
    <Chapter
      id="read"
      numeral="I"
      kicker="Read"
      heading={
        <>
          Your book, sliced into cards you{' '}
          <span className="text-primary underline decoration-primary/20 decoration-wavy underline-offset-8">thumb through</span>.
        </>
      }
      marginalia={readMarginalia}
      lead={
        <>
          Any EPUB or PDF you already own, broken into bite-sized cards
          <Footnote marker="1">
            100 to 350 characters, each card sized to its content so your eye
            never loses the line.
          </Footnote>{' '}
          you thumb through like a feed. Chapters, images, and code blocks all
          survive the trip intact.
        </>
      }
      epigraph={<>&ldquo;Finish the book this time.&rdquo;</>}
      side={
        <div className="relative w-[260px] lg:w-[300px]">
          <Image
            src="/assets/screenshot-01-swipe-books-like-tiktok.webp"
            alt="LeafTok reader showing a book as swipeable cards"
            width={400}
            height={870}
            className="rounded-[2.5rem] shadow-[0_25px_80px_-15px_rgba(26,22,18,0.2)]"
          />
          <Image
            src="/assets/screenshot-04-turn-epub-into-cards.webp"
            alt="An EPUB being turned into cards"
            width={400}
            height={870}
            className="absolute -bottom-8 -left-12 w-[42%] rounded-xl border border-ink/10 shadow-lg"
          />
        </div>
      }
    >
      <p className="mt-6 leading-relaxed text-ink-secondary">
        Pressed for time? Generate an AI summary: key themes, characters,
        and chapter-by-chapter insights, powered by GPT-4o. Your first one is
        free.
      </p>
    </Chapter>
  );
}
