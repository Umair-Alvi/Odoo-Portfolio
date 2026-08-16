"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const points = [
  { text: "Clean and maintainable code",          color: "from-blue-500 to-cyan-500",    iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",    border: "border-blue-500/20"   },
  { text: "Responsive across all devices",         color: "from-cyan-500 to-blue-500",    iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",    border: "border-cyan-500/20"   },
  { text: "Modern frontend technologies",          color: "from-indigo-500 to-blue-500",  iconBg: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400", border: "border-indigo-500/20" },
  { text: "Reusable component architecture",       color: "from-violet-500 to-blue-500",  iconBg: "bg-violet-500/10 text-violet-500 dark:text-violet-400", border: "border-violet-500/20" },
  { text: "Clear communication",                   color: "from-blue-500 to-indigo-500",  iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",    border: "border-blue-500/20"   },
  { text: "Focus on performance and usability",    color: "from-cyan-500 to-indigo-500",  iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",    border: "border-cyan-500/20"   },
]

export default function FrontendWhyWorkWithMe() {
  return (
    <section className="relative overflow-hidden bg-white py-28 dark:bg-[#070b18]">

      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Why Work With Me
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              real-world
            </span>{" "}
            projects.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-slate-400">
            I bring more than just code — every project gets clean architecture, clear communication, and a focus on results.
          </p>
        </motion.div>

        {/* Points */}
        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {points.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative overflow-hidden flex items-center gap-4 rounded-2xl border bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg dark:bg-white/[0.03] ${point.border}`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-blue-500/10" />

              {/* Check icon */}
              <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${point.iconBg}`}>
                <Check className="h-4 w-4" />
              </div>

              <span className="relative font-semibold text-slate-800 dark:text-slate-200">
                {point.text}
              </span>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${point.color} transition-all duration-500 group-hover:w-full`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}