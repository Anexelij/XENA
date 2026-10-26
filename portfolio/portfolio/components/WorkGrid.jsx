"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const TABS = ["Selection", "All", ...CATEGORIES.slice(1)];

// Default "Selection": one standout project per expertise (real image preferred).
function selection() {
  return CATEGORIES.slice(1)
    .map((c) => {
      const l = PROJECTS.filter((p) => p.category === c);
      return l.find((p) => p.image) || l[0];
    })
    .filter(Boolean);
}

export default function WorkGrid() {
  const [active, setActive] = useState("Selection");
  const [openSlug, setOpenSlug] = useState(null);
  const current = PROJECTS.find((p) => p.slug === openSlug);
  const items = active === "Selection" ? selection() : active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  // Arriving from a featured card: /work?p=slug opens that project's preview and scrolls to it.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("p");
    if (p) {
      setActive("All");
      setOpenSlug(p);
      setTimeout(() => document.getElementById(`proj-${p}`)?.scrollIntoView({ block: "center" }), 250);
    }
  }, []);
  useEffect(() => {
    document.body.style.overflow = openSlug ? "hidden" : "";
    const esc = (e) => e.key === "Escape" && setOpenSlug(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [openSlug]);

  return (
    <>
      {/* Category filter: Selection (default), All, then each expertise */}
      <div className="sticky top-[68px] z-40 -mx-6 bg-surface/90 px-6 py-4 backdrop-blur-md md:-mx-10 md:px-10">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {TABS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`btn btn-sm btn-outline whitespace-nowrap ${active === c ? "btn-active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Picture grid: staggered rise-in; click a project for its details */}
      <div key={active} className="wk-grid mt-8 grid grid-cols-4 gap-x-5 gap-y-10">
        {items.map((p, i) => (
          <div key={p.slug} id={`proj-${p.slug}`}>
            <ProjectCard project={p} square onClick={p.url ? undefined : () => setOpenSlug(p.slug)} delay={i * 0.07} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-6"
            onClick={() => setOpenSlug(null)}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <button className="btn btn-sm btn-light absolute right-5 top-5" onClick={() => setOpenSlug(null)}>
              Close
            </button>
            <div className="grid max-h-full max-w-[960px] items-end gap-7 text-surface md:grid-cols-[auto_260px]" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/5] max-h-[calc(100vh-48px)] overflow-hidden bg-ink">
                {current.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={current.image} alt={current.title} className="h-full w-full object-contain" />
                ) : (
                  <div className="absolute inset-0" style={{ background: `radial-gradient(120% 90% at 20% 10%, ${current.tone}, #27272b 140%)` }} />
                )}
              </div>
              <div>
                <h3 className="mb-2 text-3xl">{current.title}</h3>
                <p className="mb-4 uppercase tracking-widest text-surface/70">{current.category} · {current.year}</p>
                <p className="mb-6 text-base text-surface/80">{current.description}</p>
                <a href="/contact" className="btn btn-sm btn-light">Start a similar project</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
