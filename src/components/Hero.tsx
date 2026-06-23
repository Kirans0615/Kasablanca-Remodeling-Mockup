import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Star, FileText } from "lucide-react";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { IMAGES } from "../lib/constants";

const VIDEO_URL =
  "https://raw.githubusercontent.com/Kirans0615/Kasablanca-Remodeling-Mockup/main/13004782-hd_1920_1080_30fps.mp4";

export function Hero() {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = (delay: number) =>
    reduced
      ? { duration: 0 }
      : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
      />

      {/* Dark overlay */}
      <div aria-hidden className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left: copy */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20"
          >
            <MapPin size={14} aria-hidden /> Serving Maryland & the DMV Area
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.15)}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white text-balance"
          >
            Transform Your Home.{" "}
            <span className="text-accent-gold">Trust the Experts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.3)}
            className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl"
          >
            From bathroom remodels to landscaping and pressure washing — Kasablanca
            delivers quality craftsmanship you can see.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.45)}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-accent-gold text-charcoal text-sm font-semibold shadow-card"
            >
              Get a Free Quote <ArrowRight size={16} aria-hidden />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border-2 border-white text-white text-sm font-semibold hover:bg-white hover:text-charcoal transition-colors"
            >
              View Our Work
            </motion.a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.6)}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75"
          >
            <li className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-primary" aria-hidden />
              Licensed & Insured
            </li>
            <li className="inline-flex items-center gap-2">
              <Star size={16} className="text-accent-gold fill-accent-gold" aria-hidden />
              5-Star Rated
            </li>
            <li className="inline-flex items-center gap-2">
              <FileText size={16} className="text-green-primary" aria-hidden />
              Free Estimates
            </li>
          </motion.ul>
        </div>

        {/* Right: slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduced ? { duration: 0 } : { duration: 0.75, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeforeAfterSlider
            beforeSrc={IMAGES.bathroomBefore}
            afterSrc={IMAGES.bathroomAfter}
            beforeAlt="Bathroom before remodel"
            afterAlt="Bathroom after Kasablanca remodel"
          />
          <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-white/50 font-semibold">
            Drag to see the difference
          </p>
        </motion.div>
      </div>
    </section>
  );
}
