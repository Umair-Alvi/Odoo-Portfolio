"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"
import { profile } from "@/lib/odoo-profile"
import { btn } from "./ui"

const links = [
  { name: "Services", href: "/#services" },
  { name: "Case Studies", href: "/projects" },
  { name: "Recommendations", href: "/#recommendations" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
]

export default function OdooNavbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href) => href === "/projects" && pathname.startsWith("/projects")

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open ? "border-o-line bg-o-bg/85 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${profile.name}, home`}>
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-o-ink">{profile.name}</span>
            <span className="text-[11px] text-o-ink-3">{profile.role}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-o-ink ${
                isActive(l.href) ? "text-o-ink" : "text-o-ink-2"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-o-line text-o-ink-2 transition-colors hover:text-o-ink"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <span className="hidden sm:block">
            <Link href="/#contact" className={`${btn.primary} !px-4 !py-2`}>
              Hire me
            </Link>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-o-line text-o-ink md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-o-line md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-sm font-medium text-o-ink-2 hover:text-o-ink"
                >
                  {l.name}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setOpen(false)} className={`${btn.primary} mt-2`}>
                Hire me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
