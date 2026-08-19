"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Github,
  Layers3,
  SearchX,
} from "lucide-react"

import { projectsData } from "@/app/data/projects"

const CATEGORY_LABELS = {
  odoo: "Odoo",
  shopify: "Shopify",
  frontend: "Frontend",
  wordpress: "WordPress",
  other: "Other",
}

function normalizeCategory(value) {
  return (value || "other").toLowerCase()
}

function getCategoryLabel(categoryKey) {
  return (
    CATEGORY_LABELS[categoryKey] ||
    categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)
  )
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  })

  // Card tilt
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4])

  // Cursor glow position
  const glowLeft = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"])
  const glowTop = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"])

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

  const hasLiveDemo =
    project.links?.live && project.links.live !== "#"

  const hasGithub =
    project.links?.github && project.links.github !== "#"

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.08, 0.3),
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
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
        h-full
        rounded-3xl
      "
    >
      {/* ==========================================
          CURSOR FOLLOW GLOW
      ========================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-20
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/20
          blur-[70px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          dark:bg-violet-500/25
        "
        style={{
          left: glowLeft,
          top: glowTop,
        }}
      />

      {/* Secondary blue glow */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-20
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-400/20
          blur-[35px]
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          dark:bg-blue-400/25
        "
        style={{
          left: glowLeft,
          top: glowTop,
        }}
      />

      {/* ==========================================
          CARD
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-sm
          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:border-violet-300
          group-hover:shadow-2xl
          group-hover:shadow-violet-500/10

          dark:border-white/[0.08]
          dark:bg-white/[0.025]
          dark:group-hover:border-violet-500/30
        "
      >
        {/* Image */}

        <div
          className="
            relative
            h-60
            overflow-hidden
            bg-slate-100
            dark:bg-slate-900
            sm:h-64
          "
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} project preview`}
            fill
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              600px
            "
            className="
              object-cover
              transition-all
              duration-700
              group-hover:scale-105
            "
          />

          {project.hoverImage && (
            <Image
              src={project.hoverImage}
              alt={`${project.title} hover preview`}
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                600px
              "
              className="
                absolute
                inset-0
                object-cover
                opacity-0
                transition-all
                duration-700
                group-hover:opacity-100
                group-hover:scale-105
              "
            />
          )}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />

          {/* Category */}

          <div
            className="
              absolute
              left-4
              top-4
              rounded-full
              border
              border-white/20
              bg-black/50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            {project.categoryLabel}
          </div>
        </div>

        {/* Content */}

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <h3
            className="
              text-xl
              font-bold
              text-slate-950
              transition-colors
              group-hover:text-violet-600
              dark:text-white
              dark:group-hover:text-violet-400
              sm:text-2xl
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags?.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="
                  rounded-lg
                  border
                  border-slate-200
                  bg-slate-50
                  px-2.5
                  py-1.5
                  text-[11px]
                  font-medium
                  text-slate-600

                  dark:border-white/[0.08]
                  dark:bg-white/[0.03]
                  dark:text-slate-400
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex-1" />

          <div className="my-6 h-px bg-slate-200 dark:bg-white/[0.08]" />

          {/* Buttons */}

          <div className="flex flex-col gap-2">
            

            {(hasLiveDemo || hasGithub) && (
              <div className="flex gap-2">
                {hasLiveDemo && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-slate-200
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-slate-700
                      transition-all
                      hover:border-violet-400
                      hover:text-violet-600

                      dark:border-white/10
                      dark:text-slate-300
                      dark:hover:text-violet-400
                    "
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                )}

                {hasGithub && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-1.5
                      rounded-xl
                      border
                      border-slate-200
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-slate-700
                      transition-all
                      hover:border-slate-400
                      hover:text-slate-950

                      dark:border-white/10
                      dark:text-slate-300
                      dark:hover:text-white
                    "
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}
              </div>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-blue-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-violet-500/20
              "
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* =========================================================
   PROJECTS
========================================================= */

export default function Projects({
  category = "all",
  limit = 4,
  isMainPage = false,
  onCategoryChange = null,
  viewMoreUrl = null,
}) {
  const categoryProp = normalizeCategory(category)
  const [activeFilter, setActiveFilter] = useState(categoryProp)

  useEffect(() => {
    setActiveFilter(categoryProp)
  }, [categoryProp])

  const handleFilterClick = (filterValue) => {
    setActiveFilter(filterValue)
    if (onCategoryChange) {
      onCategoryChange(filterValue)
    }
  }

  const effectiveViewMoreUrl = useMemo(() => {
    if (viewMoreUrl) return viewMoreUrl
    if (activeFilter === "all") return "/projects"
    return `/projects?category=${activeFilter}`
  }, [viewMoreUrl, activeFilter])

  /* ---------------------------------------------------------
     Normalize project data once
  --------------------------------------------------------- */

  const projects = useMemo(() => {
    return projectsData.map((project) => {
      const categoryKey = normalizeCategory(project.category)

      return {
        ...project,

        image: project.mainImage || "/placeholder.svg",
        hoverImage: project.hoverImage || null,

        description:
          project.shortDesc ||
          "A modern digital solution built with scalable technologies.",

        tags: project.tech || [],

        categoryKey,
        categoryLabel: getCategoryLabel(categoryKey),

        links: {
          github: project.githubUrl || "#",
          live: project.liveUrl || "#",
        },
      }
    })
  }, [])

  /* ---------------------------------------------------------
     Filters
  --------------------------------------------------------- */

  const filters = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Odoo",
      value: "odoo",
    },
    {
      label: "Shopify",
      value: "shopify",
    },
    {
      label: "Frontend",
      value: "frontend",
    },
    {
      label: "WordPress",
      value: "wordpress",
    },
    {
      label: "Other",
      value: "other",
    },
  ]

  const allMatchingProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.categoryKey === activeFilter
        )
  }, [projects, activeFilter])

  const filteredProjects = useMemo(() => {
    if (isMainPage || typeof limit !== "number" || limit <= 0) {
      return allMatchingProjects
    }

    return allMatchingProjects.slice(0, limit)
  }, [allMatchingProjects, limit, isMainPage])

  return (
    <section
      id="projects"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
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
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Violet glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
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
            bg-violet-500/[0.05]
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
            top-1/3
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
            opacity-[0.018]
            dark:opacity-[0.025]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* ===================================================
            HEADER
        =================================================== */}

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
          className="mx-auto mb-14 max-w-3xl text-center"
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
              dark:border-violet-400/20
              dark:bg-violet-400/5
              dark:text-violet-400
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />

            Selected Work
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
            Projects that{" "}
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
              solve problems.
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
            A selection of Odoo solutions, modern web applications and
            e-commerce projects I've worked on.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value

              return (
                <motion.button
                  key={filter.value}
                  type="button"
                  onClick={() => handleFilterClick(filter.value)}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          border-violet-500
                          bg-violet-600
                          text-white
                          shadow-lg
                          shadow-violet-500/20
                        `
                        : `
                          border-slate-200
                          bg-white
                          text-slate-600
                          hover:border-violet-300
                          hover:text-violet-600

                          dark:border-white/10
                          dark:bg-white/[0.025]
                          dark:text-slate-400
                          dark:hover:border-violet-500/30
                          dark:hover:text-violet-400
                        `
                    }
                  `}
                >
                  {filter.label}
                </motion.button>
              )
            })}
          </div>
        </motion.div>

        {/* ===================================================
            PROJECT GRID
        =================================================== */}

        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="
              grid
              grid-cols-1
              gap-7
              sm:grid-cols-2
              lg:grid-cols-4
              xl:gap-8
            "
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================= */

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mx-auto
              flex
              max-w-md
              flex-col
              items-center
              rounded-3xl
              border
              border-slate-200
              bg-white
              px-8
              py-14
              text-center
              dark:border-white/10
              dark:bg-white/[0.025]
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-violet-500/10
                text-violet-600
                dark:text-violet-400
              "
            >
              <SearchX className="h-6 w-6" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
              No projects found
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              There are currently no projects in this category.
            </p>

            <button
              type="button"
              onClick={() => handleFilterClick("all")}
              className="
                mt-6
                rounded-xl
                bg-violet-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-violet-700
              "
            >
              View all projects
            </button>
          </motion.div>
        )}

        {!isMainPage && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Link
              href={effectiveViewMoreUrl}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-violet-500/30
                bg-violet-500/10
                px-6
                py-3
                text-sm
                font-semibold
                text-violet-600
                transition-all
                hover:-translate-y-0.5
                hover:border-violet-500
                hover:bg-violet-600
                hover:text-white
                hover:shadow-lg
                hover:shadow-violet-500/20

                dark:border-violet-400/30
                dark:bg-violet-400/10
                dark:text-violet-400
                dark:hover:bg-violet-600
                dark:hover:text-white
              "
            >
              View More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

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
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            border
            border-slate-200
            bg-slate-50
            p-6
            text-center

            dark:border-white/[0.08]
            dark:bg-white/[0.025]

            sm:flex-row
            sm:text-left
            md:p-8
          "
        >
          <div>
            <p className="text-lg font-bold text-slate-950 dark:text-white">
              Have an project in mind?
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Let's discuss your workflow, automation or custom module.
            </p>
          </div>

          <Link
            href="#contact"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-slate-950
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:-translate-y-0.5
              hover:bg-violet-600

              dark:bg-white
              dark:text-slate-950
              dark:hover:bg-violet-500
              dark:hover:text-white
            "
          >
            Let's Work Together

            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}