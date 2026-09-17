# ZOHAIB RANA — PREMIUM SOFTWARE ENGINEER PORTFOLIO

## MASTER DEVELOPMENT PROMPT FOR CLAUDE

You are an expert **Senior Product Designer, UX Engineer, Frontend Architect, Conversion Designer and Full-Stack Developer**.

Your task is to design and build a **premium, highly attractive, production-ready personal portfolio website for Zohaib Rana**, with **Zobix Solutions** as his software development brand/studio.

This is NOT a generic developer portfolio.

The website must feel like:

* A premium software engineering portfolio
* A serious software development studio
* A high-end SaaS/product showcase
* A conversion-focused client acquisition website
* A real engineer's work portfolio
* Modern, technically impressive and trustworthy

The website should make a potential client immediately understand:

1. Who Zohaib Rana is
2. What he builds
3. What technologies he specializes in
4. What real-world problems he solves
5. What projects he has actually built
6. What Zobix Solutions offers
7. How the client can contact him

The primary objective is:

**TURN WEBSITE VISITORS INTO CLIENT CONVERSATIONS.**

Do not sacrifice usability for visual effects.

---

# 1. CORE IDENTITY

## Personal Name

Zohaib Rana

## Professional Identity

Software Engineer

## Brand

Zobix Solutions

## Brand Description

Custom Software & Digital Solutions

IMPORTANT:

Zobix Solutions is currently a **brand/studio and is NOT a registered company**.

Never present Zobix Solutions as a registered company, corporation, agency registration, or legal entity.

Correct positioning:

"Zobix Solutions — Custom Software & Digital Solutions"

"Software development brand/studio founded by Zohaib Rana."

Do NOT write:

"Zobix Solutions Pvt Ltd"

"Zobix Solutions Inc."

"Registered company"

or any fabricated legal status.

---

# 2. PERSONAL INFORMATION

Name:

Zohaib Rana

Email:

[ranadeveloperoffical@gmail.com](mailto:ranadeveloperoffical@gmail.com)

Phone / WhatsApp:

+92 316 2380303

Location:

Karachi, Pakistan

Brand:

Zobix Solutions

Additional WhatsApp:

+92 330 8972805

Primary WhatsApp:

+92 316 2380303

---

# 3. PRIMARY POSITIONING

The hero section must communicate this idea immediately:

## Primary headline

"Software That Solves Real Business Problems."

Alternative supporting positioning:

"I build scalable web, mobile, SaaS, e-commerce, POS and business software."

The hero must NOT sound like a generic freelancer.

Avoid generic phrases such as:

"Passionate developer"

"Code enthusiast"

"Turning coffee into code"

"Welcome to my portfolio"

"Crafting digital experiences"

Instead communicate:

* Engineering
* Business problems
* Scalable systems
* Real products
* Real projects
* Production experience

---

# 4. HERO SECTION

Create an exceptionally strong hero section.

Above the fold should contain:

Small eyebrow:

"SOFTWARE ENGINEER • FULL-STACK • PRODUCT BUILDER"

Large headline:

"Software That Solves Real Business Problems."

Supporting paragraph:

"Hi, I'm Zohaib Rana — a Software Engineer specializing in scalable web applications, SaaS platforms, business management systems, e-commerce, real-time applications and mobile products."

Primary CTA:

"Start a Project"

Secondary CTA:

"View My Work"

Additional subtle CTA:

"Let's Talk on WhatsApp"

Hero should visually communicate engineering credibility.

Possible visual direction:

* Elegant dark background
* Subtle grid
* Very subtle code/system architecture motifs
* Premium typography
* Minimal glow
* Floating technology badges
* Animated terminal/code card
* Architecture-inspired visual elements
* Project preview cards

DO NOT create a cluttered hacker-style UI.

Do NOT use excessive neon.

The hero should look expensive.

---

# 5. HERO TRUST SIGNAL

Immediately below or beside the hero, create a compact credibility strip.

