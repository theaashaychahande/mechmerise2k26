"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Flag,
  ArrowRight,
  Sparkles,
  Gem,
  Rocket,
  Zap,
} from "lucide-react";

/* ───────────────── COMPETITIONS CTA BANNER ───────────────── */

export default function CompetitionsCTA() {
  return (
    <section className="relative py-14 md:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative chevron-both overflow-hidden border border-racing-red/30 bg-gradient-to-br from-asphalt via-racing-red/15 to-asphalt">
            {/* Background art */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-60 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/events-bg.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/70 to-carbon/40" />
            <div className="absolute inset-0 carbon-texture opacity-40" />

            {/* HUD corner brackets */}
            <span aria-hidden className="absolute top-4 left-4 w-5 h-5 border-t border-l border-circuit-blue/50" />
            <span aria-hidden className="absolute top-4 right-4 w-5 h-5 border-t border-r border-racing-red/50" />
            <span aria-hidden className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-racing-red/50" />
            <span aria-hidden className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-circuit-blue/50" />

            <div className="relative p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left text */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-telemetry-blink" />
                  <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular">
                    ROUND 01 · MAIN EVENT
                  </p>
                </div>
                <h2 className="font-display-condensed text-4xl md:text-6xl lg:text-7xl font-black italic leading-[0.9] tracking-tighter">
                  <span className="wordmark-bevel">ENTER THE</span>
                  <br />
                  <span className="text-racing-red not-italic text-3xl md:text-5xl tracking-[0.2em]">
                    COMPETITION GRID
                  </span>
                </h2>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-titanium/80 leading-relaxed">
                  7 showdowns. 14 tracks. One champion&apos;s trophy. From CAD drafting
                  desks to RC racetracks to the robo-arena — pick your event, assemble
                  your crew, and bring home the silverware.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
                  {[
                    { k: "Events", v: "7" },
                    { k: "Workshops", v: "2" },
                    { k: "Prizes", v: "₹ 30K+" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="flex items-center gap-3 px-4 py-2 border border-titanium/15 bg-carbon/50 backdrop-blur-sm"
                    >
                      <span className="font-display-condensed text-2xl font-black tabular text-circuit-blue">
                        {s.v}
                      </span>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-titanium/60 tabular">
                        {s.k}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA actions */}
              <div className="lg:col-span-4 space-y-3 md:space-y-4">
                <Link
                  href="/competitions"
                  className="group relative w-full chevron-pill bg-racing-red py-4 px-6 text-[11px] md:text-xs font-black tracking-[0.3em] uppercase text-white overflow-hidden throttle-link flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Flag size={16} />
                    VIEW FULL GRID · ALL EVENTS
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/workshops"
                  className="group relative w-full chevron-pill bg-asphalt border border-circuit-blue/40 py-4 px-6 text-[11px] md:text-xs font-black tracking-[0.3em] uppercase text-circuit-blue overflow-hidden throttle-link throttle-link-blue flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap size={16} />
                    WORKSHOPS · EARLY BIRD LIVE
                    <Sparkles size={16} className="text-[#FFB800]" />
                  </span>
                </Link>
                <Link
                  href="/about"
                  className="group relative w-full chevron-pill bg-carbon/70 border border-titanium/20 py-4 px-6 text-[11px] md:text-xs font-black tracking-[0.3em] uppercase text-titanium overflow-hidden throttle-link flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Rocket size={16} className="text-racing-red" />
                    ABOUT US · OUR STORY
                  </span>
                </Link>
                {/* Trophy badge */}
                <div className="relative mt-2 p-4 border border-[#FFB800]/40 bg-[#FFB800]/5 flex items-center gap-3 paddock-pass">
                  <div className="w-12 h-12 rounded-full border border-[#FFB800]/50 flex items-center justify-center shrink-0">
                    <Trophy size={22} className="text-[#FFB800]" />
                  </div>
                  <div>
                    <p className="font-display-condensed text-sm font-black tracking-wider uppercase text-[#FFB800]">
                      Podium awaits
                    </p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-titanium/60 tabular mt-0.5">
                      Registrations open · Limited slots
                    </p>
                  </div>
                  <Gem size={14} className="absolute top-2 right-2 text-[#FFB800] opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
