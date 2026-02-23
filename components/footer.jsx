"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-umair-akram-33908a28b/",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:umairawan2239@gmail.com",
    },
  ]

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 glassmorphic rounded-full flex items-center justify-center text-blue-500 hover:text-purple-600 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground"
          >
            © 2025 Muhammad Umair Akram. Built with <span className="text-blue-500 font-semibold">Next.js</span> &{" "}
            <span className="text-purple-600 font-semibold">Tailwind CSS</span>
          </motion.p>

          {/* Back to Top Button */}
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/30 transition-all duration-300 z-50"
              aria-label="Back to top"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  )
}
