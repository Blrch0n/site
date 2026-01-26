import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { SectionHeader } from "@/components/FAQ";
import {
  ValueCard,
  PillarCard,
  ProgramCard,
  EventCard,
} from "@/components/Cards";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  Layers,
  Palette,
  Code2,
  Users,
  GraduationCap,
  Zap,
  BookOpen,
  Lightbulb,
  Trophy,
  Calendar,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF] opacity-[0.08] blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B4FFF] opacity-[0.08] blur-[120px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="WHO WE ARE"
              title="United by Passion, Driven by Innovation"
              subtitle="Since 2009, Sys&CoTech has been empowering students to master cutting-edge technologies and shape the future."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <ValueCard
                icon={<Layers className="w-6 h-6 text-[#00D4FF]" />}
                title="Learn Together"
                description="Master new technologies through hands-on collaboration and peer-to-peer teaching."
                delay={0}
              />
              <ValueCard
                icon={<Palette className="w-6 h-6 text-[#5B5FFF]" />}
                title="Design Excellence"
                description="Awaken inner creativity through digital design and visual innovation."
                delay={0.08}
              />
              <ValueCard
                icon={<Code2 className="w-6 h-6 text-[#E94FFF]" />}
                title="Engineer Mindset"
                description="Solve complex problems with competitive programming and algorithmic thinking."
                delay={0.16}
              />
            </div>

            {/* Stats Strip */}
            <div className="relative group flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 p-8 md:p-12 rounded-2xl bg-white/4 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#5B5FFF]/5 to-[#E94FFF]/5 opacity-50" />
              <div className="absolute inset-0 border border-[#5B5FFF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  13+
                </div>
                <div className="text-white/70">Active Members</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  36+
                </div>
                <div className="text-white/70">Total Members</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                  36+
                </div>
                <div className="text-white/70">Projects Built</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section
          id="pillars"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5B5FFF] opacity-[0.06] blur-[150px] rounded-full" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E94FFF] opacity-[0.06] blur-[150px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="OUR CORE"
              title="Six Pillars of Excellence"
              subtitle="Principles that guide every project, event, and lesson we create."
            />

            <div className="grid md:grid-cols-3 gap-6">
              <PillarCard
                icon={<BookOpen className="w-6 h-6 text-[#00D4FF]" />}
                title="Learning New Technologies"
                description="Master emerging tools and frameworks to stay ahead of the curve."
                delay={0}
              />
              <PillarCard
                icon={<Palette className="w-6 h-6 text-[#5B5FFF]" />}
                title="Design Creation"
                description="Awaken inner artistry through digital design and visual excellence."
                delay={0.08}
              />
              <PillarCard
                icon={<Code2 className="w-6 h-6 text-[#9B4FFF]" />}
                title="Engineering Mindset"
                description="Solve complex problems with competitive programming expertise."
                delay={0.16}
              />
              <PillarCard
                icon={<Users className="w-6 h-6 text-[#E94FFF]" />}
                title="Leadership & Responsibility"
                description="Mentor peers and lead by example in all initiatives."
                delay={0.24}
              />
              <PillarCard
                icon={<GraduationCap className="w-6 h-6 text-[#FFAA00]" />}
                title="Education"
                description="Share knowledge within the club and beyond our community."
                delay={0.32}
              />
              <PillarCard
                icon={<Zap className="w-6 h-6 text-[#00D4FF]" />}
                title="Innovation"
                description="Always think, always create, always evolve forward."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section
          id="programs"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Centered Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-[#00D4FF] opacity-[0.05] blur-[180px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="TRAINING"
              title="Master the Fundamentals"
              subtitle="Student-led training programs designed for real-world impact."
            />

            <div className="grid md:grid-cols-2 gap-6">
              <ProgramCard
                number="01"
                title="Programming Fundamentals"
                description="Build problem-solving foundations with C language. Learn core concepts through hands-on practice."
                delay={0}
              />
              <ProgramCard
                number="02"
                title="Object-Oriented Programming"
                description="Master OOP patterns with Java. Practical implementation of real-world design principles."
                delay={0.08}
              />
              <ProgramCard
                number="03"
                title="UI/UX Design"
                description="Design theory and tools for digital products. Master Figma, principles, and user-centered design."
                delay={0.16}
              />
              <ProgramCard
                number="04"
                title="Web Development"
                description="Full-stack technologies from client to server. HTML, CSS, JavaScript, Node.js, and modern frameworks."
                delay={0.24}
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          id="events"
          className="relative py-24 md:py-32 overflow-hidden"
        >
          {/* Diagonal Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#9B4FFF] opacity-[0.08] blur-[140px] rounded-full" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#FFAA00] opacity-[0.06] blur-[140px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12">
            <SectionHeader
              eyebrow="ACTIVITIES"
              title="We Build Together"
              subtitle="Annual competitions and community events that define us."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <EventCard
                year="17 Years"
                icon={<Trophy className="w-10 h-10 text-[#00D4FF]" />}
                title="Competitive Programming Contest"
                description="Annual algorithm competition testing problem-solving skills."
                delay={0}
              />
              <EventCard
                year="10 Years"
                icon={<Lightbulb className="w-10 h-10 text-[#5B5FFF]" />}
                title="Dev Hackathon"
                description="48-hour innovation sprint to build the next big idea."
                delay={0.08}
              />
              <EventCard
                year="Ongoing"
                icon={<Calendar className="w-10 h-10 text-[#9B4FFF]" />}
                title="Training Sessions"
                description="Weekly workshops for students and club members."
                delay={0.16}
              />
              <EventCard
                year="Ongoing"
                icon={<Clock className="w-10 h-10 text-[#E94FFF]" />}
                title="Collaborative Events"
                description="Partnerships with clubs and sponsors like Golomt Bank."
                delay={0.24}
              />
            </div>
          </div>
        </section>

        <FAQ />
        <Footer />
      </main>
    </>
  );
}
