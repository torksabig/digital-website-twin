import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ProcessTabs } from "@/components/home/ProcessTabs";
import { Benchmarks } from "@/components/home/ROICalculator";
import { IndustryTabs } from "@/components/home/IndustryTabs";
import { Integrate } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

const HERO_BULLETS = [
  { label: "Act", text: "When the situation is clear and safe" },
  { label: "Wait", text: "When it is not sure, use the safe default" },
  { label: "Call a human", text: "When something unusual needs eyes on it" },
];

const RULES = [
  {
    title: "Reality",
    typical: "Talks about the world",
    qorina: "Grounded in how the physical system actually behaves",
    img: "/images/feature-data.png",
    alt: "Diagram showing physical system data grounding decisions",
  },
  {
    title: "Confidence",
    typical: "Always sounds sure",
    qorina: "Knows when it doesn't know",
    img: "/images/feature-workflow.png",
    alt: "Workflow illustration for calibrated confidence thresholds",
  },
  {
    title: "Safety",
    typical: "Fix mistakes after",
    qorina: "Blocks unsafe actions before they happen",
    img: "/images/feature-execute.png",
    alt: "Safety gate illustration blocking unsafe automatic actions",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Qorina | Safer Automation for Buildings & Grids",
  description:
    "Qorina is decision software for building automation, energy, and fleet operations. Act when safe, wait when unsure, call a human when needed. Helsinki deep tech.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <PageSeo
        path="/"
        title="Qorina | Safer Automation for Buildings & Grids"
        description="Qorina is decision software for building automation, energy, and fleet operations. Act when safe, wait when unsure, call a human when needed. Helsinki deep tech."
        includeFaq
      />
      <Nav />

      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden pb-16 pt-40 text-white sm:pt-48">
        <Image
          src="/images/hero-infrastructure.jpg"
          alt="Industrial HVAC ductwork in a building mechanical room"
          fill
          className="object-cover opacity-25 mix-blend-luminosity"
          sizes="100vw"
          priority
        />
        <div className="hero-streaks pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="mx-auto max-w-[1000px] text-center lg:mx-0 lg:max-w-[760px] lg:text-left">
            <span className="appear appear-delay-1 inline-flex items-center gap-2 text-[15px] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
              Qorina by Aether Applied
            </span>
            <h1 className="appear appear-delay-2 font-display mt-6 max-w-[20ch] text-[44px] leading-[1.06] sm:text-[64px] lg:text-[76px]">
              Automation should know when to stop.
            </h1>

            <Link
              href="/proof/building-autonomy-loop/"
              className="appear appear-delay-2 mt-5 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 transition-colors hover:bg-white/10 lg:justify-start"
            >
              <span className="font-display text-[28px] leading-none text-blue-200 sm:text-[32px]">
                0 vs 11
              </span>
              <span className="text-left text-[14px] leading-snug text-white/70">
                safety violations in live building stress test
                <span className="ml-1 text-blue-200">→ see proof</span>
              </span>
            </Link>

            <p className="appear appear-delay-3 mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-white/65 lg:mx-0">
              Qorina is decision software under what you already use. Wrong
              automatic decisions cost real money or create real risk.
            </p>

            <ul className="appear appear-delay-3 mx-auto mt-6 max-w-xl space-y-3 lg:mx-0">
              {HERO_BULLETS.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-left text-[16px] leading-relaxed text-white/75">
                  <span className="mt-0.5 shrink-0 rounded-full bg-blue-900/80 px-2.5 py-0.5 text-[12px] font-semibold uppercase tracking-wide text-blue-100">
                    {item.label}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="appear appear-delay-4 mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button href="/contact" variant="light">
                Book a 30-minute call
              </Button>
              <Button href="/use-cases" variant="outlineLight">
                See real examples
              </Button>
            </div>
            <p className="appear appear-delay-5 mx-auto mt-6 max-w-lg text-[15px] text-white/50 lg:mx-0">
              We can start with a read-only test on your data. Nothing changes in production.
            </p>
          </div>
        </Container>
      </section>

      <IndustryTabs />
      <Benchmarks />

      {/* THREE SIMPLE RULES */}
      <section className="bg-paper py-24 text-ink">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>What Qorina does differently</Eyebrow>
            <h2 className="font-display mt-5 text-[44px] leading-[1.08] sm:text-[60px]">
              Three simple rules
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {RULES.map((r) => (
              <StaggerItem key={r.title}>
                <div className="hover-lift flex h-full flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-card">
                  <div className="relative aspect-[4/3] w-full bg-paper">
                    <Image
                      src={r.img}
                      alt={r.alt}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 pt-6">
                    <h3 className="text-[22px] font-medium leading-snug tracking-tight">
                      {r.title}
                    </h3>
                    <div className="mt-5 space-y-4 text-[15px] leading-relaxed">
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-wide text-ink/40">
                          Typical AI
                        </p>
                        <p className="mt-1 text-ink/55">{r.typical}</p>
                      </div>
                      <div>
                        <p className="text-[12px] font-semibold uppercase tracking-wide text-blue-900">
                          Qorina
                        </p>
                        <p className="mt-1 text-ink/80">{r.qorina}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-[18px] leading-relaxed text-ink/70">
              Not a chatbot. A decision layer for systems that can&apos;t afford silent mistakes.
            </p>
          </Reveal>
        </Container>
      </section>

      <ProcessTabs />
      <Testimonials />
      <Integrate />
      <FAQ light />
      <CTASection />
      <Footer />
    </>
  );
}
