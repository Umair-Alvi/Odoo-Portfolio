"use client"

import { useState, useEffect } from "react"
import { Geist } from "next/font/google"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import CursorTrail from "@/components/cursor-trail"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

const geist = Geist({ subsets: ["latin"] })

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme) => {
    const html = document.documentElement
    if (newTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Contact />
      <Footer   />

    </>
  )
}
