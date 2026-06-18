import { AppStoreButtons } from "@/components/shared";

interface DownloadPromptProps {
  eyebrow: string;
  title: string;
}

export function DownloadPrompt({ eyebrow, title }: DownloadPromptProps) {
  return (
    <aside
      className="border-y border-ink bg-accent text-ink"
      aria-label="Download LeafTok"
    >
      <div className="section-container flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-5">
          <span className="font-serif text-5xl" aria-hidden="true">
            &para;
          </span>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em]">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl tracking-tight lg:text-4xl">
              {title}
            </h2>
          </div>
        </div>
        <div className="shrink-0">
          <AppStoreButtons variant="compact" />
        </div>
      </div>
    </aside>
  );
}
