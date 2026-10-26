// Letter-by-letter "roll" on hover: each letter slides up and is replaced by an
// Indigo copy, staggered left to right. Wrap in a link or any element; the group
// hover is handled with CSS only, so this stays a server component.
export default function Roll({ text, className = "" }) {
  return (
    <span aria-label={text} className={`group inline-flex ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="relative inline-block h-[1em] overflow-hidden leading-none"
        >
          <span
            className="block transition-transform duration-[550ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 45}ms` }}
          >
            {ch}
          </span>
          <span
            className="absolute left-0 top-full block text-orange transition-transform duration-[550ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 45}ms` }}
          >
            {ch}
          </span>
        </span>
      ))}
    </span>
  );
}
