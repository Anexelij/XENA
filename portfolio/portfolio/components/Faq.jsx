"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ul className="divide-y divide-ink/15 border-y border-ink/15">
      {FAQ.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-orange"
            >
              <span className="font-display text-xl uppercase md:text-4xl">{item.q}</span>
              <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-2xl leading-none">
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-8 text-base text-ink/70">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
