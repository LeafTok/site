'use client';

import { useState } from 'react';
import { ChapterOpener, Marginalia } from './Chapter';
import { Footnote } from './Footnote';
import {
  accessibilityNotes,
  specimenLine,
  specimens,
  themes,
} from '@/lib/data/landing';

export function MakeItYoursChapter() {
  const [selected, setSelected] = useState(0);
  const theme = themes[selected];

  return (
    <section id="make-it-yours" className="scroll-mt-24 py-24 lg:py-32">
      <div className="section-container">
        <ChapterOpener
          numeral="III"
          kicker="Make it yours"
          heading={
            <>
              Make it{' '}
              <span className="text-primary underline decoration-primary/20 decoration-wavy underline-offset-8">disappear</span>, so the
              words don&rsquo;t.
            </>
          }
        />

        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Prose + accessibility marginalia */}
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-ink-secondary">
              Five typefaces, each a different mood. Size and spacing that bend
              to your eyes. Five themes, from paper-bright to midnight. In
              whichever language
              <Footnote marker="3">
                English and Portuguese (Brazil), across the whole app.
              </Footnote>{' '}
              you think in.
            </p>
            <p className="epigraph mt-10 text-2xl leading-snug lg:text-[1.75rem]">
              Built to read comfortably, for as long as you like.
            </p>
            <Marginalia notes={accessibilityNotes} />
          </div>

          {/* Live type specimen — retints to the hovered/selected theme */}
          <div className="lg:col-span-7">
            <div
              role="group"
              aria-label="Preview a reading theme"
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              {themes.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-pressed={i === selected}
                  aria-label={`Preview the ${t.name} theme`}
                  onMouseEnter={() => setSelected(i)}
                  onFocus={() => setSelected(i)}
                  onClick={() => setSelected(i)}
                  className={`h-10 w-10 rounded-full border transition-transform duration-200 ${
                    i === selected
                      ? 'scale-110 ring-2 ring-primary ring-offset-2 ring-offset-paper'
                      : 'border-ink/15 hover:scale-105'
                  }`}
                  style={{ background: t.bg }}
                >
                  <span className="sr-only">{t.name}</span>
                </button>
              ))}
              <span className="ml-1 text-sm text-ink-muted">{theme.name}</span>
            </div>

            <div
              className="rounded-lg border border-ink/10 p-6 transition-colors duration-200 lg:p-8"
              style={{ background: theme.bg, color: theme.ink }}
            >
              <p
                className="mb-6 text-xs uppercase tracking-[0.22em]"
                style={{ opacity: 0.55 }}
              >
                The same page, five ways
              </p>
              {specimens.map((s) => (
                <div key={s.name} className="type-specimen-row">
                  <span
                    className="mb-1 block text-[0.7rem] uppercase tracking-[0.18em]"
                    style={{ opacity: 0.5 }}
                  >
                    {s.name}
                  </span>
                  <p
                    className="text-lg leading-snug lg:text-xl"
                    style={{ fontFamily: s.stack }}
                  >
                    {specimenLine}
                  </p>
                </div>
              ))}
              <p className="mt-6 text-xs" style={{ opacity: 0.5 }}>
                A taste of the in-app fonts&mdash;exact rendering depends on your
                device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
