

export type Project = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "levein-group",
    title: "Levein Group",
    date: "2026",
    category: "Company Website (Ongoing)",
    summary: "As a developer at Levein, I worked on the corporate website for Levein Group, a Sri Lankan business conglomerate with diverse industry presence.",
    description:
      "A corporate website for a large Sri Lankan business group with a wide range of services, designed to present the company's various offerings clearly and professionally while strengthening their digital presence.",
    stack: ["Astro", "Tailwind CSS", "API Integration", "Frontend Development"],
    accent: "url('/projects/levein-1.jpg')",
  },
  {
    slug: "luminex-plc",
    title: "Luminex PLC",
    date: "2026",
    category: "Corporate Website",
    summary: "Custom corporate site with WordPress, jQuery, and tailored frontend development.",
    description:
      "A full company website revamp for a Sri Lankan engineering and infrastructure business, including custom sections, SEO page structure, content presentation, and frontend improvements beyond default WordPress behavior.",
    stack: ["WordPress", "jQuery", "JavaScript", "CSS", "Custom Development"],
    accent: "url('/projects/luminex-1.jpg')",
  },
  {
    slug: "hidden-sri-lanka",
    title: "Hidden Sri Lanka",
    date: "2026",
    category: "Travel Platform",
    summary: "Tour and experience inquiry platform built around curated Sri Lankan travel experiences.",
    description:
      "A tourism-focused website that blends storytelling, SEO content, curated travel packages, and inquiry-driven conversion flows to promote tours, experiences, transport, and accommodation across Sri Lanka.",
    stack: ["WordPress", "Elementor", "ACF", "SEO", "Custom UX"],
    accent: "url('/projects/hsl-sri-lanka-1.jpg')",
  },
  {
    slug: "nexuslabs",
    title: "NexusLabs",
    date: "2026",
    category: "Company Website",
    summary: "Clean business website built to strengthen digital presence and service presentation.",
    description:
      "A company website focused on modern presentation, brand clarity, and service communication, designed to give the business a sharper and more credible web presence.",
    stack: ["WordPress", "Frontend Development", "UI Design", "Responsive Design"],
    accent: "url('/projects/nexus.jpg')",
  },
  {
    slug: "bridal-arcade",
    title: "Bridal Arcade",
    date: "2025",
    category: "Marketplace Platform",
    summary: "Wedding wear marketplace concept focused on partner-led business operations.",
    description:
      "A business-focused platform concept designed to connect bridal wear demand with salon and dress partners, with emphasis on operational handover, inquiry handling, and scalable marketplace thinking.",
    stack: ["WordPress", "Business Strategy", "UI Planning"],
    accent: "url('/projects/bridal-1.jpg')",
  },
  {
    slug: "yta",
    title: "Your Team Asia",
    date: "2025",
    category: "Content Platform",
    summary: "As a developer at Levein, I worked on a modern Astro website powered by a headless CMS setup.",
    description:
      "A performance-focused content platform built with Astro and headless CMS principles, giving editors flexibility while keeping the frontend clean, fast, and maintainable.",
    stack: ["Astro", "Headless CMS", "JavaScript", "Frontend Development"],
    accent: "url('/projects/yta-1.jpg')",
  },
  {
    slug: "remote-jobs-in-asia",
    title: "Remote Jobs in Asia",
    date: "2025",
    category: "Job Platform",
    summary: "As a developer at Levein, I built a custom WordPress job platform for Levein Group Company.",
    description:
      "A specialized remote job board tailored for regional hiring needs, with custom platform behavior, structured listings, and a more focused experience than a standard blog-style WordPress setup.",
    stack: ["WordPress", "Custom Development", "Job Board Architecture", "PHP"],
    accent: "url('/projects/jobs-1.jpg')",
  },
  {
    slug: "unitoday",
    title: "Unitoday",
    date: "2025",
    category: "Campus Blog",
    summary: "WordPress-based campus content site designed for publishing and student-focused storytelling.",
    description:
      "A university-oriented blog platform built to share campus news, updates, and relevant content in a structured and readable format, with attention to branding and content clarity.",
    stack: ["WordPress", "Blog Architecture", "Content Management", "SEO"],
    accent: "url('/projects/unitoday-1.jpg')",
  },
  {
    slug: "payzo",
    title: "Payzo",
    date: "2025",
    category: "Fintech Platform",
    summary: "React and Supabase platform exploring trust-based order handling and payment workflows.",
    description:
      "A product concept focused on reducing fake cash-on-delivery orders through deposit validation, trust scoring, wallet logic, and modern app flows built with a scalable frontend and backend stack.",
    stack: ["React", "Supabase", "JavaScript", "Product Strategy", "SQL"],
    accent: "url('/projects/payzo-1.jpg')",
  },
  {
    slug: "unijobs",
    title: "Unijobs",
    date: "2025",
    category: "Job Platform",
    summary: "Astro-based job platform paired with a headless CMS approach.",
    description:
      "A lightweight and modern jobs platform designed for structured listings and content flexibility, combining Astro performance with a decoupled content workflow.",
    stack: ["Astro", "Headless CMS", "JavaScript", "Frontend Development"],
    accent: "url('/projects/unijobs-1.jpg')",
  },
  {
    slug: "i360-web",
    title: "i360 Web",
    date: "2025",
    category: "Healthcare Web Project",
    summary: "As a developer at Levein, I delivered a Webflow-based healthcare project for a USA-focused client.",
    description:
      "A healthcare-related web project delivered in Webflow, with emphasis on polished layout structure, content clarity, and client-facing presentation standards.",
    stack: ["Webflow", "CMS", "Responsive Design", "Healthcare UX"],
    accent: "url('/projects/i360-1.jpg')",
  },
  {
    slug: "calendar-bro",
    title: "Calendar Bro",
    date: "2025",
    category: "Web Application",
    summary: "As a developer at Levein, I built an Astro project centered on scheduling, time-focused UX, and clean frontend delivery.",
    description:
      "A lightweight web product built with Astro, focused on a simple, user-friendly experience around calendar-based interaction and structured information flow.",
    stack: ["Astro", "JavaScript", "Frontend Development", "UI Design"],
    accent: "url('/projects/calandar-bro-1.jpg')",
  },
  {
    slug: "peoples-leasing-and-finance",
    title: "People's Leasing & Finance PLC",
    date: "2024",
    category: "Corporate Website",
    summary: "As a developer at Efuture, I maintained the corporate website for a Sri Lankan financial bank, including implementing new features and enhancements",
    description:
      "A corporate website for a Sri Lankan financial bank, maintained and adding features over time, designed to present their services clearly while giving them a stronger digital presence, built with WordPress and custom frontend development.",
    stack: ["WordPress", "Custom Frontend Development", "UI Design", "Responsive Design"],
    accent: "url('/projects/plc-1.jpg')",
  },
  {
    slug: "fly-catcher-trails",
    title: "Fly Catcher Trails",
    date: "2024",
    category: "Tourism Website",
    summary: "Travel brand website designed to present curated tour packages and local experiences.",
    description:
      "A tourism website focused on showcasing destinations, travel packages, and inquiry-ready user journeys, with a clean content structure tailored for trust, discovery, and booking interest.",
    stack: ["WordPress", "Elementor", "ACF", "Content Strategy"],
    accent: "url('/projects/fly-1.jpg')",
  },
  {
    slug: "crystalstone-premium-quartz-surfaces",
    title: "Crystalstone",
    date: "2023",
    category: "Corporate Website",
    summary: "Corporate website for a Sri Lankan quartz surfaces company, built with WordPress and custom frontend work.",
    description:
      "A corporate website for a Sri Lankan quartz surfaces company, designed to present their products and services clearly while giving them a stronger digital presence, built with WordPress and custom frontend development.",
    stack: ["WordPress", "Custom Frontend Development", "UI Design", "Responsive Design"],
    accent: "url('/projects/crystalstone-1.jpg')",
  },
  {
    slug: "cooray-and-cooray-corporate-consultants",
    title: "Cooray & Cooray Corporate (PVT) LTD",
    date: "2023",
    category: "Corporate Website",
    summary: "Corporate website for a Sri Lankan corporate consulting firm, built with WordPress and custom frontend work.",
    description:
      "A corporate website for a Sri Lankan corporate consulting firm, designed to present their services clearly while giving them a stronger digital presence, built with WordPress and custom frontend development.",
    stack: ["WordPress", "Custom Frontend Development", "UI Design", "Responsive Design"],
    accent: "url('/projects/cccc-1.jpg')",
  },
  {
    slug: "centre-for-banking-studies",
    title: "Centre for Banking Studies",
    date: "2022",
    category: "Corporate Website",
    summary: "As a developer at Earrow, Corporate website for the training arm of the Central Bank of Sri Lanka, built with WordPress and custom frontend work.",
    description:
      "Centre for Banking Studies (CBS) is the training arm of the Central Bank of Sri Lanka that provides training and development programs for banking and finance professionals. The website was built with WordPress and custom frontend development to present their courses, events, and resources clearly while giving them a stronger digital presence.",
    stack: ["WordPress", "Custom Frontend Development", "UI Design", "Responsive Design"],
    accent: "url('/projects/cbsl-1.jpg')",
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}