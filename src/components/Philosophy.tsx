"use client";

import { motion } from "framer-motion";
import { researchInterests, techPhilosophy } from "@/data/content";

export function Philosophy() {
  return (
    <section className="relative py-24 px-6 bg-muted/20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-foreground">Research & interests</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {researchInterests.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold text-foreground">Tech philosophy</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {techPhilosophy.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
