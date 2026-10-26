"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const ease = [0.22, 1, 0.36, 1];

// Playful floating shapes around the headline (positions in %, size in px, tilt in deg).
const SHAPES = [
  ["spark", "top:17%;left:11%", 84, 14, "var(--orange)"],
  ["ring", "top:20%;right:13%", 96, -22, "var(--surface)"],
  ["squig", "bottom:26%;right:9%", 150, 10, "var(--orange-light)"],
  ["plus", "top:11%;left:46%", 44, -8, "var(--surface)"],
  ["half", "bottom:24%;left:8%", 110, -14, "var(--indigo)"],
  ["ast", "bottom:15%;right:27%", 70, 20, "var(--orange)"],
  ["tri", "top:34%;left:27%", 62, -12, "var(--orange)"],
  ["dots", "top:30%;right:30%", 60, 0, "var(--surface)"],
  ["spark", "bottom:34%;left:20%", 40, 30, "var(--surface)"],
];

function Shape({ kind, c }) {
  switch (kind) {
    case "spark": return <svg viewBox="0 0 100 100"><path d="M50 2C54 34 66 46 98 50 66 54 54 66 50 98 46 66 34 54 2 50 34 46 46 34 50 2Z" style={{ fill: c }} /></svg>;
    case "ring": return <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" style={{ stroke: c }} strokeWidth="7" /></svg>;
    case "squig": return <svg viewBox="0 0 160 60"><path d="M4 30Q24-4 44 30T84 30T124 30T156 30" fill="none" style={{ stroke: c }} strokeWidth="8" strokeLinecap="round" /></svg>;
    case "plus": return <svg viewBox="0 0 100 100"><path d="M42 8h16v34h34v16H58v34H42V58H8V42h34z" style={{ fill: c }} /></svg>;
    case "half": return <svg viewBox="0 0 100 60"><path d="M0 60a50 50 0 0 1 100 0z" style={{ fill: c }} /></svg>;
    case "ast": return <svg viewBox="0 0 100 100"><g style={{ stroke: c }} strokeWidth="9" strokeLinecap="round"><path d="M50 8v84M8 50h84M20 20l60 60M80 20L20 80" /></g></svg>;
    case "tri": return <svg viewBox="0 0 100 90"><path d="M50 6L94 84H6z" fill="none" style={{ stroke: c }} strokeWidth="8" strokeLinejoin="round" /></svg>;
    default: return <svg viewBox="0 0 80 80"><g style={{ fill: c }}>{[10, 40, 70].flatMap((x) => [10, 40, 70].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" />))}</g></svg>;
  }
}

const styleOf = (str) => Object.fromEntries(str.split(";").map((p) => p.split(":")));

// Hero: full-bleed looping video, "DESIGN DREAMS" centred with floating shapes,
// and the "See my works" button 50px below the headline.
export default function Hero() {
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v && window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();

    // Fit the headline on one line, whatever font is loaded.
    const fit = () => {
      const t = titleRef.current;
      if (!t) return;
      t.style.fontSize = "100px";
      t.style.width = "max-content";
      const w = t.getBoundingClientRect().width;
      const target = window.innerWidth * (window.innerWidth < 860 ? 0.78 : 0.72);
      t.style.fontSize = Math.min((100 * target) / w, window.innerWidth < 860 ? 190 : 230) + "px";
    };
    fit();
    window.addEventListener("resize", fit);
    document.fonts?.ready.then(fit);

    // Gentle mouse parallax for the shapes.
    const move = (e) => {
      const s = sectionRef.current;
      if (!s) return;
      s.style.setProperty("--mx", (e.clientX / window.innerWidth - 0.5).toFixed(3));
      s.style.setProperty("--my", (e.clientY / window.innerHeight - 0.5).toFixed(3));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("resize", fit);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-sec relative flex min-h-svh items-center justify-center overflow-hidden bg-ink text-surface">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/10 to-ink/85" />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {SHAPES.map(([kind, pos, size, rot, color], i) => (
          <span key={i} className="shape" data-d={(i % 3) + 1} style={{ ...styleOf(pos), width: size }}>
            <span className="shape-in" style={{ "--r": `${rot}deg`, animationDelay: `${(i * 0.5).toFixed(1)}s` }}>
              <Shape kind={kind} c={color} />
            </span>
          </span>
        ))}
      </div>

      <div className="hero-c relative z-[3] flex flex-col items-center px-4 text-center">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="whitespace-nowrap leading-[0.95] text-surface"
          style={{ fontSize: "12.5vw" }}
        >
          <span className="dd-w">Design</span> <span className="dd-w">Dreams</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9, ease }}
          className="hero-btn mt-[50px]"
        >
          <Button href="/work" variant="indigo">See my works</Button>
        </motion.div>
      </div>
    </section>
  );
}
