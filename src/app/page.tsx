"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import EventCard from "@/components/EventCard";
import EventDetailTabs from "@/components/EventDetailTabs";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Gauge,
  Flag,
  Cpu,
  Trophy,
  Users,
  Zap,
  Circle,
  Check,
  ArrowDown,
  CornerDownLeft,
  Layers3,
  Palette,
  Type,
  Grid3x3,
  Boxes,
} from "lucide-react";

const COLOR_TOKENS = [
  { name: "Carbon Black", hex: "#0A0A0C", cls: "bg-carbon", ring: "ring-titanium/20" },
  { name: "Asphalt Grey", hex: "#1C1C21", cls: "bg-asphalt", ring: "ring-titanium/20" },
  { name: "Racing Red", hex: "#E10600", cls: "bg-racing-red", ring: "ring-racing-red/40" },
  { name: "Titanium Silver", hex: "#E8E8EC", cls: "bg-titanium", ring: "ring-titanium/60", dark: true },
  { name: "Circuit Blue", hex: "#00D4FF", cls: "bg-circuit-blue", ring: "ring-circuit-blue/60", dark: true },
];

export default function DesignSystemPage() {
  const [showLoader, setShowLoader] = useState(true);
  const [lights, setLights] = useState<boolean[]>([false, false, false, false, false]);

  // F1 5-red-lights sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    [0, 1, 2, 3, 4].forEach((i) => {
      timers.push(setTimeout(() => setLights((l) => l.map((v, idx) => (idx === i ? true : v))), 600 + i * 600));
    });
    // all lights out (GO!)
    timers.push(setTimeout(() => setLights([false, false, false, false, false]), 600 + 5 * 600 + 800));
    timers.push(setTimeout(() => setShowLoader(false), 600 + 5 * 600 + 800 + 200));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      {/* ── F1 START LIGHTS LOADER ── */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            key="f1-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-carbon carbon-texture"
          >
            <div className="flex items-center gap-2 mb-10">
              <p className="text-[10px] tracking-[0.4em] uppercase text-titanium/50 tabular animate-telemetry-blink mr-6">
                Formation Lap
              </p>
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`f1-light ${lights[i] ? "on" : ""}`} />
              ))}
            </div>
            <p className="font-display-condensed text-4xl font-black italic wordmark-bevel tracking-tight">
              MECHMERISE <span className="text-racing-red not-italic">2K26</span>
            </p>
            <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-circuit-blue tabular">
              — System Boot · Step 1 / 7 —
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative max-w-7xl mx-auto px-6">
        {/* ── STEP 2 BADGE ── */}
        <section className="mb-16 -mt-14">
          <div className="relative hud-frame text-circuit-blue inline-flex items-center gap-3 px-5 py-3 bg-asphalt/80 border border-titanium/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-racing-red animate-telemetry-blink" />
            <span className="font-display-condensed text-sm font-black italic tracking-wider">
              STEP <span className="text-white">02</span> / NAV · CHROME
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-titanium/60 tabular">
              — Throttle-fill · Mobile Drawer · Bottom Nav —
            </span>
          </div>
        </section>

        {/* ── HERO PREVIEW ── */}
        <section className="relative">
          <Hero />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-titanium/50">
            <span className="text-[10px] tracking-[0.3em] uppercase tabular animate-telemetry-blink">
              Scroll
            </span>
            <div className="w-px h-10 relative overflow-hidden bg-titanium/20">
              <span className="absolute inset-x-0 top-0 h-6 bg-circuit-blue animate-scroll-line" />
            </div>
            <ArrowDown size={14} />
          </div>
        </section>

        {/* ── CHECKERED FLAG DIVIDER ── */}
        <div className="w-full my-20">
          <div className="w-full checkered-divider" />
          <div className="racing-stripe w-full mt-2" />
        </div>

        {/* ── STEP 1 HEADER ── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-titanium/10" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-circuit-blue tabular flex items-center gap-2">
              <Gauge size={14} /> Design System · Step 1 / 7 · Visual Confirmation
            </span>
            <div className="h-px flex-1 bg-titanium/10" />
          </div>
          <h1 className="font-display-condensed text-5xl md:text-7xl font-black italic leading-none tracking-tighter">
            <span className="wordmark-bevel">F1 × MECH</span>
            <br />
            <span className="text-titanium/80 not-italic text-3xl md:text-4xl tracking-widest">
              DESIGN <span className="text-racing-red">LANGUAGE</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-titanium/60 leading-relaxed">
            Every token, texture, and component on this page is reusable across the site.
            If it looks right below, it&apos;ll look right on every page we build.
          </p>
        </section>

        {/* ── PALETTE ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            icon={<Palette size={16} />}
            kicker="01 / Color Tokens"
            title="The 5-Color Palette"
            subtitle="Disciplined, restrained, purposeful. No rainbow — just Carbon, Asphalt, Racing Red, Titanium, and Circuit Blue."
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {COLOR_TOKENS.map((c) => (
              <div
                key={c.hex}
                className={`group relative aspect-[3/4] ${c.cls} border border-titanium/10 overflow-hidden paddock-pass`}
              >
                <div className={`absolute inset-0 ring-1 ${c.ring} pointer-events-none`} />
                <div className="absolute inset-0 bg-carbon-fiber opacity-30" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <Circle size={8} className={c.dark ? "text-carbon" : "text-circuit-blue fill-circuit-blue"} />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className={`font-display-condensed text-lg font-black ${c.dark ? "text-carbon" : "text-titanium"}`}>
                    {c.name}
                  </p>
                  <p className={`text-[10px] tracking-[0.25em] tabular ${c.dark ? "text-carbon/60" : "text-titanium/50"}`}>
                    {c.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TYPOGRAPHY ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            icon={<Type size={16} />}
            kicker="02 / Typography"
            title="Display · Body · Telemetry"
            subtitle="Three typefaces: bold condensed headlines, a clean grotesk for body, and tabular monospaced numerals for telemetry/stats."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* DISPLAY */}
            <div className="hud-frame p-6 bg-asphalt border border-titanium/10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue mb-4 tabular">
                [A] Barlow Condensed · Display
              </p>
              <p className="font-display-condensed text-6xl font-black italic leading-none wordmark-bevel">
                P1<sup className="not-italic text-racing-red text-2xl align-top">ST</sup>
              </p>
              <p className="mt-4 font-display-condensed text-2xl font-bold leading-tight text-titanium/90 uppercase">
                Grid · Quali · Podium
              </p>
              <p className="mt-2 font-display-condensed text-xl font-semibold leading-tight text-titanium/70 uppercase italic">
                The quick brown fox jumps
              </p>
              <p className="mt-3 text-[10px] tracking-[0.25em] text-titanium/40 tabular">
                Aa Bb Cc Dd Ee Ff Gg · 0–9
              </p>
            </div>

            {/* BODY */}
            <div className="hud-frame p-6 bg-asphalt border border-titanium/10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue mb-4 tabular">
                [B] Inter · Body Grotesk
              </p>
              <p className="font-body text-lg font-semibold text-titanium/90 leading-relaxed">
                A clean, modern grotesk for running text, captions, and copy.
              </p>
              <p className="mt-3 font-body text-sm text-titanium/70 leading-relaxed">
                MECHMERISE is the annual technical festival of the Department of Mechanical
                Engineering at St. Vincent Pallotti College of Engineering &amp; Technology,
                Nagpur — celebrating 7+ years of innovation and teamwork.
              </p>
              <p className="mt-3 text-[10px] tracking-[0.25em] text-titanium/40 tabular">
                Regular 400 · Medium 500 · Semibold 600 · Bold 700
              </p>
            </div>

            {/* TELEMETRY */}
            <div className="hud-frame p-6 bg-carbon border border-titanium/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-carbon-fiber opacity-50" />
              <div className="relative">
                <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue mb-4 tabular flex items-center gap-2">
                  <Cpu size={12} /> [C] Telemetry Numerals · Tabular
                </p>
                <div className="space-y-2 font-mono">
                  <TelemetryRow label="LAP TIME" value="01:28.419" accent />
                  <TelemetryRow label="TOP SPEED" value="324.6" unit="KM/H" />
                  <TelemetryRow label="POSITION" value="03" unit="/20" />
                  <TelemetryRow label="TYRE" value="MEDIUM" />
                  <TelemetryRow label="DRS" value="ENABLED" highlight />
                </div>
                <div className="mt-4 flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-racing-red animate-telemetry-blink" />
                  <span className="text-[10px] tracking-[0.25em] text-titanium/40 tabular">
                    LIVE · SIGNAL STRONG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEXTURES & PATTERNS ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            icon={<Grid3x3 size={16} />}
            kicker="03 / Textures & Patterns"
            title="Carbon · Checkered · Stripe"
            subtitle="The reusable Tailwind patterns that define the mechanical-F1 aesthetic."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carbon Fiber */}
            <div className="relative aspect-video carbon-texture border border-titanium/10 overflow-hidden hud-frame p-6 flex items-end">
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <Layers3 size={12} className="text-circuit-blue" />
                <span className="text-[10px] tracking-[0.25em] text-circuit-blue tabular">
                  .carbon-texture
                </span>
              </div>
              <div>
                <p className="font-display-condensed text-2xl font-black text-titanium italic">
                  Carbon Fiber
                </p>
                <p className="text-[11px] tracking-[0.2em] text-titanium/50 uppercase tabular">
                  Diagonal weave · 45°/−45°
                </p>
              </div>
            </div>

            {/* Checkered Flag */}
            <div className="relative aspect-video border border-titanium/10 overflow-hidden hud-frame p-6 flex items-end">
              <div className="absolute inset-0 bg-checkered-flag-sm" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/40 to-transparent" />
              <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                <Flag size={12} className="text-racing-red" />
                <span className="text-[10px] tracking-[0.25em] text-racing-red tabular">
                  .checkered-divider
                </span>
              </div>
              <div className="relative z-10">
                <p className="font-display-condensed text-2xl font-black text-white italic">
                  Checkered Flag
                </p>
                <p className="text-[11px] tracking-[0.2em] text-titanium/80 uppercase tabular">
                  28px conic · divider strip
                </p>
              </div>
            </div>

            {/* Racing Stripe */}
            <div className="relative aspect-video bg-asphalt border border-titanium/10 overflow-hidden hud-frame p-6 flex items-center">
              <div className="absolute inset-0 flex items-center">
                <div className="racing-stripe w-full" style={{ height: 48 }} />
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                <Zap size={12} className="text-racing-red" />
                <span className="text-[10px] tracking-[0.25em] text-circuit-blue tabular">
                  .racing-stripe
                </span>
              </div>
              <div className="relative z-10">
                <p className="font-display-condensed text-2xl font-black text-white italic">
                  Racing Stripe
                </p>
                <p className="text-[11px] tracking-[0.2em] text-titanium/70 uppercase tabular">
                  Red · gap · red · 33/33/33
                </p>
              </div>
            </div>
          </div>

          {/* Full-width checkered strip demo */}
          <div className="mt-12 space-y-1">
            <div className="checkered-divider" />
            <div className="racing-stripe" />
            <div className="checkered-divider-thin" />
          </div>
        </section>

        {/* ── HUD FRAME + CORNER BRACKETS ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            icon={<CornerDownLeft size={16} />}
            kicker="04 / HUD / Telemetry Frame"
            title="Corner-Bracket Frame"
            subtitle="The signature HUD border. Used on every hero image, card media, and highlighted panel across the site."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hud-frame p-10 text-circuit-blue border border-titanium/10 bg-carbon-fiber flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block px-4 py-2 border border-circuit-blue/30">
                  <span className="text-[10px] tracking-[0.3em] uppercase tabular">
                    hud-frame component
                  </span>
                </div>
                <p className="mt-4 font-display-condensed text-5xl font-black italic wordmark-bevel">
                  3:2
                </p>
                <p className="mt-2 text-[11px] tracking-[0.25em] text-titanium/50 uppercase tabular">
                  Top-left + bottom-right brackets
                </p>
              </div>
            </div>
            <div className="hud-frame p-8 text-racing-red border border-titanium/10 bg-asphalt flex items-center justify-center">
              <div className="text-center">
                <p className="font-display-condensed text-4xl font-black italic text-titanium">
                  PADDOCK <span className="text-racing-red">PASS</span>
                </p>
                <p className="mt-2 text-[11px] tracking-[0.25em] text-titanium/50 uppercase tabular">
                  chevron clip-path shapes
                </p>
                <div className="mt-6 flex gap-3 justify-center">
                  <div className="chevron-left bg-racing-red w-28 h-10" />
                  <div className="chevron-pill bg-asphalt border border-titanium/30 w-32 h-10" />
                  <div className="chevron-right bg-circuit-blue w-28 h-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION DIVIDER ── */}
        <div className="my-24 -mx-6 lg:-mx-24">
          <SectionDivider title="COMPETITIONS" eyebrow="Round 01 · Title Screen Preview" />
        </div>

        {/* ── EVENT CARD GRID PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            icon={<Boxes size={16} />}
            kicker="05 / Components Preview"
            title="All 9 Base Components"
            subtitle="Navbar, Sidebar, SocialRail, Hero, SectionDivider, EventCard, EventDetailTabs, Footer, and ContactForm — all scaffolded and rendered below."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard title="EscapeX 2.0" tagline="ESCAPE ROOM · TEAM 2–4" slug="escapex-2-0" />
            <EventCard title="CAD Clash" tagline="3D MODELLING · INDIVIDUAL" slug="cad-clash" sponsorBadge="TITLE" />
            <EventCard title="Race Ready" tagline="RC RACING · TEAM 2" slug="race-ready" prizePool="₹ 25,000" variant="featured" />
            <EventCard title="Builder's Lab" tagline="WORKSHOP · HANDS-ON" slug="builders-lab" sponsorBadge="WORKSHOP" />
            <EventCard title="Endo-Arena" tagline="ROBOWARS · 1V1" slug="endo-arena" prizePool="₹ 40,000" />
            <EventCard title="Treasure Hunt" tagline="CAMPUS · TEAM 3–5" slug="treasure-hunt" />
          </div>
        </section>

        {/* ── EVENT DETAIL TABS PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            kicker="06 / Event Detail Template"
            title="Tabbed Content Panel"
            subtitle="The reusable tab system for About · Structure · Timeline · Rules · FAQs · Doubts on every event page."
          />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-8">
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-titanium/20 text-titanium/70 hover:text-white hover:border-racing-red hover:bg-racing-red/10 transition"
                  aria-label="Back"
                >
                  <ArrowDown size={16} className="-rotate-90" />
                </button>
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                    Event · Id 03
                  </p>
                  <h3 className="font-display-condensed text-4xl font-black italic wordmark-bevel">
                    Race Ready 2K26
                  </h3>
                </div>
              </div>
              <EventDetailTabs />
            </div>

            {/* Right column: HUD frame hero + actions */}
            <div className="lg:col-span-2 space-y-5">
              <div className="hud-frame text-circuit-blue aspect-[4/5] bg-carbon-fiber border border-titanium/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-titanium/20">
                    <Trophy size={42} />
                    <p className="mt-3 text-[11px] tracking-[0.3em] uppercase tabular">
                      Event Hero
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="chevron-right bg-racing-red px-3 py-1 text-[10px] font-bold tracking-widest text-white">
                    PRIZE ₹ 25,000
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 text-[10px] tracking-[0.25em] text-circuit-blue tabular">
                  16:9 · TELEMETRY FRAME
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full chevron-pill bg-racing-red py-3 text-[11px] font-bold tracking-widest text-white hover:bg-racing-red-600 transition-colors throttle-link">
                  REGISTER NOW
                </button>
                <button className="w-full chevron-pill bg-asphalt border border-titanium/20 py-3 text-[11px] font-bold tracking-widest text-titanium hover:text-white hover:border-circuit-blue transition-colors throttle-link throttle-link-blue">
                  DOWNLOAD RULEBOOK PDF
                </button>
                <button className="w-full chevron-pill bg-circuit-blue/10 border border-circuit-blue/30 py-3 text-[11px] font-bold tracking-widest text-circuit-blue hover:bg-circuit-blue/20 transition-colors throttle-link">
                  JOIN OUR DISCORD
                </button>
              </div>

              {/* Coordinator strip */}
              <div className="relative hud-frame text-racing-red p-4 bg-asphalt/60 border border-titanium/10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-titanium/50 mb-2 tabular">
                  Coordinator · Comms Strip
                </p>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="font-display-condensed text-xl font-black text-titanium">
                      [COORDINATOR NAME]
                    </p>
                    <p className="text-[11px] text-titanium/60 tabular">
                      mechmerise2k26@gmail.com
                    </p>
                  </div>
                  <div className="font-mono text-sm text-circuit-blue tabular">
                    +91 — — — — —
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM + FOOTER PREVIEW ── */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <SectionHeader
            kicker="07 / Contact + Footer"
            title="Pit Radio · Footer"
            subtitle="The comms panel styled as a pit-radio transmission, and the site-wide footer with checkered cap."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <div className="space-y-6">
              <div className="hud-frame text-circuit-blue p-6 bg-carbon-fiber border border-titanium/10">
                <div className="flex items-center gap-2 mb-4">
                  <Users size={16} className="text-racing-red" />
                  <p className="text-[10px] tracking-[0.3em] uppercase text-titanium/50 tabular">
                    Mission Pillars · Step 3 Preview
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Innovation", icon: Zap, color: "text-racing-red" },
                    { label: "Creativity", icon: Palette, color: "text-circuit-blue" },
                    { label: "Teamwork", icon: Users, color: "text-titanium" },
                    { label: "Excellence", icon: Trophy, color: "text-yellow-400" },
                  ].map(({ label, icon: Icon, color }) => (
                    <div
                      key={label}
                      className="relative p-4 border border-titanium/10 bg-asphalt/50 overflow-hidden"
                    >
                      <Icon size={22} className={`${color} mb-3`} />
                      <p className="font-display-condensed text-lg font-black text-titanium uppercase">
                        {label}
                      </p>
                      <p className="text-[10px] text-titanium/50 mt-1 leading-relaxed">
                        Short pillar description — one-liner preview.
                      </p>
                      <span className="absolute top-2 right-2 text-[9px] tracking-[0.2em] text-titanium/30 tabular">
                        ▣
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Telemetry */}
              <div className="relative hud-frame p-6 bg-asphalt border border-titanium/10 text-circuit-blue overflow-hidden">
                <div className="absolute inset-0 bg-carbon-fiber opacity-30" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-titanium/50 mb-6 tabular relative">
                  Dashboard Telemetry · Stats Counters
                </p>
                <div className="grid grid-cols-3 gap-4 relative">
                  <StatCounter value="7+" unit="YEARS" label="Legacy" />
                  <StatCounter value="2.5K+" unit="FOOTFALL" label="Participants" accent />
                  <StatCounter value="₹2L+" unit="PRIZE POOL" label="Total At Stake" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STEP COMPLETE BADGE ── */}
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="chevron-both relative flex items-center justify-between gap-6 p-6 md:p-8 bg-gradient-to-r from-asphalt via-racing-red/10 to-asphalt border border-racing-red/30 flex-wrap">
            <div className="absolute inset-0 bg-carbon-fiber opacity-40 pointer-events-none" />
            <div className="relative flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-racing-red flex items-center justify-center shadow-glow-red">
                <Check size={28} className="text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue tabular">
                  Step 1 · Complete
                </p>
                <h3 className="font-display-condensed text-2xl md:text-3xl font-black italic text-white">
                  DESIGN SYSTEM <span className="text-racing-red not-italic">LOCKED IN</span>
                </h3>
              </div>
            </div>
            <div className="relative text-right">
              <p className="text-[11px] tracking-[0.25em] text-titanium/60 uppercase tabular mb-1">
                Ready for
              </p>
              <p className="font-display-condensed text-xl md:text-2xl font-black text-titanium">
                STEP <span className="text-circuit-blue">02</span>
                <span className="text-titanium/40"> / </span>
                Navigation · Chrome
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

