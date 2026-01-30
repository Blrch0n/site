import type { Metadata } from "next";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sys&CoTech | Events",
  description:
    "Join our events and activities. Learn, collaborate, and grow with the community.",
};

export default function EventsPage() {
  return (
    <main className="relative pt-16">
      <Events />
      <Footer />
    </main>
  );
}
