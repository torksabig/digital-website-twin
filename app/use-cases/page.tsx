import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { PageSeo } from "@/components/seo/PageSeo";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Use Cases | Building, Grid & Automation Safety Tests",
  description:
    "Real stress tests: HVAC and building automation, power grid control, and cyber scenarios. See where guarded automation blocked unsafe actions.",
  path: "/use-cases/",
});
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Button } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

const CASES = [
  {
    tag: "Cyber defense test",
    title: "Task completed. Zero unsafe automatic actions.",
    outcome: "Every unsafe action was blocked before it could run.",
    stack: "Guarded decision layer with built-in safety rules",
    workflow: [
      "No evidence of safety, no automatic action",
      "Unsafe action blocked upfront",
      "Task still completed successfully",
    ],
  },
  {
    tag: "Power grid test",
    title: "Grid stayed up under stress",
    outcome: "Unguarded approach failed under the same conditions.",
    stack: "Guarded controller vs uncontrolled baseline",
    workflow: [
      "Guarded run kept the grid alive",
      "Uncontrolled run blacked out",
      "Guarded approach won the benchmark",
    ],
  },
  {
    tag: "HVAC & building automation",
    title: "Zero safety issues vs eleven with the old approach",
    outcome: "Same stress applied to both: real building shape and real weather data.",
    stack: "Real site, real climate, live control loop",
    workflow: [
      "Used real building geometry and weather",
      "Ran heating and control loop live",
      "0 safety problems vs 11 with fixed controller",
    ],
  },
  {
    tag: "Quantum hardware test",
    title: "Design proven on advanced hardware",
    outcome: "You don't need quantum to use this. R&D for the future, not a sales requirement.",
    stack: "Advanced hardware research",
    workflow: [
      "Proved the design can run on advanced hardware",
      "Not required for customers today",
      "Future option, de-risked now",
    ],
  },
];

export default function UseCases() {
  return (
    <>
      <PageSeo
        path="/use-cases/"
        title="Use Cases | Building, Grid & Automation Safety Tests"
        description="Real stress tests: HVAC and building automation, power grid control, and cyber scenarios. See where guarded automation blocked unsafe actions."
        includeFaq
      />
      <Nav />

      <section className="bg-black pt-36 pb-20 text-white sm:pt-44">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow dark>Examples</Eyebrow>
            <h1 className="font-display mt-6 text-[44px] leading-[1.03] sm:text-[64px]">
              Real examples, honest boundaries
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/70">
              Not marketing promises. Measured tests on power grids, HVAC and
              building automation, and safety scenarios.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 text-ink">
        <Container>
          <Stagger className="border-t border-ink/10">
            {CASES.map((c) => (
              <StaggerItem key={c.title}>
                <div className="grid gap-8 border-b border-ink/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <Eyebrow>{c.tag}</Eyebrow>
                    <h2 className="font-display mt-4 text-[30px] leading-tight sm:text-[40px]">
                      {c.title}
                    </h2>
                    <Button href="/contact" variant="outline" className="mt-7">
                      Book a 30-minute call
                    </Button>
                  </div>
                  <div className="grid gap-8 text-[15px] sm:grid-cols-3">
                    <div>
                      <p className="font-medium">Outcome</p>
                      <p className="mt-2 text-ink/60">{c.outcome}</p>
                    </div>
                    <div>
                      <p className="font-medium">Stack</p>
                      <p className="mt-2 text-ink/60">{c.stack}</p>
                    </div>
                    <div>
                      <p className="font-medium">Workflow</p>
                      <ul className="mt-2 space-y-2">
                        {c.workflow.map((w) => (
                          <li key={w} className="flex items-start gap-2 text-ink/60">
                            <span className="text-blue-900">→</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
