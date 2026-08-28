import SectionDivider from "@/components/SectionDivider";
import EventCard from "@/components/EventCard";
import RacetrackConnector from "@/components/RacetrackConnector";
import SponsorsAndCTA from "@/components/home/SponsorsAndCTA";
import Footer from "@/components/Footer";
import { COMPETITIONS } from "@/lib/competitions";

/**
 * /competitions route — Step 4 deliverable.
 *
 * Layout (top → bottom):
 *   1. Cinematic COMPETITIONS title-divider (SectionDivider, racetrack aerial art)
 *   2. Event grid with SVG racetrack connector running behind (on lg+)
 *   3. Reuse Sponsors + Competitions CTA banner (from Home page)
 *   4. Footer
 *
 * Every EventCard links → /events/[slug] (detail page, built in Step 5).
 */
export const metadata = {
  title: "Competitions · MECHMERISE 2K26",
  description:
    "All 7 showdowns of MECHMERISE 2K26 — EscapeX 2.0, CAD Clash, Race Ready, Builder's Lab, Endo-Arena, Treasure Hunt, Battle Verse.",
};

export default function CompetitionsPage() {
  return (
    <>
      <SectionDivider
        kicker="ROUND 01 · MAIN EVENT"
        title="COMPETITIONS"
        prompt="dramatic%20top%20down%20racetrack%20hairpin%20aerial%20shot%20with%20checkered%20curb%20racing%20marks%20moody%20dusk%20lighting%20carbon%20asphalt%20motion%20blur%20no%20logos%20no%20cars%20no%20liveries"
        accent="racing-red"
      />

      {/* ───── Event Grid + Racetrack connector ───── */}
      <section
        aria-label="Competition event grid"
        id="event-grid"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div aria-hidden className="absolute inset-0 carbon-texture opacity-50" />

        {/* Racetrack SVG behind the grid (lg only) */}
        <RacetrackConnector />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Grid header */}
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent via-circuit-blue/70 to-circuit-blue" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                ▣ Starting Grid · 7 Shows · 3 Days · 1 Trophy
              </p>
              <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent via-circuit-blue/70 to-circuit-blue" />
            </div>
            <h2 className="font-display-condensed text-4xl md:text-6xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">PICK YOUR EVENT</span>
            </h2>
            <p className="mt-5 max-w-2xl mx-auto text-sm md:text-base text-titanium/70 leading-relaxed">
              Hover any card — the grid tilt-follows your cursor like a pit-wall
              telemetry display. Tap <span className="text-racing-red font-semibold">EXPLORE</span>{" "}
              for full rules, structure, timelines, FAQs and coordinator contacts.
            </p>
          </div>

          {/* Grid: 7 cards laid 3 / 3 / 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
            {COMPETITIONS.map((ev, i) => (
              <EventCard key={ev.slug} event={ev} index={i} />
            ))}
            {/* 7th card spans full width bottom on 3-col, 2-col keeps it equal */}
          </div>
        </div>
      </section>

      <SponsorsAndCTA />
      <Footer />
    </>
  );
}
