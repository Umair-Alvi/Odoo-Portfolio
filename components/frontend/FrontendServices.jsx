"use client"

import { motion } from "framer-motion"
import {
  Layout,
  Smartphone,
  Gauge,
  Code2,
  Palette,
  RefreshCcw,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Modern Web Development",
    desc: "Clean and scalable websites using Next.js and React.js with best practices.",
    primary: true,
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Interfaces that work smoothly across desktop, tablet and mobile devices.",
    primary: false,
    color: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
  },
  {
    icon: Code2,
    title: "React Development",
    desc: "Reusable components and maintainable frontend architecture with hooks.",
    primary: true,
    color: "from-indigo-500 to-blue-500",
    glow: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    iconBg: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400",
  },
  {
    icon: Palette,
    title: "UI Implementation",
    desc: "Converting designs into accurate, pixel-perfect responsive web interfaces.",
    primary: false,
    color: "from-violet-500 to-blue-500",
    glow: "bg-violet-500/10",
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Improving loading speed, rendering performance and overall user experience.",
    primary: false,
    color: "from-blue-500 to-indigo-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-500 dark:text-blue-400",
  },
  {
    icon: RefreshCcw,
    title: "Frontend Maintenance",
    desc: "Bug fixing, UI improvements and updates for existing frontend projects.",
    primary: false,
    color: "from-cyan-500 to-indigo-500",
    glow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
  },
]

export default function FrontendServices() {
  return (
    <section className="relative overflow-hidden bg-white py-28 dark:bg-[#070b18]">

      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_55%),radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.07),transparent_55%),radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.07),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            What I Do
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Frontend{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 dark:text-slate-400">
            Everything you need for a modern, fast, and beautiful web presence — built with the latest frontend technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`
                  group relative overflow-hidden
                  rounded-2xl border bg-white/70 p-7
                  shadow-sm backdrop-blur
                  transition-all duration-300
                  hover:shadow-lg
                  dark:bg-white/[0.03]
                  ${service.border}
                `}
              >
                {/* Hover glow */}
                <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${service.glow}`} />

                {/* Icon */}
                <div className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {service.desc}
                </p>

                {/* Arrow on hover */}
                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-slate-400 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-slate-500">
                  <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <ArrowUpRight className={`h-3.5 w-3.5 text-blue-500`} />
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${service.color} transition-all duration-500 group-hover:w-full`} />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}