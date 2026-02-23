"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code2, Briefcase, BookOpen } from "lucide-react"

export default function About() {
  const education = [
    {
      degree: "MCS",
      school: "Bahauddin Zakariya University",
      gpa: "CGPA: 3.56/4.0",
      icon: GraduationCap,
    },
    {
      degree: "BSc in Double Math",
      school: "Bahauddin Zakariya University",
      gpa: "Science & Mathematics",
      icon: BookOpen,
    },
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "CMS & E-Commerce",
      icon: Briefcase,
      skills: ["WordPress", "Shopify", "Elementor", "Git & GitHub", "Figma", "VS Code"],
    },
  ]

  const learningProgress = [
    { skill: "Django", progress: 70 },
    { skill: "Python", progress: 70 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 max-w-xs"
            style={{ transformOrigin: "center" }}
          />
          <p className="text-center text-muted-foreground text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* LEFT COLUMN: Bio and Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Bio section */}
            <motion.div variants={itemVariants} className="glassmorphic p-8 rounded-xl">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I'm a self-taught Frontend Developer based in Multan, Pakistan. I specialize in creating modern,
                responsive websites using React.js, Next.js, and WordPress. Currently expanding my skills in Django &
                Python to become a full-stack developer.
              </p>
            </motion.div>

            {/* Education cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              {education.map((edu, index) => {
                const IconComponent = edu.icon
                return (
                  <motion.div
                    key={edu.degree}
                    variants={itemVariants}
                    className="glassmorphic p-6 rounded-xl flex gap-4 items-start hover:scale-105 transition-transform duration-300 cursor-pointer group"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-xs text-blue-500 font-medium mt-1">{edu.gpa}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {/* Skills by category */}
            {skillCategories.map((category, catIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div key={category.title} variants={itemVariants}>
                  <div className="flex items-center gap-2 mb-4">
                    <IconComponent className="w-5 h-5 text-blue-500" />
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05, y: -4 }}
                        className="glassmorphic p-4 rounded-lg text-center group cursor-pointer hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-500/10 transition-all duration-300"
                      >
                        <p className="text-sm font-medium text-foreground group-hover:text-blue-500 transition-colors">
                          {skill}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {/* Currently Learning section with progress bars */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                Currently Learning
              </h3>
              <div className="space-y-4">
                {learningProgress.map((item) => (
                  <div key={item.skill}>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-foreground">{item.skill}</p>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xs font-semibold text-purple-500"
                      >
                        {item.progress}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
