"use client";

import { motion } from "framer-motion";
import { publications, competitions } from "@/data/research";
import { sectionReveal } from "@/lib/motion";

export default function Research() {
  return (
    <section id="research" className="section-pad bg-surface">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            02 // Research
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            PUBLICATIONS & RESULTS
          </h2>
        </motion.div>

        <div className="mt-12 space-y-5">
          {publications.map((pub, index) => (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-card border border-border bg-bg p-7"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-amber">
                  {pub.venue}
                </p>
                <span
                  className="rounded-tag border px-2 py-0.5 font-mono text-[9px] uppercase"
                  style={{
                    borderColor: pub.statusColor,
                    color: pub.statusColor,
                  }}
                >
                  {pub.status}
                </span>
              </div>
              <h3 className="mt-3 text-[15px] font-medium leading-snug text-text">
                {pub.title}
              </h3>
              {pub.authors && (
                <p className="mt-2 text-xs font-light text-muted-l">
                  {pub.authors}
                </p>
              )}
              {pub.note && (
                <p className="mt-2 font-mono text-[10px] tracking-wide text-muted">
                  {pub.note}
                </p>
              )}
            </motion.article>
          ))}
        </div>

        <motion.div {...sectionReveal} className="mt-12">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
            Competition Results
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {competitions.map((item, index) => (
              <motion.div
                key={item.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-card border border-border bg-bg p-6"
              >
                <p className="font-display text-2xl leading-tight text-amber">
                  {item.result}
                </p>
                <p className="mt-2 text-sm font-medium text-text">
                  {item.event}
                </p>
                <p className="mt-2 text-xs font-light leading-relaxed text-muted-l">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
