"use client"

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion"
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  CheckCircle2,
} from "lucide-react"

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({ experience, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  })

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  })

  // 3D card movement
  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [3, -3]
  )

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-3, 3]
  )

  // Cursor-follow glow
  const glowX = useTransform(
    springX,
    [-0.5, 0.5],
    ["0%", "100%"]
  )

  const glowY = useTransform(
    springY,
    [-0.5, 0.5],
    ["0%", "100%"]
  )

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x =
      (event.clientX - rect.left) / rect.width - 0.5

    const y =
      (event.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = experience.icon

  return (
    <div
      className={`
        relative
        flex
        items-center
        ${
          experience.side === "left"
            ? "md:flex-row"
            : "md:flex-row-reverse"
        }
      `}
    >
      {/* =====================================================
          TIMELINE DOT
      ===================================================== */}

      <div className="hidden md:flex w-1/2 justify-center">
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: index * 0.15,
            type: "spring",
            stiffness: 160,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            z-30
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            border-4
            border-white
            bg-gradient-to-r
            from-violet-600
            to-blue-600
            shadow-lg
            shadow-violet-500/30

            dark:border-[#0a0f1d]
          "
        >
          <span
            className="
              absolute
              h-8
              w-8
              rounded-full
              bg-violet-500/20
              blur-md
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          CARD SIDE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: experience.side === "left" ? -40 : 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.65,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        className="
          relative
          w-full
          md:w-1/2
        "
      >
        {/* =================================================
            CARD
        ================================================= */}

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-shadow
            duration-500

            hover:shadow-2xl
            hover:shadow-violet-500/10

            dark:border-white/[0.08]
            dark:bg-white/[0.025]
            dark:hover:shadow-violet-500/10

            md:p-7
          "
        >
          {/* =================================================
              CURSOR GLOW
          ================================================= */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0
              h-52
              w-52
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/15
              blur-[70px]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100

              dark:bg-violet-500/20
            "
            style={{
              left: glowX,
              top: glowY,
            }}
          />

          {/* Blue secondary glow */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              z-0
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-400/15
              blur-[35px]
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100

              dark:bg-blue-400/20
            "
            style={{
              left: glowX,
              top: glowY,
            }}
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative z-10">
            {/* Header */}

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-violet-500/10
                    bg-gradient-to-br
                    from-violet-500/10
                    to-blue-500/10
                    text-violet-600
                    transition-all
                    duration-300

                    group-hover:scale-105
                    group-hover:from-violet-500/20
                    group-hover:to-blue-500/20

                    dark:text-violet-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3
                    className="
                      text-xl
                      font-bold
                      tracking-tight
                      text-slate-950
                      transition-colors
                      duration-300
                      group-hover:text-violet-600

                      dark:text-white
                      dark:group-hover:text-violet-400
                    "
                  >
                    {experience.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-violet-600
                      dark:text-violet-400
                    "
                  >
                    {experience.company}
                  </p>
                </div>
              </div>

              {/* Current badge */}

              {experience.current && (
                <span
                  className="
                    hidden
                    shrink-0
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1.5
                    text-[11px]
                    font-bold
                    text-emerald-600

                    dark:text-emerald-400

                    sm:inline-flex
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />

                  Current
                </span>
              )}
            </div>

            {/* Mobile current badge */}

            {experience.current && (
              <span
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-emerald-500/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-bold
                  text-emerald-600

                  dark:text-emerald-400

                  sm:hidden
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />

                Current Position
              </span>
            )}

            {/* Period */}

            <div
              className="
                mt-5
                inline-flex
                items-center
                rounded-lg
                bg-slate-100
                px-3
                py-1.5
                text-xs
                font-semibold
                text-slate-600

                dark:bg-white/[0.05]
                dark:text-slate-400
              "
            >
              {experience.period}
            </div>

            {/* Description */}

            <ul className="mt-6 space-y-3">
              {experience.description.map(
                (item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.15 +
                        itemIndex * 0.08 +
                        0.2,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-6
                      text-slate-600

                      dark:text-slate-400
                    "
                  >
                    <CheckCircle2
                      className="
                        mt-1
                        h-4
                        w-4
                        shrink-0
                        text-violet-500
                      "
                    />

                    <span>{item}</span>
                  </motion.li>
                )
              )}
            </ul>

            {/* Skills */}

            {experience.skills && (
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-lg
                      border
                      border-slate-200
                      bg-slate-50
                      px-2.5
                      py-1
                      text-[11px]
                      font-medium
                      text-slate-600

                      dark:border-white/[0.08]
                      dark:bg-white/[0.03]
                      dark:text-slate-400
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

export default function Experience() {
  const experiences = [
    {
      title: "Odoo Technical Developer",
      company: "Kaspar Consulting",
      period: "Aug 2025 - Present",
      current: true,
      side: "left",
      icon: Layers3,

      description: [
        "Developing and customizing Odoo modules based on business requirements.",
        "Working with Odoo models, views, access rights, workflows, and business logic.",
        "Building custom solutions and improving existing Odoo processes for business operations.",
        "Working with Python, XML, PostgreSQL, Git, and Odoo ORM.",
      ],

      skills: [
        "Odoo",
        "Python",
        "XML",
        "ORM",
        "PostgreSQL",
        "Git",
      ],
    },

    {
      title: "Frontend Developer",
      company: "Kaspar Consulting",
      period: "Jan 2024 - Aug2025",
      current: false,
      side: "right",
      icon: Code2,

      description: [
        "Built 7+ responsive and production-ready frontend projects.",
        "Developed modern web applications using React.js and Next.js.",
        "Created reusable UI components and responsive layouts with Tailwind CSS.",
        "Integrated APIs and optimized frontend performance for better user experience.",
      ],

      skills: [
        "Next.js",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
      ],
    },

    {
      title: "Frontend Development Intern",
      company: "Kaspar Consulting",
      period: "3 Months",
      current: false,
      side: "left",
      icon: GraduationCap,

      description: [
        "Worked on real-world frontend development tasks in a professional team environment.",
        "Built responsive UI components using HTML, CSS, JavaScript, and frontend frameworks.",
        "Learned Git workflow, debugging, responsive design, and collaborative development.",
      ],

      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Git",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="
        relative
        isolate
        overflow-hidden
        bg-slate-50
        py-24
        text-slate-950

        dark:bg-[#0a0f1d]
        dark:text-white

        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Violet glow */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-80
            w-80
            rounded-full
            bg-violet-500/[0.04]
            blur-[100px]

            dark:bg-violet-500/[0.08]
          "
        />

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            top-1/2
            h-96
            w-96
            rounded-full
            bg-blue-500/[0.04]
            blur-[110px]

            dark:bg-blue-500/[0.06]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            dark:opacity-[0.02]

            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-10">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/5
              px-3
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-violet-600

              dark:text-violet-400
            "
          >
            <BriefcaseBusiness className="h-3.5 w-3.5" />

            Professional Journey
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            My{" "}
            <span
              className="
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
              Experience
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
            From frontend development to building custom
            Odoo solutions, here's how my development journey
            has evolved.
          </p>
        </motion.div>

        {/* =================================================
            TIMELINE
        ================================================= */}

        <div className="relative">
          {/* Desktop center line */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-violet-500
              via-blue-500
              to-transparent

              md:block
            "
          />

          {/* Mobile line */}

          <div
            className="
              absolute
              bottom-0
              left-3
              top-0
              w-px
              bg-gradient-to-b
              from-violet-500
              via-blue-500
              to-transparent

              md:hidden
            "
          />

          {/* Experiences */}

          <div className="space-y-8 md:space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.title}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* =================================================
            EXPERIENCE SUMMARY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-16
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >
          {/* Frontend */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            <p
              className="
                text-3xl
                font-black
                text-violet-600

                dark:text-violet-400
              "
            >
              7+
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Frontend Projects
            </p>
          </div>

          {/* Shopify */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            <p
              className="
                text-3xl
                font-black
                text-blue-600

                dark:text-blue-400
              "
            >
              10+
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Shopify Projects
            </p>
          </div>

          {/* WordPress */}

          <div
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              text-center
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]
            "
          >
            <p
              className="
                text-3xl
                font-black
                text-cyan-600

                dark:text-cyan-400
              "
            >
              5+
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              WordPress Projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}