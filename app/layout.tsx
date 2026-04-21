import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/components/SiteHeader";
import { SiteFooter } from "@/app/components/SiteFooter";
import { WheelRouteNavigator } from "@/app/components/WheelRouteNavigator";
import { PageTransition } from "@/app/components/PageTransition";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://mahima.work";

export const metadata: Metadata = {
  title: {
    default: "Mahima Induvara - Senior Frontend Developer",
    template: "%s | Mahima Induvara",
  },
  description:
    "Senior Frontend Developer crafting bold, minimal web experiences. Specializing in React, Next.js, and modern web technologies. Portfolio includes 30+ projects with focus on clean UI and responsive design.",
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "web development",
    "UI design",
    "responsive design",
    "full-stack developer",
    "portfolio",
    "Sri Lanka",
    "freelance",
  ],
  authors: [{ name: "Mahima Induvara" }],
  creator: "Mahima Induvara",
  publisher: "Mahima Induvara",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Mahima Induvara",
    title: "Mahima Induvara - Senior Frontend Developer",
    description:
      "Senior Frontend Developer crafting bold, minimal web experiences. Portfolio with 30+ shipped projects.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mahima Induvara Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mahima-induvara",
    title: "Mahima Induvara - Senior Frontend Developer",
    description:
      "Senior Frontend Developer crafting bold, minimal web experiences. 5+ years of industry experience.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#f5f1f0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="relative flex min-h-dvh flex-col overflow-x-hidden bg-hero-gradient text-foreground">
        <WheelRouteNavigator />
        <SiteHeader />
        <main className="relative z-10 flex-1 px-6 pb-16 pt-20 md:px-12 md:pb-28 md:pt-28">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
