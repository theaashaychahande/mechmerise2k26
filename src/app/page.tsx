import HomeHero from "@/components/home/HomeHero";
import LegacyAndPillars from "@/components/home/LegacyAndPillars";
import TelemetryStats from "@/components/home/TelemetryStats";
import CompetitionsCTA from "@/components/home/CompetitionsCTA";
import Footer from "@/components/Footer";

/**
 * Home Page ("/") — Step 3
 * ───────────────────────
 * Cinematic F1 × Mechanical Engineering landing page.
 * Sections (top → bottom):
 *   1. Hero (cinematic bg · F1 lights · wordmark · presenting · tagline · scroll)
 *   2. Legacy 7+ Years · 4 Mission Pillars (Innovation · Creativity · Teamwork · Excellence)
 *   3. Telemetry Dashboard — animated stat counters
 *   4. Sponsors Strip (Title · Gold · Silver/Associates) + Competitions CTA Banner
 *   5. Footer
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LegacyAndPillars />
      <TelemetryStats />
      <CompetitionsCTA />
      <Footer />
    </>
  );
}
