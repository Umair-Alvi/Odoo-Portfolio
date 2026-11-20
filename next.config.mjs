import { ODOO_ONLY } from "./lib/site-config.js"

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    if (!ODOO_ONLY) return []
    // Hidden pages stay in the codebase; visitors are sent to the Odoo home page.
    return ["/odoo", "/shopify", "/frontend"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }))
  },
}

export default nextConfig
