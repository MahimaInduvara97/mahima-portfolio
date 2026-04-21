import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { WheelRouteNavigator } from "@/app/components/WheelRouteNavigator";
import { PageTransition } from "@/app/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mahima Induvara",
    template: "%s — Mahima Induvara",
  },
  description:
    "Portfolio of Mahima Induvara, a frontend developer crafting bold, minimal web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col overflow-x-hidden bg-hero-gradient text-foreground">
        <WheelRouteNavigator />
        <SiteHeader />
        <main className="relative z-10 flex-1 px-6 pb-16 pt-20 md:px-12 md:pb-28 md:pt-28">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
