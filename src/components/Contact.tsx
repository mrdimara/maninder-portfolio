"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

const EMAIL = "maninderjakhwala@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/manindersingh";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-surface text-center">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            04 // Contact
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            GET IN TOUCH
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-sm font-light leading-relaxed text-muted-l">
            Open to industry internships, research collaborations, and EV & power
            electronics projects. Targeting CERN Technical Studentship and R&D
            roles at TI, Analog Devices, ABB, and EV startups.
          </p>
        </motion.div>

        <motion.div
          {...sectionReveal}
          className="mt-10 flex flex-wrap items-center justify-center gap-[14px]"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-btn bg-amber px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-[#07070C] transition-opacity hover:opacity-90"
          >
            Email Me
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/mrdimara"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            GitHub ↗
          </a>
        </motion.div>

        <footer className="mx-auto mt-20 flex max-w-content flex-col items-center justify-between gap-4 border-t border-border pt-10 sm:flex-row">
          <p className="font-mono text-[10px] text-muted">
            © 2025 Maninder Singh
          </p>
          <p className="font-mono text-[10px] text-muted">
            Power Electronics · Motor Drives · EV Systems
          </p>
        </footer>
      </div>
    </section>
  );
}
