export const SHOW_DEBUG_MAP = false;
export const DESKTOP_ROOM_MEDIA_QUERY = "(min-width: 768px)";

export const MOBILE_CAMERA_ZONES = [
  { id: "desk", label: "Desk", focusX: 0.16, hotspots: ["projects", "about", "social", "songs", "music", "gallery", "testimonials", "secret", "locker"] },
  { id: "shelf", label: "Shelf", focusX: 0.43, hotspots: ["skills", "goals", "hobbies", "plants", "resume"] },
  { id: "bed", label: "Bed", focusX: 0.7, hotspots: ["funny", "availability", "vision"] },
  { id: "window", label: "Window", focusX: 0.9, hotspots: ["experience", "contact", "theme", "fun-facts"] },
] as const;

export type MobileCameraZoneId = (typeof MOBILE_CAMERA_ZONES)[number]["id"];

export const DISCOVERABLE_HOTSPOT_IDS = [
  "social",
  "resume",
  "music",
  "songs",
  "hobbies",
  "gallery",
  "fun-facts",
  "funny",
  "secret",
  "vision",
  "goals",
  "availability",
  "testimonials",
  "locker",
  "plants",
] as const;

export type DiscoverableHotspotId = (typeof DISCOVERABLE_HOTSPOT_IDS)[number];

export const DISCOVERY_STORAGE_KEY = "portfolio-discovered-items";
export const DISCOVERY_COMPLETE_STORAGE_KEY = "portfolio-discovery-complete-shown";

export function resetDiscoveryProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(DISCOVERY_STORAGE_KEY);
  window.localStorage.removeItem(DISCOVERY_COMPLETE_STORAGE_KEY);
}
