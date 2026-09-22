export type ExperienceYear = {
  year: number;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  note: string;
  mark: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  current?: boolean;
};

export const experienceYears: ExperienceYear[] = [
  {
    year: 2021,
    eyebrow: "first real chapter",
    title: "Software engineering begins",
    description:
      "Started working professionally on business software and client-facing systems, learning how production work differs from classroom projects.",
    bullets: ["PHP", "My SQL", "Web development", "CMS systems"],
    note: "from projects to production",
    mark: "{ }",
  },
  {
    year: 2022,
    eyebrow: "the beginning",
    title: "Graduation milestone",
    description:
      "Completed my undergraduate journey in Information Technology and began turning academic knowledge into practical software work.",
    bullets: ["Software development", "Web technologies", "Databases", "Problem solving"],
    note: "where the next chapter started",
    mark: "⌁",
    image: "/graduate.png",
    imageAlt: "Mahima at graduation",
    imageCaption: "graduation day",
  },
  {
    year: 2023,
    eyebrow: "building confidence",
    title: "Growing into larger engineering work",
    description:
      "Continued developing and maintaining business applications while taking on deeper integration, database, and production responsibilities.",
    bullets: ["Maintainable application logic", "Production issue solving", "Enterprise workflows", "Clear technical communication"],
    note: "stronger with every release",
    mark: "⚙",
  },
  {
    year: 2024,
    eyebrow: "stronger foundations",
    title: "More responsibility, more complex systems",
    description:
      "Worked across integration-heavy software, production maintenance, and customer-focused improvements where reliability mattered as much as delivery.",
    bullets: ["Application integrations", "APIs and databases", "Debugging and deployment", "Client-focused improvements"],
    note: "thinking beyond the code",
    mark: "▦",
  },
  {
    year: 2025,
    eyebrow: "exploring intelligence",
    title: "Artificial Intelligence Self-Study",
    description:
      "Explored machine learning and natural-language processing through research, experimentation, and practical chatbot development.",
    bullets: ["Automation", "n8n workflows", "Vibe Coding", "Code Optimization"],
    note: "software meets research",
    mark: "✦",
  },
  {
    year: 2026,
    eyebrow: "building my own things",
    title: "Products with more personality",
    description:
      "My current focus combines software engineering, product thinking, and creative interface design to make useful software memorable to use.",
    bullets: ["Interactive web experiences", "Marketplaces and portals", "React and Astro applications", "AI-assisted product workflows"],
    note: "still building...",
    mark: "↗",
    current: true,
  },
];
