"use client";

import { useState } from "react";
import { Send, Radio, User, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="relative hud-frame text-titanium/80 p-8 bg-asphalt/80 border border-titanium/10"
    >
      <div className="absolute top-3 left-12 flex items-center gap-2">
        <Radio size={14} className="text-racing-red animate-telemetry-blink" />
        <span className="text-[10px] tracking-[0.3em] uppercase text-circuit-blue tabular">
          Pit Radio · Transmit
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <label className="block">
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-titanium/50 mb-2 tabular">
            <User size={12} /> Callsign
          </span>
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full bg-carbon border border-titanium/15 px-4 py-3 text-sm text-titanium focus:outline-none focus:border-circuit-blue focus:ring-1 focus:ring-circuit-blue/30 transition"
          />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-titanium/50 mb-2 tabular">
            <Mail size={12} /> Freq / Email
          </span>
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="w-full bg-carbon border border-titanium/15 px-4 py-3 text-sm text-titanium focus:outline-none focus:border-circuit-blue focus:ring-1 focus:ring-circuit-blue/30 transition"
          />
        </label>
      </div>

      <label className="block mt-4">
        <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-titanium/50 mb-2 tabular">
          <MessageSquare size={12} /> Transmission
        </span>
        <textarea
          required
          rows={5}
          placeholder="Over to you — tell us what's on your mind."
          className="w-full bg-carbon border border-titanium/15 px-4 py-3 text-sm text-titanium focus:outline-none focus:border-circuit-blue focus:ring-1 focus:ring-circuit-blue/30 transition resize-none"
        />
      </label>

      <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[10px] tracking-[0.25em] uppercase text-titanium/40 tabular">
          Signal: Secure · AES-256
        </p>
        <button
          type="submit"
          className="chevron-right bg-racing-red px-6 py-3 text-[11px] font-bold tracking-widest text-white hover:bg-racing-red-600 transition-colors throttle-link flex items-center gap-2"
        >
          {submitted ? "TRANSMITTED ✓" : "TRANSMIT"}
          <Send size={14} />
        </button>
      </div>
    </form>
  );
}
