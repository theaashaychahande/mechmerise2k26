"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, Banknote, Flag } from "lucide-react";
import type { CompetitionEvent } from "@/lib/competitions";

const ACCENT = {
  "racing-red": {
    bar: "bg-racing-red",
    barGradient: "from-racing-red via-racing-red/70 to-racing-red/20",
    glow: "shadow-[0_0_60px_-10px_rgba(225,6,0,0.55)]",
    text: "text-racing-red",
    border: "border-racing-red/30",
    frameBorder: "border-racing-red/40",
    topBg: "bg-racing-red text-white",
    bracket: "border-racing-red/60",
    badgeBg: "bg-racing-red/15 border-racing-red/30 text-racing-red",
    prizeBg: "bg-racing-red/10 border-t-racing-red/40",
    prizeText: "text-racing-red",
  },
  "circuit-blue": {
    bar: "bg-circuit-blue",
    barGradient: "from-circuit-blue via-circuit-blue/70 to-circuit-blue/20",
    glow: "shadow-[0_0_60px_-10px_rgba(0,212,255,0.55)]",
    text: "text-circuit-blue",
    border: "border-circuit-blue/30",
    frameBorder: "border-circuit-blue/40",
    topBg: "bg-circuit-blue text-carbon",
    bracket: "border-circuit-blue/60",
    badgeBg: "bg-circuit-blue/15 border-circuit-blue/30 text-circuit-blue",
    prizeBg: "bg-circuit-blue/10 border-t-circuit-blue/40",
    prizeText: "text-circuit-blue",
  },
  "pit-amber": {
    bar: "bg-[#FFB800]",
    barGradient: "from-[#FFB800] via-[#FFB800]/70 to-[#FFB800]/20",
    glow: "shadow-[0_0_60px_-10px_rgba(255,184,0,0.55)]",
    text: "text-[#FFB800]",
    border: "border-[#FFB800]/30",
    frameBorder: "border-[#FFB800]/40",
    topBg: "bg-[#FFB800] text-carbon",
    bracket: "border-[#FFB800]/60",
    badgeBg: "bg-[#FFB800]/15 border-[#FFB800]/30 text-[#FFB800]",
    prizeBg: "bg-[#FFB800]/10 border-t-[#FFB800]/40",
    prizeText: "text-[#FFB800]",
  },
  titanium: {
    bar: "bg-titanium",
    barGradient: "from-titanium via-titanium/70 to-titanium/20",
    glow: "shadow-[0_0_60px_-10px_rgba(232,232,236,0.45)]",
    text: "text-titanium",
    border: "border-titanium/30",
    frameBorder: "border-titanium/40",
    topBg: "bg-titanium text-carbon",
    bracket: "border-titanium/60",
    badgeBg: "bg-titanium/15 border-titanium/30 text-titanium",
    prizeBg: "bg-titanium/10 border-t-titanium/40",
    prizeText: "text-titanium",
  },
} as const;

/**
 * Magnetic / tilt hover paddock-pass event card.
 * Driven by pointer tracking on the card — rotateX/Y follow the cursor.
 */
export default function EventCard({
  event,
  index,
}: {
  event: CompetitionEvent;
  index: number;
}) {
  const a = ACCENT[event.accent];
  const ref = useRef<HTMLDivElement>(null);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    setRotY((px - 0.5) * 10);   // -5deg .. 5deg
    setRotX((0.5 - py) * 8);    // -4deg .. 4deg
    setShine({ x: px * 100, y: py * 100 });
  };

  const reset = () => {
    setRotX(0);
    setRotY(0);
    setShine({ x: 50, y: 50 });
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformStyle: "preserve-3d",
        perspective: 900,
      }}
      className={`group relative paddock-pass bg-asphalt/80 border ${a.border} backdrop-blur-sm overflow-hidden hover:${a.glow} transition-shadow duration-500`}
    >
      {/* Top accent bar (full) */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${a.barGradient}`} />

      {/* PADDOCK-PASS HEAD: key art + partner badge top-left */}
      <div className="relative overflow-hidden">
        {/* HUD Brackets */}
        <span
          aria-hidden
          className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 ${a.bracket} z-20`}
        />
        <span
          aria-hidden
          className={`absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 ${a.bracket} z-20`}
        />
        <span
          aria-hidden
          className={`absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 ${a.bracket} z-20`}
        />
        <span
          aria-hidden
          className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 ${a.bracket} z-20`}
        />

        {/* Index chip (top-right overlay) */}
        <div className="absolute top-4 right-4 z-30">
          <div className={`px-2.5 py-1 text-[10px] font-display-condensed font-black tracking-[0.25em] tabular chevron-pill ${a.topBg}`}>
            GRID · 0{index + 1}
          </div>
        </div>

        {/* Key art image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-carbon">
          <motion.div
            style={{
              backgroundImage: `url(${event.posterUrl ?? event.heroUrl})`,
              scale: 1.05,
            }}
            className="absolute inset-0 bg-cover bg-[center_65%]"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Gradient fade to card body */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-asphalt" />
          {/* Magnetic shine overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.35), transparent 55%)`,
            }}
          />
        </div>
      </div>

      {/* PADDOCK-PASS BODY */}
      <div className="p-5 md:p-6 relative">
        {/* Metadata row: team size + fee */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase tabular ${a.text}`}
          >
            <Users size={12} /> {event.teamSize ?? "Team size TBC"}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase tabular ${a.text}`}
          >
            <Banknote size={12} /> {event.fee ?? "Fee TBC"}
          </span>
        </div>

        {/* Event name + tagline */}
        <h3
          className={`font-display-condensed text-3xl md:text-4xl font-black uppercase italic leading-tight tracking-tight ${a.text} mb-1`}
          style={{ transform: "translateZ(20px)" }}
        >
          {event.name}
        </h3>
        <p className="text-[10px] tracking-[0.3em] uppercase tabular text-titanium/60 mb-4">
          {event.shortTagline}
        </p>

        {/* One-liner description */}
        <p className="text-sm text-titanium/75 leading-relaxed mb-6 line-clamp-3">
          {event.oneLiner}
        </p>

        {/* EXPLORE + REGISTER throttle-fill buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Link
            href={`/events/${event.slug}`}
            className="relative chevron-right bg-asphalt border ${a.frameBorder} py-3 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase ${a.text} throttle-link overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE
              <ArrowUpRight size={13} />
            </span>
          </Link>
          <a
            href="#register"
            className="relative chevron-left bg-racing-red py-3 text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-white throttle-link overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Flag size={13} />
              REGISTER
            </span>
          </a>
        </div>
      </div>

      {/* PRIZE POOL BANNER STRIP (bottom) */}
      {event.prizePool && (
      <div className={`${a.prizeBg} border-t ${a.frameBorder} px-5 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${a.bar} animate-telemetry-blink`} />
          <span className="text-[9px] tracking-[0.3em] uppercase text-titanium/65 tabular">
            PRIZE POOL · PURSE
          </span>
        </div>
        <span className={`font-display-condensed text-xl md:text-2xl font-black tabular ${a.prizeText}`}>
          {event.prizePool}
        </span>
      </div>
      )}
    </motion.article>
  );
}
