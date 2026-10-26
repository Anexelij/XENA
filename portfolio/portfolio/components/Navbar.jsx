"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Roll from "./Roll";
import { SocialIcons, EMAIL } from "./SocialIcons";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Navbar: menu icon on the left (100px from the edge on desktop), logo centred.
// The icon opens a full-screen menu that wipes down from the top.
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-surface">
        <nav className="grid grid-cols-[1fr_auto_1fr] items-center py-4 pl-6 pr-6 md:pl-10 md:pr-[6.25rem]">
          <div />

          <Link
            href="/"
            aria-label="Xena, home"
            className="glass px-6 py-3 font-display text-lg font-bold uppercase tracking-[0.12em]"
          >
            <Roll text="XENA" />
          </Link>

          <div className="flex justify-end">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((o) => !o)}
              className="glass group flex h-11 w-11 flex-col items-center justify-center gap-[7px]"
            >
              <span
                className={`block h-[2px] bg-surface transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                  open ? "w-7 translate-y-[4.5px] rotate-45" : "w-7 group-hover:w-5"
                }`}
              />
              <span
                className={`block h-[2px] bg-surface transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
                  open ? "w-7 -translate-y-[4.5px] -rotate-45" : "w-4 group-hover:w-7"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="menu-bg fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 text-surface md:pl-[6.25rem] md:pr-10"
          >
            <div className="grid min-h-0 flex-1 gap-8 md:grid-cols-[1.2fr_1fr] md:gap-20">
            <ul>
              {LINKS.map((l, i) => (
                <li key={l.href} className="overflow-hidden border-b border-surface/15">
                  <motion.div
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "105%" }}
                    transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block py-4 font-display text-5xl uppercase transition-colors hover:text-orange md:text-7xl ${
                        pathname === l.href ? "text-orange" : ""
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="menu-img hidden max-h-[70vh] overflow-hidden bg-black md:block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/menu.webp" alt="" className="h-full w-full object-cover" />
            </motion.div>
            </div>
            <ThemeToggle />
            <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-surface/60">
              <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange">
                {EMAIL}
              </a>
              <SocialIcons />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
