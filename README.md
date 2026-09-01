# শুভ দুর্গা পূজা — Durga Puja Experience

A Next.js (App Router, TypeScript) build of the Durga Puja site: a sticky
glassmorphic navbar, a video hero with gold alpona corner motifs, sticky
ritual sound buttons (Dhak Beats / Ulu Dhwani) and a YouTube-playlist music
bar, a flower-shower petal animation, a live countdown to Durga Puja 2026,
an Explore gallery grid, an image-upload preview card, and a bilingual
Bangla/English toggle.

## Project structure

```
src/
  app/
    layout.tsx           — fonts, metadata, and now Navbar/FlowerShower/
                            RitualButtons/MusicPlayer + all providers,
                            so they're sticky across every route
    page.tsx              — homepage: hero, Explore grid, About
    explore/[slug]/page.tsx — one page per Explore category (see below)
    globals.css            — design tokens (incl. glassmorphism) + all styling
  components/
    Navbar.tsx               — sticky top bar: brand, section links, language, share
    LanguageToggle.tsx        — Bangla/English switch, used inside Navbar
    VideoBackground.tsx       — hero <video>, falls back to a gradient
    AlponaCorners.tsx         — gold corner motif (signature element)
    Hero.tsx                   — Bengali headline + tagline
    ScrollCue.tsx               — bouncing down-arrow linking to the countdown
    RitualButtons.tsx            — Dhak Beats / Ulu Dhwani / Flower Shower / Share (sticky)
    FlowerShower.tsx               — falling petal animation, sticky full-viewport layer
    petalIcons.tsx                  — hand-drawn hibiscus + kash ful shapes
    MusicPlayer.tsx                 — YouTube playlist bar (sticky)
    CountdownTimer.tsx               — live countdown to Maha Shashthi 2026
    ExploreSection.tsx                — Server Component; scans public/assets/explore/*
    ExploreHeading.tsx                 — translated "Explore" heading
    ExploreCard.tsx                     — one grid card, now a Link to /explore/<slug>
    ExploreDetail.tsx                    — full gallery shown on each category's own page
    PandalMapPage.tsx                     — Pandal Map page: geolocation + distance-sorted list
    PandalMapView.tsx                      — the actual Leaflet map (loaded client-only)
    exploreIcons.tsx                        — placeholder icon per category
    UploadImagesCard.tsx                     — client-only image preview uploader
    AboutSection.tsx                          — short About panel
  context/
    LanguageContext.tsx    — current language ('bn' | 'en') + translations
    ToastContext.tsx        — global toast (used by both Share buttons)
    FlowerShowerContext.tsx  — shared trigger between RitualButtons and FlowerShower
  hooks/
    useYouTubePlayer.ts   — wraps the YouTube IFrame API
    useShare.ts            — native share sheet / clipboard fallback
  lib/
    translations.ts        — every Bangla/English string in the site
    exploreCategories.ts     — slug ↔ translation-key config, shared by grid + pages
    exploreImages.ts          — server-only fs helper, shared by grid + pages
    pandals.ts                 — sample West Bengal pandal dataset (lat/lng)
    geo.ts                       — haversine distance helper for "near you" sorting
public/
  assets/
    bg-video.mp4, dhak-beat.mp3, ulu-dhwani.mp3   — your media (see below)
    explore/pandal/, dhunuchi-naach/, alpona/,
            sindoor-khela/, bhog/                  — drop photos in per category
```

### How the Explore pages work

Each card on the homepage grid is a link to `/explore/<slug>` (e.g.
`/explore/pandal`), which renders the same category's photos as a full-page
gallery. Both the grid and the detail pages read from the same
`public/assets/explore/<slug>/` folder and the same category config in
`src/lib/exploreCategories.ts` — add a photo once, and it shows up in the
homepage card's 4-photo preview *and* in that category's own page. Adding a
6th category is one line in `exploreCategories.ts` plus a matching folder
and translation entry.



## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before it's "yours"

**1. Background video** — add `public/assets/bg-video.mp4`. Falls back to a
gradient until it exists.

**2. Sound effects** — add `public/assets/dhak-beat.mp3` and
`public/assets/ulu-dhwani.mp3`.

**3. YouTube playlist** — open `src/components/MusicPlayer.tsx` and replace
`PLACEHOLDER_PLAYLIST_ID` with your playlist's ID (the part after `list=` in
its URL). Must be Public or Unlisted.

**4. Explore gallery photos** — drop image files into
`public/assets/explore/pandal/`, `.../dhunuchi-naach/`, `.../alpona/`,
`.../sindoor-khela/`, `.../bhog/`. Each card automatically shows up to 4
photos from its folder; empty folders show a themed icon instead, so the
page never looks broken.

**5. Countdown date** — `src/components/CountdownTimer.tsx` targets Maha
Shashthi 2026 (Oct 17, IST). Some panjikas place it a day earlier — adjust
`TARGET_DATE` if your local calendar differs.

**6. Image uploads are preview-only** — `UploadImagesCard.tsx` shows photos
only in the uploading visitor's own browser tab; nothing is sent anywhere
yet. To make uploads persist and be visible to other visitors, wire
`handleFiles()` up to a storage backend (Cloudinary, S3, Supabase Storage,
etc.) and swap the local preview URLs for the uploaded file URLs it returns.

**7. Pandal Map data is a sample** — `src/lib/pandals.ts` ships with about a
dozen well-known, long-running Puja committees across West Bengal as a
starting template, not a complete or currently-verified directory (puja
locations and organizers can change year to year). Replace or extend the
`PANDALS` array with your own curated, up-to-date list — each entry just
needs a name, area, district, and lat/lng. The map (built with Leaflet +
OpenStreetMap, no API key required) and the "Use my location" button both
read from this same array automatically.

## Design notes

- **Explore cards are links**: 5 cards (Pandal, Pandal Map, Alpona, Sindoor
  Khela, Bhog) each navigate to their own page at `/explore/<slug>`. Four
  show a full photo gallery; **Pandal Map** instead shows an interactive
  Leaflet map of pandals across West Bengal with a "Use my location" button
  that sorts the list by distance. The **Upload Images** card stays inline
  on the homepage grid rather than becoming its own page, since it's an
  upload action, not something to browse.
- **Glassmorphism**: the `.glass` utility class in `globals.css` (frosted
  blur + translucent warm-tinted background + soft border/shadow) is applied
  to the navbar, ritual buttons, music player, countdown, explore cards, and
  about panel.
- **Sticky elements**: Navbar, RitualButtons, MusicPlayer, and FlowerShower
  now live in `layout.tsx`, so they're `position: fixed` and persist across
  *every* route — the homepage and all five `/explore/<slug>` pages.
- Both the pulsing button glow and the falling petals respect
  `prefers-reduced-motion`.
- The Share button (in the navbar and in the ritual row) uses the native
  Web Share API where available, falling back to copying the page URL.

## Build & deploy

```bash
npm run build && npm start
```

Or push to Vercel/Netlify like any Next.js app.
