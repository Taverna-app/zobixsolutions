export const projectFilters = [
  "All",
  "Web Apps",
  "SaaS",
  "E-commerce",
  "Business Software",
  "Mobile",
  "Real-Time",
  "AI",
  "Backend",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export interface ProjectScreenshot {
  src: string;
  title: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: Exclude<ProjectFilter, "All">[];
  description: string;
  detailedDescription: string;
  role: string;
  problem: string;
  solution: string;
  technicalHighlights: string[];
  technologies: string[];
  features: string[];
  screenshots: ProjectScreenshot[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const KAKAROT_ONLINE_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/kakarot-online/01-home.webp", title: "Home" },
  { src: "/projects/kakarot-online/02-shop-products.webp", title: "Shop / Products" },
  { src: "/projects/kakarot-online/03-product-detail.webp", title: "Product Detail" },
  { src: "/projects/kakarot-online/04-category.webp", title: "Category" },
  { src: "/projects/kakarot-online/05-cart.webp", title: "Cart" },
  { src: "/projects/kakarot-online/06-checkout.webp", title: "Checkout" },
  { src: "/projects/kakarot-online/07-order-success.webp", title: "Order Success" },
  { src: "/projects/kakarot-online/08-account.webp", title: "Account" },
  { src: "/projects/kakarot-online/09-order-history.webp", title: "Order History" },
  { src: "/projects/kakarot-online/10-admin-dashboard.webp", title: "Admin Dashboard" },
  { src: "/projects/kakarot-online/11-admin-products.webp", title: "Admin Products" },
  { src: "/projects/kakarot-online/12-admin-orders.webp", title: "Admin Orders" },
];

const QUICKSHOPPOS_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/quickshoppos/01-login.webp", title: "Login" },
  { src: "/projects/quickshoppos/02-dashboard.webp", title: "Dashboard" },
  { src: "/projects/quickshoppos/03-pos-billing.webp", title: "POS Billing" },
  { src: "/projects/quickshoppos/04-products.webp", title: "Products" },
  { src: "/projects/quickshoppos/05-product-create-edit.webp", title: "Product Create / Edit" },
  { src: "/projects/quickshoppos/06-inventory.webp", title: "Inventory" },
  { src: "/projects/quickshoppos/07-purchases.webp", title: "Purchases" },
  { src: "/projects/quickshoppos/08-sales.webp", title: "Sales" },
  { src: "/projects/quickshoppos/09-customers.webp", title: "Customers" },
  { src: "/projects/quickshoppos/10-suppliers.webp", title: "Suppliers" },
  { src: "/projects/quickshoppos/11-reports.webp", title: "Reports" },
  { src: "/projects/quickshoppos/12-profit.webp", title: "Profit" },
  { src: "/projects/quickshoppos/13-barcode.webp", title: "Barcode" },
  { src: "/projects/quickshoppos/14-settings.webp", title: "Settings" },
  { src: "/projects/quickshoppos/15-role-permissions.webp", title: "Role Permissions" },
];

const zobixcallingapp_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/zobixcallingapp/01-login.webp", title: "Login" },
  { src: "/projects/zobixcallingapp/02-home.webp", title: "Home" },
  { src: "/projects/zobixcallingapp/03-contacts.webp", title: "Contacts" },
  { src: "/projects/zobixcallingapp/04-chat.webp", title: "Chat" },
  { src: "/projects/zobixcallingapp/05-incoming-call.webp", title: "Incoming Call" },
  { src: "/projects/zobixcallingapp/06-outgoing-call.webp", title: "Outgoing Call" },
  { src: "/projects/zobixcallingapp/07-active-audio-call.webp", title: "Active Audio Call" },
  { src: "/projects/zobixcallingapp/08-active-video-call.webp", title: "Active Video Call" },
  { src: "/projects/zobixcallingapp/09-group-call.webp", title: "Group Call" },
  { src: "/projects/zobixcallingapp/10-call-history.webp", title: "Call History" },
  { src: "/projects/zobixcallingapp/11-profile.webp", title: "Profile" },
  { src: "/projects/zobixcallingapp/12-settings.webp", title: "Settings" },
];

