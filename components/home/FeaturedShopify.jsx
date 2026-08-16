"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, ShoppingBag } from "lucide-react"
import SectionHeading from "./SectionHeading"

export default function FeaturedShopify() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-y
        border-slate-200/60
        bg-slate-100/70
        px-4 py-24
        dark:border-white/[0.04]
        dark:bg-[#0b1020]
        sm:px-6
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="E-Commerce"
          title="Shopify Development"
          description="Custom Shopify stores, theme customization, Liquid development and e-commerce experiences."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="
            group
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white/70
            p-8
            text-center
            backdrop-blur-xl
            transition-all
            hover:border-violet-500/30
            hover:shadow-2xl
            hover:shadow-violet-500/10
            dark:border-white/[0.08]
            dark:bg-white/[0.025]
          "
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-600 dark:text-violet-400">
            <ShoppingBag className="h-7 w-7" />
          </div>

          <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
            10+ Shopify Projects
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Shopify theme customization, Liquid, responsive storefronts,
            product organization and e-commerce improvements.
          </p>

          <Link
            href="/shopify"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-600 dark:text-violet-400"
          >
            View Shopify Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}