"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Plus, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    question: "Can you customize Odoo according to my business requirements?",
    answer:
      "Yes. I can customize Odoo based on your business workflow, including custom modules, fields, views, workflows, access rights, and other functional requirements.",
  },
  {
    question: "Can you develop custom Odoo modules?",
    answer:
      "Yes. I can develop custom Odoo modules using Python, Odoo ORM, XML views, PostgreSQL, and Odoo's existing framework.",
  },
  {
    question: "Can you fix existing Odoo issues and bugs?",
    answer:
      "Yes. I can investigate existing Odoo errors, identify the root cause, and implement a proper solution instead of only hiding the error.",
  },
  {
    question: "Can you customize Odoo Sales, Inventory and Purchase?",
    answer:
      "Yes. I can work with business workflows in areas such as Sales, Inventory, Purchase and other Odoo modules, depending on the project requirements.",
  },
  {
    question: "Can you configure Odoo access rights and security groups?",
    answer:
      "Yes. I can configure access control, security groups, model access rights, record rules, and user permissions according to the required workflow.",
  },
  {
    question: "Can you customize Odoo forms and views?",
    answer:
      "Yes. I can customize Odoo form, tree, search and other XML views, including fields, buttons, visibility, readonly conditions and workflows.",
  },
  {
    question: "Can you work on an existing Odoo project?",
    answer:
      "Yes. I can work with an existing Odoo installation and custom modules, understand the current implementation, and then make the required changes.",
  },
  {
    question: "Can you integrate APIs with Odoo?",
    answer:
      "Yes. API integrations can be developed according to the requirements of the Odoo project and the external service.",
  },
]

function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  })

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")

    if (!media.matches) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        z-0
        hidden
        h-72
        w-72
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        blur-[90px]
        md:block
        bg-blue-500/[0.06]
        dark:bg-violet-500/[0.08]
      "
      style={{
        left: smoothX,
        top: smoothY,
      }}
    />
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section
      id="faq"
      className="
        relative
        isolate
        overflow-hidden
        py-24
        px-4
        bg-white
        text-slate-950
        dark:bg-[#0b1020]
        dark:text-white
      "
    >
      <CursorGlow />

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[400px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.04]
            blur-[120px]
            dark:bg-violet-500/[0.06]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
            dark:opacity-[0.035]
            [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div
            className="
              mx-auto
              mb-5
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-600
              dark:border-violet-400/20
              dark:bg-violet-400/10
              dark:text-violet-400
            "
          >
            <MessageCircleQuestion className="h-7 w-7" />
          </div>

          <h2
            className="
              text-4xl
              font-black
              tracking-tight
              sm:text-5xl
            "
          >
            Frequently Asked
            <span
              className="
                block
                bg-gradient-to-r
                from-blue-500
                via-violet-500
                to-purple-600
                bg-clip-text
                text-transparent
              "
            >
              Questions
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
            Have questions about Odoo development or customization?
            Here are some common questions I can help with.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                className="group"
              >
                <div
                  className={`
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white/80
                    backdrop-blur-xl
                    transition-all
                    duration-300

                    ${
                      isOpen
                        ? "border-blue-500/30 shadow-lg shadow-blue-500/5"
                        : "border-slate-200 hover:border-blue-400/30"
                    }

                    dark:bg-white/[0.035]

                    ${
                      isOpen
                        ? "dark:border-violet-400/30 dark:shadow-violet-500/5"
                        : "dark:border-white/[0.08] dark:hover:border-violet-400/20"
                    }
                  `}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left
                      sm:px-6
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          hidden
                          text-xs
                          font-bold
                          text-blue-500/60
                          sm:block
                          dark:text-violet-400/60
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          text-sm
                          font-semibold
                          transition-colors
                          duration-300
                          sm:text-base
                          ${
                            isOpen
                              ? "text-blue-600 dark:text-violet-400"
                              : "text-slate-900 dark:text-white"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-100
                        text-slate-600
                        dark:bg-white/[0.06]
                        dark:text-slate-300
                      "
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <div
                          className="
                            border-t
                            border-slate-200/80
                            px-5
                            pb-5
                            pt-4
                            pl-5
                            text-sm
                            leading-7
                            text-slate-600
                            sm:px-6
                            sm:pl-[4.25rem]
                            dark:border-white/[0.06]
                            dark:text-slate-400
                          "
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-12
            rounded-2xl
            border
            border-blue-500/15
            bg-blue-500/[0.04]
            p-6
            text-center
            dark:border-violet-400/15
            dark:bg-violet-400/[0.04]
          "
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Have a different Odoo requirement?
          </p>

          <a
            href="#contact"
            className="
              mt-2
              inline-block
              font-semibold
              text-blue-600
              transition-colors
              hover:text-violet-600
              dark:text-blue-400
              dark:hover:text-violet-400
            "
          >
            Let's discuss your project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}