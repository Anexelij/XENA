"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import Button from "./Button";
import { EXPERTISE, PROJECTS } from "@/lib/data";

const bySlug = (s) => PROJECTS.find((p) => p.slug === s);

// Pick a representative work for each category (real image first, else placeholder tone).
function pick(cat) {
  return [...PROJECTS.filter((p) => p.category === cat)].sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0))[0];
}

export default function Expertise() {
  const prev = useRef(null);
  const [item, setItem] = useState(null);

  const move = (e) => {
    if (prev.current) {
      prev.current.style.left = e.clientX + 24 + "px";
      prev.current.style.top = e.clientY - 110 + "px";
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-28">
      <Reveal>
        <p className="mb-5 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-ink/70">[Expertise and Services]</p>
      </Reveal>
      <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-20">
        <ul className="border-t border-ink/15" onMouseMove={move} onMouseLeave={() => setItem(null)}>
          {EXPERTISE.map(([name, desc, cat, prevSlug]) => (
            <Reveal key={name}>
              <li
                onMouseEnter={() => setItem((prevSlug && bySlug(prevSlug)) || pick(cat) || null)}
                className="border-b border-ink/15 py-6 transition-all duration-500 hover:pl-4 hover:text-orange"
              >
                <h3 className="text-[1.8rem] md:text-[3.4rem]">{name}</h3>
                <p className="mt-2 max-w-md text-lg text-ink/70">{desc}</p>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <aside className="md:sticky md:top-24">
            <h3 className="mb-3 text-[1.8rem] md:text-[2.6rem]">The Hybrid <span className="text-orange">Architect</span></h3>
            <p className="text-xl text-ink/70">
              Blending high-fidelity visual aesthetics with clean front-end architecture, I build
              immersive, user-centered digital experiences enhanced by generative AI.
            </p>
            <video src="/expertise.mp4" poster="/expertise-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Showreel" className="my-6 aspect-[4/5] w-full bg-black object-cover" />
            <Button href="/about">Read my story</Button>
          </aside>
        </Reveal>
      </div>

      {/* hover preview, follows the cursor (desktop only) */}
      <div
        ref={prev}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[80] hidden aspect-[4/5] w-[170px] overflow-hidden bg-ink transition-[opacity,transform] duration-300 md:block ${
          item ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {item?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : item ? (
          <div className="absolute inset-0" style={{ background: `radial-gradient(120% 90% at 20% 10%, ${item.tone}, #27272b 140%)` }} />
        ) : null}
      </div>
    </section>
  );
}
