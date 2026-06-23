import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { FIRM, IMAGES, NAV_LINKS } from "../lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // active section detection
      let current = "#hero";
      for (const l of NAV_LINKS) {
        const id = l.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 100) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-card border-b border-border-subtle"
          : "bg-black/40 backdrop-blur-sm border-b border-white/10",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 shrink-0" aria-label="Kasablanca home">
          <img src={IMAGES.logo} alt="" className="h-10 lg:h-12 w-auto rounded-md object-contain" />
          <span className={`font-display text-base lg:text-lg leading-tight transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}>
            <span className="block font-bold">Kasablanca</span>
            <span className={`block text-[10px] uppercase tracking-[0.16em] font-semibold transition-colors duration-300 ${scrolled ? "text-green-dark" : "text-white/70"}`}>
              Remodeling & Landscaping
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors duration-300 group ${scrolled ? "text-charcoal/80 hover:text-green-dark" : "text-white/90 hover:text-white"}`}
            >
              {l.label}
              <span
                className={[
                  "absolute -bottom-1.5 left-0 right-0 mx-auto h-[2px] origin-center transition-transform duration-300",
                  scrolled ? "bg-green-primary" : "bg-white",
                  active === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                ].join(" ")}
              />
            </a>
          ))}
        </nav>

        {/* Right side: phone + CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${FIRM.phoneRaw}`}
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-charcoal hover:text-green-dark" : "text-white/90 hover:text-white"}`}
          >
            <Phone size={15} className={scrolled ? "text-green-primary" : "text-white/70"} aria-hidden />
            {FIRM.phone}
          </a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-5 rounded-full bg-accent-gold text-charcoal text-sm font-semibold shadow-card"
          >
            Free Quote
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 -mr-2 transition-colors duration-300 ${scrolled ? "text-charcoal" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-warm-white border-t border-border-subtle shadow-card"
          >
            <nav className="px-5 py-6 flex flex-col gap-1" aria-label="Mobile primary">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.05 }}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-charcoal hover:bg-green-muted hover:text-green-dark"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={`tel:${FIRM.phoneRaw}`}
                className="mt-3 px-3 py-3 rounded-lg inline-flex items-center gap-2 text-sm font-medium text-green-dark"
              >
                <Phone size={15} aria-hidden /> {FIRM.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center h-12 px-6 rounded-full bg-accent-gold text-charcoal text-sm font-semibold"
              >
                Free Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
