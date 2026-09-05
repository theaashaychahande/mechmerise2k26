"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Flag, Zap, Trophy } from "lucide-react";

/**
 * Full-width cinematic section divider page (a la Techfest title screens).
 * Huge stylized wordmark on dramatic themed art, with checkered-flag accent strip.
 *
 * Props:
 *   - kicker   · small uppercase line above title (e.g. ROUND 01 · MAIN EVENT)
 *   - title    · the big display word (e.g. COMPETITIONS)
 *   - subCopy  · 1–2 line subheading under title
 *   - prompt   · image prompt for the background themed art
 *   - accent   · racing-red / circuit-blue / pit-amber / titanium
 */
export default function SectionDivider({
  kicker = "ROUND 01 · MAIN EVENT",
  title = "COMPETITIONS",
  subCopy,
  prompt,
  image,
  accent = "racing-red",
}: {
  kicker?: string;
  title?: string;
  subCopy?: string;
  prompt?: string;
  image?: string;
  accent?: "racing-red" | "circuit-blue" | "pit-amber" | "titanium";
}) {
  const { scrollYProgress } = useScroll();
  const parallaxBg = useTransform(scrollYProgress, [0.2, 0.9], [0, 80]);
  const bgFade = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.75]);
  const titleZoom = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.95]);

  const bgImage =
    prompt ??
    "dramatic%20top%20down%20racetrack%20hairpin%20aerial%20shot%20with%20checkered%20curb%20racing%20marks%20moody%20dusk%20lighting%20carbon%20asphalt%20motion%20blur%20no%20logos%20no%20cars%20no%20liveries";

  const accentText =
    accent === "racing-red"
      ? "text-racing-red"
      : accent === "circuit-blue"
      ? "text-circuit-blue"
      : accent === "pit-amber"
      ? "text-[#FFB800]"
      : "text-titanium";

  return (
    <section
      aria-label={`${title} — section divider`}
      className="relative min-h-[88svh] flex items-center justify-center overflow-hidden border-y border-titanium/10"
    >
      {/* Background themed art (generic, no F1 liveries/logos) */}
      <motion.div
        style={{
          y: parallaxBg,
          opacity: bgFade,
          backgroundImage: image
            ? `url(${image})`
            : `url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${bgImage}&image_size=landscape_16_9')`,
        }}
        aria-hidden
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/40 to-carbon" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/60 via-transparent to-carbon/60" />
      <div className="absolute inset-0 carbon-texture opacity-40 mix-blend-overlay" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 120px 30px rgba(0,0,0,0.55), inset 0 -140px 140px 0 rgba(10,10,12,0.9)",
        }}
      />

      {/* HUD Corner brackets frame */}
      <div
        aria-hidden
        className="absolute inset-6 md:inset-14 border border-circuit-blue/20 hud-frame pointer-events-none"
      />

      {/* Racing stripe + checkered strips */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-1 racing-stripe" />
      <div aria-hidden className="absolute bottom-0 left-0 right-0 checkered-divider-thin" />
      <div aria-hidden className="absolute bottom-1 left-0 right-0 h-0.5 racing-stripe" />

      {/* Vertical side accent lines */}
      <div
        aria-hidden
        className="absolute top-0 left-10 md:left-20 w-px h-full bg-gradient-to-b from-racing-red/0 via-racing-red/40 to-racing-red/0"
      />
      <div
        aria-hidden
        className="absolute top-0 right-10 md:right-20 w-px h-full bg-gradient-to-b from-circuit-blue/0 via-circuit-blue/40 to-circuit-blue/0"
      />

      {/* Content */}
      <motion.div
        style={{ scale: titleZoom }}
        className="relative z-10 max-w-7xl mx-auto w-full px-6 text-center"
      >
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-8 flex-wrap"
        >
          <span className="h-px w-14 md:w-24 bg-gradient-to-r from-transparent via-circuit-blue/70 to-circuit-blue" />
          <p className="font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-circuit-blue tabular flex items-center gap-2">
            <Flag size={14} className={accentText} />
            {kicker}
            <Zap size={14} className={accentText} />
          </p>
          <span className="h-px w-14 md:w-24 bg-gradient-to-l from-transparent via-circuit-blue/70 to-circuit-blue" />
        </motion.div>

        {/* The title — huge stylized wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display-condensed text-[13vw] md:text-[12vw] lg:text-[13vw] font-black italic leading-none skew-x-[-8deg] wordmark-bevel text-center"
        >
          {title}
        </motion.h1>

        {/* Accent strip under title */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-6 md:mt-8 max-w-4xl h-0.5 origin-center racing-stripe"
        />

        {/* Sub copy */}
        {(subCopy ?? true) && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-8 md:mt-10 font-display-condensed text-xl md:text-3xl font-bold uppercase tracking-[0.15em] italic text-titanium/85 text-balance max-w-3xl mx-auto leading-relaxed"
          >
            {subCopy ??
              (
                <>
                  7 Main Events · 14 Tracks · 3 Days · One
                  <span className={accentText}> Champion&apos;s Trophy</span>
                </>
              ) as any}
          </motion.p>
        )}

        {/* Trophy + stats chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.85, type: "spring", stiffness: 180 }}
          className="mt-10 md:mt-14 inline-flex items-center gap-4 md:gap-6 px-6 py-3.5 border border-titanium/15 bg-carbon/60 backdrop-blur-sm chevron-both flex-wrap justify-center"
        >
          <Trophy size={18} className="text-[#FFB800]" />
          {[
            ["07", "Events"],
            ["₹ 40K+", "Prize Purse"],
            ["7 Events", "MECH · SEPT 2026"],
          ].map(([v, k]) => (
            <div key={k} className="flex items-center gap-2">
              <span className="font-display-condensed text-xl md:text-2xl font-black tabular text-titanium">
                {v}
              </span>
              <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-circuit-blue tabular">
                {k}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
