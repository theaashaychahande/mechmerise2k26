import Link from "next/link";
import { Mail, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-titanium/10 bg-asphalt/40 mt-24">
      <div className="w-full checkered-divider-thin" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display-condensed text-3xl font-black italic tracking-tight wordmark-bevel mb-4">
              MECHMERISE <span className="text-racing-red not-italic">26</span>
            </div>
            <p className="text-sm text-titanium/60 leading-relaxed max-w-xs">
              Annual technical festival of the Department of Mechanical
              Engineering, St. Vincent Pallotti College of Engineering and
              Technology, Nagpur.
            </p>
          </div>
// 
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-circuit-blue mb-4 tabular">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-titanium/70">
              {["Competitions", "Workshops", "Ignition", "Accommodation"].map(
                (l) => (
                  <li key={l}>
                    <Link
                      href={`/${l.toLowerCase()}`}
                      className="hover:text-white transition-colors throttle-link"
                    >
                      {l}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase text-circuit-blue mb-4 tabular">
              Comms
            </h4>
            <ul className="space-y-3 text-sm text-titanium/70">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-racing-red shrink-0" />
                <span>mechmerise2k26@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-racing-red shrink-0" />
                <span>
                  SVPCET, Wardha Road, Gavsi-Manapur, Nagpur, MH – 441108
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram
                  size={16}
                  className="mt-0.5 text-racing-red shrink-0"
                />
                <span>@mechmerise_2k26</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-titanium/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-titanium/40 tabular">
            © 2K26 MECHMERISE · SVPCET NAGPUR
          </p>
          <p className="text-[11px] tracking-[0.2em] uppercase text-titanium/40 tabular">
            BUILT BY THE MECH 2K26 TEAM · [LAP 01/07]
          </p>
        </div>
      </div>
    </footer>
  );
}
