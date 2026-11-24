import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/odoo-profile"

export default function OdooFooter() {
  const social = [
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  ]

  return (
    <footer className="border-t border-o-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-o-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-o-ink-3">
            {profile.role} · {profile.versions.join(", ")} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-o-ink-2">
          <Link href="/projects" className="hover:text-o-ink">
            Case Studies
          </Link>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="hover:text-o-ink">
            CV
          </a>
          <span className="h-4 w-px bg-o-line" aria-hidden="true" />
          {social.map(({ icon: I, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-o-ink-3 transition-colors hover:text-o-brand"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="pb-8 text-center text-xs text-o-ink-3">
        © {new Date().getFullYear()} {profile.name}. Odoo is a trademark of Odoo S.A.; this site is not affiliated with it.
      </p>
    </footer>
  )
}
