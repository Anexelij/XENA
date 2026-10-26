"use client";
import { Children, useEffect, useRef } from "react";

/*
  Stacking section transitions.
  Each child is pinned (sticky) once it has fully scrolled into view; the next
  section then slides over it with rounded top corners and a shadow, while the
  covered section shrinks slightly and dims. Every child needs its own opaque
  background so the one underneath is hidden as it is covered.
*/
export default function StackSections({ children, radius = 28 }) {
  const items = Children.toArray(children);
  const refs = useRef([]);
  // A child with data-free scrolls normally (no pinning): used for the tagline bar and testimonials.
  const free = items.map((c) => !!c.props?.["data-free"]);

  useEffect(() => {
    const els = refs.current.filter(Boolean);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const vh = window.innerHeight;
      els.forEach((el, i) => {
        if (i === els.length - 1 || free[i]) return;
        // Tall sections pin when their bottom edge reaches the bottom of the viewport.
        el.style.top = Math.min(0, vh - el.offsetHeight) + "px";
        if (reduce) return;
        const covered = Math.min(1, Math.max(0, 1 - els[i + 1].getBoundingClientRect().top / vh));
        const inner = el.firstElementChild;
        inner.style.transform = `scale(${1 - 0.06 * covered})`;
        inner.style.filter = `brightness(${1 - 0.45 * covered})`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    els.forEach((el) => ro.observe(el));
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div>
      {items.map((child, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className={i < items.length - 1 && !free[i] ? "sticky" : "relative"}
          style={{
            zIndex: i + 1,
            overflow: "hidden",
            borderRadius: i > 0 && !items[i].props?.["data-flat"] ? `${radius}px ${radius}px 0 0` : 0,
            boxShadow: i > 0 && !items[i].props?.["data-flat"] ? "0 -24px 60px rgba(39,39,43,0.22)" : "none",
          }}
        >
          <div style={{ transformOrigin: "50% 100%", willChange: "transform, filter" }}>{child}</div>
        </div>
      ))}
    </div>
  );
}
