"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import {
  ShoppingCart,
  Package,
  ShoppingBag,
  Users,
  Calculator,
  Globe,
  UserRound,
  Blocks,
  ShieldCheck,
  Workflow,
  Settings2,
  Code2,
} from "lucide-react"

const modules = [
  {
    name: "Sales",
    description: "Sales orders, quotations, pricing and sales workflows.",
    icon: ShoppingCart,
    color: "blue",
  },
  {
    name: "Inventory",
    description: "Stock operations, delivery orders, reservations and warehouses.",
    icon: Package,
    color: "violet",
  },
  {
    name: "Purchase",
    description: "Purchase orders, vendors and procurement workflows.",
    icon: ShoppingBag,
    color: "emerald",
  },
  {
    name: "CRM",
    description: "Leads, opportunities and customer relationship workflows.",
    icon: Users,
    color: "orange",
  },
  {
    name: "Accounting",
    description: "Invoices, payments, journals and accounting workflows.",
    icon: Calculator,
    color: "cyan",
  },
  {
    name: "Website",
    description: "Odoo website customization and business website features.",
    icon: Globe,
    color: "pink",
  },
  {
    name: "Contacts",
    description: "Customer, vendor and contact management customization.",
    icon: UserRound,
    color: "indigo",
  },
  {
    name: "Custom Modules",
    description: "Business-specific Odoo modules built around requirements.",
    icon: Blocks,
    color: "purple",
  },
  {
    name: "Access Rights",
    description: "Security groups, ACLs and user permissions.",
    icon: ShieldCheck,
    color: "green",
  },
  {
    name: "Workflows",
    description: "Business process automation and workflow customization.",
    icon: Workflow,
    color: "amber",
  },
  {
    name: "Configuration",
    description: "Odoo settings, fields, views and business configurations.",
    icon: Settings2,
    color: "slate",
  },
  {
    name: "Technical Development",
    description: "Python, XML, ORM and backend technical customization.",
    icon: Code2,
    color: "sky",
  },
]

