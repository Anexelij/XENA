import { SocialIcons, EMAIL, WHATSAPP } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 pt-16 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-display text-3xl uppercase md:text-5xl">Let&apos;s create something memorable.</p>
          <div className="mt-5 flex flex-col gap-2 text-base text-surface/70">
            <a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" className="w-fit transition-colors hover:text-orange">
              {EMAIL}
            </a>
            <a
              href={WHATSAPP.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit transition-colors hover:text-orange"
            >
              WhatsApp {WHATSAPP.label}
            </a>
          </div>
        </div>
        <SocialIcons />
      </div>

      {/* XENA wordmark: spans the footer edge to edge, letters lift on hover */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div
          role="img"
          aria-label="XENA"
          className="flex select-none justify-center gap-[0.04em] font-display font-bold uppercase leading-[0.8] tracking-tighter text-surface opacity-50"
          style={{ fontSize: "min(27vw, 20rem)" }}
        >
          {"XENA".split("").map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block cursor-default transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:-translate-y-3 hover:-rotate-3 hover:text-orange"
            >
              {ch}
            </span>
          ))}
        </div>
      </div>

      <p className="border-t border-surface/10 py-6 text-center text-xs text-surface/50">
        © {new Date().getFullYear()} Elijah Adebayo. All rights reserved.
      </p>
    </footer>
  );
}
