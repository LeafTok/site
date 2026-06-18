import { ChapterOpener, Marginalia } from './Chapter';
import { ledger, shelves, trackMarginalia } from '@/lib/data/landing';

export function TrackChapter() {
  return (
    <section id="track" className="scroll-mt-24 py-24 lg:py-32">
      <div className="section-container">
        <ChapterOpener
          numeral="IV"
          kicker="Track & keep"
          heading={
            <>
              Reading you can actually{' '}
              <span className="rounded bg-primary/10 px-2 text-primary">see</span>.
            </>
          }
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

          {/* Stat ledger + shelves */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-ink/10 bg-paper p-6 lg:p-8">
              <p className="masthead-meta mb-2">By the numbers</p>
              {ledger.map((stat) => (
                <div key={stat.label} className="ledger-row last:border-b-0">
                  <span className="font-serif text-4xl tracking-tight text-primary">
                    {stat.value}
                  </span>
                  <span className="text-right">
                    <span className="block font-medium text-ink">{stat.label}</span>
                    <span className="block text-sm text-ink-muted">{stat.detail}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-sm text-ink-muted">Every book sits on a shelf:</span>
              {shelves.map((shelf) => (
                <span key={shelf} className="badge">
                  {shelf}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