/* ── Small Helper Components ── */

function SectionHeader({
  icon,
  kicker,
  title,
  subtitle,
}: {
  icon?: React.ReactNode;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <span className="text-racing-red flex items-center justify-center w-7 h-7 rounded-sm border border-racing-red/30 bg-racing-red/5">
            {icon}
          </span>
        )}
        <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-circuit-blue tabular">
          {kicker}
        </span>
        <div className="ml-2 h-px flex-1 bg-gradient-to-r from-titanium/20 to-transparent max-w-sm" />
      </div>
      <h2 className="font-display-condensed text-4xl md:text-5xl font-black italic tracking-tight leading-tight text-titanium">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm md:text-base text-titanium/55 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function TelemetryRow({
  label,
  value,
  unit,
  accent,
  highlight,
}: {
  label: string;
  value: string;
  unit?: string;
  accent?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-1 border-b border-titanium/5 last:border-none">
      <span className="text-[10px] tracking-[0.2em] text-titanium/50 tabular uppercase">
        {label}
      </span>
      <span
        className={`tabular ${
          highlight
            ? "text-racing-red font-bold animate-telemetry-blink"
            : accent
            ? "text-circuit-blue font-bold"
            : "text-titanium font-semibold"
        }`}
      >
        {value}
        {unit && <span className="text-[9px] ml-1 text-titanium/40">{unit}</span>}
      </span>
    </div>
  );
}

function StatCounter({
  value,
  unit,
  label,
  accent,
}: {
  value: string;
  unit: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="font-mono tabular text-3xl md:text-4xl font-bold leading-none">
        <span className={accent ? "text-racing-red" : "text-circuit-blue"}>
          {value}
        </span>
      </div>
      <p className="mt-1 text-[9px] md:text-[10px] tracking-[0.25em] text-titanium/70 uppercase tabular">
        {unit}
      </p>
      <p className="mt-0.5 text-[10px] text-titanium/50">{label}</p>
    </div>
  );
}
