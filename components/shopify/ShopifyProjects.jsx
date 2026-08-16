"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Tausi - Fashion Shopify Store",
    description:
      "Custom Shopify fashion store with theme customization, product organization, collections and responsive shopping experience.",
    image: "/fashion-clothing-store.png",
    tech: ["Shopify", "Liquid", "CSS", "Theme Editor"],
    url: "https://tausi.shop",
  },

  // Add your other Shopify projects here
]

export default function ShopifyProjects() {
  return (
    <section
      id="shopify-projects"
      className="relative overflow-hidden bg-white py-24 dark:bg-[#070b18]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Shopify Projects
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            A selection of Shopify stores and e-commerce projects I have
            worked on.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                group overflow-hidden
                rounded-3xl
                border border-slate-200
                bg-slate-50
                shadow-sm
                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full w-full object-cover
                    transition duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-emerald-500/10
                        px-3 py-1
                        text-xs font-medium
                        text-emerald-700
                        dark:text-emerald-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-bold
                      text-emerald-600
                      hover:text-emerald-500
                      dark:text-emerald-400
                    "
                  >
                    View Live Store
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}