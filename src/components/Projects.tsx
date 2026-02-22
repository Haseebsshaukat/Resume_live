"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/content";
import { cn } from "@/lib/utils";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-muted-foreground"
        >
          Selected work—AI, RAG, and full-stack.
        </motion.p>

        <div className="mt-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
          <Sparkles className="h-4 w-4 shrink-0" />
          <span>AI / LLM showcase</span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        <h3 className="mt-16 text-xl font-semibold text-foreground">More projects</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={featured.length + i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className={cn(
        "group rounded-xl border border-border bg-card/80 p-5 shadow-sm transition hover:border-primary/30 hover:shadow-lg",
        featured && "flex flex-col"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
        </div>
        {(project.link || project.github) && (
          <a
            href={project.link ?? project.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded p-1.5 text-muted-foreground transition hover:bg-accent hover:text-foreground"
            aria-label="Open project"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{project.period}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
