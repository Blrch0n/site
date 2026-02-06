export interface SiteNavItem {
  id: string;
  label: string;
  path: string;
  shortLabel: string;
  index?: string;
  showInDesktop?: boolean;
}

export const NAV_ITEMS: SiteNavItem[] = [
  {
    id: "home",
    label: "HOME",
    path: "/",
    shortLabel: "HOME",
    index: "01",
    showInDesktop: true,
  },
  {
    id: "community",
    label: "COMMUNITY",
    path: "/community",
    shortLabel: "COMMUNITY",
    index: "02",
    showInDesktop: true,
  },
  {
    id: "pastevents",
    label: "PAST EVENTS",
    path: "/past-events",
    shortLabel: "PAST EVENTS",
    index: "03",
    showInDesktop: true,
  },
  {
    id: "contact",
    label: "CONTACT US",
    path: "/contact",
    shortLabel: "CONTACT US",
    index: "04",
    showInDesktop: true,
  },
  {
    id: "join",
    label: "JOIN US",
    path: "/join",
    shortLabel: "JOIN US",
    index: "05",
    showInDesktop: false,
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
