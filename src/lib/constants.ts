const BASE =
  "https://raw.githubusercontent.com/Kirans0615/Kasablanca-Remodeling-Mockup/main/";

/** Image URLs — all confirmed to exist in the source repo. */
export const IMAGES = {
  logo:                BASE + "mainlogo.jpg",
  bathroomBefore:      BASE + "bathroom-before.jpg",
  bathroomBefore2:     BASE + "bathroom-before2.jpg",
  bathroomAfter:       BASE + "bathroom-after.jpg",
  bathroomAfter2:      BASE + "bathroom-after2.jpg",
  landscapingBefore:   BASE + "landscaping-before.jpg",
  landscapingAfter:    BASE + "landscaping-after2.jpg",
  sidewalkAfter:       BASE + "Finished-sidewalk-work.jpg",
  sidewalkAfter2:      BASE + "Fnished-sidewalk-work2.jpg",
  pressureWashing:     BASE + "pressure-washing-work.jpg",
} as const;

/* ─── Services ─────────────────────────────────────────── */
import type { LucideIcon } from "lucide-react";
import { Bath, Leaf, Droplets, Layers, Paintbrush, Hammer } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const SERVICES: Service[] = [
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    body: "Full gut renovations, tile work, fixtures, and modern finishes. We handle every step — from demo to the final caulk line.",
  },
  {
    icon: Leaf,
    title: "Landscaping",
    body: "Lawn care, garden design, grading, mulching, and seasonal maintenance. Curb appeal that lasts the whole year.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    body: "Driveways, siding, decks, and walkways restored to like-new. Safe, professional, and thorough — no streaks, no shortcuts.",
  },
  {
    icon: Layers,
    title: "Concrete & Sidewalks",
    body: "New pours, repairs, walkways, and patios. Smooth finishes built to handle Maryland weather year after year.",
  },
  {
    icon: Paintbrush,
    title: "Interior Painting",
    body: "Clean lines, premium finishes, and protection of every surface. We prep right so the paint lasts and the rooms look right.",
  },
  {
    icon: Hammer,
    title: "General Contracting",
    body: "From small repairs to full projects. One licensed, insured crew you can trust with the keys to your home.",
  },
];

/* ─── Testimonials ─────────────────────────────────────── */
export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our master bath had been on the list for years. The Kasablanca crew finished in two weeks, on budget, and left the house cleaner than they found it. Genuine craftsmanship.",
    name: "Maria S.",
    city: "Bethesda, MD",
    service: "Bathroom Remodel",
  },
  {
    quote:
      "They re-graded the side yard, put in new beds, and laid sod that actually rooted. A year later it still looks like the photos. Worth every dollar.",
    name: "James T.",
    city: "Rockville, MD",
    service: "Landscaping",
  },
  {
    quote:
      "Driveway was twenty years of grime. Concrete looks brand new. They also fixed two cracked sections for less than a full repour quote elsewhere.",
    name: "Priya K.",
    city: "Silver Spring, MD",
    service: "Pressure Washing + Concrete",
  },
  {
    quote:
      "Full interior repaint and a second bathroom redo. Quoted on time, started on time, finished on time. The painter even matched a custom trim color we couldn't find at the store.",
    name: "David & Lisa R.",
    city: "Gaithersburg, MD",
    service: "Interior Paint + Bathroom",
  },
  {
    quote:
      "We use them every season now — mowing, leaves, mulch in spring. Reliable, friendly, and they remember the small stuff like the back gate latch.",
    name: "Carlos M.",
    city: "Germantown, MD",
    service: "Seasonal Landscaping",
  },
];

/* ─── Service Areas ────────────────────────────────────── */
export const SERVICE_AREAS: string[] = [
  "Bethesda", "Rockville", "Silver Spring", "Gaithersburg", "Germantown",
  "Chevy Chase", "Potomac", "Kensington", "Hyattsville", "College Park",
  "Laurel", "Bowie", "Greenbelt", "Takoma Park", "Washington DC",
  "Northern Virginia",
];

/* ─── Firm details ─────────────────────────────────────── */
export const FIRM = {
  name:  "Kasablanca Remodeling & Landscaping LLC",
  tagline: "Maryland's Trusted Home Improvement Contractor",
  phone: "(301) 555-0190",
  phoneRaw: "+13015550190",
  email: "info@kasablancaremodelingllc.com",
  hours: "Mon–Sat 7am–7pm",
  licenseLine: "Maryland Home Improvement Contractor License #XXXXX",
} as const;

export const NAV_LINKS = [
  { label: "Home",     href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
] as const;
