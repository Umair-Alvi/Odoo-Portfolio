"use client"

import OdooNavbar from "./OdooNavbar"
import OdooContact from "./OdooContact"
import OdooFooter from "./OdooFooter"
import WhatsAppButton from "./WhatsAppButton"

export default function OdooShell({ theme, toggleTheme, children }) {
  return (
    <div className="odoo-site min-h-screen">
      <OdooNavbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <OdooContact />
      <OdooFooter />
      <WhatsAppButton />
    </div>
  )
}
