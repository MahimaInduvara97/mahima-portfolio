import type { Metadata } from "next";

const baseUrl = "https://mahima-induvara.vercel.app";

export const metadata: Metadata = {
  title: "Tech Stack & Skills",
  description:
    "Mahima Induvara's technical skills and tools. Expert in React, Next.js, TypeScript, Tailwind CSS, Astro, WordPress, Supabase, and Figma. Full stack development capabilities.",
  keywords: [
    "frontend skills",
    "React skills",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "web development tools",
    "tech stack",
    "web technologies",
    "JavaScript frameworks",
  ],
  openGraph: {
    type: "website",
    url: `${baseUrl}/skills`,
    title: "Tech Stack & Skills - Mahima Induvara",
    description: "Expert in React, Next.js, TypeScript, and modern web technologies",
    siteName: "Mahima Induvara",
  },
  twitter: {
    card: "summary",
    title: "Tech Stack & Skills",
    description: "Expert frontend developer with modern tech stack",
  },
};

const skills = [
  {
    name: "React",
    desc: "Component-driven UIs",
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    desc: "Full-stack React",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  },
  {
    name: "Astro",
    desc: "Content-first sites",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 4 20l8-3 8 3-8-18zm0 6 3.5 8L12 15l-3.5 1L12 8z" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    desc: "CMS & themes",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M4 12c0 3.3 1.8 6.2 4.4 7.8l-3-8.5c-.3-.8-.4-1.6-.4-2.3 0 0 0 0 0 0m14 0c0 .8-.1 1.6-.4 2.3l-3 8.5c2.6-1.6 4.4-4.5 4.4-7.8" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    desc: "Backend & auth",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2 3 14h8v8l10-12h-8V2z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    desc: "Design & prototype",
    glyph: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 3c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3H6zm12 0c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3h-6z" />
        <path d="M6 12c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3H6z" />
      </svg>
    ),
  },
] as const;

export default function SkillsPage() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-350 items-center justify-center">
      <div className="w-full">
      <div className="mb-4 flex items-center justify-start gap-3">
        <span className="block h-px w-10 bg-ink" />
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-soft">
          What I use
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 text-left md:grid-cols-[1fr_2fr] md:items-center">
        <div className="flex flex-col items-start">
          <h1 className="font-display text-6xl text-ink md:text-8xl">
            Tech <span className="text-outline">Stack.</span>
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            Tools I actually use to build fast, clean, and scalable web experiences, no fluff, just what works.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className="glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              style={{ animation: `fade-in 0.5s ease-out ${index * 70}ms both` }}
            >
              <div className="absolute inset-0 -z-10 bg-linear-to-br from-transparent via-transparent to-ink/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-primary-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <div className="h-5 w-5">{skill.glyph}</div>
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{skill.name}</h3>
              <p className="mt-1 text-xs text-ink-mute">{skill.desc}</p>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}