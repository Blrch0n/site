import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | About",
  description:
    "Learn about Mongolia's premier technology student club. United by passion, driven by innovation since 2009.",
};

export default function AboutPage() {
  return (
    <main className="relative pt-16">
      <About />
      <Footer />
    </main>
  );
}