Example:

"7+ Years Experience"

"Production Applications"

"Web • Mobile • SaaS"

"Node.js • React • MySQL"

Only use information actually supported by the CV.

Do NOT invent client counts, revenue, users, awards or other statistics.

---

# 6. DESIGN DIRECTION

Create a premium dark-first visual identity.

Overall feeling:

* Minimal
* Sophisticated
* Technical
* High-end
* Modern
* Confident
* Clean
* Professional

Use:

* Near-black background
* Dark surfaces
* Soft borders
* High contrast typography
* One controlled accent color
* Subtle gradients
* Large typography
* Generous spacing
* Rounded but professional cards
* Micro-interactions

Avoid:

* Generic template appearance
* Excessive glassmorphism
* Excessive gradients
* Rainbow colors
* Huge glowing text
* Excessive animations
* Emoji-based UI
* Stock developer illustrations
* Fake metrics
* Fake testimonials

The website should feel closer to a premium SaaS/product website than a template portfolio.

---

# 7. RESPONSIVE DESIGN

Must be fully responsive.

Breakpoints:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Mobile experience is extremely important.

Navigation must become a polished mobile menu.

Cards must not overflow.

Typography must scale intelligently.

No horizontal scrolling.

Buttons must be touch-friendly.

---

# 8. TECHNOLOGY STACK

Use exactly:

React

TypeScript

Vite

Tailwind CSS

React Router DOM

shadcn/ui

Lucide React

Framer Motion

React Hook Form

Zod

Use npm.

Do NOT use Next.js.

Do NOT add unnecessary dependencies.

---

# 9. ARCHITECTURE

Use a clean scalable architecture.

Recommended:

src/
├── assets/
│   └── projects/
│       ├── kakarot/
│       ├── quickshoppos/
│       ├── xavcalling/
│       ├── playnex/
│       ├── call-center-ai/
│       ├── brain-blend/
│       ├── wish-by-star/
│       ├── global-entertainment/
│       ├── pos/
│       ├── taverna/
│       └── construction/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── project/
│   ├── contact/
│   └── ui/
│
├── sections/
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── FeaturedProjects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Process.tsx
│   ├── WhyWorkWithMe.tsx
│   ├── ZobixSolutions.tsx
│   ├── CTA.tsx
│   └── Contact.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── ProjectDetails.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── services.ts
│   └── skills.ts
│
├── config/
│   └── site.ts
│
├── hooks/
│
├── lib/
│
├── App.tsx
├── main.tsx
└── index.css

---

# 10. CENTRALIZED CONFIGURATION

Create:

src/config/site.ts

Store all global information here.

Example:

```ts
export const siteConfig = {
  name: "Zohaib Rana",
  title: "Software Engineer",
  brand: "Zobix Solutions",
  brandDescription: "Custom Software & Digital Solutions",
  email: "ranadeveloperoffical@gmail.com",
  phone: "+923308972805",
  whatsapp: "+923308972805",
  secondaryWhatsapp: "+923308972805",
  location: "Karachi, Pakistan",
};
```

Never duplicate contact information across components.

---

# 11. SOCIAL LINKS

Use real links only.

TikTok:

https://www.tiktok.com/@zobixsolutions

Facebook:

https://www.facebook.com/profile.php?id=61589242775572

Instagram:

https://www.instagram.com/zobixsolutions/

LinkedIn:

https://www.linkedin.com/in/zobix-solutions-12a5aa406/

Do not invent GitHub or other profiles if they have not been supplied.

---

# 12. NAVIGATION

Desktop navigation:

Logo:

ZOBIX

or:

ZR / ZOBIX

Navigation:

Home

About

Services

Projects

Experience

Skills

Contact

Primary button:

Start a Project

Navigation should remain elegant and compact.

On scroll:

* slightly reduce height
* add subtle background
* add border
* maintain readability

---

# 13. ABOUT SECTION

Create a strong personal introduction.

Heading:

"Engineering Products, Not Just Pages."

Explain that Zohaib works across:

* Backend systems
* Frontend applications
* Mobile applications
* SaaS
* Business software
* E-commerce
* POS
* Real-time communication
* AI-powered systems
* Payments
* Third-party integrations

Do not overstate expertise.

Use only information supported by the CV.

---

# 14. SERVICES

Create a premium services section.

Services:

## Custom Web Applications

Business-focused web applications built around specific workflows.

## SaaS Platforms

Multi-tenant applications, subscription systems, dashboards and role-based workflows.

## Business Management Software

POS, inventory, sales, reporting, customer, supplier and operational systems.

## E-commerce

Custom online stores with product management, checkout and order workflows.

## Mobile Applications

Cross-platform React Native applications.

## Real-Time Applications

Chat, notifications, presence, audio/video communication and live updates.

## AI-Powered Software

AI evaluation, scoring, transcription and intelligent workflows.

## API & Backend Engineering

Secure REST APIs, authentication, authorization, database architecture and integrations.

Each service card should include:

* Icon
* Short description
* Technologies
* subtle hover animation
* CTA

---

# 15. FEATURED PROJECTS

This is one of the most important sections.

Do NOT make it a boring grid of identical cards.

Create visually rich project cards.

Each card should communicate:

Project

Category

Short description

Technology

Key features

Live demo if available

View case study

Use actual screenshots.

Featured projects:

1. Kakarot Online
2. QuickShopPOS
3. ZobixCallingApp
4. Playnex
5. Call Center AI
6. Brain Blend

---

# 16. KAKAROT ONLINE

Name:

Kakarot Online

Category:

Custom E-commerce Platform

Description:

"Custom e-commerce platform built for a real client with a modern shopping experience, product management, guest checkout, order workflows and production deployment."

Technology:

TanStack Start

React

MongoDB

ImageKit

Vercel

Live URL:

https://kakarot.online

Features:

* Product management
* Categories
* Shopping experience
* Guest checkout
* Order workflows
* Production deployment
* Responsive UI

IMPORTANT:

Present this as a real delivered client project.

Do not invent client name, revenue or sales numbers.

---

# 17. QUICKSHOPPOS

Name:

QuickShopPOS

Category:

Retail & Wholesale Management Platform

Description:

"Business management software designed for billing, sales, inventory, products, customers, suppliers, purchases, reporting, profit management and barcode workflows."

Features:

* Billing
* Sales
* Inventory
* Products
* Customers
* Suppliers
* Purchases
* Reports
* Profit management
* Barcode management
* Role-based access
* Multi-store workflows
* Retail workflows
* Wholesale workflows
* Distributor workflows

Demo:

https://rana-quick-pos.duckdns.org

Use a strong visual dashboard presentation.

This should feel like a serious SaaS product.

---

# 18. zobixcallingapp

Category:

Real-Time Audio & Video Calling App

Technology:

React Native

WebRTC

Socket.IO

STUN/TURN

REST APIs

Features:

* One-to-one calls
* Group calls
* Call invitations
* Call lifecycle management
* Audio controls
* Video controls
* Ringtones
* Call duration
* Presence status
* Real-time signaling

Present this as a technically interesting real-time communication project.

---

# 19. PLAYNEX

Category:

Sports Venue Booking Platform

Technology:

Node.js

Express.js

MySQL

Sequelize

JWT

Stripe

Socket.IO

Cloudinary

Features:

* Venue management
* Court booking
* Real-time availability
* Booking conflict prevention
* Customer role
* Vendor role
* Admin role
* Stripe payments
* SwitchNow
* Bank transfer
* Cash payments
* Vendor payouts
* Reviews
* Ratings
* Email notifications
* SMS notifications
* Real-time updates

Create a detailed case study page.

---

# 20. CALL CENTER AI

Category:

AI-Powered Call Evaluation Platform

Technology:

Node.js

Express.js

MySQL

