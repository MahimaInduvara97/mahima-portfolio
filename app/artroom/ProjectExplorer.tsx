"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { forwardRef, useEffect, useRef, useState } from "react";
import type { Project } from "../lib/projects";
import { ModalMascot } from "./ModalMascot";
import styles from "./artroom.module.css";

export const PROJECTS_PER_PAGE = 4;

type ProjectExplorerProps = { projects: Project[]; onClose: () => void };
const folderTones = ["sage", "peach", "blue", "yellow"] as const;

function getProjectImage(accent: string) {
  return accent.match(/url\(['"]?(.+?)['"]?\)/)?.[1] ?? accent;
}

export const ProjectExplorer = forwardRef<HTMLDivElement, ProjectExplorerProps>(
  function ProjectExplorer({ projects, onClose }, ref) {
    const reduceMotion = useReducedMotion();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [page, setPage] = useState(0);
    const detailHeadingRef = useRef<HTMLHeadingElement>(null);
    const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
    const visibleProjects = projects.slice(page * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE);

    useEffect(() => {
      if (selectedProject) detailHeadingRef.current?.focus();
    }, [selectedProject]);

    return (
      <div ref={ref} className={styles.projectPaper} role="dialog" aria-modal="true" aria-labelledby="projects-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
        <span className={styles.tape} aria-hidden="true" />
        <span className={styles.paperClip} aria-hidden="true" />
        <ModalMascot variant="dino" label="Projects modal dino mascot" helper="project buddy" size={92} cue={selectedProject ? "case study!" : null} cueKey={selectedProject ? 1 : page} />
        <button type="button" className={styles.sketchClose} onClick={onClose} aria-label="Close projects"><span aria-hidden="true">×</span></button>

        {selectedProject ? (
          <article className={styles.caseStudy}>
            <button type="button" className={styles.backButton} onClick={() => setSelectedProject(null)}><span aria-hidden="true">←</span> back to folders</button>
            <header className={styles.caseStudyHeader}>
              <p className={styles.handNote}>{selectedProject.category}</p>
              <h2 id="projects-dialog-title" ref={detailHeadingRef} tabIndex={-1}>{selectedProject.title}</h2>
              <p>{selectedProject.category} · {selectedProject.date}</p>
            </header>
            <div className={styles.caseStudyGrid}>
              <div className={styles.tapedPhoto}><Image src={getProjectImage(selectedProject.accent)} alt={`${selectedProject.title} project preview`} fill sizes="(max-width: 700px) 90vw, 48vw" /></div>
              <div className={styles.caseStudyCopy}>
                <section><span className={styles.pencilLabel}>The project</span><p>{selectedProject.description}</p></section>
                <section><span className={styles.pencilLabel}>What I built</span><p>{selectedProject.summary}</p></section>
                <ul className={styles.detailStack} aria-label="Technologies">{selectedProject.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
                {selectedProject.link && selectedProject.link !== "#" ? <a className={styles.paperLink} href={selectedProject.link} target="_blank" rel="noopener noreferrer">Visit live site <span aria-hidden="true">↗</span></a> : null}
              </div>
            </div>
          </article>
        ) : (
          <div className={styles.folderView}>
            <header className={styles.projectHeading}>
              <p className={styles.handNote}>a few things I&apos;ve made</p>
              <h2 id="projects-dialog-title">My Projects</h2>
              <span className={styles.pencilUnderline} aria-hidden="true" />
            </header>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={page} className={styles.folderGrid} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }} transition={{ duration: reduceMotion ? 0.12 : 0.3, ease: "easeOut" }}>
                {visibleProjects.map((project, index) => (
                  <button key={project.slug} type="button" className={styles.projectFolder} data-tone={folderTones[index]} style={{ "--folder-tilt": `${index % 2 === 0 ? -0.7 : 0.8}deg` } as React.CSSProperties} onClick={() => setSelectedProject(project)} aria-label={`Open ${project.title} project`}>
                    <span className={styles.folderTab} aria-hidden="true" />
                    <span className={styles.folderNote}>{project.category}</span>
                    <span className={styles.folderTitle}>{project.title}</span>
                    <span className={styles.folderSubtitle}>{project.summary}</span>
                    <span className={styles.folderStack}>{project.stack.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</span>
                    <span className={styles.folderArrow} aria-hidden="true">↗</span>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className={styles.projectPagination}>
              <button type="button" disabled={page === 0} onClick={() => setPage((current) => current - 1)}>← Previous</button>
              <span>{page + 1} / {totalPages}</span>
              <button type="button" disabled={page === totalPages - 1} onClick={() => setPage((current) => current + 1)}>Next →</button>
            </div>
            <p className={styles.cornerNote}>pick a folder to peek inside ↗</p>
          </div>
        )}
      </div>
    );
  },
);
