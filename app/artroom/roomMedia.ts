export const favoriteTracks = [
  { title: "Man Giya Joben", src: "/songs/Man_Giya_Joben.mp3" },
  { title: "One Direction", src: "/songs/One_Direction.mp3" },
] as const;

export const galleryImages = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
  "/gallery/g9.jpg",
  "/gallery/g10.jpg",
] as const;

export const roomFeatureMascots = {
  songs: "sloth",
  hobbies: "tiger",
  gallery: "toaster",
} as const;

export const hobbies = [
  { id: "guitar", title: "Playing Guitar", description: "A relaxing way to switch off and enjoy music." },
  { id: "games", title: "Playing Games", description: "A little competition and teamwork after work.", badges: ["PUBG", "APEX"] },
  { id: "cooking", title: "Cooking", description: "Trying recipes and making something good from simple ingredients." },
  { id: "travelling", title: "Travelling", description: "Exploring new places, food, and everyday local life." },
  { id: "photography", title: "Mobile Photography", description: "Mostly everyday moments, places, and travel shots." },
] as const;
