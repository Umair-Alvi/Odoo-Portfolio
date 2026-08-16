"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, Code2 } from "lucide-react"
import SectionHeading from "./SectionHeading"

const projects = [
  {
    title: "Odoo Leave & Time Off Automation",
    description:
      "Customized Odoo Time Off workflow with automated leave allocation based on employee joining date, contract information and leave types.",
    tags: ["Odoo", "Python", "ORM", "Automation"],
  },
  {
    title: "Odoo Custom Business Workflow",
    description:
      "Custom Odoo business logic, workflow improvements, form customizations and automated processes based on business requirements.",
    tags: ["Odoo", "Python", "XML", "Workflow"],
  },
]

export default function FeaturedOdoo() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4 py-24
        dark:bg-[#070b18]
        sm:px-6
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Primary Skill"
          title="Odoo Development"
          description="Custom Odoo solutions focused on business workflows, automation, modules and maintainable development."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                x: index === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-slate-50/80
                p-7
                transition-all
                duration-500
                hover:border-violet-500/40
                hover:shadow-2xl
                hover:shadow-violet-500/10
                dark:border-white/[0.08]
                dark:bg-white/[0.025]
              "
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                    <Code2 className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-xs font-semibold text-violet-600 dark:text-violet-400">
                    Odoo
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-slate-600
                        dark:border-white/10
                        dark:bg-white/[0.03]
                        dark:text-slate-400
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/odoo"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-violet-500/20
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Explore Odoo Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}