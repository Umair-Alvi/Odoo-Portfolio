"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let animationFrameId

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = (scrollTop / docHeight) * 100
        setScrollProgress(scrolled)
      })
    }

    let lastScrollTime = 0
    const throttledScroll = () => {
      const now = Date.now()
      if (now - lastScrollTime >= 16) {
        handleScroll()
        lastScrollTime = now
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-[1000] transition-all duration-100"
      style={{
        width: `${scrollProgress}%`,
        boxShadow: scrollProgress > 0 ? "0 0 20px rgba(59, 130, 246, 0.6)" : "none",
      }}
    />
  )
}
