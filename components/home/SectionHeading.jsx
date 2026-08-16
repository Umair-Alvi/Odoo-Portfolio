"use client"

import { motion } from "framer-motion"

export default function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-violet-600 dark:text-violet-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
          {description}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
    </motion.div>
  )
}