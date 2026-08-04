"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  Code2,
  BriefcaseBusiness,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import { useEffect } from "react"

const reasons = [
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "I focus on writing structured Odoo code that is easier to understand, maintain, and extend in the future.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business-Focused Solutions",
    description:
      "I don't just customize Odoo technically. I first understand the business requirement and then build the right solution.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "I keep requirements, progress, issues, and solutions clear so the development process stays smooth.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "I break requirements into manageable tasks and focus on delivering working solutions within the agreed timeline.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Customization",
    description:
      "From access rights and views to workflows and custom modules, I aim for stable and reliable Odoo implementations.",
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description:
      "Existing Odoo issue? I investigate the source, understand the root cause, and work toward a clean fix instead of a temporary workaround.",
  },
]

function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 0.4,
  })

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")

    if (!media.matches) return

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
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        z-0
        hidden
        h-72
        w-72
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-[80px]
        md:block
        bg-blue-500/[0.07]
        dark:bg-violet-500/[0.08]
      "
      style={{
        left: smoothX,
        top: smoothY,
      }}
    />
  )
}

export default function WhyWorkWithMe() {
  return (
    <section
      id="why-work-with-me"
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4
        bg-slate-100
        text-slate-950
        dark:bg-[#0b1020]
        dark:text-white
      "
    >
      {/* Cursor Glow */}
      <CursorGlow />

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.05]
            blur-[110px]
            dark:bg-violet-500/[0.07]
          "
        />

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

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="
              mb-4
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-600
              dark:border-blue-400/20
              dark:bg-blue-400/5
              dark:text-blue-400
            "
          >
            Why Work With Me
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            Odoo Development
            <span
              className="
                block
                bg-gradient-to-r
                from-blue-500
                via-violet-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Built Around Your Business
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
            I combine technical Odoo development with practical
            problem-solving to build custom solutions that fit real
            business requirements.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative"
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-px
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500/0
                    via-violet-500/0
                    to-purple-500/0
                    opacity-0
                    blur-xl
                    transition-all
                    duration-500
                    group-hover:from-blue-500/20
                    group-hover:via-violet-500/15
                    group-hover:to-purple-500/20
                    group-hover:opacity-100
                  "
                />

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white/75
                    p-6
                    shadow-sm
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    group-hover:border-blue-400/40
                    group-hover:shadow-xl
                    group-hover:shadow-blue-500/10

                    dark:border-white/[0.08]
                    dark:bg-white/[0.035]
                    dark:group-hover:border-violet-400/30
                    dark:group-hover:bg-white/[0.05]
                    dark:group-hover:shadow-violet-500/10
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      text-xs
                      font-bold
                      text-slate-300
                      dark:text-slate-700
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    className="
                      mb-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-500/20
                      bg-gradient-to-br
                      from-blue-500/10
                      to-violet-500/10
                      text-blue-600
                      transition-colors
                      duration-300

                      group-hover:border-violet-500/30
                      group-hover:text-violet-600

                      dark:border-blue-400/20
                      dark:from-blue-400/10
                      dark:to-violet-400/10
                      dark:text-blue-400
                      dark:group-hover:text-violet-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-blue-600
                      dark:text-white
                      dark:group-hover:text-blue-400
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    {reason.description}
                  </p>

                  {/* Bottom line */}
                  <div
                    className="
                      mt-6
                      h-px
                      w-10
                      bg-gradient-to-r
                      from-blue-500
                      to-violet-500
                      transition-all
                      duration-300
                      group-hover:w-20
                    "
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Need an Odoo customization or have an existing issue?
          </p>

          <a
            href="#contact"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              font-semibold
              text-blue-600
              transition-colors
              hover:text-violet-600
              dark:text-blue-400
              dark:hover:text-violet-400
            "
          >
            Let's discuss your requirement
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}