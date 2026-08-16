"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  ShoppingBag,
  Code2,
  Palette,
  Smartphone,
  ExternalLink,
  TrendingUp,
} from "lucide-react"

/* =========================================================
   CURSOR GLOW
========================================================= */

function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 25 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-0 hidden md:block h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
      style={{
        left: smoothX,
        top: smoothY,
        background: "radial-gradient(circle, rgba(16,185,129,0.13), rgba(59,130,246,0.08), transparent 70%)",
      }}
    />
  )
}

/* =========================================================
   SERVICES LIST
========================================================= */

const services = [
  { icon: ShoppingBag, title: "Shopify Store Development" },
  { icon: Code2,       title: "Liquid Customization" },
  { icon: Palette,     title: "Theme Customization" },
  { icon: Smartphone,  title: "Mobile Optimization" },
]

/* =========================================================
   SHOPIFY HERO
========================================================= */

export default function ShopifyHero() {
  const [isMobile, setIsMobile] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const visualX = useTransform(smoothX, [-500, 500], [-10, 10])
  const visualY = useTransform(smoothY, [-500, 500], [-8, 8])

  const orbX = useTransform(smoothX, [-500, 500], [-25, 25])
  const orbY = useTransform(smoothY, [-500, 500], [-20, 20])

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
    document.querySelector("#shopify-projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="shopify-home"
      className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#070b18] dark:text-white"
    >
      {/* ── BACKGROUND ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.09),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.11),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.08),transparent_30%)]" />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.05] blur-[120px] dark:bg-emerald-500/[0.08]"
          style={{ x: orbX, y: orbY }}
        />

        <motion.div
          className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-teal-400/[0.05] blur-3xl dark:bg-teal-500/[0.07]"
          animate={{ x: [0, 35, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-400/[0.05] blur-3xl dark:bg-emerald-500/[0.07]"
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

            {/* Badge */}
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
              Available for Shopify Projects
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400"
            >
              SHOPIFY DEVELOPER
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-4xl text-5xl font-black leading-[.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            >
              <span className="block text-slate-950 dark:text-white">Shopify</span>
              <span
  className="
    text-transparent bg-clip-text
    bg-gradient-to-r
    from-slate-900 via-blue-700 to-blue-500
    dark:from-white dark:via-blue-400 dark:to-blue-600
  "
  
>
  Developer
</span>
            </motion.h1>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-bold text-slate-800 dark:text-slate-100 sm:text-xl"
            >
              <span className="text-emerald-600 dark:text-emerald-400">Shopify</span>
              <span className="text-slate-400">•</span>
              <span>Liquid</span>
              <span className="text-slate-400">•</span>
              <span>E-Commerce</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg"
            >
              I build and customize Shopify stores with clean themes, responsive layouts,
              <span className="font-semibold text-slate-800 dark:text-slate-200"> Liquid development</span>, and
              <span className="font-semibold text-slate-800 dark:text-slate-200"> conversion-focused</span> e-commerce experiences.
            </motion.p>

            {/* Skill tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 flex max-w-2xl flex-wrap gap-2"
            >
              {[
                { name: "Shopify", primary: true },
                { name: "Liquid", primary: true },
                { name: "Theme Customization", primary: true },
                { name: "HTML", primary: false },
                { name: "CSS", primary: false },
                { name: "JavaScript", primary: false },
                { name: "Responsive Design", primary: false },
              ].map(({ name, primary }) => (
                <motion.span
                  key={name}
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                    primary
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
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
                onClick={scrollToProjects}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl hover:shadow-emerald-500/30"
              >
                View Shopify Work
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition-all hover:border-emerald-400 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.07]"
              >
                Let's Talk
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT — Photo + Service Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative flex min-h-[480px] flex-col items-center justify-center gap-5 lg:min-h-[560px]"
          >
            {/* Glow */}
            <motion.div
              aria-hidden
              className="absolute h-[350px] w-[350px] rounded-full bg-emerald-500/[0.08] blur-[90px] dark:bg-emerald-500/[0.12]"
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
                className="pointer-events-none absolute -inset-5 rounded-[2.5rem] border border-dashed border-emerald-500/15 dark:border-emerald-400/15"
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
                  <span className="text-xs font-medium text-slate-400">umair.dev / shopify</span>
                  <div className="w-14" />
                </div>

                {/* Photo */}
                <div className="relative h-[220px] w-full sm:h-[260px]">
                  <Image
                    src="/profile.png"
                    alt="Muhammad Umair Akram - Shopify Developer"
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
                  <p className="mt-0.5 text-xs text-emerald-500 dark:text-emerald-400">Shopify Developer · Liquid · E-Commerce</p>
                </div>
              </motion.div>

              {/* ── SERVICES CARD ── */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/75 p-5 shadow-xl shadow-slate-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">

                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Shopify Development</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">E-Commerce Solutions</p>
                  </div>
                </div>

                {/* Services list */}
                <div className="space-y-2">
                  {services.map((service, i) => {
                    const Icon = service.icon
                    return (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-2.5 dark:border-white/10 dark:bg-white/[0.03]"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{service.title}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 py-3 dark:divide-white/10 dark:border-white/10">
                  <div className="text-center">
                    <p className="font-black text-slate-900 dark:text-white">10+</p>
                    <p className="text-[10px] text-slate-500">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-slate-900 dark:text-white">100%</p>
                    <p className="text-[10px] text-slate-500">Responsive</p>
                  </div>
                  <div className="text-center">
                    <p className="font-black text-slate-900 dark:text-white">Custom</p>
                    <p className="text-[10px] text-slate-500">Solutions</p>
                  </div>
                </div>
              </div>

              {/* Floating badge — Live Store */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-16 z-20 hidden rounded-2xl border border-emerald-500/20 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Live Stores</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">10+ Built</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — Liquid */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-5 bottom-28 z-20 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 sm:block"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-teal-500/10 p-2 text-teal-500">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Language</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Liquid</p>
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
            className="h-1.5 w-1 rounded-full bg-emerald-500"
          />
        </motion.div>
        <span className="mt-2 text-[10px] text-slate-400">Scroll to explore</span>
      </motion.div>
    </section>
  )
}