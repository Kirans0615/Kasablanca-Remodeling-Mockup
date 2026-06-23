import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { FadeInView } from "./FadeInView";
import { TESTIMONIALS } from "../lib/constants";

const AUTOPLAY_MS = 3000;

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = TESTIMONIALS.length;

  const goTo = useCallback(
    (n: number) => setIdx(((n % count) + count) % count),
    [count]
  );
  const next = useCallback(() => setIdx((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => next(), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const t = TESTIMONIALS[idx];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-charcoal text-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-green-primary/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-accent-gold/8 blur-3xl" />
      <div className="relative z-10 max-w-5xl mx-auto px-5 lg:px-8">
        <FadeInView className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-accent-gold mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-balance leading-tight">
            What Our Clients Say
          </h2>
        </FadeInView>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative min-h-[320px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center max-w-3xl mx-auto px-4"
              >
                <Quote
                  size={32}
                  className="mx-auto mb-5 text-accent-gold"
                  aria-hidden
                />
                <blockquote className="font-display italic text-xl md:text-2xl leading-relaxed text-white/95">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-1 mt-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-accent-gold fill-accent-gold"
                      aria-hidden
                    />
                  ))}
                </div>
                <figcaption className="mt-5">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/65 mt-0.5">
                    {t.city} · {t.service}
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/25 text-white/85 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={16} aria-hidden />
            </button>
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={[
                    "h-2 rounded-full transition-all",
                    i === idx ? "w-6 bg-accent-gold" : "w-2 bg-white/20 hover:bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/25 text-white/85 hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={16} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
