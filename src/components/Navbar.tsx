"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const CENTER_LINKS = [
  { label: "WORKSHOPS", href: "/workshops", badge: "EARLY BIRD" },
  { label: "COMPETITIONS", href: "/competitions" },
];

export default function Navbar({
  onMenuOpen,
}: {
  onMenuOpen?: (open: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    onMenuOpen?.(next);
  };

  return (
    <nav className="pointer-events-none fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div className="pointer-events-auto relative flex w-full lg:w-auto items-center justify-between gap-2 sm:gap-5 bg-asphalt/80 pl-3 sm:pl-4 pr-3 sm:pr-4 py-2 backdrop-blur-lg border border-titanium/10 chevron-pill shadow-inner-f1">
        {/* ── Logo (top-left) ── */}
        <Link
          href="/"
          className="group flex items-center gap-2 sm:gap-3 throttle-link px-1 sm:px-3 py-1.5 rounded-sm"
          aria-label="MECHMERISE 2K26 — Home"
        >
          {/* Event crest logo */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full bg-carbon/60 border border-titanium/15 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo-removebg-preview.png"
              alt="MECHMERISE 2K26 Crest"
              fill
              sizes="40px"
              className="object-contain p-1 scale-[1.05]"
              priority
            />
          </div>
          {/* Text wordmark (themed) */}
          <div className="hidden md:block flex items-center font-display-condensed font-black italic leading-none tracking-tighter select-none">
            <span className="wordmark-bevel text-2xl">MECH</span>
            <span className="text-racing-red text-2xl">MERI</span>
            <span className="text-titanium text-2xl">SE</span>
            <span className="text-circuit-blue ml-1.5 not-italic text-lg -mt-1 tracking-[0.2em] tabular">
              2·K·26
            </span>
          </div>
          {/* Fallback compact wordmark (sm and below) */}
          <div className="md:hidden flex items-center font-display-condensed text-base sm:text-lg font-black tracking-tighter italic">
            <span className="text-racing-red">M</span>
            <span className="text-titanium">ERCH</span>
            <span className="text-circuit-blue ml-1 not-italic">26</span>
          </div>
        </Link>

        {/* ── Center Links (lg+ only) ── */}
        <div className="hidden lg:flex items-center gap-1 mx-2">
          {CENTER_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-[11px] font-bold tracking-widest text-titanium/85 hover:text-white transition-colors throttle-link overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {l.label}
                {l.badge && (
                  <span className="relative inline-flex items-center gap-1 rounded-sm bg-racing-red/20 px-1.5 py-0.5 text-[9px] font-bold text-racing-red border border-racing-red/40">
                    <span className="w-1 h-1 rounded-full bg-racing-red animate-telemetry-blink" />
                    {l.badge}
                  </span>
                )}
              </span>
              {/* divider between the two links */}
              {i < CENTER_LINKS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-5 w-px bg-titanium/15"
                />
              )}
            </Link>
          ))}
        </div>

        {/* ── Right: Hamburger (mobile + tablet only) ── */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            className="relative flex items-center justify-center w-9 h-9 rounded-md bg-carbon/60 border border-titanium/15 text-titanium/80 hover:text-white hover:border-circuit-blue/60 transition-colors throttle-link throttle-link-blue overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={18} strokeWidth={2.2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={18} strokeWidth={2.2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer backdrop + sheet (inline so it's under the nav pill z-index context) ── */}
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}

/* ───────────── Mobile Hamburger Drawer ───────────── */

const DRAWER_MAIN_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Competitions", href: "/competitions", icon: "events" },
  { label: "Workshops", href: "/workshops", icon: "workshops", badge: "EARLY BIRD" },
  { label: "About Us", href: "/about", icon: "about" },
  { label: "Team", href: "/team", icon: "team" },
  { label: "Contact Us", href: "/contact", icon: "contact" },
];

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-carbon/80 backdrop-blur-sm z-[-1] lg:hidden"
            aria-hidden
          />
          {/* Sheet */}
          <motion.div
            key="drawer-sheet"
            initial={{ y: "-110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed top-[76px] left-3 right-3 lg:hidden z-[60] max-w-md mx-auto origin-top"
          >
            <div className="relative bg-asphalt/95 border border-titanium/15 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] paddock-pass overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 racing-stripe" />
              <div className="px-5 pt-6 pb-4 border-b border-titanium/10">
                <p className="text-[10px] tracking-[0.35em] uppercase text-circuit-blue tabular animate-telemetry-blink">
                  ▣ Nav · Paddock Gate
                </p>
                <h3 className="mt-1 font-display-condensed text-2xl font-black italic wordmark-bevel">
                  SELECT A LAP
                </h3>
              </div>
              <ul className="p-3 space-y-1">
                {DRAWER_MAIN_LINKS.map((l, idx) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                  >
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-md text-titanium/90 throttle-link throttle-link-blue overflow-hidden relative"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <span className="w-7 h-7 rounded-md border border-titanium/20 flex items-center justify-center text-circuit-blue group-hover:border-circuit-blue/50 transition-colors shrink-0">
                          <span className="font-mono text-[11px] tabular font-bold">
                            0{idx + 1}
                          </span>
                        </span>
                        <span className="font-display-condensed text-lg font-bold tracking-wide uppercase">
                          {l.label}
                        </span>
                        {l.badge && (
                          <span className="chevron-right bg-racing-red px-2 py-0.5 text-[9px] font-bold tracking-wider text-white">
                            {l.badge}
                          </span>
                        )}
                      </span>
                      <span className="relative z-10 text-titanium/30 group-hover:text-circuit-blue transition-colors">
                        ›
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="px-5 pt-3 pb-5 border-t border-titanium/10">
                <p className="text-[10px] tracking-[0.3em] uppercase text-titanium/50 tabular mb-3">
                  Pit Radio · Socials
                </p>
                <div className="flex items-center gap-2">
                  {[
                    { l: "IG", href: "#", c: "hover:text-pink-400" },
                    { l: "X", href: "#", c: "hover:text-white" },
                    { l: "IN", href: "#", c: "hover:text-[#0077B5]" },
                    { l: "FB", href: "#", c: "hover:text-[#1877F2]" },
                    { l: "YT", href: "#", c: "hover:text-[#FF0000]" },
                    { l: "WA", href: "#", c: "hover:text-[#25D366]" },
                  ].map((s) => (
                    <Link
                      key={s.l}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.l}
                      className={`flex-1 text-center py-2.5 rounded-md bg-carbon/60 border border-titanium/10 font-display-condensed text-sm font-black text-titanium/70 ${s.c} hover:border-titanium/30 transition-colors`}
                    >
                      {s.l}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-full checkered-divider-thin" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
