import HomePage from "@/components/home/HomePage"
import OdooHome from "@/components/odoo/OdooHome"
import { ODOO_ONLY } from "@/lib/site-config"

export default function Page() {
  return ODOO_ONLY ? <OdooHome /> : <HomePage />
}
