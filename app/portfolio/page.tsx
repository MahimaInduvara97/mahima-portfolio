import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected frontend and design projects by Mahima Induvara.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}