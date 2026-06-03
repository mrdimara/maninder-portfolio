"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { sectionReveal } from "@/lib/motion";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-bg">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            03 // Projects
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            ENGINEERING WORK
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-light text-muted-l">
            Research, competition, and open-source projects across motor drives,
            mixed-signal design, EV safety systems, and simulation — sourced from
            verified coursework, internships, and competition results.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 min-[640px]:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] min-[900px]:grid-cols-[repeat(auto-fill,minmax(400px,1fr))]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.05, 0.4),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-card border border-border bg-surface p-7 transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-border-h hover:shadow-[0_12px_40px_var(--amber-dim)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="text-[26px]" aria-hidden>
                  {project.icon}
                </span>
                <span
                  className="rounded-tag border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide"
                  style={{
                    borderColor: project.statusColor,
                    color: project.statusColor,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-[17px] font-medium text-text">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[10px] tracking-[0.04em] text-amber">
                {project.subtitle}
              </p>
              <p className="mt-4 flex-1 text-[13px] font-light leading-[1.75] text-muted-l">
                {project.desc}
              </p>

              <div className="mt-5 flex flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="m-1 rounded-tag bg-surface2 px-3 py-1.5 font-mono text-[10px] tracking-[0.03em] text-muted-l"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-[5px] w-[5px] shrink-0 rounded-full"
                    style={{ backgroundColor: project.statusColor }}
                  />
                  <span className="font-mono text-[10px] leading-snug text-muted">
                    {project.highlight}
                  </span>
                </div>
                <div className="flex shrink-0 gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-btn border border-border p-2 text-muted transition-colors hover:border-amber hover:text-amber"
                      aria-label={`GitHub — ${project.title}`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-btn border border-border p-2 text-muted transition-colors hover:border-amber hover:text-amber"
                      aria-label={`External link — ${project.title}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
