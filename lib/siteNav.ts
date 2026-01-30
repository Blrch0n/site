export interface SiteNavItem {
  id: string;
  label: string;
  path: string;
  shortLabel: string;
  index?: string;
}

export const NAV_ITEMS: SiteNavItem[] = [
  {
    id: "home",
    label: "INTRO",
    path: "/",
    shortLabel: "INTRO",
  },
  {
    id: "about",
    label: "ABOUT",
    path: "/about",
    shortLabel: "ABOUT",
    index: "01",
  },
  {
    id: "core",
    label: "CORE",
    path: "/pillars",
    shortLabel: "CORE",
    index: "02",
  },
  {
    id: "training",
    label: "TRAINING",
    path: "/programs",
    shortLabel: "TRAINING",
    index: "03",
  },
  {
    id: "showcase",
    label: "SHOWCASE",
    path: "/projects",
    shortLabel: "SHOWCASE",
    index: "04",
  },
  {
    id: "events",
    label: "EVENTS",
    path: "/events",
    shortLabel: "EVENTS",
    index: "05",
  },
  {
    id: "faq",
    label: "FAQ",
    path: "/faq",
    shortLabel: "FAQ",
    index: "06",
  },
  {
    id: "contact",
    label: "CONTACT",
    path: "/contact",
    shortLabel: "CONTACT",
    index: "07",
  },
];

export interface ExternalLink {
  id: string;
  label: string;
  href: string;
  description: string;
}

export const EXTERNAL_LINKS: ExternalLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/syscotech",
    description: "Visit our page",
  },
  {
    id: "hackathon",
    label: "Hackathon Site",
    href: "https://devhackathon.mn",
    description: "Dev Hackathon",
  },
  {
    id: "location",
    label: "Google Maps",
    href: "https://maps.app.goo.gl/yourLocationLink",
    description: "Find us",
  },
];
