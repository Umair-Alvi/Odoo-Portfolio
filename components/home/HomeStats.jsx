"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const stats = [
  {
    number: "1+",
    label: "Year",
    sub: "Odoo Development",
  },
  {
    number: "2+",
    label: "Years",
    sub: "Frontend Development",
  },
  {
    number: "10+",
    label: "Projects",
    sub: "Shopify",
  },
  {
    number: "5+",
    label: "Projects",
    sub: "WordPress",
  },
  {
    number: "7+",
    label: "Projects",
    sub: "Frontend",
  },
]

export default function HomeStats() {
  return (
    <section className="bg-white px-4 py-24 dark:bg-[#070b18] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Built Through Real Projects"
          description="A mix of professional experience and client projects across multiple technologies."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.sub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/70
                p-5
                text-center
                transition-all
                hover:border-violet-500/30
                hover:shadow-lg
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                {stat.number}
              </p>

              <p className="mt-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
                {stat.label}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}