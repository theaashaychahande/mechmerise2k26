# MECHMERISE 2K26 — Website Build Prompt (F1 Theme)

Sequential build prompts for an AI IDE. Run these one at a time, in order — each step builds on the previous one's output.

***

## Step 1 — Project Setup & Design System

Set up a Next.js + Tailwind CSS + Framer Motion project for **MECHMERISE 2K26**, the annual technical festival of the Department of Mechanical Engineering, St. Vincent Pallotti College of Engineering and Technology (SVPCET), Nagpur.

Build the site's F1 × mechanical-engineering design system first, before any pages:

- Color tokens: carbon black (#0A0A0C), asphalt grey (#1C1C21), racing red accent (#E10600-style), titanium/chrome silver-white, and ONE electric accent (circuit-blue #00D4FF or pit-amber #FFB800) — no rainbow palettes.
- Typography: a bold condensed display font for headlines (Barlow Condensed / Titillium Web style), a clean grotesk for body (Inter/Manrope), tabular-figure numerals for stats/dates styled like a telemetry readout.
- Reusable Tailwind config for: checkered-flag divider strip, carbon-fiber texture fill, racing-stripe accent, HUD/telemetry corner-bracket frame.
- Base components scaffolded (empty for now): Navbar, Sidebar, SocialRail, Hero, SectionDivider, EventCard, EventDetailTabs, Footer, ContactForm.

Deliver a working blank page that renders the color/type system so it can be visually confirmed before continuing.

***

## Step 2 — Navigation, Sidebars & Global Chrome

Build the persistent site chrome:

- **Top nav pill** (translucent dark, angled/chevron edges): logo top-left, center links `ACCOMMODATION` · `WORKSHOPS` (with an "EARLY BIRD" badge) · `COMPETITIONS` · `IGNITION`, `SIGN IN` button top-right.
- **Left vertical sidebar** (fixed, icon+label): Home, Events, Contact Us, About Us.
- **Right vertical social rail** (fixed, icon-only): Instagram, X, LinkedIn, Facebook, YouTube, WhatsApp.
- On mobile, collapse both rails into a bottom nav bar or hamburger drawer — do not just shrink them.
- Add the throttle-fill hover animation (left-to-right color wipe) to all buttons and nav links.

Respect `prefers-reduced-motion` throughout.

***

## Step 3 — Home Page Hero & Landing Sections

Build the Home page:

- Full-bleed cinematic hero background (original/generic racing-adjacent imagery — no real F1 liveries, logos, or driver likenesses). Large custom wordmark treatment for "MECHMERISE 2K26" (angular, forward-leaning, metallic gradient bevel). Presenting line ("Dept. of Mechanical Engineering, SVPCET presents"), edition/date, tagline, "SCROLL" indicator with animated line.
- Optional five-red-lights F1 start-sequence loader before the hero reveals.
- Legacy/about strip: "7+ Years Legacy" stat, and the four pillars — Innovation, Creativity, Teamwork, Excellence — each with a one-line description, reskinned with mechanical/racing iconography.
- Stats counters (years running, footfall, total prize pool) styled as dashboard telemetry readouts.
- Sponsors strip and a CTA banner into Competitions.

***

## Step 4 — Competitions Section (Divider + Grid)

Build:

- A full-width **section divider page** (like Techfest's "COMPETITIONS" title screen) — large stylized "COMPETITIONS" typography over dramatic themed art, checkered-flag accent strip.
- The **event grid**: cards styled like a driver's-licence/paddock-pass shape, each with sponsor/partner badge (top-left), themed key art, event name, `EXPLORE` + `REGISTER` buttons, and a prize-pool banner strip at the bottom.
- Populate with all confirmed MECHMERISE 2K26 events: EscapeX 2.0, CAD Clash, Race Ready, Builder's Lab, Endo-Arena, Treasure Hunt, Battle Verse (use the descriptions/fees/coordinators already on file in the Mechmerise 2k26 parent page — mark any missing fields as clearly-labeled placeholders, not invented data).
- Nice-to-have: lay the grid along a subtle SVG racetrack line connecting the cards.
- Cards get the magnetic/tilt hover response on mouse position.

***

## Step 5 — Event Detail Pages

Build the dynamic event detail template:

- Header row: back arrow, event name, partner/sponsor logo.
- Tab bar: `About` · `Structure` · `Timeline` · `Rules` · `FAQs` · `Doubts`.
- Two-column layout: left = tabbed text content, right = large hero image in an HUD/telemetry corner-bracket frame, plus stacked action buttons (`Register`, `Rulebook`/`Problem Statement`, `Join our community`).
- Footer contact strip: coordinator email, name, phone number in a bordered horizontal bar.
- Wire this template to each event from Step 4 so every card links to its own populated detail page.

***

## Step 6 — Workshops, Ignition, About, Team & Contact Pages

Build the remaining pages:

- **Workshops** — Early Bird badge treatment, list of hands-on workshops (e.g. Builder's Lab Day 1).
- **Ignition** (the site's keynote/flagship-session sub-brand, replacing Techfest's "Ignite") — marquee session/inaugural ceremony page.
- **About Us** — department + fest legacy, mission pillars (reuse Step 3 content in expanded form).
- **Team/Coordinators** — faculty + student coordinator grid, built as a repeatable component with placeholder cards (2k26 team is still being finalized).
- **Contact** — message form + department address (Wardha Road, Gavsi-Manapur, Nagpur, Maharashtra – 441108) + <mechmerise2k26@gmail.com>, styled as a "team comms/pit radio" panel.
- **Accommodation** — simple info/form page for outstation participants.

***

## Step 7 — Polish Pass: Motion, Responsiveness, Accessibility & QA

Final pass across the whole site:

- Add scroll-triggered staggered reveals (100–150ms stagger, restrained) to all card/grid sections.
- Add page-transition motion-blur/snap transitions between routes (under 400ms).
- Full responsive audit — every fixed-rail/desktop-only element has a working mobile equivalent.
- Accessibility pass: contrast ratios (no red text on black), `aria-label`s on icon-only nav, keyboard navigation, `prefers-reduced-motion` support confirmed everywhere.
- Performance pass: lazy-load below-the-fold images, compress hero imagery to WebP/AVIF, run a Lighthouse check.
- Run the tone checklist: varied layouts (not just repeating card grids), disciplined 2–3 color palette, purposeful (not cluttered) racing motifs, at least one memorable non-templated moment, no real F1 branding/liveries/logos used anywhere.
- Document in a README any section built with placeholder content, so it's easy to swap in final details later.

