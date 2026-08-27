"use client";

import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  MessageCircle,
  X,
} from "lucide-react";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram, color: "#E1306C" },
  { label: "X", href: "#", icon: X, color: "#FFFFFF" },
  { label: "LinkedIn", href: "#", icon: Linkedin, color: "#0077B5" },
  { label: "Facebook", href: "#", icon: Facebook, color: "#1877F2" },
  { label: "YouTube", href: "#", icon: Youtube, color: "#FF0000" },
  { label: "WhatsApp", href: "#", icon: MessageCircle, color: "#25D366" },
];

export default function SocialRail() {
  return (
    <aside className="pointer-events-none fixed right-0 top-0 bottom-0 z-40 hidden w-20 lg:flex flex-col items-center justify-center">
      <div className="pointer-events-auto flex flex-col gap-5 rounded-l-xl bg-asphalt/60 border border-titanium/10 py-8 px-3 backdrop-blur-md shadow-inner-f1 chevron-left">
        {socials.map(({ label, href, icon: Icon, color }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative flex items-center justify-center w-10 h-10 rounded-md throttle-link text-titanium/70 hover:text-white transition-colors"
            style={
              {
                ["--hover-color" as string]: color,
              } as React.CSSProperties
            }
          >
            <Icon size={20} strokeWidth={1.8} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
