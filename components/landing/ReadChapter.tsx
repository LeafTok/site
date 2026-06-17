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
          <span className="serif-italic text-primary">thumb through</span>.
        </>
      }
      marginalia={readMarginalia}
      lead={
        <>
          Any EPUB or PDF you already own, broken into bite-sized cards
          <Footnote marker="1">
            100&ndash;350 characters, each card sized to its content so your eye
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
            className="rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(26,22,18,0.25)]"
          />
          <Image
            src="/assets/screenshot-04-turn-epub-into-cards.webp"
            alt="An EPUB being turned into cards"
            width={400}
            height={870}
            className="absolute -bottom-8 -left-12 w-[42%] rounded-[1.25rem] border border-paper/60 shadow-[0_18px_50px_-12px_rgba(26,22,18,0.3)]"
          />
        </div>
      }
    >
      <p className="mt-6 leading-relaxed text-ink-secondary">
        Pressed for time? Generate an AI summary&mdash;key themes, characters,
        and chapter-by-chapter insights, powered by GPT-4o. Your first one is
        free.
      </p>
    </Chapter>
  );
}
