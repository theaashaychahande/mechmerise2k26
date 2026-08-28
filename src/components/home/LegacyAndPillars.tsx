"use client";

import { motion } from "framer-motion";
import { Cpu, Palette, Users, Trophy, Gauge, Sparkles, Timer } from "lucide-react";

const PILLARS = [
  {
    title: "Innovation",
    kicker: "Lap 01",
    tagline: "Pushing the design limit",
    description:
      "Redefining the mechanical status quo with projects and prototypes that leap beyond the textbook.",
    icon: Cpu,
    accent: "racing-red",
    stat: "72+",
    statLabel: "Projects",
  },
  {
    title: "Creativity",
    kicker: "Lap 02",
    tagline: "Ideas at full throttle",
    description:
      "From CAD screens to workshop floors — where raw engineering meets bold, unexpected ideas.",
    icon: Sparkles,
    accent: "circuit-blue",
    stat: "14",
    statLabel: "Events",
  },
  {
    title: "Teamwork",
    kicker: "Lap 03",
    tagline: "One crew, one goal",
    description:
      "Pit-crew precision meets cohort spirit. Collaborate, build, compete, cross the finish line together.",
    icon: Users,
    accent: "titanium",
    stat: "2.5K+",
    statLabel: "Participants",
  },
  {
    title: "Excellence",
    kicker: "Lap 04",
    tagline: "Podium or nothing",
    description:
      "7+ years of legacy raising the bar every edition. Precision engineering. Uncompromising execution.",
    icon: Trophy,
    accent: "pit-amber",
    stat: "₹ 2L+",
    statLabel: "Prize Pool",
  },
] as const;

const ACCENT_MAP = {
  "racing-red": {
    ring: "ring-racing-red/40 hover:ring-racing-red/80",
    text: "text-racing-red",
    bg: "bg-racing-red",
    bar: "bg-gradient-to-r from-racing-red to-racing-red/20",
  },
  "circuit-blue": {
    ring: "ring-circuit-blue/40 hover:ring-circuit-blue/80",
    text: "text-circuit-blue",
    bg: "bg-circuit-blue",
    bar: "bg-gradient-to-r from-circuit-blue to-circuit-blue/20",
  },
  titanium: {
    ring: "ring-titanium/30 hover:ring-titanium/60",
    text: "text-titanium",
    bg: "bg-titanium",
    bar: "bg-gradient-to-r from-titanium to-titanium/20",
  },
  "pit-amber": {
    ring: "ring-[#FFB800]/40 hover:ring-[#FFB800]/80",
    text: "text-[#FFB800]",
    bg: "bg-[#FFB800]",
    bar: "bg-gradient-to-r from-[#FFB800] to-[#FFB800]/20",
  },
} as const;

