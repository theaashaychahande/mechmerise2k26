"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, Users, Calendar } from "lucide-react";

const WORKSHOPS = [
  {
    id: "builders-lab",
    title: "Builder's Lab",
    subtitle: "AI Tools Workshop + Build Challenge",
    description:
      "Day One is a hands-on workshop where students learn to build real software using AI tools, from zero prior experience. Day Two is a live build challenge where students apply what they learned to a given problem statement, with prizes for the strongest builds.",
    date: "FEB 21–22, 2026",
    time: "Day 1: Workshop · Day 2: Build Challenge",
    capacity: "Open",
    fee: "₹ 100 Solo / ₹ 250 Team",
    accent: "titanium",
    tags: ["AI Tools", "Software", "Beginner Friendly"],
    coordinator: { name: "Aashay Chanhade", phone: "7507666700" },
  },
  {
    id: "cad-clash",
    title: "CAD Clash",
    subtitle: "AutoCAD Workshop + Competition",
    description:
      "A two-day technical event featuring an AutoCAD workshop followed by a CAD competition. Participants will learn 1D & 2D AutoCAD and compete in a time-based design challenge. Winners will be judged on accuracy, speed, and performance.",
    date: "FEB 21–22, 2026",
    time: "Day 1: Workshop · Day 2: Competition",
    capacity: "Open",
    fee: "₹ 100 / participant",
    accent: "circuit-blue",
    tags: ["AutoCAD", "Design", "Technical"],
    coordinator: { name: "Vaishnavi Nipane", phone: "7447254497" },
  },
  {
    id: "race-ready",
    title: "Race Ready",
    subtitle: "F1 Racing Simulator Challenge",
    description:
      "An F1 racing simulator challenge where participants experience driving an F1 car virtually. Each participant gets a fixed amount of time or a specific number of laps on a selected F1 circuit. Their fastest valid lap time will be recorded and displayed on the leaderboard.",
    date: "FEB 21–22, 2026",
    time: "Practice + Timed Sessions",
    capacity: "Open",
    fee: "₹ 150 Solo / ₹ 250 Duo",
    accent: "pit-amber",
    tags: ["Racing", "Simulator", "F1"],
    coordinator: { name: "Chaitanya Bhurande", phone: "8010777176" },
  },
];

const ACCENT_MAP = {
  "racing-red": {
    ring: "border-racing-red/40",
    text: "text-racing-red",
    bg: "bg-racing-red/10",
    bar: "bg-racing-red",
    hover: "hover:border-racing-red/70",
  },
  "circuit-blue": {
    ring: "border-circuit-blue/40",
    text: "text-circuit-blue",
    bg: "bg-circuit-blue/10",
    bar: "bg-circuit-blue",
    hover: "hover:border-circuit-blue/70",
  },
  "pit-amber": {
    ring: "border-[#FFB800]/40",
    text: "text-[#FFB800]",
    bg: "bg-[#FFB800]/10",
    bar: "bg-[#FFB800]",
    hover: "hover:border-[#FFB800]/70",
  },
  titanium: {
    ring: "border-titanium/30",
    text: "text-titanium",
    bg: "bg-titanium/10",
    bar: "bg-titanium",
    hover: "hover:border-titanium/60",
  },
} as const;

export default function WorkshopsList() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Workshops background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/workshops-bg.png')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/30 to-carbon" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-carbon/55" />
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Workshop cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {WORKSHOPS.map((ws, idx) => {
            const a = ACCENT_MAP[ws.accent as keyof typeof ACCENT_MAP];
            return (
              <motion.article
                key={ws.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`group relative border ${a.ring} ${a.hover} bg-asphalt/70 backdrop-blur-sm overflow-hidden transition-colors duration-300`}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${a.bar}`} />

                {/* HUD brackets */}
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-titanium/20" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-titanium/20" />

                <div className="p-6 md:p-7">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Wrench size={14} className={a.text} />
                        <span className="text-[9px] tracking-[0.3em] uppercase text-titanium/40 tabular">
                          WORKSHOP / 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-display-condensed text-2xl md:text-3xl font-black uppercase tracking-tight text-titanium">
                        {ws.title}
                      </h3>
                      <p className={`text-[11px] tracking-[0.2em] uppercase ${a.text} tabular mt-1`}>
                        {ws.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-titanium/65 leading-relaxed mb-5">
                    {ws.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {ws.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-[9px] tracking-[0.15em] uppercase font-bold border ${a.ring} ${a.bg} ${a.text} tabular`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: Calendar, label: "Date", value: ws.date },
                      { icon: Clock, label: "Time", value: ws.time },
                      { icon: Users, label: "Capacity", value: ws.capacity },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center gap-2 px-3 py-2 border border-titanium/10 bg-carbon/50">
                        <m.icon size={12} className="text-titanium/40" />
                        <div>
                          <p className="text-[8px] tracking-[0.2em] uppercase text-titanium/40 tabular">{m.label}</p>
                          <p className="text-xs text-titanium/80 tabular font-semibold">{m.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Fee + Coordinator */}
                  <div className="flex items-center justify-between pt-4 border-t border-titanium/10">
                    <div>
                      <span className="font-display-condensed text-xl font-black text-titanium tabular">
                        {ws.fee}
                      </span>
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular mt-0.5">
                        per participant
                      </p>
                    </div>
                    {ws.coordinator && (
                    <div className="text-right">
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular">Coordinator</p>
                      <p className="text-xs text-titanium/80 tabular font-semibold">{ws.coordinator.name}</p>
                      <p className="text-[10px] text-titanium/50 tabular">{ws.coordinator.phone}</p>
                    </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center text-[11px] tracking-[0.2em] uppercase text-titanium/40 tabular"
        >
          ▣ Workshop details are tentative. Final schedules will be updated once confirmed by coordinators.
        </motion.p>
      </div>
    </section>
  );
}
