"use client"

import { useState } from "react"
import { ArrowRight, Check, Copy, Github, Linkedin, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { profile } from "@/lib/odoo-profile"
import { Eyebrow, Reveal, btn } from "./ui"
import { WhatsAppIcon } from "./WhatsAppButton"

// Same Web3Forms key the original contact form used.
const WEB3FORMS_KEY = "0af4a512-57f4-4c56-82c2-b84aca09a196"

const inputCls =
  "w-full rounded-lg border border-o-line bg-o-bg px-3.5 py-2.5 text-sm text-o-ink placeholder:text-o-ink-3 outline-none transition-colors focus:border-o-brand"

export default function OdooContact() {
  const [status, setStatus] = useState({ type: "", text: "" })
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState("")

  const contacts = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
    { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref, copy: profile.phone },
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github },
  ]

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(text)
      setTimeout(() => setCopied(""), 1800)
    } catch {}
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    setStatus({ type: "", text: "" })

    const data = new FormData(form)
    data.append("access_key", WEB3FORMS_KEY)
    data.append("subject", "New Odoo Portfolio Enquiry")
    data.append("from_name", "Umair Odoo Portfolio")

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data })
      const json = await res.json()
      if (json.success) {
        setStatus({ type: "ok", text: "Thanks, your message was sent. I'll reply within one working day." })
        form.reset()
      } else {
        setStatus({ type: "err", text: "Something went wrong. Please try again or email me directly." })
      }
    } catch {
      setStatus({ type: "err", text: "Unable to send right now. Please email me directly." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-o-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <Reveal className="lg:col-span-2">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-o-ink sm:text-4xl">
            Let's talk about your Odoo project
          </h2>
          <p className="mt-4 text-base leading-relaxed text-o-ink-2">
            Hiring for an Odoo developer role, or need a custom module, an integration or help with an
            Accounting, Payroll or CRM workflow? Send a short message and I'll get back to you.
          </p>

          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe5b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
          </a>
          <p className="mt-2 text-xs text-o-ink-3">Fastest way to reach me.</p>

          <ul className="mt-8 space-y-3">
            {contacts.map(({ icon: I, label, value, href, copy: c }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-o-line bg-o-surface text-o-brand">
                  <I className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-o-ink-3">{label}</p>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block truncate text-sm font-medium text-o-ink hover:text-o-brand"
                  >
                    {value}
                  </a>
                </div>
                {c && (
                  <button
                    type="button"
                    onClick={() => copy(c)}
                    aria-label={`Copy ${label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-md text-o-ink-3 hover:text-o-ink"
                  >
                    {copied === c ? <Check className="h-4 w-4 text-o-teal" /> : <Copy className="h-4 w-4" />}
                  </button>
                )}
              </li>
            ))}
            <li className="flex items-center gap-3 pt-1 text-sm text-o-ink-2">
              <MapPin className="ml-2.5 h-4 w-4 text-o-ink-3" />
              {profile.location} · open to remote work
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-xl border border-o-line bg-o-surface p-6 shadow-sm sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-o-ink">Name</span>
                <input name="name" required autoComplete="name" className={inputCls} placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-o-ink">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputCls}
                  placeholder="you@company.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-o-ink">Company (optional)</span>
                <input name="company" autoComplete="organization" className={inputCls} placeholder="Company name" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-o-ink">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`${inputCls} resize-y`}
                  placeholder="Odoo version, modules involved and what you need…"
                />
              </label>
            </div>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p
                role="status"
                className={`text-sm ${status.type === "ok" ? "text-o-teal" : status.type === "err" ? "text-red-600 dark:text-red-400" : "text-o-ink-3"}`}
              >
                {status.text || "Usually replies within one working day."}
              </p>
              <button type="submit" disabled={loading} className={`${btn.primary} shrink-0 whitespace-nowrap disabled:opacity-60`}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                {loading ? "Sending…" : "Send message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
