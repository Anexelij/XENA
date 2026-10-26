"use client";
import { useEffect, useState } from "react";

// Toggles the alternate colour variant. The choice is stored in localStorage and applied
// before first paint by the inline script in app/layout.jsx.
export default function ThemeToggle() {
  const [alt, setAlt] = useState(false);

  useEffect(() => {
    setAlt(document.documentElement.getAttribute("data-theme") === "alt");
  }, []);

  function toggle() {
    const next = !alt;
    setAlt(next);
    if (next) document.documentElement.setAttribute("data-theme", "alt");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("xena-theme", next ? "alt" : "default");
    } catch {}
  }

  return (
    <div className="theme-row">
      <span>Colour variant</span>
      <button type="button" role="switch" aria-checked={alt} aria-label="Toggle alternate colour variant" className="tswitch" onClick={toggle}>
        <b>{alt ? "Indigo" : "Orange"}</b>
        <i />
      </button>
    </div>
  );
}
