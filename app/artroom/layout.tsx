import { Figtree, Gloria_Hallelujah, Jost } from "next/font/google";
import { ArtRoomBodyMode } from "./ArtRoomBodyMode";
import styles from "./layout.module.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-artroom-body",
});

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-artroom-hand",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-artroom-ui",
});

export default function ArtRoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      data-artroom-shell
      className={`${styles.shell} ${figtree.variable} ${gloriaHallelujah.variable} ${jost.variable}`}
    >
      <ArtRoomBodyMode>{children}</ArtRoomBodyMode>
    </div>
  );
}
