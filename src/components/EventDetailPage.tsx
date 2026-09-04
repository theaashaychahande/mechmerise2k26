"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Flag,
  Users,
  Banknote,
  Trophy,
  Calendar,
  FileText,
  MessageCircle,
  ChevronRight,
  Mail,
  Phone,
  User,
} from "lucide-react";
import type { CompetitionEvent } from "@/lib/competitions";
import EventDetailTabs from "@/components/EventDetailTabs";

const ACCENT: Record<
  CompetitionEvent["accent"],
  {
    text: string;
    bar: string;
    barGradient: string;
    topBg: string;
    badgeBg: string;
    bracket: string;
    underline: string;
    buttonBg: string;
  }
> = {
  "racing-red": {
    text: "text-racing-red",
    bar: "bg-racing-red",
    barGradient: "from-racing-red via-racing-red/70 to-racing-red/20",
    topBg: "bg-racing-red text-white",
    badgeBg: "bg-racing-red/15 border-racing-red/30 text-racing-red",
    bracket: "border-racing-red/60",
    underline: "bg-racing-red",
    buttonBg: "bg-racing-red",
  },
  "circuit-blue": {
    text: "text-circuit-blue",
    bar: "bg-circuit-blue",
    barGradient: "from-circuit-blue via-circuit-blue/70 to-circuit-blue/20",
    topBg: "bg-circuit-blue text-carbon",
    badgeBg: "bg-circuit-blue/15 border-circuit-blue/30 text-circuit-blue",
    bracket: "border-circuit-blue/60",
    underline: "bg-circuit-blue",
    buttonBg: "bg-circuit-blue",
  },
  "pit-amber": {
    text: "text-[#FFB800]",
    bar: "bg-[#FFB800]",
    barGradient: "from-[#FFB800] via-[#FFB800]/70 to-[#FFB800]/20",
    topBg: "bg-[#FFB800] text-carbon",
    badgeBg: "bg-[#FFB800]/15 border-[#FFB800]/30 text-[#FFB800]",
    bracket: "border-[#FFB800]/60",
    underline: "bg-[#FFB800]",
    buttonBg: "bg-[#FFB800]",
  },
  titanium: {
    text: "text-titanium",
    bar: "bg-titanium",
    barGradient: "from-titanium via-titanium/70 to-titanium/20",
    topBg: "bg-titanium text-carbon",
    badgeBg: "bg-titanium/15 border-titanium/30 text-titanium",
    bracket: "border-titanium/60",
    underline: "bg-titanium",
    buttonBg: "bg-titanium",
  },
};

