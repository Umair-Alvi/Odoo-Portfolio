"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Requirement",
    desc: "Understand the project goals, target audience, and technical requirements.",
    color: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
  },
  {
    number: "02",
    title: "Planning",
    desc: "Plan the structure, components, and development approach for the project.",
    color: "from-violet-500 to-blue-500",
    glow: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-500",
  },
  {
    number: "03",
    title: "Development",
    desc: "Build responsive and reusable frontend components with clean code.",
    color: "from-cyan-500 to-blue-500",
    glow: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-500",
  },
  {
    number: "04",
    title: "Testing",
    desc: "Test responsiveness, functionality, and UI details across all devices.",
    color: "from-blue-500 to-indigo-500",
    glow: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-500",
  },
  {
    number: "05",
    title: "Deployment",
    desc: "Prepare, optimize and deploy the completed project to production.",
    color: "from-indigo-500 to-violet-500",
    glow: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-500",
  },
]

export default function FrontendHowIWork() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 dark:bg-[#070b18]">

      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.07),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            My Process
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            How I{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-400">
            A simple and structured process from requirement to deployment — every project, every time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col">

              {/* Connecting arrow — hidden on last */}
              {index < steps.length - 1 && (
                <div className="absolute -right-2 top-8 z-10 hidden md:block">
                  <ArrowRight className="h-4 w-4 text-slate-300 dark:text-white/20" />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`
                  group relative h-full overflow-hidden
                  rounded-2xl border bg-white/70
                  p-6 shadow-sm backdrop-blur
                  transition-all duration-300
                  hover:shadow-lg
                  dark:bg-white/[0.03]
                  ${step.border}
                  dark:${step.border}
                `}
              >
                {/* Hover glow */}
                <div className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${step.glow}`} />

                {/* Number */}
                <div className="relative">
                  <span className={`text-4xl font-black ${step.text} opacity-20`}>
                    {step.number}
                  </span>

                  {/* Gradient dot */}
                  <div className={`mt-3 h-8 w-8 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-sm`}>
                    <div className="h-2 w-2 rounded-full bg-white/80" />
                  </div>
                </div>

                {/* Text */}
                <h3 className="mt-5 font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${step.color} transition-all duration-500 group-hover:w-full`} />
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}