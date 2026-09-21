# Interactive Art Room — Working Notes

This file records the current direction for the `/artroom` page so future changes stay consistent.

## Current goal

Build a one-screen interactive portfolio room in Next.js. `public/room.png` is the fixed room artwork and interactive hotspots sit over objects in that image. The Astro recommendations in the original planning document do not apply to this project.

## Current draft

- Route: `/artroom`
- Background: `public/room.png` (1672 × 941)
- Scene: fixed to `100dvh`, with no page scroll
- Layout: `app/artroom/layout.tsx` owns the viewport and does not modify the shared root layout
- Shared navigation/footer: hidden only while the art-room route is active, then restored automatically on navigation
- First paint: the server-rendered `data-artroom-shell` marker hides the shared header and route veil before hydration, preventing a preloader flash
- Fonts: Figtree for body text, Gloria Hallelujah for headings, and Jost for controls; scoped to `/artroom`
- Sections: Projects, Skills & Education, About Me, Experience, Contact
- Discovery: production uses small object-specific pencil cues with sequential reveal, hover labels, and large invisible hit areas
- Debug map: hidden by default and available only in development through its control or `Shift + H`
- Mobile: the image can crop, so a bottom navigation strip keeps every section reachable
- Projects: illustrated paper explorer with four data-driven project folders and a reusable case-study view
- Projects mascot: reusable top-left modal mascot using the dino direction/reaction sheets
- About: complete two-column paper modal with editable profile copy and framed `public/my-port.webp` portrait
- About mascot: hamster modal companion with a transient shy cue when the portrait is clicked
- Skills & Education: a three-row illustrated wooden bookshelf covering frontend, AI/research, and education/career
- Skills mascot: raccoon shelf keeper using the existing direction/reaction sheets
- Skills interaction: selected books pull forward and update one animated paper detail sheet; no ratings or percentages
- Experience: year-by-year hanging calendar with 2020, 2022, 2023, 2024, 2025, and 2026 pages
- Experience mascot: red panda page keeper using the existing direction/reaction sheets
- Experience interaction: year tabs, Previous/Next controls, Arrow Left/Right navigation, and direction-aware Framer Motion page turns
- Contact: complete data-driven window modal with phone, WhatsApp, email, GitHub, Instagram, and Facebook links
- Contact mascot: cat host using the existing direction/reaction sheets
- Loader: self-timed opaque pastel-cloud opening layer with a 3-second beard sprite sequence; the mounted room is revealed through a Framer Motion exit
- Graduation page: `public/graduate.png` appears in a taped paper-photo frame on the 2020 page
- Motion: Framer Motion handles calm modal, portrait, mascot, and cue transitions; CSS still disables decorative motion for reduced-motion users
- Modals: all five sections use accessible dialogs with Escape-to-close, backdrop close, focus trapping, and focus return
- Mascot: official `page-mascot` React component using the sketch fox direction/reaction sprite sheets in `public/mascots`
- Mascot behavior: package-owned cursor tracking, direction changes, click reactions, and reduced-motion support
- Main room mascot: 220px on desktop, with the existing responsive scale-down on mobile
- Intro card: bottom-centered beneath the main mascot with story-focused exploration copy

## Fine-tuning hotspot positions

Edit the `roomSections` array near the top of `app/artroom/ArtRoomScene.tsx`. Each position uses percentages of the original image:

```ts
position: { left: "7%", top: "23%", width: "24%", height: "25%" }
```

The scene keeps the source image's 1672:941 aspect ratio, so these percentages remain attached to the same objects at different desktop screen sizes. In development, use the debug-map button or press `Shift + H` while adjusting the four values. Production never exposes the rectangular map.

## Next passes

1. Fine-tune hotspot rectangles on the target desktop sizes.
2. Confirm the editable GitHub, Instagram, and Facebook destinations in `app/artroom/contactData.ts`.
3. Decide whether the art-room route should permanently cover the site's standard header/footer (the separate art-room layout currently covers them without changing the root layout).
4. Adjust or expand the four featured projects in `app/artroom/projectData.ts`.

## Intentional exclusions for this draft

- No Astro files or configuration
- No `drawably` dependency; the pencil treatment uses lightweight CSS borders, paper grain, tape, and linework
- No generated mascot artwork; the sprite sheets are the official sketch fox from `page-mascot`
