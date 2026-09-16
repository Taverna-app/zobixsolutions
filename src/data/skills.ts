export interface SkillGroup {
  group: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    group: "Backend",
    skills: [
      { name: "Node.js", context: "Backend APIs • SaaS • Real-time systems" },
      { name: "Express.js", context: "REST APIs • Middleware • Route architecture" },
      { name: "REST APIs", context: "Client-server contracts • Versioning" },
      { name: "JWT", context: "Authentication • Session management" },
      { name: "RBAC", context: "Role-based access • Multi-tenant apps" },
      { name: "Webhooks", context: "Payment & third-party event handling" },
    ],
  },
  {
    group: "Frontend",
    skills: [
      { name: "React.js", context: "SPAs • Dashboards • Product UIs" },
      { name: "React Native", context: "Cross-platform mobile apps" },
      { name: "Next.js", context: "Server-rendered React applications" },
      { name: "Vite", context: "Modern build tooling" },
      { name: "HTML5", context: "Semantic, accessible markup" },
      { name: "CSS3", context: "Responsive, animated interfaces" },
      { name: "Bootstrap", context: "Rapid UI prototyping" },
      { name: "jQuery", context: "Legacy application maintenance" },
    ],
  },
  {
    group: "Databases",
    skills: [
      { name: "MySQL", context: "Relational schema design" },
      { name: "PostgreSQL", context: "Relational schema design" },
      { name: "Sequelize", context: "ORM modeling & migrations" },
      { name: "Database Design", context: "Normalization • Multi-tenancy" },
      { name: "Query Optimization", context: "Indexing • Performance tuning" },
      { name: "Transactions", context: "Data integrity under concurrency" },
      { name: "Indexing", context: "Fast lookups at scale" },
      { name: "Connection Pooling", context: "High-throughput workloads" },
    ],
  },
  {
    group: "Real-Time",
    skills: [
      { name: "Socket.IO", context: "Chat • Notifications • Live updates" },
      { name: "WebSockets", context: "Bi-directional real-time data" },
      { name: "WebRTC", context: "Audio/video calling" },
      { name: "STUN/TURN", context: "NAT traversal for calls" },
      { name: "Event Handling", context: "Real-time system design" },
    ],
  },
  {
    group: "DevOps",
    skills: [
      { name: "Docker", context: "Containerized deployments" },
      { name: "Docker Compose", context: "Multi-service local environments" },
      { name: "CI/CD", context: "Automated build & deploy pipelines" },
      { name: "Redis", context: "Caching • Session storage" },
      { name: "Git", context: "Version control workflows" },
      { name: "GitHub", context: "Collaboration & code review" },
    ],
  },
  {
    group: "Payments & Integrations",
    skills: [
      { name: "Stripe", context: "Subscriptions • Checkout • Payouts" },
      { name: "SwitchNow", context: "Regional payment processing" },
      { name: "Twilio", context: "SMS & voice notifications" },
      { name: "SendGrid", context: "Transactional email" },
      { name: "Google Maps API", context: "Location-based features" },
      { name: "Cloudinary", context: "Media storage & delivery" },
    ],
  },
  {
    group: "AI",
    skills: [
      { name: "OpenAI", context: "Scoring • Evaluation • Transcription" },
      { name: "Groq", context: "Low-latency AI inference" },
    ],
  },
  {
    group: "Engineering Tools",
    skills: [
      { name: "Swagger/OpenAPI", context: "API documentation" },
      { name: "Postman", context: "API testing & collections" },
      { name: "Logging", context: "Observability" },
      { name: "Monitoring", context: "Production reliability" },
      { name: "Secure Coding Practices", context: "Auth, validation & data protection" },
    ],
  },
];