export default function EventDetailPage({ event }: { event: CompetitionEvent }) {
  const a = ACCENT[event.accent];

  return (
    <>
      {/* ───── HERO / HEADER ROW ───── */}
      <section className="relative border-b border-titanium/10 overflow-hidden">
        {/* subtle carbon + accent wash */}
        <div aria-hidden className="absolute inset-0 carbon-texture opacity-40" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(225,6,0,0) 0%, #E10600 15%, #E10600 85%, rgba(225,6,0,0) 100%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 md:py-14">
          {/* Top utility row: back arrow */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/competitions"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-titanium/60 hover:text-white transition-colors throttle-link px-3 py-2"
            >
              <ArrowLeft size={15} />
              All Events
            </Link>
          </div>

          {/* Event title block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`font-display-condensed text-5xl md:text-7xl font-black italic leading-none tracking-tighter ${a.text}`}>
              {event.name}
            </h1>
            <p className="mt-3 text-[11px] tracking-[0.3em] uppercase text-titanium/60 tabular">
              {event.shortTagline}
            </p>
          </motion.div>

          {/* Quick stat chips */}
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              { icon: <Trophy size={14} />, label: "Prize Pool", value: event.prizePool },
              { icon: <Banknote size={14} />, label: "Entry Fee", value: event.fee },
              { icon: <Users size={14} />, label: "Team", value: event.teamSize },
              { icon: <Calendar size={14} />, label: "Date", value: "SEPT 10" },
            ].filter((s) => s.value).map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2.5 px-4 py-2.5 border border-titanium/12 bg-asphalt/50 backdrop-blur-sm"
              >
                <span className={a.text}>{s.icon}</span>
                <div className="leading-none">
                  <div className="text-[8px] tracking-[0.3em] uppercase text-titanium/45 tabular mb-1">
                    {s.label}
                  </div>
                  <div className="font-display-condensed text-lg font-black tabular text-titanium">
                    {s.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TWO-COLUMN: tabs left · hero/actions right ───── */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          {/* LEFT: tabbed text content */}
          <div className="order-2 lg:order-1">
            <EventDetailTabs event={event} />
          </div>

          {/* RIGHT: hero image in HUD frame + stacked actions */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:sticky lg:top-28 space-y-5"
            >
              {/* EVENT LOGO — top slot */}
              <div
                className={`hud-frame border ${a.bracket} p-3 relative text-white`}
                style={{ color: a.bar === "bg-titanium" ? "#E8E8EC" : undefined }}
              >
                <div className="relative flex items-center justify-center aspect-[16/5] overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/events-bg.png')" }} />
                  <div className={`absolute inset-0 ${a.badgeBg}`} />
                  {event.logoUrl ? (
                    <img
                      src={event.logoUrl}
                      alt={`${event.name} logo`}
                      className="relative z-10 max-h-full max-w-[78%] object-contain p-4"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
                      <span className={`font-display-condensed text-3xl md:text-4xl font-black italic uppercase tracking-tight ${a.text}`}>
                        {event.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* EVENT POSTER — full key art below */}
              <div
                className={`hud-frame border ${a.bracket} p-3 relative text-white`}
                style={{ color: a.bar === "bg-titanium" ? "#E8E8EC" : undefined }}
              >
                <div className="relative overflow-hidden w-full">
                  {/* telemetry HUD tag (top-left) */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${a.bar} animate-telemetry-blink`} />
                    <span className="text-[9px] tracking-[0.35em] uppercase text-white/90 tabular">
                      poster · on-board
                    </span>
                  </div>
                  <div
                    aria-hidden
                    className="absolute top-3 right-3 z-20 text-[9px] tracking-[0.2em] uppercase text-white/60 tabular"
                  >
                    cam_01
                  </div>
                  {/* image */}
                  <img
                    src={event.posterUrl ?? event.heroUrl}
                    alt={`${event.name} poster`}
                    className="relative z-10 w-full h-auto object-contain"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-black/30 z-20 pointer-events-none" />
                  {/* corner index */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className={`px-2 py-1 text-[10px] font-black tracking-[0.25em] tabular chevron-pill ${a.topBg}`}>
                      GRID CARD
                    </span>
                  </div>
                </div>
              </div>

              {/* Stacked action buttons */}
              <div className="grid gap-3">
                <a
                  href="#register"
                  className={`${a.buttonBg} ${a.topBg === "bg-titanium text-carbon" ? "text-carbon" : "text-white"} chevron-right py-4 px-6 text-[12px] font-black tracking-[0.3em] uppercase throttle-link flex items-center justify-center gap-2`}
                >
                  <Flag size={15} />
                  Register for {event.name}
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <button className="border border-titanium/20 py-3.5 px-4 text-[10px] font-black tracking-[0.25em] uppercase text-titanium throttle-link flex items-center justify-center gap-2 chevron-left">
                    <FileText size={13} />
                    Rulebook
                  </button>
                  <a
                    href="https://chat.whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-titanium/20 py-3.5 px-4 text-[10px] font-black tracking-[0.25em] uppercase text-titanium throttle-link flex items-center justify-center gap-2 chevron-right"
                  >
                    <MessageCircle size={13} />
                    Community
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── COORDINATOR CONTACT STRIP ───── */}
      {event.coordinators.length > 0 && (
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="border border-titanium/12 bg-asphalt/40">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-titanium/10">
            <span className="text-[10px] tracking-[0.35em] uppercase text-titanium/50 tabular">
              PIT CREW · CONTACTS
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-titanium/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-titanium/10">
            {event.coordinators.map((c, i) => (
              <div key={i} className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 py-4">
                <div className="flex items-center gap-3 min-w-[180px]">
                  <div className={`w-9 h-9 rounded-full ${a.badgeBg} flex items-center justify-center border`}>
                    <User size={16} />
                  </div>
                  <div>
                    <div className="font-display-condensed text-base font-black uppercase tracking-wide text-titanium">
                      {c.name}
                    </div>
                    <div className="text-[9px] tracking-[0.3em] uppercase text-titanium/50 tabular">
                      {c.role}
                    </div>
                  </div>
                </div>
                {c.email && (
                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 text-[11px] text-titanium/70 hover:text-white transition-colors throttle-link"
                >
                  <Mail size={13} className={a.text} />
                  <span className="tabular">{c.email}</span>
                </a>
                )}
                {c.phone && (
                <span className="inline-flex items-center gap-2 text-[11px] text-titanium/70 tabular">
                  <Phone size={13} className={a.text} />
                  {c.phone}
                </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* next-call-to-action strip */}
      <section className="max-w-7xl mx-auto px-6 pt-4 pb-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-titanium/10 bg-carbon/50 p-5">
          <p className="font-display-condensed text-2xl md:text-3xl font-black italic uppercase tracking-tight">
            Ready to <span className={a.text}>compete</span>?
          </p>
          <Link
            href="/competitions"
            className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.3em] uppercase text-white bg-racing-red chevron-left px-6 py-3.5 throttle-link"
          >
            View All Events
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
