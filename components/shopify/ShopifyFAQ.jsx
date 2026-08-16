"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "Can you customize an existing Shopify theme?",
    a: "Yes. I can customize Shopify themes according to the required design, layout and functionality.",
  },
  {
    q: "Can you work with Shopify Liquid?",
    a: "Yes. I can work with Liquid templates, sections, snippets and Shopify theme files.",
  },
  {
    q: "Can you make Shopify stores responsive?",
    a: "Yes. I focus on responsive layouts so the storefront works properly across desktop, tablet and mobile.",
  },
  {
    q: "Can you fix Shopify theme issues?",
    a: "Yes. I can troubleshoot and fix frontend, Liquid, layout and theme customization issues.",
  },
]

export default function ShopifyFAQ() {
  const [active, setActive] = useState(null)

  return (
    <section className="bg-slate-50 py-24 dark:bg-[#090d1a]">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = active === index

            return (
              <div
                key={faq.q}
                className="
                  overflow-hidden rounded-2xl
                  border border-slate-200
                  bg-white
                  dark:border-white/10
                  dark:bg-white/[0.03]
                "
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="
                    flex w-full items-center
                    justify-between gap-4
                    p-5 text-left
                  "
                >
                  <span className="font-bold text-slate-900 dark:text-white">
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}