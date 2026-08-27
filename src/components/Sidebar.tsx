"use client";

import Link from "next/link";
import { Home, CalendarDays, Mail, Info } from "lucide-react";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Events", href: "/competitions", icon: CalendarDays },
  { label: "Contact Us", href: "/contact", icon: Mail },
  { label: "About Us", href: "/about", icon: Info },
];

export default function Sidebar() {
  return (
    <aside className="pointer-events-none fixed left-0 top-0 bottom-0 z-40 hidden w-20 lg:flex flex-col items-center justify-center">
      <div className="pointer-events-auto flex flex-col gap-6 rounded-r-xl bg-asphalt/60 border border-titanium/10 py-8 px-3 backdrop-blur-md shadow-inner-f1 chevron-right">
        {items.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="group relative flex flex-col items-center gap-1.5 px-2 py-3 rounded-md throttle-link throttle-link-blue text-titanium/70 hover:text-white transition-colors"
          >
            <Icon size={22} strokeWidth={1.8} />
            <span className="text-[9px] font-bold tracking-widest uppercase">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
