// All text for the Odoo portfolio, taken from the CV. Edit here, not in the components.

export const profile = {
  // Visible name everywhere on the site (matches LinkedIn). Full legal name is used for SEO only.
  name: "Umair Akram",
  fullName: "Muhammad Umair Akram",
  initials: "UA",
  role: "Odoo Technical Developer",
  versions: ["Odoo 17", "Odoo 18", "Odoo 19"],
  location: "Multan, Pakistan",
  email: "umairawan2239@gmail.com",
  phone: "+92 306 7880329",
  phoneHref: "tel:+923067880329",
  whatsapp:
    "https://wa.me/923067880329?text=" +
    encodeURIComponent("Hi Umair, I found your portfolio and need help with an Odoo project."),
  linkedin: "https://www.linkedin.com/in/umair-akram-dev",
  linkedinLabel: "linkedin.com/in/umair-akram-dev",
  linkedinRecommendations: "https://www.linkedin.com/in/umair-akram-dev/details/recommendations/",
  github: "https://github.com/Umair-Alvi",
  githubLabel: "github.com/Umair-Alvi",
  cv: "/cv.pdf",
  photo: "/profile-odoo.jpg",
  intro:
    "Odoo 17–19 developer. Main developer on two full Odoo 18 ERP rollouts and the biometric attendance system of an Odoo 19 college platform.",
  about: [
    "I have 3 years in software development and 1+ year building custom Odoo modules. I start from the business and accounting process, trace issues through the code, and check how each change affects the related workflows before it ships.",
    "Before Odoo I built production frontends in React and Next.js, so Odoo's OWL/JavaScript layer and API integrations feel familiar.",
  ],
}

// What a client can hire me for. Only work I have actually delivered.
export const services = [
  {
    icon: "Boxes",
    title: "Custom module development",
    text: "New Odoo modules or extensions of standard apps, built with clean inheritance, security groups and record rules.",
    proof: "26+ custom modules across three production systems",
  },
  {
    icon: "Calculator",
    title: "Accounting & payroll customization",
    text: "Budget and commitment control, analytic accounting, PDC payments, fixed assets, payroll journal entries and WPS export.",
    proof: "Analytic budget control, petty cash, payroll WPS",
    href: "/projects/analytic-budget-commitment-control",
  },
  {
    icon: "Workflow",
    title: "Approval workflows",
    text: "Multi-level approvals for cost sheets, quotations, sale orders and invoices, with limits, escalation and reminders.",
    proof: "CRM cost sheet & sales/invoice approvals",
    href: "/projects/crm-cost-sheet-approvals",
  },
  {
    icon: "Plug",
    title: "Integrations",
    text: "Biometric devices (ZK, ADMS/iClock, FKWeb), WhatsApp messages, OneSignal push notifications and REST APIs.",
    proof: "Biometric attendance with 3 punch sources",
    href: "/projects/biometric-attendance-whatsapp-reporting",
  },
  {
    icon: "FileSpreadsheet",
    title: "Reports (PDF & Excel)",
    text: "Branded QWeb PDF reports and XLSX exports, with heavy exports moved to background jobs so they never time out.",
    proof: "Project profitability, payslips, quotations",
    href: "/projects/project-profitability-reports-background-jobs",
  },
  {
    icon: "Wrench",
    title: "Bug fixing & support",
    text: "Trace issues through the ORM and inherited models, fix the root cause and check related workflows before release.",
    proof: "Ongoing support on live Odoo 18 & 19 systems",
  },
]

