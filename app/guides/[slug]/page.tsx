import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, AppStoreButtons } from "@/components/shared";
import { SchemaGenerator, FAQSection, Breadcrumbs } from "@/components/seo";
import { DownloadPrompt } from "@/components/landing";
import {
  generateGuideArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/generators";
import {
  getAllGuides,
  getGuideBySlug,
  getRelatedGuides,
} from "@/lib/data/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

function formatGuideDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://leaftok.app/guides/${guide.slug}/`,
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://leaftok.app/guides/${guide.slug}/`,
      type: "article",
      images: [{ url: `https://leaftok.app${guide.screenshot.src}` }],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide);
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Guides", url: "/guides/" },
    { label: guide.heading, url: `/guides/${guide.slug}/` },
  ];

  const schemas = [
    generateGuideArticleSchema({
      title: guide.title,
      metaDescription: guide.metaDescription,
      slug: guide.slug,
      screenshotSrc: guide.screenshot.src,
      publishedAt: guide.publishedAt,
    }),
    generateBreadcrumbSchema(breadcrumbs),
  ];

  return (
    <>
      <SchemaGenerator schemas={schemas} />
      <Header />

      <main id="main-content">
        {/* Guide masthead */}
        <article>
          <header className="pb-16 pt-28">
            <div className="section-container">
              <Breadcrumbs items={breadcrumbs} className="mb-10" />
              <p className="masthead-meta mb-5 text-primary">
                Field guide &middot; {guide.keyword}
              </p>
              <h1 className="max-w-4xl font-serif text-[clamp(2.6rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.04em]">
                {guide.heading}
              </h1>
              <p className="mt-8 max-w-xl font-serif text-2xl leading-snug text-ink lg:text-3xl">
                {guide.lede}
              </p>
              <p className="mt-6 text-sm text-ink-muted">
                By{" "}
                <a
                  href="https://iagocavalcante.com"
                  rel="author"
                  className="underline decoration-ink/30 underline-offset-2 hover:text-ink"
                >
                  Iago Cavalcante
                </a>
                , developer of LeafTok &middot; Updated{" "}
                {formatGuideDate(guide.publishedAt)}
              </p>

              {/* Quick answer — the citable unit for answer engines */}
              <div className="mt-10 max-w-2xl border-l-2 border-primary bg-paper-warm p-6">
                <p className="masthead-meta mb-3 text-primary">Quick answer</p>
                <p className="text-lg leading-relaxed text-ink">
                  {guide.quickAnswer}
                </p>
              </div>
            </div>
          </header>

          {/* Body: prose + sticky screenshot */}
          <div className="section-container grid gap-x-12 gap-y-14 pb-20 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              {guide.intro.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mb-6 text-lg leading-relaxed text-ink-secondary"
                >
                  {paragraph}
                </p>
              ))}

              {guide.sections.map((section) => (
                <section key={section.heading} className="mt-14">
                  <div className="editorial-rule mb-5" />
                  <h2 className="mb-6 font-serif text-3xl tracking-tight lg:text-4xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="mb-6 text-lg leading-relaxed text-ink-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mb-6 space-y-4 border-l border-ink/20 pl-6">
                      {section.list.map((item) => (
                        <li
                          key={item.slice(0, 32)}
                          className="text-lg leading-relaxed text-ink-secondary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <figure className="mx-auto w-[240px] lg:sticky lg:top-28 lg:w-[260px]">
                <div className="absolute -inset-4 -z-10 border border-ink/15" />
                <Image
                  src={guide.screenshot.src}
                  alt={guide.screenshot.alt}
                  width={400}
                  height={870}
                  className="w-full shadow-[18px_24px_0_rgba(26,22,18,0.10)]"
                />
                <figcaption className="mt-5 border-b border-ink/20 pb-2 text-[0.68rem] uppercase tracking-[0.18em] text-ink-muted">
                  LeafTok for iOS
                </figcaption>
              </figure>
            </aside>
          </div>

          {/* How to do it with LeafTok */}
          <section className="bg-paper-warm py-20">
            <div className="section-container">
              <header className="mb-14 max-w-xl">
                <div className="editorial-rule mb-5" />
                <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
                  {guide.leaftokHeading}
                </h2>
              </header>
              <ol className="grid gap-10 md:grid-cols-3">
                {guide.leaftokSteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="masthead-meta text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-3 mt-2 text-xl font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-ink-secondary">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <AppStoreButtons showBadge />
              </div>
            </div>
          </section>

          {/* Guide FAQ */}
          <section className="py-16">
            <div className="mx-auto max-w-container px-6">
              <div className="mx-auto max-w-2xl">
                <FAQSection
                  faqs={guide.faqs}
                  title="Questions, answered"
                  subtitle={`What readers ask about ${guide.keyword}`}
                />
              </div>
            </div>
          </section>
        </article>

        {/* Related guides */}
        {related.length > 0 && (
          <section className="border-t border-ink/15 py-16">
            <div className="section-container">
              <p className="masthead-meta mb-8">Keep reading</p>
              <div className="grid gap-8 md:grid-cols-3">
                {related.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides/${relatedGuide.slug}/`}
                    className="group border-t-2 border-ink pt-4 transition-colors hover:text-primary"
                  >
                    <h3 className="font-serif text-xl leading-snug">
                      {relatedGuide.heading}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                      {relatedGuide.lede}
                    </p>
                    <span className="mt-4 inline-block text-sm text-ink-muted group-hover:text-primary">
                      Read the guide &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <DownloadPrompt
          eyebrow="Free to start, no signup"
          title="Try your first book in minutes."
        />
      </main>

      <Footer />
    </>
  );
}
