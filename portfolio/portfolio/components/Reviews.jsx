"use client";
import { useEffect, useRef } from "react";

// PLACEHOLDER testimonials: replace with real client quotes before launch.
const REVIEWS = [
  ["Total game changer.", "Elijah took a loose idea and turned it into a brand we are proud to show off. Fast, calm and ridiculously talented.", "Amaka N.", "Founder, Studio Placeholder"],
  ["Felt like a teammate.", "From the first call to launch he cared about the result as much as we did. The site and the visuals just work together.", "Tolu A.", "Director, Company Name"],
  ["Sharp eye, clean code.", "Rare to find someone who designs beautifully and also ships it properly. Zero handoff headaches.", "David O.", "Co-Founder, Brand Name"],
  ["Our socials finally pop.", "The carousels and flyers lifted our engagement within weeks. We now send him every campaign.", "Ife K.", "Marketing Lead, Business Name"],
  ["Would hire again, twice.", "Clear communication, quick revisions and a result that looked even better than the brief.", "Samuel B.", "Owner, Company Name"],
];

// The row of cards slides sideways as the section scrolls through the screen;
// cards tilt and settle as they pass the centre.
export default function Reviews() {
  const sec = useRef(null);
  const sc = useRef(null);

  useEffect(() => {
    const S = { last: 0, manual: false, t: null, offset: 0, drag: false };
    const el = sc.current;
    const metrics = () => {
      const r = sec.current.getBoundingClientRect(), vh = window.innerHeight;
      return { p: Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height))), max: Math.max(0, el.scrollWidth - el.clientWidth) };
    };
    const tilt = () => {
      const mid = window.innerWidth / 2;
      el.querySelectorAll(".rcard").forEach((c, n) => {
        const b = c.getBoundingClientRect();
        const d = Math.max(-1, Math.min(1, (b.left + b.width / 2 - mid) / window.innerWidth));
        c.style.transform = `translateY(${(n % 2 ? 38 : -10) + Math.abs(d) * 34}px) rotate(${d * 4}deg)`;
      });
    };
    // The row follows page scroll until the visitor scrolls/drags it by hand; it then resumes from where they left it.
    const tick = () => {
      const m = metrics();
      if (!S.manual) {
        S.last = Math.max(0, Math.min(m.max, m.max * m.p + S.offset));
        el.scrollLeft = S.last;
      }
      tilt();
    };
    const hand = () => {
      S.manual = true;
      clearTimeout(S.t);
      S.t = setTimeout(() => {
        const m = metrics();
        S.offset = el.scrollLeft - m.max * m.p;
        S.manual = false;
      }, 1400);
    };
    const onScroll = () => { if (Math.abs(el.scrollLeft - S.last) > 2) hand(); tilt(); };
    const onWheel = (e) => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) hand(); };
    let sx = 0, sl = 0;
    const down = (e) => { if (e.pointerType !== "mouse") return; S.drag = true; sx = e.clientX; sl = el.scrollLeft; el.classList.add("drag"); };
    const move = (e) => { if (!S.drag) return; hand(); el.scrollLeft = sl - (e.clientX - sx); };
    const up = () => { S.drag = false; el.classList.remove("drag"); };

    tick();
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick);
    return () => {
      clearTimeout(S.t);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, []);

  return (
    <section ref={sec} className="overflow-hidden bg-tint pt-16 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="text-[3rem] leading-[0.92] md:text-[7.5rem]">How people<br />view us</h2>
      </div>
      <div ref={sc} className="rscroll">
        <div className="flex w-max gap-4 px-6 md:gap-7 md:px-20">
          {REVIEWS.map(([title, body, name, role], i) => (
            <article key={i} className="rcard">
              <div>
                <span className="av">{name[0]}</span>
                <h3 className="mb-2.5 mt-1.5 text-[1.6rem] md:text-4xl">{title}</h3>
                <p className="text-[1.1rem] opacity-80">{body}</p>
              </div>
              <footer className="flex flex-col gap-0.5 border-t border-current pt-3.5 text-[0.95rem]">
                <b className="font-bold uppercase tracking-[0.08em]">{name}</b>
                <span className="opacity-70">{role}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
