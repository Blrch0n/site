import type { Metadata } from "next";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Programs",
  description:
    "Master the fundamentals with student-led training programs designed for real-world impact.",
};

export default function ProgramsPage() {
  return (
    <main className="relative pt-16">
      <Programs />
      <Footer />
    </main>
  );
}
