import { Seo } from "@/components/seo/seo";
import { siteConfig } from "@/config/site";
import { skillGroups } from "@/data/skills";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { CTA } from "@/sections/cta";
import { Experience } from "@/sections/experience";
import { FeaturedProjects } from "@/sections/featured-projects";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { Skills } from "@/sections/skills";
import { TrustStrip } from "@/sections/trust-strip";
import { WhyWorkWithMe } from "@/sections/why-work-with-me";
import { ZobixSolutions } from "@/sections/zobix-solutions";

function Home() {
  return (
    <>
      <Seo
        title="Zohaib Rana | Software Engineer & Full-Stack Developer"
        description="Zohaib Rana is a Software Engineer specializing in Node.js, React, SaaS platforms, custom software, e-commerce, POS systems, real-time applications and mobile development."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            url: siteConfig.url,
            email: `mailto:${siteConfig.email}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressCountry: "PK",
            },
            worksFor: {
              "@type": "Organization",
              name: siteConfig.brand,
            },
            knowsAbout: skillGroups.flatMap((group) => group.skills.map((skill) => skill.name)),
            sameAs: Object.values(siteConfig.social),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.brand,
            description: siteConfig.brandDescription,
            url: siteConfig.url,
            founder: {
              "@type": "Person",
              name: siteConfig.name,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressCountry: "PK",
            },
            sameAs: Object.values(siteConfig.social),
          },
        ]}
      />
      <Hero />
      <TrustStrip />
      <FeaturedProjects />
      <Services />
      <About />
      <Experience />
      <Skills />
      <Process />
      <WhyWorkWithMe />
      <ZobixSolutions />
      <CTA />
      <Contact />
    </>
  );
}

export { Home };
