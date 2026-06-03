"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

const profileRows = [
  { key: "Institution", value: "IIT (ISM) Dhanbad" },
  { key: "Internship", value: "EMPES Lab, IIT Bombay" },
  { key: "Research Mentor", value: "Prof. Sukanta Das" },
  { key: "Specialisation", value: "Power Electronics · Motor Drives" },
  {
    key: "GitHub",
    value: "github.com/mrdimara",
    href: "https://github.com/mrdimara",
  },
  { key: "Status", value: "Open to Internships & Collabs" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-bg">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            01 // About
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            PROFILE
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-[56px]">
          <motion.div
            {...sectionReveal}
            className="space-y-6 text-sm font-light leading-[1.85] text-muted-l"
          >
            <p>
              3rd-year Electrical Engineering student at IIT (ISM) Dhanbad,
              currently interning at EMPES Lab, IIT Bombay. I work at the
              intersection of power electronics, motor control, and embedded
              systems — building real hardware, not just simulations.
            </p>
            <p>
              I led safety electronics and BMS for Formula Bharat 2025,
              published a paper at IEEE PEDES 2026 on six-phase IM drive
              efficiency, and placed 6th nationally in the ISRO VLSI Challenge
              with a ~19.7 ENOB Delta-Sigma ADC design.
            </p>
            <p>
              Currently researching research-grade gate driver characterisation
              at EMPES, IIT Bombay. Target: Power Electronics R&D at Texas
              Instruments, Analog Devices, ABB, or EV startups like Raptee.HV.
              Also targeting CERN Technical Studentship.
            </p>
          </motion.div>

          <motion.div {...sectionReveal}>
            <dl>
              {profileRows.map((row) => (
                <div
                  key={row.key}
                  className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    {row.key}
                  </dt>
                  <dd className="text-[13px] text-text">
                    {"href" in row && row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-amber"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