// Copied from LinkedIn recommendations (received Nov 2026). Shown with the authors' public LinkedIn visibility.
// `about` lists case-study slugs the recommendation backs up (shown as proof on those pages).
export const recommendations = [
  {
    name: "Asif Dilshad",
    title: "Senior Odoo Functional Consultant · Accounting Expert",
    relation: "Managed Umair directly",
    text: "I had the opportunity to work closely with Umair on our Odoo implementation, and he consistently proved to be a dependable, skilled, and solution-oriented developer. Umair has strong command of Odoo customization. He built custom modules tailored to our business processes and delivered clear, well-formatted PDF and Excel reports that gave our teams the information they needed without manual effort.",
    truncated: true,
    about: ["project-profitability-reports-background-jobs", "employee-self-service-portal"],
  },
  {
    name: "Muhammad Waseem",
    title: "Full Stack Engineer · Kaspar Consulting Services",
    relation: "Managed Umair directly",
    text: "I had the pleasure of working with Umair at Kaspar, where he demonstrated strong technical skills and a solid understanding of Odoo development and customization. He worked on payroll customizations, budget validations, and project reporting, consistently showing problem-solving abilities, attention to detail, and a collaborative attitude. I highly recommend him as a skilled and dedicated developer.",
    about: ["payroll-wps-payslip-accounting", "analytic-budget-commitment-control"],
  },
  {
    name: "Sikandar Zaman",
    title: "Odoo Developer",
    relation: "Senior colleague",
    text: "Umair is a strong Odoo developer who handled payroll customizations, budget checks, and project reports at Kaspar. His ORM-level Python work was clean and maintainable, and his reports gave the team clear, accurate visibility. A great person to have on any Odoo project.",
    about: ["analytic-budget-commitment-control", "payroll-wps-payslip-accounting", "project-profitability-reports-background-jobs"],
  },
  {
    name: "M Faraz Bashir",
    title: "Associate AI Backend Engineer · Python",
    relation: "Same team",
    text: "Working alongside Umair at Kaspar showed me what a reliable Odoo developer looks like. From payroll customizations to budget checks and project reports, he turned messy requirements into clean, practical solutions. Any team would be lucky to have him.",
    about: ["analytic-budget-commitment-control"],
  },
]

export const stats = [
  { value: "900+", label: "Commits on a single Odoo 18 ERP rollout" },
  { value: "26+", label: "Custom Odoo modules delivered" },
  { value: "3", label: "Production ERP systems" },
  { value: "17 · 18 · 19", label: "Odoo versions in production" },
]

export const principles = [
  {
    title: "Process first",
    text: "I learn the business and accounting flow before writing code, so the module fits how the team actually works.",
  },
  {
    title: "Trace through the code",
    text: "I follow issues through Odoo's ORM and the inherited models instead of patching symptoms.",
  },
  {
    title: "Check the side effects",
    text: "Every change is checked against the related workflows: accounting entries, approvals, reports and access rights.",
  },
  {
    title: "Ship maintainable modules",
    text: "Clean inheritance, proper security groups and record rules, and migrations when data has to move.",
  },
]

// Functional expertise. `icon` names map to lucide-react icons in the component.
export const expertise = [
  {
    icon: "Calculator",
    title: "Accounting",
    items: [
      "Journal entries & payroll accounting",
      "Vendor payments & PDC cheques",
      "Analytic accounting",
      "Budget & commitment control",
      "Fixed assets",
      "Customer invoicing & approvals",
    ],
  },
  {
    icon: "Landmark",
    title: "Payroll & HR",
    items: ["Payroll customization", "WPS salary export", "Payslip reports", "Employee self-service portal"],
  },
  {
    icon: "CalendarCheck",
    title: "Attendance & Leaves",
    items: [
      "Multi-day attendance by project",
      "Automated leave allocation",
      "Leave salary",
      "Biometric attendance",
    ],
  },
  {
    icon: "Handshake",
    title: "CRM & Sales",
    items: ["Opportunity cost sheets", "Multi-level approvals", "Quotation & SO approvals", "Branded quotation reports"],
  },
  {
    icon: "PackageSearch",
    title: "Purchase & Inventory",
    items: ["Purchase requests", "Budget on PO lines", "RFQ / PO linked to CRM", "Product data integrity"],
  },
  {
    icon: "Wallet",
    title: "Expenses & Petty Cash",
    items: ["Petty cash balance checks", "Receipt & VAT rules", "Single analytic tag control", "Expense ↔ journal links"],
  },
  {
    icon: "Plug",
    title: "Integrations",
    items: ["Biometric devices (ZK, ADMS/iClock, FKWeb)", "WhatsApp", "OneSignal push notifications", "REST APIs"],
  },
  {
    icon: "FileSpreadsheet",
    title: "Reporting",
    items: ["QWeb PDF reports", "XLSX reports", "Background exports (queue_job)", "Project profitability"],
  },
]

