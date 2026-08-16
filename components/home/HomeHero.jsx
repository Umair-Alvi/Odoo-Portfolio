"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  ShoppingBag,
  FileCode2,
} from "lucide-react"

/* =========================================================
   CURSOR GLOW
========================================================= */

function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 25, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 25, mass: 0.5 })

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    if (!media.matches) return
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 hidden md:block h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.07) 40%, transparent 72%)",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-0 hidden md:block h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          left: smoothX,
          top: smoothY,
          background: "radial-gradient(circle, rgba(59,130,246,0.16), transparent 70%)",
        }}
      />
    </>
  )
}

/* =========================================================
   SKILL CARD
========================================================= */

function SkillCard({ icon: Icon, title, subtitle, href, featured = false }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -7, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
          featured
            ? "border-violet-500/30 bg-violet-500/[0.07] shadow-lg shadow-violet-500/5 dark:bg-violet-500/[0.08]"
            : "border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
        }`}
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              featured
                ? "bg-violet-500/15 text-violet-600 dark:text-violet-400"
                : "bg-slate-100 text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
            }`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-slate-900 dark:text-white">{title}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>
          </div>
          <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-500" />
        </div>
      </motion.div>
    </Link>
  )
}

/* =========================================================
   HOME HERO
========================================================= */

