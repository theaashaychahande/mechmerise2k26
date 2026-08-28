"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MessageCircle,
  X,
} from "lucide-react";

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram, ring: "#E1306C" },
  { label: "X", href: "#", Icon: X, ring: "#FFFFFF" },
  { label: "LinkedIn", href: "#", Icon: Linkedin, ring: "#0077B5" },
  { label: "Facebook", href: "#", Icon: Facebook, ring: "#1877F2" },
  { label: "YouTube", href: "#", Icon: Youtube, ring: "#FF0000" },
  { label: "WhatsApp", href: "#", Icon: MessageCircle, ring: "#25D366" },
];

export default function SocialRail() {
  return (
    <aside className="pointer-events-none fixed right-0 top-0 bottom-0 z-40 hidden w-24 xl:w-28 lg:flex flex-col items-center justify-center pr-3">
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex flex-col gap-3.5 rounded-l-2xl bg-asphalt/65 border border-r-0 border-titanium/10 py-7 px-2.5 backdrop-blur-lg shadow-inner-f1 chevron-left relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 racing-stripe" />
        {/* corner brackets */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-racing-red/40" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-circuit-blue/40" />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-titanium/15 to-transparent mb-2 mt-1" />

        {SOCIALS.map(({ label, href, Icon, ring }, idx) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex items-center justify-center w-10 h-10 mx-auto rounded-md throttle-link text-titanium/70 hover:text-white transition-colors overflow-hidden"
            style={
              {
                ["--social-ring" as string]: ring,
              } as React.CSSProperties
            }
          >
            {/* index */}
            <span className="absolute top-0.5 right-0.5 text-[7px] font-mono tabular text-titanium/25 group-hover:text-titanium/60 transition-colors">
              0{idx + 1}
            </span>
            {/* ring on hover */}
            <span
              aria-hidden
              className="absolute inset-0 rounded-md border border-titanium/10 group-hover:border-[var(--social-ring)] group-hover:shadow-[0_0_12px_-2px_var(--social-ring)] transition-all duration-300"
            />
            <Icon
              size={18}
              strokeWidth={1.8}
              className="relative z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </Link>
        ))}

        {/* live pulse */}
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-racing-red animate-telemetry-blink" />
          <span className="text-[8px] tracking-[0.2em] uppercase text-titanium/50 tabular">
            LIVE
          </span>
        </div>
      </motion.div>
    </aside>
  );
}
