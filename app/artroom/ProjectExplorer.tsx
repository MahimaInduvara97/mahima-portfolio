"use client";

import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";
import { ModalMascot } from "./ModalMascot";
import type { RoomProject } from "./projectData";
import styles from "./artroom.module.css";

type ProjectExplorerProps = {
  projects: RoomProject[];
  onClose: () => void;
};

export const ProjectExplorer = forwardRef<HTMLDivElement, ProjectExplorerProps>(
  function ProjectExplorer({ projects, onClose }, ref) {
    const [selectedProject, setSelectedProject] = useState<RoomProject | null>(null);
    const detailHeadingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (selectedProject) detailHeadingRef.current?.focus();
    }, [selectedProject]);

    return (
      <div
        ref={ref}
        className={styles.projectPaper}
        role="dialog"
        aria-modal="true"
        aria-labelledby="projects-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <span className={styles.tape} aria-hidden="true" />
        <span className={styles.paperClip} aria-hidden="true" />
        <ModalMascot
          variant="dino"
          label="Projects modal dino mascot"
          helper="project buddy"
          size={92}
          cue={selectedProject ? "case study!" : null}
          cueKey={selectedProject ? 1 : 0}
        />

        <button
          type="button"
          className={styles.sketchClose}
          onClick={onClose}
          aria-label="Close projects"
        >
          <span aria-hidden="true">×</span>
        </button>

        {selectedProject ? (
          <article className={styles.caseStudy}>
            <button
              type="button"
              className={styles.backButton}
              onClick={() => setSelectedProject(null)}
            >
              <span aria-hidden="true">←</span> back to folders
            </button>

            <header className={styles.caseStudyHeader}>
              <p className={styles.handNote}>{selectedProject.note}</p>
              <h2 id="projects-dialog-title" ref={detailHeadingRef} tabIndex={-1}>
                {selectedProject.title}
              </h2>
              <p>{selectedProject.subtitle}</p>
            </header>

            <div className={styles.caseStudyGrid}>
              <div className={styles.tapedPhoto}>
                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} project preview`}
                  fill
                  sizes="(max-width: 700px) 90vw, 48vw"
                />
              </div>

              <div className={styles.caseStudyCopy}>
                <section>
                  <span className={styles.pencilLabel}>The project</span>
                  <p>{selectedProject.description}</p>
                </section>
                <section>
                  <span className={styles.pencilLabel}>What I built</span>
                  <p>{selectedProject.role}</p>
                </section>
                <ul className={styles.detailStack} aria-label="Technologies">
                  {selectedProject.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {selectedProject.liveUrl ? (
                  <a
                    className={styles.paperLink}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit live site <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
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

            <div className={styles.folderGrid}>
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={styles.projectFolder}
                  data-tone={project.tone}
                  style={{ "--folder-tilt": `${index % 2 === 0 ? -0.7 : 0.8}deg` } as React.CSSProperties}
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open ${project.title} project`}
                >
                  <span className={styles.folderTab} aria-hidden="true" />
                  <span className={styles.folderNote}>{project.note}</span>
                  <span className={styles.folderTitle}>{project.title}</span>
                  <span className={styles.folderSubtitle}>{project.subtitle}</span>
                  <span className={styles.folderStack}>
                    {project.stack.slice(0, 3).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </span>
                  <span className={styles.folderArrow} aria-hidden="true">↗</span>
                </button>
              ))}
            </div>

            <p className={styles.cornerNote}>pick a folder to peek inside ↗</p>
          </div>
        )}
      </div>
    );
  },
);
