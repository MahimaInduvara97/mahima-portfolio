"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteSidebar } from "./SiteSidebar";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleCoordinateClick = () => {
    const url = `https://maps.app.goo.gl/NzzUhNbrkLDsm5F97`;
    window.open(url, "_blank");
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="group flex flex-col gap-0.75 p-1 transition-transform hover:scale-110 cursor-pointer"
        >
          <span className="block h-0.75 w-8 bg-ink transition-all group-hover:w-6" />
          <span className="block h-0.75 w-6 bg-ink transition-all group-hover:w-8" />
          <span className="block h-0.75 w-8 bg-ink transition-all group-hover:w-6" />
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                href={item.to}
                aria-current={isActive ? "page" : undefined}
                className={`text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
                  isActive ? "text-ink" : "text-ink-mute hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] md:flex"
          aria-hidden="true" onClick={handleCoordinateClick}>
          <span className="cursor-pointer text-ink-mute hover:text-ink">6.8258373</span>
          <span className="cursor-pointer text-ink-mute hover:text-ink">79.9361953</span>
        </div>
      </header>
      <SiteSidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}