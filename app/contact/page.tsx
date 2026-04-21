import type { Metadata } from "next";

const baseUrl = "https://mahima-induvara.vercel.app";

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
              Have a project in mind, or just want to say hi? Drop a message and I'll get back
              within 1 hour.
            </p>
            <div className="mt-8 space-y-3 text-sm flex flex-col gap-3">
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

          <form className="mx-auto flex w-full max-w-xl flex-col gap-5">
            <input
              placeholder="Your name"
              className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
            />
            <input
              placeholder="Subject"
              className="border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="resize-none border-0 border-b border-ink/40 bg-transparent py-3 text-sm text-ink placeholder:text-ink-mute focus:border-ink focus:outline-none"
            />
            <button
              type="button"
              className="mt-2 self-start rounded-sm bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
  );
}