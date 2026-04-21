import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

const baseUrl = "https://mahima-induvara.vercel.app";

export const metadata: Metadata = {
  title: "Portfolio - Web Projects & Case Studies",
  description:
    "View Mahima Induvara's portfolio of 30+ web development projects. Corporate websites, e-commerce platforms, SaaS applications, and design systems built with React, Next.js, and WordPress.",
  keywords: [
    "portfolio",
    "web projects",
    "case studies",
    "frontend projects",
    "responsive websites",
    "web design",
    "development work",
    "client projects",
  ],
  openGraph: {
    type: "website",
    url: `${baseUrl}/portfolio`,
    title: "Portfolio - Mahima Induvara",
    description: "30+ web development projects showcasing modern design and clean code",
    siteName: "Mahima Induvara",
  },
  twitter: {
    card: "summary",
    title: "Portfolio",
    description: "30+ web development projects and case studies",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}