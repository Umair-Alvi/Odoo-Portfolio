"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  Code2,
  LayoutTemplate,
  ShieldCheck,
  Workflow,
  ShoppingCart,
  Database,
  Plug,
  Bug,
  ArrowUpRight,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Module Development",
    description:
      "Custom Odoo modules built around your business requirements, workflows, and processes.",
    tags: ["Python", "ORM", "Odoo"],
  },
  {
    icon: LayoutTemplate,
    title: "Odoo Views & UI",
    description:
      "Custom Form, Tree, Kanban, Search, and other Odoo views with clean and practical interfaces.",
    tags: ["XML", "Views", "UI"],
  },
  {
    icon: ShieldCheck,
    title: "Access Rights & Security",
    description:
      "Configure user groups, access rights, record rules, and security permissions correctly.",
    tags: ["Groups", "ACL", "Rules"],
  },
  {
    icon: Workflow,
    title: "Workflow Customization",
    description:
      "Customize Odoo business workflows, states, validations, approvals, and automated actions.",
    tags: ["Workflow", "Automation"],
  },
  {
    icon: ShoppingCart,
    title: "Sales & Inventory",
    description:
      "Customize Sales, Inventory, Delivery, Purchase, and related business operations.",
    tags: ["Sales", "Inventory", "Purchase"],
  },
  {
    icon: Database,
    title: "Python & Odoo ORM",
    description:
      "Develop business logic using Python and Odoo ORM with maintainable backend code.",
    tags: ["Python", "ORM", "PostgreSQL"],
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Connect Odoo with external systems and APIs to synchronize business data and processes.",
    tags: ["API", "Integration"],
  },
  {
    icon: Bug,
    title: "Bug Fixing & Troubleshooting",
    description:
      "Find and fix Odoo errors, module issues, access problems, workflows, and unexpected behavior.",
    tags: ["Debugging", "Fixes"],
  },
]

function ServiceCard({ service, index }) {
  const cardRef = useRef(null)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (event) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    setPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setPosition({ x: 50, y: 50 })
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white/70
        p-6
        shadow-sm
        backdrop-blur-xl
        transition-all
        duration-300

        hover:border-violet-300
        hover:shadow-xl
        hover:shadow-violet-500/10

        dark:border-white/[0.08]
        dark:bg-white/[0.025]
        dark:hover:border-violet-500/30
        dark:hover:bg-white/[0.04]
        dark:hover:shadow-violet-500/10
      "
    >
      {/* Cursor-following glow */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-20
          rounded-full
          opacity-0
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
        animate={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 25,
          mass: 0.25,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.16) 0%, rgba(59,130,246,0.08) 35%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Top shine */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-500/40
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Card content */}

      <div className="relative z-10">
        {/* Icon */}

        <motion.div
          animate={
            isHovered
              ? {
                  rotate: -4,
                  scale: 1.05,
                }
              : {
                  rotate: 0,
                  scale: 1,
                }
          }
          transition={{ duration: 0.25 }}
          className="
            mb-5
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            border
            border-violet-500/15
            bg-gradient-to-br
            from-violet-500/10
            to-blue-500/10
            text-violet-600
            transition-colors
            duration-300

            group-hover:border-violet-500/30
            group-hover:from-violet-500/15
            group-hover:to-blue-500/15

            dark:text-violet-400
          "
        >
          <service.icon className="h-5 w-5" />
        </motion.div>

        {/* Number */}

        <span
          className="
            absolute
            right-0
            top-0
            text-xs
            font-semibold
            tracking-wider
            text-slate-300
            transition-colors
            duration-300

            group-hover:text-violet-400

            dark:text-white/10
            dark:group-hover:text-violet-500/40
          "
        >
          0{index + 1}
        </span>

        {/* Title */}

        <h3
          className="
            text-lg
            font-bold
            text-slate-900
            transition-colors
            duration-300

            group-hover:text-violet-600

            dark:text-white
            dark:group-hover:text-violet-300
          "
        >
          {service.title}
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
          {service.description}
        </p>

        {/* Tags */}

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                border
                border-slate-200
                bg-slate-50
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-slate-500

                dark:border-white/[0.08]
                dark:bg-white/[0.03]
                dark:text-slate-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom arrow */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-end
            text-violet-500
            opacity-0
            transition-all
            duration-300
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  )
}

export default function OdooServices() {
  const sectionRef = useRef(null)

  const mouseX = useRef(0)
  const mouseY = useRef(0)

  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")

    if (!mediaQuery.matches) return

    let animationFrame

    const handleMouseMove = (event) => {
      mouseX.current = event.clientX
      mouseY.current = event.clientY

      cancelAnimationFrame(animationFrame)

      animationFrame = requestAnimationFrame(() => {
        if (!sectionRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()

        setCursor({
          x: ((mouseX.current - rect.left) / rect.width) * 100,
          y: ((mouseY.current - rect.top) / rect.height) * 100,
        })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="odoo-services"
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4
        bg-white
        sm:px-6
        lg:px-8
        2xl:py-32
        2xl:px-0
        text-slate-900

        dark:bg-[#0000]
        dark:text-white
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

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
        {/* Cursor glow */}

        <motion.div
          className="
            absolute
            h-[420px]
            w-[420px]
            rounded-full
            blur-[100px]
          "
          animate={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            mass: 0.4,
          }}
          style={{
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.09) 0%, rgba(59,130,246,0.05) 35%, transparent 70%)",
          }}
        />

        {/* Static soft glow */}

        <div
          className="
            absolute
            -right-40
            top-20
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/[0.04]
            blur-[110px]

            dark:bg-blue-500/[0.07]
          "
        />

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-violet-500/[0.04]
            blur-[100px]

            dark:bg-violet-500/[0.07]
          "
        />
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}

      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
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
              px-3
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-violet-600

              dark:text-violet-400
            "
          >
            <Code2 className="h-3.5 w-3.5" />

            Odoo Development
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
            "
          >
            Odoo{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-500
                via-blue-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Services
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-slate-600

              dark:text-slate-400
            "
          >
            I develop and customize Odoo solutions that fit your business
            processes — from custom modules and views to workflows,
            security, and integrations.
          </p>

          {/* Divider */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-6
              h-1
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-blue-500
            "
          />
        </motion.div>

        {/* Services Grid */}

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-2xl
            border
            border-slate-200
            bg-white/60
            p-6
            backdrop-blur-xl
            sm:flex-row

            dark:border-white/[0.08]
            dark:bg-white/[0.025]
          "
        >
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Have an Odoo requirement?
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Let&apos;s discuss your business workflow and find the right
              solution.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-blue-600
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-violet-500/20
            "
          >
            Let&apos;s Talk

            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}