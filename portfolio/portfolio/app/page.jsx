import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import Faq from "@/components/Faq";
import Button from "@/components/Button";
import Expertise from "@/components/Expertise";
import Reviews from "@/components/Reviews";
import Clients from "@/components/Clients";
import Link from "next/link";
import StackSections from "@/components/StackSections";
import { PROJECTS, FEATURED } from "@/lib/data";

export default function Home() {
  const featured = FEATURED.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean);

  // Each block below stacks over the previous one on scroll (see StackSections).
  return (
    <StackSections>
      <div className="bg-ink">
        <Hero />
      </div>

      <div className="bg-surface">
        <section className="mx-auto grid max-w-7xl items-center gap-4 px-6 py-20 md:grid-cols-[1.25fr_1fr] md:gap-20 md:px-10 md:py-32">
          <div>
            <Reveal>
              <p className="mb-5 text-[0.95rem] font-semibold uppercase tracking-[0.18em] text-ink/70">[Introduction]</p>
              <p className="max-w-[18ch] font-display text-[2.2rem] uppercase leading-[1.02] md:text-7xl">
                A bridge between <span className="text-orange">emotion</span> and{" "}
                <span className="text-orange">function</span>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-xl text-ink/70">
                I design the look and write the code. Motion, video, brand visuals and full websites,
                all shaped by one point of view so the idea arrives intact, from first sketch to
                shipped product.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden bg-tint">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/intro.webp" alt="A hand moving a chess piece" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
            </div>
          </Reveal>
        </section>
      </div>

      <div className="bg-tint">
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-28">
          <Reveal>
            <div className="mb-8 md:mb-14">
              <h2 className="text-[3rem] leading-[0.92] md:text-[7.5rem]">
                Featured<br />Projects
              </h2>
            </div>
          </Reveal>
          <div className="mx-auto grid max-w-[880px] grid-cols-3 gap-2 md:gap-5">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                {p.url ? (
                  <ProjectCard project={p} square />
                ) : (
                  <Link href={`/work?p=${p.slug}`} className="block">
                    <ProjectCard project={p} square />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex justify-center md:mt-16">
              <Button href="/work">View all work</Button>
            </div>
          </Reveal>
        </section>
      </div>

      <div className="bg-surface">
        <Expertise />
      </div>

      <div className="bg-ink">
        <Clients />
      </div>

      <div data-free>
        <Reviews />
      </div>

      <section className="relative overflow-hidden bg-ink text-surface">
        {/* muted looping video as the section background */}
        <video src="/good.mp4" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
          <Reveal>
            <h2 className="mb-10 text-[2.6rem] md:mb-14 md:text-[5rem]">Good to know</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="[&_li]:border-surface/20 [&_ul]:divide-surface/20 [&_ul]:border-surface/20 [&_p]:text-surface/70">
              <Faq />
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-surface">
        <section className="mx-auto max-w-7xl px-6 py-20 text-center md:px-10 md:py-32">
          <Reveal>
            <h2 className="text-4xl md:text-8xl">Have a project in mind?</h2>
            <div className="mt-10 flex justify-center">
              <Button href="/contact">Let&apos;s work together</Button>
            </div>
          </Reveal>
        </section>
      </div>
    </StackSections>
  );
}
