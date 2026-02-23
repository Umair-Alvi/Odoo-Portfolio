"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { projectsData } from "@/app/data/projects"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = projectsData.map((project) => ({
    ...project,
    image: project.mainImage,
    description: project.shortDesc,
    tags: project.tech,
    category: project.category.charAt(0).toUpperCase() + project.category.slice(1),
    links: {
      github: project.githubUrl || "#",
      live: project.liveUrl || "#",
    },
  }))

  const filters = ["All", "React", "WordPress", "Shopify", "Other"]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">Recent work I'm proud of</p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-4"
            style={{ width: "120px", transformOrigin: "center" }}
          />

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50"
                    : "border border-white/10 text-foreground hover:border-purple-500/50 hover:shadow-lg"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 h-full"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-4 right-4 px-4 py-1 rounded-full bg-purple-500/90 backdrop-blur-sm text-white text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-foreground group-hover:drop-shadow-lg group-hover:drop-shadow-purple-500/50 transition-all duration-300 drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 dark:border-white/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`/projects/${project.slug}`}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  >
                    View Details →
                  </motion.a>

                  {project.links.live !== "#" && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400 font-medium hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
