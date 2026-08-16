"use client"

import { motion } from "framer-motion"
import {
  Code2,
  ShoppingBag,
  Monitor,
  Globe,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"
import SectionHeading from "./SectionHeading"

const services = [
  {
    title: "Odoo Development",
    description:
      "Custom Odoo modules, business workflows, access rights, views, automation and Python ORM development.",
    icon: Code2,
    href: "/odoo",
    label: "Explore Odoo",
    primary: true,
  },
  {
    title: "Shopify Development",
    description:
      "Shopify store customization, Liquid development, theme improvements, products and e-commerce setup.",
    icon: ShoppingBag,
    href: "/shopify",
    label: "Explore Shopify",
  },
  {
    title: "Frontend Development",
    description:
      "Modern and responsive web applications using Next.js, React.js, JavaScript and Tailwind CSS.",
    icon: Monitor,
    href: "/frontend",
    label: "Explore Frontend",
  },
  {
    title: "WordPress Development",
    description:
      "Business websites, Elementor customization, responsive layouts and WordPress improvements.",
    icon: Globe,
    href: "/wordpress",
    label: "Explore WordPress",
  },
]

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        border-t border-slate-200/60
        bg-slate-100/70
        px-4 py-24
        dark:border-white/[0.04]
        dark:bg-[#0b1020]
        sm:px-6
      "
    >
      {/* Mouse decorative glow */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-violet-500/[0.06]
          blur-3xl
          dark:bg-violet-500/[0.08]
        "
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title="Solutions I Build"
          description="I work across Odoo, Shopify, frontend development and WordPress — with Odoo as my primary focus."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="group"
              >
                <Link href={service.href}>
                  <div
                    className={`
                      relative
                      h-full
                      overflow-hidden
                      rounded-2xl
                      border
                      p-6
                      backdrop-blur-xl
                      transition-all
                      duration-500

                      ${
                        service.primary
                          ? "border-violet-500/30 bg-white/80 shadow-lg shadow-violet-500/5 dark:border-violet-400/20 dark:bg-white/[0.05]"
                          : "border-slate-200/80 bg-white/60 dark:border-white/[0.08] dark:bg-white/[0.025]"
                      }

                      hover:border-violet-500/40
                      hover:shadow-xl
                      hover:shadow-violet-500/10
                    `}
                  >
                    {/* Card glow */}

                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      <div
                        className="
                          mb-5
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-violet-500/15
                          to-blue-500/15
                          text-violet-600
                          transition-transform
                          duration-300
                          group-hover:scale-110
                          dark:text-violet-400
                        "
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {service.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
                        {service.label}

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}