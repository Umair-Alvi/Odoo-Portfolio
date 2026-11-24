import "./globals.css"
import ClientLayout from "./client-layout"
import { ODOO_ONLY } from "@/lib/site-config"

export const metadata = ODOO_ONLY
  ? {
      title: "Umair Akram (Muhammad Umair Akram) | Odoo Technical Developer, Odoo 17, 18 & 19",
      description:
        "Odoo Technical Developer building custom modules for Accounting, Payroll, CRM, Sales, Purchase and Attendance, plus integrations (biometric devices, WhatsApp, OneSignal). Case studies from production Odoo 18 and 19 ERP systems.",
      keywords: [
        "Odoo developer",
        "Odoo technical developer",
        "Odoo 18",
        "Odoo 19",
        "Odoo custom module",
        "Odoo accounting",
        "Odoo payroll",
        "Odoo CRM",
        "Odoo biometric attendance",
      ],
      openGraph: {
        title: "Umair Akram | Odoo Technical Developer",
        description: "Custom Odoo modules for Accounting, Payroll, CRM and integrations. Odoo 17, 18 & 19.",
        type: "website",
        siteName: "Umair Akram",
      },
      twitter: {
        card: "summary_large_image",
        title: "Umair Akram | Odoo Technical Developer",
        description: "Custom Odoo modules for Accounting, Payroll, CRM and integrations. Odoo 17, 18 & 19.",
      },
      // Set NEXT_PUBLIC_SITE_URL (e.g. https://yourdomain.com) so preview images use the real domain.
      // On Vercel this is filled in automatically when the variable is not set.
      ...(process.env.NEXT_PUBLIC_SITE_URL && { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }),
    }
  : {
      title: "Muhammad Umair Akram | Frontend Web Developer",
      description:
        "Portfolio of Muhammad Umair Akram - Odoo developer and Frontend Developer specializing in React.js, Next.js, WordPress & Shopify.",
    }

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
