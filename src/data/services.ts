import {
  AppWindow,
  Bot,
  Building2,
  Cloud,
  Radio,
  Server,
  ShoppingCart,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Custom Web Applications",
    description: "Business-focused web applications built around specific workflows, not generic templates.",
    technologies: ["React", "Node.js", "TypeScript", "MySQL"],
    icon: AppWindow,
  },
  {
    title: "SaaS Platforms",
    description: "Multi-tenant applications, subscription systems, dashboards and role-based workflows.",
    technologies: ["Node.js", "Stripe", "JWT", "RBAC"],
    icon: Cloud,
  },
  {
    title: "Business Management Software",
    description: "POS, inventory, sales, reporting, customer, supplier and operational systems.",
    technologies: ["MySQL", "Sequelize", "React", "Express.js"],
    icon: Building2,
  },
  {
    title: "E-commerce",
    description: "Custom online stores with product management, checkout and order workflows.",
    technologies: ["React", "MongoDB", "Stripe", "TanStack"],
    icon: ShoppingCart,
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform React Native applications for iOS and Android.",
    technologies: ["React Native", "REST APIs", "Push Notifications"],
    icon: Smartphone,
  },
  {
    title: "Real-Time Applications",
    description: "Chat, notifications, presence, audio/video communication and live updates.",
    technologies: ["Socket.IO", "WebRTC", "WebSockets"],
    icon: Radio,
  },
  {
    title: "AI-Powered Software",
    description: "AI evaluation, scoring, transcription and intelligent workflows.",
    technologies: ["OpenAI", "Groq", "Node.js"],
    icon: Bot,
  },
  {
    title: "API & Backend Engineering",
    description: "Secure REST APIs, authentication, authorization, database architecture and integrations.",
    technologies: ["Node.js", "Express.js", "JWT", "PostgreSQL"],
    icon: Server,
  },
];
