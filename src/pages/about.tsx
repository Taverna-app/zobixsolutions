import { Seo } from "@/components/seo/seo";
import { About as AboutSection } from "@/sections/about";
import { Process } from "@/sections/process";
import { Skills } from "@/sections/skills";

function AboutPage() {
  return (
    <div className="pb-24 pt-36 sm:pt-44">
      <Seo
        title="About"
        description="Zobix Solutions is a software development studio in Karachi, Pakistan, founded by Zohaib Rana, building custom software, e-commerce and business systems for real businesses."
        path="/about"
      />

      <AboutSection headingLevel="h1" />
      <Skills />
      <Process />
    </div>
  );
}

export { AboutPage };
