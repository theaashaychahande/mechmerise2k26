"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, CalendarDays, Mail, Info, Wrench, Users, MessageSquare } from "lucide-react";

const ITEMS = [
  { label: "Home", href: "/", icon: Home, short: "Home" },
  { label: "Events", href: "/competitions", icon: CalendarDays, short: "Events" },
  { label: "Workshops", href: "/workshops", icon: Wrench, short: "Shops" },
  { label: "Team", href: "/team", icon: Users, short: "Team" },
  { label: "Contact", href: "/contact", icon: Mail, short: "Mail" },
  { label: "About", href: "/about", icon: Info, short: "About" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="pointer-events-none fixed left-0 top-0 bottom-0 z-40 hidden w-24 xl:w-28 lg:flex flex-col items-center justify-center pl-3">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex flex-col gap-3 rounded-r-2xl bg-asphalt/65 border border-l-0 border-titanium/10 py-7 px-2.5 backdrop-blur-lg shadow-inner-f1 chevron-right relative overflow-hidden"
      >
        {/* top accent stripe */}
        <div className="absolute top-0 left-0 right-0 h-0.5 racing-stripe" />
        {/* corner bracket */}
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-circuit-blue/40" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-racing-red/40" />

        {/* top label */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-titanium/15 to-transparent mb-2 mt-1" />

        {ITEMS.map(({ label, href, icon: Icon }, idx) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              data-active={isActive}
              className="group relative flex flex-col items-center gap-1 px-2 py-3 rounded-md throttle-link throttle-link-blue text-titanium/70 hover:text-white transition-colors overflow-hidden data-[active=true]:text-white"
            >
              {/* active bar */}
              <span
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-racing-red rounded-r-full transition-all duration-300"
                style={{
                  opacity: isActive ? 1 : 0,
                  height: isActive ? 24 : 0,
                }}
              />
              <Icon
                size={22}
                strokeWidth={isActive ? 2.2 : 1.8}
                className="relative z-10"
              />
              <span className="relative z-10 text-[9px] font-bold tracking-widest uppercase leading-none">
                {label}
              </span>
              {/* index tag */}
              <span className="text-[8px] tabular font-mono text-titanium/30 relative z-10">
                0{idx + 1}
              </span>
            </Link>
          );
        })}
      </motion.div>
    </aside>
  );
}

/* ───────────── Bottom Nav (mobile) ───────────── */

const BOTTOM_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Events", href: "/competitions", icon: CalendarDays },
  { label: "Workshops", href: "/workshops", icon: Wrench },
  { label: "Team", href: "/team", icon: Users },
  { label: "Contact", href: "/contact", icon: Mail },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="lg:hidden pointer-events-none fixed bottom-0 left-0 right-0 z-50 px-2 pb-2 pt-1">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 24 }}
        className="pointer-events-auto relative mx-auto max-w-md bg-asphalt/85 border border-titanium/10 chevron-pill backdrop-blur-xl shadow-[0_-8px_30px_-6px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 racing-stripe" />
        <ul className="flex items-stretch justify-around px-1 py-2">
          {BOTTOM_ITEMS.map(({ label, href, icon: Icon }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  aria-label={label}
                  data-active={active}
                  className="relative flex flex-col items-center justify-center gap-1 py-2 throttle-link overflow-hidden rounded-md text-titanium/70 hover:text-white transition-colors data-[active=true]:text-circuit-blue"
                >
                  <Icon
                    size={20}
                    strokeWidth={active ? 2.2 : 1.8}
                    className="relative z-10"
                  />
                  <span className="relative z-10 text-[9px] font-bold tracking-widest uppercase">
                    {label}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="bottom-nav-dot"
                      className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-racing-red"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </nav>
  );
}
