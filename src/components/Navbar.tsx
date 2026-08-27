import Link from "next/link";

const links = [
  { label: "ACCOMMODATION", href: "/accommodation" },
  { label: "WORKSHOPS", href: "/workshops", badge: "EARLY BIRD" },
  { label: "COMPETITIONS", href: "/competitions" },
  { label: "IGNITION", href: "/ignition" },
];

export default function Navbar() {
  return (
    <nav className="pointer-events-none fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-none bg-asphalt/70 px-5 py-2 backdrop-blur-md border border-titanium/10 chevron-pill shadow-inner-f1">
        <Link
          href="/"
          className="flex items-center gap-2 font-display-condensed text-xl font-black tracking-widest text-titanium throttle-link px-3 py-1"
        >
          <span className="text-racing-red">M</span>
          <span>ECH</span>
          <span className="text-circuit-blue">26</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-3 py-2 text-[11px] font-bold tracking-widest text-titanium/80 hover:text-white transition-colors throttle-link"
            >
              <span className="relative z-10 flex items-center gap-2">
                {l.label}
                {l.badge && (
                  <span className="rounded-sm bg-racing-red/20 px-1.5 py-0.5 text-[9px] text-racing-red border border-racing-red/40">
                    {l.badge}
                  </span>
                )}
              </span>
            </Link>
          ))}
        </div>

        <button className="chevron-right bg-racing-red px-5 py-2 text-[11px] font-bold tracking-widest text-white hover:bg-racing-red-600 transition-colors throttle-link throttle-link-blue relative overflow-hidden">
          <span className="relative z-10">SIGN IN</span>
        </button>
      </div>
    </nav>
  );
}
