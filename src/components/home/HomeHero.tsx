"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CalendarDays, Tag } from "lucide-react";

/* ───────────────── F1 5-Red-Lights Pre-Loader ───────────────── */

export function F1StartLights() {
  const [lights, setLights] = useState<boolean[]>([false, false, false, false, false]);
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    [0, 1, 2, 3, 4].forEach((i) => {
      timers.push(
        setTimeout(
          () => setLights((l) => l.map((v, idx) => (idx === i ? true : v))),
          600 + i * 550
        )
      );
    });
    timers.push(
      setTimeout(
        () => setLights([false, false, false, false, false]),
        600 + 5 * 550 + 700
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);
  return (
    <div
      className="flex items-center gap-3 md:gap-4 mb-12 md:mb-16 scale-75 sm:scale-100"
      style={{ transformOrigin: "center" }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className={`f1-light ${lights[i] ? "on" : ""}`} />
      ))}
    </div>
  );
}

/* ───────────────── HOME HERO ───────────────── */

export default function HomeHero() {
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 0.25], [0, -40]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  return (
    <section
      id="home-hero"
      className="relative min-h-[100svh] -mt-36 md:-mt-40 flex items-center justify-center overflow-hidden"
    >
      {/* ─────── Cinematic Background Layers ─────── */}
      <div className="absolute inset-0 z-0">
        {/* Generic racing-adjacent key art (original, no real F1 logos/liveries) */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage: "url('/images/home-hero.png')",
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/70 via-carbon/45 to-carbon" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/60 via-transparent to-carbon/60" />
        <div className="absolute inset-0 carbon-texture opacity-25 mix-blend-overlay" />
        {/* Vignette */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            boxShadow:
              "inset 0 0 160px 40px rgba(0,0,0,0.7), inset 0 -100px 100px 0 rgba(10,10,12,0.9)",
          }}
        />
      </div>

      {/* ─────── HUD Corner Brackets Frame ─────── */}
      <div
        aria-hidden
        className="absolute inset-6 md:inset-10 border border-circuit-blue/20 hud-frame pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-14 md:top-16 text-[10px] tracking-[0.4em] uppercase text-circuit-blue/70 tabular animate-telemetry-blink"
      >
        ▣  on-board · camera · main  ▣
      </div>

      {/* ─────── Racing Stripe Accents ─────── */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-1 racing-stripe" />
      <div
        aria-hidden
        className="absolute top-0 left-10 md:left-16 w-px h-full bg-gradient-to-b from-racing-red/0 via-racing-red/40 to-racing-red/0"
      />
      <div
        aria-hidden
        className="absolute top-0 right-10 md:right-16 w-px h-full bg-gradient-to-b from-circuit-blue/0 via-circuit-blue/40 to-circuit-blue/0"
      />

      {/* ─────── Main Hero Copy ─────── */}
      <motion.div
        style={{ y: heroParallax, opacity: fadeOut }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center"
      >
        <F1StartLights />

        {/* Presenting line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8 flex-wrap"
        >
          <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-racing-red/60" />
          <p className="font-body text-[11px] md:text-xs tracking-[0.35em] uppercase text-circuit-blue tabular flex items-center gap-2">
            Dept. of Mechanical Engineering · SVPCET
            <span className="text-racing-red">presents</span>
          </p>
          <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-racing-red/60" />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Foreground logo wordmark */}
          <div className="relative flex justify-center">
            <Image
              src="/text_logo-removebg-preview.png"
              alt="MECHMERISE 2K26"
              width={857}
              height={291}
              priority
              className="w-[88vw] max-w-[820px] h-auto skew-x-[-7deg]"
            />
          </div>

          {/* 2K26 chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            className="mt-4 md:mt-6 inline-flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-full px-5 md:px-6 py-3 border border-titanium/15 bg-carbon/50 backdrop-blur-sm chevron-both"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-telemetry-blink" />
            <span className="font-display-condensed text-2xl md:text-4xl font-black tracking-[0.2em] text-racing-red tabular">
              2 K 2 6
            </span>
            <div className="hidden sm:block h-6 w-px bg-titanium/20" />
            <span className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-circuit-blue tabular">
              <CalendarDays size={14} />
              EDITION · 08
            </span>
            <span className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-titanium/70 tabular">
              <Tag size={14} />
              FEB · 2026
            </span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="mt-10 md:mt-12 font-display-condensed text-xl md:text-3xl font-bold tracking-[0.15em] uppercase italic text-titanium/85 text-balance max-w-3xl mx-auto"
        >
          Ignite the Machine · <span className="text-circuit-blue">Engineer the Future</span>
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10 flex flex-col items-center gap-2 text-titanium/60"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase tabular animate-telemetry-blink">
            Scroll
          </span>
          <div className="w-px h-10 md:h-12 relative overflow-hidden bg-titanium/20">
            <span className="absolute inset-x-0 top-0 h-6 bg-circuit-blue animate-scroll-line" />
          </div>
          <ArrowDown size={14} className="text-circuit-blue" />
        </motion.div>
      </motion.div>

      {/* Bottom checkered strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="checkered-divider-thin" />
        <div className="racing-stripe h-0.5" />
      </div>
    </section>
  );
}
