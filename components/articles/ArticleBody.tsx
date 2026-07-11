import Link from "next/link";
import type { ArticleSection, RelatedLink } from "@/lib/articles/types";
import { ComparisonTableBlock } from "./ComparisonTableBlock";
import { ShortAnswerBox } from "./ShortAnswerBox";

type ArticleBodyProps = {
  shortAnswer?: string;
  sections: ArticleSection[];
  comparisonTable?: { headers: string[]; rows: string[][] };
  relatedLinks?: RelatedLink[];
  updatedAt: string;
};

export function ArticleBody({
  shortAnswer,
  sections,
  comparisonTable,
  relatedLinks,
  updatedAt,
}: ArticleBodyProps) {
  return (
    <div className="blog-prose">
      {shortAnswer ? (
        <div className="mb-10">
          <ShortAnswerBox answer={shortAnswer} />
        </div>
      ) : null}

      {sections.map((section) => (
        <section
          key={section.heading ?? section.paragraphs[0]?.slice(0, 48)}
          className="blog-prose-section"
        >
          {section.heading ? (
            <h2 className="font-display text-[28px] leading-[1.15] tracking-tight text-ink sm:text-[32px]">
              {section.heading}
            </h2>
          ) : null}
          <div className={section.heading ? "mt-5 space-y-6" : "space-y-6"}>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-[18px] leading-[1.55] text-ink/70">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      {comparisonTable ? (
        <section className="blog-prose-section mt-10">
          <ComparisonTableBlock table={comparisonTable} />
        </section>
      ) : null}

      {relatedLinks && relatedLinks.length > 0 ? (
        <section className="blog-prose-section mt-10 rounded-2xl border border-ink/10 bg-white p-6">
          <h2 className="font-display text-[22px] text-ink">Related reading</h2>
          <ul className="mt-4 space-y-2">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[16px] text-blue-900 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-10 text-[14px] text-ink/45">Last updated: {updatedAt}</p>
    </div>
  );
}
