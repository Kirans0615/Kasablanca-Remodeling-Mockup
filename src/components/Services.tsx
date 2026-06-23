import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeInView } from "./FadeInView";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { IMAGES, SERVICES } from "../lib/constants";

const MOSAIC = [
  { src: IMAGES.bathroomAfter,    alt: "Bathroom remodel",      label: "Bathroom Remodeling" },
  { src: IMAGES.landscapingAfter, alt: "Landscaping design",    label: "Landscaping" },
  { src: IMAGES.pressureWashing,  alt: "Pressure washing work", label: "Pressure Washing" },
  { src: IMAGES.sidewalkAfter,    alt: "Concrete & sidewalk",   label: "Concrete & Sidewalks" },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white">

      {/* Left vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 lg:w-56 bg-gradient-to-r from-black/[0.07] to-transparent z-10" />
      {/* Right vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 lg:w-56 bg-gradient-to-l from-black/[0.07] to-transparent z-10" />

      {/* ── Section header + service cards ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 lg:px-8 pt-24 md:pt-32">
        <FadeInView className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal text-balance leading-tight">
            What We Do
          </h2>
          <p className="mt-5 text-lg text-text-body leading-relaxed">
            One licensed crew across every part of the project — interior, exterior, big and small.
            Honest pricing, real craftsmanship, no hand-offs to subs you've never met.
          </p>
        </FadeInView>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={{
                  hidden:  { opacity: 0, y: 26 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(76,175,42,0.18)" }}
                className="p-7 rounded-2xl bg-white border border-border-subtle shadow-card transition-shadow group cursor-default"
              >
                <div className="h-12 w-12 rounded-xl bg-green-muted text-green-dark flex items-center justify-center mb-5 group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={26} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">
                  {s.title}
                </h3>
                <p className="text-text-body leading-relaxed mb-5">{s.body}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-dark hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight size={14} aria-hidden />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* ── 3D scroll-animation project mosaic (below the cards) ── */}
      <div className="relative z-20">
        <ContainerScroll
          titleComponent={
            <div className="mb-2">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
                Our Work
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-[1.05] tracking-tight text-balance">
                See the Difference
              </h2>
              <p className="mt-5 mb-16 md:mb-24 text-lg text-text-body leading-relaxed max-w-xl mx-auto">
                Every project below was completed by our in-house team — no hand-offs, no shortcuts.
              </p>
            </div>
          }
        >
          <div className="grid grid-cols-2 gap-1 h-full p-1">
            {MOSAIC.map(({ src, alt, label }) => (
              <div key={label} className="relative overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 py-2.5">
                  <p className="text-white text-xs font-semibold tracking-wide">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </div>

    </section>
  );
}
