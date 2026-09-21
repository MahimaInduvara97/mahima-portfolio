import type { Metadata } from "next";
import { ArtRoomScene } from "./ArtRoomScene";

export const metadata: Metadata = {
  title: "Interactive Room",
  description: "Explore Mahima's work through an interactive illustrated room.",
};

export default function ArtRoomPage() {
  return <ArtRoomScene />;
}
