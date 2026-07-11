"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/seo/faq-items";
import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

export function FAQ({ light = true }: { light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className={light ? "bg-paper py-24 text-ink" : "bg-ink py-24 text-white"}>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow dark={!light}>FAQ</Eyebrow>
          <h2 className="font-display mt-5 text-[40px] leading-[1.05] sm:text-[56px]">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            const border = light ? "border-ink/10" : "border-white/10";
            return (
              <div key={item.q} className={`border-b ${border}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-[18px] font-medium tracking-tight sm:text-[20px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg transition-transform ${
                      light ? "bg-ink/5" : "bg-white/10"
                    } ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p
                        className={`pb-6 text-[16px] leading-relaxed ${
                          light ? "text-ink/60" : "text-white/60"
                        }`}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
