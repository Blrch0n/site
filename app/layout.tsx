import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BackgroundGrid from "@/components/BackgroundGrid";
import RightRail from "@/components/RightRail";
import TopProgress from "@/components/TopProgress";
import Navigation from "@/components/Navigation";
import { CommandPaletteProvider } from "@/components/CommandPalette/CommandPaletteProvider";
import CommandPalette from "@/components/CommandPalette/CommandPalette";
import { JoinModalProvider } from "@/components/JoinModalProvider";
import JoinModalWrapper from "@/components/JoinModalWrapper";
import BootLoader from "@/components/BootLoader";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Sys&CoTech | Where Innovation Meets Community",
  description:
    "Join Mongolia's premier technology student club. Learn, build, and lead the next generation of digital innovation since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistSans.className} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <CommandPaletteProvider>
              <JoinModalProvider>
                <WebVitalsReporter />
                <BootLoader />
                <TopProgress />
                <BackgroundGrid />
                <RightRail />
                <CommandPalette />
                <JoinModalWrapper />
                <Navigation />

                <div className="relative z-10">{children}</div>
              </JoinModalProvider>
            </CommandPaletteProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