const PLAYNEX_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/playnex/01-home.webp", title: "Home" },
  { src: "/projects/playnex/02-venues.webp", title: "Venues" },
  { src: "/projects/playnex/03-venue-detail.webp", title: "Venue Detail" },
  { src: "/projects/playnex/04-court-selection.webp", title: "Court Selection" },
  { src: "/projects/playnex/05-booking.webp", title: "Booking" },
  { src: "/projects/playnex/06-availability.webp", title: "Availability" },
  { src: "/projects/playnex/07-payment.webp", title: "Payment" },
  { src: "/projects/playnex/08-booking-success.webp", title: "Booking Success" },
  { src: "/projects/playnex/09-customer-dashboard.webp", title: "Customer Dashboard" },
  { src: "/projects/playnex/10-vendor-dashboard.webp", title: "Vendor Dashboard" },
  { src: "/projects/playnex/11-admin-dashboard.webp", title: "Admin Dashboard" },
  { src: "/projects/playnex/12-payouts.webp", title: "Payouts" },
  { src: "/projects/playnex/13-reviews.webp", title: "Reviews" },
];

const CALL_CENTER_AI_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/call-center-ai/01-login.webp", title: "Login" },
  { src: "/projects/call-center-ai/02-dashboard.webp", title: "Dashboard" },
  { src: "/projects/call-center-ai/03-calls.webp", title: "Calls" },
  { src: "/projects/call-center-ai/04-call-detail.webp", title: "Call Detail" },
  { src: "/projects/call-center-ai/05-transcription.webp", title: "Transcription" },
  { src: "/projects/call-center-ai/06-ai-score.webp", title: "AI Score" },
  { src: "/projects/call-center-ai/07-sentiment.webp", title: "Sentiment" },
  { src: "/projects/call-center-ai/08-agent-performance.webp", title: "Agent Performance" },
  { src: "/projects/call-center-ai/09-kpi-dashboard.webp", title: "KPI Dashboard" },
  { src: "/projects/call-center-ai/10-analytics.webp", title: "Analytics" },
  { src: "/projects/call-center-ai/11-billing.webp", title: "Billing" },
  { src: "/projects/call-center-ai/12-settings.webp", title: "Settings" },
];

const BRAIN_BREW_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/brain-blend/01-login.webp", title: "Login" },
  { src: "/projects/brain-blend/02-super-admin.webp", title: "Super Admin" },
  { src: "/projects/brain-blend/03-company-dashboard.webp", title: "Company Dashboard" },
  { src: "/projects/brain-blend/04-employees.webp", title: "Employees" },
  { src: "/projects/brain-blend/05-candidates.webp", title: "Candidates" },
  { src: "/projects/brain-blend/06-assessments.webp", title: "Assessments" },
  { src: "/projects/brain-blend/07-assessment-detail.webp", title: "Assessment Detail" },
  { src: "/projects/brain-blend/08-ai-evaluation.webp", title: "AI Evaluation" },
  { src: "/projects/brain-blend/09-resume-parsing.webp", title: "Resume Parsing" },
  { src: "/projects/brain-blend/10-analytics.webp", title: "Analytics" },
  { src: "/projects/brain-blend/11-subscription.webp", title: "Subscription" },
  { src: "/projects/brain-blend/12-white-label-settings.webp", title: "White-Label Settings" },
];

