"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/site";
import { sectionReveal } from "@/lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface text-center">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            05 // Contact
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            GET IN TOUCH
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-sm font-light leading-relaxed text-muted-l">
            Open to industry internships, research collaborations, and EV & power
            electronics projects. Targeting CERN Technical Studentship and R&D
            roles at TI, Analog Devices, ABB, Infineon, and EV startups including
            Raptee.HV.
          </p>
        </motion.div>

        <motion.div
          {...sectionReveal}
          className="mt-10 flex flex-wrap items-center justify-center gap-[14px]"
        >
          <a
            href={`mailto:${SITE.emails.personal}`}
            className="rounded-btn bg-amber px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-[#07070C] transition-opacity hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href={`mailto:${SITE.emails.institute}`}
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            IIT Email
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            LinkedIn ↗
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            GitHub ↗
          </a>
          <a
            href={SITE.mechismu}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            Mechismu ↗
          </a>
        </motion.div>

        <p className="mx-auto mt-8 max-w-md font-mono text-[10px] tracking-wide text-muted">
          {SITE.emails.personal} · {SITE.emails.institute}
        </p>

        <footer className="mx-auto mt-20 flex max-w-content flex-col items-center justify-between gap-4 border-t border-border pt-10 sm:flex-row">
          <p className="font-mono text-[10px] text-muted">
            © 2026 {SITE.name} · {SITE.admissionNo}
          </p>
          <p className="font-mono text-[10px] text-muted">
            Power Electronics · Motor Drives · EV Systems
          </p>
        </footer>
      </div>
    </section>
  );
}
