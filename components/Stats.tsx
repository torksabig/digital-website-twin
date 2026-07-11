"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 0, suffix: "", label: "Unsafe automatic actions in our safety tests" },
  { value: 95, suffix: "%", label: "Accuracy when we do act automatically" },
  { value: 50, suffix: "%", label: "Of the time we deliberately don't act. Waiting is safer" },
];

export function Stats() {
  return (
    <section className="bg-white py-24 text-ink">
      <Container>
        <Reveal className="text-center">
          <Eyebrow>Real results</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-[40px] leading-[1.05] sm:text-[56px]">
            Tested on real scenarios
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-[56px] leading-none text-blue-900">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mx-auto mt-4 max-w-[14rem] text-[15px] text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
