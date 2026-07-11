"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../Reveal";

const AUDIENCES = [
  {
    name: "Building & property teams",
    body: "Comfort, energy, and safety should not fight each other.",
    quote: "We had eleven safety flags in one stress week. Nobody trusted the BMS to run overnight.",
    metric: "0 vs 11",
    metricLabel: "safety violations in live building test",
    img: "/images/use-case-building.jpg",
    alt: "Industrial HVAC and building automation mechanical room",
  },
  {
    name: "Grid & energy teams",
    body: "Limits, disturbances, and trust on bad days.",
    quote: "When load spikes, the wrong automatic move can trip the whole feeder.",
    metric: "Grid held",
    metricLabel: "under guarded vs unguarded stress test",
    img: "/images/use-case-grid.jpg",
    alt: "Electrical substation and power grid infrastructure",
  },
  {
    name: "Charging & fleet operators",
    body: "Peaks, bills, and 2am phone calls.",
    quote: "Fleet charging looked fine until one bad night of peak pricing.",
    metric: "~95%",
    metricLabel: "accuracy when we do act automatically",
    img: "/images/use-case-fleet.jpg",
    alt: "Electric vehicle charging station at a fleet depot",
  },
];

export function IndustryTabs() {
  const [active, setActive] = useState(0);
  const item = AUDIENCES[active];

  return (
    <section className="bg-white py-24 text-ink">
      <Container>
        <Reveal>
          <Eyebrow>Who this is for</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-[40px] leading-[1.05] sm:text-[56px]">
            If bad automation costs you money or sleep
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {AUDIENCES.map((audience, i) => (
            <button
              key={audience.name}
              type="button"
              onClick={() => setActive(i)}
              className={`min-h-[44px] rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${
                active === i
                  ? "bg-ink text-white"
                  : "bg-ink/5 text-ink/70 hover:bg-ink/10"
              }`}
            >
              {audience.name}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] bg-paper shadow-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-[1fr_1.1fr]"
            >
              <div className="relative min-h-[220px] lg:min-h-[320px]">
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ink/10" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="text-[24px] font-medium tracking-tight">{item.name}</h3>
                <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-ink/60">{item.body}</p>
                <blockquote className="mt-6 border-l-2 border-blue-900/30 pl-4 text-[16px] italic leading-relaxed text-ink/75">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-end gap-4 border-t border-ink/10 pt-6">
                  <div>
                    <p className="font-display text-[36px] leading-none text-blue-900">{item.metric}</p>
                    <p className="mt-1 text-[13px] text-ink/50">{item.metricLabel}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
