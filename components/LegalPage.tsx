import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Container } from "./ui";

export type LegalSection = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  sections,
  footerNote = "Placeholder legal copy for layout only, replace with your reviewed policy before publishing.",
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  footerNote?: string | null;
}) {
  return (
    <>
      <Nav />
      <section className="bg-black pt-36 pb-16 text-white sm:pt-44">
        <Container className="max-w-3xl">
          {/* TODO: replace copy */}
          <h1 className="font-display text-[44px] leading-[1.05] sm:text-[56px]">{title}</h1>
          <p className="mt-5 text-[17px] leading-relaxed text-white/60">{intro}</p>
        </Container>
      </section>

      <section className="bg-white py-20 text-ink">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                {/* TODO: replace copy */}
                <h2 className="text-[20px] font-medium tracking-tight">
                  {i + 1}. {s.heading}
                </h2>
                {/* TODO: replace copy */}
                <div className="mt-3 space-y-3">
                  {s.body.split(/\n\n+/).map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-[16px] leading-relaxed text-ink/65">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {footerNote ? (
            <p className="mt-14 rounded-2xl bg-paper p-5 text-[14px] text-ink/50">{footerNote}</p>
          ) : null}
        </Container>
      </section>

      <Footer />
    </>
  );
}
