export type RoomProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  note: string;
  image: string;
  liveUrl?: string;
  tone: "sage" | "blue" | "peach" | "yellow";
};

export const roomProjects: RoomProject[] = [
  {
    id: "hidden-sri-lanka",
    title: "Hidden Sri Lanka",
    subtitle: "Travel discovery platform",
    description:
      "A tourism-focused website that combines destination storytelling, curated experiences, and inquiry-led journeys for exploring Sri Lanka.",
    role: "Design implementation, WordPress development, content structure, and responsive UX",
    stack: ["WordPress", "Elementor", "ACF"],
    note: "booking + discovery",
    image: "/projects/hsl-sri-lanka-1.jpg",
    liveUrl: "https://hiddensrilanka.com/",
    tone: "sage",
  },
  {
    id: "bridal-arcade",
    title: "Bridal Arcade",
    subtitle: "Bridal listing marketplace",
    description:
      "A wedding-wear marketplace concept connecting bridal demand with salon and dress partners through a clear, scalable discovery experience.",
    role: "Product planning, marketplace UX, WordPress implementation, and business workflow design",
    stack: ["WordPress", "React", "UI Planning"],
    note: "marketplace",
    image: "/projects/bridal-1.jpg",
    liveUrl: "https://bridalarcade.lk/",
    tone: "peach",
  },
  {
    id: "unitoday",
    title: "UniToday",
    subtitle: "Campus publishing portal",
    description:
      "A university-oriented publishing platform created for campus news, student stories, and structured editorial content.",
    role: "Frontend development, WordPress architecture, content management, and SEO structure",
    stack: ["WordPress", "CMS", "SEO"],
    note: "publishing platform",
    image: "/projects/unitoday-1.jpg",
    liveUrl: "https://unitoday.lk/",
    tone: "blue",
  },
  {
    id: "levein-group",
    title: "Levein Group",
    subtitle: "Corporate web platform",
    description:
      "A modern corporate platform presenting the group’s companies, services, and opportunities through a fast, maintainable frontend.",
    role: "Frontend development, component architecture, API integration, and responsive delivery",
    stack: ["Astro", "Tailwind", "APIs"],
    note: "web + job portal",
    image: "/projects/levein-1.jpg",
    liveUrl: "https://leveingroup.com/",
    tone: "yellow",
  },
];
