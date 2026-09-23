export const SHOW_DEBUG_MAP = true;
export const DESKTOP_ROOM_MEDIA_QUERY = "(min-width: 768px)";

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
