import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Stats } from "@/components/Stats";
import { Trainings } from "@/components/Trainings";
import { Community } from "@/components/Community";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Stats />
        <Trainings />
        <Community />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
