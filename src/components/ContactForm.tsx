import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { FadeInView } from "./FadeInView";
import { FIRM, IMAGES } from "../lib/constants";

const SERVICES_OPTIONS = [
  "Bathroom Remodeling",
  "Landscaping",
  "Pressure Washing",
  "Concrete Work",
  "Interior Painting",
  "General Contracting",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-green-muted">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <FadeInView className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.22em] font-semibold text-green-dark mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal text-balance leading-tight">
            Get Your Free Quote Today
          </h2>
          <p className="mt-4 text-lg text-text-body max-w-2xl mx-auto">
            Tell us a little about the project. We&apos;ll reach back within 24 hours with the next step.
          </p>
        </FadeInView>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 max-w-6xl mx-auto">
          {/* Contact info card */}
          <FadeInView direction="left">
            <div className="rounded-2xl bg-white border border-border-subtle shadow-card p-7 lg:p-8 h-full">
              <img src={IMAGES.logo} alt="" className="h-16 w-auto rounded-md mb-6" />
              <h3 className="font-display text-xl font-semibold text-charcoal mb-5">
                Reach us directly
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-green-muted text-green-dark flex items-center justify-center shrink-0">
                    <Phone size={18} aria-hidden />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-text-body/65 font-semibold">
                      Phone
                    </div>
                    <a
                      href={`tel:${FIRM.phoneRaw}`}
                      className="text-charcoal font-medium hover:text-green-dark"
                    >
                      {FIRM.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-green-muted text-green-dark flex items-center justify-center shrink-0">
                    <Mail size={18} aria-hidden />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-text-body/65 font-semibold">
                      Email
                    </div>
                    <a
                      href={`mailto:${FIRM.email}`}
                      className="text-charcoal font-medium hover:text-green-dark break-all"
                    >
                      {FIRM.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-green-muted text-green-dark flex items-center justify-center shrink-0">
                    <Clock size={18} aria-hidden />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-text-body/65 font-semibold">
                      Hours
                    </div>
                    <p className="text-charcoal font-medium">{FIRM.hours}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-7 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-green-muted text-green-dark text-xs font-semibold border border-border-subtle">
                <ShieldCheck size={14} aria-hidden />
                Licensed & Insured in Maryland
              </div>
            </div>
          </FadeInView>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl bg-white border border-border-subtle shadow-card p-7 lg:p-10"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-full bg-green-muted text-green-dark flex items-center justify-center mb-5">
                  <CheckCircle2 size={28} aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">
                  Request sent.
                </h3>
                <p className="text-text-body max-w-md mx-auto leading-relaxed">
                  We&apos;ll be in touch within 24 hours. If it&apos;s urgent, call us at{" "}
                  <a href={`tel:${FIRM.phoneRaw}`} className="text-green-dark font-semibold">
                    {FIRM.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 text-sm font-semibold text-green-dark underline-offset-4 hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <Field id="cf-name" label="Name" required>
                  <input id="cf-name" name="name" type="text" required placeholder="Your name" className={inputCls} />
                </Field>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field id="cf-phone" label="Phone" required>
                    <input id="cf-phone" name="phone" type="tel" required placeholder="(555) 123-4567" className={inputCls} />
                  </Field>
                  <Field id="cf-email" label="Email" required>
                    <input id="cf-email" name="email" type="email" required placeholder="you@email.com" className={inputCls} />
                  </Field>
                </div>

                <Field id="cf-service" label="Service needed" required>
                  <select id="cf-service" name="service" required defaultValue="" className={inputCls}>
                    <option value="" disabled>— Select —</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                <Field id="cf-city" label="City / ZIP" required>
                  <input id="cf-city" name="city" type="text" required placeholder="Rockville, MD 20850" className={inputCls} />
                </Field>

                <Field id="cf-msg" label="Project details" required>
                  <textarea id="cf-msg" name="message" rows={4} required placeholder="A few sentences about the project, the timing, and anything we should know." className={inputCls} />
                </Field>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full inline-flex items-center justify-center h-14 px-8 rounded-xl bg-accent-gold text-charcoal text-base font-bold shadow-card hover:brightness-110 transition-all"
                >
                  Send My Request
                </motion.button>
                <p className="text-xs text-text-body/65 text-center">
                  Free, no-obligation estimate. We don&apos;t share your info.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border-subtle bg-warm-white px-4 py-2.5 text-sm text-charcoal placeholder:text-text-body/55 focus:outline-none focus:border-green-primary focus:ring-2 focus:ring-green-primary/25 transition-colors";

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-[0.16em] text-charcoal mb-1.5">
        {label}
        {required && <span className="text-accent-gold ml-1" aria-hidden>*</span>}
      </label>
      {children}
    </div>
  );
}