Sequelize

OpenAI GPT

Stripe

SendGrid

Twilio

Features:

* Call transcription
* AI scoring
* Empathy analysis
* Clarity analysis
* Objection handling
* Sentiment analysis
* Call control analysis
* Agent performance
* KPI dashboards
* Analytics
* Multi-language support

Visually emphasize the AI + analytics side.

---

# 21. BRAIN BREW

Category:

Enterprise HR Assessment & Recruitment SaaS

Technology:

Node.js

Express.js

MySQL

Sequelize

JWT

Stripe

Twilio

OpenAI

Groq SDK

Features:

* Multi-tenancy
* Admin
* Employee
* Candidate
* Super Admin
* Assessment engine
* Automated scoring
* AI evaluation
* Resume parsing
* Notifications
* Subscription billing
* Analytics
* White-label company cloning

This should communicate enterprise architecture.

---

# 22. ADDITIONAL PROJECTS

Also include:

## Wish by Star

Personalized wishes from celebrities.

Features:

* User registration
* Artist pricing
* Payment processing
* Delivery tracking

## Global Entertainment Movement

Talent marketplace and competition platform.

Features:

* Video submissions
* Competitions
* Jury evaluation
* E-learning
* Payments
* Prize allocation
* Voting

## Point of Sale System

Sales and inventory management.

Features:

* JWT authentication
* RBAC
* Sales
* Inventory
* Daily reports
* Refunds
* SQL optimization

## Taverna App

Mobile application using Google Maps.

Features:

* Location tracking
* Reviews
* Likes
* Comments
* Profiles

## Construction Management Software

Custom construction management system.

Features:

* Inventory
* Supplies
* Stores
* Projects
* Admin
* Users
* Reporting
* Load balancing

---

# 23. PROJECT SYSTEM

Create:

src/data/projects.ts

Project information must live in data.

UI components must never contain duplicated project content.

Every project should support:

* slug
* title
* category
* description
* detailed description
* role
* technologies
* features
* screenshots
* live URL
* featured
* optional github URL

Do not create fake GitHub URLs.

---

# 24. PROJECT DETAIL PAGE

Every project should have its own case study.

Layout:

Project hero

Project category

Project description

Technology stack

Problem / Objective

Solution

Key Features

Architecture / Technical Highlights

Screenshots

Results / Delivery

Live Demo

Contact CTA

IMPORTANT:

Do not invent business results.

If actual results are unavailable, use:

"Project capabilities"

"Technical implementation"

"Delivered functionality"

instead of fabricated metrics.

---

# 25. PROJECT SCREENSHOTS

Create dedicated folders:

src/assets/projects/kakarot/

src/assets/projects/quickshoppos/

src/assets/projects/xavcalling/

etc.

Make screenshot handling data-driven.

Example:

```ts
screenshots: [
  {
    src: "...",
    title: "Dashboard",
    description: "..."
  }
]
```

Create:

ProjectGallery

ProjectLightbox

ProjectScreenshotCard

Requirements:

* fullscreen viewing
* next
* previous
* close
* keyboard navigation
* Escape
* mobile support
* captions
* scroll lock
* accessible dialog

---

# 26. PROJECT FILTERING

Create filters:

All

Web Apps

SaaS

E-commerce

Business Software

Mobile

Real-Time

AI

Backend

Allow technology filtering where useful.

Include a smooth animated transition.

Empty state:

"No projects found."

---

# 27. EXPERIENCE

Create an elegant timeline.

## Xavia Solutions

MERN Stack Developer

January 2025 – Present

Karachi, Pakistan

Work:

* Enterprise-level web and mobile applications
* Node.js
* React
* React Native
* MySQL
* JWT authentication
* RBAC
* Secure APIs
* Socket.IO
* Chat
* Notifications
* Live updates
* Stripe subscription/billing
* Automated invoicing

## Upper Cubes

MERN Stack Developer

December 2023 – December 2024

Work:

