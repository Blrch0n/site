import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import RightRail from "@/components/RightRail";
import TopProgress from "@/components/TopProgress";
import Navigation from "@/components/Navigation";
import { JoinModalProvider } from "@/components/JoinModalProvider";
import JoinModalWrapper from "@/components/JoinModalWrapper";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const SITE_NAME = "Sys&CoTech";
const SITE_DESCRIPTION =
  "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.";
const SITE_URL = "https://syscotech.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Where Innovation Meets Community`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "technology",
    "student club",
    "programming",
    "innovation",
    "Mongolia",
    "tech community",
    "coding",
    "web development",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Where Innovation Meets Community`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Where Innovation Meets Community`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@syscotech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <JoinModalProvider>
              <WebVitalsReporter />
              <TopProgress />
              <BackgroundGrid />
              <RightRail />
              <JoinModalWrapper />
              <Navigation />

              <div className="relative z-10">{children}</div>
            </JoinModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
