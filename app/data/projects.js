export const projectsData = [
  {
    id: 1,
    slug: "variazon-skincare-store",
    title: "Variazon - Skincare E-commerce Store",
    shortDesc: "WooCommerce-based online store for skincare products",
    fullDesc:
      "A comprehensive e-commerce solution built for a skincare brand. The platform features custom product layouts, responsive design, and optimized user experience. Implemented WooCommerce with custom payment gateways and shipping methods tailored for the Pakistani market. This project involved complete website development from scratch including theme customization, plugin integration, and performance optimization.",
    mainImage: "/skincare-store-ecommerce.jpg",
    hoverImage: "/phone-repair-shop-booking.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/skincare-store-ecommerce.jpg"],
    tech: ["WordPress", "WooCommerce", "Elementor", "SEO", "Custom CSS"],
    category: "wordpress",
    liveUrl: "https://variazon.com",
    githubUrl: null,
    client: "Variazon",
    duration: "2 months",
    year: "2024",
    features: [
      "Custom product page layouts with image galleries",
      "Fully responsive design for mobile and tablet",
      "WooCommerce integration with Cash on Delivery",
      "On-page SEO optimization for better rankings",
      "Product filtering and search functionality",
      "Secure payment gateway integration",
      "Admin panel for easy product management",
      "Custom contact forms with email notifications",
    ],
    challenges: "Complex product variations and slow page load times",
    solution: "Implemented WooCommerce variable products and optimized images with lazy loading",
    results: "40% increase in page load speed and 60% improvement in mobile user engagement",
  },
  {
    id: 2,
    slug: "weather-app",
    title: "Real-Time Weather Tracking App",
    shortDesc: "React-based weather application with location search",
    fullDesc:
      "A modern weather application built with React.js that provides real-time weather information for any location worldwide. Features include current conditions, 5-day forecast, and beautiful weather animations. The app uses OpenWeather API to fetch live data and displays it in an intuitive, user-friendly interface.",
    mainImage: "/weather-app-dashboard.png",
    hoverImage: "/ecommerce-store-products.jpg",
    images: ["/weather-app-dashboard.png"],
    tech: ["React.js", "Weather API", "Tailwind CSS", "JavaScript"],
    category: "frontend",
    liveUrl: null,
    githubUrl: "#",
    client: "Personal Project",
    duration: "2 weeks",
    year: "2024",
    features: [
      "Real-time weather data from OpenWeather API",
      "Location search with autocomplete suggestions",
      "5-day weather forecast with hourly breakdown",
      "Temperature unit conversion (Celsius/Fahrenheit)",
      "Dynamic weather condition animations",
      "Responsive design for all screen sizes",
      "Geolocation support for current location",
      "Clean and modern user interface",
    ],
    challenges: "API rate limiting and inconsistent weather icon display",
    solution: "Implemented caching mechanism and custom icon mapping system",
    results: "Smooth user experience with zero API errors",
  },
  {
    id: 3,
    slug: "ecommerce-php-store",
    title: "E-Commerce Store with Cash on Delivery",
    shortDesc: "Product listing platform with COD payment integration",
    fullDesc:
      "A custom-built e-commerce platform using PHP and MySQL for backend operations. Features complete product management, shopping cart functionality, and Cash on Delivery payment integration. Built as an academic project to demonstrate full-stack development capabilities.",
    mainImage: "/ecommerce-store-products.jpg",
    images: ["/ecommerce-store-products.jpg"],
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    category: "other",
    liveUrl: null,
    githubUrl: null,
    client: "Academic Project",
    duration: "1 month",
    year: "2023",
    features: [
      "Product catalog with multiple categories",
      "Shopping cart with add/remove functionality",
      "Cash on Delivery payment option",
      "Order management and tracking system",
      "Admin dashboard for product management",
      "User registration and login system",
      "Order history for customers",
    ],
    challenges: "Managing cart data across user sessions",
    solution: "Implemented PHP sessions with database backup for persistence",
    results: "Successfully completed with all features working",
  },
  {
    id: 4,
    slug: "repair-shop-booking",
    title: "Cell Phone Repair Shop Booking",
    shortDesc: "Online booking system for mobile repair services",
    fullDesc:
      "WordPress-based booking website for a mobile repair service company. Customers can easily select their phone model, choose required repair services, and book appointments online. The website features a user-friendly interface with custom forms and mobile-optimized design.",
    mainImage: "/phone-repair-shop-booking.jpg",
    images: ["/phone-repair-shop-booking.jpg"],
    tech: ["WordPress", "Elementor", "Custom CSS", "Contact Form 7"],
    category: "wordpress",
    liveUrl: "https://cellphonerepairshops.com",
    githubUrl: null,
    client: "Cell Phone Repair Shop",
    duration: "3 weeks",
    year: "2024",
    features: [
      "Interactive service booking form",
      "Phone model selection dropdown",
      "Service pricing calculator",
      "Mobile-responsive design",
      "Before/after repair gallery",
      "Customer testimonials section",
      "Contact information and location map",
    ],
    challenges: "Creating dynamic pricing based on service selection",
    solution: "Implemented custom JavaScript for real-time form calculations",
    results: "50% increase in online bookings within first month",
  },
  {
    id: 5,
    slug: "tausi-fashion-store",
    title: "Tausi - Fashion Shopify Store",
    shortDesc: "Shopify fashion store with custom theme customization",
    fullDesc:
      "A complete Shopify store setup for Tausi, a fashion brand. The project involved theme customization, product organization, collection setup, and brand styling. Optimized for mobile shopping and configured with payment gateways and shipping zones for smooth operations.",
    mainImage: "/fashion-clothing-store.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: ["/fashion-clothing-store.png"],
    tech: ["Shopify", "Liquid", "CSS", "Theme Editor"],
    category: "shopify",
    liveUrl: "https://tausi.shop",
    githubUrl: null,
    client: "Tausi Fashion",
    duration: "1 month",
    year: "2024",
    features: [
      "Custom theme styling and branding",
      "Product collections with smart filtering",
      "Size and color variant selection system",
      "Wishlist functionality",
      "Newsletter subscription integration",
      "Mobile-responsive checkout flow",
      "Multiple payment gateway setup",
      "Shipping zones and rates configuration",
    ],
    challenges: "Matching specific brand colors not available in default theme",
    solution: "Customized CSS and Liquid templates for consistent branding",
    results: "Successfully launched with 200+ products and positive client feedback",
  },

  {
  id: 6,
  slug: "odoo-hr-time-off-automation",
  title: "Odoo HR & Time Off Automation",

  shortDesc:
    "Custom Odoo HR and Time Off automation with employee, contract, and leave allocation rules.",

  fullDesc:
    "Customized Odoo HR and Time Off management to automate employee leave allocation based on joining date, contract information, employee details, and defined HR policies. The project included custom fields, conditional leave rules, and automated yearly leave allocation for different types of employee leaves.",

  mainImage: "/odoo-hr-time-off.png",

  images: [
    "/odoo-hr-time-off.png",
  ],

  tech: [
    "Odoo 18",
    "Python",
    "XML",
    "Odoo ORM",
    "PostgreSQL",
  ],

  category: "odoo",

  liveUrl: null,

  githubUrl:
    "https://github.com/Umair-Alvi/odoo-custom-module-by-umair",

  client: "Confidential",

  duration: "Custom Development",

  year: "2026",

  features: [
    "Custom Religion field added to Employee Private Information",
    "Custom Annual Type field added to Employee Contract",
    "Joining date based leave eligibility",
    "Automated Annual Leave allocation",
    "Sick Leave rules based on defined conditions",
    "Hajj Leave eligibility and allocation",
    "Maternity and Paternity Leave rules",
    "Bereavement, Study and Family Care Leave rules",
    "Conditional leave allocation based on HR policies",
    "Automatic yearly leave allocation",
  ],

  challenges:
    "The HR department required different leave rules and eligibility conditions based on employee joining date, contract information, religion, and specific company policies.",

  solution:
    "Customized Odoo HR and Time Off functionality by adding required employee and contract fields and implementing automated business logic for leave eligibility, allocation, and yearly leave management.",

  results:
    "Reduced manual HR work by automating employee leave eligibility and allocation according to the company's defined leave policies.",
},

