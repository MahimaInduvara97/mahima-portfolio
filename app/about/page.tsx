import type { Metadata } from "next";
import { Briefcase, FolderCheck, GraduationCap, School } from "lucide-react";

const baseUrl = "https://mahima.work";

export const metadata: Metadata = {
  title: "About Mahima Induvara",
  description:
    "Learn about Mahima Induvara's journey as a Senior Frontend Developer. 5+ years of industry experience, 30+ projects shipped. Education from SLIIT. Specialized in React, Next.js, and clean UI design.",
  keywords: [
    "about mahima induvara",
    "frontend developer experience",
    "web developer portfolio",
    "design and development",
    "clean code",
    "responsive design expertise",
  ],
  openGraph: {
    type: "profile",
    url: `${baseUrl}/about`,
    title: "About Mahima Induvara - Senior Frontend Developer",
    description: "5+ years of industry experience in frontend development. 30+ projects shipped.",
    siteName: "Mahima Induvara",
  },
  twitter: {
    card: "summary",
    title: "About Mahima Induvara",
    description: "Senior Frontend Developer with 5+ years experience",
  },
};

const stats = [
  { icon: School, label: "School", value: "Isipathana College" },
  { icon: GraduationCap, label: "University", value: "SLIIT - BSc (Hons) IT" },
  { icon: Briefcase, label: "Experience", value: "5+ Years Industry Experience" },
  { icon: FolderCheck, label: "Projects", value: "30+ Projects Shipped" },
] as const;

export default function AboutPage() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-350 items-center justify-center">
      <div className="w-full text-center">
      <div className="mb-4 flex items-center justify-center gap-3">
        <p className="text-xs font-medium text-ink md:text-sm">
          Oh! Checking out my about page… <span className="font-semibold">alright, alright, </span> carry on 😄
        </p>
      </div>

      <h1 className="font-display text-center text-6xl leading-[0.85] text-ink md:text-[8vw] mb-2">
        Design. <span className="block md:inline mt-2 md:mt-0">Develop.</span>
      </h1>
      <h2 className="font-display text-outline text-center text-6xl leading-[0.85] md:text-[8vw]">
        Deliver.
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="glass-card rounded-2xl p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            CRAFT & DETAIL
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            I focus on <span className="text-ink">clean UI, solid layout systems, and interfaces</span> that feel intentional from the very first interaction.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
           <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            HOW I WORK
          </p>
        <p className="rounded-2xl p-5 text-sm leading-relaxed text-ink-soft">
          My approach is simple: understand the problem, build the solution, then refine until it feels right.
        </p>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
            CURRENT FOCUS
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Currently focused on frontend, design systems, and subtle motion that supports the experience,  not distracts from it.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className="glass-card-2 rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1"
            style={{ animation: `fade-in 0.5s ease-out ${index * 80}ms both` }}
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-primary-foreground">
              <stat.icon className="h-5 w-5" />
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-mute">
              {stat.label}
            </p>
            <p className="mt-2 font-display text-lg text-ink">{stat.value}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}