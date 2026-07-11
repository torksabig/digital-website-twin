import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Qorina | Calibrated Decision Software for Physical Systems",
  description:
    "Qorina is Aether Applied decision software for buildings, grids, and fleets. Act when safe, wait when unsure, call a human when needed. Shadow tests before live changes.",
  path: "/qorina/",
});

const IS_NOT = [
  "A chatbot or copilot for operators",
  "A trading bot, investment app, or crypto platform",
  "A post-hoc safety filter that only catches mistakes after they happen",
  "A claim of quantum advantage for your next pilot",
];

const FITS = [
  {
    title: "Building automation",
    body: "HVAC and thermal loops where comfort bounds and equipment limits matter.",
  },
  {
    title: "Energy and grids",
    body: "Stress scenarios where the wrong automatic action has outage risk.",
  },
  {
    title: "Fleets and charging",
    body: "Dispatch and load decisions when tariffs, capacity, and timing interact.",
  },
  {
    title: "Cyber-physical ops",
    body: "Guarded automatic steps where unsafe actions must be blocked upfront.",
  },
];

const DECISIONS = [
  {
    label: "Act",
    detail: "Automatic change when evidence supports safety and policy.",
  },
  {
    label: "Wait",
    detail: "Hold the safe default when uncertainty is too high.",
  },
  {
    label: "Call a human",
    detail: "Surface readable context when judgment should not be automated away.",
  },
];

export default function QorinaPage() {
  return (
    <>
      <PageSeo
        path="/qorina/"
        title="Qorina | Calibrated Decision Software for Physical Systems"
        description="Qorina is Aether Applied decision software for buildings, grids, and fleets. Act when safe, wait when unsure, call a human when needed."
      />
      <Nav />

      <section className="hero-gradient relative overflow-hidden pb-16 pt-40 text-white sm:pt-48">
        <div className="hero-streaks pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow dark>Product</Eyebrow>
            <h1 className="font-display mt-6 text-[44px] leading-[1.06] sm:text-[64px]">
              Qorina is decision software for systems that cannot afford silent mistakes
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[18px] leading-relaxed text-white/65">
              Qorina sits under what you already run. It helps physical infrastructure
              act when evidence is clear, wait when it is not, and call a human when
              the situation needs eyes on it. Built in Helsinki for operators who
              need reasons, not opaque error codes.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="light">
                Book a 30-minute call
              </Button>
              <Button href="/proof/" variant="outlineLight">
                See proof pages
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 text-ink">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>What it is</Eyebrow>
            <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
              A decision layer, not a chatbot
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-ink/70">
              Qorina reads live and historical context (sensors, limits, schedules,
              physics-informed models where available) and decides whether an automatic
              action should form. If there is not enough evidence, the unsafe action
              does not ship. Operators get plain-language reasons they can audit.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-24 text-ink">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>How decisions work</Eyebrow>
            <h2 className="font-display mt-5 text-[44px] leading-[1.08] sm:text-[60px]">
              Act, wait, or call a human
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {DECISIONS.map((item) => (
              <StaggerItem key={item.label}>
                <div className="hover-lift h-full rounded-[28px] border border-ink/10 bg-white p-8 shadow-card">
                  <h3 className="text-[22px] font-medium">{item.label}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink/65">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="bg-white py-24 text-ink">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Where it fits</Eyebrow>
              <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
                Physical systems we design for
              </h2>
              <ul className="mt-8 space-y-5">
                {FITS.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-ink/10 p-5">
                    <h3 className="text-[18px] font-medium">{item.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-ink/65">{item.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow>What it is not</Eyebrow>
              <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
                Clear boundaries
              </h2>
              <ul className="mt-8 space-y-4">
                {IS_NOT.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink/70">
                    <span className="mt-1 text-ink/30">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-[16px] leading-relaxed text-ink/60">
                For research context on quantum-native architecture, see{" "}
                <Link href="/learn/what-is-quantum-ai/" className="text-blue-900 hover:underline">
                  what is quantum AI
                </Link>{" "}
                and the{" "}
                <Link href="/proof/36-qubit-qpu/" className="text-blue-900 hover:underline">
                  36-qubit execution proof
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24 text-white">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow dark>Proof and limits</Eyebrow>
            <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
              We publish results and boundaries
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-white/65">
              Qorina is tested with shadow replays before live changes. Proof pages
              document benchmarks like the Helsinki building autonomy loop (0 vs 11
              safety violations under the same disturbance) with explicit limits.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/proof/building-autonomy-loop/" variant="light">
                Building autonomy proof
              </Button>
              <Button href="/learn/ai-uncertainty-critical-systems/" variant="outlineLight">
                AI uncertainty explainer
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
