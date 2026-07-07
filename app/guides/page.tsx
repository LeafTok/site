import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/shared";
import { SchemaGenerator, Breadcrumbs } from "@/components/seo";
import { DownloadPrompt } from "@/components/landing";
import {
  generateCollectionPageSchema,
  generateItemListSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/generators";
import { getAllGuides } from "@/lib/data/guides";

export const metadata: Metadata = {
  title: "Reading Guides — Swipe-Reading, EPUB, Audiobooks & More",
  description:
    "Field guides for modern readers: TikTok-style reading, the best EPUB readers for iPhone, turning PDFs into audiobooks, finishing more books, and reading with a short attention span.",
  alternates: {
    canonical: "https://leaftok.app/guides/",
  },
};

const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Guides", url: "/guides/" },
];

export default function GuidesHubPage() {
  const guides = getAllGuides();

  const schemas = [
    generateCollectionPageSchema(
      "LeafTok Reading Guides",
      "Practical guides to swipe-reading, EPUB and PDF reading on iPhone, audiobook narration, reading habits, and book clubs.",
      "/guides/",
      guides.length
    ),
    generateItemListSchema(
      "LeafTok Reading Guides",
      guides.map((guide, index) => ({
        name: guide.title,
        url: `/guides/${guide.slug}/`,
        position: index + 1,
      }))
    ),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main id="main-content">
        <header className="pb-16 pt-28">
          <div className="section-container">
            <Breadcrumbs items={breadcrumbs} className="mb-10" />
            <p className="masthead-meta mb-5 text-primary">
              The LeafTok field guides
            </p>
            <h1 className="max-w-4xl font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.045em]">
              Guides for readers the feed almost won.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-secondary">
              Practical answers first, app second: how swipe-reading works, how
              to listen to books you already own, and how to actually finish
              what you start.
            </p>
          </div>
        </header>

        <section className="pb-24">
          <div className="section-container">
            <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
              {guides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group border-t-2 border-ink pt-5 transition-colors hover:text-primary"
                >
                  <div className="mb-4 flex items-baseline justify-between">
                    <span className="masthead-meta text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                      {guide.keyword}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl leading-snug lg:text-3xl">
                    {guide.heading}
                  </h2>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-secondary">
                    {guide.lede}
                  </p>
                  <span className="mt-5 inline-block text-sm text-ink-muted group-hover:text-primary">
                    Read the guide &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DownloadPrompt
          eyebrow="Read or listen anywhere"
          title="Put a book where the feed used to be."
        />
      </main>

      <Footer />
    </>
  );
}
