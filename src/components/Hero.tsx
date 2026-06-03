"use client";

import { motion } from "framer-motion";
import { SITE } from "@/data/site";
import { fadeUp } from "@/lib/motion";
import OscilloscopeWave from "./OscilloscopeWave";

const stats = [
  { value: "2026", label: "IEEE PEDES", sub: "Paper Accepted" },
  { value: "6th", label: "Inter-IIT", sub: "ISRO VLSI · 22 IITs" },
  { value: "12th", label: "Formula Bharat", sub: "Engineering Design" },
];

export default function Hero() {
  return (
    <section className="pcb-grid relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-16 pt-24 sm:px-12">
      <div
        className="pointer-events-none absolute right-8 top-24 h-48 w-48 rounded-full border border-amber opacity-30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-16 top-32 h-32 w-32 rounded-full border border-amber opacity-15"
        aria-hidden
      />
      <OscilloscopeWave />

      <div className="relative z-10 mx-auto w-full max-w-content">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-amber"
        >
          B.Tech EE · {SITE.institution} · EMPES Lab, IIT Bombay · Mechismu Racing Electric
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(56px,14vw,136px)] leading-[0.88] tracking-[0.015em] sm:text-[clamp(72px,11vw,136px)]"
        >
          MANINDER
          <br />
          <span className="text-amber">SINGH</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-3xl text-[15px] font-light tracking-[0.06em] text-muted-l"
        >
        Power Electronics · Motor Drives · EV Systems · Simulation · Mixed-Signal · Embedded Control · Digital Design
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-[14px]"
        >
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-btn bg-amber px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-[#07070C] transition-opacity hover:opacity-90"
          >
            GitHub ↗
          </a>
          <a
            href={SITE.resume}
            download
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            View Projects
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
            href="#contact"
            className="rounded-btn border border-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-wide text-muted-l transition-colors hover:border-border-h hover:text-text"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-[72px] border-t border-border pt-10"
        >
          <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[120px]">
                <p className="font-display text-5xl text-amber">{stat.value}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs font-light text-muted-l">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
