"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Code2,
  Check,
  Share2,
  ChevronRight,
  TrendingUp,
  Video,
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
} from "lucide-react"
import { projectsData } from "@/app/data/projects"

function getVideoInfo(url) {
  if (!url || typeof url !== "string") return null
  const trimmed = url.trim()
  const ytWatchMatch = trimmed.match(/(?:youtube\.com\/watch\?v=)([^&]+)/)
  if (ytWatchMatch && ytWatchMatch[1]) return { type: "iframe", url: `https://www.youtube.com/embed/${ytWatchMatch[1]}` }
  const ytShortMatch = trimmed.match(/(?:youtu\.be\/)([^?&]+)/)
  if (ytShortMatch && ytShortMatch[1]) return { type: "iframe", url: `https://www.youtube.com/embed/${ytShortMatch[1]}` }
  if (trimmed.includes("youtube.com/embed/")) return { type: "iframe", url: trimmed }
  const vimeoMatch = trimmed.match(/(?:vimeo\.com\/)([^?&]+)/)
  if (vimeoMatch && vimeoMatch[1]) return { type: "iframe", url: `https://player.vimeo.com/video/${vimeoMatch[1]}` }
  if (/\.(mp4|webm|ogg)$/i.test(trimmed)) return { type: "video", url: trimmed }
  return { type: "iframe", url: trimmed }
}

