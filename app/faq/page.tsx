import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | FAQ",
  description:
    "Frequently asked questions about joining and participating in Sys&CoTech.",
};

export default function FAQPage() {
  return (
    <main className="relative pt-16">
      <FAQ />
      <Footer />
    </main>
  );
}
