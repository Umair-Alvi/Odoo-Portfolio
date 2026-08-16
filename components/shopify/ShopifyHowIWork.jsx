"use client"

import { motion } from "framer-motion"

const steps = [
  ["01", "Requirement", "Understand your store and business requirements."],
  ["02", "Analysis", "Review the existing theme, structure and requirements."],
  ["03", "Development", "Implement Shopify, Liquid and frontend changes."],
  ["04", "Testing", "Test responsiveness, functionality and user experience."],
  ["05", "Delivery", "Deploy the completed changes and provide support."],
]

export default function ShopifyHowIWork() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-[#090d1a]">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            My Process
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            How I Work
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {steps.map(([number, title, description], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <span className="text-3xl font-black text-emerald-500/30">
                {number}
              </span>

              <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}