"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/app/lib/projects";

const ITEMS_PER_PAGE = 6;

export default function PortfolioClient() {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));

  const visibleProjects = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return projects.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-350 flex-col justify-center">
      <div className="mb-6 flex items-end justify-center text-center">
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous"
            className="rounded-full border border-ink p-2.5 text-ink transition-all hover:bg-ink hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <span className="px-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink-mute">
            {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            aria-label="Next"
            className="rounded-full border border-ink p-2.5 text-ink transition-all hover:bg-ink hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group glass-card relative aspect-4/3 overflow-hidden rounded-2xl p-0 transition-all duration-500 hover:-translate-y-1"
            style={{ animation: `fade-in 0.45s ease-out ${index * 60}ms both` }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: project.accent,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-4 text-white md:p-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] backdrop-blur">
                  {project.date}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-all group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
                  {project.category}
                </p>
                <h2 className="mt-2 font-display text-base leading-tight md:text-xl">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/80">
                  {project.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors group-hover:text-white">
                  View details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
