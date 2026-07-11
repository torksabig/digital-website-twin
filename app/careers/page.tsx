import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Careers at Aether Applied | Build Qorina",
  description:
    "Join Aether Applied in Helsinki. Open roles in research engineering, quantum ML, and go-to-market. Help build decision software that knows when not to automate.",
  path: "/careers/",
});
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

// Placeholder open roles (original site lists none)
const ROLES = [
  { title: "Research Engineer, Calibration & Uncertainty", type: "Full-time · Helsinki / Remote", team: "Research" },
  { title: "Quantum ML Engineer", type: "Full-time · Helsinki / Remote", team: "Research" },
  { title: "Founding Account Executive", type: "Full-time · Helsinki / Remote", team: "Go-to-market" },
];

export default function Careers() {
  return (
    <>
      <PageSeo
        path="/careers/"
        title="Careers at Aether Applied | Build Qorina"
        description="Join Aether Applied in Helsinki. Open roles in research engineering, quantum ML, and go-to-market. Help build decision software that knows when not to automate."
        includeFaq
      />
      <Nav />

      {/* HERO */}
      <section className="bg-black pt-36 pb-20 text-white sm:pt-44">
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_0.9fr]">
            <Reveal>
              <Eyebrow dark>Careers</Eyebrow>
              <h1 className="font-display mt-6 text-[44px] leading-[1.03] sm:text-[64px]">
                Build a model that knows its limits
              </h1>
              <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/70">
                We&apos;re a Helsinki deep-tech team building Qorina,                 calibration, uncertainty, and native quantum hardware. We value
                rigor, honest benchmarks, and being right when it matters.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[20px] border border-white/12 bg-white/[0.04] p-6">
                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                  Careers
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  Helsinki-based, deep-tech, research-led. Everyone ships, owns,
                  and reports results honestly.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* OPEN ROLES */}
      <section className="bg-white py-24 text-ink">
        <Container>
          <Reveal>
            <Eyebrow>Open roles</Eyebrow>
            <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
              Where you fit in
            </h2>
          </Reveal>
          <Stagger className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {ROLES.map((r) => (
              <StaggerItem key={r.title}>
                <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {/* TODO: replace copy */}
                    <h3 className="text-[22px] font-medium tracking-tight">{r.title}</h3>
                    <p className="mt-1 text-[14px] text-ink/50">
                      {r.team} · {r.type}
                    </p>
                  </div>
                  <Button href="/contact" variant="outline">
                    Apply
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FAQ light />
      <CTASection />
      <Footer />
    </>
  );
}
