"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  Zap,
  Monitor,
  ExternalLink,
  Github,
  Linkedin,
} from "lucide-react"

/* =========================================================
   CURSOR GLOW
========================================================= */

function CursorGlow() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 25, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 25, mass: 0.5 })

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) return
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden md:block h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.10) 35%, transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-0 hidden md:block h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(14,165,233,0.18), transparent 70%)",
        }}
      />
    </>
  )
}

/* =========================================================
   TECH STACK DATA
========================================================= */

const techStack = [
  { icon: Globe,   name: "Next.js",     desc: "App Router · SSR · SSG", primary: true },
  { icon: Code2,   name: "React",       desc: "Hooks · Context · RSC",  primary: true },
  { icon: Layers,  name: "Tailwind CSS",desc: "Utility-first Styling",  primary: true },
  { icon: Zap,     name: "Framer Motion",desc: "Animations & Transitions", primary: false },
  { icon: Monitor, name: "TypeScript",  desc: "Type-safe Development",  primary: false },
]

/* =========================================================
   FRONTEND HERO
========================================================= */

export default function FrontendHero() {
  const [isMobile, setIsMobile] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.5 })

  const visualX = useTransform(smoothX, [-500, 500], [-10, 10])
  const visualY = useTransform(smoothY, [-500, 500], [-8, 8])

  const textX = useTransform(smoothX, [-500, 500], [-3, 3])
  const textY = useTransform(smoothY, [-500, 500], [-2, 2])

  const orbX = useTransform(smoothX, [-500, 500], [-30, 30])
  const orbY = useTransform(smoothY, [-500, 500], [-25, 25])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [isMobile, mouseX, mouseY])

  const scrollToProjects = () => {
    document.querySelector("#frontend-projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="frontend-home"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#070b18] dark:text-white"
    >
      {/* ── BACKGROUND ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.09),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.09),transparent_30%)]" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[120px] dark:bg-blue-500/[0.08]"
          style={{ x: orbX, y: orbY }}
        />

        <motion.div
          className="absolute -left-32 top-40 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-3xl dark:bg-cyan-500/[0.08]"
          animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-400/[0.06] blur-3xl dark:bg-indigo-500/[0.08]"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <CursorGlow />

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-24 lg:px-10 xl:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* ── LEFT ── */}
          <motion.div
            style={!isMobile ? { x: textX, y: textY } : undefined}
            className="relative z-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-400/5 dark:text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Available for Frontend Projects
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-500 dark:text-blue-400"
            >
              FRONTEND DEVELOPER
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-4xl text-5xl font-black leading-[1.0] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              <span className="block text-slate-950 dark:text-white">Frontend</span>
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text pb-2 text-transparent">
                Developer
              </span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-2"
            >
              <span className="text-lg font-black text-slate-900 dark:text-white sm:text-2xl">
                Next.js
              </span>
              <span className="text-blue-400 dark:text-blue-500">•</span>
              <span className="text-lg font-black text-slate-900 dark:text-white sm:text-2xl">
                React
              </span>
              <span className="text-blue-400 dark:text-blue-500">•</span>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 sm:text-base">
                Tailwind CSS
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              I build modern, responsive web applications using
              <span className="font-semibold text-slate-800 dark:text-slate-200"> Next.js</span> and
              <span className="font-semibold text-slate-800 dark:text-slate-200"> React</span>, with
              <span className="font-semibold text-slate-800 dark:text-slate-200"> Tailwind CSS</span> for
              pixel-perfect, performant UIs that users love.
            </motion.p>

            {/* Skill tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 flex max-w-2xl flex-wrap gap-2"
            >
              {[
                { name: "Next.js",      primary: true  },
                { name: "React",        primary: true  },
                { name: "Tailwind CSS", primary: true  },
                { name: "TypeScript",   primary: false },
                { name: "JavaScript",   primary: false },
                { name: "Framer Motion",primary: false },
                { name: "REST APIs",    primary: false },
              ].map(({ name, primary }) => (
                <motion.span
                  key={name}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                    primary
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-300"
                      : "border-slate-200 bg-white/70 text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                  }`}
                >
                  {name}
                </motion.span>
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
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-shadow hover:shadow-xl hover:shadow-blue-500/30"
              >
                View Frontend Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.button>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition-all hover:border-blue-400 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.07]"
              >
                Let's Talk
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Social */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {[
                { name: "GitHub",   href: "https://github.com/Umair-Alvi",                    icon: Github   },
                { name: "LinkedIn", href: "https://www.linkedin.com/in/umair-akram-dev/",       icon: Linkedin },
              ].map(({ name, href, icon: Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-all hover:border-blue-400 hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                  <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>{name}</span>
                  <ExternalLink className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT — Photo + Tech Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative flex min-h-[520px] flex-col items-center justify-center gap-5 lg:min-h-[600px]"
          >
            {/* Glow */}
            <motion.div
              aria-hidden
              className="absolute h-[390px] w-[390px] rounded-full bg-blue-500/10 blur-[90px] dark:bg-blue-500/15"
              style={!isMobile ? { x: visualX, y: visualY } : undefined}
            />
            <motion.div
              aria-hidden
              className="absolute h-[300px] w-[300px] translate-x-20 -translate-y-10 rounded-full bg-cyan-500/10 blur-[80px] dark:bg-cyan-500/10"
              style={!isMobile ? { x: visualX, y: visualY } : undefined}
            />

            <motion.div
              style={!isMobile ? { x: visualX, y: visualY } : undefined}
              className="relative z-10 flex w-full max-w-[420px] flex-col gap-4"
            >
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-dashed border-blue-500/15 dark:border-blue-400/15"
              />

              {/* ── PHOTO CARD ── */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30"
              >
                {/* Mac bar */}
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">umair.dev / frontend</span>
                  <div className="w-14" />
                </div>

                {/* Photo */}
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Umair Akram - Frontend Developer"
                    fill
                    priority
                    sizes="420px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-slate-900/60" />
                </div>

                {/* Name strip */}
                <div className="px-5 py-4">
                  <p className="text-sm font-black text-slate-900 dark:text-white">Muhammad Umair Akram</p>
                  <p className="mt-0.5 text-xs text-blue-500 dark:text-blue-400">Frontend Developer · Next.js · React · Tailwind</p>
                </div>
              </motion.div>

              {/* ── TECH STACK CARD ── */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-xl shadow-slate-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">

                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Tech Stack</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modern Frontend Tools</p>
                  </div>
                </div>

                {/* Stack list */}
                <div className="space-y-2">
                  {techStack.map((tech, i) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-2.5 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tech.primary ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "bg-slate-100 text-slate-500 dark:bg-white/[0.06] dark:text-slate-400"}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{tech.name}</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-500">{tech.desc}</p>
                        </div>
                        {tech.primary && (
                          <span className="ml-auto shrink-0 rounded-md bg-blue-500/10 px-1.5 py-0.5 text-[9px] font-bold text-blue-600 dark:text-blue-400">
                            PRIMARY
                          </span>
                        )}
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Floating badge — Next.js */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-16 z-20 hidden rounded-2xl border border-blue-500/20 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Framework</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Next.js</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — React */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 bottom-28 z-20 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-500">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Library</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">React</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-slate-300 p-1 dark:border-white/20"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-blue-500"
          />
        </motion.div>
        <span className="mt-2 text-[10px] font-medium text-slate-400 dark:text-slate-500">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}