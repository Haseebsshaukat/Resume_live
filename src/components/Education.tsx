"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, certifications } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-muted-foreground"
        >
          Academic background and achievements.
        </motion.p>

        <div className="mt-12 space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 rounded-xl border border-border bg-card/80 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {edu.period} · {edu.location}
                </p>
                {edu.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {edu.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-foreground">Certifications & coursework</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
