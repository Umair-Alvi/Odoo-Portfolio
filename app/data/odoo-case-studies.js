// Odoo case studies, written from the CV. Client names are kept confidential on purpose.
// `system` groups case studies by the ERP they belong to.

export const odooSystems = {
  services: {
    key: "services",
    name: "Project-Based Services ERP",
    version: "Odoo 18",
    role: "Main developer",
    scale: "900+ commits · 20+ custom modules",
  },
  trading: {
    key: "trading",
    name: "Trading Company ERP",
    version: "Odoo 18",
    role: "Main developer",
    scale: "240 of 263 commits (~91%) · 6 custom modules",
  },
  college: {
    key: "college",
    name: "Nursing College Management System",
    version: "Odoo 19",
    role: "Odoo developer",
    scale: "Biometric attendance, reporting & fee customization",
  },
}

export const odooCaseStudies = [
  {
    id: 101,
    slug: "analytic-budget-commitment-control",
    title: "Analytic Budget & Commitment Control",
    icon: "ShieldCheck",
    system: "services",
    modules: ["Accounting", "Analytic", "Purchase", "Expenses", "Attendance", "Petty Cash"],
    shortDesc:
      "Budget checks that block expenses, attendance costs and purchases that would exceed a project's analytic budget, including amounts already committed.",
    fullDesc:
      "In a project-based services company every cost has to land on a project, and every project has a budget. Standard Odoo records the cost but does not stop a user from going over budget. I built a budget control layer that checks the project's budget (keyed on its analytic tag) before an expense, attendance cost or purchase is confirmed, counting both actual spend and amounts already committed on open documents. A companion analytic dashboard shows each user only the projects they are allowed to see, with a \"Committed Not Used\" figure so managers know how much budget is reserved but not yet spent.",
    features: [
      "Budget check on expenses, attendance costs and purchases before confirmation",
      "Committed amounts (open POs, pending documents) counted against the budget",
      "Entries that exceed the remaining analytic budget are blocked with a clear message",
      "Project budget balance shown on purchase order lines, sourced from purchase requests",
      "Analytic dashboard with per-user access to projects",
      "\"Committed Not Used\" tracking to show reserved but unspent budget",
      "Petty cash expenses limited to the balance of an approved petty-cash line",
    ],
    challenges:
      "Costs reached projects from several apps (Purchase, Expenses, Attendance, Petty Cash), so overspending was only visible after the fact, and committed-but-unbilled amounts were not counted at all.",
    solution:
      "Added a shared budget check on the project's analytic tag that each flow calls before confirmation, calculating available budget as budget − actual − committed. Exposed the same figures on PO lines and in a per-user analytic dashboard.",
    results:
      "Project managers see the real remaining budget at the point of entry, and entries that would overspend a project are stopped before they are posted.",
    flagship: true,
    proof: [
      "Part of a full Odoo 18 ERP rollout where I was the main developer (900+ commits, 20+ custom modules)",
      "One shared check across purchase requests and POs, expenses, attendance and petty cash, with posted vendor bills counted as actual spend",
      "Budget checks are mentioned independently in three of the recommendations below",
    ],
    tech: ["Odoo 18", "Python", "Odoo ORM", "XML", "PostgreSQL", "Analytic Accounting"],
    // place: where the image appears on the case study page (cover | solution | result | proof)
    images: [
      {
        src: "/case-studies/analytic-budget/budget-exceeded.png",
        caption: "Expense blocked: 15,000 requested, only 3,000 available",
        place: "cover",
      },
      {
        src: "/case-studies/analytic-budget/budget-flow.png",
        caption: "One shared check across five spend flows",
        place: "solution",
      },
      {
        src: "/case-studies/analytic-budget/po-line-budget.png",
        caption: "Budget balance on the purchase order line",
        place: "solution",
      },
      {
        src: "/case-studies/analytic-budget/analytic-budget-items.png",
        caption: "Planned, actual, committed and available in one view",
        place: "result",
      },
      {
        src: "/case-studies/analytic-budget/expense-project-tag.png",
        caption: "Expense carrying the project's analytic account and tag, with receipt attached",
        place: "proof",
      },
      {
        src: "/case-studies/analytic-budget/petty-cash-insufficient.png",
        caption: "Petty cash capped at the approved line balance",
        place: "proof",
      },
    ],
  },
  {
    id: 7,
    slug: "odoo-18-petty-cash-expense-governance",
    title: "Petty Cash & Expense Governance",
    icon: "Wallet",
    system: "services",
    modules: ["Expenses", "Accounting", "HR", "Analytic"],
    shortDesc:
      "Petty cash workflow with live balance checks, mandatory receipts and VAT rules, single analytic tag control and links between expenses and journal entries.",
    fullDesc:
      "I built a petty cash and expense governance module on top of Odoo 18 Expenses. Each employee has their own petty cash journal, and the module checks the live balance before an expense is submitted. Receipts and VAT details are mandatory where the policy requires them, each expense line must carry exactly one analytic tag so costs land on a single project, and finance can jump directly between the expense and the journal entry it created.",
    features: [
      "Live petty cash balance per employee, checked before submission",
      "Overspending beyond the available petty cash is blocked",
      "Mandatory receipt attachment rules",
      "VAT / tax rules with vendor and VAT number validation",
      "Single analytic tag enforced per expense line",
      "Employee-specific cash journal mapping",
      "Security groups restricting sensitive accounting fields",
      "Smart buttons linking expenses and journal entries in both directions",
    ],
    challenges:
      "Standard Expenses did not check petty cash balances, allowed expenses without receipts or VAT details, and let one line be split across several projects, which made reconciliation and project costing unreliable.",
    solution:
      "Extended HR Expense, Expense Sheet and Accounting with balance calculations from each employee's cash journal, constraints for receipts, VAT and analytic tags, custom security groups and smart buttons between expenses and journal entries.",
    results:
      "Petty cash can no longer go negative, unreceipted or non-compliant expenses are stopped at submission, and finance spends less time reconciling cash journals.",
    flagship: true,
    proof: [
      "Live module on an Odoo 18 production system",
      "Sample code is public on GitHub (link in the sidebar)",
      "Screenshots below are from the module itself",
    ],
    tech: ["Odoo 18", "Python", "XML", "Odoo ORM", "PostgreSQL", "QWeb"],
    githubUrl: "https://github.com/Umair-Alvi/odoo-custom-module-by-umair",
    images: [
      "/expense_custom_module (4).png",
      "/expense_custom_module (3).png",
      "/expense_custom_module (2).png",
      "/expense_custom_module (1).png",
    ],
  },
  {
    id: 102,
    slug: "payroll-wps-payslip-accounting",
    title: "Payroll, WPS Export & Payslip Accounting",
    icon: "Landmark",
    system: "services",
    modules: ["Payroll", "Accounting", "HR"],
    shortDesc:
      "Payroll customization with WPS Excel export, automatic journal entries on payslip confirmation and redesigned payslip reports.",
    fullDesc:
      "Payroll was customized to match how the company pays and books salaries. Confirming payslips now creates the payroll journal entries automatically, salary files are exported in the WPS (Wage Protection System) Excel format the bank expects, and the payslip PDF was redesigned so employees and HR get a clear breakdown of earnings and deductions.",
    features: [
      "WPS salary file exported to Excel in the bank's required format",
      "Automatic journal entries when payslips are confirmed",
      "Payroll accounting mapped to the correct accounts and analytic projects",
      "Redesigned payslip PDF report (QWeb)",
      "Leave salary handled together with attendance and leaves",
    ],
    challenges:
      "Salary files for the bank and payroll journal entries were prepared by hand after each payroll run, which was slow and easy to get wrong.",
    solution:
      "Generated the WPS file directly from confirmed payslips and hooked payslip confirmation to create the accounting entries, so payroll and finance work from the same data.",
    results:
      "One payroll run now produces the payslips, the bank file and the accounting entries without re-keying data.",
    tech: ["Odoo 18", "Python", "XLSX Reports", "QWeb", "Payroll Accounting"],
    images: [],
  },
  {
    id: 6,
    slug: "odoo-hr-time-off-automation",
    title: "Attendance by Project & Leave Automation",
    icon: "CalendarCheck",
    system: "services",
    modules: ["Attendance", "Time Off", "HR", "Project"],
    shortDesc:
      "Multi-day attendance entry by work schedule and project, leave salary handling and automated leave allocation based on HR policy.",
    fullDesc:
      "HR needed to record attendance for many days and many projects at once, and to allocate leaves according to company policy instead of by hand. I built a multi-day attendance entry that generates attendance per day from the employee's work schedule and assigns it to a project, plus automated leave allocation that reads joining date, contract and employee details to decide which leaves an employee is entitled to and how many days.",
    features: [
      "Multi-day attendance entry generated from the work schedule",
      "Attendance assigned to projects for cost tracking",
      "Leave salary handling",
      "Joining-date based leave eligibility",
      "Automated yearly allocation for annual, sick and other leave types",
      "Policy rules for Hajj, maternity, paternity, bereavement, study and family care leave",
      "Custom employee and contract fields used by the rules",
    ],
    challenges:
      "Attendance for site and project staff was entered one day at a time, and leave balances were calculated manually from joining dates and contracts.",
    solution:
      "Built a wizard that creates attendance records across a date range following the work schedule and project, and scheduled jobs that allocate leaves from the employee's data and the configured policy rules.",
    results:
      "Removed manual leave allocation work for HR and made attendance entry for project staff much faster.",
    tech: ["Odoo 18", "Python", "XML", "Odoo ORM", "Cron", "PostgreSQL"],
    githubUrl: "https://github.com/Umair-Alvi/odoo-custom-module-by-umair",
    images: [],
  },
  {
    id: 103,
    slug: "employee-self-service-portal",
    title: "Employee Self-Service Portal",
    icon: "UserRound",
    system: "services",
    modules: ["Portal", "HR", "Attendance", "Time Off", "Payroll"],
    shortDesc:
      "A self-service portal where employees view their profile, documents, attendance, leaves and payslips without an internal Odoo user.",
    fullDesc:
      "Most employees did not need, or have, an internal Odoo licence, but they still asked HR for the same information every month. I built a portal on Odoo's website/portal layer where employees log in and see their own profile, documents, attendance, leave balances and payslips, with record rules making sure each person only sees their own data.",
    features: [
      "Employee profile and personal documents",
      "Attendance history",
      "Leave balances and requests",
      "Payslip list with PDF download",
      "Record rules so employees only see their own records",
      "Portal pages built with HTTP controllers and QWeb templates",
    ],
    challenges:
      "HR answered routine questions about payslips, leave balances and documents by hand, and giving every employee an internal user was not an option.",
    solution:
      "Used portal users, custom HTTP controllers and QWeb templates, with security rules scoped to the logged-in employee.",
    results:
      "Employees get their own HR information directly, and HR handles fewer routine requests.",
    tech: ["Odoo 18", "Python", "HTTP Controllers", "QWeb", "Portal", "Record Rules"],
    images: [],
  },
  {
    id: 104,
    slug: "fixed-assets-pdc-vendor-payments",
    title: "Fixed Assets, PDC & Vendor Payments",
    icon: "Receipt",
    system: "services",
    modules: ["Accounting", "Assets", "Payments"],
    shortDesc:
      "Fixed asset customization with inter-company transfers and automatic asset codes, plus multi-bill and post-dated cheque vendor payments with cheque printing.",
    fullDesc:
      "Finance needed asset and payment workflows that standard Odoo does not cover out of the box. On the asset side I added inter-company asset transfers and automatic asset codes. On the payables side I built vendor payments that settle several bills at once, post-dated cheque (PDC) handling, and cheque printing in the company's format.",
    features: [
      "Inter-company fixed asset transfers",
      "Automatic asset code generation",
      "One vendor payment against multiple bills",
      "Post-dated cheque (PDC) payments",
      "Cheque printing layout",
    ],
    challenges:
      "Assets moved between group companies and payments made by post-dated cheque were handled outside the system or with manual journal entries.",
    solution:
      "Extended the asset and payment models with transfer logic, sequences for asset codes, multi-bill allocation, PDC states and a printable cheque report.",
    results:
      "Asset transfers, multi-bill settlements and cheque payments are recorded in Odoo with the correct accounting instead of manual entries.",
    tech: ["Odoo 18", "Python", "Odoo ORM", "QWeb", "Accounting"],
    images: [],
  },
  {
    id: 105,
    slug: "project-profitability-reports-background-jobs",
    title: "Project Profitability Reports & Notifications",
    icon: "FileSpreadsheet",
    system: "services",
    modules: ["Project", "Accounting", "Reporting", "Purchase"],
    shortDesc:
      "Project Detailed (PDF) and Project Summary (Excel) reports with revenue, costs, commitments and net profit, heavy exports moved to background jobs, and OneSignal push notifications.",
    fullDesc:
      "Management wanted one view of each project's profitability. I built a Project Detailed PDF report and a Project Summary Excel report that bring together revenue, costs, commitments and net profit. Large Excel exports were timing out in the browser, so I moved them to background jobs with queue_job and cron, with a status the user can check and a download link when the file is ready. I also added OneSignal push notifications so approvers are alerted about purchase requests, POs, invoices and projects.",
    features: [
      "Project Detailed report (QWeb PDF)",
      "Project Summary report (XLSX)",
      "Revenue, costs, commitments and net profit per project",
      "Heavy exports run as background jobs (queue_job + cron)",
      "Export status tracking and download when ready",
      "OneSignal push notifications for purchase requests, POs, invoices and projects",
      "Customized RFQ, quotation, sales and invoice reports",
    ],
    challenges:
      "Profitability data was spread across accounting, purchasing and projects, and large exports ran in the user's request until they timed out.",
    solution:
      "Built report models that aggregate the figures per project, generated the files in queued background jobs, and sent push notifications through the OneSignal API.",
    results:
      "Managers get project profitability in one report, large exports no longer time out, and approvers are notified as soon as something needs their action.",
    tech: ["Odoo 18", "Python", "QWeb", "XLSX Reports", "queue_job", "Cron", "OneSignal API"],
    images: [],
  },
  {
    id: 106,
    slug: "crm-cost-sheet-approvals",
    title: "CRM Cost Sheet & Multi-Level Approvals",
    icon: "Calculator",
    system: "trading",
    modules: ["CRM", "Sales", "Approvals"],
    shortDesc:
      "Opportunity costing with cost sheet lines, templates and currency conversion, approved through a multi-level workflow before a quotation can be created.",
    fullDesc:
      "Sales staff priced opportunities in spreadsheets before entering quotations. I built a cost sheet on the CRM opportunity: cost lines, reusable templates, currency conversion and product import from the lead. Each cost sheet goes through a multi-level approval workflow (draft → approval → escalation or approve-on-behalf → final approval) with approval limits set in Settings, and once approved the user creates the quotation directly from it.",
    features: [
      "Cost sheet lines on CRM opportunities",
      "Reusable cost sheet templates",
      "Currency conversion on cost lines",
      "Product import from the lead",
      "Multi-level approval: draft → approval → escalation / approve-on-behalf → final",
      "Reject-with-reason wizard and reset to draft",
      "Approval limits configured in Settings",
      "Cron reminders for pending approvals",
      "Quotation created directly from an approved cost sheet",
    ],
    challenges:
      "Costing lived outside Odoo, approvals happened over chat, and there was no record of who approved which price.",
    solution:
      "Modeled the cost sheet and its lines on the opportunity, added a state machine with security groups and approval limits, a rejection wizard, scheduled reminders and a button that builds the quotation from the approved lines.",
    results:
      "Pricing, approval history and the resulting quotation all live on the opportunity, and nothing is quoted without the required approval.",
    flagship: true,
    proof: [
      "Main developer on this ERP: 240 of 263 commits (~91%) across 6 custom modules",
      "About 2,400 lines of Python and 3,800 lines of XML across the project",
      "Full approval chain: draft → approval → escalation / approve-on-behalf → final approval",
    ],
    tech: ["Odoo 18", "Python", "XML", "Wizards", "Cron", "Security Groups"],
    images: [],
  },
  {
    id: 107,
    slug: "sales-invoice-approvals-crm-purchase",
    title: "Sales & Invoice Approvals, CRM–Purchase Link",
    icon: "Workflow",
    system: "trading",
    modules: ["Sales", "Accounting", "Purchase", "CRM", "Inventory"],
    shortDesc:
      "Two-phase approvals for quotations, sale orders and customer invoices, vendor RFQs linked to CRM opportunities, branded QWeb reports and data integrity rules.",
    fullDesc:
      "For the trading company I added approval control across the sales cycle and connected purchasing to CRM. Quotations, sale orders and customer invoices go through a two-phase approval with custom states, and confirmation or posting is blocked until approved. Vendor RFQs and purchase orders are linked to the CRM opportunity with product lines on the lead, so the sale order can be created from the opportunity. I also designed the company's branded reports and added rules that keep product data clean.",
    features: [
      "Two-phase approval for quotations, sale orders and customer invoices",
      "Custom states; confirmation and posting blocked until approved",
      "Automatic cron notifications to approvers",
      "Vendor RFQs and POs linked to CRM opportunities",
      "Product lines on the lead; sale order created from the opportunity",
      "Branded QWeb reports: section-wise and alternate-product quotations, delivery receipt, invoice, RFQ, PO",
      "Section-wise subtotals on sale and purchase lines",
      "Duplicate product names and internal references blocked",
      "Role-based access with security groups and record rules",
    ],
    challenges:
      "Orders and invoices could be confirmed without sign-off, purchasing was disconnected from the sales opportunity, and duplicate products were creeping into the catalogue.",
    solution:
      "Inherited sale.order and account.move with approval states and checks, linked purchase documents to crm.lead, added SQL/Python constraints for product uniqueness and built the report templates in QWeb.",
    results:
      "Every quotation, order and invoice is approved before it goes out, purchasing is traceable to the opportunity, and the product catalogue stays clean.",
    tech: ["Odoo 18", "Python", "XML", "QWeb", "Record Rules", "Cron"],
    images: [],
  },
  {
    id: 108,
    slug: "biometric-attendance-whatsapp-reporting",
    title: "Biometric Attendance Integration",
    icon: "Fingerprint",
    system: "college",
    modules: ["Attendance", "College Management", "Integrations"],
    shortDesc:
      "A biometric attendance module built from scratch that receives fingerprint punches three ways (ZK pull, ADMS/iClock and FKWeb push, USB import) and marks Present, Late and Absent automatically.",
    fullDesc:
      "A nursing college needed student and staff attendance to come straight from fingerprint devices. I built a biometric attendance module for Odoo 19 that receives punches three ways: pulled from the device over the ZK protocol, pushed by the device over HTTP (ADMS/iClock and FKWeb controllers), or imported from a USB file. Devices are registered and approved by an admin, and punches are only confirmed back to the device after they are saved in Odoo, so no attendance is lost. The first punch of the day marks a person Present or Late, and a scheduled job marks everyone without a punch Absent after the cut-off time.",
    features: [
      "ZK protocol pull from the device",
      "HTTP push endpoints for ADMS/iClock and FKWeb devices",
      "USB file import for offline devices",
      "Device registration with admin approval",
      "Punches acknowledged to the device only after saving, so no data is lost",
      "First punch marks Present or Late",
      "Cron marks students and staff Absent after the cut-off time",
      "Staff attendance with staff types and worked hours",
      "Combined student / staff attendance view",
    ],
    challenges:
      "The college used device models that speak different protocols, some devices could not be reached from the server, and attendance was being marked by hand.",
    solution:
      "Wrote a ZK client for pulling punches, HTTP controllers implementing the ADMS/iClock and FKWeb push protocols, a USB importer, and a cron-driven engine that turns raw punches into daily attendance.",
    results:
      "Attendance for students and staff is recorded automatically from the devices, and absentees are marked without manual work.",
    flagship: true,
    proof: [
      "Built from scratch on Odoo 19",
      "Works with three device protocols: ZK (pull), ADMS/iClock and FKWeb (HTTP push), plus USB import",
      "Punches are acknowledged to the device only after they are saved, so no attendance is lost",
    ],
    tech: ["Odoo 19", "Python", "ZK Protocol", "ADMS / iClock", "FKWeb", "HTTP Controllers", "Cron"],
    images: [],
  },
  {
    id: 109,
    slug: "whatsapp-attendance-reports-fee-numbering",
    title: "WhatsApp Attendance Reports & Fee Numbering",
    icon: "MessageCircle",
    system: "college",
    modules: ["College Management", "Integrations", "Accounting", "Reporting"],
    shortDesc:
      "Class-wise absent and late lists with 30-day absence counts sent to the principal on WhatsApp, plus custom student fee invoice numbering with a data migration.",
    fullDesc:
      "With attendance flowing in from the devices, the principal wanted a daily summary without logging into Odoo. I built class-wise absent and late reports, including each student's absence count for the last 30 days, and delivered them on WhatsApp both on a schedule and on demand. For finance, I changed student fee invoice numbers to a date + running number format by overriding Odoo's sequence logic, and wrote a migration script so existing invoices follow the same format. I also redesigned the student profile PDF report.",
    features: [
      "Class-wise absent and late lists",
      "30-day absence count per student",
      "WhatsApp delivery on a schedule (cron) and on demand",
      "Student fee invoice numbering: date + running number",
      "Override of Odoo's sequence logic for invoice names",
      "Migration script to renumber existing invoices",
      "Redesigned student profile PDF report (QWeb)",
    ],
    challenges:
      "The principal had no quick daily view of absences, and the default invoice numbers did not match the college's fee numbering format.",
    solution:
      "Built report generation grouped by class, sent through a WhatsApp integration from a scheduled job and a manual action, and overrode the invoice naming logic with a migration for historical data.",
    results:
      "The principal receives class-wise absence reports on WhatsApp every day, and every fee invoice, old and new, follows the college's numbering format.",
    tech: ["Odoo 19", "Python", "WhatsApp", "Cron", "Migrations", "QWeb", "Accounting"],
    images: [],
  },
]
