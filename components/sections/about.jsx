"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  Database,
  Workflow,
  ShieldCheck,
  ShoppingBag,
  Globe2,
  BookOpen,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react"
import { useEffect } from "react"

const education = [
  {
    degree: "Master of Computer Science",
    short: "MCS",
    school: "Bahauddin Zakariya University",
    detail: "CGPA: 3.56 / 4.0",
    icon: GraduationCap,
  },
  {
    degree: "BSc in Double Mathematics",
    short: "BSc",
    school: "Bahauddin Zakariya University",
    detail: "Science & Mathematics",
    icon: BookOpen,
  },
]

const odooSkills = [
  "Odoo 17",
  "Odoo 18",
  "Odoo 19",
  "Python",
  "XML",
  "ORM",
  "PostgreSQL",
  "Custom Modules",
  "Views & Forms",
  "Access Rights",
  "Workflows",
  "Business Logic",
]

const additionalSkills = [
  {
    name: "Next.js / React",
    icon: Globe2,
    description: "Modern frontend applications",
  },
  {
    name: "Shopify",
    icon: ShoppingBag,
    description: "E-commerce customization",
  },
  {
    name: "WordPress",
    icon: Code2,
    description: "CMS & website development",
  },
]

const strengths = [
  {
    icon: Workflow,
    title: "Business Workflows",
    description:
      "Turning real business requirements into practical Odoo workflows.",
  },
  {
    icon: Database,
    title: "Odoo Customization",
    description:
      "Custom modules, models, views, fields and business logic.",
  },
  {
    icon: ShieldCheck,
    title: "Access & Security",
    description:
      "User groups, access rights and record-level permissions.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const glass =
  "border border-gray-200/80 dark:border-white/10 bg-white/80 dark:bg-white/[0.045] backdrop-blur-xl shadow-sm dark:shadow-none"

function CursorGlow() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

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
      const section = document.getElementById("about")

      if (!section) return

      const rect = section.getBoundingClientRect()

      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        z-0
        h-[420px]
        w-[420px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-[90px]
        opacity-70
        dark:opacity-80
      "
      style={{
        left: smoothX,
        top: smoothY,

        background:
          "radial-gradient(circle, rgba(139,92,246,0.28) 0%, rgba(99,102,241,0.16) 35%, rgba(59,130,246,0.08) 55%, transparent 72%)",
      }}
    />
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="
    relative
    isolate
    overflow-hidden
    bg-slate-200
    py-24
    md:py-32
    dark:bg-[#0b1020]
  "
    >
      {/* =========================================
          CURSOR FOLLOWING GLOW
      ========================================== */}

      <CursorGlow />

      {/* =========================================
          BACKGROUND AMBIENT GLOWS
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-180px]
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-500/5
            blur-[120px]
            dark:bg-violet-500/[0.07]
          "
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-20
            right-[-180px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/5
            blur-[120px]
            dark:bg-blue-500/[0.06]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">

        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="
              mb-4
              inline-flex
              cursor-default
              items-center
              gap-2
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-violet-600
              dark:border-violet-500/20
              dark:bg-violet-500/10
              dark:text-violet-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            About Me
          </motion.span>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-gray-950
              dark:text-white
              md:text-5xl
              lg:text-6xl
            "
          >
            Building better

            <span
              className="
                block
                bg-gradient-to-r
                from-violet-600
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent
                dark:from-violet-400
                dark:via-blue-400
                dark:to-cyan-400
              "
            >
              business solutions
            </span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-gray-600
              dark:text-gray-400
              md:text-lg
            "
          >
            Odoo Developer focused on ERP customization, business workflows
            and automation, with a strong background in modern frontend
            development.
          </p>
        </motion.div>

        {/* =========================================
            MAIN GRID
        ========================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">

          {/* =========================================
              LEFT COLUMN
          ========================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >

            {/* ABOUT CARD */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`${glass} rounded-3xl p-7 md:p-8`}
            >
              <div className="mb-6 flex items-center gap-3">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-violet-500/10
                    text-violet-600
                    dark:text-violet-400
                  "
                >
                  <Code2 size={21} />
                </motion.div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                    Who I Am
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
                    Odoo Developer & Frontend Developer
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-7 text-gray-600 dark:text-gray-400 md:text-base">
                <p>
                  I&apos;m a software developer focused primarily on{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Odoo development and ERP customization
                  </span>
                  . I work with custom modules, business logic, views,
                  workflows, access rights and database-related requirements.
                </p>

                <p>
                  Before moving into Odoo development, I worked extensively
                  with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    React.js and Next.js
                  </span>
                  , which gives me a strong frontend foundation for building
                  modern user interfaces and web applications.
                </p>

                <p>
                  I also have practical experience with{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Shopify and WordPress
                  </span>
                  , allowing me to work across ERP, frontend and
                  e-commerce projects.
                </p>
              </div>
            </motion.div>

            {/* WHAT I DO */}

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <Workflow className="h-5 w-5 text-violet-500" />

                <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                  What I Do
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {strengths.map((item) => {
                  const Icon = item.icon

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -7,
                        scale: 1.02,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className={`${glass} rounded-2xl p-5`}
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.1,
                        }}
                        className="
                          mb-4
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-xl
                          bg-violet-500/10
                          text-violet-600
                          dark:text-violet-400
                        "
                      >
                        <Icon size={19} />
                      </motion.div>

                      <h4 className="text-sm font-bold text-gray-950 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* EDUCATION */}

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-blue-500" />

                <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-3">
                {education.map((edu) => {
                  const Icon = edu.icon

                  return (
                    <motion.div
                      key={edu.degree}
                      whileHover={{
                        x: 6,
                        y: -2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`${glass} flex items-center gap-4 rounded-2xl p-5`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-500/10
                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        <Icon size={22} />
                      </motion.div>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-bold text-gray-950 dark:text-white">
                            {edu.degree}
                          </h4>

                          <span
                            className="
                              rounded-md
                              bg-gray-100
                              px-2
                              py-0.5
                              text-[10px]
                              font-bold
                              text-gray-500
                              dark:bg-white/5
                              dark:text-gray-400
                            "
                          >
                            {edu.short}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {edu.school}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {edu.detail}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN
          ========================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-6"
          >

            {/* ODOO EXPERTISE */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`${glass} rounded-3xl p-7 md:p-8`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="
                      mb-3
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-violet-500/10
                      text-violet-600
                      dark:text-violet-400
                    "
                  >
                    <Code2 size={21} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                    Odoo Development
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Primary Technical Skill
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-violet-200
                    bg-violet-50
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-violet-600
                    dark:border-violet-500/20
                    dark:bg-violet-500/10
                    dark:text-violet-400
                  "
                >
                  Primary
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {odooSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -3,
                      scale: 1.04,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="
                      inline-flex
                      cursor-default
                      items-center
                      gap-1.5
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-gray-700
                      dark:border-white/10
                      dark:bg-white/[0.035]
                      dark:text-gray-300
                    "
                  >
                    <CheckCircle2
                      size={13}
                      className="text-violet-500"
                    />

                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ADDITIONAL SKILLS */}

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-blue-500" />

                <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                  Additional Skills
                </h3>
              </div>

              <div className="space-y-3">
                {additionalSkills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        x: 7,
                        y: -2,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`${glass} group flex items-center gap-4 rounded-2xl p-5`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-500/10
                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        <Icon size={20} />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-bold text-gray-950 dark:text-white">
                          {skill.name}
                        </h4>

                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="
                          text-gray-400
                          transition-all
                          duration-300
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-blue-500
                        "
                      />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* FRONTEND STACK */}

            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`${glass} rounded-3xl p-7`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-950 dark:text-white">
                    Frontend Development
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Secondary Skill
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-blue-600
                    dark:border-blue-500/20
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  Secondary
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {[
                  "Next.js",
                  "React.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "Bootstrap",
                  "HTML / CSS",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                    }}
                    className="
                      cursor-default
                      rounded-xl
                      border
                      border-gray-200
                      bg-gray-50
                      px-3
                      py-3
                      text-center
                      text-xs
                      font-medium
                      text-gray-700
                      dark:border-white/10
                      dark:bg-white/[0.025]
                      dark:text-gray-300
                    "
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================================
            BOTTOM PROFILE SUMMARY
        ========================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <motion.div
            whileHover={{
              y: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-violet-200
              bg-gradient-to-r
              from-violet-50
              via-white
              to-blue-50
              p-7
              dark:border-white/10
              dark:from-violet-500/[0.08]
              dark:via-white/[0.02]
              dark:to-blue-500/[0.08]
              md:p-8
            "
          >
            <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                  My Development Focus
                </p>

                <h3 className="mt-2 text-2xl font-black text-gray-950 dark:text-white md:text-3xl">
                  ERP first. Frontend strong.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
                  My current focus is building reliable Odoo solutions while
                  using my frontend experience to create better interfaces
                  and complete web experiences.
                </p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  dark:border-white/10
                  dark:bg-white/5
                "
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-500"
                />

                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Open to Odoo Opportunities
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}