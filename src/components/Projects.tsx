import { motion } from "framer-motion";
import { FadeInView } from "./FadeInView";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { IMAGES } from "../lib/constants";

const PROJECTS = [
  {
    before: IMAGES.bathroomBefore,
    after:  IMAGES.bathroomAfter,
    label:  "Bathroom Renovation — Rockville, MD",
  },
  {
    before: IMAGES.landscapingBefore,
    after:  IMAGES.landscapingAfter,
    label:  "Landscaping & Lawn Design — Bethesda, MD",
  },
  {
    before: IMAGES.pressureWashing,
    after:  IMAGES.sidewalkAfter,
    label:  "Concrete Work & Pressure Washing — Silver Spring, MD",
  },
];

const STATS = [
  { value: "50+",   label: "Projects\nCompleted" },
  { value: "10+",   label: "Years\nExperience" },
  { value: "100%",  label: "Licensed\n& Insured" },
  { value: "Free",  label: "Quotes\nAlways" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-green-muted">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <FadeInView className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
            Recent Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal text-balance leading-tight">
            Our Work Speaks for Itself
          </h2>
          <p className="mt-5 text-lg text-text-body leading-relaxed">
            Drag any slider to see the transformation. Every project below was completed by our
            in-house team.
          </p>
        </FadeInView>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.label}
              variants={{
                hidden:  { opacity: 0, y: 26 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <BeforeAfterSlider
                beforeSrc={p.before}
                afterSrc={p.after}
                label={p.label}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <FadeInView delay={0.15}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white border border-border-subtle px-5 py-5 text-center shadow-card"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-green-dark leading-none">{s.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-text-body/70 font-semibold whitespace-pre-line leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
