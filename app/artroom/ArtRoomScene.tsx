"use client";

import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Mascot } from "page-mascot";
import { useCallback, useEffect, useRef, useState } from "react";
import { AboutModal } from "./AboutModal";
import { ExperienceModal } from "./ExperienceModal";
import { ContactModal } from "./ContactModal";
import { PortfolioLoader } from "./PortfolioLoader";
import { ProjectExplorer } from "./ProjectExplorer";
import { SkillsEducationModal } from "./SkillsEducationModal";
import { roomProjects } from "./projectData";
import { DiscoveryCue, type CueType } from "./DiscoveryCue";
import styles from "./artroom.module.css";

type RoomSection = {
  id: "projects" | "skills" | "about" | "experience" | "contact";
  label: string;
  hint: string;
  cueType: CueType;
  position: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
};

// Draft coordinates are percentages of the original 1672 x 941 room image.
// Fine-tune only these values when the artwork changes.
const roomSections: RoomSection[] = [
  {
    id: "projects",
    label: "Projects",
    hint: "Desk screens",
    cueType: "corners",
    position: { left: "7%", top: "23%", width: "24%", height: "25%" },
  },
  {
    id: "skills",
    label: "Skills & Education",
    hint: "Bookshelf",
    cueType: "book-brackets",
    position: { left: "38%", top: "5%", width: "17%", height: "53%" },
  },
  {
    id: "about",
    label: "About Me",
    hint: "Coffee mug",
    cueType: "steam-ring",
    position: { left: "10.2%", top: "41.5%", width: "5.5%", height: "9%" },
  },
  {
    id: "experience",
    label: "Experience",
    hint: "Wall calendar",
    cueType: "calendar-ring",
    position: { left: "61.5%", top: "5%", width: "7%", height: "25%" },
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Open window",
    cueType: "breeze",
    position: { left: "74%", top: "1%", width: "20%", height: "38%" },
  },
];

export function ArtRoomScene() {
  const [activeSection, setActiveSection] = useState<RoomSection | null>(null);
  const [showDraftMap, setShowDraftMap] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const openSection = (section: RoomSection) => {
    lastTriggerRef.current = document.activeElement as HTMLButtonElement;
    setActiveSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const finishLoading = useCallback(() => {
    setShowLoader(false);
    setShowDiscovery(true);
  }, []);

  useEffect(() => {
    if (!showDiscovery) return;
    const timer = window.setTimeout(() => setShowDiscovery(false), 7500);
    return () => window.clearTimeout(timer);
  }, [showDiscovery]);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const toggleDebug = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === "h") setShowDraftMap((shown) => !shown);
    };
    document.addEventListener("keydown", toggleDebug);
    return () => document.removeEventListener("keydown", toggleDebug);
  }, []);

  useEffect(() => {
    if (!activeSection) return;

    const dialog = dialogRef.current;
    const getFocusable = () => dialog?.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const focusable = getFocusable();
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSection();
      const currentFocusable = getFocusable();
      if (event.key !== "Tab" || !currentFocusable?.length) return;

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  return (
    <section className={styles.room} aria-label="Interactive portfolio room">
      <AnimatePresence>{showLoader ? <PortfolioLoader onComplete={finishLoading} /> : null}</AnimatePresence>
      <div className={styles.canvas}>
        <Image
          src="/room.png"
          alt="A cozy illustrated developer room with a desk, bookshelf, calendar, and open window"
          fill
          preload
          sizes="100vw"
          className={styles.background}
        />

        <div className={styles.hotspotLayer}>
          {roomSections.map((section) => (
            <button
              key={section.id}
              type="button"
              data-section={section.id}
              className={`${styles.hotspot} ${showDraftMap ? styles.hotspotDebug : ""}`}
              style={section.position}
              aria-label={`Open ${section.label}`}
              aria-haspopup="dialog"
              onClick={() => openSection(section)}
              onMouseEnter={() => section.id === "projects" && setProjectsHovered(true)}
              onMouseLeave={() => section.id === "projects" && setProjectsHovered(false)}
              onFocus={() => section.id === "projects" && setProjectsHovered(true)}
              onBlur={() => section.id === "projects" && setProjectsHovered(false)}
            >
              <DiscoveryCue
                type={section.cueType}
                label={section.label}
                hint={section.hint}
                reveal={showDiscovery}
                delay={0.8 + ["projects", "about", "skills", "experience", "contact"].indexOf(section.id) * 0.3}
              />
              {showDraftMap ? (
                <span className={styles.debugLabel}>
                  <strong>{section.label}</strong>
                  <small>{section.hint}</small>
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`${styles.mascotWrapper} ${
          projectsHovered ? styles.mascotInterested : ""
        } ${activeSection?.id === "projects" ? styles.mascotProjectOpen : ""}`}
      >
        <div className={styles.mascotFloat}>
          <Mascot
            directions="/mascots/beard-directions.webp"
            reactions="/mascots/beard-reactions.webp"
            size={220}
            label="Interactive beard mascot"
            className={styles.mascot}
          />
        </div>
      </div>

      <div className={styles.intro}>
        <p className={styles.eyebrow}>Mahima&apos;s space</p>
        <h1>Explore the room</h1>
        <p>Explore my room, every little corner reveals part of my story.</p>
      </div>

      {process.env.NODE_ENV !== "production" ? (
        <button
          type="button"
          className={styles.mapToggle}
          aria-pressed={showDraftMap}
          title="Developer hotspot map (Shift + H)"
          onClick={() => setShowDraftMap((visible) => !visible)}
        >
          {showDraftMap ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
          {showDraftMap ? "Hide debug map" : "Show debug map"}
        </button>
      ) : null}

      <nav className={styles.mobileNav} aria-label="Room sections">
        {roomSections.map((section) => (
          <button key={section.id} type="button" onClick={() => openSection(section)}>
            {section.label}
          </button>
        ))}
      </nav>

      {activeSection ? (
        <div className={styles.backdrop} role="presentation" onMouseDown={closeSection}>
          {activeSection.id === "projects" ? (
            <ProjectExplorer ref={dialogRef} projects={roomProjects} onClose={closeSection} />
          ) : activeSection.id === "about" ? (
            <AboutModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "skills" ? (
            <SkillsEducationModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "experience" ? (
            <ExperienceModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "contact" ? (
            <ContactModal ref={dialogRef} onClose={closeSection} />
          ) : (
            null
          )}
        </div>
      ) : null}
    </section>
  );
}
