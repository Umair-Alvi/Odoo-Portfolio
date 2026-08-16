"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Odoo",
      href: "/odoo",
    },
    {
      name: "Shopify",
      href: "/shopify",
    },
    {
      name: "Frontend",
      href: "/frontend",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ]

  const handleMobileClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="
          border-b
          border-slate-200/60
          bg-white/80
          backdrop-blur-xl

          dark:border-white/[0.06]
          dark:bg-slate-950/80
        "
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
            lg:px-10
            xl:px-12
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              onClick={handleMobileClick}
              className="
                group
                inline-flex
                items-center
                text-2xl
                font-black
                tracking-tight
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-violet-600
                  via-blue-600
                  to-cyan-500
                  bg-clip-text
                  text-transparent
                  transition-all
                  duration-300
                  group-hover:from-blue-500
                  group-hover:via-violet-500
                  group-hover:to-cyan-400
                "
              >
                Portfolio
              </span>
            </Link>
          </motion.div>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden items-center gap-1 md:flex"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + index * 0.06,
                }}
              >
                <Link
                  href={link.href}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300

                    hover:bg-slate-100
                    hover:text-blue-600

                    dark:text-slate-300
                    dark:hover:bg-white/[0.05]
                    dark:hover:text-blue-400
                  "
                >
                  {link.name}

                  {/* Hover underline */}

                  <span
                    className="
                      absolute
                      bottom-1
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-blue-500
                      transition-all
                      duration-300
                      group-hover:w-5
                    "
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {/* Theme Toggle */}

            <motion.button
              type="button"
              whileHover={{
                scale: 1.08,
                rotate: 12,
              }}
              whileTap={{
                scale: 0.92,
              }}
              onClick={toggleTheme}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-300

                hover:border-blue-400
                hover:bg-blue-50

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:hover:border-blue-500/40
                dark:hover:bg-blue-500/10
              "
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5 text-yellow-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5 text-slate-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu */}

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                transition-all

                hover:border-blue-400
                hover:bg-blue-50

                dark:border-white/10
                dark:bg-white/[0.04]
                dark:hover:bg-white/[0.08]

                md:hidden
              "
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="
                overflow-hidden
                border-t
                border-slate-200/60
                bg-white/95
                backdrop-blur-xl

                dark:border-white/[0.06]
                dark:bg-slate-950/95

                md:hidden
              "
            >
              <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleMobileClick}
                        className="
                          group
                          flex
                          min-h-12
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          text-sm
                          font-semibold
                          text-slate-700
                          transition-all

                          hover:bg-gradient-to-r
                          hover:from-violet-500/10
                          hover:to-blue-500/10
                          hover:text-blue-600

                          dark:text-slate-300
                          dark:hover:text-blue-400
                        "
                      >
                        <span>{link.name}</span>

                        <ChevronDown
                          className="
                            h-4
                            w-4
                            -rotate-90
                            opacity-40
                            transition-all
                            group-hover:translate-x-1
                            group-hover:opacity-100
                          "
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}