"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ShoppingBag } from "lucide-react"

export default function ShopifyCTA() {
  return (
    <section className="bg-white py-24 dark:bg-[#070b18]">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden
            rounded-[2rem]
            border border-emerald-500/20
            bg-gradient-to-br
            from-emerald-500/[0.08]
            via-blue-500/[0.04]
            to-transparent
            p-10 text-center
            sm:p-14
          "
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
            <ShoppingBag className="h-7 w-7" />
          </div>

          <h2 className="mt-7 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Have a Shopify Project in Mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Let's discuss your store requirements and build a Shopify
            experience that fits your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/#contact"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-emerald-500 to-teal-500
                px-6 py-3.5
                text-sm font-bold text-white
                shadow-lg shadow-emerald-500/20
              "
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#shopify-projects"
              className="
                inline-flex items-center justify-center
                rounded-xl border
                border-slate-300
                px-6 py-3.5
                text-sm font-bold
                text-slate-800
                dark:border-white/10
                dark:text-white
              "
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}