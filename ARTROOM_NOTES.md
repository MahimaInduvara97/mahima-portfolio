# Interactive Art Room — Working Notes

This file records the current direction for the `/artroom` page so future changes stay consistent.

## Current goal

Build a one-screen interactive portfolio room in Next.js. `public/room.png` is the fixed room artwork and interactive hotspots sit over objects in that image. The Astro recommendations in the original planning document do not apply to this project.

## Current draft

- Route: `/artroom`
- Backgrounds: `public/my-room.png` and `public/my-room-night.png` (both 1672 × 941)
- Scene: fixed to `100dvh`, with no page scroll
- Layout: `app/artroom/layout.tsx` owns the viewport and does not modify the shared root layout
- Shared navigation/footer: hidden only while the art-room route is active, then restored automatically on navigation
- First paint: the server-rendered `data-artroom-shell` marker hides the shared header and route veil before hydration, preventing a preloader flash
- Fonts: Figtree for body text, Gloria Hallelujah for headings, and Jost for controls; scoped to `/artroom`
- Sections: Projects, Skills & Education, About Me, Experience, Contact
- Discovery: production uses small object-specific pencil cues with sequential reveal, hover labels, and large invisible hit areas
- Discovery map: pencil cues remain available independently of the optional rectangular debug map
- Mobile: viewports below 768px use the real full-height room as a draggable camera world with Desk, Shelf, Bed, and Window snap points; all existing hotspots and modals remain available
- Mobile camera: configuration lives in `app/artroom/roomConfig.ts`; the camera position uses a Framer Motion value, clamps to the artwork bounds, survives theme/modal changes, recalculates on resize, and distinguishes drags from hotspot taps
- Mobile discovery: only the current camera zone reveals temporary labels, with a short first-visit swipe hint and safe-area-aware pencil-dot navigation
- Mobile modals: existing dialogs open as compact paper sheets over the preserved camera position
- Projects: all entries come directly from `app/lib/projects.ts`; the illustrated explorer shows four folders per page with Previous/Next controls and a reusable case-study view
- Debug map: controlled manually by `SHOW_DEBUG_MAP` in `app/artroom/roomConfig.ts`
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
- Theme hotspot: crossfades between the day/night room layers and persists under `portfolio-room-theme`
- Resume hotspot: document-drawer modal configured through `app/artroom/roomLinks.ts`; add `public/resume.pdf` and enable its flag when ready
- Social hotspot: personal links and Facebook-page cards configured centrally in `app/artroom/roomLinks.ts`; missing URLs remain non-interactive
- Songs: compact two-track player using the real MP3s in `public/songs`, with progress, previous/next, automatic advance, and the sloth mascot
- Background music: the non-modal Music hotspot and bottom-right HUD share one looping `Audio` instance for `public/winding.mp3` at 25% volume; playback starts only after user interaction and preserves its position across pauses
- Discovery progress: the explicit 15-item list and storage keys live in `app/artroom/roomConfig.ts`; unique clicks persist in `portfolio-discovered-items`, while `portfolio-discovery-complete-shown` prevents the 15/15 celebration from repeating after refresh
- Discovery completion: `app/artroom/DiscoveryCompleteModal.tsx` reuses the existing bottom-right laughing frame from `beard-reactions.webp`; the HUD and controller are owned by `DesktopArtRoom` in `ArtRoomScene.tsx`
- Hobbies: five-item illustrated card modal with the tiger mascot
- Gallery: ten-photo contained slideshow sourced from `public/gallery`, with arrows, keyboard/swipe navigation, thumbnails, and the toaster mascot
- Fun Facts: compact `public/fun.mp4` reel modal with audible autoplay attempt, tap-to-play fallback, delayed caption, and first/last beard reaction loop
- Funny: small shoe-area joke using the verified bottom-center dizzy frame from the 3×3 beard reaction sheet
- Secret: typed three-step quiz with an all-correct-only visual 10% portfolio easter egg; questions and answer key live in `app/artroom/secretQuizData.ts`
- Availability: selected-project status modal with bear mascot and a CTA that swaps into the existing Contact modal
- Goals: five-step illustrated roadmap guided by the frog mascot
- Vision: editorial statement and three pillars with the sheep mascot
- Plants: small reset-on-open watering easter egg with direction and happy beard states
- Locker: intentionally client-side code easter egg, WhatsApp hint flow, and `public/i-am-batman.jpg` reward
- Testimonials: manual three-entry carousel with keyboard arrows, dots, and semantic beard reaction frames; copy remains explicitly marked as placeholder
- Locker/WhatsApp constants and testimonial copy live in `app/artroom/easterEggData.ts`
- Availability, goals, and vision copy is centralized in `app/artroom/aspirationData.ts`
- Beard reaction frames: semantic sprite positions and the first/last animation live in `app/artroom/BeardReactionSprite.tsx` and the art-room stylesheet
- Media paths and the sloth/tiger/toaster feature mapping live in `app/artroom/roomMedia.ts`
- All currently mapped room hotspots now have implemented interactions.
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
4. Maintain project content only in `app/lib/projects.ts`.

## Intentional exclusions for this draft

- No Astro files or configuration
- No `drawably` dependency; the pencil treatment uses lightweight CSS borders, paper grain, tape, and linework
- No generated mascot artwork; the sprite sheets are the official sketch fox from `page-mascot`
