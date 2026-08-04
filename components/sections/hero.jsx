"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  Download,
  Code2,
  Database,
  Globe,
  ShoppingBag,
  FileText,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react"

/* =========================================================
   CURSOR FOLLOW GLOW
========================================================= */

function CursorGlow() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")

    if (!mediaQuery.matches) return

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
      {/* Main glow */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-0
          hidden
          h-[420px]
          w-[420px]
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
            "radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.10) 35%, transparent 70%)",
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
          h-24
          w-24
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
            "radial-gradient(circle, rgba(59,130,246,0.18), transparent 70%)",
        }}
      />
    </>
  )
}

/* =========================================================
   FLOATING SKILL CARD
========================================================= */

function FloatingCard({
  icon: Icon,
  label,
  value,
  subtitle,
  position,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -6, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={`absolute ${position} z-20 hidden sm:block`}
    >
      <div
        className="
          min-w-[150px]
          rounded-2xl
          border
          border-slate-200/80
          bg-white/90
          p-3
          shadow-xl
          shadow-slate-900/10
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-slate-900/85
          dark:shadow-black/30
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-violet-500/15
              to-blue-500/15
              text-violet-600
              dark:text-violet-400
            "
          >
            <Icon className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
              {label}
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-900 dark:text-white">
              {value}
            </p>

            {subtitle && (
              <p className="text-[10px] text-violet-600 dark:text-violet-400">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  /* ---------------------------------------------
     Mouse position
  --------------------------------------------- */

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Umair-Alvi",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/umair-akram-dev/",
    icon: Linkedin,
  },
]

  /* ---------------------------------------------
     Parallax transforms
  --------------------------------------------- */

  const imageX = useTransform(smoothX, [-500, 500], [-10, 10])
  const imageY = useTransform(smoothY, [-500, 500], [-8, 8])

  const textX = useTransform(smoothX, [-500, 500], [-3, 3])
  const textY = useTransform(smoothY, [-500, 500], [-2, 2])

  const glowX = useTransform(smoothX, [-500, 500], [-30, 30])
  const glowY = useTransform(smoothY, [-500, 500], [-25, 25])

  /* ---------------------------------------------
     Detect mobile
  --------------------------------------------- */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  /* ---------------------------------------------
     Mouse move
  --------------------------------------------- */

  useEffect(() => {
    if (isMobile) return

    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      mouseX.set(event.clientX - centerX)
      mouseY.set(event.clientY - centerY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile, mouseX, mouseY])

  /* ---------------------------------------------
     Scroll to projects
  --------------------------------------------- */

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-slate-50
        text-slate-950
        dark:bg-[#070b18]
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
        {/* Base gradient */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.10),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(14,165,233,0.08),transparent_30%)]
            dark:bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(14,165,233,0.08),transparent_30%)]
          "
        />

        {/* Cursor related background glow */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/[0.06]
            blur-[120px]
            dark:bg-violet-500/[0.08]
          "
          style={{
            x: glowX,
            y: glowY,
          }}
        />

        {/* Decorative orb */}

        <motion.div
          className="
            absolute
            -left-32
            top-40
            h-72
            w-72
            rounded-full
            bg-blue-400/[0.06]
            blur-3xl
            dark:bg-blue-500/[0.08]
          "
          animate={{
            x: [0, 35, 0],
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
            bg-violet-400/[0.06]
            blur-3xl
            dark:bg-violet-500/[0.08]
          "
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
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

      {/* Cursor glow */}

      <CursorGlow />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-80px)]
          w-full
          max-w-7xl
          items-center
          px-6
          py-24
          lg:px-10
          xl:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            style={!isMobile ? { x: textX, y: textY } : undefined}
            className="relative z-20"
          >
            {/* Availability */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-emerald-500/5
                px-4
                py-2
                text-sm
                font-medium
                text-emerald-600
                dark:border-emerald-400/20
                dark:bg-emerald-400/5
                dark:text-emerald-400
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-500
                  "
                />
              </span>

              Available for Odoo Projects & Opportunities
            </motion.div>

            {/* Small title */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mb-4
                text-sm
                font-bold
                uppercase
                tracking-[0.35em]
                text-violet-600
                dark:text-violet-400
              "
            >
              Odoo Developer
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="
                max-w-4xl
                text-5xl
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                sm:text-6xl
                lg:text-7xl
                xl:text-[5.4rem]
              "
            >
              <span className="block text-slate-950 dark:text-white">
                Muhammad
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-violet-500
                  via-blue-500
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                Umair Akram
              </span>
            </motion.h1>

            {/* Roles */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-2
                text-lg
                font-bold
                text-slate-800
                dark:text-slate-100
                sm:text-xl
              "
            >
              <span>Odoo Developer</span>

              <span className="text-violet-500">•</span>

              <span>Frontend Developer</span>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-600
                dark:text-slate-400
                sm:text-lg
              "
            >
              I build custom Odoo solutions, business workflows and
              automation that help companies manage their operations more
              efficiently — backed by strong experience in modern frontend
              development.
            </motion.p>

            {/* Skill tags */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 flex max-w-2xl flex-wrap gap-2"
            >
              {[
                {
                  name: "Odoo",
                  icon: Code2,
                  primary: true,
                },
                {
                  name: "Python",
                  icon: Code2,
                },
                {
                  name: "XML",
                  icon: FileText,
                },
                {
                  name: "PostgreSQL",
                  icon: Database,
                },
                {
                  name: "Next.js",
                  icon: Globe,
                },
                {
                  name: "Shopify",
                  icon: ShoppingBag,
                },
                {
                  name: "WordPress",
                  icon: FileText,
                },
              ].map(({ name, icon: Icon, primary }) => (
                <motion.div
                  key={name}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    px-3
                    py-2
                    text-xs
                    font-medium
                    transition-colors
                    ${
                      primary
                        ? "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-300"
                        : "border-slate-200 bg-white/70 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                    }
                  `}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {name}
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.button
                type="button"
                onClick={scrollToProjects}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-blue-600
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-violet-500/20
                  transition-shadow
                  hover:shadow-xl
                  hover:shadow-violet-500/30
                "
              >
                View Work

                <ArrowUpRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.button>

              <motion.a
                href="/cv.pdf"
                download
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-300
                  bg-white/70
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-800
                  backdrop-blur
                  transition-colors
                  hover:bg-white
                  dark:border-white/10
                  dark:bg-white/[0.03]
                  dark:text-white
                  dark:hover:bg-white/[0.07]
                "
              >
                <Download className="h-4 w-4" />

                Download CV
              </motion.a>
            </motion.div>
            <div className="flex flex-wrap items-center gap-3 pt-6">
  {socialLinks.map((social) => {
    const Icon = social.icon

    return (
      <motion.a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          group
          flex items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white/70
          px-4 py-2.5
          text-sm font-medium
          text-slate-700
          shadow-sm
          backdrop-blur
          transition-all

          hover:border-blue-400
          hover:text-blue-600
          hover:shadow-lg
          hover:shadow-blue-500/10

          dark:border-white/10
          dark:bg-white/[0.03]
          dark:text-slate-300
          dark:hover:border-blue-500/40
          dark:hover:bg-blue-500/10
          dark:hover:text-blue-400
        "
      >
        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />

        <span>{social.name}</span>

        <ExternalLink
          className="
            h-3.5 w-3.5
            opacity-0
            -translate-x-1
            transition-all
            group-hover:translate-x-0
            group-hover:opacity-100
          "
        />
      </motion.a>
    )
  })}
</div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              flex
              min-h-[520px]
              items-center
              justify-center
              lg:min-h-[600px]
            "
          >
            {/* Background glow */}

            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[390px]
                w-[390px]
                rounded-full
                bg-violet-500/10
                blur-[90px]
                dark:bg-violet-500/15
              "
              style={!isMobile ? { x: imageX, y: imageY } : undefined}
            />

            <motion.div
              aria-hidden="true"
              className="
                absolute
                h-[300px]
                w-[300px]
                translate-x-20
                -translate-y-10
                rounded-full
                bg-blue-500/10
                blur-[80px]
                dark:bg-blue-500/10
              "
              style={!isMobile ? { x: imageX, y: imageY } : undefined}
            />

            {/* Image wrapper */}

            <motion.div
              style={!isMobile ? { x: imageX, y: imageY } : undefined}
              className="
                relative
                z-10
                h-[390px]
                w-[310px]
                sm:h-[470px]
                sm:w-[370px]
              "
            >
              {/* Outer border */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-[2rem]
                  border
                  border-violet-500/15
                  bg-gradient-to-br
                  from-violet-500/[0.08]
                  to-blue-500/[0.04]
                  dark:border-violet-400/15
                "
              />

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[1.7rem]
                  border
                  border-slate-200
                  bg-white
                  shadow-2xl
                  shadow-slate-900/10
                  dark:border-white/10
                  dark:bg-slate-900
                  dark:shadow-black/40
                "
              >
                <Image
                  src="/profile.png"
                  alt="Muhammad Umair Akram - Odoo Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 310px, 370px"
                  className="object-cover object-top"
                />

                {/* Image overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/20
                    via-transparent
                    to-transparent
                    dark:from-slate-950/30
                  "
                />
              </motion.div>

              {/* =================================================
                  FLOATING CARDS
              ================================================= */}

              <FloatingCard
                icon={Code2}
                label="Experience"
                value="1+ Year"
                subtitle="Odoo Development"
                position="-right-5 top-8"
                delay={0.5}
              />

              <FloatingCard
                icon={Globe}
                label="Frontend"
                value="2+ Years"
                subtitle="Next.js · React"
                position="-left-7 bottom-28"
                delay={0.7}
              />

              {/* Bottom stats */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="
                  absolute
                  -bottom-5
                  left-1/2
                  z-30
                  w-[92%]
                  -translate-x-1/2
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-white/90
                  px-4
                  py-4
                  shadow-xl
                  shadow-slate-900/10
                  backdrop-blur-xl
                  dark:border-white/10
                  dark:bg-slate-900/90
                  dark:shadow-black/30
                "
              >
                <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-white/10">
                  <div className="px-2 text-center">
                    <p className="text-lg font-black text-slate-900 dark:text-white">
                      1+
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                      Year Odoo
                    </p>
                  </div>

                  <div className="px-2 text-center">
                    <p className="text-lg font-black text-slate-900 dark:text-white">
                      2+
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                      Years Frontend
                    </p>
                  </div>

                  <div className="px-2 text-center">
                    <p className="text-lg font-black text-slate-900 dark:text-white">
                      10+
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                      Projects
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          md:flex
        "
      >
        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-9
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-slate-300
            p-1
            dark:border-white/20
          "
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1
              rounded-full
              bg-violet-500
            "
          />
        </motion.div>

        <span
          className="
            mt-2
            text-[10px]
            font-medium
            text-slate-400
            dark:text-slate-500
          "
        >
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}