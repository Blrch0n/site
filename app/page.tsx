import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Programs from "@/components/Programs";
import ProjectsSection from "@/components/ProjectsSection";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <AsSeenOn />
      <About />
      <Pillars />
      <Programs />
      <ProjectsSection />
      <Events />
      <FAQ />
      <Feedback />
      <Footer />
    </main>
  );
}
