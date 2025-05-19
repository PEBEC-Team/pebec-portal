import { Metadata } from "next";
import Hero from "@/components/Hero/index";
import Feature from "@/components/Features/index";
import About from "@/components/About/index";
import FeaturesTab from "@/components/FeaturesTab/index";
import FunFact from "@/components/FunFact/index";
import Integration from "@/components/Integration/index";
import CTA from "@/components/CTA/index";
import FAQ from "@/components/FAQ/index";
import Contact from "@/components/Contact/index";
import President from "@/components/PresidentSection/index";
import LatestNewsSection from "@/components/NewsComp/index";

export const metadata: Metadata = {
  title: "PEBEC - Enabling Business Enviroment Secretariat",
  description: "Enabling Business Enviroment Secretariat"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <President/>
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <LatestNewsSection/>
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
