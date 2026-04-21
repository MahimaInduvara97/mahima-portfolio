import type { Metadata } from "next";
import ContactForm from "./ContactForm";

const baseUrl = "https://mahima.work";

export const metadata: Metadata = {
  title: "Contact - Get in Touch",
  description:
    "Contact Mahima Induvara for frontend development, web design, or project inquiries. Based in Sri Lanka. Available for freelance and full-time opportunities.",
  keywords: [
    "contact",
    "hire developer",
    "web development services",
    "frontend development",
    "project inquiry",
    "freelance developer",
    "consultation",
  ],
  openGraph: {
    type: "website",
    url: `${baseUrl}/contact`,
    title: "Contact - Mahima Induvara",
    description: "Get in touch with Mahima Induvara for web development projects",
    siteName: "Mahima Induvara",
  },
  twitter: {
    card: "summary",
    title: "Contact",
    description: "Contact Mahima Induvara for web development inquiries",
  },
};

export default function ContactPage() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-350 items-center justify-start">
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 flex items-center justify-start gap-3">
            <span className="block h-px w-10 bg-ink" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-soft">
              Say Hello
            </span>
          </div>
          <h1 className="font-display text-6xl text-ink md:text-8xl">
            Let's <span className="text-outline">talk.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
            Have a project in mind, or just want to say hi? Drop a message and I&apos;ll get back
            soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 space-y-3 text-sm">
            <a href="mailto:induvara.amarasekara@gmail.com" className="text-ink-mute">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Email
              </span>
              induvara.amarasekara@gmail.com
            </a>
            <a href="tel:+94756204045" className="text-ink-mute">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Phone
              </span>
              075 620 4045
            </a>
            <div className="text-ink-mute">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Location
              </span>
              Colombo, Sri Lanka
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
