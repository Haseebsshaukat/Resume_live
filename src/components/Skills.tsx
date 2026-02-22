"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import { cn } from "@/lib/utils";

const categories: { key: keyof typeof skills; label: string }[] = [
  { key: "ai", label: "AI & LLMs" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "devops", label: "DevOps & Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-muted-foreground"
        >
          Technologies and areas I work in.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08 }}
              className="rounded-xl border border-border bg-card/80 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-foreground">{cat.label}</h3>
              <ul className="mt-4 space-y-2">
                {skills[cat.key].map((skill, i) => (
                  <SkillBar key={skill} skill={skill} index={i} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, index }: { skill: string; index: number }) {
  const width = 75 + Math.min(index * 4, 20);
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className="flex flex-col gap-1"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{skill}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 + index * 0.04 }}
          className={cn("h-full rounded-full bg-primary")}
        />
      </div>
    </motion.li>
  );
}