export default function HomeHero() {
  const [isMobile, setIsMobile] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 0.5 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 0.5 })

  const visualX = useTransform(smoothX, [-500, 500], [-10, 10])
  const visualY = useTransform(smoothY, [-500, 500], [-8, 8])

  const orbX = useTransform(smoothX, [-500, 500], [-25, 25])
  const orbY = useTransform(smoothY, [-500, 500], [-20, 20])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const handleMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [isMobile, mouseX, mouseY])

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#070b18] dark:text-white"
    >
      {/* ── BACKGROUND ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.08),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.07),transparent_30%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.13),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(14,165,233,0.08),transparent_30%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.045] blur-[120px] dark:bg-violet-500/[0.07]"
          style={{ x: orbX, y: orbY }}
        />
        <motion.div
          className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-blue-400/[0.05] blur-3xl dark:bg-blue-500/[0.07]"
          animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-400/[0.05] blur-3xl dark:bg-violet-500/[0.07]"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 opacity-[0.018] dark:opacity-[0.03] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <CursorGlow />

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center px-6 py-20 lg:px-10 xl:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

          {/* ── LEFT ── */}
          <div className="relative z-20">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/5 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for Freelance Projects
            </motion.div>

            {/* Intro label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-violet-600 dark:text-violet-400"
            >
              ODOO • SHOPIFY • FRONTEND • WORDPRESS
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            >
              <span className="block text-slate-950 dark:text-white">Muhammad</span>
              <span className="block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Umair Akram
              </span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-bold text-slate-800 dark:text-slate-100 sm:text-xl"
            >
              <span className="text-violet-600 dark:text-violet-400">Odoo Developer</span>
              <span className="text-slate-400">•</span>
              <span>Shopify Developer</span>
              <span className="text-slate-400">•</span>
              <span>Frontend Developer</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              I build business-focused digital solutions with
              <span className="font-semibold text-slate-800 dark:text-slate-200"> Odoo</span>,
              create high-converting
              <span className="font-semibold text-slate-800 dark:text-slate-200"> Shopify stores</span>,
              and develop modern
              <span className="font-semibold text-slate-800 dark:text-slate-200"> frontend experiences</span>
              {" "}for businesses and clients.
            </motion.p>

            {/* Skill cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <SkillCard icon={BriefcaseBusiness} title="Odoo" subtitle="Development & Customization" href="/odoo" featured />
              <SkillCard icon={ShoppingBag} title="Shopify" subtitle="Stores & Theme Development" href="/shopify" />
              <SkillCard icon={Code2} title="Frontend" subtitle="Next.js & React" href="/frontend" />
              <SkillCard icon={FileCode2} title="WordPress" subtitle="Websites & Elementor" href="/wordpress" />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/odoo">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/30 sm:w-auto"
                >
                  Explore My Work
                  <ArrowUpRight className="h-4 w-4" />
                </motion.div>
              </Link>

              <a href="#contact">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition-all hover:border-violet-400 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.07] sm:w-auto"
                >
                  Let's Work Together
                </motion.div>
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-7 flex items-center gap-3"
            >
              <span className="text-xs font-medium text-slate-400">Find me on</span>
              <a
                href="https://github.com/Umair-Alvi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition-all hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-violet-400"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/umair-akram-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-200 bg-white/60 p-2.5 text-slate-600 transition-all hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:text-blue-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT — Photo + Code Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative flex min-h-[480px] flex-col items-center justify-center gap-5 lg:min-h-[560px]"
          >
            {/* Glow behind */}
            <motion.div
              aria-hidden="true"
              className="absolute h-[350px] w-[350px] rounded-full bg-violet-500/[0.08] blur-[90px] dark:bg-violet-500/[0.12]"
              style={!isMobile ? { x: visualX, y: visualY } : undefined}
            />

            <motion.div
              style={!isMobile ? { x: visualX, y: visualY } : undefined}
              className="relative z-10 flex w-full max-w-[420px] flex-col gap-4"
            >
              {/* Decorative rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-dashed border-violet-500/15 dark:border-violet-400/15"
              />

              {/* ── PHOTO CARD ── */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/75 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 dark:shadow-black/30"
              >
                {/* Mac-style top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">umair.dev</span>
                  <div className="w-14" />
                </div>

                {/* Profile photo */}
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Umair Akram"
                    fill
                    priority
                    sizes="420px"
                    className="object-cover object-top"
                  />
                  {/* Subtle bottom fade so it blends into the code card below */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-slate-900/60" />
                </div>

                {/* Name strip inside photo card */}
                <div className="px-5 py-4">
                  <p className="text-sm font-black text-slate-900 dark:text-white">Muhammad Umair Akram</p>
                  <p className="mt-0.5 text-xs text-violet-500 dark:text-violet-400">Odoo · Shopify · Frontend · WordPress</p>
                </div>
              </motion.div>

              {/* ── CODE CARD ── */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-xl shadow-slate-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
                {/* Code-style intro */}
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-slate-400">
                    <span className="text-violet-500">const</span> developer = {"{"}
                  </p>
                  <p className="pl-5 text-slate-600 dark:text-slate-300">
                    primary: <span className="text-violet-500">"Odoo Developer"</span>,
                  </p>
                  <p className="pl-5 text-slate-600 dark:text-slate-300">stack: [</p>
                  <div className="ml-10 space-y-1.5">
                    {["Odoo / Python", "Shopify / Liquid", "Next.js / React", "WordPress"].map((item, i) => (
                      <motion.p
                        key={item}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.12 }}
                        className="text-slate-500 dark:text-slate-400"
                      >
                        <span className="text-violet-500">"</span>
                        {item}
                        <span className="text-violet-500">"</span>
                        {i !== 3 && ","}
                      </motion.p>
                    ))}
                  </div>
                  <p className="pl-5 text-slate-600 dark:text-slate-300">]</p>
                  <p className="text-slate-400">{"}"}</p>
                </div>

                {/* Bottom message */}
                <div className="mt-4 rounded-xl border border-violet-500/10 bg-violet-500/[0.05] p-3 dark:bg-violet-500/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Building solutions that work.</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Business • E-commerce • Web</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Odoo badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-16 z-20 hidden rounded-2xl border border-violet-500/20 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-violet-500/10 p-2 text-violet-500">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Primary Skill</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Odoo</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Shopify badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 bottom-28 z-20 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-green-500/10 p-2 text-green-500">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">E-commerce</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Shopify</p>
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
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-300 p-1 dark:border-white/20"
        >
          <motion.div
            animate={{ y: [0, 7, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-violet-500"
          />
        </motion.div>
        <span className="mt-2 text-[10px] text-slate-400">Scroll to explore</span>
      </motion.div>
    </section>
  )
}