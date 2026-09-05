"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Gauge, Users, Trophy, Cpu, Activity, Timer, Fuel } from "lucide-react";

/* ─── Animated Telemetry Counter ─── */
function TelemetryCounter({
  end,
  duration = 1800,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(end * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  const display = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular font-mono">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const METRICS = [
  {
    kicker: "LAP COUNTER",
    label: "Years Running",
    value: 12,
    suffix: "+",
    icon: Timer,
    accent: "racing-red",
    unit: "EDITIONS",
  },
  {
    kicker: "PIT WALL",
    label: "Total Footfall",
    value: 250,
    suffix: "+",
    icon: Users,
    accent: "circuit-blue",
    unit: "ATTENDEES",
  },
  {
    kicker: "PRIZE PURSE",
    label: "Total Prize Pool",
    value: 30,
    suffix: "K+",
    prefix: "₹",
    accent: "pit-amber",
    icon: Trophy,
    unit: "INR AT STAKE",
    displayFactor: 1, // 30 Thousand+
  },
  {
    kicker: "POWER UNIT",
    label: "Main Events",
    value: 7,
    icon: Fuel,
    accent: "titanium",
    unit: "TOTAL EVENTS",
  },
] as const;

const ACCENT = {
  "racing-red": {
    glow: "shadow-[0_0_40px_-6px_rgba(225,6,0,0.5)]",
    text: "text-racing-red",
    border: "border-racing-red/30",
    bar: "bg-racing-red",
    label: "text-racing-red/80",
  },
  "circuit-blue": {
    glow: "shadow-[0_0_40px_-6px_rgba(0,212,255,0.5)]",
    text: "text-circuit-blue",
    border: "border-circuit-blue/30",
    bar: "bg-circuit-blue",
    label: "text-circuit-blue/80",
  },
  "pit-amber": {
    glow: "shadow-[0_0_40px_-6px_rgba(255,184,0,0.5)]",
    text: "text-[#FFB800]",
    border: "border-[#FFB800]/30",
    bar: "bg-[#FFB800]",
    label: "text-[#FFB800]/80",
  },
  titanium: {
    glow: "shadow-[0_0_40px_-6px_rgba(232,232,236,0.35)]",
    text: "text-titanium",
    border: "border-titanium/30",
    bar: "bg-titanium",
    label: "text-titanium/80",
  },
} as const;

export default function TelemetryStats() {
  return (
    <section
      id="telemetry-stats"
      className="relative py-14 md:py-28 overflow-hidden border-y border-titanium/10 bg-asphalt/30"
    >
      <div aria-hidden className="absolute inset-0 carbon-texture opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 checkered-divider-thin" />
      <div className="absolute bottom-0 left-0 right-0 checkered-divider-thin" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Activity size={16} className="text-circuit-blue animate-telemetry-blink" />
            <p className="text-[10px] tracking-[0.4em] uppercase text-circuit-blue tabular">
              TELEMETRY · DASHBOARD · LIVE READOUT
            </p>
            <Activity size={16} className="text-racing-red animate-telemetry-blink" />
          </div>
          <h2 className="font-display-condensed text-4xl md:text-6xl font-black italic tracking-tighter">
            <span className="wordmark-bevel">BY THE NUMBERS</span>
          </h2>
        </motion.div>

        {/* Dashboard frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative hud-frame text-circuit-blue border border-titanium/10 bg-carbon/80 backdrop-blur-sm p-5 md:p-10 overflow-hidden"
        >
          {/* Scan-line overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(0,212,255,0.9) 0px, rgba(0,212,255,0.9) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* Top HUD row */}
          <div className="relative flex items-center justify-between gap-4 flex-wrap mb-8 md:mb-12 pb-5 border-b border-titanium/10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-racing-red animate-telemetry-blink" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-racing-red tabular">
                  REC
                </span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-titanium/50 tabular">
                SESSION · Q1_QUALI · 2K26
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase tabular text-titanium/50">
              <Gauge size={14} className="text-circuit-blue" />
              MECH · SVPCET · NAGPUR
              <Cpu size={14} className="text-racing-red" />
            </div>
          </div>

          {/* Metric Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {METRICS.map((m, idx) => {
              const a = ACCENT[m.accent];
              const Icon = m.icon;
              return (
                <motion.article
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className={`relative p-5 md:p-6 border ${a.border} bg-asphalt/60 backdrop-blur-sm paddock-pass group hover:${a.glow} transition-shadow duration-500`}
                >
                  {/* Progress bar background */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-titanium/10" />
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${60 + idx * 12}%` }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 1, ease: "easeOut" }}
                    className={`absolute bottom-0 left-0 h-0.5 ${a.bar}`}
                  />

                  {/* Top row: icon + kicker */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase tabular ${a.label}`}
                    >
                      <Icon size={13} />
                      {m.kicker}
                    </span>
                    <span className="font-mono text-[9px] tabular text-titanium/30">
                      CH.0{idx + 1}
                    </span>
                  </div>

                  {/* Big number */}
                  <div
                    className={`font-display-condensed text-5xl md:text-6xl font-black tabular leading-none ${a.text} mb-2`}
                  >
                    <TelemetryCounter
                      end={m.value}
                      prefix={"prefix" in m ? (m.prefix as string | undefined) : undefined}
                      suffix={"suffix" in m ? (m.suffix as string | undefined) : undefined}
                      duration={1900 + idx * 150}
                    />
                  </div>

                  {/* Label */}
                  <p className="font-display-condensed text-base md:text-lg font-bold uppercase tracking-wider text-titanium/90 mb-1">
                    {m.label}
                  </p>
                  <p className="text-[9px] tracking-[0.3em] uppercase text-titanium/45 tabular">
                    {m.unit}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
