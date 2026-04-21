"use client";

import { useEffect } from "react";
import { Phone, MessageCircle, Mail, Code2, Camera, Globe, X } from "lucide-react";

const PHONE = "075 620 4045";
const PHONE_INTL = "94774166098";
const EMAIL = "induvara.amarasekara@gmail.com";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const links = [
  { Icon: Phone, label: "Call My Number", value: PHONE, href: `tel:${PHONE}` },
  { Icon: MessageCircle, label: "WhatsApp", value: "Chat with me", href: `https://wa.me/${PHONE_INTL}` },
  { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Code2, label: "GitHub", value: "@mahima-induvara", href: "https://github.com/MahimaInduvara97" },
  { Icon: Camera, label: "Instagram", value: "@induvaa", href: "https://www.instagram.com/induvaa" },
  { Icon: Globe, label: "Facebook", value: "Mahima Induvara", href: "https://www.facebook.com/mahima.amarasekara" },
];

export function SiteSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      />
      <aside
        role="dialog"
        aria-modal="true"
        className="animate-slide-in-left absolute left-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto glass-dark p-7 text-white shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50">
              Get in touch
            </p>
            <h2 className="mt-2 font-display text-3xl text-white">
              Let's <span className="text-white/40">connect.</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          <div className="mb-3 border border-white/15 bg-white/5 p-4 md:hidden">
            <nav className="mt-3 flex flex-col gap-2" aria-label="Mobile menu">
              {menuLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-white/75"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {links.map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              style={{ animation: `fade-in 0.4s ease-out ${i * 60}ms both` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-all group-hover:bg-white group-hover:text-black">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  {label}
                </span>
                <span className="text-sm text-white/90">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="mt-auto pt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
          © Mahima Induvara
        </p>
      </aside>
    </div>
  );
}