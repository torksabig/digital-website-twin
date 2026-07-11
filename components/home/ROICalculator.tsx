import { Container, Eyebrow } from "../ui";
import { Reveal, Stagger, StaggerItem } from "../Reveal";

const METRICS = [
  {
    stat: "0",
    label: "Unsafe automatic actions in our safety tests",
    body: "Blocked before they could run.",
  },
  {
    stat: "0 vs 11",
    label: "Same building stress test",
    body: "Our approach had 0 safety problems; the old approach had 11.",
  },
  {
    stat: "~95%",
    label: "When we do act automatically",
    body: "We're right about 95% of the time.",
  },
  {
    stat: "Half the time",
    label: "We deliberately don't act",
    body: "Because waiting is safer than guessing.",
  },
];

export function Benchmarks() {
  return (
    <section className="bg-paper py-24 text-ink">
      <Container>
        <Reveal className="max-w-3xl">
          <Eyebrow>Real results</Eyebrow>
          <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
            Tested on real scenarios: we show the limits too
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {METRICS.map((m) => (
            <StaggerItem key={m.label}>
              <div className="hover-lift flex h-full flex-col rounded-[28px] border border-ink/10 bg-white p-8 shadow-card">
                <p className="font-display text-[44px] leading-none text-blue-900">{m.stat}</p>
                <p className="mt-3 text-[16px] font-medium tracking-tight">{m.label}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/55">{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 max-w-2xl text-[14px] leading-relaxed text-ink/45">
          We&apos;re early-stage. Numbers come from controlled tests. We also
          publish where other methods beat us. The point isn&apos;t &ldquo;perfect
          AI&rdquo;. It&apos;s don&apos;t automate when you shouldn&apos;t.
        </p>
      </Container>
    </section>
  );
}
