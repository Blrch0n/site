import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Projects",
  description:
    "Discover projects built by our members. Real-world applications and innovative solutions.",
};

export default function ProjectsPage() {
  return (
    <main className="relative pt-16">
      <ProjectsSection />
      <Footer />
    </main>
  );
}
