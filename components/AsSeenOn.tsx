"use client";

import { Twitter, MessageCircle, Linkedin, Instagram } from "lucide-react";

interface SocialCard {
  source: string;
  handle: string;
  text: string;
  icon: React.ReactNode;
}

interface Logo {
  name: string;
  width: string;
}

const socialCards: SocialCard[] = [
  {
    source: "Twitter",
    handle: "@sysandcotech",
    text: "Built my first full-stack app during the fall project sprint. Got help debugging from senior members.",
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    source: "LinkedIn",
    handle: "2nd-year CS student",
    text: "The weekly workshops helped me understand React hooks better than my coursework.",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    source: "Discord",
    handle: "Member #2047",
    text: "Mentorship program paired me with someone who reviews my code and explains best practices.",
    icon: <MessageCircle className="w-4 h-4" />,
  },
  {
    source: "Instagram",
    handle: "@techstudent",
    text: "Participated in two hackathons this semester. Good way to meet people and practice under time pressure.",
    icon: <Instagram className="w-4 h-4" />,
  },
  {
    source: "Twitter",
    handle: "@mongoliaTech",
    text: "Working on an open-source project with other members. Learning Git workflow and code review.",
    icon: <Twitter className="w-4 h-4" />,
  },
  {
    source: "LinkedIn",
    handle: "Alumni (2023)",
    text: "The projects I worked on here gave me something to talk about in interviews.",
    icon: <Linkedin className="w-4 h-4" />,
  },
];

const logos: Logo[] = [
  { name: "MongoDB", width: "w-28" },
  { name: "React", width: "w-20" },
  { name: "Next.js", width: "w-24" },
  { name: "TypeScript", width: "w-32" },
  { name: "Vercel", width: "w-24" },
  { name: "GitHub", width: "w-24" },
  { name: "AWS", width: "w-20" },
  { name: "Docker", width: "w-24" },
  { name: "Figma", width: "w-20" },
  { name: "Tailwind", width: "w-28" },
];

export default function AsSeenOn() {
  const duplicatedCards = [...socialCards, ...socialCards];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-(--accent-blue) opacity-3 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-6 w-12 h-12 pointer-events-none">
          <div className="absolute top-0 left-0 w-12 h-px bg-linear-to-r from-[#5B5FFF]/40 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-12 bg-linear-to-b from-[#5B5FFF]/40 to-transparent" />
        </div>
        <div className="absolute top-0 right-6 w-12 h-12 pointer-events-none">
          <div className="absolute top-0 right-0 w-12 h-px bg-linear-to-l from-[#5B5FFF]/40 to-transparent" />
          <div className="absolute top-0 right-0 w-px h-12 bg-linear-to-b from-[#5B5FFF]/40 to-transparent" />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="spectral-text">AS SEEN ON :</span>
          </h2>
          <div className="hud-label">COMMUNITY VOICES</div>
        </div>

        <div className="relative mb-12">
          <div className="mask-edges">
            <div className="marquee">
              <div className="marquee__track">
                {duplicatedCards.map((card, index) => (
                  <div key={index} className="inline-block mx-3 w-95 shrink-0">
                    <div className="glass-panel rounded-xl p-6 h-full hover:border-(--border-line-hover) transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-(--bg-surface) text-(--accent-blue)">
                          {card.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-(--text-primary)">
                            {card.source}
                          </div>
                          <div className="text-xs text-(--text-muted)">
                            {card.handle}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-(--text-secondary) leading-relaxed">
                        {card.text}
                      </p>

                      <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-[#5B5FFF]/30" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="mask-edges">
            <div className="marquee marquee--reverse">
              <div className="marquee__track">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center mx-8 shrink-0"
                  >
                    <div
                      className={`${logo.width} h-12 flex items-center justify-center rounded-lg bg-(--bg-surface) border border-(--border-line) hover:border-(--border-line-hover) hover:bg-(--bg-surface-hover) transition-colors px-4`}
                    >
                      <div className="text-xs font-medium text-(--text-secondary) uppercase tracking-wider">
                        {logo.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-6 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-12 h-px bg-linear-to-r from-[#5B5FFF]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-px h-12 bg-linear-to-t from-[#5B5FFF]/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-6 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-12 h-px bg-linear-to-l from-[#5B5FFF]/40 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-12 bg-linear-to-t from-[#5B5FFF]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
