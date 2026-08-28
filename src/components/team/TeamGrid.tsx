"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Mail } from "lucide-react";

const FACULTY = [
  {
    name: "[Faculty Coordinator 01]",
    role: "Head of Department",
    department: "Mechanical Engineering",
    email: "[email@svpcet.ac.in]",
  },
  {
    name: "[Faculty Coordinator 02]",
    role: "Faculty Advisor",
    department: "Mechanical Engineering",
    email: "[email@svpcet.ac.in]",
  },
];

const STUDENTS = [
  {
    name: "[Student Coordinator 01]",
    role: "Event Lead",
    year: "Final Year",
  },
  {
    name: "[Student Coordinator 02]",
    role: "Technical Head",
    year: "Final Year",
  },
  {
    name: "[Student Coordinator 03]",
    role: "Logistics Head",
    year: "Third Year",
  },
  {
    name: "[Student Coordinator 04]",
    role: "Marketing & PR",
    year: "Third Year",
  },
  {
    name: "[Student Coordinator 05]",
    role: "Sponsorship Lead",
    year: "Final Year",
  },
  {
    name: "[Student Coordinator 06]",
    role: "Design & Media",
    year: "Third Year",
  },
];

export default function TeamGrid() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {FACULTY.map((f, idx) => (
              <motion.div
                key={idx}
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
                  {/* Avatar placeholder */}
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

                  <div className="mt-4 pt-3 border-t border-titanium/10 flex items-center gap-2">
                    <Mail size={12} className="text-titanium/30" />
                    <span className="text-xs text-titanium/40 tabular">{f.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── STUDENTS ─── */}
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
                COORDINATORS
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm text-titanium/55 leading-relaxed">
              ▣ Team 2K26 is still being finalized. Placeholder cards shown below — final names and roles will be updated soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {STUDENTS.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="group relative border border-titanium/15 bg-asphalt/60 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-circuit-blue/40" />
                <span aria-hidden className="absolute top-3 left-3 w-3 h-3 border-t border-l border-circuit-blue/20" />
                <span aria-hidden className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-circuit-blue/20" />

                <div className="p-5 md:p-6 flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 shrink-0 rounded-full border border-titanium/15 bg-carbon/60 flex items-center justify-center">
                    <span className="font-mono text-[10px] tabular text-titanium/30">0{idx + 1}</span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display-condensed text-lg font-bold uppercase tracking-wide text-titanium truncate">
                      {s.name}
                    </h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-circuit-blue tabular mt-0.5">
                      {s.role}
                    </p>
                    <p className="text-[10px] text-titanium/40 mt-1 tabular">{s.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