export const skillGroups = [
  {
    title: "Odoo apps",
    items: [
      "Accounting",
      "Analytic & Budget",
      "Payroll (incl. WPS)",
      "Expenses & Petty Cash",
      "Attendance & Time Off",
      "CRM",
      "Sales",
      "Purchase",
      "Inventory",
      "Project",
      "Employee Portal",
      "College Management",
    ],
  },
  {
    title: "Odoo framework",
    items: [
      "Custom modules",
      "ORM",
      "Model inheritance",
      "QWeb (PDF)",
      "XLSX reports",
      "OWL",
      "Wizards",
      "Cron",
      "queue_job",
      "HTTP controllers",
      "Migrations",
      "Access rights & record rules",
      "Portal",
    ],
  },
  {
    title: "Languages & database",
    items: ["Python", "XML", "JavaScript (ES6+)", "SQL", "PostgreSQL"],
  },
  {
    title: "Integrations",
    items: ["ZK protocol", "ADMS / iClock", "FKWeb", "WhatsApp", "OneSignal", "REST APIs"],
  },
  {
    title: "Frontend & tools",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Git", "GitHub", "Jira"],
  },
]

export const experience = [
  {
    role: "Odoo Developer (v17, v18 & v19)",
    company: "Kaspar Consulting Services",
    place: "Multan · Hybrid",
    period: "Aug 2025 – Present",
    current: true,
    projects: [
      {
        name: "Odoo 18 ERP — Project-Based Services Company",
        note: "Main developer · 900+ commits across 20+ custom modules",
        points: [
          "Budget control on expenses, attendance and purchases, including committed amounts",
          "Analytic dashboard with per-user access and \"Committed Not Used\" tracking",
          "Fixed assets, multi-bill and PDC vendor payments, cheque printing",
          "Payroll with WPS export and automatic journal entries",
          "Attendance by project, leave automation and an employee self-service portal",
          "Project profitability reports, background exports and OneSignal notifications",
        ],
      },
      {
        name: "Odoo 18 ERP — Trading Company",
        note: "Main developer · 240 of 263 commits (~91%) across 6 custom modules",
        points: [
          "CRM cost sheet with templates, currency conversion and multi-level approvals",
          "Two-phase approvals for quotations, sale orders and customer invoices",
          "Vendor RFQs and POs linked to CRM opportunities",
          "Branded QWeb reports, data integrity rules and role-based access",
        ],
      },
      {
        name: "Odoo 19 College Management System — Nursing College",
        note: "Biometric attendance, WhatsApp reporting & fee customization",
        points: [
          "Biometric attendance from scratch: ZK pull, ADMS/iClock & FKWeb push, USB import",
          "Automatic Present / Late / Absent for students and staff",
          "Class-wise absence reports to the principal on WhatsApp",
          "Fee invoice numbering via sequence override, with a migration script",
        ],
      },
    ],
  },
  {
    role: "Junior Frontend Web Developer",
    company: "Kaspar Consulting Services",
    place: "Multan · Hybrid",
    period: "Jan 2024 – Aug 2025",
    points: [
      "Built responsive frontends for courier/logistics and insurance products with Next.js, React, Redux and Tailwind CSS",
      "Delivered 7+ production projects with REST API integrations in Agile teams",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Kaspar Consulting Services",
    place: "Multan",
    period: "Oct 2023 – Dec 2023",
    points: ["Built and fixed UI components with HTML, CSS, JavaScript and React.js"],
  },
]

export const education = [
  {
    degree: "Master's in Computer Science",
    school: "Bahauddin Zakariya University (BZU), Multan",
    period: "Dec 2021 – Apr 2024",
    note: "CGPA 3.56 / 4.00",
  },
  {
    degree: "B.Sc. Mathematics",
    school: "Govt. Civil Lines College, Multan",
    period: "2018 – 2021",
  },
]

export const languages = ["English (Intermediate)", "Urdu (Native)", "Punjabi (Native)"]
