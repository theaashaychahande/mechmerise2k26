"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, HelpCircle, MessageSquareText, Wrench, CalendarDays, LayoutList, Info, type LucideIcon } from "lucide-react";
import type { CompetitionEvent } from "@/lib/competitions";

type TabId = "about" | "structure" | "timeline" | "rules" | "faqs" | "doubts";

const TABS: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "about", label: "About", icon: Info },
  { id: "structure", label: "Structure", icon: LayoutList },
  { id: "timeline", label: "Timeline", icon: CalendarDays },
  { id: "rules", label: "Rules", icon: Wrench },
  { id: "faqs", label: "FAQs", icon: HelpCircle },
  { id: "doubts", label: "Doubts", icon: MessageSquareText },
];

const ACCENT_TEXT: Record<CompetitionEvent["accent"], string> = {
  "racing-red": "text-racing-red",
  "circuit-blue": "text-circuit-blue",
  "pit-amber": "text-[#FFB800]",
  titanium: "text-titanium",
};

export default function EventDetailTabs({ event }: { event: CompetitionEvent }) {
  const [active, setActive] = useState<TabId>("about");
  const accentText = ACCENT_TEXT[event.accent];

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div className="relative flex flex-wrap gap-1 border-b border-titanium/10 p-1 bg-carbon/50 rounded-sm mb-8">
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              aria-current={active === t.id ? "page" : undefined}
              className={`relative z-10 px-3 py-2 text-[11px] font-bold tracking-widest uppercase transition-colors throttle-link flex items-center gap-1.5 ${
                active === t.id ? "text-white" : "text-titanium/50 hover:text-titanium"
              }`}
            >
              <Icon size={12} className={active === t.id ? accentText : undefined} />
              {t.label}
              {active === t.id && (
                <motion.span
                  layoutId="event-tab-underline"
                  className={`absolute left-2 right-2 -bottom-[9px] h-0.5 ${accentText === "text-[#FFB800]" ? "bg-[#FFB800]" : accentText === "text-circuit-blue" ? "bg-circuit-blue" : accentText === "text-racing-red" ? "bg-racing-red" : "bg-titanium"}`}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="min-h-[360px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-titanium/80 font-body text-sm leading-relaxed"
          >
            <p className={`${accentText} text-[11px] tracking-[0.25em] uppercase mb-5 tabular animate-telemetry-blink`}>
              [{TABS.find((t) => t.id === active)?.label.toUpperCase()}_PANEL]
            </p>

            {/* ABOUT */}
            {active === "about" && (
              <p className="text-[15px] leading-relaxed text-titanium/80">{event.about}</p>
            )}

            {/* STRUCTURE */}
            {active === "structure" && (
              <ol className="space-y-4">
                {event.structure.map((s, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex gap-4 border-l-2 border-titanium/10 pl-4 hover:border-current"
                  >
                    <span className={`font-display-condensed text-lg font-black tabular ${accentText} shrink-0`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-titanium/80">{s}</span>
                  </motion.li>
                ))}
              </ol>
            )}

            {/* TIMELINE */}
            {active === "timeline" && (
              <div className="space-y-6">
                {event.timeline.map((day) => (
                  <div key={day.day} className="relative pl-6 border-l border-titanium/15">
                    <span className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rotate-45 ${accentText === "text-[#FFB800]" ? "bg-[#FFB800]" : accentText === "text-circuit-blue" ? "bg-circuit-blue" : accentText === "text-racing-red" ? "bg-racing-red" : "bg-titanium"}`} />
                    <div className="font-display-condensed text-lg font-black uppercase tracking-wide text-titanium mb-3">
                      {day.day}
                    </div>
                    <ul className="space-y-1.5 text-titanium/75">
                      {day.items.map((item, i) => (
                        <li key={i} className="flex items-baseline gap-2">
                          <span className={accentText}>▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* RULES */}
            {active === "rules" && (
              <ul className="space-y-3">
                {event.rules.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${accentText}`} />
                    <span>{r}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* FAQS */}
            {active === "faqs" && (
              <div className="space-y-4">
                {event.faqs.map((f, i) => (
                  <div key={i} className="border border-titanium/10 bg-asphalt/40 p-4">
                    <div className="flex gap-2 font-semibold text-titanium mb-1.5">
                      <span className={accentText}>Q{i + 1}.</span>
                      {f.q}
                    </div>
                    <p className="text-titanium/70 pl-7">{f.a}</p>
                  </div>
                ))}
              </div>
            )}

            {/* DOUBTS (contact / ask a question) */}
            {active === "doubts" && (
              <div className="border border-titanium/10 bg-asphalt/40 p-5">
                <p className="text-titanium/80 mb-4">
                  Got a question that&apos;s not covered? Raise it with the organizing crew
                  directly — or drop a DM on{" "}
                  <span className={`font-semibold ${accentText}`}>@mechmerise_2k26</span>.
                </p>
                <a
                  href={`mailto:mechmerise2k26@gmail.com?subject=${encodeURIComponent(
                    `${event.name} — Question`
                  )}`}
                  className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.3em] uppercase text-white bg-racing-red chevron-left px-5 py-3 throttle-link"
                >
                  <MessageSquareText size={13} />
                  ASK A QUESTION
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
