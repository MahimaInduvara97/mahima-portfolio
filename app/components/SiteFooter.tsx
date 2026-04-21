const socials = [
  { iconSrc: "/icons/facebook.svg", href: "https://www.facebook.com/mahima.amarasekara", label: "Facebook" },
  { iconSrc: "/icons/instagram.svg", href: "https://www.instagram.com/induvaa", label: "Instagram" },
  { iconSrc: "/icons/threads.svg", href: "https://www.threads.com/@_induvaa_", label: "Threads" },
  { iconSrc: "/icons/github.svg", href: "https://github.com/MahimaInduvara97", label: "GitHub" },
];

function SocialIcon({ src, label }: { src: string; label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-4 w-4 bg-current"
      style={{
        WebkitMaskImage: `url(${src})`,
        WebkitMaskPosition: "center",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskImage: `url(${src})`,
        maskPosition: "center",
        maskRepeat: "no-repeat",
        maskSize: "contain",
      }}
      title={label}
    />
  );
}

export function SiteFooter() {
  return (
    <>
      <div className="absolute bottom-2 lg:bottom-6 left-6 z-30 flex items-center gap-5 md:left-12 glass-effect p-2 rounded-full">
        {socials.map(({ iconSrc, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-ink-mute transition-colors hover:text-ink flex items-center justify-center rounded-full"
          >
            <SocialIcon src={iconSrc} label={label} />
          </a>
        ))}
      </div>
      <div className="absolute right-4 top-1/2 z-30 hidden -translate-y-1/2 md:block md:right-6">
        <span className="scroll-vertical pointer-events-none text-[10px] font-semibold uppercase text-ink-soft">
          Scroll Down
        </span>
      </div>
    </>
  );
}