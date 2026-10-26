"use client";
import { useEffect, useRef } from "react";

// Giant name set as one row of letters, sized to span the container width
// (capped by viewport height so it never swallows the hero).
export default function NameFit({ text = "ELIJAH" }) {
  const box = useRef(null);
  const row = useRef(null);

  useEffect(() => {
    const fit = () => {
      const b = box.current, r = row.current;
      if (!b || !r) return;
      const cs = getComputedStyle(b);
      const cw = b.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      r.style.justifyContent = "flex-start";
      r.style.width = "max-content";
      r.style.fontSize = "100px";
      const nw = r.getBoundingClientRect().width;
      r.style.width = "";
      r.style.justifyContent = "";
      r.style.fontSize = Math.max(40, Math.min((100 * cw) / nw, (window.innerHeight * 0.5) / 0.86)) + "px";
    };
    fit();
    window.addEventListener("resize", fit);
    document.fonts?.ready.then(fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div ref={box} className="w-full px-3 pb-3.5 pt-2 md:px-10 md:pb-5">
      <div
        ref={row}
        role="img"
        aria-label={text}
        className="flex select-none justify-between whitespace-nowrap font-display uppercase leading-[0.86] text-surface"
        style={{ fontSize: "22vw" }}
      >
        {text.split("").map((c, i) => (
          <span key={i} aria-hidden="true">{c}</span>
        ))}
      </div>
    </div>
  );
}
