import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInView } from "./FadeInView";
import { SERVICE_AREAS } from "../lib/constants";

export function ServiceArea() {
  return (
    <section className="py-24 md:py-32 bg-green-muted">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <FadeInView className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
            Where We Work
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal text-balance leading-tight inline-flex items-center gap-3">
            <MapPin size={28} className="text-green-primary" aria-hidden />
            Proudly Serving the Maryland Area
          </h2>
        </FadeInView>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
          }}
          className="flex flex-wrap justify-center gap-2.5"
        >
          {SERVICE_AREAS.map((city) => (
            <motion.li
              key={city}
              variants={{
                hidden:  { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full border border-green-primary/50 text-green-dark text-sm font-medium bg-white shadow-sm hover:bg-green-primary hover:text-white hover:border-green-primary hover:shadow-green-glow transition-all duration-200 cursor-default">
                <MapPin size={12} className="mr-1 text-green-primary/70" aria-hidden />
                {city}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <FadeInView delay={0.2}>
          <p className="text-center text-text-body mt-10 italic">
            Not sure if we serve your area? Call us — we likely do.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}