const colorClasses = {
  blue: {
    icon: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    border: "border-blue-500/20 dark:border-blue-400/20",
    hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  violet: {
    icon: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10 dark:bg-violet-400/10",
    border: "border-violet-500/20 dark:border-violet-400/20",
    hover: "group-hover:text-violet-600 dark:group-hover:text-violet-400",
  },
  emerald: {
    icon: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    border: "border-emerald-500/20 dark:border-emerald-400/20",
    hover: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  orange: {
    icon: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10 dark:bg-orange-400/10",
    border: "border-orange-500/20 dark:border-orange-400/20",
    hover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
  },
  cyan: {
    icon: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/10 dark:bg-cyan-400/10",
    border: "border-cyan-500/20 dark:border-cyan-400/20",
    hover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
  },
  pink: {
    icon: "text-pink-600 dark:text-pink-400",
    bg: "bg-pink-500/10 dark:bg-pink-400/10",
    border: "border-pink-500/20 dark:border-pink-400/20",
    hover: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
  },
  indigo: {
    icon: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-500/10 dark:bg-indigo-400/10",
    border: "border-indigo-500/20 dark:border-indigo-400/20",
    hover: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
  },
  purple: {
    icon: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10 dark:bg-purple-400/10",
    border: "border-purple-500/20 dark:border-purple-400/20",
    hover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  green: {
    icon: "text-green-600 dark:text-green-400",
    bg: "bg-green-500/10 dark:bg-green-400/10",
    border: "border-green-500/20 dark:border-green-400/20",
    hover: "group-hover:text-green-600 dark:group-hover:text-green-400",
  },
  amber: {
    icon: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    border: "border-amber-500/20 dark:border-amber-400/20",
    hover: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
  },
  slate: {
    icon: "text-slate-600 dark:text-slate-400",
    bg: "bg-slate-500/10 dark:bg-slate-400/10",
    border: "border-slate-500/20 dark:border-slate-400/20",
    hover: "group-hover:text-slate-700 dark:group-hover:text-slate-300",
  },
  sky: {
    icon: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10 dark:bg-sky-400/10",
    border: "border-sky-500/20 dark:border-sky-400/20",
    hover: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
  },
}

/* =========================================================
   CURSOR FOLLOW GLOW
========================================================= */

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
    <>
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-0
          hidden
          h-[320px]
          w-[320px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[100px]
          md:block
        "
        style={{
          left: smoothX,
          top: smoothY,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 72%)",
        }}
      />

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
            "radial-gradient(circle, rgba(99,102,241,0.14), transparent 70%)",
        }}
      />
    </>
  )
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function OdooModulesAreas() {
  const [activeModule, setActiveModule] = useState(null)

  return (
    <section
      id="odoo-modules"
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4
        sm:px-6
        lg:px-8

        bg-white
        text-slate-950

        dark:bg-[#070b16]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Base background */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.07),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(14,165,233,0.06),transparent_30%)]
            dark:bg-[radial-gradient(circle_at_10%_15%,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(14,165,233,0.07),transparent_30%)]
          "
        />

        {/* Animated orb */}
        <motion.div
          className="
            absolute
            -left-40
            top-32
            h-80
            w-80
            rounded-full
            bg-indigo-500/[0.05]
            blur-3xl
            dark:bg-indigo-500/[0.08]
          "
          animate={{
            x: [0, 45, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -right-40
            bottom-20
            h-96
            w-96
            rounded-full
            bg-blue-500/[0.05]
            blur-3xl
            dark:bg-blue-500/[0.08]
          "
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 13,
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

      {/* Cursor effect */}
      <CursorGlow />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          {/* Label */}
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
            <Blocks className="h-4 w-4" />
            Odoo Ecosystem
          </motion.div>

          {/* Heading */}
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
            Odoo Modules{" "}
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
              & Areas
            </span>
          </h2>

          {/* Description */}
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
            Areas of Odoo development and customization I work with to
            transform business requirements into practical solutions.
          </p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
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

        {/* =====================================================
            MODULE CARDS
        ===================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => {
            const Icon = module.icon
            const colors = colorClasses[module.color]
            const isActive = activeModule === module.name

            return (
              <motion.div
                key={module.name}
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
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                onMouseEnter={() => setActiveModule(module.name)}
                onMouseLeave={() => setActiveModule(null)}
                whileHover={{
                  y: -7,
                  scale: 1.015,
                }}
                className="
                  group
                  relative
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

                  hover:border-indigo-300
                  hover:shadow-xl
                  hover:shadow-indigo-500/10

                  dark:border-white/[0.08]
                  dark:bg-white/[0.035]

                  dark:hover:border-indigo-400/25
                  dark:hover:bg-white/[0.055]
                  dark:hover:shadow-indigo-500/10
                "
              >
                {/* Card glow */}
                <motion.div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-indigo-500/10
                    blur-3xl
                  "
                  animate={{
                    scale: isActive ? 1.5 : 1,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: isActive ? 5 : 0,
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    relative
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    ${colors.bg}
                    ${colors.border}
                    ${colors.icon}
                  `}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3
                    className={`
                      text-lg
                      font-bold
                      text-slate-900
                      transition-colors
                      ${colors.hover}
                      dark:text-white
                    `}
                  >
                    {module.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    {module.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -5,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -5,
                  }}
                  className="
                    absolute
                    bottom-5
                    right-6
                    text-indigo-500
                    dark:text-indigo-400
                  "
                >
                  →
                </motion.div>

                {/* Bottom animated line */}
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
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
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
            delay: 0.25,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-12
            max-w-3xl
            rounded-2xl
            border
            border-indigo-500/10
            bg-slate-50/70
            px-6
            py-5
            text-center
            backdrop-blur-xl

            dark:border-white/[0.06]
            dark:bg-white/[0.025]
          "
        >
          <p
            className="
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            Need a custom Odoo solution?{" "}
            <span
              className="
                font-semibold
                text-indigo-600
                dark:text-indigo-400
              "
            >
              I can customize existing modules or develop new functionality
              around your business workflow.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}