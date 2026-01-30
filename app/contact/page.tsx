import type { Metadata } from "next";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Contact",
  description:
    "Get in touch with Sys&CoTech. Join us and become part of Mongolia's premier technology community.",
};

export default function ContactPage() {
  return (
    <main className="relative pt-16">
      <Feedback />
      <Footer />
    </main>
  );
}
