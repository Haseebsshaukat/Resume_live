"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import { contact, site } from "@/data/content";

const WEB3FORMS_ACCESS_KEY = "84772fae-9c39-4455-b8e8-3e7f275e0a92";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          {contact.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-muted-foreground"
        >
          {contact.subheadline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-1 text-sm text-muted-foreground"
        >
          {contact.formNote}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={site.resumeUrl}
            download={site.resumeDownloadName ?? undefined}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90"
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-10 space-y-4 rounded-xl border border-border bg-card/80 p-6 shadow-sm"
        >
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:opacity-90 sm:w-auto sm:px-8"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
