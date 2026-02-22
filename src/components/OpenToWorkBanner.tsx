"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/content";

export function OpenToWorkBanner() {
  if (!site.openToWork) return null;
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
    >
      <Link
        href="#contact"
        className="flex items-center gap-2 rounded-full border border-primary/40 bg-card/95 px-5 py-2.5 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm transition hover:border-primary hover:bg-primary/10"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Open to work · AI & Backend roles
      </Link>
    </motion.div>
  );
}
