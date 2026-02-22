"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { hero, site } from "@/data/content";
import { cn } from "@/lib/utils";

const TYPING_INTERVAL = 120;
const PAUSE_AT_END = 2000;
const DELAY_BETWEEN_ROLES = 400;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = hero.roles;
    const current = roles[roleIndex] ?? "";
    const isComplete = displayText.length === current.length;
    const delay = isDeleting
      ? TYPING_INTERVAL / 2
      : isComplete
        ? PAUSE_AT_END
        : TYPING_INTERVAL;
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      delay
    );
    return () => clearTimeout(timeout);
  }, [roleIndex, displayText, isDeleting]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-medium text-primary"
        >
          {hero.greeting}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {hero.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-2 flex min-h-[2.5rem] flex-wrap items-center gap-1 text-xl font-semibold text-foreground sm:text-2xl md:text-3xl"
        >
          <span className="text-muted-foreground">{hero.rolePrefix}</span>
          <span className={cn("min-w-[2ch] text-primary", displayText.length === (hero.roles[roleIndex]?.length ?? 0) && "border-r-2 border-primary animate-pulse")}>
            {displayText}
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {hero.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName ?? undefined}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90"
          >
            <FileDown className="h-4 w-4" />
            {hero.ctaPrimary}
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-accent"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground transition hover:bg-accent hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground transition hover:bg-accent hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full p-2.5 text-muted-foreground transition hover:bg-accent hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
