"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, MessageCircle } from "lucide-react"

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-24 dark:bg-[#070b18] sm:px-6">
      {/* Background glow */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[100px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          overflow-hidden
          rounded-3xl
          border
          border-violet-500/20
          bg-gradient-to-br
          from-violet-500/10
          via-white
          to-blue-500/10
          p-8
          text-center
          shadow-2xl
          shadow-violet-500/5
          dark:from-violet-500/[0.08]
          dark:via-white/[0.02]
          dark:to-blue-500/[0.08]
          sm:p-12
        "
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20">
          <MessageCircle className="h-7 w-7" />
        </div>

        <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Have a Project in Mind?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          Let's discuss your requirements and find the right technical solution for your business.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/odoo"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-violet-500/20
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Explore Odoo Work
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="/#contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-slate-300
              bg-white/70
              px-6
              py-3.5
              text-sm
              font-bold
              text-slate-800
              transition-all
              hover:-translate-y-1
              hover:border-violet-400
              dark:border-white/10
              dark:bg-white/[0.03]
              dark:text-white
            "
          >
            Let's Talk
          </Link>
        </div>
      </motion.div>
    </section>
  )
}