"use client"

import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const steps = [
  {
    number: "01",
    title: "Requirement",
    description: "Understand the business requirement and expected outcome.",
  },
  {
    number: "02",
    title: "Analysis",
    description: "Analyze the existing system, workflow and technical needs.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build the required customization using clean and maintainable code.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Test the feature and verify the complete business flow.",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Deploy the completed work and make sure everything works correctly.",
  },
]

export default function HowIWork() {
  return (
    <section className="relative overflow-hidden bg-slate-100/70 px-4 py-24 dark:bg-[#0b1020] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My Process"
          title="How I Work"
          description="A simple and structured process from requirement to delivery."
        />

        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="
                group
                relative
                rounded-2xl
                border
                border-slate-200
                bg-white/70
                p-5
                transition-all
                hover:border-violet-500/30
                hover:shadow-xl
                hover:shadow-violet-500/5
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <span className="text-3xl font-black text-violet-500/20 transition-colors group-hover:text-violet-500/40">
                {step.number}
              </span>

              <h3 className="mt-3 font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}