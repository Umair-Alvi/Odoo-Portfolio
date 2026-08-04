"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react"
import { useState } from "react"

/* =========================================================
   MOUSE FOLLOWING CONTACT CARD
========================================================= */

function ContactCard({ item, index, onCopy, copied }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  })

  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  })

  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4])

  const glowLeft = useTransform(
    springX,
    [-0.5, 0.5],
    ["0%", "100%"]
  )

  const glowTop = useTransform(
    springY,
    [-0.5, 0.5],
    ["0%", "100%"]
  )

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    mouseX.set(
      (e.clientX - rect.left) / rect.width - 0.5
    )

    mouseY.set(
      (e.clientY - rect.top) / rect.height - 0.5
    )
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const Icon = item.icon
  const isLocation = item.label === "Location"

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <motion.div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-sm
          transition-all
          duration-300

          hover:border-violet-300
          hover:shadow-xl
          hover:shadow-violet-500/10

          dark:border-white/[0.08]
          dark:bg-white/[0.035]
          dark:hover:border-violet-500/30
        "
      >
        {/* Cursor glow */}

        <motion.div
          className="
            pointer-events-none
            absolute
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-500/15
            blur-3xl
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100

            dark:bg-violet-500/20
          "
          style={{
            left: glowLeft,
            top: glowTop,
          }}
        />

        <div className="relative z-10 flex items-center gap-4">
          {/* Icon */}

          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-violet-500/10
              bg-violet-500/[0.07]
              text-violet-600
              transition-all
              duration-300

              group-hover:scale-105
              group-hover:bg-violet-500/10

              dark:text-violet-400
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          {/* Text */}

          <div className="min-w-0 flex-1">
            <p
              className="
                mb-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-slate-400

                dark:text-slate-500
              "
            >
              {item.label}
            </p>

            {item.href && !isLocation ? (
              <a
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  block
                  truncate
                  text-sm
                  font-semibold
                  text-slate-800
                  transition-colors
                  hover:text-violet-600

                  dark:text-slate-200
                  dark:hover:text-violet-400
                "
              >
                {item.value}
              </a>
            ) : (
              <p
                className="
                  truncate
                  text-sm
                  font-semibold
                  text-slate-800

                  dark:text-slate-200
                "
              >
                {item.value}
              </p>
            )}
          </div>

          {/* Copy */}

          {!isLocation && (
            <button
              type="button"
              onClick={() => onCopy(item.value, item.label)}
              aria-label={`Copy ${item.label}`}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                text-slate-400
                transition-all
                hover:bg-slate-100
                hover:text-violet-600

                dark:hover:bg-white/[0.06]
                dark:hover:text-violet-400
              "
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          )}

          {/* External arrow */}

          {item.external && (
            <ArrowUpRight
              className="
                h-4
                w-4
                shrink-0
                text-slate-400
                transition-all
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-violet-500
              "
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* =========================================================
   CONTACT SECTION
========================================================= */

export default function Contact() {
  const [formStatus, setFormStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copiedField, setCopiedField] = useState(null)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umairawan2239@gmail.com",
      href: "mailto:umairawan2239@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0306-7880329",
      href: "tel:+923067880329",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Multan, Pakistan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-umair-akram",
      href: "https://www.linkedin.com/in/muhammad-umair-akram-33908a28b/",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/umairawan",
      href: "https://github.com/umairawan",
      external: true,
    },
  ]

  /* =======================================================
     COPY
  ======================================================= */

  const handleCopy = async (value, field) => {
    try {
      await navigator.clipboard.writeText(value)

      setCopiedField(field)

      setTimeout(() => {
        setCopiedField(null)
      }, 1800)
    } catch (error) {
      console.error("Copy failed:", error)
    }
  }

  /* =======================================================
     FORM
  ======================================================= */

  const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)
  setFormStatus("")

  const formData = new FormData(e.target)

  formData.append(
    "access_key",
    "0af4a512-57f4-4c56-82c2-b84aca09a196"
  )

  formData.append(
    "subject",
    "New Portfolio Contact Message"
  )

  formData.append(
    "from_name",
    "Umair Portfolio"
  )

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setFormStatus("Message sent successfully! I'll get back to you soon.")
      e.target.reset()
    } else {
      setFormStatus("Something went wrong. Please try again.")
    }
  } catch (error) {
    setFormStatus("Unable to send message. Please try again.")
  } finally {
    setIsLoading(false)

    setTimeout(() => {
      setFormStatus("")
    }, 5000)
  }
}

  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        py-24
        text-slate-950

        dark:bg-[#080d18]
        dark:text-white

        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Violet glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            top-20
            h-96
            w-96
            rounded-full
            bg-violet-500/[0.05]
            blur-[110px]

            dark:bg-violet-500/[0.10]
          "
        />

        {/* Blue glow */}

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-48
            bottom-0
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-blue-500/[0.05]
            blur-[120px]

            dark:bg-blue-500/[0.08]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]

            dark:opacity-[0.018]

            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Small badge */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-500/20
              bg-violet-500/[0.06]
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-violet-600

              dark:text-violet-400
            "
          >
            <Sparkles className="h-3.5 w-3.5" />

            Let's Connect
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              text-slate-950

              dark:text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's build something{" "}
            <span
              className="
                bg-gradient-to-r
                from-violet-600
                via-blue-600
                to-cyan-500
                bg-clip-text
                text-transparent

                dark:from-violet-400
                dark:via-blue-400
                dark:to-cyan-400
              "
            >
              great.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              dark:text-slate-400

              sm:text-lg
            "
          >
            Have an Odoo project, web application, Shopify
            store, or WordPress website in mind? Let's talk
            about it.
          </p>
        </motion.div>

        {/* ===================================================
            CONTENT GRID
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* =================================================
              LEFT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-6
              shadow-sm

              dark:border-white/[0.08]
              dark:bg-white/[0.025]

              md:p-8
            "
          >
            {/* Form card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-violet-500/[0.07]
                blur-[70px]

                dark:bg-violet-500/[0.10]
              "
            />

            <div className="relative z-10">
              {/* Form title */}

              <div className="mb-8">
                <div
                  className="
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    to-blue-600
                    text-white
                    shadow-lg
                    shadow-violet-500/20
                  "
                >
                  <MessageCircle className="h-5 w-5" />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-950

                    dark:text-white
                  "
                >
                  Send me a message
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Tell me about your project and I'll get
                  back to you as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Muhammad Umair"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400

                      focus:border-violet-400
                      focus:ring-4
                      focus:ring-violet-500/10

                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-violet-500/50
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400

                      focus:border-violet-400
                      focus:ring-4
                      focus:ring-violet-500/10

                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-violet-500/50
                    "
                  />
                </div>

                {/* Message */}

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700

                      dark:text-slate-300
                    "
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me what you'd like to build..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-slate-900
                      outline-none
                      transition-all
                      placeholder:text-slate-400

                      focus:border-violet-400
                      focus:ring-4
                      focus:ring-violet-500/10

                      dark:border-white/[0.08]
                      dark:bg-white/[0.035]
                      dark:text-white
                      dark:placeholder:text-slate-500
                      dark:focus:border-violet-500/50
                    "
                  />
                </div>

                {/* Status */}

                {formStatus && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-emerald-600

                      dark:text-emerald-400
                    "
                  >
                    <Check className="h-4 w-4" />

                    {formStatus}
                  </motion.div>
                )}

                {/* Button */}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-blue-600
                    px-6
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-violet-500/20
                    transition-all

                    hover:shadow-xl
                    hover:shadow-violet-500/30

                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {isLoading ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message

                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="mb-6"
            >
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                  text-violet-600

                  dark:text-violet-400
                "
              >
                Contact Details
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-bold
                  text-slate-950

                  dark:text-white
                "
              >
                Let's connect directly
              </h3>

              <p
                className="
                  mt-2
                  max-w-lg
                  text-sm
                  leading-6
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Prefer a direct conversation? You can reach
                me through email, phone, LinkedIn, or GitHub.
              </p>
            </motion.div>

            {/* Contact cards */}

            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <ContactCard
                  key={item.label}
                  item={item}
                  index={index}
                  onCopy={handleCopy}
                  copied={copiedField === item.label}
                />
              ))}
            </div>

            {/* Availability box */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-5
                rounded-2xl
                border
                border-emerald-500/20
                bg-emerald-500/[0.05]
                p-4

                dark:bg-emerald-500/[0.06]
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-500/10
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      animate-pulse
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-sm
                      font-bold
                      text-emerald-700

                      dark:text-emerald-400
                    "
                  >
                    Available for new opportunities
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-slate-500

                      dark:text-slate-400
                    "
                  >
                    Odoo • Next.js • Shopify • WordPress
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            FOOTER CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-20
            border-t
            border-slate-200
            pt-8
            text-center

            dark:border-white/[0.08]
          "
        >
          <p
            className="
              text-sm
              text-slate-500

              dark:text-slate-500
            "
          >
            © {new Date().getFullYear()} Muhammad Umair Akram.
            Built with Next.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}