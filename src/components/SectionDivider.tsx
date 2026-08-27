interface SectionDividerProps {
  title: string;
  eyebrow?: string;
}

export default function SectionDivider({ title, eyebrow }: SectionDividerProps) {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-asphalt">
      <div className="absolute inset-0 bg-carbon-fiber opacity-40" />
      <div className="w-full checkered-divider absolute top-0" />
      <div className="w-full checkered-divider absolute bottom-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="font-body text-[11px] tracking-[0.4em] text-circuit-blue uppercase mb-6 animate-telemetry-blink tabular">
            — {eyebrow} —
          </p>
        )}
        <h2 className="font-display-condensed text-6xl md:text-8xl font-black leading-none tracking-tighter italic skew-x-[-4deg]">
          <span className="wordmark-bevel">{title}</span>
        </h2>
        <div className="mt-10 mx-auto w-48 racing-stripe" />
      </div>
    </section>
  );
}
