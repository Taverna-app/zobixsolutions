import { Seo } from "@/components/seo/seo";
import { siteConfig } from "@/config/site";
import { About } from "@/sections/about";
import { Contact } from "@/sections/contact";
import { CTA } from "@/sections/cta";
import { FeaturedProjects } from "@/sections/featured-projects";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";
import { TrustStrip } from "@/sections/trust-strip";
import { WhyWorkWithMe } from "@/sections/why-work-with-me";

function Home() {
  return (
    <>
      <Seo
        title="Zobix Solutions | Custom Software, E-Commerce & Business Systems"
        description="Zobix Solutions builds custom software, e-commerce platforms, POS systems and business solutions for growing businesses in Karachi, Pakistan."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.brand,
            description: siteConfig.brandDescription,
            url: siteConfig.url,
            email: `mailto:${siteConfig.email}`,
            founder: {
              "@type": "Person",
              name: siteConfig.founder,
              jobTitle: siteConfig.founderTitle,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressCountry: "PK",
            },
            sameAs: Object.values(siteConfig.social),
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.brand,
            url: siteConfig.url,
          },
        ]}
      />
      <Hero />
      <TrustStrip />
      <FeaturedProjects />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <About />
      <CTA />
      <Contact />
    </>
  );
}

export { Home };
