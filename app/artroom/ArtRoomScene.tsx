"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, House, Pause, Play } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Mascot } from "page-mascot";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { AboutModal } from "./AboutModal";
import { ExperienceModal } from "./ExperienceModal";
import { ContactModal } from "./ContactModal";
import { PortfolioLoader } from "./PortfolioLoader";
import { ProjectExplorer } from "./ProjectExplorer";
import { SkillsEducationModal } from "./SkillsEducationModal";
import { ResumeModal } from "./ResumeModal";
import { SocialModal } from "./SocialModal";
import { SongsModal } from "./SongsModal";
import { HobbiesModal } from "./HobbiesModal";
import { GalleryModal } from "./GalleryModal";
import { FunFactsModal } from "./FunFactsModal";
import { FunnyModal } from "./FunnyModal";
import { SecretQuizModal } from "./SecretQuizModal";
import { AvailabilityModal } from "./AvailabilityModal";
import { GoalsModal } from "./GoalsModal";
import { VisionModal } from "./VisionModal";
import { PlantsModal } from "./PlantsModal";
import { LockerModal } from "./LockerModal";
import { TestimonialsModal } from "./TestimonialsModal";
import { DiscoveryCompleteModal } from "./DiscoveryCompleteModal";
import { projects } from "../lib/projects";
import { ROOM_BACKGROUNDS, ROOM_THEME_STORAGE_KEY } from "./roomLinks";
import {
  DESKTOP_ROOM_MEDIA_QUERY,
  DISCOVERABLE_HOTSPOT_IDS,
  DISCOVERY_COMPLETE_STORAGE_KEY,
  DISCOVERY_STORAGE_KEY,
  SHOW_DEBUG_MAP,
  type DiscoverableHotspotId,
} from "./roomConfig";
import { BeardReactionSprite } from "./BeardReactionSprite";
import { DiscoveryCue, type CueType } from "./DiscoveryCue";
import styles from "./artroom.module.css";

type HotspotId =
  | "projects" | "skills" | "about" | "experience" | "contact"
  | "theme" | "social" | "resume" | "music" | "songs" | "hobbies" | "gallery"
  | "fun-facts" | "funny" | "secret" | "vision" | "goals"
  | "availability" | "testimonials" | "locker" | "plants";

type RoomTheme = "day" | "night";

type RoomSection = {
  id: HotspotId;
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
    position: { left: "6%", top: "23%", width: "22%", height: "16%" },
  },
  {
    id: "skills",
    label: "Skills & Education",
    hint: "Bookshelf",
    cueType: "book-brackets",
    position: { left: "38%", top: "15%", width: "17%", height: "31%" },
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
    position: { left: "61.5%", top: "5%", width: "6%", height: "21%" },
  },
  {
    id: "contact",
    label: "Contact",
    hint: "Open window",
    cueType: "contact-ring",
    position: { left: "86%", top: "24%", width: "6%", height: "15%" },
  },
   {
    id: "theme",
    label: "Theme",
    hint: "Open window",
    cueType: "breeze",
    position: { left: "74%", top: "6%", width: "20%", height: "17%" },
  },
  {
    id: "social",
    label: "Social Links",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "6%", top: "49%", width: "4%", height: "2%" },
  },
  {
    id: "resume",
    label: "Resume",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "57%", top: "78%", width: "10%", height: "7%" },
  },
  {
    id: "songs",
    label: "My Favorite Songs",
    hint: "Music player",
    cueType: "music-note",
    position: { left: "28.5%", top: "30%", width: "5%", height: "9%" },
  },
  {
    id: "hobbies",
    label: "Hobbies",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "36%", top: "46%", width: "4%", height: "16%" },
  },
  {
    id: "gallery",
    label: "Gallery",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "15%", top: "7%", width: "7%", height: "5%" },
  },
  {
    id: "fun-facts",
    label: "Fun Facts",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "83%", top: "49%", width: "5%", height: "3%" },
  },
  {
    id: "funny",
    label: "Funny Stuff",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "73%", top: "70%", width: "8%", height: "6%" },
  },
  {
    id: "secret",
    label: "Secret",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "7%", top: "6%", width: "4%", height: "3%" },
  },
  {
    id: "vision",
    label: "Vision",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "64%", top: "38%", width: "2%", height: "3%" },
  },
  {
    id: "goals",
    label: "Goals",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "45%", top: "7%", width: "5%", height: "7%" },
  },
  {
    id: "availability",
    label: "Availability",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "95%", top: "72%", width: "4%", height: "10%" },
  },
  {
    id: "testimonials",
    label: "Testimonials",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "17%", top: "15%", width: "9%", height: "7%" },
  },
  {
    id: "locker",
    label: "Locker",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "13%", top: "65%", width: "4%", height: "10%" },
  },
  {
    id: "plants",
    label: "Plants",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "55%", top: "45%", width: "5%", height: "15%" },
  },
  {
    id: "music",
    label: "Music",
    hint: "Wall shelf",
    cueType: "shelf-ring",
    position: { left: "18.5%", top: "40%", width: "5%", height: "4%" },
  }
];

