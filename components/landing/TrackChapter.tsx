import { ChapterOpener, Marginalia } from "./Chapter";
import { ledger, shelves, trackMarginalia } from "@/lib/data/landing";

export function TrackChapter() {
  return (
    <section id="track" className="scroll-mt-24 py-20 lg:py-32">
      <div className="section-container">
        <ChapterOpener
          numeral="IV"
          kicker="Track & keep"
          heading={<>A reading habit, recorded in ink.</>}
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Prose + marginalia */}
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-secondary">
              Every book lands on a shelf and moves itself along as you read. A
              streak counts the days you showed up; a running tally remembers
              every card you&rsquo;ve turned.
            </p>
            <p className="epigraph mt-10 text-2xl leading-snug lg:text-[1.75rem]">
              Small numbers. A real habit.
            </p>
            <Marginalia notes={trackMarginalia} />
          </div>

          {/* Ruled reading ledger */}
          <div className="lg:col-span-7">
            <div className="border-y-2 border-ink">
              <div className="flex items-center justify-between border-b border-ink/20 py-4">
                <p className="masthead-meta text-ink">Reader&rsquo;s ledger</p>
                <p className="font-serif text-sm italic text-ink-muted">
                  Updated as you read
                </p>
              </div>
              {ledger.map((stat) => (
                <div key={stat.label} className="ledger-row last:border-b-0">
                  <span className="font-serif text-5xl tracking-tight text-primary lg:text-6xl">
                    {stat.value}
                  </span>
                  <span className="text-right">
                    <span className="block font-medium text-ink">
                      {stat.label}
                    </span>
                    <span className="block text-sm text-ink-muted">
                      {stat.detail}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-ink/15">
              {shelves.map((shelf, index) => (
                <div
                  key={shelf}
                  className="border-r border-ink/15 px-3 py-4 text-center last:border-r-0"
                >
                  <span className="block font-serif text-2xl text-primary">
                    {index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                    {shelf}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
