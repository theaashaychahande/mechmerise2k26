"use client";

import { motion } from "framer-motion";
import { Cpu, Palette, Users, Trophy, Gauge, Timer, BookOpen, Target, Zap } from "lucide-react";

const PILLARS = [
  {
    title: "Innovation",
    description:
      "Redefining the mechanical status quo with projects and prototypes that leap beyond the textbook.",
    icon: Cpu,
    accent: "racing-red",
  },
  {
    title: "Creativity",
    description:
      "From CAD screens to workshop floors — where raw engineering meets bold, unexpected ideas.",
    icon: Palette,
    accent: "circuit-blue",
  },
  {
    title: "Teamwork",
    description:
      "Pit-crew precision meets cohort spirit. Collaborate, build, compete, cross the finish line together.",
    icon: Users,
    accent: "titanium",
  },
  {
    title: "Excellence",
    description:
      "7+ years of legacy raising the bar every edition. Precision engineering. Uncompromising execution.",
    icon: Trophy,
    accent: "pit-amber",
  },
] as const;

const ACCENT_MAP = {
  "racing-red": {
    ring: "ring-racing-red/40 hover:ring-racing-red/80",
    text: "text-racing-red",
    bg: "bg-racing-red/10",
  },
  "circuit-blue": {
    ring: "ring-circuit-blue/40 hover:ring-circuit-blue/80",
    text: "text-circuit-blue",
    bg: "bg-circuit-blue/10",
  },
  titanium: {
    ring: "ring-titanium/30 hover:ring-titanium/60",
    text: "text-titanium",
    bg: "bg-titanium/10",
  },
  "pit-amber": {
    ring: "ring-[#FFB800]/40 hover:ring-[#FFB800]/80",
    text: "text-[#FFB800]",
    bg: "bg-[#FFB800]/10",
  },
} as const;

export default function AboutContent() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/events-bg.png')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/30 to-carbon" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-carbon/55" />
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20 md:space-y-28">
        {/* ─── DEPARTMENT INTRO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative hud-frame p-8 md:p-12 border border-titanium/10 bg-asphalt/60 backdrop-blur overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-racing-red/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-circuit-blue/10 blur-3xl" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={14} className="text-circuit-blue" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                  FORMATION LAP · DEPARTMENT
                </span>
              </div>
              <h2 className="font-display-condensed text-4xl md:text-5xl font-black italic leading-tight tracking-tighter wordmark-bevel">
                DEPT. OF MECHANICAL ENGINEERING
              </h2>
              <div className="mt-4 h-0.5 max-w-xs racing-stripe" />
            </div>

            <div className="md:col-span-7 md:pl-8 md:border-l border-titanium/10 space-y-5">
              <p className="text-titanium/75 text-base md:text-lg leading-relaxed">
                St. Vincent Pallotti College of Engineering and Technology (SVPCET),
                Nagpur, has been a beacon of engineering education since its establishment.
                The Department of Mechanical Engineering stands at the forefront — combining
                rigorous academics with hands-on innovation.
              </p>
              <p className="text-titanium/65 text-sm md:text-base leading-relaxed">
                Our faculty and students work across domains — from thermodynamics and
                manufacturing to robotics, CAD/CAM, and sustainable design. MECHMERISE
                is the department&apos;s flagship technical festival, born from this culture of
                building and competing.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { icon: Target, label: "Est.", value: "2019" },
                  { icon: Users, label: "Students", value: "500+" },
                  { icon: Zap, label: "Editions", value: "08" },
                ].map((s, i) => (
                  <div key={s.label} className="relative p-3 border border-titanium/10 bg-carbon/40">
                    <s.icon size={14} className="text-circuit-blue mb-2" />
                    <p className="font-display-condensed text-2xl font-black tabular text-titanium">{s.value}</p>
                    <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/50 tabular mt-0.5">{s.label}</p>
                    <span className="absolute top-2 right-2 text-[8px] tabular text-titanium/25">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── MISSION PILLARS ─── */}
        <div>
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
            <h2 className="font-display-condensed text-4xl md:text-6xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">BUILT ON</span>{" "}
              <span className="text-racing-red not-italic text-2xl md:text-4xl tracking-[0.2em]">
                4 PILLARS
              </span>
            </h2>
          </motion.div>

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
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group relative paddock-pass bg-asphalt/70 border border-titanium/10 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${accent.bg}`} />
                  <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-titanium/20" />
                  <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-titanium/20" />

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between mb-5">
                      <span className="font-mono text-[10px] tabular text-titanium/40">
                        LAP / 0{idx + 1}
                      </span>
                      <span className={`w-12 h-12 flex items-center justify-center border border-titanium/10 bg-carbon/60 ring-1 ${accent.ring} rounded-sm`}>
                        <Icon size={24} strokeWidth={1.7} className={accent.text} />
                      </span>
                    </div>

                    <h3 className="font-display-condensed text-2xl font-black uppercase tracking-tight text-titanium mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-titanium/65 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ─── LEGACY TIMELINE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Timer size={14} className="text-racing-red" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                RACE HISTORY · EDITION TIMELINE
              </p>
            </div>
            <h2 className="font-display-condensed text-4xl md:text-6xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">7+</span>{" "}
              <span className="text-racing-red not-italic text-2xl md:text-4xl tracking-[0.2em]">
                EDITIONS STRONG
              </span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div aria-hidden className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-racing-red/0 via-racing-red/40 to-racing-red/0" />

            {[
              { year: "2019", edition: "01", note: "The inaugural race — 200 participants, 4 events." },
              { year: "2020", edition: "02", note: "Virtual edition during the pandemic — 500+ online attendees." },
              { year: "2021", edition: "03", note: "Hybrid format with 8 events across 2 days." },
              { year: "2022", edition: "04", note: "Return to full in-person. 800+ footfall, 10 events." },
              { year: "2023", edition: "05", note: "Cross-college participation. 1200+ attendees." },
              { year: "2024", edition: "06", note: "2000+ participants. Prize pool crossed ₹1.5L." },
              { year: "2025", edition: "07", note: "Flagship edition — 2500+ attendees, 14 tracks, 7 main events." },
              { year: "2026", edition: "08", note: "The grid reloads. Bigger. Faster. More competitive.", current: true },
            ].map((e, idx) => (
              <motion.div
                key={e.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className={`relative flex items-start gap-4 mb-6 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } md:text-${idx % 2 === 0 ? "right" : "left"}`}
              >
                <div className="flex-1 pl-10 md:pl-0">
                  <div className={`inline-block ${idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <span className="font-display-condensed text-3xl md:text-4xl font-black tabular text-titanium/80">
                      {e.year}
                    </span>
                    <span className={`ml-2 text-[9px] tracking-[0.2em] uppercase tabular ${e.current ? "text-racing-red" : "text-titanium/40"}`}>
                      ED. {e.edition}
                    </span>
                    <p className={`text-sm mt-1 leading-relaxed ${e.current ? "text-titanium/80" : "text-titanium/55"}`}>
                      {e.note}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-3 h-3 rounded-full border-2 border-titanium/30 bg-carbon z-10">
                  {e.current && (
                    <span className="absolute inset-0 rounded-full bg-racing-red animate-telemetry-blink" />
                  )}
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
