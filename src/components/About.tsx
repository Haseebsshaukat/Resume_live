"use client";

import { motion } from "framer-motion";
import { about } from "@/data/content";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {about.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-lg text-primary font-medium"
        >
          {about.subheadline}
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8 space-y-5"
        >
          {about.body.map((paragraph, i) => (
            <motion.p key={i} variants={item} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          {about.highlights.map((h, i) => (
            <motion.li
              key={i}
              variants={item}
              className={cn(
                "flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-3 text-sm font-medium text-foreground"
              )}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {h}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
