"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorTrail() {
  const [points, setPoints] = useState([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const handleMouseMove = (e) => {
      const newPoint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setPoints((prev) => [...prev, newPoint].slice(-20))

      setTimeout(() => {
        setPoints((prev) => prev.filter((p) => p.id !== newPoint.id))
      }, 500)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {points.map((point) => (
        <motion.div
          key={point.id}
          className="fixed w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
        />
      ))}
    </>
  )
}