const WISH_BY_STAR_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/wish-by-star/01-home.webp", title: "Home" },
  { src: "/projects/wish-by-star/02-artists.webp", title: "Artists" },
  { src: "/projects/wish-by-star/03-artist-detail.webp", title: "Artist Detail" },
  { src: "/projects/wish-by-star/04-wish-request.webp", title: "Wish Request" },
  { src: "/projects/wish-by-star/05-checkout.webp", title: "Checkout" },
  { src: "/projects/wish-by-star/06-payment.webp", title: "Payment" },
  { src: "/projects/wish-by-star/07-order-tracking.webp", title: "Order Tracking" },
  { src: "/projects/wish-by-star/08-user-profile.webp", title: "User Profile" },
];

const GLOBAL_ENTERTAINMENT_MOVEMENT_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/global-entertainment-movement/01-home.webp", title: "Home" },
  { src: "/projects/global-entertainment-movement/02-competitions.webp", title: "Competitions" },
  { src: "/projects/global-entertainment-movement/03-video-submission.webp", title: "Video Submission" },
  { src: "/projects/global-entertainment-movement/04-video-detail.webp", title: "Video Detail" },
  { src: "/projects/global-entertainment-movement/05-jury-evaluation.webp", title: "Jury Evaluation" },
  { src: "/projects/global-entertainment-movement/06-voting.webp", title: "Voting" },
  { src: "/projects/global-entertainment-movement/07-e-learning.webp", title: "E-Learning" },
  { src: "/projects/global-entertainment-movement/08-payment.webp", title: "Payment" },
  { src: "/projects/global-entertainment-movement/09-prizes.webp", title: "Prizes" },
  { src: "/projects/global-entertainment-movement/10-admin-dashboard.webp", title: "Admin Dashboard" },
];

const POINT_OF_SALE_SYSTEM_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/point-of-sale-system/01-login.webp", title: "Login" },
  { src: "/projects/point-of-sale-system/02-dashboard.webp", title: "Dashboard" },
  { src: "/projects/point-of-sale-system/03-pos.webp", title: "POS" },
  { src: "/projects/point-of-sale-system/04-products.webp", title: "Products" },
  { src: "/projects/point-of-sale-system/05-inventory.webp", title: "Inventory" },
  { src: "/projects/point-of-sale-system/06-sales.webp", title: "Sales" },
  { src: "/projects/point-of-sale-system/07-refunds.webp", title: "Refunds" },
  { src: "/projects/point-of-sale-system/08-reports.webp", title: "Reports" },
  { src: "/projects/point-of-sale-system/09-users-roles.webp", title: "Users & Roles" },
  { src: "/projects/point-of-sale-system/10-settings.webp", title: "Settings" },
];

const TAVERNA_APP_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/taverna-app/01-home.webp", title: "Home" },
  { src: "/projects/taverna-app/02-map.webp", title: "Map" },
  { src: "/projects/taverna-app/03-location-detail.webp", title: "Location Detail" },
  { src: "/projects/taverna-app/04-search.webp", title: "Search" },
  { src: "/projects/taverna-app/05-reviews.webp", title: "Reviews" },
  { src: "/projects/taverna-app/06-comments.webp", title: "Comments" },
  { src: "/projects/taverna-app/07-profile.webp", title: "Profile" },
  { src: "/projects/taverna-app/08-settings.webp", title: "Settings" },
];

const CONSTRUCTION_MANAGEMENT_SOFTWARE_SCREENSHOTS: ProjectScreenshot[] = [
  { src: "/projects/construction-management-software/01-login.webp", title: "Login" },
  { src: "/projects/construction-management-software/02-dashboard.webp", title: "Dashboard" },
  { src: "/projects/construction-management-software/03-projects.webp", title: "Projects" },
  { src: "/projects/construction-management-software/04-project-detail.webp", title: "Project Detail" },
  { src: "/projects/construction-management-software/05-inventory.webp", title: "Inventory" },
  { src: "/projects/construction-management-software/06-supplies.webp", title: "Supplies" },
  { src: "/projects/construction-management-software/07-stores.webp", title: "Stores" },
  { src: "/projects/construction-management-software/08-users.webp", title: "Users" },
  { src: "/projects/construction-management-software/09-reports.webp", title: "Reports" },
  { src: "/projects/construction-management-software/10-admin-settings.webp", title: "Admin Settings" },
];

