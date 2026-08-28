"use client";

/**
 * Subtle SVG racetrack "connect the cards" line that runs under the competition grid.
 * Placed absolutely behind the grid so it looks like a formula-style circuit map.
 * Uses viewBox="0 0 1000 1600" and scales to container — works with 3-col 3-row + 1 row layout.
 */
export default function RacetrackConnector() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1000 1600"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 hidden lg:block"
    >
      <defs>
        <linearGradient id="track-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E10600" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="track-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E10600" stopOpacity="0.35" />
        </linearGradient>
        <pattern
          id="checkered-mini"
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="4" height="4" fill="#E10600" opacity="0.6" />
          <rect x="4" y="4" width="4" height="4" fill="#E10600" opacity="0.6" />
        </pattern>
      </defs>

      {/* Outer glow */}
      <path
        d="
          M 60 120
          L 470 120
          Q 500 120 500 150
          L 500 500
          Q 500 530 530 530
          L 940 530
          L 940 920
          Q 940 950 910 950
          L 480 950
          Q 450 950 450 980
          L 450 1260
          Q 450 1290 420 1290
          L 60 1290
          L 60 120 Z
        "
        stroke="url(#track-glow)"
        strokeWidth="22"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "blur(6px)" }}
      />

      {/* Main asphalt track */}
      <path
        d="
          M 60 120
          L 470 120
          Q 500 120 500 150
          L 500 500
          Q 500 530 530 530
          L 940 530
          L 940 920
          Q 940 950 910 950
          L 480 950
          Q 450 950 450 980
          L 450 1260
          Q 450 1290 420 1290
          L 60 1290
          L 60 120 Z
        "
        stroke="#1C1C21"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center colored racing line */}
      <path
        d="
          M 60 120
          L 470 120
          Q 500 120 500 150
          L 500 500
          Q 500 530 530 530
          L 940 530
          L 940 920
          Q 940 950 910 950
          L 480 950
          Q 450 950 450 980
          L 450 1260
          Q 450 1290 420 1290
          L 60 1290
          L 60 120 Z
        "
        stroke="url(#track-stroke)"
        strokeWidth="3"
        fill="none"
        strokeDasharray="18 12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Checkered start/finish stripe near top-left */}
      <rect x="40" y="100" width="40" height="40" fill="url(#checkered-mini)" rx="2" />

      {/* Corner markers (7 apexes for 7 events) */}
      {[
        { x: 270, y: 120, label: "01" }, // EscapeX
        { x: 500, y: 310, label: "02" }, // CAD Clash
        { x: 770, y: 530, label: "03" }, // Race Ready
        { x: 940, y: 730, label: "04" }, // Builder's Lab
        { x: 700, y: 950, label: "05" }, // Endo-Arena
        { x: 450, y: 1120, label: "06" }, // Treasure Hunt
        { x: 230, y: 1290, label: "07" }, // Battle Verse
      ].map((ap) => (
        <g key={ap.label}>
          <circle cx={ap.x} cy={ap.y} r="12" fill="#0A0A0C" stroke="#00D4FF" strokeWidth="1.5" />
          <circle cx={ap.x} cy={ap.y} r="6" fill="#E10600" />
          <text
            x={ap.x}
            y={ap.y - 20}
            textAnchor="middle"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fill="#E8E8EC"
            opacity="0.8"
          >
            {ap.label}
          </text>
        </g>
      ))}

      {/* Direction chevrons on straights */}
      {[
        { x: 260, y: 110, r: 0 },
        { x: 730, y: 520, r: 0 },
        { x: 240, y: 1280, r: 0 },
      ].map((ch, i) => (
        <path
          key={i}
          d="M 0 -6 L 10 0 L 0 6 Z"
          fill="#FFB800"
          transform={`translate(${ch.x}, ${ch.y}) rotate(${ch.r})`}
          opacity="0.85"
        />
      ))}
    </svg>
  );
}
