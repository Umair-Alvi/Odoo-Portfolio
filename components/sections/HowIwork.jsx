"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  Search,
  FileCode2,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
  ArrowRight,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Requirement",
    description:
      "I understand your business requirements, current workflow, and the Odoo problem that needs to be solved.",
    icon: Search,
  },
  {
    number: "02",
    title: "Analysis",
    description:
      "I analyze the existing Odoo setup, modules, views, access rights, workflows, and technical requirements.",
    icon: FileCode2,
  },
  {
    number: "03",
    title: "Development",
    description:
      "I develop clean Odoo customizations using Python, ORM, XML, PostgreSQL, views, security, and business logic.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing",
    description:
      "I test the customization carefully to make sure the workflow works correctly without breaking existing functionality.",
    icon: TestTube2,
  },
  {
    number: "05",
    title: "Deployment",
    description:
      "After testing, I deploy the solution and make sure the updated Odoo environment is working properly.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Support",
    description:
      "I provide post-development support, bug fixing, improvements, and further customization when required.",
    icon: Headphones,
  },
]

function CursorGlow() {
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
    mass: 0.4,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
    mass: 0.4,
  })

  useEffect(() => {
    const element = containerRef.current

    if (!element) return

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect()

      mouseX.set(event.clientX - rect.left)
      mouseY.set(event.clientY - rect.top)
    }

    const handleMouseLeave = () => {
      mouseX.set(-300)
      mouseY.set(-300)
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return {
    containerRef,
    smoothX,
    smoothY,
  }
}

function WorkCard({ step, index, mouseX, mouseY }) {
  const Icon = step.icon

  const [isHovered, setIsHovered] = useState(false)

  const cardRef = useRef(null)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  })

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  })

  const handleMouseMove = (event) => {
    const card = cardRef.current

    if (!card) return

    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    rotateY.set((x - centerX) / 18)
    rotateX.set(-(y - centerY) / 18)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 900,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
    >
      {/* Card mouse glow */}

      <motion.div
        aria-hidden="true"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-2xl
          bg-gradient-to-r
          from-violet-500/30
          via-blue-500/20
          to-cyan-500/30
          blur-md
        "
      />

      {/* Card */}

      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white/80
          p-6
          shadow-sm
          backdrop-blur-xl
          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:border-violet-400/40
          group-hover:shadow-xl
          group-hover:shadow-violet-500/10

          dark:border-white/[0.08]
          dark:bg-white/[0.035]
          dark:group-hover:border-violet-400/30
          dark:group-hover:bg-white/[0.055]
          dark:group-hover:shadow-violet-500/10
        "
      >
        {/* Inner cursor shine */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.10),transparent_45%)]
            dark:bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.16),transparent_45%)]
          "
        />

        <div className="relative z-10">
          {/* Number + Icon */}

          <div className="mb-6 flex items-center justify-between">
            <span
              className="
                text-xs
                font-bold
                tracking-[0.2em]
                text-slate-400
                dark:text-slate-500
              "
            >
              STEP {step.number}
            </span>

            <motion.div
              animate={{
                y: isHovered ? -3 : 0,
                rotate: isHovered ? 4 : 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-violet-500/20
                bg-violet-500/10
                text-violet-600

                dark:border-violet-400/20
                dark:bg-violet-400/10
                dark:text-violet-400
              "
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          </div>

          {/* Title */}

          <h3
            className="
              text-xl
              font-bold
              text-slate-900
              transition-colors
              duration-300
              group-hover:text-violet-600

              dark:text-white
              dark:group-hover:text-violet-400
            "
          >
            {step.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-slate-600

              dark:text-slate-400
            "
          >
            {step.description}
          </p>

          {/* Bottom line */}

          <div className="mt-6 flex items-center gap-2">
            <motion.div
              animate={{
                width: isHovered ? 45 : 25,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                h-[2px]
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-blue-500
              "
            />

            <ArrowRight
              className="
                h-3.5
                w-3.5
                text-violet-500
                opacity-0
                -translate-x-2
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HowIWork() {
  const { containerRef, smoothX, smoothY } = CursorGlow()

  return (
    <section
      id="how-i-work"
      ref={containerRef}
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4

        bg-slate-50
        text-slate-950

        dark:bg-[#090d1a]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Cursor-following glow */}

        <motion.div
          className="
            absolute
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[100px]
            bg-violet-500/[0.09]

            dark:bg-violet-500/[0.13]
          "
          style={{
            left: smoothX,
            top: smoothY,
          }}
        />

        {/* Secondary cursor glow */}

        <motion.div
          className="
            absolute
            h-[170px]
            w-[170px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            blur-[60px]
            bg-blue-500/[0.08]

            dark:bg-blue-500/[0.10]
          "
          style={{
            left: smoothX,
            top: smoothY,
          }}
        />

        {/* Static gradient */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.07),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.06),transparent_30%)]

            dark:bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.10),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.08),transparent_30%)]
          "
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

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-6xl">
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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
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
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-violet-600

              dark:border-violet-400/20
              dark:bg-violet-400/5
              dark:text-violet-400
            "
          >
            Odoo Development Process
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
              md:text-6xl
            "
          >
            How I{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-500
                via-blue-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Work
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
            "
          >
            From understanding your business requirement to deployment and
            support, I follow a structured approach to deliver reliable Odoo
            solutions.
          </p>
        </motion.div>

        {/* =================================================
            STEPS
        ================================================= */}

        <div className="relative">
          {/* Desktop connecting line */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              hidden
              h-full
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-violet-500/30
              to-transparent

              lg:block
            "
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <WorkCard
                key={step.number}
                step={step}
                index={index}
                mouseX={smoothX}
                mouseY={smoothY}
              />
            ))}
          </div>
        </div>

        {/* Bottom message */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-12
            max-w-2xl
            text-center
          "
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/70
              px-5
              py-3
              text-sm
              font-medium
              text-slate-600
              shadow-sm
              backdrop-blur-xl

              dark:border-white/[0.08]
              dark:bg-white/[0.035]
              dark:text-slate-400
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

            Clear process. Clean code. Reliable Odoo solutions.
          </div>
        </motion.div>
      </div>
    </section>
  )
}