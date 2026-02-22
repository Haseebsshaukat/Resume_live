"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-muted-foreground"
        >
          Roles and impact so far.
        </motion.p>

        <div className="mt-12 relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" aria-hidden />
          <ul className="space-y-12">
            {experience.map((job, i) => (
              <motion.li
                key={job.company + job.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-primary bg-background" />
                <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
