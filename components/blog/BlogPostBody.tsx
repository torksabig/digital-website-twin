import type { BlogSection } from "@/lib/blog/types";

export function BlogPostBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="blog-prose">
      {sections.map((section) => (
        <section
          key={section.heading ?? section.paragraphs[0]?.slice(0, 48)}
          className="blog-prose-section"
        >
          {section.heading ? (
            <h4 className="font-display text-[20px] leading-[1.2] tracking-tight text-ink sm:text-[22px]">
              {section.heading}
            </h4>
          ) : null}
          <div className={section.heading ? "mt-5 space-y-8" : "space-y-8"}>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[18px] leading-[1.5] text-ink/70"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
