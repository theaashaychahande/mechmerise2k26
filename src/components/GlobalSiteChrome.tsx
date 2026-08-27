"use client";

import { useEffect, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Sidebar, { BottomNav } from "@/components/Sidebar";
import SocialRail from "@/components/SocialRail";

/**
 * GlobalSiteChrome
 * ─────────────────
 * Wraps every page with the persistent navigation layer:
 *   • Top Nav Pill (all screens)
 *   • Left Sidebar  (icon + label, ≥ lg only, collapses into mobile drawer)
 *   • Right SocialRail (icon-only, ≥ lg only, collapses into mobile drawer)
 *   • Bottom Nav Bar (5 quick taps, < lg only)
 *
 * Every interactive element uses the `.throttle-link` left-to-right wipe
 * (implemented in globals.css ::before transform).
 * `prefers-reduced-motion` is respected globally via globals.css media query.
 */
export default function GlobalSiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lock body scroll when mobile drawer is open
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Reduce-motion user preference check (client-side only)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setReducedMotion("matches" in e ? e.matches : false);
    };
    handler(mql);
    let cleanupLegacy: (() => void) | null = null;
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
      return () =>
        mql.removeEventListener(
          "change",
          handler as (e: MediaQueryListEvent) => void
        );
    }
    if (typeof (mql as MediaQueryList & { addListener?: (l: () => void) => void }).addListener === "function") {
      const legacyHandler = handler as unknown as () => void;
      (mql as MediaQueryList & { addListener: (l: () => void) => void }).addListener(legacyHandler);
      cleanupLegacy = () =>
        (mql as MediaQueryList & { removeListener: (l: () => void) => void }).removeListener(legacyHandler);
    }
    return () => cleanupLegacy?.();
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Content padding accounts for: top nav + bottom nav (mobile only)
  const contentClasses = useMemo(
    () =>
      [
        "relative z-0",
        // Top nav breathing room
        "pt-32 md:pt-36",
        // Bottom nav breathing room (< lg only)
        "pb-28 lg:pb-10",
        // Side rail gutters on desktop
        "lg:pl-20 xl:pl-28 lg:pr-20 xl:pr-28",
        reducedMotion ? "" : "",
      ].join(" "),
    [reducedMotion]
  );

  return (
    <div className="relative min-h-screen" data-reduced-motion={reducedMotion}>
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[-2] bg-carbon carbon-texture"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[-1] bg-gradient-to-b from-transparent via-carbon/30 to-carbon"
      />

      {/* ─── Chrome ─── */}
      <Navbar onMenuOpen={setDrawerOpen} />
      <Sidebar />
      <SocialRail />

      {/* ─── Page content ─── */}
      <div className={contentClasses}>{children}</div>

      {/* ─── Mobile bottom nav (collapses both rails below lg) ─── */}
      <BottomNav />
    </div>
  );
}
