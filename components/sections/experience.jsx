"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Kaspar Consulting",
      period: "Feb 2024 - Present",
      badge: "Current Position",
      description: [
        "Developed 5+ fully responsive websites using React.js & Next.js",
        "Built custom WordPress sites with Elementor for businesses",
        "Optimized site performance & integrated APIs for seamless UX",
      ],
      side: "left",
    },
    {
      title: "Web Development Intern",
      company: "Kaspar Consulting",
      period: "Apr 2023 - Jul 2023",
      description: [
        "Maintained & enhanced projects with React.js & Tailwind CSS",
        "Collaborated in team to create user-friendly interfaces",
      ],
      side: "right",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-background via-background to-background"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline vertical line with gradient */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`flex ${exp.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0`}
              >
                {/* Left spacer/Timeline dot for desktop */}
                <div className="hidden md:flex flex-1 justify-end">
                  <div className="flex flex-col items-end gap-4">
                    {/* Timeline dot with glow */}
                    <motion.div
                      className="relative w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-background z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-50 blur-md" />
                    </motion.div>
                  </div>
                </div>

                {/* Card container */}
                <motion.div className="flex-1" variants={itemVariants}>
                  <motion.div
                    className="glassmorphic p-6 md:p-8 rounded-xl border border-blue-500/10 hover:border-purple-500/20 transition-all duration-300 cursor-pointer group"
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header with badge */}
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <Briefcase className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-blue-500 font-semibold text-sm mt-1">{exp.company}</p>
                        </div>
                      </div>
                      {exp.badge && (
                        <motion.span
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400 border border-green-500/30 whitespace-nowrap"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {exp.badge}
                        </motion.span>
                      )}
                    </div>

                    {/* Period */}
                    <p className="text-muted-foreground text-sm mb-4 font-medium">{exp.period}</p>

                    {/* Responsibilities as list */}
                    <ul className="space-y-2">
                      {exp.description.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          className="flex gap-2 text-foreground text-sm leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + 0.3 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-purple-500 font-bold mt-1">•</span>
                          <span>{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Right spacer for desktop */}
                <div className="hidden md:flex flex-1" />
              </div>
            ))}
          </div>

          {/* Mobile timeline dot on left */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2" />
        </motion.div>
      </div>
    </section>
  )
}
