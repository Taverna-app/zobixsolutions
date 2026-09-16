export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  work: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Xavia Solutions",
    role: "MERN Stack Developer",
    period: "January 2025 – Present",
    location: "Karachi, Pakistan",
    current: true,
    work: [
      "Enterprise-level web and mobile applications",
      "Node.js, React and React Native across the stack",
      "MySQL data modeling",
      "JWT authentication and RBAC",
      "Secure APIs",
      "Socket.IO for chat, notifications and live updates",
      "Stripe subscription/billing with automated invoicing",
    ],
  },
  {
    company: "Upper Cubes",
    role: "MERN Stack Developer",
    period: "December 2023 – December 2024",
    work: [
      "Multi-tenant SaaS platforms",
      "Recruitment and HR systems",
      "AI candidate assessment with OpenAI / Groq SDK",
      "Dynamic analytics dashboards",
      "Reporting and system monitoring",
    ],
  },
  {
    company: "Sidat Technology & Digital Services",
    role: "MERN Stack Developer",
    period: "September 2022 – November 2023",
    work: [
      "Node.js, Express and MySQL/Sequelize backends",
      "Real-time communication systems",
      "Video/audio systems",
      "Payment gateway integrations",
      "Email/SMS notifications",
      "Third-party API integrations",
      "Backend optimization",
    ],
  },
  {
    company: "Remerse",
    role: "Node.js Developer",
    period: "December 2021 – August 2022",
    work: [
      "Backend API development",
      "Authentication and authorization",
      "Database management",
      "Large dataset operations",
      "Error handling and logging",
      "Security hardening",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export const education: EducationEntry[] = [
  { degree: "Bachelor of Commerce (B.Com)", institution: "Private Institution", period: "Ongoing" },
  { degree: "Diploma in Software Engineering (ACCP)", institution: "Aptech", period: "2019 – 2021" },
  { degree: "Intermediate", institution: "Premier College", period: "2015 – 2017" },
  { degree: "Web Development Course", institution: "Ebrahim Jamal Institute of IT", period: "2018" },
];
