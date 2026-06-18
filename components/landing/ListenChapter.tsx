import Image from 'next/image';
import { Chapter } from './Chapter';
import { Footnote } from './Footnote';
import { listenMarginalia, soundscapes } from '@/lib/data/landing';

export function ListenChapter() {
  return (
    <Chapter
      id="listen"
      numeral="II"
      kicker="Listen"
      mirror
      background="warm"
      marginalia={listenMarginalia}
      heading={
        <>
          Press play and{' '}
          <span className="rounded bg-primary/10 px-2 text-primary">pocket the phone</span>.
        </>
      }
      lead={
        <>
          Sixteen Kokoro voices that actually sound human, British and
          American, generated right on your device. Hit play and the cards
          advance themselves, so listening turns hands-free. Layer in an ambient
          soundscape
          <Footnote marker="2">
            {soundscapes.join(' · ')}. Each fades out on a sleep timer when
            you&rsquo;re done for the night.
          </Footnote>{' '}
          and the world goes quiet around the page.
        </>
      }
      epigraph={<>&ldquo;Put your phone down. Keep reading.&rdquo;</>}
      side={
        <div className="relative w-[260px] lg:w-[300px]">
          <Image
            src="/assets/screenshot-02-listen-hands-free.webp"
            alt="LeafTok narrating a book hands-free"
            width={400}
            height={870}
            className="rounded-[2.5rem] shadow-[0_25px_80px_-15px_rgba(26,22,18,0.2)]"
          />
          <Image
            src="/assets/screenshot-05-read-to-lo-fi-beats.webp"
            alt="Reading to lo-fi beats with ambient audio"
            width={400}
            height={870}
            className="absolute -bottom-8 -right-12 w-[42%] rounded-xl border border-ink/10 shadow-lg"
          />
        </div>
      }
    />
  );
}
