"use client";
import { useEffect, useState } from "react";

// Intro loader: the XENA logo rises in letter by letter, a counter runs to 100%,
// then the letters lift out and the screen wipes up to reveal the page.
export default function Loader() {
  const [phase, setPhase] = useState("in"); // in | out | gone
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      return;
    }
    document.body.style.overflow = "hidden";
    const D = 2100, t0 = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / D);
      setPct(Math.round(p * p * (3 - 2 * p) * 100));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const a = setTimeout(() => setPhase("out"), D + 250);
    const b = setTimeout(() => { setPhase("gone"); document.body.style.overflow = ""; }, D + 1500);
    return () => { cancelAnimationFrame(raf); clearTimeout(a); clearTimeout(b); document.body.style.overflow = ""; };
  }, []);

  if (phase === "gone") return null;
  return (
    <div className={`loader ${phase === "out" ? "out" : ""}`} aria-hidden="true">
      <div className="loader-word">
        {"XENA".split("").map((c, i) => <span key={i} style={{ "--i": i }}>{c}</span>)}
      </div>
      <div className="loader-bar"><i /><b>{pct}%</b></div>
    </div>
  );
}
