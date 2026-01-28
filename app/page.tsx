import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import {
  ValueCard,
  PillarCard,
  ProgramCard,
  EventCard,
} from "@/components/Cards";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
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
        <section id="about" className="relative overflow-hidden">
          <SectionFrame index="01" className="py-24 md:py-32" showTopDivider>
            {/* Background Effects - subtle */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-cyan)] opacity-[0.02] blur-[160px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="WHO WE ARE"
                title="United by Passion, Driven by Innovation"
                subtitle="Since 2009, Sys&CoTech has been empowering students to master cutting-edge technologies and shape the future."
              />

              <div className="grid md:grid-cols-3 gap-5 mb-20">
                <ValueCard
                  icon={
                    <Layers className="w-5 h-5 text-[var(--accent-cyan)]" />
                  }
                  title="Learn Together"
                  description="Master new technologies through hands-on collaboration and peer-to-peer teaching."
                  delay={0}
                />
                <ValueCard
                  icon={
                    <Palette className="w-5 h-5 text-[var(--accent-blue)]" />
                  }
                  title="Design Excellence"
                  description="Awaken inner creativity through digital design and visual innovation."
                  delay={0.08}
                />
                <ValueCard
                  icon={<Code2 className="w-5 h-5 text-[var(--accent-pink)]" />}
                  title="Engineer Mindset"
                  description="Solve complex problems with competitive programming and algorithmic thinking."
                  delay={0.16}
                />
              </div>

              {/* Stats Strip */}
              <div className="relative group flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-10 md:p-12 rounded-xl bg-white/[0.02] border border-white/8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#5B5FFF]/5 to-[#E94FFF]/5 opacity-30" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    13+
                  </div>
                  <div className="text-white/50 text-sm">Active Members</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/8" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    36+
                  </div>
                  <div className="text-white/50 text-sm">Total Members</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/8" />
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                    36+
                  </div>
                  <div className="text-white/50 text-sm">Projects Built</div>
                </div>
              </div>
            </div>
          </SectionFrame>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="relative overflow-hidden">
          <SectionFrame index="02" className="py-24 md:py-32" showTopDivider>
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.02] blur-[180px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="OUR CORE"
                title="Six Pillars of Excellence"
                subtitle="Principles that guide every project, event, and lesson we create."
              />

              <div className="grid md:grid-cols-3 gap-5">
                <PillarCard
                  icon={
                    <BookOpen className="w-5 h-5 text-[var(--accent-cyan)]" />
                  }
                  title="Learning New Technologies"
                  description="Master emerging tools and frameworks to stay ahead of the curve."
                  delay={0}
                />
                <PillarCard
                  icon={
                    <Palette className="w-5 h-5 text-[var(--accent-blue)]" />
                  }
                  title="Design Creation"
                  description="Awaken inner artistry through digital design and visual excellence."
                  delay={0.08}
                />
                <PillarCard
                  icon={
                    <Code2 className="w-5 h-5 text-[var(--accent-violet)]" />
                  }
                  title="Engineering Mindset"
                  description="Solve complex problems with competitive programming expertise."
                  delay={0.16}
                />
                <PillarCard
                  icon={<Users className="w-5 h-5 text-[var(--accent-pink)]" />}
                  title="Leadership & Responsibility"
                  description="Mentor peers and lead by example in all initiatives."
                  delay={0.24}
                />
                <PillarCard
                  icon={
                    <GraduationCap className="w-5 h-5 text-[var(--accent-amber)]" />
                  }
                  title="Education"
                  description="Share knowledge within the club and beyond our community."
                  delay={0.32}
                />
                <PillarCard
                  icon={<Zap className="w-5 h-5 text-[var(--accent-cyan)]" />}
                  title="Innovation"
                  description="Always think, always create, always evolve forward."
                  delay={0.4}
                />
              </div>
            </div>
          </SectionFrame>
        </section>

        {/* Programs Section */}
        <section id="programs" className="relative overflow-hidden">
          <SectionFrame index="03" className="py-24 md:py-32" showTopDivider>
            {/* Centered Glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[800px] h-[800px] bg-[var(--accent-cyan)] opacity-[0.015] blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="TRAINING"
                title="Master the Fundamentals"
                subtitle="Student-led training programs designed for real-world impact."
              />

              <div className="grid md:grid-cols-2 gap-5">
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
          </SectionFrame>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative overflow-hidden">
          <SectionFrame index="04" className="py-24 md:py-32" showTopDivider>
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-pink)] opacity-[0.02] blur-[160px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <Projects />
            </div>
          </SectionFrame>
        </section>

        {/* Events Section */}
        <section id="events" className="relative overflow-hidden">
          <SectionFrame index="05" className="py-24 md:py-32" showTopDivider>
            {/* Diagonal Gradients */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[var(--accent-violet)] opacity-[0.02] blur-[180px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <SectionHeader
                eyebrow="ACTIVITIES"
                title="We Build Together"
                subtitle="Annual competitions and community events that define us."
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <EventCard
                  year="17 Years"
                  icon={
                    <Trophy className="w-8 h-8 text-[var(--accent-cyan)]" />
                  }
                  title="Competitive Programming Contest"
                  description="Annual algorithm competition testing problem-solving skills."
                  delay={0}
                />
                <EventCard
                  year="10 Years"
                  icon={
                    <Lightbulb className="w-8 h-8 text-[var(--accent-blue)]" />
                  }
                  title="Dev Hackathon"
                  description="48-hour innovation sprint to build the next big idea."
                  delay={0.08}
                />
                <EventCard
                  year="Ongoing"
                  icon={
                    <Calendar className="w-8 h-8 text-[var(--accent-violet)]" />
                  }
                  title="Training Sessions"
                  description="Weekly workshops for students and club members."
                  delay={0.16}
                />
                <EventCard
                  year="Ongoing"
                  icon={<Clock className="w-8 h-8 text-[var(--accent-pink)]" />}
                  title="Collaborative Events"
                  description="Partnerships with clubs and sponsors like Golomt Bank."
                  delay={0.24}
                />
              </div>
            </div>
          </SectionFrame>
        </section>

        <FAQ />
        <Feedback />
        <Footer />
      </main>
    </>
  );
}
