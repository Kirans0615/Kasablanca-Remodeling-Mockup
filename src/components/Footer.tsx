import { Clock, Facebook, Instagram, Mail, Phone } from "lucide-react";
import { FIRM, IMAGES, NAV_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-white pt-14 pb-8">
      <div aria-hidden className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-green-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 border-b border-green-primary/30 pb-10">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={IMAGES.logo} alt="" className="h-12 w-auto rounded-md" />
              <div>
                <p className="font-display text-lg font-bold leading-tight">Kasablanca</p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-green-light font-semibold">
                  Remodeling & Landscaping
                </p>
              </div>
            </div>
            <p className="text-white/75 text-sm leading-relaxed max-w-xs">
              {FIRM.tagline}
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/25 text-white/80 hover:bg-green-primary hover:border-green-primary hover:text-white transition-colors"
              >
                <Facebook size={15} aria-hidden />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-white/25 text-white/80 hover:bg-green-primary hover:border-green-primary hover:text-white transition-colors"
              >
                <Instagram size={15} aria-hidden />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-green-light mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/75 hover:text-green-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="text-sm text-accent-gold font-semibold hover:underline">
                  Free Quote →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-green-light mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="inline-flex items-center gap-2.5">
                <Phone size={14} className="text-green-light" aria-hidden />
                <a href={`tel:${FIRM.phoneRaw}`} className="hover:text-white">
                  {FIRM.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 break-all">
                <Mail size={14} className="text-green-light shrink-0" aria-hidden />
                <a href={`mailto:${FIRM.email}`} className="hover:text-white">
                  {FIRM.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Clock size={14} className="text-green-light" aria-hidden />
                {FIRM.hours}
              </li>
              <li className="text-white/55 text-xs mt-3">
                Serving Maryland, DC, and Northern Virginia.
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/55">
          <p>© 2024 {FIRM.name}. All rights reserved.</p>
          <p>{FIRM.licenseLine}</p>
        </div>
      </div>
    </footer>
  );
}
