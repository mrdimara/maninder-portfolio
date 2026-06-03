"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INTERNSHIP, SITE } from "@/data/site";
import { sectionReveal } from "@/lib/motion";

const profileRows = [
  { key: "Institution", value: SITE.institution },
  { key: "Degree", value: `${SITE.degree} · ${SITE.graduation}` },
  { key: "Admission No.", value: SITE.admissionNo },
  { key: "Email", value: SITE.emails.institute, href: `mailto:${SITE.emails.institute}` },
  { key: "Personal Email", value: SITE.emails.personal, href: `mailto:${SITE.emails.personal}` },
  { key: "Internship", value: `${INTERNSHIP.lab}` },
  { key: "Supervisors", value: INTERNSHIP.supervisors },
  { key: "Research Mentor", value: "Prof. Sukanta Das (IIT ISM)" },
  { key: "Specialisation", value: "Power Electronics · Motor Drives · Mixed-Signal" },
  {
    key: "GitHub",
    value: "github.com/mrdimara",
    href: SITE.github,
  },
  {
    key: "Team",
    value: "Mechismu Racing Electric",
    href: SITE.mechismu,
  },
  { key: "Status", value: "Open to Internships & Research Collabs" },
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
          <motion.div {...sectionReveal} className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-card border border-border">
                <Image
                  src="/images/profile.jpg"
                  alt="Maninder Singh"
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                  priority
                />
              </div>
              <div className="min-w-0 pt-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber">
                  Research Engineer Profile
                </p>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-l">
                  B.Tech EE · {SITE.institution} · CGPA {SITE.cgpa}
                </p>
              </div>
            </div>

            <div className="space-y-6 text-sm font-light leading-[1.85] text-muted-l">
              <p>
                Electrical Engineering student at IIT (ISM) Dhanbad building
                expertise across power electronics, motor drives, mixed-signal
                design, FPGA-oriented control, and EV systems — from converter
                simulation and PCB parasitics to real-time DSP and competition
                hardware.
              </p>
              <p>
                Incoming intern at{" "}
                <span className="text-text">{INTERNSHIP.lab}</span>, IIT Bombay
                ({INTERNSHIP.term}) on gate-driver characterisation. IEEE PEDES
                2026 paper submitted on six-phase IM IRFOC with Loss Model
                Controller; 6th nationally in the ISRO VLSI Challenge (~19.7 ENOB
                CT ΔΣ ADC); Vice Captain and safety/BMS lead for Formula Bharat
                2025 with{" "}
                <a
                  href={SITE.mechismu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber transition-opacity hover:opacity-80"
                >
                  Mechismu Racing Electric
                </a>
                .
              </p>
              <p>
                Targeting R&D roles at Texas Instruments, Analog Devices, ABB,
                Raptee.HV, and CERN Technical Studentship — with emphasis on
                experimental validation, open-source simulation workflows, and
                research-grade documentation.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Leadership
              </p>
              <ul className="mt-3 space-y-2 text-xs font-light text-muted-l">
                <li>Vice Captain — Mechismu Racing Electric (Formula Bharat)</li>
                <li>LV Head — e-Mobility Club, IIT (ISM) Dhanbad</li>
                <li>Technical Secretary — Amber Hostel Executive Committee</li>
              </ul>
            </div>
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
                  <dd className="text-right text-[13px] text-text sm:max-w-[58%]">
                    {"href" in row && row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          row.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
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
