import type { MarginNote } from "@/lib/data/landing";

interface ChapterOpenerProps {
  numeral: string;
  kicker: string;
  heading: React.ReactNode;
}

/** Shared chapter opener: hairline rule + "CHAPTER 0X · TITLE" + display heading. */
export function ChapterOpener({
  numeral,
  kicker,
  heading,
}: ChapterOpenerProps) {
  return (
    <header className="mb-10 lg:mb-16">
      <div className="editorial-rule mb-5" />
      <p className="chapter-kicker mb-4">
        <span>Chapter {numeral}</span>
        <span className="text-primary/40">&bull;</span>
        <span>{kicker}</span>
      </p>
      <h2 className="font-serif tracking-tight text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] max-w-3xl">
        {heading}
      </h2>
    </header>
  );
}

/** Reader-annotation notes that sit in the page gutter beside the prose. */
export function Marginalia({ notes }: { notes: MarginNote[] }) {
  return (
    <aside className="marginalia mt-8 space-y-4 lg:mt-0">
      {notes.map((note, i) => (
        <p key={i} className="marginalia-note">
          {note.text}
        </p>
      ))}
    </aside>
  );
}
