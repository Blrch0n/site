"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Type definition for past event data
type PastEvent = {
  id: string;
  title: string;
  date: string;
  location?: string;
  tags?: string[];
  imageSrc: string;
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function PastEventsPage() {
  const { t } = useLanguage();

  const pastEventsData: PastEvent[] = [
    {
      id: "1",
      title: "Haruul Zangi CTF 2024",
      date: "December 2024",
      location: "NUM Campus",
      tags: ["CTF", "Onsite"],
      imageSrc: "/group-image1.png",
    },
    {
      id: "2",
      title: "Dev Hackathon 2024",
      date: "October 2024",
      location: "MUST",
      tags: ["Hackathon", "Onsite"],
      imageSrc: "/group-image2.jpg",
    },
    {
      id: "3",
      title: "CTF Competition Fall 2024",
      date: "September 2024",
      location: "Online",
      tags: ["CTF", "Online"],
      imageSrc: "/group-image3.jpg",
    },
    {
      id: "4",
      title: "Summer CTF Challenge 2024",
      date: "July 2024",
      location: "Online",
      tags: ["CTF", "Online"],
      imageSrc: "/group-image4.png",
    },
    {
      id: "5",
      title: "Spring Hackathon 2024",
      date: "April 2024",
      location: "NUM Campus",
      tags: ["Hackathon", "Onsite"],
      imageSrc: "/group-image5.jpg",
    },
    {
      id: "6",
      title: "Haruul Zangi CTF 2023",
      date: "December 2023",
      location: "NUM Campus",
      tags: ["CTF", "Onsite"],
      imageSrc: "/group-image1.png",
    },
    {
      id: "7",
      title: "Fall CTF Championship 2023",
      date: "October 2023",
      location: "Online",
      tags: ["CTF", "Online"],
      imageSrc: "/group-image2.jpg",
    },
    {
      id: "8",
      title: "Dev Hackathon 2023",
      date: "September 2023",
      location: "MUST",
      tags: ["Hackathon", "Onsite"],
      imageSrc: "/group-image3.jpg",
    },
    {
      id: "9",
      title: "Summer Tech Workshop 2023",
      date: "June 2023",
      location: "NUM Campus",
      tags: ["Workshop", "Onsite"],
      imageSrc: "/group-image4.png",
    },
  ];

  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        {/* Background blurred elements - page-local only */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--accent-blue)/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--accent-cyan)/5 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-8 rounded-lg border border-(--border-line) bg-(--bg-surface) text-[11px] font-mono uppercase tracking-wider text-(--text-muted) backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--accent-cyan) animate-pulse shadow-[0_0_8px_var(--accent-cyan)]" />
                  <span>{t("pastEvents.eventArchive")}</span>
                </div>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-(--text-primary) mb-6 tracking-tight"
              >
                {t("pastEvents.pageTitle")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-(--text-muted) max-w-2xl mx-auto leading-relaxed"
              >
                {t("pastEvents.pageSubtitle")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {pastEventsData.map((event, index) => (
                <motion.div
                  key={event.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariant}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-(--accent-blue)/20 transition-shadow duration-300 cursor-pointer border border-(--border-line) hover:border-(--accent-blue)/40"
                >
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <Image
                      src={event.imageSrc}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    {event.tags && event.tags[0] && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 bg-(--accent-blue)/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        {event.tags[0]}
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                      <span>{event.date}</span>
                      {event.location && (
                        <>
                          <span>•</span>
                          <span>{event.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-24" />
      </main>
      <Footer />
    </>
  );
}