export default function LegacyAndPillars() {
  return (
    <section
      id="legacy-pillars"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background accents */}
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-50" />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[120%] h-px bg-gradient-to-r from-transparent via-titanium/20 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ──────── 7+ YEARS LEGACY STRIP ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative mb-20 md:mb-28 hud-frame text-circuit-blue p-6 md:p-10 border border-titanium/10 bg-asphalt/60 backdrop-blur overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-racing-red/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-circuit-blue/10 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Big number */}
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.4em] uppercase text-titanium/60 tabular mb-4 flex items-center gap-2">
                <Timer size={14} className="text-racing-red" />
                Formation Lap · Since 2019
              </p>
              <div className="relative inline-block">
                <span className="font-display-condensed text-8xl md:text-9xl font-black italic leading-none wordmark-bevel tabular">
                  7<span className="text-racing-red">+</span>
                </span>
                <span className="absolute -top-1 -right-4 md:-right-10 font-display-condensed text-2xl font-black italic text-circuit-blue tracking-widest">
                  YRS
                </span>
              </div>
              <p className="mt-4 font-display-condensed text-2xl font-black italic uppercase tracking-wider text-titanium/85">
                Years of <span className="text-racing-red">Legacy</span>
              </p>
            </div>

            {/* Details */}
            <div className="md:col-span-8 space-y-6 md:pl-8 md:border-l border-titanium/10">
              <p className="text-titanium/75 text-base md:text-lg leading-relaxed">
                MECHMERISE is the annual flagship technical festival of the
                <span className="text-circuit-blue font-semibold"> Department of Mechanical Engineering</span>,
                St. Vincent Pallotti College of Engineering and Technology, Nagpur.
                Every edition, we gather hundreds of curious minds from across the region
                for three non-stop days of building, racing, breaking, and re-inventing.
              </p>

              {/* Mini-stats */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2">
                {[
                  { k: "Editions", v: "08" },
                  { k: "Colleges", v: "60+" },
                  { k: "Footfall", v: "2.5K+" },
                ].map((s, i) => (
                  <div
                    key={s.k}
                    className="relative p-3 md:p-4 border border-titanium/10 bg-carbon/40 paddock-pass"
                  >
                    <p className="font-display-condensed text-3xl md:text-4xl font-black tabular text-titanium">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-titanium/55 tabular">
                      {s.k}
                    </p>
                    <span className="absolute top-2 right-2 text-[9px] tabular text-titanium/30">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ──────── PILLAR HEADER ──────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-circuit-blue/60 to-circuit-blue" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink flex items-center gap-2">
              <Gauge size={14} /> The 4 Pillars · Mission Grid
            </p>
            <span className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-circuit-blue/60 to-circuit-blue" />
          </div>
          <h2 className="font-display-condensed text-5xl md:text-7xl font-black italic leading-none tracking-tighter">
            <span className="wordmark-bevel">ENGINEERED</span>{" "}
            <span className="text-racing-red not-italic text-3xl md:text-5xl tracking-[0.2em]">
              ON 4 PILLARS
            </span>
          </h2>
        </motion.div>

        {/* ──────── PILLARS GRID ──────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PILLARS.map((p, idx) => {
            const accent = ACCENT_MAP[p.accent];
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative paddock-pass bg-asphalt/70 border border-titanium/10 overflow-hidden"
              >
                {/* Accent bar top */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent.bar}`} />

                {/* HUD top-left bracket */}
                <span
                  aria-hidden
                  className={`absolute top-3 left-3 w-3 h-3 border-t border-l ${accent.text} opacity-80`}
                />
                <span
                  aria-hidden
                  className={`absolute bottom-3 right-3 w-3 h-3 border-b border-r ${accent.text} opacity-80`}
                />

                <div className="p-5 md:p-6">
                  {/* Index + Kicker */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-[10px] tabular text-titanium/40">
                      LAP / 0{idx + 1}
                    </span>
                    <span className={`text-[9px] tracking-[0.3em] uppercase tabular ${accent.text}`}>
                      {p.kicker}
                    </span>
                  </div>

                  {/* Icon tile */}
                  <div
                    className={`relative w-14 h-14 mb-5 flex items-center justify-center border border-titanium/10 bg-carbon/60 ring-1 ${accent.ring} transition-all duration-300 rounded-sm`}
                  >
                    <Icon size={28} strokeWidth={1.7} className={accent.text} />
                    {/* scan-line accent */}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 top-1/2 h-px ${accent.bg} opacity-30`}
                    />
                  </div>

                  {/* Title + tagline */}
                  <h3 className="font-display-condensed text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight text-titanium mb-1">
                    {p.title}
                  </h3>
                  <p className={`text-[11px] tracking-[0.25em] uppercase tabular ${accent.text} opacity-90 mb-4`}>
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-titanium/70 leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Mini-stat footer */}
                  <div className="flex items-end justify-between pt-5 border-t border-titanium/10 -mx-5 md:-mx-6 px-5 md:px-6">
                    <div>
                      <p className={`font-display-condensed text-2xl md:text-3xl font-black tabular ${accent.text}`}>
                        {p.stat}
                      </p>
                      <p className="text-[9px] tracking-[0.25em] uppercase text-titanium/45 tabular mt-0.5">
                        {p.statLabel}
                      </p>
                    </div>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${accent.text} opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                      <span>›</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
