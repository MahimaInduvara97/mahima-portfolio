import Image from "next/image";
import Link from "next/link";
import portrait from "./assets/hero-portrait.png";

const highlights = [
  { label: "Location", value: "Sri Lanka" },
  { label: "Focus", value: "Frontend & design" },
  { label: "Availability", value: "Select projects" },
] as const;

export default function HomePage() {
  return (
    <section className="relative mx-auto -mb-16 grid min-h-[calc(100dvh-9rem)] w-full max-w-[1400px] grid-cols-1 items-center gap-6 md:-mb-28 md:min-h-[calc(100dvh-7rem)] md:grid-cols-2 md:items-end md:gap-8">
      {/* <span
        aria-hidden="true"
        className="font-display pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none whitespace-nowrap text-[18vw] opacity-35 text-outline"
      >
        Developer
      </span> */}
      <span
          aria-hidden
          className="font-display text-glow pointer-events-none absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-normal text-center text-[15vw] opacity-50 sm:whitespace-nowrap"
        >
          Hello World!
        </span>

        <div className="relative z-10 flex flex-col gap-6 md:self-center">
          <div className="flex items-center gap-3">
            <span className="block h-px w-10 bg-ink" />
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-ink-soft">
              Hey,
            </span>
          </div>

          <h1 className="font-display text-5xl text-ink md:text-7xl lg:text-8xl">
            I'm <span className="text-outline">Mahima</span>
            <br />
            <span className="text-outline">Induvara.</span>
          </h1>

          <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
            <span className="text-ink">I’m a Senior Frontend Developer</span> who cares about how things feel, not just how they look.
            I create clean, responsive, and user-focused web apps using modern tools,  with performance and usability in mind.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-6 sm:gap-12">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-sm bg-ink px-7 py-3.5 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Portfolio
            </a>
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft hover:text-ink"
            >
              Let's Work Together →
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex self-end items-end justify-center md:h-full md:justify-end">
          <Image
            src={portrait}
            alt="Mahima Induvara"
            width={1024}
            height={1024}
            className="self-end max-h-[calc(100dvh-9rem)] w-auto object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)] md:max-h-[calc(100dvh-7rem)]"
            priority
          />
        </div>
      </section>
  );
}