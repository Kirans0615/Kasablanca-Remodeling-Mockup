import { ArrowRight, ShieldCheck } from "lucide-react";
import { SERVICES } from "../lib/constants";

const GRASS_URL =
  "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png";

const FEATURED = SERVICES.slice(0, 3);

export function GrassSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a3d1a] via-[#2a5c2a] to-[#3a7a30] flex flex-col">

      {/* ── Hero copy ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pt-28 pb-6 text-center">

        <span className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/80 text-xs font-semibold tracking-wide">
          <ShieldCheck size={13} aria-hidden />
          Maryland's Trusted Home Improvement Contractor
        </span>

        <h2 className="animate-fade-up [animation-delay:120ms] mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-bold text-white leading-[1.05] tracking-tight text-balance max-w-3xl">
          Transforming Homes.{" "}
          <span className="text-accent-gold">Beautifying Landscapes.</span>
        </h2>

        <p className="animate-fade-up [animation-delay:240ms] mt-5 text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
          From bathroom remodels to full landscaping and pressure washing —
          Kasablanca delivers craftsmanship that lasts across the DMV.
        </p>

        <div className="animate-fade-up [animation-delay:360ms] mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-accent-gold text-charcoal text-sm font-semibold hover:brightness-110 transition-all shadow-lg"
          >
            Get a Free Quote <ArrowRight size={16} aria-hidden />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full border-2 border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/*
        ── Service cards ──
        z-10 puts them BEHIND the grass (z-20), so the grass
        overlaps their bases — they look planted in the lawn.
        Large pb-* clears most of the grass so cards read clearly;
        the grass just clips the very bottom edge.
      */}
      <div className="animate-hero-rise [animation-delay:500ms] relative z-10 w-[92%] sm:w-[85%] lg:w-[76%] max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 pb-28 sm:pb-36 lg:pb-52 shrink-0">
        {FEATURED.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-6 text-left"
          >
            <div className="h-11 w-11 rounded-xl bg-green-primary/20 text-green-primary flex items-center justify-center mb-4">
              <Icon size={24} aria-hidden />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

      {/* Grass — z-20 sits in front of the cards, grounding them */}
      <img
        src={GRASS_URL}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 z-20 w-full select-none"
      />
    </section>
  );
}