{
  id: 7,
  slug: "odoo-18-petty-cash-expense-governance",
  title: "Odoo 18 Petty Cash & Expense Governance",
  shortDesc:
    "Custom Odoo 18 petty cash and expense management module with real-time balance validation, receipt enforcement, VAT compliance, RBAC, and automated accounting synchronization.",
  fullDesc:
    "Developed a custom Odoo 18 Petty Cash and Expense Governance module to improve financial control and expense management. The solution introduced real-time petty cash balance tracking, mandatory receipt validation, VAT and tax compliance checks, role-based access controls, employee cash journal mapping, analytic budget synchronization, and bi-directional navigation between expenses and accounting journal entries.",
  mainImage: "/expense_custom_module (4).png",
  images: [
    "/expense_custom_module (4).png",
    "/expense_custom_module (3).png",
    "/expense_custom_module (2).png",
    "/expense_custom_module (1).png",
  ],
  tech: [
    "Odoo 18",
    "Python",
    "XML",
    "Odoo ORM",
    "PostgreSQL",
    "QWeb",
  ],
  category: "odoo",
  liveUrl: null,
  githubUrl:
    "https://github.com/Umair-Alvi/odoo-custom-module-by-umair",
  client: "Confidential",
  duration: "Custom Development",
  year: "2026",
  features: [
    "Real-time petty cash balance tracking",
    "Petty cash overspending prevention",
    "Mandatory receipt attachment validation",
    "VAT and tax compliance enforcement",
    "Vendor Bill and VAT number validation",
    "Custom Role-Based Access Control (RBAC)",
    "Employee-specific cash journal mapping",
    "Automated analytic budget synchronization",
    "Real-time budget availability checking",
    "Bi-directional Expense and Accounting navigation",
    "Custom Accounting Journal Entry smart button",
    "Integration with HR Expense and Accounting modules",
  ],
  challenges:
    "The client required stronger financial governance within Odoo because standard Expenses did not provide live petty cash balance validation, mandatory receipt enforcement, VAT compliance checks, granular access control, or direct synchronization between employee cash journals and analytic budget lines.",
  solution:
    "Extended Odoo 18 HR Expense, Expense Sheet, Accounting, HR, and Budget functionality by developing a custom module with real-time petty cash calculations, expense receipt validation, VAT constraints, granular security groups, employee journal mapping, budget validation, analytic data synchronization, and smart navigation between expenses and journal entries.",
  results:
    "Improved financial control by preventing petty cash overdrafts, blocking unreceipted expenses, enforcing VAT requirements, restricting sensitive accounting fields, and reducing manual reconciliation through automated employee journal and analytic budget synchronization.",
}


]
