"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { FACULTY, TEAM_LEAD, TEAMS, type StudentMember } from "@/lib/team";

type Accent = "racing-red" | "circuit-blue" | "pit-amber";

const PHOTO_RING: Record<Accent, string> = {
  "racing-red":
    "border-racing-red/40 group-hover:border-racing-red group-hover:shadow-[0_0_30px_-5px_rgba(255,45,45,0.5)]",
  "circuit-blue":
    "border-circuit-blue/40 group-hover:border-circuit-blue group-hover:shadow-[0_0_30px_-5px_rgba(0,140,255,0.5)]",
  "pit-amber":
    "border-pit-amber/40 group-hover:border-pit-amber group-hover:shadow-[0_0_30px_-5px_rgba(255,170,0,0.5)]",
};

const CARD_BORDER: Record<"circuit-blue" | "pit-amber", string> = {
  "circuit-blue": "border-circuit-blue/25 bg-asphalt/60 hover:bg-asphalt/90",
  "pit-amber": "border-pit-amber/25 bg-asphalt/60 hover:bg-asphalt/90",
};

const CARD_STRIPE: Record<"circuit-blue" | "pit-amber", string> = {
  "circuit-blue": "bg-circuit-blue/10 group-hover:bg-circuit-blue/20",
  "pit-amber": "bg-pit-amber/10 group-hover:bg-pit-amber/20",
};

const CARD_TOPBAR: Record<"circuit-blue" | "pit-amber", string> = {
  "circuit-blue": "bg-circuit-blue/50",
  "pit-amber": "bg-pit-amber/50",
};

const ROLE_COLOR: Record<"circuit-blue" | "pit-amber", string> = {
  "circuit-blue": "text-circuit-blue",
  "pit-amber": "text-pit-amber",
};

function initialsOf(name: string) {
  return name
    .replace(/^dr\.\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

function TeamPhoto({ src, name, accent }: { src: string; name: string; accent: Accent }) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative w-24 h-32 shrink-0 overflow-hidden border bg-carbon/80 transition-all duration-300 ${PHOTO_RING[accent]}`}
    >
      <span aria-hidden className="absolute top-2 left-2 w-4 h-4 border-t border-l border-current" />
      <span aria-hidden className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-current" />

      {error ? (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-display-condensed text-2xl font-black italic text-titanium/40">
            {initialsOf(name)}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setError(true)}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      )}
    </div>
  );
}

function StudentCard({ member, accent }: { member: StudentMember; accent: "circuit-blue" | "pit-amber" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`group relative flex items-center gap-4 border backdrop-blur-sm overflow-hidden transition-colors duration-300 ${CARD_BORDER[accent]} ${CARD_STRIPE[accent]} ${CARD_TOPBAR[accent]}`}
    >
      <div
        aria-hidden
        className={`absolute -left-10 -top-10 w-32 h-32 rotate-45 transition-colors duration-300 ${CARD_STRIPE[accent]}`}
      />

      <TeamPhoto src={member.photo} name={member.name} accent={accent} />

      <div className="min-w-0 pr-4">
        <h3 className="font-display-condensed text-lg md:text-xl font-bold uppercase tracking-wide text-titanium truncate">
          {member.name}
        </h3>
        <p className={`text-[10px] tracking-[0.2em] uppercase tabular mt-0.5 ${ROLE_COLOR[accent]}`}>
          {member.role}
        </p>
        <p className="text-[10px] text-titanium/40 mt-1 tabular">{member.year}</p>
      </div>
    </motion.div>
  );
}

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

      {/* photo naming hint */}
      <p className="relative z-10 text-center text-[10px] tracking-[0.2em] uppercase text-titanium/25 pt-8 px-6">
        ▣ Add passport-size photos as <span className="text-titanium/40">/images/team/&lt;name&gt;.jpg</span>
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-8 space-y-20">
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
                className="group relative border border-racing-red/30 bg-asphalt/70 hover:bg-asphalt/90 backdrop-blur-sm overflow-hidden transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-racing-red" />
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-racing-red/30" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-racing-red/30" />

                <div className="p-6 flex items-start gap-4">
                  <TeamPhoto src={f.photo} name={f.name} accent="racing-red" />

                  <div className="min-w-0 pt-1">
                    <h3 className="font-display-condensed text-lg font-black uppercase tracking-wide text-titanium">
                      {f.name}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-racing-red tabular mt-1">
                      {f.role}
                    </p>
                    <p className="text-[10px] text-titanium/50 mt-2">{f.department}</p>
                  </div>
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
            {TEAM_LEAD.map((s) => (
              <StudentCard key={s.name} member={s} accent="pit-amber" />
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
                  <div className="space-y-4">
                    {t.members.map((m) => (
                      <StudentCard key={m.name} member={m} accent="circuit-blue" />
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