const modalHotspots: HotspotId[] = [
  "projects", "skills", "about", "experience", "contact", "resume", "social",
  "songs", "hobbies", "gallery",
  "fun-facts", "funny", "secret",
  "availability", "goals", "vision",
  "plants", "locker", "testimonials",
];

const discoverableHotspotIds = new Set<string>(DISCOVERABLE_HOTSPOT_IDS);

function readDiscoveredItems() {
  if (typeof window === "undefined") return new Set<DiscoverableHotspotId>();

  try {
    const stored = JSON.parse(window.localStorage.getItem(DISCOVERY_STORAGE_KEY) ?? "[]");
    if (!Array.isArray(stored)) return new Set<DiscoverableHotspotId>();
    return new Set(
      stored.filter((id): id is DiscoverableHotspotId =>
        typeof id === "string" && discoverableHotspotIds.has(id),
      ),
    );
  } catch {
    return new Set<DiscoverableHotspotId>();
  }
}

function subscribeToDesktopViewport(onChange: () => void) {
  const mediaQuery = window.matchMedia(DESKTOP_ROOM_MEDIA_QUERY);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getDesktopViewportSnapshot() {
  return window.matchMedia(DESKTOP_ROOM_MEDIA_QUERY).matches;
}

function getServerDesktopViewportSnapshot() {
  return false;
}

export function ArtRoomScene() {
  const isDesktop = useSyncExternalStore(
    subscribeToDesktopViewport,
    getDesktopViewportSnapshot,
    getServerDesktopViewportSnapshot,
  );

  if (!isDesktop) {
    return (
      <section className={styles.mobileRestriction} aria-labelledby="desktop-required-title">
        <BeardReactionSprite
          reaction="mobile-alternating"
          label="Smiling beard mascot changing between sparkle and blushing expressions"
          className={styles.mobileRestrictionMascot}
        />
        <h1 id="desktop-required-title">Best experienced on desktop</h1>
        <p>This portfolio is an interactive room made for a bigger screen.</p>
        <p>Open it on a laptop or desktop to get the real experience.</p>
        <Link href="/" className={styles.mobileHomeLink}>
          <House aria-hidden="true" />
          Bring me back home
        </Link>
      </section>
    );
  }

  return <DesktopArtRoom />;
}

function DesktopArtRoom() {
  const [activeSection, setActiveSection] = useState<RoomSection | null>(null);
  const [showDraftMap, setShowDraftMap] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showDiscovery, setShowDiscovery] = useState(false);
  const [roomTheme, setRoomTheme] = useState<RoomTheme>("day");
  const [discoveredItems, setDiscoveredItems] = useState(readDiscoveredItems);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showDiscoveryComplete, setShowDiscoveryComplete] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const completionDialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const openSection = (section: RoomSection) => {
    lastTriggerRef.current = document.activeElement as HTMLButtonElement;
    setActiveSection(section);
  };

  const toggleTheme = () => {
    setRoomTheme((current) => {
      const next = current === "day" ? "night" : "day";
      window.localStorage.setItem(ROOM_THEME_STORAGE_KEY, next);
      return next;
    });
  };

  const playBackgroundMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !audio.paused) return;

    try {
      await audio.play();
    } catch {
      setIsMusicPlaying(false);
    }
  }, []);

  const toggleBackgroundMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void playBackgroundMusic();
    else audio.pause();
  }, [playBackgroundMusic]);

  const markDiscovered = (id: HotspotId) => {
    if (!discoverableHotspotIds.has(id)) return;
    const discoverableId = id as DiscoverableHotspotId;

    setDiscoveredItems((current) => {
      if (current.has(discoverableId)) return current;

      const next = new Set(current);
      next.add(discoverableId);
      window.localStorage.setItem(DISCOVERY_STORAGE_KEY, JSON.stringify([...next]));

      if (
        next.size === DISCOVERABLE_HOTSPOT_IDS.length
        && window.localStorage.getItem(DISCOVERY_COMPLETE_STORAGE_KEY) !== "true"
      ) {
        window.localStorage.setItem(DISCOVERY_COMPLETE_STORAGE_KEY, "true");
        setShowDiscoveryComplete(true);
      }

      return next;
    });
  };

  const activateHotspot = (section: RoomSection) => {
    markDiscovered(section.id);
    if (section.id === "theme") {
      toggleTheme();
      return;
    }
    if (section.id === "music") {
      void playBackgroundMusic();
      return;
    }
    if (modalHotspots.includes(section.id)) openSection(section);
  };

  const closeSection = () => {
    setActiveSection(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const openContactFromModal = () => {
    const contactSection = roomSections.find((section) => section.id === "contact");
    if (contactSection) setActiveSection(contactSection);
  };

  const finishLoading = useCallback(() => {
    setShowLoader(false);
    setShowDiscovery(true);
  }, []);

  useEffect(() => {
    const audio = new Audio("/winding.mp3");
    audio.volume = 0.25;
    audio.loop = true;
    const handlePlay = () => setIsMusicPlaying(true);
    const handlePause = () => setIsMusicPlaying(false);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(ROOM_THEME_STORAGE_KEY);
    if (storedTheme !== "day" && storedTheme !== "night") return;
    const frame = window.requestAnimationFrame(() => setRoomTheme(storedTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!showDiscovery) return;
    const timer = window.setTimeout(() => setShowDiscovery(false), 7500);
    return () => window.clearTimeout(timer);
  }, [showDiscovery]);

  useEffect(() => {
    if (!SHOW_DEBUG_MAP) return;
    const toggleDebug = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === "h") setShowDraftMap((shown) => !shown);
    };
    document.addEventListener("keydown", toggleDebug);
    return () => document.removeEventListener("keydown", toggleDebug);
  }, []);

  useEffect(() => {
    if (!activeSection && !showDiscoveryComplete) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = showDiscoveryComplete ? completionDialogRef.current : dialogRef.current;
    const getFocusable = () => dialog?.querySelectorAll<HTMLElement>(
      'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const focusable = getFocusable();
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (showDiscoveryComplete) setShowDiscoveryComplete(false);
        else closeSection();
      }
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
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeSection, showDiscoveryComplete]);

  const hiddenItems = DISCOVERABLE_HOTSPOT_IDS.length - discoveredItems.size;

  return (
    <section className={styles.room} aria-label="Interactive portfolio room">
      <AnimatePresence>{showLoader ? <PortfolioLoader onComplete={finishLoading} /> : null}</AnimatePresence>
      <div className={styles.canvas}>
        <Image
          src={ROOM_BACKGROUNDS.day}
          alt="A cozy illustrated developer room with a desk, bookshelf, calendar, and open window"
          fill
          preload
          sizes="100vw"
          className={`${styles.background} ${styles.backgroundDay}`}
        />
        <Image
          src={ROOM_BACKGROUNDS.night}
          alt=""
          fill
          preload
          sizes="100vw"
          aria-hidden="true"
          className={`${styles.background} ${styles.backgroundNight} ${roomTheme === "night" ? styles.backgroundVisible : ""}`}
        />

        <div className={styles.hotspotLayer}>
          {roomSections.map((section, index) => {
            const opensModal = modalHotspots.includes(section.id);
            const isTheme = section.id === "theme";
            const ariaLabel = section.id === "music"
              ? "Play background music"
              : isTheme
                ? `Switch to ${roomTheme === "day" ? "night" : "day"} mode`
              : opensModal
                ? `Open ${section.label}`
                : `${section.label} — coming soon`;

            return (
            <button
              key={section.id}
              type="button"
              data-section={section.id}
              className={`${styles.hotspot} ${showDraftMap ? styles.hotspotDebug : ""}`}
              style={section.position}
              aria-label={ariaLabel}
              aria-haspopup={opensModal ? "dialog" : undefined}
              aria-pressed={isTheme ? roomTheme === "night" : undefined}
              onClick={() => activateHotspot(section)}
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
                delay={0.8 + index * 0.16}
              />
              {showDraftMap ? (
                <span className={styles.debugLabel}>
                  <strong>{section.label}</strong>
                  <small>{section.hint}</small>
                </span>
              ) : null}
            </button>
            );
          })}
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
        <p className={styles.eyebrow}>Hello!!!</p>
        <h1>Explore the room</h1>
        <p>Explore my room, every little corner reveals a part of my story.</p>
      </div>

      {SHOW_DEBUG_MAP ? (
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

      <aside className={styles.roomHud} aria-label="Music and room discovery">
        <button
          type="button"
          className={styles.musicToggle}
          onClick={toggleBackgroundMusic}
          aria-label={isMusicPlaying ? "Pause background music" : "Play background music"}
          aria-pressed={isMusicPlaying}
        >
          {isMusicPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>
        <div className={styles.discoveryProgress} aria-live="polite">
          <p><span>Found Items</span> <strong>{discoveredItems.size}/{DISCOVERABLE_HOTSPOT_IDS.length}</strong></p>
          <p><span>Still Hidden</span> <strong>{hiddenItems}</strong></p>
        </div>
      </aside>

      <nav className={styles.mobileNav} aria-label="Room sections">
        {roomSections.map((section) => (
          <button key={section.id} type="button" onClick={() => activateHotspot(section)}>
            {section.label}
          </button>
        ))}
      </nav>

      {activeSection ? (
        <div className={styles.backdrop} role="presentation" onMouseDown={closeSection}>
          {activeSection.id === "projects" ? (
            <ProjectExplorer ref={dialogRef} projects={projects} onClose={closeSection} />
          ) : activeSection.id === "about" ? (
            <AboutModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "skills" ? (
            <SkillsEducationModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "experience" ? (
            <ExperienceModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "contact" ? (
            <ContactModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "resume" ? (
            <ResumeModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "social" ? (
            <SocialModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "songs" ? (
            <SongsModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "hobbies" ? (
            <HobbiesModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "gallery" ? (
            <GalleryModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "fun-facts" ? (
            <FunFactsModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "funny" ? (
            <FunnyModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "secret" ? (
            <SecretQuizModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "availability" ? (
            <AvailabilityModal ref={dialogRef} onClose={closeSection} onContact={openContactFromModal} />
          ) : activeSection.id === "goals" ? (
            <GoalsModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "vision" ? (
            <VisionModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "plants" ? (
            <PlantsModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "locker" ? (
            <LockerModal ref={dialogRef} onClose={closeSection} />
          ) : activeSection.id === "testimonials" ? (
            <TestimonialsModal ref={dialogRef} onClose={closeSection} />
          ) : (
            null
          )}
        </div>
      ) : null}

      {showDiscoveryComplete ? (
        <div
          className={`${styles.backdrop} ${styles.completionBackdrop}`}
          role="presentation"
          onMouseDown={() => setShowDiscoveryComplete(false)}
        >
          <DiscoveryCompleteModal
            ref={completionDialogRef}
            onClose={() => setShowDiscoveryComplete(false)}
          />
        </div>
      ) : null}
    </section>
  );
}
