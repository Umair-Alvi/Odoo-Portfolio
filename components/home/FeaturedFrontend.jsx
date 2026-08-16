"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Monitor } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function FeaturedFrontend() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 dark:bg-[#070b18] sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Web Development"
          title="Frontend Development"
          description="Modern frontend experiences built with Next.js, React.js, JavaScript and Tailwind CSS."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Next.js Applications",
            "React.js Interfaces",
            "Responsive UI Development",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/70
                p-6
                transition-all
                hover:border-blue-500/30
                hover:shadow-xl
                hover:shadow-blue-500/10
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <Monitor className="h-7 w-7 text-blue-500" />

              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {item}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Clean, responsive and modern interfaces focused on usability
                and performance.
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/frontend"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
          >
            View Frontend Work
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}