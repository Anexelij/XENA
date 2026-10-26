import Link from "next/link";

// Angled-edge, uppercase buttons. Styles live in app/globals.css (.btn).
// variant: "dark" (default) | "light" (for dark sections) | "outline"
export default function Button({ href, children, variant = "dark", small = false, className = "", ...props }) {
  const cls = `btn btn-${variant} ${small ? "btn-sm" : ""} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
