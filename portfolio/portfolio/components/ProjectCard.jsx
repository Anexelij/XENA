"use client";
import { motion } from "framer-motion";

// Placeholder thumbnail. Swap the coloured block for <Image> or <video> once real media exists.
export default function ProjectCard({ project, className = "", square = false, onClick, delay = 0 }) {
  const Tag = project.url ? motion.a : motion.article;
  return (
    <Tag
      {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${project.url ? "block" : ""} ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      <div
        data-cursor="View Project"
        className="relative overflow-hidden max-md:!aspect-[4/5]"
        style={{ aspectRatio: square ? "4/5" : project.ratio }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            style={{
              background: `radial-gradient(120% 90% at 20% 10%, ${project.tone}, #27272b 140%)`,
            }}
          />
        )}
        <div className="wk-over absolute inset-0 flex items-end bg-orange/0 p-4 transition-colors duration-500 group-hover:bg-ink/45">
          <span className="translate-y-3 font-display text-lg uppercase leading-tight text-surface max-md:hidden opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {project.title}
          </span>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-3 border-t border-ink/15 pt-3">
        <h3 className="font-body text-[0.72rem] font-semibold uppercase leading-tight tracking-wide md:text-base md:tracking-[0.06em]">
          {project.title}
        </h3>
        <span className="wk-meta hidden text-[0.95rem] uppercase tracking-[0.08em] text-ink/60 md:inline">
          {project.category} · {project.year}{project.url ? " · Visit site ↗" : ""}
        </span>
      </div>
    </Tag>
  );
}
