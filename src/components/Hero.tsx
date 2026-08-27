export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-carbon-fiber opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/95 to-carbon" />
      <div className="absolute top-0 left-0 right-0 h-1 racing-stripe" />
      <div className="relative z-10 text-center px-6">
        <p className="font-body text-[11px] tracking-[0.3em] text-circuit-blue uppercase mb-6">
          Dept. of Mechanical Engineering, SVPCET presents
        </p>
        <h1 className="font-display-condensed text-7xl md:text-9xl font-black leading-[0.85] tracking-tight wordmark-bevel italic skew-x-[-6deg]">
          MECHMERISE
          <br />
          <span className="text-racing-red not-italic skew-x-0 tracking-[0.2em] text-3xl md:text-5xl">
            2 K 2 6
          </span>
        </h1>
      </div>
    </section>
  );
}