* Multi-tenant SaaS platforms
* Recruitment and HR systems
* AI candidate assessment
* OpenAI / Groq SDK
* Dynamic analytics dashboards
* Reporting
* System monitoring

## Sidat Technology & Digital Services

MERN Stack Developer

September 2022 – November 2023

Work:

* Node.js
* Express
* MySQL
* Sequelize
* Real-time communication
* Video/audio systems
* Payment gateways
* Email/SMS notifications
* Third-party APIs
* Backend optimization

## Remerse

Node.js Developer

December 2021 – August 2022

Work:

* Backend API development
* Authentication
* Authorization
* Database management
* Large dataset operations
* Error handling
* Logging
* Security

---

# 28. EDUCATION

Bachelor of Commerce (B.Com)

Private

Ongoing

Aptech

Diploma in Software Engineering (ACCP)

2019 – 2021

Premier College

Intermediate

2015 – 2017

Ebrahim Jamal Institute of IT

Web Development Course

2018

---

# 29. TECHNICAL SKILLS

Group skills intelligently instead of showing a huge random list.

## Backend

Node.js

Express.js

REST APIs

JWT

RBAC

Webhooks

## Frontend

React.js

React Native

Next.js

Vite

HTML5

CSS3

Bootstrap

jQuery

## Databases

MySQL

PostgreSQL

Sequelize

Database Design

Query Optimization

Transactions

Indexing

Connection Pooling

## Real-Time

Socket.IO

WebSockets

WebRTC

STUN/TURN

Event Handling

## DevOps

Docker

Docker Compose

CI/CD

Redis

Git

GitHub

## Payments & Integrations

Stripe

SwitchNow

Twilio

SendGrid

Google Maps API

Cloudinary

## AI

OpenAI

Groq

## Engineering Tools

Swagger/OpenAPI

Postman

Logging

Monitoring

Secure Coding Practices

---

# 30. SKILLS VISUALIZATION

Do NOT use meaningless percentage bars.

Avoid:

Node.js 95%

React 90%

etc.

These numbers are subjective and unsupported.

Instead create grouped technology cards.

Each card can show:

Icon

Technology

Context

Example:

"Node.js"

"Backend APIs • SaaS • Real-time systems"

---

# 31. PROCESS

Create a visually impressive six-step process.

01 Discover

Understand the business, users, goals and requirements.

02 Plan

Define architecture, features, database, APIs and development roadmap.

03 Build

Develop frontend, backend, integrations and business workflows.

04 Test

Validate functionality, security, performance, responsiveness and edge cases.

05 Deploy

Prepare production infrastructure and deploy the application.

06 Improve

Maintain, optimize and expand the product as requirements evolve.

Use a connected visual timeline.

---

# 32. WHY WORK WITH ME

Do not use generic claims.

Use evidence-based positioning:

## Business-first development

Build around actual workflows instead of generic templates.

## Full-stack capability

Frontend, backend, databases, APIs and integrations.

## Real product experience

Showcase actual projects instead of concept-only designs.

## Scalable architecture

Experience with SaaS, multi-tenancy, RBAC, real-time systems and business applications.

## Integration experience

Payments, messaging, AI, maps, notifications and third-party APIs.

## Long-term mindset

Build systems that can evolve with the business.

---

# 33. ZOBIX SOLUTIONS SECTION

Create a dedicated brand section.

Heading:

"Need More Than a Website?"

Supporting copy:

"Zobix Solutions helps businesses turn ideas and operational problems into custom digital products."

Services:

* Professional Websites
* Custom E-commerce
* POS Systems
* Inventory Management
* Business Management Software
* SaaS Platforms
* Mobile Applications
* Custom APIs
* AI-Powered Applications
* Real-Time Applications

CTA:

"Discuss Your Project"

Clearly state:

"Zobix Solutions is currently a software development brand/studio and is not a registered company."

Keep this statement subtle and professional, preferably in the footer/about context rather than making it a dominant marketing message.