export default function ProjectDetailClient({ project }) {
  const [selectedImage, setSelectedImage] = useState(
    project.mainImage || (project.images && project.images[0]) || "/placeholder.svg"
  )
  const [copied, setCopied] = useState(false)

  // ── Lightbox state ──
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const panStart = useRef({ x: 0, y: 0 })

  const MIN_ZOOM = 1
  const MAX_ZOOM = 4
  const ZOOM_STEP = 0.5

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setZoom(1)
    setPan({ x: 0, y: 0 })
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const goPrev = () => {
    setLightboxIndex((i) => (i - 1 + project.images.length) % project.images.length)
    setZoom(1); setPan({ x: 0, y: 0 })
  }

  const goNext = () => {
    setLightboxIndex((i) => (i + 1) % project.images.length)
    setZoom(1); setPan({ x: 0, y: 0 })
  }

  const zoomIn = () => setZoom((z) => Math.min(MAX_ZOOM, parseFloat((z + ZOOM_STEP).toFixed(1))))
  const zoomOut = () => {
    setZoom((z) => {
      const next = Math.max(MIN_ZOOM, parseFloat((z - ZOOM_STEP).toFixed(1)))
      if (next === 1) setPan({ x: 0, y: 0 })
      return next
    })
  }
  const resetZoom = () => { setZoom(1); setPan({ x: 0, y: 0 }) }

  // Keyboard support
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "+" || e.key === "=") zoomIn()
      if (e.key === "-") zoomOut()
      if (e.key === "0") resetZoom()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen, zoom])

  // Scroll wheel zoom
  const handleWheel = (e) => {
    e.preventDefault()
    e.deltaY < 0 ? zoomIn() : zoomOut()
  }

  // Drag to pan
  const handleMouseDown = (e) => {
    if (zoom <= 1) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
    panStart.current = { ...pan }
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return
    setPan({
      x: panStart.current.x + (e.clientX - dragStart.current.x),
      y: panStart.current.y + (e.clientY - dragStart.current.y),
    })
  }
  const handleMouseUp = () => setIsDragging(false)

  const videoInfo = getVideoInfo(project.videoUrl || project.video)

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#"
  const hasGithub = project.githubUrl && project.githubUrl !== "#"
  const relatedProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3)

  return (
    <div className="relative min-h-screen bg-white text-slate-950 dark:bg-[#0a0f1d] dark:text-white pt-24 pb-20 overflow-hidden">

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox() }}
          >
            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/70 to-transparent">
              <span className="text-sm font-medium text-white/60">
                {project.title} — {lightboxIndex + 1} / {project.images.length}
              </span>

              {/* Zoom controls */}
              <div className="flex items-center gap-1 rounded-xl bg-white/10 px-2 py-1 backdrop-blur-sm">
                <button
                  onClick={zoomOut}
                  disabled={zoom <= MIN_ZOOM}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition hover:bg-white/20 disabled:opacity-30"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  onClick={resetZoom}
                  className="min-w-[3rem] rounded-lg px-2 py-1 text-xs font-bold text-white transition hover:bg-white/20"
                >
                  {Math.round(zoom * 100)}%
                </button>
                <button
                  onClick={zoomIn}
                  disabled={zoom >= MAX_ZOOM}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition hover:bg-white/20 disabled:opacity-30"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={closeLightbox}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Prev */}
            {project.images.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            {/* Image */}
            <div
              className="relative h-full w-full overflow-hidden"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <div
                    style={{
                      transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                      transition: isDragging ? "none" : "transform 0.15s ease",
                    }}
                  >
                    <div className="relative" style={{ width: "min(88vw, 1200px)", height: "min(80vh, 900px)" }}>
                      <Image
                        src={project.images[lightboxIndex]}
                        alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                        fill
                        className="object-contain select-none"
                        draggable={false}
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            {project.images.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Thumbnail strip */}
            {project.images.length > 1 && (
              <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-4 py-4">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setLightboxIndex(i); setZoom(1); setPan({ x: 0, y: 0 }) }}
                    className={`relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      i === lightboxIndex
                        ? "border-violet-500 opacity-100 ring-2 ring-violet-500/30"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GLOWS */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/15"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 35, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-500/15"
        />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* TOP NAV */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-8 flex items-center justify-between">
          <Link href="/projects" className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:text-violet-400">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects</span>
          </Link>
          <button type="button" onClick={handleShare} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:text-violet-400">
            {copied ? (<><Check className="h-4 w-4 text-emerald-500" /><span className="text-emerald-500">Link Copied!</span></>) : (<><Share2 className="h-4 w-4" /><span>Share Project</span></>)}
          </button>
        </motion.div>

        {/* HERO */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-violet-600 dark:border-violet-400/30 dark:bg-violet-400/10 dark:text-violet-400">
            <Sparkles className="h-3.5 w-3.5" /><span>{(project.category || "Project").toUpperCase()}</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl text-slate-950 dark:text-white leading-tight">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">{project.shortDesc}</p>
          <div className="mt-8 flex flex-wrap items-center gap-6 border-y border-slate-200 py-5 dark:border-white/10">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><User className="h-4 w-4 text-violet-500" /><span className="font-semibold text-slate-900 dark:text-white">Client:</span><span>{project.client || "N/A"}</span></div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Clock className="h-4 w-4 text-violet-500" /><span className="font-semibold text-slate-900 dark:text-white">Duration:</span><span>{project.duration || "N/A"}</span></div>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Calendar className="h-4 w-4 text-violet-500" /><span className="font-semibold text-slate-900 dark:text-white">Year:</span><span>{project.year || "2024"}</span></div>
            <div className="flex-1" />
            <div className="flex items-center gap-3">
              {hasLiveDemo && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40"><span>Live Preview</span><ExternalLink className="h-4 w-4" /></a>)}
              {hasGithub && (<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/30"><Github className="h-4 w-4" /><span>View Code</span></a>)}
            </div>
          </div>
        </motion.div>

        {/* MAIN IMAGE */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl dark:border-white/10 dark:bg-slate-900">
          <div className="relative h-[340px] sm:h-[480px] lg:h-[560px] w-full">
            <Image src={selectedImage} alt={project.title} fill priority className="object-cover transition-transform duration-700 hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* 2-COL LAYOUT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">

            {/* Overview */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-950 dark:text-white"><Layers className="h-6 w-6 text-violet-500" />Project Overview</h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">{project.fullDesc || project.shortDesc}</p>
            </motion.section>

            {/* Video */}
            {videoInfo && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-950 dark:text-white mb-6"><Video className="h-6 w-6 text-violet-500" />Video Walkthrough</h2>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl dark:border-white/10">
                  {videoInfo.type === "video" ? (<video src={videoInfo.url} controls className="h-full w-full object-cover" />) : (<iframe src={videoInfo.url} title={`${project.title} Video Walkthrough`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" />)}
                </div>
              </motion.section>
            )}

            {/* Challenge / Solution / Results */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6">
              {project.challenges && (<div className="rounded-3xl border border-rose-500/20 bg-rose-500/5 p-7 dark:border-rose-500/30 dark:bg-rose-500/10"><h3 className="flex items-center gap-2.5 text-lg font-bold text-rose-600 dark:text-rose-400"><AlertCircle className="h-5 w-5" />The Challenge</h3><p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{project.challenges}</p></div>)}
              {project.solution && (<div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-7 dark:border-emerald-500/30 dark:bg-emerald-500/10"><h3 className="flex items-center gap-2.5 text-lg font-bold text-emerald-600 dark:text-emerald-400"><CheckCircle2 className="h-5 w-5" />The Solution</h3><p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{project.solution}</p></div>)}
              {project.results && (<div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-7 dark:border-blue-500/30 dark:bg-blue-500/10"><h3 className="flex items-center gap-2.5 text-lg font-bold text-blue-600 dark:text-blue-400"><TrendingUp className="h-5 w-5" />Results & Impact</h3><p className="mt-3 text-slate-700 dark:text-slate-300 leading-relaxed">{project.results}</p></div>)}
            </motion.div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
                <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-950 dark:text-white"><Sparkles className="h-6 w-6 text-violet-500" />Key Features</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 transition-all hover:border-violet-300 dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-violet-500/30">
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400"><Check className="h-3.5 w-3.5" /></div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* ── Image Gallery (updated) ── */}
            {project.images && project.images.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.02]"
              >
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Project Gallery
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.images.map((imgUrl, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group relative h-32 overflow-hidden rounded-2xl border-2 border-transparent opacity-75 transition-all hover:border-violet-400/60 hover:opacity-100"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Zoom hint */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/25">
                        <div className="scale-0 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-transform duration-200 group-hover:scale-100">
                          <ZoomIn className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-950 dark:text-white"><Code2 className="h-5 w-5 text-violet-500" />Technologies Used</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech?.map((tag, idx) => (<span key={idx} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">{tag}</span>))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Project Information</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-100 pb-3 dark:border-white/[0.06]"><span className="text-slate-500 dark:text-slate-400">Client</span><span className="font-semibold text-slate-900 dark:text-white">{project.client || "Internal / Practice"}</span></div>
                <div className="flex justify-between border-b border-slate-100 pb-3 dark:border-white/[0.06]"><span className="text-slate-500 dark:text-slate-400">Category</span><span className="font-semibold text-slate-900 dark:text-white capitalize">{project.category || "Web App"}</span></div>
                <div className="flex justify-between border-b border-slate-100 pb-3 dark:border-white/[0.06]"><span className="text-slate-500 dark:text-slate-400">Duration</span><span className="font-semibold text-slate-900 dark:text-white">{project.duration || "N/A"}</span></div>
                <div className="flex justify-between"><span className="text-slate-500 dark:text-slate-400">Release Year</span><span className="font-semibold text-slate-900 dark:text-white">{project.year || "2024"}</span></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent p-7 text-center dark:border-violet-500/30">
              <h4 className="text-lg font-bold text-slate-950 dark:text-white">Need a similar project?</h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Let's discuss how we can build a customized solution for your business.</p>
              <Link href="/#contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:bg-violet-700"><span>Let's Talk</span><ArrowUpRight className="h-4 w-4" /></Link>
            </motion.div>
          </div>
        </div>

        {/* MORE PROJECTS */}
        {relatedProjects.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-24 border-t border-slate-200 pt-16 dark:border-white/10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">More Projects</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Explore other digital solutions I've developed</p>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"><span>View All</span><ChevronRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relProject) => (
                <Link key={relProject.id} href={`/projects/${relProject.slug}`} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-violet-500/30">
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <Image src={relProject.mainImage || "/placeholder.svg"} alt={relProject.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-950 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">{relProject.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-600 dark:text-slate-400">{relProject.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}