"use client";
import { useEffect, useRef, useState } from "react";

// Dot + trailing ring. The ring grows over links and turns into an orange
// "View Project" disc over anything with data-cursor.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [mode, setMode] = useState("idle"); // idle | link | proj
  const [label, setLabel] = useState("");
  const [live, setLive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    let tx = -100, ty = -100, cx = -100, cy = -100, raf;
    const move = (e) => {
      tx = e.clientX; ty = e.clientY;
      setLive(true);
      if (dot.current) dot.current.style.transform = `translate(${tx}px,${ty}px)`;
      const t = e.target instanceof Element ? e.target : e.target.parentElement;
      const p = t?.closest("[data-cursor]");
      const l = t?.closest("a, button, select, input, textarea");
      setMode(p ? "proj" : l ? "link" : "idle");
      if (p) setLabel(p.getAttribute("data-cursor"));
    };
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${cx}px,${cy}px)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    const leave = () => setLive(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!enabled) return null;
  const size = mode === "proj" ? 104 : mode === "link" ? 64 : 38;

  return (
    <>
      <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[90]" style={{ opacity: live ? 1 : 0, transition: "opacity .3s" }}>
        <div
          className={`grid place-items-center rounded-full border text-center text-[0.85rem] font-bold uppercase leading-tight tracking-wider text-ink transition-all duration-300 ${
            mode === "proj" ? "border-orange bg-orange" : "cur-ring border-white"
          }`}
          style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        >
          {mode === "proj" ? label : ""}
        </div>
      </div>
      <div
        ref={dot}
        aria-hidden
        className="cur-ring pointer-events-none fixed left-0 top-0 z-[90] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white"
        style={{ opacity: live && mode !== "proj" ? 1 : 0 }}
      />
    </>
  );
}