export const projects: Project[] = [
  {
    slug: "kakarot-online",
    title: "Kakarot Online",
    category: "Custom E-commerce Platform",
    tags: ["Web Apps", "E-commerce"],
    description:
      "Custom e-commerce platform built for a real client with a modern shopping experience, product management, guest checkout and order workflows.",
    detailedDescription:
      "Kakarot Online is a production e-commerce platform delivered for a real client, built with TanStack Start and React on top of MongoDB. It covers the full storefront experience — catalog browsing, categories, guest checkout and order workflows — deployed and running live on Vercel.",
    role: "Full-stack developer — architecture, storefront, checkout flow and deployment.",
    problem:
      "The client needed a fast, modern storefront that could go live quickly without forcing customers to create an account before purchasing.",
    solution:
      "Built a TanStack Start application with a MongoDB-backed catalog, image delivery through ImageKit, and a streamlined guest checkout so customers can order in as few steps as possible.",
    technicalHighlights: [
      "Server-rendered storefront routes built with TanStack Start",
      "MongoDB schema for products, categories and orders",
      "ImageKit-powered responsive product imagery",
      "Guest checkout flow with order tracking",
      "Production deployment and monitoring on Vercel",
    ],
    technologies: ["TanStack Start", "React", "MongoDB", "ImageKit", "Vercel"],
    features: [
      "Product management",
      "Categories",
      "Shopping experience",
      "Guest checkout",
      "Order workflows",
      "Production deployment",
      "Responsive UI",
    ],
    screenshots: KAKAROT_ONLINE_SCREENSHOTS,
    liveUrl: "https://kakarot.online",
    featured: true,
  },
  {
    slug: "quickshoppos",
    title: "QuickShopPOS",
    category: "Retail & Wholesale Management Platform",
    tags: ["SaaS", "Business Software"],
    description:
      "Business management software designed for billing, sales, inventory, products, customers, suppliers, purchases, reporting and barcode workflows.",
    detailedDescription:
      "QuickShopPOS is a multi-store retail and wholesale management platform covering billing, inventory, purchasing and reporting in one system. It supports role-based access so store owners, staff and distributors each get the workflow relevant to them.",
    role: "Full-stack developer — data model, POS workflows and reporting dashboards.",
    problem:
      "Retail and wholesale businesses often juggle separate tools for billing, inventory and supplier management. That fragmentation makes stock levels and profit margins hard to trust.",
    solution:
      "Built a single platform where billing, inventory, purchasing and reporting share the same source of truth, with barcode workflows and role-based access to fit retail, wholesale and distributor operations.",
    technicalHighlights: [
      "Role-based access for retail, wholesale and distributor workflows",
      "Multi-store inventory and stock synchronization",
      "Barcode-driven billing and product lookup",
      "Profit and sales reporting dashboards",
    ],
    technologies: ["Node.js", "React", "MySQL", "Sequelize", "JWT"],
    features: [
      "Billing",
      "Sales",
      "Inventory",
      "Products",
      "Customers",
      "Suppliers",
      "Purchases",
      "Reports",
      "Profit management",
      "Barcode management",
      "Role-based access",
      "Multi-store workflows",
      "Retail workflows",
      "Wholesale workflows",
      "Distributor workflows",
    ],
    screenshots: QUICKSHOPPOS_SCREENSHOTS,
    liveUrl: "https://rana-quick-pos.duckdns.org",
    featured: true,
  },
  {
    slug: "zobixcallingapp",
    title: "ZobixCallingApp",
    category: "Real-Time Audio & Video Calling App",
    tags: ["Mobile", "Real-Time"],
    description:
      "React Native calling application with one-to-one and group calls, real-time signaling and full call lifecycle management.",
    detailedDescription:
      "ZobixCallingApp is a React Native application built on WebRTC and Socket.IO for real-time one-to-one and group audio/video calls, including invitations, presence and call lifecycle management from ringing through to call end.",
    role: "Mobile & real-time systems developer — signaling server, call state and client UI.",
    problem:
      "Real-time calling needs reliable signaling and connection handling across unpredictable mobile networks, plus a call experience that feels instant.",
    solution:
      "Implemented WebRTC peer connections with STUN/TURN fallback and a Socket.IO signaling layer to manage invitations, call state and presence in real time.",
    technicalHighlights: [
      "WebRTC peer-to-peer audio/video with STUN/TURN fallback",
      "Socket.IO signaling for call invitations and lifecycle events",
      "Group call session management",
      "Presence and call-duration tracking",
    ],
    technologies: ["React Native", "WebRTC", "Socket.IO", "STUN/TURN", "REST APIs"],
    features: [
      "One-to-one calls",
      "Group calls",
      "Call invitations",
      "Call lifecycle management",
      "Audio controls",
      "Video controls",
      "Ringtones",
      "Call duration",
      "Presence status",
      "Real-time signaling",
    ],
    screenshots: zobixcallingapp_SCREENSHOTS,
    featured: true,
  },
  {
    slug: "playnex",
    title: "Playnex",
    category: "Sports Venue Booking Platform",
    tags: ["Web Apps", "SaaS", "Real-Time"],
    description:
      "Sports venue and court booking platform with real-time availability, multi-role accounts and integrated payments.",
    detailedDescription:
      "Playnex connects venue owners with players, handling court booking, real-time availability, vendor payouts and reviews across customer, vendor and admin roles.",
    role: "Backend & full-stack developer — booking engine, payments and vendor workflows.",
    problem:
      "Venue booking needs to prevent double-booking in real time while supporting multiple payment methods and giving vendors visibility into payouts.",
    solution:
      "Built a booking engine with conflict prevention backed by MySQL transactions, real-time availability via Socket.IO, and Stripe alongside bank transfer and cash payment options, with a dedicated vendor payout flow.",
    technicalHighlights: [
      "Booking conflict prevention with transactional writes",
      "Real-time court availability via Socket.IO",
      "Stripe payments plus bank transfer and cash options",
      "Vendor payout tracking and reporting",
      "Review and rating system per venue",
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "Stripe", "Socket.IO", "Cloudinary"],
    features: [
      "Venue management",
      "Court booking",
      "Real-time availability",
      "Booking conflict prevention",
      "Customer role",
      "Vendor role",
      "Admin role",
      "Stripe payments",
      "SwitchNow",
      "Bank transfer",
      "Cash payments",
      "Vendor payouts",
      "Reviews",
      "Ratings",
      "Email notifications",
      "SMS notifications",
      "Real-time updates",
    ],
    screenshots: PLAYNEX_SCREENSHOTS,
    featured: true,
  },
  {
    slug: "call-center-ai",
    title: "Call Center AI",
    category: "AI-Powered Call Evaluation Platform",
    tags: ["AI", "SaaS", "Backend"],
    description:
      "AI-powered platform that transcribes and scores call center conversations across empathy, clarity and objection handling.",
    detailedDescription:
      "Call Center AI ingests recorded calls, transcribes them, and uses OpenAI GPT to score agent performance across empathy, clarity, objection handling and sentiment — surfaced through KPI dashboards for team leads.",
    role: "Backend developer — transcription pipeline, AI scoring and analytics APIs.",
    problem:
      "Manually reviewing call recordings for coaching is slow and inconsistent across reviewers.",
    solution:
      "Built a pipeline that transcribes calls with Twilio recordings, sends transcripts to OpenAI GPT for structured scoring, and stores results in MySQL for dashboards and trend analysis.",
    technicalHighlights: [
      "Automated call transcription pipeline",
      "GPT-based structured scoring across multiple dimensions",
      "Sentiment and call-control analysis",
      "KPI dashboards for agent performance",
      "Multi-language transcript support",
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize", "OpenAI GPT", "Stripe", "SendGrid", "Twilio"],
    features: [
      "Call transcription",
      "AI scoring",
      "Empathy analysis",
      "Clarity analysis",
      "Objection handling",
      "Sentiment analysis",
      "Call control analysis",
      "Agent performance",
      "KPI dashboards",
      "Analytics",
      "Multi-language support",
    ],
    screenshots: CALL_CENTER_AI_SCREENSHOTS,
    featured: true,
  },
  {
    slug: "brain-blend",
    title: "Brain Blend",
    category: "Enterprise HR Assessment & Recruitment SaaS",
    tags: ["SaaS", "AI", "Business Software"],
    description:
      "Multi-tenant HR assessment and recruitment SaaS with AI-assisted candidate evaluation and white-label company cloning.",
    detailedDescription:
      "Brain Blend is a multi-tenant recruitment and assessment platform serving admins, employees and candidates under one system, with AI-assisted resume parsing and automated scoring, subscription billing and white-label company cloning.",
    role: "Backend developer — multi-tenant architecture, assessment engine and billing.",
    problem:
      "Enterprise recruitment teams need to run structured assessments at scale while keeping each client's data and branding isolated.",
    solution:
      "Designed a multi-tenant schema with company-scoped data, an assessment engine with automated and AI-assisted scoring, and Stripe-based subscription billing, plus a cloning workflow to spin up new white-labeled company instances.",
    technicalHighlights: [
      "Multi-tenant data architecture with company-level isolation",
      "AI-assisted resume parsing and candidate scoring (OpenAI, Groq SDK)",
      "Automated assessment engine and scoring pipeline",
      "Stripe subscription billing",
      "White-label company cloning workflow",
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Sequelize", "JWT", "Stripe", "Twilio", "OpenAI", "Groq SDK"],
    features: [
      "Multi-tenancy",
      "Admin",
      "Employee",
      "Candidate",
      "Super Admin",
      "Assessment engine",
      "Automated scoring",
      "AI evaluation",
      "Resume parsing",
      "Notifications",
      "Subscription billing",
      "Analytics",
      "White-label company cloning",
    ],
    screenshots: BRAIN_BREW_SCREENSHOTS,
    featured: true,
  },
  {
    slug: "wish-by-star",
    title: "Wish by Star",
    category: "Celebrity Wish Marketplace",
    tags: ["Web Apps", "E-commerce"],
    description: "Platform for booking personalized video wishes from celebrities, with artist pricing and delivery tracking.",
    detailedDescription:
      "Wish by Star lets fans book personalized video wishes from celebrities and artists, handling artist-specific pricing, payment processing and delivery tracking end to end.",
    role: "Full-stack developer.",
    problem: "Fans and artists needed a structured way to request, price and deliver personalized video content.",
    solution: "Built user registration, per-artist pricing, payment processing and a delivery tracking flow to move a request from booking to fulfillment.",
    technicalHighlights: [
      "Per-artist pricing configuration",
      "Payment processing integration",
      "Delivery status tracking",
    ],
    technologies: ["Node.js", "React", "MySQL"],
    features: ["User registration", "Artist pricing", "Payment processing", "Delivery tracking"],
    screenshots: WISH_BY_STAR_SCREENSHOTS,
    featured: false,
  },
  {
    slug: "global-entertainment-movement",
    title: "Global Entertainment Movement",
    category: "Talent Marketplace & Competition Platform",
    tags: ["Web Apps", "SaaS"],
    description: "Talent marketplace with video submissions, competitions, jury evaluation and e-learning.",
    detailedDescription:
      "Global Entertainment Movement is a talent marketplace where creators submit videos into competitions, get evaluated by a jury, take part in e-learning content, and compete for prizes through a voting system.",
    role: "Full-stack developer.",
    problem: "Talent competitions needed a structured pipeline from submission through jury scoring to prize allocation.",
    solution: "Built video submission handling, jury evaluation workflows, e-learning modules, payments and a voting/prize allocation system.",
    technicalHighlights: [
      "Video submission and competition entry pipeline",
      "Jury scoring workflow",
      "Voting and prize allocation logic",
    ],
    technologies: ["Node.js", "React", "MySQL"],
    features: ["Video submissions", "Competitions", "Jury evaluation", "E-learning", "Payments", "Prize allocation", "Voting"],
    screenshots: GLOBAL_ENTERTAINMENT_MOVEMENT_SCREENSHOTS,
    featured: false,
  },
  {
    slug: "point-of-sale-system",
    title: "Point of Sale System",
    category: "Sales & Inventory Management",
    tags: ["Business Software", "Backend"],
    description: "JWT-authenticated point of sale system with role-based access, inventory and daily reporting.",
    detailedDescription:
      "A point of sale system covering sales, inventory management, refunds and daily reporting, built with role-based access control and optimized SQL queries for fast lookups at checkout.",
    role: "Backend developer.",
    problem: "Retail checkout needed fast, reliable stock lookups alongside daily sales and refund reporting.",
    solution: "Implemented JWT authentication with RBAC, an inventory-aware sales flow, refund handling and optimized SQL queries for daily reporting.",
    technicalHighlights: [
      "JWT authentication with role-based access control",
      "SQL query optimization for checkout performance",
      "Daily sales and refund reporting",
    ],
    technologies: ["Node.js", "Express.js", "MySQL"],
    features: ["JWT authentication", "RBAC", "Sales", "Inventory", "Daily reports", "Refunds", "SQL optimization"],
    screenshots: POINT_OF_SALE_SYSTEM_SCREENSHOTS,
    featured: false,
  },
  {
    slug: "taverna-app",
    title: "Taverna App",
    category: "Location-Based Mobile App",
    tags: ["Mobile"],
    description: "Mobile app built around Google Maps for location tracking, reviews and social profiles.",
    detailedDescription:
      "Taverna App is a mobile application centered on Google Maps, letting users track locations, leave reviews, like and comment on places, and maintain personal profiles.",
    role: "Mobile developer.",
    problem: "Users needed a location-first mobile experience for discovering and reviewing venues.",
    solution: "Integrated Google Maps for location tracking and built reviews, likes, comments and profile features around it.",
    technicalHighlights: [
      "Google Maps API integration for location tracking",
      "Social features: reviews, likes, comments",
    ],
    technologies: ["React Native", "Google Maps API"],
    features: ["Location tracking", "Reviews", "Likes", "Comments", "Profiles"],
    screenshots: TAVERNA_APP_SCREENSHOTS,
    featured: false,
  },
  {
    slug: "construction-management-software",
    title: "Construction Management Software",
    category: "Construction Operations Platform",
    tags: ["Business Software", "Backend"],
    description: "Custom system for managing construction inventory, supplies, stores, projects and reporting.",
    detailedDescription:
      "A custom construction management system covering inventory, supplies, stores and multi-project tracking, with admin and user roles and reporting built for operational visibility at scale.",
    role: "Backend developer.",
    problem: "Construction operations needed a single system to track inventory and supplies across multiple stores and projects.",
    solution: "Built inventory, supply and store management modules tied to individual projects, with admin/user roles, reporting and load-balanced infrastructure for scale.",
    technicalHighlights: [
      "Inventory and supply tracking across multiple stores",
      "Project-scoped data model",
      "Load-balanced backend infrastructure",
    ],
    technologies: ["Node.js", "Express.js", "MySQL"],
    features: ["Inventory", "Supplies", "Stores", "Projects", "Admin", "Users", "Reporting", "Load balancing"],
    screenshots: CONSTRUCTION_MANAGEMENT_SOFTWARE_SCREENSHOTS,
    featured: false,
  },
];
export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
