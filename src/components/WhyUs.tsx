import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IMAGES } from "../lib/constants";

const FEATURES = [
  "Licensed, bonded, and fully insured in Maryland",
  "Transparent pricing — no hidden fees or surprises",
  "On-time, clean, and respectful of your home",
  "We serve the full DMV area: MD, DC, and Northern VA",
];

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1400, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(() => {
    const u = rounded.on("change", setVal);
    return () => u();
  }, [rounded]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function WhyUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-card aspect-[4/5] lg:aspect-[4/5]"
        >
          <img
            src={IMAGES.bathroomAfter2}
            alt="A finished Kasablanca bathroom remodel"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-green-dark/85 to-transparent"
          />
          {/* Floating rating badge */}
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-full shadow-card">
            <Star size={14} className="text-accent-gold fill-accent-gold" aria-hidden />
            <span className="text-xs font-semibold text-charcoal">5.0 Rating on Google</span>
          </div>
          {/* Counter pair */}
          <div className="absolute bottom-5 left-5 right-5 flex gap-3">
            <div className="flex-1 rounded-xl bg-white/95 backdrop-blur px-4 py-3 text-center">
              <p className="font-display text-3xl font-bold text-green-dark leading-none">
                <CountUp to={50} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-text-body/80 mt-1">
                Projects
              </p>
            </div>
            <div className="flex-1 rounded-xl bg-white/95 backdrop-blur px-4 py-3 text-center">
              <p className="font-display text-3xl font-bold text-green-dark leading-none">
                <CountUp to={10} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-text-body/80 mt-1">
                Years
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: copy */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
            Why Kasablanca?
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal leading-tight text-balance">
            Quality You Can See.{" "}
            <span className="text-green-dark">Service You Can Trust.</span>
          </h2>

          <ul className="mt-9 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-xl bg-white border border-border-subtle px-4 py-3.5 shadow-card">
                <CheckCircle2
                  size={20}
                  className="text-green-primary shrink-0"
                  aria-hidden
                />
                <span className="text-text-body text-sm leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-green-primary text-white text-sm font-semibold hover:bg-green-dark transition-colors shadow-card"
          >
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
