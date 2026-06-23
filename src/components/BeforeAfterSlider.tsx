import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc:  string;
  label?:    string;
  beforeAlt?: string;
  afterAlt?:  string;
}

/**
 * Draggable before/after divider over a stacked image pair.
 * After image fills the container; Before is clipped from the left up to
 * sliderPosition (%). Mouse + touch via pointer events. Clamped 5–95.
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(5, Math.min(95, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [updateFromClientX]);

  const onDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    updateFromClientX(e.clientX);
  };

  return (
    <figure className="w-full">
      <div
        ref={wrapRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-card bg-charcoal select-none"
        onPointerDown={onDown}
      >
        {/* AFTER — full bleed underneath */}
        <img
          src={afterSrc}
          alt={afterAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          draggable={false}
        />
        {/* BEFORE — clipped to the left portion, slightly desaturated/darker */}
        <div
          aria-hidden
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            loading="lazy"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.85) saturate(0.6)" }}
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[10px] tracking-[0.18em] font-semibold uppercase">
          Before
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-green-primary text-white text-[10px] tracking-[0.18em] font-semibold uppercase">
          After
        </span>

        {/* Divider */}
        <div
          className="slider-handle absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none"
          style={{ left: `calc(${pos}% - 1px)`, boxShadow: "0 0 12px rgba(0,0,0,0.45)" }}
        />
        {/* Handle */}
        <motion.button
          type="button"
          aria-label="Drag to compare before and after"
          onPointerDown={onDown}
          whileTap={{ scale: 0.94 }}
          className="slider-handle absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white border-2 border-green-primary shadow-card flex items-center justify-center text-green-dark"
          style={{ left: `${pos}%` }}
        >
          <ArrowLeftRight size={18} aria-hidden />
        </motion.button>
      </div>

      {label && (
        <figcaption className="mt-3 text-center text-sm text-text-body/80">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
