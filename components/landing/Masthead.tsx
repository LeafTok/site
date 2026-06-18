import { contents, masthead } from '@/lib/data/landing';

const Dot = ({ className = '' }: { className?: string }) => (
  <span className={`text-primary/40 ${className}`} aria-hidden="true">
    &bull;
  </span>
);

export function Masthead() {
  return (
    <>
      {/* Issue-style masthead strip (replaces the power-words marquee) */}
      <div className="border-y border-ink/10 bg-paper-warm">
        <div className="section-container flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-4">
          <span className="font-serif text-lg tracking-tight text-ink">LeafTok</span>
          <Dot />
          <span className="masthead-meta">{masthead.issue}</span>
          <Dot />
          <span className="masthead-meta">{masthead.volume}</span>
          <Dot className="hidden sm:inline" />
          <span className="masthead-meta hidden sm:inline">{masthead.note}</span>
        </div>
      </div>

      {/* Table of contents — doubles as in-page navigation */}
      <section className="section-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="editorial-rule mb-5" />
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">Contents</h2>
            <p className="mt-3 text-ink-muted">Four chapters on reading differently.</p>
          </div>

          <ol className="lg:col-span-8">
            {contents.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="group contents-link">
                  <span className="w-10 shrink-0 font-serif text-2xl text-primary/40">
                    {entry.numeral}
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-xl text-ink transition-colors group-hover:text-primary">
                      {entry.title}
                    </span>
                    <span className="block text-sm text-ink-muted">{entry.blurb}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="self-center text-ink/30 transition-colors group-hover:text-primary"
                  >
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
