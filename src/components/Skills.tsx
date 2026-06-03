"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { sectionReveal } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-bg">
      <div className="mx-auto max-w-content">
        <motion.div {...sectionReveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber">
            04 // Skills
          </p>
          <h2 className="mt-3 font-display text-[52px] tracking-[0.03em]">
            TECHNICAL STACK
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="mb-5 border-b border-border pb-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-amber">
                {group.title}
              </h3>
              <div className="flex flex-wrap">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="m-1 rounded-tag border border-border px-3.5 py-[7px] font-mono text-[11px] text-muted-l transition-[border-color,color] duration-200 hover:border-amber hover:text-amber"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
