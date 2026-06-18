import Image from "next/image";
import { Footnote } from "./Footnote";
import { listenMarginalia, soundscapes } from "@/lib/data/landing";

const waveform = [
  18, 34, 52, 28, 68, 44, 78, 38, 58, 24, 72, 46, 62, 30, 48, 20,
];

export function ListenChapter() {
  return (
    <section
      id="listen"
      className="scroll-mt-24 overflow-hidden bg-ink py-20 text-paper lg:py-32"
    >
      <div className="section-container">
        <div className="mb-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-paper/60">
          <span>Chapter II</span>
          <span className="h-px flex-1 bg-paper/20" />
          <span>Listen</span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          <figure className="relative mx-auto w-[250px] lg:col-span-5 lg:mx-0 lg:w-[310px]">
            <span
              className="absolute -left-6 -top-6 font-serif text-8xl text-paper/10"
              aria-hidden="true"
            >
              II
            </span>
            <Image
              src="/assets/screenshot-02-listen-hands-free.webp"
              alt="LeafTok reading a book aloud with on-device narration"
              width={400}
              height={870}
              className="relative w-full border border-paper/20"
            />
            <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-paper/55">
              Night reader &middot; hands free
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <h2 className="max-w-3xl font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.045em]">
              Put the phone down. Keep the book going.
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_13rem]">
              <div>
                <p className="max-w-xl text-lg leading-relaxed text-paper/75">
                  Sixteen British and American voices run on your device. Press
                  play and the cards advance themselves. Add a soundscape
                  <Footnote marker="2">
                    {soundscapes.join(" · ")}. Each can fade out on a sleep
                    timer.
                  </Footnote>{" "}
                  when the room needs to disappear.
                </p>

                <div className="mt-10 border-y border-paper/20 py-6">
                  <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-paper/55">
                    <span>Voice 07 &middot; American</span>
                    <span>12:48</span>
                  </div>
                  <div
                    className="flex h-20 items-center gap-2"
                    aria-label="Audio waveform"
                  >
                    {waveform.map((height, index) => (
                      <span
                        key={index}
                        className="w-full bg-accent"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <ul className="border-l border-paper/20 pl-5 text-sm text-paper/60">
                {listenMarginalia.map((note) => (
                  <li
                    key={note.text}
                    className="border-b border-paper/15 py-4 first:pt-0"
                  >
                    {note.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
