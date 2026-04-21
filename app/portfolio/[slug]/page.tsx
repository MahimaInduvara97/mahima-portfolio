import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/app/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  const baseUrl = "https://mahima-induvara.vercel.app";
  const projectUrl = `${baseUrl}/portfolio/${slug}`;

  return {
    title: `${project.title} - Portfolio Project`,
    description: project.description,
    keywords: [...project.stack, project.category, "web project", "portfolio"],
    openGraph: {
      type: "article",
      url: projectUrl,
      title: `${project.title} - Mahima Induvara`,
      description: project.description,
      images: [
        {
          url: project.accent,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      siteName: "Mahima Induvara",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.accent],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-350 flex-col justify-center">
      <div className="mb-8 flex justify-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>

      <div className="grid gap-8 text-center lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-ink-soft">
            {project.category}
          </p>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/20 bg-white/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card overflow-hidden rounded-[2rem] p-4">
          <div
            className="relative flex min-h-88 items-end overflow-hidden rounded-[1.5rem] p-6 text-white"
            style={{
              backgroundImage: project.accent,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
            <div className="relative z-10 flex w-full items-end justify-between gap-4">
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                  Featured case study
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/90">
                  A compact, visual presentation designed to keep the story readable at every size.
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}