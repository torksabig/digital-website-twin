import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Aether Applied | Decision Software for Physical Systems",
  description:
    "Meet the Helsinki team behind Qorina: safer automation for buildings, grids, and fleets. Built for operators who cannot afford silent mistakes.",
  path: "/about/",
});
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

const TEAM = [
  { name: "Lucas Kuisma", role: "Founder & CEO", img: "/images/team1.jpg" },
  { name: "Reidar Wasenius", role: "Strategy, Business Development & AI", img: "/images/team2.jpg" },
  { name: "Ina Feimi", role: "International Operations", img: "/images/team1.jpg" },
  { name: "Teodor Pavel-Hiidenlampi", role: "Sales & UX", img: "/images/team2.jpg" },
  { name: "Vincent Braun", role: "Sales & Marketing", img: "/images/team1.jpg" },
  { name: "Leevi Manninen", role: "Sales & Customer Success", img: "/images/team2.jpg" },
  { name: "Luciano Rodriguez", role: "Infrastructure Management", img: "/images/team1.jpg" },
];

export default function About() {
  return (
    <>
      <PageSeo
        path="/about/"
        title="About Aether Applied | Decision Software for Physical Systems"
        description="Meet the Helsinki team behind Qorina: safer automation for buildings, grids, and fleets. Built for operators who cannot afford silent mistakes."
        includeFaq
      />
      <Nav />

      <section className="relative overflow-hidden bg-black pt-36 pb-20 text-white sm:pt-44">
        <Image
          src="/images/about-helsinki.jpg"
          alt="Modern Helsinki architecture and urban skyline"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <Container className="relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.5fr_0.9fr]">
            <Reveal>
              <Eyebrow dark>About</Eyebrow>
              <h1 className="font-display mt-6 text-[44px] leading-[1.03] sm:text-[64px]">
                Built for the physical world, not the internet
              </h1>
              <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/70">
                A surgeon stops when unsure. A pilot runs the checklist again.
                Good operators know when not to act. Most AI doesn&apos;t. We
                built Qorina so automated systems can act when it&apos;s safe,
                pause when it&apos;s not, and explain themselves when a human is
                needed.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[20px] border border-white/12 bg-white/[0.04] p-6">
                <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                  Location
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  Helsinki, Finland
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 text-ink">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Team</Eyebrow>
            <h2 className="font-display mt-5 text-[44px] leading-[1.08] sm:text-[60px]">
              Meet the team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-ink/60">
              A Helsinki team across research, engineering, and go-to-market,
              building safer decision software for physical systems.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-3">
            {TEAM.map((m, i) => {
              const initials = m.name
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("");
              const tints = [
                "bg-[#103e66] text-white",
                "bg-[#c5dffb] text-[#0a1015]",
                "bg-[#0a1015] text-white",
                "bg-[#e7eef6] text-[#103e66]",
              ];
              return (
                <StaggerItem key={m.name}>
                  <div className="hover-lift overflow-hidden rounded-[28px] bg-white shadow-card">
                    <div className={`flex h-56 items-center justify-center ${tints[i % tints.length]}`}>
                      <span className="font-display text-[56px] leading-none">{initials}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[18px] font-medium">{m.name}</h3>
                      <p className="mt-1 text-[14px] text-ink/55">{m.role}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="bg-ink py-24 text-white">
        <Container>
          <Reveal className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow dark>We&apos;re hiring</Eyebrow>
              <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
                Come build with us
              </h2>
              <div className="mt-7">
                <Button href="/careers" variant="light">
                  View open roles
                </Button>
              </div>
            </div>
            <div className="space-y-4 text-[16px] leading-relaxed text-white/65">
              <p>
                We&apos;re building decision software for systems that can&apos;t
                afford silent mistakes: heating, charging, grids, and more.
              </p>
              <p>
                We&apos;re Helsinki-based and deep-tech to the core. Everyone
                here ships, owns, and reports results honestly.
              </p>
              <p>
                We hire like we build: lean, deliberate, and focused on being
                right when it matters.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQ light />
      <CTASection />
      <Footer />
    </>
  );
}
