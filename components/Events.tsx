"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { EventCard } from "@/components/Cards";
import { Trophy, Lightbulb, Calendar, Clock } from "lucide-react";

export default function Events() {
  return (
    <section id="events" className="relative overflow-hidden">
      <SectionFrame index="05" className="py-24 md:py-32" showTopDivider>
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
              icon={<Trophy className="w-8 h-8 text-[var(--accent-cyan)]" />}
              title="Competitive Programming Contest"
              description="Annual algorithm competition testing problem-solving skills."
              delay={0}
            />
            <EventCard
              year="10 Years"
              icon={<Lightbulb className="w-8 h-8 text-[var(--accent-blue)]" />}
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
  );
}
