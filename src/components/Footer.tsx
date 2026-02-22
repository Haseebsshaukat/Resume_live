"use client";

import Link from "next/link";
import { site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-card/50 py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            LinkedIn
          </a>
          <Link href="#hero" className="text-sm text-muted-foreground transition hover:text-foreground">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
