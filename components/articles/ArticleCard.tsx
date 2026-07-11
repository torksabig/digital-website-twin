import Link from "next/link";
import type { Article } from "@/lib/articles/types";
import { Reveal } from "@/components/Reveal";

type ArticleCardProps = {
  article: Article;
  hub: "learn" | "proof";
};

export function ArticleCard({ article, hub }: ArticleCardProps) {
  return (
    <Reveal>
      <Link
        href={`/${hub}/${article.slug}/`}
        className="hover-lift block h-full rounded-[24px] border border-ink/10 bg-white p-7 shadow-card"
      >
        {article.category ? (
          <p className="text-[13px] font-semibold uppercase tracking-wide text-blue-900/70">
            {article.category}
          </p>
        ) : null}
        <h2 className="font-display mt-3 text-[28px] leading-[1.1] tracking-tight text-ink">
          {article.title}
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-ink/60">{article.excerpt}</p>
        <p className="mt-5 text-[14px] text-ink/45">
          {article.readMinutes} min read · Updated {article.updatedAt}
        </p>
      </Link>
    </Reveal>
  );
}
