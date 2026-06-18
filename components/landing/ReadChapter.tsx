import Image from "next/image";
import { ChapterOpener } from "./Chapter";
import { Footnote } from "./Footnote";
import { readMarginalia } from "@/lib/data/landing";

export function ReadChapter() {
  return (
    <section id="read" className="scroll-mt-24 py-20 lg:py-32">
      <div className="section-container">
        <ChapterOpener
          numeral="I"
          kicker="Read"
          heading={<>A whole page, recut for one hand.</>}
        />

        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-4">
            <p className="text-lg leading-relaxed text-ink-secondary">
              Any EPUB or PDF you own becomes a sequence of focused passages
              <Footnote marker="1">
                100 to 350 characters, with every card sized to its content.
              </Footnote>
              . Chapters, images, and code blocks survive the cut.
            </p>
            <p className="epigraph mt-10 text-3xl leading-tight">
              &ldquo;Keep the book. Lose the wall of text.&rdquo;
            </p>
            <ol className="mt-10 border-t border-ink/15">
              {readMarginalia.map((note, index) => (
                <li
                  key={note.text}
                  className="flex gap-5 border-b border-ink/15 py-3 text-sm text-ink-muted"
                >
                  <span className="font-serif text-primary">0{index + 1}</span>
                  {note.text}
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-8">
            <div className="transformation-spread">
              <article className="source-page" aria-label="A dense source page">
                <p className="masthead-meta mb-10">
                  Original page &middot; 247 words
                </p>
                <h3 className="mb-6 font-serif text-3xl leading-tight">
                  On attention and the shape of a sentence
                </h3>
                <p>
                  Attention is not an endless resource. It moves in pulses,
                  returning when the eye finds a natural place to rest. A page
                  designed for a desk asks for a different kind of patience than
                  a screen held on a crowded train.
                </p>
                <p className="mt-4">
                  The words do not need to change. Their container does.
                </p>
                <span className="absolute bottom-6 right-6 font-serif text-sm">
                  42
                </span>
              </article>

              <span className="transformation-mark" aria-hidden="true">
                &rarr;
              </span>

              <figure className="relative w-[230px] justify-self-center sm:w-[260px]">
                <Image
                  src="/assets/screenshot-01-swipe-books-like-tiktok.webp"
                  alt="The same text divided into swipeable LeafTok cards"
                  width={400}
                  height={870}
                  className="w-full shadow-[14px_18px_0_rgba(61,122,95,0.16)]"
                />
                <figcaption className="mt-4 flex justify-between border-b border-ink/20 pb-2 text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                  <span>LeafTok cut</span>
                  <span>One thought at a time</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
