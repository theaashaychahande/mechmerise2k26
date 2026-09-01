"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { FACULTY, TEAM_LEAD, TEAMS } from "@/lib/team";

export default function TeamGrid() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      {/* Team background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/team-bg.png')" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/30 to-carbon" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-carbon/55 via-transparent to-carbon/55" />
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 space-y-20">
        {/* ─── FACULTY ─── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <GraduationCap size={14} className="text-racing-red" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                TEAM PRINCIPALS · FACULTY ADVISORS
              </p>
            </div>
            <h2 className="font-display-condensed text-4xl md:text-5xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">FACULTY</span>{" "}
              <span className="text-racing-red not-italic text-2xl md:text-3xl tracking-[0.2em]">
                COORDINATORS
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {FACULTY.map((f, idx) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative border border-racing-red/30 bg-asphalt/70 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-racing-red" />
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-racing-red/30" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-racing-red/30" />

                <div className="p-6 md:p-7">
                  <div className="w-16 h-16 mb-4 rounded-full border-2 border-racing-red/30 bg-carbon/60 flex items-center justify-center">
                    <GraduationCap size={24} className="text-racing-red/60" />
                  </div>

                  <h3 className="font-display-condensed text-xl font-black uppercase tracking-wide text-titanium">
                    {f.name}
                  </h3>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-racing-red tabular mt-1">
                    {f.role}
                  </p>
                  <p className="text-xs text-titanium/50 mt-2">{f.department}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── LEAD TEAM ─── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Users size={14} className="text-pit-amber" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                THE GRID LEADERS
              </p>
            </div>
            <h2 className="font-display-condensed text-4xl md:text-5xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">LEAD</span>{" "}
              <span className="text-pit-amber not-italic text-2xl md:text-3xl tracking-[0.2em]">
                TEAM
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
            {TEAM_LEAD.map((s, idx) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="group relative border border-pit-amber/30 bg-asphalt/60 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-pit-amber/60" />
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-pit-amber/30" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-pit-amber/30" />

                <div className="p-5 md:p-6">
                  <h3 className="font-display-condensed text-lg font-bold uppercase tracking-wide text-titanium">
                    {s.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-pit-amber tabular mt-0.5">
                    {s.role}
                  </p>
                  <p className="text-[10px] text-titanium/40 mt-1 tabular">{s.year} · {s.team}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── SUB-TEAMS ─── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Users size={14} className="text-circuit-blue" />
              <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                PIT CREW · STUDENT COORDINATORS
              </p>
            </div>
            <h2 className="font-display-condensed text-4xl md:text-5xl font-black italic leading-none tracking-tighter">
              <span className="wordmark-bevel">STUDENT</span>{" "}
              <span className="text-circuit-blue not-italic text-2xl md:text-3xl tracking-[0.2em]">
                TEAMS
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {TEAMS.map((t, idx) => (
              <motion.div
                key={t.team}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                className="relative border border-titanium/15 bg-asphalt/60 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-circuit-blue/40" />
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-circuit-blue/20" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-circuit-blue/20" />

                <div className="p-5 md:p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue tabular mb-4">
                    {t.team}
                  </p>
                  <div className="space-y-3">
                    {t.members.map((m) => (
                      <div key={m.name} className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-display-condensed text-base font-bold uppercase tracking-wide text-titanium truncate">
                            {m.name}
                          </h3>
                          <p className="text-[9px] text-titanium/40 mt-0.5 tabular">{m.year}</p>
                        </div>
                        <span className="shrink-0 text-[9px] tracking-[0.15em] uppercase text-circuit-blue/80 tabular">
                          {m.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── INSTITUTION ─── */}
        <div className="text-center max-w-3xl mx-auto border border-titanium/15 bg-asphalt/60 backdrop-blur-sm px-6 py-8 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-racing-red tabular mb-3">
            INSTITUTION
          </p>
          <h3 className="font-display-condensed text-xl md:text-2xl font-black uppercase tracking-tight text-titanium">
            St. Vincent Pallotti College of Engineering &amp; Technology
          </h3>
          <p className="text-xs md:text-sm text-titanium/55 mt-3 leading-relaxed">
            Gavasi Manapur, Wardha Road, Nagpur, Maharashtra 441108.
            <span className="block mt-1 text-titanium/40">
              NAAC 'A' grade · Autonomous Institution
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
