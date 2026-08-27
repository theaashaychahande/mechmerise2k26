"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy, ArrowRight, PenLine } from "lucide-react";

interface EventCardProps {
  slug?: string;
  title: string;
  tagline?: string;
  sponsorBadge?: string;
  prizePool?: string;
  imageUrl?: string;
  variant?: "default" | "featured";
}

export default function EventCard({
  slug = "#",
  title,
  tagline = "— EVENT TAGLINE —",
  sponsorBadge = "PARTNER",
  prizePool = "₹ PRIZE_POOL",
  imageUrl,
  variant = "default",
}: EventCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group relative paddock-pass bg-asphalt border border-titanium/10 overflow-hidden shadow-inner-f1"
    >
      <div className="absolute top-3 left-3 z-20">
        <span className="chevron-right bg-racing-red px-3 py-1 text-[10px] font-bold tracking-widest text-white">
          {sponsorBadge}
        </span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden bg-carbon-fiber">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-titanium/20 text-xs tracking-[0.3em] uppercase">
              Event Key Art
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/30 to-transparent" />
      </div>

      <div className="relative p-5">
        <h3 className="font-display-condensed text-3xl font-black tracking-tight text-titanium uppercase leading-tight mb-1">
          {title}
        </h3>
        <p className="text-[10px] tracking-[0.25em] text-circuit-blue/80 uppercase mb-5 tabular">
          {tagline}
        </p>

        <div className="flex gap-2 mb-4">
          <Link
            href={`/events/${slug}`}
            className="flex-1 chevron-pill bg-titanium/10 border border-titanium/20 px-4 py-2 text-[11px] font-bold tracking-widest text-titanium throttle-link throttle-link-blue flex items-center justify-center gap-2 hover:text-white transition-colors"
          >
            <ArrowRight size={14} /> EXPLORE
          </Link>
          <Link
            href={`/events/${slug}#register`}
            className="flex-1 chevron-pill bg-racing-red px-4 py-2 text-[11px] font-bold tracking-widest text-white throttle-link flex items-center justify-center gap-2 hover:bg-racing-red-600 transition-colors"
          >
            <PenLine size={14} /> REGISTER
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-titanium/10 -mx-5 px-5 pt-4 mt-4">
          <div className="flex items-center gap-2">
            <Trophy size={14} className="text-circuit-blue" />
            <span className="text-[10px] tracking-[0.25em] text-titanium/60 uppercase tabular">
              Prize Pool
            </span>
          </div>
          <span className="font-display-condensed text-xl font-bold text-circuit-blue tabular">
            {prizePool}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
