"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

function TypingText({ text, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return <span>{displayedText}</span>
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-indigo-500/30 rounded-3xl blur-3xl" />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative w-full h-full group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/profile.png"
                    alt="Muhammad Umair Akram"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-blue-500/20" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="order-1 md:order-2">
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base font-semibold text-blue-500 mb-2 tracking-widest"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 bg-clip-text text-transparent leading-tight"
            >
              <TypingText text="Muhammad Umair Akram" />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Frontend Web Developer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg leading-relaxed"
            >
              Passionate Frontend Developer with 1+ year of experience in React.js, Next.js, WordPress & Shopify.
              Building responsive, user-friendly web solutions that make a real impact.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#projects").scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 text-base"
              >
                View Projects
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" })
                }}
                className="px-8 py-4 border-2 border-blue-500/50 text-blue-500 dark:text-blue-400 rounded-full font-bold hover:bg-blue-500/10 transition-all duration-300 text-center text-base backdrop-blur-sm"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-blue-500/50 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-xs text-blue-500/60 mt-2"
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
