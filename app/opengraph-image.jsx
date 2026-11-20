// Link preview card (WhatsApp, LinkedIn, Facebook, X). Generated at build time.
import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ODOO_ONLY } from "@/lib/site-config"

export const alt = "Umair Akram, Odoo Technical Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", "profile-odoo.jpg"))
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`

  const title = ODOO_ONLY ? "Odoo Technical Developer" : "Web Developer"
  const tagline = ODOO_ONLY
    ? "Custom Odoo modules for Accounting, Payroll & CRM"
    : "React, Next.js, Odoo, Shopify & WordPress"
  const chips = ODOO_ONLY ? ["Odoo 17", "Odoo 18", "Odoo 19"] : ["Next.js", "Odoo", "Shopify"]

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #0e0f13 0%, #1c1d25 60%, #2a1a27 100%)",
          color: "#ececf0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", flex: 1 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
            {chips.map((c) => (
              <div
                key={c}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "2px solid rgba(212,165,201,0.4)",
                  background: "rgba(212,165,201,0.12)",
                  color: "#d4a5c9",
                  fontSize: 24,
                }}
              >
                {c}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>Umair Akram</div>
          <div style={{ fontSize: 40, color: "#d4a5c9", marginTop: 12 }}>{title}</div>
          <div style={{ fontSize: 30, color: "#b6b4bf", marginTop: 28, lineHeight: 1.35, maxWidth: 620 }}>{tagline}</div>
          <div style={{ display: "flex", width: 120, height: 6, background: "#5fc9bd", borderRadius: 3, marginTop: 40 }} />
        </div>
        <div style={{ display: "flex", width: 470, height: "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photoSrc} width={470} height={630} style={{ objectFit: "cover", width: 470, height: 630 }} alt="" />
        </div>
      </div>
    ),
    size
  )
}
