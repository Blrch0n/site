import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AsSeenOn from "@/components/AsSeenOn";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AsSeenOn />
      <Footer />
    </main>
  );
}
