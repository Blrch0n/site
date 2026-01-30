"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { EventCard } from "@/components/Cards";
import { Trophy, Lightbulb, Calendar, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Events() {
  const { t } = useLanguage();
  return (
    <section id="events" className="relative overflow-hidden">
      <SectionFrame index="05" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-150 h-150 bg-(--accent-violet) opacity-2 blur-[180px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("events.eyebrow")}
            title={t("events.title")}
            subtitle={t("events.subtitle")}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <EventCard
              year={t("events.competitive.year")}
              icon={<Trophy className="w-8 h-8 text-(--accent-cyan)" />}
              title={t("events.competitive.title")}
              description={t("events.competitive.description")}
              delay={0}
            />
            <EventCard
              year={t("events.hackathon.year")}
              icon={<Lightbulb className="w-8 h-8 text-(--accent-blue)" />}
              title={t("events.hackathon.title")}
              description={t("events.hackathon.description")}
              delay={0.08}
            />
            <EventCard
              year={t("events.training.year")}
              icon={<Calendar className="w-8 h-8 text-(--accent-violet)" />}
              title={t("events.training.title")}
              description={t("events.training.description")}
              delay={0.16}
            />
            <EventCard
              year={t("events.collaborative.year")}
              icon={<Clock className="w-8 h-8 text-(--accent-pink)" />}
              title={t("events.collaborative.title")}
              description={t("events.collaborative.description")}
              delay={0.24}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
