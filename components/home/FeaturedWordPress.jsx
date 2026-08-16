"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Globe } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function FeaturedWordPress() {
  return (
    <section className="relative overflow-hidden bg-slate-100/70 px-4 py-24 dark:bg-[#0b1020] sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="CMS"
          title="WordPress Development"
          description="Responsive WordPress websites, Elementor customization and business-focused web solutions."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mx-auto
            flex
            max-w-4xl
            flex-col
            items-center
            gap-6
            rounded-2xl
            border
            border-slate-200
            bg-white/70
            p-8
            text-center
            backdrop-blur-xl
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            sm:flex-row
            sm:text-left
          "
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
            <Globe className="h-7 w-7" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              5+ WordPress Projects
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Business websites, Elementor pages, responsive layouts and
              WordPress customization.
            </p>
          </div>

          <Link
            href="/wordpress"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:text-white dark:hover:text-blue-400"
          >
            View Work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}