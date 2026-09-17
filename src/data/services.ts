import {
  Building2,
  Plug,
  Server,
  ShoppingCart,
  Store,
  Workflow,
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
    title: "Custom Business Software",
    description:
      "Software built around your exact workflow — management systems, internal tools and business dashboards, not generic templates.",
    technologies: ["React", "Node.js", "MySQL", "TypeScript"],
    icon: Building2,
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom online stores designed for your products, customers and operations — product management, cart, checkout and order tracking.",
    technologies: ["React", "MongoDB", "TanStack", "ImageKit"],
    icon: ShoppingCart,
  },
  {
    title: "POS & Inventory",
    description:
      "Manage billing, stock, purchases, customers, suppliers and profit — retail, wholesale and multi-store — from one system.",
    technologies: ["MySQL", "Sequelize", "React", "Barcode"],
    icon: Store,
  },
  {
    title: "Business Automation",
    description:
      "Replace repetitive manual processes with software-driven workflows, reporting and role-based access.",
    technologies: ["Node.js", "Express.js", "REST APIs"],
    icon: Workflow,
  },
  {
    title: "Web Development",
    description: "Fast, responsive and professional websites designed around your business goals.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    icon: Server,
  },
  {
    title: "Software Integration",
    description: "Connect your existing tools, APIs, payments and business systems into one workflow.",
    technologies: ["Stripe", "Twilio", "Webhooks", "REST APIs"],
    icon: Plug,
  },
];
