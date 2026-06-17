import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import EcosystemMap from "@/components/sections/EcosystemMap";
import Partners from "@/components/sections/Partners";
import NewsTeaser from "@/components/sections/NewsTeaser";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <EcosystemMap />
      <Partners />
      <NewsTeaser />
      <CTA />
    </>
  );
}
