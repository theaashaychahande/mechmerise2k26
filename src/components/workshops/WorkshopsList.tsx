"use client";

import { motion } from "framer-motion";
import { Wrench, Clock, Users, ArrowRight, Sparkles, Calendar } from "lucide-react";

const WORKSHOPS = [
  {
    id: "builders-lab",
    title: "Builder's Lab",
    subtitle: "Day 1 — Fabrication Fundamentals",
    description:
      "Get your hands dirty. From raw material to working prototype — learn sheet metal work, welding basics, and rapid prototyping in the college workshop.",
    date: "FEB 21, 2026",
    time: "10:00 AM – 4:00 PM",
    capacity: "40 seats",
    fee: "₹ 200",
    earlyBird: true,
    earlyBirdFee: "₹ 150",
    accent: "racing-red",
    tags: ["Hands-on", "Fabrication", "Beginner Friendly"],
  },
  {
    id: "cad-mastery",
    title: "CAD Mastery",
    subtitle: "SolidWorks + FEA Basics",
    description:
      "From sketch to simulation. Master parametric modelling, assemblies, and introductory finite element analysis — skills that transfer directly to the competition grid.",
    date: "FEB 21, 2026",
    time: "10:00 AM – 1:00 PM",
    capacity: "30 seats",
    fee: "₹ 150",
    earlyBird: true,
    earlyBirdFee: "₹ 100",
    accent: "circuit-blue",
    tags: ["Software", "CAD", "Simulation"],
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
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/80 to-carbon" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/70 via-transparent to-carbon/70" />
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Early bird banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="relative mb-14 md:mb-20 p-5 md:p-6 border border-racing-red/30 bg-racing-red/5 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 racing-stripe" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-racing-red animate-telemetry-blink" />
              <span className="text-[10px] tracking-[0.35em] uppercase text-racing-red tabular font-bold">
                EARLY BIRD ACTIVE
              </span>
            </div>
            <p className="text-sm text-titanium/70 leading-relaxed">
              Spots are limited. Lock in reduced fees on select workshops before the grid closes. First come, first served.
            </p>
          </div>
        </motion.div>

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

                    {/* Early bird badge */}
                    {ws.earlyBird && (
                      <span className="shrink-0 chevron-right bg-racing-red px-3 py-1.5 text-[9px] font-bold tracking-wider text-white flex items-center gap-1.5">
                        <Sparkles size={10} />
                        EARLY BIRD
                      </span>
                    )}
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

                  {/* Fee + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-titanium/10">
                    <div>
                      {ws.earlyBird ? (
                        <div className="flex items-center gap-2">
                          <span className="font-display-condensed text-xl font-black text-titanium/40 line-through tabular">
                            {ws.fee}
                          </span>
                          <span className="font-display-condensed text-xl font-black text-racing-red tabular">
                            {ws.earlyBirdFee}
                          </span>
                        </div>
                      ) : (
                        <span className="font-display-condensed text-xl font-black text-titanium tabular">
                          {ws.fee}
                        </span>
                      )}
                      <p className="text-[9px] tracking-[0.2em] uppercase text-titanium/40 tabular mt-0.5">
                        per participant
                      </p>
                    </div>
                    <button className="group/btn flex items-center gap-2 px-4 py-2.5 bg-carbon border border-titanium/20 text-[10px] font-bold tracking-widest uppercase text-titanium/80 hover:text-white hover:border-titanium/40 transition-colors throttle-link overflow-hidden">
                      <span className="relative z-10">REGISTER</span>
                      <ArrowRight size={12} className="relative z-10 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
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
