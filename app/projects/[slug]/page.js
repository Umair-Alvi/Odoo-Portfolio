import { projectsData } from "@/app/data/projects"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10 to-gray-900 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BACK BUTTON */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 group transition-all"
        >
          <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* PROJECT HEADER */}
        <div className="mb-12">
          {/* Category Badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium mb-4">
            {project.category.toUpperCase()}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
            {project.title}
          </h1>

          {/* Meta Info Row */}
          <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">📅</span>
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">⏱️</span>
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400">👤</span>
              <span>{project.client}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                🚀 View Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                💻 View Code
              </a>
            )}
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
          <img
            src={project.mainImage || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* 2 COLUMN LAYOUT */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* LEFT: Description */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.fullDesc}</p>

            {/* Challenge & Solution */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-400 mb-2">⚠️ Challenge</h3>
                <p className="text-gray-300">{project.challenges}</p>
              </div>

              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/30">
                <h3 className="text-xl font-bold text-green-400 mb-2">✅ Solution</h3>
                <p className="text-gray-300">{project.solution}</p>
              </div>

              <div className="p-6 rounded-xl bg-blue-500/10 border border-blue-500/30">
                <h3 className="text-xl font-bold text-blue-400 mb-2">📊 Results</h3>
                <p className="text-gray-300">{project.results}</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-6">
            {/* Technologies Card */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">🛠️ Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">📌 Project Info</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <span className="text-gray-500">Client:</span>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <span className="text-gray-500">Year:</span>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">✨ Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="text-2xl">✓</span>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">📸 Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white font-medium">Screenshot {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PROJECTS */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">🔗 More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter((p) => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                >
                  <img
                    src={relatedProject.mainImage || "/placeholder.svg"}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{relatedProject.shortDesc}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) return {}

  return {
    title: `${project.title} - Portfolio`,
    description: project.fullDesc,
  }
}
