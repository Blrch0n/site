"use client";

import { SectionHeader } from "@/components/FAQ";
import { ProjectCard } from "@/components/Cards";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: t("projects.website.title"),
      description: t("projects.website.description"),
      tags: ["Next.js", "React", "Three.js"],
      links: [
        { label: t("projects.link.viewsite"), href: "#hero" },
        {
          label: t("projects.link.github"),
          href: "https://github.com/syscotech",
        },
      ],
    },
    {
      title: t("projects.hackathon.title"),
      description: t("projects.hackathon.description"),
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      links: [
        { label: t("projects.link.visit"), href: "https://devhackathon.mn" },
        {
          label: t("projects.link.github"),
          href: "https://github.com/syscotech/hackathon",
        },
      ],
    },
    {
      title: t("projects.lms.title"),
      description: t("projects.lms.description"),
      tags: ["React", "Express", "MongoDB"],
      links: [
        { label: t("projects.link.demo"), href: "#programs" },
        { label: t("projects.link.learnmore"), href: "#contact" },
      ],
    },
    {
      title: t("projects.contest.title"),
      description: t("projects.contest.description"),
      tags: ["Python", "Django", "Redis"],
      links: [
        { label: t("projects.link.tryit"), href: "#programs" },
        {
          label: t("projects.link.github"),
          href: "https://github.com/syscotech/contest-prep",
        },
      ],
    },
    {
      title: t("projects.portal.title"),
      description: t("projects.portal.description"),
      tags: ["Vue.js", "Firebase", "Tailwind"],
      links: [
        { label: t("projects.link.demo"), href: "#about" },
        { label: t("projects.link.learnmore"), href: "#faq" },
      ],
    },
    {
      title: t("projects.designsystem.title"),
      description: t("projects.designsystem.description"),
      tags: ["Figma", "React", "Markdown"],
      links: [
        { label: t("projects.link.demo"), href: "#pillars" },
        { label: t("projects.link.learnmore"), href: "#contact" },
      ],
    },
  ];

  return (
    <div className="relative">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.description")}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            links={project.links}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  );
}
