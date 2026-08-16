"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export default function FrontendCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-28 dark:bg-[#070b18]">

      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-blue-500/20 bg-white/70 p-10 text-center shadow-xl shadow-blue-500/5 backdrop-blur-xl dark:bg-white/[0.03] md:p-16"
      >
        {/* Inner glow blobs */}
        <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/15" />

        {/* Icon */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>

        {/* Heading */}
        <h2 className="relative text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Have a{" "}
          <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
            Frontend Project
          </span>{" "}
          in Mind?
        </h2>

        <p className="relative mx-auto mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-400">
          Let's discuss your project and build a modern, responsive web experience together.
        </p>

        {/* Buttons */}
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <motion.a
            href="#frontend-projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:shadow-xl hover:shadow-blue-500/30"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition-all hover:border-blue-400 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.07]"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-40" />
      </motion.div>

    </section>
  )
}