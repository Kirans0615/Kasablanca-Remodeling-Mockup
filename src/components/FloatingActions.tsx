import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Phone } from "lucide-react";
import { FIRM } from "../lib/constants";

/** Floating call button (mobile) + back-to-top (desktop) — both bottom-right. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating call (mobile only) */}
      <a
        href={`tel:${FIRM.phoneRaw}`}
        aria-label={`Call ${FIRM.name}`}
        className="md:hidden fixed bottom-5 right-5 z-40 h-13 w-13 rounded-full bg-accent-gold text-charcoal shadow-card flex items-center justify-center hover:brightness-105"
      >
        <Phone size={22} aria-hidden />
      </a>

      {/* Back to top (desktop only) */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.25 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="hidden md:inline-flex fixed bottom-6 right-6 z-40 h-11 w-11 items-center justify-center rounded-full bg-white text-green-dark border border-border-subtle shadow-card hover:bg-green-muted"
          >
            <ArrowUp size={18} aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
