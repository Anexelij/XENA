import Reveal from "./Reveal";
import { CLIENT_LOGOS } from "@/lib/data";

// Static grid of client logos, three per row, all the same size. Hover turns a logo white.
export default function Clients() {
  return (
    <section className="text-surface mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-28">
      <Reveal>
        <h2 className="mb-8 text-[2.6rem] md:mb-14 md:text-[6rem]">Clients</h2>
      </Reveal>
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="tWhite" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" /></filter>
        <filter id="tAccent" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .482  0 0 0 0 .361  0 0 0 0 1  0 0 0 1 0" /></filter>
        <filter id="tOrange" colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 .416  0 0 0 0 .169  0 0 0 1 0" /></filter>
      </svg>
      <div className="client-grid grid grid-cols-3 gap-3 md:gap-6">
        {CLIENT_LOGOS.map((n, i) => (
          <Reveal key={n} delay={i * 0.07}>
            <div className="client-cell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/logos/${n}.png`} alt={`Client logo ${i + 1}`} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
