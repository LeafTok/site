import type { MarginNote } from '@/lib/data/landing';

interface ChapterOpenerProps {
  numeral: string;
  kicker: string;
  heading: React.ReactNode;
}

/** Shared chapter opener: hairline rule + "CHAPTER 0X · TITLE" + display heading. */
export function ChapterOpener({ numeral, kicker, heading }: ChapterOpenerProps) {
  return (
    <header className="mb-12 lg:mb-16">
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

interface ChapterProps {
  id: string;
  numeral: string;
  kicker: string;
  heading: React.ReactNode;
  /** Drop-cap lead paragraph (may contain inline <Footnote>). */
  lead: React.ReactNode;
  /** Optional sub-beat content placed under the lead. */
  children?: React.ReactNode;
  epigraph?: React.ReactNode;
  marginalia?: MarginNote[];
  /** The visual (phone composition). */
  side: React.ReactNode;
  /** Flip so the visual sits on the left. */
  mirror?: boolean;
  background?: 'paper' | 'warm';
}

export function Chapter({
  id,
  numeral,
  kicker,
  heading,
  lead,
  children,
  epigraph,
  marginalia,
  side,
  mirror = false,
  background = 'paper',
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 lg:py-32 ${background === 'warm' ? 'bg-paper-warm' : ''}`}
    >
      <div className="section-container">
        <ChapterOpener numeral={numeral} kicker={kicker} heading={heading} />

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Prose + marginalia */}
          <div className={`lg:col-span-7 ${mirror ? 'lg:order-2' : ''}`}>
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_190px]">
              <div>
                <p className="dropcap text-lg leading-relaxed text-ink-secondary">{lead}</p>
                {children}
                {epigraph && (
                  <p className="epigraph mt-10 text-2xl leading-snug lg:text-[1.75rem]">
                    {epigraph}
                  </p>
                )}
              </div>
              {marginalia && <Marginalia notes={marginalia} />}
            </div>
          </div>

          {/* Visual */}
          <div className={`flex justify-center lg:col-span-5 ${mirror ? 'lg:order-1 lg:justify-start' : 'lg:justify-end'}`}>
            {side}
          </div>
        </div>
      </div>
    </section>
  );
}
