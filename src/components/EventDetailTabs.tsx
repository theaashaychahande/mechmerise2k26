"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabId = "about" | "structure" | "timeline" | "rules" | "faqs" | "doubts";

const TABS: { id: TabId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "structure", label: "Structure" },
  { id: "timeline", label: "Timeline" },
  { id: "rules", label: "Rules" },
  { id: "faqs", label: "FAQs" },
  { id: "doubts", label: "Doubts" },
];

export default function EventDetailTabs() {
  const [active, setActive] = useState<TabId>("about");

  return (
    <div className="w-full">
      <div className="relative flex flex-wrap gap-1 border-b border-titanium/10 mb-8 p-1 bg-carbon/50 rounded-sm">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`relative z-10 px-4 py-2 text-[11px] font-bold tracking-widest uppercase transition-colors throttle-link ${
              active === t.id
                ? "text-white"
                : "text-titanium/50 hover:text-titanium"
            }`}
          >
            {t.label}
            {active === t.id && (
              <motion.span
                layoutId="event-tab-underline"
                className="absolute left-2 right-2 -bottom-[9px] h-0.5 bg-racing-red"
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-titanium/80 font-body text-sm leading-relaxed"
          >
            <p className="text-circuit-blue text-[11px] tracking-[0.25em] uppercase mb-4 tabular animate-telemetry-blink">
              [{TABS.find((t) => t.id === active)?.label.toUpperCase()}_PANEL]
            </p>
            <p className="italic text-titanium/50">
              Content for the `{active}` tab will be populated in Step 5.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
