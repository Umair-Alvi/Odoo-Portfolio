"use client"

import { motion } from "framer-motion"

const skills = [
  {
    name: "Next.js",
    desc: "Modern React applications, routing and optimized web experiences.",
    color: "from-blue-500 to-cyan-500",
    border: "border-blue-500/20",
    glow: "bg-blue-500/10",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    tag: "PRIMARY",
  },
  {
    name: "React.js",
    desc: "Reusable components and scalable frontend interfaces.",
    color: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/20",
    glow: "bg-cyan-500/10",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    tag: "PRIMARY",
  },
  {
    name: "Tailwind CSS",
    desc: "Modern utility-first responsive UI development.",
    color: "from-indigo-500 to-blue-500",
    border: "border-indigo-500/20",
    glow: "bg-indigo-500/10",
    badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    tag: "PRIMARY",
  },
  {
    name: "JavaScript",
    desc: "Interactive features, APIs and dynamic web functionality.",
    color: "from-blue-500 to-violet-500",
    border: "border-slate-200 dark:border-white/10",
    glow: "bg-blue-500/8",
    badge: null,
    tag: null,
  },
  {
    name: "HTML5",
    desc: "Semantic and accessible website structure.",
    color: "from-violet-500 to-blue-500",
    border: "border-slate-200 dark:border-white/10",
    glow: "bg-violet-500/8",
    badge: null,
    tag: null,
  },
  {
    name: "CSS3",
    desc: "Responsive layouts, animations and custom styling.",
    color: "from-blue-500 to-cyan-500",
    border: "border-slate-200 dark:border-white/10",
    glow: "bg-cyan-500/8",
    badge: null,
    tag: null,
  },
  {
    name: "Bootstrap",
    desc: "Fast responsive interfaces using Bootstrap components.",
    color: "from-indigo-500 to-violet-500",
    border: "border-slate-200 dark:border-white/10",
    glow: "bg-indigo-500/8",
    badge: null,
    tag: null,
  },
]

export default function FrontendSkills() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 dark:bg-[#070b18]">

      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.07),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-500 dark:text-blue-400">
            Technical Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Frontend{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-600 dark:text-slate-400">
            A practical frontend stack focused on performance, responsiveness and maintainable code.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-lg dark:bg-white/[0.03] ${skill.border}`}
            >
              {/* Hover glow */}
              <div className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${skill.glow}`} />

              {/* Top row — number + badge */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} text-sm font-black text-white shadow-sm`}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                {skill.tag && (
                  <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${skill.badge}`}>
                    {skill.tag}
                  </span>
                )}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {skill.desc}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${skill.color} transition-all duration-500 group-hover:w-full`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}