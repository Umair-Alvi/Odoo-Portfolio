"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2,
  Smartphone,
  Code2,
  MessageCircle,
} from "lucide-react"

const points = [
  {
    icon: Code2,
    title: "Clean Customization",
    text: "I focus on maintainable Shopify and Liquid customization instead of unnecessary complexity.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    text: "The store should look and work properly on desktop, tablet and mobile.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "Requirements and progress are kept clear throughout the project.",
  },
  {
    icon: CheckCircle2,
    title: "Business Focused",
    text: "I build around the actual store requirements and customer shopping experience.",
  },
]

export default function ShopifyWhyMe() {
  return (
    <section className="bg-white py-24 dark:bg-[#070b18]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Why Work With Me
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            A Practical Approach to Shopify
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {points.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="
                  flex gap-4 rounded-2xl
                  border border-slate-200
                  bg-slate-50 p-6
                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}