---

# 34. CLIENT CONVERSION SECTION

Create a high-converting CTA.

Heading:

"Have a Business Problem That Software Can Solve?"

Text:

"Tell me what you're trying to build, improve or automate. We'll discuss the requirements, technical approach and next steps."

Buttons:

"Start a Project"

"WhatsApp Me"

"Send an Email"

Do NOT use aggressive sales language.

---

# 35. WHATSAPP CTA

Primary WhatsApp number:

+923308972805

Create WhatsApp URL programmatically.

Prefilled message:

"Hi Zohaib, I visited your portfolio and would like to discuss a software project."

Do not hardcode the same link everywhere.

Create a helper:

```ts
createWhatsAppLink(message)
```

Use it throughout the application.

---

# 36. CONTACT FORM

Fields:

Name

Email

Phone

Company

Project Type

Budget

Message

Use:

React Hook Form

Zod

Validation.

Project type options:

Website

E-commerce

POS

Business Software

SaaS

Mobile App

AI Application

Custom Software

Other

Budget should be optional.

Do not expose secrets.

Create:

src/lib/contact.ts

with:

submitContactForm(data)

The UI should not depend directly on a specific email provider.

---

# 37. CONTACT UX

Success:

"Thanks! Your message has been received. I'll get back to you soon."

Error:

"Something went wrong. Please try WhatsApp or email instead."

Never show raw API errors.

---

# 38. FOOTER

Footer should contain:

Zobix Solutions

"Custom Software & Digital Solutions"

Zohaib Rana

Software Engineer

Karachi, Pakistan

Email

WhatsApp

Social links

Navigation

Copyright

Small legal clarification:

"Zobix Solutions is currently a software development brand/studio and is not a registered company."

---

# 39. ANIMATIONS

Use Framer Motion.

Animations should feel premium.

Use:

* Hero reveal
* Text reveal
* Scroll reveal
* Project card hover
* Image scale
* Button interaction
* Navigation transition
* Mobile menu
* Lightbox
* Page transitions

Avoid excessive animation.

Do NOT animate every element.

Respect:

prefers-reduced-motion.

---

# 40. PREMIUM MICRO-INTERACTIONS

Add subtle details such as:

* Cursor-aware card highlight
* Project image hover
* Technology badge hover
* Button arrow movement
* Navbar transition
* Section reveal
* Active filter animation
* Smooth scrolling
* Image zoom
* CTA hover

Keep everything professional.

---

# 41. CUSTOM VISUAL DETAILS

To make the website memorable, add subtle engineering-inspired visuals.

Possible elements:

* Code snippets
* API request visual
* database nodes
* architecture lines
* terminal-inspired cards
* system flow indicators
* technology chips
* animated connection lines
* project metrics cards where factual
* subtle grid

These must support the design rather than become decoration.

---

# 42. DO NOT CREATE A GENERIC TEMPLATE

This is extremely important.

Do NOT create:

Generic developer portfolio hero

Generic laptop mockup

Generic coding illustration

Generic "Hi I'm Developer" layout

Generic skill percentage bars

Generic testimonial carousel

Generic fake client logos

Generic statistics

Generic stock images

Instead create a portfolio based around:

REAL PROJECTS

REAL TECHNOLOGIES

REAL EXPERIENCE

REAL SERVICES

REAL CONTACT INFORMATION

---

# 43. SEO

Homepage title:

"Zohaib Rana | Software Engineer & Full-Stack Developer"

Description:

"Zohaib Rana is a Software Engineer specializing in Node.js, React, SaaS platforms, custom software, e-commerce, POS systems, real-time applications and mobile development."

Project pages should have dynamic metadata.

Use:

* title
* description
* canonical
* Open Graph
* Twitter metadata

---

# 44. STRUCTURED DATA

Implement appropriate JSON-LD:

Person

WebSite

BreadcrumbList

Only use SoftwareApplication schema when genuinely applicable.

Never invent:

* ratings
* reviews
* users
* revenue
* downloads
* awards
* client counts

---

# 45. PERFORMANCE

Target excellent performance.

Use:

* Vite
* route lazy loading
* image lazy loading
* optimized WebP/AVIF assets
* minimal dependencies
* code splitting
* reusable components

Do not load every project screenshot on the homepage.

---

# 46. ACCESSIBILITY

Every interactive element must be keyboard accessible.

Images need alt text.

Buttons need accessible names.

Dialogs need proper semantics.

Visible focus states.

Do not rely only on color.

Respect reduced motion.

---

# 47. ERROR STATES

Implement:

404

Project not found

Broken image

Empty project filters

Contact failure

Contact success

Loading state

No raw errors.

---

# 48. ROUTING

Use React Router.

Routes:

/

/projects

/projects/:slug

/about

/contact

Unknown routes:

404 page.

---

# 49. 404

Create a premium 404.

Text:

404

Page Not Found

"The page you're looking for doesn't exist or may have moved."

Buttons:

Back Home

View Projects

---

# 50. ANALYTICS

Do not add analytics automatically.

Create an optional integration point.

Never hardcode tracking IDs.

---

# 51. SECURITY

Never place:

API keys

Database passwords

Private credentials

Secret tokens

inside frontend code.

Frontend environment variables beginning with VITE_ are public.

Do not put secrets in them.

---

# 52. VERCEL

Deployment target:

Vercel

Build:

npm run build

Development:

npm run dev

Preview:

npm run preview

Must successfully execute:

npm install

npm run dev

npm run build

npm run preview

---

# 53. README

Create professional README containing:

* Overview
* Features
* Tech stack
* Installation
* Development
* Build
* Environment variables
* Project architecture
* Adding projects
* Adding screenshots
* Vercel deployment
* Contact

---

# 54. PROJECT DATA EXTENSIBILITY

Adding a project in future should require only:

1. Add screenshots
2. Add project object
3. Add technologies
4. Add features
5. Add URL if available
6. Set featured true/false

No UI modification should be required.

---

# 55. VISUAL HIERARCHY

Prioritize:

1. Hero
2. Real project work
3. Services
4. Experience
5. Technical capabilities
6. Process
7. Zobix Solutions
8. Contact CTA

The visitor should reach real work quickly.

Do not make the user scroll through five sections before seeing a project.

---

# 56. HOMEPAGE FLOW

Recommended order:

NAVBAR

↓

HERO

↓

TRUST / CREDIBILITY STRIP

↓

FEATURED PROJECTS

↓

WHAT I BUILD

↓

ABOUT

↓

EXPERIENCE

↓

TECHNICAL EXPERTISE

↓

PROCESS

↓

ZOBIX SOLUTIONS

↓

FINAL CTA

↓

CONTACT

↓

FOOTER

Optimize this flow for client conversion.

---

# 57. PROJECT CARD DESIGN

Each project card should have:

Large screenshot

Project name

Category

Short description

Technology badges

"View Case Study"

"Live Demo" when available

On hover:

* image zoom
* subtle border change
* arrow animation
* slight elevation

Do not make cards excessively rounded or flashy.

---

# 58. PROJECT DETAIL VISUAL DESIGN

Project detail page should feel like a SaaS case study.

Hero:

Project name

Category

Description

Technology

CTA

Then:

Overview

Technical Highlights

Features

Screenshots

Architecture/Workflow if useful

Final CTA

Use large screenshots.

Screenshots should be one of the strongest visual elements.

---

# 59. REAL PROJECT SCREENSHOTS

The project screenshot folders may initially be empty.

DO NOT generate fake screenshots.

Build the UI so screenshots can be dropped into the folders later.

Use placeholders only when necessary and clearly mark them as placeholders during development.

---

# 60. CONTENT QUALITY

Writing style:

Professional

Natural

Confident

Human

Concise

Technical where appropriate

Client-friendly

