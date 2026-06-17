import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import ValueChain from "@/components/sections/ValueChain";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Partners from "@/components/sections/Partners";
import NewsTeaser from "@/components/sections/NewsTeaser";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <ValueChain />
      <Projects />
      <Stats />
      <Partners />
      <NewsTeaser />
      <CTA />
    </>
  );
}
