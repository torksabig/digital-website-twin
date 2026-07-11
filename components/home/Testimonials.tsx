import Link from "next/link";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../Reveal";

const ITEMS = [
  {
    quote:
      "Qorina designed a real Helsinki building and then ran it live, on real climate, on a live loop, not a simulator. Under the same disturbance it logged zero safety violations against a fixed controller's eleven, while holding comfort and trimming energy.",
    name: "Live building control",
    role: "Real site, real climate",
    stat: "0 vs 11",
    statLabel: "safety violations",
  },
  {
    quote:
      "The whole model, perceive, decide, speak and compose, ran end-to-end on a real 36-qubit quantum computer. We claim no advantage today, the value is the architecture, calibration and composition, and the future is de-risked.",
    name: "Real quantum hardware",
    role: "36-qubit QPU",
    stat: "36q",
    statLabel: "end-to-end on a real QPU",
  },
];

export function Testimonials() {
  return (
    <section className="bg-paper py-24 text-ink">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>It operates and it discovers</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-[40px] leading-[1.05] sm:text-[56px]">
            It doesn&apos;t just decide. It builds.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ITEMS.map((t) => (
            <Reveal key={t.name}>
              <figure className="hover-lift flex h-full flex-col justify-between rounded-[28px] bg-white p-8 shadow-card">
                <blockquote className="text-[19px] leading-relaxed tracking-tight text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-end justify-between border-t border-ink/10 pt-6">
                  <div>
                    <p className="text-[16px] font-medium">{t.name}</p>
                    <p className="text-[14px] text-ink/50">{t.role}</p>
                    {t.name === "Live building control" ? (
                      <Link
                        href="/proof/building-autonomy-loop/"
                        className="mt-2 inline-block text-[13px] font-medium text-blue-900 hover:underline"
                      >
                        Read full proof →
                      </Link>
                    ) : null}
                  </div>
                  <div className="text-right">
                    <p className="font-display text-[32px] text-blue-900">{t.stat}</p>
                    <p className="text-[13px] text-ink/50">{t.statLabel}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
