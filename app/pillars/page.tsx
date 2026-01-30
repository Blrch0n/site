import type { Metadata } from "next";
import Pillars from "@/components/Pillars";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Pillars",
  description:
    "Six pillars of excellence that guide every project, event, and lesson we create.",
};

export default function PillarsPage() {
  return (
    <main className="relative pt-16">
      <Pillars />
      <Footer />
    </main>
  );
}