Avoid corporate jargon.

Avoid exaggerated claims.

Avoid AI-generated sounding phrases.

The portfolio should sound like an experienced software engineer talking to a real client.

---

# 61. FINAL BRAND MESSAGE

The site should communicate:

"Zohaib Rana builds software."

"Zobix Solutions turns business requirements into custom digital products."

That distinction should be clear.

Zohaib = person / engineer

Zobix Solutions = brand/studio

---

# 62. FINAL ACCEPTANCE CRITERIA

Do not consider the project complete until:

[ ] React works

[ ] TypeScript strict mode works

[ ] Vite works

[ ] Tailwind works

[ ] shadcn/ui works

[ ] React Router works

[ ] Responsive design works

[ ] Mobile navigation works

[ ] Hero is polished

[ ] Projects are visually impressive

[ ] Project filtering works

[ ] Project detail pages work

[ ] Project screenshots work

[ ] Lightbox works

[ ] Keyboard navigation works

[ ] Contact form works

[ ] Zod validation works

[ ] WhatsApp CTA works

[ ] Email CTA works

[ ] Social links work

[ ] Live project links work

[ ] 404 works

[ ] SEO metadata exists

[ ] JSON-LD exists

[ ] robots.txt exists

[ ] sitemap strategy exists

[ ] favicon exists

[ ] No fake information

[ ] No fake testimonials

[ ] No fake statistics

[ ] No fake clients

[ ] No fake GitHub URLs

[ ] No fabricated project results

[ ] No console errors

[ ] No TypeScript errors

[ ] Production build succeeds

[ ] Vercel deployment is ready

[ ] New projects can be added through data

[ ] Screenshots can be added without changing components

---

# 63. IMPORTANT CLAUDE EXECUTION INSTRUCTIONS

Do not simply provide a design explanation.

Actually build the website.

Before implementation:

1. Analyze the requirements.
2. Establish the information architecture.
3. Establish the visual system.
4. Establish reusable components.
5. Establish project data architecture.
6. Then implement.

Do not ask unnecessary questions when the information is already available in this prompt.

If a decision is needed, choose the option that best supports:

Professional credibility

Client conversion

Performance

Maintainability

Premium visual quality

Do not fabricate missing information.

If screenshots are not available, create the system for screenshots but do not invent project screenshots.

---

# 64. DESIGN QUALITY BAR

The final result should NOT look like:

"AI generated portfolio"

It should look like:

"A professional software engineer personally designed and built this."

It should have:

Strong typography

Excellent spacing

Intentional layout

High-quality interactions

Real project storytelling

Clear CTA hierarchy

Premium visual details

Excellent mobile experience

Fast performance

Clean architecture

---

# 65. MOST IMPORTANT RULE

Do not optimize the website for developer admiration only.

Optimize it for a potential business client.

A non-technical visitor should understand:

"What does Zohaib build?"

"Can he solve my problem?"

"What has he built before?"

"How can I contact him?"

within the first few moments of visiting the website.

A technical visitor should additionally understand:

"What technologies does he use?"

"Does he understand architecture?"

"Has he worked with real production systems?"

"Can he handle complex applications?"

The website must satisfy BOTH audiences.

---

# 66. FINAL EXPERIENCE

The complete experience should feel like:

A premium engineer portfolio

*

A software product showcase

*

A client acquisition website

*

A technical case-study platform

under one cohesive visual identity.

Primary identity:

# ZOHAIB RANA

## SOFTWARE ENGINEER

Secondary brand:

# ZOBIX SOLUTIONS

## CUSTOM SOFTWARE & DIGITAL SOLUTIONS

Primary CTA:

# START A PROJECT

Secondary CTA:

# VIEW MY WORK

WhatsApp:

# +92 316 2380303

Email:

# [ranadeveloperoffical@gmail.com](mailto:ranadeveloperoffical@gmail.com)

Location:

# Karachi, Pakistan

Build the complete production-ready website now.
