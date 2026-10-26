"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Re-mounts on route change (keyed by pathname) to play a soft fade + upward translate.
export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
