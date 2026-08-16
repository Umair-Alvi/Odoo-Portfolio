"use client"

import { motion } from "framer-motion"

const skills = [
  {
    title: "Shopify",
    level: "Store Development",
  },
  {
    title: "Liquid",
    level: "Theme Development",
  },
  {
    title: "HTML / CSS",
    level: "Frontend",
  },
  {
    title: "JavaScript",
    level: "Interactions",
  },
  {
    title: "Theme Editor",
    level: "Customization",
  },
  {
    title: "Responsive UI",
    level: "Mobile First",
  },
]

export default function ShopifySkills() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-[#090d1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Technical Stack
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Shopify Technical Skills
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="
                rounded-2xl
                border border-slate-200
                bg-white p-5
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {skill.title}
                </h3>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}