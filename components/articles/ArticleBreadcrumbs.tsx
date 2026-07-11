import Link from "next/link";
import type { ArticleHub } from "@/lib/articles/types";

type BreadcrumbProps = {
  hub: ArticleHub;
  pageTitle: string;
};

const HUB_LABELS: Record<ArticleHub, string> = {
  learn: "Learn",
  proof: "Proof",
};

export function ArticleBreadcrumbs({ hub, pageTitle }: BreadcrumbProps) {
  const hubPath = `/${hub}/`;
  const hubLabel = HUB_LABELS[hub];

  return (
    <nav aria-label="Breadcrumb" className="text-[14px] text-ink/50">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-ink/80">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href={hubPath} className="transition-colors hover:text-ink/80">
            {hubLabel}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-ink/70">{pageTitle}</li>
      </ol>
    </nav>
  );
}
