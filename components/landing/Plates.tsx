import Image from 'next/image';
import { plates } from '@/lib/data/landing';

export function Plates() {
  return (
    <section id="plates" className="scroll-mt-24 overflow-hidden py-24 lg:py-32 bg-paper-warm">
      <div className="section-container">
        <header className="mb-14 max-w-xl">
          <div className="editorial-rule mb-5" />
          <p className="chapter-kicker mb-4">Plates</p>
          <h2 className="font-serif text-4xl tracking-tight lg:text-5xl">
            See it in <span className="serif-italic text-primary">action</span>.
          </h2>
          <p className="mt-4 text-lg text-ink-secondary">
            Five screens, five ways LeafTok changes how you read.
          </p>
        </header>

        <div className="-mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-6 scrollbar-hide">
          {plates.map((plate) => (
            <figure key={plate.src} className="flex-shrink-0 snap-center">
              <div className="w-[220px] lg:w-[250px]">
                <Image
                  src={plate.src}
                  alt={plate.caption}
                  width={400}
                  height={870}
                  className="rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
                />
                <figcaption className="mt-4 text-sm text-ink-muted">
                  <span className="font-serif text-ink">Plate {plate.numeral}</span>
                  {' — '}
                  {plate.caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
