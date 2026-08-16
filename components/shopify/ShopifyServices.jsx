"use client"

import { motion } from "framer-motion"
import {
  ShoppingBag,
  Code2,
  Palette,
  Smartphone,
  Layers,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description:
      "Complete Shopify store setup and customization focused on clean structure and smooth shopping experience.",
  },
  {
    icon: Code2,
    title: "Liquid Development",
    description:
      "Custom Liquid sections, templates, snippets and dynamic Shopify functionality.",
  },
  {
    icon: Palette,
    title: "Theme Customization",
    description:
      "Customize existing Shopify themes according to brand requirements and design.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first layouts that provide a consistent experience across devices.",
  },
  {
    icon: Layers,
    title: "Product & Collection Setup",
    description:
      "Products, variants, collections, navigation and store structure configured properly.",
  },
  {
    icon: Zap,
    title: "Store Optimization",
    description:
      "Improve storefront usability, layout, visual consistency and overall shopping experience.",
  },
]

export default function ShopifyServices() {
  return (
    <section
      id="shopify-services"
      className="
        relative overflow-hidden
        bg-white py-24
        dark:bg-[#070b18]
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            What I Do
          </p>

          <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Shopify Services
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Practical Shopify solutions for brands that want a clean,
            responsive and professional online store.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="
                  group rounded-2xl
                  border border-slate-200
                  bg-slate-50/70 p-6
                  shadow-sm
                  transition-all
                  hover:border-emerald-500/30
                  hover:shadow-xl
                  hover:shadow-emerald-500/5
                  dark:border-white/10
                  dark:bg-white/[0.025]
                "
              >
                <div
                  className="
                    mb-5 flex h-12 w-12 items-center justify-center
                    rounded-xl
                    bg-emerald-500/10
                    text-emerald-600
                    transition-transform
                    group-hover:scale-110
                    dark:text-emerald-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

