import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { PILLS, PILLARS } from "@/lib/data";

export const metadata = { title: "My Story | Elijah Adebayo" };


export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <Reveal>
          <h1 className="mb-9 text-[5rem] leading-none md:text-[9rem]">My Story</h1>
        </Reveal>
        <div className="grid items-start gap-8 md:grid-cols-[5fr_6fr] md:gap-20">
          <Reveal>
            <div className="relative flex aspect-square items-end overflow-hidden bg-tint md:sticky md:top-24">
              <div className="absolute inset-x-[12%] bottom-0 top-[18%] bg-orange" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/about.webp" alt="Elijah Adebayo" className="relative block w-full" />
            </div>
          </Reveal>
          <div className="space-y-7">
            <Reveal>
              <p className="font-display text-[1.6rem] uppercase leading-[1.08] md:text-[2.6rem]">
                Hello, I&apos;m Elijah Adebayo a multidisciplinary creative designer and frontend
                developer based in Lagos, Nigeria.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-xl text-ink/70">
                Great digital experiences don’t happen by accident—they are engineered through deliberate visual hierarchy, deep empathy for the user, and meticulous execution.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-xl text-ink/70">
                My foundation is rooted in graphic design, brand strategy, and motion. Along the way, pushing static designs into living digital mediums led me straight into frontend engineering. Today, I work across the entire lifecycle of a project: researching user behavior, establishing distinctive visual tokens, prototyping high-fidelity interactions, and developing responsive web applications.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-xl text-ink/70">
                Across brand identity rollouts, advocacy campaigns, and custom web products, I focus on building things that perform as flawlessly as they look. I believe the best work happens when aesthetic rigor meets rock-solid technical execution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capability pills over a looping, muted video */}
      <section className="relative overflow-hidden text-surface">
        <video src="/service.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-32">
          <Reveal>
            <p className="mb-4 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-surface/70">[Skills and Services]</p>
          </Reveal>
          <ul className="flex flex-wrap gap-2 md:gap-3.5">
            {PILLS.map((p, i) => (
              <Reveal key={p} as="li" delay={i * 0.04}>
                <span className="pill-item block">{p}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <div className="svc-cta mt-10 md:mt-16">
              <Button href="/contact">Get in touch</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-28">
        <Reveal>
          <h2 className="mb-8 text-[2.6rem] md:mb-14 md:text-[6rem]">Four pillars<br />of my works</h2>
        </Reveal>
        <div className="pillar-grid grid grid-cols-2 gap-2 md:gap-5">
          {PILLARS.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.09}>
              <article className="pillar">
                <span className="pn">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
