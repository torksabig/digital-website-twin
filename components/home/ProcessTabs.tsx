"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container, Eyebrow } from "../ui";
import { Reveal } from "../Reveal";

const STEPS = [
  {
    key: "Act",
    no: "01",
    title: "Routine situation, clear evidence",
    body: "System moves on its own. No one babysitting.",
    tone: "border-emerald-500/40 bg-emerald-950/50 text-emerald-100",
    tabActive: "bg-emerald-500 text-ink",
    tabIdle: "bg-emerald-500/15 text-emerald-100 hover:bg-emerald-500/25",
  },
  {
    key: "Wait",
    no: "02",
    title: "Not sure? Do the safe thing",
    body: "Not guessing is a feature.",
    tone: "border-amber-500/40 bg-amber-950/50 text-amber-100",
    tabActive: "bg-amber-400 text-ink",
    tabIdle: "bg-amber-500/15 text-amber-100 hover:bg-amber-500/25",
  },
  {
    key: "Call a human",
    no: "03",
    title: "Something new or conflicting?",
    body: "Alert a person with a plain explanation, not a useless alarm.",
    tone: "border-red-500/40 bg-red-950/50 text-red-100",
    tabActive: "bg-red-500 text-white",
    tabIdle: "bg-red-500/15 text-red-100 hover:bg-red-500/25",
  },
];

const FLOW = [
  { label: "Data in", tone: "bg-white/[0.03] text-white/80 border-white/10" },
  {
    label: '"Is this safe and familiar?"',
    tone: "bg-blue-900/40 text-blue-200 border-blue-400/20",
  },
  { label: "Act / Wait / Call human", tone: "bg-white/[0.06] text-white/90 border-white/15" },
];

export function ProcessTabs() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <Reveal className="text-center">
          <Eyebrow dark>How decisions work</Eyebrow>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-[40px] leading-[1.05] sm:text-[56px]">
            Act. Wait. Call a human.
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              className={`min-h-[44px] rounded-full px-6 py-2.5 text-[15px] font-medium transition-colors ${
                active === i ? s.tabActive : s.tabIdle
              }`}
            >
              {s.key}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-10 rounded-[40px] bg-white/[0.04] p-8 lg:grid-cols-2 lg:p-12">
          <div className="rounded-3xl bg-black/40 p-6">
            <div className="flex flex-col gap-3">
              {FLOW.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-xl border px-4 py-3 text-[14px] ${node.tone}`}
                >
                  {node.label}
                </motion.div>
              ))}
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`rounded-xl border px-4 py-3 text-[14px] font-medium ${step.tone}`}
              >
                → {step.key}: {step.title}
              </motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[14px] text-white/40">
                {step.no}: {step.key}
              </p>
              <h3 className="font-display mt-3 text-[28px] leading-tight sm:text-[34px]">
                {step.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/60">{step.body}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
