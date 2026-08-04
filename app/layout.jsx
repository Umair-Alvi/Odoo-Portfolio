import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata = {
  title: "Muhammad Umair Akram | Frontend Web Developer",
  description: "Portfolio of Muhammad Umair Akram - Odoo developer and Frontend Developer specializing in React.js, Next.js, WordPress & Shopify.",
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
