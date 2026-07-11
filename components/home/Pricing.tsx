import { Container, Eyebrow, Button } from "../ui";
import { Reveal, Stagger, StaggerItem } from "../Reveal";

const STEPS = [
  {
    no: "01",
    title: "30-minute call",
    body: "You describe one real problem. We say honestly if we can help.",
  },
  {
    no: "02",
    title: 'Read-only comparison ("shadow test")',
    body: 'We look at past data from one site and show: "Here\'s what your system did vs what we would have done." You change nothing. We touch nothing.',
  },
  {
    no: "03",
    title: "Small pilot (only if step 2 is interesting)",
    body: "One location, strict limits, you can pull the plug anytime.",
  },
];

export function Integrate() {
  return (
    <section className="bg-white py-24 text-ink">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How we start</Eyebrow>
          <h2 className="font-display mt-5 text-[44px] leading-[1.08] sm:text-[60px]">
            Try it without risk
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <StaggerItem key={s.no}>
              <div className="hover-lift flex h-full flex-col rounded-[28px] border border-ink/10 bg-paper p-8">
                <p className="font-display text-[28px] text-blue-900">{s.no}</p>
                <h3 className="mt-4 text-[20px] font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button href="/contact" variant="primary">
            Book a 30-minute call
          </Button>
        </div>
      </Container>
    </section>
  );
}
