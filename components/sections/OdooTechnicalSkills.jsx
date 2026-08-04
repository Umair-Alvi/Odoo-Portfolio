"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  Code2,
  FileCode2,
  Database,
  ShieldCheck,
  Workflow,
  Blocks,
  Globe2,
  Terminal,
} from "lucide-react"

const skills = [
  {
    name: "Odoo 18",
    description: "Custom module development & customization",
    icon: Blocks,
    level: "Advanced",
  },
  {
    name: "Python",
    description: "Backend logic, automation & business logic",
    icon: Code2,
    level: "Advanced",
  },
  {
    name: "Odoo ORM",
    description: "Models, fields, methods, domains & recordsets",
    icon: Database,
    level: "Advanced",
  },
  {
    name: "XML / Views",
    description: "Form, Tree, Kanban & Search view customization",
    icon: FileCode2,
    level: "Advanced",
  },
  {
    name: "Access Rights",
    description: "Groups, ACLs, security rules & permissions",
    icon: ShieldCheck,
    level: "Advanced",
  },
  {
    name: "Workflows",
    description: "Business workflows & process customization",
    icon: Workflow,
    level: "Advanced",
  },
  {
    name: "PostgreSQL",
    description: "Database structure, queries & Odoo data",
    icon: Database,
    level: "Intermediate",
  },
  {
    name: "Odoo API",
    description: "External integrations & API-based solutions",
    icon: Globe2,
    level: "Intermediate",
  },
]

function CursorGlow() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  })

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor glow */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-0
          hidden
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[90px]
          md:block
        "
        style={{
          left: smoothX,
          top: smoothY,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.13) 0%, rgba(139,92,246,0.06) 40%, transparent 72%)",
        }}
      />

      {/* Small cursor light */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-0
          hidden
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-2xl
          md:block
        "
        style={{
          left: smoothX,
          top: smoothY,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
        }}
      />
    </>
  )
}

export default function OdooTechnicalSkills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section
      id="odoo-skills"
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4
        sm:px-6
        lg:px-8

        bg-slate-200
        text-slate-950

        dark:bg-[#090d1a]
        dark:text-white
      "
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Light mode background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.08),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.07),transparent_30%)]
            dark:bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.08),transparent_30%)]
          "
        />

        {/* Moving decorative orb */}
        <motion.div
          className="
            absolute
            -left-32
            top-20
            h-72
            w-72
            rounded-full
            bg-indigo-500/[0.05]
            blur-3xl
            dark:bg-indigo-500/[0.08]
          "
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-32
            bottom-10
            h-80
            w-80
            rounded-full
            bg-blue-500/[0.05]
            blur-3xl
            dark:bg-blue-500/[0.07]
          "
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.035]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <CursorGlow />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-500/20
              bg-indigo-500/5
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-600
              dark:border-indigo-400/20
              dark:bg-indigo-400/5
              dark:text-indigo-400
            "
          >
            <Terminal className="h-4 w-4" />
            Odoo Technical Stack
          </motion.div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-900
              sm:text-5xl
              dark:text-white
            "
          >
            Odoo Technical{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-500
                via-violet-500
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Skills
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-400
              sm:text-lg
            "
          >
            Technical skills I use to build, customize and maintain
            business-focused Odoo solutions.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-6
              h-1
              w-24
              origin-center
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-blue-500
            "
          />
        </motion.div>

        {/* Skills */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            const isHovered = hoveredSkill === skill.name

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{
                  y: -7,
                  scale: 1.02,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white/75
                  p-6
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  hover:border-indigo-400/40
                  hover:shadow-xl
                  hover:shadow-indigo-500/10

                  dark:border-white/[0.08]
                  dark:bg-white/[0.035]
                  dark:hover:border-indigo-400/30
                  dark:hover:bg-white/[0.055]
                  dark:hover:shadow-indigo-500/10
                "
              >
                {/* Card hover glow */}
                <motion.div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-indigo-500/10
                    blur-2xl
                    dark:bg-indigo-500/15
                  "
                  animate={{
                    scale: isHovered ? 1.4 : 1,
                    opacity: isHovered ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: isHovered ? 5 : 0,
                    scale: isHovered ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    relative
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-indigo-500/15
                    bg-gradient-to-br
                    from-indigo-500/10
                    to-blue-500/10
                    text-indigo-600
                    dark:border-indigo-400/15
                    dark:from-indigo-400/10
                    dark:to-blue-400/10
                    dark:text-indigo-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3
                      className="
                        text-base
                        font-bold
                        text-slate-900
                        transition-colors
                        group-hover:text-indigo-600
                        dark:text-white
                        dark:group-hover:text-indigo-400
                      "
                    >
                      {skill.name}
                    </h3>

                    <span
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        px-2
                        py-1
                        text-[9px]
                        font-semibold
                        text-slate-500

                        dark:border-white/10
                        dark:bg-white/[0.04]
                        dark:text-slate-400
                      "
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p
                    className="
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Bottom line */}
                <motion.div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-indigo-500
                    via-violet-500
                    to-blue-500
                  "
                  initial={{ width: "0%" }}
                  animate={{
                    width: isHovered ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.35 }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-2xl
            border
            border-indigo-500/10
            bg-white/50
            px-6
            py-5
            text-center
            backdrop-blur-lg
            dark:border-white/[0.06]
            dark:bg-white/[0.025]
          "
        >
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Focused on building{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              scalable Odoo solutions
            </span>{" "}
            with clean code, secure access control and maintainable business
            workflows.
          </p>
        </motion.div>
      </div>
    </section>
  )
}