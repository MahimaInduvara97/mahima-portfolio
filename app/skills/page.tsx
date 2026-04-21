import type { Metadata } from "next";

const baseUrl = "https://mahima.work";

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
      <svg viewBox="0 0 24 24" fill="undefined" stroke="currentColor" strokeWidth="1.2">
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="undefined" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="undefined" fontWeight="undefined" fontSize="undefined" textAnchor={undefined}><g transform="scale(5.33333,5.33333)"><path d="M18.974,31.5c0,0.828 -0.671,1.5 -1.5,1.5c-0.829,0 -1.5,-0.672 -1.5,-1.5v-14c0,-0.653 0.423,-1.231 1.045,-1.43c0.625,-0.198 1.302,0.03 1.679,0.563l16.777,23.704c5.142,-3.628 8.525,-9.602 8.525,-16.337c0,-11 -9,-20 -20,-20c-11,0 -20,9 -20,20c0,11 9,20 20,20c3.192,0 6.206,-0.777 8.89,-2.122l-13.916,-19.662zM28.974,16.5c0,-0.828 0.671,-1.5 1.5,-1.5c0.829,0 1.5,0.672 1.5,1.5v13.84l-3,-4.227z"/></g></g></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="undefined" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="undefined" fontWeight="undefined" fontSize="undefined" textAnchor={undefined}><g transform="scale(5.12,5.12)"><path d="M25,2c-12.683,0 -23,10.318 -23,23c0,12.682 10.317,23 23,23c12.683,0 23,-10.318 23,-23c0,-12.682 -10.317,-23 -23,-23zM25,7c4.26,0 8.166,1.485 11.247,3.955c-0.956,0.636 -1.547,1.74 -1.547,2.945c0,1.6 0.9,3 1.9,4.6c0.8,1.3 1.6,3 1.6,5.4c0,1.7 -0.5,3.8 -1.5,6.4l-2,6.6l-7.1,-21.2c1.2,-0.1 2.3,-0.2 2.3,-0.2c1,-0.1 0.9,-1.6 -0.1,-1.6c0,0 0,0 -0.1,0c0,0 -3.2,0.3 -5.3,0.3c-1.9,0 -5.2,-0.3 -5.2,-0.3c0,0 0,0 -0.1,0c-1,0 -1.1,1.6 -0.1,1.6c0,0 1,0.1 2.1,0.2l3.1,8.4l-4.3,12.9l-7.2,-21.4c1.2,-0.1 2.3,-0.2 2.3,-0.2c1,-0.1 0.9,-1.6 -0.1,-1.6c0,0 0,0 -0.1,0c0,0 -2.152,0.202 -4.085,0.274c3.288,-4.294 8.453,-7.074 14.285,-7.074zM7,25c0,-1.8 0.271,-3.535 0.762,-5.174l7.424,20.256c-4.925,-3.211 -8.186,-8.759 -8.186,-15.082zM19.678,42.2l5.322,-15.6l5.685,15.471c-1.788,0.594 -3.696,0.929 -5.685,0.929c-1.853,0 -3.64,-0.281 -5.322,-0.8zM35.304,39.75v0l5.296,-15.35c0.786,-2 1.21,-3.742 1.39,-5.304c0.643,1.851 1.01,3.832 1.01,5.904c0,6.111 -3.046,11.497 -7.696,14.75z"/></g></g></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px" fillRule="nonzero"><g fill="#ffffff" fillRule="nonzero" stroke="undefined" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="undefined" fontWeight="undefined" fontSize="undefined" textAnchor={undefined}><g transform="scale(5.12,5.12)"><path d="M25,2v14h-7c-3.855,0 -7,-3.145 -7,-7c0,-3.855 3.145,-7 7,-7zM25,18v14h-7c-3.855,0 -7,-3.145 -7,-7c0,-3.855 3.145,-7 7,-7zM25,34v7c0,3.855 -3.145,7 -7,7c-3.855,0 -7,-3.145 -7,-7c0,-3.855 3.145,-7 7,-7zM41,9c0,3.855 -3.145,7 -7,7h-7v-14h7c3.855,0 7,3.145 7,7zM34,18c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7z"/></g></g></svg>
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