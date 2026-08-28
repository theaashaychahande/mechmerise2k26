"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  Flag,
  ArrowRight,
  Sparkles,
  Award,
  Gem,
  BadgeCheck,
  Rocket,
  Zap,
} from "lucide-react";

/* ───────────────── SPONSOR TIERS (PLACEHOLDERS) ───────────────── */

const SPONSOR_TIERS = [
  {
    tier: "TITLE SPONSOR",
    badge: "T01",
    accent: "racing-red",
    items: [
      { name: "[TITLE SPONSOR]", note: "Top placement · logo pending" },
    ],
  },
  {
    tier: "GOLD PARTNERS",
    badge: "T02",
    accent: "pit-amber",
    items: [
      { name: "[GOLD SPONSOR 01]", note: "Partner · logo pending" },
      { name: "[GOLD SPONSOR 02]", note: "Partner · logo pending" },
      { name: "[GOLD SPONSOR 03]", note: "Partner · logo pending" },
    ],
  },
  {
    tier: "SILVER & ASSOCIATES",
    badge: "T03",
    accent: "titanium",
    items: [
      { name: "[SILVER 01]", note: "logo pending" },
      { name: "[SILVER 02]", note: "logo pending" },
      { name: "[SILVER 03]", note: "logo pending" },
      { name: "[ASSOCIATE 01]", note: "logo pending" },
      { name: "[ASSOCIATE 02]", note: "logo pending" },
      { name: "[ASSOCIATE 03]", note: "logo pending" },
    ],
  },
] as const;

const TIER_ACCENTS = {
  "racing-red": {
    ring: "border-racing-red/40",
    text: "text-racing-red",
    bg: "bg-racing-red/10",
    pill: "bg-racing-red text-white",
  },
  "pit-amber": {
    ring: "border-[#FFB800]/50",
    text: "text-[#FFB800]",
    bg: "bg-[#FFB800]/10",
    pill: "bg-[#FFB800] text-carbon",
  },
  titanium: {
    ring: "border-titanium/40",
    text: "text-titanium",
    bg: "bg-titanium/10",
    pill: "bg-titanium text-carbon",
  },
} as const;

/* ───────────────── COMPONENT ───────────────── */

export default function SponsorsAndCTA() {
  return (
    <section id="sponsors-cta" className="relative py-14 md:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20 md:space-y-28">
        {/* ─────── SPONSORS STRIP ─────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Award size={16} className="text-[#FFB800]" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                PIT WALL · OUR PARTNERS
              </p>
              <Award size={16} className="text-[#FFB800]" />
            </div>
            <h2 className="font-display-condensed text-4xl md:text-6xl font-black italic tracking-tighter">
              <span className="wordmark-bevel">POWERED BY</span>{" "}
              <span className="text-circuit-blue not-italic text-2xl md:text-4xl tracking-[0.2em]">
                THE GRID
              </span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-titanium/60 leading-relaxed">
              Partner logos drop into these slots once confirmed. Every tier is already
              styled — drop transparent PNGs into the <code className="text-circuit-blue">graphical_content/</code> folder to swap them in.
            </p>
          </motion.div>

          {/* Tiers */}
          <div className="space-y-6 md:space-y-8">
            {SPONSOR_TIERS.map((tier, tIdx) => {
              const a = TIER_ACCENTS[tier.accent as keyof typeof TIER_ACCENTS];
              return (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: tIdx * 0.08, duration: 0.5 }}
                  className={`relative border ${a.ring} bg-carbon/60 backdrop-blur-sm paddock-pass overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${a.pill} opacity-80`} />

                  <div className="flex flex-col md:flex-row md:items-stretch">
                    {/* Tier label */}
                    <div className={`md:w-56 shrink-0 ${a.bg} px-5 py-4 md:py-5 border-b md:border-b-0 md:border-r ${a.ring} flex items-center justify-between md:flex-col md:items-start md:justify-center gap-3`}>
                      <div className="flex items-center gap-2">
                        <BadgeCheck size={16} className={a.text} />
                        <span className={`font-display-condensed text-sm md:text-base font-black tracking-[0.2em] uppercase ${a.text}`}>
                          {tier.tier}
                        </span>
                      </div>
                      <span className={`font-mono text-[10px] tabular px-2 py-0.5 rounded-sm ${a.pill}`}>
                        {tier.badge}
                      </span>
                    </div>

                    {/* Sponsor tiles */}
                    <div className="flex-1 p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {tier.items.map((item, i) => (
                        <div
                          key={i}
                          className="group relative flex items-center justify-center h-24 md:h-28 border border-titanium/10 bg-asphalt/70 hover:border-titanium/30 transition-colors overflow-hidden"
                        >
                          {/* Diagonal scan */}
                          <div
                            aria-hidden
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              backgroundImage:
                                "linear-gradient(135deg, transparent 48%, rgba(255,255,255,0.04) 50%, transparent 52%)",
                              backgroundSize: "200% 200%",
                              backgroundPosition: "100% 0%",
                              animation: "none",
                            }}
                          />
                          <div className="relative z-10 text-center px-3">
                            <Sparkles size={14} className={`${a.text} mx-auto mb-1.5 opacity-60`} />
                            <p className="font-display-condensed text-xs md:text-sm font-bold tracking-wider uppercase text-titanium/60 group-hover:text-titanium transition-colors">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-[9px] tracking-[0.2em] uppercase text-titanium/35 tabular">
                              {item.note}
                            </p>
                          </div>
                          {/* index */}
                          <span className="absolute top-1 right-1.5 text-[8px] tabular text-titanium/20">
                            0{i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─────── CTA BANNER → COMPETITIONS ─────── */}
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
                backgroundImage:
                  "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cinematic%20low%20angle%20racing%20helmet%20cockpit%20perspective%20dramatic%20side%20lighting%20carbon%20fiber%20dark%20moody%20red%20rim%20light%20checkered%20flag%20bokeh%20background%20no%20logos%20no%20text%20no%20real%20liveries&image_size=landscape_16_9')",
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
                    { k: "Workshops", v: "5+" },
                    { k: "Prizes", v: "₹ 2L+" },
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
